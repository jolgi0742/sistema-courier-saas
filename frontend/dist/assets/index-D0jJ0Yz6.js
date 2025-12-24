function Oy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ly(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bp={exports:{}},la={},Sp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hs=Symbol.for("react.element"),Dy=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),zy=Symbol.for("react.strict_mode"),Uy=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),By=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Hy=Symbol.for("react.memo"),Wy=Symbol.for("react.lazy"),hh=Symbol.iterator;function Ky(e){return e===null||typeof e!="object"?null:(e=hh&&e[hh]||e["@@iterator"],typeof e=="function"?e:null)}var Tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Cp={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=Cp,this.updater=n||Tp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Np(){}Np.prototype=Jr.prototype;function Jc(e,t,n){this.props=e,this.context=t,this.refs=Cp,this.updater=n||Tp}var Yc=Jc.prototype=new Np;Yc.constructor=Jc;Ip(Yc,Jr.prototype);Yc.isPureReactComponent=!0;var fh=Array.isArray,jp=Object.prototype.hasOwnProperty,Qc={current:null},Pp={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)jp.call(t,r)&&!Pp.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),f=0;f<c;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:hs,type:e,key:s,ref:a,props:i,_owner:Qc.current}}function Gy(e,t){return{$$typeof:hs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zc(e){return typeof e=="object"&&e!==null&&e.$$typeof===hs}function qy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ph=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qy(""+e.key):t.toString(36)}function so(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case hs:case Dy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+nl(a,0):r,fh(i)?(n="",e!=null&&(n=e.replace(ph,"$&/")+"/"),so(i,t,n,"",function(f){return f})):i!=null&&(Zc(i)&&(i=Gy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",fh(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+nl(s,c);a+=so(s,t,n,d,i)}else if(d=Ky(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+nl(s,c++),a+=so(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Us(e,t,n){if(e==null)return e;var r=[],i=0;return so(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Xy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},oo={transition:null},Jy={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:oo,ReactCurrentOwner:Qc};function Ap(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:Us,forEach:function(e,t,n){Us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Us(e,function(){t++}),t},toArray:function(e){return Us(e,function(t){return t})||[]},only:function(e){if(!Zc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Jr;K.Fragment=My;K.Profiler=Uy;K.PureComponent=Jc;K.StrictMode=zy;K.Suspense=Vy;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;K.act=Ap;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ip({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Qc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)jp.call(t,d)&&!Pp.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var f=0;f<d;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:hs,type:e.type,key:i,ref:s,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:$y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fy,_context:e},e.Consumer=e};K.createElement=Rp;K.createFactory=function(e){var t=Rp.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:By,render:e}};K.isValidElement=Zc;K.lazy=function(e){return{$$typeof:Wy,_payload:{_status:-1,_result:e},_init:Xy}};K.memo=function(e,t){return{$$typeof:Hy,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=oo.transition;oo.transition={};try{e()}finally{oo.transition=t}};K.unstable_act=Ap;K.useCallback=function(e,t){return ze.current.useCallback(e,t)};K.useContext=function(e){return ze.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};K.useEffect=function(e,t){return ze.current.useEffect(e,t)};K.useId=function(){return ze.current.useId()};K.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return ze.current.useMemo(e,t)};K.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};K.useRef=function(e){return ze.current.useRef(e)};K.useState=function(e){return ze.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return ze.current.useTransition()};K.version="18.3.1";Sp.exports=K;var L=Sp.exports;const Op=Ly(L),Yy=Oy({__proto__:null,default:Op},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy=L,Zy=Symbol.for("react.element"),e0=Symbol.for("react.fragment"),t0=Object.prototype.hasOwnProperty,n0=Qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r0={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)t0.call(t,r)&&!r0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zy,type:e,key:s,ref:a,props:i,_owner:n0.current}}la.Fragment=e0;la.jsx=Lp;la.jsxs=Lp;bp.exports=la;var l=bp.exports,Ul={},Dp={exports:{}},Qe={},Mp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var W=F.length;F.push(V);e:for(;0<W;){var se=W-1>>>1,Q=F[se];if(0<i(Q,V))F[se]=V,F[W]=Q,W=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],W=F.pop();if(W!==V){F[0]=W;e:for(var se=0,Q=F.length,ue=Q>>>1;se<ue;){var At=2*(se+1)-1,Ot=F[At],Lt=At+1,Dt=F[Lt];if(0>i(Ot,W))Lt<Q&&0>i(Dt,Ot)?(F[se]=Dt,F[Lt]=W,se=Lt):(F[se]=Ot,F[At]=W,se=At);else if(Lt<Q&&0>i(Dt,W))F[se]=Dt,F[Lt]=W,se=Lt;else break e}}return V}function i(F,V){var W=F.sortIndex-V.sortIndex;return W!==0?W:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var d=[],f=[],E=1,x=null,_=3,C=!1,N=!1,R=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var V=n(f);V!==null;){if(V.callback===null)r(f);else if(V.startTime<=F)r(f),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(f)}}function P(F){if(R=!1,v(F),!N)if(n(d)!==null)N=!0,ni(D);else{var V=n(f);V!==null&&Rt(P,V.startTime-F)}}function D(F,V){N=!1,R&&(R=!1,S(m),m=-1),C=!0;var W=_;try{for(v(V),x=n(d);x!==null&&(!(x.expirationTime>V)||F&&!I());){var se=x.callback;if(typeof se=="function"){x.callback=null,_=x.priorityLevel;var Q=se(x.expirationTime<=V);V=e.unstable_now(),typeof Q=="function"?x.callback=Q:x===n(d)&&r(d),v(V)}else r(d);x=n(d)}if(x!==null)var ue=!0;else{var At=n(f);At!==null&&Rt(P,At.startTime-V),ue=!1}return ue}finally{x=null,_=W,C=!1}}var z=!1,w=null,m=-1,y=5,b=-1;function I(){return!(e.unstable_now()-b<y)}function T(){if(w!==null){var F=e.unstable_now();b=F;var V=!0;try{V=w(!0,F)}finally{V?k():(z=!1,w=null)}}else z=!1}var k;if(typeof g=="function")k=function(){g(T)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Bn=me.port2;me.port1.onmessage=T,k=function(){Bn.postMessage(null)}}else k=function(){O(T,0)};function ni(F){w=F,z||(z=!0,k())}function Rt(F,V){m=O(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){N||C||(N=!0,ni(D))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var W=_;_=V;try{return F()}finally{_=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=_;_=F;try{return V()}finally{_=W}},e.unstable_scheduleCallback=function(F,V,W){var se=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:E++,callback:V,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>se?(F.sortIndex=W,t(f,F),n(d)===null&&F===n(f)&&(R?(S(m),m=-1):R=!0,Rt(P,W-se))):(F.sortIndex=Q,t(d,F),N||C||(N=!0,ni(D))),F},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(F){var V=_;return function(){var W=_;_=V;try{return F.apply(this,arguments)}finally{_=W}}}})(zp);Mp.exports=zp;var i0=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=L,Ye=i0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Up=new Set,Hi={};function cr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Hi[e]=t,e=0;e<t.length;e++)Up.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function a0(e){return Fl.call(gh,e)?!0:Fl.call(mh,e)?!1:o0.test(e)?gh[e]=!0:(mh[e]=!0,!1)}function l0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c0(e,t,n,r){if(t===null||typeof t>"u"||l0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eu,tu);Ee[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eu,tu);Ee[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eu,tu);Ee[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function nu(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c0(t,n,i,r)&&(n=null),r||i===null?a0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),yr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),$p=Symbol.for("react.context"),iu=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Vl=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Bp=Symbol.for("react.offscreen"),vh=Symbol.iterator;function gi(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,rl;function Ti(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function sl(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=c);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function u0(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xr:return"Fragment";case yr:return"Portal";case $l:return"Profiler";case ru:return"StrictMode";case Bl:return"Suspense";case Vl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $p:return(e.displayName||"Context")+".Consumer";case Fp:return(e._context.displayName||"Context")+".Provider";case iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return t=e.displayName||null,t!==null?t:Hl(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Hl(e(t))}catch{}}return null}function d0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hl(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h0(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $s(e){e._valueTracker||(e._valueTracker=h0(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&nu(e,"checked",t,!1)}function Kl(e,t){Wp(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||Eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ii=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ii(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function Kp(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bs,qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){f0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var p0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jl(e,t){if(t){if(p0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,Rr=null,Ar=null;function kh(e){if(e=ms(e)){if(typeof Zl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=fa(t),Zl(e.stateNode,e.type,t))}}function Yp(e){Rr?Ar?Ar.push(e):Ar=[e]:Rr=e}function Qp(){if(Rr){var e=Rr,t=Ar;if(Ar=Rr=null,kh(e),t)for(e=0;e<t.length;e++)kh(t[e])}}function Zp(e,t){return e(t)}function em(){}var ol=!1;function tm(e,t,n){if(ol)return e(t,n);ol=!0;try{return Zp(e,t,n)}finally{ol=!1,(Rr!==null||Ar!==null)&&(em(),Qp())}}function Ki(e,t){var n=e.stateNode;if(n===null)return null;var r=fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var ec=!1;if(qt)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){ec=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{ec=!1}function m0(e,t,n,r,i,s,a,c,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(E){this.onError(E)}}var Ai=!1,bo=null,So=!1,tc=null,g0={onError:function(e){Ai=!0,bo=e}};function v0(e,t,n,r,i,s,a,c,d){Ai=!1,bo=null,m0.apply(g0,arguments)}function y0(e,t,n,r,i,s,a,c,d){if(v0.apply(this,arguments),Ai){if(Ai){var f=bo;Ai=!1,bo=null}else throw Error(M(198));So||(So=!0,tc=f)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eh(e){if(ur(e)!==e)throw Error(M(188))}function x0(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Eh(i),e;if(s===r)return Eh(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=s;break}if(c===r){a=!0,r=i,n=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===n){a=!0,n=s,r=i;break}if(c===r){a=!0,r=s,n=i;break}c=c.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function rm(e){return e=x0(e),e!==null?im(e):null}function im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=im(e);if(t!==null)return t;e=e.sibling}return null}var sm=Ye.unstable_scheduleCallback,bh=Ye.unstable_cancelCallback,w0=Ye.unstable_shouldYield,_0=Ye.unstable_requestPaint,he=Ye.unstable_now,k0=Ye.unstable_getCurrentPriorityLevel,au=Ye.unstable_ImmediatePriority,om=Ye.unstable_UserBlockingPriority,To=Ye.unstable_NormalPriority,E0=Ye.unstable_LowPriority,am=Ye.unstable_IdlePriority,ca=null,Et=null;function b0(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ca,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:I0,S0=Math.log,T0=Math.LN2;function I0(e){return e>>>=0,e===0?32:31-(S0(e)/T0|0)|0}var Vs=64,Hs=4194304;function Ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=Ci(c):(s&=a,s!==0&&(r=Ci(s)))}else a=n&~i,a!==0?r=Ci(a):s!==0&&(r=Ci(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function C0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-pt(s),c=1<<a,d=i[a];d===-1?(!(c&n)||c&r)&&(i[a]=C0(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function nc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lm(){var e=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function j0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function cm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var um,cu,dm,hm,fm,rc=!1,Ws=[],_n=null,kn=null,En=null,Gi=new Map,qi=new Map,hn=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function yi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ms(t),t!==null&&cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function R0(e,t,n,r,i){switch(t){case"focusin":return _n=yi(_n,e,t,n,r,i),!0;case"dragenter":return kn=yi(kn,e,t,n,r,i),!0;case"mouseover":return En=yi(En,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,yi(Gi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qi.set(s,yi(qi.get(s)||null,e,t,n,r,i)),!0}return!1}function pm(e){var t=Xn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=nm(n),t!==null){e.blockedOn=t,fm(e.priority,function(){dm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ic(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=ms(n),t!==null&&cu(t),e.blockedOn=n,!1;t.shift()}return!0}function Th(e,t,n){ao(e)&&n.delete(t)}function A0(){rc=!1,_n!==null&&ao(_n)&&(_n=null),kn!==null&&ao(kn)&&(kn=null),En!==null&&ao(En)&&(En=null),Gi.forEach(Th),qi.forEach(Th)}function xi(e,t){e.blockedOn===t&&(e.blockedOn=null,rc||(rc=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,A0)))}function Xi(e){function t(i){return xi(i,e)}if(0<Ws.length){xi(Ws[0],e);for(var n=1;n<Ws.length;n++){var r=Ws[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&xi(_n,e),kn!==null&&xi(kn,e),En!==null&&xi(En,e),Gi.forEach(t),qi.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)pm(n),n.blockedOn===null&&hn.shift()}var Or=en.ReactCurrentBatchConfig,Co=!0;function O0(e,t,n,r){var i=Y,s=Or.transition;Or.transition=null;try{Y=1,uu(e,t,n,r)}finally{Y=i,Or.transition=s}}function L0(e,t,n,r){var i=Y,s=Or.transition;Or.transition=null;try{Y=4,uu(e,t,n,r)}finally{Y=i,Or.transition=s}}function uu(e,t,n,r){if(Co){var i=ic(e,t,n,r);if(i===null)vl(e,t,r,No,n),Sh(e,r);else if(R0(i,e,t,n,r))r.stopPropagation();else if(Sh(e,r),t&4&&-1<P0.indexOf(e)){for(;i!==null;){var s=ms(i);if(s!==null&&um(s),s=ic(e,t,n,r),s===null&&vl(e,t,r,No,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var No=null;function ic(e,t,n,r){if(No=null,e=ou(r),e=Xn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function mm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k0()){case au:return 1;case om:return 4;case To:case E0:return 16;case am:return 536870912;default:return 16}default:return 16}}var yn=null,du=null,lo=null;function gm(){if(lo)return lo;var e,t=du,n=t.length,r,i="value"in yn?yn.value:yn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return lo=i.slice(e,1<r?1-r:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ks(){return!0}function Ih(){return!1}function Ze(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ks:Ih,this.isPropagationStopped=Ih,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=Ze(Yr),ps=le({},Yr,{view:0,detail:0}),D0=Ze(ps),ll,cl,wi,ua=le({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(ll=e.screenX-wi.screenX,cl=e.screenY-wi.screenY):cl=ll=0,wi=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),Ch=Ze(ua),M0=le({},ua,{dataTransfer:0}),z0=Ze(M0),U0=le({},ps,{relatedTarget:0}),ul=Ze(U0),F0=le({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Ze(F0),B0=le({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=Ze(B0),H0=le({},Yr,{data:0}),Nh=Ze(H0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G0[e])?!!t[e]:!1}function fu(){return q0}var X0=le({},ps,{key:function(e){if(e.key){var t=W0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?K0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J0=Ze(X0),Y0=le({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Ze(Y0),Q0=le({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Z0=Ze(Q0),e1=le({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=Ze(e1),n1=le({},ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=Ze(n1),i1=[9,13,27,32],pu=qt&&"CompositionEvent"in window,Oi=null;qt&&"documentMode"in document&&(Oi=document.documentMode);var s1=qt&&"TextEvent"in window&&!Oi,vm=qt&&(!pu||Oi&&8<Oi&&11>=Oi),Ph=" ",Rh=!1;function ym(e,t){switch(e){case"keyup":return i1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function o1(e,t){switch(e){case"compositionend":return xm(t);case"keypress":return t.which!==32?null:(Rh=!0,Ph);case"textInput":return e=t.data,e===Ph&&Rh?null:e;default:return null}}function a1(e,t){if(wr)return e==="compositionend"||!pu&&ym(e,t)?(e=gm(),lo=du=yn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l1[e.type]:t==="textarea"}function wm(e,t,n,r){Yp(r),t=jo(t,"onChange"),0<t.length&&(n=new hu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Ji=null;function c1(e){Pm(e,0)}function da(e){var t=Er(e);if(Hp(t))return e}function u1(e,t){if(e==="change")return t}var _m=!1;if(qt){var dl;if(qt){var hl="oninput"in document;if(!hl){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),hl=typeof Oh.oninput=="function"}dl=hl}else dl=!1;_m=dl&&(!document.documentMode||9<document.documentMode)}function Lh(){Li&&(Li.detachEvent("onpropertychange",km),Ji=Li=null)}function km(e){if(e.propertyName==="value"&&da(Ji)){var t=[];wm(t,Ji,e,ou(e)),tm(c1,t)}}function d1(e,t,n){e==="focusin"?(Lh(),Li=t,Ji=n,Li.attachEvent("onpropertychange",km)):e==="focusout"&&Lh()}function h1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return da(Ji)}function f1(e,t){if(e==="click")return da(t)}function p1(e,t){if(e==="input"||e==="change")return da(t)}function m1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:m1;function Yi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function Dh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mh(e,t){var n=Dh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function Em(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Em(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bm(){for(var e=window,t=Eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eo(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g1(e){var t=bm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Mh(n,s);var a=Mh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var v1=qt&&"documentMode"in document&&11>=document.documentMode,_r=null,sc=null,Di=null,oc=!1;function zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||_r==null||_r!==Eo(r)||(r=_r,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Yi(Di,r)||(Di=r,r=jo(sc,"onSelect"),0<r.length&&(t=new hu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function Gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},fl={},Sm={};qt&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function ha(e){if(fl[e])return fl[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sm)return fl[e]=t[n];return e}var Tm=ha("animationend"),Im=ha("animationiteration"),Cm=ha("animationstart"),Nm=ha("transitionend"),jm=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){jm.set(e,t),cr(t,[e])}for(var pl=0;pl<Uh.length;pl++){var ml=Uh[pl],y1=ml.toLowerCase(),x1=ml[0].toUpperCase()+ml.slice(1);Dn(y1,"on"+x1)}Dn(Tm,"onAnimationEnd");Dn(Im,"onAnimationIteration");Dn(Cm,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Nm,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function Fh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,y0(r,t,void 0,e),e.currentTarget=null}function Pm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],d=c.instance,f=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;Fh(i,c,f),s=d}else for(a=0;a<r.length;a++){if(c=r[a],d=c.instance,f=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;Fh(i,c,f),s=d}}}if(So)throw e=tc,So=!1,tc=null,e}function ne(e,t){var n=t[dc];n===void 0&&(n=t[dc]=new Set);var r=e+"__bubble";n.has(r)||(Rm(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),Rm(n,e,r,t)}var qs="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[qs]){e[qs]=!0,Up.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qs]||(t[qs]=!0,gl("selectionchange",!1,t))}}function Rm(e,t,n,r){switch(mm(t)){case 1:var i=O0;break;case 4:i=L0;break;default:i=uu}n=i.bind(null,t,n,e),i=void 0,!ec||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Xn(c),a===null)return;if(d=a.tag,d===5||d===6){r=s=a;continue e}c=c.parentNode}}r=r.return}tm(function(){var f=s,E=ou(n),x=[];e:{var _=jm.get(e);if(_!==void 0){var C=hu,N=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":C=J0;break;case"focusin":N="focus",C=ul;break;case"focusout":N="blur",C=ul;break;case"beforeblur":case"afterblur":C=ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Z0;break;case Tm:case Im:case Cm:C=$0;break;case Nm:C=t1;break;case"scroll":C=D0;break;case"wheel":C=r1;break;case"copy":case"cut":case"paste":C=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=jh}var R=(t&4)!==0,O=!R&&e==="scroll",S=R?_!==null?_+"Capture":null:_;R=[];for(var g=f,v;g!==null;){v=g;var P=v.stateNode;if(v.tag===5&&P!==null&&(v=P,S!==null&&(P=Ki(g,S),P!=null&&R.push(Zi(g,P,v)))),O)break;g=g.return}0<R.length&&(_=new C(_,N,null,n,E),x.push({event:_,listeners:R}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",_&&n!==Ql&&(N=n.relatedTarget||n.fromElement)&&(Xn(N)||N[Xt]))break e;if((C||_)&&(_=E.window===E?E:(_=E.ownerDocument)?_.defaultView||_.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=f,N=N?Xn(N):null,N!==null&&(O=ur(N),N!==O||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=f),C!==N)){if(R=Ch,P="onMouseLeave",S="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(R=jh,P="onPointerLeave",S="onPointerEnter",g="pointer"),O=C==null?_:Er(C),v=N==null?_:Er(N),_=new R(P,g+"leave",C,n,E),_.target=O,_.relatedTarget=v,P=null,Xn(E)===f&&(R=new R(S,g+"enter",N,n,E),R.target=v,R.relatedTarget=O,P=R),O=P,C&&N)t:{for(R=C,S=N,g=0,v=R;v;v=vr(v))g++;for(v=0,P=S;P;P=vr(P))v++;for(;0<g-v;)R=vr(R),g--;for(;0<v-g;)S=vr(S),v--;for(;g--;){if(R===S||S!==null&&R===S.alternate)break t;R=vr(R),S=vr(S)}R=null}else R=null;C!==null&&$h(x,_,C,R,!1),N!==null&&O!==null&&$h(x,O,N,R,!0)}}e:{if(_=f?Er(f):window,C=_.nodeName&&_.nodeName.toLowerCase(),C==="select"||C==="input"&&_.type==="file")var D=u1;else if(Ah(_))if(_m)D=p1;else{D=h1;var z=d1}else(C=_.nodeName)&&C.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(D=f1);if(D&&(D=D(e,f))){wm(x,D,n,E);break e}z&&z(e,_,f),e==="focusout"&&(z=_._wrapperState)&&z.controlled&&_.type==="number"&&Gl(_,"number",_.value)}switch(z=f?Er(f):window,e){case"focusin":(Ah(z)||z.contentEditable==="true")&&(_r=z,sc=f,Di=null);break;case"focusout":Di=sc=_r=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,zh(x,n,E);break;case"selectionchange":if(v1)break;case"keydown":case"keyup":zh(x,n,E)}var w;if(pu)e:{switch(e){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else wr?ym(e,n)&&(m="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(vm&&n.locale!=="ko"&&(wr||m!=="onCompositionStart"?m==="onCompositionEnd"&&wr&&(w=gm()):(yn=E,du="value"in yn?yn.value:yn.textContent,wr=!0)),z=jo(f,m),0<z.length&&(m=new Nh(m,e,null,n,E),x.push({event:m,listeners:z}),w?m.data=w:(w=xm(n),w!==null&&(m.data=w)))),(w=s1?o1(e,n):a1(e,n))&&(f=jo(f,"onBeforeInput"),0<f.length&&(E=new Nh("onBeforeInput","beforeinput",null,n,E),x.push({event:E,listeners:f}),E.data=w))}Pm(x,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(e,n),s!=null&&r.unshift(Zi(e,s,i)),s=Ki(e,t),s!=null&&r.push(Zi(e,s,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $h(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var c=n,d=c.alternate,f=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&f!==null&&(c=f,i?(d=Ki(n,s),d!=null&&a.unshift(Zi(n,d,c))):i||(d=Ki(n,s),d!=null&&a.push(Zi(n,d,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var _1=/\r\n?/g,k1=/\u0000|\uFFFD/g;function Bh(e){return(typeof e=="string"?e:""+e).replace(_1,`
`).replace(k1,"")}function Xs(e,t,n){if(t=Bh(t),Bh(e)!==t&&n)throw Error(M(425))}function Po(){}var ac=null,lc=null;function cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(e){return Vh.resolve(null).then(e).catch(S1)}:uc;function S1(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xi(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Qr,es="__reactProps$"+Qr,Xt="__reactContainer$"+Qr,dc="__reactEvents$"+Qr,T1="__reactListeners$"+Qr,I1="__reactHandles$"+Qr;function Xn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hh(e);e!==null;){if(n=e[_t])return n;e=Hh(e)}return t}e=n,n=e.parentNode}return null}function ms(e){return e=e[_t]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function fa(e){return e[es]||null}var hc=[],br=-1;function Mn(e){return{current:e}}function re(e){0>br||(e.current=hc[br],hc[br]=null,br--)}function ee(e,t){br++,hc[br]=e.current,e.current=t}var On={},Pe=Mn(On),He=Mn(!1),tr=On;function $r(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Ro(){re(He),re(Pe)}function Wh(e,t,n){if(Pe.current!==On)throw Error(M(168));ee(Pe,t),ee(He,n)}function Am(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,d0(e)||"Unknown",i));return le({},n,r)}function Ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,tr=Pe.current,ee(Pe,e),ee(He,He.current),!0}function Kh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Am(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,re(He),re(Pe),ee(Pe,e)):re(He),ee(He,n)}var Ft=null,pa=!1,xl=!1;function Om(e){Ft===null?Ft=[e]:Ft.push(e)}function C1(e){pa=!0,Om(e)}function zn(){if(!xl&&Ft!==null){xl=!0;var e=0,t=Y;try{var n=Ft;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,pa=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),sm(au,zn),i}finally{Y=t,xl=!1}}return null}var Sr=[],Tr=0,Oo=null,Lo=0,tt=[],nt=0,nr=null,$t=1,Bt="";function Kn(e,t){Sr[Tr++]=Lo,Sr[Tr++]=Oo,Oo=e,Lo=t}function Lm(e,t,n){tt[nt++]=$t,tt[nt++]=Bt,tt[nt++]=nr,nr=e;var r=$t;e=Bt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,$t=1<<32-pt(t)+i|n<<i|r,Bt=s+e}else $t=1<<s|n<<i|r,Bt=e}function gu(e){e.return!==null&&(Kn(e,1),Lm(e,1,0))}function vu(e){for(;e===Oo;)Oo=Sr[--Tr],Sr[Tr]=null,Lo=Sr[--Tr],Sr[Tr]=null;for(;e===nr;)nr=tt[--nt],tt[nt]=null,Bt=tt[--nt],tt[nt]=null,$t=tt[--nt],tt[nt]=null}var Je=null,Xe=null,ie=!1,dt=null;function Dm(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Xe=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:$t,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Xe=null,!0):!1;default:return!1}}function fc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pc(e){if(ie){var t=Xe;if(t){var n=t;if(!Gh(e,t)){if(fc(e))throw Error(M(418));t=bn(n.nextSibling);var r=Je;t&&Gh(e,t)?Dm(r,n):(e.flags=e.flags&-4097|2,ie=!1,Je=e)}}else{if(fc(e))throw Error(M(418));e.flags=e.flags&-4097|2,ie=!1,Je=e}}}function qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Js(e){if(e!==Je)return!1;if(!ie)return qh(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cc(e.type,e.memoizedProps)),t&&(t=Xe)){if(fc(e))throw Mm(),Error(M(418));for(;t;)Dm(e,t),t=bn(t.nextSibling)}if(qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Je?bn(e.stateNode.nextSibling):null;return!0}function Mm(){for(var e=Xe;e;)e=bn(e.nextSibling)}function Br(){Xe=Je=null,ie=!1}function yu(e){dt===null?dt=[e]:dt.push(e)}var N1=en.ReactCurrentBatchConfig;function _i(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Ys(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xh(e){var t=e._init;return t(e._payload)}function zm(e){function t(S,g){if(e){var v=S.deletions;v===null?(S.deletions=[g],S.flags|=16):v.push(g)}}function n(S,g){if(!e)return null;for(;g!==null;)t(S,g),g=g.sibling;return null}function r(S,g){for(S=new Map;g!==null;)g.key!==null?S.set(g.key,g):S.set(g.index,g),g=g.sibling;return S}function i(S,g){return S=Cn(S,g),S.index=0,S.sibling=null,S}function s(S,g,v){return S.index=v,e?(v=S.alternate,v!==null?(v=v.index,v<g?(S.flags|=2,g):v):(S.flags|=2,g)):(S.flags|=1048576,g)}function a(S){return e&&S.alternate===null&&(S.flags|=2),S}function c(S,g,v,P){return g===null||g.tag!==6?(g=Tl(v,S.mode,P),g.return=S,g):(g=i(g,v),g.return=S,g)}function d(S,g,v,P){var D=v.type;return D===xr?E(S,g,v.props.children,P,v.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===un&&Xh(D)===g.type)?(P=i(g,v.props),P.ref=_i(S,g,v),P.return=S,P):(P=vo(v.type,v.key,v.props,null,S.mode,P),P.ref=_i(S,g,v),P.return=S,P)}function f(S,g,v,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Il(v,S.mode,P),g.return=S,g):(g=i(g,v.children||[]),g.return=S,g)}function E(S,g,v,P,D){return g===null||g.tag!==7?(g=er(v,S.mode,P,D),g.return=S,g):(g=i(g,v),g.return=S,g)}function x(S,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Tl(""+g,S.mode,v),g.return=S,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fs:return v=vo(g.type,g.key,g.props,null,S.mode,v),v.ref=_i(S,null,g),v.return=S,v;case yr:return g=Il(g,S.mode,v),g.return=S,g;case un:var P=g._init;return x(S,P(g._payload),v)}if(Ii(g)||gi(g))return g=er(g,S.mode,v,null),g.return=S,g;Ys(S,g)}return null}function _(S,g,v,P){var D=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:c(S,g,""+v,P);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fs:return v.key===D?d(S,g,v,P):null;case yr:return v.key===D?f(S,g,v,P):null;case un:return D=v._init,_(S,g,D(v._payload),P)}if(Ii(v)||gi(v))return D!==null?null:E(S,g,v,P,null);Ys(S,v)}return null}function C(S,g,v,P,D){if(typeof P=="string"&&P!==""||typeof P=="number")return S=S.get(v)||null,c(g,S,""+P,D);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Fs:return S=S.get(P.key===null?v:P.key)||null,d(g,S,P,D);case yr:return S=S.get(P.key===null?v:P.key)||null,f(g,S,P,D);case un:var z=P._init;return C(S,g,v,z(P._payload),D)}if(Ii(P)||gi(P))return S=S.get(v)||null,E(g,S,P,D,null);Ys(g,P)}return null}function N(S,g,v,P){for(var D=null,z=null,w=g,m=g=0,y=null;w!==null&&m<v.length;m++){w.index>m?(y=w,w=null):y=w.sibling;var b=_(S,w,v[m],P);if(b===null){w===null&&(w=y);break}e&&w&&b.alternate===null&&t(S,w),g=s(b,g,m),z===null?D=b:z.sibling=b,z=b,w=y}if(m===v.length)return n(S,w),ie&&Kn(S,m),D;if(w===null){for(;m<v.length;m++)w=x(S,v[m],P),w!==null&&(g=s(w,g,m),z===null?D=w:z.sibling=w,z=w);return ie&&Kn(S,m),D}for(w=r(S,w);m<v.length;m++)y=C(w,S,m,v[m],P),y!==null&&(e&&y.alternate!==null&&w.delete(y.key===null?m:y.key),g=s(y,g,m),z===null?D=y:z.sibling=y,z=y);return e&&w.forEach(function(I){return t(S,I)}),ie&&Kn(S,m),D}function R(S,g,v,P){var D=gi(v);if(typeof D!="function")throw Error(M(150));if(v=D.call(v),v==null)throw Error(M(151));for(var z=D=null,w=g,m=g=0,y=null,b=v.next();w!==null&&!b.done;m++,b=v.next()){w.index>m?(y=w,w=null):y=w.sibling;var I=_(S,w,b.value,P);if(I===null){w===null&&(w=y);break}e&&w&&I.alternate===null&&t(S,w),g=s(I,g,m),z===null?D=I:z.sibling=I,z=I,w=y}if(b.done)return n(S,w),ie&&Kn(S,m),D;if(w===null){for(;!b.done;m++,b=v.next())b=x(S,b.value,P),b!==null&&(g=s(b,g,m),z===null?D=b:z.sibling=b,z=b);return ie&&Kn(S,m),D}for(w=r(S,w);!b.done;m++,b=v.next())b=C(w,S,m,b.value,P),b!==null&&(e&&b.alternate!==null&&w.delete(b.key===null?m:b.key),g=s(b,g,m),z===null?D=b:z.sibling=b,z=b);return e&&w.forEach(function(T){return t(S,T)}),ie&&Kn(S,m),D}function O(S,g,v,P){if(typeof v=="object"&&v!==null&&v.type===xr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fs:e:{for(var D=v.key,z=g;z!==null;){if(z.key===D){if(D=v.type,D===xr){if(z.tag===7){n(S,z.sibling),g=i(z,v.props.children),g.return=S,S=g;break e}}else if(z.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===un&&Xh(D)===z.type){n(S,z.sibling),g=i(z,v.props),g.ref=_i(S,z,v),g.return=S,S=g;break e}n(S,z);break}else t(S,z);z=z.sibling}v.type===xr?(g=er(v.props.children,S.mode,P,v.key),g.return=S,S=g):(P=vo(v.type,v.key,v.props,null,S.mode,P),P.ref=_i(S,g,v),P.return=S,S=P)}return a(S);case yr:e:{for(z=v.key;g!==null;){if(g.key===z)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(S,g.sibling),g=i(g,v.children||[]),g.return=S,S=g;break e}else{n(S,g);break}else t(S,g);g=g.sibling}g=Il(v,S.mode,P),g.return=S,S=g}return a(S);case un:return z=v._init,O(S,g,z(v._payload),P)}if(Ii(v))return N(S,g,v,P);if(gi(v))return R(S,g,v,P);Ys(S,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(S,g.sibling),g=i(g,v),g.return=S,S=g):(n(S,g),g=Tl(v,S.mode,P),g.return=S,S=g),a(S)):n(S,g)}return O}var Vr=zm(!0),Um=zm(!1),Do=Mn(null),Mo=null,Ir=null,xu=null;function wu(){xu=Ir=Mo=null}function _u(e){var t=Do.current;re(Do),e._currentValue=t}function mc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Mo=e,xu=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(xu!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Mo===null)throw Error(M(308));Ir=e,Mo.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Jn=null;function ku(e){Jn===null?Jn=[e]:Jn.push(e)}function Fm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ku(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jt(e,n)}return i=r.interleaved,i===null?(t.next=t,ku(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jt(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lu(e,n)}}function Jh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zo(e,t,n,r){var i=e.updateQueue;dn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,f=d.next;d.next=null,a===null?s=f:a.next=f,a=d;var E=e.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==a&&(c===null?E.firstBaseUpdate=f:c.next=f,E.lastBaseUpdate=d))}if(s!==null){var x=i.baseState;a=0,E=f=d=null,c=s;do{var _=c.lane,C=c.eventTime;if((r&_)===_){E!==null&&(E=E.next={eventTime:C,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var N=e,R=c;switch(_=t,C=n,R.tag){case 1:if(N=R.payload,typeof N=="function"){x=N.call(C,x,_);break e}x=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=R.payload,_=typeof N=="function"?N.call(C,x,_):N,_==null)break e;x=le({},x,_);break e;case 2:dn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,_=i.effects,_===null?i.effects=[c]:_.push(c))}else C={eventTime:C,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(f=E=C,d=x):E=E.next=C,a|=_;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;_=c,c=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(E===null&&(d=x),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=E,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ir|=a,e.lanes=a,e.memoizedState=x}}function Yh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var gs={},bt=Mn(gs),ts=Mn(gs),ns=Mn(gs);function Yn(e){if(e===gs)throw Error(M(174));return e}function bu(e,t){switch(ee(ns,t),ee(ts,e),ee(bt,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}re(bt),ee(bt,t)}function Hr(){re(bt),re(ts),re(ns)}function Bm(e){Yn(ns.current);var t=Yn(bt.current),n=Xl(t,e.type);t!==n&&(ee(ts,e),ee(bt,n))}function Su(e){ts.current===e&&(re(bt),re(ts))}var oe=Mn(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function Tu(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var ho=en.ReactCurrentDispatcher,_l=en.ReactCurrentBatchConfig,rr=0,ae=null,ge=null,ye=null,Fo=!1,Mi=!1,rs=0,j1=0;function Ie(){throw Error(M(321))}function Iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,s){if(rr=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ho.current=e===null||e.memoizedState===null?O1:L1,e=n(r,i),Mi){s=0;do{if(Mi=!1,rs=0,25<=s)throw Error(M(301));s+=1,ye=ge=null,t.updateQueue=null,ho.current=D1,e=n(r,i)}while(Mi)}if(ho.current=$o,t=ge!==null&&ge.next!==null,rr=0,ye=ge=ae=null,Fo=!1,t)throw Error(M(300));return e}function Nu(){var e=rs!==0;return rs=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function ot(){if(ge===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,ge=e;else{if(e===null)throw Error(M(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function is(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=ot(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=a=null,d=null,f=s;do{var E=f.lane;if((rr&E)===E)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var x={lane:E,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(c=d=x,a=r):d=d.next=x,ae.lanes|=E,ir|=E}f=f.next}while(f!==null&&f!==s);d===null?a=r:d.next=c,gt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,ir|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=ot(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);gt(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Vm(){}function Hm(e,t){var n=ae,r=ot(),i=t(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,ju(Gm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,ss(9,Km.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(M(349));rr&30||Wm(n,t,i)}return i}function Wm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Km(e,t,n,r){t.value=n,t.getSnapshot=r,qm(t)&&Xm(e)}function Gm(e,t,n){return n(function(){qm(t)&&Xm(e)})}function qm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Xm(e){var t=Jt(e,1);t!==null&&mt(t,e,1,-1)}function Qh(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=A1.bind(null,ae,e),[t.memoizedState,e]}function ss(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jm(){return ot().memoizedState}function fo(e,t,n,r){var i=wt();ae.flags|=e,i.memoizedState=ss(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(ge!==null){var a=ge.memoizedState;if(s=a.destroy,r!==null&&Iu(r,a.deps)){i.memoizedState=ss(t,n,s,r);return}}ae.flags|=e,i.memoizedState=ss(1|t,n,s,r)}function Zh(e,t){return fo(8390656,8,e,t)}function ju(e,t){return ma(2048,8,e,t)}function Ym(e,t){return ma(4,2,e,t)}function Qm(e,t){return ma(4,4,e,t)}function Zm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function eg(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,4,Zm.bind(null,t,e),n)}function Pu(){}function tg(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ng(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rg(e,t,n){return rr&21?(gt(n,t)||(n=lm(),ae.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function P1(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{Y=n,_l.transition=r}}function ig(){return ot().memoizedState}function R1(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sg(e))og(t,n);else if(n=Fm(e,t,n,r),n!==null){var i=De();mt(n,e,r,i),ag(n,t,r)}}function A1(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sg(e))og(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,n);if(i.hasEagerState=!0,i.eagerState=c,gt(c,a)){var d=t.interleaved;d===null?(i.next=i,ku(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Fm(e,t,i,r),n!==null&&(i=De(),mt(n,e,r,i),ag(n,t,r))}}function sg(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function og(e,t){Mi=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ag(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lu(e,n)}}var $o={readContext:st,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},O1={readContext:st,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Zh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,Zm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Qh,useDebugValue:Pu,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Qh(!1),t=e[0];return e=P1.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=wt();if(ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),xe===null)throw Error(M(349));rr&30||Wm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Zh(Gm.bind(null,r,s,e),[e]),r.flags|=2048,ss(9,Km.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wt(),t=xe.identifierPrefix;if(ie){var n=Bt,r=$t;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=j1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L1={readContext:st,useCallback:tg,useContext:st,useEffect:ju,useImperativeHandle:eg,useInsertionEffect:Ym,useLayoutEffect:Qm,useMemo:ng,useReducer:kl,useRef:Jm,useState:function(){return kl(is)},useDebugValue:Pu,useDeferredValue:function(e){var t=ot();return rg(t,ge.memoizedState,e)},useTransition:function(){var e=kl(is)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vm,useSyncExternalStore:Hm,useId:ig,unstable_isNewReconciler:!1},D1={readContext:st,useCallback:tg,useContext:st,useEffect:ju,useImperativeHandle:eg,useInsertionEffect:Ym,useLayoutEffect:Qm,useMemo:ng,useReducer:El,useRef:Jm,useState:function(){return El(is)},useDebugValue:Pu,useDeferredValue:function(e){var t=ot();return ge===null?t.memoizedState=e:rg(t,ge.memoizedState,e)},useTransition:function(){var e=El(is)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vm,useSyncExternalStore:Hm,useId:ig,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=In(e),s=Kt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Sn(e,s,i),t!==null&&(mt(t,e,i,r),uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=In(e),s=Kt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Sn(e,s,i),t!==null&&(mt(t,e,i,r),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=In(e),i=Kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sn(e,i,r),t!==null&&(mt(t,e,r,n),uo(t,e,r))}};function ef(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function lg(e,t,n){var r=!1,i=On,s=t.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=We(t)?tr:Pe.current,r=t.contextTypes,s=(r=r!=null)?$r(e,i):On),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function tf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function vc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Eu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=We(t)?tr:Pe.current,i.context=$r(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(gc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ga.enqueueReplaceState(i,i.state,null),zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var n="",r=t;do n+=u0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var M1=typeof WeakMap=="function"?WeakMap:Map;function cg(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Cc=r),yc(e,t)},n}function ug(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yc(e,t),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function nf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new M1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Y1.bind(null,e,t,n),t.then(e,e))}function rf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var z1=en.ReactCurrentOwner,Ve=!1;function Oe(e,t,n,r){t.child=e===null?Um(t,null,n,r):Vr(t,e.child,n,r)}function of(e,t,n,r,i){n=n.render;var s=t.ref;return Lr(t,i),r=Cu(e,t,n,r,s,i),n=Nu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ie&&n&&gu(t),t.flags|=1,Oe(e,t,r,i),t.child)}function af(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Uu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,dg(e,t,s,r,i)):(e=vo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(a,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=Cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function dg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Yi(s,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return xc(e,t,n,r,i)}function hg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Nr,qe),qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Nr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Nr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ee(Nr,qe),qe|=r;return Oe(e,t,i,n),t.child}function fg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xc(e,t,n,r,i){var s=We(n)?tr:Pe.current;return s=$r(t,s),Lr(t,i),n=Cu(e,t,n,r,s,i),r=Nu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ie&&r&&gu(t),t.flags|=1,Oe(e,t,n,i),t.child)}function lf(e,t,n,r,i){if(We(n)){var s=!0;Ao(t)}else s=!1;if(Lr(t,i),t.stateNode===null)po(e,t),lg(t,n,r),vc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var d=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=st(f):(f=We(n)?tr:Pe.current,f=$r(t,f));var E=n.getDerivedStateFromProps,x=typeof E=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||d!==f)&&tf(t,a,r,f),dn=!1;var _=t.memoizedState;a.state=_,zo(t,r,a,i),d=t.memoizedState,c!==r||_!==d||He.current||dn?(typeof E=="function"&&(gc(t,n,E,r),d=t.memoizedState),(c=dn||ef(t,n,c,r,_,d,f))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=f,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$m(e,t),c=t.memoizedProps,f=t.type===t.elementType?c:ct(t.type,c),a.props=f,x=t.pendingProps,_=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=st(d):(d=We(n)?tr:Pe.current,d=$r(t,d));var C=n.getDerivedStateFromProps;(E=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==x||_!==d)&&tf(t,a,r,d),dn=!1,_=t.memoizedState,a.state=_,zo(t,r,a,i);var N=t.memoizedState;c!==x||_!==N||He.current||dn?(typeof C=="function"&&(gc(t,n,C,r),N=t.memoizedState),(f=dn||ef(t,n,f,r,_,N,d)||!1)?(E||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=d,r=f):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return wc(e,t,n,r,s,i)}function wc(e,t,n,r,i,s){fg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Kh(t,n,!1),Yt(e,t,s);r=t.stateNode,z1.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Vr(t,e.child,null,s),t.child=Vr(t,null,c,s)):Oe(e,t,c,s),t.memoizedState=r.state,i&&Kh(t,n,!0),t.child}function pg(e){var t=e.stateNode;t.pendingContext?Wh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wh(e,t.context,!1),bu(e,t.containerInfo)}function cf(e,t,n,r,i){return Br(),yu(i),t.flags|=256,Oe(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function kc(e){return{baseLanes:e,cachePool:null,transitions:null}}function mg(e,t,n){var r=t.pendingProps,i=oe.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return pc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=xa(a,r,0,null),e=er(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=kc(n),t.memoizedState=_c,e):Ru(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return U1(e,t,a,r,c,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Cn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Cn(c,s):(s=er(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?kc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=_c,r}return s=e.child,e=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ru(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qs(e,t,n,r){return r!==null&&yu(r),Vr(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U1(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(M(422))),Qs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=xa({mode:"visible",children:r.children},i,0,null),s=er(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Vr(t,e.child,null,a),t.child.memoizedState=kc(a),t.memoizedState=_c,s);if(!(t.mode&1))return Qs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(M(419)),r=bl(s,r,void 0),Qs(e,t,a,r)}if(c=(a&e.childLanes)!==0,Ve||c){if(r=xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(e,i),mt(r,e,i,-1))}return zu(),r=bl(Error(M(421))),Qs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Q1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Xe=bn(i.nextSibling),Je=t,ie=!0,dt=null,e!==null&&(tt[nt++]=$t,tt[nt++]=Bt,tt[nt++]=nr,$t=e.id,Bt=e.overflow,nr=t),t=Ru(t,r.children),t.flags|=4096,t)}function uf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mc(e.return,t,n)}function Sl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function gg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uf(e,n,t);else if(e.tag===19)uf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sl(t,!0,n,null,s);break;case"together":Sl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function F1(e,t,n){switch(t.tag){case 3:pg(t),Br();break;case 5:Bm(t);break;case 1:We(t.type)&&Ao(t);break;case 4:bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Do,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?mg(e,t,n):(ee(oe,oe.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,hg(e,t,n)}return Yt(e,t,n)}var vg,Ec,yg,xg;vg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ec=function(){};yg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(bt.current);var s=null;switch(n){case"input":i=Wl(e,i),r=Wl(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=ql(e,i),r=ql(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Po)}Jl(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var c=i[f];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Hi.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var d=r[f];if(c=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&d!==c&&(d!=null||c!=null))if(f==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&ne("scroll",e),s||c===d||(s=[])):(s=s||[]).push(f,d))}n&&(s=s||[]).push("style",n);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};xg=function(e,t,n,r){n!==r&&(t.flags|=4)};function ki(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $1(e,t,n){var r=t.pendingProps;switch(vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return We(t.type)&&Ro(),Ce(t),null;case 3:return r=t.stateNode,Hr(),re(He),re(Pe),Tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Js(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Pc(dt),dt=null))),Ec(e,t),Ce(t),null;case 5:Su(t);var i=Yn(ns.current);if(n=t.type,e!==null&&t.stateNode!=null)yg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ce(t),null}if(e=Yn(bt.current),Js(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[_t]=t,r[es]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)ne(Ni[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":yh(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":wh(r,s),ne("invalid",r)}Jl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Xs(r.textContent,c,e),i=["children",""+c]):Hi.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":$s(r),xh(r,s,!0);break;case"textarea":$s(r),_h(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Po)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_t]=t,e[es]=r,vg(e,t,!1,!1),t.stateNode=e;e:{switch(a=Yl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)ne(Ni[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":yh(e,r),i=Wl(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":wh(e,r),i=ql(e,r),ne("invalid",e);break;default:i=r}Jl(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Jp(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&qp(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Wi(e,d):typeof d=="number"&&Wi(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&ne("scroll",e):d!=null&&nu(e,s,d,a))}switch(n){case"input":$s(e),xh(e,r,!1);break;case"textarea":$s(e),_h(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Pr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)xg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Yn(ns.current),Yn(bt.current),Js(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(s=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Xs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Ce(t),null;case 13:if(re(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))Mm(),Br(),t.flags|=98560,s=!1;else if(s=Js(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[_t]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else dt!==null&&(Pc(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):zu())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Hr(),Ec(e,t),e===null&&Qi(t.stateNode.containerInfo),Ce(t),null;case 10:return _u(t.type._context),Ce(t),null;case 17:return We(t.type)&&Ro(),Ce(t),null;case 19:if(re(oe),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)ki(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Uo(e),a!==null){for(t.flags|=128,ki(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&he()>Kr&&(t.flags|=128,r=!0,ki(s,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ki(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ie)return Ce(t),null}else 2*he()-s.renderingStartTime>Kr&&n!==1073741824&&(t.flags|=128,r=!0,ki(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=he(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function B1(e,t){switch(vu(t),t.tag){case 1:return We(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),re(He),re(Pe),Tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return Hr(),null;case 10:return _u(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var Zs=!1,Ne=!1,V1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function bc(e,t,n){try{n()}catch(r){ce(e,t,r)}}var df=!1;function H1(e,t){if(ac=Co,e=bm(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,f=0,E=0,x=e,_=null;t:for(;;){for(var C;x!==n||i!==0&&x.nodeType!==3||(c=a+i),x!==s||r!==0&&x.nodeType!==3||(d=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(C=x.firstChild)!==null;)_=x,x=C;for(;;){if(x===e)break t;if(_===n&&++f===i&&(c=a),_===s&&++E===r&&(d=a),(C=x.nextSibling)!==null)break;x=_,_=x.parentNode}x=C}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:e,selectionRange:n},Co=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var R=N.memoizedProps,O=N.memoizedState,S=t.stateNode,g=S.getSnapshotBeforeUpdate(t.elementType===t.type?R:ct(t.type,R),O);S.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(P){ce(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return N=df,df=!1,N}function zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&bc(t,n,s)}i=i.next}while(i!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wg(e){var t=e.alternate;t!==null&&(e.alternate=null,wg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[es],delete t[dc],delete t[T1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _g(e){return e.tag===5||e.tag===3||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Po));else if(r!==4&&(e=e.child,e!==null))for(Tc(e,t,n),e=e.sibling;e!==null;)Tc(e,t,n),e=e.sibling}function Ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}var _e=null,ut=!1;function ln(e,t,n){for(n=n.child;n!==null;)kg(e,t,n),n=n.sibling}function kg(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ca,n)}catch{}switch(n.tag){case 5:Ne||Cr(n,t);case 6:var r=_e,i=ut;_e=null,ln(e,t,n),_e=r,ut=i,_e!==null&&(ut?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ut?(e=_e,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Xi(e)):yl(_e,n.stateNode));break;case 4:r=_e,i=ut,_e=n.stateNode.containerInfo,ut=!0,ln(e,t,n),_e=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&bc(n,t,a),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!Ne&&(Cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ce(n,t,c)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,ln(e,t,n),Ne=r):ln(e,t,n);break;default:ln(e,t,n)}}function ff(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V1),t.forEach(function(r){var i=Z1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:_e=c.stateNode,ut=!1;break e;case 3:_e=c.stateNode.containerInfo,ut=!0;break e;case 4:_e=c.stateNode.containerInfo,ut=!0;break e}c=c.return}if(_e===null)throw Error(M(160));kg(s,a,i),_e=null,ut=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){ce(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eg(t,e),t=t.sibling}function Eg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{zi(3,e,e.return),va(3,e)}catch(R){ce(e,e.return,R)}try{zi(5,e,e.return)}catch(R){ce(e,e.return,R)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&Cr(n,n.return),e.flags&32){var i=e.stateNode;try{Wi(i,"")}catch(R){ce(e,e.return,R)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Wp(i,s),Yl(c,a);var f=Yl(c,s);for(a=0;a<d.length;a+=2){var E=d[a],x=d[a+1];E==="style"?Jp(i,x):E==="dangerouslySetInnerHTML"?qp(i,x):E==="children"?Wi(i,x):nu(i,E,x,f)}switch(c){case"input":Kl(i,s);break;case"textarea":Kp(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Pr(i,!!s.multiple,C,!1):_!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[es]=s}catch(R){ce(e,e.return,R)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(R){ce(e,e.return,R)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(t.containerInfo)}catch(R){ce(e,e.return,R)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=he())),r&4&&ff(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(f=Ne)||E,lt(t,e),Ne=f):lt(t,e),xt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!E&&e.mode&1)for($=e,E=e.child;E!==null;){for(x=$=E;$!==null;){switch(_=$,C=_.child,_.tag){case 0:case 11:case 14:case 15:zi(4,_,_.return);break;case 1:Cr(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(R){ce(r,n,R)}}break;case 5:Cr(_,_.return);break;case 22:if(_.memoizedState!==null){mf(x);continue}}C!==null?(C.return=_,$=C):mf(x)}E=E.sibling}e:for(E=null,x=e;;){if(x.tag===5){if(E===null){E=x;try{i=x.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=x.stateNode,d=x.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Xp("display",a))}catch(R){ce(e,e.return,R)}}}else if(x.tag===6){if(E===null)try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(R){ce(e,e.return,R)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;E===x&&(E=null),x=x.return}E===x&&(E=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:lt(t,e),xt(e),r&4&&ff(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_g(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=hf(e);Ic(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=hf(e);Tc(e,c,a);break;default:throw Error(M(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W1(e,t,n){$=e,bg(e)}function bg(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Zs;if(!a){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Ne;c=Zs;var f=Ne;if(Zs=a,(Ne=d)&&!f)for($=i;$!==null;)a=$,d=a.child,a.tag===22&&a.memoizedState!==null?gf(i):d!==null?(d.return=a,$=d):gf(i);for(;s!==null;)$=s,bg(s),s=s.sibling;$=i,Zs=c,Ne=f}pf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):pf(e)}}function pf(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Yh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yh(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var E=f.memoizedState;if(E!==null){var x=E.dehydrated;x!==null&&Xi(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ne||t.flags&512&&Sc(t)}catch(_){ce(t,t.return,_)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function mf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function gf(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(d){ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ce(t,i,d)}}var s=t.return;try{Sc(t)}catch(d){ce(t,s,d)}break;case 5:var a=t.return;try{Sc(t)}catch(d){ce(t,a,d)}}}catch(d){ce(t,t.return,d)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var K1=Math.ceil,Bo=en.ReactCurrentDispatcher,Au=en.ReactCurrentOwner,it=en.ReactCurrentBatchConfig,q=0,xe=null,pe=null,ke=0,qe=0,Nr=Mn(0),ve=0,os=null,ir=0,ya=0,Ou=0,Ui=null,Fe=null,Lu=0,Kr=1/0,Ut=null,Vo=!1,Cc=null,Tn=null,eo=!1,xn=null,Ho=0,Fi=0,Nc=null,mo=-1,go=0;function De(){return q&6?he():mo!==-1?mo:mo=he()}function In(e){return e.mode&1?q&2&&ke!==0?ke&-ke:N1.transition!==null?(go===0&&(go=lm()),go):(e=Y,e!==0||(e=window.event,e=e===void 0?16:mm(e.type)),e):1}function mt(e,t,n,r){if(50<Fi)throw Fi=0,Nc=null,Error(M(185));fs(e,n,r),(!(q&2)||e!==xe)&&(e===xe&&(!(q&2)&&(ya|=n),ve===4&&fn(e,ke)),Ke(e,r),n===1&&q===0&&!(t.mode&1)&&(Kr=he()+500,pa&&zn()))}function Ke(e,t){var n=e.callbackNode;N0(e,t);var r=Io(e,e===xe?ke:0);if(r===0)n!==null&&bh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bh(n),t===1)e.tag===0?C1(vf.bind(null,e)):Om(vf.bind(null,e)),b1(function(){!(q&6)&&zn()}),n=null;else{switch(cm(r)){case 1:n=au;break;case 4:n=om;break;case 16:n=To;break;case 536870912:n=am;break;default:n=To}n=Rg(n,Sg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sg(e,t){if(mo=-1,go=0,q&6)throw Error(M(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=Io(e,e===xe?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wo(e,r);else{t=r;var i=q;q|=2;var s=Ig();(xe!==e||ke!==t)&&(Ut=null,Kr=he()+500,Zn(e,t));do try{X1();break}catch(c){Tg(e,c)}while(!0);wu(),Bo.current=s,q=i,pe!==null?t=0:(xe=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=nc(e),i!==0&&(r=i,t=jc(e,i))),t===1)throw n=os,Zn(e,0),fn(e,r),Ke(e,he()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!G1(i)&&(t=Wo(e,r),t===2&&(s=nc(e),s!==0&&(r=s,t=jc(e,s))),t===1))throw n=os,Zn(e,0),fn(e,r),Ke(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Gn(e,Fe,Ut);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Lu+500-he(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uc(Gn.bind(null,e,Fe,Ut),t);break}Gn(e,Fe,Ut);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K1(r/1960))-r,10<r){e.timeoutHandle=uc(Gn.bind(null,e,Fe,Ut),r);break}Gn(e,Fe,Ut);break;case 5:Gn(e,Fe,Ut);break;default:throw Error(M(329))}}}return Ke(e,he()),e.callbackNode===n?Sg.bind(null,e):null}function jc(e,t){var n=Ui;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Pc(t)),e}function Pc(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function G1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Ou,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function vf(e){if(q&6)throw Error(M(327));Dr();var t=Io(e,0);if(!(t&1))return Ke(e,he()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=nc(e);r!==0&&(t=r,n=jc(e,r))}if(n===1)throw n=os,Zn(e,0),fn(e,t),Ke(e,he()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,Fe,Ut),Ke(e,he()),null}function Du(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Kr=he()+500,pa&&zn())}}function sr(e){xn!==null&&xn.tag===0&&!(q&6)&&Dr();var t=q;q|=1;var n=it.transition,r=Y;try{if(it.transition=null,Y=1,e)return e()}finally{Y=r,it.transition=n,q=t,!(q&6)&&zn()}}function Mu(){qe=Nr.current,re(Nr)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,E1(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Hr(),re(He),re(Pe),Tu();break;case 5:Su(r);break;case 4:Hr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:_u(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(xe=e,pe=e=Cn(e.current,null),ke=qe=t,ve=0,os=null,Ou=ya=ir=0,Fe=Ui=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Jn=null}return e}function Tg(e,t){do{var n=pe;try{if(wu(),ho.current=$o,Fo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fo=!1}if(rr=0,ye=ge=ae=null,Mi=!1,rs=0,Au.current=null,n===null||n.return===null){ve=1,os=t,pe=null;break}e:{var s=e,a=n.return,c=n,d=t;if(t=ke,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,E=c,x=E.tag;if(!(E.mode&1)&&(x===0||x===11||x===15)){var _=E.alternate;_?(E.updateQueue=_.updateQueue,E.memoizedState=_.memoizedState,E.lanes=_.lanes):(E.updateQueue=null,E.memoizedState=null)}var C=rf(a);if(C!==null){C.flags&=-257,sf(C,a,c,s,t),C.mode&1&&nf(s,f,t),t=C,d=f;var N=t.updateQueue;if(N===null){var R=new Set;R.add(d),t.updateQueue=R}else N.add(d);break e}else{if(!(t&1)){nf(s,f,t),zu();break e}d=Error(M(426))}}else if(ie&&c.mode&1){var O=rf(a);if(O!==null){!(O.flags&65536)&&(O.flags|=256),sf(O,a,c,s,t),yu(Wr(d,c));break e}}s=d=Wr(d,c),ve!==4&&(ve=2),Ui===null?Ui=[s]:Ui.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=cg(s,d,t);Jh(s,S);break e;case 1:c=d;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tn===null||!Tn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var P=ug(s,c,t);Jh(s,P);break e}}s=s.return}while(s!==null)}Ng(n)}catch(D){t=D,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Ig(){var e=Bo.current;return Bo.current=$o,e===null?$o:e}function zu(){(ve===0||ve===3||ve===2)&&(ve=4),xe===null||!(ir&268435455)&&!(ya&268435455)||fn(xe,ke)}function Wo(e,t){var n=q;q|=2;var r=Ig();(xe!==e||ke!==t)&&(Ut=null,Zn(e,t));do try{q1();break}catch(i){Tg(e,i)}while(!0);if(wu(),q=n,Bo.current=r,pe!==null)throw Error(M(261));return xe=null,ke=0,ve}function q1(){for(;pe!==null;)Cg(pe)}function X1(){for(;pe!==null&&!w0();)Cg(pe)}function Cg(e){var t=Pg(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Ng(e):pe=t,Au.current=null}function Ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=B1(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=$1(n,t,qe),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function Gn(e,t,n){var r=Y,i=it.transition;try{it.transition=null,Y=1,J1(e,t,n,r)}finally{it.transition=i,Y=r}return null}function J1(e,t,n,r){do Dr();while(xn!==null);if(q&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(j0(e,s),e===xe&&(pe=xe=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Rg(To,function(){return Dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var a=Y;Y=1;var c=q;q|=4,Au.current=null,H1(e,n),Eg(n,e),g1(lc),Co=!!ac,lc=ac=null,e.current=n,W1(n),_0(),q=c,Y=a,it.transition=s}else e.current=n;if(eo&&(eo=!1,xn=e,Ho=i),s=e.pendingLanes,s===0&&(Tn=null),b0(n.stateNode),Ke(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,e=Cc,Cc=null,e;return Ho&1&&e.tag!==0&&Dr(),s=e.pendingLanes,s&1?e===Nc?Fi++:(Fi=0,Nc=e):Fi=0,zn(),null}function Dr(){if(xn!==null){var e=cm(Ho),t=it.transition,n=Y;try{if(it.transition=null,Y=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,Ho=0,q&6)throw Error(M(331));var i=q;for(q|=4,$=e.current;$!==null;){var s=$,a=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var f=c[d];for($=f;$!==null;){var E=$;switch(E.tag){case 0:case 11:case 15:zi(8,E,s)}var x=E.child;if(x!==null)x.return=E,$=x;else for(;$!==null;){E=$;var _=E.sibling,C=E.return;if(wg(E),E===f){$=null;break}if(_!==null){_.return=C,$=_;break}$=C}}}var N=s.alternate;if(N!==null){var R=N.child;if(R!==null){N.child=null;do{var O=R.sibling;R.sibling=null,R=O}while(R!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zi(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var g=e.current;for($=g;$!==null;){a=$;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,$=v;else e:for(a=g;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:va(9,c)}}catch(D){ce(c,c.return,D)}if(c===a){$=null;break e}var P=c.sibling;if(P!==null){P.return=c.return,$=P;break e}$=c.return}}if(q=i,zn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ca,e)}catch{}r=!0}return r}finally{Y=n,it.transition=t}}return!1}function yf(e,t,n){t=Wr(n,t),t=cg(e,t,1),e=Sn(e,t,1),t=De(),e!==null&&(fs(e,1,t),Ke(e,t))}function ce(e,t,n){if(e.tag===3)yf(e,e,n);else for(;t!==null;){if(t.tag===3){yf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Wr(n,e),e=ug(t,e,1),t=Sn(t,e,1),e=De(),t!==null&&(fs(t,1,e),Ke(t,e));break}}t=t.return}}function Y1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>he()-Lu?Zn(e,0):Ou|=n),Ke(e,t)}function jg(e,t){t===0&&(e.mode&1?(t=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):t=1);var n=De();e=Jt(e,t),e!==null&&(fs(e,t,n),Ke(e,n))}function Q1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jg(e,n)}function Z1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),jg(e,n)}var Pg;Pg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,F1(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ie&&t.flags&1048576&&Lm(t,Lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var i=$r(t,Pe.current);Lr(t,n),i=Cu(null,t,r,e,i,n);var s=Nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(s=!0,Ao(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eu(t),i.updater=ga,t.stateNode=i,i._reactInternals=t,vc(t,r,e,n),t=wc(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&gu(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tx(r),e=ct(r,e),i){case 0:t=xc(null,t,r,e,n);break e;case 1:t=lf(null,t,r,e,n);break e;case 11:t=of(null,t,r,e,n);break e;case 14:t=af(null,t,r,ct(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),xc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),lf(e,t,r,i,n);case 3:e:{if(pg(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,$m(e,t),zo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Wr(Error(M(423)),t),t=cf(e,t,r,n,i);break e}else if(r!==i){i=Wr(Error(M(424)),t),t=cf(e,t,r,n,i);break e}else for(Xe=bn(t.stateNode.containerInfo.firstChild),Je=t,ie=!0,dt=null,n=Um(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){t=Yt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Bm(t),e===null&&pc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,cc(r,i)?a=null:s!==null&&cc(r,s)&&(t.flags|=32),fg(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&pc(t),null;case 13:return mg(e,t,n);case 4:return bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),of(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ee(Do,r._currentValue),r._currentValue=a,s!==null)if(gt(s.value,a)){if(s.children===i.children&&!He.current){t=Yt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=Kt(-1,n&-n),d.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var E=f.pending;E===null?d.next=d:(d.next=E.next,E.next=d),f.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),mc(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(M(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),mc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=st(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),af(e,t,r,i,n);case 15:return dg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),po(e,t),t.tag=1,We(r)?(e=!0,Ao(t)):e=!1,Lr(t,n),lg(t,r,i),vc(t,r,i,n),wc(null,t,r,!0,e,n);case 19:return gg(e,t,n);case 22:return hg(e,t,n)}throw Error(M(156,t.tag))};function Rg(e,t){return sm(e,t)}function ex(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new ex(e,t,n,r)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tx(e){if(typeof e=="function")return Uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===iu)return 11;if(e===su)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Uu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case xr:return er(n.children,i,s,t);case ru:a=8,i|=8;break;case $l:return e=rt(12,n,t,i|2),e.elementType=$l,e.lanes=s,e;case Bl:return e=rt(13,n,t,i),e.elementType=Bl,e.lanes=s,e;case Vl:return e=rt(19,n,t,i),e.elementType=Vl,e.lanes=s,e;case Bp:return xa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fp:a=10;break e;case $p:a=9;break e;case iu:a=11;break e;case su:a=14;break e;case un:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function er(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Bp,e.lanes=n,e.stateNode={isHidden:!1},e}function Tl(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fu(e,t,n,r,i,s,a,c,d){return e=new nx(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(s),e}function rx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ag(e){if(!e)return On;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(We(n))return Am(e,n,t)}return t}function Og(e,t,n,r,i,s,a,c,d){return e=Fu(n,r,!0,e,i,s,a,c,d),e.context=Ag(null),n=e.current,r=De(),i=In(n),s=Kt(r,i),s.callback=t??null,Sn(n,s,i),e.current.lanes=i,fs(e,i,r),Ke(e,r),e}function wa(e,t,n,r){var i=t.current,s=De(),a=In(i);return n=Ag(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(i,t,a),e!==null&&(mt(e,i,a,s),uo(e,i,a)),a}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){xf(e,t),(e=e.alternate)&&xf(e,t)}function ix(){return null}var Lg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bu(e){this._internalRoot=e}_a.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));wa(e,t,null,null)};_a.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){wa(null,e,null,null)}),t[Xt]=null}};function _a(e){this._internalRoot=e}_a.prototype.unstable_scheduleHydration=function(e){if(e){var t=hm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&pm(e)}};function Vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wf(){}function sx(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=Ko(a);s.call(f)}}var a=Og(t,r,e,0,null,!1,!1,"",wf);return e._reactRootContainer=a,e[Xt]=a.current,Qi(e.nodeType===8?e.parentNode:e),sr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var f=Ko(d);c.call(f)}}var d=Fu(e,0,!1,null,null,!1,!1,"",wf);return e._reactRootContainer=d,e[Xt]=d.current,Qi(e.nodeType===8?e.parentNode:e),sr(function(){wa(t,d,n,r)}),d}function Ea(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var d=Ko(a);c.call(d)}}wa(t,a,e,i)}else a=sx(n,t,e,i,r);return Ko(a)}um=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ci(t.pendingLanes);n!==0&&(lu(t,n|1),Ke(t,he()),!(q&6)&&(Kr=he()+500,zn()))}break;case 13:sr(function(){var r=Jt(e,1);if(r!==null){var i=De();mt(r,e,1,i)}}),$u(e,1)}};cu=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}$u(e,134217728)}};dm=function(e){if(e.tag===13){var t=In(e),n=Jt(e,t);if(n!==null){var r=De();mt(n,e,t,r)}$u(e,t)}};hm=function(){return Y};fm=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};Zl=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fa(r);if(!i)throw Error(M(90));Hp(r),Kl(r,i)}}}break;case"textarea":Kp(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};Zp=Du;em=sr;var ox={usingClientEntryPoint:!1,Events:[ms,Er,fa,Yp,Qp,Du]},Ei={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{ca=to.inject(ax),Et=to}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(t))throw Error(M(200));return rx(e,t,null,n)};Qe.createRoot=function(e,t){if(!Vu(e))throw Error(M(299));var n=!1,r="",i=Lg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Fu(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,Qi(e.nodeType===8?e.parentNode:e),new Bu(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=rm(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return sr(e)};Qe.hydrate=function(e,t,n){if(!ka(t))throw Error(M(200));return Ea(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Vu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Lg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Og(t,null,e,1,n??null,i,!1,s,a),e[Xt]=t.current,Qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _a(t)};Qe.render=function(e,t,n){if(!ka(t))throw Error(M(200));return Ea(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!ka(e))throw Error(M(40));return e._reactRootContainer?(sr(function(){Ea(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Du;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ka(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Ea(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)}catch(e){console.error(e)}}Dg(),Dp.exports=Qe;var lx=Dp.exports,_f=lx;Ul.createRoot=_f.createRoot,Ul.hydrateRoot=_f.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const kf="popstate";function cx(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:c}=r.location;return Rc("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Go(i)}return dx(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ux(){return Math.random().toString(36).substr(2,8)}function Ef(e,t){return{usr:e.state,key:e.key,idx:t}}function Rc(e,t,n,r){return n===void 0&&(n=null),as({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zr(t):t,{state:n,key:t&&t.key||r||ux()})}function Go(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function dx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,c=wn.Pop,d=null,f=E();f==null&&(f=0,a.replaceState(as({},a.state,{idx:f}),""));function E(){return(a.state||{idx:null}).idx}function x(){c=wn.Pop;let O=E(),S=O==null?null:O-f;f=O,d&&d({action:c,location:R.location,delta:S})}function _(O,S){c=wn.Push;let g=Rc(R.location,O,S);f=E()+1;let v=Ef(g,f),P=R.createHref(g);try{a.pushState(v,"",P)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(P)}s&&d&&d({action:c,location:R.location,delta:1})}function C(O,S){c=wn.Replace;let g=Rc(R.location,O,S);f=E();let v=Ef(g,f),P=R.createHref(g);a.replaceState(v,"",P),s&&d&&d({action:c,location:R.location,delta:0})}function N(O){let S=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof O=="string"?O:Go(O);return g=g.replace(/ $/,"%20"),fe(S,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,S)}let R={get action(){return c},get location(){return e(i,a)},listen(O){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(kf,x),d=O,()=>{i.removeEventListener(kf,x),d=null}},createHref(O){return t(i,O)},createURL:N,encodeLocation(O){let S=N(O);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:_,replace:C,go(O){return a.go(O)}};return R}var bf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bf||(bf={}));function hx(e,t,n){return n===void 0&&(n="/"),fx(e,t,n)}function fx(e,t,n,r){let i=typeof t=="string"?Zr(t):t,s=Wu(i.pathname||"/",n);if(s==null)return null;let a=Mg(e);px(a);let c=null;for(let d=0;c==null&&d<a.length;++d){let f=Tx(s);c=Ex(a[d],f)}return c}function Mg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};d.relativePath.startsWith("/")&&(fe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Nn([r,d.relativePath]),E=n.concat(d);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Mg(s.children,t,E,f)),!(s.path==null&&!s.index)&&t.push({path:f,score:_x(f,s.index),routesMeta:E})};return e.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,a);else for(let d of zg(s.path))i(s,a,d)}),t}function zg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=zg(r.join("/")),c=[];return c.push(...a.map(d=>d===""?s:[s,d].join("/"))),i&&c.push(...a),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function px(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mx=/^:[\w-]+$/,gx=3,vx=2,yx=1,xx=10,wx=-2,Sf=e=>e==="*";function _x(e,t){let n=e.split("/"),r=n.length;return n.some(Sf)&&(r+=wx),t&&(r+=vx),n.filter(i=>!Sf(i)).reduce((i,s)=>i+(mx.test(s)?gx:s===""?yx:xx),r)}function kx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ex(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let c=0;c<r.length;++c){let d=r[c],f=c===r.length-1,E=s==="/"?t:t.slice(s.length)||"/",x=bx({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},E),_=d.route;if(!x)return null;Object.assign(i,x.params),a.push({params:i,pathname:Nn([s,x.pathname]),pathnameBase:Px(Nn([s,x.pathnameBase])),route:_}),x.pathnameBase!=="/"&&(s=Nn([s,x.pathnameBase]))}return a}function bx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((f,E,x)=>{let{paramName:_,isOptional:C}=E;if(_==="*"){let R=c[x]||"";a=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const N=c[x];return C&&!N?f[_]=void 0:f[_]=(N||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:a,pattern:e}}function Sx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Tx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cx=e=>Ix.test(e);function Nx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zr(e):e,s;if(n)if(Cx(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Hu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Tf(n.substring(1),"/"):s=Tf(n,t)}else s=t;return{pathname:s,search:Rx(r),hash:Ax(i)}}function Tf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ku(e,t){let n=jx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zr(e):(i=as({},e),fe(!i.pathname||!i.pathname.includes("?"),Cl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Cl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Cl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,c;if(a==null)c=n;else{let x=t.length-1;if(!r&&a.startsWith("..")){let _=a.split("/");for(;_[0]==="..";)_.shift(),x-=1;i.pathname=_.join("/")}c=x>=0?t[x]:"/"}let d=Nx(i,c),f=a&&a!=="/"&&a.endsWith("/"),E=(s||a===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||E)&&(d.pathname+="/"),d}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),Px=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ax=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ox(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ug=["post","put","patch","delete"];new Set(Ug);const Lx=["get",...Ug];new Set(Lx);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}const qu=L.createContext(null),Dx=L.createContext(null),Un=L.createContext(null),ba=L.createContext(null),tn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Fg=L.createContext(null);function Mx(e,t){let{relative:n}=t===void 0?{}:t;ei()||fe(!1);let{basename:r,navigator:i}=L.useContext(Un),{hash:s,pathname:a,search:c}=Bg(e,{relative:n}),d=a;return r!=="/"&&(d=a==="/"?r:Nn([r,a])),i.createHref({pathname:d,search:c,hash:s})}function ei(){return L.useContext(ba)!=null}function nn(){return ei()||fe(!1),L.useContext(ba).location}function $g(e){L.useContext(Un).static||L.useLayoutEffect(e)}function Fn(){let{isDataRoute:e}=L.useContext(tn);return e?Yx():zx()}function zx(){ei()||fe(!1);let e=L.useContext(qu),{basename:t,future:n,navigator:r}=L.useContext(Un),{matches:i}=L.useContext(tn),{pathname:s}=nn(),a=JSON.stringify(Ku(i,n.v7_relativeSplatPath)),c=L.useRef(!1);return $g(()=>{c.current=!0}),L.useCallback(function(f,E){if(E===void 0&&(E={}),!c.current)return;if(typeof f=="number"){r.go(f);return}let x=Gu(f,JSON.parse(a),s,E.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:Nn([t,x.pathname])),(E.replace?r.replace:r.push)(x,E.state,E)},[t,r,a,s,e])}function Ux(){let{matches:e}=L.useContext(tn),t=e[e.length-1];return t?t.params:{}}function Bg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=L.useContext(Un),{matches:i}=L.useContext(tn),{pathname:s}=nn(),a=JSON.stringify(Ku(i,r.v7_relativeSplatPath));return L.useMemo(()=>Gu(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Fx(e,t){return $x(e,t)}function $x(e,t,n,r){ei()||fe(!1);let{navigator:i}=L.useContext(Un),{matches:s}=L.useContext(tn),a=s[s.length-1],c=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=nn(),E;if(t){var x;let O=typeof t=="string"?Zr(t):t;d==="/"||(x=O.pathname)!=null&&x.startsWith(d)||fe(!1),E=O}else E=f;let _=E.pathname||"/",C=_;if(d!=="/"){let O=d.replace(/^\//,"").split("/");C="/"+_.replace(/^\//,"").split("/").slice(O.length).join("/")}let N=hx(e,{pathname:C}),R=Kx(N&&N.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:Nn([d,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?d:Nn([d,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return t&&R?L.createElement(ba.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:wn.Pop}},R):R}function Bx(){let e=Jx(),t=Ox(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,null)}const Vx=L.createElement(Bx,null);class Hx extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?L.createElement(tn.Provider,{value:this.props.routeContext},L.createElement(Fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wx(e){let{routeContext:t,match:n,children:r}=e,i=L.useContext(qu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(tn.Provider,{value:t},r)}function Kx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let E=a.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);E>=0||fe(!1),a=a.slice(0,Math.min(a.length,E+1))}let d=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let E=0;E<a.length;E++){let x=a[E];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=E),x.route.id){let{loaderData:_,errors:C}=n,N=x.route.loader&&_[x.route.id]===void 0&&(!C||C[x.route.id]===void 0);if(x.route.lazy||N){d=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((E,x,_)=>{let C,N=!1,R=null,O=null;n&&(C=c&&x.route.id?c[x.route.id]:void 0,R=x.route.errorElement||Vx,d&&(f<0&&_===0?(Qx("route-fallback"),N=!0,O=null):f===_&&(N=!0,O=x.route.hydrateFallbackElement||null)));let S=t.concat(a.slice(0,_+1)),g=()=>{let v;return C?v=R:N?v=O:x.route.Component?v=L.createElement(x.route.Component,null):x.route.element?v=x.route.element:v=E,L.createElement(Wx,{match:x,routeContext:{outlet:E,matches:S,isDataRoute:n!=null},children:v})};return n&&(x.route.ErrorBoundary||x.route.errorElement||_===0)?L.createElement(Hx,{location:n.location,revalidation:n.revalidation,component:R,error:C,children:g(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):g()},null)}var Vg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vg||{}),Hg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hg||{});function Gx(e){let t=L.useContext(qu);return t||fe(!1),t}function qx(e){let t=L.useContext(Dx);return t||fe(!1),t}function Xx(e){let t=L.useContext(tn);return t||fe(!1),t}function Wg(e){let t=Xx(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Jx(){var e;let t=L.useContext(Fg),n=qx(),r=Wg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Yx(){let{router:e}=Gx(Vg.UseNavigateStable),t=Wg(Hg.UseNavigateStable),n=L.useRef(!1);return $g(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ls({fromRouteId:t},s)))},[e,t])}const If={};function Qx(e,t,n){If[e]||(If[e]=!0)}function Zx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yo(e){let{to:t,replace:n,state:r,relative:i}=e;ei()||fe(!1);let{future:s,static:a}=L.useContext(Un),{matches:c}=L.useContext(tn),{pathname:d}=nn(),f=Fn(),E=Gu(t,Ku(c,s.v7_relativeSplatPath),d,i==="path"),x=JSON.stringify(E);return L.useEffect(()=>f(JSON.parse(x),{replace:n,state:r,relative:i}),[f,x,i,n,r]),null}function Ge(e){fe(!1)}function ew(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:s,static:a=!1,future:c}=e;ei()&&fe(!1);let d=t.replace(/^\/*/,"/"),f=L.useMemo(()=>({basename:d,navigator:s,static:a,future:ls({v7_relativeSplatPath:!1},c)}),[d,c,s,a]);typeof r=="string"&&(r=Zr(r));let{pathname:E="/",search:x="",hash:_="",state:C=null,key:N="default"}=r,R=L.useMemo(()=>{let O=Wu(E,d);return O==null?null:{location:{pathname:O,search:x,hash:_,state:C,key:N},navigationType:i}},[d,E,x,_,C,N,i]);return R==null?null:L.createElement(Un.Provider,{value:f},L.createElement(ba.Provider,{children:n,value:R}))}function Cf(e){let{children:t,location:n}=e;return Fx(Ac(t),n)}new Promise(()=>{});function Ac(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let s=[...t,i];if(r.type===L.Fragment){n.push.apply(n,Ac(r.props.children,s));return}r.type!==Ge&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Ac(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oc(){return Oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oc.apply(this,arguments)}function tw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rw(e,t){return e.button===0&&(!t||t==="_self")&&!nw(e)}function Lc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function iw(e,t){let n=Lc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const sw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ow="6";try{window.__reactRouterVersion=ow}catch{}const aw="startTransition",Nf=Yy[aw];function lw(e){let{basename:t,children:n,future:r,window:i}=e,s=L.useRef();s.current==null&&(s.current=cx({window:i,v5Compat:!0}));let a=s.current,[c,d]=L.useState({action:a.action,location:a.location}),{v7_startTransition:f}=r||{},E=L.useCallback(x=>{f&&Nf?Nf(()=>d(x)):d(x)},[d,f]);return L.useLayoutEffect(()=>a.listen(E),[a,E]),L.useEffect(()=>Zx(r),[r]),L.createElement(ew,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:a,future:r})}const cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=L.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:c,target:d,to:f,preventScrollReset:E,viewTransition:x}=t,_=tw(t,sw),{basename:C}=L.useContext(Un),N,R=!1;if(typeof f=="string"&&uw.test(f)&&(N=f,cw))try{let v=new URL(window.location.href),P=f.startsWith("//")?new URL(v.protocol+f):new URL(f),D=Wu(P.pathname,C);P.origin===v.origin&&D!=null?f=D+P.search+P.hash:R=!0}catch{}let O=Mx(f,{relative:i}),S=dw(f,{replace:a,state:c,target:d,preventScrollReset:E,relative:i,viewTransition:x});function g(v){r&&r(v),v.defaultPrevented||S(v)}return L.createElement("a",Oc({},_,{href:N||O,onClick:R||s?r:g,ref:n,target:d}))});var jf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jf||(jf={}));var Pf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function dw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:c}=t===void 0?{}:t,d=Fn(),f=nn(),E=Bg(e,{relative:a});return L.useCallback(x=>{if(rw(x,n)){x.preventDefault();let _=r!==void 0?r:Go(f)===Go(E);d(e,{replace:_,state:i,preventScrollReset:s,relative:a,viewTransition:c})}},[f,d,E,r,i,n,e,s,a,c])}function hw(e){let t=L.useRef(Lc(e)),n=L.useRef(!1),r=nn(),i=L.useMemo(()=>iw(r.search,n.current?null:t.current),[r.search]),s=Fn(),a=L.useCallback((c,d)=>{const f=Lc(typeof c=="function"?c(i):c);n.current=!0,s("?"+f,d)},[s,i]);return[i,a]}const Kg=L.createContext(void 0),Sa=()=>{const e=L.useContext(Kg);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},fw=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},pw=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},mw=({children:e})=>{const[t,n]=L.useState(null),[r,i]=L.useState(!0),[s,a]=L.useState(null),c=async()=>{try{i(!0),a(null);const{type:f,value:E}=pw(),x=f==="subdomain"?`/api/tenants/by-subdomain/${E}`:`/api/tenants/by-domain/${encodeURIComponent(E)}`,_=await fetch(`http://localhost:3001${x}`);if(!_.ok)throw _.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const C=await _.json();if(C.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(C.status==="cancelled")throw new Error("Cuenta cancelada.");n(C),fw(C.branding)}catch(f){a(f instanceof Error?f.message:"Error desconocido")}finally{i(!1)}};L.useEffect(()=>{c()},[]);const d=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return l.jsx(Kg.Provider,{value:{tenant:t,loading:r,error:s,isWhiteLabel:d,refreshTenant:c},children:e})};var Rf={};/**
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
 */const Gg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],c=e[n++],d=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,c=a?e[i+1]:0,d=i+2<e.length,f=d?e[i+2]:0,E=s>>2,x=(s&3)<<4|c>>4;let _=(c&15)<<2|f>>6,C=f&63;d||(C=64,a||(_=64)),r.push(n[E],n[x],n[_],n[C])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const f=i<e.length?n[e.charAt(i)]:64;++i;const x=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||f==null||x==null)throw new vw;const _=s<<2|c>>4;if(r.push(_),f!==64){const C=c<<4&240|f>>2;if(r.push(C),x!==64){const N=f<<6&192|x;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yw=function(e){const t=Gg(e);return qg.encodeByteArray(t,!0)},qo=function(e){return yw(e).replace(/\./g,"")},Xg=function(e){try{return qg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ww=()=>xw().__FIREBASE_DEFAULTS__,_w=()=>{if(typeof process>"u"||typeof Rf>"u")return;const e=Rf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Xg(e[1]);return t&&JSON.parse(t)},Xu=()=>{try{return ww()||_w()||kw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jg=e=>{var t,n;return(n=(t=Xu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Yg=e=>{const t=Jg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Qg=()=>{var e;return(e=Xu())===null||e===void 0?void 0:e.config},Zg=e=>{var t;return(t=Xu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ew{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ev(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[qo(JSON.stringify(n)),qo(JSON.stringify(a)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Sw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cw(){const e=Me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Nw(){try{return typeof indexedDB=="object"}catch{return!1}}function jw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Pw="FirebaseError";class Nt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Pw,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Rw(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Nt(i,c,r)}}function Rw(e,t){return e.replace(Aw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Aw=/\{\$([^}]+)}/g;function Ow(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Af(s)&&Af(a)){if(!Xo(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(e){return e!==null&&typeof e=="object"}/**
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
 */function ys(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ji(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Pi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Lw(e,t){const n=new Dw(e,t);return n.subscribe.bind(n)}class Dw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Nl),i.error===void 0&&(i.error=Nl),i.complete===void 0&&(i.complete=Nl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Nl(){}/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class Ln{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class zw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ew;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fw(t))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qn){return this.instances.has(t)}getOptions(t=qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qn){return this.component?this.component.multipleInstances?t:qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uw(e){return e===qn?void 0:e}function Fw(e){return e.instantiationMode==="EAGER"}/**
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
 */class $w{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const Bw={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Vw=J.INFO,Hw={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Ww=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Hw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ju{constructor(t){this.name=t,this._logLevel=Vw,this._logHandler=Ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Kw=(e,t)=>t.some(n=>e instanceof n);let Of,Lf;function Gw(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qw(){return Lf||(Lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,Dc=new WeakMap,nv=new WeakMap,jl=new WeakMap,Yu=new WeakMap;function Xw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(jn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&tv.set(n,e)}).catch(()=>{}),Yu.set(t,e),t}function Jw(e){if(Dc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Dc.set(e,t)}let Mc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||nv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Yw(e){Mc=e(Mc)}function Qw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pl(this),t,...n);return nv.set(r,t.sort?t.sort():[t]),jn(r)}:qw().includes(e)?function(...t){return e.apply(Pl(this),t),jn(tv.get(this))}:function(...t){return jn(e.apply(Pl(this),t))}}function Zw(e){return typeof e=="function"?Qw(e):(e instanceof IDBTransaction&&Jw(e),Kw(e,Gw())?new Proxy(e,Mc):e)}function jn(e){if(e instanceof IDBRequest)return Xw(e);if(jl.has(e))return jl.get(e);const t=Zw(e);return t!==e&&(jl.set(e,t),Yu.set(t,e)),t}const Pl=e=>Yu.get(e);function e2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),c=jn(a);return r&&a.addEventListener("upgradeneeded",d=>{r(jn(a.result),d.oldVersion,d.newVersion,jn(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const t2=["get","getKey","getAll","getAllKeys","count"],n2=["put","add","delete","clear"],Rl=new Map;function Df(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rl.get(t))return Rl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=n2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||t2.includes(n)))return;const s=async function(a,...c){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),i&&d.done]))[0]};return Rl.set(t,s),s}Yw(e=>({...e,get:(t,n,r)=>Df(t,n)||e.get(t,n,r),has:(t,n)=>!!Df(t,n)||e.has(t,n)}));/**
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
 */class r2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zc="@firebase/app",Mf="0.10.13";/**
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
 */const Qt=new Ju("@firebase/app"),s2="@firebase/app-compat",o2="@firebase/analytics-compat",a2="@firebase/analytics",l2="@firebase/app-check-compat",c2="@firebase/app-check",u2="@firebase/auth",d2="@firebase/auth-compat",h2="@firebase/database",f2="@firebase/data-connect",p2="@firebase/database-compat",m2="@firebase/functions",g2="@firebase/functions-compat",v2="@firebase/installations",y2="@firebase/installations-compat",x2="@firebase/messaging",w2="@firebase/messaging-compat",_2="@firebase/performance",k2="@firebase/performance-compat",E2="@firebase/remote-config",b2="@firebase/remote-config-compat",S2="@firebase/storage",T2="@firebase/storage-compat",I2="@firebase/firestore",C2="@firebase/vertexai-preview",N2="@firebase/firestore-compat",j2="firebase",P2="10.14.1";/**
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
 */const Uc="[DEFAULT]",R2={[zc]:"fire-core",[s2]:"fire-core-compat",[a2]:"fire-analytics",[o2]:"fire-analytics-compat",[c2]:"fire-app-check",[l2]:"fire-app-check-compat",[u2]:"fire-auth",[d2]:"fire-auth-compat",[h2]:"fire-rtdb",[f2]:"fire-data-connect",[p2]:"fire-rtdb-compat",[m2]:"fire-fn",[g2]:"fire-fn-compat",[v2]:"fire-iid",[y2]:"fire-iid-compat",[x2]:"fire-fcm",[w2]:"fire-fcm-compat",[_2]:"fire-perf",[k2]:"fire-perf-compat",[E2]:"fire-rc",[b2]:"fire-rc-compat",[S2]:"fire-gcs",[T2]:"fire-gcs-compat",[I2]:"fire-fst",[N2]:"fire-fst-compat",[C2]:"fire-vertex","fire-js":"fire-js",[j2]:"fire-js-all"};/**
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
 */const Jo=new Map,A2=new Map,Fc=new Map;function zf(e,t){try{e.container.addComponent(t)}catch(n){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function or(e){const t=e.name;if(Fc.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;Fc.set(t,e);for(const n of Jo.values())zf(n,e);for(const n of A2.values())zf(n,e);return!0}function Ta(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kt(e){return e.settings!==void 0}/**
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
 */const O2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new vs("app","Firebase",O2);/**
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
 */class L2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const dr=P2;function rv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Uc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=Qg()),!n)throw Pn.create("no-options");const s=Jo.get(i);if(s){if(Xo(n,s.options)&&Xo(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const a=new $w(i);for(const d of Fc.values())a.addComponent(d);const c=new L2(n,r,a);return Jo.set(i,c),c}function Qu(e=Uc){const t=Jo.get(e);if(!t&&e===Uc&&Qg())return rv();if(!t)throw Pn.create("no-app",{appName:e});return t}function St(e,t,n){var r;let i=(r=R2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(c.join(" "));return}or(new Ln(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const D2="firebase-heartbeat-database",M2=1,cs="firebase-heartbeat-store";let Al=null;function iv(){return Al||(Al=e2(D2,M2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),Al}async function z2(e){try{const n=(await iv()).transaction(cs),r=await n.objectStore(cs).get(sv(e));return await n.done,r}catch(t){if(t instanceof Nt)Qt.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}}async function Uf(e,t){try{const r=(await iv()).transaction(cs,"readwrite");await r.objectStore(cs).put(t,sv(e)),await r.done}catch(n){if(n instanceof Nt)Qt.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function sv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const U2=1024,F2=30*24*60*60*1e3;class $2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ff();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=F2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Qt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ff(),{heartbeatsToSend:r,unsentEntries:i}=B2(this._heartbeatsCache.heartbeats),s=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qt.warn(n),""}}}function Ff(){return new Date().toISOString().substring(0,10)}function B2(e,t=U2){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),$f(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$f(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nw()?jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await z2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function $f(e){return qo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function H2(e){or(new Ln("platform-logger",t=>new r2(t),"PRIVATE")),or(new Ln("heartbeat",t=>new $2(t),"PRIVATE")),St(zc,Mf,e),St(zc,Mf,"esm2017"),St("fire-js","")}H2("");function Zu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W2=ov,av=new vs("auth","Firebase",ov());/**
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
 */const Yo=new Ju("@firebase/auth");function K2(e,...t){Yo.logLevel<=J.WARN&&Yo.warn(`Auth (${dr}): ${e}`,...t)}function xo(e,...t){Yo.logLevel<=J.ERROR&&Yo.error(`Auth (${dr}): ${e}`,...t)}/**
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
 */function vt(e,...t){throw ed(e,...t)}function Tt(e,...t){return ed(e,...t)}function lv(e,t,n){const r=Object.assign(Object.assign({},W2()),{[t]:n});return new vs("auth","Firebase",r).create(t,{appName:e.name})}function Gt(e){return lv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ed(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return av.create(e,...t)}function B(e,t,...n){if(!e)throw ed(t,...n)}function Vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xo(t),new Error(t)}function Zt(e,t){e||Vt(t)}/**
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
 */function $c(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function G2(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function q2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G2()||Tw()||"connection"in navigator)?navigator.onLine:!0}function X2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class xs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zt(n>t,"Short delay should be less than long delay!"),this.isMobile=bw()||Iw()}get(){return q2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function td(e,t){Zt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class cv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Y2=new xs(3e4,6e4);function rn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jt(e,t,n,r,i={}){return uv(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const c=ys(Object.assign({key:e.config.apiKey},a)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const f=Object.assign({method:t,headers:d},s);return Sw()||(f.referrerPolicy="no-referrer"),cv.fetch()(dv(e,e.config.apiHost,n,c),f)})}async function uv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},J2),t);try{const i=new Z2(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw no(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[d,f]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(e,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw no(e,"email-already-in-use",a);if(d==="USER_DISABLED")throw no(e,"user-disabled",a);const E=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw lv(e,E,f);vt(e,E)}}catch(i){if(i instanceof Nt)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function ws(e,t,n,r,i={}){const s=await jt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function dv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?td(e.config,i):`${e.config.apiScheme}://${i}`}function Q2(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Z2{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),Y2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}function Vf(e){return e!==void 0&&e.enterprise!==void 0}class e_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Q2(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function t_(e,t){return jt(e,"GET","/v2/recaptchaConfig",rn(e,t))}/**
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
 */async function n_(e,t){return jt(e,"POST","/v1/accounts:delete",t)}async function hv(e,t){return jt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function $i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function r_(e,t=!1){const n=yt(e),r=await n.getIdToken(t),i=nd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$i(Ol(i.auth_time)),issuedAtTime:$i(Ol(i.iat)),expirationTime:$i(Ol(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ol(e){return Number(e)*1e3}function nd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xg(n);return i?JSON.parse(i):(xo("Failed to decode base64 JWT payload"),null)}catch(i){return xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hf(e){const t=nd(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Gr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Nt&&i_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function i_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class s_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Gr(e,hv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?fv(s.providerUserInfo):[],c=a_(e.providerData,a),d=e.isAnonymous,f=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),E=d?f:!1,x={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:E};Object.assign(e,x)}async function o_(e){const t=yt(e);await Qo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function a_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function fv(e){return e.map(t=>{var{providerId:n}=t,r=Zu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function l_(e,t){const n=await uv(e,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=dv(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cv.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c_(e,t){return jt(e,"POST","/v2/accounts:revokeToken",rn(e,t))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Hf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=Hf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await l_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Mr;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function cn(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ht{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Zu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return r_(this,t)}reload(){return o_(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Gt(this.auth));const t=await this.getIdToken();return await Gr(this,n_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,c,d,f,E;const x=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,S=(f=n.createdAt)!==null&&f!==void 0?f:void 0,g=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:v,emailVerified:P,isAnonymous:D,providerData:z,stsTokenManager:w}=n;B(v&&w,t,"internal-error");const m=Mr.fromJSON(this.name,w);B(typeof v=="string",t,"internal-error"),cn(x,t.name),cn(_,t.name),B(typeof P=="boolean",t,"internal-error"),B(typeof D=="boolean",t,"internal-error"),cn(C,t.name),cn(N,t.name),cn(R,t.name),cn(O,t.name),cn(S,t.name),cn(g,t.name);const y=new Ht({uid:v,auth:t,email:_,emailVerified:P,displayName:x,isAnonymous:D,photoURL:N,phoneNumber:C,tenantId:R,stsTokenManager:m,createdAt:S,lastLoginAt:g});return z&&Array.isArray(z)&&(y.providerData=z.map(b=>Object.assign({},b))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(t,n,r=!1){const i=new Mr;i.updateFromServerResponse(n);const s=new Ht({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Mr;c.updateFromIdToken(r);const d=new Ht({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,f),d}}/**
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
 */const Wf=new Map;function Wt(e){Zt(e instanceof Function,"Expected a class definition");let t=Wf.get(e);return t?(Zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wf.set(e,t),t)}/**
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
 */class pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}pv.type="NONE";const Kf=pv;/**
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
 */function wo(e,t,n){return`firebase:${e}:${t}:${n}`}class zr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ht._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new zr(Wt(Kf),t,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Wt(Kf);const a=wo(r,t.config.apiKey,t.name);let c=null;for(const f of n)try{const E=await f._get(a);if(E){const x=Ht._fromJSON(t,E);f!==s&&(c=x),s=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new zr(s,t,r):(s=d[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new zr(s,t,r))}}/**
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
 */function Gf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wv(t))return"Blackberry";if(_v(t))return"Webos";if(gv(t))return"Safari";if((t.includes("chrome/")||vv(t))&&!t.includes("edge/"))return"Chrome";if(xv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mv(e=Me()){return/firefox\//i.test(e)}function gv(e=Me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vv(e=Me()){return/crios\//i.test(e)}function yv(e=Me()){return/iemobile/i.test(e)}function xv(e=Me()){return/android/i.test(e)}function wv(e=Me()){return/blackberry/i.test(e)}function _v(e=Me()){return/webos/i.test(e)}function rd(e=Me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function u_(e=Me()){var t;return rd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function d_(){return Cw()&&document.documentMode===10}function kv(e=Me()){return rd(e)||xv(e)||_v(e)||wv(e)||/windows phone/i.test(e)||yv(e)}/**
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
 */function Ev(e,t=[]){let n;switch(e){case"Browser":n=Gf(Me());break;case"Worker":n=`${Gf(Me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${r}`}/**
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
 */class h_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,c)=>{try{const d=t(s);a(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function f_(e,t={}){return jt(e,"GET","/v2/passwordPolicy",rn(e,t))}/**
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
 */const p_=6;class m_{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:p_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class g_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new h_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await hv(this,{idToken:t}),r=await Ht._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(t);(!a||a===c)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Qo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=X2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kt(this.app))return Promise.reject(Gt(this));const n=t?yt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await f_(this),n=new m_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Wt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,i);return()=>{a=!0,d()}}else{const d=t.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&K2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $n(e){return yt(e)}class qf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lw(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v_(e){Ia=e}function bv(e){return Ia.loadJS(e)}function y_(){return Ia.recaptchaEnterpriseScript}function x_(){return Ia.gapiScript}function w_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const __="recaptcha-enterprise",k_="NO_RECAPTCHA";class E_{constructor(t){this.type=__,this.auth=$n(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{t_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new e_(d);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,a(f.siteKey)}}).catch(d=>{c(d)})})}function i(s,a,c){const d=window.grecaptcha;Vf(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:t}).then(f=>{a(f)}).catch(()=>{a(k_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&Vf(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=y_();d.length!==0&&(d+=c),bv(d).then(()=>{i(c,s,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}}async function Xf(e,t,n,r=!1){const i=new E_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zo(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Xf(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
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
 */function b_(e,t){const n=Ta(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xo(s,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function S_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function T_(e,t,n){const r=$n(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Sv(t),{host:a,port:c}=I_(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),C_()}function Sv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function I_(e){const t=Sv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Jf(a)}}}function Jf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function C_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class id{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(t){return Vt("not implemented")}_linkToIdToken(t,n){return Vt("not implemented")}_getReauthenticationResolver(t){return Vt("not implemented")}}async function N_(e,t){return jt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function j_(e,t){return ws(e,"POST","/v1/accounts:signInWithPassword",rn(e,t))}async function P_(e,t){return jt(e,"POST","/v1/accounts:sendOobCode",rn(e,t))}async function R_(e,t){return P_(e,t)}/**
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
 */async function A_(e,t){return ws(e,"POST","/v1/accounts:signInWithEmailLink",rn(e,t))}async function O_(e,t){return ws(e,"POST","/v1/accounts:signInWithEmailLink",rn(e,t))}/**
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
 */class us extends id{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new us(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new us(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zo(t,n,"signInWithPassword",j_);case"emailLink":return A_(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zo(t,r,"signUpPassword",N_);case"emailLink":return O_(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ur(e,t){return ws(e,"POST","/v1/accounts:signInWithIdp",rn(e,t))}/**
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
 */const L_="http://localhost";class ar extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ar(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Zu(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ar(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Ur(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Ur(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ur(t,n)}buildRequest(){const t={requestUri:L_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ys(n)}return t}}/**
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
 */function D_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M_(e){const t=ji(Pi(e)).link,n=t?ji(Pi(t)).deep_link_id:null,r=ji(Pi(e)).deep_link_id;return(r?ji(Pi(r)).link:null)||r||n||t||e}class sd{constructor(t){var n,r,i,s,a,c;const d=ji(Pi(t)),f=(n=d.apiKey)!==null&&n!==void 0?n:null,E=(r=d.oobCode)!==null&&r!==void 0?r:null,x=D_((i=d.mode)!==null&&i!==void 0?i:null);B(f&&E&&x,"argument-error"),this.apiKey=f,this.operation=x,this.code=E,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=d.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=M_(t);try{return new sd(n)}catch{return null}}}/**
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
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(t,n){return us._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=sd.parseLink(n);return B(r,"argument-error"),us._fromEmailAndCode(t,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends Tv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends _s{constructor(){super("facebook.com")}static credential(t){return ar._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pn.credential(t.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class mn extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ar._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
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
 */class gn extends _s{constructor(){super("github.com")}static credential(t){return ar._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return gn.credential(t.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class vn extends _s{constructor(){super("twitter.com")}static credential(t,n){return ar._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */async function z_(e,t){return ws(e,"POST","/v1/accounts:signUp",rn(e,t))}/**
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
 */class lr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ht._fromIdTokenResponse(t,r,i),a=Yf(r);return new lr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Yf(r);return new lr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Yf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ea extends Nt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ea(t,n,r,i)}}function Iv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(e,s,t,r):s})}async function U_(e,t,n=!1){const r=await Gr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lr._forOperation(e,"link",r)}/**
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
 */async function F_(e,t,n=!1){const{auth:r}=e;if(kt(r.app))return Promise.reject(Gt(r));const i="reauthenticate";try{const s=await Gr(e,Iv(r,i,t,e),n);B(s.idToken,r,"internal-error");const a=nd(s.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(e.uid===c,r,"user-mismatch"),lr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
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
 */async function Cv(e,t,n=!1){if(kt(e.app))return Promise.reject(Gt(e));const r="signIn",i=await Iv(e,r,t),s=await lr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function $_(e,t){return Cv($n(e),t)}/**
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
 */async function Nv(e){const t=$n(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function B_(e,t,n){const r=$n(e);await Zo(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",R_)}async function V_(e,t,n){if(kt(e.app))return Promise.reject(Gt(e));const r=$n(e),a=await Zo(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",z_).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Nv(e),d}),c=await lr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function H_(e,t,n){return kt(e.app)?Promise.reject(Gt(e)):$_(yt(e),ti.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nv(e),r})}/**
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
 */async function W_(e,t){return jt(e,"POST","/v1/accounts:update",t)}/**
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
 */async function K_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=yt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Gr(r,W_(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function G_(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function q_(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function X_(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}function J_(e){return yt(e).signOut()}const ta="__sak";/**
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
 */class jv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Y_=1e3,Q_=10;class Pv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);d_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Q_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pv.type="LOCAL";const Z_=Pv;/**
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
 */class Rv extends jv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Rv.type="SESSION";const Av=Rv;/**
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
 */function ek(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ca{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ca(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async f=>f(n.origin,s)),d=await ek(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
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
 */function od(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class tk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,d)=>{const f=od("",20);i.port1.start();const E=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(x){const _=x;if(_.data.eventId===f)switch(_.data.status){case"ack":clearTimeout(E),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(E),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function It(){return window}function nk(e){It().location.href=e}/**
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
 */function Ov(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ik(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function sk(){return Ov()?self:null}/**
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
 */const Lv="firebaseLocalStorageDb",ok=1,na="firebaseLocalStorage",Dv="fbase_key";class ks{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(e,t){return e.transaction([na],t?"readwrite":"readonly").objectStore(na)}function ak(){const e=indexedDB.deleteDatabase(Lv);return new ks(e).toPromise()}function Vc(){const e=indexedDB.open(Lv,ok);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(na,{keyPath:Dv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(na)?t(r):(r.close(),await ak(),t(await Vc()))})})}async function Qf(e,t,n){const r=Na(e,!0).put({[Dv]:t,value:n});return new ks(r).toPromise()}async function lk(e,t){const n=Na(e,!1).get(t),r=await new ks(n).toPromise();return r===void 0?null:r.value}function Zf(e,t){const n=Na(e,!0).delete(t);return new ks(n).toPromise()}const ck=800,uk=3;class Mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>uk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(sk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await rk(),!this.activeServiceWorker)return;this.sender=new tk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vc();return await Qf(t,ta,"1"),await Zf(t,ta),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>lk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Na(i,!1).getAll();return new ks(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mv.type="LOCAL";const dk=Mv;new xs(3e4,6e4);/**
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
 */function hk(e,t){return t?Wt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ad extends id{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ur(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ur(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ur(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function fk(e){return Cv(e.auth,new ad(e),e.bypassAuthState)}function pk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),F_(n,new ad(e),e.bypassAuthState)}async function mk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),U_(n,new ad(e),e.bypassAuthState)}/**
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
 */class zv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=t;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fk;case"linkViaPopup":case"linkViaRedirect":return mk;case"reauthViaPopup":case"reauthViaRedirect":return pk;default:vt(this.auth,"internal-error")}}resolve(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gk=new xs(2e3,1e4);class jr extends zv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const t=od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,gk.get())};t()}}jr.currentPopupAction=null;/**
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
 */const vk="pendingRedirect",_o=new Map;class yk extends zv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=_o.get(this.auth._key());if(!t){try{const r=await xk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}_o.set(this.auth._key(),t)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xk(e,t){const n=kk(t),r=_k(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wk(e,t){_o.set(e._key(),t)}function _k(e){return Wt(e._redirectPersistence)}function kk(e){return wo(vk,e.config.apiKey,e.name)}async function Ek(e,t,n=!1){if(kt(e.app))return Promise.reject(Gt(e));const r=$n(e),i=hk(r,t),a=await new yk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const bk=10*60*1e3;class Sk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Tk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Uv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(t))}saveEventToCache(t){this.cachedEventUids.add(ep(t)),this.lastProcessedEventTime=Date.now()}}function ep(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Uv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Tk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uv(e);default:return!1}}/**
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
 */async function Ik(e,t={}){return jt(e,"GET","/v1/projects",t)}/**
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
 */const Ck=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nk=/^https?/;async function jk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ik(e);for(const n of t)try{if(Pk(n))return}catch{}vt(e,"unauthorized-domain")}function Pk(e){const t=$c(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Nk.test(n))return!1;if(Ck.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Rk=new xs(3e4,6e4);function tp(){const e=It().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Ak(e){return new Promise((t,n)=>{var r,i,s;function a(){tp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(Tt(e,"network-request-failed"))},timeout:Rk.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)a();else{const c=w_("iframefcb");return It()[c]=()=>{gapi.load?a():n(Tt(e,"network-request-failed"))},bv(`${x_()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw ko=null,t})}let ko=null;function Ok(e){return ko=ko||Ak(e),ko}/**
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
 */const Lk=new xs(5e3,15e3),Dk="__/auth/iframe",Mk="emulator/auth/iframe",zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fk(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?td(t,Mk):`https://${e.config.authDomain}/${Dk}`,r={apiKey:t.apiKey,appName:e.name,v:dr},i=Uk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ys(r).slice(1)}`}async function $k(e){const t=await Ok(e),n=It().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:Fk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Tt(e,"network-request-failed"),c=It().setTimeout(()=>{s(a)},Lk.get());function d(){It().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{s(a)})}))}/**
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
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vk=500,Hk=600,Wk="_blank",Kk="http://localhost";class np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gk(e,t,n,r=Vk,i=Hk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Bk),{width:r.toString(),height:i.toString(),top:s,left:a}),f=Me().toLowerCase();n&&(c=vv(f)?Wk:n),mv(f)&&(t=t||Kk,d.scrollbars="yes");const E=Object.entries(d).reduce((_,[C,N])=>`${_}${C}=${N},`,"");if(u_(f)&&c!=="_self")return qk(t||"",c),new np(null);const x=window.open(t||"",c,E);B(x,e,"popup-blocked");try{x.focus()}catch{}return new np(x)}function qk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Xk="__/auth/handler",Jk="emulator/auth/handler",Yk=encodeURIComponent("fac");async function rp(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:dr,eventId:i};if(t instanceof Tv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Ow(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,x]of Object.entries({}))a[E]=x}if(t instanceof _s){const E=t.getScopes().filter(x=>x!=="");E.length>0&&(a.scopes=E.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const E of Object.keys(c))c[E]===void 0&&delete c[E];const d=await e._getAppCheckToken(),f=d?`#${Yk}=${encodeURIComponent(d)}`:"";return`${Qk(e)}?${ys(c).slice(1)}${f}`}function Qk({config:e}){return e.emulator?td(e,Jk):`https://${e.authDomain}/${Xk}`}/**
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
 */const Ll="webStorageSupport";class Zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Av,this._completeRedirectFn=Ek,this._overrideRedirectResult=wk}async _openPopup(t,n,r,i){var s;Zt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await rp(t,n,r,$c(),i);return Gk(t,a,od())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await rp(t,n,r,$c(),i);return nk(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await $k(t),r=new Sk(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ll,{type:Ll},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ll];a!==void 0&&n(!!a),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return kv()||gv()||rd()}}const eE=Zk;var ip="@firebase/auth",sp="1.7.9";/**
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
 */class tE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rE(e){or(new Ln("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ev(e)},f=new g_(r,i,s,d);return S_(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),or(new Ln("auth-internal",t=>{const n=$n(t.getProvider("auth").getImmediate());return(r=>new tE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(ip,sp,nE(e)),St(ip,sp,"esm2017")}/**
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
 */const iE=5*60,sE=Zg("authIdTokenMaxAge")||iE;let op=null;const oE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sE)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aE(e=Qu()){const t=Ta(e,"auth");if(t.isInitialized())return t.getImmediate();const n=b_(e,{popupRedirectResolver:eE,persistence:[dk,Z_,Av]}),r=Zg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=oE(s.toString());q_(n,a,()=>a(n.currentUser)),G_(n,c=>a(c))}}const i=Jg("auth");return i&&T_(n,`http://${i}`),n}function lE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}v_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rE("Browser");var cE="firebase",uE="10.14.1";/**
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
 */St(cE,uE,"app");var ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fv;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,m){function y(){}y.prototype=m.prototype,w.D=m.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(b,I,T){for(var k=Array(arguments.length-2),me=2;me<arguments.length;me++)k[me-2]=arguments[me];return m.prototype[I].apply(b,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,y){y||(y=0);var b=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)b[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)b[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=w.g[0],y=w.g[1],I=w.g[2];var T=w.g[3],k=m+(T^y&(I^T))+b[0]+3614090360&4294967295;m=y+(k<<7&4294967295|k>>>25),k=T+(I^m&(y^I))+b[1]+3905402710&4294967295,T=m+(k<<12&4294967295|k>>>20),k=I+(y^T&(m^y))+b[2]+606105819&4294967295,I=T+(k<<17&4294967295|k>>>15),k=y+(m^I&(T^m))+b[3]+3250441966&4294967295,y=I+(k<<22&4294967295|k>>>10),k=m+(T^y&(I^T))+b[4]+4118548399&4294967295,m=y+(k<<7&4294967295|k>>>25),k=T+(I^m&(y^I))+b[5]+1200080426&4294967295,T=m+(k<<12&4294967295|k>>>20),k=I+(y^T&(m^y))+b[6]+2821735955&4294967295,I=T+(k<<17&4294967295|k>>>15),k=y+(m^I&(T^m))+b[7]+4249261313&4294967295,y=I+(k<<22&4294967295|k>>>10),k=m+(T^y&(I^T))+b[8]+1770035416&4294967295,m=y+(k<<7&4294967295|k>>>25),k=T+(I^m&(y^I))+b[9]+2336552879&4294967295,T=m+(k<<12&4294967295|k>>>20),k=I+(y^T&(m^y))+b[10]+4294925233&4294967295,I=T+(k<<17&4294967295|k>>>15),k=y+(m^I&(T^m))+b[11]+2304563134&4294967295,y=I+(k<<22&4294967295|k>>>10),k=m+(T^y&(I^T))+b[12]+1804603682&4294967295,m=y+(k<<7&4294967295|k>>>25),k=T+(I^m&(y^I))+b[13]+4254626195&4294967295,T=m+(k<<12&4294967295|k>>>20),k=I+(y^T&(m^y))+b[14]+2792965006&4294967295,I=T+(k<<17&4294967295|k>>>15),k=y+(m^I&(T^m))+b[15]+1236535329&4294967295,y=I+(k<<22&4294967295|k>>>10),k=m+(I^T&(y^I))+b[1]+4129170786&4294967295,m=y+(k<<5&4294967295|k>>>27),k=T+(y^I&(m^y))+b[6]+3225465664&4294967295,T=m+(k<<9&4294967295|k>>>23),k=I+(m^y&(T^m))+b[11]+643717713&4294967295,I=T+(k<<14&4294967295|k>>>18),k=y+(T^m&(I^T))+b[0]+3921069994&4294967295,y=I+(k<<20&4294967295|k>>>12),k=m+(I^T&(y^I))+b[5]+3593408605&4294967295,m=y+(k<<5&4294967295|k>>>27),k=T+(y^I&(m^y))+b[10]+38016083&4294967295,T=m+(k<<9&4294967295|k>>>23),k=I+(m^y&(T^m))+b[15]+3634488961&4294967295,I=T+(k<<14&4294967295|k>>>18),k=y+(T^m&(I^T))+b[4]+3889429448&4294967295,y=I+(k<<20&4294967295|k>>>12),k=m+(I^T&(y^I))+b[9]+568446438&4294967295,m=y+(k<<5&4294967295|k>>>27),k=T+(y^I&(m^y))+b[14]+3275163606&4294967295,T=m+(k<<9&4294967295|k>>>23),k=I+(m^y&(T^m))+b[3]+4107603335&4294967295,I=T+(k<<14&4294967295|k>>>18),k=y+(T^m&(I^T))+b[8]+1163531501&4294967295,y=I+(k<<20&4294967295|k>>>12),k=m+(I^T&(y^I))+b[13]+2850285829&4294967295,m=y+(k<<5&4294967295|k>>>27),k=T+(y^I&(m^y))+b[2]+4243563512&4294967295,T=m+(k<<9&4294967295|k>>>23),k=I+(m^y&(T^m))+b[7]+1735328473&4294967295,I=T+(k<<14&4294967295|k>>>18),k=y+(T^m&(I^T))+b[12]+2368359562&4294967295,y=I+(k<<20&4294967295|k>>>12),k=m+(y^I^T)+b[5]+4294588738&4294967295,m=y+(k<<4&4294967295|k>>>28),k=T+(m^y^I)+b[8]+2272392833&4294967295,T=m+(k<<11&4294967295|k>>>21),k=I+(T^m^y)+b[11]+1839030562&4294967295,I=T+(k<<16&4294967295|k>>>16),k=y+(I^T^m)+b[14]+4259657740&4294967295,y=I+(k<<23&4294967295|k>>>9),k=m+(y^I^T)+b[1]+2763975236&4294967295,m=y+(k<<4&4294967295|k>>>28),k=T+(m^y^I)+b[4]+1272893353&4294967295,T=m+(k<<11&4294967295|k>>>21),k=I+(T^m^y)+b[7]+4139469664&4294967295,I=T+(k<<16&4294967295|k>>>16),k=y+(I^T^m)+b[10]+3200236656&4294967295,y=I+(k<<23&4294967295|k>>>9),k=m+(y^I^T)+b[13]+681279174&4294967295,m=y+(k<<4&4294967295|k>>>28),k=T+(m^y^I)+b[0]+3936430074&4294967295,T=m+(k<<11&4294967295|k>>>21),k=I+(T^m^y)+b[3]+3572445317&4294967295,I=T+(k<<16&4294967295|k>>>16),k=y+(I^T^m)+b[6]+76029189&4294967295,y=I+(k<<23&4294967295|k>>>9),k=m+(y^I^T)+b[9]+3654602809&4294967295,m=y+(k<<4&4294967295|k>>>28),k=T+(m^y^I)+b[12]+3873151461&4294967295,T=m+(k<<11&4294967295|k>>>21),k=I+(T^m^y)+b[15]+530742520&4294967295,I=T+(k<<16&4294967295|k>>>16),k=y+(I^T^m)+b[2]+3299628645&4294967295,y=I+(k<<23&4294967295|k>>>9),k=m+(I^(y|~T))+b[0]+4096336452&4294967295,m=y+(k<<6&4294967295|k>>>26),k=T+(y^(m|~I))+b[7]+1126891415&4294967295,T=m+(k<<10&4294967295|k>>>22),k=I+(m^(T|~y))+b[14]+2878612391&4294967295,I=T+(k<<15&4294967295|k>>>17),k=y+(T^(I|~m))+b[5]+4237533241&4294967295,y=I+(k<<21&4294967295|k>>>11),k=m+(I^(y|~T))+b[12]+1700485571&4294967295,m=y+(k<<6&4294967295|k>>>26),k=T+(y^(m|~I))+b[3]+2399980690&4294967295,T=m+(k<<10&4294967295|k>>>22),k=I+(m^(T|~y))+b[10]+4293915773&4294967295,I=T+(k<<15&4294967295|k>>>17),k=y+(T^(I|~m))+b[1]+2240044497&4294967295,y=I+(k<<21&4294967295|k>>>11),k=m+(I^(y|~T))+b[8]+1873313359&4294967295,m=y+(k<<6&4294967295|k>>>26),k=T+(y^(m|~I))+b[15]+4264355552&4294967295,T=m+(k<<10&4294967295|k>>>22),k=I+(m^(T|~y))+b[6]+2734768916&4294967295,I=T+(k<<15&4294967295|k>>>17),k=y+(T^(I|~m))+b[13]+1309151649&4294967295,y=I+(k<<21&4294967295|k>>>11),k=m+(I^(y|~T))+b[4]+4149444226&4294967295,m=y+(k<<6&4294967295|k>>>26),k=T+(y^(m|~I))+b[11]+3174756917&4294967295,T=m+(k<<10&4294967295|k>>>22),k=I+(m^(T|~y))+b[2]+718787259&4294967295,I=T+(k<<15&4294967295|k>>>17),k=y+(T^(I|~m))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(I+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+T&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var y=m-this.blockSize,b=this.B,I=this.h,T=0;T<m;){if(I==0)for(;T<=y;)i(this,w,T),T+=this.blockSize;if(typeof w=="string"){for(;T<m;)if(b[I++]=w.charCodeAt(T++),I==this.blockSize){i(this,b),I=0;break}}else for(;T<m;)if(b[I++]=w[T++],I==this.blockSize){i(this,b),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var y=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=y&255,y/=256;for(this.u(w),w=Array(16),m=y=0;4>m;++m)for(var b=0;32>b;b+=8)w[y++]=this.g[m]>>>b&255;return w};function s(w,m){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=m(w)}function a(w,m){this.h=m;for(var y=[],b=!0,I=w.length-1;0<=I;I--){var T=w[I]|0;b&&T==m||(y[I]=T,b=!1)}this.g=y}var c={};function d(w){return-128<=w&&128>w?s(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return x;if(0>w)return O(f(-w));for(var m=[],y=1,b=0;w>=y;b++)m[b]=w/y|0,y*=4294967296;return new a(m,0)}function E(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return O(E(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(m,8)),b=x,I=0;I<w.length;I+=8){var T=Math.min(8,w.length-I),k=parseInt(w.substring(I,I+T),m);8>T?(T=f(Math.pow(m,T)),b=b.j(T).add(f(k))):(b=b.j(y),b=b.add(f(k)))}return b}var x=d(0),_=d(1),C=d(16777216);e=a.prototype,e.m=function(){if(R(this))return-O(this).m();for(var w=0,m=1,y=0;y<this.g.length;y++){var b=this.i(y);w+=(0<=b?b:4294967296+b)*m,m*=4294967296}return w},e.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(R(this))return"-"+O(this).toString(w);for(var m=f(Math.pow(w,6)),y=this,b="";;){var I=P(y,m).g;y=S(y,I.j(m));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=I,N(y))return T+b;for(;6>T.length;)T="0"+T;b=T+b}},e.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function R(w){return w.h==-1}e.l=function(w){return w=S(this,w),R(w)?-1:N(w)?0:1};function O(w){for(var m=w.g.length,y=[],b=0;b<m;b++)y[b]=~w.g[b];return new a(y,~w.h).add(_)}e.abs=function(){return R(this)?O(this):this},e.add=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],b=0,I=0;I<=m;I++){var T=b+(this.i(I)&65535)+(w.i(I)&65535),k=(T>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);b=k>>>16,T&=65535,k&=65535,y[I]=k<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function S(w,m){return w.add(O(m))}e.j=function(w){if(N(this)||N(w))return x;if(R(this))return R(w)?O(this).j(O(w)):O(O(this).j(w));if(R(w))return O(this.j(O(w)));if(0>this.l(C)&&0>w.l(C))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,y=[],b=0;b<2*m;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(var I=0;I<w.g.length;I++){var T=this.i(b)>>>16,k=this.i(b)&65535,me=w.i(I)>>>16,Bn=w.i(I)&65535;y[2*b+2*I]+=k*Bn,g(y,2*b+2*I),y[2*b+2*I+1]+=T*Bn,g(y,2*b+2*I+1),y[2*b+2*I+1]+=k*me,g(y,2*b+2*I+1),y[2*b+2*I+2]+=T*me,g(y,2*b+2*I+2)}for(b=0;b<m;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=m;b<2*m;b++)y[b]=0;return new a(y,0)};function g(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function v(w,m){this.g=w,this.h=m}function P(w,m){if(N(m))throw Error("division by zero");if(N(w))return new v(x,x);if(R(w))return m=P(O(w),m),new v(O(m.g),O(m.h));if(R(m))return m=P(w,O(m)),new v(O(m.g),m.h);if(30<w.g.length){if(R(w)||R(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,b=m;0>=b.l(w);)y=D(y),b=D(b);var I=z(y,1),T=z(b,1);for(b=z(b,2),y=z(y,2);!N(b);){var k=T.add(b);0>=k.l(w)&&(I=I.add(y),T=k),b=z(b,1),y=z(y,1)}return m=S(w,I.j(m)),new v(I,m)}for(I=x;0<=w.l(m);){for(y=Math.max(1,Math.floor(w.m()/m.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),T=f(y),k=T.j(m);R(k)||0<k.l(w);)y-=b,T=f(y),k=T.j(m);N(T)&&(T=_),I=I.add(T),w=S(w,k)}return new v(I,w)}e.A=function(w){return P(this,w).h},e.and=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],b=0;b<m;b++)y[b]=this.i(b)&w.i(b);return new a(y,this.h&w.h)},e.or=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],b=0;b<m;b++)y[b]=this.i(b)|w.i(b);return new a(y,this.h|w.h)},e.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],b=0;b<m;b++)y[b]=this.i(b)^w.i(b);return new a(y,this.h^w.h)};function D(w){for(var m=w.g.length+1,y=[],b=0;b<m;b++)y[b]=w.i(b)<<1|w.i(b-1)>>>31;return new a(y,w.h)}function z(w,m){var y=m>>5;m%=32;for(var b=w.g.length-y,I=[],T=0;T<b;T++)I[T]=0<m?w.i(T+y)>>>m|w.i(T+y+1)<<32-m:w.i(T+y);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=E,Fv=a}).apply(typeof ap<"u"?ap:typeof self<"u"?self:typeof window<"u"?window:{});var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ro=="object"&&ro];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var j=o[p];if(!(j in h))break e;h=h[j]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,j={next:function(){if(!p&&h<o.length){var A=h++;return{value:u(A,o[A]),done:!1}}return p=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function E(o,u,h){return o.call.apply(o.bind,arguments)}function x(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,p),o.apply(u,j)}}return function(){return o.apply(u,arguments)}}function _(o,u,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:x,_.apply(null,arguments)}function C(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,j,A){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return u.prototype[j].apply(p,U)}}function R(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function O(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(d(p)){const j=o.length||0,A=p.length||0;o.length=j+A;for(let U=0;U<A;U++)o[j+U]=p[U]}else o.push(p)}}class S{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function g(o){return/^[\s\xa0]*$/.test(o)}function v(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function P(o){return P[" "](o),o}P[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function z(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let h,p;for(let j=1;j<arguments.length;j++){p=arguments[j];for(h in p)o[h]=p[h];for(let A=0;A<y.length;A++)h=y[A],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function T(o){c.setTimeout(()=>{throw o},0)}function k(){var o=V;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class me{constructor(){this.h=this.g=null}add(u,h){const p=Bn.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Bn=new S(()=>new ni,o=>o.reset());class ni{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Rt,F=!1,V=new me,W=()=>{const o=c.Promise.resolve(void 0);Rt=()=>{o.then(se)}};var se=()=>{for(var o;o=k();){try{o.h.call(o.g)}catch(h){T(h)}var u=Bn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Ot(o,u){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(D){e:{try{P(u.nodeName);var j=!0;break e}catch{}j=!1}j||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Lt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ot.aa.h.call(this)}}N(Ot,ue);var Lt={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),ty=0;function ny(o,u,h,p,j){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=j,this.key=++ty,this.da=this.fa=!1}function bs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ss(o){this.src=o,this.g={},this.h=0}Ss.prototype.add=function(o,u,h,p,j){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var U=Ra(o,u,p,j);return-1<U?(u=o[U],h||(u.fa=!1)):(u=new ny(u,this.src,A,!!p,j),u.fa=h,o.push(u)),u};function Pa(o,u){var h=u.type;if(h in o.g){var p=o.g[h],j=Array.prototype.indexOf.call(p,u,void 0),A;(A=0<=j)&&Array.prototype.splice.call(p,j,1),A&&(bs(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ra(o,u,h,p){for(var j=0;j<o.length;++j){var A=o[j];if(!A.da&&A.listener==u&&A.capture==!!h&&A.ha==p)return j}return-1}var Aa="closure_lm_"+(1e6*Math.random()|0),Oa={};function md(o,u,h,p,j){if(Array.isArray(u)){for(var A=0;A<u.length;A++)md(o,u[A],h,p,j);return null}return h=yd(h),o&&o[Dt]?o.K(u,h,f(p)?!!p.capture:!1,j):ry(o,u,h,!1,p,j)}function ry(o,u,h,p,j,A){if(!u)throw Error("Invalid event type");var U=f(j)?!!j.capture:!!j,Z=Da(o);if(Z||(o[Aa]=Z=new Ss(o)),h=Z.add(u,h,p,U,A),h.proxy)return h;if(p=iy(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)At||(j=U),j===void 0&&(j=!1),o.addEventListener(u.toString(),p,j);else if(o.attachEvent)o.attachEvent(vd(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function iy(){function o(h){return u.call(o.src,o.listener,h)}const u=sy;return o}function gd(o,u,h,p,j){if(Array.isArray(u))for(var A=0;A<u.length;A++)gd(o,u[A],h,p,j);else p=f(p)?!!p.capture:!!p,h=yd(h),o&&o[Dt]?(o=o.i,u=String(u).toString(),u in o.g&&(A=o.g[u],h=Ra(A,h,p,j),-1<h&&(bs(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[u],o.h--)))):o&&(o=Da(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Ra(u,h,p,j)),(h=-1<o?u[o]:null)&&La(h))}function La(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Dt])Pa(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(vd(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Da(u))?(Pa(h,o),h.h==0&&(h.src=null,u[Aa]=null)):bs(o)}}}function vd(o){return o in Oa?Oa[o]:Oa[o]="on"+o}function sy(o,u){if(o.da)o=!0;else{u=new Ot(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&La(o),o=h.call(p,u)}return o}function Da(o){return o=o[Aa],o instanceof Ss?o:null}var Ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function yd(o){return typeof o=="function"?o:(o[Ma]||(o[Ma]=function(u){return o.handleEvent(u)}),o[Ma])}function be(){Q.call(this),this.i=new Ss(this),this.M=this,this.F=null}N(be,Q),be.prototype[Dt]=!0,be.prototype.removeEventListener=function(o,u,h,p){gd(this,o,u,h,p)};function Re(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ue(u,o);else if(u instanceof ue)u.target=u.target||o;else{var j=u;u=new ue(p,o),b(u,j)}if(j=!0,h)for(var A=h.length-1;0<=A;A--){var U=u.g=h[A];j=Ts(U,p,!0,u)&&j}if(U=u.g=o,j=Ts(U,p,!0,u)&&j,j=Ts(U,p,!1,u)&&j,h)for(A=0;A<h.length;A++)U=u.g=h[A],j=Ts(U,p,!1,u)&&j}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)bs(h[p]);delete o.g[u],o.h--}}this.F=null},be.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},be.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function Ts(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var j=!0,A=0;A<u.length;++A){var U=u[A];if(U&&!U.da&&U.capture==h){var Z=U.listener,we=U.ha||U.src;U.fa&&Pa(o.i,U),j=Z.call(we,p)!==!1&&j}}return j&&!p.defaultPrevented}function xd(o,u,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function wd(o){o.g=xd(()=>{o.g=null,o.i&&(o.i=!1,wd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class oy extends Q{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:wd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(o){Q.call(this),this.h=o,this.g={}}N(ri,Q);var _d=[];function kd(o){z(o.g,function(u,h){this.g.hasOwnProperty(h)&&La(u)},o),o.g={}}ri.prototype.N=function(){ri.aa.N.call(this),kd(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var za=c.JSON.stringify,ay=c.JSON.parse,ly=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ua(){}Ua.prototype.h=null;function Ed(o){return o.h||(o.h=o.i())}function cy(){}var ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fa(){ue.call(this,"d")}N(Fa,ue);function $a(){ue.call(this,"c")}N($a,ue);var hr={},bd=null;function Ba(){return bd=bd||new be}hr.La="serverreachability";function Sd(o){ue.call(this,hr.La,o)}N(Sd,ue);function si(o){const u=Ba();Re(u,new Sd(u))}hr.STAT_EVENT="statevent";function Td(o,u){ue.call(this,hr.STAT_EVENT,o),this.stat=u}N(Td,ue);function Ae(o){const u=Ba();Re(u,new Td(u,o))}hr.Ma="timingevent";function Id(o,u){ue.call(this,hr.Ma,o),this.size=u}N(Id,ue);function oi(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ai(){this.g=!0}ai.prototype.xa=function(){this.g=!1};function uy(o,u,h,p,j,A){o.info(function(){if(o.g)if(A)for(var U="",Z=A.split("&"),we=0;we<Z.length;we++){var X=Z[we].split("=");if(1<X.length){var Se=X[0];X=X[1];var Te=Se.split("_");U=2<=Te.length&&Te[1]=="type"?U+(Se+"="+X+"&"):U+(Se+"=redacted&")}}else U=null;else U=A;return"XMLHTTP REQ ("+p+") [attempt "+j+"]: "+u+`
`+h+`
`+U})}function dy(o,u,h,p,j,A,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+j+"]: "+u+`
`+h+`
`+A+" "+U})}function fr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+fy(o,h)+(p?" "+p:"")})}function hy(o,u){o.info(function(){return"TIMEOUT: "+u})}ai.prototype.info=function(){};function fy(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var j=p[1];if(Array.isArray(j)&&!(1>j.length)){var A=j[0];if(A!="noop"&&A!="stop"&&A!="close")for(var U=1;U<j.length;U++)j[U]=""}}}}return za(h)}catch{return u}}var Va={NO_ERROR:0,TIMEOUT:8},py={},Ha;function Is(){}N(Is,Ua),Is.prototype.g=function(){return new XMLHttpRequest},Is.prototype.i=function(){return{}},Ha=new Is;function sn(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cd}function Cd(){this.i=null,this.g="",this.h=!1}var Nd={},Wa={};function Ka(o,u,h){o.L=1,o.v=Ps(Mt(u)),o.m=h,o.P=!0,jd(o,null)}function jd(o,u){o.F=Date.now(),Cs(o),o.A=Mt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Hd(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Cd,o.g=lh(o.j,h?u:null,!o.m),0<o.O&&(o.M=new oy(_(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var j="readystatechange";Array.isArray(j)||(j&&(_d[0]=j.toString()),j=_d);for(var A=0;A<j.length;A++){var U=md(h,j[A],p||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),si(),uy(o.i,o.u,o.A,o.l,o.R,o.m)}sn.prototype.ca=function(o){o=o.target;const u=this.M;u&&zt(o)==3?u.j():this.Y(o)},sn.prototype.Y=function(o){try{if(o==this.g)e:{const Te=zt(this.g);var u=this.g.Ba();const gr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Yd(this.g)))){this.J||Te!=4||u==7||(u==8||0>=gr?si(3):si(2)),Ga(this);var h=this.g.Z();this.X=h;t:if(Pd(this)){var p=Yd(this.g);o="";var j=p.length,A=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),li(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<j;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(A&&u==j-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,dy(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,we=this.g;if((Z=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Z)){var X=Z;break t}}X=null}if(h=X)fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qa(this,h);else{this.o=!1,this.s=3,Ae(12),Vn(this),li(this);break e}}if(this.P){h=!0;let at;for(;!this.J&&this.C<U.length;)if(at=my(this,U),at==Wa){Te==4&&(this.s=4,Ae(14),h=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Nd){this.s=4,Ae(15),fr(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else fr(this.i,this.l,at,null),qa(this,at);if(Pd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||U.length!=0||this.h.h||(this.s=1,Ae(16),h=!1),this.o=this.o&&h,!h)fr(this.i,this.l,U,"[Invalid Chunked Response]"),Vn(this),li(this);else if(0<U.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),el(Se),Se.M=!0,Ae(11))}}else fr(this.i,this.l,U,null),qa(this,U);Te==4&&Vn(this),this.o&&!this.J&&(Te==4?ih(this.j,this):(this.o=!1,Cs(this)))}else Ry(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),Vn(this),li(this)}}}catch{}finally{}};function Pd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function my(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Wa:(h=Number(u.substring(h,p)),isNaN(h)?Nd:(p+=1,p+h>u.length?Wa:(u=u.slice(p,p+h),o.C=p+h,u)))}sn.prototype.cancel=function(){this.J=!0,Vn(this)};function Cs(o){o.S=Date.now()+o.I,Rd(o,o.I)}function Rd(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=oi(_(o.ba,o),u)}function Ga(o){o.B&&(c.clearTimeout(o.B),o.B=null)}sn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(hy(this.i,this.A),this.L!=2&&(si(),Ae(17)),Vn(this),this.s=2,li(this)):Rd(this,this.S-o)};function li(o){o.j.G==0||o.J||ih(o.j,o)}function Vn(o){Ga(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,kd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function qa(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Xa(h.h,o))){if(!o.K&&Xa(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var j=p;if(j[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ms(h),Ls(h);else break e;Za(h),Ae(18)}}else h.za=j[1],0<h.za-h.T&&37500>j[2]&&h.F&&h.v==0&&!h.C&&(h.C=oi(_(h.Za,h),6e3));if(1>=Ld(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wn(h,11)}else if((o.K||h.g==o)&&Ms(h),!g(u))for(j=h.Da.g.parse(u),u=0;u<j.length;u++){let X=j[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Se=X[3];Se!=null&&(h.la=Se,h.j.info("VER="+h.la));const Te=X[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const gr=X[5];gr!=null&&typeof gr=="number"&&0<gr&&(p=1.5*gr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const at=o.g;if(at){const zs=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var A=p.h;A.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ja(A,A.h),A.h=null))}if(p.D){const tl=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;tl&&(p.ya=tl,te(p.I,p.D,tl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var U=o;if(p.qa=ah(p,p.J?p.ia:null,p.W),U.K){Dd(p.h,U);var Z=U,we=p.L;we&&(Z.I=we),Z.B&&(Ga(Z),Cs(Z)),p.g=U}else nh(p);0<h.i.length&&Ds(h)}else X[0]!="stop"&&X[0]!="close"||Wn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Wn(h,7):Qa(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}si(4)}catch{}}var gy=class{constructor(o,u){this.g=o,this.map=u}};function Ad(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Od(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ld(o){return o.h?1:o.g?o.g.size:0}function Xa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ja(o,u){o.g?o.g.add(u):o.h=u}function Dd(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ad.prototype.cancel=function(){if(this.i=Md(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Md(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return R(o.i)}function vy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function yy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function zd(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=yy(o),p=vy(o),j=p.length,A=0;A<j;A++)u.call(void 0,p[A],h&&h[A],o)}var Ud=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xy(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),j=null;if(0<=p){var A=o[h].substring(0,p);j=o[h].substring(p+1)}else A=o[h];u(A,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,Ns(this,o.j),this.o=o.o,this.g=o.g,js(this,o.s),this.l=o.l;var u=o.i,h=new di;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Fd(this,h),this.m=o.m}else o&&(u=String(o).match(Ud))?(this.h=!1,Ns(this,u[1]||"",!0),this.o=ci(u[2]||""),this.g=ci(u[3]||"",!0),js(this,u[4]),this.l=ci(u[5]||"",!0),Fd(this,u[6]||"",!0),this.m=ci(u[7]||"")):(this.h=!1,this.i=new di(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ui(u,$d,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ui(u,$d,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ui(h,h.charAt(0)=="/"?ky:_y,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ui(h,by)),o.join("")};function Mt(o){return new Hn(o)}function Ns(o,u,h){o.j=h?ci(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function js(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Fd(o,u,h){u instanceof di?(o.i=u,Sy(o.i,o.h)):(h||(u=ui(u,Ey)),o.i=new di(u,o.h))}function te(o,u,h){o.i.set(u,h)}function Ps(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ci(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ui(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,wy),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function wy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $d=/[#\/\?@]/g,_y=/[#\?:]/g,ky=/[#\?]/g,Ey=/[#\?@]/g,by=/#/g;function di(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function on(o){o.g||(o.g=new Map,o.h=0,o.i&&xy(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}e=di.prototype,e.add=function(o,u){on(this),this.i=null,o=pr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Bd(o,u){on(o),u=pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Vd(o,u){return on(o),u=pr(o,u),o.g.has(u)}e.forEach=function(o,u){on(this),this.g.forEach(function(h,p){h.forEach(function(j){o.call(u,j,p,this)},this)},this)},e.na=function(){on(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const j=o[p];for(let A=0;A<j.length;A++)h.push(u[p])}return h},e.V=function(o){on(this);let u=[];if(typeof o=="string")Vd(this,o)&&(u=u.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},e.set=function(o,u){return on(this),this.i=null,o=pr(this,o),Vd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Hd(o,u,h){Bd(o,u),0<h.length&&(o.i=null,o.g.set(pr(o,u),R(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const A=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var j=A;U[p]!==""&&(j+="="+encodeURIComponent(String(U[p]))),o.push(j)}}return this.i=o.join("&")};function pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Sy(o,u){u&&!o.j&&(on(o),o.i=null,o.g.forEach(function(h,p){var j=p.toLowerCase();p!=j&&(Bd(this,p),Hd(this,j,h))},o)),o.j=u}function Ty(o,u){const h=new ai;if(c.Image){const p=new Image;p.onload=C(an,h,"TestLoadImage: loaded",!0,u,p),p.onerror=C(an,h,"TestLoadImage: error",!1,u,p),p.onabort=C(an,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=C(an,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Iy(o,u){const h=new ai,p=new AbortController,j=setTimeout(()=>{p.abort(),an(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(A=>{clearTimeout(j),A.ok?an(h,"TestPingServer: ok",!0,u):an(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(j),an(h,"TestPingServer: error",!1,u)})}function an(o,u,h,p,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),p(h)}catch{}}function Cy(){this.g=new ly}function Ny(o,u,h){const p=h||"";try{zd(o,function(j,A){let U=j;f(j)&&(U=za(j)),u.push(p+A+"="+encodeURIComponent(U))})}catch(j){throw u.push(p+"type="+encodeURIComponent("_badmap")),j}}function Rs(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Rs,Ua),Rs.prototype.g=function(){return new As(this.l,this.j)},Rs.prototype.i=function(o){return function(){return o}}({});function As(o,u){be.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(As,be),e=As.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,fi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?hi(this):fi(this),this.readyState==3&&Wd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,hi(this))},e.Qa=function(o){this.g&&(this.response=o,hi(this))},e.ga=function(){this.g&&hi(this)};function hi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,fi(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function fi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kd(o){let u="";return z(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Ya(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Kd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function de(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(de,be);var jy=/^https?$/i,Py=["POST","PUT"];e=de.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?Ed(this.o):Ed(Ha),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(A){Gd(this,A);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var j in p)h.set(j,p[j]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const A of p.keys())h.set(A,p.get(A));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),j=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Py,u,void 0))||p||j||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,U]of h)this.g.setRequestHeader(A,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jd(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){Gd(this,A)}};function Gd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,qd(o),Os(o)}function qd(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),Os(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Os(this,!0)),de.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Xd(this):this.bb())},e.bb=function(){Xd(this)};function Xd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||zt(o)!=4||o.Z()!=2)){if(o.u&&zt(o)==4)xd(o.Ea,0,o);else if(Re(o,"readystatechange"),zt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=U===0){var j=String(o.D).match(Ud)[1]||null;!j&&c.self&&c.self.location&&(j=c.self.location.protocol.slice(0,-1)),p=!jy.test(j?j.toLowerCase():"")}h=p}if(h)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var A=2<zt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",qd(o)}}finally{Os(o)}}}}function Os(o,u){if(o.g){Jd(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Re(o,"ready");try{h.onreadystatechange=p}catch{}}}function Jd(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function zt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ay(u)}};function Yd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ry(o){const u={};o=(o.g&&2<=zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(g(o[p]))continue;var h=I(o[p]);const j=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=u[j]||[];u[j]=A,A.push(h)}w(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pi(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Qd(o){this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pi("baseRetryDelayMs",5e3,o),this.cb=pi("retryDelaySeedMs",1e4,o),this.Wa=pi("forwardChannelMaxRetries",2,o),this.wa=pi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ad(o&&o.concurrentRequestLimit),this.Da=new Cy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Qd.prototype,e.la=8,e.G=1,e.connect=function(o,u,h,p){Ae(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ah(this,null,this.W),Ds(this)};function Qa(o){if(Zd(o),o.G==3){var u=o.U++,h=Mt(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),mi(o,h),u=new sn(o,o.j,u),u.L=2,u.v=Ps(Mt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=lh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Cs(u)}oh(o)}function Ls(o){o.g&&(el(o),o.g.cancel(),o.g=null)}function Zd(o){Ls(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ms(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ds(o){if(!Od(o.h)&&!o.s){o.s=!0;var u=o.Ga;Rt||W(),F||(Rt(),F=!0),V.add(u,o),o.B=0}}function Ay(o,u){return Ld(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=oi(_(o.Ga,o,u),sh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const j=new sn(this,this.j,o);let A=this.o;if(this.S&&(A?(A=m(A),b(A,this.S)):A=this.S),this.m!==null||this.O||(j.H=A,A=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=th(this,j,u),h=Mt(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),mi(this,h),A&&(this.O?u="headers="+encodeURIComponent(String(Kd(A)))+"&"+u:this.m&&Ya(h,this.m,A)),Ja(this.h,j),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),j.T=!0,Ka(j,h,null)):Ka(j,h,u),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Od(this.h)||eh(this))};function eh(o,u){var h;u?h=u.l:h=o.U++;const p=Mt(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),mi(o,p),o.m&&o.o&&Ya(p,o.m,o.o),h=new sn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=th(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ja(o.h,h),Ka(h,p,u)}function mi(o,u){o.H&&z(o.H,function(h,p){te(u,p,h)}),o.l&&zd({},function(h,p){te(u,p,h)})}function th(o,u,h){h=Math.min(o.i.length,h);var p=o.l?_(o.l.Na,o.l,o):null;e:{var j=o.i;let A=-1;for(;;){const U=["count="+h];A==-1?0<h?(A=j[0].g,U.push("ofs="+A)):A=0:U.push("ofs="+A);let Z=!0;for(let we=0;we<h;we++){let X=j[we].g;const Se=j[we].map;if(X-=A,0>X)A=Math.max(0,j[we].g-100),Z=!1;else try{Ny(Se,U,"req"+X+"_")}catch{p&&p(Se)}}if(Z){p=U.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function nh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Rt||W(),F||(Rt(),F=!0),V.add(u,o),o.v=0}}function Za(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=oi(_(o.Fa,o),sh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=oi(_(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Ls(this),rh(this))};function el(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new sn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Mt(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),mi(o,u),o.m&&o.o&&Ya(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ps(Mt(u)),h.m=null,h.P=!0,jd(h,o)}e.Za=function(){this.C!=null&&(this.C=null,Ls(this),Za(this),Ae(19))};function Ms(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ih(o,u){var h=null;if(o.g==u){Ms(o),el(o),o.g=null;var p=2}else if(Xa(o.h,u))h=u.D,Dd(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var j=o.B;p=Ba(),Re(p,new Id(p,h)),Ds(o)}else nh(o);else if(j=u.s,j==3||j==0&&0<u.X||!(p==1&&Ay(o,u)||p==2&&Za(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),j){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function sh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Wn(o,u){if(o.j.info("Error code "+u),u==2){var h=_(o.fb,o),p=o.Xa;const j=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ns(p,"https"),Ps(p),j?Ty(p.toString(),h):Iy(p.toString(),h)}else Ae(2);o.G=0,o.l&&o.l.sa(u),oh(o),Zd(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function oh(o){if(o.G=0,o.ka=[],o.l){const u=Md(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function ah(o,u,h){var p=h instanceof Hn?Mt(h):new Hn(h);if(p.g!="")u&&(p.g=u+"."+p.g),js(p,p.s);else{var j=c.location;p=j.protocol,u=u?u+"."+j.hostname:j.hostname,j=+j.port;var A=new Hn(null);p&&Ns(A,p),u&&(A.g=u),j&&js(A,j),h&&(A.l=h),p=A}return h=o.D,u=o.ya,h&&u&&te(p,h,u),te(p,"VER",o.la),mi(o,p),p}function lh(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new de(new Rs({eb:h})):new de(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}e=ch.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function et(o,u){be.call(this),this.g=new Qd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!g(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new mr(this)}N(et,be),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Qa(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=za(o),o=h);u.i.push(new gy(u.Ya++,o)),u.G==3&&Ds(u)},et.prototype.N=function(){this.g.l=null,delete this.j,Qa(this.g),delete this.g,et.aa.N.call(this)};function uh(o){Fa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(uh,Fa);function dh(){$a.call(this),this.status=1}N(dh,$a);function mr(o){this.g=o}N(mr,ch),mr.prototype.ua=function(){Re(this.g,"a")},mr.prototype.ta=function(o){Re(this.g,new uh(o))},mr.prototype.sa=function(o){Re(this.g,new dh)},mr.prototype.ra=function(){Re(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,py.COMPLETE="complete",cy.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",be.prototype.listen=be.prototype.K,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});const lp="@firebase/firestore";/**
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
 */let Le=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Es="10.14.0";/**
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
 */const qr=new Ju("@firebase/firestore");function ht(e,...t){if(qr.logLevel<=J.DEBUG){const n=t.map(ld);qr.debug(`Firestore (${Es}): ${e}`,...n)}}function $v(e,...t){if(qr.logLevel<=J.ERROR){const n=t.map(ld);qr.error(`Firestore (${Es}): ${e}`,...n)}}function dE(e,...t){if(qr.logLevel<=J.WARN){const n=t.map(ld);qr.warn(`Firestore (${Es}): ${e}`,...n)}}function ld(e){if(typeof e=="string")return e;try{/**
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
 */function cd(e="Unexpected state"){const t=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+e;throw $v(t),new Error(t)}function Bi(e,t){e||cd()}/**
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
 */const $e={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Be extends Nt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Bv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class fE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pE{constructor(t){this.t=t,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Bi(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let s=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vi,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vi)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Bi(typeof r.accessToken=="string"),new Bv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Bi(t===null||typeof t=="string"),new Le(t)}}class mE{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gE{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new mE(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yE{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Bi(this.o===void 0);const r=s=>{s.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,ht("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Bi(typeof n.token=="string"),this.R=n.token,new vE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function xE(e){return e.name==="IndexedDbTransactionError"}class ra{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ra&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var cp,G;(G=cp||(cp={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Fv([4294967295,4294967295],0);function Dl(){return typeof document<"u"?document:null}/**
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
 */class wE{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ud{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,c=new ud(t,n,a,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Be($e.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var up,dp;(dp=up||(up={})).ea="default",dp.Cache="cache";/**
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
 */function _E(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const hp=new Map;function kE(e,t,n,r){if(t===!0&&r===!0)throw new Be($e.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function EE(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":cd()}function bE(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Be($e.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=EE(e);throw new Be($e.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class fp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Be($e.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Be($e.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kE("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_E((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Be($e.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Be($e.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Be($e.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Be($e.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Be($e.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hE;switch(r.type){case"firstParty":return new gE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Be($e.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hp.get(n);r&&(ht("ComponentProvider","Removing Datastore"),hp.delete(n),r.terminate())}(this),Promise.resolve()}}function SE(e,t,n,r={}){var i;const s=(e=bE(e,Vv))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&dE("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Le.MOCK_USER;else{c=ev(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Be($e.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Le(f)}e._authCredentials=new fE(new Bv(c,d))}}/**
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
 */class pp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wE(this,"async_queue_retry"),this.Vu=()=>{const r=Dl();r&&ht("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Dl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!xE(t))throw t;ht("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $v("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=ud.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&cd()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class TE extends Vv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new pp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pp(t),this._firestoreClient=void 0,await t}}}function IE(e,t){const n=typeof e=="object"?e:Qu(),r=typeof e=="string"?e:"(default)",i=Ta(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Yg("firestore");s&&SE(i,...s)}return i}(function(t,n=!0){(function(i){Es=i})(dr),or(new Ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new TE(new pE(r.getProvider("auth-internal")),new yE(r.getProvider("app-check-internal")),function(f,E){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Be($e.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(f.options.projectId,E)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),St(lp,"4.7.3",t),St(lp,"4.7.3","esm2017")})();/**
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
 */const Hv="firebasestorage.googleapis.com",CE="storageBucket",NE=2*60*1e3,jE=10*60*1e3;/**
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
 */class Pt extends Nt{constructor(t,n,r=0){super(Ml(t),`Firebase Storage: ${n} (${Ml(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ml(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ct;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ct||(Ct={}));function Ml(e){return"storage/"+e}function PE(){const e="An unknown error occurred, please check the error payload for server response.";return new Pt(Ct.UNKNOWN,e)}function RE(){return new Pt(Ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AE(){return new Pt(Ct.CANCELED,"User canceled the upload/download.")}function OE(e){return new Pt(Ct.INVALID_URL,"Invalid URL '"+e+"'.")}function LE(e){return new Pt(Ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function mp(e){return new Pt(Ct.INVALID_ARGUMENT,e)}function Wv(){return new Pt(Ct.APP_DELETED,"The Firebase app was deleted.")}function DE(e){return new Pt(Ct.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ft{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ft.makeFromUrl(t,n)}catch{return new ft(t,"")}if(r.path==="")return r;throw LE(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),d={bucket:1,path:3};function f(P){P.path_=decodeURIComponent(P.path)}const E="v[A-Za-z0-9_]+",x=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",C=new RegExp(`^https?://${x}/${E}/b/${i}/o${_}`,"i"),N={bucket:1,path:3},R=n===Hv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",S=new RegExp(`^https?://${R}/${i}/${O}`,"i"),v=[{regex:c,indices:d,postModify:s},{regex:C,indices:N,postModify:f},{regex:S,indices:{bucket:1,path:2},postModify:f}];for(let P=0;P<v.length;P++){const D=v[P],z=D.regex.exec(t);if(z){const w=z[D.indices.bucket];let m=z[D.indices.path];m||(m=""),r=new ft(w,m),D.postModify(r);break}}if(r==null)throw OE(t);return r}}class ME{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function zE(e,t,n){let r=1,i=null,s=null,a=!1,c=0;function d(){return c===2}let f=!1;function E(...O){f||(f=!0,t.apply(null,O))}function x(O){i=setTimeout(()=>{i=null,e(C,d())},O)}function _(){s&&clearTimeout(s)}function C(O,...S){if(f){_();return}if(O){_(),E.call(null,O,...S);return}if(d()||a){_(),E.call(null,O,...S);return}r<64&&(r*=2);let v;c===1?(c=2,v=0):v=(r+Math.random())*1e3,x(v)}let N=!1;function R(O){N||(N=!0,_(),!f&&(i!==null?(O||(c=2),clearTimeout(i),x(0)):O||(c=1)))}return x(0),s=setTimeout(()=>{a=!0,R(!0)},n),R}function UE(e){e(!1)}/**
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
 */function FE(e){return e!==void 0}function gp(e,t,n,r){if(r<t)throw mp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw mp(`Invalid value for '${e}'. Expected ${n} or less.`)}function $E(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ia;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ia||(ia={}));/**
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
 */function BE(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class VE{constructor(t,n,r,i,s,a,c,d,f,E,x,_=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=E,this.connectionFactory_=x,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new io(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=c=>{const d=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const c=s.getErrorCode()===ia.NO_ERROR,d=s.getStatus();if(!c||BE(d,this.additionalRetryCodes_)&&this.retry){const E=s.getErrorCode()===ia.ABORT;r(!1,new io(!1,null,E));return}const f=this.successCodes_.indexOf(d)!==-1;r(!0,new io(f,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());FE(d)?s(d):s()}catch(d){a(d)}else if(c!==null){const d=PE();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(i.canceled){const d=this.appDelete_?Wv():AE();a(d)}else{const d=RE();a(d)}};this.canceled_?n(!1,new io(!1,null,!0)):this.backoffId_=zE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&UE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class io{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function HE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function WE(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function KE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function GE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function qE(e,t,n,r,i,s,a=!0){const c=$E(e.urlParams),d=e.url+c,f=Object.assign({},e.headers);return KE(f,t),HE(f,n),WE(f,s),GE(f,r),new VE(d,e.method,f,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}/**
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
 */function XE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function JE(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class sa{constructor(t,n){this._service=t,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new sa(t,n)}get root(){const t=new ft(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JE(this._location.path)}get storage(){return this._service}get parent(){const t=XE(this._location.path);if(t===null)return null;const n=new ft(this._location.bucket,t);return new sa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw DE(t)}}function vp(e,t){const n=t==null?void 0:t[CE];return n==null?null:ft.makeFromBucketSpec(n,e)}function YE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:ev(i,e.app.options.projectId))}class QE{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Hv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NE,this._maxUploadRetryTime=jE,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=vp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,t):this._bucket=vp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){gp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new sa(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new ME(Wv());{const a=qE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const yp="@firebase/storage",xp="0.13.2";/**
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
 */const Kv="storage";function ZE(e=Qu(),t){e=yt(e);const r=Ta(e,Kv).getImmediate({identifier:t}),i=Yg("storage");return i&&eb(r,...i),r}function eb(e,t,n,r={}){YE(e,t,n,r)}function tb(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new QE(n,r,i,t,dr)}function nb(){or(new Ln(Kv,tb,"PUBLIC").setMultipleInstances(!0)),St(yp,xp,""),St(yp,xp,"esm2017")}nb();const rb={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},dd=rv(rb),bi=aE(dd);IE(dd);ZE(dd);const Gv=L.createContext(void 0),ib=({children:e})=>{const[t,n]=L.useState(null),[r,i]=L.useState(!0),[s,a]=L.useState(null);L.useEffect(()=>{const C=X_(bi,N=>{n(N),i(!1)});return()=>C()},[]);const _={user:t,loading:r,error:s,login:async(C,N)=>{try{a(null),i(!0),await H_(bi,C,N)}catch(R){const O=zl(R.code);throw a(O),new Error(O)}finally{i(!1)}},register:async(C,N,R)=>{try{a(null),i(!0);const{user:O}=await V_(bi,C,N);R&&await K_(O,{displayName:R})}catch(O){const S=zl(O.code);throw a(S),new Error(S)}finally{i(!1)}},logout:async()=>{try{a(null),await J_(bi)}catch(C){throw a("Error al cerrar sesión"),C}},resetPassword:async C=>{try{a(null),await B_(bi,C)}catch(N){const R=zl(N.code);throw a(R),new Error(R)}},clearError:()=>a(null)};return l.jsx(Gv.Provider,{value:_,children:e})},qv=()=>{const e=L.useContext(Gv);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function zl(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const Si=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=qv(),i=nn();return r?l.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[l.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),l.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?l.jsx(l.Fragment,{children:e}):l.jsx(yo,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(e,t)=>{const n=L.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:d,...f},E)=>L.createElement("svg",{ref:E,...sb,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${ob(e)}`,c].join(" "),...f},[...t.map(([x,_])=>L.createElement(x,_)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=H("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=H("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=H("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=H("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=H("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=H("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=H("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=H("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=H("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=H("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=H("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=H("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=H("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=H("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=H("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=H("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=H("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=H("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=H("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=H("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=H("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=H("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=H("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=H("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=H("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=H("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=H("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=H("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=H("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=H("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=H("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=H("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=H("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=H("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=H("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Sb=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Rn,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:Xc,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:ja,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:Xr,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:wb,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:bb,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return l.jsxs("div",{className:"landing-page",children:[l.jsxs("nav",{className:"navbar",children:[l.jsxs("div",{className:"nav-brand",children:[l.jsx(Rn,{size:32}),l.jsx("span",{children:"Sistema Courier"})]}),l.jsxs("div",{className:"nav-links",children:[l.jsx("a",{href:"#features",children:"Características"}),l.jsx("a",{href:"#pricing",children:"Precios"}),l.jsx(je,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),l.jsx(je,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),l.jsxs("section",{className:"hero",children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),l.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),l.jsxs("div",{className:"hero-buttons",children:[l.jsxs(je,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",l.jsx(oa,{size:20})]}),l.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),l.jsxs("div",{className:"hero-trust",children:[l.jsx("span",{children:"Confiado por +100 empresas de courier"}),l.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>l.jsx(Gc,{size:16,fill:"#f59e0b"},r))})]})]}),l.jsx("div",{className:"hero-image",children:l.jsxs("div",{className:"dashboard-preview",children:[l.jsx("div",{className:"preview-header",children:l.jsxs("div",{className:"dots",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})}),l.jsxs("div",{className:"preview-content",children:[l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-chart"})]})]})})]}),l.jsxs("section",{id:"features",className:"features",children:[l.jsx("h2",{children:"Todo lo que necesitas para operar"}),l.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),l.jsx("div",{className:"features-grid",children:t.map((n,r)=>l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx(n.icon,{size:28})}),l.jsx("h3",{children:n.title}),l.jsx("p",{children:n.description})]},r))})]}),l.jsxs("section",{id:"pricing",className:"pricing",children:[l.jsx("h2",{children:"Planes simples y transparentes"}),l.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),l.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>l.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&l.jsx("span",{className:"popular-badge",children:"Más Popular"}),l.jsx("h3",{children:n.name}),l.jsx("p",{className:"plan-description",children:n.description}),l.jsxs("div",{className:"plan-price",children:[n.priceLabel&&l.jsx("span",{className:"price-label",children:n.priceLabel}),l.jsxs("span",{className:"price",children:["$",n.price]}),l.jsx("span",{className:"period",children:"/mes"})]}),l.jsx("ul",{className:"plan-features",children:n.features.map((i,s)=>l.jsxs("li",{children:[l.jsx(Qn,{size:16})," ",i]},s))}),l.jsx(je,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),l.jsxs("section",{className:"cta",children:[l.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),l.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),l.jsxs(je,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",l.jsx(oa,{size:24})]})]}),l.jsxs("footer",{className:"footer",children:[l.jsxs("div",{className:"footer-content",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx(Rn,{size:28}),l.jsx("span",{children:"Sistema Courier"}),l.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Producto"}),l.jsx("a",{href:"#features",children:"Características"}),l.jsx("a",{href:"#pricing",children:"Precios"}),l.jsx("a",{href:"/docs",children:"Documentación"})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Empresa"}),l.jsx("a",{href:"/about",children:"Nosotros"}),l.jsx("a",{href:"/contact",children:"Contacto"}),l.jsx("a",{href:"/blog",children:"Blog"})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Legal"}),l.jsx("a",{href:"/privacy",children:"Privacidad"}),l.jsx("a",{href:"/terms",children:"Términos"})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),l.jsx("style",{children:`
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
      `})]})},Tb=()=>{const e=Fn(),[t,n]=L.useState(1),[r,i]=L.useState(!1),[s,a]=L.useState(""),[c,d]=L.useState("idle"),[f,E]=L.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),x=S=>{const{name:g,value:v}=S.target;if(E({...f,[g]:v}),a(""),g==="company_name"){const P=v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);E(D=>({...D,subdomain:P})),P.length>=3&&_(P)}if(g==="subdomain"){const P=v.toLowerCase().replace(/[^a-z0-9-]/g,"");E(D=>({...D,subdomain:P})),P.length>=3&&_(P)}},_=async S=>{d("checking");try{const v=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:S})})).json();d(v.available?"available":"taken")}catch{d("idle")}},C=()=>f.company_name.trim()?f.subdomain.length<3?(a("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(a("Este subdominio no está disponible"),!1):!0:(a("Ingresa el nombre de tu empresa"),!1),N=()=>f.admin_name.trim()?f.admin_email.includes("@")?f.password.length<8?(a("La contraseña debe tener al menos 8 caracteres"),!1):f.password!==f.confirm_password?(a("Las contraseñas no coinciden"),!1):!0:(a("Ingresa un email válido"),!1):(a("Ingresa tu nombre"),!1),R=()=>{t===1&&C()&&n(2)},O=async S=>{if(S.preventDefault(),!!N()){i(!0),a("");try{const g=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f.company_name,subdomain:f.subdomain,admin_email:f.admin_email,admin_password:f.password,admin_name:f.admin_name})}),v=await g.json();if(!g.ok)throw new Error(v.error||"Error al crear la cuenta");e(`/onboarding?tenant=${v.tenant.subdomain}`)}catch(g){a(g.message)}finally{i(!1)}}};return l.jsxs("div",{className:"register-page",children:[l.jsxs("div",{className:"register-container",children:[l.jsxs("div",{className:"register-brand",children:[l.jsxs(je,{to:"/",className:"brand-logo",children:[l.jsx(Rn,{size:40}),l.jsx("span",{children:"Sistema Courier"})]}),l.jsxs("div",{className:"brand-content",children:[l.jsx("h2",{children:"Comienza tu prueba gratuita"}),l.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),l.jsxs("ul",{className:"brand-features",children:[l.jsxs("li",{children:[l.jsx(Qn,{size:20})," Configuración en minutos"]}),l.jsxs("li",{children:[l.jsx(Qn,{size:20})," Soporte incluido"]}),l.jsxs("li",{children:[l.jsx(Qn,{size:20})," Cancela cuando quieras"]})]})]})]}),l.jsxs("div",{className:"register-form-container",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h1",{children:"Crear cuenta"}),l.jsxs("p",{children:["Paso ",t," de 2"]})]}),l.jsxs("div",{className:"progress-bar",children:[l.jsx("div",{className:"progress-step active",children:"1"}),l.jsx("div",{className:"progress-line"}),l.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),s&&l.jsxs("div",{className:"error-message",children:[l.jsx(ds,{size:18}),s]}),l.jsx("form",{onSubmit:O,children:t===1?l.jsxs("div",{className:"form-step",children:[l.jsx("h3",{children:"Información de la empresa"}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Nombre de la empresa"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(aa,{size:20}),l.jsx("input",{type:"text",name:"company_name",value:f.company_name,onChange:x,placeholder:"Mi Empresa de Courier",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Tu subdominio"}),l.jsxs("div",{className:"input-wrapper subdomain-input",children:[l.jsx(Xr,{size:20}),l.jsx("input",{type:"text",name:"subdomain",value:f.subdomain,onChange:x,placeholder:"miempresa",required:!0}),l.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&l.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&l.jsxs("span",{className:"subdomain-status available",children:[l.jsx(Qn,{size:14})," Disponible"]}),c==="taken"&&l.jsxs("span",{className:"subdomain-status taken",children:[l.jsx(ds,{size:14})," No disponible"]})]}),l.jsxs("button",{type:"button",onClick:R,className:"btn-next",children:["Continuar ",l.jsx(oa,{size:20})]})]}):l.jsxs("div",{className:"form-step",children:[l.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[l.jsx(Xv,{size:18})," Atrás"]}),l.jsx("h3",{children:"Tu cuenta de administrador"}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Tu nombre"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Eb,{size:20}),l.jsx("input",{type:"text",name:"admin_name",value:f.admin_name,onChange:x,placeholder:"Juan Pérez",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Email"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(fd,{size:20}),l.jsx("input",{type:"email",name:"admin_email",value:f.admin_email,onChange:x,placeholder:"juan@miempresa.com",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Contraseña"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Kc,{size:20}),l.jsx("input",{type:"password",name:"password",value:f.password,onChange:x,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Confirmar contraseña"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Kc,{size:20}),l.jsx("input",{type:"password",name:"confirm_password",value:f.confirm_password,onChange:x,placeholder:"Repite la contraseña",required:!0})]})]}),l.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),l.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",l.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",l.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),l.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",l.jsx(je,{to:"/login",children:"Iniciar sesión"})]})]})]}),l.jsx("style",{children:`
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
      `})]})},Ib=()=>{const e=Fn(),[t]=hw();t.get("tenant");const[n,r]=L.useState(1),[i,s]=L.useState(!1),[a,c]=L.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),d=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],f=_=>{var N;const C=(N=_.target.files)==null?void 0:N[0];C&&c({...a,logo:C,logo_preview:URL.createObjectURL(C)})},E=async()=>{s(!0);try{if(a.logo){const _=new FormData;_.append("logo",a.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:_})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:a.primary_color,contact_phone:a.company_phone,address:a.company_address})}),e("/dashboard")}catch(_){console.error("Error saving onboarding:",_)}finally{s(!1)}},x=()=>{e("/dashboard")};return l.jsxs("div",{className:"onboarding-wizard",children:[l.jsxs("div",{className:"wizard-container",children:[l.jsxs("div",{className:"wizard-header",children:[l.jsx(Rn,{size:32,color:"#3b82f6"}),l.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),l.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),l.jsx("div",{className:"wizard-progress",children:[1,2,3].map(_=>l.jsx("div",{className:`progress-dot ${n>=_?"active":""}`,children:n>_?l.jsx(Qn,{size:16}):_},_))}),l.jsxs("div",{className:"wizard-content",children:[n===1&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(kp,{size:32})}),l.jsx("h2",{children:"Sube tu logo"}),l.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),l.jsx("div",{className:"logo-upload",children:a.logo_preview?l.jsxs("div",{className:"logo-preview",children:[l.jsx("img",{src:a.logo_preview,alt:"Logo preview"}),l.jsx("button",{onClick:()=>c({...a,logo:null,logo_preview:""}),children:"Cambiar"})]}):l.jsxs("label",{className:"upload-area",children:[l.jsx(kp,{size:40}),l.jsx("span",{children:"Arrastra o haz clic para subir"}),l.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),l.jsx("input",{type:"file",accept:"image/*",onChange:f})]})})]}),n===2&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(pb,{size:32})}),l.jsx("h2",{children:"Elige tus colores"}),l.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),l.jsx("div",{className:"color-picker",children:d.map(_=>l.jsx("button",{className:`color-option ${a.primary_color===_?"selected":""}`,style:{backgroundColor:_},onClick:()=>c({...a,primary_color:_}),children:a.primary_color===_&&l.jsx(Qn,{size:20})},_))}),l.jsx("div",{className:"color-preview",style:{backgroundColor:a.primary_color},children:l.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(_p,{size:32})}),l.jsx("h2",{children:"Información de contacto"}),l.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),l.jsxs("div",{className:"contact-form",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Teléfono (opcional)"}),l.jsx("input",{type:"tel",value:a.company_phone,onChange:_=>c({...a,company_phone:_.target.value}),placeholder:"+1 234 567 8900"})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Dirección (opcional)"}),l.jsx("input",{type:"text",value:a.company_address,onChange:_=>c({...a,company_address:_.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),l.jsxs("div",{className:"wizard-nav",children:[n>1?l.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[l.jsx(Xv,{size:20})," Atrás"]}):l.jsx("button",{onClick:x,className:"btn-skip",children:"Omitir configuración"}),n<3?l.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",l.jsx(oa,{size:20})]}):l.jsxs("button",{onClick:E,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",l.jsx(_p,{size:20})]})]})]}),l.jsx("style",{children:`
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
      `})]})},Cb=()=>{var S,g,v,P,D,z,w,m;const{tenant:e,isWhiteLabel:t}=Sa(),{login:n,clearError:r}=qv(),i=Fn(),s=nn(),[a,c]=L.useState(""),[d,f]=L.useState(""),[E,x]=L.useState(!1),[_,C]=L.useState(""),N=((g=(S=s.state)==null?void 0:S.from)==null?void 0:g.pathname)||"/dashboard",R=async y=>{y.preventDefault(),x(!0),C(""),r();try{await n(a,d),i(N,{replace:!0})}catch(b){C(b.message||"Error al iniciar sesión")}finally{x(!1)}},O=((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6";return l.jsxs("div",{className:"login-page",children:[l.jsxs("div",{className:"login-container",children:[l.jsx("div",{className:"login-logo",children:(P=e==null?void 0:e.branding)!=null&&P.logo_url?l.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):l.jsx("div",{className:"logo-placeholder",children:((z=(D=e==null?void 0:e.branding)==null?void 0:D.company_name)==null?void 0:z.charAt(0))||"C"})}),l.jsx("h1",{children:((w=e==null?void 0:e.branding)==null?void 0:w.company_name)||"Sistema Courier"}),((m=e==null?void 0:e.branding)==null?void 0:m.tagline)&&l.jsx("p",{className:"tagline",children:e.branding.tagline}),l.jsxs("form",{onSubmit:R,children:[_&&l.jsx("div",{className:"error-message",children:_}),l.jsxs("div",{className:"input-group",children:[l.jsx(fd,{size:20,className:"input-icon"}),l.jsx("input",{type:"email",placeholder:"Correo electrónico",value:a,onChange:y=>c(y.target.value),required:!0})]}),l.jsxs("div",{className:"input-group",children:[l.jsx(Kc,{size:20,className:"input-icon"}),l.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:y=>f(y.target.value),required:!0})]}),l.jsx("button",{type:"submit",className:"btn-login",disabled:E,style:{backgroundColor:O},children:E?"Iniciando sesión...":l.jsxs(l.Fragment,{children:[l.jsx(fb,{size:20}),"Iniciar Sesión"]})}),l.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&l.jsx("div",{className:"login-footer",children:l.jsxs("p",{children:["Powered by ",l.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),l.jsx("style",{children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${O}22 0%, ${O}44 100%);
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
          background: ${O};
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
          border-color: ${O};
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
          color: ${O};
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
          color: ${O};
          text-decoration: none;
        }
      `})]})},Nb=()=>{var R,O,S;const{tenant:e,isWhiteLabel:t}=Sa(),n=((R=e==null?void 0:e.branding)==null?void 0:R.primary_color)||"#3b82f6",[r,i]=L.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[s,a]=L.useState([]),[c,d]=L.useState(!0);L.useEffect(()=>{f()},[e]);const f=async()=>{if(e)try{d(!0);const g="http://localhost:3001",P=await(await fetch(`${g}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(P);const z=await(await fetch(`${g}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();a(z)}catch(g){console.error("Error fetching dashboard data:",g)}finally{d(!1)}},E=g=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(g),x=g=>{const v=new Date(g),D=new Date().getTime()-v.getTime(),z=Math.floor(D/6e4);if(z<1)return"Hace un momento";if(z<60)return`Hace ${z} min`;const w=Math.floor(z/60);if(w<24)return`Hace ${w} hora${w>1?"s":""}`;const m=Math.floor(w/24);return`Hace ${m} día${m>1?"s":""}`},_=g=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[g]||g,C=g=>{switch(g){case"delivered":return l.jsx(Jv,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return l.jsx(Xc,{size:16,className:"status-icon warning"});case"assigned":case"processing":return l.jsx(Rn,{size:16,className:"status-icon info"});default:return l.jsx(Yv,{size:16,className:"status-icon pending"})}},N=[{icon:Rn,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:Xc,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:ja,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:Wc,label:"Ingresos Mes",value:E(r.monthlyRevenue),color:"#f59e0b"}];return l.jsxs("div",{className:"dashboard",children:[l.jsxs("header",{className:"dashboard-header",children:[l.jsx("div",{className:"header-left",children:(O=e==null?void 0:e.branding)!=null&&O.logo_url?l.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):l.jsx("span",{className:"header-title",children:((S=e==null?void 0:e.branding)==null?void 0:S.company_name)||"Sistema Courier"})}),l.jsxs("div",{className:"header-right",children:[l.jsx("span",{className:"user-name",children:"Admin"}),l.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),l.jsxs("main",{className:"dashboard-main",children:[l.jsx("div",{className:"stats-grid",children:N.map((g,v)=>l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",style:{backgroundColor:`${g.color}20`,color:g.color},children:l.jsx(g.icon,{size:24})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:c?"...":g.value}),l.jsx("div",{className:"stat-label",children:g.label})]})]},v))}),l.jsxs("div",{className:"dashboard-grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Paquetes Recientes"}),l.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),l.jsx("div",{className:"card-content",children:c?l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):s.length===0?l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):s.slice(0,4).map(g=>l.jsxs("div",{className:"package-item",children:[l.jsxs("div",{className:"package-info",children:[l.jsx("span",{className:"package-id",children:g.tracking_number}),l.jsx("span",{className:"package-client",children:g.client_name||"Sin cliente"})]}),l.jsxs("div",{className:"package-status",children:[C(g.status),l.jsx("span",{children:_(g.status)})]}),l.jsx("span",{className:"package-time",children:x(g.created_at)})]},g.id))})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Rendimiento"}),l.jsx(qc,{size:20,style:{color:"#10b981"}})]}),l.jsxs("div",{className:"card-content performance-grid",children:[l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),l.jsx("span",{className:"perf-value success",children:"94%"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),l.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Incidentes"}),l.jsx("span",{className:"perf-value warning",children:"3"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),l.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&l.jsxs("div",{className:"trial-notice",children:[l.jsx(ds,{size:20}),l.jsx("span",{children:"Tu período de prueba termina pronto. "}),l.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),l.jsx("style",{children:`
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
      `})]})},jb=()=>l.jsxs("div",{className:"loading-page",children:[l.jsxs("div",{className:"loading-container",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("h2",{children:"Cargando..."}),l.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),l.jsx("style",{children:`
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
      `})]}),Pb=({message:e})=>l.jsxs("div",{className:"error-page",children:[l.jsxs("div",{className:"error-container",children:[l.jsx("div",{className:"error-icon",children:l.jsx(ab,{size:64})}),l.jsx("h1",{children:"No se pudo cargar"}),l.jsx("p",{className:"error-message",children:e}),l.jsxs("div",{className:"error-actions",children:[l.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),l.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),l.jsx("style",{children:`
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
      `})]}),Rb=()=>{var b,I;const{tenant:e}=Sa(),[t,n]=L.useState([]),[r,i]=L.useState(!0),[s,a]=L.useState(""),[c,d]=L.useState(!1),[f,E]=L.useState(null),[x,_]=L.useState(null),[C,N]=L.useState(""),[R,O]=L.useState(""),S=((b=e==null?void 0:e.plan)==null?void 0:b.id)==="enterprise",g=((I=e==null?void 0:e.branding)==null?void 0:I.primary_color)||"#3b82f6";L.useEffect(()=>{v()},[]);const v=async()=>{try{const k=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(k)}catch(T){console.error("Error fetching domains:",T)}finally{i(!1)}},P=async T=>{if(T.preventDefault(),!!s.trim()){d(!0),N("");try{const k=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:s})}),me=await k.json();if(!k.ok)throw new Error(me.error||"Error agregando dominio");n([...t,me.domain]),E(me.dns_instructions),a(""),O("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(k){N(k.message)}finally{d(!1)}}},D=async T=>{_(T),N("");try{const me=await(await fetch(`/api/domains/${T}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();me.verified?(O("DNS verificado. El SSL se está configurando."),v()):N(me.message)}catch{N("Error verificando DNS")}finally{_(null)}},z=async T=>{try{await fetch(`/api/domains/${T}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),O("Dominio establecido como principal"),v()}catch{N("Error estableciendo dominio principal")}},w=async T=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${T}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(k=>k.id!==T)),O("Dominio eliminado")}catch{N("Error eliminando dominio")}},m=T=>{navigator.clipboard.writeText(T),O("Copiado al portapapeles"),setTimeout(()=>O(""),2e3)},y=T=>{switch(T){case"active":return l.jsxs("span",{className:"badge success",children:[l.jsx(Jv,{size:14})," Activo"]});case"provisioning":return l.jsxs("span",{className:"badge warning",children:[l.jsx(Yv,{size:14})," Configurando SSL"]});case"pending":return l.jsxs("span",{className:"badge pending",children:[l.jsx(ds,{size:14})," Pendiente verificación"]});case"failed":return l.jsxs("span",{className:"badge danger",children:[l.jsx(ds,{size:14})," Error"]});default:return null}};return S?l.jsxs("div",{className:"white-label-settings",children:[l.jsxs("header",{className:"page-header",children:[l.jsx("h1",{children:"Configuración White Label"}),l.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),C&&l.jsx("div",{className:"alert error",children:C}),R&&l.jsx("div",{className:"alert success",children:R}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsxs("h3",{children:[l.jsx(Xr,{size:20})," Dominios"]})}),l.jsxs("div",{className:"card-content",children:[l.jsx("div",{className:"domains-list",children:t.map(T=>l.jsxs("div",{className:"domain-row",children:[l.jsxs("div",{className:"domain-info",children:[l.jsxs("div",{className:"domain-name",children:[T.is_primary&&l.jsx(Gc,{size:16,className:"primary-star"}),T.domain,T.domain_type==="subdomain"&&l.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),y(T.ssl_status)]}),l.jsxs("div",{className:"domain-actions",children:[T.ssl_status==="pending"&&l.jsx("button",{onClick:()=>D(T.id),disabled:x===T.id,className:"btn-action",children:x===T.id?l.jsx(vb,{size:16,className:"spin"}):"Verificar DNS"}),T.ssl_status==="active"&&!T.is_primary&&l.jsxs("button",{onClick:()=>z(T.id),className:"btn-action",children:[l.jsx(Gc,{size:16})," Hacer principal"]}),T.domain_type==="custom"&&l.jsx("button",{onClick:()=>w(T.id),className:"btn-delete",children:l.jsx(_b,{size:16})}),l.jsx("a",{href:`https://${T.domain}`,target:"_blank",className:"btn-action",children:l.jsx(hd,{size:16})})]})]},T.id))}),l.jsxs("form",{onSubmit:P,className:"add-domain-form",children:[l.jsx("input",{type:"text",placeholder:"miempresa.com",value:s,onChange:T=>a(T.target.value)}),l.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[l.jsx(pd,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),f&&l.jsxs("div",{className:"card instructions-card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Configuración DNS"})}),l.jsxs("div",{className:"card-content",children:[l.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),l.jsxs("div",{className:"dns-record",children:[l.jsxs("div",{className:"dns-field",children:[l.jsx("label",{children:"Tipo"}),l.jsx("span",{children:f.type})]}),l.jsxs("div",{className:"dns-field",children:[l.jsx("label",{children:"Nombre"}),l.jsx("span",{children:f.name}),l.jsx("button",{onClick:()=>m(f.name),className:"copy-btn",children:l.jsx(wp,{size:14})})]}),l.jsxs("div",{className:"dns-field wide",children:[l.jsx("label",{children:"Valor"}),l.jsx("span",{children:f.value}),l.jsx("button",{onClick:()=>m(f.value),className:"copy-btn",children:l.jsx(wp,{size:14})})]})]}),l.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),l.jsx("style",{children:Ep(g)})]}):l.jsxs("div",{className:"white-label-settings",children:[l.jsxs("div",{className:"upgrade-notice",children:[l.jsx(Xr,{size:48}),l.jsx("h2",{children:"White Label disponible en Enterprise"}),l.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),l.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),l.jsx("style",{children:Ep(g)})]})},Ep=e=>`
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
`,Ab=()=>{const[e,t]=L.useState(null),[n,r]=L.useState(!0);L.useEffect(()=>{i()},[]);const i=async()=>{try{const d=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(d)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return l.jsx("div",{className:"loading",children:"Cargando dashboard..."});const s=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),a=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return l.jsxs("div",{className:"super-admin-dashboard",children:[l.jsxs("header",{className:"dashboard-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Super Admin Dashboard"}),l.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),l.jsx("div",{className:"header-actions",children:l.jsxs(je,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[l.jsx(pd,{size:20}),"Nuevo Tenant"]})})]}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card primary",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(aa,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),l.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),l.jsxs("div",{className:"stat-card success",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(ja,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),l.jsx("div",{className:"stat-label",children:"Activas"}),l.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),l.jsxs("div",{className:"stat-card warning",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(Wc,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:s((e==null?void 0:e.summary.mrr)||0)}),l.jsx("div",{className:"stat-label",children:"MRR"}),l.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),l.jsxs("div",{className:"stat-card danger",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(kb,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),l.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),l.jsxs("div",{className:"content-grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Empresas Recientes"}),l.jsx(je,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),l.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>l.jsxs("div",{className:"tenant-row",children:[l.jsx("div",{className:"tenant-avatar",children:c.logo_url?l.jsx("img",{src:c.logo_url,alt:c.name}):l.jsx("span",{children:c.name.charAt(0)})}),l.jsxs("div",{className:"tenant-info",children:[l.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),l.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),l.jsx("div",{className:"tenant-status",style:{color:a(c.status)},children:c.status}),l.jsx("div",{className:"tenant-plan",children:c.plan_id}),l.jsx(je,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:l.jsx(Qv,{size:18})})]},c.id))})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Ingresos Mensuales"}),l.jsx(qc,{size:20,className:"success"})]}),l.jsx("div",{className:"card-content chart-container",children:l.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,d)=>l.jsxs("div",{className:"chart-bar",children:[l.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),l.jsx("span",{className:"bar-label",children:c.month}),l.jsx("span",{className:"bar-value",children:s(c.revenue)})]},d))})})]}),l.jsxs("div",{className:"card small",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Por Plan"})}),l.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,d)=>l.jsxs("div",{className:"distribution-row",children:[l.jsx("span",{className:"dist-label",children:c.plan_id}),l.jsx("div",{className:"dist-bar",children:l.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][d%4]}})}),l.jsx("span",{className:"dist-count",children:c.count})]},d))})]}),l.jsxs("div",{className:"card small",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Acciones Rápidas"})}),l.jsxs("div",{className:"card-content quick-actions",children:[l.jsxs(je,{to:"/super-admin/tenants",className:"quick-action",children:[l.jsx(aa,{size:24}),l.jsx("span",{children:"Gestionar Empresas"})]}),l.jsxs(je,{to:"/super-admin/subscriptions",className:"quick-action",children:[l.jsx(Wc,{size:24}),l.jsx("span",{children:"Ver Suscripciones"})]}),l.jsxs(je,{to:"/super-admin/plans",className:"quick-action",children:[l.jsx(qc,{size:24}),l.jsx("span",{children:"Configurar Planes"})]})]})]})]}),l.jsx("style",{children:`
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
      `})]})},Ob=()=>{const e=Fn(),[t,n]=L.useState([]),[r,i]=L.useState({page:1,limit:20,total:0,pages:0}),[s,a]=L.useState(!0),[c,d]=L.useState(""),[f,E]=L.useState(""),[x,_]=L.useState(null);L.useEffect(()=>{C()},[r.page,f]);const C=async()=>{try{a(!0);const v=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...f&&{status:f},...c&&{search:c}}),D=await(await fetch(`/api/super-admin/tenants?${v}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(D.tenants),i(D.pagination)}catch(v){console.error("Error fetching tenants:",v)}finally{a(!1)}},N=v=>{v.preventDefault(),i({...r,page:1}),C()},R=async v=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${v}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),C()}catch(P){console.error("Error suspending tenant:",P)}},O=async v=>{try{await fetch(`/api/super-admin/tenants/${v}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),C()}catch(P){console.error("Error activating tenant:",P)}},S=v=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[v]||"bg-blue"}`,g=v=>new Date(v).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return l.jsxs("div",{className:"tenants-management",children:[l.jsxs("header",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx(je,{to:"/super-admin",className:"back-link",children:l.jsx(Hc,{size:20})}),l.jsxs("div",{children:[l.jsx("h1",{children:"Gestión de Empresas"}),l.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),l.jsxs(je,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[l.jsx(pd,{size:20}),"Nueva Empresa"]})]}),l.jsxs("div",{className:"filters-bar",children:[l.jsxs("form",{onSubmit:N,className:"search-box",children:[l.jsx(xb,{size:20}),l.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:v=>d(v.target.value)})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx(db,{size:18}),l.jsxs("select",{value:f,onChange:v=>E(v.target.value),children:[l.jsx("option",{value:"",children:"Todos los estados"}),l.jsx("option",{value:"active",children:"Activos"}),l.jsx("option",{value:"trial",children:"En prueba"}),l.jsx("option",{value:"suspended",children:"Suspendidos"}),l.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),l.jsx("div",{className:"table-container",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Empresa"}),l.jsx("th",{children:"Subdominio"}),l.jsx("th",{children:"Plan"}),l.jsx("th",{children:"Estado"}),l.jsx("th",{children:"Creado"}),l.jsx("th",{children:"Acciones"})]})}),l.jsx("tbody",{children:s?l.jsx("tr",{children:l.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?l.jsx("tr",{children:l.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(v=>{var P,D,z;return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsxs("div",{className:"tenant-cell",children:[l.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((P=v.branding)==null?void 0:P.primary_color)||"#3b82f6"},children:(D=v.branding)!=null&&D.logo_url?l.jsx("img",{src:v.branding.logo_url,alt:""}):v.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("div",{className:"tenant-name",children:((z=v.branding)==null?void 0:z.company_name)||v.name}),l.jsxs("div",{className:"tenant-id",children:[v.id.slice(0,8),"..."]})]})]})}),l.jsx("td",{children:l.jsxs("a",{href:`https://${v.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[v.subdomain,l.jsx(hd,{size:14})]})}),l.jsx("td",{children:l.jsx("span",{className:"plan-badge",children:v.plan_id})}),l.jsx("td",{children:l.jsx("span",{className:S(v.status),children:v.status})}),l.jsx("td",{children:g(v.created_at)}),l.jsx("td",{children:l.jsxs("div",{className:"actions-cell",children:[l.jsx("button",{onClick:()=>e(`/super-admin/tenants/${v.id}`),className:"action-btn",title:"Ver detalles",children:l.jsx(Qv,{size:18})}),v.status==="active"?l.jsx("button",{onClick:()=>R(v.id),className:"action-btn danger",title:"Suspender",children:l.jsx(Zv,{size:18})}):v.status==="suspended"&&l.jsx("button",{onClick:()=>O(v.id),className:"action-btn success",title:"Activar",children:l.jsx(ey,{size:18})})]})})]},v.id)})})]})}),r.pages>1&&l.jsxs("div",{className:"pagination",children:[l.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[l.jsx(Hc,{size:18}),"Anterior"]}),l.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),l.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",l.jsx(cb,{size:18})]})]}),l.jsx("style",{children:`
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
      `})]})},Lb=()=>{const{id:e}=Ux();Fn();const[t,n]=L.useState(null),[r,i]=L.useState(!0),[s,a]=L.useState(!1),[c,d]=L.useState({name:"",plan_id:""});L.useEffect(()=>{f()},[e]);const f=async()=>{try{const N=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(N),d({name:N.name,plan_id:N.plan_id})}catch(C){console.error("Error fetching tenant:",C)}finally{i(!1)}},E=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),a(!1),f()}catch(C){console.error("Error updating tenant:",C)}},x=async C=>{if(confirm(C==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${C}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),f()}catch(R){console.error("Error changing status:",R)}},_=C=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[C]||"#3b82f6";return r?l.jsx("div",{className:"loading-page",children:"Cargando..."}):t?l.jsxs("div",{className:"tenant-detail",children:[l.jsxs("header",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx(je,{to:"/super-admin/tenants",className:"back-link",children:l.jsx(Hc,{size:20})}),l.jsxs("div",{className:"tenant-header",children:[l.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?l.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("h1",{children:t.branding.company_name||t.name}),l.jsxs("div",{className:"tenant-meta",children:[l.jsx("span",{className:"status-dot",style:{backgroundColor:_(t.status)}}),l.jsx("span",{children:t.status}),l.jsx("span",{className:"separator",children:"•"}),l.jsx("span",{children:t.plan_id})]})]})]})]}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[l.jsx(hd,{size:18}),"Visitar"]}),t.status==="active"?l.jsxs("button",{onClick:()=>x("suspend"),className:"btn btn-danger",children:[l.jsx(Zv,{size:18}),"Suspender"]}):t.status==="suspended"&&l.jsxs("button",{onClick:()=>x("activate"),className:"btn btn-success",children:[l.jsx(ey,{size:18}),"Activar"]})]})]}),l.jsxs("div",{className:"detail-content",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Información General"}),s?l.jsxs("button",{onClick:E,className:"btn btn-primary btn-sm",children:[l.jsx(yb,{size:16}),"Guardar"]}):l.jsx("button",{onClick:()=>a(!0),className:"btn-icon",children:l.jsx(mb,{size:18})})]}),l.jsxs("div",{className:"card-content info-grid",children:[l.jsxs("div",{className:"info-item",children:[l.jsx(aa,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Nombre"}),s?l.jsx("input",{value:c.name,onChange:C=>d({...c,name:C.target.value})}):l.jsx("span",{children:t.name})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(Xr,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Subdominio"}),l.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(fd,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Email"}),l.jsx("span",{children:t.branding.contact_email||"-"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(gb,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Teléfono"}),l.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(lb,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Creado"}),l.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(ub,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Plan"}),s?l.jsxs("select",{value:c.plan_id,onChange:C=>d({...c,plan_id:C.target.value}),children:[l.jsx("option",{value:"trial",children:"Trial"}),l.jsx("option",{value:"starter",children:"Starter"}),l.jsx("option",{value:"professional",children:"Professional"}),l.jsx("option",{value:"enterprise",children:"Enterprise"})]}):l.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Uso del Servicio"})}),l.jsxs("div",{className:"card-content usage-grid",children:[l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(ja,{size:24})}),l.jsx("div",{className:"usage-value",children:t.usage.users}),l.jsx("div",{className:"usage-label",children:"Usuarios"})]}),l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(Rn,{size:24})}),l.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),l.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(hb,{size:24})}),l.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),l.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Dominios"})}),l.jsx("div",{className:"card-content",children:t.domains.length===0?l.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((C,N)=>l.jsxs("div",{className:"domain-row",children:[l.jsx(Xr,{size:16}),l.jsx("span",{children:C.domain}),C.is_primary&&l.jsx("span",{className:"badge primary",children:"Principal"}),l.jsxs("span",{className:`badge ${C.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",C.ssl_status]})]},N))})]}),t.subscription&&l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Suscripción"})}),l.jsx("div",{className:"card-content",children:l.jsxs("div",{className:"subscription-info",children:[l.jsxs("div",{children:[l.jsx("label",{children:"Estado"}),l.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),l.jsxs("div",{children:[l.jsx("label",{children:"Próximo cobro"}),l.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),l.jsx("style",{children:`
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
      `})]}):l.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},Db=()=>{const{tenant:e,loading:t,error:n}=Sa(),r=nn(),s=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),a=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return a&&s?l.jsx("div",{className:"app",children:l.jsxs(Cf,{children:[l.jsx(Ge,{path:"/",element:l.jsx(Sb,{})}),l.jsx(Ge,{path:"/register",element:l.jsx(Tb,{})}),l.jsx(Ge,{path:"/onboarding",element:l.jsx(Ib,{})}),l.jsx(Ge,{path:"*",element:l.jsx(yo,{to:"/",replace:!0})})]})}):t?l.jsx(jb,{}):n&&!a?l.jsx(Pb,{message:n}):l.jsx(ib,{children:l.jsx("div",{className:"app",children:l.jsxs(Cf,{children:[l.jsx(Ge,{path:"/login",element:l.jsx(Cb,{})}),l.jsx(Ge,{path:"/dashboard",element:l.jsx(Si,{children:l.jsx(Nb,{})})}),l.jsx(Ge,{path:"/account/white-label",element:l.jsx(Si,{children:l.jsx(Rb,{})})}),l.jsx(Ge,{path:"/super-admin",element:l.jsx(Si,{children:l.jsx(Ab,{})})}),l.jsx(Ge,{path:"/super-admin/tenants",element:l.jsx(Si,{children:l.jsx(Ob,{})})}),l.jsx(Ge,{path:"/super-admin/tenants/:id",element:l.jsx(Si,{children:l.jsx(Lb,{})})}),l.jsx(Ge,{path:"/",element:l.jsx(yo,{to:"/dashboard",replace:!0})}),l.jsx(Ge,{path:"*",element:l.jsx(yo,{to:"/dashboard",replace:!0})})]})})})};Ul.createRoot(document.getElementById("root")).render(l.jsx(Op.StrictMode,{children:l.jsx(lw,{children:l.jsx(mw,{children:l.jsx(Db,{})})})}));
//# sourceMappingURL=index-D0jJ0Yz6.js.map
