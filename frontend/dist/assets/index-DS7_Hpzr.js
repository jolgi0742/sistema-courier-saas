function Dy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function My(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ep={exports:{}},ua={},Sp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),zy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),By=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Hy=Symbol.for("react.forward_ref"),Wy=Symbol.for("react.suspense"),Ky=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),hh=Symbol.iterator;function qy(e){return e===null||typeof e!="object"?null:(e=hh&&e[hh]||e["@@iterator"],typeof e=="function"?e:null)}var Tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ip=Object.assign,Np={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Tp}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cp(){}Cp.prototype=Yr.prototype;function Yc(e,t,n){this.props=e,this.context=t,this.refs=Np,this.updater=n||Tp}var Qc=Yc.prototype=new Cp;Qc.constructor=Yc;Ip(Qc,Yr.prototype);Qc.isPureReactComponent=!0;var fh=Array.isArray,jp=Object.prototype.hasOwnProperty,Zc={current:null},Pp={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)jp.call(t,r)&&!Pp.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),f=0;f<c;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:fs,type:e,key:s,ref:a,props:i,_owner:Zc.current}}function Xy(e,t){return{$$typeof:fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function Jy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ph=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jy(""+e.key):t.toString(36)}function ao(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fs:case zy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+rl(a,0):r,fh(i)?(n="",e!=null&&(n=e.replace(ph,"$&/")+"/"),ao(i,t,n,"",function(f){return f})):i!=null&&(eu(i)&&(i=Xy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",fh(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+rl(s,c);a+=ao(s,t,n,d,i)}else if(d=qy(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+rl(s,c++),a+=ao(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $s(e,t,n){if(e==null)return e;var r=[],i=0;return ao(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},lo={transition:null},Qy={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Zc};function Ap(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:$s,forEach:function(e,t,n){$s(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $s(e,function(){t++}),t},toArray:function(e){return $s(e,function(t){return t})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Yr;K.Fragment=Uy;K.Profiler=$y;K.PureComponent=Yc;K.StrictMode=Fy;K.Suspense=Wy;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;K.act=Ap;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ip({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Zc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)jp.call(t,d)&&!Pp.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var f=0;f<d;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:fs,type:e.type,key:i,ref:s,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:Vy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:By,_context:e},e.Consumer=e};K.createElement=Rp;K.createFactory=function(e){var t=Rp.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Hy,render:e}};K.isValidElement=eu;K.lazy=function(e){return{$$typeof:Gy,_payload:{_status:-1,_result:e},_init:Yy}};K.memo=function(e,t){return{$$typeof:Ky,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};K.unstable_act=Ap;K.useCallback=function(e,t){return ze.current.useCallback(e,t)};K.useContext=function(e){return ze.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};K.useEffect=function(e,t){return ze.current.useEffect(e,t)};K.useId=function(){return ze.current.useId()};K.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return ze.current.useMemo(e,t)};K.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};K.useRef=function(e){return ze.current.useRef(e)};K.useState=function(e){return ze.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return ze.current.useTransition()};K.version="18.3.1";Sp.exports=K;var L=Sp.exports;const Op=My(L),Zy=Dy({__proto__:null,default:Op},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0=L,t0=Symbol.for("react.element"),n0=Symbol.for("react.fragment"),r0=Object.prototype.hasOwnProperty,i0=e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s0={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)r0.call(t,r)&&!s0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:t0,type:e,key:s,ref:a,props:i,_owner:i0.current}}ua.Fragment=n0;ua.jsx=Lp;ua.jsxs=Lp;Ep.exports=ua;var l=Ep.exports,Fl={},Dp={exports:{}},Qe={},Mp={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var W=F.length;F.push(V);e:for(;0<W;){var se=W-1>>>1,Q=F[se];if(0<i(Q,V))F[se]=V,F[W]=Q,W=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],W=F.pop();if(W!==V){F[0]=W;e:for(var se=0,Q=F.length,ue=Q>>>1;se<ue;){var At=2*(se+1)-1,Ot=F[At],Lt=At+1,Dt=F[Lt];if(0>i(Ot,W))Lt<Q&&0>i(Dt,Ot)?(F[se]=Dt,F[Lt]=W,se=Lt):(F[se]=Ot,F[At]=W,se=At);else if(Lt<Q&&0>i(Dt,W))F[se]=Dt,F[Lt]=W,se=Lt;else break e}}return V}function i(F,V){var W=F.sortIndex-V.sortIndex;return W!==0?W:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var d=[],f=[],k=1,y=null,w=3,C=!1,N=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var V=n(f);V!==null;){if(V.callback===null)r(f);else if(V.startTime<=F)r(f),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(f)}}function j(F){if(R=!1,v(F),!N)if(n(d)!==null)N=!0,ri(D);else{var V=n(f);V!==null&&Rt(j,V.startTime-F)}}function D(F,V){N=!1,R&&(R=!1,E(g),g=-1),C=!0;var W=w;try{for(v(V),y=n(d);y!==null&&(!(y.expirationTime>V)||F&&!I());){var se=y.callback;if(typeof se=="function"){y.callback=null,w=y.priorityLevel;var Q=se(y.expirationTime<=V);V=e.unstable_now(),typeof Q=="function"?y.callback=Q:y===n(d)&&r(d),v(V)}else r(d);y=n(d)}if(y!==null)var ue=!0;else{var At=n(f);At!==null&&Rt(j,At.startTime-V),ue=!1}return ue}finally{y=null,w=W,C=!1}}var M=!1,_=null,g=-1,x=5,S=-1;function I(){return!(e.unstable_now()-S<x)}function T(){if(_!==null){var F=e.unstable_now();S=F;var V=!0;try{V=_(!0,F)}finally{V?b():(M=!1,_=null)}}else M=!1}var b;if(typeof m=="function")b=function(){m(T)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Bn=ge.port2;ge.port1.onmessage=T,b=function(){Bn.postMessage(null)}}else b=function(){A(T,0)};function ri(F){_=F,M||(M=!0,b())}function Rt(F,V){g=A(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){N||C||(N=!0,ri(D))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var V=3;break;default:V=w}var W=w;w=V;try{return F()}finally{w=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=w;w=F;try{return V()}finally{w=W}},e.unstable_scheduleCallback=function(F,V,W){var se=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:k++,callback:V,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>se?(F.sortIndex=W,t(f,F),n(d)===null&&F===n(f)&&(R?(E(g),g=-1):R=!0,Rt(j,W-se))):(F.sortIndex=Q,t(d,F),N||C||(N=!0,ri(D))),F},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(F){var V=w;return function(){var W=w;w=V;try{return F.apply(this,arguments)}finally{w=W}}}})(zp);Mp.exports=zp;var o0=Mp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=L,Ye=o0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Up=new Set,Hi={};function cr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Hi[e]=t,e=0;e<t.length;e++)Up.add(t[e])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,l0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gh={},mh={};function c0(e){return $l.call(mh,e)?!0:$l.call(gh,e)?!1:l0.test(e)?mh[e]=!0:(gh[e]=!0,!1)}function u0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function d0(e,t,n,r){if(t===null||typeof t>"u"||u0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tu,nu);be[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tu,nu);be[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tu,nu);be[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ru(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(d0(t,n,i,r)&&(n=null),r||i===null?c0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),xr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),$p=Symbol.for("react.context"),su=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Bp=Symbol.for("react.offscreen"),vh=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=vh&&e[vh]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,il;function Ti(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var sl=!1;function ol(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=c);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function h0(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case xr:return"Portal";case Bl:return"Profiler";case iu:return"StrictMode";case Vl:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $p:return(e.displayName||"Context")+".Consumer";case Fp:return(e._context.displayName||"Context")+".Provider";case su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ou:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function f0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function p0(e){var t=Vp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){e._valueTracker||(e._valueTracker=p0(e))}function Hp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wp(e,t){t=t.checked,t!=null&&ru(e,"checked",t,!1)}function Gl(e,t){Wp(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ii=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Ii(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Kp(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hs,qp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g0=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){g0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function Xp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var m0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(m0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ec=null,Ar=null,Or=null;function kh(e){if(e=ms(e)){if(typeof ec!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ga(t),ec(e.stateNode,e.type,t))}}function Yp(e){Ar?Or?Or.push(e):Or=[e]:Ar=e}function Qp(){if(Ar){var e=Ar,t=Or;if(Or=Ar=null,kh(e),t)for(e=0;e<t.length;e++)kh(t[e])}}function Zp(e,t){return e(t)}function eg(){}var al=!1;function tg(e,t,n){if(al)return e(t,n);al=!0;try{return Zp(e,t,n)}finally{al=!1,(Ar!==null||Or!==null)&&(eg(),Qp())}}function Ki(e,t){var n=e.stateNode;if(n===null)return null;var r=ga(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var tc=!1;if(Xt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){tc=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{tc=!1}function v0(e,t,n,r,i,s,a,c,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(k){this.onError(k)}}var Ai=!1,To=null,Io=!1,nc=null,y0={onError:function(e){Ai=!0,To=e}};function x0(e,t,n,r,i,s,a,c,d){Ai=!1,To=null,v0.apply(y0,arguments)}function w0(e,t,n,r,i,s,a,c,d){if(x0.apply(this,arguments),Ai){if(Ai){var f=To;Ai=!1,To=null}else throw Error(z(198));Io||(Io=!0,nc=f)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ng(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bh(e){if(ur(e)!==e)throw Error(z(188))}function _0(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bh(i),e;if(s===r)return bh(i),t;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=s;break}if(c===r){a=!0,r=i,n=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===n){a=!0,n=s,r=i;break}if(c===r){a=!0,r=s,n=i;break}c=c.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function rg(e){return e=_0(e),e!==null?ig(e):null}function ig(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ig(e);if(t!==null)return t;e=e.sibling}return null}var sg=Ye.unstable_scheduleCallback,Eh=Ye.unstable_cancelCallback,k0=Ye.unstable_shouldYield,b0=Ye.unstable_requestPaint,he=Ye.unstable_now,E0=Ye.unstable_getCurrentPriorityLevel,lu=Ye.unstable_ImmediatePriority,og=Ye.unstable_UserBlockingPriority,No=Ye.unstable_NormalPriority,S0=Ye.unstable_LowPriority,ag=Ye.unstable_IdlePriority,da=null,bt=null;function T0(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:C0,I0=Math.log,N0=Math.LN2;function C0(e){return e>>>=0,e===0?32:31-(I0(e)/N0|0)|0}var Ws=64,Ks=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Co(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=Ni(c):(s&=a,s!==0&&(r=Ni(s)))}else a=n&~i,a!==0?r=Ni(a):s!==0&&(r=Ni(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function j0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-pt(s),c=1<<a,d=i[a];d===-1?(!(c&n)||c&r)&&(i[a]=j0(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function rc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lg(){var e=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ps(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function R0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function cg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ug,uu,dg,hg,fg,ic=!1,Gs=[],bn=null,En=null,Sn=null,Gi=new Map,qi=new Map,pn=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function xi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ms(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function O0(e,t,n,r,i){switch(t){case"focusin":return bn=xi(bn,e,t,n,r,i),!0;case"dragenter":return En=xi(En,e,t,n,r,i),!0;case"mouseover":return Sn=xi(Sn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,xi(Gi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qi.set(s,xi(qi.get(s)||null,e,t,n,r,i)),!0}return!1}function pg(e){var t=Xn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=ng(n),t!==null){e.blockedOn=t,fg(e.priority,function(){dg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=ms(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function Th(e,t,n){co(e)&&n.delete(t)}function L0(){ic=!1,bn!==null&&co(bn)&&(bn=null),En!==null&&co(En)&&(En=null),Sn!==null&&co(Sn)&&(Sn=null),Gi.forEach(Th),qi.forEach(Th)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,ic||(ic=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,L0)))}function Xi(e){function t(i){return wi(i,e)}if(0<Gs.length){wi(Gs[0],e);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&wi(bn,e),En!==null&&wi(En,e),Sn!==null&&wi(Sn,e),Gi.forEach(t),qi.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)pg(n),n.blockedOn===null&&pn.shift()}var Lr=tn.ReactCurrentBatchConfig,jo=!0;function D0(e,t,n,r){var i=Y,s=Lr.transition;Lr.transition=null;try{Y=1,du(e,t,n,r)}finally{Y=i,Lr.transition=s}}function M0(e,t,n,r){var i=Y,s=Lr.transition;Lr.transition=null;try{Y=4,du(e,t,n,r)}finally{Y=i,Lr.transition=s}}function du(e,t,n,r){if(jo){var i=sc(e,t,n,r);if(i===null)yl(e,t,r,Po,n),Sh(e,r);else if(O0(i,e,t,n,r))r.stopPropagation();else if(Sh(e,r),t&4&&-1<A0.indexOf(e)){for(;i!==null;){var s=ms(i);if(s!==null&&ug(s),s=sc(e,t,n,r),s===null&&yl(e,t,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Po=null;function sc(e,t,n,r){if(Po=null,e=au(r),e=Xn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ng(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function gg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case lu:return 1;case og:return 4;case No:case S0:return 16;case ag:return 536870912;default:return 16}default:return 16}}var wn=null,hu=null,uo=null;function mg(){if(uo)return uo;var e,t=hu,n=t.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return uo=i.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function Ih(){return!1}function Ze(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qs:Ih,this.isPropagationStopped=Ih,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=Ze(Qr),gs=le({},Qr,{view:0,detail:0}),z0=Ze(gs),cl,ul,_i,ha=le({},gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(cl=e.screenX-_i.screenX,ul=e.screenY-_i.screenY):ul=cl=0,_i=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Nh=Ze(ha),U0=le({},ha,{dataTransfer:0}),F0=Ze(U0),$0=le({},gs,{relatedTarget:0}),dl=Ze($0),B0=le({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),V0=Ze(B0),H0=le({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W0=Ze(H0),K0=le({},Qr,{data:0}),Ch=Ze(K0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function pu(){return J0}var Y0=le({},gs,{key:function(e){if(e.key){var t=G0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q0=Ze(Y0),Z0=le({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Ze(Z0),e1=le({},gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),t1=Ze(e1),n1=le({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),r1=Ze(n1),i1=le({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Ze(i1),o1=[9,13,27,32],gu=Xt&&"CompositionEvent"in window,Oi=null;Xt&&"documentMode"in document&&(Oi=document.documentMode);var a1=Xt&&"TextEvent"in window&&!Oi,vg=Xt&&(!gu||Oi&&8<Oi&&11>=Oi),Ph=" ",Rh=!1;function yg(e,t){switch(e){case"keyup":return o1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _r=!1;function l1(e,t){switch(e){case"compositionend":return xg(t);case"keypress":return t.which!==32?null:(Rh=!0,Ph);case"textInput":return e=t.data,e===Ph&&Rh?null:e;default:return null}}function c1(e,t){if(_r)return e==="compositionend"||!gu&&yg(e,t)?(e=mg(),uo=hu=wn=null,_r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vg&&t.locale!=="ko"?null:t.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u1[e.type]:t==="textarea"}function wg(e,t,n,r){Yp(r),t=Ro(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Ji=null;function d1(e){Pg(e,0)}function fa(e){var t=Er(e);if(Hp(t))return e}function h1(e,t){if(e==="change")return t}var _g=!1;if(Xt){var hl;if(Xt){var fl="oninput"in document;if(!fl){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),fl=typeof Oh.oninput=="function"}hl=fl}else hl=!1;_g=hl&&(!document.documentMode||9<document.documentMode)}function Lh(){Li&&(Li.detachEvent("onpropertychange",kg),Ji=Li=null)}function kg(e){if(e.propertyName==="value"&&fa(Ji)){var t=[];wg(t,Ji,e,au(e)),tg(d1,t)}}function f1(e,t,n){e==="focusin"?(Lh(),Li=t,Ji=n,Li.attachEvent("onpropertychange",kg)):e==="focusout"&&Lh()}function p1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(Ji)}function g1(e,t){if(e==="click")return fa(t)}function m1(e,t){if(e==="input"||e==="change")return fa(t)}function v1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:v1;function Yi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$l.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Dh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mh(e,t){var n=Dh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function bg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eg(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function y1(e){var t=Eg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Mh(n,s);var a=Mh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x1=Xt&&"documentMode"in document&&11>=document.documentMode,kr=null,oc=null,Di=null,ac=!1;function zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||kr==null||kr!==So(r)||(r=kr,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Yi(Di,r)||(Di=r,r=Ro(oc,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},pl={},Sg={};Xt&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function pa(e){if(pl[e])return pl[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sg)return pl[e]=t[n];return e}var Tg=pa("animationend"),Ig=pa("animationiteration"),Ng=pa("animationstart"),Cg=pa("transitionend"),jg=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){jg.set(e,t),cr(t,[e])}for(var gl=0;gl<Uh.length;gl++){var ml=Uh[gl],w1=ml.toLowerCase(),_1=ml[0].toUpperCase()+ml.slice(1);Mn(w1,"on"+_1)}Mn(Tg,"onAnimationEnd");Mn(Ig,"onAnimationIteration");Mn(Ng,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Cg,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function Fh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,w0(r,t,void 0,e),e.currentTarget=null}function Pg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],d=c.instance,f=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;Fh(i,c,f),s=d}else for(a=0;a<r.length;a++){if(c=r[a],d=c.instance,f=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;Fh(i,c,f),s=d}}}if(Io)throw e=nc,Io=!1,nc=null,e}function ne(e,t){var n=t[hc];n===void 0&&(n=t[hc]=new Set);var r=e+"__bubble";n.has(r)||(Rg(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Rg(n,e,r,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[Js]){e[Js]=!0,Up.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,vl("selectionchange",!1,t))}}function Rg(e,t,n,r){switch(gg(t)){case 1:var i=D0;break;case 4:i=M0;break;default:i=du}n=i.bind(null,t,n,e),i=void 0,!tc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Xn(c),a===null)return;if(d=a.tag,d===5||d===6){r=s=a;continue e}c=c.parentNode}}r=r.return}tg(function(){var f=s,k=au(n),y=[];e:{var w=jg.get(e);if(w!==void 0){var C=fu,N=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":C=Q0;break;case"focusin":N="focus",C=dl;break;case"focusout":N="blur",C=dl;break;case"beforeblur":case"afterblur":C=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=t1;break;case Tg:case Ig:case Ng:C=V0;break;case Cg:C=r1;break;case"scroll":C=z0;break;case"wheel":C=s1;break;case"copy":case"cut":case"paste":C=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=jh}var R=(t&4)!==0,A=!R&&e==="scroll",E=R?w!==null?w+"Capture":null:w;R=[];for(var m=f,v;m!==null;){v=m;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,E!==null&&(j=Ki(m,E),j!=null&&R.push(Zi(m,j,v)))),A)break;m=m.return}0<R.length&&(w=new C(w,N,null,n,k),y.push({event:w,listeners:R}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",w&&n!==Zl&&(N=n.relatedTarget||n.fromElement)&&(Xn(N)||N[Jt]))break e;if((C||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,C?(N=n.relatedTarget||n.toElement,C=f,N=N?Xn(N):null,N!==null&&(A=ur(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=f),C!==N)){if(R=Nh,j="onMouseLeave",E="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(R=jh,j="onPointerLeave",E="onPointerEnter",m="pointer"),A=C==null?w:Er(C),v=N==null?w:Er(N),w=new R(j,m+"leave",C,n,k),w.target=A,w.relatedTarget=v,j=null,Xn(k)===f&&(R=new R(E,m+"enter",N,n,k),R.target=v,R.relatedTarget=A,j=R),A=j,C&&N)t:{for(R=C,E=N,m=0,v=R;v;v=vr(v))m++;for(v=0,j=E;j;j=vr(j))v++;for(;0<m-v;)R=vr(R),m--;for(;0<v-m;)E=vr(E),v--;for(;m--;){if(R===E||E!==null&&R===E.alternate)break t;R=vr(R),E=vr(E)}R=null}else R=null;C!==null&&$h(y,w,C,R,!1),N!==null&&A!==null&&$h(y,A,N,R,!0)}}e:{if(w=f?Er(f):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var D=h1;else if(Ah(w))if(_g)D=m1;else{D=p1;var M=f1}else(C=w.nodeName)&&C.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(D=g1);if(D&&(D=D(e,f))){wg(y,D,n,k);break e}M&&M(e,w,f),e==="focusout"&&(M=w._wrapperState)&&M.controlled&&w.type==="number"&&ql(w,"number",w.value)}switch(M=f?Er(f):window,e){case"focusin":(Ah(M)||M.contentEditable==="true")&&(kr=M,oc=f,Di=null);break;case"focusout":Di=oc=kr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,zh(y,n,k);break;case"selectionchange":if(x1)break;case"keydown":case"keyup":zh(y,n,k)}var _;if(gu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else _r?yg(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(vg&&n.locale!=="ko"&&(_r||g!=="onCompositionStart"?g==="onCompositionEnd"&&_r&&(_=mg()):(wn=k,hu="value"in wn?wn.value:wn.textContent,_r=!0)),M=Ro(f,g),0<M.length&&(g=new Ch(g,e,null,n,k),y.push({event:g,listeners:M}),_?g.data=_:(_=xg(n),_!==null&&(g.data=_)))),(_=a1?l1(e,n):c1(e,n))&&(f=Ro(f,"onBeforeInput"),0<f.length&&(k=new Ch("onBeforeInput","beforeinput",null,n,k),y.push({event:k,listeners:f}),k.data=_))}Pg(y,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(e,n),s!=null&&r.unshift(Zi(e,s,i)),s=Ki(e,t),s!=null&&r.push(Zi(e,s,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $h(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var c=n,d=c.alternate,f=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&f!==null&&(c=f,i?(d=Ki(n,s),d!=null&&a.unshift(Zi(n,d,c))):i||(d=Ki(n,s),d!=null&&a.push(Zi(n,d,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var b1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function Bh(e){return(typeof e=="string"?e:""+e).replace(b1,`
`).replace(E1,"")}function Ys(e,t,n){if(t=Bh(t),Bh(e)!==t&&n)throw Error(z(425))}function Ao(){}var lc=null,cc=null;function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(e){return Vh.resolve(null).then(e).catch(I1)}:dc;function I1(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xi(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Zr,es="__reactProps$"+Zr,Jt="__reactContainer$"+Zr,hc="__reactEvents$"+Zr,N1="__reactListeners$"+Zr,C1="__reactHandles$"+Zr;function Xn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hh(e);e!==null;){if(n=e[_t])return n;e=Hh(e)}return t}e=n,n=e.parentNode}return null}function ms(e){return e=e[_t]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ga(e){return e[es]||null}var fc=[],Sr=-1;function zn(e){return{current:e}}function re(e){0>Sr||(e.current=fc[Sr],fc[Sr]=null,Sr--)}function ee(e,t){Sr++,fc[Sr]=e.current,e.current=t}var Ln={},Pe=zn(Ln),We=zn(!1),tr=Ln;function Br(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Oo(){re(We),re(Pe)}function Wh(e,t,n){if(Pe.current!==Ln)throw Error(z(168));ee(Pe,t),ee(We,n)}function Ag(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,f0(e)||"Unknown",i));return le({},n,r)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,tr=Pe.current,ee(Pe,e),ee(We,We.current),!0}function Kh(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Ag(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,re(We),re(Pe),ee(Pe,e)):re(We),ee(We,n)}var Ft=null,ma=!1,wl=!1;function Og(e){Ft===null?Ft=[e]:Ft.push(e)}function j1(e){ma=!0,Og(e)}function Un(){if(!wl&&Ft!==null){wl=!0;var e=0,t=Y;try{var n=Ft;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ft=null,ma=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),sg(lu,Un),i}finally{Y=t,wl=!1}}return null}var Tr=[],Ir=0,Do=null,Mo=0,tt=[],nt=0,nr=null,$t=1,Bt="";function Kn(e,t){Tr[Ir++]=Mo,Tr[Ir++]=Do,Do=e,Mo=t}function Lg(e,t,n){tt[nt++]=$t,tt[nt++]=Bt,tt[nt++]=nr,nr=e;var r=$t;e=Bt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,$t=1<<32-pt(t)+i|n<<i|r,Bt=s+e}else $t=1<<s|n<<i|r,Bt=e}function vu(e){e.return!==null&&(Kn(e,1),Lg(e,1,0))}function yu(e){for(;e===Do;)Do=Tr[--Ir],Tr[Ir]=null,Mo=Tr[--Ir],Tr[Ir]=null;for(;e===nr;)nr=tt[--nt],tt[nt]=null,Bt=tt[--nt],tt[nt]=null,$t=tt[--nt],tt[nt]=null}var Je=null,Xe=null,ie=!1,dt=null;function Dg(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Xe=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:$t,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Xe=null,!0):!1;default:return!1}}function pc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gc(e){if(ie){var t=Xe;if(t){var n=t;if(!Gh(e,t)){if(pc(e))throw Error(z(418));t=Tn(n.nextSibling);var r=Je;t&&Gh(e,t)?Dg(r,n):(e.flags=e.flags&-4097|2,ie=!1,Je=e)}}else{if(pc(e))throw Error(z(418));e.flags=e.flags&-4097|2,ie=!1,Je=e}}}function qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Qs(e){if(e!==Je)return!1;if(!ie)return qh(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uc(e.type,e.memoizedProps)),t&&(t=Xe)){if(pc(e))throw Mg(),Error(z(418));for(;t;)Dg(e,t),t=Tn(t.nextSibling)}if(qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Je?Tn(e.stateNode.nextSibling):null;return!0}function Mg(){for(var e=Xe;e;)e=Tn(e.nextSibling)}function Vr(){Xe=Je=null,ie=!1}function xu(e){dt===null?dt=[e]:dt.push(e)}var P1=tn.ReactCurrentBatchConfig;function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Zs(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xh(e){var t=e._init;return t(e._payload)}function zg(e){function t(E,m){if(e){var v=E.deletions;v===null?(E.deletions=[m],E.flags|=16):v.push(m)}}function n(E,m){if(!e)return null;for(;m!==null;)t(E,m),m=m.sibling;return null}function r(E,m){for(E=new Map;m!==null;)m.key!==null?E.set(m.key,m):E.set(m.index,m),m=m.sibling;return E}function i(E,m){return E=jn(E,m),E.index=0,E.sibling=null,E}function s(E,m,v){return E.index=v,e?(v=E.alternate,v!==null?(v=v.index,v<m?(E.flags|=2,m):v):(E.flags|=2,m)):(E.flags|=1048576,m)}function a(E){return e&&E.alternate===null&&(E.flags|=2),E}function c(E,m,v,j){return m===null||m.tag!==6?(m=Il(v,E.mode,j),m.return=E,m):(m=i(m,v),m.return=E,m)}function d(E,m,v,j){var D=v.type;return D===wr?k(E,m,v.props.children,j,v.key):m!==null&&(m.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===hn&&Xh(D)===m.type)?(j=i(m,v.props),j.ref=ki(E,m,v),j.return=E,j):(j=xo(v.type,v.key,v.props,null,E.mode,j),j.ref=ki(E,m,v),j.return=E,j)}function f(E,m,v,j){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Nl(v,E.mode,j),m.return=E,m):(m=i(m,v.children||[]),m.return=E,m)}function k(E,m,v,j,D){return m===null||m.tag!==7?(m=er(v,E.mode,j,D),m.return=E,m):(m=i(m,v),m.return=E,m)}function y(E,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Il(""+m,E.mode,v),m.return=E,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return v=xo(m.type,m.key,m.props,null,E.mode,v),v.ref=ki(E,null,m),v.return=E,v;case xr:return m=Nl(m,E.mode,v),m.return=E,m;case hn:var j=m._init;return y(E,j(m._payload),v)}if(Ii(m)||vi(m))return m=er(m,E.mode,v,null),m.return=E,m;Zs(E,m)}return null}function w(E,m,v,j){var D=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:c(E,m,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bs:return v.key===D?d(E,m,v,j):null;case xr:return v.key===D?f(E,m,v,j):null;case hn:return D=v._init,w(E,m,D(v._payload),j)}if(Ii(v)||vi(v))return D!==null?null:k(E,m,v,j,null);Zs(E,v)}return null}function C(E,m,v,j,D){if(typeof j=="string"&&j!==""||typeof j=="number")return E=E.get(v)||null,c(m,E,""+j,D);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Bs:return E=E.get(j.key===null?v:j.key)||null,d(m,E,j,D);case xr:return E=E.get(j.key===null?v:j.key)||null,f(m,E,j,D);case hn:var M=j._init;return C(E,m,v,M(j._payload),D)}if(Ii(j)||vi(j))return E=E.get(v)||null,k(m,E,j,D,null);Zs(m,j)}return null}function N(E,m,v,j){for(var D=null,M=null,_=m,g=m=0,x=null;_!==null&&g<v.length;g++){_.index>g?(x=_,_=null):x=_.sibling;var S=w(E,_,v[g],j);if(S===null){_===null&&(_=x);break}e&&_&&S.alternate===null&&t(E,_),m=s(S,m,g),M===null?D=S:M.sibling=S,M=S,_=x}if(g===v.length)return n(E,_),ie&&Kn(E,g),D;if(_===null){for(;g<v.length;g++)_=y(E,v[g],j),_!==null&&(m=s(_,m,g),M===null?D=_:M.sibling=_,M=_);return ie&&Kn(E,g),D}for(_=r(E,_);g<v.length;g++)x=C(_,E,g,v[g],j),x!==null&&(e&&x.alternate!==null&&_.delete(x.key===null?g:x.key),m=s(x,m,g),M===null?D=x:M.sibling=x,M=x);return e&&_.forEach(function(I){return t(E,I)}),ie&&Kn(E,g),D}function R(E,m,v,j){var D=vi(v);if(typeof D!="function")throw Error(z(150));if(v=D.call(v),v==null)throw Error(z(151));for(var M=D=null,_=m,g=m=0,x=null,S=v.next();_!==null&&!S.done;g++,S=v.next()){_.index>g?(x=_,_=null):x=_.sibling;var I=w(E,_,S.value,j);if(I===null){_===null&&(_=x);break}e&&_&&I.alternate===null&&t(E,_),m=s(I,m,g),M===null?D=I:M.sibling=I,M=I,_=x}if(S.done)return n(E,_),ie&&Kn(E,g),D;if(_===null){for(;!S.done;g++,S=v.next())S=y(E,S.value,j),S!==null&&(m=s(S,m,g),M===null?D=S:M.sibling=S,M=S);return ie&&Kn(E,g),D}for(_=r(E,_);!S.done;g++,S=v.next())S=C(_,E,g,S.value,j),S!==null&&(e&&S.alternate!==null&&_.delete(S.key===null?g:S.key),m=s(S,m,g),M===null?D=S:M.sibling=S,M=S);return e&&_.forEach(function(T){return t(E,T)}),ie&&Kn(E,g),D}function A(E,m,v,j){if(typeof v=="object"&&v!==null&&v.type===wr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bs:e:{for(var D=v.key,M=m;M!==null;){if(M.key===D){if(D=v.type,D===wr){if(M.tag===7){n(E,M.sibling),m=i(M,v.props.children),m.return=E,E=m;break e}}else if(M.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===hn&&Xh(D)===M.type){n(E,M.sibling),m=i(M,v.props),m.ref=ki(E,M,v),m.return=E,E=m;break e}n(E,M);break}else t(E,M);M=M.sibling}v.type===wr?(m=er(v.props.children,E.mode,j,v.key),m.return=E,E=m):(j=xo(v.type,v.key,v.props,null,E.mode,j),j.ref=ki(E,m,v),j.return=E,E=j)}return a(E);case xr:e:{for(M=v.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(E,m.sibling),m=i(m,v.children||[]),m.return=E,E=m;break e}else{n(E,m);break}else t(E,m);m=m.sibling}m=Nl(v,E.mode,j),m.return=E,E=m}return a(E);case hn:return M=v._init,A(E,m,M(v._payload),j)}if(Ii(v))return N(E,m,v,j);if(vi(v))return R(E,m,v,j);Zs(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(E,m.sibling),m=i(m,v),m.return=E,E=m):(n(E,m),m=Il(v,E.mode,j),m.return=E,E=m),a(E)):n(E,m)}return A}var Hr=zg(!0),Ug=zg(!1),zo=zn(null),Uo=null,Nr=null,wu=null;function _u(){wu=Nr=Uo=null}function ku(e){var t=zo.current;re(zo),e._currentValue=t}function mc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dr(e,t){Uo=e,wu=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(wu!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Uo===null)throw Error(z(308));Nr=e,Uo.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var Jn=null;function bu(e){Jn===null?Jn=[e]:Jn.push(e)}function Fg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $g(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,bu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}function Jh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fo(e,t,n,r){var i=e.updateQueue;fn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,f=d.next;d.next=null,a===null?s=f:a.next=f,a=d;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==a&&(c===null?k.firstBaseUpdate=f:c.next=f,k.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;a=0,k=f=d=null,c=s;do{var w=c.lane,C=c.eventTime;if((r&w)===w){k!==null&&(k=k.next={eventTime:C,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var N=e,R=c;switch(w=t,C=n,R.tag){case 1:if(N=R.payload,typeof N=="function"){y=N.call(C,y,w);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=R.payload,w=typeof N=="function"?N.call(C,y,w):N,w==null)break e;y=le({},y,w);break e;case 2:fn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[c]:w.push(c))}else C={eventTime:C,lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(f=k=C,d=y):k=k.next=C,a|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;w=c,c=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(k===null&&(d=y),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);ir|=a,e.lanes=a,e.memoizedState=y}}function Yh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var vs={},Et=zn(vs),ts=zn(vs),ns=zn(vs);function Yn(e){if(e===vs)throw Error(z(174));return e}function Su(e,t){switch(ee(ns,t),ee(ts,e),ee(Et,vs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}re(Et),ee(Et,t)}function Wr(){re(Et),re(ts),re(ns)}function Bg(e){Yn(ns.current);var t=Yn(Et.current),n=Jl(t,e.type);t!==n&&(ee(ts,e),ee(Et,n))}function Tu(e){ts.current===e&&(re(Et),re(ts))}var oe=zn(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Iu(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var po=tn.ReactCurrentDispatcher,kl=tn.ReactCurrentBatchConfig,rr=0,ae=null,me=null,ye=null,Bo=!1,Mi=!1,rs=0,R1=0;function Ie(){throw Error(z(321))}function Nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,s){if(rr=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?D1:M1,e=n(r,i),Mi){s=0;do{if(Mi=!1,rs=0,25<=s)throw Error(z(301));s+=1,ye=me=null,t.updateQueue=null,po.current=z1,e=n(r,i)}while(Mi)}if(po.current=Vo,t=me!==null&&me.next!==null,rr=0,ye=me=ae=null,Bo=!1,t)throw Error(z(300));return e}function ju(){var e=rs!==0;return rs=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function ot(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(z(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function is(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=a=null,d=null,f=s;do{var k=f.lane;if((rr&k)===k)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:k,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(c=d=y,a=r):d=d.next=y,ae.lanes|=k,ir|=k}f=f.next}while(f!==null&&f!==s);d===null?a=r:d.next=c,mt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,ir|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);mt(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Vg(){}function Hg(e,t){var n=ae,r=ot(),i=t(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,Pu(Gg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,ss(9,Kg.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(z(349));rr&30||Wg(n,t,i)}return i}function Wg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kg(e,t,n,r){t.value=n,t.getSnapshot=r,qg(t)&&Xg(e)}function Gg(e,t,n){return n(function(){qg(t)&&Xg(e)})}function qg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Xg(e){var t=Yt(e,1);t!==null&&gt(t,e,1,-1)}function Qh(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=L1.bind(null,ae,e),[t.memoizedState,e]}function ss(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jg(){return ot().memoizedState}function go(e,t,n,r){var i=wt();ae.flags|=e,i.memoizedState=ss(1|t,n,void 0,r===void 0?null:r)}function va(e,t,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(me!==null){var a=me.memoizedState;if(s=a.destroy,r!==null&&Nu(r,a.deps)){i.memoizedState=ss(t,n,s,r);return}}ae.flags|=e,i.memoizedState=ss(1|t,n,s,r)}function Zh(e,t){return go(8390656,8,e,t)}function Pu(e,t){return va(2048,8,e,t)}function Yg(e,t){return va(4,2,e,t)}function Qg(e,t){return va(4,4,e,t)}function Zg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,n){return n=n!=null?n.concat([e]):null,va(4,4,Zg.bind(null,t,e),n)}function Ru(){}function tm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rm(e,t,n){return rr&21?(mt(n,t)||(n=lg(),ae.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function A1(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{Y=n,kl.transition=r}}function im(){return ot().memoizedState}function O1(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sm(e))om(t,n);else if(n=Fg(e,t,n,r),n!==null){var i=De();gt(n,e,r,i),am(n,t,r)}}function L1(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sm(e))om(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,n);if(i.hasEagerState=!0,i.eagerState=c,mt(c,a)){var d=t.interleaved;d===null?(i.next=i,bu(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Fg(e,t,i,r),n!==null&&(i=De(),gt(n,e,r,i),am(n,t,r))}}function sm(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function om(e,t){Mi=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function am(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}var Vo={readContext:st,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},D1={readContext:st,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Zh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,go(4194308,4,Zg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){return go(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O1.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Qh,useDebugValue:Ru,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Qh(!1),t=e[0];return e=A1.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=wt();if(ie){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),xe===null)throw Error(z(349));rr&30||Wg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Zh(Gg.bind(null,r,s,e),[e]),r.flags|=2048,ss(9,Kg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wt(),t=xe.identifierPrefix;if(ie){var n=Bt,r=$t;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M1={readContext:st,useCallback:tm,useContext:st,useEffect:Pu,useImperativeHandle:em,useInsertionEffect:Yg,useLayoutEffect:Qg,useMemo:nm,useReducer:bl,useRef:Jg,useState:function(){return bl(is)},useDebugValue:Ru,useDeferredValue:function(e){var t=ot();return rm(t,me.memoizedState,e)},useTransition:function(){var e=bl(is)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vg,useSyncExternalStore:Hg,useId:im,unstable_isNewReconciler:!1},z1={readContext:st,useCallback:tm,useContext:st,useEffect:Pu,useImperativeHandle:em,useInsertionEffect:Yg,useLayoutEffect:Qg,useMemo:nm,useReducer:El,useRef:Jg,useState:function(){return El(is)},useDebugValue:Ru,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:rm(t,me.memoizedState,e)},useTransition:function(){var e=El(is)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Vg,useSyncExternalStore:Hg,useId:im,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=Cn(e),s=Kt(r,i);s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(gt(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=Cn(e),s=Kt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(gt(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Cn(e),i=Kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=In(e,i,r),t!==null&&(gt(t,e,r,n),fo(t,e,r))}};function ef(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function lm(e,t,n){var r=!1,i=Ln,s=t.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=Ke(t)?tr:Pe.current,r=t.contextTypes,s=(r=r!=null)?Br(e,i):Ln),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function tf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function yc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Eu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=Ke(t)?tr:Pe.current,i.context=Br(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(vc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ya.enqueueReplaceState(i,i.state,null),Fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var n="",r=t;do n+=h0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function cm(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,Cc=r),xc(e,t)},n}function um(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function nf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Z1.bind(null,e,t,n),t.then(e,e))}function rf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var F1=tn.ReactCurrentOwner,He=!1;function Oe(e,t,n,r){t.child=e===null?Ug(t,null,n,r):Hr(t,e.child,n,r)}function of(e,t,n,r,i){n=n.render;var s=t.ref;return Dr(t,i),r=Cu(e,t,n,r,s,i),n=ju(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(ie&&n&&vu(t),t.flags|=1,Oe(e,t,r,i),t.child)}function af(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Fu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,dm(e,t,s,r,i)):(e=xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(a,r)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=jn(s,r),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Yi(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return wc(e,t,n,r,i)}function hm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(jr,qe),qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(jr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(jr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ee(jr,qe),qe|=r;return Oe(e,t,i,n),t.child}function fm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wc(e,t,n,r,i){var s=Ke(n)?tr:Pe.current;return s=Br(t,s),Dr(t,i),n=Cu(e,t,n,r,s,i),r=ju(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(ie&&r&&vu(t),t.flags|=1,Oe(e,t,n,i),t.child)}function lf(e,t,n,r,i){if(Ke(n)){var s=!0;Lo(t)}else s=!1;if(Dr(t,i),t.stateNode===null)mo(e,t),lm(t,n,r),yc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var d=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=st(f):(f=Ke(n)?tr:Pe.current,f=Br(t,f));var k=n.getDerivedStateFromProps,y=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||d!==f)&&tf(t,a,r,f),fn=!1;var w=t.memoizedState;a.state=w,Fo(t,r,a,i),d=t.memoizedState,c!==r||w!==d||We.current||fn?(typeof k=="function"&&(vc(t,n,k,r),d=t.memoizedState),(c=fn||ef(t,n,c,r,w,d,f))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=f,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$g(e,t),c=t.memoizedProps,f=t.type===t.elementType?c:ct(t.type,c),a.props=f,y=t.pendingProps,w=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=st(d):(d=Ke(n)?tr:Pe.current,d=Br(t,d));var C=n.getDerivedStateFromProps;(k=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==y||w!==d)&&tf(t,a,r,d),fn=!1,w=t.memoizedState,a.state=w,Fo(t,r,a,i);var N=t.memoizedState;c!==y||w!==N||We.current||fn?(typeof C=="function"&&(vc(t,n,C,r),N=t.memoizedState),(f=fn||ef(t,n,f,r,w,N,d)||!1)?(k||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=d,r=f):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,s,i)}function _c(e,t,n,r,i,s){fm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Kh(t,n,!1),Qt(e,t,s);r=t.stateNode,F1.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hr(t,e.child,null,s),t.child=Hr(t,null,c,s)):Oe(e,t,c,s),t.memoizedState=r.state,i&&Kh(t,n,!0),t.child}function pm(e){var t=e.stateNode;t.pendingContext?Wh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wh(e,t.context,!1),Su(e,t.containerInfo)}function cf(e,t,n,r,i){return Vr(),xu(i),t.flags|=256,Oe(e,t,n,r),t.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function gm(e,t,n){var r=t.pendingProps,i=oe.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return gc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_a(a,r,0,null),e=er(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=bc(n),t.memoizedState=kc,e):Au(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return $1(e,t,a,r,c,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=jn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=jn(c,s):(s=er(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?bc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=kc,r}return s=e.child,e=s.sibling,r=jn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Au(e,t){return t=_a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&xu(r),Hr(t,e.child,null,n),e=Au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(z(422))),eo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=_a({mode:"visible",children:r.children},i,0,null),s=er(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Hr(t,e.child,null,a),t.child.memoizedState=bc(a),t.memoizedState=kc,s);if(!(t.mode&1))return eo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(z(419)),r=Sl(s,r,void 0),eo(e,t,a,r)}if(c=(a&e.childLanes)!==0,He||c){if(r=xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(e,i),gt(r,e,i,-1))}return Uu(),r=Sl(Error(z(421))),eo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ex.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Xe=Tn(i.nextSibling),Je=t,ie=!0,dt=null,e!==null&&(tt[nt++]=$t,tt[nt++]=Bt,tt[nt++]=nr,$t=e.id,Bt=e.overflow,nr=t),t=Au(t,r.children),t.flags|=4096,t)}function uf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mc(e.return,t,n)}function Tl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uf(e,n,t);else if(e.tag===19)uf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,s);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function B1(e,t,n){switch(t.tag){case 3:pm(t),Vr();break;case 5:Bg(t);break;case 1:Ke(t.type)&&Lo(t);break;case 4:Su(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?gm(e,t,n):(ee(oe,oe.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,hm(e,t,n)}return Qt(e,t,n)}var vm,Ec,ym,xm;vm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ec=function(){};ym=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(Et.current);var s=null;switch(n){case"input":i=Kl(e,i),r=Kl(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Xl(e,i),r=Xl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Yl(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var c=i[f];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Hi.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var d=r[f];if(c=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&d!==c&&(d!=null||c!=null))if(f==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&ne("scroll",e),s||c===d||(s=[])):(s=s||[]).push(f,d))}n&&(s=s||[]).push("style",n);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};xm=function(e,t,n,r){n!==r&&(t.flags|=4)};function bi(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function V1(e,t,n){var r=t.pendingProps;switch(yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ke(t.type)&&Oo(),Ne(t),null;case 3:return r=t.stateNode,Wr(),re(We),re(Pe),Iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Rc(dt),dt=null))),Ec(e,t),Ne(t),null;case 5:Tu(t);var i=Yn(ns.current);if(n=t.type,e!==null&&t.stateNode!=null)ym(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ne(t),null}if(e=Yn(Et.current),Qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[_t]=t,r[es]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)ne(Ci[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":yh(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":wh(r,s),ne("invalid",r)}Yl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,c,e),i=["children",""+c]):Hi.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":Vs(r),xh(r,s,!0);break;case"textarea":Vs(r),_h(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_t]=t,e[es]=r,vm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ql(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)ne(Ci[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":yh(e,r),i=Kl(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":wh(e,r),i=Xl(e,r),ne("invalid",e);break;default:i=r}Yl(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Jp(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&qp(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Wi(e,d):typeof d=="number"&&Wi(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Hi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&ne("scroll",e):d!=null&&ru(e,s,d,a))}switch(n){case"input":Vs(e),xh(e,r,!1);break;case"textarea":Vs(e),_h(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)xm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Yn(ns.current),Yn(Et.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(s=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Ys(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Ne(t),null;case 13:if(re(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))Mg(),Vr(),t.flags|=98560,s=!1;else if(s=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[_t]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else dt!==null&&(Rc(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):Uu())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Wr(),Ec(e,t),e===null&&Qi(t.stateNode.containerInfo),Ne(t),null;case 10:return ku(t.type._context),Ne(t),null;case 17:return Ke(t.type)&&Oo(),Ne(t),null;case 19:if(re(oe),s=t.memoizedState,s===null)return Ne(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)bi(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$o(e),a!==null){for(t.flags|=128,bi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&he()>Gr&&(t.flags|=128,r=!0,bi(s,!1),t.lanes=4194304)}else{if(!r)if(e=$o(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ie)return Ne(t),null}else 2*he()-s.renderingStartTime>Gr&&n!==1073741824&&(t.flags|=128,r=!0,bi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=he(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function H1(e,t){switch(yu(t),t.tag){case 1:return Ke(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),re(We),re(Pe),Iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return Wr(),null;case 10:return ku(t.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var to=!1,Ce=!1,W1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Sc(e,t,n){try{n()}catch(r){ce(e,t,r)}}var df=!1;function K1(e,t){if(lc=jo,e=Eg(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,f=0,k=0,y=e,w=null;t:for(;;){for(var C;y!==n||i!==0&&y.nodeType!==3||(c=a+i),y!==s||r!==0&&y.nodeType!==3||(d=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(C=y.firstChild)!==null;)w=y,y=C;for(;;){if(y===e)break t;if(w===n&&++f===i&&(c=a),w===s&&++k===r&&(d=a),(C=y.nextSibling)!==null)break;y=w,w=y.parentNode}y=C}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:e,selectionRange:n},jo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var R=N.memoizedProps,A=N.memoizedState,E=t.stateNode,m=E.getSnapshotBeforeUpdate(t.elementType===t.type?R:ct(t.type,R),A);E.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(j){ce(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return N=df,df=!1,N}function zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sc(t,n,s)}i=i.next}while(i!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[es],delete t[hc],delete t[N1],delete t[C1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _m(e){return e.tag===5||e.tag===3||e.tag===4}function hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}function Nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}var _e=null,ut=!1;function un(e,t,n){for(n=n.child;n!==null;)km(e,t,n),n=n.sibling}function km(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:Ce||Cr(n,t);case 6:var r=_e,i=ut;_e=null,un(e,t,n),_e=r,ut=i,_e!==null&&(ut?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ut?(e=_e,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),Xi(e)):xl(_e,n.stateNode));break;case 4:r=_e,i=ut,_e=n.stateNode.containerInfo,ut=!0,un(e,t,n),_e=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Sc(n,t,a),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Ce&&(Cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ce(n,t,c)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,un(e,t,n),Ce=r):un(e,t,n);break;default:un(e,t,n)}}function ff(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new W1),t.forEach(function(r){var i=tx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:_e=c.stateNode,ut=!1;break e;case 3:_e=c.stateNode.containerInfo,ut=!0;break e;case 4:_e=c.stateNode.containerInfo,ut=!0;break e}c=c.return}if(_e===null)throw Error(z(160));km(s,a,i),_e=null,ut=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){ce(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bm(t,e),t=t.sibling}function bm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{zi(3,e,e.return),xa(3,e)}catch(R){ce(e,e.return,R)}try{zi(5,e,e.return)}catch(R){ce(e,e.return,R)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&Cr(n,n.return),e.flags&32){var i=e.stateNode;try{Wi(i,"")}catch(R){ce(e,e.return,R)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Wp(i,s),Ql(c,a);var f=Ql(c,s);for(a=0;a<d.length;a+=2){var k=d[a],y=d[a+1];k==="style"?Jp(i,y):k==="dangerouslySetInnerHTML"?qp(i,y):k==="children"?Wi(i,y):ru(i,k,y,f)}switch(c){case"input":Gl(i,s);break;case"textarea":Kp(i,s);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Rr(i,!!s.multiple,C,!1):w!==!!s.multiple&&(s.defaultValue!=null?Rr(i,!!s.multiple,s.defaultValue,!0):Rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[es]=s}catch(R){ce(e,e.return,R)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(R){ce(e,e.return,R)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(t.containerInfo)}catch(R){ce(e,e.return,R)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=he())),r&4&&ff(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(f=Ce)||k,lt(t,e),Ce=f):lt(t,e),xt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!k&&e.mode&1)for($=e,k=e.child;k!==null;){for(y=$=k;$!==null;){switch(w=$,C=w.child,w.tag){case 0:case 11:case 14:case 15:zi(4,w,w.return);break;case 1:Cr(w,w.return);var N=w.stateNode;if(typeof N.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(R){ce(r,n,R)}}break;case 5:Cr(w,w.return);break;case 22:if(w.memoizedState!==null){gf(y);continue}}C!==null?(C.return=w,$=C):gf(y)}k=k.sibling}e:for(k=null,y=e;;){if(y.tag===5){if(k===null){k=y;try{i=y.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=y.stateNode,d=y.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Xp("display",a))}catch(R){ce(e,e.return,R)}}}else if(y.tag===6){if(k===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(R){ce(e,e.return,R)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;k===y&&(k=null),y=y.return}k===y&&(k=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:lt(t,e),xt(e),r&4&&ff(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_m(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=hf(e);Nc(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=hf(e);Ic(e,c,a);break;default:throw Error(z(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function G1(e,t,n){$=e,Em(e)}function Em(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||to;if(!a){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Ce;c=to;var f=Ce;if(to=a,(Ce=d)&&!f)for($=i;$!==null;)a=$,d=a.child,a.tag===22&&a.memoizedState!==null?mf(i):d!==null?(d.return=a,$=d):mf(i);for(;s!==null;)$=s,Em(s),s=s.sibling;$=i,to=c,Ce=f}pf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):pf(e)}}function pf(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Yh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yh(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var k=f.memoizedState;if(k!==null){var y=k.dehydrated;y!==null&&Xi(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ce||t.flags&512&&Tc(t)}catch(w){ce(t,t.return,w)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function gf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function mf(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(d){ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ce(t,i,d)}}var s=t.return;try{Tc(t)}catch(d){ce(t,s,d)}break;case 5:var a=t.return;try{Tc(t)}catch(d){ce(t,a,d)}}}catch(d){ce(t,t.return,d)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var q1=Math.ceil,Ho=tn.ReactCurrentDispatcher,Ou=tn.ReactCurrentOwner,it=tn.ReactCurrentBatchConfig,q=0,xe=null,pe=null,ke=0,qe=0,jr=zn(0),ve=0,os=null,ir=0,wa=0,Lu=0,Ui=null,$e=null,Du=0,Gr=1/0,Ut=null,Wo=!1,Cc=null,Nn=null,no=!1,_n=null,Ko=0,Fi=0,jc=null,vo=-1,yo=0;function De(){return q&6?he():vo!==-1?vo:vo=he()}function Cn(e){return e.mode&1?q&2&&ke!==0?ke&-ke:P1.transition!==null?(yo===0&&(yo=lg()),yo):(e=Y,e!==0||(e=window.event,e=e===void 0?16:gg(e.type)),e):1}function gt(e,t,n,r){if(50<Fi)throw Fi=0,jc=null,Error(z(185));ps(e,n,r),(!(q&2)||e!==xe)&&(e===xe&&(!(q&2)&&(wa|=n),ve===4&&gn(e,ke)),Ge(e,r),n===1&&q===0&&!(t.mode&1)&&(Gr=he()+500,ma&&Un()))}function Ge(e,t){var n=e.callbackNode;P0(e,t);var r=Co(e,e===xe?ke:0);if(r===0)n!==null&&Eh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eh(n),t===1)e.tag===0?j1(vf.bind(null,e)):Og(vf.bind(null,e)),T1(function(){!(q&6)&&Un()}),n=null;else{switch(cg(r)){case 1:n=lu;break;case 4:n=og;break;case 16:n=No;break;case 536870912:n=ag;break;default:n=No}n=Rm(n,Sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sm(e,t){if(vo=-1,yo=0,q&6)throw Error(z(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Co(e,e===xe?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var i=q;q|=2;var s=Im();(xe!==e||ke!==t)&&(Ut=null,Gr=he()+500,Zn(e,t));do try{Y1();break}catch(c){Tm(e,c)}while(!0);_u(),Ho.current=s,q=i,pe!==null?t=0:(xe=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=rc(e),i!==0&&(r=i,t=Pc(e,i))),t===1)throw n=os,Zn(e,0),gn(e,r),Ge(e,he()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!X1(i)&&(t=Go(e,r),t===2&&(s=rc(e),s!==0&&(r=s,t=Pc(e,s))),t===1))throw n=os,Zn(e,0),gn(e,r),Ge(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Gn(e,$e,Ut);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Du+500-he(),10<t)){if(Co(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=dc(Gn.bind(null,e,$e,Ut),t);break}Gn(e,$e,Ut);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q1(r/1960))-r,10<r){e.timeoutHandle=dc(Gn.bind(null,e,$e,Ut),r);break}Gn(e,$e,Ut);break;case 5:Gn(e,$e,Ut);break;default:throw Error(z(329))}}}return Ge(e,he()),e.callbackNode===n?Sm.bind(null,e):null}function Pc(e,t){var n=Ui;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=$e,$e=n,t!==null&&Rc(t)),e}function Rc(e){$e===null?$e=e:$e.push.apply($e,e)}function X1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Lu,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function vf(e){if(q&6)throw Error(z(327));Mr();var t=Co(e,0);if(!(t&1))return Ge(e,he()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=rc(e);r!==0&&(t=r,n=Pc(e,r))}if(n===1)throw n=os,Zn(e,0),gn(e,t),Ge(e,he()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,$e,Ut),Ge(e,he()),null}function Mu(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Gr=he()+500,ma&&Un())}}function sr(e){_n!==null&&_n.tag===0&&!(q&6)&&Mr();var t=q;q|=1;var n=it.transition,r=Y;try{if(it.transition=null,Y=1,e)return e()}finally{Y=r,it.transition=n,q=t,!(q&6)&&Un()}}function zu(){qe=jr.current,re(jr)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S1(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Wr(),re(We),re(Pe),Iu();break;case 5:Tu(r);break;case 4:Wr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:ku(r.type._context);break;case 22:case 23:zu()}n=n.return}if(xe=e,pe=e=jn(e.current,null),ke=qe=t,ve=0,os=null,Lu=wa=ir=0,$e=Ui=null,Jn!==null){for(t=0;t<Jn.length;t++)if(n=Jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Jn=null}return e}function Tm(e,t){do{var n=pe;try{if(_u(),po.current=Vo,Bo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(rr=0,ye=me=ae=null,Mi=!1,rs=0,Ou.current=null,n===null||n.return===null){ve=1,os=t,pe=null;break}e:{var s=e,a=n.return,c=n,d=t;if(t=ke,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,k=c,y=k.tag;if(!(k.mode&1)&&(y===0||y===11||y===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var C=rf(a);if(C!==null){C.flags&=-257,sf(C,a,c,s,t),C.mode&1&&nf(s,f,t),t=C,d=f;var N=t.updateQueue;if(N===null){var R=new Set;R.add(d),t.updateQueue=R}else N.add(d);break e}else{if(!(t&1)){nf(s,f,t),Uu();break e}d=Error(z(426))}}else if(ie&&c.mode&1){var A=rf(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),sf(A,a,c,s,t),xu(Kr(d,c));break e}}s=d=Kr(d,c),ve!==4&&(ve=2),Ui===null?Ui=[s]:Ui.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var E=cm(s,d,t);Jh(s,E);break e;case 1:c=d;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=um(s,c,t);Jh(s,j);break e}}s=s.return}while(s!==null)}Cm(n)}catch(D){t=D,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Im(){var e=Ho.current;return Ho.current=Vo,e===null?Vo:e}function Uu(){(ve===0||ve===3||ve===2)&&(ve=4),xe===null||!(ir&268435455)&&!(wa&268435455)||gn(xe,ke)}function Go(e,t){var n=q;q|=2;var r=Im();(xe!==e||ke!==t)&&(Ut=null,Zn(e,t));do try{J1();break}catch(i){Tm(e,i)}while(!0);if(_u(),q=n,Ho.current=r,pe!==null)throw Error(z(261));return xe=null,ke=0,ve}function J1(){for(;pe!==null;)Nm(pe)}function Y1(){for(;pe!==null&&!k0();)Nm(pe)}function Nm(e){var t=Pm(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Cm(e):pe=t,Ou.current=null}function Cm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H1(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=V1(n,t,qe),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function Gn(e,t,n){var r=Y,i=it.transition;try{it.transition=null,Y=1,Q1(e,t,n,r)}finally{it.transition=i,Y=r}return null}function Q1(e,t,n,r){do Mr();while(_n!==null);if(q&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(R0(e,s),e===xe&&(pe=xe=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Rm(No,function(){return Mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var a=Y;Y=1;var c=q;q|=4,Ou.current=null,K1(e,n),bm(n,e),y1(cc),jo=!!lc,cc=lc=null,e.current=n,G1(n),b0(),q=c,Y=a,it.transition=s}else e.current=n;if(no&&(no=!1,_n=e,Ko=i),s=e.pendingLanes,s===0&&(Nn=null),T0(n.stateNode),Ge(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,e=Cc,Cc=null,e;return Ko&1&&e.tag!==0&&Mr(),s=e.pendingLanes,s&1?e===jc?Fi++:(Fi=0,jc=e):Fi=0,Un(),null}function Mr(){if(_n!==null){var e=cg(Ko),t=it.transition,n=Y;try{if(it.transition=null,Y=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Ko=0,q&6)throw Error(z(331));var i=q;for(q|=4,$=e.current;$!==null;){var s=$,a=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var f=c[d];for($=f;$!==null;){var k=$;switch(k.tag){case 0:case 11:case 15:zi(8,k,s)}var y=k.child;if(y!==null)y.return=k,$=y;else for(;$!==null;){k=$;var w=k.sibling,C=k.return;if(wm(k),k===f){$=null;break}if(w!==null){w.return=C,$=w;break}$=C}}}var N=s.alternate;if(N!==null){var R=N.child;if(R!==null){N.child=null;do{var A=R.sibling;R.sibling=null,R=A}while(R!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zi(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,$=E;break e}$=s.return}}var m=e.current;for($=m;$!==null;){a=$;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,$=v;else e:for(a=m;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:xa(9,c)}}catch(D){ce(c,c.return,D)}if(c===a){$=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,$=j;break e}$=c.return}}if(q=i,Un(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(da,e)}catch{}r=!0}return r}finally{Y=n,it.transition=t}}return!1}function yf(e,t,n){t=Kr(n,t),t=cm(e,t,1),e=In(e,t,1),t=De(),e!==null&&(ps(e,1,t),Ge(e,t))}function ce(e,t,n){if(e.tag===3)yf(e,e,n);else for(;t!==null;){if(t.tag===3){yf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=Kr(n,e),e=um(t,e,1),t=In(t,e,1),e=De(),t!==null&&(ps(t,1,e),Ge(t,e));break}}t=t.return}}function Z1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>he()-Du?Zn(e,0):Lu|=n),Ge(e,t)}function jm(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=De();e=Yt(e,t),e!==null&&(ps(e,t,n),Ge(e,n))}function ex(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jm(e,n)}function tx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),jm(e,n)}var Pm;Pm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,B1(e,t,n);He=!!(e.flags&131072)}else He=!1,ie&&t.flags&1048576&&Lg(t,Mo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mo(e,t),e=t.pendingProps;var i=Br(t,Pe.current);Dr(t,n),i=Cu(null,t,r,e,i,n);var s=ju();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(s=!0,Lo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eu(t),i.updater=ya,t.stateNode=i,i._reactInternals=t,yc(t,r,e,n),t=_c(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&vu(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rx(r),e=ct(r,e),i){case 0:t=wc(null,t,r,e,n);break e;case 1:t=lf(null,t,r,e,n);break e;case 11:t=of(null,t,r,e,n);break e;case 14:t=af(null,t,r,ct(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),wc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),lf(e,t,r,i,n);case 3:e:{if(pm(t),e===null)throw Error(z(387));r=t.pendingProps,s=t.memoizedState,i=s.element,$g(e,t),Fo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Kr(Error(z(423)),t),t=cf(e,t,r,n,i);break e}else if(r!==i){i=Kr(Error(z(424)),t),t=cf(e,t,r,n,i);break e}else for(Xe=Tn(t.stateNode.containerInfo.firstChild),Je=t,ie=!0,dt=null,n=Ug(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){t=Qt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Bg(t),e===null&&gc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,uc(r,i)?a=null:s!==null&&uc(r,s)&&(t.flags|=32),fm(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&gc(t),null;case 13:return gm(e,t,n);case 4:return Su(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),of(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ee(zo,r._currentValue),r._currentValue=a,s!==null)if(mt(s.value,a)){if(s.children===i.children&&!We.current){t=Qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=Kt(-1,n&-n),d.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var k=f.pending;k===null?d.next=d:(d.next=k.next,k.next=d),f.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),mc(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(z(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),mc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dr(t,n),i=st(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),af(e,t,r,i,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),mo(e,t),t.tag=1,Ke(r)?(e=!0,Lo(t)):e=!1,Dr(t,n),lm(t,r,i),yc(t,r,i,n),_c(null,t,r,!0,e,n);case 19:return mm(e,t,n);case 22:return hm(e,t,n)}throw Error(z(156,t.tag))};function Rm(e,t){return sg(e,t)}function nx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new nx(e,t,n,r)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rx(e){if(typeof e=="function")return Fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===su)return 11;if(e===ou)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Fu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case wr:return er(n.children,i,s,t);case iu:a=8,i|=8;break;case Bl:return e=rt(12,n,t,i|2),e.elementType=Bl,e.lanes=s,e;case Vl:return e=rt(13,n,t,i),e.elementType=Vl,e.lanes=s,e;case Hl:return e=rt(19,n,t,i),e.elementType=Hl,e.lanes=s,e;case Bp:return _a(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fp:a=10;break e;case $p:a=9;break e;case su:a=11;break e;case ou:a=14;break e;case hn:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function er(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function _a(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Bp,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ix(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,i,s,a,c,d){return e=new ix(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(s),e}function sx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Am(e){if(!e)return Ln;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Ag(e,n,t)}return t}function Om(e,t,n,r,i,s,a,c,d){return e=$u(n,r,!0,e,i,s,a,c,d),e.context=Am(null),n=e.current,r=De(),i=Cn(n),s=Kt(r,i),s.callback=t??null,In(n,s,i),e.current.lanes=i,ps(e,i,r),Ge(e,r),e}function ka(e,t,n,r){var i=t.current,s=De(),a=Cn(i);return n=Am(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(i,t,a),e!==null&&(gt(e,i,a,s),fo(e,i,a)),a}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){xf(e,t),(e=e.alternate)&&xf(e,t)}function ox(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}ba.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ka(e,t,null,null)};ba.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){ka(null,e,null,null)}),t[Jt]=null}};function ba(e){this._internalRoot=e}ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=hg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&pg(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wf(){}function ax(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=qo(a);s.call(f)}}var a=Om(t,r,e,0,null,!1,!1,"",wf);return e._reactRootContainer=a,e[Jt]=a.current,Qi(e.nodeType===8?e.parentNode:e),sr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var f=qo(d);c.call(f)}}var d=$u(e,0,!1,null,null,!1,!1,"",wf);return e._reactRootContainer=d,e[Jt]=d.current,Qi(e.nodeType===8?e.parentNode:e),sr(function(){ka(t,d,n,r)}),d}function Sa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var d=qo(a);c.call(d)}}ka(t,a,e,i)}else a=ax(n,t,e,i,r);return qo(a)}ug=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ni(t.pendingLanes);n!==0&&(cu(t,n|1),Ge(t,he()),!(q&6)&&(Gr=he()+500,Un()))}break;case 13:sr(function(){var r=Yt(e,1);if(r!==null){var i=De();gt(r,e,1,i)}}),Bu(e,1)}};uu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=De();gt(t,e,134217728,n)}Bu(e,134217728)}};dg=function(e){if(e.tag===13){var t=Cn(e),n=Yt(e,t);if(n!==null){var r=De();gt(n,e,t,r)}Bu(e,t)}};hg=function(){return Y};fg=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ec=function(e,t,n){switch(t){case"input":if(Gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ga(r);if(!i)throw Error(z(90));Hp(r),Gl(r,i)}}}break;case"textarea":Kp(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};Zp=Mu;eg=sr;var lx={usingClientEntryPoint:!1,Events:[ms,Er,ga,Yp,Qp,Mu]},Ei={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cx={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{da=ro.inject(cx),bt=ro}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(t))throw Error(z(200));return sx(e,t,null,n)};Qe.createRoot=function(e,t){if(!Hu(e))throw Error(z(299));var n=!1,r="",i=Lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$u(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,Qi(e.nodeType===8?e.parentNode:e),new Vu(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=rg(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return sr(e)};Qe.hydrate=function(e,t,n){if(!Ea(t))throw Error(z(200));return Sa(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Hu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Lm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Om(t,null,e,1,n??null,i,!1,s,a),e[Jt]=t.current,Qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ba(t)};Qe.render=function(e,t,n){if(!Ea(t))throw Error(z(200));return Sa(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(z(40));return e._reactRootContainer?(sr(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Mu;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ea(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Sa(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(e){console.error(e)}}Dm(),Dp.exports=Qe;var ux=Dp.exports,_f=ux;Fl.createRoot=_f.createRoot,Fl.hydrateRoot=_f.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const kf="popstate";function dx(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:c}=r.location;return Ac("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xo(i)}return fx(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hx(){return Math.random().toString(36).substr(2,8)}function bf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ac(e,t,n,r){return n===void 0&&(n=null),as({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ei(t):t,{state:n,key:t&&t.key||r||hx()})}function Xo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ei(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fx(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,c=kn.Pop,d=null,f=k();f==null&&(f=0,a.replaceState(as({},a.state,{idx:f}),""));function k(){return(a.state||{idx:null}).idx}function y(){c=kn.Pop;let A=k(),E=A==null?null:A-f;f=A,d&&d({action:c,location:R.location,delta:E})}function w(A,E){c=kn.Push;let m=Ac(R.location,A,E);f=k()+1;let v=bf(m,f),j=R.createHref(m);try{a.pushState(v,"",j)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(j)}s&&d&&d({action:c,location:R.location,delta:1})}function C(A,E){c=kn.Replace;let m=Ac(R.location,A,E);f=k();let v=bf(m,f),j=R.createHref(m);a.replaceState(v,"",j),s&&d&&d({action:c,location:R.location,delta:0})}function N(A){let E=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof A=="string"?A:Xo(A);return m=m.replace(/ $/,"%20"),fe(E,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,E)}let R={get action(){return c},get location(){return e(i,a)},listen(A){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(kf,y),d=A,()=>{i.removeEventListener(kf,y),d=null}},createHref(A){return t(i,A)},createURL:N,encodeLocation(A){let E=N(A);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:w,replace:C,go(A){return a.go(A)}};return R}var Ef;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ef||(Ef={}));function px(e,t,n){return n===void 0&&(n="/"),gx(e,t,n)}function gx(e,t,n,r){let i=typeof t=="string"?ei(t):t,s=Ku(i.pathname||"/",n);if(s==null)return null;let a=Mm(e);mx(a);let c=null;for(let d=0;c==null&&d<a.length;++d){let f=Nx(s);c=Sx(a[d],f)}return c}function Mm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};d.relativePath.startsWith("/")&&(fe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Pn([r,d.relativePath]),k=n.concat(d);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Mm(s.children,t,k,f)),!(s.path==null&&!s.index)&&t.push({path:f,score:bx(f,s.index),routesMeta:k})};return e.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,a);else for(let d of zm(s.path))i(s,a,d)}),t}function zm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=zm(r.join("/")),c=[];return c.push(...a.map(d=>d===""?s:[s,d].join("/"))),i&&c.push(...a),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function mx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ex(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vx=/^:[\w-]+$/,yx=3,xx=2,wx=1,_x=10,kx=-2,Sf=e=>e==="*";function bx(e,t){let n=e.split("/"),r=n.length;return n.some(Sf)&&(r+=kx),t&&(r+=xx),n.filter(i=>!Sf(i)).reduce((i,s)=>i+(vx.test(s)?yx:s===""?wx:_x),r)}function Ex(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Sx(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let c=0;c<r.length;++c){let d=r[c],f=c===r.length-1,k=s==="/"?t:t.slice(s.length)||"/",y=Tx({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},k),w=d.route;if(!y)return null;Object.assign(i,y.params),a.push({params:i,pathname:Pn([s,y.pathname]),pathnameBase:Ax(Pn([s,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(s=Pn([s,y.pathnameBase]))}return a}function Tx(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ix(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((f,k,y)=>{let{paramName:w,isOptional:C}=k;if(w==="*"){let R=c[y]||"";a=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const N=c[y];return C&&!N?f[w]=void 0:f[w]=(N||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:a,pattern:e}}function Ix(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Nx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Wu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ku(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jx=e=>Cx.test(e);function Px(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ei(e):e,s;if(n)if(jx(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Wu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Tf(n.substring(1),"/"):s=Tf(n,t)}else s=t;return{pathname:s,search:Ox(r),hash:Lx(i)}}function Tf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gu(e,t){let n=Rx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ei(e):(i=as({},e),fe(!i.pathname||!i.pathname.includes("?"),Cl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Cl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Cl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,c;if(a==null)c=n;else{let y=t.length-1;if(!r&&a.startsWith("..")){let w=a.split("/");for(;w[0]==="..";)w.shift(),y-=1;i.pathname=w.join("/")}c=y>=0?t[y]:"/"}let d=Px(i,c),f=a&&a!=="/"&&a.endsWith("/"),k=(s||a===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||k)&&(d.pathname+="/"),d}const Pn=e=>e.join("/").replace(/\/\/+/g,"/"),Ax=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ox=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Um=["post","put","patch","delete"];new Set(Um);const Mx=["get",...Um];new Set(Mx);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}const Xu=L.createContext(null),zx=L.createContext(null),Fn=L.createContext(null),Ta=L.createContext(null),nn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),Fm=L.createContext(null);function Ux(e,t){let{relative:n}=t===void 0?{}:t;ti()||fe(!1);let{basename:r,navigator:i}=L.useContext(Fn),{hash:s,pathname:a,search:c}=Bm(e,{relative:n}),d=a;return r!=="/"&&(d=a==="/"?r:Pn([r,a])),i.createHref({pathname:d,search:c,hash:s})}function ti(){return L.useContext(Ta)!=null}function rn(){return ti()||fe(!1),L.useContext(Ta).location}function $m(e){L.useContext(Fn).static||L.useLayoutEffect(e)}function sn(){let{isDataRoute:e}=L.useContext(nn);return e?Zx():Fx()}function Fx(){ti()||fe(!1);let e=L.useContext(Xu),{basename:t,future:n,navigator:r}=L.useContext(Fn),{matches:i}=L.useContext(nn),{pathname:s}=rn(),a=JSON.stringify(Gu(i,n.v7_relativeSplatPath)),c=L.useRef(!1);return $m(()=>{c.current=!0}),L.useCallback(function(f,k){if(k===void 0&&(k={}),!c.current)return;if(typeof f=="number"){r.go(f);return}let y=qu(f,JSON.parse(a),s,k.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Pn([t,y.pathname])),(k.replace?r.replace:r.push)(y,k.state,k)},[t,r,a,s,e])}function $x(){let{matches:e}=L.useContext(nn),t=e[e.length-1];return t?t.params:{}}function Bm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=L.useContext(Fn),{matches:i}=L.useContext(nn),{pathname:s}=rn(),a=JSON.stringify(Gu(i,r.v7_relativeSplatPath));return L.useMemo(()=>qu(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Bx(e,t){return Vx(e,t)}function Vx(e,t,n,r){ti()||fe(!1);let{navigator:i}=L.useContext(Fn),{matches:s}=L.useContext(nn),a=s[s.length-1],c=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=rn(),k;if(t){var y;let A=typeof t=="string"?ei(t):t;d==="/"||(y=A.pathname)!=null&&y.startsWith(d)||fe(!1),k=A}else k=f;let w=k.pathname||"/",C=w;if(d!=="/"){let A=d.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=px(e,{pathname:C}),R=qx(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},c,A.params),pathname:Pn([d,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?d:Pn([d,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r);return t&&R?L.createElement(Ta.Provider,{value:{location:ls({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:kn.Pop}},R):R}function Hx(){let e=Qx(),t=Dx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,null)}const Wx=L.createElement(Hx,null);class Kx extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?L.createElement(nn.Provider,{value:this.props.routeContext},L.createElement(Fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gx(e){let{routeContext:t,match:n,children:r}=e,i=L.useContext(Xu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(nn.Provider,{value:t},r)}function qx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let k=a.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);k>=0||fe(!1),a=a.slice(0,Math.min(a.length,k+1))}let d=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let k=0;k<a.length;k++){let y=a[k];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=k),y.route.id){let{loaderData:w,errors:C}=n,N=y.route.loader&&w[y.route.id]===void 0&&(!C||C[y.route.id]===void 0);if(y.route.lazy||N){d=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((k,y,w)=>{let C,N=!1,R=null,A=null;n&&(C=c&&y.route.id?c[y.route.id]:void 0,R=y.route.errorElement||Wx,d&&(f<0&&w===0?(ew("route-fallback"),N=!0,A=null):f===w&&(N=!0,A=y.route.hydrateFallbackElement||null)));let E=t.concat(a.slice(0,w+1)),m=()=>{let v;return C?v=R:N?v=A:y.route.Component?v=L.createElement(y.route.Component,null):y.route.element?v=y.route.element:v=k,L.createElement(Gx,{match:y,routeContext:{outlet:k,matches:E,isDataRoute:n!=null},children:v})};return n&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?L.createElement(Kx,{location:n.location,revalidation:n.revalidation,component:R,error:C,children:m(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):m()},null)}var Vm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vm||{}),Hm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hm||{});function Xx(e){let t=L.useContext(Xu);return t||fe(!1),t}function Jx(e){let t=L.useContext(zx);return t||fe(!1),t}function Yx(e){let t=L.useContext(nn);return t||fe(!1),t}function Wm(e){let t=Yx(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Qx(){var e;let t=L.useContext(Fm),n=Jx(),r=Wm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Zx(){let{router:e}=Xx(Vm.UseNavigateStable),t=Wm(Hm.UseNavigateStable),n=L.useRef(!1);return $m(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ls({fromRouteId:t},s)))},[e,t])}const If={};function ew(e,t,n){If[e]||(If[e]=!0)}function tw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function wo(e){let{to:t,replace:n,state:r,relative:i}=e;ti()||fe(!1);let{future:s,static:a}=L.useContext(Fn),{matches:c}=L.useContext(nn),{pathname:d}=rn(),f=sn(),k=qu(t,Gu(c,s.v7_relativeSplatPath),d,i==="path"),y=JSON.stringify(k);return L.useEffect(()=>f(JSON.parse(y),{replace:n,state:r,relative:i}),[f,y,i,n,r]),null}function Fe(e){fe(!1)}function nw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:s,static:a=!1,future:c}=e;ti()&&fe(!1);let d=t.replace(/^\/*/,"/"),f=L.useMemo(()=>({basename:d,navigator:s,static:a,future:ls({v7_relativeSplatPath:!1},c)}),[d,c,s,a]);typeof r=="string"&&(r=ei(r));let{pathname:k="/",search:y="",hash:w="",state:C=null,key:N="default"}=r,R=L.useMemo(()=>{let A=Ku(k,d);return A==null?null:{location:{pathname:A,search:y,hash:w,state:C,key:N},navigationType:i}},[d,k,y,w,C,N,i]);return R==null?null:L.createElement(Fn.Provider,{value:f},L.createElement(Ta.Provider,{children:n,value:R}))}function Nf(e){let{children:t,location:n}=e;return Bx(Oc(t),n)}new Promise(()=>{});function Oc(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let s=[...t,i];if(r.type===L.Fragment){n.push.apply(n,Oc(r.props.children,s));return}r.type!==Fe&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Oc(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lc(){return Lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lc.apply(this,arguments)}function rw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function iw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sw(e,t){return e.button===0&&(!t||t==="_self")&&!iw(e)}function Dc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function ow(e,t){let n=Dc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const aw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lw="6";try{window.__reactRouterVersion=lw}catch{}const cw="startTransition",Cf=Zy[cw];function uw(e){let{basename:t,children:n,future:r,window:i}=e,s=L.useRef();s.current==null&&(s.current=dx({window:i,v5Compat:!0}));let a=s.current,[c,d]=L.useState({action:a.action,location:a.location}),{v7_startTransition:f}=r||{},k=L.useCallback(y=>{f&&Cf?Cf(()=>d(y)):d(y)},[d,f]);return L.useLayoutEffect(()=>a.listen(k),[a,k]),L.useEffect(()=>tw(r),[r]),L.createElement(nw,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:a,future:r})}const dw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,je=L.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:c,target:d,to:f,preventScrollReset:k,viewTransition:y}=t,w=rw(t,aw),{basename:C}=L.useContext(Fn),N,R=!1;if(typeof f=="string"&&hw.test(f)&&(N=f,dw))try{let v=new URL(window.location.href),j=f.startsWith("//")?new URL(v.protocol+f):new URL(f),D=Ku(j.pathname,C);j.origin===v.origin&&D!=null?f=D+j.search+j.hash:R=!0}catch{}let A=Ux(f,{relative:i}),E=fw(f,{replace:a,state:c,target:d,preventScrollReset:k,relative:i,viewTransition:y});function m(v){r&&r(v),v.defaultPrevented||E(v)}return L.createElement("a",Lc({},w,{href:N||A,onClick:R||s?r:m,ref:n,target:d}))});var jf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jf||(jf={}));var Pf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function fw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:c}=t===void 0?{}:t,d=sn(),f=rn(),k=Bm(e,{relative:a});return L.useCallback(y=>{if(sw(y,n)){y.preventDefault();let w=r!==void 0?r:Xo(f)===Xo(k);d(e,{replace:w,state:i,preventScrollReset:s,relative:a,viewTransition:c})}},[f,d,k,r,i,n,e,s,a,c])}function pw(e){let t=L.useRef(Dc(e)),n=L.useRef(!1),r=rn(),i=L.useMemo(()=>ow(r.search,n.current?null:t.current),[r.search]),s=sn(),a=L.useCallback((c,d)=>{const f=Dc(typeof c=="function"?c(i):c);n.current=!0,s("?"+f,d)},[s,i]);return[i,a]}const Km=L.createContext(void 0),ys=()=>{const e=L.useContext(Km);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},gw=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},mw=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},vw=({children:e})=>{const[t,n]=L.useState(null),[r,i]=L.useState(!0),[s,a]=L.useState(null),c=async()=>{try{i(!0),a(null);const{type:f,value:k}=mw(),y=f==="subdomain"?`/api/tenants/by-subdomain/${k}`:`/api/tenants/by-domain/${encodeURIComponent(k)}`,w=await fetch(`http://localhost:3001${y}`);if(!w.ok)throw w.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const C=await w.json();if(C.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(C.status==="cancelled")throw new Error("Cuenta cancelada.");n(C),gw(C.branding)}catch(f){a(f instanceof Error?f.message:"Error desconocido")}finally{i(!1)}};L.useEffect(()=>{c()},[]);const d=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return l.jsx(Km.Provider,{value:{tenant:t,loading:r,error:s,isWhiteLabel:d,refreshTenant:c},children:e})};var Rf={};/**
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
 */const Gm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},yw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],c=e[n++],d=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,c=a?e[i+1]:0,d=i+2<e.length,f=d?e[i+2]:0,k=s>>2,y=(s&3)<<4|c>>4;let w=(c&15)<<2|f>>6,C=f&63;d||(C=64,a||(w=64)),r.push(n[k],n[y],n[w],n[C])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const f=i<e.length?n[e.charAt(i)]:64;++i;const y=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||f==null||y==null)throw new xw;const w=s<<2|c>>4;if(r.push(w),f!==64){const C=c<<4&240|f>>2;if(r.push(C),y!==64){const N=f<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(e){const t=Gm(e);return qm.encodeByteArray(t,!0)},Jo=function(e){return ww(e).replace(/\./g,"")},Xm=function(e){try{return qm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _w(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kw=()=>_w().__FIREBASE_DEFAULTS__,bw=()=>{if(typeof process>"u"||typeof Rf>"u")return;const e=Rf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ew=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Xm(e[1]);return t&&JSON.parse(t)},Ju=()=>{try{return kw()||bw()||Ew()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jm=e=>{var t,n;return(n=(t=Ju())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ym=e=>{const t=Jm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Qm=()=>{var e;return(e=Ju())===null||e===void 0?void 0:e.config},Zm=e=>{var t;return(t=Ju())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ev(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Jo(JSON.stringify(n)),Jo(JSON.stringify(a)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Iw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Cw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jw(){const e=Me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Pw(){try{return typeof indexedDB=="object"}catch{return!1}}function Rw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Aw="FirebaseError";class Ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Aw,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Ow(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ct(i,c,r)}}function Ow(e,t){return e.replace(Lw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Lw=/\{\$([^}]+)}/g;function Dw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Yo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Af(s)&&Af(a)){if(!Yo(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(e){return e!==null&&typeof e=="object"}/**
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
 */function ws(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ji(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Pi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Mw(e,t){const n=new zw(e,t);return n.subscribe.bind(n)}class zw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=jl),i.error===void 0&&(i.error=jl),i.complete===void 0&&(i.complete=jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function jl(){}/**
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
 */function yt(e){return e&&e._delegate?e._delegate:e}class Dn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Fw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bw(t))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qn){return this.instances.has(t)}getOptions(t=qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$w(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qn){return this.component?this.component.multipleInstances?t:qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $w(e){return e===qn?void 0:e}function Bw(e){return e.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const Hw={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Ww=J.INFO,Kw={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Gw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yu{constructor(t){this.name=t,this._logLevel=Ww,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const qw=(e,t)=>t.some(n=>e instanceof n);let Of,Lf;function Xw(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return Lf||(Lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,Mc=new WeakMap,nv=new WeakMap,Pl=new WeakMap,Qu=new WeakMap;function Yw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Rn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&tv.set(n,e)}).catch(()=>{}),Qu.set(t,e),t}function Qw(e){if(Mc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Mc.set(e,t)}let zc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||nv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zw(e){zc=e(zc)}function e2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rl(this),t,...n);return nv.set(r,t.sort?t.sort():[t]),Rn(r)}:Jw().includes(e)?function(...t){return e.apply(Rl(this),t),Rn(tv.get(this))}:function(...t){return Rn(e.apply(Rl(this),t))}}function t2(e){return typeof e=="function"?e2(e):(e instanceof IDBTransaction&&Qw(e),qw(e,Xw())?new Proxy(e,zc):e)}function Rn(e){if(e instanceof IDBRequest)return Yw(e);if(Pl.has(e))return Pl.get(e);const t=t2(e);return t!==e&&(Pl.set(e,t),Qu.set(t,e)),t}const Rl=e=>Qu.get(e);function n2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),c=Rn(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Rn(a.result),d.oldVersion,d.newVersion,Rn(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const r2=["get","getKey","getAll","getAllKeys","count"],i2=["put","add","delete","clear"],Al=new Map;function Df(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Al.get(t))return Al.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=i2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||r2.includes(n)))return;const s=async function(a,...c){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),i&&d.done]))[0]};return Al.set(t,s),s}Zw(e=>({...e,get:(t,n,r)=>Df(t,n)||e.get(t,n,r),has:(t,n)=>!!Df(t,n)||e.has(t,n)}));/**
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
 */class s2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Uc="@firebase/app",Mf="0.10.13";/**
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
 */const Zt=new Yu("@firebase/app"),a2="@firebase/app-compat",l2="@firebase/analytics-compat",c2="@firebase/analytics",u2="@firebase/app-check-compat",d2="@firebase/app-check",h2="@firebase/auth",f2="@firebase/auth-compat",p2="@firebase/database",g2="@firebase/data-connect",m2="@firebase/database-compat",v2="@firebase/functions",y2="@firebase/functions-compat",x2="@firebase/installations",w2="@firebase/installations-compat",_2="@firebase/messaging",k2="@firebase/messaging-compat",b2="@firebase/performance",E2="@firebase/performance-compat",S2="@firebase/remote-config",T2="@firebase/remote-config-compat",I2="@firebase/storage",N2="@firebase/storage-compat",C2="@firebase/firestore",j2="@firebase/vertexai-preview",P2="@firebase/firestore-compat",R2="firebase",A2="10.14.1";/**
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
 */const Fc="[DEFAULT]",O2={[Uc]:"fire-core",[a2]:"fire-core-compat",[c2]:"fire-analytics",[l2]:"fire-analytics-compat",[d2]:"fire-app-check",[u2]:"fire-app-check-compat",[h2]:"fire-auth",[f2]:"fire-auth-compat",[p2]:"fire-rtdb",[g2]:"fire-data-connect",[m2]:"fire-rtdb-compat",[v2]:"fire-fn",[y2]:"fire-fn-compat",[x2]:"fire-iid",[w2]:"fire-iid-compat",[_2]:"fire-fcm",[k2]:"fire-fcm-compat",[b2]:"fire-perf",[E2]:"fire-perf-compat",[S2]:"fire-rc",[T2]:"fire-rc-compat",[I2]:"fire-gcs",[N2]:"fire-gcs-compat",[C2]:"fire-fst",[P2]:"fire-fst-compat",[j2]:"fire-vertex","fire-js":"fire-js",[R2]:"fire-js-all"};/**
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
 */const Qo=new Map,L2=new Map,$c=new Map;function zf(e,t){try{e.container.addComponent(t)}catch(n){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function or(e){const t=e.name;if($c.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;$c.set(t,e);for(const n of Qo.values())zf(n,e);for(const n of L2.values())zf(n,e);return!0}function Ia(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kt(e){return e.settings!==void 0}/**
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
 */const D2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new xs("app","Firebase",D2);/**
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
 */class M2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const dr=A2;function rv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=Qm()),!n)throw An.create("no-options");const s=Qo.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const a=new Vw(i);for(const d of $c.values())a.addComponent(d);const c=new M2(n,r,a);return Qo.set(i,c),c}function Zu(e=Fc){const t=Qo.get(e);if(!t&&e===Fc&&Qm())return rv();if(!t)throw An.create("no-app",{appName:e});return t}function St(e,t,n){var r;let i=(r=O2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(c.join(" "));return}or(new Dn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const z2="firebase-heartbeat-database",U2=1,cs="firebase-heartbeat-store";let Ol=null;function iv(){return Ol||(Ol=n2(z2,U2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(e=>{throw An.create("idb-open",{originalErrorMessage:e.message})})),Ol}async function F2(e){try{const n=(await iv()).transaction(cs),r=await n.objectStore(cs).get(sv(e));return await n.done,r}catch(t){if(t instanceof Ct)Zt.warn(t.message);else{const n=An.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zt.warn(n.message)}}}async function Uf(e,t){try{const r=(await iv()).transaction(cs,"readwrite");await r.objectStore(cs).put(t,sv(e)),await r.done}catch(n){if(n instanceof Ct)Zt.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(r.message)}}}function sv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const $2=1024,B2=30*24*60*60*1e3;class V2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ff();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=B2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ff(),{heartbeatsToSend:r,unsentEntries:i}=H2(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zt.warn(n),""}}}function Ff(){return new Date().toISOString().substring(0,10)}function H2(e,t=$2){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),$f(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$f(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class W2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pw()?Rw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function $f(e){return Jo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function K2(e){or(new Dn("platform-logger",t=>new s2(t),"PRIVATE")),or(new Dn("heartbeat",t=>new V2(t),"PRIVATE")),St(Uc,Mf,e),St(Uc,Mf,"esm2017"),St("fire-js","")}K2("");function ed(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G2=ov,av=new xs("auth","Firebase",ov());/**
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
 */const Zo=new Yu("@firebase/auth");function q2(e,...t){Zo.logLevel<=J.WARN&&Zo.warn(`Auth (${dr}): ${e}`,...t)}function _o(e,...t){Zo.logLevel<=J.ERROR&&Zo.error(`Auth (${dr}): ${e}`,...t)}/**
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
 */function vt(e,...t){throw td(e,...t)}function Tt(e,...t){return td(e,...t)}function lv(e,t,n){const r=Object.assign(Object.assign({},G2()),{[t]:n});return new xs("auth","Firebase",r).create(t,{appName:e.name})}function Gt(e){return lv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return av.create(e,...t)}function B(e,t,...n){if(!e)throw td(t,...n)}function Vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _o(t),new Error(t)}function en(e,t){e||Vt(t)}/**
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
 */function Bc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function X2(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function J2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(X2()||Nw()||"connection"in navigator)?navigator.onLine:!0}function Y2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class _s{constructor(t,n){this.shortDelay=t,this.longDelay=n,en(n>t,"Short delay should be less than long delay!"),this.isMobile=Tw()||Cw()}get(){return J2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nd(e,t){en(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */const Q2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Z2=new _s(3e4,6e4);function on(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jt(e,t,n,r,i={}){return uv(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const c=ws(Object.assign({key:e.config.apiKey},a)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const f=Object.assign({method:t,headers:d},s);return Iw()||(f.referrerPolicy="no-referrer"),cv.fetch()(dv(e,e.config.apiHost,n,c),f)})}async function uv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q2),t);try{const i=new t_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw io(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[d,f]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(e,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw io(e,"email-already-in-use",a);if(d==="USER_DISABLED")throw io(e,"user-disabled",a);const k=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw lv(e,k,f);vt(e,k)}}catch(i){if(i instanceof Ct)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function ks(e,t,n,r,i={}){const s=await jt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function dv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?nd(e.config,i):`${e.config.apiScheme}://${i}`}function e_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class t_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),Z2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}function Vf(e){return e!==void 0&&e.enterprise!==void 0}class n_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return e_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function r_(e,t){return jt(e,"GET","/v2/recaptchaConfig",on(e,t))}/**
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
 */async function i_(e,t){return jt(e,"POST","/v1/accounts:delete",t)}async function hv(e,t){return jt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function $i(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function s_(e,t=!1){const n=yt(e),r=await n.getIdToken(t),i=rd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$i(Ll(i.auth_time)),issuedAtTime:$i(Ll(i.iat)),expirationTime:$i(Ll(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ll(e){return Number(e)*1e3}function rd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xm(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hf(e){const t=rd(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ct&&o_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function o_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class a_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ea(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qr(e,hv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?fv(s.providerUserInfo):[],c=c_(e.providerData,a),d=e.isAnonymous,f=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),k=d?f:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Vc(s.createdAt,s.lastLoginAt),isAnonymous:k};Object.assign(e,y)}async function l_(e){const t=yt(e);await ea(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function c_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function fv(e){return e.map(t=>{var{providerId:n}=t,r=ed(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function u_(e,t){const n=await uv(e,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=dv(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cv.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function d_(e,t){return jt(e,"POST","/v2/accounts:revokeToken",on(e,t))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Hf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=Hf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await u_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new zr;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function dn(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ht{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ed(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await qr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return s_(this,t)}reload(){return l_(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Gt(this.auth));const t=await this.getIdToken();return await qr(this,i_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,c,d,f,k;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,A=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,E=(f=n.createdAt)!==null&&f!==void 0?f:void 0,m=(k=n.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:v,emailVerified:j,isAnonymous:D,providerData:M,stsTokenManager:_}=n;B(v&&_,t,"internal-error");const g=zr.fromJSON(this.name,_);B(typeof v=="string",t,"internal-error"),dn(y,t.name),dn(w,t.name),B(typeof j=="boolean",t,"internal-error"),B(typeof D=="boolean",t,"internal-error"),dn(C,t.name),dn(N,t.name),dn(R,t.name),dn(A,t.name),dn(E,t.name),dn(m,t.name);const x=new Ht({uid:v,auth:t,email:w,emailVerified:j,displayName:y,isAnonymous:D,photoURL:N,phoneNumber:C,tenantId:R,stsTokenManager:g,createdAt:E,lastLoginAt:m});return M&&Array.isArray(M)&&(x.providerData=M.map(S=>Object.assign({},S))),A&&(x._redirectEventId=A),x}static async _fromIdTokenResponse(t,n,r=!1){const i=new zr;i.updateFromServerResponse(n);const s=new Ht({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ea(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new zr;c.updateFromIdToken(r);const d=new Ht({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,f),d}}/**
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
 */const Wf=new Map;function Wt(e){en(e instanceof Function,"Expected a class definition");let t=Wf.get(e);return t?(en(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Wf.set(e,t),t)}/**
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
 */function ko(e,t,n){return`firebase:${e}:${t}:${n}`}class Ur{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ko(this.userKey,i.apiKey,s),this.fullPersistenceKey=ko("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ht._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ur(Wt(Kf),t,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Wt(Kf);const a=ko(r,t.config.apiKey,t.name);let c=null;for(const f of n)try{const k=await f._get(a);if(k){const y=Ht._fromJSON(t,k);f!==s&&(c=y),s=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new Ur(s,t,r):(s=d[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Ur(s,t,r))}}/**
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
 */function Gf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wv(t))return"Blackberry";if(_v(t))return"Webos";if(mv(t))return"Safari";if((t.includes("chrome/")||vv(t))&&!t.includes("edge/"))return"Chrome";if(xv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gv(e=Me()){return/firefox\//i.test(e)}function mv(e=Me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vv(e=Me()){return/crios\//i.test(e)}function yv(e=Me()){return/iemobile/i.test(e)}function xv(e=Me()){return/android/i.test(e)}function wv(e=Me()){return/blackberry/i.test(e)}function _v(e=Me()){return/webos/i.test(e)}function id(e=Me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function h_(e=Me()){var t;return id(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function f_(){return jw()&&document.documentMode===10}function kv(e=Me()){return id(e)||xv(e)||_v(e)||wv(e)||/windows phone/i.test(e)||yv(e)}/**
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
 */function bv(e,t=[]){let n;switch(e){case"Browser":n=Gf(Me());break;case"Worker":n=`${Gf(Me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${dr}/${r}`}/**
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
 */class p_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,c)=>{try{const d=t(s);a(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function g_(e,t={}){return jt(e,"GET","/v2/passwordPolicy",on(e,t))}/**
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
 */const m_=6;class v_{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:m_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class y_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new p_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await hv(this,{idToken:t}),r=await Ht._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(t);(!a||a===c)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ea(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Y2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kt(this.app))return Promise.reject(Gt(this));const n=t?yt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await g_(this),n=new v_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await d_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Wt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,i);return()=>{a=!0,d()}}else{const d=t.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&q2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $n(e){return yt(e)}class qf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mw(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x_(e){Na=e}function Ev(e){return Na.loadJS(e)}function w_(){return Na.recaptchaEnterpriseScript}function __(){return Na.gapiScript}function k_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const b_="recaptcha-enterprise",E_="NO_RECAPTCHA";class S_{constructor(t){this.type=b_,this.auth=$n(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{r_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new n_(d);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,a(f.siteKey)}}).catch(d=>{c(d)})})}function i(s,a,c){const d=window.grecaptcha;Vf(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:t}).then(f=>{a(f)}).catch(()=>{a(E_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&Vf(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=w_();d.length!==0&&(d+=c),Ev(d).then(()=>{i(c,s,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}}async function Xf(e,t,n,r=!1){const i=new S_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ta(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Xf(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
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
 */function T_(e,t){const n=Ia(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function I_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function N_(e,t,n){const r=$n(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Sv(t),{host:a,port:c}=C_(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),j_()}function Sv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function C_(e){const t=Sv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Jf(a)}}}function Jf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function j_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class sd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(t){return Vt("not implemented")}_linkToIdToken(t,n){return Vt("not implemented")}_getReauthenticationResolver(t){return Vt("not implemented")}}async function P_(e,t){return jt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function R_(e,t){return ks(e,"POST","/v1/accounts:signInWithPassword",on(e,t))}async function A_(e,t){return jt(e,"POST","/v1/accounts:sendOobCode",on(e,t))}async function O_(e,t){return A_(e,t)}/**
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
 */async function L_(e,t){return ks(e,"POST","/v1/accounts:signInWithEmailLink",on(e,t))}async function D_(e,t){return ks(e,"POST","/v1/accounts:signInWithEmailLink",on(e,t))}/**
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
 */class us extends sd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new us(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new us(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(t,n,"signInWithPassword",R_);case"emailLink":return L_(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(t,r,"signUpPassword",P_);case"emailLink":return D_(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Fr(e,t){return ks(e,"POST","/v1/accounts:signInWithIdp",on(e,t))}/**
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
 */const M_="http://localhost";class ar extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ar(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ed(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ar(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fr(t,n)}buildRequest(){const t={requestUri:M_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ws(n)}return t}}/**
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
 */function z_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U_(e){const t=ji(Pi(e)).link,n=t?ji(Pi(t)).deep_link_id:null,r=ji(Pi(e)).deep_link_id;return(r?ji(Pi(r)).link:null)||r||n||t||e}class od{constructor(t){var n,r,i,s,a,c;const d=ji(Pi(t)),f=(n=d.apiKey)!==null&&n!==void 0?n:null,k=(r=d.oobCode)!==null&&r!==void 0?r:null,y=z_((i=d.mode)!==null&&i!==void 0?i:null);B(f&&k&&y,"argument-error"),this.apiKey=f,this.operation=y,this.code=k,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=d.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=U_(t);try{return new od(n)}catch{return null}}}/**
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
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(t,n){return us._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=od.parseLink(n);return B(r,"argument-error"),us._fromEmailAndCode(t,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bs extends Tv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends bs{constructor(){super("facebook.com")}static credential(t){return ar._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mn.credential(t.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class vn extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ar._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class yn extends bs{constructor(){super("github.com")}static credential(t){return ar._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yn.credential(t.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */class xn extends bs{constructor(){super("twitter.com")}static credential(t,n){return ar._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function F_(e,t){return ks(e,"POST","/v1/accounts:signUp",on(e,t))}/**
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
 */class na extends Ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,na.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new na(t,n,r,i)}}function Iv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(e,s,t,r):s})}async function $_(e,t,n=!1){const r=await qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lr._forOperation(e,"link",r)}/**
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
 */async function B_(e,t,n=!1){const{auth:r}=e;if(kt(r.app))return Promise.reject(Gt(r));const i="reauthenticate";try{const s=await qr(e,Iv(r,i,t,e),n);B(s.idToken,r,"internal-error");const a=rd(s.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(e.uid===c,r,"user-mismatch"),lr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
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
 */async function Nv(e,t,n=!1){if(kt(e.app))return Promise.reject(Gt(e));const r="signIn",i=await Iv(e,r,t),s=await lr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function V_(e,t){return Nv($n(e),t)}/**
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
 */async function Cv(e){const t=$n(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function H_(e,t,n){const r=$n(e);await ta(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",O_)}async function W_(e,t,n){if(kt(e.app))return Promise.reject(Gt(e));const r=$n(e),a=await ta(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F_).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Cv(e),d}),c=await lr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function K_(e,t,n){return kt(e.app)?Promise.reject(Gt(e)):V_(yt(e),ni.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cv(e),r})}/**
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
 */async function G_(e,t){return jt(e,"POST","/v1/accounts:update",t)}/**
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
 */async function q_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=yt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await qr(r,G_(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function X_(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function J_(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function Y_(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}function Q_(e){return yt(e).signOut()}const ra="__sak";/**
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
 */class jv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Z_=1e3,ek=10;class Pv extends jv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);f_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ek):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Pv.type="LOCAL";const tk=Pv;/**
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
 */function nk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ca{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ca(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async f=>f(n.origin,s)),d=await nk(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
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
 */function ad(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class rk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,d)=>{const f=ad("",20);i.port1.start();const k=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(k),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(w.data.response);break;default:clearTimeout(k),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function It(){return window}function ik(e){It().location.href=e}/**
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
 */function Ov(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function sk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ok(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ak(){return Ov()?self:null}/**
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
 */const Lv="firebaseLocalStorageDb",lk=1,ia="firebaseLocalStorage",Dv="fbase_key";class Es{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ja(e,t){return e.transaction([ia],t?"readwrite":"readonly").objectStore(ia)}function ck(){const e=indexedDB.deleteDatabase(Lv);return new Es(e).toPromise()}function Hc(){const e=indexedDB.open(Lv,lk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ia,{keyPath:Dv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ia)?t(r):(r.close(),await ck(),t(await Hc()))})})}async function Qf(e,t,n){const r=ja(e,!0).put({[Dv]:t,value:n});return new Es(r).toPromise()}async function uk(e,t){const n=ja(e,!1).get(t),r=await new Es(n).toPromise();return r===void 0?null:r.value}function Zf(e,t){const n=ja(e,!0).delete(t);return new Es(n).toPromise()}const dk=800,hk=3;class Mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>hk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(ak()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await sk(),!this.activeServiceWorker)return;this.sender=new rk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ok()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hc();return await Qf(t,ra,"1"),await Zf(t,ra),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>uk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ja(i,!1).getAll();return new Es(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mv.type="LOCAL";const fk=Mv;new _s(3e4,6e4);/**
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
 */function pk(e,t){return t?Wt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ld extends sd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function gk(e){return Nv(e.auth,new ld(e),e.bypassAuthState)}function mk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),B_(n,new ld(e),e.bypassAuthState)}async function vk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),$_(n,new ld(e),e.bypassAuthState)}/**
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
 */class zv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=t;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gk;case"linkViaPopup":case"linkViaRedirect":return vk;case"reauthViaPopup":case"reauthViaRedirect":return mk;default:vt(this.auth,"internal-error")}}resolve(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yk=new _s(2e3,1e4);class Pr extends zv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const t=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yk.get())};t()}}Pr.currentPopupAction=null;/**
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
 */const xk="pendingRedirect",bo=new Map;class wk extends zv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=bo.get(this.auth._key());if(!t){try{const r=await _k(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}bo.set(this.auth._key(),t)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _k(e,t){const n=Ek(t),r=bk(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kk(e,t){bo.set(e._key(),t)}function bk(e){return Wt(e._redirectPersistence)}function Ek(e){return ko(xk,e.config.apiKey,e.name)}async function Sk(e,t,n=!1){if(kt(e.app))return Promise.reject(Gt(e));const r=$n(e),i=pk(r,t),a=await new wk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Tk=10*60*1e3;class Ik{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Nk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Uv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Tk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(t))}saveEventToCache(t){this.cachedEventUids.add(ep(t)),this.lastProcessedEventTime=Date.now()}}function ep(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Uv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Nk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uv(e);default:return!1}}/**
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
 */async function Ck(e,t={}){return jt(e,"GET","/v1/projects",t)}/**
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
 */const jk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pk=/^https?/;async function Rk(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ck(e);for(const n of t)try{if(Ak(n))return}catch{}vt(e,"unauthorized-domain")}function Ak(e){const t=Bc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Pk.test(n))return!1;if(jk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ok=new _s(3e4,6e4);function tp(){const e=It().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Lk(e){return new Promise((t,n)=>{var r,i,s;function a(){tp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(Tt(e,"network-request-failed"))},timeout:Ok.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)a();else{const c=k_("iframefcb");return It()[c]=()=>{gapi.load?a():n(Tt(e,"network-request-failed"))},Ev(`${__()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw Eo=null,t})}let Eo=null;function Dk(e){return Eo=Eo||Lk(e),Eo}/**
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
 */const Mk=new _s(5e3,15e3),zk="__/auth/iframe",Uk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$k=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bk(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?nd(t,Uk):`https://${e.config.authDomain}/${zk}`,r={apiKey:t.apiKey,appName:e.name,v:dr},i=$k.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ws(r).slice(1)}`}async function Vk(e){const t=await Dk(e),n=It().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:Bk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Tt(e,"network-request-failed"),c=It().setTimeout(()=>{s(a)},Mk.get());function d(){It().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{s(a)})}))}/**
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
 */const Hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wk=500,Kk=600,Gk="_blank",qk="http://localhost";class np{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xk(e,t,n,r=Wk,i=Kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Hk),{width:r.toString(),height:i.toString(),top:s,left:a}),f=Me().toLowerCase();n&&(c=vv(f)?Gk:n),gv(f)&&(t=t||qk,d.scrollbars="yes");const k=Object.entries(d).reduce((w,[C,N])=>`${w}${C}=${N},`,"");if(h_(f)&&c!=="_self")return Jk(t||"",c),new np(null);const y=window.open(t||"",c,k);B(y,e,"popup-blocked");try{y.focus()}catch{}return new np(y)}function Jk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yk="__/auth/handler",Qk="emulator/auth/handler",Zk=encodeURIComponent("fac");async function rp(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:dr,eventId:i};if(t instanceof Tv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Dw(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[k,y]of Object.entries({}))a[k]=y}if(t instanceof bs){const k=t.getScopes().filter(y=>y!=="");k.length>0&&(a.scopes=k.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const k of Object.keys(c))c[k]===void 0&&delete c[k];const d=await e._getAppCheckToken(),f=d?`#${Zk}=${encodeURIComponent(d)}`:"";return`${eb(e)}?${ws(c).slice(1)}${f}`}function eb({config:e}){return e.emulator?nd(e,Qk):`https://${e.authDomain}/${Yk}`}/**
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
 */const Dl="webStorageSupport";class tb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Av,this._completeRedirectFn=Sk,this._overrideRedirectResult=kk}async _openPopup(t,n,r,i){var s;en((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await rp(t,n,r,Bc(),i);return Xk(t,a,ad())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await rp(t,n,r,Bc(),i);return ik(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Vk(t),r=new Ik(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Dl,{type:Dl},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dl];a!==void 0&&n(!!a),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rk(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return kv()||mv()||id()}}const nb=tb;var ip="@firebase/auth",sp="1.7.9";/**
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
 */class rb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ib(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sb(e){or(new Dn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bv(e)},f=new y_(r,i,s,d);return I_(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),or(new Dn("auth-internal",t=>{const n=$n(t.getProvider("auth").getImmediate());return(r=>new rb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(ip,sp,ib(e)),St(ip,sp,"esm2017")}/**
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
 */const ob=5*60,ab=Zm("authIdTokenMaxAge")||ob;let op=null;const lb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ab)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cb(e=Zu()){const t=Ia(e,"auth");if(t.isInitialized())return t.getImmediate();const n=T_(e,{popupRedirectResolver:nb,persistence:[fk,tk,Av]}),r=Zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=lb(s.toString());J_(n,a,()=>a(n.currentUser)),X_(n,c=>a(c))}}const i=Jm("auth");return i&&N_(n,`http://${i}`),n}function ub(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}x_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ub().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sb("Browser");var db="firebase",hb="10.14.1";/**
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
 */St(db,hb,"app");var ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fv;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,g){function x(){}x.prototype=g.prototype,_.D=g.prototype,_.prototype=new x,_.prototype.constructor=_,_.C=function(S,I,T){for(var b=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)b[ge-2]=arguments[ge];return g.prototype[I].apply(S,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,x){x||(x=0);var S=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)S[I]=g.charCodeAt(x++)|g.charCodeAt(x++)<<8|g.charCodeAt(x++)<<16|g.charCodeAt(x++)<<24;else for(I=0;16>I;++I)S[I]=g[x++]|g[x++]<<8|g[x++]<<16|g[x++]<<24;g=_.g[0],x=_.g[1],I=_.g[2];var T=_.g[3],b=g+(T^x&(I^T))+S[0]+3614090360&4294967295;g=x+(b<<7&4294967295|b>>>25),b=T+(I^g&(x^I))+S[1]+3905402710&4294967295,T=g+(b<<12&4294967295|b>>>20),b=I+(x^T&(g^x))+S[2]+606105819&4294967295,I=T+(b<<17&4294967295|b>>>15),b=x+(g^I&(T^g))+S[3]+3250441966&4294967295,x=I+(b<<22&4294967295|b>>>10),b=g+(T^x&(I^T))+S[4]+4118548399&4294967295,g=x+(b<<7&4294967295|b>>>25),b=T+(I^g&(x^I))+S[5]+1200080426&4294967295,T=g+(b<<12&4294967295|b>>>20),b=I+(x^T&(g^x))+S[6]+2821735955&4294967295,I=T+(b<<17&4294967295|b>>>15),b=x+(g^I&(T^g))+S[7]+4249261313&4294967295,x=I+(b<<22&4294967295|b>>>10),b=g+(T^x&(I^T))+S[8]+1770035416&4294967295,g=x+(b<<7&4294967295|b>>>25),b=T+(I^g&(x^I))+S[9]+2336552879&4294967295,T=g+(b<<12&4294967295|b>>>20),b=I+(x^T&(g^x))+S[10]+4294925233&4294967295,I=T+(b<<17&4294967295|b>>>15),b=x+(g^I&(T^g))+S[11]+2304563134&4294967295,x=I+(b<<22&4294967295|b>>>10),b=g+(T^x&(I^T))+S[12]+1804603682&4294967295,g=x+(b<<7&4294967295|b>>>25),b=T+(I^g&(x^I))+S[13]+4254626195&4294967295,T=g+(b<<12&4294967295|b>>>20),b=I+(x^T&(g^x))+S[14]+2792965006&4294967295,I=T+(b<<17&4294967295|b>>>15),b=x+(g^I&(T^g))+S[15]+1236535329&4294967295,x=I+(b<<22&4294967295|b>>>10),b=g+(I^T&(x^I))+S[1]+4129170786&4294967295,g=x+(b<<5&4294967295|b>>>27),b=T+(x^I&(g^x))+S[6]+3225465664&4294967295,T=g+(b<<9&4294967295|b>>>23),b=I+(g^x&(T^g))+S[11]+643717713&4294967295,I=T+(b<<14&4294967295|b>>>18),b=x+(T^g&(I^T))+S[0]+3921069994&4294967295,x=I+(b<<20&4294967295|b>>>12),b=g+(I^T&(x^I))+S[5]+3593408605&4294967295,g=x+(b<<5&4294967295|b>>>27),b=T+(x^I&(g^x))+S[10]+38016083&4294967295,T=g+(b<<9&4294967295|b>>>23),b=I+(g^x&(T^g))+S[15]+3634488961&4294967295,I=T+(b<<14&4294967295|b>>>18),b=x+(T^g&(I^T))+S[4]+3889429448&4294967295,x=I+(b<<20&4294967295|b>>>12),b=g+(I^T&(x^I))+S[9]+568446438&4294967295,g=x+(b<<5&4294967295|b>>>27),b=T+(x^I&(g^x))+S[14]+3275163606&4294967295,T=g+(b<<9&4294967295|b>>>23),b=I+(g^x&(T^g))+S[3]+4107603335&4294967295,I=T+(b<<14&4294967295|b>>>18),b=x+(T^g&(I^T))+S[8]+1163531501&4294967295,x=I+(b<<20&4294967295|b>>>12),b=g+(I^T&(x^I))+S[13]+2850285829&4294967295,g=x+(b<<5&4294967295|b>>>27),b=T+(x^I&(g^x))+S[2]+4243563512&4294967295,T=g+(b<<9&4294967295|b>>>23),b=I+(g^x&(T^g))+S[7]+1735328473&4294967295,I=T+(b<<14&4294967295|b>>>18),b=x+(T^g&(I^T))+S[12]+2368359562&4294967295,x=I+(b<<20&4294967295|b>>>12),b=g+(x^I^T)+S[5]+4294588738&4294967295,g=x+(b<<4&4294967295|b>>>28),b=T+(g^x^I)+S[8]+2272392833&4294967295,T=g+(b<<11&4294967295|b>>>21),b=I+(T^g^x)+S[11]+1839030562&4294967295,I=T+(b<<16&4294967295|b>>>16),b=x+(I^T^g)+S[14]+4259657740&4294967295,x=I+(b<<23&4294967295|b>>>9),b=g+(x^I^T)+S[1]+2763975236&4294967295,g=x+(b<<4&4294967295|b>>>28),b=T+(g^x^I)+S[4]+1272893353&4294967295,T=g+(b<<11&4294967295|b>>>21),b=I+(T^g^x)+S[7]+4139469664&4294967295,I=T+(b<<16&4294967295|b>>>16),b=x+(I^T^g)+S[10]+3200236656&4294967295,x=I+(b<<23&4294967295|b>>>9),b=g+(x^I^T)+S[13]+681279174&4294967295,g=x+(b<<4&4294967295|b>>>28),b=T+(g^x^I)+S[0]+3936430074&4294967295,T=g+(b<<11&4294967295|b>>>21),b=I+(T^g^x)+S[3]+3572445317&4294967295,I=T+(b<<16&4294967295|b>>>16),b=x+(I^T^g)+S[6]+76029189&4294967295,x=I+(b<<23&4294967295|b>>>9),b=g+(x^I^T)+S[9]+3654602809&4294967295,g=x+(b<<4&4294967295|b>>>28),b=T+(g^x^I)+S[12]+3873151461&4294967295,T=g+(b<<11&4294967295|b>>>21),b=I+(T^g^x)+S[15]+530742520&4294967295,I=T+(b<<16&4294967295|b>>>16),b=x+(I^T^g)+S[2]+3299628645&4294967295,x=I+(b<<23&4294967295|b>>>9),b=g+(I^(x|~T))+S[0]+4096336452&4294967295,g=x+(b<<6&4294967295|b>>>26),b=T+(x^(g|~I))+S[7]+1126891415&4294967295,T=g+(b<<10&4294967295|b>>>22),b=I+(g^(T|~x))+S[14]+2878612391&4294967295,I=T+(b<<15&4294967295|b>>>17),b=x+(T^(I|~g))+S[5]+4237533241&4294967295,x=I+(b<<21&4294967295|b>>>11),b=g+(I^(x|~T))+S[12]+1700485571&4294967295,g=x+(b<<6&4294967295|b>>>26),b=T+(x^(g|~I))+S[3]+2399980690&4294967295,T=g+(b<<10&4294967295|b>>>22),b=I+(g^(T|~x))+S[10]+4293915773&4294967295,I=T+(b<<15&4294967295|b>>>17),b=x+(T^(I|~g))+S[1]+2240044497&4294967295,x=I+(b<<21&4294967295|b>>>11),b=g+(I^(x|~T))+S[8]+1873313359&4294967295,g=x+(b<<6&4294967295|b>>>26),b=T+(x^(g|~I))+S[15]+4264355552&4294967295,T=g+(b<<10&4294967295|b>>>22),b=I+(g^(T|~x))+S[6]+2734768916&4294967295,I=T+(b<<15&4294967295|b>>>17),b=x+(T^(I|~g))+S[13]+1309151649&4294967295,x=I+(b<<21&4294967295|b>>>11),b=g+(I^(x|~T))+S[4]+4149444226&4294967295,g=x+(b<<6&4294967295|b>>>26),b=T+(x^(g|~I))+S[11]+3174756917&4294967295,T=g+(b<<10&4294967295|b>>>22),b=I+(g^(T|~x))+S[2]+718787259&4294967295,I=T+(b<<15&4294967295|b>>>17),b=x+(T^(I|~g))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(I+(b<<21&4294967295|b>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+T&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var x=g-this.blockSize,S=this.B,I=this.h,T=0;T<g;){if(I==0)for(;T<=x;)i(this,_,T),T+=this.blockSize;if(typeof _=="string"){for(;T<g;)if(S[I++]=_.charCodeAt(T++),I==this.blockSize){i(this,S),I=0;break}}else for(;T<g;)if(S[I++]=_[T++],I==this.blockSize){i(this,S),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var x=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=x&255,x/=256;for(this.u(_),_=Array(16),g=x=0;4>g;++g)for(var S=0;32>S;S+=8)_[x++]=this.g[g]>>>S&255;return _};function s(_,g){var x=c;return Object.prototype.hasOwnProperty.call(x,_)?x[_]:x[_]=g(_)}function a(_,g){this.h=g;for(var x=[],S=!0,I=_.length-1;0<=I;I--){var T=_[I]|0;S&&T==g||(x[I]=T,S=!1)}this.g=x}var c={};function d(_){return-128<=_&&128>_?s(_,function(g){return new a([g|0],0>g?-1:0)}):new a([_|0],0>_?-1:0)}function f(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return A(f(-_));for(var g=[],x=1,S=0;_>=x;S++)g[S]=_/x|0,x*=4294967296;return new a(g,0)}function k(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return A(k(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=f(Math.pow(g,8)),S=y,I=0;I<_.length;I+=8){var T=Math.min(8,_.length-I),b=parseInt(_.substring(I,I+T),g);8>T?(T=f(Math.pow(g,T)),S=S.j(T).add(f(b))):(S=S.j(x),S=S.add(f(b)))}return S}var y=d(0),w=d(1),C=d(16777216);e=a.prototype,e.m=function(){if(R(this))return-A(this).m();for(var _=0,g=1,x=0;x<this.g.length;x++){var S=this.i(x);_+=(0<=S?S:4294967296+S)*g,g*=4294967296}return _},e.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(R(this))return"-"+A(this).toString(_);for(var g=f(Math.pow(_,6)),x=this,S="";;){var I=j(x,g).g;x=E(x,I.j(g));var T=((0<x.g.length?x.g[0]:x.h)>>>0).toString(_);if(x=I,N(x))return T+S;for(;6>T.length;)T="0"+T;S=T+S}},e.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function R(_){return _.h==-1}e.l=function(_){return _=E(this,_),R(_)?-1:N(_)?0:1};function A(_){for(var g=_.g.length,x=[],S=0;S<g;S++)x[S]=~_.g[S];return new a(x,~_.h).add(w)}e.abs=function(){return R(this)?A(this):this},e.add=function(_){for(var g=Math.max(this.g.length,_.g.length),x=[],S=0,I=0;I<=g;I++){var T=S+(this.i(I)&65535)+(_.i(I)&65535),b=(T>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);S=b>>>16,T&=65535,b&=65535,x[I]=b<<16|T}return new a(x,x[x.length-1]&-2147483648?-1:0)};function E(_,g){return _.add(A(g))}e.j=function(_){if(N(this)||N(_))return y;if(R(this))return R(_)?A(this).j(A(_)):A(A(this).j(_));if(R(_))return A(this.j(A(_)));if(0>this.l(C)&&0>_.l(C))return f(this.m()*_.m());for(var g=this.g.length+_.g.length,x=[],S=0;S<2*g;S++)x[S]=0;for(S=0;S<this.g.length;S++)for(var I=0;I<_.g.length;I++){var T=this.i(S)>>>16,b=this.i(S)&65535,ge=_.i(I)>>>16,Bn=_.i(I)&65535;x[2*S+2*I]+=b*Bn,m(x,2*S+2*I),x[2*S+2*I+1]+=T*Bn,m(x,2*S+2*I+1),x[2*S+2*I+1]+=b*ge,m(x,2*S+2*I+1),x[2*S+2*I+2]+=T*ge,m(x,2*S+2*I+2)}for(S=0;S<g;S++)x[S]=x[2*S+1]<<16|x[2*S];for(S=g;S<2*g;S++)x[S]=0;return new a(x,0)};function m(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function v(_,g){this.g=_,this.h=g}function j(_,g){if(N(g))throw Error("division by zero");if(N(_))return new v(y,y);if(R(_))return g=j(A(_),g),new v(A(g.g),A(g.h));if(R(g))return g=j(_,A(g)),new v(A(g.g),g.h);if(30<_.g.length){if(R(_)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var x=w,S=g;0>=S.l(_);)x=D(x),S=D(S);var I=M(x,1),T=M(S,1);for(S=M(S,2),x=M(x,2);!N(S);){var b=T.add(S);0>=b.l(_)&&(I=I.add(x),T=b),S=M(S,1),x=M(x,1)}return g=E(_,I.j(g)),new v(I,g)}for(I=y;0<=_.l(g);){for(x=Math.max(1,Math.floor(_.m()/g.m())),S=Math.ceil(Math.log(x)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),T=f(x),b=T.j(g);R(b)||0<b.l(_);)x-=S,T=f(x),b=T.j(g);N(T)&&(T=w),I=I.add(T),_=E(_,b)}return new v(I,_)}e.A=function(_){return j(this,_).h},e.and=function(_){for(var g=Math.max(this.g.length,_.g.length),x=[],S=0;S<g;S++)x[S]=this.i(S)&_.i(S);return new a(x,this.h&_.h)},e.or=function(_){for(var g=Math.max(this.g.length,_.g.length),x=[],S=0;S<g;S++)x[S]=this.i(S)|_.i(S);return new a(x,this.h|_.h)},e.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),x=[],S=0;S<g;S++)x[S]=this.i(S)^_.i(S);return new a(x,this.h^_.h)};function D(_){for(var g=_.g.length+1,x=[],S=0;S<g;S++)x[S]=_.i(S)<<1|_.i(S-1)>>>31;return new a(x,_.h)}function M(_,g){var x=g>>5;g%=32;for(var S=_.g.length-x,I=[],T=0;T<S;T++)I[T]=0<g?_.i(T+x)>>>g|_.i(T+x+1)<<32-g:_.i(T+x);return new a(I,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=k,Fv=a}).apply(typeof ap<"u"?ap:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in h))break e;h=h[P]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,P={next:function(){if(!p&&h<o.length){var O=h++;return{value:u(O,o[O]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function k(o,u,h){return o.call.apply(o.bind,arguments)}function y(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function w(o,u,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:y,w.apply(null,arguments)}function C(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,P,O){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return u.prototype[P].apply(p,U)}}function R(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function A(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(d(p)){const P=o.length||0,O=p.length||0;o.length=P+O;for(let U=0;U<O;U++)o[P+U]=p[U]}else o.push(p)}}class E{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function m(o){return/^[\s\xa0]*$/.test(o)}function v(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var D=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function M(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function _(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,u){let h,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(h in p)o[h]=p[h];for(let O=0;O<x.length;O++)h=x[O],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function T(o){c.setTimeout(()=>{throw o},0)}function b(){var o=V;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ge{constructor(){this.h=this.g=null}add(u,h){const p=Bn.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Bn=new E(()=>new ri,o=>o.reset());class ri{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Rt,F=!1,V=new ge,W=()=>{const o=c.Promise.resolve(void 0);Rt=()=>{o.then(se)}};var se=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(h){T(h)}var u=Bn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var At=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Ot(o,u){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(D){e:{try{j(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Lt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ot.aa.h.call(this)}}N(Ot,ue);var Lt={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),ry=0;function iy(o,u,h,p,P){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=P,this.key=++ry,this.da=this.fa=!1}function Ts(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,u,h,p,P){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var U=Aa(o,u,p,P);return-1<U?(u=o[U],h||(u.fa=!1)):(u=new iy(u,this.src,O,!!p,P),u.fa=h,o.push(u)),u};function Ra(o,u){var h=u.type;if(h in o.g){var p=o.g[h],P=Array.prototype.indexOf.call(p,u,void 0),O;(O=0<=P)&&Array.prototype.splice.call(p,P,1),O&&(Ts(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Aa(o,u,h,p){for(var P=0;P<o.length;++P){var O=o[P];if(!O.da&&O.listener==u&&O.capture==!!h&&O.ha==p)return P}return-1}var Oa="closure_lm_"+(1e6*Math.random()|0),La={};function gd(o,u,h,p,P){if(Array.isArray(u)){for(var O=0;O<u.length;O++)gd(o,u[O],h,p,P);return null}return h=yd(h),o&&o[Dt]?o.K(u,h,f(p)?!!p.capture:!1,P):sy(o,u,h,!1,p,P)}function sy(o,u,h,p,P,O){if(!u)throw Error("Invalid event type");var U=f(P)?!!P.capture:!!P,Z=Ma(o);if(Z||(o[Oa]=Z=new Is(o)),h=Z.add(u,h,p,U,O),h.proxy)return h;if(p=oy(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)At||(P=U),P===void 0&&(P=!1),o.addEventListener(u.toString(),p,P);else if(o.attachEvent)o.attachEvent(vd(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function oy(){function o(h){return u.call(o.src,o.listener,h)}const u=ay;return o}function md(o,u,h,p,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)md(o,u[O],h,p,P);else p=f(p)?!!p.capture:!!p,h=yd(h),o&&o[Dt]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],h=Aa(O,h,p,P),-1<h&&(Ts(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ma(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Aa(u,h,p,P)),(h=-1<o?u[o]:null)&&Da(h))}function Da(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Dt])Ra(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(vd(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Ma(u))?(Ra(h,o),h.h==0&&(h.src=null,u[Oa]=null)):Ts(o)}}}function vd(o){return o in La?La[o]:La[o]="on"+o}function ay(o,u){if(o.da)o=!0;else{u=new Ot(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&Da(o),o=h.call(p,u)}return o}function Ma(o){return o=o[Oa],o instanceof Is?o:null}var za="__closure_events_fn_"+(1e9*Math.random()>>>0);function yd(o){return typeof o=="function"?o:(o[za]||(o[za]=function(u){return o.handleEvent(u)}),o[za])}function Ee(){Q.call(this),this.i=new Is(this),this.M=this,this.F=null}N(Ee,Q),Ee.prototype[Dt]=!0,Ee.prototype.removeEventListener=function(o,u,h,p){md(this,o,u,h,p)};function Re(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ue(u,o);else if(u instanceof ue)u.target=u.target||o;else{var P=u;u=new ue(p,o),S(u,P)}if(P=!0,h)for(var O=h.length-1;0<=O;O--){var U=u.g=h[O];P=Ns(U,p,!0,u)&&P}if(U=u.g=o,P=Ns(U,p,!0,u)&&P,P=Ns(U,p,!1,u)&&P,h)for(O=0;O<h.length;O++)U=u.g=h[O],P=Ns(U,p,!1,u)&&P}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)Ts(h[p]);delete o.g[u],o.h--}}this.F=null},Ee.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Ee.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function Ns(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,O=0;O<u.length;++O){var U=u[O];if(U&&!U.da&&U.capture==h){var Z=U.listener,we=U.ha||U.src;U.fa&&Ra(o.i,U),P=Z.call(we,p)!==!1&&P}}return P&&!p.defaultPrevented}function xd(o,u,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function wd(o){o.g=xd(()=>{o.g=null,o.i&&(o.i=!1,wd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class ly extends Q{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:wd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ii(o){Q.call(this),this.h=o,this.g={}}N(ii,Q);var _d=[];function kd(o){M(o.g,function(u,h){this.g.hasOwnProperty(h)&&Da(u)},o),o.g={}}ii.prototype.N=function(){ii.aa.N.call(this),kd(this)},ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ua=c.JSON.stringify,cy=c.JSON.parse,uy=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Fa(){}Fa.prototype.h=null;function bd(o){return o.h||(o.h=o.i())}function dy(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $a(){ue.call(this,"d")}N($a,ue);function Ba(){ue.call(this,"c")}N(Ba,ue);var hr={},Ed=null;function Va(){return Ed=Ed||new Ee}hr.La="serverreachability";function Sd(o){ue.call(this,hr.La,o)}N(Sd,ue);function oi(o){const u=Va();Re(u,new Sd(u))}hr.STAT_EVENT="statevent";function Td(o,u){ue.call(this,hr.STAT_EVENT,o),this.stat=u}N(Td,ue);function Ae(o){const u=Va();Re(u,new Td(u,o))}hr.Ma="timingevent";function Id(o,u){ue.call(this,hr.Ma,o),this.size=u}N(Id,ue);function ai(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function li(){this.g=!0}li.prototype.xa=function(){this.g=!1};function hy(o,u,h,p,P,O){o.info(function(){if(o.g)if(O)for(var U="",Z=O.split("&"),we=0;we<Z.length;we++){var X=Z[we].split("=");if(1<X.length){var Se=X[0];X=X[1];var Te=Se.split("_");U=2<=Te.length&&Te[1]=="type"?U+(Se+"="+X+"&"):U+(Se+"=redacted&")}}else U=null;else U=O;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+u+`
`+h+`
`+U})}function fy(o,u,h,p,P,O,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+u+`
`+h+`
`+O+" "+U})}function fr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+gy(o,h)+(p?" "+p:"")})}function py(o,u){o.info(function(){return"TIMEOUT: "+u})}li.prototype.info=function(){};function gy(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Ua(h)}catch{return u}}var Ha={NO_ERROR:0,TIMEOUT:8},my={},Wa;function Cs(){}N(Cs,Fa),Cs.prototype.g=function(){return new XMLHttpRequest},Cs.prototype.i=function(){return{}},Wa=new Cs;function an(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nd}function Nd(){this.i=null,this.g="",this.h=!1}var Cd={},Ka={};function Ga(o,u,h){o.L=1,o.v=As(Mt(u)),o.m=h,o.P=!0,jd(o,null)}function jd(o,u){o.F=Date.now(),js(o),o.A=Mt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Hd(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Nd,o.g=lh(o.j,h?u:null,!o.m),0<o.O&&(o.M=new ly(w(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(_d[0]=P.toString()),P=_d);for(var O=0;O<P.length;O++){var U=gd(h,P[O],p||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),oi(),hy(o.i,o.u,o.A,o.l,o.R,o.m)}an.prototype.ca=function(o){o=o.target;const u=this.M;u&&zt(o)==3?u.j():this.Y(o)},an.prototype.Y=function(o){try{if(o==this.g)e:{const Te=zt(this.g);var u=this.g.Ba();const mr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Yd(this.g)))){this.J||Te!=4||u==7||(u==8||0>=mr?oi(3):oi(2)),qa(this);var h=this.g.Z();this.X=h;t:if(Pd(this)){var p=Yd(this.g);o="";var P=p.length,O=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),ci(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(O&&u==P-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,fy(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,we=this.g;if((Z=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(Z)){var X=Z;break t}}X=null}if(h=X)fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,h);else{this.o=!1,this.s=3,Ae(12),Vn(this),ci(this);break e}}if(this.P){h=!0;let at;for(;!this.J&&this.C<U.length;)if(at=vy(this,U),at==Ka){Te==4&&(this.s=4,Ae(14),h=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Cd){this.s=4,Ae(15),fr(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else fr(this.i,this.l,at,null),Xa(this,at);if(Pd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||U.length!=0||this.h.h||(this.s=1,Ae(16),h=!1),this.o=this.o&&h,!h)fr(this.i,this.l,U,"[Invalid Chunked Response]"),Vn(this),ci(this);else if(0<U.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),tl(Se),Se.M=!0,Ae(11))}}else fr(this.i,this.l,U,null),Xa(this,U);Te==4&&Vn(this),this.o&&!this.J&&(Te==4?ih(this.j,this):(this.o=!1,js(this)))}else Oy(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),Vn(this),ci(this)}}}catch{}finally{}};function Pd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function vy(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Ka:(h=Number(u.substring(h,p)),isNaN(h)?Cd:(p+=1,p+h>u.length?Ka:(u=u.slice(p,p+h),o.C=p+h,u)))}an.prototype.cancel=function(){this.J=!0,Vn(this)};function js(o){o.S=Date.now()+o.I,Rd(o,o.I)}function Rd(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ai(w(o.ba,o),u)}function qa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}an.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(py(this.i,this.A),this.L!=2&&(oi(),Ae(17)),Vn(this),this.s=2,ci(this)):Rd(this,this.S-o)};function ci(o){o.j.G==0||o.J||ih(o.j,o)}function Vn(o){qa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,kd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Xa(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Ja(h.h,o))){if(!o.K&&Ja(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Us(h),Ms(h);else break e;el(h),Ae(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=ai(w(h.Za,h),6e3));if(1>=Ld(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wn(h,11)}else if((o.K||h.g==o)&&Us(h),!m(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let X=P[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Se=X[3];Se!=null&&(h.la=Se,h.j.info("VER="+h.la));const Te=X[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const mr=X[5];mr!=null&&typeof mr=="number"&&0<mr&&(p=1.5*mr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const at=o.g;if(at){const Fs=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var O=p.h;O.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ya(O,O.h),O.h=null))}if(p.D){const nl=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(p.ya=nl,te(p.I,p.D,nl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var U=o;if(p.qa=ah(p,p.J?p.ia:null,p.W),U.K){Dd(p.h,U);var Z=U,we=p.L;we&&(Z.I=we),Z.B&&(qa(Z),js(Z)),p.g=U}else nh(p);0<h.i.length&&zs(h)}else X[0]!="stop"&&X[0]!="close"||Wn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Wn(h,7):Za(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}oi(4)}catch{}}var yy=class{constructor(o,u){this.g=o,this.map=u}};function Ad(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Od(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ld(o){return o.h?1:o.g?o.g.size:0}function Ja(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ya(o,u){o.g?o.g.add(u):o.h=u}function Dd(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ad.prototype.cancel=function(){if(this.i=Md(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Md(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return R(o.i)}function xy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function wy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function zd(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=wy(o),p=xy(o),P=p.length,O=0;O<P;O++)u.call(void 0,p[O],h&&h[O],o)}var Ud=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _y(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),P=null;if(0<=p){var O=o[h].substring(0,p);P=o[h].substring(p+1)}else O=o[h];u(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,Ps(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.s),this.l=o.l;var u=o.i,h=new hi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Fd(this,h),this.m=o.m}else o&&(u=String(o).match(Ud))?(this.h=!1,Ps(this,u[1]||"",!0),this.o=ui(u[2]||""),this.g=ui(u[3]||"",!0),Rs(this,u[4]),this.l=ui(u[5]||"",!0),Fd(this,u[6]||"",!0),this.m=ui(u[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(di(u,$d,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(di(u,$d,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(di(h,h.charAt(0)=="/"?Ey:by,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",di(h,Ty)),o.join("")};function Mt(o){return new Hn(o)}function Ps(o,u,h){o.j=h?ui(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Fd(o,u,h){u instanceof hi?(o.i=u,Iy(o.i,o.h)):(h||(u=di(u,Sy)),o.i=new hi(u,o.h))}function te(o,u,h){o.i.set(u,h)}function As(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ui(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function di(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,ky),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ky(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $d=/[#\/\?@]/g,by=/[#\?:]/g,Ey=/[#\?]/g,Sy=/[#\?@]/g,Ty=/#/g;function hi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&_y(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}e=hi.prototype,e.add=function(o,u){ln(this),this.i=null,o=pr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Bd(o,u){ln(o),u=pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Vd(o,u){return ln(o),u=pr(o,u),o.g.has(u)}e.forEach=function(o,u){ln(this),this.g.forEach(function(h,p){h.forEach(function(P){o.call(u,P,p,this)},this)},this)},e.na=function(){ln(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const P=o[p];for(let O=0;O<P.length;O++)h.push(u[p])}return h},e.V=function(o){ln(this);let u=[];if(typeof o=="string")Vd(this,o)&&(u=u.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},e.set=function(o,u){return ln(this),this.i=null,o=pr(this,o),Vd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Hd(o,u,h){Bd(o,u),0<h.length&&(o.i=null,o.g.set(pr(o,u),R(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const O=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var P=O;U[p]!==""&&(P+="="+encodeURIComponent(String(U[p]))),o.push(P)}}return this.i=o.join("&")};function pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Iy(o,u){u&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(h,p){var P=p.toLowerCase();p!=P&&(Bd(this,p),Hd(this,P,h))},o)),o.j=u}function Ny(o,u){const h=new li;if(c.Image){const p=new Image;p.onload=C(cn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=C(cn,h,"TestLoadImage: error",!1,u,p),p.onabort=C(cn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=C(cn,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Cy(o,u){const h=new li,p=new AbortController,P=setTimeout(()=>{p.abort(),cn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(P),O.ok?cn(h,"TestPingServer: ok",!0,u):cn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),cn(h,"TestPingServer: error",!1,u)})}function cn(o,u,h,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(h)}catch{}}function jy(){this.g=new uy}function Py(o,u,h){const p=h||"";try{zd(o,function(P,O){let U=P;f(P)&&(U=Ua(P)),u.push(p+O+"="+encodeURIComponent(U))})}catch(P){throw u.push(p+"type="+encodeURIComponent("_badmap")),P}}function Os(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Os,Fa),Os.prototype.g=function(){return new Ls(this.l,this.j)},Os.prototype.i=function(o){return function(){return o}}({});function Ls(o,u){Ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ls,Ee),e=Ls.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,pi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?fi(this):pi(this),this.readyState==3&&Wd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,fi(this))},e.Qa=function(o){this.g&&(this.response=o,fi(this))},e.ga=function(){this.g&&fi(this)};function fi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,pi(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function pi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kd(o){let u="";return M(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Qa(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Kd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function de(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(de,Ee);var Ry=/^https?$/i,Ay=["POST","PUT"];e=de.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wa.g(),this.v=this.o?bd(this.o):bd(Wa),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){Gd(this,O);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)h.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())h.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ay,u,void 0))||p||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of h)this.g.setRequestHeader(O,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jd(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){Gd(this,O)}};function Gd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,qd(o),Ds(o)}function qd(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),Ds(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ds(this,!0)),de.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Xd(this):this.bb())},e.bb=function(){Xd(this)};function Xd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||zt(o)!=4||o.Z()!=2)){if(o.u&&zt(o)==4)xd(o.Ea,0,o);else if(Re(o,"readystatechange"),zt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=U===0){var P=String(o.D).match(Ud)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),p=!Ry.test(P?P.toLowerCase():"")}h=p}if(h)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var O=2<zt(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",qd(o)}}finally{Ds(o)}}}}function Ds(o,u){if(o.g){Jd(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Re(o,"ready");try{h.onreadystatechange=p}catch{}}}function Jd(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function zt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),cy(u)}};function Yd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Oy(o){const u={};o=(o.g&&2<=zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(m(o[p]))continue;var h=I(o[p]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=u[P]||[];u[P]=O,O.push(h)}_(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Qd(o){this.Aa=0,this.i=[],this.j=new li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,o),this.cb=gi("retryDelaySeedMs",1e4,o),this.Wa=gi("forwardChannelMaxRetries",2,o),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ad(o&&o.concurrentRequestLimit),this.Da=new jy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Qd.prototype,e.la=8,e.G=1,e.connect=function(o,u,h,p){Ae(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ah(this,null,this.W),zs(this)};function Za(o){if(Zd(o),o.G==3){var u=o.U++,h=Mt(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),mi(o,h),u=new an(o,o.j,u),u.L=2,u.v=As(Mt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=lh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),js(u)}oh(o)}function Ms(o){o.g&&(tl(o),o.g.cancel(),o.g=null)}function Zd(o){Ms(o),o.u&&(c.clearTimeout(o.u),o.u=null),Us(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zs(o){if(!Od(o.h)&&!o.s){o.s=!0;var u=o.Ga;Rt||W(),F||(Rt(),F=!0),V.add(u,o),o.B=0}}function Ly(o,u){return Ld(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ai(w(o.Ga,o,u),sh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new an(this,this.j,o);let O=this.o;if(this.S&&(O?(O=g(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=th(this,P,u),h=Mt(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),mi(this,h),O&&(this.O?u="headers="+encodeURIComponent(String(Kd(O)))+"&"+u:this.m&&Qa(h,this.m,O)),Ya(this.h,P),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),P.T=!0,Ga(P,h,null)):Ga(P,h,u),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Od(this.h)||eh(this))};function eh(o,u){var h;u?h=u.l:h=o.U++;const p=Mt(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),mi(o,p),o.m&&o.o&&Qa(p,o.m,o.o),h=new an(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=th(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ya(o.h,h),Ga(h,p,u)}function mi(o,u){o.H&&M(o.H,function(h,p){te(u,p,h)}),o.l&&zd({},function(h,p){te(u,p,h)})}function th(o,u,h){h=Math.min(o.i.length,h);var p=o.l?w(o.l.Na,o.l,o):null;e:{var P=o.i;let O=-1;for(;;){const U=["count="+h];O==-1?0<h?(O=P[0].g,U.push("ofs="+O)):O=0:U.push("ofs="+O);let Z=!0;for(let we=0;we<h;we++){let X=P[we].g;const Se=P[we].map;if(X-=O,0>X)O=Math.max(0,P[we].g-100),Z=!1;else try{Py(Se,U,"req"+X+"_")}catch{p&&p(Se)}}if(Z){p=U.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function nh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Rt||W(),F||(Rt(),F=!0),V.add(u,o),o.v=0}}function el(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ai(w(o.Fa,o),sh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ai(w(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Ms(this),rh(this))};function tl(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new an(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Mt(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),mi(o,u),o.m&&o.o&&Qa(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=As(Mt(u)),h.m=null,h.P=!0,jd(h,o)}e.Za=function(){this.C!=null&&(this.C=null,Ms(this),el(this),Ae(19))};function Us(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ih(o,u){var h=null;if(o.g==u){Us(o),tl(o),o.g=null;var p=2}else if(Ja(o.h,u))h=u.D,Dd(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;p=Va(),Re(p,new Id(p,h)),zs(o)}else nh(o);else if(P=u.s,P==3||P==0&&0<u.X||!(p==1&&Ly(o,u)||p==2&&el(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),P){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function sh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Wn(o,u){if(o.j.info("Error code "+u),u==2){var h=w(o.fb,o),p=o.Xa;const P=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ps(p,"https"),As(p),P?Ny(p.toString(),h):Cy(p.toString(),h)}else Ae(2);o.G=0,o.l&&o.l.sa(u),oh(o),Zd(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function oh(o){if(o.G=0,o.ka=[],o.l){const u=Md(o.h);(u.length!=0||o.i.length!=0)&&(A(o.ka,u),A(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function ah(o,u,h){var p=h instanceof Hn?Mt(h):new Hn(h);if(p.g!="")u&&(p.g=u+"."+p.g),Rs(p,p.s);else{var P=c.location;p=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var O=new Hn(null);p&&Ps(O,p),u&&(O.g=u),P&&Rs(O,P),h&&(O.l=h),p=O}return h=o.D,u=o.ya,h&&u&&te(p,h,u),te(p,"VER",o.la),mi(o,p),p}function lh(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new de(new Os({eb:h})):new de(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}e=ch.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function et(o,u){Ee.call(this),this.g=new Qd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!m(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!m(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new gr(this)}N(et,Ee),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Za(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ua(o),o=h);u.i.push(new yy(u.Ya++,o)),u.G==3&&zs(u)},et.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,et.aa.N.call(this)};function uh(o){$a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}N(uh,$a);function dh(){Ba.call(this),this.status=1}N(dh,Ba);function gr(o){this.g=o}N(gr,ch),gr.prototype.ua=function(){Re(this.g,"a")},gr.prototype.ta=function(o){Re(this.g,new uh(o))},gr.prototype.sa=function(o){Re(this.g,new dh)},gr.prototype.ra=function(){Re(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,my.COMPLETE="complete",dy.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const lp="@firebase/firestore";/**
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
 */let Ss="10.14.0";/**
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
 */const Xr=new Yu("@firebase/firestore");function ht(e,...t){if(Xr.logLevel<=J.DEBUG){const n=t.map(cd);Xr.debug(`Firestore (${Ss}): ${e}`,...n)}}function $v(e,...t){if(Xr.logLevel<=J.ERROR){const n=t.map(cd);Xr.error(`Firestore (${Ss}): ${e}`,...n)}}function fb(e,...t){if(Xr.logLevel<=J.WARN){const n=t.map(cd);Xr.warn(`Firestore (${Ss}): ${e}`,...n)}}function cd(e){if(typeof e=="string")return e;try{/**
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
 */function ud(e="Unexpected state"){const t=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+e;throw $v(t),new Error(t)}function Bi(e,t){e||ud()}/**
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
 */const Be={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ve extends Ct{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class gb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mb{constructor(t){this.t=t,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Bi(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let s=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vi,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vi)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Bi(typeof r.accessToken=="string"),new Bv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Bi(t===null||typeof t=="string"),new Le(t)}}class vb{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yb{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new vb(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wb{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Bi(this.o===void 0);const r=s=>{s.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,ht("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Bi(typeof n.token=="string"),this.R=n.token,new xb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function _b(e){return e.name==="IndexedDbTransactionError"}class sa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sa&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */new Fv([4294967295,4294967295],0);function Ml(){return typeof document<"u"?document:null}/**
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
 */class kb{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class dd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,c=new dd(t,n,a,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(Be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var up,dp;(dp=up||(up={})).ea="default",dp.Cache="cache";/**
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
 */function bb(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const hp=new Map;function Eb(e,t,n,r){if(t===!0&&r===!0)throw new Ve(Be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Sb(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ud()}function Tb(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(Be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sb(e);throw new Ve(Be.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class fp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(Be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(Be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Eb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bb((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(Be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ve(Be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pb;switch(r.type){case"firstParty":return new yb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ve(Be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hp.get(n);r&&(ht("ComponentProvider","Removing Datastore"),hp.delete(n),r.terminate())}(this),Promise.resolve()}}function Ib(e,t,n,r={}){var i;const s=(e=Tb(e,Vv))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&fb("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Le.MOCK_USER;else{c=ev(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Ve(Be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Le(f)}e._authCredentials=new gb(new Bv(c,d))}}/**
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
 */class pp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kb(this,"async_queue_retry"),this.Vu=()=>{const r=Ml();r&&ht("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Ml();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Vi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!_b(t))throw t;ht("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $v("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=dd.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ud()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Nb extends Vv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new pp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new pp(t),this._firestoreClient=void 0,await t}}}function Cb(e,t){const n=typeof e=="object"?e:Zu(),r=typeof e=="string"?e:"(default)",i=Ia(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ym("firestore");s&&Ib(i,...s)}return i}(function(t,n=!0){(function(i){Ss=i})(dr),or(new Dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Nb(new mb(r.getProvider("auth-internal")),new wb(r.getProvider("app-check-internal")),function(f,k){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Ve(Be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(f.options.projectId,k)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),St(lp,"4.7.3",t),St(lp,"4.7.3","esm2017")})();/**
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
 */const Hv="firebasestorage.googleapis.com",jb="storageBucket",Pb=2*60*1e3,Rb=10*60*1e3;/**
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
 */class Pt extends Ct{constructor(t,n,r=0){super(zl(t),`Firebase Storage: ${n} (${zl(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return zl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nt||(Nt={}));function zl(e){return"storage/"+e}function Ab(){const e="An unknown error occurred, please check the error payload for server response.";return new Pt(Nt.UNKNOWN,e)}function Ob(){return new Pt(Nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lb(){return new Pt(Nt.CANCELED,"User canceled the upload/download.")}function Db(e){return new Pt(Nt.INVALID_URL,"Invalid URL '"+e+"'.")}function Mb(e){return new Pt(Nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function gp(e){return new Pt(Nt.INVALID_ARGUMENT,e)}function Wv(){return new Pt(Nt.APP_DELETED,"The Firebase app was deleted.")}function zb(e){return new Pt(Nt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ft{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ft.makeFromUrl(t,n)}catch{return new ft(t,"")}if(r.path==="")return r;throw Mb(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),d={bucket:1,path:3};function f(j){j.path_=decodeURIComponent(j.path)}const k="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",C=new RegExp(`^https?://${y}/${k}/b/${i}/o${w}`,"i"),N={bucket:1,path:3},R=n===Hv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${A}`,"i"),v=[{regex:c,indices:d,postModify:s},{regex:C,indices:N,postModify:f},{regex:E,indices:{bucket:1,path:2},postModify:f}];for(let j=0;j<v.length;j++){const D=v[j],M=D.regex.exec(t);if(M){const _=M[D.indices.bucket];let g=M[D.indices.path];g||(g=""),r=new ft(_,g),D.postModify(r);break}}if(r==null)throw Db(t);return r}}class Ub{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Fb(e,t,n){let r=1,i=null,s=null,a=!1,c=0;function d(){return c===2}let f=!1;function k(...A){f||(f=!0,t.apply(null,A))}function y(A){i=setTimeout(()=>{i=null,e(C,d())},A)}function w(){s&&clearTimeout(s)}function C(A,...E){if(f){w();return}if(A){w(),k.call(null,A,...E);return}if(d()||a){w(),k.call(null,A,...E);return}r<64&&(r*=2);let v;c===1?(c=2,v=0):v=(r+Math.random())*1e3,y(v)}let N=!1;function R(A){N||(N=!0,w(),!f&&(i!==null?(A||(c=2),clearTimeout(i),y(0)):A||(c=1)))}return y(0),s=setTimeout(()=>{a=!0,R(!0)},n),R}function $b(e){e(!1)}/**
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
 */function Bb(e){return e!==void 0}function mp(e,t,n,r){if(r<t)throw gp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw gp(`Invalid value for '${e}'. Expected ${n} or less.`)}function Vb(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var oa;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(oa||(oa={}));/**
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
 */function Hb(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class Wb{constructor(t,n,r,i,s,a,c,d,f,k,y,w=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=k,this.connectionFactory_=y,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new oo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=c=>{const d=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const c=s.getErrorCode()===oa.NO_ERROR,d=s.getStatus();if(!c||Hb(d,this.additionalRetryCodes_)&&this.retry){const k=s.getErrorCode()===oa.ABORT;r(!1,new oo(!1,null,k));return}const f=this.successCodes_.indexOf(d)!==-1;r(!0,new oo(f,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());Bb(d)?s(d):s()}catch(d){a(d)}else if(c!==null){const d=Ab();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(i.canceled){const d=this.appDelete_?Wv():Lb();a(d)}else{const d=Ob();a(d)}};this.canceled_?n(!1,new oo(!1,null,!0)):this.backoffId_=Fb(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&$b(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Kb(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Gb(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function qb(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Xb(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Jb(e,t,n,r,i,s,a=!0){const c=Vb(e.urlParams),d=e.url+c,f=Object.assign({},e.headers);return qb(f,t),Kb(f,n),Gb(f,s),Xb(f,r),new Wb(d,e.method,f,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}/**
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
 */function Yb(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Qb(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class aa{constructor(t,n){this._service=t,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new aa(t,n)}get root(){const t=new ft(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qb(this._location.path)}get storage(){return this._service}get parent(){const t=Yb(this._location.path);if(t===null)return null;const n=new ft(this._location.bucket,t);return new aa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw zb(t)}}function vp(e,t){const n=t==null?void 0:t[jb];return n==null?null:ft.makeFromBucketSpec(n,e)}function Zb(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:ev(i,e.app.options.projectId))}class eE{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Hv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pb,this._maxUploadRetryTime=Rb,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=vp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,t):this._bucket=vp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){mp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){mp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new aa(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new Ub(Wv());{const a=Jb(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const yp="@firebase/storage",xp="0.13.2";/**
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
 */const Kv="storage";function tE(e=Zu(),t){e=yt(e);const r=Ia(e,Kv).getImmediate({identifier:t}),i=Ym("storage");return i&&nE(r,...i),r}function nE(e,t,n,r={}){Zb(e,t,n,r)}function rE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new eE(n,r,i,t,dr)}function iE(){or(new Dn(Kv,rE,"PUBLIC").setMultipleInstances(!0)),St(yp,xp,""),St(yp,xp,"esm2017")}iE();const sE={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},hd=rv(sE),Si=cb(hd);Cb(hd);tE(hd);const Gv=L.createContext(void 0),oE=({children:e})=>{const[t,n]=L.useState(null),[r,i]=L.useState(!0),[s,a]=L.useState(null);L.useEffect(()=>{const C=Y_(Si,N=>{n(N),i(!1)});return()=>C()},[]);const w={user:t,loading:r,error:s,login:async(C,N)=>{try{a(null),i(!0),await K_(Si,C,N)}catch(R){const A=Ul(R.code);throw a(A),new Error(A)}finally{i(!1)}},register:async(C,N,R)=>{try{a(null),i(!0);const{user:A}=await W_(Si,C,N);R&&await q_(A,{displayName:R})}catch(A){const E=Ul(A.code);throw a(E),new Error(E)}finally{i(!1)}},logout:async()=>{try{a(null),await Q_(Si)}catch(C){throw a("Error al cerrar sesión"),C}},resetPassword:async C=>{try{a(null),await H_(Si,C)}catch(N){const R=Ul(N.code);throw a(R),new Error(R)}},clearError:()=>a(null)};return l.jsx(Gv.Provider,{value:w,children:e})},qv=()=>{const e=L.useContext(Gv);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function Ul(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const yr=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=qv(),i=rn();return r?l.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[l.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),l.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?l.jsx(l.Fragment,{children:e}):l.jsx(wo,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(e,t)=>{const n=L.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:d,...f},k)=>L.createElement("svg",{ref:k,...aE,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${lE(e)}`,c].join(" "),...f},[...t.map(([y,w])=>L.createElement(y,w)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=H("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=H("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=H("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=H("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
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
 */const Wc=H("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=H("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
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
 */const hE=H("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=H("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=H("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=H("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=H("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=H("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=H("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=H("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=H("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=H("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=H("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=H("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=H("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=H("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=H("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=H("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=H("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=H("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=H("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=H("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=H("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=H("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=H("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=H("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=H("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=H("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=H("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),TE=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:qt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:Jc,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:Pa,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:Jr,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:_E,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:SE,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return l.jsxs("div",{className:"landing-page",children:[l.jsxs("nav",{className:"navbar",children:[l.jsxs("div",{className:"nav-brand",children:[l.jsx(qt,{size:32}),l.jsx("span",{children:"Sistema Courier"})]}),l.jsxs("div",{className:"nav-links",children:[l.jsx("a",{href:"#features",children:"Características"}),l.jsx("a",{href:"#pricing",children:"Precios"}),l.jsx(je,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),l.jsx(je,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),l.jsxs("section",{className:"hero",children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),l.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),l.jsxs("div",{className:"hero-buttons",children:[l.jsxs(je,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",l.jsx(la,{size:20})]}),l.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),l.jsxs("div",{className:"hero-trust",children:[l.jsx("span",{children:"Confiado por +100 empresas de courier"}),l.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>l.jsx(qc,{size:16,fill:"#f59e0b"},r))})]})]}),l.jsx("div",{className:"hero-image",children:l.jsxs("div",{className:"dashboard-preview",children:[l.jsx("div",{className:"preview-header",children:l.jsxs("div",{className:"dots",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})}),l.jsxs("div",{className:"preview-content",children:[l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-chart"})]})]})})]}),l.jsxs("section",{id:"features",className:"features",children:[l.jsx("h2",{children:"Todo lo que necesitas para operar"}),l.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),l.jsx("div",{className:"features-grid",children:t.map((n,r)=>l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx(n.icon,{size:28})}),l.jsx("h3",{children:n.title}),l.jsx("p",{children:n.description})]},r))})]}),l.jsxs("section",{id:"pricing",className:"pricing",children:[l.jsx("h2",{children:"Planes simples y transparentes"}),l.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),l.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>l.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&l.jsx("span",{className:"popular-badge",children:"Más Popular"}),l.jsx("h3",{children:n.name}),l.jsx("p",{className:"plan-description",children:n.description}),l.jsxs("div",{className:"plan-price",children:[n.priceLabel&&l.jsx("span",{className:"price-label",children:n.priceLabel}),l.jsxs("span",{className:"price",children:["$",n.price]}),l.jsx("span",{className:"period",children:"/mes"})]}),l.jsx("ul",{className:"plan-features",children:n.features.map((i,s)=>l.jsxs("li",{children:[l.jsx(Qn,{size:16})," ",i]},s))}),l.jsx(je,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),l.jsxs("section",{className:"cta",children:[l.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),l.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),l.jsxs(je,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",l.jsx(la,{size:24})]})]}),l.jsxs("footer",{className:"footer",children:[l.jsxs("div",{className:"footer-content",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx(qt,{size:28}),l.jsx("span",{children:"Sistema Courier"}),l.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Producto"}),l.jsx("a",{href:"#features",children:"Características"}),l.jsx("a",{href:"#pricing",children:"Precios"}),l.jsx("a",{href:"/docs",children:"Documentación"})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Empresa"}),l.jsx("a",{href:"/about",children:"Nosotros"}),l.jsx("a",{href:"/contact",children:"Contacto"}),l.jsx("a",{href:"/blog",children:"Blog"})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Legal"}),l.jsx("a",{href:"/privacy",children:"Privacidad"}),l.jsx("a",{href:"/terms",children:"Términos"})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),l.jsx("style",{children:`
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
      `})]})},IE=()=>{const e=sn(),[t,n]=L.useState(1),[r,i]=L.useState(!1),[s,a]=L.useState(""),[c,d]=L.useState("idle"),[f,k]=L.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),y=E=>{const{name:m,value:v}=E.target;if(k({...f,[m]:v}),a(""),m==="company_name"){const j=v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);k(D=>({...D,subdomain:j})),j.length>=3&&w(j)}if(m==="subdomain"){const j=v.toLowerCase().replace(/[^a-z0-9-]/g,"");k(D=>({...D,subdomain:j})),j.length>=3&&w(j)}},w=async E=>{d("checking");try{const v=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:E})})).json();d(v.available?"available":"taken")}catch{d("idle")}},C=()=>f.company_name.trim()?f.subdomain.length<3?(a("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(a("Este subdominio no está disponible"),!1):!0:(a("Ingresa el nombre de tu empresa"),!1),N=()=>f.admin_name.trim()?f.admin_email.includes("@")?f.password.length<8?(a("La contraseña debe tener al menos 8 caracteres"),!1):f.password!==f.confirm_password?(a("Las contraseñas no coinciden"),!1):!0:(a("Ingresa un email válido"),!1):(a("Ingresa tu nombre"),!1),R=()=>{t===1&&C()&&n(2)},A=async E=>{if(E.preventDefault(),!!N()){i(!0),a("");try{const m=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f.company_name,subdomain:f.subdomain,admin_email:f.admin_email,admin_password:f.password,admin_name:f.admin_name})}),v=await m.json();if(!m.ok)throw new Error(v.error||"Error al crear la cuenta");e(`/onboarding?tenant=${v.tenant.subdomain}`)}catch(m){a(m.message)}finally{i(!1)}}};return l.jsxs("div",{className:"register-page",children:[l.jsxs("div",{className:"register-container",children:[l.jsxs("div",{className:"register-brand",children:[l.jsxs(je,{to:"/",className:"brand-logo",children:[l.jsx(qt,{size:40}),l.jsx("span",{children:"Sistema Courier"})]}),l.jsxs("div",{className:"brand-content",children:[l.jsx("h2",{children:"Comienza tu prueba gratuita"}),l.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),l.jsxs("ul",{className:"brand-features",children:[l.jsxs("li",{children:[l.jsx(Qn,{size:20})," Configuración en minutos"]}),l.jsxs("li",{children:[l.jsx(Qn,{size:20})," Soporte incluido"]}),l.jsxs("li",{children:[l.jsx(Qn,{size:20})," Cancela cuando quieras"]})]})]})]}),l.jsxs("div",{className:"register-form-container",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h1",{children:"Crear cuenta"}),l.jsxs("p",{children:["Paso ",t," de 2"]})]}),l.jsxs("div",{className:"progress-bar",children:[l.jsx("div",{className:"progress-step active",children:"1"}),l.jsx("div",{className:"progress-line"}),l.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),s&&l.jsxs("div",{className:"error-message",children:[l.jsx(ds,{size:18}),s]}),l.jsx("form",{onSubmit:A,children:t===1?l.jsxs("div",{className:"form-step",children:[l.jsx("h3",{children:"Información de la empresa"}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Nombre de la empresa"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(ca,{size:20}),l.jsx("input",{type:"text",name:"company_name",value:f.company_name,onChange:y,placeholder:"Mi Empresa de Courier",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Tu subdominio"}),l.jsxs("div",{className:"input-wrapper subdomain-input",children:[l.jsx(Jr,{size:20}),l.jsx("input",{type:"text",name:"subdomain",value:f.subdomain,onChange:y,placeholder:"miempresa",required:!0}),l.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&l.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&l.jsxs("span",{className:"subdomain-status available",children:[l.jsx(Qn,{size:14})," Disponible"]}),c==="taken"&&l.jsxs("span",{className:"subdomain-status taken",children:[l.jsx(ds,{size:14})," No disponible"]})]}),l.jsxs("button",{type:"button",onClick:R,className:"btn-next",children:["Continuar ",l.jsx(la,{size:20})]})]}):l.jsxs("div",{className:"form-step",children:[l.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[l.jsx(Xv,{size:18})," Atrás"]}),l.jsx("h3",{children:"Tu cuenta de administrador"}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Tu nombre"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(EE,{size:20}),l.jsx("input",{type:"text",name:"admin_name",value:f.admin_name,onChange:y,placeholder:"Juan Pérez",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Email"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(pd,{size:20}),l.jsx("input",{type:"email",name:"admin_email",value:f.admin_email,onChange:y,placeholder:"juan@miempresa.com",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Contraseña"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Gc,{size:20}),l.jsx("input",{type:"password",name:"password",value:f.password,onChange:y,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Confirmar contraseña"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Gc,{size:20}),l.jsx("input",{type:"password",name:"confirm_password",value:f.confirm_password,onChange:y,placeholder:"Repite la contraseña",required:!0})]})]}),l.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),l.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",l.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",l.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),l.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",l.jsx(je,{to:"/login",children:"Iniciar sesión"})]})]})]}),l.jsx("style",{children:`
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
      `})]})},NE=()=>{const e=sn(),[t]=pw();t.get("tenant");const[n,r]=L.useState(1),[i,s]=L.useState(!1),[a,c]=L.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),d=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],f=w=>{var N;const C=(N=w.target.files)==null?void 0:N[0];C&&c({...a,logo:C,logo_preview:URL.createObjectURL(C)})},k=async()=>{s(!0);try{if(a.logo){const w=new FormData;w.append("logo",a.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:w})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:a.primary_color,contact_phone:a.company_phone,address:a.company_address})}),e("/dashboard")}catch(w){console.error("Error saving onboarding:",w)}finally{s(!1)}},y=()=>{e("/dashboard")};return l.jsxs("div",{className:"onboarding-wizard",children:[l.jsxs("div",{className:"wizard-container",children:[l.jsxs("div",{className:"wizard-header",children:[l.jsx(qt,{size:32,color:"#3b82f6"}),l.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),l.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),l.jsx("div",{className:"wizard-progress",children:[1,2,3].map(w=>l.jsx("div",{className:`progress-dot ${n>=w?"active":""}`,children:n>w?l.jsx(Qn,{size:16}):w},w))}),l.jsxs("div",{className:"wizard-content",children:[n===1&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(kp,{size:32})}),l.jsx("h2",{children:"Sube tu logo"}),l.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),l.jsx("div",{className:"logo-upload",children:a.logo_preview?l.jsxs("div",{className:"logo-preview",children:[l.jsx("img",{src:a.logo_preview,alt:"Logo preview"}),l.jsx("button",{onClick:()=>c({...a,logo:null,logo_preview:""}),children:"Cambiar"})]}):l.jsxs("label",{className:"upload-area",children:[l.jsx(kp,{size:40}),l.jsx("span",{children:"Arrastra o haz clic para subir"}),l.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),l.jsx("input",{type:"file",accept:"image/*",onChange:f})]})})]}),n===2&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(vE,{size:32})}),l.jsx("h2",{children:"Elige tus colores"}),l.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),l.jsx("div",{className:"color-picker",children:d.map(w=>l.jsx("button",{className:`color-option ${a.primary_color===w?"selected":""}`,style:{backgroundColor:w},onClick:()=>c({...a,primary_color:w}),children:a.primary_color===w&&l.jsx(Qn,{size:20})},w))}),l.jsx("div",{className:"color-preview",style:{backgroundColor:a.primary_color},children:l.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(_p,{size:32})}),l.jsx("h2",{children:"Información de contacto"}),l.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),l.jsxs("div",{className:"contact-form",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Teléfono (opcional)"}),l.jsx("input",{type:"tel",value:a.company_phone,onChange:w=>c({...a,company_phone:w.target.value}),placeholder:"+1 234 567 8900"})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Dirección (opcional)"}),l.jsx("input",{type:"text",value:a.company_address,onChange:w=>c({...a,company_address:w.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),l.jsxs("div",{className:"wizard-nav",children:[n>1?l.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[l.jsx(Xv,{size:20})," Atrás"]}):l.jsx("button",{onClick:y,className:"btn-skip",children:"Omitir configuración"}),n<3?l.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",l.jsx(la,{size:20})]}):l.jsxs("button",{onClick:k,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",l.jsx(_p,{size:20})]})]})]}),l.jsx("style",{children:`
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
      `})]})},CE=()=>{var E,m,v,j,D,M,_,g;const{tenant:e,isWhiteLabel:t}=ys(),{login:n,clearError:r}=qv(),i=sn(),s=rn(),[a,c]=L.useState(""),[d,f]=L.useState(""),[k,y]=L.useState(!1),[w,C]=L.useState(""),N=((m=(E=s.state)==null?void 0:E.from)==null?void 0:m.pathname)||"/dashboard",R=async x=>{x.preventDefault(),y(!0),C(""),r();try{await n(a,d),i(N,{replace:!0})}catch(S){C(S.message||"Error al iniciar sesión")}finally{y(!1)}},A=((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6";return l.jsxs("div",{className:"login-page",children:[l.jsxs("div",{className:"login-container",children:[l.jsx("div",{className:"login-logo",children:(j=e==null?void 0:e.branding)!=null&&j.logo_url?l.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):l.jsx("div",{className:"logo-placeholder",children:((M=(D=e==null?void 0:e.branding)==null?void 0:D.company_name)==null?void 0:M.charAt(0))||"C"})}),l.jsx("h1",{children:((_=e==null?void 0:e.branding)==null?void 0:_.company_name)||"Sistema Courier"}),((g=e==null?void 0:e.branding)==null?void 0:g.tagline)&&l.jsx("p",{className:"tagline",children:e.branding.tagline}),l.jsxs("form",{onSubmit:R,children:[w&&l.jsx("div",{className:"error-message",children:w}),l.jsxs("div",{className:"input-group",children:[l.jsx(pd,{size:20,className:"input-icon"}),l.jsx("input",{type:"email",placeholder:"Correo electrónico",value:a,onChange:x=>c(x.target.value),required:!0})]}),l.jsxs("div",{className:"input-group",children:[l.jsx(Gc,{size:20,className:"input-icon"}),l.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:x=>f(x.target.value),required:!0})]}),l.jsx("button",{type:"submit",className:"btn-login",disabled:k,style:{backgroundColor:A},children:k?"Iniciando sesión...":l.jsxs(l.Fragment,{children:[l.jsx(mE,{size:20}),"Iniciar Sesión"]})}),l.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&l.jsx("div",{className:"login-footer",children:l.jsxs("p",{children:["Powered by ",l.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),l.jsx("style",{children:`
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
      `})]})},jE=()=>{var R,A,E;const{tenant:e,isWhiteLabel:t}=ys(),n=((R=e==null?void 0:e.branding)==null?void 0:R.primary_color)||"#3b82f6",[r,i]=L.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[s,a]=L.useState([]),[c,d]=L.useState(!0);L.useEffect(()=>{f()},[e]);const f=async()=>{if(e)try{d(!0);const m="http://localhost:3001",j=await(await fetch(`${m}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(j);const M=await(await fetch(`${m}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();a(M)}catch(m){console.error("Error fetching dashboard data:",m)}finally{d(!1)}},k=m=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(m),y=m=>{const v=new Date(m),D=new Date().getTime()-v.getTime(),M=Math.floor(D/6e4);if(M<1)return"Hace un momento";if(M<60)return`Hace ${M} min`;const _=Math.floor(M/60);if(_<24)return`Hace ${_} hora${_>1?"s":""}`;const g=Math.floor(_/24);return`Hace ${g} día${g>1?"s":""}`},w=m=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[m]||m,C=m=>{switch(m){case"delivered":return l.jsx(Jv,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return l.jsx(Jc,{size:16,className:"status-icon warning"});case"assigned":case"processing":return l.jsx(qt,{size:16,className:"status-icon info"});default:return l.jsx(Yv,{size:16,className:"status-icon pending"})}},N=[{icon:qt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:Jc,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:Pa,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:Kc,label:"Ingresos Mes",value:k(r.monthlyRevenue),color:"#f59e0b"}];return l.jsxs("div",{className:"dashboard",children:[l.jsxs("header",{className:"dashboard-header",children:[l.jsx("div",{className:"header-left",children:(A=e==null?void 0:e.branding)!=null&&A.logo_url?l.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):l.jsx("span",{className:"header-title",children:((E=e==null?void 0:e.branding)==null?void 0:E.company_name)||"Sistema Courier"})}),l.jsxs("div",{className:"header-right",children:[l.jsx("span",{className:"user-name",children:"Admin"}),l.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),l.jsxs("main",{className:"dashboard-main",children:[l.jsx("div",{className:"stats-grid",children:N.map((m,v)=>l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",style:{backgroundColor:`${m.color}20`,color:m.color},children:l.jsx(m.icon,{size:24})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:c?"...":m.value}),l.jsx("div",{className:"stat-label",children:m.label})]})]},v))}),l.jsxs("div",{className:"dashboard-grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Paquetes Recientes"}),l.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),l.jsx("div",{className:"card-content",children:c?l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):s.length===0?l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):s.slice(0,4).map(m=>l.jsxs("div",{className:"package-item",children:[l.jsxs("div",{className:"package-info",children:[l.jsx("span",{className:"package-id",children:m.tracking_number}),l.jsx("span",{className:"package-client",children:m.client_name||"Sin cliente"})]}),l.jsxs("div",{className:"package-status",children:[C(m.status),l.jsx("span",{children:w(m.status)})]}),l.jsx("span",{className:"package-time",children:y(m.created_at)})]},m.id))})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Rendimiento"}),l.jsx(Xc,{size:20,style:{color:"#10b981"}})]}),l.jsxs("div",{className:"card-content performance-grid",children:[l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),l.jsx("span",{className:"perf-value success",children:"94%"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),l.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Incidentes"}),l.jsx("span",{className:"perf-value warning",children:"3"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),l.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&l.jsxs("div",{className:"trial-notice",children:[l.jsx(ds,{size:20}),l.jsx("span",{children:"Tu período de prueba termina pronto. "}),l.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),l.jsx("style",{children:`
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
      `})]})},PE=()=>{var m,v;const{tenant:e}=ys(),t=sn(),[n,r]=L.useState([]),[i,s]=L.useState(!0),[a,c]=L.useState(""),[d,f]=L.useState(""),[k,y]=L.useState(1),[w,C]=L.useState(0),N=20;L.useEffect(()=>{e&&R()},[e,k,a,d]);const R=async()=>{var j;if(e)try{s(!0);const D="http://localhost:3001",M=new URLSearchParams({page:k.toString(),limit:N.toString(),...a&&{search:a},...d&&{status:d}}),g=await(await fetch(`${D}/api/packages?${M}`,{headers:{"X-Tenant-ID":e.id}})).json();r(g.packages||[]),C(((j=g.pagination)==null?void 0:j.total)||0)}catch(D){console.error("Error fetching packages:",D)}finally{s(!1)}},A=j=>{const M={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[j]||{label:j,color:"#6b7280"};return l.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${M.color}20`,color:M.color},children:M.label})},E=j=>new Date(j).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return l.jsxs("div",{className:"packages-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Paquetes"}),l.jsxs("p",{children:[w," paquetes en total"]})]}),l.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[l.jsx(hs,{size:20}),"Nuevo Paquete"]})]}),l.jsxs("div",{className:"filters-bar",children:[l.jsxs("div",{className:"search-box",children:[l.jsx(ny,{size:20}),l.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:a,onChange:j=>{c(j.target.value),y(1)}})]}),l.jsxs("select",{value:d,onChange:j=>{f(j.target.value),y(1)},className:"status-filter",children:[l.jsx("option",{value:"",children:"Todos los estados"}),l.jsx("option",{value:"pending",children:"Pendiente"}),l.jsx("option",{value:"processing",children:"Procesando"}),l.jsx("option",{value:"assigned",children:"Asignado"}),l.jsx("option",{value:"in_transit",children:"En tránsito"}),l.jsx("option",{value:"out_for_delivery",children:"En reparto"}),l.jsx("option",{value:"delivered",children:"Entregado"}),l.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),l.jsx("div",{className:"table-container",children:i?l.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(qt,{size:48}),l.jsx("h3",{children:"No hay paquetes"}),l.jsx("p",{children:"Crea tu primer paquete para comenzar"}),l.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[l.jsx(hs,{size:20}),"Crear Paquete"]})]}):l.jsxs("table",{className:"packages-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Tracking"}),l.jsx("th",{children:"Destinatario"}),l.jsx("th",{children:"Dirección"}),l.jsx("th",{children:"Estado"}),l.jsx("th",{children:"Fecha"}),l.jsx("th",{children:"Acciones"})]})}),l.jsx("tbody",{children:n.map(j=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("span",{className:"tracking-number",children:j.tracking_number})}),l.jsx("td",{children:j.recipient_name}),l.jsx("td",{className:"address-cell",children:j.recipient_address}),l.jsx("td",{children:A(j.status)}),l.jsx("td",{children:E(j.created_at)}),l.jsx("td",{children:l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${j.id}`),title:"Ver detalle",children:l.jsx(fE,{size:16})}),l.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${j.id}/edit`),title:"Editar",children:l.jsx(ey,{size:16})})]})})]},j.id))})]})}),!i&&w>N&&l.jsxs("div",{className:"pagination",children:[l.jsx("button",{disabled:k===1,onClick:()=>y(k-1),children:"Anterior"}),l.jsxs("span",{children:["Página ",k," de ",Math.ceil(w/N)]}),l.jsx("button",{disabled:k>=Math.ceil(w/N),onClick:()=>y(k+1),children:"Siguiente"})]}),l.jsx("style",{children:`
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
                    color: ${((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6"};
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
            `})]})},RE=()=>l.jsxs("div",{className:"loading-page",children:[l.jsxs("div",{className:"loading-container",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("h2",{children:"Cargando..."}),l.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),l.jsx("style",{children:`
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
      `})]}),AE=({message:e})=>l.jsxs("div",{className:"error-page",children:[l.jsxs("div",{className:"error-container",children:[l.jsx("div",{className:"error-icon",children:l.jsx(cE,{size:64})}),l.jsx("h1",{children:"No se pudo cargar"}),l.jsx("p",{className:"error-message",children:e}),l.jsxs("div",{className:"error-actions",children:[l.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),l.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),l.jsx("style",{children:`
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
      `})]}),OE=()=>{var S,I;const{tenant:e}=ys(),[t,n]=L.useState([]),[r,i]=L.useState(!0),[s,a]=L.useState(""),[c,d]=L.useState(!1),[f,k]=L.useState(null),[y,w]=L.useState(null),[C,N]=L.useState(""),[R,A]=L.useState(""),E=((S=e==null?void 0:e.plan)==null?void 0:S.id)==="enterprise",m=((I=e==null?void 0:e.branding)==null?void 0:I.primary_color)||"#3b82f6";L.useEffect(()=>{v()},[]);const v=async()=>{try{const b=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(b)}catch(T){console.error("Error fetching domains:",T)}finally{i(!1)}},j=async T=>{if(T.preventDefault(),!!s.trim()){d(!0),N("");try{const b=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:s})}),ge=await b.json();if(!b.ok)throw new Error(ge.error||"Error agregando dominio");n([...t,ge.domain]),k(ge.dns_instructions),a(""),A("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(b){N(b.message)}finally{d(!1)}}},D=async T=>{w(T),N("");try{const ge=await(await fetch(`/api/domains/${T}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ge.verified?(A("DNS verificado. El SSL se está configurando."),v()):N(ge.message)}catch{N("Error verificando DNS")}finally{w(null)}},M=async T=>{try{await fetch(`/api/domains/${T}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),A("Dominio establecido como principal"),v()}catch{N("Error estableciendo dominio principal")}},_=async T=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${T}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(b=>b.id!==T)),A("Dominio eliminado")}catch{N("Error eliminando dominio")}},g=T=>{navigator.clipboard.writeText(T),A("Copiado al portapapeles"),setTimeout(()=>A(""),2e3)},x=T=>{switch(T){case"active":return l.jsxs("span",{className:"badge success",children:[l.jsx(Jv,{size:14})," Activo"]});case"provisioning":return l.jsxs("span",{className:"badge warning",children:[l.jsx(Yv,{size:14})," Configurando SSL"]});case"pending":return l.jsxs("span",{className:"badge pending",children:[l.jsx(ds,{size:14})," Pendiente verificación"]});case"failed":return l.jsxs("span",{className:"badge danger",children:[l.jsx(ds,{size:14})," Error"]});default:return null}};return E?l.jsxs("div",{className:"white-label-settings",children:[l.jsxs("header",{className:"page-header",children:[l.jsx("h1",{children:"Configuración White Label"}),l.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),C&&l.jsx("div",{className:"alert error",children:C}),R&&l.jsx("div",{className:"alert success",children:R}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsxs("h3",{children:[l.jsx(Jr,{size:20})," Dominios"]})}),l.jsxs("div",{className:"card-content",children:[l.jsx("div",{className:"domains-list",children:t.map(T=>l.jsxs("div",{className:"domain-row",children:[l.jsxs("div",{className:"domain-info",children:[l.jsxs("div",{className:"domain-name",children:[T.is_primary&&l.jsx(qc,{size:16,className:"primary-star"}),T.domain,T.domain_type==="subdomain"&&l.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),x(T.ssl_status)]}),l.jsxs("div",{className:"domain-actions",children:[T.ssl_status==="pending"&&l.jsx("button",{onClick:()=>D(T.id),disabled:y===T.id,className:"btn-action",children:y===T.id?l.jsx(xE,{size:16,className:"spin"}):"Verificar DNS"}),T.ssl_status==="active"&&!T.is_primary&&l.jsxs("button",{onClick:()=>M(T.id),className:"btn-action",children:[l.jsx(qc,{size:16})," Hacer principal"]}),T.domain_type==="custom"&&l.jsx("button",{onClick:()=>_(T.id),className:"btn-delete",children:l.jsx(kE,{size:16})}),l.jsx("a",{href:`https://${T.domain}`,target:"_blank",className:"btn-action",children:l.jsx(fd,{size:16})})]})]},T.id))}),l.jsxs("form",{onSubmit:j,className:"add-domain-form",children:[l.jsx("input",{type:"text",placeholder:"miempresa.com",value:s,onChange:T=>a(T.target.value)}),l.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[l.jsx(hs,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),f&&l.jsxs("div",{className:"card instructions-card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Configuración DNS"})}),l.jsxs("div",{className:"card-content",children:[l.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),l.jsxs("div",{className:"dns-record",children:[l.jsxs("div",{className:"dns-field",children:[l.jsx("label",{children:"Tipo"}),l.jsx("span",{children:f.type})]}),l.jsxs("div",{className:"dns-field",children:[l.jsx("label",{children:"Nombre"}),l.jsx("span",{children:f.name}),l.jsx("button",{onClick:()=>g(f.name),className:"copy-btn",children:l.jsx(wp,{size:14})})]}),l.jsxs("div",{className:"dns-field wide",children:[l.jsx("label",{children:"Valor"}),l.jsx("span",{children:f.value}),l.jsx("button",{onClick:()=>g(f.value),className:"copy-btn",children:l.jsx(wp,{size:14})})]})]}),l.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),l.jsx("style",{children:bp(m)})]}):l.jsxs("div",{className:"white-label-settings",children:[l.jsxs("div",{className:"upgrade-notice",children:[l.jsx(Jr,{size:48}),l.jsx("h2",{children:"White Label disponible en Enterprise"}),l.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),l.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),l.jsx("style",{children:bp(m)})]})},bp=e=>`
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
`,LE=()=>{const[e,t]=L.useState(null),[n,r]=L.useState(!0);L.useEffect(()=>{i()},[]);const i=async()=>{try{const d=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(d)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return l.jsx("div",{className:"loading",children:"Cargando dashboard..."});const s=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),a=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return l.jsxs("div",{className:"super-admin-dashboard",children:[l.jsxs("header",{className:"dashboard-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Super Admin Dashboard"}),l.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),l.jsx("div",{className:"header-actions",children:l.jsxs(je,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[l.jsx(hs,{size:20}),"Nuevo Tenant"]})})]}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card primary",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(ca,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),l.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),l.jsxs("div",{className:"stat-card success",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(Pa,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),l.jsx("div",{className:"stat-label",children:"Activas"}),l.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),l.jsxs("div",{className:"stat-card warning",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(Kc,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:s((e==null?void 0:e.summary.mrr)||0)}),l.jsx("div",{className:"stat-label",children:"MRR"}),l.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),l.jsxs("div",{className:"stat-card danger",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(bE,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),l.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),l.jsxs("div",{className:"content-grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Empresas Recientes"}),l.jsx(je,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),l.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>l.jsxs("div",{className:"tenant-row",children:[l.jsx("div",{className:"tenant-avatar",children:c.logo_url?l.jsx("img",{src:c.logo_url,alt:c.name}):l.jsx("span",{children:c.name.charAt(0)})}),l.jsxs("div",{className:"tenant-info",children:[l.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),l.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),l.jsx("div",{className:"tenant-status",style:{color:a(c.status)},children:c.status}),l.jsx("div",{className:"tenant-plan",children:c.plan_id}),l.jsx(je,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:l.jsx(Qv,{size:18})})]},c.id))})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Ingresos Mensuales"}),l.jsx(Xc,{size:20,className:"success"})]}),l.jsx("div",{className:"card-content chart-container",children:l.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,d)=>l.jsxs("div",{className:"chart-bar",children:[l.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),l.jsx("span",{className:"bar-label",children:c.month}),l.jsx("span",{className:"bar-value",children:s(c.revenue)})]},d))})})]}),l.jsxs("div",{className:"card small",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Por Plan"})}),l.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,d)=>l.jsxs("div",{className:"distribution-row",children:[l.jsx("span",{className:"dist-label",children:c.plan_id}),l.jsx("div",{className:"dist-bar",children:l.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][d%4]}})}),l.jsx("span",{className:"dist-count",children:c.count})]},d))})]}),l.jsxs("div",{className:"card small",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Acciones Rápidas"})}),l.jsxs("div",{className:"card-content quick-actions",children:[l.jsxs(je,{to:"/super-admin/tenants",className:"quick-action",children:[l.jsx(ca,{size:24}),l.jsx("span",{children:"Gestionar Empresas"})]}),l.jsxs(je,{to:"/super-admin/subscriptions",className:"quick-action",children:[l.jsx(Kc,{size:24}),l.jsx("span",{children:"Ver Suscripciones"})]}),l.jsxs(je,{to:"/super-admin/plans",className:"quick-action",children:[l.jsx(Xc,{size:24}),l.jsx("span",{children:"Configurar Planes"})]})]})]})]}),l.jsx("style",{children:`
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
      `})]})},DE=()=>{const e=sn(),[t,n]=L.useState([]),[r,i]=L.useState({page:1,limit:20,total:0,pages:0}),[s,a]=L.useState(!0),[c,d]=L.useState(""),[f,k]=L.useState(""),[y,w]=L.useState(null);L.useEffect(()=>{C()},[r.page,f]);const C=async()=>{try{a(!0);const v=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...f&&{status:f},...c&&{search:c}}),D=await(await fetch(`/api/super-admin/tenants?${v}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(D.tenants),i(D.pagination)}catch(v){console.error("Error fetching tenants:",v)}finally{a(!1)}},N=v=>{v.preventDefault(),i({...r,page:1}),C()},R=async v=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${v}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),C()}catch(j){console.error("Error suspending tenant:",j)}},A=async v=>{try{await fetch(`/api/super-admin/tenants/${v}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),C()}catch(j){console.error("Error activating tenant:",j)}},E=v=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[v]||"bg-blue"}`,m=v=>new Date(v).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return l.jsxs("div",{className:"tenants-management",children:[l.jsxs("header",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx(je,{to:"/super-admin",className:"back-link",children:l.jsx(Wc,{size:20})}),l.jsxs("div",{children:[l.jsx("h1",{children:"Gestión de Empresas"}),l.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),l.jsxs(je,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[l.jsx(hs,{size:20}),"Nueva Empresa"]})]}),l.jsxs("div",{className:"filters-bar",children:[l.jsxs("form",{onSubmit:N,className:"search-box",children:[l.jsx(ny,{size:20}),l.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:v=>d(v.target.value)})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx(pE,{size:18}),l.jsxs("select",{value:f,onChange:v=>k(v.target.value),children:[l.jsx("option",{value:"",children:"Todos los estados"}),l.jsx("option",{value:"active",children:"Activos"}),l.jsx("option",{value:"trial",children:"En prueba"}),l.jsx("option",{value:"suspended",children:"Suspendidos"}),l.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),l.jsx("div",{className:"table-container",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Empresa"}),l.jsx("th",{children:"Subdominio"}),l.jsx("th",{children:"Plan"}),l.jsx("th",{children:"Estado"}),l.jsx("th",{children:"Creado"}),l.jsx("th",{children:"Acciones"})]})}),l.jsx("tbody",{children:s?l.jsx("tr",{children:l.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?l.jsx("tr",{children:l.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(v=>{var j,D,M;return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsxs("div",{className:"tenant-cell",children:[l.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((j=v.branding)==null?void 0:j.primary_color)||"#3b82f6"},children:(D=v.branding)!=null&&D.logo_url?l.jsx("img",{src:v.branding.logo_url,alt:""}):v.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("div",{className:"tenant-name",children:((M=v.branding)==null?void 0:M.company_name)||v.name}),l.jsxs("div",{className:"tenant-id",children:[v.id.slice(0,8),"..."]})]})]})}),l.jsx("td",{children:l.jsxs("a",{href:`https://${v.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[v.subdomain,l.jsx(fd,{size:14})]})}),l.jsx("td",{children:l.jsx("span",{className:"plan-badge",children:v.plan_id})}),l.jsx("td",{children:l.jsx("span",{className:E(v.status),children:v.status})}),l.jsx("td",{children:m(v.created_at)}),l.jsx("td",{children:l.jsxs("div",{className:"actions-cell",children:[l.jsx("button",{onClick:()=>e(`/super-admin/tenants/${v.id}`),className:"action-btn",title:"Ver detalles",children:l.jsx(Qv,{size:18})}),v.status==="active"?l.jsx("button",{onClick:()=>R(v.id),className:"action-btn danger",title:"Suspender",children:l.jsx(Zv,{size:18})}):v.status==="suspended"&&l.jsx("button",{onClick:()=>A(v.id),className:"action-btn success",title:"Activar",children:l.jsx(ty,{size:18})})]})})]},v.id)})})]})}),r.pages>1&&l.jsxs("div",{className:"pagination",children:[l.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[l.jsx(Wc,{size:18}),"Anterior"]}),l.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),l.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",l.jsx(dE,{size:18})]})]}),l.jsx("style",{children:`
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
      `})]})},ME=()=>{const{id:e}=$x();sn();const[t,n]=L.useState(null),[r,i]=L.useState(!0),[s,a]=L.useState(!1),[c,d]=L.useState({name:"",plan_id:""});L.useEffect(()=>{f()},[e]);const f=async()=>{try{const N=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(N),d({name:N.name,plan_id:N.plan_id})}catch(C){console.error("Error fetching tenant:",C)}finally{i(!1)}},k=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),a(!1),f()}catch(C){console.error("Error updating tenant:",C)}},y=async C=>{if(confirm(C==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${C}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),f()}catch(R){console.error("Error changing status:",R)}},w=C=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[C]||"#3b82f6";return r?l.jsx("div",{className:"loading-page",children:"Cargando..."}):t?l.jsxs("div",{className:"tenant-detail",children:[l.jsxs("header",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx(je,{to:"/super-admin/tenants",className:"back-link",children:l.jsx(Wc,{size:20})}),l.jsxs("div",{className:"tenant-header",children:[l.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?l.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("h1",{children:t.branding.company_name||t.name}),l.jsxs("div",{className:"tenant-meta",children:[l.jsx("span",{className:"status-dot",style:{backgroundColor:w(t.status)}}),l.jsx("span",{children:t.status}),l.jsx("span",{className:"separator",children:"•"}),l.jsx("span",{children:t.plan_id})]})]})]})]}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[l.jsx(fd,{size:18}),"Visitar"]}),t.status==="active"?l.jsxs("button",{onClick:()=>y("suspend"),className:"btn btn-danger",children:[l.jsx(Zv,{size:18}),"Suspender"]}):t.status==="suspended"&&l.jsxs("button",{onClick:()=>y("activate"),className:"btn btn-success",children:[l.jsx(ty,{size:18}),"Activar"]})]})]}),l.jsxs("div",{className:"detail-content",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Información General"}),s?l.jsxs("button",{onClick:k,className:"btn btn-primary btn-sm",children:[l.jsx(wE,{size:16}),"Guardar"]}):l.jsx("button",{onClick:()=>a(!0),className:"btn-icon",children:l.jsx(ey,{size:18})})]}),l.jsxs("div",{className:"card-content info-grid",children:[l.jsxs("div",{className:"info-item",children:[l.jsx(ca,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Nombre"}),s?l.jsx("input",{value:c.name,onChange:C=>d({...c,name:C.target.value})}):l.jsx("span",{children:t.name})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(Jr,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Subdominio"}),l.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(pd,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Email"}),l.jsx("span",{children:t.branding.contact_email||"-"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(yE,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Teléfono"}),l.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(uE,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Creado"}),l.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(hE,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Plan"}),s?l.jsxs("select",{value:c.plan_id,onChange:C=>d({...c,plan_id:C.target.value}),children:[l.jsx("option",{value:"trial",children:"Trial"}),l.jsx("option",{value:"starter",children:"Starter"}),l.jsx("option",{value:"professional",children:"Professional"}),l.jsx("option",{value:"enterprise",children:"Enterprise"})]}):l.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Uso del Servicio"})}),l.jsxs("div",{className:"card-content usage-grid",children:[l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(Pa,{size:24})}),l.jsx("div",{className:"usage-value",children:t.usage.users}),l.jsx("div",{className:"usage-label",children:"Usuarios"})]}),l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(qt,{size:24})}),l.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),l.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(gE,{size:24})}),l.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),l.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Dominios"})}),l.jsx("div",{className:"card-content",children:t.domains.length===0?l.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((C,N)=>l.jsxs("div",{className:"domain-row",children:[l.jsx(Jr,{size:16}),l.jsx("span",{children:C.domain}),C.is_primary&&l.jsx("span",{className:"badge primary",children:"Principal"}),l.jsxs("span",{className:`badge ${C.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",C.ssl_status]})]},N))})]}),t.subscription&&l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Suscripción"})}),l.jsx("div",{className:"card-content",children:l.jsxs("div",{className:"subscription-info",children:[l.jsxs("div",{children:[l.jsx("label",{children:"Estado"}),l.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),l.jsxs("div",{children:[l.jsx("label",{children:"Próximo cobro"}),l.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),l.jsx("style",{children:`
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
      `})]}):l.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},zE=()=>{const{tenant:e,loading:t,error:n}=ys(),r=rn(),s=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),a=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return a&&s?l.jsx("div",{className:"app",children:l.jsxs(Nf,{children:[l.jsx(Fe,{path:"/",element:l.jsx(TE,{})}),l.jsx(Fe,{path:"/register",element:l.jsx(IE,{})}),l.jsx(Fe,{path:"/onboarding",element:l.jsx(NE,{})}),l.jsx(Fe,{path:"*",element:l.jsx(wo,{to:"/",replace:!0})})]})}):t?l.jsx(RE,{}):n&&!a?l.jsx(AE,{message:n}):l.jsx(oE,{children:l.jsx("div",{className:"app",children:l.jsxs(Nf,{children:[l.jsx(Fe,{path:"/login",element:l.jsx(CE,{})}),l.jsx(Fe,{path:"/dashboard",element:l.jsx(yr,{children:l.jsx(jE,{})})}),l.jsx(Fe,{path:"/packages",element:l.jsx(yr,{children:l.jsx(PE,{})})}),l.jsx(Fe,{path:"/account/white-label",element:l.jsx(yr,{children:l.jsx(OE,{})})}),l.jsx(Fe,{path:"/super-admin",element:l.jsx(yr,{children:l.jsx(LE,{})})}),l.jsx(Fe,{path:"/super-admin/tenants",element:l.jsx(yr,{children:l.jsx(DE,{})})}),l.jsx(Fe,{path:"/super-admin/tenants/:id",element:l.jsx(yr,{children:l.jsx(ME,{})})}),l.jsx(Fe,{path:"/",element:l.jsx(wo,{to:"/dashboard",replace:!0})}),l.jsx(Fe,{path:"*",element:l.jsx(wo,{to:"/dashboard",replace:!0})})]})})})};Fl.createRoot(document.getElementById("root")).render(l.jsx(Op.StrictMode,{children:l.jsx(uw,{children:l.jsx(vw,{children:l.jsx(zE,{})})})}));
//# sourceMappingURL=index-DS7_Hpzr.js.map
