function My(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sp={exports:{}},ua={},Tp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),Uy=Symbol.for("react.portal"),Fy=Symbol.for("react.fragment"),$y=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),Wy=Symbol.for("react.forward_ref"),Ky=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),qy=Symbol.for("react.lazy"),fh=Symbol.iterator;function Xy(e){return e===null||typeof e!="object"?null:(e=fh&&e[fh]||e["@@iterator"],typeof e=="function"?e:null)}var jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Np=Object.assign,Ip={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=Ip,this.updater=n||jp}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cp(){}Cp.prototype=Yr.prototype;function Yc(e,t,n){this.props=e,this.context=t,this.refs=Ip,this.updater=n||jp}var Qc=Yc.prototype=new Cp;Qc.constructor=Yc;Np(Qc,Yr.prototype);Qc.isPureReactComponent=!0;var ph=Array.isArray,Pp=Object.prototype.hasOwnProperty,Zc={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Pp.call(t,r)&&!Rp.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),f=0;f<c;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:ps,type:e,key:s,ref:a,props:i,_owner:Zc.current}}function Jy(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function eu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function Yy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gh=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yy(""+e.key):t.toString(36)}function ao(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ps:case Uy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+rl(a,0):r,ph(i)?(n="",e!=null&&(n=e.replace(gh,"$&/")+"/"),ao(i,t,n,"",function(f){return f})):i!=null&&(eu(i)&&(i=Jy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",ph(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+rl(s,c);a+=ao(s,t,n,d,i)}else if(d=Xy(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+rl(s,c++),a+=ao(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function $s(e,t,n){if(e==null)return e;var r=[],i=0;return ao(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Qy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},lo={transition:null},Zy={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Zc};function Op(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:$s,forEach:function(e,t,n){$s(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $s(e,function(){t++}),t},toArray:function(e){return $s(e,function(t){return t})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Yr;K.Fragment=Fy;K.Profiler=By;K.PureComponent=Yc;K.StrictMode=$y;K.Suspense=Ky;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;K.act=Op;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Np({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Zc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Pp.call(t,d)&&!Rp.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var f=0;f<d;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:ps,type:e.type,key:i,ref:s,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:Hy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vy,_context:e},e.Consumer=e};K.createElement=Ap;K.createFactory=function(e){var t=Ap.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Wy,render:e}};K.isValidElement=eu;K.lazy=function(e){return{$$typeof:qy,_payload:{_status:-1,_result:e},_init:Qy}};K.memo=function(e,t){return{$$typeof:Gy,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};K.unstable_act=Op;K.useCallback=function(e,t){return Ue.current.useCallback(e,t)};K.useContext=function(e){return Ue.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ue.current.useEffect(e,t)};K.useId=function(){return Ue.current.useId()};K.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ue.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};K.useRef=function(e){return Ue.current.useRef(e)};K.useState=function(e){return Ue.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ue.current.useTransition()};K.version="18.3.1";Tp.exports=K;var O=Tp.exports;const Dp=zy(O),e0=My({__proto__:null,default:Dp},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=O,n0=Symbol.for("react.element"),r0=Symbol.for("react.fragment"),i0=Object.prototype.hasOwnProperty,s0=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o0={key:!0,ref:!0,__self:!0,__source:!0};function Lp(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)i0.call(t,r)&&!o0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:n0,type:e,key:s,ref:a,props:i,_owner:s0.current}}ua.Fragment=r0;ua.jsx=Lp;ua.jsxs=Lp;Sp.exports=ua;var l=Sp.exports,Fl={},Mp={exports:{}},Qe={},zp={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var W=F.length;F.push(V);e:for(;0<W;){var se=W-1>>>1,Q=F[se];if(0<i(Q,V))F[se]=V,F[W]=Q,W=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],W=F.pop();if(W!==V){F[0]=W;e:for(var se=0,Q=F.length,ue=Q>>>1;se<ue;){var Ot=2*(se+1)-1,Dt=F[Ot],Lt=Ot+1,Mt=F[Lt];if(0>i(Dt,W))Lt<Q&&0>i(Mt,Dt)?(F[se]=Mt,F[Lt]=W,se=Lt):(F[se]=Dt,F[Ot]=W,se=Ot);else if(Lt<Q&&0>i(Mt,W))F[se]=Mt,F[Lt]=W,se=Lt;else break e}}return V}function i(F,V){var W=F.sortIndex-V.sortIndex;return W!==0?W:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,c=a.now();e.unstable_now=function(){return a.now()-c}}var d=[],f=[],k=1,y=null,x=3,T=!1,I=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var V=n(f);V!==null;){if(V.callback===null)r(f);else if(V.startTime<=F)r(f),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(f)}}function C(F){if(R=!1,v(F),!I)if(n(d)!==null)I=!0,ii(L);else{var V=n(f);V!==null&&At(C,V.startTime-F)}}function L(F,V){I=!1,R&&(R=!1,E(g),g=-1),T=!0;var W=x;try{for(v(V),y=n(d);y!==null&&(!(y.expirationTime>V)||F&&!N());){var se=y.callback;if(typeof se=="function"){y.callback=null,x=y.priorityLevel;var Q=se(y.expirationTime<=V);V=e.unstable_now(),typeof Q=="function"?y.callback=Q:y===n(d)&&r(d),v(V)}else r(d);y=n(d)}if(y!==null)var ue=!0;else{var Ot=n(f);Ot!==null&&At(C,Ot.startTime-V),ue=!1}return ue}finally{y=null,x=W,T=!1}}var M=!1,_=null,g=-1,w=5,S=-1;function N(){return!(e.unstable_now()-S<w)}function j(){if(_!==null){var F=e.unstable_now();S=F;var V=!0;try{V=_(!0,F)}finally{V?b():(M=!1,_=null)}}else M=!1}var b;if(typeof m=="function")b=function(){m(j)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Bn=ge.port2;ge.port1.onmessage=j,b=function(){Bn.postMessage(null)}}else b=function(){A(j,0)};function ii(F){_=F,M||(M=!0,b())}function At(F,V){g=A(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){I||T||(I=!0,ii(L))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var W=x;x=V;try{return F()}finally{x=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=x;x=F;try{return V()}finally{x=W}},e.unstable_scheduleCallback=function(F,V,W){var se=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:k++,callback:V,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>se?(F.sortIndex=W,t(f,F),n(d)===null&&F===n(f)&&(R?(E(g),g=-1):R=!0,At(C,W-se))):(F.sortIndex=Q,t(d,F),I||T||(I=!0,ii(L))),F},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(F){var V=x;return function(){var W=x;x=V;try{return F.apply(this,arguments)}finally{x=W}}}})(Up);zp.exports=Up;var a0=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=O,Ye=a0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,Wi={};function ur(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Wi[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},vh={};function u0(e){return $l.call(vh,e)?!0:$l.call(mh,e)?!1:c0.test(e)?vh[e]=!0:(mh[e]=!0,!1)}function d0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function h0(e,t,n,r){if(t===null||typeof t>"u"||d0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function nu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tu,nu);be[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tu,nu);be[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tu,nu);be[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ru(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(h0(t,n,i,r)&&(n=null),r||i===null?u0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),xr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),iu=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Bp=Symbol.for("react.context"),su=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),yh=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=yh&&e[yh]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,il;function ji(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var sl=!1;function ol(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,c=s.length-1;1<=a&&0<=c&&i[a]!==s[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==s[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==s[c]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=c);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ji(e):""}function f0(e){switch(e.tag){case 5:return ji(e.type);case 16:return ji("Lazy");case 13:return ji("Suspense");case 19:return ji("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case xr:return"Portal";case Bl:return"Profiler";case iu:return"StrictMode";case Vl:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bp:return(e.displayName||"Context")+".Consumer";case $p:return(e._context.displayName||"Context")+".Provider";case su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ou:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case hn:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function p0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function g0(e){var t=Hp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){e._valueTracker||(e._valueTracker=g0(e))}function Wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&ru(e,"checked",t,!1)}function Gl(e,t){Kp(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||So(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ni=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _h(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Ni(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Gp(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function kh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hs,Xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){m0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function Jp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function Yp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var v0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(v0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ec=null,Ar=null,Or=null;function bh(e){if(e=vs(e)){if(typeof ec!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ga(t),ec(e.stateNode,e.type,t))}}function Qp(e){Ar?Or?Or.push(e):Or=[e]:Ar=e}function Zp(){if(Ar){var e=Ar,t=Or;if(Or=Ar=null,bh(e),t)for(e=0;e<t.length;e++)bh(t[e])}}function eg(e,t){return e(t)}function tg(){}var al=!1;function ng(e,t,n){if(al)return e(t,n);al=!0;try{return eg(e,t,n)}finally{al=!1,(Ar!==null||Or!==null)&&(tg(),Zp())}}function Gi(e,t){var n=e.stateNode;if(n===null)return null;var r=ga(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var tc=!1;if(Jt)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){tc=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{tc=!1}function y0(e,t,n,r,i,s,a,c,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(k){this.onError(k)}}var Oi=!1,To=null,jo=!1,nc=null,x0={onError:function(e){Oi=!0,To=e}};function w0(e,t,n,r,i,s,a,c,d){Oi=!1,To=null,y0.apply(x0,arguments)}function _0(e,t,n,r,i,s,a,c,d){if(w0.apply(this,arguments),Oi){if(Oi){var f=To;Oi=!1,To=null}else throw Error(z(198));jo||(jo=!0,nc=f)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eh(e){if(dr(e)!==e)throw Error(z(188))}function k0(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Eh(i),e;if(s===r)return Eh(i),t;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=s;break}if(c===r){a=!0,r=i,n=s;break}c=c.sibling}if(!a){for(c=s.child;c;){if(c===n){a=!0,n=s,r=i;break}if(c===r){a=!0,r=s,n=i;break}c=c.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function ig(e){return e=k0(e),e!==null?sg(e):null}function sg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sg(e);if(t!==null)return t;e=e.sibling}return null}var og=Ye.unstable_scheduleCallback,Sh=Ye.unstable_cancelCallback,b0=Ye.unstable_shouldYield,E0=Ye.unstable_requestPaint,he=Ye.unstable_now,S0=Ye.unstable_getCurrentPriorityLevel,lu=Ye.unstable_ImmediatePriority,ag=Ye.unstable_UserBlockingPriority,No=Ye.unstable_NormalPriority,T0=Ye.unstable_LowPriority,lg=Ye.unstable_IdlePriority,da=null,bt=null;function j0(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:C0,N0=Math.log,I0=Math.LN2;function C0(e){return e>>>=0,e===0?32:31-(N0(e)/I0|0)|0}var Ws=64,Ks=4194304;function Ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=Ii(c):(s&=a,s!==0&&(r=Ii(s)))}else a=n&~i,a!==0?r=Ii(a):s!==0&&(r=Ii(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function P0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-pt(s),c=1<<a,d=i[a];d===-1?(!(c&n)||c&r)&&(i[a]=P0(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function rc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cg(){var e=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function A0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function ug(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dg,uu,hg,fg,pg,ic=!1,Gs=[],bn=null,En=null,Sn=null,qi=new Map,Xi=new Map,pn=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(e,t){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(t.pointerId)}}function wi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=vs(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function D0(e,t,n,r,i){switch(t){case"focusin":return bn=wi(bn,e,t,n,r,i),!0;case"dragenter":return En=wi(En,e,t,n,r,i),!0;case"mouseover":return Sn=wi(Sn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return qi.set(s,wi(qi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xi.set(s,wi(Xi.get(s)||null,e,t,n,r,i)),!0}return!1}function gg(e){var t=Jn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=rg(n),t!==null){e.blockedOn=t,pg(e.priority,function(){hg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=vs(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function jh(e,t,n){co(e)&&n.delete(t)}function L0(){ic=!1,bn!==null&&co(bn)&&(bn=null),En!==null&&co(En)&&(En=null),Sn!==null&&co(Sn)&&(Sn=null),qi.forEach(jh),Xi.forEach(jh)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,ic||(ic=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,L0)))}function Ji(e){function t(i){return _i(i,e)}if(0<Gs.length){_i(Gs[0],e);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&_i(bn,e),En!==null&&_i(En,e),Sn!==null&&_i(Sn,e),qi.forEach(t),Xi.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&pn.shift()}var Dr=nn.ReactCurrentBatchConfig,Co=!0;function M0(e,t,n,r){var i=Y,s=Dr.transition;Dr.transition=null;try{Y=1,du(e,t,n,r)}finally{Y=i,Dr.transition=s}}function z0(e,t,n,r){var i=Y,s=Dr.transition;Dr.transition=null;try{Y=4,du(e,t,n,r)}finally{Y=i,Dr.transition=s}}function du(e,t,n,r){if(Co){var i=sc(e,t,n,r);if(i===null)yl(e,t,r,Po,n),Th(e,r);else if(D0(i,e,t,n,r))r.stopPropagation();else if(Th(e,r),t&4&&-1<O0.indexOf(e)){for(;i!==null;){var s=vs(i);if(s!==null&&dg(s),s=sc(e,t,n,r),s===null&&yl(e,t,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Po=null;function sc(e,t,n,r){if(Po=null,e=au(r),e=Jn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Po=e,null}function mg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case lu:return 1;case ag:return 4;case No:case T0:return 16;case lg:return 536870912;default:return 16}default:return 16}}var wn=null,hu=null,uo=null;function vg(){if(uo)return uo;var e,t=hu,n=t.length,r,i="value"in wn?wn.value:wn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return uo=i.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qs(){return!0}function Nh(){return!1}function Ze(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qs:Nh,this.isPropagationStopped=Nh,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=Ze(Qr),ms=le({},Qr,{view:0,detail:0}),U0=Ze(ms),cl,ul,ki,ha=le({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(cl=e.screenX-ki.screenX,ul=e.screenY-ki.screenY):ul=cl=0,ki=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Ih=Ze(ha),F0=le({},ha,{dataTransfer:0}),$0=Ze(F0),B0=le({},ms,{relatedTarget:0}),dl=Ze(B0),V0=le({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Ze(V0),W0=le({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=Ze(W0),G0=le({},Qr,{data:0}),Ch=Ze(G0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J0[e])?!!t[e]:!1}function pu(){return Y0}var Q0=le({},ms,{key:function(e){if(e.key){var t=q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z0=Ze(Q0),ex=le({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=Ze(ex),tx=le({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),nx=Ze(tx),rx=le({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=Ze(rx),sx=le({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Ze(sx),ax=[9,13,27,32],gu=Jt&&"CompositionEvent"in window,Di=null;Jt&&"documentMode"in document&&(Di=document.documentMode);var lx=Jt&&"TextEvent"in window&&!Di,yg=Jt&&(!gu||Di&&8<Di&&11>=Di),Rh=" ",Ah=!1;function xg(e,t){switch(e){case"keyup":return ax.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _r=!1;function cx(e,t){switch(e){case"compositionend":return wg(t);case"keypress":return t.which!==32?null:(Ah=!0,Rh);case"textInput":return e=t.data,e===Rh&&Ah?null:e;default:return null}}function ux(e,t){if(_r)return e==="compositionend"||!gu&&xg(e,t)?(e=vg(),uo=hu=wn=null,_r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yg&&t.locale!=="ko"?null:t.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dx[e.type]:t==="textarea"}function _g(e,t,n,r){Qp(r),t=Ro(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Yi=null;function hx(e){Rg(e,0)}function fa(e){var t=Er(e);if(Wp(t))return e}function fx(e,t){if(e==="change")return t}var kg=!1;if(Jt){var hl;if(Jt){var fl="oninput"in document;if(!fl){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),fl=typeof Dh.oninput=="function"}hl=fl}else hl=!1;kg=hl&&(!document.documentMode||9<document.documentMode)}function Lh(){Li&&(Li.detachEvent("onpropertychange",bg),Yi=Li=null)}function bg(e){if(e.propertyName==="value"&&fa(Yi)){var t=[];_g(t,Yi,e,au(e)),ng(hx,t)}}function px(e,t,n){e==="focusin"?(Lh(),Li=t,Yi=n,Li.attachEvent("onpropertychange",bg)):e==="focusout"&&Lh()}function gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(Yi)}function mx(e,t){if(e==="click")return fa(t)}function vx(e,t){if(e==="input"||e==="change")return fa(t)}function yx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:yx;function Qi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$l.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zh(e,t){var n=Mh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function Eg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sg(){for(var e=window,t=So();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=So(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xx(e){var t=Sg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eg(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=zh(n,s);var a=zh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wx=Jt&&"documentMode"in document&&11>=document.documentMode,kr=null,oc=null,Mi=null,ac=!1;function Uh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||kr==null||kr!==So(r)||(r=kr,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&Qi(Mi,r)||(Mi=r,r=Ro(oc,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},pl={},Tg={};Jt&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function pa(e){if(pl[e])return pl[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tg)return pl[e]=t[n];return e}var jg=pa("animationend"),Ng=pa("animationiteration"),Ig=pa("animationstart"),Cg=pa("transitionend"),Pg=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){Pg.set(e,t),ur(t,[e])}for(var gl=0;gl<Fh.length;gl++){var ml=Fh[gl],_x=ml.toLowerCase(),kx=ml[0].toUpperCase()+ml.slice(1);Mn(_x,"on"+kx)}Mn(jg,"onAnimationEnd");Mn(Ng,"onAnimationIteration");Mn(Ig,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Cg,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function $h(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_0(r,t,void 0,e),e.currentTarget=null}function Rg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],d=c.instance,f=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;$h(i,c,f),s=d}else for(a=0;a<r.length;a++){if(c=r[a],d=c.instance,f=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;$h(i,c,f),s=d}}}if(jo)throw e=nc,jo=!1,nc=null,e}function ne(e,t){var n=t[hc];n===void 0&&(n=t[hc]=new Set);var r=e+"__bubble";n.has(r)||(Ag(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Ag(n,e,r,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Js]){e[Js]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(bx.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,vl("selectionchange",!1,t))}}function Ag(e,t,n,r){switch(mg(t)){case 1:var i=M0;break;case 4:i=z0;break;default:i=du}n=i.bind(null,t,n,e),i=void 0,!tc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Jn(c),a===null)return;if(d=a.tag,d===5||d===6){r=s=a;continue e}c=c.parentNode}}r=r.return}ng(function(){var f=s,k=au(n),y=[];e:{var x=Pg.get(e);if(x!==void 0){var T=fu,I=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":T=Z0;break;case"focusin":I="focus",T=dl;break;case"focusout":I="blur",T=dl;break;case"beforeblur":case"afterblur":T=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=$0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=nx;break;case jg:case Ng:case Ig:T=H0;break;case Cg:T=ix;break;case"scroll":T=U0;break;case"wheel":T=ox;break;case"copy":case"cut":case"paste":T=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Ph}var R=(t&4)!==0,A=!R&&e==="scroll",E=R?x!==null?x+"Capture":null:x;R=[];for(var m=f,v;m!==null;){v=m;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,E!==null&&(C=Gi(m,E),C!=null&&R.push(es(m,C,v)))),A)break;m=m.return}0<R.length&&(x=new T(x,I,null,n,k),y.push({event:x,listeners:R}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",x&&n!==Zl&&(I=n.relatedTarget||n.fromElement)&&(Jn(I)||I[Yt]))break e;if((T||x)&&(x=k.window===k?k:(x=k.ownerDocument)?x.defaultView||x.parentWindow:window,T?(I=n.relatedTarget||n.toElement,T=f,I=I?Jn(I):null,I!==null&&(A=dr(I),I!==A||I.tag!==5&&I.tag!==6)&&(I=null)):(T=null,I=f),T!==I)){if(R=Ih,C="onMouseLeave",E="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(R=Ph,C="onPointerLeave",E="onPointerEnter",m="pointer"),A=T==null?x:Er(T),v=I==null?x:Er(I),x=new R(C,m+"leave",T,n,k),x.target=A,x.relatedTarget=v,C=null,Jn(k)===f&&(R=new R(E,m+"enter",I,n,k),R.target=v,R.relatedTarget=A,C=R),A=C,T&&I)t:{for(R=T,E=I,m=0,v=R;v;v=yr(v))m++;for(v=0,C=E;C;C=yr(C))v++;for(;0<m-v;)R=yr(R),m--;for(;0<v-m;)E=yr(E),v--;for(;m--;){if(R===E||E!==null&&R===E.alternate)break t;R=yr(R),E=yr(E)}R=null}else R=null;T!==null&&Bh(y,x,T,R,!1),I!==null&&A!==null&&Bh(y,A,I,R,!0)}}e:{if(x=f?Er(f):window,T=x.nodeName&&x.nodeName.toLowerCase(),T==="select"||T==="input"&&x.type==="file")var L=fx;else if(Oh(x))if(kg)L=vx;else{L=gx;var M=px}else(T=x.nodeName)&&T.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(L=mx);if(L&&(L=L(e,f))){_g(y,L,n,k);break e}M&&M(e,x,f),e==="focusout"&&(M=x._wrapperState)&&M.controlled&&x.type==="number"&&ql(x,"number",x.value)}switch(M=f?Er(f):window,e){case"focusin":(Oh(M)||M.contentEditable==="true")&&(kr=M,oc=f,Mi=null);break;case"focusout":Mi=oc=kr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Uh(y,n,k);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":Uh(y,n,k)}var _;if(gu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else _r?xg(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(yg&&n.locale!=="ko"&&(_r||g!=="onCompositionStart"?g==="onCompositionEnd"&&_r&&(_=vg()):(wn=k,hu="value"in wn?wn.value:wn.textContent,_r=!0)),M=Ro(f,g),0<M.length&&(g=new Ch(g,e,null,n,k),y.push({event:g,listeners:M}),_?g.data=_:(_=wg(n),_!==null&&(g.data=_)))),(_=lx?cx(e,n):ux(e,n))&&(f=Ro(f,"onBeforeInput"),0<f.length&&(k=new Ch("onBeforeInput","beforeinput",null,n,k),y.push({event:k,listeners:f}),k.data=_))}Rg(y,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gi(e,n),s!=null&&r.unshift(es(e,s,i)),s=Gi(e,t),s!=null&&r.push(es(e,s,i))),e=e.return}return r}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bh(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var c=n,d=c.alternate,f=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&f!==null&&(c=f,i?(d=Gi(n,s),d!=null&&a.unshift(es(n,d,c))):i||(d=Gi(n,s),d!=null&&a.push(es(n,d,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ex=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Vh(e){return(typeof e=="string"?e:""+e).replace(Ex,`
`).replace(Sx,"")}function Ys(e,t,n){if(t=Vh(t),Vh(e)!==t&&n)throw Error(z(425))}function Ao(){}var lc=null,cc=null;function uc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,Tx=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(e){return Hh.resolve(null).then(e).catch(Nx)}:dc;function Nx(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ji(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Zr,ts="__reactProps$"+Zr,Yt="__reactContainer$"+Zr,hc="__reactEvents$"+Zr,Ix="__reactListeners$"+Zr,Cx="__reactHandles$"+Zr;function Jn(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wh(e);e!==null;){if(n=e[_t])return n;e=Wh(e)}return t}e=n,n=e.parentNode}return null}function vs(e){return e=e[_t]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ga(e){return e[ts]||null}var fc=[],Sr=-1;function zn(e){return{current:e}}function re(e){0>Sr||(e.current=fc[Sr],fc[Sr]=null,Sr--)}function ee(e,t){Sr++,fc[Sr]=e.current,e.current=t}var Dn={},Pe=zn(Dn),We=zn(!1),nr=Dn;function Br(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Oo(){re(We),re(Pe)}function Kh(e,t,n){if(Pe.current!==Dn)throw Error(z(168));ee(Pe,t),ee(We,n)}function Og(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,p0(e)||"Unknown",i));return le({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,nr=Pe.current,ee(Pe,e),ee(We,We.current),!0}function Gh(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Og(e,t,nr),r.__reactInternalMemoizedMergedChildContext=e,re(We),re(Pe),ee(Pe,e)):re(We),ee(We,n)}var $t=null,ma=!1,wl=!1;function Dg(e){$t===null?$t=[e]:$t.push(e)}function Px(e){ma=!0,Dg(e)}function Un(){if(!wl&&$t!==null){wl=!0;var e=0,t=Y;try{var n=$t;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,ma=!1}catch(i){throw $t!==null&&($t=$t.slice(e+1)),og(lu,Un),i}finally{Y=t,wl=!1}}return null}var Tr=[],jr=0,Lo=null,Mo=0,tt=[],nt=0,rr=null,Bt=1,Vt="";function Gn(e,t){Tr[jr++]=Mo,Tr[jr++]=Lo,Lo=e,Mo=t}function Lg(e,t,n){tt[nt++]=Bt,tt[nt++]=Vt,tt[nt++]=rr,rr=e;var r=Bt;e=Vt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Bt=1<<32-pt(t)+i|n<<i|r,Vt=s+e}else Bt=1<<s|n<<i|r,Vt=e}function vu(e){e.return!==null&&(Gn(e,1),Lg(e,1,0))}function yu(e){for(;e===Lo;)Lo=Tr[--jr],Tr[jr]=null,Mo=Tr[--jr],Tr[jr]=null;for(;e===rr;)rr=tt[--nt],tt[nt]=null,Vt=tt[--nt],tt[nt]=null,Bt=tt[--nt],tt[nt]=null}var Je=null,Xe=null,ie=!1,dt=null;function Mg(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Xe=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rr!==null?{id:Bt,overflow:Vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Xe=null,!0):!1;default:return!1}}function pc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gc(e){if(ie){var t=Xe;if(t){var n=t;if(!qh(e,t)){if(pc(e))throw Error(z(418));t=Tn(n.nextSibling);var r=Je;t&&qh(e,t)?Mg(r,n):(e.flags=e.flags&-4097|2,ie=!1,Je=e)}}else{if(pc(e))throw Error(z(418));e.flags=e.flags&-4097|2,ie=!1,Je=e}}}function Xh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Qs(e){if(e!==Je)return!1;if(!ie)return Xh(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!uc(e.type,e.memoizedProps)),t&&(t=Xe)){if(pc(e))throw zg(),Error(z(418));for(;t;)Mg(e,t),t=Tn(t.nextSibling)}if(Xh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Je?Tn(e.stateNode.nextSibling):null;return!0}function zg(){for(var e=Xe;e;)e=Tn(e.nextSibling)}function Vr(){Xe=Je=null,ie=!1}function xu(e){dt===null?dt=[e]:dt.push(e)}var Rx=nn.ReactCurrentBatchConfig;function bi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var c=i.refs;a===null?delete c[s]:c[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Zs(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jh(e){var t=e._init;return t(e._payload)}function Ug(e){function t(E,m){if(e){var v=E.deletions;v===null?(E.deletions=[m],E.flags|=16):v.push(m)}}function n(E,m){if(!e)return null;for(;m!==null;)t(E,m),m=m.sibling;return null}function r(E,m){for(E=new Map;m!==null;)m.key!==null?E.set(m.key,m):E.set(m.index,m),m=m.sibling;return E}function i(E,m){return E=Cn(E,m),E.index=0,E.sibling=null,E}function s(E,m,v){return E.index=v,e?(v=E.alternate,v!==null?(v=v.index,v<m?(E.flags|=2,m):v):(E.flags|=2,m)):(E.flags|=1048576,m)}function a(E){return e&&E.alternate===null&&(E.flags|=2),E}function c(E,m,v,C){return m===null||m.tag!==6?(m=jl(v,E.mode,C),m.return=E,m):(m=i(m,v),m.return=E,m)}function d(E,m,v,C){var L=v.type;return L===wr?k(E,m,v.props.children,C,v.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hn&&Jh(L)===m.type)?(C=i(m,v.props),C.ref=bi(E,m,v),C.return=E,C):(C=xo(v.type,v.key,v.props,null,E.mode,C),C.ref=bi(E,m,v),C.return=E,C)}function f(E,m,v,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Nl(v,E.mode,C),m.return=E,m):(m=i(m,v.children||[]),m.return=E,m)}function k(E,m,v,C,L){return m===null||m.tag!==7?(m=tr(v,E.mode,C,L),m.return=E,m):(m=i(m,v),m.return=E,m)}function y(E,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jl(""+m,E.mode,v),m.return=E,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return v=xo(m.type,m.key,m.props,null,E.mode,v),v.ref=bi(E,null,m),v.return=E,v;case xr:return m=Nl(m,E.mode,v),m.return=E,m;case hn:var C=m._init;return y(E,C(m._payload),v)}if(Ni(m)||yi(m))return m=tr(m,E.mode,v,null),m.return=E,m;Zs(E,m)}return null}function x(E,m,v,C){var L=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:c(E,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bs:return v.key===L?d(E,m,v,C):null;case xr:return v.key===L?f(E,m,v,C):null;case hn:return L=v._init,x(E,m,L(v._payload),C)}if(Ni(v)||yi(v))return L!==null?null:k(E,m,v,C,null);Zs(E,v)}return null}function T(E,m,v,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return E=E.get(v)||null,c(m,E,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Bs:return E=E.get(C.key===null?v:C.key)||null,d(m,E,C,L);case xr:return E=E.get(C.key===null?v:C.key)||null,f(m,E,C,L);case hn:var M=C._init;return T(E,m,v,M(C._payload),L)}if(Ni(C)||yi(C))return E=E.get(v)||null,k(m,E,C,L,null);Zs(m,C)}return null}function I(E,m,v,C){for(var L=null,M=null,_=m,g=m=0,w=null;_!==null&&g<v.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var S=x(E,_,v[g],C);if(S===null){_===null&&(_=w);break}e&&_&&S.alternate===null&&t(E,_),m=s(S,m,g),M===null?L=S:M.sibling=S,M=S,_=w}if(g===v.length)return n(E,_),ie&&Gn(E,g),L;if(_===null){for(;g<v.length;g++)_=y(E,v[g],C),_!==null&&(m=s(_,m,g),M===null?L=_:M.sibling=_,M=_);return ie&&Gn(E,g),L}for(_=r(E,_);g<v.length;g++)w=T(_,E,g,v[g],C),w!==null&&(e&&w.alternate!==null&&_.delete(w.key===null?g:w.key),m=s(w,m,g),M===null?L=w:M.sibling=w,M=w);return e&&_.forEach(function(N){return t(E,N)}),ie&&Gn(E,g),L}function R(E,m,v,C){var L=yi(v);if(typeof L!="function")throw Error(z(150));if(v=L.call(v),v==null)throw Error(z(151));for(var M=L=null,_=m,g=m=0,w=null,S=v.next();_!==null&&!S.done;g++,S=v.next()){_.index>g?(w=_,_=null):w=_.sibling;var N=x(E,_,S.value,C);if(N===null){_===null&&(_=w);break}e&&_&&N.alternate===null&&t(E,_),m=s(N,m,g),M===null?L=N:M.sibling=N,M=N,_=w}if(S.done)return n(E,_),ie&&Gn(E,g),L;if(_===null){for(;!S.done;g++,S=v.next())S=y(E,S.value,C),S!==null&&(m=s(S,m,g),M===null?L=S:M.sibling=S,M=S);return ie&&Gn(E,g),L}for(_=r(E,_);!S.done;g++,S=v.next())S=T(_,E,g,S.value,C),S!==null&&(e&&S.alternate!==null&&_.delete(S.key===null?g:S.key),m=s(S,m,g),M===null?L=S:M.sibling=S,M=S);return e&&_.forEach(function(j){return t(E,j)}),ie&&Gn(E,g),L}function A(E,m,v,C){if(typeof v=="object"&&v!==null&&v.type===wr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bs:e:{for(var L=v.key,M=m;M!==null;){if(M.key===L){if(L=v.type,L===wr){if(M.tag===7){n(E,M.sibling),m=i(M,v.props.children),m.return=E,E=m;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hn&&Jh(L)===M.type){n(E,M.sibling),m=i(M,v.props),m.ref=bi(E,M,v),m.return=E,E=m;break e}n(E,M);break}else t(E,M);M=M.sibling}v.type===wr?(m=tr(v.props.children,E.mode,C,v.key),m.return=E,E=m):(C=xo(v.type,v.key,v.props,null,E.mode,C),C.ref=bi(E,m,v),C.return=E,E=C)}return a(E);case xr:e:{for(M=v.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(E,m.sibling),m=i(m,v.children||[]),m.return=E,E=m;break e}else{n(E,m);break}else t(E,m);m=m.sibling}m=Nl(v,E.mode,C),m.return=E,E=m}return a(E);case hn:return M=v._init,A(E,m,M(v._payload),C)}if(Ni(v))return I(E,m,v,C);if(yi(v))return R(E,m,v,C);Zs(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(E,m.sibling),m=i(m,v),m.return=E,E=m):(n(E,m),m=jl(v,E.mode,C),m.return=E,E=m),a(E)):n(E,m)}return A}var Hr=Ug(!0),Fg=Ug(!1),zo=zn(null),Uo=null,Nr=null,wu=null;function _u(){wu=Nr=Uo=null}function ku(e){var t=zo.current;re(zo),e._currentValue=t}function mc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Uo=e,wu=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(wu!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(Uo===null)throw Error(z(308));Nr=e,Uo.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var Yn=null;function bu(e){Yn===null?Yn=[e]:Yn.push(e)}function $g(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qt(e,r)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qt(e,n)}return i=r.interleaved,i===null?(t.next=t,bu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}function Yh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fo(e,t,n,r){var i=e.updateQueue;fn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,f=d.next;d.next=null,a===null?s=f:a.next=f,a=d;var k=e.alternate;k!==null&&(k=k.updateQueue,c=k.lastBaseUpdate,c!==a&&(c===null?k.firstBaseUpdate=f:c.next=f,k.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;a=0,k=f=d=null,c=s;do{var x=c.lane,T=c.eventTime;if((r&x)===x){k!==null&&(k=k.next={eventTime:T,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var I=e,R=c;switch(x=t,T=n,R.tag){case 1:if(I=R.payload,typeof I=="function"){y=I.call(T,y,x);break e}y=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=R.payload,x=typeof I=="function"?I.call(T,y,x):I,x==null)break e;y=le({},y,x);break e;case 2:fn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[c]:x.push(c))}else T={eventTime:T,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},k===null?(f=k=T,d=y):k=k.next=T,a|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;x=c,c=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(k===null&&(d=y),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);sr|=a,e.lanes=a,e.memoizedState=y}}function Qh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ys={},Et=zn(ys),ns=zn(ys),rs=zn(ys);function Qn(e){if(e===ys)throw Error(z(174));return e}function Su(e,t){switch(ee(rs,t),ee(ns,e),ee(Et,ys),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}re(Et),ee(Et,t)}function Wr(){re(Et),re(ns),re(rs)}function Vg(e){Qn(rs.current);var t=Qn(Et.current),n=Jl(t,e.type);t!==n&&(ee(ns,e),ee(Et,n))}function Tu(e){ns.current===e&&(re(Et),re(ns))}var oe=zn(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function ju(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var po=nn.ReactCurrentDispatcher,kl=nn.ReactCurrentBatchConfig,ir=0,ae=null,me=null,ye=null,Bo=!1,zi=!1,is=0,Ax=0;function je(){throw Error(z(321))}function Nu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Iu(e,t,n,r,i,s){if(ir=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?Mx:zx,e=n(r,i),zi){s=0;do{if(zi=!1,is=0,25<=s)throw Error(z(301));s+=1,ye=me=null,t.updateQueue=null,po.current=Ux,e=n(r,i)}while(zi)}if(po.current=Vo,t=me!==null&&me.next!==null,ir=0,ye=me=ae=null,Bo=!1,t)throw Error(z(300));return e}function Cu(){var e=is!==0;return is=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function ot(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(z(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function ss(e,t){return typeof t=="function"?t(e):t}function bl(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=a=null,d=null,f=s;do{var k=f.lane;if((ir&k)===k)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:k,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(c=d=y,a=r):d=d.next=y,ae.lanes|=k,sr|=k}f=f.next}while(f!==null&&f!==s);d===null?a=r:d.next=c,mt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,sr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=ot(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);mt(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Hg(){}function Wg(e,t){var n=ae,r=ot(),i=t(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,Pu(qg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,os(9,Gg.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(z(349));ir&30||Kg(n,t,i)}return i}function Kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gg(e,t,n,r){t.value=n,t.getSnapshot=r,Xg(t)&&Jg(e)}function qg(e,t,n){return n(function(){Xg(t)&&Jg(e)})}function Xg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Jg(e){var t=Qt(e,1);t!==null&&gt(t,e,1,-1)}function Zh(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t.queue=e,e=e.dispatch=Lx.bind(null,ae,e),[t.memoizedState,e]}function os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yg(){return ot().memoizedState}function go(e,t,n,r){var i=wt();ae.flags|=e,i.memoizedState=os(1|t,n,void 0,r===void 0?null:r)}function va(e,t,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(me!==null){var a=me.memoizedState;if(s=a.destroy,r!==null&&Nu(r,a.deps)){i.memoizedState=os(t,n,s,r);return}}ae.flags|=e,i.memoizedState=os(1|t,n,s,r)}function ef(e,t){return go(8390656,8,e,t)}function Pu(e,t){return va(2048,8,e,t)}function Qg(e,t){return va(4,2,e,t)}function Zg(e,t){return va(4,4,e,t)}function em(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tm(e,t,n){return n=n!=null?n.concat([e]):null,va(4,4,em.bind(null,t,e),n)}function Ru(){}function nm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Nu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function im(e,t,n){return ir&21?(mt(n,t)||(n=cg(),ae.lanes|=n,sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function Ox(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{Y=n,kl.transition=r}}function sm(){return ot().memoizedState}function Dx(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},om(e))am(t,n);else if(n=$g(e,t,n,r),n!==null){var i=Me();gt(n,e,r,i),lm(n,t,r)}}function Lx(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(e))am(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,c=s(a,n);if(i.hasEagerState=!0,i.eagerState=c,mt(c,a)){var d=t.interleaved;d===null?(i.next=i,bu(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=$g(e,t,i,r),n!==null&&(i=Me(),gt(n,e,r,i),lm(n,t,r))}}function om(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function am(e,t){zi=Bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cu(e,n)}}var Vo={readContext:st,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Mx={readContext:st,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ef,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,go(4194308,4,em.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){return go(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dx.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:Zh,useDebugValue:Ru,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=Zh(!1),t=e[0];return e=Ox.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=wt();if(ie){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),xe===null)throw Error(z(349));ir&30||Kg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ef(qg.bind(null,r,s,e),[e]),r.flags|=2048,os(9,Gg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wt(),t=xe.identifierPrefix;if(ie){var n=Vt,r=Bt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ax++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zx={readContext:st,useCallback:nm,useContext:st,useEffect:Pu,useImperativeHandle:tm,useInsertionEffect:Qg,useLayoutEffect:Zg,useMemo:rm,useReducer:bl,useRef:Yg,useState:function(){return bl(ss)},useDebugValue:Ru,useDeferredValue:function(e){var t=ot();return im(t,me.memoizedState,e)},useTransition:function(){var e=bl(ss)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Hg,useSyncExternalStore:Wg,useId:sm,unstable_isNewReconciler:!1},Ux={readContext:st,useCallback:nm,useContext:st,useEffect:Pu,useImperativeHandle:tm,useInsertionEffect:Qg,useLayoutEffect:Zg,useMemo:rm,useReducer:El,useRef:Yg,useState:function(){return El(ss)},useDebugValue:Ru,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:im(t,me.memoizedState,e)},useTransition:function(){var e=El(ss)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Hg,useSyncExternalStore:Wg,useId:sm,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ya={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=In(e),s=Gt(r,i);s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,i),t!==null&&(gt(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=In(e),s=Gt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=jn(e,s,i),t!==null&&(gt(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=In(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=jn(e,i,r),t!==null&&(gt(t,e,r,n),fo(t,e,r))}};function tf(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,s):!0}function cm(e,t,n){var r=!1,i=Dn,s=t.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=Ke(t)?nr:Pe.current,r=t.contextTypes,s=(r=r!=null)?Br(e,i):Dn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function nf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function yc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Eu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=Ke(t)?nr:Pe.current,i.context=Br(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(vc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ya.enqueueReplaceState(i,i.state,null),Fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var n="",r=t;do n+=f0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fx=typeof WeakMap=="function"?WeakMap:Map;function um(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wo||(Wo=!0,Ic=r),xc(e,t)},n}function dm(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(e,t),typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function rf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=e1.bind(null,e,t,n),t.then(e,e))}function sf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function of(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,jn(n,t,1))),n.lanes|=1),e)}var $x=nn.ReactCurrentOwner,He=!1;function De(e,t,n,r){t.child=e===null?Fg(t,null,n,r):Hr(t,e.child,n,r)}function af(e,t,n,r,i){n=n.render;var s=t.ref;return Lr(t,i),r=Iu(e,t,n,r,s,i),n=Cu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ie&&n&&vu(t),t.flags|=1,De(e,t,r,i),t.child)}function lf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Fu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,hm(e,t,s,r,i)):(e=xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(a,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Cn(s,r),e.ref=t.ref,e.return=t,t.child=e}function hm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Qi(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return wc(e,t,n,r,i)}function fm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Cr,qe),qe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Cr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Cr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ee(Cr,qe),qe|=r;return De(e,t,i,n),t.child}function pm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wc(e,t,n,r,i){var s=Ke(n)?nr:Pe.current;return s=Br(t,s),Lr(t,i),n=Iu(e,t,n,r,s,i),r=Cu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ie&&r&&vu(t),t.flags|=1,De(e,t,n,i),t.child)}function cf(e,t,n,r,i){if(Ke(n)){var s=!0;Do(t)}else s=!1;if(Lr(t,i),t.stateNode===null)mo(e,t),cm(t,n,r),yc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var d=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=st(f):(f=Ke(n)?nr:Pe.current,f=Br(t,f));var k=n.getDerivedStateFromProps,y=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||d!==f)&&nf(t,a,r,f),fn=!1;var x=t.memoizedState;a.state=x,Fo(t,r,a,i),d=t.memoizedState,c!==r||x!==d||We.current||fn?(typeof k=="function"&&(vc(t,n,k,r),d=t.memoizedState),(c=fn||tf(t,n,c,r,x,d,f))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=f,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Bg(e,t),c=t.memoizedProps,f=t.type===t.elementType?c:ct(t.type,c),a.props=f,y=t.pendingProps,x=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=st(d):(d=Ke(n)?nr:Pe.current,d=Br(t,d));var T=n.getDerivedStateFromProps;(k=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==y||x!==d)&&nf(t,a,r,d),fn=!1,x=t.memoizedState,a.state=x,Fo(t,r,a,i);var I=t.memoizedState;c!==y||x!==I||We.current||fn?(typeof T=="function"&&(vc(t,n,T,r),I=t.memoizedState),(f=fn||tf(t,n,f,r,x,I,d)||!1)?(k||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,I,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,I,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),a.props=r,a.state=I,a.context=d,r=f):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return _c(e,t,n,r,s,i)}function _c(e,t,n,r,i,s){pm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gh(t,n,!1),Zt(e,t,s);r=t.stateNode,$x.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hr(t,e.child,null,s),t.child=Hr(t,null,c,s)):De(e,t,c,s),t.memoizedState=r.state,i&&Gh(t,n,!0),t.child}function gm(e){var t=e.stateNode;t.pendingContext?Kh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kh(e,t.context,!1),Su(e,t.containerInfo)}function uf(e,t,n,r,i){return Vr(),xu(i),t.flags|=256,De(e,t,n,r),t.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function mm(e,t,n){var r=t.pendingProps,i=oe.current,s=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return gc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_a(a,r,0,null),e=tr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=bc(n),t.memoizedState=kc,e):Au(t,a));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Bx(e,t,a,r,c,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Cn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Cn(c,s):(s=tr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?bc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=kc,r}return s=e.child,e=s.sibling,r=Cn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Au(e,t){return t=_a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function eo(e,t,n,r){return r!==null&&xu(r),Hr(t,e.child,null,n),e=Au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bx(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(z(422))),eo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=_a({mode:"visible",children:r.children},i,0,null),s=tr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Hr(t,e.child,null,a),t.child.memoizedState=bc(a),t.memoizedState=kc,s);if(!(t.mode&1))return eo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(z(419)),r=Sl(s,r,void 0),eo(e,t,a,r)}if(c=(a&e.childLanes)!==0,He||c){if(r=xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qt(e,i),gt(r,e,i,-1))}return Uu(),r=Sl(Error(z(421))),eo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=t1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Xe=Tn(i.nextSibling),Je=t,ie=!0,dt=null,e!==null&&(tt[nt++]=Bt,tt[nt++]=Vt,tt[nt++]=rr,Bt=e.id,Vt=e.overflow,rr=t),t=Au(t,r.children),t.flags|=4096,t)}function df(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mc(e.return,t,n)}function Tl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(De(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,n,t);else if(e.tag===19)df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,s);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vx(e,t,n){switch(t.tag){case 3:gm(t),Vr();break;case 5:Vg(t);break;case 1:Ke(t.type)&&Do(t);break;case 4:Su(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?mm(e,t,n):(ee(oe,oe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,fm(e,t,n)}return Zt(e,t,n)}var ym,Ec,xm,wm;ym=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ec=function(){};xm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Et.current);var s=null;switch(n){case"input":i=Kl(e,i),r=Kl(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Xl(e,i),r=Xl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Yl(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var c=i[f];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Wi.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var d=r[f];if(c=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&d!==c&&(d!=null||c!=null))if(f==="style")if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&ne("scroll",e),s||c===d||(s=[])):(s=s||[]).push(f,d))}n&&(s=s||[]).push("style",n);var f=s;(t.updateQueue=f)&&(t.flags|=4)}};wm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hx(e,t,n){var r=t.pendingProps;switch(yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ke(t.type)&&Oo(),Ne(t),null;case 3:return r=t.stateNode,Wr(),re(We),re(Pe),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Rc(dt),dt=null))),Ec(e,t),Ne(t),null;case 5:Tu(t);var i=Qn(rs.current);if(n=t.type,e!==null&&t.stateNode!=null)xm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ne(t),null}if(e=Qn(Et.current),Qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[_t]=t,r[ts]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ci.length;i++)ne(Ci[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":xh(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":_h(r,s),ne("invalid",r)}Yl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,c,e),i=["children",""+c]):Wi.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":Vs(r),wh(r,s,!0);break;case"textarea":Vs(r),kh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[_t]=t,e[ts]=r,ym(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ql(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ci.length;i++)ne(Ci[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":xh(e,r),i=Kl(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":_h(e,r),i=Xl(e,r),ne("invalid",e);break;default:i=r}Yl(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Yp(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Xp(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Ki(e,d):typeof d=="number"&&Ki(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&ne("scroll",e):d!=null&&ru(e,s,d,a))}switch(n){case"input":Vs(e),wh(e,r,!1);break;case"textarea":Vs(e),kh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)wm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Qn(rs.current),Qn(Et.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[_t]=t,(s=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Ys(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=t,t.stateNode=r}return Ne(t),null;case 13:if(re(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))zg(),Vr(),t.flags|=98560,s=!1;else if(s=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(z(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[_t]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else dt!==null&&(Rc(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):Uu())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Wr(),Ec(e,t),e===null&&Zi(t.stateNode.containerInfo),Ne(t),null;case 10:return ku(t.type._context),Ne(t),null;case 17:return Ke(t.type)&&Oo(),Ne(t),null;case 19:if(re(oe),s=t.memoizedState,s===null)return Ne(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ei(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$o(e),a!==null){for(t.flags|=128,Ei(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&he()>Gr&&(t.flags|=128,r=!0,Ei(s,!1),t.lanes=4194304)}else{if(!r)if(e=$o(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ie)return Ne(t),null}else 2*he()-s.renderingStartTime>Gr&&n!==1073741824&&(t.flags|=128,r=!0,Ei(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=he(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Wx(e,t){switch(yu(t),t.tag){case 1:return Ke(t.type)&&Oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),re(We),re(Pe),ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return Wr(),null;case 10:return ku(t.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var to=!1,Ie=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Sc(e,t,n){try{n()}catch(r){ce(e,t,r)}}var hf=!1;function Gx(e,t){if(lc=Co,e=Sg(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,c=-1,d=-1,f=0,k=0,y=e,x=null;t:for(;;){for(var T;y!==n||i!==0&&y.nodeType!==3||(c=a+i),y!==s||r!==0&&y.nodeType!==3||(d=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(T=y.firstChild)!==null;)x=y,y=T;for(;;){if(y===e)break t;if(x===n&&++f===i&&(c=a),x===s&&++k===r&&(d=a),(T=y.nextSibling)!==null)break;y=x,x=y.parentNode}y=T}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:e,selectionRange:n},Co=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var I=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var R=I.memoizedProps,A=I.memoizedState,E=t.stateNode,m=E.getSnapshotBeforeUpdate(t.elementType===t.type?R:ct(t.type,R),A);E.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(C){ce(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return I=hf,hf=!1,I}function Ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sc(t,n,s)}i=i.next}while(i!==r)}}function xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[ts],delete t[hc],delete t[Ix],delete t[Cx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function km(e){return e.tag===5||e.tag===3||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}function Nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nc(e,t,n),e=e.sibling;e!==null;)Nc(e,t,n),e=e.sibling}var _e=null,ut=!1;function un(e,t,n){for(n=n.child;n!==null;)bm(e,t,n),n=n.sibling}function bm(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:Ie||Ir(n,t);case 6:var r=_e,i=ut;_e=null,un(e,t,n),_e=r,ut=i,_e!==null&&(ut?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(ut?(e=_e,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),Ji(e)):xl(_e,n.stateNode));break;case 4:r=_e,i=ut,_e=n.stateNode.containerInfo,ut=!0,un(e,t,n),_e=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Sc(n,t,a),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Ie&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ce(n,t,c)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,un(e,t,n),Ie=r):un(e,t,n);break;default:un(e,t,n)}}function pf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kx),t.forEach(function(r){var i=n1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:_e=c.stateNode,ut=!1;break e;case 3:_e=c.stateNode.containerInfo,ut=!0;break e;case 4:_e=c.stateNode.containerInfo,ut=!0;break e}c=c.return}if(_e===null)throw Error(z(160));bm(s,a,i),_e=null,ut=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){ce(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Em(t,e),t=t.sibling}function Em(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),xt(e),r&4){try{Ui(3,e,e.return),xa(3,e)}catch(R){ce(e,e.return,R)}try{Ui(5,e,e.return)}catch(R){ce(e,e.return,R)}}break;case 1:lt(t,e),xt(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(lt(t,e),xt(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var i=e.stateNode;try{Ki(i,"")}catch(R){ce(e,e.return,R)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Kp(i,s),Ql(c,a);var f=Ql(c,s);for(a=0;a<d.length;a+=2){var k=d[a],y=d[a+1];k==="style"?Yp(i,y):k==="dangerouslySetInnerHTML"?Xp(i,y):k==="children"?Ki(i,y):ru(i,k,y,f)}switch(c){case"input":Gl(i,s);break;case"textarea":Gp(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Rr(i,!!s.multiple,T,!1):x!==!!s.multiple&&(s.defaultValue!=null?Rr(i,!!s.multiple,s.defaultValue,!0):Rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(R){ce(e,e.return,R)}}break;case 6:if(lt(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(R){ce(e,e.return,R)}}break;case 3:if(lt(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(R){ce(e,e.return,R)}break;case 4:lt(t,e),xt(e);break;case 13:lt(t,e),xt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=he())),r&4&&pf(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(f=Ie)||k,lt(t,e),Ie=f):lt(t,e),xt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!k&&e.mode&1)for($=e,k=e.child;k!==null;){for(y=$=k;$!==null;){switch(x=$,T=x.child,x.tag){case 0:case 11:case 14:case 15:Ui(4,x,x.return);break;case 1:Ir(x,x.return);var I=x.stateNode;if(typeof I.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(R){ce(r,n,R)}}break;case 5:Ir(x,x.return);break;case 22:if(x.memoizedState!==null){mf(y);continue}}T!==null?(T.return=x,$=T):mf(y)}k=k.sibling}e:for(k=null,y=e;;){if(y.tag===5){if(k===null){k=y;try{i=y.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=y.stateNode,d=y.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Jp("display",a))}catch(R){ce(e,e.return,R)}}}else if(y.tag===6){if(k===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(R){ce(e,e.return,R)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;k===y&&(k=null),y=y.return}k===y&&(k=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:lt(t,e),xt(e),r&4&&pf(e);break;case 21:break;default:lt(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(km(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var s=ff(e);Nc(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=ff(e);jc(e,c,a);break;default:throw Error(z(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qx(e,t,n){$=e,Sm(e)}function Sm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||to;if(!a){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Ie;c=to;var f=Ie;if(to=a,(Ie=d)&&!f)for($=i;$!==null;)a=$,d=a.child,a.tag===22&&a.memoizedState!==null?vf(i):d!==null?(d.return=a,$=d):vf(i);for(;s!==null;)$=s,Sm(s),s=s.sibling;$=i,to=c,Ie=f}gf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):gf(e)}}function gf(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Qh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qh(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var k=f.memoizedState;if(k!==null){var y=k.dehydrated;y!==null&&Ji(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ie||t.flags&512&&Tc(t)}catch(x){ce(t,t.return,x)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function mf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function vf(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xa(4,t)}catch(d){ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ce(t,i,d)}}var s=t.return;try{Tc(t)}catch(d){ce(t,s,d)}break;case 5:var a=t.return;try{Tc(t)}catch(d){ce(t,a,d)}}}catch(d){ce(t,t.return,d)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var Xx=Math.ceil,Ho=nn.ReactCurrentDispatcher,Ou=nn.ReactCurrentOwner,it=nn.ReactCurrentBatchConfig,q=0,xe=null,pe=null,ke=0,qe=0,Cr=zn(0),ve=0,as=null,sr=0,wa=0,Du=0,Fi=null,$e=null,Lu=0,Gr=1/0,Ft=null,Wo=!1,Ic=null,Nn=null,no=!1,_n=null,Ko=0,$i=0,Cc=null,vo=-1,yo=0;function Me(){return q&6?he():vo!==-1?vo:vo=he()}function In(e){return e.mode&1?q&2&&ke!==0?ke&-ke:Rx.transition!==null?(yo===0&&(yo=cg()),yo):(e=Y,e!==0||(e=window.event,e=e===void 0?16:mg(e.type)),e):1}function gt(e,t,n,r){if(50<$i)throw $i=0,Cc=null,Error(z(185));gs(e,n,r),(!(q&2)||e!==xe)&&(e===xe&&(!(q&2)&&(wa|=n),ve===4&&gn(e,ke)),Ge(e,r),n===1&&q===0&&!(t.mode&1)&&(Gr=he()+500,ma&&Un()))}function Ge(e,t){var n=e.callbackNode;R0(e,t);var r=Io(e,e===xe?ke:0);if(r===0)n!==null&&Sh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sh(n),t===1)e.tag===0?Px(yf.bind(null,e)):Dg(yf.bind(null,e)),jx(function(){!(q&6)&&Un()}),n=null;else{switch(ug(r)){case 1:n=lu;break;case 4:n=ag;break;case 16:n=No;break;case 536870912:n=lg;break;default:n=No}n=Am(n,Tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tm(e,t){if(vo=-1,yo=0,q&6)throw Error(z(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Io(e,e===xe?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var i=q;q|=2;var s=Nm();(xe!==e||ke!==t)&&(Ft=null,Gr=he()+500,er(e,t));do try{Qx();break}catch(c){jm(e,c)}while(!0);_u(),Ho.current=s,q=i,pe!==null?t=0:(xe=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=rc(e),i!==0&&(r=i,t=Pc(e,i))),t===1)throw n=as,er(e,0),gn(e,r),Ge(e,he()),n;if(t===6)gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jx(i)&&(t=Go(e,r),t===2&&(s=rc(e),s!==0&&(r=s,t=Pc(e,s))),t===1))throw n=as,er(e,0),gn(e,r),Ge(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:qn(e,$e,Ft);break;case 3:if(gn(e,r),(r&130023424)===r&&(t=Lu+500-he(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=dc(qn.bind(null,e,$e,Ft),t);break}qn(e,$e,Ft);break;case 4:if(gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-pt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xx(r/1960))-r,10<r){e.timeoutHandle=dc(qn.bind(null,e,$e,Ft),r);break}qn(e,$e,Ft);break;case 5:qn(e,$e,Ft);break;default:throw Error(z(329))}}}return Ge(e,he()),e.callbackNode===n?Tm.bind(null,e):null}function Pc(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=Go(e,t),e!==2&&(t=$e,$e=n,t!==null&&Rc(t)),e}function Rc(e){$e===null?$e=e:$e.push.apply($e,e)}function Jx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gn(e,t){for(t&=~Du,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function yf(e){if(q&6)throw Error(z(327));Mr();var t=Io(e,0);if(!(t&1))return Ge(e,he()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=rc(e);r!==0&&(t=r,n=Pc(e,r))}if(n===1)throw n=as,er(e,0),gn(e,t),Ge(e,he()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qn(e,$e,Ft),Ge(e,he()),null}function Mu(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Gr=he()+500,ma&&Un())}}function or(e){_n!==null&&_n.tag===0&&!(q&6)&&Mr();var t=q;q|=1;var n=it.transition,r=Y;try{if(it.transition=null,Y=1,e)return e()}finally{Y=r,it.transition=n,q=t,!(q&6)&&Un()}}function zu(){qe=Cr.current,re(Cr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tx(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Wr(),re(We),re(Pe),ju();break;case 5:Tu(r);break;case 4:Wr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:ku(r.type._context);break;case 22:case 23:zu()}n=n.return}if(xe=e,pe=e=Cn(e.current,null),ke=qe=t,ve=0,as=null,Du=wa=sr=0,$e=Fi=null,Yn!==null){for(t=0;t<Yn.length;t++)if(n=Yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Yn=null}return e}function jm(e,t){do{var n=pe;try{if(_u(),po.current=Vo,Bo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(ir=0,ye=me=ae=null,zi=!1,is=0,Ou.current=null,n===null||n.return===null){ve=1,as=t,pe=null;break}e:{var s=e,a=n.return,c=n,d=t;if(t=ke,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,k=c,y=k.tag;if(!(k.mode&1)&&(y===0||y===11||y===15)){var x=k.alternate;x?(k.updateQueue=x.updateQueue,k.memoizedState=x.memoizedState,k.lanes=x.lanes):(k.updateQueue=null,k.memoizedState=null)}var T=sf(a);if(T!==null){T.flags&=-257,of(T,a,c,s,t),T.mode&1&&rf(s,f,t),t=T,d=f;var I=t.updateQueue;if(I===null){var R=new Set;R.add(d),t.updateQueue=R}else I.add(d);break e}else{if(!(t&1)){rf(s,f,t),Uu();break e}d=Error(z(426))}}else if(ie&&c.mode&1){var A=sf(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),of(A,a,c,s,t),xu(Kr(d,c));break e}}s=d=Kr(d,c),ve!==4&&(ve=2),Fi===null?Fi=[s]:Fi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var E=um(s,d,t);Yh(s,E);break e;case 1:c=d;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Nn===null||!Nn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=dm(s,c,t);Yh(s,C);break e}}s=s.return}while(s!==null)}Cm(n)}catch(L){t=L,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Nm(){var e=Ho.current;return Ho.current=Vo,e===null?Vo:e}function Uu(){(ve===0||ve===3||ve===2)&&(ve=4),xe===null||!(sr&268435455)&&!(wa&268435455)||gn(xe,ke)}function Go(e,t){var n=q;q|=2;var r=Nm();(xe!==e||ke!==t)&&(Ft=null,er(e,t));do try{Yx();break}catch(i){jm(e,i)}while(!0);if(_u(),q=n,Ho.current=r,pe!==null)throw Error(z(261));return xe=null,ke=0,ve}function Yx(){for(;pe!==null;)Im(pe)}function Qx(){for(;pe!==null&&!b0();)Im(pe)}function Im(e){var t=Rm(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Cm(e):pe=t,Ou.current=null}function Cm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wx(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,pe=null;return}}else if(n=Hx(n,t,qe),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ve===0&&(ve=5)}function qn(e,t,n){var r=Y,i=it.transition;try{it.transition=null,Y=1,Zx(e,t,n,r)}finally{it.transition=i,Y=r}return null}function Zx(e,t,n,r){do Mr();while(_n!==null);if(q&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(A0(e,s),e===xe&&(pe=xe=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,Am(No,function(){return Mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var a=Y;Y=1;var c=q;q|=4,Ou.current=null,Gx(e,n),Em(n,e),xx(cc),Co=!!lc,cc=lc=null,e.current=n,qx(n),E0(),q=c,Y=a,it.transition=s}else e.current=n;if(no&&(no=!1,_n=e,Ko=i),s=e.pendingLanes,s===0&&(Nn=null),j0(n.stateNode),Ge(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,e=Ic,Ic=null,e;return Ko&1&&e.tag!==0&&Mr(),s=e.pendingLanes,s&1?e===Cc?$i++:($i=0,Cc=e):$i=0,Un(),null}function Mr(){if(_n!==null){var e=ug(Ko),t=it.transition,n=Y;try{if(it.transition=null,Y=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,Ko=0,q&6)throw Error(z(331));var i=q;for(q|=4,$=e.current;$!==null;){var s=$,a=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var f=c[d];for($=f;$!==null;){var k=$;switch(k.tag){case 0:case 11:case 15:Ui(8,k,s)}var y=k.child;if(y!==null)y.return=k,$=y;else for(;$!==null;){k=$;var x=k.sibling,T=k.return;if(_m(k),k===f){$=null;break}if(x!==null){x.return=T,$=x;break}$=T}}}var I=s.alternate;if(I!==null){var R=I.child;if(R!==null){I.child=null;do{var A=R.sibling;R.sibling=null,R=A}while(R!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,$=E;break e}$=s.return}}var m=e.current;for($=m;$!==null;){a=$;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,$=v;else e:for(a=m;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:xa(9,c)}}catch(L){ce(c,c.return,L)}if(c===a){$=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,$=C;break e}$=c.return}}if(q=i,Un(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(da,e)}catch{}r=!0}return r}finally{Y=n,it.transition=t}}return!1}function xf(e,t,n){t=Kr(n,t),t=um(e,t,1),e=jn(e,t,1),t=Me(),e!==null&&(gs(e,1,t),Ge(e,t))}function ce(e,t,n){if(e.tag===3)xf(e,e,n);else for(;t!==null;){if(t.tag===3){xf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=Kr(n,e),e=dm(t,e,1),t=jn(t,e,1),e=Me(),t!==null&&(gs(t,1,e),Ge(t,e));break}}t=t.return}}function e1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>he()-Lu?er(e,0):Du|=n),Ge(e,t)}function Pm(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=Me();e=Qt(e,t),e!==null&&(gs(e,t,n),Ge(e,n))}function t1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pm(e,n)}function n1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Pm(e,n)}var Rm;Rm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Vx(e,t,n);He=!!(e.flags&131072)}else He=!1,ie&&t.flags&1048576&&Lg(t,Mo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mo(e,t),e=t.pendingProps;var i=Br(t,Pe.current);Lr(t,n),i=Iu(null,t,r,e,i,n);var s=Cu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(s=!0,Do(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eu(t),i.updater=ya,t.stateNode=i,i._reactInternals=t,yc(t,r,e,n),t=_c(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&vu(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=i1(r),e=ct(r,e),i){case 0:t=wc(null,t,r,e,n);break e;case 1:t=cf(null,t,r,e,n);break e;case 11:t=af(null,t,r,e,n);break e;case 14:t=lf(null,t,r,ct(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),wc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),cf(e,t,r,i,n);case 3:e:{if(gm(t),e===null)throw Error(z(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Bg(e,t),Fo(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Kr(Error(z(423)),t),t=uf(e,t,r,n,i);break e}else if(r!==i){i=Kr(Error(z(424)),t),t=uf(e,t,r,n,i);break e}else for(Xe=Tn(t.stateNode.containerInfo.firstChild),Je=t,ie=!0,dt=null,n=Fg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){t=Zt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Vg(t),e===null&&gc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,uc(r,i)?a=null:s!==null&&uc(r,s)&&(t.flags|=32),pm(e,t),De(e,t,a,n),t.child;case 6:return e===null&&gc(t),null;case 13:return mm(e,t,n);case 4:return Su(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),af(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ee(zo,r._currentValue),r._currentValue=a,s!==null)if(mt(s.value,a)){if(s.children===i.children&&!We.current){t=Zt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){a=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=Gt(-1,n&-n),d.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var k=f.pending;k===null?d.next=d:(d.next=k.next,k.next=d),f.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),mc(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(z(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),mc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=st(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),lf(e,t,r,i,n);case 15:return hm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),mo(e,t),t.tag=1,Ke(r)?(e=!0,Do(t)):e=!1,Lr(t,n),cm(t,r,i),yc(t,r,i,n),_c(null,t,r,!0,e,n);case 19:return vm(e,t,n);case 22:return fm(e,t,n)}throw Error(z(156,t.tag))};function Am(e,t){return og(e,t)}function r1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new r1(e,t,n,r)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i1(e){if(typeof e=="function")return Fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===su)return 11;if(e===ou)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Fu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case wr:return tr(n.children,i,s,t);case iu:a=8,i|=8;break;case Bl:return e=rt(12,n,t,i|2),e.elementType=Bl,e.lanes=s,e;case Vl:return e=rt(13,n,t,i),e.elementType=Vl,e.lanes=s,e;case Hl:return e=rt(19,n,t,i),e.elementType=Hl,e.lanes=s,e;case Vp:return _a(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $p:a=10;break e;case Bp:a=9;break e;case su:a=11;break e;case ou:a=14;break e;case hn:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function tr(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function _a(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Vp,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,i,s,a,c,d){return e=new s1(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(s),e}function o1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Om(e){if(!e)return Dn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Og(e,n,t)}return t}function Dm(e,t,n,r,i,s,a,c,d){return e=$u(n,r,!0,e,i,s,a,c,d),e.context=Om(null),n=e.current,r=Me(),i=In(n),s=Gt(r,i),s.callback=t??null,jn(n,s,i),e.current.lanes=i,gs(e,i,r),Ge(e,r),e}function ka(e,t,n,r){var i=t.current,s=Me(),a=In(i);return n=Om(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jn(i,t,a),e!==null&&(gt(e,i,a,s),fo(e,i,a)),a}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function a1(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}ba.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ka(e,t,null,null)};ba.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){ka(null,e,null,null)}),t[Yt]=null}};function ba(e){this._internalRoot=e}ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=fg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&gg(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _f(){}function l1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=qo(a);s.call(f)}}var a=Dm(t,r,e,0,null,!1,!1,"",_f);return e._reactRootContainer=a,e[Yt]=a.current,Zi(e.nodeType===8?e.parentNode:e),or(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var f=qo(d);c.call(f)}}var d=$u(e,0,!1,null,null,!1,!1,"",_f);return e._reactRootContainer=d,e[Yt]=d.current,Zi(e.nodeType===8?e.parentNode:e),or(function(){ka(t,d,n,r)}),d}function Sa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var c=i;i=function(){var d=qo(a);c.call(d)}}ka(t,a,e,i)}else a=l1(n,t,e,i,r);return qo(a)}dg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ii(t.pendingLanes);n!==0&&(cu(t,n|1),Ge(t,he()),!(q&6)&&(Gr=he()+500,Un()))}break;case 13:or(function(){var r=Qt(e,1);if(r!==null){var i=Me();gt(r,e,1,i)}}),Bu(e,1)}};uu=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=Me();gt(t,e,134217728,n)}Bu(e,134217728)}};hg=function(e){if(e.tag===13){var t=In(e),n=Qt(e,t);if(n!==null){var r=Me();gt(n,e,t,r)}Bu(e,t)}};fg=function(){return Y};pg=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};ec=function(e,t,n){switch(t){case"input":if(Gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ga(r);if(!i)throw Error(z(90));Wp(r),Gl(r,i)}}}break;case"textarea":Gp(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};eg=Mu;tg=or;var c1={usingClientEntryPoint:!1,Events:[vs,Er,ga,Qp,Zp,Mu]},Si={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u1={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ig(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||a1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{da=ro.inject(u1),bt=ro}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(t))throw Error(z(200));return o1(e,t,null,n)};Qe.createRoot=function(e,t){if(!Hu(e))throw Error(z(299));var n=!1,r="",i=Lm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$u(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,Zi(e.nodeType===8?e.parentNode:e),new Vu(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=ig(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return or(e)};Qe.hydrate=function(e,t,n){if(!Ea(t))throw Error(z(200));return Sa(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Hu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Lm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Dm(t,null,e,1,n??null,i,!1,s,a),e[Yt]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ba(t)};Qe.render=function(e,t,n){if(!Ea(t))throw Error(z(200));return Sa(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(z(40));return e._reactRootContainer?(or(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Mu;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ea(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Sa(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mm)}catch(e){console.error(e)}}Mm(),Mp.exports=Qe;var d1=Mp.exports,kf=d1;Fl.createRoot=kf.createRoot,Fl.hydrateRoot=kf.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}var kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kn||(kn={}));const bf="popstate";function h1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:c}=r.location;return Ac("",{pathname:s,search:a,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xo(i)}return p1(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f1(){return Math.random().toString(36).substr(2,8)}function Ef(e,t){return{usr:e.state,key:e.key,idx:t}}function Ac(e,t,n,r){return n===void 0&&(n=null),ls({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ei(t):t,{state:n,key:t&&t.key||r||f1()})}function Xo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ei(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,c=kn.Pop,d=null,f=k();f==null&&(f=0,a.replaceState(ls({},a.state,{idx:f}),""));function k(){return(a.state||{idx:null}).idx}function y(){c=kn.Pop;let A=k(),E=A==null?null:A-f;f=A,d&&d({action:c,location:R.location,delta:E})}function x(A,E){c=kn.Push;let m=Ac(R.location,A,E);f=k()+1;let v=Ef(m,f),C=R.createHref(m);try{a.pushState(v,"",C)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(C)}s&&d&&d({action:c,location:R.location,delta:1})}function T(A,E){c=kn.Replace;let m=Ac(R.location,A,E);f=k();let v=Ef(m,f),C=R.createHref(m);a.replaceState(v,"",C),s&&d&&d({action:c,location:R.location,delta:0})}function I(A){let E=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof A=="string"?A:Xo(A);return m=m.replace(/ $/,"%20"),fe(E,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,E)}let R={get action(){return c},get location(){return e(i,a)},listen(A){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(bf,y),d=A,()=>{i.removeEventListener(bf,y),d=null}},createHref(A){return t(i,A)},createURL:I,encodeLocation(A){let E=I(A);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:x,replace:T,go(A){return a.go(A)}};return R}var Sf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sf||(Sf={}));function g1(e,t,n){return n===void 0&&(n="/"),m1(e,t,n)}function m1(e,t,n,r){let i=typeof t=="string"?ei(t):t,s=Ku(i.pathname||"/",n);if(s==null)return null;let a=zm(e);v1(a);let c=null;for(let d=0;c==null&&d<a.length;++d){let f=I1(s);c=T1(a[d],f)}return c}function zm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};d.relativePath.startsWith("/")&&(fe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Pn([r,d.relativePath]),k=n.concat(d);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),zm(s.children,t,k,f)),!(s.path==null&&!s.index)&&t.push({path:f,score:E1(f,s.index),routesMeta:k})};return e.forEach((s,a)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,a);else for(let d of Um(s.path))i(s,a,d)}),t}function Um(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Um(r.join("/")),c=[];return c.push(...a.map(d=>d===""?s:[s,d].join("/"))),i&&c.push(...a),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function v1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:S1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y1=/^:[\w-]+$/,x1=3,w1=2,_1=1,k1=10,b1=-2,Tf=e=>e==="*";function E1(e,t){let n=e.split("/"),r=n.length;return n.some(Tf)&&(r+=b1),t&&(r+=w1),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(y1.test(s)?x1:s===""?_1:k1),r)}function S1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function T1(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let c=0;c<r.length;++c){let d=r[c],f=c===r.length-1,k=s==="/"?t:t.slice(s.length)||"/",y=j1({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},k),x=d.route;if(!y)return null;Object.assign(i,y.params),a.push({params:i,pathname:Pn([s,y.pathname]),pathnameBase:O1(Pn([s,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(s=Pn([s,y.pathnameBase]))}return a}function j1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((f,k,y)=>{let{paramName:x,isOptional:T}=k;if(x==="*"){let R=c[y]||"";a=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const I=c[y];return T&&!I?f[x]=void 0:f[x]=(I||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:a,pattern:e}}function N1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function I1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Wu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ku(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const C1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P1=e=>C1.test(e);function R1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ei(e):e,s;if(n)if(P1(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Wu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=jf(n.substring(1),"/"):s=jf(n,t)}else s=t;return{pathname:s,search:D1(r),hash:L1(i)}}function jf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Il(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gu(e,t){let n=A1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ei(e):(i=ls({},e),fe(!i.pathname||!i.pathname.includes("?"),Il("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Il("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Il("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,c;if(a==null)c=n;else{let y=t.length-1;if(!r&&a.startsWith("..")){let x=a.split("/");for(;x[0]==="..";)x.shift(),y-=1;i.pathname=x.join("/")}c=y>=0?t[y]:"/"}let d=R1(i,c),f=a&&a!=="/"&&a.endsWith("/"),k=(s||a===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||k)&&(d.pathname+="/"),d}const Pn=e=>e.join("/").replace(/\/\/+/g,"/"),O1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function M1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fm=["post","put","patch","delete"];new Set(Fm);const z1=["get",...Fm];new Set(z1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}const Xu=O.createContext(null),U1=O.createContext(null),Fn=O.createContext(null),Ta=O.createContext(null),rn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),$m=O.createContext(null);function F1(e,t){let{relative:n}=t===void 0?{}:t;ti()||fe(!1);let{basename:r,navigator:i}=O.useContext(Fn),{hash:s,pathname:a,search:c}=Vm(e,{relative:n}),d=a;return r!=="/"&&(d=a==="/"?r:Pn([r,a])),i.createHref({pathname:d,search:c,hash:s})}function ti(){return O.useContext(Ta)!=null}function sn(){return ti()||fe(!1),O.useContext(Ta).location}function Bm(e){O.useContext(Fn).static||O.useLayoutEffect(e)}function It(){let{isDataRoute:e}=O.useContext(rn);return e?ew():$1()}function $1(){ti()||fe(!1);let e=O.useContext(Xu),{basename:t,future:n,navigator:r}=O.useContext(Fn),{matches:i}=O.useContext(rn),{pathname:s}=sn(),a=JSON.stringify(Gu(i,n.v7_relativeSplatPath)),c=O.useRef(!1);return Bm(()=>{c.current=!0}),O.useCallback(function(f,k){if(k===void 0&&(k={}),!c.current)return;if(typeof f=="number"){r.go(f);return}let y=qu(f,JSON.parse(a),s,k.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Pn([t,y.pathname])),(k.replace?r.replace:r.push)(y,k.state,k)},[t,r,a,s,e])}function B1(){let{matches:e}=O.useContext(rn),t=e[e.length-1];return t?t.params:{}}function Vm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.useContext(Fn),{matches:i}=O.useContext(rn),{pathname:s}=sn(),a=JSON.stringify(Gu(i,r.v7_relativeSplatPath));return O.useMemo(()=>qu(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function V1(e,t){return H1(e,t)}function H1(e,t,n,r){ti()||fe(!1);let{navigator:i}=O.useContext(Fn),{matches:s}=O.useContext(rn),a=s[s.length-1],c=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=sn(),k;if(t){var y;let A=typeof t=="string"?ei(t):t;d==="/"||(y=A.pathname)!=null&&y.startsWith(d)||fe(!1),k=A}else k=f;let x=k.pathname||"/",T=x;if(d!=="/"){let A=d.replace(/^\//,"").split("/");T="/"+x.replace(/^\//,"").split("/").slice(A.length).join("/")}let I=g1(e,{pathname:T}),R=X1(I&&I.map(A=>Object.assign({},A,{params:Object.assign({},c,A.params),pathname:Pn([d,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?d:Pn([d,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r);return t&&R?O.createElement(Ta.Provider,{value:{location:cs({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:kn.Pop}},R):R}function W1(){let e=Z1(),t=M1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:i},n):null,null)}const K1=O.createElement(W1,null);class G1 extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(rn.Provider,{value:this.props.routeContext},O.createElement($m.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q1(e){let{routeContext:t,match:n,children:r}=e,i=O.useContext(Xu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(rn.Provider,{value:t},r)}function X1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let k=a.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);k>=0||fe(!1),a=a.slice(0,Math.min(a.length,k+1))}let d=!1,f=-1;if(n&&r&&r.v7_partialHydration)for(let k=0;k<a.length;k++){let y=a[k];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=k),y.route.id){let{loaderData:x,errors:T}=n,I=y.route.loader&&x[y.route.id]===void 0&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){d=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((k,y,x)=>{let T,I=!1,R=null,A=null;n&&(T=c&&y.route.id?c[y.route.id]:void 0,R=y.route.errorElement||K1,d&&(f<0&&x===0?(tw("route-fallback"),I=!0,A=null):f===x&&(I=!0,A=y.route.hydrateFallbackElement||null)));let E=t.concat(a.slice(0,x+1)),m=()=>{let v;return T?v=R:I?v=A:y.route.Component?v=O.createElement(y.route.Component,null):y.route.element?v=y.route.element:v=k,O.createElement(q1,{match:y,routeContext:{outlet:k,matches:E,isDataRoute:n!=null},children:v})};return n&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?O.createElement(G1,{location:n.location,revalidation:n.revalidation,component:R,error:T,children:m(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):m()},null)}var Hm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hm||{}),Wm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wm||{});function J1(e){let t=O.useContext(Xu);return t||fe(!1),t}function Y1(e){let t=O.useContext(U1);return t||fe(!1),t}function Q1(e){let t=O.useContext(rn);return t||fe(!1),t}function Km(e){let t=Q1(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Z1(){var e;let t=O.useContext($m),n=Y1(),r=Km();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ew(){let{router:e}=J1(Hm.UseNavigateStable),t=Km(Wm.UseNavigateStable),n=O.useRef(!1);return Bm(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,cs({fromRouteId:t},s)))},[e,t])}const Nf={};function tw(e,t,n){Nf[e]||(Nf[e]=!0)}function nw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function wo(e){let{to:t,replace:n,state:r,relative:i}=e;ti()||fe(!1);let{future:s,static:a}=O.useContext(Fn),{matches:c}=O.useContext(rn),{pathname:d}=sn(),f=It(),k=qu(t,Gu(c,s.v7_relativeSplatPath),d,i==="path"),y=JSON.stringify(k);return O.useEffect(()=>f(JSON.parse(y),{replace:n,state:r,relative:i}),[f,y,i,n,r]),null}function Oe(e){fe(!1)}function rw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=kn.Pop,navigator:s,static:a=!1,future:c}=e;ti()&&fe(!1);let d=t.replace(/^\/*/,"/"),f=O.useMemo(()=>({basename:d,navigator:s,static:a,future:cs({v7_relativeSplatPath:!1},c)}),[d,c,s,a]);typeof r=="string"&&(r=ei(r));let{pathname:k="/",search:y="",hash:x="",state:T=null,key:I="default"}=r,R=O.useMemo(()=>{let A=Ku(k,d);return A==null?null:{location:{pathname:A,search:y,hash:x,state:T,key:I},navigationType:i}},[d,k,y,x,T,I,i]);return R==null?null:O.createElement(Fn.Provider,{value:f},O.createElement(Ta.Provider,{children:n,value:R}))}function If(e){let{children:t,location:n}=e;return V1(Oc(t),n)}new Promise(()=>{});function Oc(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,i)=>{if(!O.isValidElement(r))return;let s=[...t,i];if(r.type===O.Fragment){n.push.apply(n,Oc(r.props.children,s));return}r.type!==Oe&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Oc(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dc.apply(this,arguments)}function iw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ow(e,t){return e.button===0&&(!t||t==="_self")&&!sw(e)}function Lc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function aw(e,t){let n=Lc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const lw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cw="6";try{window.__reactRouterVersion=cw}catch{}const uw="startTransition",Cf=e0[uw];function dw(e){let{basename:t,children:n,future:r,window:i}=e,s=O.useRef();s.current==null&&(s.current=h1({window:i,v5Compat:!0}));let a=s.current,[c,d]=O.useState({action:a.action,location:a.location}),{v7_startTransition:f}=r||{},k=O.useCallback(y=>{f&&Cf?Cf(()=>d(y)):d(y)},[d,f]);return O.useLayoutEffect(()=>a.listen(k),[a,k]),O.useEffect(()=>nw(r),[r]),O.createElement(rw,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:a,future:r})}const hw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=O.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:c,target:d,to:f,preventScrollReset:k,viewTransition:y}=t,x=iw(t,lw),{basename:T}=O.useContext(Fn),I,R=!1;if(typeof f=="string"&&fw.test(f)&&(I=f,hw))try{let v=new URL(window.location.href),C=f.startsWith("//")?new URL(v.protocol+f):new URL(f),L=Ku(C.pathname,T);C.origin===v.origin&&L!=null?f=L+C.search+C.hash:R=!0}catch{}let A=F1(f,{relative:i}),E=pw(f,{replace:a,state:c,target:d,preventScrollReset:k,relative:i,viewTransition:y});function m(v){r&&r(v),v.defaultPrevented||E(v)}return O.createElement("a",Dc({},x,{href:I||A,onClick:R||s?r:m,ref:n,target:d}))});var Pf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pf||(Pf={}));var Rf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rf||(Rf={}));function pw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:c}=t===void 0?{}:t,d=It(),f=sn(),k=Vm(e,{relative:a});return O.useCallback(y=>{if(ow(y,n)){y.preventDefault();let x=r!==void 0?r:Xo(f)===Xo(k);d(e,{replace:x,state:i,preventScrollReset:s,relative:a,viewTransition:c})}},[f,d,k,r,i,n,e,s,a,c])}function gw(e){let t=O.useRef(Lc(e)),n=O.useRef(!1),r=sn(),i=O.useMemo(()=>aw(r.search,n.current?null:t.current),[r.search]),s=It(),a=O.useCallback((c,d)=>{const f=Lc(typeof c=="function"?c(i):c);n.current=!0,s("?"+f,d)},[s,i]);return[i,a]}const Gm=O.createContext(void 0),ni=()=>{const e=O.useContext(Gm);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},mw=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},vw=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},yw=({children:e})=>{const[t,n]=O.useState(null),[r,i]=O.useState(!0),[s,a]=O.useState(null),c=async()=>{try{i(!0),a(null);const{type:f,value:k}=vw(),y=f==="subdomain"?`/api/tenants/by-subdomain/${k}`:`/api/tenants/by-domain/${encodeURIComponent(k)}`,x=await fetch(`http://localhost:3001${y}`);if(!x.ok)throw x.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const T=await x.json();if(T.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(T.status==="cancelled")throw new Error("Cuenta cancelada.");n(T),mw(T.branding)}catch(f){a(f instanceof Error?f.message:"Error desconocido")}finally{i(!1)}};O.useEffect(()=>{c()},[]);const d=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return l.jsx(Gm.Provider,{value:{tenant:t,loading:r,error:s,isWhiteLabel:d,refreshTenant:c},children:e})};var Af={};/**
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
 */const qm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],c=e[n++],d=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,c=a?e[i+1]:0,d=i+2<e.length,f=d?e[i+2]:0,k=s>>2,y=(s&3)<<4|c>>4;let x=(c&15)<<2|f>>6,T=f&63;d||(T=64,a||(x=64)),r.push(n[k],n[y],n[x],n[T])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const f=i<e.length?n[e.charAt(i)]:64;++i;const y=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||f==null||y==null)throw new ww;const x=s<<2|c>>4;if(r.push(x),f!==64){const T=c<<4&240|f>>2;if(r.push(T),y!==64){const I=f<<6&192|y;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(e){const t=qm(e);return Xm.encodeByteArray(t,!0)},Jo=function(e){return _w(e).replace(/\./g,"")},Jm=function(e){try{return Xm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bw=()=>kw().__FIREBASE_DEFAULTS__,Ew=()=>{if(typeof process>"u"||typeof Af>"u")return;const e=Af.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Jm(e[1]);return t&&JSON.parse(t)},Ju=()=>{try{return bw()||Ew()||Sw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ym=e=>{var t,n;return(n=(t=Ju())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Qm=e=>{const t=Ym(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Zm=()=>{var e;return(e=Ju())===null||e===void 0?void 0:e.config},ev=e=>{var t;return(t=Ju())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Tw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function tv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Jo(JSON.stringify(n)),Jo(JSON.stringify(a)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Nw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Iw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Cw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pw(){const e=ze();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function Aw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Ow="FirebaseError";class Ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ow,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Dw(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ct(i,c,r)}}function Dw(e,t){return e.replace(Lw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Lw=/\{\$([^}]+)}/g;function Mw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Yo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Of(s)&&Of(a)){if(!Yo(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Of(e){return e!==null&&typeof e=="object"}/**
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
 */function ws(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Pi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Ri(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function zw(e,t){const n=new Uw(e,t);return n.subscribe.bind(n)}class Uw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Cl),i.error===void 0&&(i.error=Cl),i.complete===void 0&&(i.complete=Cl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Cl(){}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class $w{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Tw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vw(t))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Xn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xn){return this.instances.has(t)}getOptions(t=Xn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xn){return this.component?this.component.multipleInstances?t:Xn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bw(e){return e===Xn?void 0:e}function Vw(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $w(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const Ww={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Kw=J.INFO,Gw={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},qw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Gw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yu{constructor(t){this.name=t,this._logLevel=Kw,this._logHandler=qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ww[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Xw=(e,t)=>t.some(n=>e instanceof n);let Df,Lf;function Jw(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yw(){return Lf||(Lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nv=new WeakMap,Mc=new WeakMap,rv=new WeakMap,Pl=new WeakMap,Qu=new WeakMap;function Qw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Rn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&nv.set(n,e)}).catch(()=>{}),Qu.set(t,e),t}function Zw(e){if(Mc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Mc.set(e,t)}let zc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||rv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function e2(e){zc=e(zc)}function t2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Rl(this),t,...n);return rv.set(r,t.sort?t.sort():[t]),Rn(r)}:Yw().includes(e)?function(...t){return e.apply(Rl(this),t),Rn(nv.get(this))}:function(...t){return Rn(e.apply(Rl(this),t))}}function n2(e){return typeof e=="function"?t2(e):(e instanceof IDBTransaction&&Zw(e),Xw(e,Jw())?new Proxy(e,zc):e)}function Rn(e){if(e instanceof IDBRequest)return Qw(e);if(Pl.has(e))return Pl.get(e);const t=n2(e);return t!==e&&(Pl.set(e,t),Qu.set(t,e)),t}const Rl=e=>Qu.get(e);function r2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),c=Rn(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Rn(a.result),d.oldVersion,d.newVersion,Rn(a.transaction),d)}),n&&a.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const i2=["get","getKey","getAll","getAllKeys","count"],s2=["put","add","delete","clear"],Al=new Map;function Mf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Al.get(t))return Al.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=s2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||i2.includes(n)))return;const s=async function(a,...c){const d=this.transaction(a,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),i&&d.done]))[0]};return Al.set(t,s),s}e2(e=>({...e,get:(t,n,r)=>Mf(t,n)||e.get(t,n,r),has:(t,n)=>!!Mf(t,n)||e.has(t,n)}));/**
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
 */class o2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Uc="@firebase/app",zf="0.10.13";/**
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
 */const en=new Yu("@firebase/app"),l2="@firebase/app-compat",c2="@firebase/analytics-compat",u2="@firebase/analytics",d2="@firebase/app-check-compat",h2="@firebase/app-check",f2="@firebase/auth",p2="@firebase/auth-compat",g2="@firebase/database",m2="@firebase/data-connect",v2="@firebase/database-compat",y2="@firebase/functions",x2="@firebase/functions-compat",w2="@firebase/installations",_2="@firebase/installations-compat",k2="@firebase/messaging",b2="@firebase/messaging-compat",E2="@firebase/performance",S2="@firebase/performance-compat",T2="@firebase/remote-config",j2="@firebase/remote-config-compat",N2="@firebase/storage",I2="@firebase/storage-compat",C2="@firebase/firestore",P2="@firebase/vertexai-preview",R2="@firebase/firestore-compat",A2="firebase",O2="10.14.1";/**
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
 */const Fc="[DEFAULT]",D2={[Uc]:"fire-core",[l2]:"fire-core-compat",[u2]:"fire-analytics",[c2]:"fire-analytics-compat",[h2]:"fire-app-check",[d2]:"fire-app-check-compat",[f2]:"fire-auth",[p2]:"fire-auth-compat",[g2]:"fire-rtdb",[m2]:"fire-data-connect",[v2]:"fire-rtdb-compat",[y2]:"fire-fn",[x2]:"fire-fn-compat",[w2]:"fire-iid",[_2]:"fire-iid-compat",[k2]:"fire-fcm",[b2]:"fire-fcm-compat",[E2]:"fire-perf",[S2]:"fire-perf-compat",[T2]:"fire-rc",[j2]:"fire-rc-compat",[N2]:"fire-gcs",[I2]:"fire-gcs-compat",[C2]:"fire-fst",[R2]:"fire-fst-compat",[P2]:"fire-vertex","fire-js":"fire-js",[A2]:"fire-js-all"};/**
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
 */const Qo=new Map,L2=new Map,$c=new Map;function Uf(e,t){try{e.container.addComponent(t)}catch(n){en.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ar(e){const t=e.name;if($c.has(t))return en.debug(`There were multiple attempts to register component ${t}.`),!1;$c.set(t,e);for(const n of Qo.values())Uf(n,e);for(const n of L2.values())Uf(n,e);return!0}function ja(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kt(e){return e.settings!==void 0}/**
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
 */const M2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new xs("app","Firebase",M2);/**
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
 */class z2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=O2;function iv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=Zm()),!n)throw An.create("no-options");const s=Qo.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const a=new Hw(i);for(const d of $c.values())a.addComponent(d);const c=new z2(n,r,a);return Qo.set(i,c),c}function Zu(e=Fc){const t=Qo.get(e);if(!t&&e===Fc&&Zm())return iv();if(!t)throw An.create("no-app",{appName:e});return t}function St(e,t,n){var r;let i=(r=D2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),en.warn(c.join(" "));return}ar(new Ln(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const U2="firebase-heartbeat-database",F2=1,us="firebase-heartbeat-store";let Ol=null;function sv(){return Ol||(Ol=r2(U2,F2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(e=>{throw An.create("idb-open",{originalErrorMessage:e.message})})),Ol}async function $2(e){try{const n=(await sv()).transaction(us),r=await n.objectStore(us).get(ov(e));return await n.done,r}catch(t){if(t instanceof Ct)en.warn(t.message);else{const n=An.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});en.warn(n.message)}}}async function Ff(e,t){try{const r=(await sv()).transaction(us,"readwrite");await r.objectStore(us).put(t,ov(e)),await r.done}catch(n){if(n instanceof Ct)en.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function ov(e){return`${e.name}!${e.options.appId}`}/**
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
 */const B2=1024,V2=30*24*60*60*1e3;class H2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$f();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=V2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$f(),{heartbeatsToSend:r,unsentEntries:i}=W2(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function $f(){return new Date().toISOString().substring(0,10)}function W2(e,t=B2){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Bf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class K2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?Aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Bf(e){return Jo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function G2(e){ar(new Ln("platform-logger",t=>new o2(t),"PRIVATE")),ar(new Ln("heartbeat",t=>new H2(t),"PRIVATE")),St(Uc,zf,e),St(Uc,zf,"esm2017"),St("fire-js","")}G2("");function ed(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q2=av,lv=new xs("auth","Firebase",av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Yu("@firebase/auth");function X2(e,...t){Zo.logLevel<=J.WARN&&Zo.warn(`Auth (${hr}): ${e}`,...t)}function _o(e,...t){Zo.logLevel<=J.ERROR&&Zo.error(`Auth (${hr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,...t){throw td(e,...t)}function Tt(e,...t){return td(e,...t)}function cv(e,t,n){const r=Object.assign(Object.assign({},q2()),{[t]:n});return new xs("auth","Firebase",r).create(t,{appName:e.name})}function qt(e){return cv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function td(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return lv.create(e,...t)}function B(e,t,...n){if(!e)throw td(t,...n)}function Ht(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _o(t),new Error(t)}function tn(e,t){e||Ht(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function J2(){return Vf()==="http:"||Vf()==="https:"}function Vf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J2()||Iw()||"connection"in navigator)?navigator.onLine:!0}function Q2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n){this.shortDelay=t,this.longDelay=n,tn(n>t,"Short delay should be less than long delay!"),this.isMobile=jw()||Cw()}get(){return Y2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e,t){tn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new _s(3e4,6e4);function on(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pt(e,t,n,r,i={}){return dv(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const c=ws(Object.assign({key:e.config.apiKey},a)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const f=Object.assign({method:t,headers:d},s);return Nw()||(f.referrerPolicy="no-referrer"),uv.fetch()(hv(e,e.config.apiHost,n,c),f)})}async function dv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z2),t);try{const i=new n_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw io(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[d,f]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(e,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw io(e,"email-already-in-use",a);if(d==="USER_DISABLED")throw io(e,"user-disabled",a);const k=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw cv(e,k,f);vt(e,k)}}catch(i){if(i instanceof Ct)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function ks(e,t,n,r,i={}){const s=await Pt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function hv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?nd(e.config,i):`${e.config.apiScheme}://${i}`}function t_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),e_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}function Hf(e){return e!==void 0&&e.enterprise!==void 0}class r_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return t_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function i_(e,t){return Pt(e,"GET","/v2/recaptchaConfig",on(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(e,t){return Pt(e,"POST","/v1/accounts:delete",t)}async function fv(e,t){return Pt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function o_(e,t=!1){const n=yt(e),r=await n.getIdToken(t),i=rd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bi(Dl(i.auth_time)),issuedAtTime:Bi(Dl(i.iat)),expirationTime:Bi(Dl(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dl(e){return Number(e)*1e3}function rd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jm(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wf(e){const t=rd(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ct&&a_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function a_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ea(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qr(e,fv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?pv(s.providerUserInfo):[],c=u_(e.providerData,a),d=e.isAnonymous,f=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),k=d?f:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Vc(s.createdAt,s.lastLoginAt),isAnonymous:k};Object.assign(e,y)}async function c_(e){const t=yt(e);await ea(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function u_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function pv(e){return e.map(t=>{var{providerId:n}=t,r=ed(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(e,t){const n=await dv(e,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=hv(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h_(e,t){return Pt(e,"POST","/v2/accounts:revokeToken",on(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=Wf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new zr;return r&&(B(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Wt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ed(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new l_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await qr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return o_(this,t)}reload(){return c_(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Wt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(qt(this.auth));const t=await this.getIdToken();return await qr(this,s_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,c,d,f,k;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,x=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,A=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,E=(f=n.createdAt)!==null&&f!==void 0?f:void 0,m=(k=n.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:v,emailVerified:C,isAnonymous:L,providerData:M,stsTokenManager:_}=n;B(v&&_,t,"internal-error");const g=zr.fromJSON(this.name,_);B(typeof v=="string",t,"internal-error"),dn(y,t.name),dn(x,t.name),B(typeof C=="boolean",t,"internal-error"),B(typeof L=="boolean",t,"internal-error"),dn(T,t.name),dn(I,t.name),dn(R,t.name),dn(A,t.name),dn(E,t.name),dn(m,t.name);const w=new Wt({uid:v,auth:t,email:x,emailVerified:C,displayName:y,isAnonymous:L,photoURL:I,phoneNumber:T,tenantId:R,stsTokenManager:g,createdAt:E,lastLoginAt:m});return M&&Array.isArray(M)&&(w.providerData=M.map(S=>Object.assign({},S))),A&&(w._redirectEventId=A),w}static async _fromIdTokenResponse(t,n,r=!1){const i=new zr;i.updateFromServerResponse(n);const s=new Wt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ea(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new zr;c.updateFromIdToken(r);const d=new Wt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Vc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,f),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map;function Kt(e){tn(e instanceof Function,"Expected a class definition");let t=Kf.get(e);return t?(tn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Kf.set(e,t),t)}/**
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
 */class gv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gv.type="NONE";const Gf=gv;/**
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
 */function ko(e,t,n){return`firebase:${e}:${t}:${n}`}class Ur{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ko(this.userKey,i.apiKey,s),this.fullPersistenceKey=ko("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Wt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ur(Kt(Gf),t,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Kt(Gf);const a=ko(r,t.config.apiKey,t.name);let c=null;for(const f of n)try{const k=await f._get(a);if(k){const y=Wt._fromJSON(t,k);f!==s&&(c=y),s=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new Ur(s,t,r):(s=d[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Ur(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_v(t))return"Blackberry";if(kv(t))return"Webos";if(vv(t))return"Safari";if((t.includes("chrome/")||yv(t))&&!t.includes("edge/"))return"Chrome";if(wv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mv(e=ze()){return/firefox\//i.test(e)}function vv(e=ze()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yv(e=ze()){return/crios\//i.test(e)}function xv(e=ze()){return/iemobile/i.test(e)}function wv(e=ze()){return/android/i.test(e)}function _v(e=ze()){return/blackberry/i.test(e)}function kv(e=ze()){return/webos/i.test(e)}function id(e=ze()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function f_(e=ze()){var t;return id(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function p_(){return Pw()&&document.documentMode===10}function bv(e=ze()){return id(e)||wv(e)||kv(e)||_v(e)||/windows phone/i.test(e)||xv(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(e,t=[]){let n;switch(e){case"Browser":n=qf(ze());break;case"Worker":n=`${qf(ze())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${r}`}/**
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
 */class g_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,c)=>{try{const d=t(s);a(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function m_(e,t={}){return Pt(e,"GET","/v2/passwordPolicy",on(e,t))}/**
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
 */const v_=6;class y_{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:v_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xf(this),this.idTokenSubscription=new Xf(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await fv(this,{idToken:t}),r=await Wt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(t);(!a||a===c)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ea(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Q2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kt(this.app))return Promise.reject(qt(this));const n=t?yt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kt(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await m_(this),n=new y_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await h_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Kt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,i);return()=>{a=!0,d()}}else{const d=t.addObserver(n);return()=>{a=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&X2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $n(e){return yt(e)}class Xf{constructor(t){this.auth=t,this.observer=null,this.addObserver=zw(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w_(e){Na=e}function Sv(e){return Na.loadJS(e)}function __(){return Na.recaptchaEnterpriseScript}function k_(){return Na.gapiScript}function b_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const E_="recaptcha-enterprise",S_="NO_RECAPTCHA";class T_{constructor(t){this.type=E_,this.auth=$n(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{i_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new r_(d);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,a(f.siteKey)}}).catch(d=>{c(d)})})}function i(s,a,c){const d=window.grecaptcha;Hf(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:t}).then(f=>{a(f)}).catch(()=>{a(S_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&Hf(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=__();d.length!==0&&(d+=c),Sv(d).then(()=>{i(c,s,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}}async function Jf(e,t,n,r=!1){const i=new T_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ta(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Jf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Jf(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(e,t){const n=ja(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function N_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function I_(e,t,n){const r=$n(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Tv(t),{host:a,port:c}=C_(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),P_()}function Tv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function C_(e){const t=Tv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Yf(a)}}}function Yf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function P_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(t){return Ht("not implemented")}_linkToIdToken(t,n){return Ht("not implemented")}_getReauthenticationResolver(t){return Ht("not implemented")}}async function R_(e,t){return Pt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(e,t){return ks(e,"POST","/v1/accounts:signInWithPassword",on(e,t))}async function O_(e,t){return Pt(e,"POST","/v1/accounts:sendOobCode",on(e,t))}async function D_(e,t){return O_(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(e,t){return ks(e,"POST","/v1/accounts:signInWithEmailLink",on(e,t))}async function M_(e,t){return ks(e,"POST","/v1/accounts:signInWithEmailLink",on(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends sd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ds(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ds(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(t,n,"signInWithPassword",A_);case"emailLink":return L_(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ta(t,r,"signUpPassword",R_);case"emailLink":return M_(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const z_="http://localhost";class lr extends sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new lr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ed(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new lr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Fr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fr(t,n)}buildRequest(){const t={requestUri:z_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ws(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F_(e){const t=Pi(Ri(e)).link,n=t?Pi(Ri(t)).deep_link_id:null,r=Pi(Ri(e)).deep_link_id;return(r?Pi(Ri(r)).link:null)||r||n||t||e}class od{constructor(t){var n,r,i,s,a,c;const d=Pi(Ri(t)),f=(n=d.apiKey)!==null&&n!==void 0?n:null,k=(r=d.oobCode)!==null&&r!==void 0?r:null,y=U_((i=d.mode)!==null&&i!==void 0?i:null);B(f&&k&&y,"argument-error"),this.apiKey=f,this.operation=y,this.code=k,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=d.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=F_(t);try{return new od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(t,n){return ds._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=od.parseLink(n);return B(r,"argument-error"),ds._fromEmailAndCode(t,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bs extends jv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends bs{constructor(){super("facebook.com")}static credential(t){return lr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mn.credential(t.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return lr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends bs{constructor(){super("github.com")}static credential(t){return lr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yn.credential(t.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends bs{constructor(){super("twitter.com")}static credential(t,n){return lr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(e,t){return ks(e,"POST","/v1/accounts:signUp",on(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Wt._fromIdTokenResponse(t,r,i),a=Qf(r);return new cr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Qf(r);return new cr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Qf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Ct{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,na.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new na(t,n,r,i)}}function Nv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(e,s,t,r):s})}async function B_(e,t,n=!1){const r=await qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cr._forOperation(e,"link",r)}/**
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
 */async function V_(e,t,n=!1){const{auth:r}=e;if(kt(r.app))return Promise.reject(qt(r));const i="reauthenticate";try{const s=await qr(e,Nv(r,i,t,e),n);B(s.idToken,r,"internal-error");const a=rd(s.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(e.uid===c,r,"user-mismatch"),cr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(e,t,n=!1){if(kt(e.app))return Promise.reject(qt(e));const r="signIn",i=await Nv(e,r,t),s=await cr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function H_(e,t){return Iv($n(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cv(e){const t=$n(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function W_(e,t,n){const r=$n(e);await ta(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",D_)}async function K_(e,t,n){if(kt(e.app))return Promise.reject(qt(e));const r=$n(e),a=await ta(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$_).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Cv(e),d}),c=await cr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function G_(e,t,n){return kt(e.app)?Promise.reject(qt(e)):H_(yt(e),ri.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(e,t){return Pt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=yt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await qr(r,q_(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function J_(e,t,n,r){return yt(e).onIdTokenChanged(t,n,r)}function Y_(e,t,n){return yt(e).beforeAuthStateChanged(t,n)}function Q_(e,t,n,r){return yt(e).onAuthStateChanged(t,n,r)}function Z_(e){return yt(e).signOut()}const ra="__sak";/**
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
 */class Pv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=1e3,tk=10;class Rv extends Pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);p_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,tk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ek)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rv.type="LOCAL";const nk=Rv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Av.type="SESSION";const Ov=Av;/**
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
 */function rk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ia{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ia(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async f=>f(n.origin,s)),d=await rk(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ik{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,d)=>{const f=ad("",20);i.port1.start();const k=setTimeout(()=>{d(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const x=y;if(x.data.eventId===f)switch(x.data.status){case"ack":clearTimeout(k),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(x.data.response);break;default:clearTimeout(k),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function sk(e){jt().location.href=e}/**
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
 */function Dv(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function ok(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ak(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function lk(){return Dv()?self:null}/**
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
 */const Lv="firebaseLocalStorageDb",ck=1,ia="firebaseLocalStorage",Mv="fbase_key";class Es{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(e,t){return e.transaction([ia],t?"readwrite":"readonly").objectStore(ia)}function uk(){const e=indexedDB.deleteDatabase(Lv);return new Es(e).toPromise()}function Hc(){const e=indexedDB.open(Lv,ck);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ia,{keyPath:Mv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ia)?t(r):(r.close(),await uk(),t(await Hc()))})})}async function Zf(e,t,n){const r=Ca(e,!0).put({[Mv]:t,value:n});return new Es(r).toPromise()}async function dk(e,t){const n=Ca(e,!1).get(t),r=await new Es(n).toPromise();return r===void 0?null:r.value}function ep(e,t){const n=Ca(e,!0).delete(t);return new Es(n).toPromise()}const hk=800,fk=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>fk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(lk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ok(),!this.activeServiceWorker)return;this.sender=new ik(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hc();return await Zf(t,ra,"1"),await ep(t,ra),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>dk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ep(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ca(i,!1).getAll();return new Es(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const pk=zv;new _s(3e4,6e4);/**
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
 */function gk(e,t){return t?Kt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ld extends sd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mk(e){return Iv(e.auth,new ld(e),e.bypassAuthState)}function vk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),V_(n,new ld(e),e.bypassAuthState)}async function yk(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),B_(n,new ld(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=t;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(f){this.reject(f)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mk;case"linkViaPopup":case"linkViaRedirect":return yk;case"reauthViaPopup":case"reauthViaRedirect":return vk;default:vt(this.auth,"internal-error")}}resolve(t){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=new _s(2e3,1e4);class Pr extends Uv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const t=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xk.get())};t()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="pendingRedirect",bo=new Map;class _k extends Uv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=bo.get(this.auth._key());if(!t){try{const r=await kk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}bo.set(this.auth._key(),t)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kk(e,t){const n=Sk(t),r=Ek(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bk(e,t){bo.set(e._key(),t)}function Ek(e){return Kt(e._redirectPersistence)}function Sk(e){return ko(wk,e.config.apiKey,e.name)}async function Tk(e,t,n=!1){if(kt(e.app))return Promise.reject(qt(e));const r=$n(e),i=gk(r,t),a=await new _k(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=10*60*1e3;class Nk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ik(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Fv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(tp(t))}saveEventToCache(t){this.cachedEventUids.add(tp(t)),this.lastProcessedEventTime=Date.now()}}function tp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Fv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ik(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(e,t={}){return Pt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rk=/^https?/;async function Ak(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ck(e);for(const n of t)try{if(Ok(n))return}catch{}vt(e,"unauthorized-domain")}function Ok(e){const t=Bc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Rk.test(n))return!1;if(Pk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Dk=new _s(3e4,6e4);function np(){const e=jt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Lk(e){return new Promise((t,n)=>{var r,i,s;function a(){np(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{np(),n(Tt(e,"network-request-failed"))},timeout:Dk.get()})}if(!((i=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=jt().gapi)===null||s===void 0)&&s.load)a();else{const c=b_("iframefcb");return jt()[c]=()=>{gapi.load?a():n(Tt(e,"network-request-failed"))},Sv(`${k_()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw Eo=null,t})}let Eo=null;function Mk(e){return Eo=Eo||Lk(e),Eo}/**
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
 */const zk=new _s(5e3,15e3),Uk="__/auth/iframe",Fk="emulator/auth/iframe",$k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?nd(t,Fk):`https://${e.config.authDomain}/${Uk}`,r={apiKey:t.apiKey,appName:e.name,v:hr},i=Bk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ws(r).slice(1)}`}async function Hk(e){const t=await Mk(e),n=jt().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:Vk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$k,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Tt(e,"network-request-failed"),c=jt().setTimeout(()=>{s(a)},zk.get());function d(){jt().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{s(a)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kk=500,Gk=600,qk="_blank",Xk="http://localhost";class rp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jk(e,t,n,r=Kk,i=Gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Wk),{width:r.toString(),height:i.toString(),top:s,left:a}),f=ze().toLowerCase();n&&(c=yv(f)?qk:n),mv(f)&&(t=t||Xk,d.scrollbars="yes");const k=Object.entries(d).reduce((x,[T,I])=>`${x}${T}=${I},`,"");if(f_(f)&&c!=="_self")return Yk(t||"",c),new rp(null);const y=window.open(t||"",c,k);B(y,e,"popup-blocked");try{y.focus()}catch{}return new rp(y)}function Yk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qk="__/auth/handler",Zk="emulator/auth/handler",eb=encodeURIComponent("fac");async function ip(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:hr,eventId:i};if(t instanceof jv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Mw(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[k,y]of Object.entries({}))a[k]=y}if(t instanceof bs){const k=t.getScopes().filter(y=>y!=="");k.length>0&&(a.scopes=k.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const k of Object.keys(c))c[k]===void 0&&delete c[k];const d=await e._getAppCheckToken(),f=d?`#${eb}=${encodeURIComponent(d)}`:"";return`${tb(e)}?${ws(c).slice(1)}${f}`}function tb({config:e}){return e.emulator?nd(e,Zk):`https://${e.authDomain}/${Qk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="webStorageSupport";class nb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ov,this._completeRedirectFn=Tk,this._overrideRedirectResult=bk}async _openPopup(t,n,r,i){var s;tn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ip(t,n,r,Bc(),i);return Jk(t,a,ad())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ip(t,n,r,Bc(),i);return sk(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Hk(t),r=new Nk(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ll,{type:Ll},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ll];a!==void 0&&n(!!a),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ak(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bv()||vv()||id()}}const rb=nb;var sp="@firebase/auth",op="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ob(e){ar(new Ln("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ev(e)},f=new x_(r,i,s,d);return N_(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ar(new Ln("auth-internal",t=>{const n=$n(t.getProvider("auth").getImmediate());return(r=>new ib(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(sp,op,sb(e)),St(sp,op,"esm2017")}/**
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
 */const ab=5*60,lb=ev("authIdTokenMaxAge")||ab;let ap=null;const cb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lb)return;const i=n==null?void 0:n.token;ap!==i&&(ap=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ub(e=Zu()){const t=ja(e,"auth");if(t.isInitialized())return t.getImmediate();const n=j_(e,{popupRedirectResolver:rb,persistence:[pk,nk,Ov]}),r=ev("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=cb(s.toString());Y_(n,a,()=>a(n.currentUser)),J_(n,c=>a(c))}}const i=Ym("auth");return i&&I_(n,`http://${i}`),n}function db(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}w_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",db().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ob("Browser");var hb="firebase",fb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(hb,fb,"app");var lp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $v;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(S,N,j){for(var b=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)b[ge-2]=arguments[ge];return g.prototype[N].apply(S,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,w){w||(w=0);var S=Array(16);if(typeof g=="string")for(var N=0;16>N;++N)S[N]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(N=0;16>N;++N)S[N]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],N=_.g[2];var j=_.g[3],b=g+(j^w&(N^j))+S[0]+3614090360&4294967295;g=w+(b<<7&4294967295|b>>>25),b=j+(N^g&(w^N))+S[1]+3905402710&4294967295,j=g+(b<<12&4294967295|b>>>20),b=N+(w^j&(g^w))+S[2]+606105819&4294967295,N=j+(b<<17&4294967295|b>>>15),b=w+(g^N&(j^g))+S[3]+3250441966&4294967295,w=N+(b<<22&4294967295|b>>>10),b=g+(j^w&(N^j))+S[4]+4118548399&4294967295,g=w+(b<<7&4294967295|b>>>25),b=j+(N^g&(w^N))+S[5]+1200080426&4294967295,j=g+(b<<12&4294967295|b>>>20),b=N+(w^j&(g^w))+S[6]+2821735955&4294967295,N=j+(b<<17&4294967295|b>>>15),b=w+(g^N&(j^g))+S[7]+4249261313&4294967295,w=N+(b<<22&4294967295|b>>>10),b=g+(j^w&(N^j))+S[8]+1770035416&4294967295,g=w+(b<<7&4294967295|b>>>25),b=j+(N^g&(w^N))+S[9]+2336552879&4294967295,j=g+(b<<12&4294967295|b>>>20),b=N+(w^j&(g^w))+S[10]+4294925233&4294967295,N=j+(b<<17&4294967295|b>>>15),b=w+(g^N&(j^g))+S[11]+2304563134&4294967295,w=N+(b<<22&4294967295|b>>>10),b=g+(j^w&(N^j))+S[12]+1804603682&4294967295,g=w+(b<<7&4294967295|b>>>25),b=j+(N^g&(w^N))+S[13]+4254626195&4294967295,j=g+(b<<12&4294967295|b>>>20),b=N+(w^j&(g^w))+S[14]+2792965006&4294967295,N=j+(b<<17&4294967295|b>>>15),b=w+(g^N&(j^g))+S[15]+1236535329&4294967295,w=N+(b<<22&4294967295|b>>>10),b=g+(N^j&(w^N))+S[1]+4129170786&4294967295,g=w+(b<<5&4294967295|b>>>27),b=j+(w^N&(g^w))+S[6]+3225465664&4294967295,j=g+(b<<9&4294967295|b>>>23),b=N+(g^w&(j^g))+S[11]+643717713&4294967295,N=j+(b<<14&4294967295|b>>>18),b=w+(j^g&(N^j))+S[0]+3921069994&4294967295,w=N+(b<<20&4294967295|b>>>12),b=g+(N^j&(w^N))+S[5]+3593408605&4294967295,g=w+(b<<5&4294967295|b>>>27),b=j+(w^N&(g^w))+S[10]+38016083&4294967295,j=g+(b<<9&4294967295|b>>>23),b=N+(g^w&(j^g))+S[15]+3634488961&4294967295,N=j+(b<<14&4294967295|b>>>18),b=w+(j^g&(N^j))+S[4]+3889429448&4294967295,w=N+(b<<20&4294967295|b>>>12),b=g+(N^j&(w^N))+S[9]+568446438&4294967295,g=w+(b<<5&4294967295|b>>>27),b=j+(w^N&(g^w))+S[14]+3275163606&4294967295,j=g+(b<<9&4294967295|b>>>23),b=N+(g^w&(j^g))+S[3]+4107603335&4294967295,N=j+(b<<14&4294967295|b>>>18),b=w+(j^g&(N^j))+S[8]+1163531501&4294967295,w=N+(b<<20&4294967295|b>>>12),b=g+(N^j&(w^N))+S[13]+2850285829&4294967295,g=w+(b<<5&4294967295|b>>>27),b=j+(w^N&(g^w))+S[2]+4243563512&4294967295,j=g+(b<<9&4294967295|b>>>23),b=N+(g^w&(j^g))+S[7]+1735328473&4294967295,N=j+(b<<14&4294967295|b>>>18),b=w+(j^g&(N^j))+S[12]+2368359562&4294967295,w=N+(b<<20&4294967295|b>>>12),b=g+(w^N^j)+S[5]+4294588738&4294967295,g=w+(b<<4&4294967295|b>>>28),b=j+(g^w^N)+S[8]+2272392833&4294967295,j=g+(b<<11&4294967295|b>>>21),b=N+(j^g^w)+S[11]+1839030562&4294967295,N=j+(b<<16&4294967295|b>>>16),b=w+(N^j^g)+S[14]+4259657740&4294967295,w=N+(b<<23&4294967295|b>>>9),b=g+(w^N^j)+S[1]+2763975236&4294967295,g=w+(b<<4&4294967295|b>>>28),b=j+(g^w^N)+S[4]+1272893353&4294967295,j=g+(b<<11&4294967295|b>>>21),b=N+(j^g^w)+S[7]+4139469664&4294967295,N=j+(b<<16&4294967295|b>>>16),b=w+(N^j^g)+S[10]+3200236656&4294967295,w=N+(b<<23&4294967295|b>>>9),b=g+(w^N^j)+S[13]+681279174&4294967295,g=w+(b<<4&4294967295|b>>>28),b=j+(g^w^N)+S[0]+3936430074&4294967295,j=g+(b<<11&4294967295|b>>>21),b=N+(j^g^w)+S[3]+3572445317&4294967295,N=j+(b<<16&4294967295|b>>>16),b=w+(N^j^g)+S[6]+76029189&4294967295,w=N+(b<<23&4294967295|b>>>9),b=g+(w^N^j)+S[9]+3654602809&4294967295,g=w+(b<<4&4294967295|b>>>28),b=j+(g^w^N)+S[12]+3873151461&4294967295,j=g+(b<<11&4294967295|b>>>21),b=N+(j^g^w)+S[15]+530742520&4294967295,N=j+(b<<16&4294967295|b>>>16),b=w+(N^j^g)+S[2]+3299628645&4294967295,w=N+(b<<23&4294967295|b>>>9),b=g+(N^(w|~j))+S[0]+4096336452&4294967295,g=w+(b<<6&4294967295|b>>>26),b=j+(w^(g|~N))+S[7]+1126891415&4294967295,j=g+(b<<10&4294967295|b>>>22),b=N+(g^(j|~w))+S[14]+2878612391&4294967295,N=j+(b<<15&4294967295|b>>>17),b=w+(j^(N|~g))+S[5]+4237533241&4294967295,w=N+(b<<21&4294967295|b>>>11),b=g+(N^(w|~j))+S[12]+1700485571&4294967295,g=w+(b<<6&4294967295|b>>>26),b=j+(w^(g|~N))+S[3]+2399980690&4294967295,j=g+(b<<10&4294967295|b>>>22),b=N+(g^(j|~w))+S[10]+4293915773&4294967295,N=j+(b<<15&4294967295|b>>>17),b=w+(j^(N|~g))+S[1]+2240044497&4294967295,w=N+(b<<21&4294967295|b>>>11),b=g+(N^(w|~j))+S[8]+1873313359&4294967295,g=w+(b<<6&4294967295|b>>>26),b=j+(w^(g|~N))+S[15]+4264355552&4294967295,j=g+(b<<10&4294967295|b>>>22),b=N+(g^(j|~w))+S[6]+2734768916&4294967295,N=j+(b<<15&4294967295|b>>>17),b=w+(j^(N|~g))+S[13]+1309151649&4294967295,w=N+(b<<21&4294967295|b>>>11),b=g+(N^(w|~j))+S[4]+4149444226&4294967295,g=w+(b<<6&4294967295|b>>>26),b=j+(w^(g|~N))+S[11]+3174756917&4294967295,j=g+(b<<10&4294967295|b>>>22),b=N+(g^(j|~w))+S[2]+718787259&4294967295,N=j+(b<<15&4294967295|b>>>17),b=w+(j^(N|~g))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,_.g[2]=_.g[2]+N&4294967295,_.g[3]=_.g[3]+j&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,S=this.B,N=this.h,j=0;j<g;){if(N==0)for(;j<=w;)i(this,_,j),j+=this.blockSize;if(typeof _=="string"){for(;j<g;)if(S[N++]=_.charCodeAt(j++),N==this.blockSize){i(this,S),N=0;break}}else for(;j<g;)if(S[N++]=_[j++],N==this.blockSize){i(this,S),N=0;break}}this.h=N,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var S=0;32>S;S+=8)_[w++]=this.g[g]>>>S&255;return _};function s(_,g){var w=c;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function a(_,g){this.h=g;for(var w=[],S=!0,N=_.length-1;0<=N;N--){var j=_[N]|0;S&&j==g||(w[N]=j,S=!1)}this.g=w}var c={};function d(_){return-128<=_&&128>_?s(_,function(g){return new a([g|0],0>g?-1:0)}):new a([_|0],0>_?-1:0)}function f(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return A(f(-_));for(var g=[],w=1,S=0;_>=w;S++)g[S]=_/w|0,w*=4294967296;return new a(g,0)}function k(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return A(k(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=f(Math.pow(g,8)),S=y,N=0;N<_.length;N+=8){var j=Math.min(8,_.length-N),b=parseInt(_.substring(N,N+j),g);8>j?(j=f(Math.pow(g,j)),S=S.j(j).add(f(b))):(S=S.j(w),S=S.add(f(b)))}return S}var y=d(0),x=d(1),T=d(16777216);e=a.prototype,e.m=function(){if(R(this))return-A(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var S=this.i(w);_+=(0<=S?S:4294967296+S)*g,g*=4294967296}return _},e.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I(this))return"0";if(R(this))return"-"+A(this).toString(_);for(var g=f(Math.pow(_,6)),w=this,S="";;){var N=C(w,g).g;w=E(w,N.j(g));var j=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=N,I(w))return j+S;for(;6>j.length;)j="0"+j;S=j+S}},e.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function I(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function R(_){return _.h==-1}e.l=function(_){return _=E(this,_),R(_)?-1:I(_)?0:1};function A(_){for(var g=_.g.length,w=[],S=0;S<g;S++)w[S]=~_.g[S];return new a(w,~_.h).add(x)}e.abs=function(){return R(this)?A(this):this},e.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],S=0,N=0;N<=g;N++){var j=S+(this.i(N)&65535)+(_.i(N)&65535),b=(j>>>16)+(this.i(N)>>>16)+(_.i(N)>>>16);S=b>>>16,j&=65535,b&=65535,w[N]=b<<16|j}return new a(w,w[w.length-1]&-2147483648?-1:0)};function E(_,g){return _.add(A(g))}e.j=function(_){if(I(this)||I(_))return y;if(R(this))return R(_)?A(this).j(A(_)):A(A(this).j(_));if(R(_))return A(this.j(A(_)));if(0>this.l(T)&&0>_.l(T))return f(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],S=0;S<2*g;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var N=0;N<_.g.length;N++){var j=this.i(S)>>>16,b=this.i(S)&65535,ge=_.i(N)>>>16,Bn=_.i(N)&65535;w[2*S+2*N]+=b*Bn,m(w,2*S+2*N),w[2*S+2*N+1]+=j*Bn,m(w,2*S+2*N+1),w[2*S+2*N+1]+=b*ge,m(w,2*S+2*N+1),w[2*S+2*N+2]+=j*ge,m(w,2*S+2*N+2)}for(S=0;S<g;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=g;S<2*g;S++)w[S]=0;return new a(w,0)};function m(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function v(_,g){this.g=_,this.h=g}function C(_,g){if(I(g))throw Error("division by zero");if(I(_))return new v(y,y);if(R(_))return g=C(A(_),g),new v(A(g.g),A(g.h));if(R(g))return g=C(_,A(g)),new v(A(g.g),g.h);if(30<_.g.length){if(R(_)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var w=x,S=g;0>=S.l(_);)w=L(w),S=L(S);var N=M(w,1),j=M(S,1);for(S=M(S,2),w=M(w,2);!I(S);){var b=j.add(S);0>=b.l(_)&&(N=N.add(w),j=b),S=M(S,1),w=M(w,1)}return g=E(_,N.j(g)),new v(N,g)}for(N=y;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),j=f(w),b=j.j(g);R(b)||0<b.l(_);)w-=S,j=f(w),b=j.j(g);I(j)&&(j=x),N=N.add(j),_=E(_,b)}return new v(N,_)}e.A=function(_){return C(this,_).h},e.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],S=0;S<g;S++)w[S]=this.i(S)&_.i(S);return new a(w,this.h&_.h)},e.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],S=0;S<g;S++)w[S]=this.i(S)|_.i(S);return new a(w,this.h|_.h)},e.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],S=0;S<g;S++)w[S]=this.i(S)^_.i(S);return new a(w,this.h^_.h)};function L(_){for(var g=_.g.length+1,w=[],S=0;S<g;S++)w[S]=_.i(S)<<1|_.i(S-1)>>>31;return new a(w,_.h)}function M(_,g){var w=g>>5;g%=32;for(var S=_.g.length-w,N=[],j=0;j<S;j++)N[j]=0<g?_.i(j+w)>>>g|_.i(j+w+1)<<32-g:_.i(j+w);return new a(N,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=k,$v=a}).apply(typeof lp<"u"?lp:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in h))break e;h=h[P]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,P={next:function(){if(!p&&h<o.length){var D=h++;return{value:u(D,o[D]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function k(o,u,h){return o.call.apply(o.bind,arguments)}function y(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function x(o,u,h){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:y,x.apply(null,arguments)}function T(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function I(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,P,D){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return u.prototype[P].apply(p,U)}}function R(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function A(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(d(p)){const P=o.length||0,D=p.length||0;o.length=P+D;for(let U=0;U<D;U++)o[P+U]=p[U]}else o.push(p)}}class E{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function m(o){return/^[\s\xa0]*$/.test(o)}function v(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function C(o){return C[" "](o),o}C[" "]=function(){};var L=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function M(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function _(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,u){let h,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(h in p)o[h]=p[h];for(let D=0;D<w.length;D++)h=w[D],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function N(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function j(o){c.setTimeout(()=>{throw o},0)}function b(){var o=V;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ge{constructor(){this.h=this.g=null}add(u,h){const p=Bn.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Bn=new E(()=>new ii,o=>o.reset());class ii{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let At,F=!1,V=new ge,W=()=>{const o=c.Promise.resolve(void 0);At=()=>{o.then(se)}};var se=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(h){j(h)}var u=Bn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ot=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Dt(o,u){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(L){e:{try{C(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Lt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Dt.aa.h.call(this)}}I(Dt,ue);var Lt={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),iy=0;function sy(o,u,h,p,P){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=P,this.key=++iy,this.da=this.fa=!1}function Ts(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function js(o){this.src=o,this.g={},this.h=0}js.prototype.add=function(o,u,h,p,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var U=Aa(o,u,p,P);return-1<U?(u=o[U],h||(u.fa=!1)):(u=new sy(u,this.src,D,!!p,P),u.fa=h,o.push(u)),u};function Ra(o,u){var h=u.type;if(h in o.g){var p=o.g[h],P=Array.prototype.indexOf.call(p,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(p,P,1),D&&(Ts(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Aa(o,u,h,p){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==u&&D.capture==!!h&&D.ha==p)return P}return-1}var Oa="closure_lm_"+(1e6*Math.random()|0),Da={};function md(o,u,h,p,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)md(o,u[D],h,p,P);return null}return h=xd(h),o&&o[Mt]?o.K(u,h,f(p)?!!p.capture:!1,P):oy(o,u,h,!1,p,P)}function oy(o,u,h,p,P,D){if(!u)throw Error("Invalid event type");var U=f(P)?!!P.capture:!!P,Z=Ma(o);if(Z||(o[Oa]=Z=new js(o)),h=Z.add(u,h,p,U,D),h.proxy)return h;if(p=ay(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Ot||(P=U),P===void 0&&(P=!1),o.addEventListener(u.toString(),p,P);else if(o.attachEvent)o.attachEvent(yd(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ay(){function o(h){return u.call(o.src,o.listener,h)}const u=ly;return o}function vd(o,u,h,p,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)vd(o,u[D],h,p,P);else p=f(p)?!!p.capture:!!p,h=xd(h),o&&o[Mt]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],h=Aa(D,h,p,P),-1<h&&(Ts(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ma(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Aa(u,h,p,P)),(h=-1<o?u[o]:null)&&La(h))}function La(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Mt])Ra(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(yd(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Ma(u))?(Ra(h,o),h.h==0&&(h.src=null,u[Oa]=null)):Ts(o)}}}function yd(o){return o in Da?Da[o]:Da[o]="on"+o}function ly(o,u){if(o.da)o=!0;else{u=new Dt(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&La(o),o=h.call(p,u)}return o}function Ma(o){return o=o[Oa],o instanceof js?o:null}var za="__closure_events_fn_"+(1e9*Math.random()>>>0);function xd(o){return typeof o=="function"?o:(o[za]||(o[za]=function(u){return o.handleEvent(u)}),o[za])}function Ee(){Q.call(this),this.i=new js(this),this.M=this,this.F=null}I(Ee,Q),Ee.prototype[Mt]=!0,Ee.prototype.removeEventListener=function(o,u,h,p){vd(this,o,u,h,p)};function Re(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ue(u,o);else if(u instanceof ue)u.target=u.target||o;else{var P=u;u=new ue(p,o),S(u,P)}if(P=!0,h)for(var D=h.length-1;0<=D;D--){var U=u.g=h[D];P=Ns(U,p,!0,u)&&P}if(U=u.g=o,P=Ns(U,p,!0,u)&&P,P=Ns(U,p,!1,u)&&P,h)for(D=0;D<h.length;D++)U=u.g=h[D],P=Ns(U,p,!1,u)&&P}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)Ts(h[p]);delete o.g[u],o.h--}}this.F=null},Ee.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Ee.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function Ns(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var U=u[D];if(U&&!U.da&&U.capture==h){var Z=U.listener,we=U.ha||U.src;U.fa&&Ra(o.i,U),P=Z.call(we,p)!==!1&&P}}return P&&!p.defaultPrevented}function wd(o,u,h){if(typeof o=="function")h&&(o=x(o,h));else if(o&&typeof o.handleEvent=="function")o=x(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function _d(o){o.g=wd(()=>{o.g=null,o.i&&(o.i=!1,_d(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class cy extends Q{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:_d(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(o){Q.call(this),this.h=o,this.g={}}I(si,Q);var kd=[];function bd(o){M(o.g,function(u,h){this.g.hasOwnProperty(h)&&La(u)},o),o.g={}}si.prototype.N=function(){si.aa.N.call(this),bd(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ua=c.JSON.stringify,uy=c.JSON.parse,dy=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Fa(){}Fa.prototype.h=null;function Ed(o){return o.h||(o.h=o.i())}function hy(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $a(){ue.call(this,"d")}I($a,ue);function Ba(){ue.call(this,"c")}I(Ba,ue);var fr={},Sd=null;function Va(){return Sd=Sd||new Ee}fr.La="serverreachability";function Td(o){ue.call(this,fr.La,o)}I(Td,ue);function ai(o){const u=Va();Re(u,new Td(u))}fr.STAT_EVENT="statevent";function jd(o,u){ue.call(this,fr.STAT_EVENT,o),this.stat=u}I(jd,ue);function Ae(o){const u=Va();Re(u,new jd(u,o))}fr.Ma="timingevent";function Nd(o,u){ue.call(this,fr.Ma,o),this.size=u}I(Nd,ue);function li(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ci(){this.g=!0}ci.prototype.xa=function(){this.g=!1};function fy(o,u,h,p,P,D){o.info(function(){if(o.g)if(D)for(var U="",Z=D.split("&"),we=0;we<Z.length;we++){var X=Z[we].split("=");if(1<X.length){var Se=X[0];X=X[1];var Te=Se.split("_");U=2<=Te.length&&Te[1]=="type"?U+(Se+"="+X+"&"):U+(Se+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+u+`
`+h+`
`+U})}function py(o,u,h,p,P,D,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+u+`
`+h+`
`+D+" "+U})}function pr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+my(o,h)+(p?" "+p:"")})}function gy(o,u){o.info(function(){return"TIMEOUT: "+u})}ci.prototype.info=function(){};function my(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Ua(h)}catch{return u}}var Ha={NO_ERROR:0,TIMEOUT:8},vy={},Wa;function Is(){}I(Is,Fa),Is.prototype.g=function(){return new XMLHttpRequest},Is.prototype.i=function(){return{}},Wa=new Is;function an(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Id}function Id(){this.i=null,this.g="",this.h=!1}var Cd={},Ka={};function Ga(o,u,h){o.L=1,o.v=As(zt(u)),o.m=h,o.P=!0,Pd(o,null)}function Pd(o,u){o.F=Date.now(),Cs(o),o.A=zt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Wd(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Id,o.g=ch(o.j,h?u:null,!o.m),0<o.O&&(o.M=new cy(x(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(kd[0]=P.toString()),P=kd);for(var D=0;D<P.length;D++){var U=md(h,P[D],p||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ai(),fy(o.i,o.u,o.A,o.l,o.R,o.m)}an.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ut(o)==3?u.j():this.Y(o)},an.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Ut(this.g);var u=this.g.Ba();const vr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Qd(this.g)))){this.J||Te!=4||u==7||(u==8||0>=vr?ai(3):ai(2)),qa(this);var h=this.g.Z();this.X=h;t:if(Rd(this)){var p=Qd(this.g);o="";var P=p.length,D=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),ui(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(D&&u==P-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,py(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,we=this.g;if((Z=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(Z)){var X=Z;break t}}X=null}if(h=X)pr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xa(this,h);else{this.o=!1,this.s=3,Ae(12),Vn(this),ui(this);break e}}if(this.P){h=!0;let at;for(;!this.J&&this.C<U.length;)if(at=yy(this,U),at==Ka){Te==4&&(this.s=4,Ae(14),h=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Cd){this.s=4,Ae(15),pr(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else pr(this.i,this.l,at,null),Xa(this,at);if(Rd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||U.length!=0||this.h.h||(this.s=1,Ae(16),h=!1),this.o=this.o&&h,!h)pr(this.i,this.l,U,"[Invalid Chunked Response]"),Vn(this),ui(this);else if(0<U.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),tl(Se),Se.M=!0,Ae(11))}}else pr(this.i,this.l,U,null),Xa(this,U);Te==4&&Vn(this),this.o&&!this.J&&(Te==4?sh(this.j,this):(this.o=!1,Cs(this)))}else Dy(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),Vn(this),ui(this)}}}catch{}finally{}};function Rd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function yy(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Ka:(h=Number(u.substring(h,p)),isNaN(h)?Cd:(p+=1,p+h>u.length?Ka:(u=u.slice(p,p+h),o.C=p+h,u)))}an.prototype.cancel=function(){this.J=!0,Vn(this)};function Cs(o){o.S=Date.now()+o.I,Ad(o,o.I)}function Ad(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=li(x(o.ba,o),u)}function qa(o){o.B&&(c.clearTimeout(o.B),o.B=null)}an.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gy(this.i,this.A),this.L!=2&&(ai(),Ae(17)),Vn(this),this.s=2,ui(this)):Ad(this,this.S-o)};function ui(o){o.j.G==0||o.J||sh(o.j,o)}function Vn(o){qa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,bd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Xa(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Ja(h.h,o))){if(!o.K&&Ja(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Us(h),Ms(h);else break e;el(h),Ae(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=li(x(h.Za,h),6e3));if(1>=Ld(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wn(h,11)}else if((o.K||h.g==o)&&Us(h),!m(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let X=P[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Se=X[3];Se!=null&&(h.la=Se,h.j.info("VER="+h.la));const Te=X[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const vr=X[5];vr!=null&&typeof vr=="number"&&0<vr&&(p=1.5*vr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const at=o.g;if(at){const Fs=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fs){var D=p.h;D.g||Fs.indexOf("spdy")==-1&&Fs.indexOf("quic")==-1&&Fs.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ya(D,D.h),D.h=null))}if(p.D){const nl=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(p.ya=nl,te(p.I,p.D,nl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var U=o;if(p.qa=lh(p,p.J?p.ia:null,p.W),U.K){Md(p.h,U);var Z=U,we=p.L;we&&(Z.I=we),Z.B&&(qa(Z),Cs(Z)),p.g=U}else rh(p);0<h.i.length&&zs(h)}else X[0]!="stop"&&X[0]!="close"||Wn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Wn(h,7):Za(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}ai(4)}catch{}}var xy=class{constructor(o,u){this.g=o,this.map=u}};function Od(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ld(o){return o.h?1:o.g?o.g.size:0}function Ja(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ya(o,u){o.g?o.g.add(u):o.h=u}function Md(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Od.prototype.cancel=function(){if(this.i=zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return R(o.i)}function wy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function _y(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function Ud(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=_y(o),p=wy(o),P=p.length,D=0;D<P;D++)u.call(void 0,p[D],h&&h[D],o)}var Fd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ky(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),P=null;if(0<=p){var D=o[h].substring(0,p);P=o[h].substring(p+1)}else D=o[h];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hn){this.h=o.h,Ps(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.s),this.l=o.l;var u=o.i,h=new fi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),$d(this,h),this.m=o.m}else o&&(u=String(o).match(Fd))?(this.h=!1,Ps(this,u[1]||"",!0),this.o=di(u[2]||""),this.g=di(u[3]||"",!0),Rs(this,u[4]),this.l=di(u[5]||"",!0),$d(this,u[6]||"",!0),this.m=di(u[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}Hn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(hi(u,Bd,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(hi(u,Bd,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(hi(h,h.charAt(0)=="/"?Sy:Ey,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",hi(h,jy)),o.join("")};function zt(o){return new Hn(o)}function Ps(o,u,h){o.j=h?di(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function $d(o,u,h){u instanceof fi?(o.i=u,Ny(o.i,o.h)):(h||(u=hi(u,Ty)),o.i=new fi(u,o.h))}function te(o,u,h){o.i.set(u,h)}function As(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function di(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hi(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,by),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function by(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bd=/[#\/\?@]/g,Ey=/[#\?:]/g,Sy=/[#\?]/g,Ty=/[#\?@]/g,jy=/#/g;function fi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&ky(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}e=fi.prototype,e.add=function(o,u){ln(this),this.i=null,o=gr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Vd(o,u){ln(o),u=gr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Hd(o,u){return ln(o),u=gr(o,u),o.g.has(u)}e.forEach=function(o,u){ln(this),this.g.forEach(function(h,p){h.forEach(function(P){o.call(u,P,p,this)},this)},this)},e.na=function(){ln(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const P=o[p];for(let D=0;D<P.length;D++)h.push(u[p])}return h},e.V=function(o){ln(this);let u=[];if(typeof o=="string")Hd(this,o)&&(u=u.concat(this.g.get(gr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},e.set=function(o,u){return ln(this),this.i=null,o=gr(this,o),Hd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Wd(o,u,h){Vd(o,u),0<h.length&&(o.i=null,o.g.set(gr(o,u),R(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const D=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var P=D;U[p]!==""&&(P+="="+encodeURIComponent(String(U[p]))),o.push(P)}}return this.i=o.join("&")};function gr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ny(o,u){u&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(h,p){var P=p.toLowerCase();p!=P&&(Vd(this,p),Wd(this,P,h))},o)),o.j=u}function Iy(o,u){const h=new ci;if(c.Image){const p=new Image;p.onload=T(cn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=T(cn,h,"TestLoadImage: error",!1,u,p),p.onabort=T(cn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=T(cn,h,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Cy(o,u){const h=new ci,p=new AbortController,P=setTimeout(()=>{p.abort(),cn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(D=>{clearTimeout(P),D.ok?cn(h,"TestPingServer: ok",!0,u):cn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),cn(h,"TestPingServer: error",!1,u)})}function cn(o,u,h,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(h)}catch{}}function Py(){this.g=new dy}function Ry(o,u,h){const p=h||"";try{Ud(o,function(P,D){let U=P;f(P)&&(U=Ua(P)),u.push(p+D+"="+encodeURIComponent(U))})}catch(P){throw u.push(p+"type="+encodeURIComponent("_badmap")),P}}function Os(o){this.l=o.Ub||null,this.j=o.eb||!1}I(Os,Fa),Os.prototype.g=function(){return new Ds(this.l,this.j)},Os.prototype.i=function(o){return function(){return o}}({});function Ds(o,u){Ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Ds,Ee),e=Ds.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,gi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?pi(this):gi(this),this.readyState==3&&Kd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,pi(this))},e.Qa=function(o){this.g&&(this.response=o,pi(this))},e.ga=function(){this.g&&pi(this)};function pi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gi(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function gi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Gd(o){let u="";return M(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Qa(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Gd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function de(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(de,Ee);var Ay=/^https?$/i,Oy=["POST","PUT"];e=de.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wa.g(),this.v=this.o?Ed(this.o):Ed(Wa),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){qd(this,D);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)h.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const D of p.keys())h.set(D,p.get(D));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Oy,u,void 0))||p||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of h)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yd(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){qd(this,D)}};function qd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Xd(o),Ls(o)}function Xd(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),Ls(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ls(this,!0)),de.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Jd(this):this.bb())},e.bb=function(){Jd(this)};function Jd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ut(o)!=4||o.Z()!=2)){if(o.u&&Ut(o)==4)wd(o.Ea,0,o);else if(Re(o,"readystatechange"),Ut(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=U===0){var P=String(o.D).match(Fd)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),p=!Ay.test(P?P.toLowerCase():"")}h=p}if(h)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var D=2<Ut(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Xd(o)}}finally{Ls(o)}}}}function Ls(o,u){if(o.g){Yd(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Re(o,"ready");try{h.onreadystatechange=p}catch{}}}function Yd(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ut(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),uy(u)}};function Qd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Dy(o){const u={};o=(o.g&&2<=Ut(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(m(o[p]))continue;var h=N(o[p]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=u[P]||[];u[P]=D,D.push(h)}_(u,function(p){return p.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Zd(o){this.Aa=0,this.i=[],this.j=new ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,o),this.cb=mi("retryDelaySeedMs",1e4,o),this.Wa=mi("forwardChannelMaxRetries",2,o),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Od(o&&o.concurrentRequestLimit),this.Da=new Py,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Zd.prototype,e.la=8,e.G=1,e.connect=function(o,u,h,p){Ae(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=lh(this,null,this.W),zs(this)};function Za(o){if(eh(o),o.G==3){var u=o.U++,h=zt(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),vi(o,h),u=new an(o,o.j,u),u.L=2,u.v=As(zt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Cs(u)}ah(o)}function Ms(o){o.g&&(tl(o),o.g.cancel(),o.g=null)}function eh(o){Ms(o),o.u&&(c.clearTimeout(o.u),o.u=null),Us(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function zs(o){if(!Dd(o.h)&&!o.s){o.s=!0;var u=o.Ga;At||W(),F||(At(),F=!0),V.add(u,o),o.B=0}}function Ly(o,u){return Ld(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=li(x(o.Ga,o,u),oh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new an(this,this.j,o);let D=this.o;if(this.S&&(D?(D=g(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=nh(this,P,u),h=zt(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),vi(this,h),D&&(this.O?u="headers="+encodeURIComponent(String(Gd(D)))+"&"+u:this.m&&Qa(h,this.m,D)),Ya(this.h,P),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),P.T=!0,Ga(P,h,null)):Ga(P,h,u),this.G=2}}else this.G==3&&(o?th(this,o):this.i.length==0||Dd(this.h)||th(this))};function th(o,u){var h;u?h=u.l:h=o.U++;const p=zt(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),vi(o,p),o.m&&o.o&&Qa(p,o.m,o.o),h=new an(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=nh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ya(o.h,h),Ga(h,p,u)}function vi(o,u){o.H&&M(o.H,function(h,p){te(u,p,h)}),o.l&&Ud({},function(h,p){te(u,p,h)})}function nh(o,u,h){h=Math.min(o.i.length,h);var p=o.l?x(o.l.Na,o.l,o):null;e:{var P=o.i;let D=-1;for(;;){const U=["count="+h];D==-1?0<h?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let Z=!0;for(let we=0;we<h;we++){let X=P[we].g;const Se=P[we].map;if(X-=D,0>X)D=Math.max(0,P[we].g-100),Z=!1;else try{Ry(Se,U,"req"+X+"_")}catch{p&&p(Se)}}if(Z){p=U.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function rh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;At||W(),F||(At(),F=!0),V.add(u,o),o.v=0}}function el(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=li(x(o.Fa,o),oh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,ih(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=li(x(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Ms(this),ih(this))};function tl(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ih(o){o.g=new an(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=zt(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),vi(o,u),o.m&&o.o&&Qa(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=As(zt(u)),h.m=null,h.P=!0,Pd(h,o)}e.Za=function(){this.C!=null&&(this.C=null,Ms(this),el(this),Ae(19))};function Us(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function sh(o,u){var h=null;if(o.g==u){Us(o),tl(o),o.g=null;var p=2}else if(Ja(o.h,u))h=u.D,Md(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;p=Va(),Re(p,new Nd(p,h)),zs(o)}else rh(o);else if(P=u.s,P==3||P==0&&0<u.X||!(p==1&&Ly(o,u)||p==2&&el(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),P){case 1:Wn(o,5);break;case 4:Wn(o,10);break;case 3:Wn(o,6);break;default:Wn(o,2)}}}function oh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Wn(o,u){if(o.j.info("Error code "+u),u==2){var h=x(o.fb,o),p=o.Xa;const P=!p;p=new Hn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ps(p,"https"),As(p),P?Iy(p.toString(),h):Cy(p.toString(),h)}else Ae(2);o.G=0,o.l&&o.l.sa(u),ah(o),eh(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function ah(o){if(o.G=0,o.ka=[],o.l){const u=zd(o.h);(u.length!=0||o.i.length!=0)&&(A(o.ka,u),A(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function lh(o,u,h){var p=h instanceof Hn?zt(h):new Hn(h);if(p.g!="")u&&(p.g=u+"."+p.g),Rs(p,p.s);else{var P=c.location;p=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new Hn(null);p&&Ps(D,p),u&&(D.g=u),P&&Rs(D,P),h&&(D.l=h),p=D}return h=o.D,u=o.ya,h&&u&&te(p,h,u),te(p,"VER",o.la),vi(o,p),p}function ch(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new de(new Os({eb:h})):new de(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function uh(){}e=uh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function et(o,u){Ee.call(this),this.g=new Zd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!m(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!m(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new mr(this)}I(et,Ee),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){Za(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ua(o),o=h);u.i.push(new xy(u.Ya++,o)),u.G==3&&zs(u)},et.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,et.aa.N.call(this)};function dh(o){$a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}I(dh,$a);function hh(){Ba.call(this),this.status=1}I(hh,Ba);function mr(o){this.g=o}I(mr,uh),mr.prototype.ua=function(){Re(this.g,"a")},mr.prototype.ta=function(o){Re(this.g,new dh(o))},mr.prototype.sa=function(o){Re(this.g,new hh)},mr.prototype.ra=function(){Re(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,vy.COMPLETE="complete",hy.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const cp="@firebase/firestore";/**
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
 */const Xr=new Yu("@firebase/firestore");function ht(e,...t){if(Xr.logLevel<=J.DEBUG){const n=t.map(cd);Xr.debug(`Firestore (${Ss}): ${e}`,...n)}}function Bv(e,...t){if(Xr.logLevel<=J.ERROR){const n=t.map(cd);Xr.error(`Firestore (${Ss}): ${e}`,...n)}}function pb(e,...t){if(Xr.logLevel<=J.WARN){const n=t.map(cd);Xr.warn(`Firestore (${Ss}): ${e}`,...n)}}function cd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ud(e="Unexpected state"){const t=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+e;throw Bv(t),new Error(t)}function Vi(e,t){e||ud()}/**
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
 */class Hi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Vv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class mb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vb{constructor(t){this.t=t,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Vi(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let s=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hi,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hi)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vi(typeof r.accessToken=="string"),new Vv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Vi(t===null||typeof t=="string"),new Le(t)}}class yb{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xb{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new yb(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _b{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Vi(this.o===void 0);const r=s=>{s.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,ht("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vi(typeof n.token=="string"),this.R=n.token,new wb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function kb(e){return e.name==="IndexedDbTransactionError"}class sa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof sa&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var up,G;(G=up||(up={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $v([4294967295,4294967295],0);function Ml(){return typeof document<"u"?document:null}/**
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
 */class bb{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class dd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,c=new dd(t,n,a,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(Be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var dp,hp;(hp=dp||(dp={})).ea="default",hp.Cache="cache";/**
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
 */function Eb(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new Map;function Sb(e,t,n,r){if(t===!0&&r===!0)throw new Ve(Be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Tb(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ud()}function jb(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(Be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tb(e);throw new Ve(Be.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(Be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(Be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Eb((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(Be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ve(Be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gb;switch(r.type){case"firstParty":return new xb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ve(Be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fp.get(n);r&&(ht("ComponentProvider","Removing Datastore"),fp.delete(n),r.terminate())}(this),Promise.resolve()}}function Nb(e,t,n,r={}){var i;const s=(e=jb(e,Hv))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&pb("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Le.MOCK_USER;else{c=tv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Ve(Be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Le(f)}e._authCredentials=new mb(new Vv(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bb(this,"async_queue_retry"),this.Vu=()=>{const r=Ml();r&&ht("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Ml();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Hi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!kb(t))throw t;ht("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Bv("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=dd.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ud()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Ib extends Hv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new gp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new gp(t),this._firestoreClient=void 0,await t}}}function Cb(e,t){const n=typeof e=="object"?e:Zu(),r=typeof e=="string"?e:"(default)",i=ja(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Qm("firestore");s&&Nb(i,...s)}return i}(function(t,n=!0){(function(i){Ss=i})(hr),ar(new Ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Ib(new vb(r.getProvider("auth-internal")),new _b(r.getProvider("app-check-internal")),function(f,k){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Ve(Be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(f.options.projectId,k)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),St(cp,"4.7.3",t),St(cp,"4.7.3","esm2017")})();/**
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
 */const Wv="firebasestorage.googleapis.com",Pb="storageBucket",Rb=2*60*1e3,Ab=10*60*1e3;/**
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
 */class Rt extends Ct{constructor(t,n,r=0){super(zl(t),`Firebase Storage: ${n} (${zl(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Rt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return zl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Nt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Nt||(Nt={}));function zl(e){return"storage/"+e}function Ob(){const e="An unknown error occurred, please check the error payload for server response.";return new Rt(Nt.UNKNOWN,e)}function Db(){return new Rt(Nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lb(){return new Rt(Nt.CANCELED,"User canceled the upload/download.")}function Mb(e){return new Rt(Nt.INVALID_URL,"Invalid URL '"+e+"'.")}function zb(e){return new Rt(Nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function mp(e){return new Rt(Nt.INVALID_ARGUMENT,e)}function Kv(){return new Rt(Nt.APP_DELETED,"The Firebase app was deleted.")}function Ub(e){return new Rt(Nt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ft{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ft.makeFromUrl(t,n)}catch{return new ft(t,"")}if(r.path==="")return r;throw zb(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+i+a,"i"),d={bucket:1,path:3};function f(C){C.path_=decodeURIComponent(C.path)}const k="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",T=new RegExp(`^https?://${y}/${k}/b/${i}/o${x}`,"i"),I={bucket:1,path:3},R=n===Wv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${A}`,"i"),v=[{regex:c,indices:d,postModify:s},{regex:T,indices:I,postModify:f},{regex:E,indices:{bucket:1,path:2},postModify:f}];for(let C=0;C<v.length;C++){const L=v[C],M=L.regex.exec(t);if(M){const _=M[L.indices.bucket];let g=M[L.indices.path];g||(g=""),r=new ft(_,g),L.postModify(r);break}}if(r==null)throw Mb(t);return r}}class Fb{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function $b(e,t,n){let r=1,i=null,s=null,a=!1,c=0;function d(){return c===2}let f=!1;function k(...A){f||(f=!0,t.apply(null,A))}function y(A){i=setTimeout(()=>{i=null,e(T,d())},A)}function x(){s&&clearTimeout(s)}function T(A,...E){if(f){x();return}if(A){x(),k.call(null,A,...E);return}if(d()||a){x(),k.call(null,A,...E);return}r<64&&(r*=2);let v;c===1?(c=2,v=0):v=(r+Math.random())*1e3,y(v)}let I=!1;function R(A){I||(I=!0,x(),!f&&(i!==null?(A||(c=2),clearTimeout(i),y(0)):A||(c=1)))}return y(0),s=setTimeout(()=>{a=!0,R(!0)},n),R}function Bb(e){e(!1)}/**
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
 */function Vb(e){return e!==void 0}function vp(e,t,n,r){if(r<t)throw mp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw mp(`Invalid value for '${e}'. Expected ${n} or less.`)}function Hb(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var oa;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(oa||(oa={}));/**
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
 */function Wb(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class Kb{constructor(t,n,r,i,s,a,c,d,f,k,y,x=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=d,this.timeout_=f,this.progressCallback_=k,this.connectionFactory_=y,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,I)=>{this.resolve_=T,this.reject_=I,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new oo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=c=>{const d=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,f)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const c=s.getErrorCode()===oa.NO_ERROR,d=s.getStatus();if(!c||Wb(d,this.additionalRetryCodes_)&&this.retry){const k=s.getErrorCode()===oa.ABORT;r(!1,new oo(!1,null,k));return}const f=this.successCodes_.indexOf(d)!==-1;r(!0,new oo(f,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());Vb(d)?s(d):s()}catch(d){a(d)}else if(c!==null){const d=Ob();d.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,d)):a(d)}else if(i.canceled){const d=this.appDelete_?Kv():Lb();a(d)}else{const d=Db();a(d)}};this.canceled_?n(!1,new oo(!1,null,!0)):this.backoffId_=$b(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Bb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Gb(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function qb(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xb(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Jb(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Yb(e,t,n,r,i,s,a=!0){const c=Hb(e.urlParams),d=e.url+c,f=Object.assign({},e.headers);return Xb(f,t),Gb(f,n),qb(f,s),Jb(f,r),new Kb(d,e.method,f,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}/**
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
 */function Qb(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Zb(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class aa{constructor(t,n){this._service=t,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new aa(t,n)}get root(){const t=new ft(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zb(this._location.path)}get storage(){return this._service}get parent(){const t=Qb(this._location.path);if(t===null)return null;const n=new ft(this._location.bucket,t);return new aa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Ub(t)}}function yp(e,t){const n=t==null?void 0:t[Pb];return n==null?null:ft.makeFromBucketSpec(n,e)}function eE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:tv(i,e.app.options.projectId))}class tE{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Wv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rb,this._maxUploadRetryTime=Ab,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=yp(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,t):this._bucket=yp(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){vp("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){vp("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new aa(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new Fb(Kv());{const a=Yb(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const xp="@firebase/storage",wp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="storage";function nE(e=Zu(),t){e=yt(e);const r=ja(e,Gv).getImmediate({identifier:t}),i=Qm("storage");return i&&rE(r,...i),r}function rE(e,t,n,r={}){eE(e,t,n,r)}function iE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new tE(n,r,i,t,hr)}function sE(){ar(new Ln(Gv,iE,"PUBLIC").setMultipleInstances(!0)),St(xp,wp,""),St(xp,wp,"esm2017")}sE();const oE={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},hd=iv(oE),Ti=ub(hd);Cb(hd);nE(hd);const qv=O.createContext(void 0),aE=({children:e})=>{const[t,n]=O.useState(null),[r,i]=O.useState(!0),[s,a]=O.useState(null);O.useEffect(()=>{const T=Q_(Ti,I=>{n(I),i(!1)});return()=>T()},[]);const x={user:t,loading:r,error:s,login:async(T,I)=>{try{a(null),i(!0),await G_(Ti,T,I)}catch(R){const A=Ul(R.code);throw a(A),new Error(A)}finally{i(!1)}},register:async(T,I,R)=>{try{a(null),i(!0);const{user:A}=await K_(Ti,T,I);R&&await X_(A,{displayName:R})}catch(A){const E=Ul(A.code);throw a(E),new Error(E)}finally{i(!1)}},logout:async()=>{try{a(null),await Z_(Ti)}catch(T){throw a("Error al cerrar sesión"),T}},resetPassword:async T=>{try{a(null),await W_(Ti,T)}catch(I){const R=Ul(I.code);throw a(R),new Error(R)}},clearError:()=>a(null)};return l.jsx(qv.Provider,{value:x,children:e})},Xv=()=>{const e=O.useContext(qv);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function Ul(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const Kn=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=Xv(),i=sn();return r?l.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[l.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),l.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?l.jsx(l.Fragment,{children:e}):l.jsx(wo,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),H=(e,t)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:d,...f},k)=>O.createElement("svg",{ref:k,...lE,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${cE(e)}`,c].join(" "),...f},[...t.map(([y,x])=>O.createElement(y,x)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=H("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=H("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
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
 */const dE=H("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=H("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=H("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=H("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=H("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=H("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=H("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=H("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=H("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=H("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=H("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=H("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=H("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=H("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=H("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=H("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=H("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=H("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
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
 */const xE=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=H("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=H("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=H("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=H("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=H("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=H("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
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
 */const bp=H("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
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
 */const SE=H("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),TE=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Xt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:Jc,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:Pa,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:Jr,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:_E,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:SE,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return l.jsxs("div",{className:"landing-page",children:[l.jsxs("nav",{className:"navbar",children:[l.jsxs("div",{className:"nav-brand",children:[l.jsx(Xt,{size:32}),l.jsx("span",{children:"Sistema Courier"})]}),l.jsxs("div",{className:"nav-links",children:[l.jsx("a",{href:"#features",children:"Características"}),l.jsx("a",{href:"#pricing",children:"Precios"}),l.jsx(Ce,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),l.jsx(Ce,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),l.jsxs("section",{className:"hero",children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),l.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),l.jsxs("div",{className:"hero-buttons",children:[l.jsxs(Ce,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",l.jsx(la,{size:20})]}),l.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),l.jsxs("div",{className:"hero-trust",children:[l.jsx("span",{children:"Confiado por +100 empresas de courier"}),l.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>l.jsx(qc,{size:16,fill:"#f59e0b"},r))})]})]}),l.jsx("div",{className:"hero-image",children:l.jsxs("div",{className:"dashboard-preview",children:[l.jsx("div",{className:"preview-header",children:l.jsxs("div",{className:"dots",children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})}),l.jsxs("div",{className:"preview-content",children:[l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-stat"}),l.jsx("div",{className:"mock-chart"})]})]})})]}),l.jsxs("section",{id:"features",className:"features",children:[l.jsx("h2",{children:"Todo lo que necesitas para operar"}),l.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),l.jsx("div",{className:"features-grid",children:t.map((n,r)=>l.jsxs("div",{className:"feature-card",children:[l.jsx("div",{className:"feature-icon",children:l.jsx(n.icon,{size:28})}),l.jsx("h3",{children:n.title}),l.jsx("p",{children:n.description})]},r))})]}),l.jsxs("section",{id:"pricing",className:"pricing",children:[l.jsx("h2",{children:"Planes simples y transparentes"}),l.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),l.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>l.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&l.jsx("span",{className:"popular-badge",children:"Más Popular"}),l.jsx("h3",{children:n.name}),l.jsx("p",{className:"plan-description",children:n.description}),l.jsxs("div",{className:"plan-price",children:[n.priceLabel&&l.jsx("span",{className:"price-label",children:n.priceLabel}),l.jsxs("span",{className:"price",children:["$",n.price]}),l.jsx("span",{className:"period",children:"/mes"})]}),l.jsx("ul",{className:"plan-features",children:n.features.map((i,s)=>l.jsxs("li",{children:[l.jsx(Zn,{size:16})," ",i]},s))}),l.jsx(Ce,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),l.jsxs("section",{className:"cta",children:[l.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),l.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),l.jsxs(Ce,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",l.jsx(la,{size:24})]})]}),l.jsxs("footer",{className:"footer",children:[l.jsxs("div",{className:"footer-content",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx(Xt,{size:28}),l.jsx("span",{children:"Sistema Courier"}),l.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Producto"}),l.jsx("a",{href:"#features",children:"Características"}),l.jsx("a",{href:"#pricing",children:"Precios"}),l.jsx("a",{href:"/docs",children:"Documentación"})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Empresa"}),l.jsx("a",{href:"/about",children:"Nosotros"}),l.jsx("a",{href:"/contact",children:"Contacto"}),l.jsx("a",{href:"/blog",children:"Blog"})]}),l.jsxs("div",{className:"footer-links",children:[l.jsx("h4",{children:"Legal"}),l.jsx("a",{href:"/privacy",children:"Privacidad"}),l.jsx("a",{href:"/terms",children:"Términos"})]})]}),l.jsx("div",{className:"footer-bottom",children:l.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),l.jsx("style",{children:`
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
      `})]})},jE=()=>{const e=It(),[t,n]=O.useState(1),[r,i]=O.useState(!1),[s,a]=O.useState(""),[c,d]=O.useState("idle"),[f,k]=O.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),y=E=>{const{name:m,value:v}=E.target;if(k({...f,[m]:v}),a(""),m==="company_name"){const C=v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);k(L=>({...L,subdomain:C})),C.length>=3&&x(C)}if(m==="subdomain"){const C=v.toLowerCase().replace(/[^a-z0-9-]/g,"");k(L=>({...L,subdomain:C})),C.length>=3&&x(C)}},x=async E=>{d("checking");try{const v=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:E})})).json();d(v.available?"available":"taken")}catch{d("idle")}},T=()=>f.company_name.trim()?f.subdomain.length<3?(a("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(a("Este subdominio no está disponible"),!1):!0:(a("Ingresa el nombre de tu empresa"),!1),I=()=>f.admin_name.trim()?f.admin_email.includes("@")?f.password.length<8?(a("La contraseña debe tener al menos 8 caracteres"),!1):f.password!==f.confirm_password?(a("Las contraseñas no coinciden"),!1):!0:(a("Ingresa un email válido"),!1):(a("Ingresa tu nombre"),!1),R=()=>{t===1&&T()&&n(2)},A=async E=>{if(E.preventDefault(),!!I()){i(!0),a("");try{const m=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:f.company_name,subdomain:f.subdomain,admin_email:f.admin_email,admin_password:f.password,admin_name:f.admin_name})}),v=await m.json();if(!m.ok)throw new Error(v.error||"Error al crear la cuenta");e(`/onboarding?tenant=${v.tenant.subdomain}`)}catch(m){a(m.message)}finally{i(!1)}}};return l.jsxs("div",{className:"register-page",children:[l.jsxs("div",{className:"register-container",children:[l.jsxs("div",{className:"register-brand",children:[l.jsxs(Ce,{to:"/",className:"brand-logo",children:[l.jsx(Xt,{size:40}),l.jsx("span",{children:"Sistema Courier"})]}),l.jsxs("div",{className:"brand-content",children:[l.jsx("h2",{children:"Comienza tu prueba gratuita"}),l.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),l.jsxs("ul",{className:"brand-features",children:[l.jsxs("li",{children:[l.jsx(Zn,{size:20})," Configuración en minutos"]}),l.jsxs("li",{children:[l.jsx(Zn,{size:20})," Soporte incluido"]}),l.jsxs("li",{children:[l.jsx(Zn,{size:20})," Cancela cuando quieras"]})]})]})]}),l.jsxs("div",{className:"register-form-container",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h1",{children:"Crear cuenta"}),l.jsxs("p",{children:["Paso ",t," de 2"]})]}),l.jsxs("div",{className:"progress-bar",children:[l.jsx("div",{className:"progress-step active",children:"1"}),l.jsx("div",{className:"progress-line"}),l.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),s&&l.jsxs("div",{className:"error-message",children:[l.jsx(hs,{size:18}),s]}),l.jsx("form",{onSubmit:A,children:t===1?l.jsxs("div",{className:"form-step",children:[l.jsx("h3",{children:"Información de la empresa"}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Nombre de la empresa"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(ca,{size:20}),l.jsx("input",{type:"text",name:"company_name",value:f.company_name,onChange:y,placeholder:"Mi Empresa de Courier",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Tu subdominio"}),l.jsxs("div",{className:"input-wrapper subdomain-input",children:[l.jsx(Jr,{size:20}),l.jsx("input",{type:"text",name:"subdomain",value:f.subdomain,onChange:y,placeholder:"miempresa",required:!0}),l.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&l.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&l.jsxs("span",{className:"subdomain-status available",children:[l.jsx(Zn,{size:14})," Disponible"]}),c==="taken"&&l.jsxs("span",{className:"subdomain-status taken",children:[l.jsx(hs,{size:14})," No disponible"]})]}),l.jsxs("button",{type:"button",onClick:R,className:"btn-next",children:["Continuar ",l.jsx(la,{size:20})]})]}):l.jsxs("div",{className:"form-step",children:[l.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[l.jsx(fd,{size:18})," Atrás"]}),l.jsx("h3",{children:"Tu cuenta de administrador"}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Tu nombre"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(EE,{size:20}),l.jsx("input",{type:"text",name:"admin_name",value:f.admin_name,onChange:y,placeholder:"Juan Pérez",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Email"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(gd,{size:20}),l.jsx("input",{type:"email",name:"admin_email",value:f.admin_email,onChange:y,placeholder:"juan@miempresa.com",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Contraseña"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Gc,{size:20}),l.jsx("input",{type:"password",name:"password",value:f.password,onChange:y,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Confirmar contraseña"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Gc,{size:20}),l.jsx("input",{type:"password",name:"confirm_password",value:f.confirm_password,onChange:y,placeholder:"Repite la contraseña",required:!0})]})]}),l.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),l.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",l.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",l.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),l.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",l.jsx(Ce,{to:"/login",children:"Iniciar sesión"})]})]})]}),l.jsx("style",{children:`
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
      `})]})},NE=()=>{const e=It(),[t]=gw();t.get("tenant");const[n,r]=O.useState(1),[i,s]=O.useState(!1),[a,c]=O.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),d=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],f=x=>{var I;const T=(I=x.target.files)==null?void 0:I[0];T&&c({...a,logo:T,logo_preview:URL.createObjectURL(T)})},k=async()=>{s(!0);try{if(a.logo){const x=new FormData;x.append("logo",a.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:x})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:a.primary_color,contact_phone:a.company_phone,address:a.company_address})}),e("/dashboard")}catch(x){console.error("Error saving onboarding:",x)}finally{s(!1)}},y=()=>{e("/dashboard")};return l.jsxs("div",{className:"onboarding-wizard",children:[l.jsxs("div",{className:"wizard-container",children:[l.jsxs("div",{className:"wizard-header",children:[l.jsx(Xt,{size:32,color:"#3b82f6"}),l.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),l.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),l.jsx("div",{className:"wizard-progress",children:[1,2,3].map(x=>l.jsx("div",{className:`progress-dot ${n>=x?"active":""}`,children:n>x?l.jsx(Zn,{size:16}):x},x))}),l.jsxs("div",{className:"wizard-content",children:[n===1&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(bp,{size:32})}),l.jsx("h2",{children:"Sube tu logo"}),l.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),l.jsx("div",{className:"logo-upload",children:a.logo_preview?l.jsxs("div",{className:"logo-preview",children:[l.jsx("img",{src:a.logo_preview,alt:"Logo preview"}),l.jsx("button",{onClick:()=>c({...a,logo:null,logo_preview:""}),children:"Cambiar"})]}):l.jsxs("label",{className:"upload-area",children:[l.jsx(bp,{size:40}),l.jsx("span",{children:"Arrastra o haz clic para subir"}),l.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),l.jsx("input",{type:"file",accept:"image/*",onChange:f})]})})]}),n===2&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(yE,{size:32})}),l.jsx("h2",{children:"Elige tus colores"}),l.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),l.jsx("div",{className:"color-picker",children:d.map(x=>l.jsx("button",{className:`color-option ${a.primary_color===x?"selected":""}`,style:{backgroundColor:x},onClick:()=>c({...a,primary_color:x}),children:a.primary_color===x&&l.jsx(Zn,{size:20})},x))}),l.jsx("div",{className:"color-preview",style:{backgroundColor:a.primary_color},children:l.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&l.jsxs("div",{className:"wizard-step",children:[l.jsx("div",{className:"step-icon",children:l.jsx(kp,{size:32})}),l.jsx("h2",{children:"Información de contacto"}),l.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),l.jsxs("div",{className:"contact-form",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Teléfono (opcional)"}),l.jsx("input",{type:"tel",value:a.company_phone,onChange:x=>c({...a,company_phone:x.target.value}),placeholder:"+1 234 567 8900"})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Dirección (opcional)"}),l.jsx("input",{type:"text",value:a.company_address,onChange:x=>c({...a,company_address:x.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),l.jsxs("div",{className:"wizard-nav",children:[n>1?l.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[l.jsx(fd,{size:20})," Atrás"]}):l.jsx("button",{onClick:y,className:"btn-skip",children:"Omitir configuración"}),n<3?l.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",l.jsx(la,{size:20})]}):l.jsxs("button",{onClick:k,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",l.jsx(kp,{size:20})]})]})]}),l.jsx("style",{children:`
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
      `})]})},IE=()=>{var E,m,v,C,L,M,_,g;const{tenant:e,isWhiteLabel:t}=ni(),{login:n,clearError:r}=Xv(),i=It(),s=sn(),[a,c]=O.useState(""),[d,f]=O.useState(""),[k,y]=O.useState(!1),[x,T]=O.useState(""),I=((m=(E=s.state)==null?void 0:E.from)==null?void 0:m.pathname)||"/dashboard",R=async w=>{w.preventDefault(),y(!0),T(""),r();try{await n(a,d),i(I,{replace:!0})}catch(S){T(S.message||"Error al iniciar sesión")}finally{y(!1)}},A=((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6";return l.jsxs("div",{className:"login-page",children:[l.jsxs("div",{className:"login-container",children:[l.jsx("div",{className:"login-logo",children:(C=e==null?void 0:e.branding)!=null&&C.logo_url?l.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):l.jsx("div",{className:"logo-placeholder",children:((M=(L=e==null?void 0:e.branding)==null?void 0:L.company_name)==null?void 0:M.charAt(0))||"C"})}),l.jsx("h1",{children:((_=e==null?void 0:e.branding)==null?void 0:_.company_name)||"Sistema Courier"}),((g=e==null?void 0:e.branding)==null?void 0:g.tagline)&&l.jsx("p",{className:"tagline",children:e.branding.tagline}),l.jsxs("form",{onSubmit:R,children:[x&&l.jsx("div",{className:"error-message",children:x}),l.jsxs("div",{className:"input-group",children:[l.jsx(gd,{size:20,className:"input-icon"}),l.jsx("input",{type:"email",placeholder:"Correo electrónico",value:a,onChange:w=>c(w.target.value),required:!0})]}),l.jsxs("div",{className:"input-group",children:[l.jsx(Gc,{size:20,className:"input-icon"}),l.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:w=>f(w.target.value),required:!0})]}),l.jsx("button",{type:"submit",className:"btn-login",disabled:k,style:{backgroundColor:A},children:k?"Iniciando sesión...":l.jsxs(l.Fragment,{children:[l.jsx(vE,{size:20}),"Iniciar Sesión"]})}),l.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&l.jsx("div",{className:"login-footer",children:l.jsxs("p",{children:["Powered by ",l.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),l.jsx("style",{children:`
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
      `})]})},CE=()=>{var R,A,E;const{tenant:e,isWhiteLabel:t}=ni(),n=((R=e==null?void 0:e.branding)==null?void 0:R.primary_color)||"#3b82f6",[r,i]=O.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[s,a]=O.useState([]),[c,d]=O.useState(!0);O.useEffect(()=>{f()},[e]);const f=async()=>{if(e)try{d(!0);const m="http://localhost:3001",C=await(await fetch(`${m}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(C);const M=await(await fetch(`${m}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();a(M)}catch(m){console.error("Error fetching dashboard data:",m)}finally{d(!1)}},k=m=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(m),y=m=>{const v=new Date(m),L=new Date().getTime()-v.getTime(),M=Math.floor(L/6e4);if(M<1)return"Hace un momento";if(M<60)return`Hace ${M} min`;const _=Math.floor(M/60);if(_<24)return`Hace ${_} hora${_>1?"s":""}`;const g=Math.floor(_/24);return`Hace ${g} día${g>1?"s":""}`},x=m=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[m]||m,T=m=>{switch(m){case"delivered":return l.jsx(Jv,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return l.jsx(Jc,{size:16,className:"status-icon warning"});case"assigned":case"processing":return l.jsx(Xt,{size:16,className:"status-icon info"});default:return l.jsx(Yv,{size:16,className:"status-icon pending"})}},I=[{icon:Xt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:Jc,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:Pa,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:Kc,label:"Ingresos Mes",value:k(r.monthlyRevenue),color:"#f59e0b"}];return l.jsxs("div",{className:"dashboard",children:[l.jsxs("header",{className:"dashboard-header",children:[l.jsx("div",{className:"header-left",children:(A=e==null?void 0:e.branding)!=null&&A.logo_url?l.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):l.jsx("span",{className:"header-title",children:((E=e==null?void 0:e.branding)==null?void 0:E.company_name)||"Sistema Courier"})}),l.jsxs("div",{className:"header-right",children:[l.jsx("span",{className:"user-name",children:"Admin"}),l.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),l.jsxs("main",{className:"dashboard-main",children:[l.jsx("div",{className:"stats-grid",children:I.map((m,v)=>l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",style:{backgroundColor:`${m.color}20`,color:m.color},children:l.jsx(m.icon,{size:24})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:c?"...":m.value}),l.jsx("div",{className:"stat-label",children:m.label})]})]},v))}),l.jsxs("div",{className:"dashboard-grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Paquetes Recientes"}),l.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),l.jsx("div",{className:"card-content",children:c?l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):s.length===0?l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):s.slice(0,4).map(m=>l.jsxs("div",{className:"package-item",children:[l.jsxs("div",{className:"package-info",children:[l.jsx("span",{className:"package-id",children:m.tracking_number}),l.jsx("span",{className:"package-client",children:m.client_name||"Sin cliente"})]}),l.jsxs("div",{className:"package-status",children:[T(m.status),l.jsx("span",{children:x(m.status)})]}),l.jsx("span",{className:"package-time",children:y(m.created_at)})]},m.id))})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Rendimiento"}),l.jsx(Xc,{size:20,style:{color:"#10b981"}})]}),l.jsxs("div",{className:"card-content performance-grid",children:[l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),l.jsx("span",{className:"perf-value success",children:"94%"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),l.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Incidentes"}),l.jsx("span",{className:"perf-value warning",children:"3"})]}),l.jsxs("div",{className:"performance-item",children:[l.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),l.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&l.jsxs("div",{className:"trial-notice",children:[l.jsx(hs,{size:20}),l.jsx("span",{children:"Tu período de prueba termina pronto. "}),l.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),l.jsx("style",{children:`
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
      `})]})},PE=()=>{var m,v;const{tenant:e}=ni(),t=It(),[n,r]=O.useState([]),[i,s]=O.useState(!0),[a,c]=O.useState(""),[d,f]=O.useState(""),[k,y]=O.useState(1),[x,T]=O.useState(0),I=20;O.useEffect(()=>{e&&R()},[e,k,a,d]);const R=async()=>{var C;if(e)try{s(!0);const L="http://localhost:3001",M=new URLSearchParams({page:k.toString(),limit:I.toString(),...a&&{search:a},...d&&{status:d}}),g=await(await fetch(`${L}/api/packages?${M}`,{headers:{"X-Tenant-ID":e.id}})).json();r(g.packages||[]),T(((C=g.pagination)==null?void 0:C.total)||0)}catch(L){console.error("Error fetching packages:",L)}finally{s(!1)}},A=C=>{const M={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[C]||{label:C,color:"#6b7280"};return l.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${M.color}20`,color:M.color},children:M.label})},E=C=>new Date(C).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return l.jsxs("div",{className:"packages-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Paquetes"}),l.jsxs("p",{children:[x," paquetes en total"]})]}),l.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[l.jsx(fs,{size:20}),"Nuevo Paquete"]})]}),l.jsxs("div",{className:"filters-bar",children:[l.jsxs("div",{className:"search-box",children:[l.jsx(ry,{size:20}),l.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:a,onChange:C=>{c(C.target.value),y(1)}})]}),l.jsxs("select",{value:d,onChange:C=>{f(C.target.value),y(1)},className:"status-filter",children:[l.jsx("option",{value:"",children:"Todos los estados"}),l.jsx("option",{value:"pending",children:"Pendiente"}),l.jsx("option",{value:"processing",children:"Procesando"}),l.jsx("option",{value:"assigned",children:"Asignado"}),l.jsx("option",{value:"in_transit",children:"En tránsito"}),l.jsx("option",{value:"out_for_delivery",children:"En reparto"}),l.jsx("option",{value:"delivered",children:"Entregado"}),l.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),l.jsx("div",{className:"table-container",children:i?l.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Xt,{size:48}),l.jsx("h3",{children:"No hay paquetes"}),l.jsx("p",{children:"Crea tu primer paquete para comenzar"}),l.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[l.jsx(fs,{size:20}),"Crear Paquete"]})]}):l.jsxs("table",{className:"packages-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Tracking"}),l.jsx("th",{children:"Destinatario"}),l.jsx("th",{children:"Dirección"}),l.jsx("th",{children:"Estado"}),l.jsx("th",{children:"Fecha"}),l.jsx("th",{children:"Acciones"})]})}),l.jsx("tbody",{children:n.map(C=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("span",{className:"tracking-number",children:C.tracking_number})}),l.jsx("td",{children:C.recipient_name}),l.jsx("td",{className:"address-cell",children:C.recipient_address}),l.jsx("td",{children:A(C.status)}),l.jsx("td",{children:E(C.created_at)}),l.jsx("td",{children:l.jsxs("div",{className:"actions",children:[l.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}`),title:"Ver detalle",children:l.jsx(pE,{size:16})}),l.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}/edit`),title:"Editar",children:l.jsx(ey,{size:16})})]})})]},C.id))})]})}),!i&&x>I&&l.jsxs("div",{className:"pagination",children:[l.jsx("button",{disabled:k===1,onClick:()=>y(k-1),children:"Anterior"}),l.jsxs("span",{children:["Página ",k," de ",Math.ceil(x/I)]}),l.jsx("button",{disabled:k>=Math.ceil(x/I),onClick:()=>y(k+1),children:"Siguiente"})]}),l.jsx("style",{children:`
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
            `})]})},RE=()=>{var y,x;const{tenant:e}=ni(),t=It(),[n,r]=O.useState(!1),[i,s]=O.useState([]),[a,c]=O.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",weight:"",dimensions:"",declared_value:"",notes:""});O.useEffect(()=>{e&&d()},[e]);const d=async()=>{if(e)try{const R=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();s(R.clients||[])}catch(T){console.error("Error fetching clients:",T)}},f=T=>{const I=i.find(R=>R.id===T);c(I?{...a,client_id:T,sender_name:I.name,sender_phone:I.phone}:{...a,client_id:T})},k=async T=>{if(T.preventDefault(),!!e){if(!a.client_id||!a.recipient_name||!a.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const R=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...a,weight:parseFloat(a.weight)||0,declared_value:parseFloat(a.declared_value)||0})});if(R.ok){const A=await R.json();alert(`Paquete creado exitosamente! Tracking: ${A.tracking_number}`),t("/packages")}else{const A=await R.json();alert(`Error: ${A.error||"No se pudo crear el paquete"}`)}}catch(I){console.error("Error creating package:",I),alert("Error al crear el paquete")}finally{r(!1)}}};return l.jsxs("div",{className:"new-package-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[l.jsx(fd,{size:20}),"Volver"]}),l.jsx("h1",{children:"Nuevo Paquete"})]}),l.jsxs("form",{onSubmit:k,className:"package-form",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Información del Cliente"}),l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Cliente *"}),l.jsxs("select",{value:a.client_id,onChange:T=>f(T.target.value),required:!0,children:[l.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(T=>l.jsx("option",{value:T.id,children:T.name},T.id))]})]})})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Datos del Remitente"}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Nombre del Remitente"}),l.jsx("input",{type:"text",value:a.sender_name,onChange:T=>c({...a,sender_name:T.target.value}),placeholder:"Nombre completo"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Teléfono del Remitente"}),l.jsx("input",{type:"tel",value:a.sender_phone,onChange:T=>c({...a,sender_phone:T.target.value}),placeholder:"8888-8888"})]})]})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Datos del Destinatario"}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Nombre del Destinatario *"}),l.jsx("input",{type:"text",value:a.recipient_name,onChange:T=>c({...a,recipient_name:T.target.value}),placeholder:"Nombre completo",required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Teléfono del Destinatario *"}),l.jsx("input",{type:"tel",value:a.recipient_phone,onChange:T=>c({...a,recipient_phone:T.target.value}),placeholder:"8888-8888",required:!0})]})]}),l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Dirección de Entrega *"}),l.jsx("textarea",{value:a.recipient_address,onChange:T=>c({...a,recipient_address:T.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Detalles del Paquete"}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Peso (kg)"}),l.jsx("input",{type:"number",step:"0.01",value:a.weight,onChange:T=>c({...a,weight:T.target.value}),placeholder:"0.00"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Dimensiones"}),l.jsx("input",{type:"text",value:a.dimensions,onChange:T=>c({...a,dimensions:T.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Valor Declarado (₡)"}),l.jsx("input",{type:"number",step:"0.01",value:a.declared_value,onChange:T=>c({...a,declared_value:T.target.value}),placeholder:"0.00"})]})]}),l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Notas"}),l.jsx("textarea",{value:a.notes,onChange:T=>c({...a,notes:T.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),l.jsxs("div",{className:"form-actions",children:[l.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),l.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[l.jsx(ny,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),l.jsx("style",{children:`
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
                    background: ${((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6"};
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
            `})]})},AE=()=>l.jsxs("div",{className:"loading-page",children:[l.jsxs("div",{className:"loading-container",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("h2",{children:"Cargando..."}),l.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),l.jsx("style",{children:`
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
      `})]}),OE=({message:e})=>l.jsxs("div",{className:"error-page",children:[l.jsxs("div",{className:"error-container",children:[l.jsx("div",{className:"error-icon",children:l.jsx(uE,{size:64})}),l.jsx("h1",{children:"No se pudo cargar"}),l.jsx("p",{className:"error-message",children:e}),l.jsxs("div",{className:"error-actions",children:[l.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),l.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),l.jsx("style",{children:`
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
      `})]}),DE=()=>{var S,N;const{tenant:e}=ni(),[t,n]=O.useState([]),[r,i]=O.useState(!0),[s,a]=O.useState(""),[c,d]=O.useState(!1),[f,k]=O.useState(null),[y,x]=O.useState(null),[T,I]=O.useState(""),[R,A]=O.useState(""),E=((S=e==null?void 0:e.plan)==null?void 0:S.id)==="enterprise",m=((N=e==null?void 0:e.branding)==null?void 0:N.primary_color)||"#3b82f6";O.useEffect(()=>{v()},[]);const v=async()=>{try{const b=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(b)}catch(j){console.error("Error fetching domains:",j)}finally{i(!1)}},C=async j=>{if(j.preventDefault(),!!s.trim()){d(!0),I("");try{const b=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:s})}),ge=await b.json();if(!b.ok)throw new Error(ge.error||"Error agregando dominio");n([...t,ge.domain]),k(ge.dns_instructions),a(""),A("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(b){I(b.message)}finally{d(!1)}}},L=async j=>{x(j),I("");try{const ge=await(await fetch(`/api/domains/${j}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ge.verified?(A("DNS verificado. El SSL se está configurando."),v()):I(ge.message)}catch{I("Error verificando DNS")}finally{x(null)}},M=async j=>{try{await fetch(`/api/domains/${j}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),A("Dominio establecido como principal"),v()}catch{I("Error estableciendo dominio principal")}},_=async j=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${j}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(b=>b.id!==j)),A("Dominio eliminado")}catch{I("Error eliminando dominio")}},g=j=>{navigator.clipboard.writeText(j),A("Copiado al portapapeles"),setTimeout(()=>A(""),2e3)},w=j=>{switch(j){case"active":return l.jsxs("span",{className:"badge success",children:[l.jsx(Jv,{size:14})," Activo"]});case"provisioning":return l.jsxs("span",{className:"badge warning",children:[l.jsx(Yv,{size:14})," Configurando SSL"]});case"pending":return l.jsxs("span",{className:"badge pending",children:[l.jsx(hs,{size:14})," Pendiente verificación"]});case"failed":return l.jsxs("span",{className:"badge danger",children:[l.jsx(hs,{size:14})," Error"]});default:return null}};return E?l.jsxs("div",{className:"white-label-settings",children:[l.jsxs("header",{className:"page-header",children:[l.jsx("h1",{children:"Configuración White Label"}),l.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),T&&l.jsx("div",{className:"alert error",children:T}),R&&l.jsx("div",{className:"alert success",children:R}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsxs("h3",{children:[l.jsx(Jr,{size:20})," Dominios"]})}),l.jsxs("div",{className:"card-content",children:[l.jsx("div",{className:"domains-list",children:t.map(j=>l.jsxs("div",{className:"domain-row",children:[l.jsxs("div",{className:"domain-info",children:[l.jsxs("div",{className:"domain-name",children:[j.is_primary&&l.jsx(qc,{size:16,className:"primary-star"}),j.domain,j.domain_type==="subdomain"&&l.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),w(j.ssl_status)]}),l.jsxs("div",{className:"domain-actions",children:[j.ssl_status==="pending"&&l.jsx("button",{onClick:()=>L(j.id),disabled:y===j.id,className:"btn-action",children:y===j.id?l.jsx(wE,{size:16,className:"spin"}):"Verificar DNS"}),j.ssl_status==="active"&&!j.is_primary&&l.jsxs("button",{onClick:()=>M(j.id),className:"btn-action",children:[l.jsx(qc,{size:16})," Hacer principal"]}),j.domain_type==="custom"&&l.jsx("button",{onClick:()=>_(j.id),className:"btn-delete",children:l.jsx(kE,{size:16})}),l.jsx("a",{href:`https://${j.domain}`,target:"_blank",className:"btn-action",children:l.jsx(pd,{size:16})})]})]},j.id))}),l.jsxs("form",{onSubmit:C,className:"add-domain-form",children:[l.jsx("input",{type:"text",placeholder:"miempresa.com",value:s,onChange:j=>a(j.target.value)}),l.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[l.jsx(fs,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),f&&l.jsxs("div",{className:"card instructions-card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Configuración DNS"})}),l.jsxs("div",{className:"card-content",children:[l.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),l.jsxs("div",{className:"dns-record",children:[l.jsxs("div",{className:"dns-field",children:[l.jsx("label",{children:"Tipo"}),l.jsx("span",{children:f.type})]}),l.jsxs("div",{className:"dns-field",children:[l.jsx("label",{children:"Nombre"}),l.jsx("span",{children:f.name}),l.jsx("button",{onClick:()=>g(f.name),className:"copy-btn",children:l.jsx(_p,{size:14})})]}),l.jsxs("div",{className:"dns-field wide",children:[l.jsx("label",{children:"Valor"}),l.jsx("span",{children:f.value}),l.jsx("button",{onClick:()=>g(f.value),className:"copy-btn",children:l.jsx(_p,{size:14})})]})]}),l.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),l.jsx("style",{children:Ep(m)})]}):l.jsxs("div",{className:"white-label-settings",children:[l.jsxs("div",{className:"upgrade-notice",children:[l.jsx(Jr,{size:48}),l.jsx("h2",{children:"White Label disponible en Enterprise"}),l.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),l.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),l.jsx("style",{children:Ep(m)})]})},Ep=e=>`
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
`,LE=()=>{const[e,t]=O.useState(null),[n,r]=O.useState(!0);O.useEffect(()=>{i()},[]);const i=async()=>{try{const d=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(d)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return l.jsx("div",{className:"loading",children:"Cargando dashboard..."});const s=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),a=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return l.jsxs("div",{className:"super-admin-dashboard",children:[l.jsxs("header",{className:"dashboard-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Super Admin Dashboard"}),l.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),l.jsx("div",{className:"header-actions",children:l.jsxs(Ce,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[l.jsx(fs,{size:20}),"Nuevo Tenant"]})})]}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card primary",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(ca,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),l.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),l.jsxs("div",{className:"stat-card success",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(Pa,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),l.jsx("div",{className:"stat-label",children:"Activas"}),l.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),l.jsxs("div",{className:"stat-card warning",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(Kc,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:s((e==null?void 0:e.summary.mrr)||0)}),l.jsx("div",{className:"stat-label",children:"MRR"}),l.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),l.jsxs("div",{className:"stat-card danger",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(bE,{size:28})}),l.jsxs("div",{className:"stat-content",children:[l.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),l.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),l.jsxs("div",{className:"content-grid",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Empresas Recientes"}),l.jsx(Ce,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),l.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>l.jsxs("div",{className:"tenant-row",children:[l.jsx("div",{className:"tenant-avatar",children:c.logo_url?l.jsx("img",{src:c.logo_url,alt:c.name}):l.jsx("span",{children:c.name.charAt(0)})}),l.jsxs("div",{className:"tenant-info",children:[l.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),l.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),l.jsx("div",{className:"tenant-status",style:{color:a(c.status)},children:c.status}),l.jsx("div",{className:"tenant-plan",children:c.plan_id}),l.jsx(Ce,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:l.jsx(Qv,{size:18})})]},c.id))})]}),l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Ingresos Mensuales"}),l.jsx(Xc,{size:20,className:"success"})]}),l.jsx("div",{className:"card-content chart-container",children:l.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,d)=>l.jsxs("div",{className:"chart-bar",children:[l.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),l.jsx("span",{className:"bar-label",children:c.month}),l.jsx("span",{className:"bar-value",children:s(c.revenue)})]},d))})})]}),l.jsxs("div",{className:"card small",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Por Plan"})}),l.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,d)=>l.jsxs("div",{className:"distribution-row",children:[l.jsx("span",{className:"dist-label",children:c.plan_id}),l.jsx("div",{className:"dist-bar",children:l.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][d%4]}})}),l.jsx("span",{className:"dist-count",children:c.count})]},d))})]}),l.jsxs("div",{className:"card small",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Acciones Rápidas"})}),l.jsxs("div",{className:"card-content quick-actions",children:[l.jsxs(Ce,{to:"/super-admin/tenants",className:"quick-action",children:[l.jsx(ca,{size:24}),l.jsx("span",{children:"Gestionar Empresas"})]}),l.jsxs(Ce,{to:"/super-admin/subscriptions",className:"quick-action",children:[l.jsx(Kc,{size:24}),l.jsx("span",{children:"Ver Suscripciones"})]}),l.jsxs(Ce,{to:"/super-admin/plans",className:"quick-action",children:[l.jsx(Xc,{size:24}),l.jsx("span",{children:"Configurar Planes"})]})]})]})]}),l.jsx("style",{children:`
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
      `})]})},ME=()=>{const e=It(),[t,n]=O.useState([]),[r,i]=O.useState({page:1,limit:20,total:0,pages:0}),[s,a]=O.useState(!0),[c,d]=O.useState(""),[f,k]=O.useState(""),[y,x]=O.useState(null);O.useEffect(()=>{T()},[r.page,f]);const T=async()=>{try{a(!0);const v=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...f&&{status:f},...c&&{search:c}}),L=await(await fetch(`/api/super-admin/tenants?${v}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(L.tenants),i(L.pagination)}catch(v){console.error("Error fetching tenants:",v)}finally{a(!1)}},I=v=>{v.preventDefault(),i({...r,page:1}),T()},R=async v=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${v}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),T()}catch(C){console.error("Error suspending tenant:",C)}},A=async v=>{try{await fetch(`/api/super-admin/tenants/${v}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),T()}catch(C){console.error("Error activating tenant:",C)}},E=v=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[v]||"bg-blue"}`,m=v=>new Date(v).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return l.jsxs("div",{className:"tenants-management",children:[l.jsxs("header",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx(Ce,{to:"/super-admin",className:"back-link",children:l.jsx(Wc,{size:20})}),l.jsxs("div",{children:[l.jsx("h1",{children:"Gestión de Empresas"}),l.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),l.jsxs(Ce,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[l.jsx(fs,{size:20}),"Nueva Empresa"]})]}),l.jsxs("div",{className:"filters-bar",children:[l.jsxs("form",{onSubmit:I,className:"search-box",children:[l.jsx(ry,{size:20}),l.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:v=>d(v.target.value)})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx(gE,{size:18}),l.jsxs("select",{value:f,onChange:v=>k(v.target.value),children:[l.jsx("option",{value:"",children:"Todos los estados"}),l.jsx("option",{value:"active",children:"Activos"}),l.jsx("option",{value:"trial",children:"En prueba"}),l.jsx("option",{value:"suspended",children:"Suspendidos"}),l.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),l.jsx("div",{className:"table-container",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Empresa"}),l.jsx("th",{children:"Subdominio"}),l.jsx("th",{children:"Plan"}),l.jsx("th",{children:"Estado"}),l.jsx("th",{children:"Creado"}),l.jsx("th",{children:"Acciones"})]})}),l.jsx("tbody",{children:s?l.jsx("tr",{children:l.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?l.jsx("tr",{children:l.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(v=>{var C,L,M;return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsxs("div",{className:"tenant-cell",children:[l.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((C=v.branding)==null?void 0:C.primary_color)||"#3b82f6"},children:(L=v.branding)!=null&&L.logo_url?l.jsx("img",{src:v.branding.logo_url,alt:""}):v.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("div",{className:"tenant-name",children:((M=v.branding)==null?void 0:M.company_name)||v.name}),l.jsxs("div",{className:"tenant-id",children:[v.id.slice(0,8),"..."]})]})]})}),l.jsx("td",{children:l.jsxs("a",{href:`https://${v.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[v.subdomain,l.jsx(pd,{size:14})]})}),l.jsx("td",{children:l.jsx("span",{className:"plan-badge",children:v.plan_id})}),l.jsx("td",{children:l.jsx("span",{className:E(v.status),children:v.status})}),l.jsx("td",{children:m(v.created_at)}),l.jsx("td",{children:l.jsxs("div",{className:"actions-cell",children:[l.jsx("button",{onClick:()=>e(`/super-admin/tenants/${v.id}`),className:"action-btn",title:"Ver detalles",children:l.jsx(Qv,{size:18})}),v.status==="active"?l.jsx("button",{onClick:()=>R(v.id),className:"action-btn danger",title:"Suspender",children:l.jsx(Zv,{size:18})}):v.status==="suspended"&&l.jsx("button",{onClick:()=>A(v.id),className:"action-btn success",title:"Activar",children:l.jsx(ty,{size:18})})]})})]},v.id)})})]})}),r.pages>1&&l.jsxs("div",{className:"pagination",children:[l.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[l.jsx(Wc,{size:18}),"Anterior"]}),l.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),l.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",l.jsx(hE,{size:18})]})]}),l.jsx("style",{children:`
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
      `})]})},zE=()=>{const{id:e}=B1();It();const[t,n]=O.useState(null),[r,i]=O.useState(!0),[s,a]=O.useState(!1),[c,d]=O.useState({name:"",plan_id:""});O.useEffect(()=>{f()},[e]);const f=async()=>{try{const I=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(I),d({name:I.name,plan_id:I.plan_id})}catch(T){console.error("Error fetching tenant:",T)}finally{i(!1)}},k=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),a(!1),f()}catch(T){console.error("Error updating tenant:",T)}},y=async T=>{if(confirm(T==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${T}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),f()}catch(R){console.error("Error changing status:",R)}},x=T=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[T]||"#3b82f6";return r?l.jsx("div",{className:"loading-page",children:"Cargando..."}):t?l.jsxs("div",{className:"tenant-detail",children:[l.jsxs("header",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx(Ce,{to:"/super-admin/tenants",className:"back-link",children:l.jsx(Wc,{size:20})}),l.jsxs("div",{className:"tenant-header",children:[l.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?l.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),l.jsxs("div",{children:[l.jsx("h1",{children:t.branding.company_name||t.name}),l.jsxs("div",{className:"tenant-meta",children:[l.jsx("span",{className:"status-dot",style:{backgroundColor:x(t.status)}}),l.jsx("span",{children:t.status}),l.jsx("span",{className:"separator",children:"•"}),l.jsx("span",{children:t.plan_id})]})]})]})]}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[l.jsx(pd,{size:18}),"Visitar"]}),t.status==="active"?l.jsxs("button",{onClick:()=>y("suspend"),className:"btn btn-danger",children:[l.jsx(Zv,{size:18}),"Suspender"]}):t.status==="suspended"&&l.jsxs("button",{onClick:()=>y("activate"),className:"btn btn-success",children:[l.jsx(ty,{size:18}),"Activar"]})]})]}),l.jsxs("div",{className:"detail-content",children:[l.jsxs("div",{className:"card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("h3",{children:"Información General"}),s?l.jsxs("button",{onClick:k,className:"btn btn-primary btn-sm",children:[l.jsx(ny,{size:16}),"Guardar"]}):l.jsx("button",{onClick:()=>a(!0),className:"btn-icon",children:l.jsx(ey,{size:18})})]}),l.jsxs("div",{className:"card-content info-grid",children:[l.jsxs("div",{className:"info-item",children:[l.jsx(ca,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Nombre"}),s?l.jsx("input",{value:c.name,onChange:T=>d({...c,name:T.target.value})}):l.jsx("span",{children:t.name})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(Jr,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Subdominio"}),l.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(gd,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Email"}),l.jsx("span",{children:t.branding.contact_email||"-"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(xE,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Teléfono"}),l.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(dE,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Creado"}),l.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(fE,{size:18}),l.jsxs("div",{children:[l.jsx("label",{children:"Plan"}),s?l.jsxs("select",{value:c.plan_id,onChange:T=>d({...c,plan_id:T.target.value}),children:[l.jsx("option",{value:"trial",children:"Trial"}),l.jsx("option",{value:"starter",children:"Starter"}),l.jsx("option",{value:"professional",children:"Professional"}),l.jsx("option",{value:"enterprise",children:"Enterprise"})]}):l.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Uso del Servicio"})}),l.jsxs("div",{className:"card-content usage-grid",children:[l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(Pa,{size:24})}),l.jsx("div",{className:"usage-value",children:t.usage.users}),l.jsx("div",{className:"usage-label",children:"Usuarios"})]}),l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(Xt,{size:24})}),l.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),l.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),l.jsxs("div",{className:"usage-item",children:[l.jsx("div",{className:"usage-icon",children:l.jsx(mE,{size:24})}),l.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),l.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Dominios"})}),l.jsx("div",{className:"card-content",children:t.domains.length===0?l.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((T,I)=>l.jsxs("div",{className:"domain-row",children:[l.jsx(Jr,{size:16}),l.jsx("span",{children:T.domain}),T.is_primary&&l.jsx("span",{className:"badge primary",children:"Principal"}),l.jsxs("span",{className:`badge ${T.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",T.ssl_status]})]},I))})]}),t.subscription&&l.jsxs("div",{className:"card",children:[l.jsx("div",{className:"card-header",children:l.jsx("h3",{children:"Suscripción"})}),l.jsx("div",{className:"card-content",children:l.jsxs("div",{className:"subscription-info",children:[l.jsxs("div",{children:[l.jsx("label",{children:"Estado"}),l.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),l.jsxs("div",{children:[l.jsx("label",{children:"Próximo cobro"}),l.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),l.jsx("style",{children:`
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
      `})]}):l.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},UE=()=>{const{tenant:e,loading:t,error:n}=ni(),r=sn(),s=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),a=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return a&&s?l.jsx("div",{className:"app",children:l.jsxs(If,{children:[l.jsx(Oe,{path:"/",element:l.jsx(TE,{})}),l.jsx(Oe,{path:"/register",element:l.jsx(jE,{})}),l.jsx(Oe,{path:"/onboarding",element:l.jsx(NE,{})}),l.jsx(Oe,{path:"*",element:l.jsx(wo,{to:"/",replace:!0})})]})}):t?l.jsx(AE,{}):n&&!a?l.jsx(OE,{message:n}):l.jsx(aE,{children:l.jsx("div",{className:"app",children:l.jsxs(If,{children:[l.jsx(Oe,{path:"/login",element:l.jsx(IE,{})}),l.jsx(Oe,{path:"/dashboard",element:l.jsx(Kn,{children:l.jsx(CE,{})})}),l.jsx(Oe,{path:"/packages",element:l.jsx(Kn,{children:l.jsx(PE,{})})}),l.jsx(Oe,{path:"/packages/new",element:l.jsx(Kn,{children:l.jsx(RE,{})})}),l.jsx(Oe,{path:"/account/white-label",element:l.jsx(Kn,{children:l.jsx(DE,{})})}),l.jsx(Oe,{path:"/super-admin",element:l.jsx(Kn,{children:l.jsx(LE,{})})}),l.jsx(Oe,{path:"/super-admin/tenants",element:l.jsx(Kn,{children:l.jsx(ME,{})})}),l.jsx(Oe,{path:"/super-admin/tenants/:id",element:l.jsx(Kn,{children:l.jsx(zE,{})})}),l.jsx(Oe,{path:"/",element:l.jsx(wo,{to:"/dashboard",replace:!0})}),l.jsx(Oe,{path:"*",element:l.jsx(wo,{to:"/dashboard",replace:!0})})]})})})};Fl.createRoot(document.getElementById("root")).render(l.jsx(Dp.StrictMode,{children:l.jsx(dw,{children:l.jsx(yw,{children:l.jsx(UE,{})})})}));
//# sourceMappingURL=index-BDl8sGAl.js.map
