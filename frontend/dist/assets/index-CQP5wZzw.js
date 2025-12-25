function My(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nf={exports:{}},ha={},Tf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),Fy=Symbol.for("react.portal"),$y=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),qy=Symbol.for("react.forward_ref"),Ky=Symbol.for("react.suspense"),Gy=Symbol.for("react.memo"),Xy=Symbol.for("react.lazy"),gh=Symbol.iterator;function Jy(e){return e===null||typeof e!="object"?null:(e=gh&&e[gh]||e["@@iterator"],typeof e=="function"?e:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},If=Object.assign,Pf={};function Qr(e,t,n){this.props=e,this.context=t,this.refs=Pf,this.updater=n||Cf}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rf(){}Rf.prototype=Qr.prototype;function Zc(e,t,n){this.props=e,this.context=t,this.refs=Pf,this.updater=n||Cf}var eu=Zc.prototype=new Rf;eu.constructor=Zc;If(eu,Qr.prototype);eu.isPureReactComponent=!0;var mh=Array.isArray,Af=Object.prototype.hasOwnProperty,tu={current:null},Of={key:!0,ref:!0,__self:!0,__source:!0};function Df(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Af.call(t,r)&&!Of.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:fs,type:e,key:s,ref:l,props:i,_owner:tu.current}}function Yy(e,t){return{$$typeof:fs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nu(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function Qy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vh=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qy(""+e.key):t.toString(36)}function lo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fs:case Fy:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ol(l,0):r,mh(i)?(n="",e!=null&&(n=e.replace(vh,"$&/")+"/"),lo(i,t,n,"",function(p){return p})):i!=null&&(nu(i)&&(i=Yy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(vh,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",mh(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+ol(s,c);l+=lo(s,t,n,d,i)}else if(d=Jy(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+ol(s,c++),l+=lo(s,t,n,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bs(e,t,n){if(e==null)return e;var r=[],i=0;return lo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Zy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},co={transition:null},e0={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:co,ReactCurrentOwner:tu};function Lf(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Bs,forEach:function(e,t,n){Bs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bs(e,function(){t++}),t},toArray:function(e){return Bs(e,function(t){return t})||[]},only:function(e){if(!nu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=Qr;q.Fragment=$y;q.Profiler=Vy;q.PureComponent=Zc;q.StrictMode=By;q.Suspense=Ky;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e0;q.act=Lf;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=If({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=tu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Af.call(t,d)&&!Of.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var p=0;p<d;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:fs,type:e.type,key:i,ref:s,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:Wy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hy,_context:e},e.Consumer=e};q.createElement=Df;q.createFactory=function(e){var t=Df.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:qy,render:e}};q.isValidElement=nu;q.lazy=function(e){return{$$typeof:Xy,_payload:{_status:-1,_result:e},_init:Zy}};q.memo=function(e,t){return{$$typeof:Gy,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};q.unstable_act=Lf;q.useCallback=function(e,t){return Ue.current.useCallback(e,t)};q.useContext=function(e){return Ue.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};q.useEffect=function(e,t){return Ue.current.useEffect(e,t)};q.useId=function(){return Ue.current.useId()};q.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Ue.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};q.useRef=function(e){return Ue.current.useRef(e)};q.useState=function(e){return Ue.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Ue.current.useTransition()};q.version="18.3.1";Tf.exports=q;var A=Tf.exports;const zf=Uy(A),t0=My({__proto__:null,default:zf},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0=A,r0=Symbol.for("react.element"),i0=Symbol.for("react.fragment"),s0=Object.prototype.hasOwnProperty,o0=n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a0={key:!0,ref:!0,__self:!0,__source:!0};function Mf(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)s0.call(t,r)&&!a0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:r0,type:e,key:s,ref:l,props:i,_owner:o0.current}}ha.Fragment=i0;ha.jsx=Mf;ha.jsxs=Mf;Nf.exports=ha;var a=Nf.exports,Vl={},Uf={exports:{}},Qe={},Ff={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var se=W-1>>>1,Q=F[se];if(0<i(Q,H))F[se]=H,F[W]=Q,W=se;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var se=0,Q=F.length,ue=Q>>>1;se<ue;){var Dt=2*(se+1)-1,Lt=F[Dt],zt=Dt+1,Mt=F[zt];if(0>i(Lt,W))zt<Q&&0>i(Mt,Lt)?(F[se]=Mt,F[zt]=W,se=zt):(F[se]=Lt,F[Dt]=W,se=Dt);else if(zt<Q&&0>i(Mt,W))F[se]=Mt,F[zt]=W,se=zt;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],p=[],w=1,y=null,x=3,j=!1,C=!1,R=!1,O=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var H=n(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=F)r(p),H.sortIndex=H.expirationTime,t(d,H);else break;H=n(p)}}function I(F){if(R=!1,v(F),!C)if(n(d)!==null)C=!0,ii(L);else{var H=n(p);H!==null&&Ot(I,H.startTime-F)}}function L(F,H){C=!1,R&&(R=!1,E(g),g=-1),j=!0;var W=x;try{for(v(H),y=n(d);y!==null&&(!(y.expirationTime>H)||F&&!T());){var se=y.callback;if(typeof se=="function"){y.callback=null,x=y.priorityLevel;var Q=se(y.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?y.callback=Q:y===n(d)&&r(d),v(H)}else r(d);y=n(d)}if(y!==null)var ue=!0;else{var Dt=n(p);Dt!==null&&Ot(I,Dt.startTime-H),ue=!1}return ue}finally{y=null,x=W,j=!1}}var z=!1,b=null,g=-1,_=5,S=-1;function T(){return!(e.unstable_now()-S<_)}function N(){if(b!==null){var F=e.unstable_now();S=F;var H=!0;try{H=b(!0,F)}finally{H?k():(z=!1,b=null)}}else z=!1}var k;if(typeof m=="function")k=function(){m(N)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Hn=ge.port2;ge.port1.onmessage=N,k=function(){Hn.postMessage(null)}}else k=function(){O(N,0)};function ii(F){b=F,z||(z=!0,k())}function Ot(F,H){g=O(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){C||j||(C=!0,ii(L))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var W=x;x=H;try{return F()}finally{x=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=x;x=F;try{return H()}finally{x=W}},e.unstable_scheduleCallback=function(F,H,W){var se=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:w++,callback:H,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>se?(F.sortIndex=W,t(p,F),n(d)===null&&F===n(p)&&(R?(E(g),g=-1):R=!0,Ot(I,W-se))):(F.sortIndex=Q,t(d,F),C||j||(C=!0,ii(L))),F},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(F){var H=x;return function(){var W=x;x=H;try{return F.apply(this,arguments)}finally{x=W}}}})($f);Ff.exports=$f;var l0=Ff.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=A,Ye=l0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bf=new Set,Wi={};function dr(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(Wi[e]=t,e=0;e<t.length;e++)Bf.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,u0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yh={},xh={};function d0(e){return Hl.call(xh,e)?!0:Hl.call(yh,e)?!1:u0.test(e)?xh[e]=!0:(yh[e]=!0,!1)}function h0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function p0(e,t,n,r){if(t===null||typeof t>"u"||h0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ru,iu);Ee[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ru,iu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ru,iu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function su(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(p0(t,n,i,r)&&(n=null),r||i===null?d0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),wr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Hf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),lu=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Wf=Symbol.for("react.offscreen"),wh=Symbol.iterator;function yi(e){return e===null||typeof e!="object"?null:(e=wh&&e[wh]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,al;function Ni(e){if(al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);al=t&&t[1]||""}return`
`+al+e}var ll=!1;function cl(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,c=s.length-1;1<=l&&0<=c&&i[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==s[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ni(e):""}function f0(e){switch(e.tag){case 5:return Ni(e.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return e=cl(e.type,!1),e;case 11:return e=cl(e.type.render,!1),e;case 1:return e=cl(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _r:return"Fragment";case wr:return"Portal";case Wl:return"Profiler";case ou:return"StrictMode";case ql:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hf:return(e.displayName||"Context")+".Consumer";case Vf:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lu:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case fn:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function g0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function m0(e){var t=qf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){e._valueTracker||(e._valueTracker=m0(e))}function Kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _h(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gf(e,t){t=t.checked,t!=null&&su(e,"checked",t,!1)}function Jl(e,t){Gf(e,t);var n=Ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,Ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ti=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ti(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ln(n)}}function Xf(e,t){var n=Ln(t.value),r=Ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ws,Yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ws.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){v0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function Qf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function Zf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var y0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(e,t){if(t){if(y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function tc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rc=null,Or=null,Dr=null;function Sh(e){if(e=vs(e)){if(typeof rc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=va(t),rc(e.stateNode,e.type,t))}}function eg(e){Or?Dr?Dr.push(e):Dr=[e]:Or=e}function tg(){if(Or){var e=Or,t=Dr;if(Dr=Or=null,Sh(e),t)for(e=0;e<t.length;e++)Sh(t[e])}}function ng(e,t){return e(t)}function rg(){}var ul=!1;function ig(e,t,n){if(ul)return e(t,n);ul=!0;try{return ng(e,t,n)}finally{ul=!1,(Or!==null||Dr!==null)&&(rg(),tg())}}function Ki(e,t){var n=e.stateNode;if(n===null)return null;var r=va(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var ic=!1;if(Yt)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){ic=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{ic=!1}function x0(e,t,n,r,i,s,l,c,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(w){this.onError(w)}}var Oi=!1,No=null,To=!1,sc=null,w0={onError:function(e){Oi=!0,No=e}};function _0(e,t,n,r,i,s,l,c,d){Oi=!1,No=null,x0.apply(w0,arguments)}function b0(e,t,n,r,i,s,l,c,d){if(_0.apply(this,arguments),Oi){if(Oi){var p=No;Oi=!1,No=null}else throw Error(M(198));To||(To=!0,sc=p)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jh(e){if(hr(e)!==e)throw Error(M(188))}function k0(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jh(i),e;if(s===r)return jh(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=s;break}if(c===r){l=!0,r=i,n=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===n){l=!0,n=s,r=i;break}if(c===r){l=!0,r=s,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function og(e){return e=k0(e),e!==null?ag(e):null}function ag(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ag(e);if(t!==null)return t;e=e.sibling}return null}var lg=Ye.unstable_scheduleCallback,Nh=Ye.unstable_cancelCallback,E0=Ye.unstable_shouldYield,S0=Ye.unstable_requestPaint,he=Ye.unstable_now,j0=Ye.unstable_getCurrentPriorityLevel,uu=Ye.unstable_ImmediatePriority,cg=Ye.unstable_UserBlockingPriority,Co=Ye.unstable_NormalPriority,N0=Ye.unstable_LowPriority,ug=Ye.unstable_IdlePriority,pa=null,St=null;function T0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:P0,C0=Math.log,I0=Math.LN2;function P0(e){return e>>>=0,e===0?32:31-(C0(e)/I0|0)|0}var qs=64,Ks=4194304;function Ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=Ci(c):(s&=l,s!==0&&(r=Ci(s)))}else l=n&~i,l!==0?r=Ci(l):s!==0&&(r=Ci(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function R0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-ft(s),c=1<<l,d=i[l];d===-1?(!(c&n)||c&r)&&(i[l]=R0(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dg(){var e=qs;return qs<<=1,!(qs&4194240)&&(qs=64),e}function dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function O0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Y=0;function hg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pg,hu,fg,gg,mg,ac=!1,Gs=[],Sn=null,jn=null,Nn=null,Gi=new Map,Xi=new Map,mn=[],D0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(t.pointerId)}}function wi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=vs(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function L0(e,t,n,r,i){switch(t){case"focusin":return Sn=wi(Sn,e,t,n,r,i),!0;case"dragenter":return jn=wi(jn,e,t,n,r,i),!0;case"mouseover":return Nn=wi(Nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,wi(Gi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xi.set(s,wi(Xi.get(s)||null,e,t,n,r,i)),!0}return!1}function vg(e){var t=Yn(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=sg(n),t!==null){e.blockedOn=t,mg(e.priority,function(){fg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return t=vs(n),t!==null&&hu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ch(e,t,n){uo(e)&&n.delete(t)}function z0(){ac=!1,Sn!==null&&uo(Sn)&&(Sn=null),jn!==null&&uo(jn)&&(jn=null),Nn!==null&&uo(Nn)&&(Nn=null),Gi.forEach(Ch),Xi.forEach(Ch)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,ac||(ac=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,z0)))}function Ji(e){function t(i){return _i(i,e)}if(0<Gs.length){_i(Gs[0],e);for(var n=1;n<Gs.length;n++){var r=Gs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&_i(Sn,e),jn!==null&&_i(jn,e),Nn!==null&&_i(Nn,e),Gi.forEach(t),Xi.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)vg(n),n.blockedOn===null&&mn.shift()}var Lr=rn.ReactCurrentBatchConfig,Po=!0;function M0(e,t,n,r){var i=Y,s=Lr.transition;Lr.transition=null;try{Y=1,pu(e,t,n,r)}finally{Y=i,Lr.transition=s}}function U0(e,t,n,r){var i=Y,s=Lr.transition;Lr.transition=null;try{Y=4,pu(e,t,n,r)}finally{Y=i,Lr.transition=s}}function pu(e,t,n,r){if(Po){var i=lc(e,t,n,r);if(i===null)_l(e,t,r,Ro,n),Th(e,r);else if(L0(i,e,t,n,r))r.stopPropagation();else if(Th(e,r),t&4&&-1<D0.indexOf(e)){for(;i!==null;){var s=vs(i);if(s!==null&&pg(s),s=lc(e,t,n,r),s===null&&_l(e,t,r,Ro,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var Ro=null;function lc(e,t,n,r){if(Ro=null,e=cu(r),e=Yn(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function yg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case uu:return 1;case cg:return 4;case Co:case N0:return 16;case ug:return 536870912;default:return 16}default:return 16}}var bn=null,fu=null,ho=null;function xg(){if(ho)return ho;var e,t=fu,n=t.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return ho=i.slice(e,1<r?1-r:void 0)}function po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function Ih(){return!1}function Ze(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xs:Ih,this.isPropagationStopped=Ih,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=Ze(Zr),ms=le({},Zr,{view:0,detail:0}),F0=Ze(ms),hl,pl,bi,fa=le({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(hl=e.screenX-bi.screenX,pl=e.screenY-bi.screenY):pl=hl=0,bi=e),hl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Ph=Ze(fa),$0=le({},fa,{dataTransfer:0}),B0=Ze($0),V0=le({},ms,{relatedTarget:0}),fl=Ze(V0),H0=le({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=Ze(H0),q0=le({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K0=Ze(q0),G0=le({},Zr,{data:0}),Rh=Ze(G0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y0[e])?!!t[e]:!1}function mu(){return Q0}var Z0=le({},ms,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=Ze(Z0),tx=le({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=Ze(tx),nx=le({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),rx=Ze(nx),ix=le({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Ze(ix),ox=le({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Ze(ox),lx=[9,13,27,32],vu=Yt&&"CompositionEvent"in window,Di=null;Yt&&"documentMode"in document&&(Di=document.documentMode);var cx=Yt&&"TextEvent"in window&&!Di,wg=Yt&&(!vu||Di&&8<Di&&11>=Di),Oh=" ",Dh=!1;function _g(e,t){switch(e){case"keyup":return lx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function ux(e,t){switch(e){case"compositionend":return bg(t);case"keypress":return t.which!==32?null:(Dh=!0,Oh);case"textInput":return e=t.data,e===Oh&&Dh?null:e;default:return null}}function dx(e,t){if(br)return e==="compositionend"||!vu&&_g(e,t)?(e=xg(),ho=fu=bn=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wg&&t.locale!=="ko"?null:t.data;default:return null}}var hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hx[e.type]:t==="textarea"}function kg(e,t,n,r){eg(r),t=Ao(t,"onChange"),0<t.length&&(n=new gu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Yi=null;function px(e){Og(e,0)}function ga(e){var t=Sr(e);if(Kf(t))return e}function fx(e,t){if(e==="change")return t}var Eg=!1;if(Yt){var gl;if(Yt){var ml="oninput"in document;if(!ml){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),ml=typeof zh.oninput=="function"}gl=ml}else gl=!1;Eg=gl&&(!document.documentMode||9<document.documentMode)}function Mh(){Li&&(Li.detachEvent("onpropertychange",Sg),Yi=Li=null)}function Sg(e){if(e.propertyName==="value"&&ga(Yi)){var t=[];kg(t,Yi,e,cu(e)),ig(px,t)}}function gx(e,t,n){e==="focusin"?(Mh(),Li=t,Yi=n,Li.attachEvent("onpropertychange",Sg)):e==="focusout"&&Mh()}function mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Yi)}function vx(e,t){if(e==="click")return ga(t)}function yx(e,t){if(e==="input"||e==="change")return ga(t)}function xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:xx;function Qi(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hl.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function Uh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fh(e,t){var n=Uh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uh(n)}}function jg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ng(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wx(e){var t=Ng(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Fh(n,s);var l=Fh(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _x=Yt&&"documentMode"in document&&11>=document.documentMode,kr=null,cc=null,zi=null,uc=!1;function $h(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uc||kr==null||kr!==jo(r)||(r=kr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&Qi(zi,r)||(zi=r,r=Ao(cc,"onSelect"),0<r.length&&(t=new gu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Js(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},vl={},Tg={};Yt&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function ma(e){if(vl[e])return vl[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tg)return vl[e]=t[n];return e}var Cg=ma("animationend"),Ig=ma("animationiteration"),Pg=ma("animationstart"),Rg=ma("transitionend"),Ag=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){Ag.set(e,t),dr(t,[e])}for(var yl=0;yl<Bh.length;yl++){var xl=Bh[yl],bx=xl.toLowerCase(),kx=xl[0].toUpperCase()+xl.slice(1);Un(bx,"on"+kx)}Un(Cg,"onAnimationEnd");Un(Ig,"onAnimationIteration");Un(Pg,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Rg,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function Vh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,b0(r,t,void 0,e),e.currentTarget=null}function Og(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,p=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;Vh(i,c,p),s=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,p=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;Vh(i,c,p),s=d}}}if(To)throw e=sc,To=!1,sc=null,e}function ne(e,t){var n=t[gc];n===void 0&&(n=t[gc]=new Set);var r=e+"__bubble";n.has(r)||(Dg(t,e,2,!1),n.add(r))}function wl(e,t,n){var r=0;t&&(r|=4),Dg(n,e,r,t)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function Zi(e){if(!e[Ys]){e[Ys]=!0,Bf.forEach(function(n){n!=="selectionchange"&&(Ex.has(n)||wl(n,!1,e),wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ys]||(t[Ys]=!0,wl("selectionchange",!1,t))}}function Dg(e,t,n,r){switch(yg(t)){case 1:var i=M0;break;case 4:i=U0;break;default:i=pu}n=i.bind(null,t,n,e),i=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=Yn(c),l===null)return;if(d=l.tag,d===5||d===6){r=s=l;continue e}c=c.parentNode}}r=r.return}ig(function(){var p=s,w=cu(n),y=[];e:{var x=Ag.get(e);if(x!==void 0){var j=gu,C=e;switch(e){case"keypress":if(po(n)===0)break e;case"keydown":case"keyup":j=ex;break;case"focusin":C="focus",j=fl;break;case"focusout":C="blur",j=fl;break;case"beforeblur":case"afterblur":j=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=rx;break;case Cg:case Ig:case Pg:j=W0;break;case Rg:j=sx;break;case"scroll":j=F0;break;case"wheel":j=ax;break;case"copy":case"cut":case"paste":j=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Ah}var R=(t&4)!==0,O=!R&&e==="scroll",E=R?x!==null?x+"Capture":null:x;R=[];for(var m=p,v;m!==null;){v=m;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,E!==null&&(I=Ki(m,E),I!=null&&R.push(es(m,I,v)))),O)break;m=m.return}0<R.length&&(x=new j(x,C,null,n,w),y.push({event:x,listeners:R}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&n!==nc&&(C=n.relatedTarget||n.fromElement)&&(Yn(C)||C[Qt]))break e;if((j||x)&&(x=w.window===w?w:(x=w.ownerDocument)?x.defaultView||x.parentWindow:window,j?(C=n.relatedTarget||n.toElement,j=p,C=C?Yn(C):null,C!==null&&(O=hr(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(j=null,C=p),j!==C)){if(R=Ph,I="onMouseLeave",E="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(R=Ah,I="onPointerLeave",E="onPointerEnter",m="pointer"),O=j==null?x:Sr(j),v=C==null?x:Sr(C),x=new R(I,m+"leave",j,n,w),x.target=O,x.relatedTarget=v,I=null,Yn(w)===p&&(R=new R(E,m+"enter",C,n,w),R.target=v,R.relatedTarget=O,I=R),O=I,j&&C)t:{for(R=j,E=C,m=0,v=R;v;v=xr(v))m++;for(v=0,I=E;I;I=xr(I))v++;for(;0<m-v;)R=xr(R),m--;for(;0<v-m;)E=xr(E),v--;for(;m--;){if(R===E||E!==null&&R===E.alternate)break t;R=xr(R),E=xr(E)}R=null}else R=null;j!==null&&Hh(y,x,j,R,!1),C!==null&&O!==null&&Hh(y,O,C,R,!0)}}e:{if(x=p?Sr(p):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var L=fx;else if(Lh(x))if(Eg)L=yx;else{L=mx;var z=gx}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(L=vx);if(L&&(L=L(e,p))){kg(y,L,n,w);break e}z&&z(e,x,p),e==="focusout"&&(z=x._wrapperState)&&z.controlled&&x.type==="number"&&Yl(x,"number",x.value)}switch(z=p?Sr(p):window,e){case"focusin":(Lh(z)||z.contentEditable==="true")&&(kr=z,cc=p,zi=null);break;case"focusout":zi=cc=kr=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,$h(y,n,w);break;case"selectionchange":if(_x)break;case"keydown":case"keyup":$h(y,n,w)}var b;if(vu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else br?_g(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(wg&&n.locale!=="ko"&&(br||g!=="onCompositionStart"?g==="onCompositionEnd"&&br&&(b=xg()):(bn=w,fu="value"in bn?bn.value:bn.textContent,br=!0)),z=Ao(p,g),0<z.length&&(g=new Rh(g,e,null,n,w),y.push({event:g,listeners:z}),b?g.data=b:(b=bg(n),b!==null&&(g.data=b)))),(b=cx?ux(e,n):dx(e,n))&&(p=Ao(p,"onBeforeInput"),0<p.length&&(w=new Rh("onBeforeInput","beforeinput",null,n,w),y.push({event:w,listeners:p}),w.data=b))}Og(y,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(e,n),s!=null&&r.unshift(es(e,s,i)),s=Ki(e,t),s!=null&&r.push(es(e,s,i))),e=e.return}return r}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hh(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,p=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&p!==null&&(c=p,i?(d=Ki(n,s),d!=null&&l.unshift(es(n,d,c))):i||(d=Ki(n,s),d!=null&&l.push(es(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Sx=/\r\n?/g,jx=/\u0000|\uFFFD/g;function Wh(e){return(typeof e=="string"?e:""+e).replace(Sx,`
`).replace(jx,"")}function Qs(e,t,n){if(t=Wh(t),Wh(e)!==t&&n)throw Error(M(425))}function Oo(){}var dc=null,hc=null;function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(e){return qh.resolve(null).then(e).catch(Cx)}:fc;function Cx(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ji(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ei=Math.random().toString(36).slice(2),kt="__reactFiber$"+ei,ts="__reactProps$"+ei,Qt="__reactContainer$"+ei,gc="__reactEvents$"+ei,Ix="__reactListeners$"+ei,Px="__reactHandles$"+ei;function Yn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kh(e);e!==null;){if(n=e[kt])return n;e=Kh(e)}return t}e=n,n=e.parentNode}return null}function vs(e){return e=e[kt]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function va(e){return e[ts]||null}var mc=[],jr=-1;function Fn(e){return{current:e}}function re(e){0>jr||(e.current=mc[jr],mc[jr]=null,jr--)}function ee(e,t){jr++,mc[jr]=e.current,e.current=t}var zn={},Re=Fn(zn),We=Fn(!1),rr=zn;function Vr(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Do(){re(We),re(Re)}function Gh(e,t,n){if(Re.current!==zn)throw Error(M(168));ee(Re,t),ee(We,n)}function Lg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,g0(e)||"Unknown",i));return le({},n,r)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,rr=Re.current,ee(Re,e),ee(We,We.current),!0}function Xh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Lg(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,re(We),re(Re),ee(Re,e)):re(We),ee(We,n)}var Bt=null,ya=!1,kl=!1;function zg(e){Bt===null?Bt=[e]:Bt.push(e)}function Rx(e){ya=!0,zg(e)}function $n(){if(!kl&&Bt!==null){kl=!0;var e=0,t=Y;try{var n=Bt;for(Y=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,ya=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),lg(uu,$n),i}finally{Y=t,kl=!1}}return null}var Nr=[],Tr=0,zo=null,Mo=0,tt=[],nt=0,ir=null,Vt=1,Ht="";function Gn(e,t){Nr[Tr++]=Mo,Nr[Tr++]=zo,zo=e,Mo=t}function Mg(e,t,n){tt[nt++]=Vt,tt[nt++]=Ht,tt[nt++]=ir,ir=e;var r=Vt;e=Ht;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Vt=1<<32-ft(t)+i|n<<i|r,Ht=s+e}else Vt=1<<s|n<<i|r,Ht=e}function xu(e){e.return!==null&&(Gn(e,1),Mg(e,1,0))}function wu(e){for(;e===zo;)zo=Nr[--Tr],Nr[Tr]=null,Mo=Nr[--Tr],Nr[Tr]=null;for(;e===ir;)ir=tt[--nt],tt[nt]=null,Ht=tt[--nt],tt[nt]=null,Vt=tt[--nt],tt[nt]=null}var Je=null,Xe=null,ie=!1,dt=null;function Ug(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Xe=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:Vt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Xe=null,!0):!1;default:return!1}}function vc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yc(e){if(ie){var t=Xe;if(t){var n=t;if(!Jh(e,t)){if(vc(e))throw Error(M(418));t=Tn(n.nextSibling);var r=Je;t&&Jh(e,t)?Ug(r,n):(e.flags=e.flags&-4097|2,ie=!1,Je=e)}}else{if(vc(e))throw Error(M(418));e.flags=e.flags&-4097|2,ie=!1,Je=e}}}function Yh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function Zs(e){if(e!==Je)return!1;if(!ie)return Yh(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pc(e.type,e.memoizedProps)),t&&(t=Xe)){if(vc(e))throw Fg(),Error(M(418));for(;t;)Ug(e,t),t=Tn(t.nextSibling)}if(Yh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Je?Tn(e.stateNode.nextSibling):null;return!0}function Fg(){for(var e=Xe;e;)e=Tn(e.nextSibling)}function Hr(){Xe=Je=null,ie=!1}function _u(e){dt===null?dt=[e]:dt.push(e)}var Ax=rn.ReactCurrentBatchConfig;function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=i.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qh(e){var t=e._init;return t(e._payload)}function $g(e){function t(E,m){if(e){var v=E.deletions;v===null?(E.deletions=[m],E.flags|=16):v.push(m)}}function n(E,m){if(!e)return null;for(;m!==null;)t(E,m),m=m.sibling;return null}function r(E,m){for(E=new Map;m!==null;)m.key!==null?E.set(m.key,m):E.set(m.index,m),m=m.sibling;return E}function i(E,m){return E=Rn(E,m),E.index=0,E.sibling=null,E}function s(E,m,v){return E.index=v,e?(v=E.alternate,v!==null?(v=v.index,v<m?(E.flags|=2,m):v):(E.flags|=2,m)):(E.flags|=1048576,m)}function l(E){return e&&E.alternate===null&&(E.flags|=2),E}function c(E,m,v,I){return m===null||m.tag!==6?(m=Il(v,E.mode,I),m.return=E,m):(m=i(m,v),m.return=E,m)}function d(E,m,v,I){var L=v.type;return L===_r?w(E,m,v.props.children,I,v.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fn&&Qh(L)===m.type)?(I=i(m,v.props),I.ref=ki(E,m,v),I.return=E,I):(I=wo(v.type,v.key,v.props,null,E.mode,I),I.ref=ki(E,m,v),I.return=E,I)}function p(E,m,v,I){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Pl(v,E.mode,I),m.return=E,m):(m=i(m,v.children||[]),m.return=E,m)}function w(E,m,v,I,L){return m===null||m.tag!==7?(m=nr(v,E.mode,I,L),m.return=E,m):(m=i(m,v),m.return=E,m)}function y(E,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Il(""+m,E.mode,v),m.return=E,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vs:return v=wo(m.type,m.key,m.props,null,E.mode,v),v.ref=ki(E,null,m),v.return=E,v;case wr:return m=Pl(m,E.mode,v),m.return=E,m;case fn:var I=m._init;return y(E,I(m._payload),v)}if(Ti(m)||yi(m))return m=nr(m,E.mode,v,null),m.return=E,m;eo(E,m)}return null}function x(E,m,v,I){var L=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:c(E,m,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vs:return v.key===L?d(E,m,v,I):null;case wr:return v.key===L?p(E,m,v,I):null;case fn:return L=v._init,x(E,m,L(v._payload),I)}if(Ti(v)||yi(v))return L!==null?null:w(E,m,v,I,null);eo(E,v)}return null}function j(E,m,v,I,L){if(typeof I=="string"&&I!==""||typeof I=="number")return E=E.get(v)||null,c(m,E,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Vs:return E=E.get(I.key===null?v:I.key)||null,d(m,E,I,L);case wr:return E=E.get(I.key===null?v:I.key)||null,p(m,E,I,L);case fn:var z=I._init;return j(E,m,v,z(I._payload),L)}if(Ti(I)||yi(I))return E=E.get(v)||null,w(m,E,I,L,null);eo(m,I)}return null}function C(E,m,v,I){for(var L=null,z=null,b=m,g=m=0,_=null;b!==null&&g<v.length;g++){b.index>g?(_=b,b=null):_=b.sibling;var S=x(E,b,v[g],I);if(S===null){b===null&&(b=_);break}e&&b&&S.alternate===null&&t(E,b),m=s(S,m,g),z===null?L=S:z.sibling=S,z=S,b=_}if(g===v.length)return n(E,b),ie&&Gn(E,g),L;if(b===null){for(;g<v.length;g++)b=y(E,v[g],I),b!==null&&(m=s(b,m,g),z===null?L=b:z.sibling=b,z=b);return ie&&Gn(E,g),L}for(b=r(E,b);g<v.length;g++)_=j(b,E,g,v[g],I),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?g:_.key),m=s(_,m,g),z===null?L=_:z.sibling=_,z=_);return e&&b.forEach(function(T){return t(E,T)}),ie&&Gn(E,g),L}function R(E,m,v,I){var L=yi(v);if(typeof L!="function")throw Error(M(150));if(v=L.call(v),v==null)throw Error(M(151));for(var z=L=null,b=m,g=m=0,_=null,S=v.next();b!==null&&!S.done;g++,S=v.next()){b.index>g?(_=b,b=null):_=b.sibling;var T=x(E,b,S.value,I);if(T===null){b===null&&(b=_);break}e&&b&&T.alternate===null&&t(E,b),m=s(T,m,g),z===null?L=T:z.sibling=T,z=T,b=_}if(S.done)return n(E,b),ie&&Gn(E,g),L;if(b===null){for(;!S.done;g++,S=v.next())S=y(E,S.value,I),S!==null&&(m=s(S,m,g),z===null?L=S:z.sibling=S,z=S);return ie&&Gn(E,g),L}for(b=r(E,b);!S.done;g++,S=v.next())S=j(b,E,g,S.value,I),S!==null&&(e&&S.alternate!==null&&b.delete(S.key===null?g:S.key),m=s(S,m,g),z===null?L=S:z.sibling=S,z=S);return e&&b.forEach(function(N){return t(E,N)}),ie&&Gn(E,g),L}function O(E,m,v,I){if(typeof v=="object"&&v!==null&&v.type===_r&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vs:e:{for(var L=v.key,z=m;z!==null;){if(z.key===L){if(L=v.type,L===_r){if(z.tag===7){n(E,z.sibling),m=i(z,v.props.children),m.return=E,E=m;break e}}else if(z.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===fn&&Qh(L)===z.type){n(E,z.sibling),m=i(z,v.props),m.ref=ki(E,z,v),m.return=E,E=m;break e}n(E,z);break}else t(E,z);z=z.sibling}v.type===_r?(m=nr(v.props.children,E.mode,I,v.key),m.return=E,E=m):(I=wo(v.type,v.key,v.props,null,E.mode,I),I.ref=ki(E,m,v),I.return=E,E=I)}return l(E);case wr:e:{for(z=v.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(E,m.sibling),m=i(m,v.children||[]),m.return=E,E=m;break e}else{n(E,m);break}else t(E,m);m=m.sibling}m=Pl(v,E.mode,I),m.return=E,E=m}return l(E);case fn:return z=v._init,O(E,m,z(v._payload),I)}if(Ti(v))return C(E,m,v,I);if(yi(v))return R(E,m,v,I);eo(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(E,m.sibling),m=i(m,v),m.return=E,E=m):(n(E,m),m=Il(v,E.mode,I),m.return=E,E=m),l(E)):n(E,m)}return O}var Wr=$g(!0),Bg=$g(!1),Uo=Fn(null),Fo=null,Cr=null,bu=null;function ku(){bu=Cr=Fo=null}function Eu(e){var t=Uo.current;re(Uo),e._currentValue=t}function xc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zr(e,t){Fo=e,bu=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(Fo===null)throw Error(M(308));Cr=e,Fo.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Qn=null;function Su(e){Qn===null?Qn=[e]:Qn.push(e)}function Vg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Su(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zt(e,r)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Su(r)):(t.next=i.next,i.next=t),r.interleaved=t,Zt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}function Zh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;gn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,p=d.next;d.next=null,l===null?s=p:l.next=p,l=d;var w=e.alternate;w!==null&&(w=w.updateQueue,c=w.lastBaseUpdate,c!==l&&(c===null?w.firstBaseUpdate=p:c.next=p,w.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;l=0,w=p=d=null,c=s;do{var x=c.lane,j=c.eventTime;if((r&x)===x){w!==null&&(w=w.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var C=e,R=c;switch(x=t,j=n,R.tag){case 1:if(C=R.payload,typeof C=="function"){y=C.call(j,y,x);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=R.payload,x=typeof C=="function"?C.call(j,y,x):C,x==null)break e;y=le({},y,x);break e;case 2:gn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[c]:x.push(c))}else j={eventTime:j,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},w===null?(p=w=j,d=y):w=w.next=j,l|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;x=c,c=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(w===null&&(d=y),i.baseState=d,i.firstBaseUpdate=p,i.lastBaseUpdate=w,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);or|=l,e.lanes=l,e.memoizedState=y}}function ep(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ys={},jt=Fn(ys),ns=Fn(ys),rs=Fn(ys);function Zn(e){if(e===ys)throw Error(M(174));return e}function Nu(e,t){switch(ee(rs,t),ee(ns,e),ee(jt,ys),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zl(t,e)}re(jt),ee(jt,t)}function qr(){re(jt),re(ns),re(rs)}function Wg(e){Zn(rs.current);var t=Zn(jt.current),n=Zl(t,e.type);t!==n&&(ee(ns,e),ee(jt,n))}function Tu(e){ns.current===e&&(re(jt),re(ns))}var oe=Fn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function Cu(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var go=rn.ReactCurrentDispatcher,Sl=rn.ReactCurrentBatchConfig,sr=0,ae=null,me=null,xe=null,Vo=!1,Mi=!1,is=0,Ox=0;function Te(){throw Error(M(321))}function Iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,i,s){if(sr=s,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?Mx:Ux,e=n(r,i),Mi){s=0;do{if(Mi=!1,is=0,25<=s)throw Error(M(301));s+=1,xe=me=null,t.updateQueue=null,go.current=Fx,e=n(r,i)}while(Mi)}if(go.current=Ho,t=me!==null&&me.next!==null,sr=0,xe=me=ae=null,Vo=!1,t)throw Error(M(300));return e}function Ru(){var e=is!==0;return is=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ae.memoizedState=xe=e:xe=xe.next=e,xe}function ot(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=xe===null?ae.memoizedState:xe.next;if(t!==null)xe=t,me=e;else{if(e===null)throw Error(M(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},xe===null?ae.memoizedState=xe=e:xe=xe.next=e}return xe}function ss(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=ot(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=l=null,d=null,p=s;do{var w=p.lane;if((sr&w)===w)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:w,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(c=d=y,l=r):d=d.next=y,ae.lanes|=w,or|=w}p=p.next}while(p!==null&&p!==s);d===null?l=r:d.next=c,mt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,or|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=ot(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);mt(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function qg(){}function Kg(e,t){var n=ae,r=ot(),i=t(),s=!mt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,Au(Jg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,os(9,Xg.bind(null,n,r,i,t),void 0,null),we===null)throw Error(M(349));sr&30||Gg(n,t,i)}return i}function Gg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xg(e,t,n,r){t.value=n,t.getSnapshot=r,Yg(t)&&Qg(e)}function Jg(e,t,n){return n(function(){Yg(t)&&Qg(e)})}function Yg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Qg(e){var t=Zt(e,1);t!==null&&gt(t,e,1,-1)}function tp(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t.queue=e,e=e.dispatch=zx.bind(null,ae,e),[t.memoizedState,e]}function os(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zg(){return ot().memoizedState}function mo(e,t,n,r){var i=bt();ae.flags|=e,i.memoizedState=os(1|t,n,void 0,r===void 0?null:r)}function xa(e,t,n,r){var i=ot();r=r===void 0?null:r;var s=void 0;if(me!==null){var l=me.memoizedState;if(s=l.destroy,r!==null&&Iu(r,l.deps)){i.memoizedState=os(t,n,s,r);return}}ae.flags|=e,i.memoizedState=os(1|t,n,s,r)}function np(e,t){return mo(8390656,8,e,t)}function Au(e,t){return xa(2048,8,e,t)}function em(e,t){return xa(4,2,e,t)}function tm(e,t){return xa(4,4,e,t)}function nm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rm(e,t,n){return n=n!=null?n.concat([e]):null,xa(4,4,nm.bind(null,t,e),n)}function Ou(){}function im(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sm(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function om(e,t,n){return sr&21?(mt(n,t)||(n=dg(),ae.lanes|=n,or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function Dx(e,t){var n=Y;Y=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{Y=n,Sl.transition=r}}function am(){return ot().memoizedState}function Lx(e,t,n){var r=Pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lm(e))cm(t,n);else if(n=Vg(e,t,n,r),n!==null){var i=ze();gt(n,e,r,i),um(n,t,r)}}function zx(e,t,n){var r=Pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lm(e))cm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(i.hasEagerState=!0,i.eagerState=c,mt(c,l)){var d=t.interleaved;d===null?(i.next=i,Su(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Vg(e,t,i,r),n!==null&&(i=ze(),gt(n,e,r,i),um(n,t,r))}}function lm(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function cm(e,t){Mi=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function um(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}var Ho={readContext:st,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Mx={readContext:st,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:np,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,mo(4194308,4,nm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return mo(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lx.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:tp,useDebugValue:Ou,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=tp(!1),t=e[0];return e=Dx.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,i=bt();if(ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),we===null)throw Error(M(349));sr&30||Gg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,np(Jg.bind(null,r,s,e),[e]),r.flags|=2048,os(9,Xg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bt(),t=we.identifierPrefix;if(ie){var n=Ht,r=Vt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=is++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ox++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ux={readContext:st,useCallback:im,useContext:st,useEffect:Au,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:sm,useReducer:jl,useRef:Zg,useState:function(){return jl(ss)},useDebugValue:Ou,useDeferredValue:function(e){var t=ot();return om(t,me.memoizedState,e)},useTransition:function(){var e=jl(ss)[0],t=ot().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Kg,useId:am,unstable_isNewReconciler:!1},Fx={readContext:st,useCallback:im,useContext:st,useEffect:Au,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:sm,useReducer:Nl,useRef:Zg,useState:function(){return Nl(ss)},useDebugValue:Ou,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:om(t,me.memoizedState,e)},useTransition:function(){var e=Nl(ss)[0],t=ot().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Kg,useId:am,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Pn(e),s=Gt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Cn(e,s,i),t!==null&&(gt(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=Pn(e),s=Gt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Cn(e,s,i),t!==null&&(gt(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=Pn(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Cn(e,i,r),t!==null&&(gt(t,e,r,n),fo(t,e,r))}};function rp(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,s):!0}function dm(e,t,n){var r=!1,i=zn,s=t.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=qe(t)?rr:Re.current,r=t.contextTypes,s=(r=r!=null)?Vr(e,i):zn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ip(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function _c(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ju(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=qe(t)?rr:Re.current,i.context=Vr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wa.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var n="",r=t;do n+=f0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function hm(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,Rc=r),bc(e,t)},n}function pm(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bc(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function sp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $x;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=t1.bind(null,e,t,n),t.then(e,e))}function op(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ap(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Cn(n,t,1))),n.lanes|=1),e)}var Bx=rn.ReactCurrentOwner,He=!1;function De(e,t,n,r){t.child=e===null?Bg(t,null,n,r):Wr(t,e.child,n,r)}function lp(e,t,n,r,i){n=n.render;var s=t.ref;return zr(t,i),r=Pu(e,t,n,r,s,i),n=Ru(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(ie&&n&&xu(t),t.flags|=1,De(e,t,r,i),t.child)}function cp(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Bu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,fm(e,t,s,r,i)):(e=wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(l,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=Rn(s,r),e.ref=t.ref,e.return=t,t.child=e}function fm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Qi(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,en(e,t,i)}return kc(e,t,n,r,i)}function gm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Pr,Ge),Ge|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Pr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(Pr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ee(Pr,Ge),Ge|=r;return De(e,t,i,n),t.child}function mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kc(e,t,n,r,i){var s=qe(n)?rr:Re.current;return s=Vr(t,s),zr(t,i),n=Pu(e,t,n,r,s,i),r=Ru(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(ie&&r&&xu(t),t.flags|=1,De(e,t,n,i),t.child)}function up(e,t,n,r,i){if(qe(n)){var s=!0;Lo(t)}else s=!1;if(zr(t,i),t.stateNode===null)vo(e,t),dm(t,n,r),_c(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=st(p):(p=qe(n)?rr:Re.current,p=Vr(t,p));var w=n.getDerivedStateFromProps,y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==p)&&ip(t,l,r,p),gn=!1;var x=t.memoizedState;l.state=x,$o(t,r,l,i),d=t.memoizedState,c!==r||x!==d||We.current||gn?(typeof w=="function"&&(wc(t,n,w,r),d=t.memoizedState),(c=gn||rp(t,n,c,r,x,d,p))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=p,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hg(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:ct(t.type,c),l.props=p,y=t.pendingProps,x=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=st(d):(d=qe(n)?rr:Re.current,d=Vr(t,d));var j=n.getDerivedStateFromProps;(w=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==y||x!==d)&&ip(t,l,r,d),gn=!1,x=t.memoizedState,l.state=x,$o(t,r,l,i);var C=t.memoizedState;c!==y||x!==C||We.current||gn?(typeof j=="function"&&(wc(t,n,j,r),C=t.memoizedState),(p=gn||rp(t,n,p,r,x,C,d)||!1)?(w||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),l.props=r,l.state=C,l.context=d,r=p):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ec(e,t,n,r,s,i)}function Ec(e,t,n,r,i,s){mm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Xh(t,n,!1),en(e,t,s);r=t.stateNode,Bx.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wr(t,e.child,null,s),t.child=Wr(t,null,c,s)):De(e,t,c,s),t.memoizedState=r.state,i&&Xh(t,n,!0),t.child}function vm(e){var t=e.stateNode;t.pendingContext?Gh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gh(e,t.context,!1),Nu(e,t.containerInfo)}function dp(e,t,n,r,i){return Hr(),_u(i),t.flags|=256,De(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function jc(e){return{baseLanes:e,cachePool:null,transitions:null}}function ym(e,t,n){var r=t.pendingProps,i=oe.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return yc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ka(l,r,0,null),e=nr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=jc(n),t.memoizedState=Sc,e):Du(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Vx(e,t,l,r,c,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Rn(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Rn(c,s):(s=nr(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?jc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Sc,r}return s=e.child,e=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Du(e,t){return t=ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,n,r){return r!==null&&_u(r),Wr(t,e.child,null,n),e=Du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vx(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error(M(422))),to(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ka({mode:"visible",children:r.children},i,0,null),s=nr(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Wr(t,e.child,null,l),t.child.memoizedState=jc(l),t.memoizedState=Sc,s);if(!(t.mode&1))return to(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(M(419)),r=Tl(s,r,void 0),to(e,t,l,r)}if(c=(l&e.childLanes)!==0,He||c){if(r=we,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zt(e,i),gt(r,e,i,-1))}return $u(),r=Tl(Error(M(421))),to(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=n1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Xe=Tn(i.nextSibling),Je=t,ie=!0,dt=null,e!==null&&(tt[nt++]=Vt,tt[nt++]=Ht,tt[nt++]=ir,Vt=e.id,Ht=e.overflow,ir=t),t=Du(t,r.children),t.flags|=4096,t)}function hp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xc(e.return,t,n)}function Cl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(De(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hp(e,n,t);else if(e.tag===19)hp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cl(t,!0,n,null,s);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hx(e,t,n){switch(t.tag){case 3:vm(t),Hr();break;case 5:Wg(t);break;case 1:qe(t.type)&&Lo(t);break;case 4:Nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Uo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?ym(e,t,n):(ee(oe,oe.current&1),e=en(e,t,n),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,gm(e,t,n)}return en(e,t,n)}var wm,Nc,_m,bm;wm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nc=function(){};_m=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zn(jt.current);var s=null;switch(n){case"input":i=Xl(e,i),r=Xl(e,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Ql(e,i),r=Ql(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}ec(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var c=i[p];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Wi.hasOwnProperty(p)?s||(s=[]):(s=s||[]).push(p,null));for(p in r){var d=r[p];if(c=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&d!==c&&(d!=null||c!=null))if(p==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(s||(s=[]),s.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Wi.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&ne("scroll",e),s||c===d||(s=[])):(s=s||[]).push(p,d))}n&&(s=s||[]).push("style",n);var p=s;(t.updateQueue=p)&&(t.flags|=4)}};bm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ei(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wx(e,t,n){var r=t.pendingProps;switch(wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return qe(t.type)&&Do(),Ce(t),null;case 3:return r=t.stateNode,qr(),re(We),re(Re),Cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Dc(dt),dt=null))),Nc(e,t),Ce(t),null;case 5:Tu(t);var i=Zn(rs.current);if(n=t.type,e!==null&&t.stateNode!=null)_m(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ce(t),null}if(e=Zn(jt.current),Zs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[kt]=t,r[ts]=s,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)ne(Ii[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":_h(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":kh(r,s),ne("invalid",r)}ec(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,c,e),i=["children",""+c]):Wi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":Hs(r),bh(r,s,!0);break;case"textarea":Hs(r),Eh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Oo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[ts]=r,wm(e,t,!1,!1),t.stateNode=e;e:{switch(l=tc(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)ne(Ii[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":_h(e,r),i=Xl(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":kh(e,r),i=Ql(e,r),ne("invalid",e);break;default:i=r}ec(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?Zf(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Yf(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&qi(e,d):typeof d=="number"&&qi(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&ne("scroll",e):d!=null&&su(e,s,d,l))}switch(n){case"input":Hs(e),bh(e,r,!1);break;case"textarea":Hs(e),Eh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ln(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ar(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)bm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Zn(rs.current),Zn(jt.current),Zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(s=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ce(t),null;case 13:if(re(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Xe!==null&&t.mode&1&&!(t.flags&128))Fg(),Hr(),t.flags|=98560,s=!1;else if(s=Zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[kt]=t}else Hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else dt!==null&&(Dc(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):$u())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return qr(),Nc(e,t),e===null&&Zi(t.stateNode.containerInfo),Ce(t),null;case 10:return Eu(t.type._context),Ce(t),null;case 17:return qe(t.type)&&Do(),Ce(t),null;case 19:if(re(oe),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Ei(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Bo(e),l!==null){for(t.flags|=128,Ei(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&he()>Gr&&(t.flags|=128,r=!0,Ei(s,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ie)return Ce(t),null}else 2*he()-s.renderingStartTime>Gr&&n!==1073741824&&(t.flags|=128,r=!0,Ei(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=he(),t.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function qx(e,t){switch(wu(t),t.tag){case 1:return qe(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),re(We),re(Re),Cu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(re(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(oe),null;case 4:return qr(),null;case 10:return Eu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var no=!1,Ie=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function Tc(e,t,n){try{n()}catch(r){ce(e,t,r)}}var pp=!1;function Gx(e,t){if(dc=Po,e=Ng(),yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,p=0,w=0,y=e,x=null;t:for(;;){for(var j;y!==n||i!==0&&y.nodeType!==3||(c=l+i),y!==s||r!==0&&y.nodeType!==3||(d=l+r),y.nodeType===3&&(l+=y.nodeValue.length),(j=y.firstChild)!==null;)x=y,y=j;for(;;){if(y===e)break t;if(x===n&&++p===i&&(c=l),x===s&&++w===r&&(d=l),(j=y.nextSibling)!==null)break;y=x,x=y.parentNode}y=j}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:e,selectionRange:n},Po=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var R=C.memoizedProps,O=C.memoizedState,E=t.stateNode,m=E.getSnapshotBeforeUpdate(t.elementType===t.type?R:ct(t.type,R),O);E.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(I){ce(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return C=pp,pp=!1,C}function Ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tc(t,n,s)}i=i.next}while(i!==r)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function km(e){var t=e.alternate;t!==null&&(e.alternate=null,km(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[ts],delete t[gc],delete t[Ix],delete t[Px])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Em(e){return e.tag===5||e.tag===3||e.tag===4}function fp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}function Pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pc(e,t,n),e=e.sibling;e!==null;)Pc(e,t,n),e=e.sibling}var be=null,ut=!1;function hn(e,t,n){for(n=n.child;n!==null;)Sm(e,t,n),n=n.sibling}function Sm(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(pa,n)}catch{}switch(n.tag){case 5:Ie||Ir(n,t);case 6:var r=be,i=ut;be=null,hn(e,t,n),be=r,ut=i,be!==null&&(ut?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ut?(e=be,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),Ji(e)):bl(be,n.stateNode));break;case 4:r=be,i=ut,be=n.stateNode.containerInfo,ut=!0,hn(e,t,n),be=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Tc(n,t,l),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Ie&&(Ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ce(n,t,c)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,hn(e,t,n),Ie=r):hn(e,t,n);break;default:hn(e,t,n)}}function gp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kx),t.forEach(function(r){var i=r1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:be=c.stateNode,ut=!1;break e;case 3:be=c.stateNode.containerInfo,ut=!0;break e;case 4:be=c.stateNode.containerInfo,ut=!0;break e}c=c.return}if(be===null)throw Error(M(160));Sm(s,l,i),be=null,ut=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(p){ce(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}function jm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),wt(e),r&4){try{Ui(3,e,e.return),_a(3,e)}catch(R){ce(e,e.return,R)}try{Ui(5,e,e.return)}catch(R){ce(e,e.return,R)}}break;case 1:lt(t,e),wt(e),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(lt(t,e),wt(e),r&512&&n!==null&&Ir(n,n.return),e.flags&32){var i=e.stateNode;try{qi(i,"")}catch(R){ce(e,e.return,R)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Gf(i,s),tc(c,l);var p=tc(c,s);for(l=0;l<d.length;l+=2){var w=d[l],y=d[l+1];w==="style"?Zf(i,y):w==="dangerouslySetInnerHTML"?Yf(i,y):w==="children"?qi(i,y):su(i,w,y,p)}switch(c){case"input":Jl(i,s);break;case"textarea":Xf(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Ar(i,!!s.multiple,j,!1):x!==!!s.multiple&&(s.defaultValue!=null?Ar(i,!!s.multiple,s.defaultValue,!0):Ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(R){ce(e,e.return,R)}}break;case 6:if(lt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(R){ce(e,e.return,R)}}break;case 3:if(lt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(R){ce(e,e.return,R)}break;case 4:lt(t,e),wt(e);break;case 13:lt(t,e),wt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mu=he())),r&4&&gp(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(p=Ie)||w,lt(t,e),Ie=p):lt(t,e),wt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!w&&e.mode&1)for($=e,w=e.child;w!==null;){for(y=$=w;$!==null;){switch(x=$,j=x.child,x.tag){case 0:case 11:case 14:case 15:Ui(4,x,x.return);break;case 1:Ir(x,x.return);var C=x.stateNode;if(typeof C.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(R){ce(r,n,R)}}break;case 5:Ir(x,x.return);break;case 22:if(x.memoizedState!==null){vp(y);continue}}j!==null?(j.return=x,$=j):vp(y)}w=w.sibling}e:for(w=null,y=e;;){if(y.tag===5){if(w===null){w=y;try{i=y.stateNode,p?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=y.stateNode,d=y.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Qf("display",l))}catch(R){ce(e,e.return,R)}}}else if(y.tag===6){if(w===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(R){ce(e,e.return,R)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;w===y&&(w=null),y=y.return}w===y&&(w=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:lt(t,e),wt(e),r&4&&gp(e);break;case 21:break;default:lt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Em(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var s=fp(e);Pc(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=fp(e);Ic(e,c,l);break;default:throw Error(M(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xx(e,t,n){$=e,Nm(e)}function Nm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||no;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Ie;c=no;var p=Ie;if(no=l,(Ie=d)&&!p)for($=i;$!==null;)l=$,d=l.child,l.tag===22&&l.memoizedState!==null?yp(i):d!==null?(d.return=l,$=d):yp(i);for(;s!==null;)$=s,Nm(s),s=s.sibling;$=i,no=c,Ie=p}mp(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):mp(e)}}function mp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||_a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ep(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ep(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var w=p.memoizedState;if(w!==null){var y=w.dehydrated;y!==null&&Ji(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ie||t.flags&512&&Cc(t)}catch(x){ce(t,t.return,x)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function vp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function yp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_a(4,t)}catch(d){ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ce(t,i,d)}}var s=t.return;try{Cc(t)}catch(d){ce(t,s,d)}break;case 5:var l=t.return;try{Cc(t)}catch(d){ce(t,l,d)}}}catch(d){ce(t,t.return,d)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var Jx=Math.ceil,Wo=rn.ReactCurrentDispatcher,Lu=rn.ReactCurrentOwner,it=rn.ReactCurrentBatchConfig,G=0,we=null,fe=null,ke=0,Ge=0,Pr=Fn(0),ve=0,as=null,or=0,ba=0,zu=0,Fi=null,$e=null,Mu=0,Gr=1/0,$t=null,qo=!1,Rc=null,In=null,ro=!1,kn=null,Ko=0,$i=0,Ac=null,yo=-1,xo=0;function ze(){return G&6?he():yo!==-1?yo:yo=he()}function Pn(e){return e.mode&1?G&2&&ke!==0?ke&-ke:Ax.transition!==null?(xo===0&&(xo=dg()),xo):(e=Y,e!==0||(e=window.event,e=e===void 0?16:yg(e.type)),e):1}function gt(e,t,n,r){if(50<$i)throw $i=0,Ac=null,Error(M(185));gs(e,n,r),(!(G&2)||e!==we)&&(e===we&&(!(G&2)&&(ba|=n),ve===4&&vn(e,ke)),Ke(e,r),n===1&&G===0&&!(t.mode&1)&&(Gr=he()+500,ya&&$n()))}function Ke(e,t){var n=e.callbackNode;A0(e,t);var r=Io(e,e===we?ke:0);if(r===0)n!==null&&Nh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nh(n),t===1)e.tag===0?Rx(xp.bind(null,e)):zg(xp.bind(null,e)),Tx(function(){!(G&6)&&$n()}),n=null;else{switch(hg(r)){case 1:n=uu;break;case 4:n=cg;break;case 16:n=Co;break;case 536870912:n=ug;break;default:n=Co}n=Dm(n,Tm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tm(e,t){if(yo=-1,xo=0,G&6)throw Error(M(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Io(e,e===we?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var i=G;G|=2;var s=Im();(we!==e||ke!==t)&&($t=null,Gr=he()+500,tr(e,t));do try{Zx();break}catch(c){Cm(e,c)}while(!0);ku(),Wo.current=s,G=i,fe!==null?t=0:(we=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=oc(e),i!==0&&(r=i,t=Oc(e,i))),t===1)throw n=as,tr(e,0),vn(e,r),Ke(e,he()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Yx(i)&&(t=Go(e,r),t===2&&(s=oc(e),s!==0&&(r=s,t=Oc(e,s))),t===1))throw n=as,tr(e,0),vn(e,r),Ke(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Xn(e,$e,$t);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Mu+500-he(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fc(Xn.bind(null,e,$e,$t),t);break}Xn(e,$e,$t);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ft(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jx(r/1960))-r,10<r){e.timeoutHandle=fc(Xn.bind(null,e,$e,$t),r);break}Xn(e,$e,$t);break;case 5:Xn(e,$e,$t);break;default:throw Error(M(329))}}}return Ke(e,he()),e.callbackNode===n?Tm.bind(null,e):null}function Oc(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=Go(e,t),e!==2&&(t=$e,$e=n,t!==null&&Dc(t)),e}function Dc(e){$e===null?$e=e:$e.push.apply($e,e)}function Yx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~zu,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function xp(e){if(G&6)throw Error(M(327));Mr();var t=Io(e,0);if(!(t&1))return Ke(e,he()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=oc(e);r!==0&&(t=r,n=Oc(e,r))}if(n===1)throw n=as,tr(e,0),vn(e,t),Ke(e,he()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xn(e,$e,$t),Ke(e,he()),null}function Uu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Gr=he()+500,ya&&$n())}}function ar(e){kn!==null&&kn.tag===0&&!(G&6)&&Mr();var t=G;G|=1;var n=it.transition,r=Y;try{if(it.transition=null,Y=1,e)return e()}finally{Y=r,it.transition=n,G=t,!(G&6)&&$n()}}function Fu(){Ge=Pr.current,re(Pr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nx(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:qr(),re(We),re(Re),Cu();break;case 5:Tu(r);break;case 4:qr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Eu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(we=e,fe=e=Rn(e.current,null),ke=Ge=t,ve=0,as=null,zu=ba=or=0,$e=Fi=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Qn=null}return e}function Cm(e,t){do{var n=fe;try{if(ku(),go.current=Ho,Vo){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vo=!1}if(sr=0,xe=me=ae=null,Mi=!1,is=0,Lu.current=null,n===null||n.return===null){ve=1,as=t,fe=null;break}e:{var s=e,l=n.return,c=n,d=t;if(t=ke,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,w=c,y=w.tag;if(!(w.mode&1)&&(y===0||y===11||y===15)){var x=w.alternate;x?(w.updateQueue=x.updateQueue,w.memoizedState=x.memoizedState,w.lanes=x.lanes):(w.updateQueue=null,w.memoizedState=null)}var j=op(l);if(j!==null){j.flags&=-257,ap(j,l,c,s,t),j.mode&1&&sp(s,p,t),t=j,d=p;var C=t.updateQueue;if(C===null){var R=new Set;R.add(d),t.updateQueue=R}else C.add(d);break e}else{if(!(t&1)){sp(s,p,t),$u();break e}d=Error(M(426))}}else if(ie&&c.mode&1){var O=op(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),ap(O,l,c,s,t),_u(Kr(d,c));break e}}s=d=Kr(d,c),ve!==4&&(ve=2),Fi===null?Fi=[s]:Fi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var E=hm(s,d,t);Zh(s,E);break e;case 1:c=d;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(In===null||!In.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var I=pm(s,c,t);Zh(s,I);break e}}s=s.return}while(s!==null)}Rm(n)}catch(L){t=L,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Im(){var e=Wo.current;return Wo.current=Ho,e===null?Ho:e}function $u(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||!(or&268435455)&&!(ba&268435455)||vn(we,ke)}function Go(e,t){var n=G;G|=2;var r=Im();(we!==e||ke!==t)&&($t=null,tr(e,t));do try{Qx();break}catch(i){Cm(e,i)}while(!0);if(ku(),G=n,Wo.current=r,fe!==null)throw Error(M(261));return we=null,ke=0,ve}function Qx(){for(;fe!==null;)Pm(fe)}function Zx(){for(;fe!==null&&!E0();)Pm(fe)}function Pm(e){var t=Om(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Rm(e):fe=t,Lu.current=null}function Rm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qx(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,fe=null;return}}else if(n=Wx(n,t,Ge),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ve===0&&(ve=5)}function Xn(e,t,n){var r=Y,i=it.transition;try{it.transition=null,Y=1,e1(e,t,n,r)}finally{it.transition=i,Y=r}return null}function e1(e,t,n,r){do Mr();while(kn!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(O0(e,s),e===we&&(fe=we=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Dm(Co,function(){return Mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var l=Y;Y=1;var c=G;G|=4,Lu.current=null,Gx(e,n),jm(n,e),wx(hc),Po=!!dc,hc=dc=null,e.current=n,Xx(n),S0(),G=c,Y=l,it.transition=s}else e.current=n;if(ro&&(ro=!1,kn=e,Ko=i),s=e.pendingLanes,s===0&&(In=null),T0(n.stateNode),Ke(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qo)throw qo=!1,e=Rc,Rc=null,e;return Ko&1&&e.tag!==0&&Mr(),s=e.pendingLanes,s&1?e===Ac?$i++:($i=0,Ac=e):$i=0,$n(),null}function Mr(){if(kn!==null){var e=hg(Ko),t=it.transition,n=Y;try{if(it.transition=null,Y=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,Ko=0,G&6)throw Error(M(331));var i=G;for(G|=4,$=e.current;$!==null;){var s=$,l=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var p=c[d];for($=p;$!==null;){var w=$;switch(w.tag){case 0:case 11:case 15:Ui(8,w,s)}var y=w.child;if(y!==null)y.return=w,$=y;else for(;$!==null;){w=$;var x=w.sibling,j=w.return;if(km(w),w===p){$=null;break}if(x!==null){x.return=j,$=x;break}$=j}}}var C=s.alternate;if(C!==null){var R=C.child;if(R!==null){C.child=null;do{var O=R.sibling;R.sibling=null,R=O}while(R!==null)}}$=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,$=l;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,$=E;break e}$=s.return}}var m=e.current;for($=m;$!==null;){l=$;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,$=v;else e:for(l=m;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_a(9,c)}}catch(L){ce(c,c.return,L)}if(c===l){$=null;break e}var I=c.sibling;if(I!==null){I.return=c.return,$=I;break e}$=c.return}}if(G=i,$n(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(pa,e)}catch{}r=!0}return r}finally{Y=n,it.transition=t}}return!1}function wp(e,t,n){t=Kr(n,t),t=hm(e,t,1),e=Cn(e,t,1),t=ze(),e!==null&&(gs(e,1,t),Ke(e,t))}function ce(e,t,n){if(e.tag===3)wp(e,e,n);else for(;t!==null;){if(t.tag===3){wp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=Kr(n,e),e=pm(t,e,1),t=Cn(t,e,1),e=ze(),t!==null&&(gs(t,1,e),Ke(t,e));break}}t=t.return}}function t1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>he()-Mu?tr(e,0):zu|=n),Ke(e,t)}function Am(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=ze();e=Zt(e,t),e!==null&&(gs(e,t,n),Ke(e,n))}function n1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Am(e,n)}function r1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Am(e,n)}var Om;Om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Hx(e,t,n);He=!!(e.flags&131072)}else He=!1,ie&&t.flags&1048576&&Mg(t,Mo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vo(e,t),e=t.pendingProps;var i=Vr(t,Re.current);zr(t,n),i=Pu(null,t,r,e,i,n);var s=Ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(s=!0,Lo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ju(t),i.updater=wa,t.stateNode=i,i._reactInternals=t,_c(t,r,e,n),t=Ec(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&xu(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=s1(r),e=ct(r,e),i){case 0:t=kc(null,t,r,e,n);break e;case 1:t=up(null,t,r,e,n);break e;case 11:t=lp(null,t,r,e,n);break e;case 14:t=cp(null,t,r,ct(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),kc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),up(e,t,r,i,n);case 3:e:{if(vm(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Hg(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Kr(Error(M(423)),t),t=dp(e,t,r,n,i);break e}else if(r!==i){i=Kr(Error(M(424)),t),t=dp(e,t,r,n,i);break e}else for(Xe=Tn(t.stateNode.containerInfo.firstChild),Je=t,ie=!0,dt=null,n=Bg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){t=en(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return Wg(t),e===null&&yc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,pc(r,i)?l=null:s!==null&&pc(r,s)&&(t.flags|=32),mm(e,t),De(e,t,l,n),t.child;case 6:return e===null&&yc(t),null;case 13:return ym(e,t,n);case 4:return Nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),lp(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,ee(Uo,r._currentValue),r._currentValue=l,s!==null)if(mt(s.value,l)){if(s.children===i.children&&!We.current){t=en(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=Gt(-1,n&-n),d.tag=2;var p=s.updateQueue;if(p!==null){p=p.shared;var w=p.pending;w===null?d.next=d:(d.next=w.next,w.next=d),p.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),xc(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),xc(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,zr(t,n),i=st(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),cp(e,t,r,i,n);case 15:return fm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),vo(e,t),t.tag=1,qe(r)?(e=!0,Lo(t)):e=!1,zr(t,n),dm(t,r,i),_c(t,r,i,n),Ec(null,t,r,!0,e,n);case 19:return xm(e,t,n);case 22:return gm(e,t,n)}throw Error(M(156,t.tag))};function Dm(e,t){return lg(e,t)}function i1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new i1(e,t,n,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s1(e){if(typeof e=="function")return Bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===lu)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wo(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Bu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _r:return nr(n.children,i,s,t);case ou:l=8,i|=8;break;case Wl:return e=rt(12,n,t,i|2),e.elementType=Wl,e.lanes=s,e;case ql:return e=rt(13,n,t,i),e.elementType=ql,e.lanes=s,e;case Kl:return e=rt(19,n,t,i),e.elementType=Kl,e.lanes=s,e;case Wf:return ka(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vf:l=10;break e;case Hf:l=9;break e;case au:l=11;break e;case lu:l=14;break e;case fn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=rt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function nr(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function ka(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Wf,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dl(0),this.expirationTimes=dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,s,l,c,d){return e=new o1(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(s),e}function a1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lm(e){if(!e)return zn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(qe(n))return Lg(e,n,t)}return t}function zm(e,t,n,r,i,s,l,c,d){return e=Vu(n,r,!0,e,i,s,l,c,d),e.context=Lm(null),n=e.current,r=ze(),i=Pn(n),s=Gt(r,i),s.callback=t??null,Cn(n,s,i),e.current.lanes=i,gs(e,i,r),Ke(e,r),e}function Ea(e,t,n,r){var i=t.current,s=ze(),l=Pn(i);return n=Lm(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cn(i,t,l),e!==null&&(gt(e,i,l,s),fo(e,i,l)),l}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hu(e,t){_p(e,t),(e=e.alternate)&&_p(e,t)}function l1(){return null}var Mm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wu(e){this._internalRoot=e}Sa.prototype.render=Wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ea(e,t,null,null)};Sa.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Ea(null,e,null,null)}),t[Qt]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=gg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&vg(e)}};function qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bp(){}function c1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var p=Xo(l);s.call(p)}}var l=zm(t,r,e,0,null,!1,!1,"",bp);return e._reactRootContainer=l,e[Qt]=l.current,Zi(e.nodeType===8?e.parentNode:e),ar(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var p=Xo(d);c.call(p)}}var d=Vu(e,0,!1,null,null,!1,!1,"",bp);return e._reactRootContainer=d,e[Qt]=d.current,Zi(e.nodeType===8?e.parentNode:e),ar(function(){Ea(t,d,n,r)}),d}function Na(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var c=i;i=function(){var d=Xo(l);c.call(d)}}Ea(t,l,e,i)}else l=c1(n,t,e,i,r);return Xo(l)}pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ci(t.pendingLanes);n!==0&&(du(t,n|1),Ke(t,he()),!(G&6)&&(Gr=he()+500,$n()))}break;case 13:ar(function(){var r=Zt(e,1);if(r!==null){var i=ze();gt(r,e,1,i)}}),Hu(e,1)}};hu=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=ze();gt(t,e,134217728,n)}Hu(e,134217728)}};fg=function(e){if(e.tag===13){var t=Pn(e),n=Zt(e,t);if(n!==null){var r=ze();gt(n,e,t,r)}Hu(e,t)}};gg=function(){return Y};mg=function(e,t){var n=Y;try{return Y=e,t()}finally{Y=n}};rc=function(e,t,n){switch(t){case"input":if(Jl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=va(r);if(!i)throw Error(M(90));Kf(r),Jl(r,i)}}}break;case"textarea":Xf(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};ng=Uu;rg=ar;var u1={usingClientEntryPoint:!1,Events:[vs,Sr,va,eg,tg,Uu]},Si={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d1={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=og(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||l1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{pa=io.inject(d1),St=io}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u1;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(t))throw Error(M(200));return a1(e,t,null,n)};Qe.createRoot=function(e,t){if(!qu(e))throw Error(M(299));var n=!1,r="",i=Mm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,null,n,!1,r,i),e[Qt]=t.current,Zi(e.nodeType===8?e.parentNode:e),new Wu(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=og(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return ar(e)};Qe.hydrate=function(e,t,n){if(!ja(t))throw Error(M(200));return Na(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Mm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=zm(t,null,e,1,n??null,i,!1,s,l),e[Qt]=t.current,Zi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Sa(t)};Qe.render=function(e,t,n){if(!ja(t))throw Error(M(200));return Na(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!ja(e))throw Error(M(40));return e._reactRootContainer?(ar(function(){Na(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Uu;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ja(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Na(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Um)}catch(e){console.error(e)}}Um(),Uf.exports=Qe;var h1=Uf.exports,kp=h1;Vl.createRoot=kp.createRoot,Vl.hydrateRoot=kp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}var En;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(En||(En={}));const Ep="popstate";function p1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:c}=r.location;return Lc("",{pathname:s,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jo(i)}return g1(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ku(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function f1(){return Math.random().toString(36).substr(2,8)}function Sp(e,t){return{usr:e.state,key:e.key,idx:t}}function Lc(e,t,n,r){return n===void 0&&(n=null),ls({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ti(t):t,{state:n,key:t&&t.key||r||f1()})}function Jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ti(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,c=En.Pop,d=null,p=w();p==null&&(p=0,l.replaceState(ls({},l.state,{idx:p}),""));function w(){return(l.state||{idx:null}).idx}function y(){c=En.Pop;let O=w(),E=O==null?null:O-p;p=O,d&&d({action:c,location:R.location,delta:E})}function x(O,E){c=En.Push;let m=Lc(R.location,O,E);p=w()+1;let v=Sp(m,p),I=R.createHref(m);try{l.pushState(v,"",I)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(I)}s&&d&&d({action:c,location:R.location,delta:1})}function j(O,E){c=En.Replace;let m=Lc(R.location,O,E);p=w();let v=Sp(m,p),I=R.createHref(m);l.replaceState(v,"",I),s&&d&&d({action:c,location:R.location,delta:0})}function C(O){let E=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof O=="string"?O:Jo(O);return m=m.replace(/ $/,"%20"),pe(E,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,E)}let R={get action(){return c},get location(){return e(i,l)},listen(O){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Ep,y),d=O,()=>{i.removeEventListener(Ep,y),d=null}},createHref(O){return t(i,O)},createURL:C,encodeLocation(O){let E=C(O);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:x,replace:j,go(O){return l.go(O)}};return R}var jp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jp||(jp={}));function m1(e,t,n){return n===void 0&&(n="/"),v1(e,t,n)}function v1(e,t,n,r){let i=typeof t=="string"?ti(t):t,s=Gu(i.pathname||"/",n);if(s==null)return null;let l=Fm(e);y1(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let p=I1(s);c=N1(l[d],p)}return c}function Fm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};d.relativePath.startsWith("/")&&(pe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let p=An([r,d.relativePath]),w=n.concat(d);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Fm(s.children,t,w,p)),!(s.path==null&&!s.index)&&t.push({path:p,score:S1(p,s.index),routesMeta:w})};return e.forEach((s,l)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,l);else for(let d of $m(s.path))i(s,l,d)}),t}function $m(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=$m(r.join("/")),c=[];return c.push(...l.map(d=>d===""?s:[s,d].join("/"))),i&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function y1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:j1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const x1=/^:[\w-]+$/,w1=3,_1=2,b1=1,k1=10,E1=-2,Np=e=>e==="*";function S1(e,t){let n=e.split("/"),r=n.length;return n.some(Np)&&(r+=E1),t&&(r+=_1),n.filter(i=>!Np(i)).reduce((i,s)=>i+(x1.test(s)?w1:s===""?b1:k1),r)}function j1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function N1(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let c=0;c<r.length;++c){let d=r[c],p=c===r.length-1,w=s==="/"?t:t.slice(s.length)||"/",y=T1({path:d.relativePath,caseSensitive:d.caseSensitive,end:p},w),x=d.route;if(!y)return null;Object.assign(i,y.params),l.push({params:i,pathname:An([s,y.pathname]),pathnameBase:D1(An([s,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(s=An([s,y.pathnameBase]))}return l}function T1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=C1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,w,y)=>{let{paramName:x,isOptional:j}=w;if(x==="*"){let R=c[y]||"";l=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const C=c[y];return j&&!C?p[x]=void 0:p[x]=(C||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:l,pattern:e}}function C1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ku(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function I1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ku(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const P1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,R1=e=>P1.test(e);function A1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ti(e):e,s;if(n)if(R1(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Ku(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Tp(n.substring(1),"/"):s=Tp(n,t)}else s=t;return{pathname:s,search:L1(r),hash:z1(i)}}function Tp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function O1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xu(e,t){let n=O1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ju(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ti(e):(i=ls({},e),pe(!i.pathname||!i.pathname.includes("?"),Rl("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Rl("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Rl("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,c;if(l==null)c=n;else{let y=t.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),y-=1;i.pathname=x.join("/")}c=y>=0?t[y]:"/"}let d=A1(i,c),p=l&&l!=="/"&&l.endsWith("/"),w=(s||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(p||w)&&(d.pathname+="/"),d}const An=e=>e.join("/").replace(/\/\/+/g,"/"),D1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,z1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function M1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bm=["post","put","patch","delete"];new Set(Bm);const U1=["get",...Bm];new Set(U1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cs.apply(this,arguments)}const Yu=A.createContext(null),F1=A.createContext(null),Bn=A.createContext(null),Ta=A.createContext(null),sn=A.createContext({outlet:null,matches:[],isDataRoute:!1}),Vm=A.createContext(null);function $1(e,t){let{relative:n}=t===void 0?{}:t;ni()||pe(!1);let{basename:r,navigator:i}=A.useContext(Bn),{hash:s,pathname:l,search:c}=qm(e,{relative:n}),d=l;return r!=="/"&&(d=l==="/"?r:An([r,l])),i.createHref({pathname:d,search:c,hash:s})}function ni(){return A.useContext(Ta)!=null}function on(){return ni()||pe(!1),A.useContext(Ta).location}function Hm(e){A.useContext(Bn).static||A.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=A.useContext(sn);return e?ew():B1()}function B1(){ni()||pe(!1);let e=A.useContext(Yu),{basename:t,future:n,navigator:r}=A.useContext(Bn),{matches:i}=A.useContext(sn),{pathname:s}=on(),l=JSON.stringify(Xu(i,n.v7_relativeSplatPath)),c=A.useRef(!1);return Hm(()=>{c.current=!0}),A.useCallback(function(p,w){if(w===void 0&&(w={}),!c.current)return;if(typeof p=="number"){r.go(p);return}let y=Ju(p,JSON.parse(l),s,w.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:An([t,y.pathname])),(w.replace?r.replace:r.push)(y,w.state,w)},[t,r,l,s,e])}function Wm(){let{matches:e}=A.useContext(sn),t=e[e.length-1];return t?t.params:{}}function qm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=A.useContext(Bn),{matches:i}=A.useContext(sn),{pathname:s}=on(),l=JSON.stringify(Xu(i,r.v7_relativeSplatPath));return A.useMemo(()=>Ju(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function V1(e,t){return H1(e,t)}function H1(e,t,n,r){ni()||pe(!1);let{navigator:i}=A.useContext(Bn),{matches:s}=A.useContext(sn),l=s[s.length-1],c=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let p=on(),w;if(t){var y;let O=typeof t=="string"?ti(t):t;d==="/"||(y=O.pathname)!=null&&y.startsWith(d)||pe(!1),w=O}else w=p;let x=w.pathname||"/",j=x;if(d!=="/"){let O=d.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(O.length).join("/")}let C=m1(e,{pathname:j}),R=X1(C&&C.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:An([d,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?d:An([d,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return t&&R?A.createElement(Ta.Provider,{value:{location:cs({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:En.Pop}},R):R}function W1(){let e=Z1(),t=M1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),n?A.createElement("pre",{style:i},n):null,null)}const q1=A.createElement(W1,null);class K1 extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?A.createElement(sn.Provider,{value:this.props.routeContext},A.createElement(Vm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G1(e){let{routeContext:t,match:n,children:r}=e,i=A.useContext(Yu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(sn.Provider,{value:t},r)}function X1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let w=l.findIndex(y=>y.route.id&&(c==null?void 0:c[y.route.id])!==void 0);w>=0||pe(!1),l=l.slice(0,Math.min(l.length,w+1))}let d=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let w=0;w<l.length;w++){let y=l[w];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=w),y.route.id){let{loaderData:x,errors:j}=n,C=y.route.loader&&x[y.route.id]===void 0&&(!j||j[y.route.id]===void 0);if(y.route.lazy||C){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((w,y,x)=>{let j,C=!1,R=null,O=null;n&&(j=c&&y.route.id?c[y.route.id]:void 0,R=y.route.errorElement||q1,d&&(p<0&&x===0?(tw("route-fallback"),C=!0,O=null):p===x&&(C=!0,O=y.route.hydrateFallbackElement||null)));let E=t.concat(l.slice(0,x+1)),m=()=>{let v;return j?v=R:C?v=O:y.route.Component?v=A.createElement(y.route.Component,null):y.route.element?v=y.route.element:v=w,A.createElement(G1,{match:y,routeContext:{outlet:w,matches:E,isDataRoute:n!=null},children:v})};return n&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?A.createElement(K1,{location:n.location,revalidation:n.revalidation,component:R,error:j,children:m(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):m()},null)}var Km=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Km||{}),Gm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gm||{});function J1(e){let t=A.useContext(Yu);return t||pe(!1),t}function Y1(e){let t=A.useContext(F1);return t||pe(!1),t}function Q1(e){let t=A.useContext(sn);return t||pe(!1),t}function Xm(e){let t=Q1(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function Z1(){var e;let t=A.useContext(Vm),n=Y1(),r=Xm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ew(){let{router:e}=J1(Km.UseNavigateStable),t=Xm(Gm.UseNavigateStable),n=A.useRef(!1);return Hm(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,cs({fromRouteId:t},s)))},[e,t])}const Cp={};function tw(e,t,n){Cp[e]||(Cp[e]=!0)}function nw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function _o(e){let{to:t,replace:n,state:r,relative:i}=e;ni()||pe(!1);let{future:s,static:l}=A.useContext(Bn),{matches:c}=A.useContext(sn),{pathname:d}=on(),p=yt(),w=Ju(t,Xu(c,s.v7_relativeSplatPath),d,i==="path"),y=JSON.stringify(w);return A.useEffect(()=>p(JSON.parse(y),{replace:n,state:r,relative:i}),[p,y,i,n,r]),null}function ye(e){pe(!1)}function rw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=En.Pop,navigator:s,static:l=!1,future:c}=e;ni()&&pe(!1);let d=t.replace(/^\/*/,"/"),p=A.useMemo(()=>({basename:d,navigator:s,static:l,future:cs({v7_relativeSplatPath:!1},c)}),[d,c,s,l]);typeof r=="string"&&(r=ti(r));let{pathname:w="/",search:y="",hash:x="",state:j=null,key:C="default"}=r,R=A.useMemo(()=>{let O=Gu(w,d);return O==null?null:{location:{pathname:O,search:y,hash:x,state:j,key:C},navigationType:i}},[d,w,y,x,j,C,i]);return R==null?null:A.createElement(Bn.Provider,{value:p},A.createElement(Ta.Provider,{children:n,value:R}))}function Ip(e){let{children:t,location:n}=e;return V1(zc(t),n)}new Promise(()=>{});function zc(e,t){t===void 0&&(t=[]);let n=[];return A.Children.forEach(e,(r,i)=>{if(!A.isValidElement(r))return;let s=[...t,i];if(r.type===A.Fragment){n.push.apply(n,zc(r.props.children,s));return}r.type!==ye&&pe(!1),!r.props.index||!r.props.children||pe(!1);let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=zc(r.props.children,s)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mc(){return Mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mc.apply(this,arguments)}function iw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ow(e,t){return e.button===0&&(!t||t==="_self")&&!sw(e)}function Uc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function aw(e,t){let n=Uc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const lw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cw="6";try{window.__reactRouterVersion=cw}catch{}const uw="startTransition",Pp=t0[uw];function dw(e){let{basename:t,children:n,future:r,window:i}=e,s=A.useRef();s.current==null&&(s.current=p1({window:i,v5Compat:!0}));let l=s.current,[c,d]=A.useState({action:l.action,location:l.location}),{v7_startTransition:p}=r||{},w=A.useCallback(y=>{p&&Pp?Pp(()=>d(y)):d(y)},[d,p]);return A.useLayoutEffect(()=>l.listen(w),[l,w]),A.useEffect(()=>nw(r),[r]),A.createElement(rw,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const hw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pe=A.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:l,state:c,target:d,to:p,preventScrollReset:w,viewTransition:y}=t,x=iw(t,lw),{basename:j}=A.useContext(Bn),C,R=!1;if(typeof p=="string"&&pw.test(p)&&(C=p,hw))try{let v=new URL(window.location.href),I=p.startsWith("//")?new URL(v.protocol+p):new URL(p),L=Gu(I.pathname,j);I.origin===v.origin&&L!=null?p=L+I.search+I.hash:R=!0}catch{}let O=$1(p,{relative:i}),E=fw(p,{replace:l,state:c,target:d,preventScrollReset:w,relative:i,viewTransition:y});function m(v){r&&r(v),v.defaultPrevented||E(v)}return A.createElement("a",Mc({},x,{href:C||O,onClick:R||s?r:m,ref:n,target:d}))});var Rp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rp||(Rp={}));var Ap;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ap||(Ap={}));function fw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:l,viewTransition:c}=t===void 0?{}:t,d=yt(),p=on(),w=qm(e,{relative:l});return A.useCallback(y=>{if(ow(y,n)){y.preventDefault();let x=r!==void 0?r:Jo(p)===Jo(w);d(e,{replace:x,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[p,d,w,r,i,n,e,s,l,c])}function gw(e){let t=A.useRef(Uc(e)),n=A.useRef(!1),r=on(),i=A.useMemo(()=>aw(r.search,n.current?null:t.current),[r.search]),s=yt(),l=A.useCallback((c,d)=>{const p=Uc(typeof c=="function"?c(i):c);n.current=!0,s("?"+p,d)},[s,i]);return[i,l]}const Jm=A.createContext(void 0),an=()=>{const e=A.useContext(Jm);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},mw=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},vw=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},yw=({children:e})=>{const[t,n]=A.useState(null),[r,i]=A.useState(!0),[s,l]=A.useState(null),c=async()=>{try{i(!0),l(null);const{type:p,value:w}=vw(),y=p==="subdomain"?`/api/tenants/by-subdomain/${w}`:`/api/tenants/by-domain/${encodeURIComponent(w)}`,x=await fetch(`http://localhost:3001${y}`);if(!x.ok)throw x.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const j=await x.json();if(j.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(j.status==="cancelled")throw new Error("Cuenta cancelada.");n(j),mw(j.branding)}catch(p){l(p instanceof Error?p.message:"Error desconocido")}finally{i(!1)}};A.useEffect(()=>{c()},[]);const d=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return a.jsx(Jm.Provider,{value:{tenant:t,loading:r,error:s,isWhiteLabel:d,refreshTenant:c},children:e})};var Op={};/**
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
 */const Ym=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],l=e[n++],c=e[n++],d=((i&7)<<18|(s&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const s=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|l&63)}}return t.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],l=i+1<e.length,c=l?e[i+1]:0,d=i+2<e.length,p=d?e[i+2]:0,w=s>>2,y=(s&3)<<4|c>>4;let x=(c&15)<<2|p>>6,j=p&63;d||(j=64,l||(x=64)),r.push(n[w],n[y],n[x],n[j])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ym(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):xw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const p=i<e.length?n[e.charAt(i)]:64;++i;const y=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||p==null||y==null)throw new ww;const x=s<<2|c>>4;if(r.push(x),p!==64){const j=c<<4&240|p>>2;if(r.push(j),y!==64){const C=p<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(e){const t=Ym(e);return Qm.encodeByteArray(t,!0)},Yo=function(e){return _w(e).replace(/\./g,"")},Zm=function(e){try{return Qm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function bw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kw=()=>bw().__FIREBASE_DEFAULTS__,Ew=()=>{if(typeof process>"u"||typeof Op>"u")return;const e=Op.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Zm(e[1]);return t&&JSON.parse(t)},Qu=()=>{try{return kw()||Ew()||Sw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ev=e=>{var t,n;return(n=(t=Qu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},tv=e=>{const t=ev(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},nv=()=>{var e;return(e=Qu())===null||e===void 0?void 0:e.config},rv=e=>{var t;return(t=Qu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function iv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Yo(JSON.stringify(n)),Yo(JSON.stringify(l)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pw(){const e=Me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function Aw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Ow="FirebaseError";class Pt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ow,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],l=s?Dw(s,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Pt(i,c,r)}}function Dw(e,t){return e.replace(Lw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Lw=/\{\$([^}]+)}/g;function zw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],l=t[i];if(Dp(s)&&Dp(l)){if(!Qo(s,l))return!1}else if(s!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dp(e){return e!==null&&typeof e=="object"}/**
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
 */function ws(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Pi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Ri(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Mw(e,t){const n=new Uw(e,t);return n.subscribe.bind(n)}class Uw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Al),i.error===void 0&&(i.error=Al),i.complete===void 0&&(i.complete=Al);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Al(){}/**
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
 */function xt(e){return e&&e._delegate?e._delegate:e}class Mn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Jn="[DEFAULT]";/**
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
 */class $w{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new jw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vw(t))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jn){return this.instances.has(t)}getOptions(t=Jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&t(l,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jn){return this.component?this.component.multipleInstances?t:Jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bw(e){return e===Jn?void 0:e}function Vw(e){return e.instantiationMode==="EAGER"}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const Ww={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},qw=J.INFO,Kw={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Gw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Zu{constructor(t){this.name=t,this._logLevel=qw,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ww[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Xw=(e,t)=>t.some(n=>e instanceof n);let Lp,zp;function Jw(){return Lp||(Lp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yw(){return zp||(zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sv=new WeakMap,Fc=new WeakMap,ov=new WeakMap,Ol=new WeakMap,ed=new WeakMap;function Qw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",l)},s=()=>{n(On(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&sv.set(n,e)}).catch(()=>{}),ed.set(t,e),t}function Zw(e){if(Fc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",l),e.removeEventListener("abort",l)},s=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",l),e.addEventListener("abort",l)});Fc.set(e,t)}let $c={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ov.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function e2(e){$c=e($c)}function t2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Dl(this),t,...n);return ov.set(r,t.sort?t.sort():[t]),On(r)}:Yw().includes(e)?function(...t){return e.apply(Dl(this),t),On(sv.get(this))}:function(...t){return On(e.apply(Dl(this),t))}}function n2(e){return typeof e=="function"?t2(e):(e instanceof IDBTransaction&&Zw(e),Xw(e,Jw())?new Proxy(e,$c):e)}function On(e){if(e instanceof IDBRequest)return Qw(e);if(Ol.has(e))return Ol.get(e);const t=n2(e);return t!==e&&(Ol.set(e,t),ed.set(t,e)),t}const Dl=e=>ed.get(e);function r2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const l=indexedDB.open(e,t),c=On(l);return r&&l.addEventListener("upgradeneeded",d=>{r(On(l.result),d.oldVersion,d.newVersion,On(l.transaction),d)}),n&&l.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{s&&d.addEventListener("close",()=>s()),i&&d.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const i2=["get","getKey","getAll","getAllKeys","count"],s2=["put","add","delete","clear"],Ll=new Map;function Mp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ll.get(t))return Ll.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=s2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||i2.includes(n)))return;const s=async function(l,...c){const d=this.transaction(l,i?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[n](...c),i&&d.done]))[0]};return Ll.set(t,s),s}e2(e=>({...e,get:(t,n,r)=>Mp(t,n)||e.get(t,n,r),has:(t,n)=>!!Mp(t,n)||e.has(t,n)}));/**
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
 */class o2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bc="@firebase/app",Up="0.10.13";/**
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
 */const tn=new Zu("@firebase/app"),l2="@firebase/app-compat",c2="@firebase/analytics-compat",u2="@firebase/analytics",d2="@firebase/app-check-compat",h2="@firebase/app-check",p2="@firebase/auth",f2="@firebase/auth-compat",g2="@firebase/database",m2="@firebase/data-connect",v2="@firebase/database-compat",y2="@firebase/functions",x2="@firebase/functions-compat",w2="@firebase/installations",_2="@firebase/installations-compat",b2="@firebase/messaging",k2="@firebase/messaging-compat",E2="@firebase/performance",S2="@firebase/performance-compat",j2="@firebase/remote-config",N2="@firebase/remote-config-compat",T2="@firebase/storage",C2="@firebase/storage-compat",I2="@firebase/firestore",P2="@firebase/vertexai-preview",R2="@firebase/firestore-compat",A2="firebase",O2="10.14.1";/**
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
 */const Vc="[DEFAULT]",D2={[Bc]:"fire-core",[l2]:"fire-core-compat",[u2]:"fire-analytics",[c2]:"fire-analytics-compat",[h2]:"fire-app-check",[d2]:"fire-app-check-compat",[p2]:"fire-auth",[f2]:"fire-auth-compat",[g2]:"fire-rtdb",[m2]:"fire-data-connect",[v2]:"fire-rtdb-compat",[y2]:"fire-fn",[x2]:"fire-fn-compat",[w2]:"fire-iid",[_2]:"fire-iid-compat",[b2]:"fire-fcm",[k2]:"fire-fcm-compat",[E2]:"fire-perf",[S2]:"fire-perf-compat",[j2]:"fire-rc",[N2]:"fire-rc-compat",[T2]:"fire-gcs",[C2]:"fire-gcs-compat",[I2]:"fire-fst",[R2]:"fire-fst-compat",[P2]:"fire-vertex","fire-js":"fire-js",[A2]:"fire-js-all"};/**
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
 */const Zo=new Map,L2=new Map,Hc=new Map;function Fp(e,t){try{e.container.addComponent(t)}catch(n){tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lr(e){const t=e.name;if(Hc.has(t))return tn.debug(`There were multiple attempts to register component ${t}.`),!1;Hc.set(t,e);for(const n of Zo.values())Fp(n,e);for(const n of L2.values())Fp(n,e);return!0}function Ca(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Et(e){return e.settings!==void 0}/**
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
 */const z2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new xs("app","Firebase",z2);/**
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
 */class M2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=O2;function av(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(n||(n=nv()),!n)throw Dn.create("no-options");const s=Zo.get(i);if(s){if(Qo(n,s.options)&&Qo(r,s.config))return s;throw Dn.create("duplicate-app",{appName:i})}const l=new Hw(i);for(const d of Hc.values())l.addComponent(d);const c=new M2(n,r,l);return Zo.set(i,c),c}function td(e=Vc){const t=Zo.get(e);if(!t&&e===Vc&&nv())return av();if(!t)throw Dn.create("no-app",{appName:e});return t}function Nt(e,t,n){var r;let i=(r=D2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=t.match(/\s|\//);if(s||l){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tn.warn(c.join(" "));return}lr(new Mn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const U2="firebase-heartbeat-database",F2=1,us="firebase-heartbeat-store";let zl=null;function lv(){return zl||(zl=r2(U2,F2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(e=>{throw Dn.create("idb-open",{originalErrorMessage:e.message})})),zl}async function $2(e){try{const n=(await lv()).transaction(us),r=await n.objectStore(us).get(cv(e));return await n.done,r}catch(t){if(t instanceof Pt)tn.warn(t.message);else{const n=Dn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tn.warn(n.message)}}}async function $p(e,t){try{const r=(await lv()).transaction(us,"readwrite");await r.objectStore(us).put(t,cv(e)),await r.done}catch(n){if(n instanceof Pt)tn.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function cv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const B2=1024,V2=30*24*60*60*1e3;class H2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bp();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=V2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bp(),{heartbeatsToSend:r,unsentEntries:i}=W2(this._heartbeatsCache.heartbeats),s=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return tn.warn(n),""}}}function Bp(){return new Date().toISOString().substring(0,10)}function W2(e,t=B2){const n=[];let r=e.slice();for(const i of e){const s=n.find(l=>l.agent===i.agent);if(s){if(s.dates.push(i.date),Vp(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class q2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?Aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $p(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Vp(e){return Yo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function K2(e){lr(new Mn("platform-logger",t=>new o2(t),"PRIVATE")),lr(new Mn("heartbeat",t=>new H2(t),"PRIVATE")),Nt(Bc,Up,e),Nt(Bc,Up,"esm2017"),Nt("fire-js","")}K2("");function nd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G2=uv,dv=new xs("auth","Firebase",uv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Zu("@firebase/auth");function X2(e,...t){ea.logLevel<=J.WARN&&ea.warn(`Auth (${pr}): ${e}`,...t)}function bo(e,...t){ea.logLevel<=J.ERROR&&ea.error(`Auth (${pr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,...t){throw rd(e,...t)}function Tt(e,...t){return rd(e,...t)}function hv(e,t,n){const r=Object.assign(Object.assign({},G2()),{[t]:n});return new xs("auth","Firebase",r).create(t,{appName:e.name})}function Xt(e){return hv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return dv.create(e,...t)}function B(e,t,...n){if(!e)throw rd(t,...n)}function Wt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bo(t),new Error(t)}function nn(e,t){e||Wt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function J2(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J2()||Cw()||"connection"in navigator)?navigator.onLine:!0}function Q2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,n){this.shortDelay=t,this.longDelay=n,nn(n>t,"Short delay should be less than long delay!"),this.isMobile=Nw()||Iw()}get(){return Y2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(e,t){nn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const e_=new _s(3e4,6e4);function ln(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Rt(e,t,n,r,i={}){return fv(e,i,async()=>{let s={},l={};r&&(t==="GET"?l=r:s={body:JSON.stringify(r)});const c=ws(Object.assign({key:e.config.apiKey},l)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const p=Object.assign({method:t,headers:d},s);return Tw()||(p.referrerPolicy="no-referrer"),pv.fetch()(gv(e,e.config.apiHost,n,c),p)})}async function fv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z2),t);try{const i=new n_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await s.json();if("needConfirmation"in l)throw so(e,"account-exists-with-different-credential",l);if(s.ok&&!("errorMessage"in l))return l;{const c=s.ok?l.errorMessage:l.error.message,[d,p]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(e,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw so(e,"email-already-in-use",l);if(d==="USER_DISABLED")throw so(e,"user-disabled",l);const w=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw hv(e,w,p);vt(e,w)}}catch(i){if(i instanceof Pt)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function bs(e,t,n,r,i={}){const s=await Rt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function gv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?id(e.config,i):`${e.config.apiScheme}://${i}`}function t_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class n_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),e_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function so(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(e,t,r);return i.customData._tokenResponse=n,i}function Wp(e){return e!==void 0&&e.enterprise!==void 0}class r_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return t_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function i_(e,t){return Rt(e,"GET","/v2/recaptchaConfig",ln(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(e,t){return Rt(e,"POST","/v1/accounts:delete",t)}async function mv(e,t){return Rt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function o_(e,t=!1){const n=xt(e),r=await n.getIdToken(t),i=sd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,l=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bi(Ml(i.auth_time)),issuedAtTime:Bi(Ml(i.iat)),expirationTime:Bi(Ml(i.exp)),signInProvider:l||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ml(e){return Number(e)*1e3}function sd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zm(n);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qp(e){const t=sd(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Pt&&a_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function a_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Xr(e,mv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const l=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?vv(s.providerUserInfo):[],c=u_(e.providerData,l),d=e.isAnonymous,p=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),w=d?p:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new qc(s.createdAt,s.lastLoginAt),isAnonymous:w};Object.assign(e,y)}async function c_(e){const t=xt(e);await ta(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function u_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function vv(e){return e.map(t=>{var{providerId:n}=t,r=nd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(e,t){const n=await fv(e,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,l=gv(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",pv.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function h_(e,t){return Rt(e,"POST","/v2/accounts:revokeToken",ln(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=qp(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,l=new Ur;return r&&(B(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),l.expirationTime=s),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class qt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=nd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new l_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Xr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return o_(this,t)}reload(){return c_(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new qt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Xt(this.auth));const t=await this.getIdToken();return await Xr(this,s_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,l,c,d,p,w;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,x=(i=n.email)!==null&&i!==void 0?i:void 0,j=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(l=n.photoURL)!==null&&l!==void 0?l:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,E=(p=n.createdAt)!==null&&p!==void 0?p:void 0,m=(w=n.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:v,emailVerified:I,isAnonymous:L,providerData:z,stsTokenManager:b}=n;B(v&&b,t,"internal-error");const g=Ur.fromJSON(this.name,b);B(typeof v=="string",t,"internal-error"),pn(y,t.name),pn(x,t.name),B(typeof I=="boolean",t,"internal-error"),B(typeof L=="boolean",t,"internal-error"),pn(j,t.name),pn(C,t.name),pn(R,t.name),pn(O,t.name),pn(E,t.name),pn(m,t.name);const _=new qt({uid:v,auth:t,email:x,emailVerified:I,displayName:y,isAnonymous:L,photoURL:C,phoneNumber:j,tenantId:R,stsTokenManager:g,createdAt:E,lastLoginAt:m});return z&&Array.isArray(z)&&(_.providerData=z.map(S=>Object.assign({},S))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ur;i.updateFromServerResponse(n);const s=new qt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ta(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?vv(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Ur;c.updateFromIdToken(r);const d=new qt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(d,p),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function Kt(e){nn(e instanceof Function,"Expected a class definition");let t=Kp.get(e);return t?(nn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Kp.set(e,t),t)}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}yv.type="NONE";const Gp=yv;/**
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
 */function ko(e,t,n){return`firebase:${e}:${t}:${n}`}class Fr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ko(this.userKey,i.apiKey,s),this.fullPersistenceKey=ko("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?qt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fr(Kt(Gp),t,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let s=i[0]||Kt(Gp);const l=ko(r,t.config.apiKey,t.name);let c=null;for(const p of n)try{const w=await p._get(l);if(w){const y=qt._fromJSON(t,w);p!==s&&(c=y),s=p;break}}catch{}const d=i.filter(p=>p._shouldAllowMigration);return!s._shouldAllowMigration||!d.length?new Fr(s,t,r):(s=d[0],c&&await s._set(l,c.toJSON()),await Promise.all(n.map(async p=>{if(p!==s)try{await p._remove(l)}catch{}})),new Fr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ev(t))return"Blackberry";if(Sv(t))return"Webos";if(wv(t))return"Safari";if((t.includes("chrome/")||_v(t))&&!t.includes("edge/"))return"Chrome";if(kv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xv(e=Me()){return/firefox\//i.test(e)}function wv(e=Me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _v(e=Me()){return/crios\//i.test(e)}function bv(e=Me()){return/iemobile/i.test(e)}function kv(e=Me()){return/android/i.test(e)}function Ev(e=Me()){return/blackberry/i.test(e)}function Sv(e=Me()){return/webos/i.test(e)}function od(e=Me()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function p_(e=Me()){var t;return od(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function f_(){return Pw()&&document.documentMode===10}function jv(e=Me()){return od(e)||kv(e)||Sv(e)||Ev(e)||/windows phone/i.test(e)||bv(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(e,t=[]){let n;switch(e){case"Browser":n=Xp(Me());break;case"Worker":n=`${Xp(Me())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${r}`}/**
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
 */class g_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((l,c)=>{try{const d=t(s);l(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function m_(e,t={}){return Rt(e,"GET","/v2/passwordPolicy",ln(e,t))}/**
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
 */const v_=6;class y_{constructor(t){var n,r,i,s;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:v_,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,l,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(s=d.containsUppercaseLetter)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jp(this),this.idTokenSubscription=new Jp(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await mv(this,{idToken:t}),r=await qt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Et(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(t);(!l||l===c)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ta(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Q2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Et(this.app))return Promise.reject(Xt(this));const n=t?xt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Et(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await m_(this),n=new y_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new xs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await h_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Kt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{l||s(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,i);return()=>{l=!0,d()}}else{const d=t.addObserver(n);return()=>{l=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&X2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vn(e){return xt(e)}class Jp{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mw(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function w_(e){Ia=e}function Tv(e){return Ia.loadJS(e)}function __(){return Ia.recaptchaEnterpriseScript}function b_(){return Ia.gapiScript}function k_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const E_="recaptcha-enterprise",S_="NO_RECAPTCHA";class j_{constructor(t){this.type=E_,this.auth=Vn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(l,c)=>{i_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const p=new r_(d);return s.tenantId==null?s._agentRecaptchaConfig=p:s._tenantRecaptchaConfigs[s.tenantId]=p,l(p.siteKey)}}).catch(d=>{c(d)})})}function i(s,l,c){const d=window.grecaptcha;Wp(d)?d.enterprise.ready(()=>{d.enterprise.execute(s,{action:t}).then(p=>{l(p)}).catch(()=>{l(S_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,l)=>{r(this.auth).then(c=>{if(!n&&Wp(window.grecaptcha))i(c,s,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=__();d.length!==0&&(d+=c),Tv(d).then(()=>{i(c,s,l)}).catch(p=>{l(p)})}}).catch(c=>{l(c)})})}}async function Yp(e,t,n,r=!1){const i=new j_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:s}):Object.assign(l,{captchaResponse:s}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function na(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yp(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Yp(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(e,t){const n=Ca(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qo(s,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function T_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function C_(e,t,n){const r=Vn(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Cv(t),{host:l,port:c}=I_(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),P_()}function Cv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function I_(e){const t=Cv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qp(r.substr(s.length+1))}}else{const[s,l]=r.split(":");return{host:s,port:Qp(l)}}}function Qp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function P_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(t){return Wt("not implemented")}_linkToIdToken(t,n){return Wt("not implemented")}_getReauthenticationResolver(t){return Wt("not implemented")}}async function R_(e,t){return Rt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(e,t){return bs(e,"POST","/v1/accounts:signInWithPassword",ln(e,t))}async function O_(e,t){return Rt(e,"POST","/v1/accounts:sendOobCode",ln(e,t))}async function D_(e,t){return O_(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(e,t){return bs(e,"POST","/v1/accounts:signInWithEmailLink",ln(e,t))}async function z_(e,t){return bs(e,"POST","/v1/accounts:signInWithEmailLink",ln(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends ad{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ds(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ds(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(t,n,"signInWithPassword",A_);case"emailLink":return L_(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return na(t,r,"signUpPassword",R_);case"emailLink":return z_(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(e,t){return bs(e,"POST","/v1/accounts:signInWithIdp",ln(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="http://localhost";class cr extends ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new cr(r,i);return l.idToken=s.idToken||void 0,l.accessToken=s.accessToken||void 0,l.secret=s.secret,l.nonce=s.nonce,l.pendingToken=s.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return $r(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$r(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$r(t,n)}buildRequest(){const t={requestUri:M_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ws(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function F_(e){const t=Pi(Ri(e)).link,n=t?Pi(Ri(t)).deep_link_id:null,r=Pi(Ri(e)).deep_link_id;return(r?Pi(Ri(r)).link:null)||r||n||t||e}class ld{constructor(t){var n,r,i,s,l,c;const d=Pi(Ri(t)),p=(n=d.apiKey)!==null&&n!==void 0?n:null,w=(r=d.oobCode)!==null&&r!==void 0?r:null,y=U_((i=d.mode)!==null&&i!==void 0?i:null);B(p&&w&&y,"argument-error"),this.apiKey=p,this.operation=y,this.code=w,this.continueUrl=(s=d.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=F_(t);try{return new ld(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(t,n){return ds._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=ld.parseLink(n);return B(r,"argument-error"),ds._fromEmailAndCode(t,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ks extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends ks{constructor(){super("facebook.com")}static credential(t){return cr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yn.credential(t.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return xn.credentialFromTaggedObject(t)}static credentialFromError(t){return xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ks{constructor(){super("github.com")}static credential(t){return cr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ks{constructor(){super("twitter.com")}static credential(t,n){return cr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(e,t){return bs(e,"POST","/v1/accounts:signUp",ln(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await qt._fromIdTokenResponse(t,r,i),l=Zp(r);return new ur({user:s,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Zp(r);return new ur({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Zp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Pt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ra(t,n,r,i)}}function Pv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(e,s,t,r):s})}async function B_(e,t,n=!1){const r=await Xr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ur._forOperation(e,"link",r)}/**
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
 */async function V_(e,t,n=!1){const{auth:r}=e;if(Et(r.app))return Promise.reject(Xt(r));const i="reauthenticate";try{const s=await Xr(e,Pv(r,i,t,e),n);B(s.idToken,r,"internal-error");const l=sd(s.idToken);B(l,r,"internal-error");const{sub:c}=l;return B(e.uid===c,r,"user-mismatch"),ur._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(e,t,n=!1){if(Et(e.app))return Promise.reject(Xt(e));const r="signIn",i=await Pv(e,r,t),s=await ur._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function H_(e,t){return Rv(Vn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(e){const t=Vn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function W_(e,t,n){const r=Vn(e);await na(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",D_)}async function q_(e,t,n){if(Et(e.app))return Promise.reject(Xt(e));const r=Vn(e),l=await na(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$_).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Av(e),d}),c=await ur._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function K_(e,t,n){return Et(e.app)?Promise.reject(Xt(e)):H_(xt(e),ri.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Av(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(e,t){return Rt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=xt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await Xr(r,G_(r.auth,s));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function J_(e,t,n,r){return xt(e).onIdTokenChanged(t,n,r)}function Y_(e,t,n){return xt(e).beforeAuthStateChanged(t,n)}function Q_(e,t,n,r){return xt(e).onAuthStateChanged(t,n,r)}function Z_(e){return xt(e).signOut()}const ia="__sak";/**
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
 */class Ov{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ia,"1"),this.storage.removeItem(ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=1e3,tb=10;class Dv extends Ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,d)=>{this.notifyListeners(l,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},s=this.storage.getItem(r);f_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,tb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Dv.type="LOCAL";const nb=Dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv extends Ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lv.type="SESSION";const zv=Lv;/**
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
 */function rb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Pa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async p=>p(n.origin,s)),d=await rb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ib{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,l;return new Promise((c,d)=>{const p=cd("",20);i.port1.start();const w=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(y){const x=y;if(x.data.eventId===p)switch(x.data.status){case"ack":clearTimeout(w),s=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(x.data.response);break;default:clearTimeout(w),clearTimeout(s),d(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return window}function sb(e){Ct().location.href=e}/**
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
 */function Mv(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function ob(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ab(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function lb(){return Mv()?self:null}/**
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
 */const Uv="firebaseLocalStorageDb",cb=1,sa="firebaseLocalStorage",Fv="fbase_key";class Es{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(e,t){return e.transaction([sa],t?"readwrite":"readonly").objectStore(sa)}function ub(){const e=indexedDB.deleteDatabase(Uv);return new Es(e).toPromise()}function Kc(){const e=indexedDB.open(Uv,cb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(sa,{keyPath:Fv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(sa)?t(r):(r.close(),await ub(),t(await Kc()))})})}async function ef(e,t,n){const r=Ra(e,!0).put({[Fv]:t,value:n});return new Es(r).toPromise()}async function db(e,t){const n=Ra(e,!1).get(t),r=await new Es(n).toPromise();return r===void 0?null:r.value}function tf(e,t){const n=Ra(e,!0).delete(t);return new Es(n).toPromise()}const hb=800,pb=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>pb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(lb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ob(),!this.activeServiceWorker)return;this.sender=new ib(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ab()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Kc();return await ef(t,ia,"1"),await tf(t,ia),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ef(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>db(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ra(i,!1).getAll();return new Es(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const fb=$v;new _s(3e4,6e4);/**
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
 */function gb(e,t){return t?Kt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ud extends ad{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $r(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $r(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $r(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mb(e){return Rv(e.auth,new ud(e),e.bypassAuthState)}function vb(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),V_(n,new ud(e),e.bypassAuthState)}async function yb(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),B_(n,new ud(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:l,type:c}=t;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mb;case"linkViaPopup":case"linkViaRedirect":return yb;case"reauthViaPopup":case"reauthViaRedirect":return vb;default:vt(this.auth,"internal-error")}}resolve(t){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new _s(2e3,1e4);class Rr extends Bv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const t=cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xb.get())};t()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="pendingRedirect",Eo=new Map;class _b extends Bv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Eo.get(this.auth._key());if(!t){try{const r=await bb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Eo.set(this.auth._key(),t)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bb(e,t){const n=Sb(t),r=Eb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kb(e,t){Eo.set(e._key(),t)}function Eb(e){return Kt(e._redirectPersistence)}function Sb(e){return ko(wb,e.config.apiKey,e.name)}async function jb(e,t,n=!1){if(Et(e.app))return Promise.reject(Xt(e));const r=Vn(e),i=gb(r,t),l=await new _b(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=10*60*1e3;class Tb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Cb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Vv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Nb&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(t))}saveEventToCache(t){this.cachedEventUids.add(nf(t)),this.lastProcessedEventTime=Date.now()}}function nf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Vv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Cb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(e,t={}){return Rt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rb=/^https?/;async function Ab(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ib(e);for(const n of t)try{if(Ob(n))return}catch{}vt(e,"unauthorized-domain")}function Ob(e){const t=Wc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Rb.test(n))return!1;if(Pb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Db=new _s(3e4,6e4);function rf(){const e=Ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Lb(e){return new Promise((t,n)=>{var r,i,s;function l(){rf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(Tt(e,"network-request-failed"))},timeout:Db.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)l();else{const c=k_("iframefcb");return Ct()[c]=()=>{gapi.load?l():n(Tt(e,"network-request-failed"))},Tv(`${b_()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw So=null,t})}let So=null;function zb(e){return So=So||Lb(e),So}/**
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
 */const Mb=new _s(5e3,15e3),Ub="__/auth/iframe",Fb="emulator/auth/iframe",$b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vb(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?id(t,Fb):`https://${e.config.authDomain}/${Ub}`,r={apiKey:t.apiKey,appName:e.name,v:pr},i=Bb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ws(r).slice(1)}`}async function Hb(e){const t=await zb(e),n=Ct().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:Vb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$b,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const l=Tt(e,"network-request-failed"),c=Ct().setTimeout(()=>{s(l)},Mb.get());function d(){Ct().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{s(l)})}))}/**
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
 */const Wb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qb=500,Kb=600,Gb="_blank",Xb="http://localhost";class sf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jb(e,t,n,r=qb,i=Kb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},Wb),{width:r.toString(),height:i.toString(),top:s,left:l}),p=Me().toLowerCase();n&&(c=_v(p)?Gb:n),xv(p)&&(t=t||Xb,d.scrollbars="yes");const w=Object.entries(d).reduce((x,[j,C])=>`${x}${j}=${C},`,"");if(p_(p)&&c!=="_self")return Yb(t||"",c),new sf(null);const y=window.open(t||"",c,w);B(y,e,"popup-blocked");try{y.focus()}catch{}return new sf(y)}function Yb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Qb="__/auth/handler",Zb="emulator/auth/handler",ek=encodeURIComponent("fac");async function of(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:pr,eventId:i};if(t instanceof Iv){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",zw(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[w,y]of Object.entries({}))l[w]=y}if(t instanceof ks){const w=t.getScopes().filter(y=>y!=="");w.length>0&&(l.scopes=w.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const w of Object.keys(c))c[w]===void 0&&delete c[w];const d=await e._getAppCheckToken(),p=d?`#${ek}=${encodeURIComponent(d)}`:"";return`${tk(e)}?${ws(c).slice(1)}${p}`}function tk({config:e}){return e.emulator?id(e,Zb):`https://${e.authDomain}/${Qb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="webStorageSupport";class nk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zv,this._completeRedirectFn=jb,this._overrideRedirectResult=kb}async _openPopup(t,n,r,i){var s;nn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const l=await of(t,n,r,Wc(),i);return Jb(t,l,cd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await of(t,n,r,Wc(),i);return sb(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Hb(t),r=new Tb(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ul,{type:Ul},i=>{var s;const l=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ul];l!==void 0&&n(!!l),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ab(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return jv()||wv()||od()}}const rk=nk;var af="@firebase/auth",lf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ok(e){lr(new Mn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;B(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(e)},p=new x_(r,i,s,d);return T_(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),lr(new Mn("auth-internal",t=>{const n=Vn(t.getProvider("auth").getImmediate());return(r=>new ik(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(af,lf,sk(e)),Nt(af,lf,"esm2017")}/**
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
 */const ak=5*60,lk=rv("authIdTokenMaxAge")||ak;let cf=null;const ck=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lk)return;const i=n==null?void 0:n.token;cf!==i&&(cf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uk(e=td()){const t=Ca(e,"auth");if(t.isInitialized())return t.getImmediate();const n=N_(e,{popupRedirectResolver:rk,persistence:[fb,nb,zv]}),r=rv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const l=ck(s.toString());Y_(n,l,()=>l(n.currentUser)),J_(n,c=>l(c))}}const i=ev("auth");return i&&C_(n,`http://${i}`),n}function dk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}w_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ok("Browser");var hk="firebase",pk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(hk,pk,"app");var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hv;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,g){function _(){}_.prototype=g.prototype,b.D=g.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(S,T,N){for(var k=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)k[ge-2]=arguments[ge];return g.prototype[T].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,g,_){_||(_=0);var S=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)S[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;16>T;++T)S[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=b.g[0],_=b.g[1],T=b.g[2];var N=b.g[3],k=g+(N^_&(T^N))+S[0]+3614090360&4294967295;g=_+(k<<7&4294967295|k>>>25),k=N+(T^g&(_^T))+S[1]+3905402710&4294967295,N=g+(k<<12&4294967295|k>>>20),k=T+(_^N&(g^_))+S[2]+606105819&4294967295,T=N+(k<<17&4294967295|k>>>15),k=_+(g^T&(N^g))+S[3]+3250441966&4294967295,_=T+(k<<22&4294967295|k>>>10),k=g+(N^_&(T^N))+S[4]+4118548399&4294967295,g=_+(k<<7&4294967295|k>>>25),k=N+(T^g&(_^T))+S[5]+1200080426&4294967295,N=g+(k<<12&4294967295|k>>>20),k=T+(_^N&(g^_))+S[6]+2821735955&4294967295,T=N+(k<<17&4294967295|k>>>15),k=_+(g^T&(N^g))+S[7]+4249261313&4294967295,_=T+(k<<22&4294967295|k>>>10),k=g+(N^_&(T^N))+S[8]+1770035416&4294967295,g=_+(k<<7&4294967295|k>>>25),k=N+(T^g&(_^T))+S[9]+2336552879&4294967295,N=g+(k<<12&4294967295|k>>>20),k=T+(_^N&(g^_))+S[10]+4294925233&4294967295,T=N+(k<<17&4294967295|k>>>15),k=_+(g^T&(N^g))+S[11]+2304563134&4294967295,_=T+(k<<22&4294967295|k>>>10),k=g+(N^_&(T^N))+S[12]+1804603682&4294967295,g=_+(k<<7&4294967295|k>>>25),k=N+(T^g&(_^T))+S[13]+4254626195&4294967295,N=g+(k<<12&4294967295|k>>>20),k=T+(_^N&(g^_))+S[14]+2792965006&4294967295,T=N+(k<<17&4294967295|k>>>15),k=_+(g^T&(N^g))+S[15]+1236535329&4294967295,_=T+(k<<22&4294967295|k>>>10),k=g+(T^N&(_^T))+S[1]+4129170786&4294967295,g=_+(k<<5&4294967295|k>>>27),k=N+(_^T&(g^_))+S[6]+3225465664&4294967295,N=g+(k<<9&4294967295|k>>>23),k=T+(g^_&(N^g))+S[11]+643717713&4294967295,T=N+(k<<14&4294967295|k>>>18),k=_+(N^g&(T^N))+S[0]+3921069994&4294967295,_=T+(k<<20&4294967295|k>>>12),k=g+(T^N&(_^T))+S[5]+3593408605&4294967295,g=_+(k<<5&4294967295|k>>>27),k=N+(_^T&(g^_))+S[10]+38016083&4294967295,N=g+(k<<9&4294967295|k>>>23),k=T+(g^_&(N^g))+S[15]+3634488961&4294967295,T=N+(k<<14&4294967295|k>>>18),k=_+(N^g&(T^N))+S[4]+3889429448&4294967295,_=T+(k<<20&4294967295|k>>>12),k=g+(T^N&(_^T))+S[9]+568446438&4294967295,g=_+(k<<5&4294967295|k>>>27),k=N+(_^T&(g^_))+S[14]+3275163606&4294967295,N=g+(k<<9&4294967295|k>>>23),k=T+(g^_&(N^g))+S[3]+4107603335&4294967295,T=N+(k<<14&4294967295|k>>>18),k=_+(N^g&(T^N))+S[8]+1163531501&4294967295,_=T+(k<<20&4294967295|k>>>12),k=g+(T^N&(_^T))+S[13]+2850285829&4294967295,g=_+(k<<5&4294967295|k>>>27),k=N+(_^T&(g^_))+S[2]+4243563512&4294967295,N=g+(k<<9&4294967295|k>>>23),k=T+(g^_&(N^g))+S[7]+1735328473&4294967295,T=N+(k<<14&4294967295|k>>>18),k=_+(N^g&(T^N))+S[12]+2368359562&4294967295,_=T+(k<<20&4294967295|k>>>12),k=g+(_^T^N)+S[5]+4294588738&4294967295,g=_+(k<<4&4294967295|k>>>28),k=N+(g^_^T)+S[8]+2272392833&4294967295,N=g+(k<<11&4294967295|k>>>21),k=T+(N^g^_)+S[11]+1839030562&4294967295,T=N+(k<<16&4294967295|k>>>16),k=_+(T^N^g)+S[14]+4259657740&4294967295,_=T+(k<<23&4294967295|k>>>9),k=g+(_^T^N)+S[1]+2763975236&4294967295,g=_+(k<<4&4294967295|k>>>28),k=N+(g^_^T)+S[4]+1272893353&4294967295,N=g+(k<<11&4294967295|k>>>21),k=T+(N^g^_)+S[7]+4139469664&4294967295,T=N+(k<<16&4294967295|k>>>16),k=_+(T^N^g)+S[10]+3200236656&4294967295,_=T+(k<<23&4294967295|k>>>9),k=g+(_^T^N)+S[13]+681279174&4294967295,g=_+(k<<4&4294967295|k>>>28),k=N+(g^_^T)+S[0]+3936430074&4294967295,N=g+(k<<11&4294967295|k>>>21),k=T+(N^g^_)+S[3]+3572445317&4294967295,T=N+(k<<16&4294967295|k>>>16),k=_+(T^N^g)+S[6]+76029189&4294967295,_=T+(k<<23&4294967295|k>>>9),k=g+(_^T^N)+S[9]+3654602809&4294967295,g=_+(k<<4&4294967295|k>>>28),k=N+(g^_^T)+S[12]+3873151461&4294967295,N=g+(k<<11&4294967295|k>>>21),k=T+(N^g^_)+S[15]+530742520&4294967295,T=N+(k<<16&4294967295|k>>>16),k=_+(T^N^g)+S[2]+3299628645&4294967295,_=T+(k<<23&4294967295|k>>>9),k=g+(T^(_|~N))+S[0]+4096336452&4294967295,g=_+(k<<6&4294967295|k>>>26),k=N+(_^(g|~T))+S[7]+1126891415&4294967295,N=g+(k<<10&4294967295|k>>>22),k=T+(g^(N|~_))+S[14]+2878612391&4294967295,T=N+(k<<15&4294967295|k>>>17),k=_+(N^(T|~g))+S[5]+4237533241&4294967295,_=T+(k<<21&4294967295|k>>>11),k=g+(T^(_|~N))+S[12]+1700485571&4294967295,g=_+(k<<6&4294967295|k>>>26),k=N+(_^(g|~T))+S[3]+2399980690&4294967295,N=g+(k<<10&4294967295|k>>>22),k=T+(g^(N|~_))+S[10]+4293915773&4294967295,T=N+(k<<15&4294967295|k>>>17),k=_+(N^(T|~g))+S[1]+2240044497&4294967295,_=T+(k<<21&4294967295|k>>>11),k=g+(T^(_|~N))+S[8]+1873313359&4294967295,g=_+(k<<6&4294967295|k>>>26),k=N+(_^(g|~T))+S[15]+4264355552&4294967295,N=g+(k<<10&4294967295|k>>>22),k=T+(g^(N|~_))+S[6]+2734768916&4294967295,T=N+(k<<15&4294967295|k>>>17),k=_+(N^(T|~g))+S[13]+1309151649&4294967295,_=T+(k<<21&4294967295|k>>>11),k=g+(T^(_|~N))+S[4]+4149444226&4294967295,g=_+(k<<6&4294967295|k>>>26),k=N+(_^(g|~T))+S[11]+3174756917&4294967295,N=g+(k<<10&4294967295|k>>>22),k=T+(g^(N|~_))+S[2]+718787259&4294967295,T=N+(k<<15&4294967295|k>>>17),k=_+(N^(T|~g))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(T+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+N&4294967295}r.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var _=g-this.blockSize,S=this.B,T=this.h,N=0;N<g;){if(T==0)for(;N<=_;)i(this,b,N),N+=this.blockSize;if(typeof b=="string"){for(;N<g;)if(S[T++]=b.charCodeAt(N++),T==this.blockSize){i(this,S),T=0;break}}else for(;N<g;)if(S[T++]=b[N++],T==this.blockSize){i(this,S),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var _=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=_&255,_/=256;for(this.u(b),b=Array(16),g=_=0;4>g;++g)for(var S=0;32>S;S+=8)b[_++]=this.g[g]>>>S&255;return b};function s(b,g){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=g(b)}function l(b,g){this.h=g;for(var _=[],S=!0,T=b.length-1;0<=T;T--){var N=b[T]|0;S&&N==g||(_[T]=N,S=!1)}this.g=_}var c={};function d(b){return-128<=b&&128>b?s(b,function(g){return new l([g|0],0>g?-1:0)}):new l([b|0],0>b?-1:0)}function p(b){if(isNaN(b)||!isFinite(b))return y;if(0>b)return O(p(-b));for(var g=[],_=1,S=0;b>=_;S++)g[S]=b/_|0,_*=4294967296;return new l(g,0)}function w(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return O(w(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=p(Math.pow(g,8)),S=y,T=0;T<b.length;T+=8){var N=Math.min(8,b.length-T),k=parseInt(b.substring(T,T+N),g);8>N?(N=p(Math.pow(g,N)),S=S.j(N).add(p(k))):(S=S.j(_),S=S.add(p(k)))}return S}var y=d(0),x=d(1),j=d(16777216);e=l.prototype,e.m=function(){if(R(this))return-O(this).m();for(var b=0,g=1,_=0;_<this.g.length;_++){var S=this.i(_);b+=(0<=S?S:4294967296+S)*g,g*=4294967296}return b},e.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(R(this))return"-"+O(this).toString(b);for(var g=p(Math.pow(b,6)),_=this,S="";;){var T=I(_,g).g;_=E(_,T.j(g));var N=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=T,C(_))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},e.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function R(b){return b.h==-1}e.l=function(b){return b=E(this,b),R(b)?-1:C(b)?0:1};function O(b){for(var g=b.g.length,_=[],S=0;S<g;S++)_[S]=~b.g[S];return new l(_,~b.h).add(x)}e.abs=function(){return R(this)?O(this):this},e.add=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],S=0,T=0;T<=g;T++){var N=S+(this.i(T)&65535)+(b.i(T)&65535),k=(N>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);S=k>>>16,N&=65535,k&=65535,_[T]=k<<16|N}return new l(_,_[_.length-1]&-2147483648?-1:0)};function E(b,g){return b.add(O(g))}e.j=function(b){if(C(this)||C(b))return y;if(R(this))return R(b)?O(this).j(O(b)):O(O(this).j(b));if(R(b))return O(this.j(O(b)));if(0>this.l(j)&&0>b.l(j))return p(this.m()*b.m());for(var g=this.g.length+b.g.length,_=[],S=0;S<2*g;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(var T=0;T<b.g.length;T++){var N=this.i(S)>>>16,k=this.i(S)&65535,ge=b.i(T)>>>16,Hn=b.i(T)&65535;_[2*S+2*T]+=k*Hn,m(_,2*S+2*T),_[2*S+2*T+1]+=N*Hn,m(_,2*S+2*T+1),_[2*S+2*T+1]+=k*ge,m(_,2*S+2*T+1),_[2*S+2*T+2]+=N*ge,m(_,2*S+2*T+2)}for(S=0;S<g;S++)_[S]=_[2*S+1]<<16|_[2*S];for(S=g;S<2*g;S++)_[S]=0;return new l(_,0)};function m(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function v(b,g){this.g=b,this.h=g}function I(b,g){if(C(g))throw Error("division by zero");if(C(b))return new v(y,y);if(R(b))return g=I(O(b),g),new v(O(g.g),O(g.h));if(R(g))return g=I(b,O(g)),new v(O(g.g),g.h);if(30<b.g.length){if(R(b)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var _=x,S=g;0>=S.l(b);)_=L(_),S=L(S);var T=z(_,1),N=z(S,1);for(S=z(S,2),_=z(_,2);!C(S);){var k=N.add(S);0>=k.l(b)&&(T=T.add(_),N=k),S=z(S,1),_=z(_,1)}return g=E(b,T.j(g)),new v(T,g)}for(T=y;0<=b.l(g);){for(_=Math.max(1,Math.floor(b.m()/g.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=p(_),k=N.j(g);R(k)||0<k.l(b);)_-=S,N=p(_),k=N.j(g);C(N)&&(N=x),T=T.add(N),b=E(b,k)}return new v(T,b)}e.A=function(b){return I(this,b).h},e.and=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],S=0;S<g;S++)_[S]=this.i(S)&b.i(S);return new l(_,this.h&b.h)},e.or=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],S=0;S<g;S++)_[S]=this.i(S)|b.i(S);return new l(_,this.h|b.h)},e.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],S=0;S<g;S++)_[S]=this.i(S)^b.i(S);return new l(_,this.h^b.h)};function L(b){for(var g=b.g.length+1,_=[],S=0;S<g;S++)_[S]=b.i(S)<<1|b.i(S-1)>>>31;return new l(_,b.h)}function z(b,g){var _=g>>5;g%=32;for(var S=b.g.length-_,T=[],N=0;N<S;N++)T[N]=0<g?b.i(N+_)>>>g|b.i(N+_+1)<<32-g:b.i(N+_);return new l(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=w,Hv=l}).apply(typeof uf<"u"?uf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var P=o[f];if(!(P in h))break e;h=h[P]}o=o[o.length-1],f=h[o],u=u(f),u!=f&&u!=null&&t(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,f=!1,P={next:function(){if(!f&&h<o.length){var D=h++;return{value:u(D,o[D]),done:!1}}return f=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function p(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function w(o,u,h){return o.call.apply(o.bind,arguments)}function y(o,u,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,f),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function x(o,u,h){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:y,x.apply(null,arguments)}function j(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,P,D){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return u.prototype[P].apply(f,U)}}function R(o){const u=o.length;if(0<u){const h=Array(u);for(let f=0;f<u;f++)h[f]=o[f];return h}return[]}function O(o,u){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(d(f)){const P=o.length||0,D=f.length||0;o.length=P+D;for(let U=0;U<D;U++)o[P+U]=f[U]}else o.push(f)}}class E{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function m(o){return/^[\s\xa0]*$/.test(o)}function v(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function I(o){return I[" "](o),o}I[" "]=function(){};var L=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function z(o,u,h){for(const f in o)u.call(h,o[f],f,o)}function b(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function g(o){const u={};for(const h in o)u[h]=o[h];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,u){let h,f;for(let P=1;P<arguments.length;P++){f=arguments[P];for(h in f)o[h]=f[h];for(let D=0;D<_.length;D++)h=_[D],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function T(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function N(o){c.setTimeout(()=>{throw o},0)}function k(){var o=H;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ge{constructor(){this.h=this.g=null}add(u,h){const f=Hn.get();f.set(u,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Hn=new E(()=>new ii,o=>o.reset());class ii{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,F=!1,H=new ge,W=()=>{const o=c.Promise.resolve(void 0);Ot=()=>{o.then(se)}};var se=()=>{for(var o;o=k();){try{o.h.call(o.g)}catch(h){N(h)}var u=Hn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Lt(o,u){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(L){e:{try{I(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:zt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Lt.aa.h.call(this)}}C(Lt,ue);var zt={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mt="closure_listenable_"+(1e6*Math.random()|0),sy=0;function oy(o,u,h,f,P){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!f,this.ha=P,this.key=++sy,this.da=this.fa=!1}function Ns(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ts(o){this.src=o,this.g={},this.h=0}Ts.prototype.add=function(o,u,h,f,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var U=La(o,u,f,P);return-1<U?(u=o[U],h||(u.fa=!1)):(u=new oy(u,this.src,D,!!f,P),u.fa=h,o.push(u)),u};function Da(o,u){var h=u.type;if(h in o.g){var f=o.g[h],P=Array.prototype.indexOf.call(f,u,void 0),D;(D=0<=P)&&Array.prototype.splice.call(f,P,1),D&&(Ns(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function La(o,u,h,f){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==u&&D.capture==!!h&&D.ha==f)return P}return-1}var za="closure_lm_"+(1e6*Math.random()|0),Ma={};function yd(o,u,h,f,P){if(Array.isArray(u)){for(var D=0;D<u.length;D++)yd(o,u[D],h,f,P);return null}return h=_d(h),o&&o[Mt]?o.K(u,h,p(f)?!!f.capture:!1,P):ay(o,u,h,!1,f,P)}function ay(o,u,h,f,P,D){if(!u)throw Error("Invalid event type");var U=p(P)?!!P.capture:!!P,Z=Fa(o);if(Z||(o[za]=Z=new Ts(o)),h=Z.add(u,h,f,U,D),h.proxy)return h;if(f=ly(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Dt||(P=U),P===void 0&&(P=!1),o.addEventListener(u.toString(),f,P);else if(o.attachEvent)o.attachEvent(wd(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ly(){function o(h){return u.call(o.src,o.listener,h)}const u=cy;return o}function xd(o,u,h,f,P){if(Array.isArray(u))for(var D=0;D<u.length;D++)xd(o,u[D],h,f,P);else f=p(f)?!!f.capture:!!f,h=_d(h),o&&o[Mt]?(o=o.i,u=String(u).toString(),u in o.g&&(D=o.g[u],h=La(D,h,f,P),-1<h&&(Ns(D[h]),Array.prototype.splice.call(D,h,1),D.length==0&&(delete o.g[u],o.h--)))):o&&(o=Fa(o))&&(u=o.g[u.toString()],o=-1,u&&(o=La(u,h,f,P)),(h=-1<o?u[o]:null)&&Ua(h))}function Ua(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Mt])Da(u.i,o);else{var h=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(h,f,o.capture):u.detachEvent?u.detachEvent(wd(h),f):u.addListener&&u.removeListener&&u.removeListener(f),(h=Fa(u))?(Da(h,o),h.h==0&&(h.src=null,u[za]=null)):Ns(o)}}}function wd(o){return o in Ma?Ma[o]:Ma[o]="on"+o}function cy(o,u){if(o.da)o=!0;else{u=new Lt(u,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ua(o),o=h.call(f,u)}return o}function Fa(o){return o=o[za],o instanceof Ts?o:null}var $a="__closure_events_fn_"+(1e9*Math.random()>>>0);function _d(o){return typeof o=="function"?o:(o[$a]||(o[$a]=function(u){return o.handleEvent(u)}),o[$a])}function Se(){Q.call(this),this.i=new Ts(this),this.M=this,this.F=null}C(Se,Q),Se.prototype[Mt]=!0,Se.prototype.removeEventListener=function(o,u,h,f){xd(this,o,u,h,f)};function Ae(o,u){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new ue(u,o);else if(u instanceof ue)u.target=u.target||o;else{var P=u;u=new ue(f,o),S(u,P)}if(P=!0,h)for(var D=h.length-1;0<=D;D--){var U=u.g=h[D];P=Cs(U,f,!0,u)&&P}if(U=u.g=o,P=Cs(U,f,!0,u)&&P,P=Cs(U,f,!1,u)&&P,h)for(D=0;D<h.length;D++)U=u.g=h[D],P=Cs(U,f,!1,u)&&P}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],f=0;f<h.length;f++)Ns(h[f]);delete o.g[u],o.h--}}this.F=null},Se.prototype.K=function(o,u,h,f){return this.i.add(String(o),u,!1,h,f)},Se.prototype.L=function(o,u,h,f){return this.i.add(String(o),u,!0,h,f)};function Cs(o,u,h,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,D=0;D<u.length;++D){var U=u[D];if(U&&!U.da&&U.capture==h){var Z=U.listener,_e=U.ha||U.src;U.fa&&Da(o.i,U),P=Z.call(_e,f)!==!1&&P}}return P&&!f.defaultPrevented}function bd(o,u,h){if(typeof o=="function")h&&(o=x(o,h));else if(o&&typeof o.handleEvent=="function")o=x(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function kd(o){o.g=bd(()=>{o.g=null,o.i&&(o.i=!1,kd(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class uy extends Q{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:kd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(o){Q.call(this),this.h=o,this.g={}}C(si,Q);var Ed=[];function Sd(o){z(o.g,function(u,h){this.g.hasOwnProperty(h)&&Ua(u)},o),o.g={}}si.prototype.N=function(){si.aa.N.call(this),Sd(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ba=c.JSON.stringify,dy=c.JSON.parse,hy=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Va(){}Va.prototype.h=null;function jd(o){return o.h||(o.h=o.i())}function py(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ha(){ue.call(this,"d")}C(Ha,ue);function Wa(){ue.call(this,"c")}C(Wa,ue);var fr={},Nd=null;function qa(){return Nd=Nd||new Se}fr.La="serverreachability";function Td(o){ue.call(this,fr.La,o)}C(Td,ue);function ai(o){const u=qa();Ae(u,new Td(u))}fr.STAT_EVENT="statevent";function Cd(o,u){ue.call(this,fr.STAT_EVENT,o),this.stat=u}C(Cd,ue);function Oe(o){const u=qa();Ae(u,new Cd(u,o))}fr.Ma="timingevent";function Id(o,u){ue.call(this,fr.Ma,o),this.size=u}C(Id,ue);function li(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ci(){this.g=!0}ci.prototype.xa=function(){this.g=!1};function fy(o,u,h,f,P,D){o.info(function(){if(o.g)if(D)for(var U="",Z=D.split("&"),_e=0;_e<Z.length;_e++){var X=Z[_e].split("=");if(1<X.length){var je=X[0];X=X[1];var Ne=je.split("_");U=2<=Ne.length&&Ne[1]=="type"?U+(je+"="+X+"&"):U+(je+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+f+") [attempt "+P+"]: "+u+`
`+h+`
`+U})}function gy(o,u,h,f,P,D,U){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+P+"]: "+u+`
`+h+`
`+D+" "+U})}function gr(o,u,h,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+vy(o,h)+(f?" "+f:"")})}function my(o,u){o.info(function(){return"TIMEOUT: "+u})}ci.prototype.info=function(){};function vy(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var P=f[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Ba(h)}catch{return u}}var Ka={NO_ERROR:0,TIMEOUT:8},yy={},Ga;function Is(){}C(Is,Va),Is.prototype.g=function(){return new XMLHttpRequest},Is.prototype.i=function(){return{}},Ga=new Is;function cn(o,u,h,f){this.j=o,this.i=u,this.l=h,this.R=f||1,this.U=new si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pd}function Pd(){this.i=null,this.g="",this.h=!1}var Rd={},Xa={};function Ja(o,u,h){o.L=1,o.v=Os(Ut(u)),o.m=h,o.P=!0,Ad(o,null)}function Ad(o,u){o.F=Date.now(),Ps(o),o.A=Ut(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Kd(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Pd,o.g=dh(o.j,h?u:null,!o.m),0<o.O&&(o.M=new uy(x(o.Y,o,o.g),o.O)),u=o.U,h=o.g,f=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ed[0]=P.toString()),P=Ed);for(var D=0;D<P.length;D++){var U=yd(h,P[D],f||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ai(),fy(o.i,o.u,o.A,o.l,o.R,o.m)}cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Ft(o)==3?u.j():this.Y(o)},cn.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=Ft(this.g);var u=this.g.Ba();const yr=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||eh(this.g)))){this.J||Ne!=4||u==7||(u==8||0>=yr?ai(3):ai(2)),Ya(this);var h=this.g.Z();this.X=h;t:if(Od(this)){var f=eh(this.g);o="";var P=f.length,D=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),ui(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(f[u],{stream:!(D&&u==P-1)});f.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,gy(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(Z)){var X=Z;break t}}X=null}if(h=X)gr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qa(this,h);else{this.o=!1,this.s=3,Oe(12),Wn(this),ui(this);break e}}if(this.P){h=!0;let at;for(;!this.J&&this.C<U.length;)if(at=xy(this,U),at==Xa){Ne==4&&(this.s=4,Oe(14),h=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Rd){this.s=4,Oe(15),gr(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else gr(this.i,this.l,at,null),Qa(this,at);if(Od(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||U.length!=0||this.h.h||(this.s=1,Oe(16),h=!1),this.o=this.o&&h,!h)gr(this.i,this.l,U,"[Invalid Chunked Response]"),Wn(this),ui(this);else if(0<U.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),il(je),je.M=!0,Oe(11))}}else gr(this.i,this.l,U,null),Qa(this,U);Ne==4&&Wn(this),this.o&&!this.J&&(Ne==4?ah(this.j,this):(this.o=!1,Ps(this)))}else Ly(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Wn(this),ui(this)}}}catch{}finally{}};function Od(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function xy(o,u){var h=o.C,f=u.indexOf(`
`,h);return f==-1?Xa:(h=Number(u.substring(h,f)),isNaN(h)?Rd:(f+=1,f+h>u.length?Xa:(u=u.slice(f,f+h),o.C=f+h,u)))}cn.prototype.cancel=function(){this.J=!0,Wn(this)};function Ps(o){o.S=Date.now()+o.I,Dd(o,o.I)}function Dd(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=li(x(o.ba,o),u)}function Ya(o){o.B&&(c.clearTimeout(o.B),o.B=null)}cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(my(this.i,this.A),this.L!=2&&(ai(),Oe(17)),Wn(this),this.s=2,ui(this)):Dd(this,this.S-o)};function ui(o){o.j.G==0||o.J||ah(o.j,o)}function Wn(o){Ya(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Sd(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Qa(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Za(h.h,o))){if(!o.K&&Za(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var P=f;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Fs(h),Ms(h);else break e;rl(h),Oe(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=li(x(h.Za,h),6e3));if(1>=Md(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kn(h,11)}else if((o.K||h.g==o)&&Fs(h),!m(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let X=P[u];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const je=X[3];je!=null&&(h.la=je,h.j.info("VER="+h.la));const Ne=X[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));const yr=X[5];yr!=null&&typeof yr=="number"&&0<yr&&(f=1.5*yr,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const at=o.g;if(at){const $s=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($s){var D=f.h;D.g||$s.indexOf("spdy")==-1&&$s.indexOf("quic")==-1&&$s.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(el(D,D.h),D.h=null))}if(f.D){const sl=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;sl&&(f.ya=sl,te(f.I,f.D,sl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var U=o;if(f.qa=uh(f,f.J?f.ia:null,f.W),U.K){Ud(f.h,U);var Z=U,_e=f.L;_e&&(Z.I=_e),Z.B&&(Ya(Z),Ps(Z)),f.g=U}else sh(f);0<h.i.length&&Us(h)}else X[0]!="stop"&&X[0]!="close"||Kn(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Kn(h,7):nl(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}ai(4)}catch{}}var wy=class{constructor(o,u){this.g=o,this.map=u}};function Ld(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Md(o){return o.h?1:o.g?o.g.size:0}function Za(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function el(o,u){o.g?o.g.add(u):o.h=u}function Ud(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ld.prototype.cancel=function(){if(this.i=Fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return R(o.i)}function _y(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],h=o.length,f=0;f<h;f++)u.push(o[f]);return u}u=[],h=0;for(f in o)u[h++]=o[f];return u}function by(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const f in o)u[h++]=f;return u}}}function $d(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=by(o),f=_y(o),P=f.length,D=0;D<P;D++)u.call(void 0,f[D],h&&h[D],o)}var Bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ky(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),P=null;if(0<=f){var D=o[h].substring(0,f);P=o[h].substring(f+1)}else D=o[h];u(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function qn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof qn){this.h=o.h,Rs(this,o.j),this.o=o.o,this.g=o.g,As(this,o.s),this.l=o.l;var u=o.i,h=new pi;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Vd(this,h),this.m=o.m}else o&&(u=String(o).match(Bd))?(this.h=!1,Rs(this,u[1]||"",!0),this.o=di(u[2]||""),this.g=di(u[3]||"",!0),As(this,u[4]),this.l=di(u[5]||"",!0),Vd(this,u[6]||"",!0),this.m=di(u[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}qn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(hi(u,Hd,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(hi(u,Hd,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(hi(h,h.charAt(0)=="/"?jy:Sy,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",hi(h,Ty)),o.join("")};function Ut(o){return new qn(o)}function Rs(o,u,h){o.j=h?di(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function As(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Vd(o,u,h){u instanceof pi?(o.i=u,Cy(o.i,o.h)):(h||(u=hi(u,Ny)),o.i=new pi(u,o.h))}function te(o,u,h){o.i.set(u,h)}function Os(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function di(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function hi(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Ey),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ey(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Hd=/[#\/\?@]/g,Sy=/[#\?:]/g,jy=/[#\?]/g,Ny=/[#\?@]/g,Ty=/#/g;function pi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function un(o){o.g||(o.g=new Map,o.h=0,o.i&&ky(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}e=pi.prototype,e.add=function(o,u){un(this),this.i=null,o=mr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function Wd(o,u){un(o),u=mr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function qd(o,u){return un(o),u=mr(o,u),o.g.has(u)}e.forEach=function(o,u){un(this),this.g.forEach(function(h,f){h.forEach(function(P){o.call(u,P,f,this)},this)},this)},e.na=function(){un(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let f=0;f<u.length;f++){const P=o[f];for(let D=0;D<P.length;D++)h.push(u[f])}return h},e.V=function(o){un(this);let u=[];if(typeof o=="string")qd(this,o)&&(u=u.concat(this.g.get(mr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},e.set=function(o,u){return un(this),this.i=null,o=mr(this,o),qd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Kd(o,u,h){Wd(o,u),0<h.length&&(o.i=null,o.g.set(mr(o,u),R(h)),o.h+=h.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var f=u[h];const D=encodeURIComponent(String(f)),U=this.V(f);for(f=0;f<U.length;f++){var P=D;U[f]!==""&&(P+="="+encodeURIComponent(String(U[f]))),o.push(P)}}return this.i=o.join("&")};function mr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Cy(o,u){u&&!o.j&&(un(o),o.i=null,o.g.forEach(function(h,f){var P=f.toLowerCase();f!=P&&(Wd(this,f),Kd(this,P,h))},o)),o.j=u}function Iy(o,u){const h=new ci;if(c.Image){const f=new Image;f.onload=j(dn,h,"TestLoadImage: loaded",!0,u,f),f.onerror=j(dn,h,"TestLoadImage: error",!1,u,f),f.onabort=j(dn,h,"TestLoadImage: abort",!1,u,f),f.ontimeout=j(dn,h,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function Py(o,u){const h=new ci,f=new AbortController,P=setTimeout(()=>{f.abort(),dn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(D=>{clearTimeout(P),D.ok?dn(h,"TestPingServer: ok",!0,u):dn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),dn(h,"TestPingServer: error",!1,u)})}function dn(o,u,h,f,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),f(h)}catch{}}function Ry(){this.g=new hy}function Ay(o,u,h){const f=h||"";try{$d(o,function(P,D){let U=P;p(P)&&(U=Ba(P)),u.push(f+D+"="+encodeURIComponent(U))})}catch(P){throw u.push(f+"type="+encodeURIComponent("_badmap")),P}}function Ds(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Ds,Va),Ds.prototype.g=function(){return new Ls(this.l,this.j)},Ds.prototype.i=function(o){return function(){return o}}({});function Ls(o,u){Se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ls,Se),e=Ls.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,gi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?fi(this):gi(this),this.readyState==3&&Gd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,fi(this))},e.Qa=function(o){this.g&&(this.response=o,fi(this))},e.ga=function(){this.g&&fi(this)};function fi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,gi(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function gi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xd(o){let u="";return z(o,function(h,f){u+=f,u+=":",u+=h,u+=`\r
`}),u}function tl(o,u,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Xd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,u,h))}function de(o){Se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(de,Se);var Oy=/^https?$/i,Dy=["POST","PUT"];e=de.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ga.g(),this.v=this.o?jd(this.o):jd(Ga),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){Jd(this,D);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var P in f)h.set(P,f[P]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const D of f.keys())h.set(D,f.get(D));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Dy,u,void 0))||f||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of h)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zd(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){Jd(this,D)}};function Jd(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Yd(o),zs(o)}function Yd(o){o.A||(o.A=!0,Ae(o,"complete"),Ae(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ae(this,"complete"),Ae(this,"abort"),zs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),de.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Qd(this):this.bb())},e.bb=function(){Qd(this)};function Qd(o){if(o.h&&typeof l<"u"&&(!o.v[1]||Ft(o)!=4||o.Z()!=2)){if(o.u&&Ft(o)==4)bd(o.Ea,0,o);else if(Ae(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var f;if(f=U===0){var P=String(o.D).match(Bd)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),f=!Oy.test(P?P.toLowerCase():"")}h=f}if(h)Ae(o,"complete"),Ae(o,"success");else{o.m=6;try{var D=2<Ft(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Yd(o)}}finally{zs(o)}}}}function zs(o,u){if(o.g){Zd(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ae(o,"ready");try{h.onreadystatechange=f}catch{}}}function Zd(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),dy(u)}};function eh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ly(o){const u={};o=(o.g&&2<=Ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(m(o[f]))continue;var h=T(o[f]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=u[P]||[];u[P]=D,D.push(h)}b(u,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mi(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function th(o){this.Aa=0,this.i=[],this.j=new ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mi("baseRetryDelayMs",5e3,o),this.cb=mi("retryDelaySeedMs",1e4,o),this.Wa=mi("forwardChannelMaxRetries",2,o),this.wa=mi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ld(o&&o.concurrentRequestLimit),this.Da=new Ry,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=th.prototype,e.la=8,e.G=1,e.connect=function(o,u,h,f){Oe(0),this.W=o,this.H=u||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=uh(this,null,this.W),Us(this)};function nl(o){if(nh(o),o.G==3){var u=o.U++,h=Ut(o.I);if(te(h,"SID",o.K),te(h,"RID",u),te(h,"TYPE","terminate"),vi(o,h),u=new cn(o,o.j,u),u.L=2,u.v=Os(Ut(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=dh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ps(u)}ch(o)}function Ms(o){o.g&&(il(o),o.g.cancel(),o.g=null)}function nh(o){Ms(o),o.u&&(c.clearTimeout(o.u),o.u=null),Fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Us(o){if(!zd(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ot||W(),F||(Ot(),F=!0),H.add(u,o),o.B=0}}function zy(o,u){return Md(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=li(x(o.Ga,o,u),lh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new cn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=g(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=ih(this,P,u),h=Ut(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),vi(this,h),D&&(this.O?u="headers="+encodeURIComponent(String(Xd(D)))+"&"+u:this.m&&tl(h,this.m,D)),el(this.h,P),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",u),te(h,"SID","null"),P.T=!0,Ja(P,h,null)):Ja(P,h,u),this.G=2}}else this.G==3&&(o?rh(this,o):this.i.length==0||zd(this.h)||rh(this))};function rh(o,u){var h;u?h=u.l:h=o.U++;const f=Ut(o.I);te(f,"SID",o.K),te(f,"RID",h),te(f,"AID",o.T),vi(o,f),o.m&&o.o&&tl(f,o.m,o.o),h=new cn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=ih(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),el(o.h,h),Ja(h,f,u)}function vi(o,u){o.H&&z(o.H,function(h,f){te(u,f,h)}),o.l&&$d({},function(h,f){te(u,f,h)})}function ih(o,u,h){h=Math.min(o.i.length,h);var f=o.l?x(o.l.Na,o.l,o):null;e:{var P=o.i;let D=-1;for(;;){const U=["count="+h];D==-1?0<h?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let Z=!0;for(let _e=0;_e<h;_e++){let X=P[_e].g;const je=P[_e].map;if(X-=D,0>X)D=Math.max(0,P[_e].g-100),Z=!1;else try{Ay(je,U,"req"+X+"_")}catch{f&&f(je)}}if(Z){f=U.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,f}function sh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ot||W(),F||(Ot(),F=!0),H.add(u,o),o.v=0}}function rl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=li(x(o.Fa,o),lh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=li(x(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Ms(this),oh(this))};function il(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function oh(o){o.g=new cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ut(o.qa);te(u,"RID","rpc"),te(u,"SID",o.K),te(u,"AID",o.T),te(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(u,"TO",o.ja),te(u,"TYPE","xmlhttp"),vi(o,u),o.m&&o.o&&tl(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Os(Ut(u)),h.m=null,h.P=!0,Ad(h,o)}e.Za=function(){this.C!=null&&(this.C=null,Ms(this),rl(this),Oe(19))};function Fs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ah(o,u){var h=null;if(o.g==u){Fs(o),il(o),o.g=null;var f=2}else if(Za(o.h,u))h=u.D,Ud(o.h,u),f=1;else return;if(o.G!=0){if(u.o)if(f==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;f=qa(),Ae(f,new Id(f,h)),Us(o)}else sh(o);else if(P=u.s,P==3||P==0&&0<u.X||!(f==1&&zy(o,u)||f==2&&rl(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),P){case 1:Kn(o,5);break;case 4:Kn(o,10);break;case 3:Kn(o,6);break;default:Kn(o,2)}}}function lh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Kn(o,u){if(o.j.info("Error code "+u),u==2){var h=x(o.fb,o),f=o.Xa;const P=!f;f=new qn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Rs(f,"https"),Os(f),P?Iy(f.toString(),h):Py(f.toString(),h)}else Oe(2);o.G=0,o.l&&o.l.sa(u),ch(o),nh(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function ch(o){if(o.G=0,o.ka=[],o.l){const u=Fd(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function uh(o,u,h){var f=h instanceof qn?Ut(h):new qn(h);if(f.g!="")u&&(f.g=u+"."+f.g),As(f,f.s);else{var P=c.location;f=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var D=new qn(null);f&&Rs(D,f),u&&(D.g=u),P&&As(D,P),h&&(D.l=h),f=D}return h=o.D,u=o.ya,h&&u&&te(f,h,u),te(f,"VER",o.la),vi(o,f),f}function dh(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new de(new Ds({eb:h})):new de(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function hh(){}e=hh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function et(o,u){Se.call(this),this.g=new th(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!m(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!m(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new vr(this)}C(et,Se),et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},et.prototype.close=function(){nl(this.g)},et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ba(o),o=h);u.i.push(new wy(u.Ya++,o)),u.G==3&&Us(u)},et.prototype.N=function(){this.g.l=null,delete this.j,nl(this.g),delete this.g,et.aa.N.call(this)};function ph(o){Ha.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(ph,Ha);function fh(){Wa.call(this),this.status=1}C(fh,Wa);function vr(o){this.g=o}C(vr,hh),vr.prototype.ua=function(){Ae(this.g,"a")},vr.prototype.ta=function(o){Ae(this.g,new ph(o))},vr.prototype.sa=function(o){Ae(this.g,new fh)},vr.prototype.ra=function(){Ae(this.g,"b")},et.prototype.send=et.prototype.o,et.prototype.open=et.prototype.m,et.prototype.close=et.prototype.close,Ka.NO_ERROR=0,Ka.TIMEOUT=8,Ka.HTTP_ERROR=6,yy.COMPLETE="complete",py.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Se.prototype.listen=Se.prototype.K,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const df="@firebase/firestore";/**
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
 */const Jr=new Zu("@firebase/firestore");function ht(e,...t){if(Jr.logLevel<=J.DEBUG){const n=t.map(dd);Jr.debug(`Firestore (${Ss}): ${e}`,...n)}}function Wv(e,...t){if(Jr.logLevel<=J.ERROR){const n=t.map(dd);Jr.error(`Firestore (${Ss}): ${e}`,...n)}}function fk(e,...t){if(Jr.logLevel<=J.WARN){const n=t.map(dd);Jr.warn(`Firestore (${Ss}): ${e}`,...n)}}function dd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function hd(e="Unexpected state"){const t=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+e;throw Wv(t),new Error(t)}function Vi(e,t){e||hd()}/**
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
 */const Be={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ve extends Pt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class mk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vk{constructor(t){this.t=t,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Vi(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let s=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hi,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const d=s;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hi)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vi(typeof r.accessToken=="string"),new qv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Vi(t===null||typeof t=="string"),new Le(t)}}class yk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new yk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _k{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Vi(this.o===void 0);const r=s=>{s.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const l=s.token!==this.R;return this.R=s.token,ht("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vi(typeof n.token=="string"),this.R=n.token,new wk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function bk(e){return e.name==="IndexedDbTransactionError"}class oa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof oa&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var hf,K;(K=hf||(hf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Hv([4294967295,4294967295],0);function Fl(){return typeof document<"u"?document:null}/**
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
 */class kk{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class pd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const l=Date.now()+r,c=new pd(t,n,l,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(Be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var pf,ff;(ff=pf||(pf={})).ea="default",ff.Cache="cache";/**
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
 */function Ek(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Map;function Sk(e,t,n,r){if(t===!0&&r===!0)throw new Ve(Be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function jk(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":hd()}function Nk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(Be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jk(e);throw new Ve(Be.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(Be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(Be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Sk("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ek((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ve(Be.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Kv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(Be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ve(Be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gk;switch(r.type){case"firstParty":return new xk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ve(Be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gf.get(n);r&&(ht("ComponentProvider","Removing Datastore"),gf.delete(n),r.terminate())}(this),Promise.resolve()}}function Tk(e,t,n,r={}){var i;const s=(e=Nk(e,Kv))._getSettings(),l=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==l&&fk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:l,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Le.MOCK_USER;else{c=iv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Ve(Be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Le(p)}e._authCredentials=new mk(new qv(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kk(this,"async_queue_retry"),this.Vu=()=>{const r=Fl();r&&ht("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Fl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Hi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!bk(t))throw t;ht("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw Wv("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=pd.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&hd()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Ck extends Kv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new vf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new vf(t),this._firestoreClient=void 0,await t}}}function Ik(e,t){const n=typeof e=="object"?e:td(),r=typeof e=="string"?e:"(default)",i=Ca(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=tv("firestore");s&&Tk(i,...s)}return i}(function(t,n=!0){(function(i){Ss=i})(pr),lr(new Mn("firestore",(r,{instanceIdentifier:i,options:s})=>{const l=r.getProvider("app").getImmediate(),c=new Ck(new vk(r.getProvider("auth-internal")),new _k(r.getProvider("app-check-internal")),function(p,w){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Ve(Be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(p.options.projectId,w)}(l,i),l);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Nt(df,"4.7.3",t),Nt(df,"4.7.3","esm2017")})();/**
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
 */const Gv="firebasestorage.googleapis.com",Pk="storageBucket",Rk=2*60*1e3,Ak=10*60*1e3;/**
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
 */class At extends Pt{constructor(t,n,r=0){super($l(t),`Firebase Storage: ${n} (${$l(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,At.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return $l(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var It;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(It||(It={}));function $l(e){return"storage/"+e}function Ok(){const e="An unknown error occurred, please check the error payload for server response.";return new At(It.UNKNOWN,e)}function Dk(){return new At(It.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lk(){return new At(It.CANCELED,"User canceled the upload/download.")}function zk(e){return new At(It.INVALID_URL,"Invalid URL '"+e+"'.")}function Mk(e){return new At(It.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function yf(e){return new At(It.INVALID_ARGUMENT,e)}function Xv(){return new At(It.APP_DELETED,"The Firebase app was deleted.")}function Uk(e){return new At(It.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class pt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=pt.makeFromUrl(t,n)}catch{return new pt(t,"")}if(r.path==="")return r;throw Mk(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),d={bucket:1,path:3};function p(I){I.path_=decodeURIComponent(I.path)}const w="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",j=new RegExp(`^https?://${y}/${w}/b/${i}/o${x}`,"i"),C={bucket:1,path:3},R=n===Gv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${O}`,"i"),v=[{regex:c,indices:d,postModify:s},{regex:j,indices:C,postModify:p},{regex:E,indices:{bucket:1,path:2},postModify:p}];for(let I=0;I<v.length;I++){const L=v[I],z=L.regex.exec(t);if(z){const b=z[L.indices.bucket];let g=z[L.indices.path];g||(g=""),r=new pt(b,g),L.postModify(r);break}}if(r==null)throw zk(t);return r}}class Fk{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function $k(e,t,n){let r=1,i=null,s=null,l=!1,c=0;function d(){return c===2}let p=!1;function w(...O){p||(p=!0,t.apply(null,O))}function y(O){i=setTimeout(()=>{i=null,e(j,d())},O)}function x(){s&&clearTimeout(s)}function j(O,...E){if(p){x();return}if(O){x(),w.call(null,O,...E);return}if(d()||l){x(),w.call(null,O,...E);return}r<64&&(r*=2);let v;c===1?(c=2,v=0):v=(r+Math.random())*1e3,y(v)}let C=!1;function R(O){C||(C=!0,x(),!p&&(i!==null?(O||(c=2),clearTimeout(i),y(0)):O||(c=1)))}return y(0),s=setTimeout(()=>{l=!0,R(!0)},n),R}function Bk(e){e(!1)}/**
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
 */function Vk(e){return e!==void 0}function xf(e,t,n,r){if(r<t)throw yf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw yf(`Invalid value for '${e}'. Expected ${n} or less.`)}function Hk(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var aa;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(aa||(aa={}));/**
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
 */function Wk(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class qk{constructor(t,n,r,i,s,l,c,d,p,w,y,x=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=d,this.timeout_=p,this.progressCallback_=w,this.connectionFactory_=y,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,C)=>{this.resolve_=j,this.reject_=C,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ao(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const l=c=>{const d=c.loaded,p=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,p)};this.progressCallback_!==null&&s.addUploadProgressListener(l),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(l),this.pendingConnection_=null;const c=s.getErrorCode()===aa.NO_ERROR,d=s.getStatus();if(!c||Wk(d,this.additionalRetryCodes_)&&this.retry){const w=s.getErrorCode()===aa.ABORT;r(!1,new ao(!1,null,w));return}const p=this.successCodes_.indexOf(d)!==-1;r(!0,new ao(p,s))})},n=(r,i)=>{const s=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());Vk(d)?s(d):s()}catch(d){l(d)}else if(c!==null){const d=Ok();d.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,d)):l(d)}else if(i.canceled){const d=this.appDelete_?Xv():Lk();l(d)}else{const d=Dk();l(d)}};this.canceled_?n(!1,new ao(!1,null,!0)):this.backoffId_=$k(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Bk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ao{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Kk(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Gk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Jk(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Yk(e,t,n,r,i,s,l=!0){const c=Hk(e.urlParams),d=e.url+c,p=Object.assign({},e.headers);return Xk(p,t),Kk(p,n),Gk(p,s),Jk(p,r),new qk(d,e.method,p,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
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
 */function Qk(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Zk(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class la{constructor(t,n){this._service=t,n instanceof pt?this._location=n:this._location=pt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new la(t,n)}get root(){const t=new pt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zk(this._location.path)}get storage(){return this._service}get parent(){const t=Qk(this._location.path);if(t===null)return null;const n=new pt(this._location.bucket,t);return new la(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Uk(t)}}function wf(e,t){const n=t==null?void 0:t[Pk];return n==null?null:pt.makeFromBucketSpec(n,e)}function eE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:iv(i,e.app.options.projectId))}class tE{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Gv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rk,this._maxUploadRetryTime=Ak,this._requests=new Set,i!=null?this._bucket=pt.makeFromBucketSpec(i,this._host):this._bucket=wf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=pt.makeFromBucketSpec(this._url,t):this._bucket=wf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){xf("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){xf("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new la(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new Fk(Xv());{const l=Yk(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const _f="@firebase/storage",bf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="storage";function nE(e=td(),t){e=xt(e);const r=Ca(e,Jv).getImmediate({identifier:t}),i=tv("storage");return i&&rE(r,...i),r}function rE(e,t,n,r={}){eE(e,t,n,r)}function iE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new tE(n,r,i,t,pr)}function sE(){lr(new Mn(Jv,iE,"PUBLIC").setMultipleInstances(!0)),Nt(_f,bf,""),Nt(_f,bf,"esm2017")}sE();const oE={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},fd=av(oE),ji=uk(fd);Ik(fd);nE(fd);const Yv=A.createContext(void 0),aE=({children:e})=>{const[t,n]=A.useState(null),[r,i]=A.useState(!0),[s,l]=A.useState(null);A.useEffect(()=>{const j=Q_(ji,C=>{n(C),i(!1)});return()=>j()},[]);const x={user:t,loading:r,error:s,login:async(j,C)=>{try{l(null),i(!0),await K_(ji,j,C)}catch(R){const O=Bl(R.code);throw l(O),new Error(O)}finally{i(!1)}},register:async(j,C,R)=>{try{l(null),i(!0);const{user:O}=await q_(ji,j,C);R&&await X_(O,{displayName:R})}catch(O){const E=Bl(O.code);throw l(E),new Error(E)}finally{i(!1)}},logout:async()=>{try{l(null),await Z_(ji)}catch(j){throw l("Error al cerrar sesión"),j}},resetPassword:async j=>{try{l(null),await W_(ji,j)}catch(C){const R=Bl(C.code);throw l(R),new Error(R)}},clearError:()=>l(null)};return a.jsx(Yv.Provider,{value:x,children:e})},Qv=()=>{const e=A.useContext(Yv);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function Bl(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const _t=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=Qv(),i=on();return r?a.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[a.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),a.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?a.jsx(a.Fragment,{children:e}):a.jsx(_o,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const n=A.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:d,...p},w)=>A.createElement("svg",{ref:w,...lE,width:i,height:i,stroke:r,strokeWidth:l?Number(s)*24/Number(i):s,className:["lucide",`lucide-${cE(e)}`,c].join(" "),...p},[...t.map(([y,x])=>A.createElement(y,x)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=V("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=V("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=V("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=V("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=V("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=V("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=V("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=V("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=V("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=V("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=V("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=V("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=V("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=V("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=V("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=V("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=V("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=V("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=V("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=V("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=V("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=V("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=V("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=V("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=V("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=V("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=V("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=V("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),TE=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Jt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:da,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:js,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:Yr,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:kE,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:NE,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return a.jsxs("div",{className:"landing-page",children:[a.jsxs("nav",{className:"navbar",children:[a.jsxs("div",{className:"nav-brand",children:[a.jsx(Jt,{size:32}),a.jsx("span",{children:"Sistema Courier"})]}),a.jsxs("div",{className:"nav-links",children:[a.jsx("a",{href:"#features",children:"Características"}),a.jsx("a",{href:"#pricing",children:"Precios"}),a.jsx(Pe,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),a.jsx(Pe,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"hero-content",children:[a.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),a.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),a.jsxs("div",{className:"hero-buttons",children:[a.jsxs(Pe,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",a.jsx(ca,{size:20})]}),a.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),a.jsxs("div",{className:"hero-trust",children:[a.jsx("span",{children:"Confiado por +100 empresas de courier"}),a.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>a.jsx(Yc,{size:16,fill:"#f59e0b"},r))})]})]}),a.jsx("div",{className:"hero-image",children:a.jsxs("div",{className:"dashboard-preview",children:[a.jsx("div",{className:"preview-header",children:a.jsxs("div",{className:"dots",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})}),a.jsxs("div",{className:"preview-content",children:[a.jsx("div",{className:"mock-stat"}),a.jsx("div",{className:"mock-stat"}),a.jsx("div",{className:"mock-stat"}),a.jsx("div",{className:"mock-chart"})]})]})})]}),a.jsxs("section",{id:"features",className:"features",children:[a.jsx("h2",{children:"Todo lo que necesitas para operar"}),a.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),a.jsx("div",{className:"features-grid",children:t.map((n,r)=>a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:a.jsx(n.icon,{size:28})}),a.jsx("h3",{children:n.title}),a.jsx("p",{children:n.description})]},r))})]}),a.jsxs("section",{id:"pricing",className:"pricing",children:[a.jsx("h2",{children:"Planes simples y transparentes"}),a.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),a.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>a.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&a.jsx("span",{className:"popular-badge",children:"Más Popular"}),a.jsx("h3",{children:n.name}),a.jsx("p",{className:"plan-description",children:n.description}),a.jsxs("div",{className:"plan-price",children:[n.priceLabel&&a.jsx("span",{className:"price-label",children:n.priceLabel}),a.jsxs("span",{className:"price",children:["$",n.price]}),a.jsx("span",{className:"period",children:"/mes"})]}),a.jsx("ul",{className:"plan-features",children:n.features.map((i,s)=>a.jsxs("li",{children:[a.jsx(er,{size:16})," ",i]},s))}),a.jsx(Pe,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),a.jsxs("section",{className:"cta",children:[a.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),a.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),a.jsxs(Pe,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",a.jsx(ca,{size:24})]})]}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-content",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(Jt,{size:28}),a.jsx("span",{children:"Sistema Courier"}),a.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Producto"}),a.jsx("a",{href:"#features",children:"Características"}),a.jsx("a",{href:"#pricing",children:"Precios"}),a.jsx("a",{href:"/docs",children:"Documentación"})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Empresa"}),a.jsx("a",{href:"/about",children:"Nosotros"}),a.jsx("a",{href:"/contact",children:"Contacto"}),a.jsx("a",{href:"/blog",children:"Blog"})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Legal"}),a.jsx("a",{href:"/privacy",children:"Privacidad"}),a.jsx("a",{href:"/terms",children:"Términos"})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),a.jsx("style",{children:`
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
      `})]})},CE=()=>{const e=yt(),[t,n]=A.useState(1),[r,i]=A.useState(!1),[s,l]=A.useState(""),[c,d]=A.useState("idle"),[p,w]=A.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),y=E=>{const{name:m,value:v}=E.target;if(w({...p,[m]:v}),l(""),m==="company_name"){const I=v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);w(L=>({...L,subdomain:I})),I.length>=3&&x(I)}if(m==="subdomain"){const I=v.toLowerCase().replace(/[^a-z0-9-]/g,"");w(L=>({...L,subdomain:I})),I.length>=3&&x(I)}},x=async E=>{d("checking");try{const v=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:E})})).json();d(v.available?"available":"taken")}catch{d("idle")}},j=()=>p.company_name.trim()?p.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),C=()=>p.admin_name.trim()?p.admin_email.includes("@")?p.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):p.password!==p.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),R=()=>{t===1&&j()&&n(2)},O=async E=>{if(E.preventDefault(),!!C()){i(!0),l("");try{const m=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:p.company_name,subdomain:p.subdomain,admin_email:p.admin_email,admin_password:p.password,admin_name:p.admin_name})}),v=await m.json();if(!m.ok)throw new Error(v.error||"Error al crear la cuenta");e(`/onboarding?tenant=${v.tenant.subdomain}`)}catch(m){l(m.message)}finally{i(!1)}}};return a.jsxs("div",{className:"register-page",children:[a.jsxs("div",{className:"register-container",children:[a.jsxs("div",{className:"register-brand",children:[a.jsxs(Pe,{to:"/",className:"brand-logo",children:[a.jsx(Jt,{size:40}),a.jsx("span",{children:"Sistema Courier"})]}),a.jsxs("div",{className:"brand-content",children:[a.jsx("h2",{children:"Comienza tu prueba gratuita"}),a.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),a.jsxs("ul",{className:"brand-features",children:[a.jsxs("li",{children:[a.jsx(er,{size:20})," Configuración en minutos"]}),a.jsxs("li",{children:[a.jsx(er,{size:20})," Soporte incluido"]}),a.jsxs("li",{children:[a.jsx(er,{size:20})," Cancela cuando quieras"]})]})]})]}),a.jsxs("div",{className:"register-form-container",children:[a.jsxs("div",{className:"form-header",children:[a.jsx("h1",{children:"Crear cuenta"}),a.jsxs("p",{children:["Paso ",t," de 2"]})]}),a.jsxs("div",{className:"progress-bar",children:[a.jsx("div",{className:"progress-step active",children:"1"}),a.jsx("div",{className:"progress-line"}),a.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),s&&a.jsxs("div",{className:"error-message",children:[a.jsx(hs,{size:18}),s]}),a.jsx("form",{onSubmit:O,children:t===1?a.jsxs("div",{className:"form-step",children:[a.jsx("h3",{children:"Información de la empresa"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Nombre de la empresa"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(ua,{size:20}),a.jsx("input",{type:"text",name:"company_name",value:p.company_name,onChange:y,placeholder:"Mi Empresa de Courier",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Tu subdominio"}),a.jsxs("div",{className:"input-wrapper subdomain-input",children:[a.jsx(Yr,{size:20}),a.jsx("input",{type:"text",name:"subdomain",value:p.subdomain,onChange:y,placeholder:"miempresa",required:!0}),a.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&a.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&a.jsxs("span",{className:"subdomain-status available",children:[a.jsx(er,{size:14})," Disponible"]}),c==="taken"&&a.jsxs("span",{className:"subdomain-status taken",children:[a.jsx(hs,{size:14})," No disponible"]})]}),a.jsxs("button",{type:"button",onClick:R,className:"btn-next",children:["Continuar ",a.jsx(ca,{size:20})]})]}):a.jsxs("div",{className:"form-step",children:[a.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[a.jsx(Aa,{size:18})," Atrás"]}),a.jsx("h3",{children:"Tu cuenta de administrador"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Tu nombre"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(jE,{size:20}),a.jsx("input",{type:"text",name:"admin_name",value:p.admin_name,onChange:y,placeholder:"Juan Pérez",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Email"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(md,{size:20}),a.jsx("input",{type:"email",name:"admin_email",value:p.admin_email,onChange:y,placeholder:"juan@miempresa.com",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Contraseña"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(Jc,{size:20}),a.jsx("input",{type:"password",name:"password",value:p.password,onChange:y,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Confirmar contraseña"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(Jc,{size:20}),a.jsx("input",{type:"password",name:"confirm_password",value:p.confirm_password,onChange:y,placeholder:"Repite la contraseña",required:!0})]})]}),a.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),a.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",a.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",a.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),a.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",a.jsx(Pe,{to:"/login",children:"Iniciar sesión"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},IE=()=>{const e=yt(),[t]=gw();t.get("tenant");const[n,r]=A.useState(1),[i,s]=A.useState(!1),[l,c]=A.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),d=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],p=x=>{var C;const j=(C=x.target.files)==null?void 0:C[0];j&&c({...l,logo:j,logo_preview:URL.createObjectURL(j)})},w=async()=>{s(!0);try{if(l.logo){const x=new FormData;x.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:x})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(x){console.error("Error saving onboarding:",x)}finally{s(!1)}},y=()=>{e("/dashboard")};return a.jsxs("div",{className:"onboarding-wizard",children:[a.jsxs("div",{className:"wizard-container",children:[a.jsxs("div",{className:"wizard-header",children:[a.jsx(Jt,{size:32,color:"#3b82f6"}),a.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),a.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),a.jsx("div",{className:"wizard-progress",children:[1,2,3].map(x=>a.jsx("div",{className:`progress-dot ${n>=x?"active":""}`,children:n>x?a.jsx(er,{size:16}):x},x))}),a.jsxs("div",{className:"wizard-content",children:[n===1&&a.jsxs("div",{className:"wizard-step",children:[a.jsx("div",{className:"step-icon",children:a.jsx(Sf,{size:32})}),a.jsx("h2",{children:"Sube tu logo"}),a.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),a.jsx("div",{className:"logo-upload",children:l.logo_preview?a.jsxs("div",{className:"logo-preview",children:[a.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),a.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):a.jsxs("label",{className:"upload-area",children:[a.jsx(Sf,{size:40}),a.jsx("span",{children:"Arrastra o haz clic para subir"}),a.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),a.jsx("input",{type:"file",accept:"image/*",onChange:p})]})})]}),n===2&&a.jsxs("div",{className:"wizard-step",children:[a.jsx("div",{className:"step-icon",children:a.jsx(xE,{size:32})}),a.jsx("h2",{children:"Elige tus colores"}),a.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),a.jsx("div",{className:"color-picker",children:d.map(x=>a.jsx("button",{className:`color-option ${l.primary_color===x?"selected":""}`,style:{backgroundColor:x},onClick:()=>c({...l,primary_color:x}),children:l.primary_color===x&&a.jsx(er,{size:20})},x))}),a.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:a.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&a.jsxs("div",{className:"wizard-step",children:[a.jsx("div",{className:"step-icon",children:a.jsx(Ef,{size:32})}),a.jsx("h2",{children:"Información de contacto"}),a.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),a.jsxs("div",{className:"contact-form",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Teléfono (opcional)"}),a.jsx("input",{type:"tel",value:l.company_phone,onChange:x=>c({...l,company_phone:x.target.value}),placeholder:"+1 234 567 8900"})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Dirección (opcional)"}),a.jsx("input",{type:"text",value:l.company_address,onChange:x=>c({...l,company_address:x.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),a.jsxs("div",{className:"wizard-nav",children:[n>1?a.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[a.jsx(Aa,{size:20})," Atrás"]}):a.jsx("button",{onClick:y,className:"btn-skip",children:"Omitir configuración"}),n<3?a.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",a.jsx(ca,{size:20})]}):a.jsxs("button",{onClick:w,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",a.jsx(Ef,{size:20})]})]})]}),a.jsx("style",{children:`
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
      `})]})},PE=()=>{var E,m,v,I,L,z,b,g;const{tenant:e,isWhiteLabel:t}=an(),{login:n,clearError:r}=Qv(),i=yt(),s=on(),[l,c]=A.useState(""),[d,p]=A.useState(""),[w,y]=A.useState(!1),[x,j]=A.useState(""),C=((m=(E=s.state)==null?void 0:E.from)==null?void 0:m.pathname)||"/dashboard",R=async _=>{_.preventDefault(),y(!0),j(""),r();try{await n(l,d),i(C,{replace:!0})}catch(S){j(S.message||"Error al iniciar sesión")}finally{y(!1)}},O=((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6";return a.jsxs("div",{className:"login-page",children:[a.jsxs("div",{className:"login-container",children:[a.jsx("div",{className:"login-logo",children:(I=e==null?void 0:e.branding)!=null&&I.logo_url?a.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):a.jsx("div",{className:"logo-placeholder",children:((z=(L=e==null?void 0:e.branding)==null?void 0:L.company_name)==null?void 0:z.charAt(0))||"C"})}),a.jsx("h1",{children:((b=e==null?void 0:e.branding)==null?void 0:b.company_name)||"Sistema Courier"}),((g=e==null?void 0:e.branding)==null?void 0:g.tagline)&&a.jsx("p",{className:"tagline",children:e.branding.tagline}),a.jsxs("form",{onSubmit:R,children:[x&&a.jsx("div",{className:"error-message",children:x}),a.jsxs("div",{className:"input-group",children:[a.jsx(md,{size:20,className:"input-icon"}),a.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:_=>c(_.target.value),required:!0})]}),a.jsxs("div",{className:"input-group",children:[a.jsx(Jc,{size:20,className:"input-icon"}),a.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:_=>p(_.target.value),required:!0})]}),a.jsx("button",{type:"submit",className:"btn-login",disabled:w,style:{backgroundColor:O},children:w?"Iniciando sesión...":a.jsxs(a.Fragment,{children:[a.jsx(yE,{size:20}),"Iniciar Sesión"]})}),a.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&a.jsx("div",{className:"login-footer",children:a.jsxs("p",{children:["Powered by ",a.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),a.jsx("style",{children:`
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
      `})]})},RE=()=>{var R,O,E;const{tenant:e,isWhiteLabel:t}=an(),n=((R=e==null?void 0:e.branding)==null?void 0:R.primary_color)||"#3b82f6",[r,i]=A.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[s,l]=A.useState([]),[c,d]=A.useState(!0);A.useEffect(()=>{p()},[e]);const p=async()=>{if(e)try{d(!0);const m="http://localhost:3001",I=await(await fetch(`${m}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(I);const z=await(await fetch(`${m}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(z)}catch(m){console.error("Error fetching dashboard data:",m)}finally{d(!1)}},w=m=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(m),y=m=>{const v=new Date(m),L=new Date().getTime()-v.getTime(),z=Math.floor(L/6e4);if(z<1)return"Hace un momento";if(z<60)return`Hace ${z} min`;const b=Math.floor(z/60);if(b<24)return`Hace ${b} hora${b>1?"s":""}`;const g=Math.floor(b/24);return`Hace ${g} día${g>1?"s":""}`},x=m=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[m]||m,j=m=>{switch(m){case"delivered":return a.jsx(Zv,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return a.jsx(da,{size:16,className:"status-icon warning"});case"assigned":case"processing":return a.jsx(Jt,{size:16,className:"status-icon info"});default:return a.jsx(ey,{size:16,className:"status-icon pending"})}},C=[{icon:Jt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:da,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:js,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:Xc,label:"Ingresos Mes",value:w(r.monthlyRevenue),color:"#f59e0b"}];return a.jsxs("div",{className:"dashboard",children:[a.jsxs("header",{className:"dashboard-header",children:[a.jsx("div",{className:"header-left",children:(O=e==null?void 0:e.branding)!=null&&O.logo_url?a.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):a.jsx("span",{className:"header-title",children:((E=e==null?void 0:e.branding)==null?void 0:E.company_name)||"Sistema Courier"})}),a.jsxs("div",{className:"header-right",children:[a.jsx("span",{className:"user-name",children:"Admin"}),a.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),a.jsxs("main",{className:"dashboard-main",children:[a.jsx("div",{className:"stats-grid",children:C.map((m,v)=>a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",style:{backgroundColor:`${m.color}20`,color:m.color},children:a.jsx(m.icon,{size:24})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:c?"...":m.value}),a.jsx("div",{className:"stat-label",children:m.label})]})]},v))}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Paquetes Recientes"}),a.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),a.jsx("div",{className:"card-content",children:c?a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):s.length===0?a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):s.slice(0,4).map(m=>a.jsxs("div",{className:"package-item",children:[a.jsxs("div",{className:"package-info",children:[a.jsx("span",{className:"package-id",children:m.tracking_number}),a.jsx("span",{className:"package-client",children:m.client_name||"Sin cliente"})]}),a.jsxs("div",{className:"package-status",children:[j(m.status),a.jsx("span",{children:x(m.status)})]}),a.jsx("span",{className:"package-time",children:y(m.created_at)})]},m.id))})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Rendimiento"}),a.jsx(Qc,{size:20,style:{color:"#10b981"}})]}),a.jsxs("div",{className:"card-content performance-grid",children:[a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),a.jsx("span",{className:"perf-value success",children:"94%"})]}),a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),a.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Incidentes"}),a.jsx("span",{className:"perf-value warning",children:"3"})]}),a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),a.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&a.jsxs("div",{className:"trial-notice",children:[a.jsx(hs,{size:20}),a.jsx("span",{children:"Tu período de prueba termina pronto. "}),a.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),a.jsx("style",{children:`
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
      `})]})},AE=()=>{var m,v;const{tenant:e}=an(),t=yt(),[n,r]=A.useState([]),[i,s]=A.useState(!0),[l,c]=A.useState(""),[d,p]=A.useState(""),[w,y]=A.useState(1),[x,j]=A.useState(0),C=20;A.useEffect(()=>{e&&R()},[e,w,l,d]);const R=async()=>{var I;if(e)try{s(!0);const L="http://localhost:3001",z=new URLSearchParams({page:w.toString(),limit:C.toString(),...l&&{search:l},...d&&{status:d}}),g=await(await fetch(`${L}/api/packages?${z}`,{headers:{"X-Tenant-ID":e.id}})).json();r(g.packages||[]),j(((I=g.pagination)==null?void 0:I.total)||0)}catch(L){console.error("Error fetching packages:",L)}finally{s(!1)}},O=I=>{const z={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[I]||{label:I,color:"#6b7280"};return a.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${z.color}20`,color:z.color},children:z.label})},E=I=>new Date(I).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return a.jsxs("div",{className:"packages-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Paquetes"}),a.jsxs("p",{children:[x," paquetes en total"]})]}),a.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[a.jsx(ps,{size:20}),"Nuevo Paquete"]})]}),a.jsxs("div",{className:"filters-bar",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(Oa,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:I=>{c(I.target.value),y(1)}})]}),a.jsxs("select",{value:d,onChange:I=>{p(I.target.value),y(1)},className:"status-filter",children:[a.jsx("option",{value:"",children:"Todos los estados"}),a.jsx("option",{value:"pending",children:"Pendiente"}),a.jsx("option",{value:"processing",children:"Procesando"}),a.jsx("option",{value:"assigned",children:"Asignado"}),a.jsx("option",{value:"in_transit",children:"En tránsito"}),a.jsx("option",{value:"out_for_delivery",children:"En reparto"}),a.jsx("option",{value:"delivered",children:"Entregado"}),a.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),a.jsx("div",{className:"table-container",children:i?a.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(Jt,{size:48}),a.jsx("h3",{children:"No hay paquetes"}),a.jsx("p",{children:"Crea tu primer paquete para comenzar"}),a.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[a.jsx(ps,{size:20}),"Crear Paquete"]})]}):a.jsxs("table",{className:"packages-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Tracking"}),a.jsx("th",{children:"Destinatario"}),a.jsx("th",{children:"Dirección"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map(I=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:"tracking-number",children:I.tracking_number})}),a.jsx("td",{children:I.recipient_name}),a.jsx("td",{className:"address-cell",children:I.recipient_address}),a.jsx("td",{children:O(I.status)}),a.jsx("td",{children:E(I.created_at)}),a.jsx("td",{children:a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${I.id}`),title:"Ver detalle",children:a.jsx(fE,{size:16})}),a.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${I.id}/edit`),title:"Editar",children:a.jsx(vd,{size:16})})]})})]},I.id))})]})}),!i&&x>C&&a.jsxs("div",{className:"pagination",children:[a.jsx("button",{disabled:w===1,onClick:()=>y(w-1),children:"Anterior"}),a.jsxs("span",{children:["Página ",w," de ",Math.ceil(x/C)]}),a.jsx("button",{disabled:w>=Math.ceil(x/C),onClick:()=>y(w+1),children:"Siguiente"})]}),a.jsx("style",{children:`
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
            `})]})},OE=()=>{var y,x;const{tenant:e}=an(),t=yt(),[n,r]=A.useState(!1),[i,s]=A.useState([]),[l,c]=A.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",weight:"",dimensions:"",declared_value:"",notes:""});A.useEffect(()=>{e&&d()},[e]);const d=async()=>{if(e)try{const R=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();s(R.clients||[])}catch(j){console.error("Error fetching clients:",j)}},p=j=>{const C=i.find(R=>R.id===j);c(C?{...l,client_id:j,sender_name:C.name,sender_phone:C.phone}:{...l,client_id:j})},w=async j=>{if(j.preventDefault(),!!e){if(!l.client_id||!l.recipient_name||!l.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const R=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...l,weight:parseFloat(l.weight)||0,declared_value:parseFloat(l.declared_value)||0})});if(R.ok){const O=await R.json();alert(`Paquete creado exitosamente! Tracking: ${O.tracking_number}`),t("/packages")}else{const O=await R.json();alert(`Error: ${O.error||"No se pudo crear el paquete"}`)}}catch(C){console.error("Error creating package:",C),alert("Error al crear el paquete")}finally{r(!1)}}};return a.jsxs("div",{className:"new-package-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[a.jsx(Aa,{size:20}),"Volver"]}),a.jsx("h1",{children:"Nuevo Paquete"})]}),a.jsxs("form",{onSubmit:w,className:"package-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Información del Cliente"}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Cliente *"}),a.jsxs("select",{value:l.client_id,onChange:j=>p(j.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(j=>a.jsx("option",{value:j.id,children:j.name},j.id))]})]})})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Datos del Remitente"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nombre del Remitente"}),a.jsx("input",{type:"text",value:l.sender_name,onChange:j=>c({...l,sender_name:j.target.value}),placeholder:"Nombre completo"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Teléfono del Remitente"}),a.jsx("input",{type:"tel",value:l.sender_phone,onChange:j=>c({...l,sender_phone:j.target.value}),placeholder:"8888-8888"})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Datos del Destinatario"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nombre del Destinatario *"}),a.jsx("input",{type:"text",value:l.recipient_name,onChange:j=>c({...l,recipient_name:j.target.value}),placeholder:"Nombre completo",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Teléfono del Destinatario *"}),a.jsx("input",{type:"tel",value:l.recipient_phone,onChange:j=>c({...l,recipient_phone:j.target.value}),placeholder:"8888-8888",required:!0})]})]}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Dirección de Entrega *"}),a.jsx("textarea",{value:l.recipient_address,onChange:j=>c({...l,recipient_address:j.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Detalles del Paquete"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Peso (kg)"}),a.jsx("input",{type:"number",step:"0.01",value:l.weight,onChange:j=>c({...l,weight:j.target.value}),placeholder:"0.00"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Dimensiones"}),a.jsx("input",{type:"text",value:l.dimensions,onChange:j=>c({...l,dimensions:j.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Valor Declarado (₡)"}),a.jsx("input",{type:"number",step:"0.01",value:l.declared_value,onChange:j=>c({...l,declared_value:j.target.value}),placeholder:"0.00"})]})]}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Notas"}),a.jsx("textarea",{value:l.notes,onChange:j=>c({...l,notes:j.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),a.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[a.jsx(iy,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),a.jsx("style",{children:`
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
            `})]})},DE=()=>{var j,C;const{id:e}=Wm(),{tenant:t}=an(),n=yt(),[r,i]=A.useState(null),[s,l]=A.useState([]),[c,d]=A.useState(!0);A.useEffect(()=>{t&&e&&p()},[t,e]);const p=async()=>{if(!(!t||!e))try{d(!0);const E=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(E)}catch(R){console.error("Error fetching package:",R)}finally{d(!1)}},w=async()=>{if(!(!t||!e))try{const O=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(O.ok){const E=await O.blob(),m=window.URL.createObjectURL(E),v=document.createElement("a");v.href=m,v.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(v),v.click(),window.URL.revokeObjectURL(m),document.body.removeChild(v)}}catch(R){console.error("Error downloading label:",R),alert("Error al descargar la etiqueta")}},y=async()=>{if(!(!t||!e))try{const O=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(O.ok){const E=await O.blob(),m=window.URL.createObjectURL(E),v=document.createElement("a");v.href=m,v.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(v),v.click(),window.URL.revokeObjectURL(m),document.body.removeChild(v)}}catch(R){console.error("Error downloading delivery note:",R),alert("Error al descargar la nota de entrega")}},x=R=>{const E={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[R]||{label:R,color:"#6b7280"};return a.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${E.color}20`,color:E.color},children:E.label})};return c?a.jsx("div",{className:"loading-page",children:"Cargando..."}):r?a.jsxs("div",{className:"package-detail-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[a.jsx(Aa,{size:20}),"Volver"]}),a.jsxs("div",{className:"header-info",children:[a.jsx("h1",{children:r.tracking_number}),x(r.status)]}),a.jsxs("div",{className:"header-actions",children:[a.jsxs("button",{className:"btn-action",onClick:w,title:"Imprimir Etiqueta",children:[a.jsx(_E,{size:20}),"Etiqueta"]}),a.jsxs("button",{className:"btn-action",onClick:y,title:"Nota de Entrega",children:[a.jsx(gE,{size:20}),"Nota"]}),a.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[a.jsx(vd,{size:20}),"Editar"]})]})]}),a.jsxs("div",{className:"detail-grid",children:[a.jsxs("div",{className:"detail-card",children:[a.jsx("h2",{children:"Información General"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Cliente:"}),a.jsx("span",{className:"value",children:r.client_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Courier:"}),a.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Peso:"}),a.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Dimensiones:"}),a.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Valor Declarado:"}),a.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Fecha Creación:"}),a.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Fecha Entrega:"}),a.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),a.jsxs("div",{className:"detail-card",children:[a.jsx("h2",{children:"Remitente"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Nombre:"}),a.jsx("span",{className:"value",children:r.sender_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Teléfono:"}),a.jsx("span",{className:"value",children:r.sender_phone})]})]}),a.jsxs("div",{className:"detail-card",children:[a.jsx("h2",{children:"Destinatario"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Nombre:"}),a.jsx("span",{className:"value",children:r.recipient_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Teléfono:"}),a.jsx("span",{className:"value",children:r.recipient_phone})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Dirección:"}),a.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&a.jsxs("div",{className:"detail-card full-width",children:[a.jsx("h2",{children:"Notas"}),a.jsx("p",{children:r.notes})]})]}),a.jsx("style",{children:`
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

                .btn-back, .btn-edit, .btn-action {
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

                .btn-back:hover, .btn-edit:hover, .btn-action:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .btn-edit {
                    background: ${((j=t==null?void 0:t.branding)==null?void 0:j.primary_color)||"#3b82f6"};
                    color: white;
                    border: none;
                }

                .btn-edit:hover {
                    opacity: 0.9;
                    background: ${((C=t==null?void 0:t.branding)==null?void 0:C.primary_color)||"#3b82f6"};
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
            `})]}):a.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},LE=()=>{const{tenant:e}=an(),[t,n]=A.useState([]),[r,i]=A.useState(!0),[s,l]=A.useState("");A.useEffect(()=>{e&&c()},[e,s]);const c=async()=>{if(e)try{i(!0);const d="http://localhost:3001",p=new URLSearchParams({...s&&{search:s}}),y=await(await fetch(`${d}/api/clients?${p}`,{headers:{"X-Tenant-ID":e.id}})).json();n(y.clients||[])}catch(d){console.error("Error:",d)}finally{i(!1)}};return a.jsxs("div",{className:"clients-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsx("h1",{children:"Clientes"}),a.jsxs("p",{children:[t.length," clientes registrados"]})]}),a.jsxs("div",{className:"search-box",children:[a.jsx(Oa,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:s,onChange:d=>l(d.target.value)})]}),a.jsx("div",{className:"table-container",children:r?a.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(js,{size:48}),a.jsx("h3",{children:"No hay clientes"})]}):a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Empresa"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Teléfono"}),a.jsx("th",{children:"Paquetes"})]})}),a.jsx("tbody",{children:t.map(d=>a.jsxs("tr",{children:[a.jsx("td",{children:d.name}),a.jsx("td",{children:d.company_name||"-"}),a.jsx("td",{children:d.email}),a.jsx("td",{children:d.phone}),a.jsx("td",{children:d.total_packages})]},d.id))})]})}),a.jsx("style",{children:`
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
            `})]})},zE=()=>{const{tenant:e}=an(),[t,n]=A.useState([]),[r,i]=A.useState(!0),[s,l]=A.useState("");A.useEffect(()=>{e&&c()},[e,s]);const c=async()=>{if(e)try{i(!0);const p="http://localhost:3001",w=new URLSearchParams({...s&&{search:s}}),x=await(await fetch(`${p}/api/couriers?${w}`,{headers:{"X-Tenant-ID":e.id}})).json();n(x.couriers||[])}catch(p){console.error("Error:",p)}finally{i(!1)}},d=p=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[p]||p;return a.jsxs("div",{className:"couriers-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsx("h1",{children:"Couriers"}),a.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),a.jsxs("div",{className:"search-box",children:[a.jsx(Oa,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar courier...",value:s,onChange:p=>l(p.target.value)})]}),a.jsx("div",{className:"table-container",children:r?a.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(da,{size:48}),a.jsx("h3",{children:"No hay couriers"})]}):a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Teléfono"}),a.jsx("th",{children:"Vehículo"}),a.jsx("th",{children:"Placa"}),a.jsx("th",{children:"Zona"}),a.jsx("th",{children:"Entregas"}),a.jsx("th",{children:"Rating"})]})}),a.jsx("tbody",{children:t.map(p=>a.jsxs("tr",{children:[a.jsx("td",{children:p.name}),a.jsx("td",{children:p.phone}),a.jsx("td",{children:d(p.vehicle_type)}),a.jsx("td",{children:p.vehicle_plate||"-"}),a.jsx("td",{children:p.zone||"-"}),a.jsx("td",{children:p.completed_deliveries}),a.jsxs("td",{children:["⭐ ",p.rating.toFixed(1)]})]},p.id))})]})}),a.jsx("style",{children:`
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
            `})]})},ME=()=>a.jsxs("div",{className:"loading-page",children:[a.jsxs("div",{className:"loading-container",children:[a.jsx("div",{className:"loading-spinner"}),a.jsx("h2",{children:"Cargando..."}),a.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),a.jsx("style",{children:`
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
      `})]}),UE=({message:e})=>a.jsxs("div",{className:"error-page",children:[a.jsxs("div",{className:"error-container",children:[a.jsx("div",{className:"error-icon",children:a.jsx(uE,{size:64})}),a.jsx("h1",{children:"No se pudo cargar"}),a.jsx("p",{className:"error-message",children:e}),a.jsxs("div",{className:"error-actions",children:[a.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),a.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),a.jsx("style",{children:`
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
      `})]}),FE=()=>{var S,T;const{tenant:e}=an(),[t,n]=A.useState([]),[r,i]=A.useState(!0),[s,l]=A.useState(""),[c,d]=A.useState(!1),[p,w]=A.useState(null),[y,x]=A.useState(null),[j,C]=A.useState(""),[R,O]=A.useState(""),E=((S=e==null?void 0:e.plan)==null?void 0:S.id)==="enterprise",m=((T=e==null?void 0:e.branding)==null?void 0:T.primary_color)||"#3b82f6";A.useEffect(()=>{v()},[]);const v=async()=>{try{const k=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(k)}catch(N){console.error("Error fetching domains:",N)}finally{i(!1)}},I=async N=>{if(N.preventDefault(),!!s.trim()){d(!0),C("");try{const k=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:s})}),ge=await k.json();if(!k.ok)throw new Error(ge.error||"Error agregando dominio");n([...t,ge.domain]),w(ge.dns_instructions),l(""),O("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(k){C(k.message)}finally{d(!1)}}},L=async N=>{x(N),C("");try{const ge=await(await fetch(`/api/domains/${N}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ge.verified?(O("DNS verificado. El SSL se está configurando."),v()):C(ge.message)}catch{C("Error verificando DNS")}finally{x(null)}},z=async N=>{try{await fetch(`/api/domains/${N}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),O("Dominio establecido como principal"),v()}catch{C("Error estableciendo dominio principal")}},b=async N=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${N}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(k=>k.id!==N)),O("Dominio eliminado")}catch{C("Error eliminando dominio")}},g=N=>{navigator.clipboard.writeText(N),O("Copiado al portapapeles"),setTimeout(()=>O(""),2e3)},_=N=>{switch(N){case"active":return a.jsxs("span",{className:"badge success",children:[a.jsx(Zv,{size:14})," Activo"]});case"provisioning":return a.jsxs("span",{className:"badge warning",children:[a.jsx(ey,{size:14})," Configurando SSL"]});case"pending":return a.jsxs("span",{className:"badge pending",children:[a.jsx(hs,{size:14})," Pendiente verificación"]});case"failed":return a.jsxs("span",{className:"badge danger",children:[a.jsx(hs,{size:14})," Error"]});default:return null}};return E?a.jsxs("div",{className:"white-label-settings",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h1",{children:"Configuración White Label"}),a.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),j&&a.jsx("div",{className:"alert error",children:j}),R&&a.jsx("div",{className:"alert success",children:R}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsxs("h3",{children:[a.jsx(Yr,{size:20})," Dominios"]})}),a.jsxs("div",{className:"card-content",children:[a.jsx("div",{className:"domains-list",children:t.map(N=>a.jsxs("div",{className:"domain-row",children:[a.jsxs("div",{className:"domain-info",children:[a.jsxs("div",{className:"domain-name",children:[N.is_primary&&a.jsx(Yc,{size:16,className:"primary-star"}),N.domain,N.domain_type==="subdomain"&&a.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),_(N.ssl_status)]}),a.jsxs("div",{className:"domain-actions",children:[N.ssl_status==="pending"&&a.jsx("button",{onClick:()=>L(N.id),disabled:y===N.id,className:"btn-action",children:y===N.id?a.jsx(bE,{size:16,className:"spin"}):"Verificar DNS"}),N.ssl_status==="active"&&!N.is_primary&&a.jsxs("button",{onClick:()=>z(N.id),className:"btn-action",children:[a.jsx(Yc,{size:16})," Hacer principal"]}),N.domain_type==="custom"&&a.jsx("button",{onClick:()=>b(N.id),className:"btn-delete",children:a.jsx(EE,{size:16})}),a.jsx("a",{href:`https://${N.domain}`,target:"_blank",className:"btn-action",children:a.jsx(gd,{size:16})})]})]},N.id))}),a.jsxs("form",{onSubmit:I,className:"add-domain-form",children:[a.jsx("input",{type:"text",placeholder:"miempresa.com",value:s,onChange:N=>l(N.target.value)}),a.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[a.jsx(ps,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),p&&a.jsxs("div",{className:"card instructions-card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Configuración DNS"})}),a.jsxs("div",{className:"card-content",children:[a.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),a.jsxs("div",{className:"dns-record",children:[a.jsxs("div",{className:"dns-field",children:[a.jsx("label",{children:"Tipo"}),a.jsx("span",{children:p.type})]}),a.jsxs("div",{className:"dns-field",children:[a.jsx("label",{children:"Nombre"}),a.jsx("span",{children:p.name}),a.jsx("button",{onClick:()=>g(p.name),className:"copy-btn",children:a.jsx(kf,{size:14})})]}),a.jsxs("div",{className:"dns-field wide",children:[a.jsx("label",{children:"Valor"}),a.jsx("span",{children:p.value}),a.jsx("button",{onClick:()=>g(p.value),className:"copy-btn",children:a.jsx(kf,{size:14})})]})]}),a.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),a.jsx("style",{children:jf(m)})]}):a.jsxs("div",{className:"white-label-settings",children:[a.jsxs("div",{className:"upgrade-notice",children:[a.jsx(Yr,{size:48}),a.jsx("h2",{children:"White Label disponible en Enterprise"}),a.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),a.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),a.jsx("style",{children:jf(m)})]})},jf=e=>`
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
`,$E=()=>{const[e,t]=A.useState(null),[n,r]=A.useState(!0);A.useEffect(()=>{i()},[]);const i=async()=>{try{const d=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(d)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return a.jsx("div",{className:"loading",children:"Cargando dashboard..."});const s=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return a.jsxs("div",{className:"super-admin-dashboard",children:[a.jsxs("header",{className:"dashboard-header",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Super Admin Dashboard"}),a.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),a.jsx("div",{className:"header-actions",children:a.jsxs(Pe,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[a.jsx(ps,{size:20}),"Nuevo Tenant"]})})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card primary",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(ua,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),a.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),a.jsxs("div",{className:"stat-card success",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(js,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),a.jsx("div",{className:"stat-label",children:"Activas"}),a.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),a.jsxs("div",{className:"stat-card warning",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Xc,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:s((e==null?void 0:e.summary.mrr)||0)}),a.jsx("div",{className:"stat-label",children:"MRR"}),a.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),a.jsxs("div",{className:"stat-card danger",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(SE,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),a.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),a.jsxs("div",{className:"content-grid",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Empresas Recientes"}),a.jsx(Pe,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),a.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>a.jsxs("div",{className:"tenant-row",children:[a.jsx("div",{className:"tenant-avatar",children:c.logo_url?a.jsx("img",{src:c.logo_url,alt:c.name}):a.jsx("span",{children:c.name.charAt(0)})}),a.jsxs("div",{className:"tenant-info",children:[a.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),a.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),a.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),a.jsx("div",{className:"tenant-plan",children:c.plan_id}),a.jsx(Pe,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:a.jsx(ty,{size:18})})]},c.id))})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Ingresos Mensuales"}),a.jsx(Qc,{size:20,className:"success"})]}),a.jsx("div",{className:"card-content chart-container",children:a.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,d)=>a.jsxs("div",{className:"chart-bar",children:[a.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),a.jsx("span",{className:"bar-label",children:c.month}),a.jsx("span",{className:"bar-value",children:s(c.revenue)})]},d))})})]}),a.jsxs("div",{className:"card small",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Por Plan"})}),a.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,d)=>a.jsxs("div",{className:"distribution-row",children:[a.jsx("span",{className:"dist-label",children:c.plan_id}),a.jsx("div",{className:"dist-bar",children:a.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][d%4]}})}),a.jsx("span",{className:"dist-count",children:c.count})]},d))})]}),a.jsxs("div",{className:"card small",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Acciones Rápidas"})}),a.jsxs("div",{className:"card-content quick-actions",children:[a.jsxs(Pe,{to:"/super-admin/tenants",className:"quick-action",children:[a.jsx(ua,{size:24}),a.jsx("span",{children:"Gestionar Empresas"})]}),a.jsxs(Pe,{to:"/super-admin/subscriptions",className:"quick-action",children:[a.jsx(Xc,{size:24}),a.jsx("span",{children:"Ver Suscripciones"})]}),a.jsxs(Pe,{to:"/super-admin/plans",className:"quick-action",children:[a.jsx(Qc,{size:24}),a.jsx("span",{children:"Configurar Planes"})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},BE=()=>{const e=yt(),[t,n]=A.useState([]),[r,i]=A.useState({page:1,limit:20,total:0,pages:0}),[s,l]=A.useState(!0),[c,d]=A.useState(""),[p,w]=A.useState(""),[y,x]=A.useState(null);A.useEffect(()=>{j()},[r.page,p]);const j=async()=>{try{l(!0);const v=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...p&&{status:p},...c&&{search:c}}),L=await(await fetch(`/api/super-admin/tenants?${v}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(L.tenants),i(L.pagination)}catch(v){console.error("Error fetching tenants:",v)}finally{l(!1)}},C=v=>{v.preventDefault(),i({...r,page:1}),j()},R=async v=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${v}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),j()}catch(I){console.error("Error suspending tenant:",I)}},O=async v=>{try{await fetch(`/api/super-admin/tenants/${v}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),j()}catch(I){console.error("Error activating tenant:",I)}},E=v=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[v]||"bg-blue"}`,m=v=>new Date(v).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return a.jsxs("div",{className:"tenants-management",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx(Pe,{to:"/super-admin",className:"back-link",children:a.jsx(Gc,{size:20})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Gestión de Empresas"}),a.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),a.jsxs(Pe,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[a.jsx(ps,{size:20}),"Nueva Empresa"]})]}),a.jsxs("div",{className:"filters-bar",children:[a.jsxs("form",{onSubmit:C,className:"search-box",children:[a.jsx(Oa,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:v=>d(v.target.value)})]}),a.jsxs("div",{className:"filter-group",children:[a.jsx(mE,{size:18}),a.jsxs("select",{value:p,onChange:v=>w(v.target.value),children:[a.jsx("option",{value:"",children:"Todos los estados"}),a.jsx("option",{value:"active",children:"Activos"}),a.jsx("option",{value:"trial",children:"En prueba"}),a.jsx("option",{value:"suspended",children:"Suspendidos"}),a.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),a.jsx("div",{className:"table-container",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Empresa"}),a.jsx("th",{children:"Subdominio"}),a.jsx("th",{children:"Plan"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Creado"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:s?a.jsx("tr",{children:a.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(v=>{var I,L,z;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{className:"tenant-cell",children:[a.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((I=v.branding)==null?void 0:I.primary_color)||"#3b82f6"},children:(L=v.branding)!=null&&L.logo_url?a.jsx("img",{src:v.branding.logo_url,alt:""}):v.name.charAt(0)}),a.jsxs("div",{children:[a.jsx("div",{className:"tenant-name",children:((z=v.branding)==null?void 0:z.company_name)||v.name}),a.jsxs("div",{className:"tenant-id",children:[v.id.slice(0,8),"..."]})]})]})}),a.jsx("td",{children:a.jsxs("a",{href:`https://${v.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[v.subdomain,a.jsx(gd,{size:14})]})}),a.jsx("td",{children:a.jsx("span",{className:"plan-badge",children:v.plan_id})}),a.jsx("td",{children:a.jsx("span",{className:E(v.status),children:v.status})}),a.jsx("td",{children:m(v.created_at)}),a.jsx("td",{children:a.jsxs("div",{className:"actions-cell",children:[a.jsx("button",{onClick:()=>e(`/super-admin/tenants/${v.id}`),className:"action-btn",title:"Ver detalles",children:a.jsx(ty,{size:18})}),v.status==="active"?a.jsx("button",{onClick:()=>R(v.id),className:"action-btn danger",title:"Suspender",children:a.jsx(ny,{size:18})}):v.status==="suspended"&&a.jsx("button",{onClick:()=>O(v.id),className:"action-btn success",title:"Activar",children:a.jsx(ry,{size:18})})]})})]},v.id)})})]})}),r.pages>1&&a.jsxs("div",{className:"pagination",children:[a.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[a.jsx(Gc,{size:18}),"Anterior"]}),a.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),a.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",a.jsx(hE,{size:18})]})]}),a.jsx("style",{children:`
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
      `})]})},VE=()=>{const{id:e}=Wm();yt();const[t,n]=A.useState(null),[r,i]=A.useState(!0),[s,l]=A.useState(!1),[c,d]=A.useState({name:"",plan_id:""});A.useEffect(()=>{p()},[e]);const p=async()=>{try{const C=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(C),d({name:C.name,plan_id:C.plan_id})}catch(j){console.error("Error fetching tenant:",j)}finally{i(!1)}},w=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),p()}catch(j){console.error("Error updating tenant:",j)}},y=async j=>{if(confirm(j==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${j}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),p()}catch(R){console.error("Error changing status:",R)}},x=j=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[j]||"#3b82f6";return r?a.jsx("div",{className:"loading-page",children:"Cargando..."}):t?a.jsxs("div",{className:"tenant-detail",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx(Pe,{to:"/super-admin/tenants",className:"back-link",children:a.jsx(Gc,{size:20})}),a.jsxs("div",{className:"tenant-header",children:[a.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?a.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),a.jsxs("div",{children:[a.jsx("h1",{children:t.branding.company_name||t.name}),a.jsxs("div",{className:"tenant-meta",children:[a.jsx("span",{className:"status-dot",style:{backgroundColor:x(t.status)}}),a.jsx("span",{children:t.status}),a.jsx("span",{className:"separator",children:"•"}),a.jsx("span",{children:t.plan_id})]})]})]})]}),a.jsxs("div",{className:"header-actions",children:[a.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[a.jsx(gd,{size:18}),"Visitar"]}),t.status==="active"?a.jsxs("button",{onClick:()=>y("suspend"),className:"btn btn-danger",children:[a.jsx(ny,{size:18}),"Suspender"]}):t.status==="suspended"&&a.jsxs("button",{onClick:()=>y("activate"),className:"btn btn-success",children:[a.jsx(ry,{size:18}),"Activar"]})]})]}),a.jsxs("div",{className:"detail-content",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Información General"}),s?a.jsxs("button",{onClick:w,className:"btn btn-primary btn-sm",children:[a.jsx(iy,{size:16}),"Guardar"]}):a.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:a.jsx(vd,{size:18})})]}),a.jsxs("div",{className:"card-content info-grid",children:[a.jsxs("div",{className:"info-item",children:[a.jsx(ua,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Nombre"}),s?a.jsx("input",{value:c.name,onChange:j=>d({...c,name:j.target.value})}):a.jsx("span",{children:t.name})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(Yr,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Subdominio"}),a.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(md,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Email"}),a.jsx("span",{children:t.branding.contact_email||"-"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(wE,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Teléfono"}),a.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(dE,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Creado"}),a.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(pE,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Plan"}),s?a.jsxs("select",{value:c.plan_id,onChange:j=>d({...c,plan_id:j.target.value}),children:[a.jsx("option",{value:"trial",children:"Trial"}),a.jsx("option",{value:"starter",children:"Starter"}),a.jsx("option",{value:"professional",children:"Professional"}),a.jsx("option",{value:"enterprise",children:"Enterprise"})]}):a.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Uso del Servicio"})}),a.jsxs("div",{className:"card-content usage-grid",children:[a.jsxs("div",{className:"usage-item",children:[a.jsx("div",{className:"usage-icon",children:a.jsx(js,{size:24})}),a.jsx("div",{className:"usage-value",children:t.usage.users}),a.jsx("div",{className:"usage-label",children:"Usuarios"})]}),a.jsxs("div",{className:"usage-item",children:[a.jsx("div",{className:"usage-icon",children:a.jsx(Jt,{size:24})}),a.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),a.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),a.jsxs("div",{className:"usage-item",children:[a.jsx("div",{className:"usage-icon",children:a.jsx(vE,{size:24})}),a.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),a.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Dominios"})}),a.jsx("div",{className:"card-content",children:t.domains.length===0?a.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((j,C)=>a.jsxs("div",{className:"domain-row",children:[a.jsx(Yr,{size:16}),a.jsx("span",{children:j.domain}),j.is_primary&&a.jsx("span",{className:"badge primary",children:"Principal"}),a.jsxs("span",{className:`badge ${j.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",j.ssl_status]})]},C))})]}),t.subscription&&a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Suscripción"})}),a.jsx("div",{className:"card-content",children:a.jsxs("div",{className:"subscription-info",children:[a.jsxs("div",{children:[a.jsx("label",{children:"Estado"}),a.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),a.jsxs("div",{children:[a.jsx("label",{children:"Próximo cobro"}),a.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),a.jsx("style",{children:`
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
      `})]}):a.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},HE=()=>{const{tenant:e,loading:t,error:n}=an(),r=on(),s=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&s?a.jsx("div",{className:"app",children:a.jsxs(Ip,{children:[a.jsx(ye,{path:"/",element:a.jsx(TE,{})}),a.jsx(ye,{path:"/register",element:a.jsx(CE,{})}),a.jsx(ye,{path:"/onboarding",element:a.jsx(IE,{})}),a.jsx(ye,{path:"*",element:a.jsx(_o,{to:"/",replace:!0})})]})}):t?a.jsx(ME,{}):n&&!l?a.jsx(UE,{message:n}):a.jsx(aE,{children:a.jsx("div",{className:"app",children:a.jsxs(Ip,{children:[a.jsx(ye,{path:"/login",element:a.jsx(PE,{})}),a.jsx(ye,{path:"/dashboard",element:a.jsx(_t,{children:a.jsx(RE,{})})}),a.jsx(ye,{path:"/packages",element:a.jsx(_t,{children:a.jsx(AE,{})})}),a.jsx(ye,{path:"/packages/new",element:a.jsx(_t,{children:a.jsx(OE,{})})}),a.jsx(ye,{path:"/packages/:id",element:a.jsx(_t,{children:a.jsx(DE,{})})}),a.jsx(ye,{path:"/clients",element:a.jsx(_t,{children:a.jsx(LE,{})})}),a.jsx(ye,{path:"/couriers",element:a.jsx(_t,{children:a.jsx(zE,{})})}),a.jsx(ye,{path:"/account/white-label",element:a.jsx(_t,{children:a.jsx(FE,{})})}),a.jsx(ye,{path:"/super-admin",element:a.jsx(_t,{children:a.jsx($E,{})})}),a.jsx(ye,{path:"/super-admin/tenants",element:a.jsx(_t,{children:a.jsx(BE,{})})}),a.jsx(ye,{path:"/super-admin/tenants/:id",element:a.jsx(_t,{children:a.jsx(VE,{})})}),a.jsx(ye,{path:"/",element:a.jsx(_o,{to:"/dashboard",replace:!0})}),a.jsx(ye,{path:"*",element:a.jsx(_o,{to:"/dashboard",replace:!0})})]})})})};Vl.createRoot(document.getElementById("root")).render(a.jsx(zf.StrictMode,{children:a.jsx(dw,{children:a.jsx(yw,{children:a.jsx(HE,{})})})}));
//# sourceMappingURL=index-CQP5wZzw.js.map
