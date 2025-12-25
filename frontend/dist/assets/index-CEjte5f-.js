function ov(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var av=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qf={exports:{}},Na={},Gf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),lv=Symbol.for("react.portal"),cv=Symbol.for("react.fragment"),dv=Symbol.for("react.strict_mode"),uv=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),pv=Symbol.for("react.context"),fv=Symbol.for("react.forward_ref"),gv=Symbol.for("react.suspense"),mv=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),Ah=Symbol.iterator;function vv(e){return e===null||typeof e!="object"?null:(e=Ah&&e[Ah]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Yf={};function hs(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Kf}hs.prototype.isReactComponent={};hs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jf(){}Jf.prototype=hs.prototype;function md(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Kf}var xd=md.prototype=new Jf;xd.constructor=md;Xf(xd,hs.prototype);xd.isPureReactComponent=!0;var Dh=Array.isArray,Qf=Object.prototype.hasOwnProperty,vd={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Qf.call(t,r)&&!Zf.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:Ei,type:e,key:o,ref:l,props:i,_owner:vd.current}}function yv(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function bv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zh=/\/+/g;function bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bv(""+e.key):t.toString(36)}function wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ei:case lv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bl(l,0):r,Dh(i)?(n="",e!=null&&(n=e.replace(zh,"$&/")+"/"),wo(i,t,n,"",function(h){return h})):i!=null&&(yd(i)&&(i=yv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(zh,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Dh(e))for(var c=0;c<e.length;c++){o=e[c];var d=r+bl(o,c);l+=wo(o,t,n,d,i)}else if(d=vv(e),typeof d=="function")for(e=d.call(e),c=0;!(o=e.next()).done;)o=o.value,d=r+bl(o,c++),l+=wo(o,t,n,d,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function eo(e,t,n){if(e==null)return e;var r=[],i=0;return wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},jo={transition:null},jv={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:jo,ReactCurrentOwner:vd};function tg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!yd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=hs;q.Fragment=cv;q.Profiler=uv;q.PureComponent=md;q.StrictMode=dv;q.Suspense=gv;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;q.act=tg;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=vd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Qf.call(t,d)&&!Zf.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:Ei,type:e.type,key:i,ref:o,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:pv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hv,_context:e},e.Consumer=e};q.createElement=eg;q.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:fv,render:e}};q.isValidElement=yd;q.lazy=function(e){return{$$typeof:xv,_payload:{_status:-1,_result:e},_init:wv}};q.memo=function(e,t){return{$$typeof:mv,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=jo.transition;jo.transition={};try{e()}finally{jo.transition=t}};q.unstable_act=tg;q.useCallback=function(e,t){return Be.current.useCallback(e,t)};q.useContext=function(e){return Be.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};q.useEffect=function(e,t){return Be.current.useEffect(e,t)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Be.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};q.useRef=function(e){return Be.current.useRef(e)};q.useState=function(e){return Be.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";Gf.exports=q;var C=Gf.exports;const bd=gd(C),_v=ov({__proto__:null,default:bd},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=C,Nv=Symbol.for("react.element"),Ev=Symbol.for("react.fragment"),Sv=Object.prototype.hasOwnProperty,Tv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cv={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Sv.call(t,r)&&!Cv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nv,type:e,key:o,ref:l,props:i,_owner:Tv.current}}Na.Fragment=Ev;Na.jsx=ng;Na.jsxs=ng;qf.exports=Na;var s=qf.exports,sc={},rg={exports:{}},st={},sg={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var ae=W-1>>>1,Z=F[ae];if(0<i(Z,H))F[ae]=H,F[W]=Z,W=ae;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var ae=0,Z=F.length,he=Z>>>1;ae<he;){var Ft=2*(ae+1)-1,$t=F[Ft],Bt=Ft+1,Vt=F[Bt];if(0>i($t,W))Bt<Z&&0>i(Vt,$t)?(F[ae]=Vt,F[Bt]=W,ae=Bt):(F[ae]=$t,F[Ft]=W,ae=Ft);else if(Bt<Z&&0>i(Vt,W))F[ae]=Vt,F[Bt]=W,ae=Bt;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],h=[],g=1,m=null,b=3,_=!1,j=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(d,H);else break;H=n(h)}}function I(F){if(P=!1,v(F),!j)if(n(d)!==null)j=!0,vs(N);else{var H=n(h);H!==null&&Ut(I,H.startTime-F)}}function N(F,H){j=!1,P&&(P=!1,x(w),w=-1),_=!0;var W=b;try{for(v(H),m=n(d);m!==null&&(!(m.expirationTime>H)||F&&!A());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,b=m.priorityLevel;var Z=ae(m.expirationTime<=H);H=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(d)&&r(d),v(H)}else r(d);m=n(d)}if(m!==null)var he=!0;else{var Ft=n(h);Ft!==null&&Ut(I,Ft.startTime-H),he=!1}return he}finally{m=null,b=W,_=!1}}var O=!1,k=null,w=-1,E=5,T=-1;function A(){return!(e.unstable_now()-T<E)}function R(){if(k!==null){var F=e.unstable_now();T=F;var H=!0;try{H=k(!0,F)}finally{H?S():(O=!1,k=null)}}else O=!1}var S;if(typeof f=="function")S=function(){f(R)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Qn=ye.port2;ye.port1.onmessage=R,S=function(){Qn.postMessage(null)}}else S=function(){D(R,0)};function vs(F){k=F,O||(O=!0,S())}function Ut(F,H){w=D(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){j||_||(j=!0,vs(N))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(b){case 1:case 2:case 3:var H=3;break;default:H=b}var W=b;b=H;try{return F()}finally{b=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=b;b=F;try{return H()}finally{b=W}},e.unstable_scheduleCallback=function(F,H,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,F){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=W+Z,F={id:g++,callback:H,priorityLevel:F,startTime:W,expirationTime:Z,sortIndex:-1},W>ae?(F.sortIndex=W,t(h,F),n(d)===null&&F===n(h)&&(P?(x(w),w=-1):P=!0,Ut(I,W-ae))):(F.sortIndex=Z,t(d,F),j||_||(j=!0,vs(N))),F},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(F){var H=b;return function(){var W=b;b=H;try{return F.apply(this,arguments)}finally{b=W}}}})(ig);sg.exports=ig;var Iv=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=C,rt=Iv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,ii={};function _r(e,t){ts(e,t),ts(e+"Capture",t)}function ts(e,t){for(ii[e]=t,e=0;e<t.length;e++)og.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=Object.prototype.hasOwnProperty,Rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Oh={};function Av(e){return ic.call(Oh,e)?!0:ic.call(Lh,e)?!1:Rv.test(e)?Oh[e]=!0:(Lh[e]=!0,!1)}function Dv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zv(e,t,n,r){if(t===null||typeof t>"u"||Dv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var wd=/[\-:]([a-z])/g;function jd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wd,jd);Se[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wd,jd);Se[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wd,jd);Se[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function _d(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zv(t,n,i,r)&&(n=null),r||i===null?Av(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),lg=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function Rs(e){return e===null||typeof e!="object"?null:(e=Mh&&e[Mh]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,wl;function $s(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var jl=!1;function _l(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,c=o.length-1;1<=l&&0<=c&&i[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==o[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$s(e):""}function Lv(e){switch(e.tag){case 5:return $s(e.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function cc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ar:return"Fragment";case Rr:return"Portal";case oc:return"Profiler";case kd:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case ag:return(e._context.displayName||"Context")+".Provider";case Nd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ed:return t=e.displayName||null,t!==null?t:cc(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return cc(e(t))}catch{}}return null}function Ov(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cc(t);case 8:return t===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mv(e){var t=dg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=Mv(e))}function ug(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dc(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hg(e,t){t=t.checked,t!=null&&_d(e,"checked",t,!1)}function uc(e,t){hg(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hc(e,t.type,n):t.hasOwnProperty("defaultValue")&&hc(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hc(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bs=Array.isArray;function Wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $h(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Bs(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function pg(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(e){Uv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gs[t]=Gs[e]})});function mg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gs.hasOwnProperty(e)&&Gs[e]?(""+t).trim():t+"px"}function xg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fv=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gc(e,t){if(t){if(Fv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function mc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vc=null,qr=null,Gr=null;function Vh(e){if(e=Ci(e)){if(typeof vc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ia(t),vc(e.stateNode,e.type,t))}}function vg(e){qr?Gr?Gr.push(e):Gr=[e]:qr=e}function yg(){if(qr){var e=qr,t=Gr;if(Gr=qr=null,Vh(e),t)for(e=0;e<t.length;e++)Vh(t[e])}}function bg(e,t){return e(t)}function wg(){}var kl=!1;function jg(e,t,n){if(kl)return e(t,n);kl=!0;try{return bg(e,t,n)}finally{kl=!1,(qr!==null||Gr!==null)&&(wg(),yg())}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var r=Ia(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var yc=!1;if(tn)try{var As={};Object.defineProperty(As,"passive",{get:function(){yc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{yc=!1}function $v(e,t,n,r,i,o,l,c,d){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(g){this.onError(g)}}var Ks=!1,Uo=null,Fo=!1,bc=null,Bv={onError:function(e){Ks=!0,Uo=e}};function Vv(e,t,n,r,i,o,l,c,d){Ks=!1,Uo=null,$v.apply(Bv,arguments)}function Hv(e,t,n,r,i,o,l,c,d){if(Vv.apply(this,arguments),Ks){if(Ks){var h=Uo;Ks=!1,Uo=null}else throw Error(M(198));Fo||(Fo=!0,bc=h)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hh(e){if(kr(e)!==e)throw Error(M(188))}function Wv(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hh(i),e;if(o===r)return Hh(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function kg(e){return e=Wv(e),e!==null?Ng(e):null}function Ng(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ng(e);if(t!==null)return t;e=e.sibling}return null}var Eg=rt.unstable_scheduleCallback,Wh=rt.unstable_cancelCallback,qv=rt.unstable_shouldYield,Gv=rt.unstable_requestPaint,ge=rt.unstable_now,Kv=rt.unstable_getCurrentPriorityLevel,Td=rt.unstable_ImmediatePriority,Sg=rt.unstable_UserBlockingPriority,$o=rt.unstable_NormalPriority,Xv=rt.unstable_LowPriority,Tg=rt.unstable_IdlePriority,Ea=null,It=null;function Yv(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Zv,Jv=Math.log,Qv=Math.LN2;function Zv(e){return e>>>=0,e===0?32:31-(Jv(e)/Qv|0)|0}var so=64,io=4194304;function Vs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=Vs(c):(o&=l,o!==0&&(r=Vs(o)))}else l=n&~i,l!==0?r=Vs(l):o!==0&&(r=Vs(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function ey(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-bt(o),c=1<<l,d=i[l];d===-1?(!(c&n)||c&r)&&(i[l]=ey(c,t)):d<=t&&(e.expiredLanes|=c),o&=~c}}function wc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cg(){var e=so;return so<<=1,!(so&4194240)&&(so=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function ny(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Cd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pg,Id,Rg,Ag,Dg,jc=!1,oo=[],Cn=null,In=null,Pn=null,li=new Map,ci=new Map,yn=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ci.delete(t.pointerId)}}function Ds(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ci(t),t!==null&&Id(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sy(e,t,n,r,i){switch(t){case"focusin":return Cn=Ds(Cn,e,t,n,r,i),!0;case"dragenter":return In=Ds(In,e,t,n,r,i),!0;case"mouseover":return Pn=Ds(Pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return li.set(o,Ds(li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ci.set(o,Ds(ci.get(o)||null,e,t,n,r,i)),!0}return!1}function zg(e){var t=ir(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=_g(n),t!==null){e.blockedOn=t,Dg(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_c(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xc=r,n.target.dispatchEvent(r),xc=null}else return t=Ci(n),t!==null&&Id(t),e.blockedOn=n,!1;t.shift()}return!0}function Gh(e,t,n){_o(e)&&n.delete(t)}function iy(){jc=!1,Cn!==null&&_o(Cn)&&(Cn=null),In!==null&&_o(In)&&(In=null),Pn!==null&&_o(Pn)&&(Pn=null),li.forEach(Gh),ci.forEach(Gh)}function zs(e,t){e.blockedOn===t&&(e.blockedOn=null,jc||(jc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,iy)))}function di(e){function t(i){return zs(i,e)}if(0<oo.length){zs(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&zs(Cn,e),In!==null&&zs(In,e),Pn!==null&&zs(Pn,e),li.forEach(t),ci.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&yn.shift()}var Kr=ln.ReactCurrentBatchConfig,Vo=!0;function oy(e,t,n,r){var i=Q,o=Kr.transition;Kr.transition=null;try{Q=1,Pd(e,t,n,r)}finally{Q=i,Kr.transition=o}}function ay(e,t,n,r){var i=Q,o=Kr.transition;Kr.transition=null;try{Q=4,Pd(e,t,n,r)}finally{Q=i,Kr.transition=o}}function Pd(e,t,n,r){if(Vo){var i=_c(e,t,n,r);if(i===null)zl(e,t,r,Ho,n),qh(e,r);else if(sy(i,e,t,n,r))r.stopPropagation();else if(qh(e,r),t&4&&-1<ry.indexOf(e)){for(;i!==null;){var o=Ci(i);if(o!==null&&Pg(o),o=_c(e,t,n,r),o===null&&zl(e,t,r,Ho,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else zl(e,t,r,null,n)}}var Ho=null;function _c(e,t,n,r){if(Ho=null,e=Sd(r),e=ir(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function Lg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case Td:return 1;case Sg:return 4;case $o:case Xv:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var Nn=null,Rd=null,ko=null;function Og(){if(ko)return ko;var e,t=Rd,n=t.length,r,i="value"in Nn?Nn.value:Nn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ko=i.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Kh(){return!1}function it(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:Kh,this.isPropagationStopped=Kh,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ad=it(ps),Ti=de({},ps,{view:0,detail:0}),ly=it(Ti),El,Sl,Ls,Sa=de({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ls&&(Ls&&e.type==="mousemove"?(El=e.screenX-Ls.screenX,Sl=e.screenY-Ls.screenY):Sl=El=0,Ls=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Xh=it(Sa),cy=de({},Sa,{dataTransfer:0}),dy=it(cy),uy=de({},Ti,{relatedTarget:0}),Tl=it(uy),hy=de({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),py=it(hy),fy=de({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=it(fy),my=de({},ps,{data:0}),Yh=it(my),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yy[e])?!!t[e]:!1}function Dd(){return by}var wy=de({},Ti,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jy=it(wy),_y=de({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=it(_y),ky=de({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),Ny=it(ky),Ey=de({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=it(Ey),Ty=de({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=it(Ty),Iy=[9,13,27,32],zd=tn&&"CompositionEvent"in window,Xs=null;tn&&"documentMode"in document&&(Xs=document.documentMode);var Py=tn&&"TextEvent"in window&&!Xs,Mg=tn&&(!zd||Xs&&8<Xs&&11>=Xs),Qh=" ",Zh=!1;function Ug(e,t){switch(e){case"keyup":return Iy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function Ry(e,t){switch(e){case"compositionend":return Fg(t);case"keypress":return t.which!==32?null:(Zh=!0,Qh);case"textInput":return e=t.data,e===Qh&&Zh?null:e;default:return null}}function Ay(e,t){if(Dr)return e==="compositionend"||!zd&&Ug(e,t)?(e=Og(),ko=Rd=Nn=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mg&&t.locale!=="ko"?null:t.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dy[e.type]:t==="textarea"}function $g(e,t,n,r){vg(r),t=Wo(t,"onChange"),0<t.length&&(n=new Ad("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ys=null,ui=null;function zy(e){Qg(e,0)}function Ta(e){var t=Or(e);if(ug(t))return e}function Ly(e,t){if(e==="change")return t}var Bg=!1;if(tn){var Cl;if(tn){var Il="oninput"in document;if(!Il){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Il=typeof tp.oninput=="function"}Cl=Il}else Cl=!1;Bg=Cl&&(!document.documentMode||9<document.documentMode)}function np(){Ys&&(Ys.detachEvent("onpropertychange",Vg),ui=Ys=null)}function Vg(e){if(e.propertyName==="value"&&Ta(ui)){var t=[];$g(t,ui,e,Sd(e)),jg(zy,t)}}function Oy(e,t,n){e==="focusin"?(np(),Ys=t,ui=n,Ys.attachEvent("onpropertychange",Vg)):e==="focusout"&&np()}function My(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(ui)}function Uy(e,t){if(e==="click")return Ta(t)}function Fy(e,t){if(e==="input"||e==="change")return Ta(t)}function $y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:$y;function hi(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ic.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=rp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wg(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function By(e){var t=Wg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&Ld(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=sp(n,o);var l=sp(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=tn&&"documentMode"in document&&11>=document.documentMode,zr=null,kc=null,Js=null,Nc=!1;function ip(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nc||zr==null||zr!==Mo(r)||(r=zr,"selectionStart"in r&&Ld(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Js&&hi(Js,r)||(Js=r,r=Wo(kc,"onSelect"),0<r.length&&(t=new Ad("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Pl={},qg={};tn&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ca(e){if(Pl[e])return Pl[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qg)return Pl[e]=t[n];return e}var Gg=Ca("animationend"),Kg=Ca("animationiteration"),Xg=Ca("animationstart"),Yg=Ca("transitionend"),Jg=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){Jg.set(e,t),_r(t,[e])}for(var Rl=0;Rl<op.length;Rl++){var Al=op[Rl],Hy=Al.toLowerCase(),Wy=Al[0].toUpperCase()+Al.slice(1);Gn(Hy,"on"+Wy)}Gn(Gg,"onAnimationEnd");Gn(Kg,"onAnimationIteration");Gn(Xg,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Yg,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function ap(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hv(r,t,void 0,e),e.currentTarget=null}function Qg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,h=c.currentTarget;if(c=c.listener,d!==o&&i.isPropagationStopped())break e;ap(i,c,h),o=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,h=c.currentTarget,c=c.listener,d!==o&&i.isPropagationStopped())break e;ap(i,c,h),o=d}}}if(Fo)throw e=bc,Fo=!1,bc=null,e}function se(e,t){var n=t[Ic];n===void 0&&(n=t[Ic]=new Set);var r=e+"__bubble";n.has(r)||(Zg(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Zg(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function pi(e){if(!e[co]){e[co]=!0,og.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Dl("selectionchange",!1,t))}}function Zg(e,t,n,r){switch(Lg(t)){case 1:var i=oy;break;case 4:i=ay;break;default:i=Pd}n=i.bind(null,t,n,e),i=void 0,!yc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=ir(c),l===null)return;if(d=l.tag,d===5||d===6){r=o=l;continue e}c=c.parentNode}}r=r.return}jg(function(){var h=o,g=Sd(n),m=[];e:{var b=Jg.get(e);if(b!==void 0){var _=Ad,j=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":_=jy;break;case"focusin":j="focus",_=Tl;break;case"focusout":j="blur",_=Tl;break;case"beforeblur":case"afterblur":_=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Ny;break;case Gg:case Kg:case Xg:_=py;break;case Yg:_=Sy;break;case"scroll":_=ly;break;case"wheel":_=Cy;break;case"copy":case"cut":case"paste":_=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Jh}var P=(t&4)!==0,D=!P&&e==="scroll",x=P?b!==null?b+"Capture":null:b;P=[];for(var f=h,v;f!==null;){v=f;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,x!==null&&(I=ai(f,x),I!=null&&P.push(fi(f,I,v)))),D)break;f=f.return}0<P.length&&(b=new _(b,j,null,n,g),m.push({event:b,listeners:P}))}}if(!(t&7)){e:{if(b=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",b&&n!==xc&&(j=n.relatedTarget||n.fromElement)&&(ir(j)||j[nn]))break e;if((_||b)&&(b=g.window===g?g:(b=g.ownerDocument)?b.defaultView||b.parentWindow:window,_?(j=n.relatedTarget||n.toElement,_=h,j=j?ir(j):null,j!==null&&(D=kr(j),j!==D||j.tag!==5&&j.tag!==6)&&(j=null)):(_=null,j=h),_!==j)){if(P=Xh,I="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(P=Jh,I="onPointerLeave",x="onPointerEnter",f="pointer"),D=_==null?b:Or(_),v=j==null?b:Or(j),b=new P(I,f+"leave",_,n,g),b.target=D,b.relatedTarget=v,I=null,ir(g)===h&&(P=new P(x,f+"enter",j,n,g),P.target=v,P.relatedTarget=D,I=P),D=I,_&&j)t:{for(P=_,x=j,f=0,v=P;v;v=Pr(v))f++;for(v=0,I=x;I;I=Pr(I))v++;for(;0<f-v;)P=Pr(P),f--;for(;0<v-f;)x=Pr(x),v--;for(;f--;){if(P===x||x!==null&&P===x.alternate)break t;P=Pr(P),x=Pr(x)}P=null}else P=null;_!==null&&lp(m,b,_,P,!1),j!==null&&D!==null&&lp(m,D,j,P,!0)}}e:{if(b=h?Or(h):window,_=b.nodeName&&b.nodeName.toLowerCase(),_==="select"||_==="input"&&b.type==="file")var N=Ly;else if(ep(b))if(Bg)N=Fy;else{N=My;var O=Oy}else(_=b.nodeName)&&_.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(N=Uy);if(N&&(N=N(e,h))){$g(m,N,n,g);break e}O&&O(e,b,h),e==="focusout"&&(O=b._wrapperState)&&O.controlled&&b.type==="number"&&hc(b,"number",b.value)}switch(O=h?Or(h):window,e){case"focusin":(ep(O)||O.contentEditable==="true")&&(zr=O,kc=h,Js=null);break;case"focusout":Js=kc=zr=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,ip(m,n,g);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":ip(m,n,g)}var k;if(zd)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Dr?Ug(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Mg&&n.locale!=="ko"&&(Dr||w!=="onCompositionStart"?w==="onCompositionEnd"&&Dr&&(k=Og()):(Nn=g,Rd="value"in Nn?Nn.value:Nn.textContent,Dr=!0)),O=Wo(h,w),0<O.length&&(w=new Yh(w,e,null,n,g),m.push({event:w,listeners:O}),k?w.data=k:(k=Fg(n),k!==null&&(w.data=k)))),(k=Py?Ry(e,n):Ay(e,n))&&(h=Wo(h,"onBeforeInput"),0<h.length&&(g=new Yh("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:h}),g.data=k))}Qg(m,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ai(e,n),o!=null&&r.unshift(fi(e,o,i)),o=ai(e,t),o!=null&&r.push(fi(e,o,i))),e=e.return}return r}function Pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lp(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,h=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&h!==null&&(c=h,i?(d=ai(n,o),d!=null&&l.unshift(fi(n,d,c))):i||(d=ai(n,o),d!=null&&l.push(fi(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Gy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function cp(e){return(typeof e=="string"?e:""+e).replace(Gy,`
`).replace(Ky,"")}function uo(e,t,n){if(t=cp(t),cp(e)!==t&&n)throw Error(M(425))}function qo(){}var Ec=null,Sc=null;function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(e){return dp.resolve(null).then(e).catch(Jy)}:Cc;function Jy(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),di(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);di(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Tt="__reactFiber$"+fs,gi="__reactProps$"+fs,nn="__reactContainer$"+fs,Ic="__reactEvents$"+fs,Qy="__reactListeners$"+fs,Zy="__reactHandles$"+fs;function ir(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=up(e);e!==null;){if(n=e[Tt])return n;e=up(e)}return t}e=n,n=e.parentNode}return null}function Ci(e){return e=e[Tt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ia(e){return e[gi]||null}var Pc=[],Mr=-1;function Kn(e){return{current:e}}function ie(e){0>Mr||(e.current=Pc[Mr],Pc[Mr]=null,Mr--)}function ne(e,t){Mr++,Pc[Mr]=e.current,e.current=t}var $n={},ze=Kn($n),Ke=Kn(!1),dr=$n;function ns(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Go(){ie(Ke),ie(ze)}function hp(e,t,n){if(ze.current!==$n)throw Error(M(168));ne(ze,t),ne(Ke,n)}function em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Ov(e)||"Unknown",i));return de({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,dr=ze.current,ne(ze,e),ne(Ke,Ke.current),!0}function pp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=em(e,t,dr),r.__reactInternalMemoizedMergedChildContext=e,ie(Ke),ie(ze),ne(ze,e)):ie(Ke),ne(Ke,n)}var Gt=null,Pa=!1,Ol=!1;function tm(e){Gt===null?Gt=[e]:Gt.push(e)}function e1(e){Pa=!0,tm(e)}function Xn(){if(!Ol&&Gt!==null){Ol=!0;var e=0,t=Q;try{var n=Gt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,Pa=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),Eg(Td,Xn),i}finally{Q=t,Ol=!1}}return null}var Ur=[],Fr=0,Xo=null,Yo=0,at=[],lt=0,ur=null,Kt=1,Xt="";function nr(e,t){Ur[Fr++]=Yo,Ur[Fr++]=Xo,Xo=e,Yo=t}function nm(e,t,n){at[lt++]=Kt,at[lt++]=Xt,at[lt++]=ur,ur=e;var r=Kt;e=Xt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Kt=1<<32-bt(t)+i|n<<i|r,Xt=o+e}else Kt=1<<o|n<<i|r,Xt=e}function Od(e){e.return!==null&&(nr(e,1),nm(e,1,0))}function Md(e){for(;e===Xo;)Xo=Ur[--Fr],Ur[Fr]=null,Yo=Ur[--Fr],Ur[Fr]=null;for(;e===ur;)ur=at[--lt],at[lt]=null,Xt=at[--lt],at[lt]=null,Kt=at[--lt],at[lt]=null}var nt=null,tt=null,oe=!1,xt=null;function rm(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ur!==null?{id:Kt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Rc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ac(e){if(oe){var t=tt;if(t){var n=t;if(!fp(e,t)){if(Rc(e))throw Error(M(418));t=Rn(n.nextSibling);var r=nt;t&&fp(e,t)?rm(r,n):(e.flags=e.flags&-4097|2,oe=!1,nt=e)}}else{if(Rc(e))throw Error(M(418));e.flags=e.flags&-4097|2,oe=!1,nt=e}}}function gp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function ho(e){if(e!==nt)return!1;if(!oe)return gp(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tc(e.type,e.memoizedProps)),t&&(t=tt)){if(Rc(e))throw sm(),Error(M(418));for(;t;)rm(e,t),t=Rn(t.nextSibling)}if(gp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?Rn(e.stateNode.nextSibling):null;return!0}function sm(){for(var e=tt;e;)e=Rn(e.nextSibling)}function rs(){tt=nt=null,oe=!1}function Ud(e){xt===null?xt=[e]:xt.push(e)}var t1=ln.ReactCurrentBatchConfig;function Os(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=i.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mp(e){var t=e._init;return t(e._payload)}function im(e){function t(x,f){if(e){var v=x.deletions;v===null?(x.deletions=[f],x.flags|=16):v.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=Ln(x,f),x.index=0,x.sibling=null,x}function o(x,f,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<f?(x.flags|=2,f):v):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function c(x,f,v,I){return f===null||f.tag!==6?(f=Hl(v,x.mode,I),f.return=x,f):(f=i(f,v),f.return=x,f)}function d(x,f,v,I){var N=v.type;return N===Ar?g(x,f,v.props.children,I,v.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xn&&mp(N)===f.type)?(I=i(f,v.props),I.ref=Os(x,f,v),I.return=x,I):(I=Ro(v.type,v.key,v.props,null,x.mode,I),I.ref=Os(x,f,v),I.return=x,I)}function h(x,f,v,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Wl(v,x.mode,I),f.return=x,f):(f=i(f,v.children||[]),f.return=x,f)}function g(x,f,v,I,N){return f===null||f.tag!==7?(f=cr(v,x.mode,I,N),f.return=x,f):(f=i(f,v),f.return=x,f)}function m(x,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hl(""+f,x.mode,v),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case to:return v=Ro(f.type,f.key,f.props,null,x.mode,v),v.ref=Os(x,null,f),v.return=x,v;case Rr:return f=Wl(f,x.mode,v),f.return=x,f;case xn:var I=f._init;return m(x,I(f._payload),v)}if(Bs(f)||Rs(f))return f=cr(f,x.mode,v,null),f.return=x,f;po(x,f)}return null}function b(x,f,v,I){var N=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:c(x,f,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case to:return v.key===N?d(x,f,v,I):null;case Rr:return v.key===N?h(x,f,v,I):null;case xn:return N=v._init,b(x,f,N(v._payload),I)}if(Bs(v)||Rs(v))return N!==null?null:g(x,f,v,I,null);po(x,v)}return null}function _(x,f,v,I,N){if(typeof I=="string"&&I!==""||typeof I=="number")return x=x.get(v)||null,c(f,x,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case to:return x=x.get(I.key===null?v:I.key)||null,d(f,x,I,N);case Rr:return x=x.get(I.key===null?v:I.key)||null,h(f,x,I,N);case xn:var O=I._init;return _(x,f,v,O(I._payload),N)}if(Bs(I)||Rs(I))return x=x.get(v)||null,g(f,x,I,N,null);po(f,I)}return null}function j(x,f,v,I){for(var N=null,O=null,k=f,w=f=0,E=null;k!==null&&w<v.length;w++){k.index>w?(E=k,k=null):E=k.sibling;var T=b(x,k,v[w],I);if(T===null){k===null&&(k=E);break}e&&k&&T.alternate===null&&t(x,k),f=o(T,f,w),O===null?N=T:O.sibling=T,O=T,k=E}if(w===v.length)return n(x,k),oe&&nr(x,w),N;if(k===null){for(;w<v.length;w++)k=m(x,v[w],I),k!==null&&(f=o(k,f,w),O===null?N=k:O.sibling=k,O=k);return oe&&nr(x,w),N}for(k=r(x,k);w<v.length;w++)E=_(k,x,w,v[w],I),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?w:E.key),f=o(E,f,w),O===null?N=E:O.sibling=E,O=E);return e&&k.forEach(function(A){return t(x,A)}),oe&&nr(x,w),N}function P(x,f,v,I){var N=Rs(v);if(typeof N!="function")throw Error(M(150));if(v=N.call(v),v==null)throw Error(M(151));for(var O=N=null,k=f,w=f=0,E=null,T=v.next();k!==null&&!T.done;w++,T=v.next()){k.index>w?(E=k,k=null):E=k.sibling;var A=b(x,k,T.value,I);if(A===null){k===null&&(k=E);break}e&&k&&A.alternate===null&&t(x,k),f=o(A,f,w),O===null?N=A:O.sibling=A,O=A,k=E}if(T.done)return n(x,k),oe&&nr(x,w),N;if(k===null){for(;!T.done;w++,T=v.next())T=m(x,T.value,I),T!==null&&(f=o(T,f,w),O===null?N=T:O.sibling=T,O=T);return oe&&nr(x,w),N}for(k=r(x,k);!T.done;w++,T=v.next())T=_(k,x,w,T.value,I),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?w:T.key),f=o(T,f,w),O===null?N=T:O.sibling=T,O=T);return e&&k.forEach(function(R){return t(x,R)}),oe&&nr(x,w),N}function D(x,f,v,I){if(typeof v=="object"&&v!==null&&v.type===Ar&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case to:e:{for(var N=v.key,O=f;O!==null;){if(O.key===N){if(N=v.type,N===Ar){if(O.tag===7){n(x,O.sibling),f=i(O,v.props.children),f.return=x,x=f;break e}}else if(O.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===xn&&mp(N)===O.type){n(x,O.sibling),f=i(O,v.props),f.ref=Os(x,O,v),f.return=x,x=f;break e}n(x,O);break}else t(x,O);O=O.sibling}v.type===Ar?(f=cr(v.props.children,x.mode,I,v.key),f.return=x,x=f):(I=Ro(v.type,v.key,v.props,null,x.mode,I),I.ref=Os(x,f,v),I.return=x,x=I)}return l(x);case Rr:e:{for(O=v.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(x,f.sibling),f=i(f,v.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=Wl(v,x.mode,I),f.return=x,x=f}return l(x);case xn:return O=v._init,D(x,f,O(v._payload),I)}if(Bs(v))return j(x,f,v,I);if(Rs(v))return P(x,f,v,I);po(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(x,f.sibling),f=i(f,v),f.return=x,x=f):(n(x,f),f=Hl(v,x.mode,I),f.return=x,x=f),l(x)):n(x,f)}return D}var ss=im(!0),om=im(!1),Jo=Kn(null),Qo=null,$r=null,Fd=null;function $d(){Fd=$r=Qo=null}function Bd(e){var t=Jo.current;ie(Jo),e._currentValue=t}function Dc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){Qo=e,Fd=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Fd!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(Qo===null)throw Error(M(308));$r=e,Qo.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var or=null;function Vd(e){or===null?or=[e]:or.push(e)}function am(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Vd(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Hd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Vd(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cd(e,n)}}function xp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var i=e.updateQueue;vn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,h=d.next;d.next=null,l===null?o=h:l.next=h,l=d;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==l&&(c===null?g.firstBaseUpdate=h:c.next=h,g.lastBaseUpdate=d))}if(o!==null){var m=i.baseState;l=0,g=h=d=null,c=o;do{var b=c.lane,_=c.eventTime;if((r&b)===b){g!==null&&(g=g.next={eventTime:_,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var j=e,P=c;switch(b=t,_=n,P.tag){case 1:if(j=P.payload,typeof j=="function"){m=j.call(_,m,b);break e}m=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=P.payload,b=typeof j=="function"?j.call(_,m,b):j,b==null)break e;m=de({},m,b);break e;case 2:vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,b=i.effects,b===null?i.effects=[c]:b.push(c))}else _={eventTime:_,lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(h=g=_,d=m):g=g.next=_,l|=b;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;b=c,c=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);if(g===null&&(d=m),i.baseState=d,i.firstBaseUpdate=h,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=l,e.lanes=l,e.memoizedState=m}}function vp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Ii={},Pt=Kn(Ii),mi=Kn(Ii),xi=Kn(Ii);function ar(e){if(e===Ii)throw Error(M(174));return e}function Wd(e,t){switch(ne(xi,t),ne(mi,e),ne(Pt,Ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fc(t,e)}ie(Pt),ne(Pt,t)}function is(){ie(Pt),ie(mi),ie(xi)}function cm(e){ar(xi.current);var t=ar(Pt.current),n=fc(t,e.type);t!==n&&(ne(mi,e),ne(Pt,n))}function qd(e){mi.current===e&&(ie(Pt),ie(mi))}var le=Kn(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function Gd(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var So=ln.ReactCurrentDispatcher,Ul=ln.ReactCurrentBatchConfig,hr=0,ce=null,be=null,je=null,ta=!1,Qs=!1,vi=0,n1=0;function Pe(){throw Error(M(321))}function Kd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Xd(e,t,n,r,i,o){if(hr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?o1:a1,e=n(r,i),Qs){o=0;do{if(Qs=!1,vi=0,25<=o)throw Error(M(301));o+=1,je=be=null,t.updateQueue=null,So.current=l1,e=n(r,i)}while(Qs)}if(So.current=na,t=be!==null&&be.next!==null,hr=0,je=be=ce=null,ta=!1,t)throw Error(M(300));return e}function Yd(){var e=vi!==0;return vi=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ce.memoizedState=je=e:je=je.next=e,je}function ht(){if(be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=je===null?ce.memoizedState:je.next;if(t!==null)je=t,be=e;else{if(e===null)throw Error(M(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},je===null?ce.memoizedState=je=e:je=je.next=e}return je}function yi(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=ht(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=l=null,d=null,h=o;do{var g=h.lane;if((hr&g)===g)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(c=d=m,l=r):d=d.next=m,ce.lanes|=g,pr|=g}h=h.next}while(h!==null&&h!==o);d===null?l=r:d.next=c,jt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=ht(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);jt(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function dm(){}function um(e,t){var n=ce,r=ht(),i=t(),o=!jt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,Jd(fm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,bi(9,pm.bind(null,n,r,i,t),void 0,null),_e===null)throw Error(M(349));hr&30||hm(n,t,i)}return i}function hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pm(e,t,n,r){t.value=n,t.getSnapshot=r,gm(t)&&mm(e)}function fm(e,t,n){return n(function(){gm(t)&&mm(e)})}function gm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function mm(e){var t=rn(e,1);t!==null&&wt(t,e,1,-1)}function yp(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=i1.bind(null,ce,e),[t.memoizedState,e]}function bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xm(){return ht().memoizedState}function To(e,t,n,r){var i=St();ce.flags|=e,i.memoizedState=bi(1|t,n,void 0,r===void 0?null:r)}function Ra(e,t,n,r){var i=ht();r=r===void 0?null:r;var o=void 0;if(be!==null){var l=be.memoizedState;if(o=l.destroy,r!==null&&Kd(r,l.deps)){i.memoizedState=bi(t,n,o,r);return}}ce.flags|=e,i.memoizedState=bi(1|t,n,o,r)}function bp(e,t){return To(8390656,8,e,t)}function Jd(e,t){return Ra(2048,8,e,t)}function vm(e,t){return Ra(4,2,e,t)}function ym(e,t){return Ra(4,4,e,t)}function bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wm(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4,4,bm.bind(null,t,e),n)}function Qd(){}function jm(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _m(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function km(e,t,n){return hr&21?(jt(n,t)||(n=Cg(),ce.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function r1(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{Q=n,Ul.transition=r}}function Nm(){return ht().memoizedState}function s1(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Em(e))Sm(t,n);else if(n=am(e,t,n,r),n!==null){var i=Fe();wt(n,e,r,i),Tm(n,t,r)}}function i1(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Em(e))Sm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(i.hasEagerState=!0,i.eagerState=c,jt(c,l)){var d=t.interleaved;d===null?(i.next=i,Vd(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=am(e,t,i,r),n!==null&&(i=Fe(),wt(n,e,r,i),Tm(n,t,r))}}function Em(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Sm(e,t){Qs=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cd(e,n)}}var na={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},o1={readContext:ut,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:bp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s1.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:yp,useDebugValue:Qd,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=yp(!1),t=e[0];return e=r1.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=St();if(oe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),_e===null)throw Error(M(349));hr&30||hm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bp(fm.bind(null,r,o,e),[e]),r.flags|=2048,bi(9,pm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=_e.identifierPrefix;if(oe){var n=Xt,r=Kt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a1={readContext:ut,useCallback:jm,useContext:ut,useEffect:Jd,useImperativeHandle:wm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:_m,useReducer:Fl,useRef:xm,useState:function(){return Fl(yi)},useDebugValue:Qd,useDeferredValue:function(e){var t=ht();return km(t,be.memoizedState,e)},useTransition:function(){var e=Fl(yi)[0],t=ht().memoizedState;return[e,t]},useMutableSource:dm,useSyncExternalStore:um,useId:Nm,unstable_isNewReconciler:!1},l1={readContext:ut,useCallback:jm,useContext:ut,useEffect:Jd,useImperativeHandle:wm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:_m,useReducer:$l,useRef:xm,useState:function(){return $l(yi)},useDebugValue:Qd,useDeferredValue:function(e){var t=ht();return be===null?t.memoizedState=e:km(t,be.memoizedState,e)},useTransition:function(){var e=$l(yi)[0],t=ht().memoizedState;return[e,t]},useMutableSource:dm,useSyncExternalStore:um,useId:Nm,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=zn(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(wt(t,e,i,r),Eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=zn(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(wt(t,e,i,r),Eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=zn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(wt(t,e,r,n),Eo(t,e,r))}};function wp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,o):!0}function Cm(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=ut(o):(i=Xe(t)?dr:ze.current,r=t.contextTypes,o=(r=r!=null)?ns(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function jp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Lc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hd(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ut(o):(o=Xe(t)?dr:ze.current,i.context=ns(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(zc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Aa.enqueueReplaceState(i,i.state,null),Zo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function os(e,t){try{var n="",r=t;do n+=Lv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function Im(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,Gc=r),Oc(e,t)},n}function Pm(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oc(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new c1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_1.bind(null,e,t,n),t.then(e,e))}function kp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Np(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var d1=ln.ReactCurrentOwner,Ge=!1;function Me(e,t,n,r){t.child=e===null?om(t,null,n,r):ss(t,e.child,n,r)}function Ep(e,t,n,r,i){n=n.render;var o=t.ref;return Xr(t,i),r=Xd(e,t,n,r,o,i),n=Yd(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(oe&&n&&Od(t),t.flags|=1,Me(e,t,r,i),t.child)}function Sp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rm(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(l,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(hi(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Mc(e,t,n,r,i)}function Am(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Vr,et),et|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Vr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(Vr,et),et|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(Vr,et),et|=r;return Me(e,t,i,n),t.child}function Dm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mc(e,t,n,r,i){var o=Xe(n)?dr:ze.current;return o=ns(t,o),Xr(t,i),n=Xd(e,t,n,r,o,i),r=Yd(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(oe&&r&&Od(t),t.flags|=1,Me(e,t,n,i),t.child)}function Tp(e,t,n,r,i){if(Xe(n)){var o=!0;Ko(t)}else o=!1;if(Xr(t,i),t.stateNode===null)Co(e,t),Cm(t,n,r),Lc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=ut(h):(h=Xe(n)?dr:ze.current,h=ns(t,h));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==h)&&jp(t,l,r,h),vn=!1;var b=t.memoizedState;l.state=b,Zo(t,r,l,i),d=t.memoizedState,c!==r||b!==d||Ke.current||vn?(typeof g=="function"&&(zc(t,n,g,r),d=t.memoizedState),(c=vn||wp(t,n,c,r,b,d,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lm(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:gt(t.type,c),l.props=h,m=t.pendingProps,b=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=ut(d):(d=Xe(n)?dr:ze.current,d=ns(t,d));var _=n.getDerivedStateFromProps;(g=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||b!==d)&&jp(t,l,r,d),vn=!1,b=t.memoizedState,l.state=b,Zo(t,r,l,i);var j=t.memoizedState;c!==m||b!==j||Ke.current||vn?(typeof _=="function"&&(zc(t,n,_,r),j=t.memoizedState),(h=vn||wp(t,n,h,r,b,j,d)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,j,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,j,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),l.props=r,l.state=j,l.context=d,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),r=!1)}return Uc(e,t,n,r,o,i)}function Uc(e,t,n,r,i,o){Dm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&pp(t,n,!1),sn(e,t,o);r=t.stateNode,d1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ss(t,e.child,null,o),t.child=ss(t,null,c,o)):Me(e,t,c,o),t.memoizedState=r.state,i&&pp(t,n,!0),t.child}function zm(e){var t=e.stateNode;t.pendingContext?hp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hp(e,t.context,!1),Wd(e,t.containerInfo)}function Cp(e,t,n,r,i){return rs(),Ud(i),t.flags|=256,Me(e,t,n,r),t.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function $c(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lm(e,t,n){var r=t.pendingProps,i=le.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(le,i&1),e===null)return Ac(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=La(l,r,0,null),e=cr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$c(n),t.memoizedState=Fc,e):Zd(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return u1(e,t,l,r,c,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Ln(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=Ln(c,o):(o=cr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?$c(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Fc,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zd(e,t){return t=La({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Ud(r),ss(t,e.child,null,n),e=Zd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Bl(Error(M(422))),fo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=La({mode:"visible",children:r.children},i,0,null),o=cr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ss(t,e.child,null,l),t.child.memoizedState=$c(l),t.memoizedState=Fc,o);if(!(t.mode&1))return fo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(M(419)),r=Bl(o,r,void 0),fo(e,t,l,r)}if(c=(l&e.childLanes)!==0,Ge||c){if(r=_e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),wt(r,e,i,-1))}return iu(),r=Bl(Error(M(421))),fo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=k1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,tt=Rn(i.nextSibling),nt=t,oe=!0,xt=null,e!==null&&(at[lt++]=Kt,at[lt++]=Xt,at[lt++]=ur,Kt=e.id,Xt=e.overflow,ur=t),t=Zd(t,r.children),t.flags|=4096,t)}function Ip(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dc(e.return,t,n)}function Vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Om(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ea(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vl(t,!0,n,null,o);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h1(e,t,n){switch(t.tag){case 3:zm(t),rs();break;case 5:cm(t);break;case 1:Xe(t.type)&&Ko(t);break;case 4:Wd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Lm(e,t,n):(ne(le,le.current&1),e=sn(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Om(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Am(e,t,n)}return sn(e,t,n)}var Mm,Bc,Um,Fm;Mm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bc=function(){};Um=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ar(Pt.current);var o=null;switch(n){case"input":i=dc(e,i),r=dc(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=pc(e,i),r=pc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}gc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ii.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var d=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&d!==c&&(d!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(o=o||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ii.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&se("scroll",e),o||c===d||(o=[])):(o=o||[]).push(h,d))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};Fm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ms(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p1(e,t,n){var r=t.pendingProps;switch(Md(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&Go(),Re(t),null;case 3:return r=t.stateNode,is(),ie(Ke),ie(ze),Gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Yc(xt),xt=null))),Bc(e,t),Re(t),null;case 5:qd(t);var i=ar(xi.current);if(n=t.type,e!==null&&t.stateNode!=null)Um(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Re(t),null}if(e=ar(Pt.current),ho(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Tt]=t,r[gi]=o,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)se(Hs[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Uh(r,o),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},se("invalid",r);break;case"textarea":$h(r,o),se("invalid",r)}gc(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,c,e),i=["children",""+c]):ii.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&se("scroll",r)}switch(n){case"input":no(r),Fh(r,o,!0);break;case"textarea":no(r),Bh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Tt]=t,e[gi]=r,Mm(e,t,!1,!1),t.stateNode=e;e:{switch(l=mc(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)se(Hs[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Uh(e,r),i=dc(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),se("invalid",e);break;case"textarea":$h(e,r),i=pc(e,r),se("invalid",e);break;default:i=r}gc(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var d=c[o];o==="style"?xg(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&gg(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&oi(e,d):typeof d=="number"&&oi(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?d!=null&&o==="onScroll"&&se("scroll",e):d!=null&&_d(e,o,d,l))}switch(n){case"input":no(e),Fh(e,r,!1);break;case"textarea":no(e),Bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Fm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=ar(xi.current),ar(Pt.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(o=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Re(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&tt!==null&&t.mode&1&&!(t.flags&128))sm(),rs(),t.flags|=98560,o=!1;else if(o=ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Tt]=t}else rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else xt!==null&&(Yc(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?we===0&&(we=3):iu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return is(),Bc(e,t),e===null&&pi(t.stateNode.containerInfo),Re(t),null;case 10:return Bd(t.type._context),Re(t),null;case 17:return Xe(t.type)&&Go(),Re(t),null;case 19:if(ie(le),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ms(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ea(e),l!==null){for(t.flags|=128,Ms(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>as&&(t.flags|=128,r=!0,Ms(o,!1),t.lanes=4194304)}else{if(!r)if(e=ea(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ms(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return Re(t),null}else 2*ge()-o.renderingStartTime>as&&n!==1073741824&&(t.flags|=128,r=!0,Ms(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return su(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function f1(e,t){switch(Md(t),t.tag){case 1:return Xe(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return is(),ie(Ke),ie(ze),Gd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qd(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return is(),null;case 10:return Bd(t.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var go=!1,Ae=!1,g1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Vc(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Pp=!1;function m1(e,t){if(Ec=Vo,e=Wg(),Ld(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,h=0,g=0,m=e,b=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==o||r!==0&&m.nodeType!==3||(d=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(_=m.firstChild)!==null;)b=m,m=_;for(;;){if(m===e)break t;if(b===n&&++h===i&&(c=l),b===o&&++g===r&&(d=l),(_=m.nextSibling)!==null)break;m=b,b=m.parentNode}m=_}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:e,selectionRange:n},Vo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var P=j.memoizedProps,D=j.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?P:gt(t.type,P),D);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(I){ue(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return j=Pp,Pp=!1,j}function Zs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vc(t,n,o)}i=i.next}while(i!==r)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $m(e){var t=e.alternate;t!==null&&(e.alternate=null,$m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[gi],delete t[Ic],delete t[Qy],delete t[Zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bm(e){return e.tag===5||e.tag===3||e.tag===4}function Rp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}var Ne=null,mt=!1;function gn(e,t,n){for(n=n.child;n!==null;)Vm(e,t,n),n=n.sibling}function Vm(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:Ae||Br(n,t);case 6:var r=Ne,i=mt;Ne=null,gn(e,t,n),Ne=r,mt=i,Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),di(e)):Ll(Ne,n.stateNode));break;case 4:r=Ne,i=mt,Ne=n.stateNode.containerInfo,mt=!0,gn(e,t,n),Ne=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Vc(n,t,l),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!Ae&&(Br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ue(n,t,c)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,gn(e,t,n),Ae=r):gn(e,t,n);break;default:gn(e,t,n)}}function Ap(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g1),t.forEach(function(r){var i=N1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Ne=c.stateNode,mt=!1;break e;case 3:Ne=c.stateNode.containerInfo,mt=!0;break e;case 4:Ne=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Ne===null)throw Error(M(160));Vm(o,l,i),Ne=null,mt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(h){ue(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hm(t,e),t=t.sibling}function Hm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),Et(e),r&4){try{Zs(3,e,e.return),Da(3,e)}catch(P){ue(e,e.return,P)}try{Zs(5,e,e.return)}catch(P){ue(e,e.return,P)}}break;case 1:ft(t,e),Et(e),r&512&&n!==null&&Br(n,n.return);break;case 5:if(ft(t,e),Et(e),r&512&&n!==null&&Br(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(P){ue(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&hg(i,o),mc(c,l);var h=mc(c,o);for(l=0;l<d.length;l+=2){var g=d[l],m=d[l+1];g==="style"?xg(i,m):g==="dangerouslySetInnerHTML"?gg(i,m):g==="children"?oi(i,m):_d(i,g,m,h)}switch(c){case"input":uc(i,o);break;case"textarea":pg(i,o);break;case"select":var b=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Wr(i,!!o.multiple,_,!1):b!==!!o.multiple&&(o.defaultValue!=null?Wr(i,!!o.multiple,o.defaultValue,!0):Wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[gi]=o}catch(P){ue(e,e.return,P)}}break;case 6:if(ft(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(P){ue(e,e.return,P)}}break;case 3:if(ft(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{di(t.containerInfo)}catch(P){ue(e,e.return,P)}break;case 4:ft(t,e),Et(e);break;case 13:ft(t,e),Et(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(nu=ge())),r&4&&Ap(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(h=Ae)||g,ft(t,e),Ae=h):ft(t,e),Et(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for($=e,g=e.child;g!==null;){for(m=$=g;$!==null;){switch(b=$,_=b.child,b.tag){case 0:case 11:case 14:case 15:Zs(4,b,b.return);break;case 1:Br(b,b.return);var j=b.stateNode;if(typeof j.componentWillUnmount=="function"){r=b,n=b.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(P){ue(r,n,P)}}break;case 5:Br(b,b.return);break;case 22:if(b.memoizedState!==null){zp(m);continue}}_!==null?(_.return=b,$=_):zp(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=mg("display",l))}catch(P){ue(e,e.return,P)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){ue(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ft(t,e),Et(e),r&4&&Ap(e);break;case 21:break;default:ft(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=Rp(e);qc(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Rp(e);Wc(e,c,l);break;default:throw Error(M(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x1(e,t,n){$=e,Wm(e)}function Wm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||go;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Ae;c=go;var h=Ae;if(go=l,(Ae=d)&&!h)for($=i;$!==null;)l=$,d=l.child,l.tag===22&&l.memoizedState!==null?Lp(i):d!==null?(d.return=l,$=d):Lp(i);for(;o!==null;)$=o,Wm(o),o=o.sibling;$=i,go=c,Ae=h}Dp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Dp(e)}}function Dp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||Da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&di(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ae||t.flags&512&&Hc(t)}catch(b){ue(t,t.return,b)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function zp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Lp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Da(4,t)}catch(d){ue(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){ue(t,i,d)}}var o=t.return;try{Hc(t)}catch(d){ue(t,o,d)}break;case 5:var l=t.return;try{Hc(t)}catch(d){ue(t,l,d)}}}catch(d){ue(t,t.return,d)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var v1=Math.ceil,ra=ln.ReactCurrentDispatcher,eu=ln.ReactCurrentOwner,dt=ln.ReactCurrentBatchConfig,K=0,_e=null,ve=null,Ee=0,et=0,Vr=Kn(0),we=0,wi=null,pr=0,za=0,tu=0,ei=null,He=null,nu=0,as=1/0,qt=null,sa=!1,Gc=null,Dn=null,mo=!1,En=null,ia=0,ti=0,Kc=null,Io=-1,Po=0;function Fe(){return K&6?ge():Io!==-1?Io:Io=ge()}function zn(e){return e.mode&1?K&2&&Ee!==0?Ee&-Ee:t1.transition!==null?(Po===0&&(Po=Cg()),Po):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Lg(e.type)),e):1}function wt(e,t,n,r){if(50<ti)throw ti=0,Kc=null,Error(M(185));Si(e,n,r),(!(K&2)||e!==_e)&&(e===_e&&(!(K&2)&&(za|=n),we===4&&bn(e,Ee)),Ye(e,r),n===1&&K===0&&!(t.mode&1)&&(as=ge()+500,Pa&&Xn()))}function Ye(e,t){var n=e.callbackNode;ty(e,t);var r=Bo(e,e===_e?Ee:0);if(r===0)n!==null&&Wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wh(n),t===1)e.tag===0?e1(Op.bind(null,e)):tm(Op.bind(null,e)),Yy(function(){!(K&6)&&Xn()}),n=null;else{switch(Ig(r)){case 1:n=Td;break;case 4:n=Sg;break;case 16:n=$o;break;case 536870912:n=Tg;break;default:n=$o}n=Zm(n,qm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qm(e,t){if(Io=-1,Po=0,K&6)throw Error(M(327));var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var r=Bo(e,e===_e?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oa(e,r);else{t=r;var i=K;K|=2;var o=Km();(_e!==e||Ee!==t)&&(qt=null,as=ge()+500,lr(e,t));do try{w1();break}catch(c){Gm(e,c)}while(!0);$d(),ra.current=o,K=i,ve!==null?t=0:(_e=null,Ee=0,t=we)}if(t!==0){if(t===2&&(i=wc(e),i!==0&&(r=i,t=Xc(e,i))),t===1)throw n=wi,lr(e,0),bn(e,r),Ye(e,ge()),n;if(t===6)bn(e,r);else{if(i=e.current.alternate,!(r&30)&&!y1(i)&&(t=oa(e,r),t===2&&(o=wc(e),o!==0&&(r=o,t=Xc(e,o))),t===1))throw n=wi,lr(e,0),bn(e,r),Ye(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:rr(e,He,qt);break;case 3:if(bn(e,r),(r&130023424)===r&&(t=nu+500-ge(),10<t)){if(Bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Cc(rr.bind(null,e,He,qt),t);break}rr(e,He,qt);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-bt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v1(r/1960))-r,10<r){e.timeoutHandle=Cc(rr.bind(null,e,He,qt),r);break}rr(e,He,qt);break;case 5:rr(e,He,qt);break;default:throw Error(M(329))}}}return Ye(e,ge()),e.callbackNode===n?qm.bind(null,e):null}function Xc(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=oa(e,t),e!==2&&(t=He,He=n,t!==null&&Yc(t)),e}function Yc(e){He===null?He=e:He.push.apply(He,e)}function y1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!jt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~tu,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Op(e){if(K&6)throw Error(M(327));Yr();var t=Bo(e,0);if(!(t&1))return Ye(e,ge()),null;var n=oa(e,t);if(e.tag!==0&&n===2){var r=wc(e);r!==0&&(t=r,n=Xc(e,r))}if(n===1)throw n=wi,lr(e,0),bn(e,t),Ye(e,ge()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,He,qt),Ye(e,ge()),null}function ru(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(as=ge()+500,Pa&&Xn())}}function fr(e){En!==null&&En.tag===0&&!(K&6)&&Yr();var t=K;K|=1;var n=dt.transition,r=Q;try{if(dt.transition=null,Q=1,e)return e()}finally{Q=r,dt.transition=n,K=t,!(K&6)&&Xn()}}function su(){et=Vr.current,ie(Vr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xy(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Md(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:is(),ie(Ke),ie(ze),Gd();break;case 5:qd(r);break;case 4:is();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Bd(r.type._context);break;case 22:case 23:su()}n=n.return}if(_e=e,ve=e=Ln(e.current,null),Ee=et=t,we=0,wi=null,tu=za=pr=0,He=ei=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}or=null}return e}function Gm(e,t){do{var n=ve;try{if($d(),So.current=na,ta){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ta=!1}if(hr=0,je=be=ce=null,Qs=!1,vi=0,eu.current=null,n===null||n.return===null){we=1,wi=t,ve=null;break}e:{var o=e,l=n.return,c=n,d=t;if(t=Ee,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var b=g.alternate;b?(g.updateQueue=b.updateQueue,g.memoizedState=b.memoizedState,g.lanes=b.lanes):(g.updateQueue=null,g.memoizedState=null)}var _=kp(l);if(_!==null){_.flags&=-257,Np(_,l,c,o,t),_.mode&1&&_p(o,h,t),t=_,d=h;var j=t.updateQueue;if(j===null){var P=new Set;P.add(d),t.updateQueue=P}else j.add(d);break e}else{if(!(t&1)){_p(o,h,t),iu();break e}d=Error(M(426))}}else if(oe&&c.mode&1){var D=kp(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Np(D,l,c,o,t),Ud(os(d,c));break e}}o=d=os(d,c),we!==4&&(we=2),ei===null?ei=[o]:ei.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Im(o,d,t);xp(o,x);break e;case 1:c=d;var f=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Dn===null||!Dn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var I=Pm(o,c,t);xp(o,I);break e}}o=o.return}while(o!==null)}Ym(n)}catch(N){t=N,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Km(){var e=ra.current;return ra.current=na,e===null?na:e}function iu(){(we===0||we===3||we===2)&&(we=4),_e===null||!(pr&268435455)&&!(za&268435455)||bn(_e,Ee)}function oa(e,t){var n=K;K|=2;var r=Km();(_e!==e||Ee!==t)&&(qt=null,lr(e,t));do try{b1();break}catch(i){Gm(e,i)}while(!0);if($d(),K=n,ra.current=r,ve!==null)throw Error(M(261));return _e=null,Ee=0,we}function b1(){for(;ve!==null;)Xm(ve)}function w1(){for(;ve!==null&&!qv();)Xm(ve)}function Xm(e){var t=Qm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Ym(e):ve=t,eu.current=null}function Ym(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f1(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=p1(n,t,et),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function rr(e,t,n){var r=Q,i=dt.transition;try{dt.transition=null,Q=1,j1(e,t,n,r)}finally{dt.transition=i,Q=r}return null}function j1(e,t,n,r){do Yr();while(En!==null);if(K&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ny(e,o),e===_e&&(ve=_e=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Zm($o,function(){return Yr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dt.transition,dt.transition=null;var l=Q;Q=1;var c=K;K|=4,eu.current=null,m1(e,n),Hm(n,e),By(Sc),Vo=!!Ec,Sc=Ec=null,e.current=n,x1(n),Gv(),K=c,Q=l,dt.transition=o}else e.current=n;if(mo&&(mo=!1,En=e,ia=i),o=e.pendingLanes,o===0&&(Dn=null),Yv(n.stateNode),Ye(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=Gc,Gc=null,e;return ia&1&&e.tag!==0&&Yr(),o=e.pendingLanes,o&1?e===Kc?ti++:(ti=0,Kc=e):ti=0,Xn(),null}function Yr(){if(En!==null){var e=Ig(ia),t=dt.transition,n=Q;try{if(dt.transition=null,Q=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,ia=0,K&6)throw Error(M(331));var i=K;for(K|=4,$=e.current;$!==null;){var o=$,l=o.child;if($.flags&16){var c=o.deletions;if(c!==null){for(var d=0;d<c.length;d++){var h=c[d];for($=h;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:Zs(8,g,o)}var m=g.child;if(m!==null)m.return=g,$=m;else for(;$!==null;){g=$;var b=g.sibling,_=g.return;if($m(g),g===h){$=null;break}if(b!==null){b.return=_,$=b;break}$=_}}}var j=o.alternate;if(j!==null){var P=j.child;if(P!==null){j.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}$=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,$=l;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zs(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,$=x;break e}$=o.return}}var f=e.current;for($=f;$!==null;){l=$;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,$=v;else e:for(l=f;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Da(9,c)}}catch(N){ue(c,c.return,N)}if(c===l){$=null;break e}var I=c.sibling;if(I!==null){I.return=c.return,$=I;break e}$=c.return}}if(K=i,Xn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ea,e)}catch{}r=!0}return r}finally{Q=n,dt.transition=t}}return!1}function Mp(e,t,n){t=os(n,t),t=Im(e,t,1),e=An(e,t,1),t=Fe(),e!==null&&(Si(e,1,t),Ye(e,t))}function ue(e,t,n){if(e.tag===3)Mp(e,e,n);else for(;t!==null;){if(t.tag===3){Mp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=os(n,e),e=Pm(t,e,1),t=An(t,e,1),e=Fe(),t!==null&&(Si(t,1,e),Ye(t,e));break}}t=t.return}}function _1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>ge()-nu?lr(e,0):tu|=n),Ye(e,t)}function Jm(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=Fe();e=rn(e,t),e!==null&&(Si(e,t,n),Ye(e,n))}function k1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function N1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Jm(e,n)}var Qm;Qm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,h1(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,oe&&t.flags&1048576&&nm(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Co(e,t),e=t.pendingProps;var i=ns(t,ze.current);Xr(t,n),i=Xd(null,t,r,e,i,n);var o=Yd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Ko(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hd(t),i.updater=Aa,t.stateNode=i,i._reactInternals=t,Lc(t,r,e,n),t=Uc(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Od(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=S1(r),e=gt(r,e),i){case 0:t=Mc(null,t,r,e,n);break e;case 1:t=Tp(null,t,r,e,n);break e;case 11:t=Ep(null,t,r,e,n);break e;case 14:t=Sp(null,t,r,gt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Mc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Tp(e,t,r,i,n);case 3:e:{if(zm(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lm(e,t),Zo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=os(Error(M(423)),t),t=Cp(e,t,r,n,i);break e}else if(r!==i){i=os(Error(M(424)),t),t=Cp(e,t,r,n,i);break e}else for(tt=Rn(t.stateNode.containerInfo.firstChild),nt=t,oe=!0,xt=null,n=om(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){t=sn(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return cm(t),e===null&&Ac(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Tc(r,i)?l=null:o!==null&&Tc(r,o)&&(t.flags|=32),Dm(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Ac(t),null;case 13:return Lm(e,t,n);case 4:return Wd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ss(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Ep(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ne(Jo,r._currentValue),r._currentValue=l,o!==null)if(jt(o.value,l)){if(o.children===i.children&&!Ke.current){t=sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=Zt(-1,n&-n),d.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?d.next=d:(d.next=g.next,g.next=d),h.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Dc(o.return,n,t),c.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Dc(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=ut(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),Sp(e,t,r,i,n);case 15:return Rm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Co(e,t),t.tag=1,Xe(r)?(e=!0,Ko(t)):e=!1,Xr(t,n),Cm(t,r,i),Lc(t,r,i,n),Uc(null,t,r,!0,e,n);case 19:return Om(e,t,n);case 22:return Am(e,t,n)}throw Error(M(156,t.tag))};function Zm(e,t){return Eg(e,t)}function E1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new E1(e,t,n,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S1(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nd)return 11;if(e===Ed)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ou(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ar:return cr(n.children,i,o,t);case kd:l=8,i|=8;break;case oc:return e=ct(12,n,t,i|2),e.elementType=oc,e.lanes=o,e;case ac:return e=ct(13,n,t,i),e.elementType=ac,e.lanes=o,e;case lc:return e=ct(19,n,t,i),e.elementType=lc,e.lanes=o,e;case cg:return La(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ag:l=10;break e;case lg:l=9;break e;case Nd:l=11;break e;case Ed:l=14;break e;case xn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ct(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function cr(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function La(e,t,n,r){return e=ct(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,i,o,l,c,d){return e=new T1(e,t,n,c,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(o),e}function C1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ex(e){if(!e)return $n;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return em(e,n,t)}return t}function tx(e,t,n,r,i,o,l,c,d){return e=au(n,r,!0,e,i,o,l,c,d),e.context=ex(null),n=e.current,r=Fe(),i=zn(n),o=Zt(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,Si(e,i,r),Ye(e,r),e}function Oa(e,t,n,r){var i=t.current,o=Fe(),l=zn(i);return n=ex(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,l),e!==null&&(wt(e,i,l,o),Eo(e,i,l)),l}function aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){Up(e,t),(e=e.alternate)&&Up(e,t)}function I1(){return null}var nx=typeof reportError=="function"?reportError:function(e){console.error(e)};function cu(e){this._internalRoot=e}Ma.prototype.render=cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Oa(e,t,null,null)};Ma.prototype.unmount=cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Oa(null,e,null,null)}),t[nn]=null}};function Ma(e){this._internalRoot=e}Ma.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ag();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&zg(e)}};function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function P1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=aa(l);o.call(h)}}var l=tx(t,r,e,0,null,!1,!1,"",Fp);return e._reactRootContainer=l,e[nn]=l.current,pi(e.nodeType===8?e.parentNode:e),fr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=aa(d);c.call(h)}}var d=au(e,0,!1,null,null,!1,!1,"",Fp);return e._reactRootContainer=d,e[nn]=d.current,pi(e.nodeType===8?e.parentNode:e),fr(function(){Oa(t,d,n,r)}),d}function Fa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var c=i;i=function(){var d=aa(l);c.call(d)}}Oa(t,l,e,i)}else l=P1(n,t,e,i,r);return aa(l)}Pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vs(t.pendingLanes);n!==0&&(Cd(t,n|1),Ye(t,ge()),!(K&6)&&(as=ge()+500,Xn()))}break;case 13:fr(function(){var r=rn(e,1);if(r!==null){var i=Fe();wt(r,e,1,i)}}),lu(e,1)}};Id=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Fe();wt(t,e,134217728,n)}lu(e,134217728)}};Rg=function(e){if(e.tag===13){var t=zn(e),n=rn(e,t);if(n!==null){var r=Fe();wt(n,e,t,r)}lu(e,t)}};Ag=function(){return Q};Dg=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};vc=function(e,t,n){switch(t){case"input":if(uc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ia(r);if(!i)throw Error(M(90));ug(r),uc(r,i)}}}break;case"textarea":pg(e,n);break;case"select":t=n.value,t!=null&&Wr(e,!!n.multiple,t,!1)}};bg=ru;wg=fr;var R1={usingClientEntryPoint:!1,Events:[Ci,Or,Ia,vg,yg,ru]},Us={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A1={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kg(e),e===null?null:e.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Ea=xo.inject(A1),It=xo}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R1;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(t))throw Error(M(200));return C1(e,t,null,n)};st.createRoot=function(e,t){if(!du(e))throw Error(M(299));var n=!1,r="",i=nx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,pi(e.nodeType===8?e.parentNode:e),new cu(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=kg(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return fr(e)};st.hydrate=function(e,t,n){if(!Ua(t))throw Error(M(200));return Fa(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!du(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=nx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tx(t,null,e,1,n??null,i,!1,o,l),e[nn]=t.current,pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ma(t)};st.render=function(e,t,n){if(!Ua(t))throw Error(M(200));return Fa(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(M(40));return e._reactRootContainer?(fr(function(){Fa(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};st.unstable_batchedUpdates=ru;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ua(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Fa(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(e){console.error(e)}}rx(),rg.exports=st;var D1=rg.exports,$p=D1;sc.createRoot=$p.createRoot,sc.hydrateRoot=$p.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ji.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Bp="popstate";function z1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:c}=r.location;return Jc("",{pathname:o,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:la(i)}return O1(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L1(){return Math.random().toString(36).substr(2,8)}function Vp(e,t){return{usr:e.state,key:e.key,idx:t}}function Jc(e,t,n,r){return n===void 0&&(n=null),ji({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gs(t):t,{state:n,key:t&&t.key||r||L1()})}function la(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,c=Sn.Pop,d=null,h=g();h==null&&(h=0,l.replaceState(ji({},l.state,{idx:h}),""));function g(){return(l.state||{idx:null}).idx}function m(){c=Sn.Pop;let D=g(),x=D==null?null:D-h;h=D,d&&d({action:c,location:P.location,delta:x})}function b(D,x){c=Sn.Push;let f=Jc(P.location,D,x);h=g()+1;let v=Vp(f,h),I=P.createHref(f);try{l.pushState(v,"",I)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(I)}o&&d&&d({action:c,location:P.location,delta:1})}function _(D,x){c=Sn.Replace;let f=Jc(P.location,D,x);h=g();let v=Vp(f,h),I=P.createHref(f);l.replaceState(v,"",I),o&&d&&d({action:c,location:P.location,delta:0})}function j(D){let x=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof D=="string"?D:la(D);return f=f.replace(/ $/,"%20"),me(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let P={get action(){return c},get location(){return e(i,l)},listen(D){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Bp,m),d=D,()=>{i.removeEventListener(Bp,m),d=null}},createHref(D){return t(i,D)},createURL:j,encodeLocation(D){let x=j(D);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:b,replace:_,go(D){return l.go(D)}};return P}var Hp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hp||(Hp={}));function M1(e,t,n){return n===void 0&&(n="/"),U1(e,t,n)}function U1(e,t,n,r){let i=typeof t=="string"?gs(t):t,o=hu(i.pathname||"/",n);if(o==null)return null;let l=sx(e);F1(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let h=Q1(o);c=X1(l[d],h)}return c}function sx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,c)=>{let d={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};d.relativePath.startsWith("/")&&(me(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let h=On([r,d.relativePath]),g=n.concat(d);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),sx(o.children,t,g,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:G1(h,o.index),routesMeta:g})};return e.forEach((o,l)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,l);else for(let d of ix(o.path))i(o,l,d)}),t}function ix(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ix(r.join("/")),c=[];return c.push(...l.map(d=>d===""?o:[o,d].join("/"))),i&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function F1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $1=/^:[\w-]+$/,B1=3,V1=2,H1=1,W1=10,q1=-2,Wp=e=>e==="*";function G1(e,t){let n=e.split("/"),r=n.length;return n.some(Wp)&&(r+=q1),t&&(r+=V1),n.filter(i=>!Wp(i)).reduce((i,o)=>i+($1.test(o)?B1:o===""?H1:W1),r)}function K1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function X1(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let c=0;c<r.length;++c){let d=r[c],h=c===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=Y1({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},g),b=d.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:On([o,m.pathname]),pathnameBase:r2(On([o,m.pathnameBase])),route:b}),m.pathnameBase!=="/"&&(o=On([o,m.pathnameBase]))}return l}function Y1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=J1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,g,m)=>{let{paramName:b,isOptional:_}=g;if(b==="*"){let P=c[m]||"";l=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const j=c[m];return _&&!j?h[b]=void 0:h[b]=(j||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:l,pattern:e}}function J1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Q1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return uu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Z1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e2=e=>Z1.test(e);function t2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?gs(e):e,o;if(n)if(e2(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),uu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=qp(n.substring(1),"/"):o=qp(n,t)}else o=t;return{pathname:o,search:s2(r),hash:i2(i)}}function qp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pu(e,t){let n=n2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=gs(e):(i=ji({},e),me(!i.pathname||!i.pathname.includes("?"),ql("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),ql("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),ql("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let b=l.split("/");for(;b[0]==="..";)b.shift(),m-=1;i.pathname=b.join("/")}c=m>=0?t[m]:"/"}let d=t2(i,c),h=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||g)&&(d.pathname+="/"),d}const On=e=>e.join("/").replace(/\/\/+/g,"/"),r2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ox=["post","put","patch","delete"];new Set(ox);const a2=["get",...ox];new Set(a2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(this,arguments)}const gu=C.createContext(null),l2=C.createContext(null),Yn=C.createContext(null),$a=C.createContext(null),cn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),ax=C.createContext(null);function c2(e,t){let{relative:n}=t===void 0?{}:t;ms()||me(!1);let{basename:r,navigator:i}=C.useContext(Yn),{hash:o,pathname:l,search:c}=dx(e,{relative:n}),d=l;return r!=="/"&&(d=l==="/"?r:On([r,l])),i.createHref({pathname:d,search:c,hash:o})}function ms(){return C.useContext($a)!=null}function dn(){return ms()||me(!1),C.useContext($a).location}function lx(e){C.useContext(Yn).static||C.useLayoutEffect(e)}function kt(){let{isDataRoute:e}=C.useContext(cn);return e?j2():d2()}function d2(){ms()||me(!1);let e=C.useContext(gu),{basename:t,future:n,navigator:r}=C.useContext(Yn),{matches:i}=C.useContext(cn),{pathname:o}=dn(),l=JSON.stringify(pu(i,n.v7_relativeSplatPath)),c=C.useRef(!1);return lx(()=>{c.current=!0}),C.useCallback(function(h,g){if(g===void 0&&(g={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=fu(h,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:On([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,l,o,e])}function cx(){let{matches:e}=C.useContext(cn),t=e[e.length-1];return t?t.params:{}}function dx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Yn),{matches:i}=C.useContext(cn),{pathname:o}=dn(),l=JSON.stringify(pu(i,r.v7_relativeSplatPath));return C.useMemo(()=>fu(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function u2(e,t){return h2(e,t)}function h2(e,t,n,r){ms()||me(!1);let{navigator:i}=C.useContext(Yn),{matches:o}=C.useContext(cn),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let h=dn(),g;if(t){var m;let D=typeof t=="string"?gs(t):t;d==="/"||(m=D.pathname)!=null&&m.startsWith(d)||me(!1),g=D}else g=h;let b=g.pathname||"/",_=b;if(d!=="/"){let D=d.replace(/^\//,"").split("/");_="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let j=M1(e,{pathname:_}),P=x2(j&&j.map(D=>Object.assign({},D,{params:Object.assign({},c,D.params),pathname:On([d,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?d:On([d,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),o,n,r);return t&&P?C.createElement($a.Provider,{value:{location:_i({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Sn.Pop}},P):P}function p2(){let e=w2(),t=o2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const f2=C.createElement(p2,null);class g2 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(cn.Provider,{value:this.props.routeContext},C.createElement(ax.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m2(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(gu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(cn.Provider,{value:t},r)}function x2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let g=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);g>=0||me(!1),l=l.slice(0,Math.min(l.length,g+1))}let d=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=g),m.route.id){let{loaderData:b,errors:_}=n,j=m.route.loader&&b[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||j){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((g,m,b)=>{let _,j=!1,P=null,D=null;n&&(_=c&&m.route.id?c[m.route.id]:void 0,P=m.route.errorElement||f2,d&&(h<0&&b===0?(_2("route-fallback"),j=!0,D=null):h===b&&(j=!0,D=m.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,b+1)),f=()=>{let v;return _?v=P:j?v=D:m.route.Component?v=C.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=g,C.createElement(m2,{match:m,routeContext:{outlet:g,matches:x,isDataRoute:n!=null},children:v})};return n&&(m.route.ErrorBoundary||m.route.errorElement||b===0)?C.createElement(g2,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var ux=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ux||{}),hx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hx||{});function v2(e){let t=C.useContext(gu);return t||me(!1),t}function y2(e){let t=C.useContext(l2);return t||me(!1),t}function b2(e){let t=C.useContext(cn);return t||me(!1),t}function px(e){let t=b2(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function w2(){var e;let t=C.useContext(ax),n=y2(),r=px();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function j2(){let{router:e}=v2(ux.UseNavigateStable),t=px(hx.UseNavigateStable),n=C.useRef(!1);return lx(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,_i({fromRouteId:t},o)))},[e,t])}const Gp={};function _2(e,t,n){Gp[e]||(Gp[e]=!0)}function k2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ao(e){let{to:t,replace:n,state:r,relative:i}=e;ms()||me(!1);let{future:o,static:l}=C.useContext(Yn),{matches:c}=C.useContext(cn),{pathname:d}=dn(),h=kt(),g=fu(t,pu(c,o.v7_relativeSplatPath),d,i==="path"),m=JSON.stringify(g);return C.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:i}),[h,m,i,n,r]),null}function J(e){me(!1)}function N2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:o,static:l=!1,future:c}=e;ms()&&me(!1);let d=t.replace(/^\/*/,"/"),h=C.useMemo(()=>({basename:d,navigator:o,static:l,future:_i({v7_relativeSplatPath:!1},c)}),[d,c,o,l]);typeof r=="string"&&(r=gs(r));let{pathname:g="/",search:m="",hash:b="",state:_=null,key:j="default"}=r,P=C.useMemo(()=>{let D=hu(g,d);return D==null?null:{location:{pathname:D,search:m,hash:b,state:_,key:j},navigationType:i}},[d,g,m,b,_,j,i]);return P==null?null:C.createElement(Yn.Provider,{value:h},C.createElement($a.Provider,{children:n,value:P}))}function Kp(e){let{children:t,location:n}=e;return u2(Qc(t),n)}new Promise(()=>{});function Qc(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Qc(r.props.children,o));return}r.type!==J&&me(!1),!r.props.index||!r.props.children||me(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Qc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zc(){return Zc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zc.apply(this,arguments)}function E2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function S2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function T2(e,t){return e.button===0&&(!t||t==="_self")&&!S2(e)}function ed(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function C2(e,t){let n=ed(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const I2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],P2="6";try{window.__reactRouterVersion=P2}catch{}const R2="startTransition",Xp=_v[R2];function A2(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=z1({window:i,v5Compat:!0}));let l=o.current,[c,d]=C.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},g=C.useCallback(m=>{h&&Xp?Xp(()=>d(m)):d(m)},[d,h]);return C.useLayoutEffect(()=>l.listen(g),[l,g]),C.useEffect(()=>k2(r),[r]),C.createElement(N2,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const D2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:c,target:d,to:h,preventScrollReset:g,viewTransition:m}=t,b=E2(t,I2),{basename:_}=C.useContext(Yn),j,P=!1;if(typeof h=="string"&&z2.test(h)&&(j=h,D2))try{let v=new URL(window.location.href),I=h.startsWith("//")?new URL(v.protocol+h):new URL(h),N=hu(I.pathname,_);I.origin===v.origin&&N!=null?h=N+I.search+I.hash:P=!0}catch{}let D=c2(h,{relative:i}),x=L2(h,{replace:l,state:c,target:d,preventScrollReset:g,relative:i,viewTransition:m});function f(v){r&&r(v),v.defaultPrevented||x(v)}return C.createElement("a",Zc({},b,{href:j||D,onClick:P||o?r:f,ref:n,target:d}))});var Yp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yp||(Yp={}));var Jp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jp||(Jp={}));function L2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:c}=t===void 0?{}:t,d=kt(),h=dn(),g=dx(e,{relative:l});return C.useCallback(m=>{if(T2(m,n)){m.preventDefault();let b=r!==void 0?r:la(h)===la(g);d(e,{replace:b,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[h,d,g,r,i,n,e,o,l,c])}function O2(e){let t=C.useRef(ed(e)),n=C.useRef(!1),r=dn(),i=C.useMemo(()=>C2(r.search,n.current?null:t.current),[r.search]),o=kt(),l=C.useCallback((c,d)=>{const h=ed(typeof c=="function"?c(i):c);n.current=!0,o("?"+h,d)},[o,i]);return[i,l]}const fx=C.createContext(void 0),xe=()=>{const e=C.useContext(fx);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},M2=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},U2=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},F2=({children:e})=>{const[t,n]=C.useState(null),[r,i]=C.useState(!0),[o,l]=C.useState(null),c=async()=>{try{i(!0),l(null);const{type:h,value:g}=U2(),m=h==="subdomain"?`/api/tenants/by-subdomain/${g}`:`/api/tenants/by-domain/${encodeURIComponent(g)}`,b=await fetch(`http://localhost:3001${m}`);if(!b.ok)throw b.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const _=await b.json();if(_.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(_.status==="cancelled")throw new Error("Cuenta cancelada.");n(_),M2(_.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{i(!1)}};C.useEffect(()=>{c()},[]);const d=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return s.jsx(fx.Provider,{value:{tenant:t,loading:r,error:o,isWhiteLabel:d,refreshTenant:c},children:e})};var Qp={};/**
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
 */const gx=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},$2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],l=e[n++],c=e[n++],d=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},mx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],l=i+1<e.length,c=l?e[i+1]:0,d=i+2<e.length,h=d?e[i+2]:0,g=o>>2,m=(o&3)<<4|c>>4;let b=(c&15)<<2|h>>6,_=h&63;d||(_=64,l||(b=64)),r.push(n[g],n[m],n[b],n[_])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gx(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||c==null||h==null||m==null)throw new B2;const b=o<<2|c>>4;if(r.push(b),h!==64){const _=c<<4&240|h>>2;if(r.push(_),m!==64){const j=h<<6&192|m;r.push(j)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class B2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V2=function(e){const t=gx(e);return mx.encodeByteArray(t,!0)},ca=function(e){return V2(e).replace(/\./g,"")},xx=function(e){try{return mx.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const W2=()=>H2().__FIREBASE_DEFAULTS__,q2=()=>{if(typeof process>"u"||typeof Qp>"u")return;const e=Qp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},G2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xx(e[1]);return t&&JSON.parse(t)},mu=()=>{try{return W2()||q2()||G2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vx=e=>{var t,n;return(n=(t=mu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yx=e=>{const t=vx(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},bx=()=>{var e;return(e=mu())===null||e===void 0?void 0:e.config},wx=e=>{var t;return(t=mu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */function jx(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ca(JSON.stringify(n)),ca(JSON.stringify(l)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Y2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function J2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Q2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z2(){const e=$e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function eb(){try{return typeof indexedDB=="object"}catch{return!1}}function tb(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const nb="FirebaseError";class Lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nb,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?rb(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Lt(i,c,r)}}function rb(e,t){return e.replace(sb,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sb=/\{\$([^}]+)}/g;function ib(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function da(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],l=t[i];if(Zp(o)&&Zp(l)){if(!da(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zp(e){return e!==null&&typeof e=="object"}/**
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
 */function Ri(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ws(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function qs(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ob(e,t){const n=new ab(e,t);return n.subscribe.bind(n)}class ab{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lb(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Gl),i.error===void 0&&(i.error=Gl),i.complete===void 0&&(i.complete=Gl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lb(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Gl(){}/**
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
 */function Nt(e){return e&&e._delegate?e._delegate:e}class Bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class cb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new K2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ub(t))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=sr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=sr){return this.instances.has(t)}getOptions(t=sr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:db(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=sr){return this.component?this.component.multipleInstances?t:sr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function db(e){return e===sr?void 0:e}function ub(e){return e.instantiationMode==="EAGER"}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const pb={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},fb=Y.INFO,gb={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},mb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=gb[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xu{constructor(t){this.name=t,this._logLevel=fb,this._logHandler=mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const xb=(e,t)=>t.some(n=>e instanceof n);let ef,tf;function vb(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yb(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _x=new WeakMap,td=new WeakMap,kx=new WeakMap,Kl=new WeakMap,vu=new WeakMap;function bb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(Mn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&_x.set(n,e)}).catch(()=>{}),vu.set(t,e),t}function wb(e){if(td.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});td.set(e,t)}let nd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return td.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kx.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jb(e){nd=e(nd)}function _b(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xl(this),t,...n);return kx.set(r,t.sort?t.sort():[t]),Mn(r)}:yb().includes(e)?function(...t){return e.apply(Xl(this),t),Mn(_x.get(this))}:function(...t){return Mn(e.apply(Xl(this),t))}}function kb(e){return typeof e=="function"?_b(e):(e instanceof IDBTransaction&&wb(e),xb(e,vb())?new Proxy(e,nd):e)}function Mn(e){if(e instanceof IDBRequest)return bb(e);if(Kl.has(e))return Kl.get(e);const t=kb(e);return t!==e&&(Kl.set(e,t),vu.set(t,e)),t}const Xl=e=>vu.get(e);function Nb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(e,t),c=Mn(l);return r&&l.addEventListener("upgradeneeded",d=>{r(Mn(l.result),d.oldVersion,d.newVersion,Mn(l.transaction),d)}),n&&l.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Eb=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],Yl=new Map;function nf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Yl.get(t))return Yl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Sb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Eb.includes(n)))return;const o=async function(l,...c){const d=this.transaction(l,i?"readwrite":"readonly");let h=d.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&d.done]))[0]};return Yl.set(t,o),o}jb(e=>({...e,get:(t,n,r)=>nf(t,n)||e.get(t,n,r),has:(t,n)=>!!nf(t,n)||e.has(t,n)}));/**
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
 */class Tb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const rd="@firebase/app",rf="0.10.13";/**
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
 */const on=new xu("@firebase/app"),Ib="@firebase/app-compat",Pb="@firebase/analytics-compat",Rb="@firebase/analytics",Ab="@firebase/app-check-compat",Db="@firebase/app-check",zb="@firebase/auth",Lb="@firebase/auth-compat",Ob="@firebase/database",Mb="@firebase/data-connect",Ub="@firebase/database-compat",Fb="@firebase/functions",$b="@firebase/functions-compat",Bb="@firebase/installations",Vb="@firebase/installations-compat",Hb="@firebase/messaging",Wb="@firebase/messaging-compat",qb="@firebase/performance",Gb="@firebase/performance-compat",Kb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Yb="@firebase/storage",Jb="@firebase/storage-compat",Qb="@firebase/firestore",Zb="@firebase/vertexai-preview",ew="@firebase/firestore-compat",tw="firebase",nw="10.14.1";/**
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
 */const sd="[DEFAULT]",rw={[rd]:"fire-core",[Ib]:"fire-core-compat",[Rb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Db]:"fire-app-check",[Ab]:"fire-app-check-compat",[zb]:"fire-auth",[Lb]:"fire-auth-compat",[Ob]:"fire-rtdb",[Mb]:"fire-data-connect",[Ub]:"fire-rtdb-compat",[Fb]:"fire-fn",[$b]:"fire-fn-compat",[Bb]:"fire-iid",[Vb]:"fire-iid-compat",[Hb]:"fire-fcm",[Wb]:"fire-fcm-compat",[qb]:"fire-perf",[Gb]:"fire-perf-compat",[Kb]:"fire-rc",[Xb]:"fire-rc-compat",[Yb]:"fire-gcs",[Jb]:"fire-gcs-compat",[Qb]:"fire-fst",[ew]:"fire-fst-compat",[Zb]:"fire-vertex","fire-js":"fire-js",[tw]:"fire-js-all"};/**
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
 */const ua=new Map,sw=new Map,id=new Map;function sf(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gr(e){const t=e.name;if(id.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;id.set(t,e);for(const n of ua.values())sf(n,e);for(const n of sw.values())sf(n,e);return!0}function Ba(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ct(e){return e.settings!==void 0}/**
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
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Pi("app","Firebase",iw);/**
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
 */const Nr=nw;function Nx(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:sd,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=bx()),!n)throw Un.create("no-options");const o=ua.get(i);if(o){if(da(n,o.options)&&da(r,o.config))return o;throw Un.create("duplicate-app",{appName:i})}const l=new hb(i);for(const d of id.values())l.addComponent(d);const c=new ow(n,r,l);return ua.set(i,c),c}function yu(e=sd){const t=ua.get(e);if(!t&&e===sd&&bx())return Nx();if(!t)throw Un.create("no-app",{appName:e});return t}function Rt(e,t,n){var r;let i=(r=rw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}gr(new Bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const aw="firebase-heartbeat-database",lw=1,ki="firebase-heartbeat-store";let Jl=null;function Ex(){return Jl||(Jl=Nb(aw,lw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(e=>{throw Un.create("idb-open",{originalErrorMessage:e.message})})),Jl}async function cw(e){try{const n=(await Ex()).transaction(ki),r=await n.objectStore(ki).get(Sx(e));return await n.done,r}catch(t){if(t instanceof Lt)on.warn(t.message);else{const n=Un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function of(e,t){try{const r=(await Ex()).transaction(ki,"readwrite");await r.objectStore(ki).put(t,Sx(e)),await r.done}catch(n){if(n instanceof Lt)on.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function Sx(e){return`${e.name}!${e.options.appId}`}/**
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
 */const dw=1024,uw=30*24*60*60*1e3;class hw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=af();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=uw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:i}=pw(this._heartbeatsCache.heartbeats),o=ca(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return on.warn(n),""}}}function af(){return new Date().toISOString().substring(0,10)}function pw(e,t=dw){const n=[];let r=e.slice();for(const i of e){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),lf(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eb()?tb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function lf(e){return ca(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function gw(e){gr(new Bn("platform-logger",t=>new Tb(t),"PRIVATE")),gr(new Bn("heartbeat",t=>new hw(t),"PRIVATE")),Rt(rd,rf,e),Rt(rd,rf,"esm2017"),Rt("fire-js","")}gw("");function bu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Tx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mw=Tx,Cx=new Pi("auth","Firebase",Tx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new xu("@firebase/auth");function xw(e,...t){ha.logLevel<=Y.WARN&&ha.warn(`Auth (${Nr}): ${e}`,...t)}function Do(e,...t){ha.logLevel<=Y.ERROR&&ha.error(`Auth (${Nr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,...t){throw wu(e,...t)}function At(e,...t){return wu(e,...t)}function Ix(e,t,n){const r=Object.assign(Object.assign({},mw()),{[t]:n});return new Pi("auth","Firebase",r).create(t,{appName:e.name})}function en(e){return Ix(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cx.create(e,...t)}function V(e,t,...n){if(!e)throw wu(t,...n)}function Yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Do(t),new Error(t)}function an(e,t){e||Yt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function vw(){return cf()==="http:"||cf()==="https:"}function cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ai{constructor(t,n){this.shortDelay=t,this.longDelay=n,an(n>t,"Short delay should be less than long delay!"),this.isMobile=X2()||Q2()}get(){return yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(e,t){an(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jw=new Ai(3e4,6e4);function un(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ot(e,t,n,r,i={}){return Rx(e,i,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const c=Ri(Object.assign({key:e.config.apiKey},l)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:d},o);return Y2()||(h.referrerPolicy="no-referrer"),Px.fetch()(Ax(e,e.config.apiHost,n,c),h)})}async function Rx(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ww),t);try{const i=new kw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw vo(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[d,h]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(e,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw vo(e,"email-already-in-use",l);if(d==="USER_DISABLED")throw vo(e,"user-disabled",l);const g=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ix(e,g,h);_t(e,g)}}catch(i){if(i instanceof Lt)throw i;_t(e,"network-request-failed",{message:String(i)})}}async function Di(e,t,n,r,i={}){const o=await Ot(e,t,n,r,i);return"mfaPendingCredential"in o&&_t(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Ax(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ju(e.config,i):`${e.config.apiScheme}://${i}`}function _w(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),jw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(e,t,r);return i.customData._tokenResponse=n,i}function df(e){return e!==void 0&&e.enterprise!==void 0}class Nw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return _w(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Ew(e,t){return Ot(e,"GET","/v2/recaptchaConfig",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ni(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Tw(e,t=!1){const n=Nt(e),r=await n.getIdToken(t),i=_u(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ni(Ql(i.auth_time)),issuedAtTime:ni(Ql(i.iat)),expirationTime:ni(Ql(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ql(e){return Number(e)*1e3}function _u(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const i=xx(n);return i?JSON.parse(i):(Do("Failed to decode base64 JWT payload"),null)}catch(i){return Do("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uf(e){const t=_u(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Lt&&Cw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Cw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ls(e,Dx(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?zx(o.providerUserInfo):[],c=Rw(e.providerData,l),d=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),g=d?h:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ad(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(e,m)}async function Pw(e){const t=Nt(e);await pa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function zx(e){return e.map(t=>{var{providerId:n}=t,r=bu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(e,t){const n=await Rx(e,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,l=Ax(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Px.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dw(e,t){return Ot(e,"POST","/v2/accounts:revokeToken",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=uf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Aw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new Jr;return r&&(V(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Jt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=bu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ad(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ls(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Tw(this,t)}reload(){return Pw(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Jt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(en(this.auth));const t=await this.getIdToken();return await ls(this,Sw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,l,c,d,h,g;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,j=(l=n.photoURL)!==null&&l!==void 0?l:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,f=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:v,emailVerified:I,isAnonymous:N,providerData:O,stsTokenManager:k}=n;V(v&&k,t,"internal-error");const w=Jr.fromJSON(this.name,k);V(typeof v=="string",t,"internal-error"),mn(m,t.name),mn(b,t.name),V(typeof I=="boolean",t,"internal-error"),V(typeof N=="boolean",t,"internal-error"),mn(_,t.name),mn(j,t.name),mn(P,t.name),mn(D,t.name),mn(x,t.name),mn(f,t.name);const E=new Jt({uid:v,auth:t,email:b,emailVerified:I,displayName:m,isAnonymous:N,photoURL:j,phoneNumber:_,tenantId:P,stsTokenManager:w,createdAt:x,lastLoginAt:f});return O&&Array.isArray(O)&&(E.providerData=O.map(T=>Object.assign({},T))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(t,n,r=!1){const i=new Jr;i.updateFromServerResponse(n);const o=new Jt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await pa(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?zx(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Jr;c.updateFromIdToken(r);const d=new Jt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ad(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lx.type="NONE";const pf=Lx;/**
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
 */function zo(e,t,n){return`firebase:${e}:${t}:${n}`}class Qr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=zo(this.userKey,i.apiKey,o),this.fullPersistenceKey=zo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Jt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Qr(Qt(pf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||Qt(pf);const l=zo(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const g=await h._get(l);if(g){const m=Jt._fromJSON(t,g);h!==o&&(c=m),o=h;break}}catch{}const d=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new Qr(o,t,r):(o=d[0],c&&await o._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(l)}catch{}})),new Qr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fx(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ox(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bx(t))return"Blackberry";if(Vx(t))return"Webos";if(Mx(t))return"Safari";if((t.includes("chrome/")||Ux(t))&&!t.includes("edge/"))return"Chrome";if($x(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ox(e=$e()){return/firefox\//i.test(e)}function Mx(e=$e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ux(e=$e()){return/crios\//i.test(e)}function Fx(e=$e()){return/iemobile/i.test(e)}function $x(e=$e()){return/android/i.test(e)}function Bx(e=$e()){return/blackberry/i.test(e)}function Vx(e=$e()){return/webos/i.test(e)}function ku(e=$e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function zw(e=$e()){var t;return ku(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Lw(){return Z2()&&document.documentMode===10}function Hx(e=$e()){return ku(e)||$x(e)||Vx(e)||Bx(e)||/windows phone/i.test(e)||Fx(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(e,t=[]){let n;switch(e){case"Browser":n=ff($e());break;case"Worker":n=`${ff($e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
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
 */class Ow{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,c)=>{try{const d=t(o);l(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mw(e,t={}){return Ot(e,"GET","/v2/passwordPolicy",un(e,t))}/**
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
 */const Uw=6;class Fw{constructor(t){var n,r,i,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Uw,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,l,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new Ow(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Dx(this,{idToken:t}),r=await Jt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ct(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(t);(!l||l===c)&&(d!=null&&d.user)&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await pa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=bw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ct(this.app))return Promise.reject(en(this));const n=t?Nt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ct(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Mw(this),n=new Fw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Pi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,i);return()=>{l=!0,d()}}else{const d=t.addObserver(n);return()=>{l=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&xw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(e){return Nt(e)}class gf{constructor(t){this.auth=t,this.observer=null,this.addObserver=ob(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bw(e){Va=e}function qx(e){return Va.loadJS(e)}function Vw(){return Va.recaptchaEnterpriseScript}function Hw(){return Va.gapiScript}function Ww(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const qw="recaptcha-enterprise",Gw="NO_RECAPTCHA";class Kw{constructor(t){this.type=qw,this.auth=Jn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,c)=>{Ew(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Nw(d);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,l(h.siteKey)}}).catch(d=>{c(d)})})}function i(o,l,c){const d=window.grecaptcha;df(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:t}).then(h=>{l(h)}).catch(()=>{l(Gw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(c=>{if(!n&&df(window.grecaptcha))i(c,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Vw();d.length!==0&&(d+=c),qx(d).then(()=>{i(c,o,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function mf(e,t,n,r=!1){const i=new Kw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fa(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mf(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(e,t){const n=Ba(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(da(o,t??{}))return i;_t(i,"already-initialized")}return n.initialize({options:t})}function Yw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Jw(e,t,n){const r=Jn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Gx(t),{host:l,port:c}=Qw(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Zw()}function Gx(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qw(e){const t=Gx(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:xf(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:xf(l)}}}function xf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Zw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(t){return Yt("not implemented")}_linkToIdToken(t,n){return Yt("not implemented")}_getReauthenticationResolver(t){return Yt("not implemented")}}async function ej(e,t){return Ot(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tj(e,t){return Di(e,"POST","/v1/accounts:signInWithPassword",un(e,t))}async function nj(e,t){return Ot(e,"POST","/v1/accounts:sendOobCode",un(e,t))}async function rj(e,t){return nj(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sj(e,t){return Di(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}async function ij(e,t){return Di(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Nu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ni(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ni(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(t,n,"signInWithPassword",tj);case"emailLink":return sj(t,{email:this._email,oobCode:this._password});default:_t(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(t,r,"signUpPassword",ej);case"emailLink":return ij(t,{idToken:n,email:this._email,oobCode:this._password});default:_t(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t){return Di(e,"POST","/v1/accounts:signInWithIdp",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj="http://localhost";class mr extends Nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new mr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=bu(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new mr(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return Zr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Zr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Zr(t,n)}buildRequest(){const t={requestUri:oj,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ri(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aj(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lj(e){const t=Ws(qs(e)).link,n=t?Ws(qs(t)).deep_link_id:null,r=Ws(qs(e)).deep_link_id;return(r?Ws(qs(r)).link:null)||r||n||t||e}class Eu{constructor(t){var n,r,i,o,l,c;const d=Ws(qs(t)),h=(n=d.apiKey)!==null&&n!==void 0?n:null,g=(r=d.oobCode)!==null&&r!==void 0?r:null,m=aj((i=d.mode)!==null&&i!==void 0?i:null);V(h&&g&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=g,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=lj(t);try{return new Eu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(t,n){return Ni._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Eu.parseLink(n);return V(r,"argument-error"),Ni._fromEmailAndCode(t,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zi extends Kx{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends zi{constructor(){super("facebook.com")}static credential(t){return mr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return mr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends zi{constructor(){super("github.com")}static credential(t){return mr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends zi{constructor(){super("twitter.com")}static credential(t,n){return mr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cj(e,t){return Di(e,"POST","/v1/accounts:signUp",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Jt._fromIdTokenResponse(t,r,i),l=vf(r);return new xr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=vf(r);return new xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function vf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Lt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ga.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ga(t,n,r,i)}}function Xx(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ga._fromErrorAndOperation(e,o,t,r):o})}async function dj(e,t,n=!1){const r=await ls(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xr._forOperation(e,"link",r)}/**
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
 */async function uj(e,t,n=!1){const{auth:r}=e;if(Ct(r.app))return Promise.reject(en(r));const i="reauthenticate";try{const o=await ls(e,Xx(r,i,t,e),n);V(o.idToken,r,"internal-error");const l=_u(o.idToken);V(l,r,"internal-error");const{sub:c}=l;return V(e.uid===c,r,"user-mismatch"),xr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(e,t,n=!1){if(Ct(e.app))return Promise.reject(en(e));const r="signIn",i=await Xx(e,r,t),o=await xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function hj(e,t){return Yx(Jn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(e){const t=Jn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function pj(e,t,n){const r=Jn(e);await fa(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",rj)}async function fj(e,t,n){if(Ct(e.app))return Promise.reject(en(e));const r=Jn(e),l=await fa(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cj).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Jx(e),d}),c=await xr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function gj(e,t,n){return Ct(e.app)?Promise.reject(en(e)):hj(Nt(e),xs.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jx(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mj(e,t){return Ot(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xj(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Nt(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await ls(r,mj(r.auth,o));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function vj(e,t,n,r){return Nt(e).onIdTokenChanged(t,n,r)}function yj(e,t,n){return Nt(e).beforeAuthStateChanged(t,n)}function bj(e,t,n,r){return Nt(e).onAuthStateChanged(t,n,r)}function wj(e){return Nt(e).signOut()}const ma="__sak";/**
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
 */const jj=1e3,_j=10;class Zx extends Qx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hx(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,d)=>{this.notifyListeners(l,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);Lw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,_j):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},jj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zx.type="LOCAL";const kj=Zx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Qx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}e0.type="SESSION";const t0=e0;/**
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
 */function Nj(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ha{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ha(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async h=>h(n.origin,o)),d=await Nj(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Ej{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((c,d)=>{const h=Su("",20);i.port1.start();const g=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(m){const b=m;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(b.data.response);break;default:clearTimeout(g),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function Sj(e){Dt().location.href=e}/**
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
 */function n0(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function Tj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cj(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Ij(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",Pj=1,xa="firebaseLocalStorage",s0="fbase_key";class Li{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wa(e,t){return e.transaction([xa],t?"readwrite":"readonly").objectStore(xa)}function Rj(){const e=indexedDB.deleteDatabase(r0);return new Li(e).toPromise()}function ld(){const e=indexedDB.open(r0,Pj);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(xa,{keyPath:s0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(xa)?t(r):(r.close(),await Rj(),t(await ld()))})})}async function yf(e,t,n){const r=Wa(e,!0).put({[s0]:t,value:n});return new Li(r).toPromise()}async function Aj(e,t){const n=Wa(e,!1).get(t),r=await new Li(n).toPromise();return r===void 0?null:r.value}function bf(e,t){const n=Wa(e,!0).delete(t);return new Li(n).toPromise()}const Dj=800,zj=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ld(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>zj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(Ij()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Tj(),!this.activeServiceWorker)return;this.sender=new Ej(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Cj()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ld();return await yf(t,ma,"1"),await bf(t,ma),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Aj(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Wa(i,!1).getAll();return new Li(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const Lj=i0;new Ai(3e4,6e4);/**
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
 */function Oj(e,t){return t?Qt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Tu extends Nu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Zr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Zr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Zr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Mj(e){return Yx(e.auth,new Tu(e),e.bypassAuthState)}function Uj(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),uj(n,new Tu(e),e.bypassAuthState)}async function Fj(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),dj(n,new Tu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:c}=t;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Mj;case"linkViaPopup":case"linkViaRedirect":return Fj;case"reauthViaPopup":case"reauthViaRedirect":return Uj;default:_t(this.auth,"internal-error")}}resolve(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $j=new Ai(2e3,1e4);class Hr extends o0{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const t=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$j.get())};t()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj="pendingRedirect",Lo=new Map;class Vj extends o0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Lo.get(this.auth._key());if(!t){try{const r=await Hj(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Lo.set(this.auth._key(),t)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hj(e,t){const n=Gj(t),r=qj(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wj(e,t){Lo.set(e._key(),t)}function qj(e){return Qt(e._redirectPersistence)}function Gj(e){return zo(Bj,e.config.apiKey,e.name)}async function Kj(e,t,n=!1){if(Ct(e.app))return Promise.reject(en(e));const r=Jn(e),i=Oj(r,t),l=await new Vj(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xj=10*60*1e3;class Yj{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Jj(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!a0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Xj&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(t))}saveEventToCache(t){this.cachedEventUids.add(wf(t)),this.lastProcessedEventTime=Date.now()}}function wf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function a0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Jj(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qj(e,t={}){return Ot(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e_=/^https?/;async function t_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qj(e);for(const n of t)try{if(n_(n))return}catch{}_t(e,"unauthorized-domain")}function n_(e){const t=od(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!e_.test(n))return!1;if(Zj.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const r_=new Ai(3e4,6e4);function jf(){const e=Dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function s_(e){return new Promise((t,n)=>{var r,i,o;function l(){jf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(At(e,"network-request-failed"))},timeout:r_.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Dt().gapi)===null||o===void 0)&&o.load)l();else{const c=Ww("iframefcb");return Dt()[c]=()=>{gapi.load?l():n(At(e,"network-request-failed"))},qx(`${Hw()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw Oo=null,t})}let Oo=null;function i_(e){return Oo=Oo||s_(e),Oo}/**
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
 */const o_=new Ai(5e3,15e3),a_="__/auth/iframe",l_="emulator/auth/iframe",c_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u_(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ju(t,l_):`https://${e.config.authDomain}/${a_}`,r={apiKey:t.apiKey,appName:e.name,v:Nr},i=d_.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ri(r).slice(1)}`}async function h_(e){const t=await i_(e),n=Dt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:u_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=At(e,"network-request-failed"),c=Dt().setTimeout(()=>{o(l)},o_.get());function d(){Dt().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{o(l)})}))}/**
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
 */const p_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f_=500,g_=600,m_="_blank",x_="http://localhost";class _f{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v_(e,t,n,r=f_,i=g_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},p_),{width:r.toString(),height:i.toString(),top:o,left:l}),h=$e().toLowerCase();n&&(c=Ux(h)?m_:n),Ox(h)&&(t=t||x_,d.scrollbars="yes");const g=Object.entries(d).reduce((b,[_,j])=>`${b}${_}=${j},`,"");if(zw(h)&&c!=="_self")return y_(t||"",c),new _f(null);const m=window.open(t||"",c,g);V(m,e,"popup-blocked");try{m.focus()}catch{}return new _f(m)}function y_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const b_="__/auth/handler",w_="emulator/auth/handler",j_=encodeURIComponent("fac");async function kf(e,t,n,r,i,o){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Nr,eventId:i};if(t instanceof Kx){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",ib(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,m]of Object.entries({}))l[g]=m}if(t instanceof zi){const g=t.getScopes().filter(m=>m!=="");g.length>0&&(l.scopes=g.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const d=await e._getAppCheckToken(),h=d?`#${j_}=${encodeURIComponent(d)}`:"";return`${__(e)}?${Ri(c).slice(1)}${h}`}function __({config:e}){return e.emulator?ju(e,w_):`https://${e.authDomain}/${b_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="webStorageSupport";class k_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=Kj,this._overrideRedirectResult=Wj}async _openPopup(t,n,r,i){var o;an((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await kf(t,n,r,od(),i);return v_(t,l,Su())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await kf(t,n,r,od(),i);return Sj(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(an(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await h_(t),r=new Yj(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Zl,{type:Zl},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Zl];l!==void 0&&n(!!l),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hx()||Mx()||ku()}}const N_=k_;var Nf="@firebase/auth",Ef="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T_(e){gr(new Bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wx(e)},h=new $w(r,i,o,d);return Yw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),gr(new Bn("auth-internal",t=>{const n=Jn(t.getProvider("auth").getImmediate());return(r=>new E_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Nf,Ef,S_(e)),Rt(Nf,Ef,"esm2017")}/**
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
 */const C_=5*60,I_=wx("authIdTokenMaxAge")||C_;let Sf=null;const P_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I_)return;const i=n==null?void 0:n.token;Sf!==i&&(Sf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function R_(e=yu()){const t=Ba(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Xw(e,{popupRedirectResolver:N_,persistence:[Lj,kj,t0]}),r=wx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=P_(o.toString());yj(n,l,()=>l(n.currentUser)),vj(n,c=>l(c))}}const i=vx("auth");return i&&Jw(n,`http://${i}`),n}function A_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Bw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=At("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",A_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T_("Browser");var D_="firebase",z_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(D_,z_,"app");var Tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l0;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,w){function E(){}E.prototype=w.prototype,k.D=w.prototype,k.prototype=new E,k.prototype.constructor=k,k.C=function(T,A,R){for(var S=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)S[ye-2]=arguments[ye];return w.prototype[A].apply(T,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,w,E){E||(E=0);var T=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)T[A]=w.charCodeAt(E++)|w.charCodeAt(E++)<<8|w.charCodeAt(E++)<<16|w.charCodeAt(E++)<<24;else for(A=0;16>A;++A)T[A]=w[E++]|w[E++]<<8|w[E++]<<16|w[E++]<<24;w=k.g[0],E=k.g[1],A=k.g[2];var R=k.g[3],S=w+(R^E&(A^R))+T[0]+3614090360&4294967295;w=E+(S<<7&4294967295|S>>>25),S=R+(A^w&(E^A))+T[1]+3905402710&4294967295,R=w+(S<<12&4294967295|S>>>20),S=A+(E^R&(w^E))+T[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(w^A&(R^w))+T[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=w+(R^E&(A^R))+T[4]+4118548399&4294967295,w=E+(S<<7&4294967295|S>>>25),S=R+(A^w&(E^A))+T[5]+1200080426&4294967295,R=w+(S<<12&4294967295|S>>>20),S=A+(E^R&(w^E))+T[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(w^A&(R^w))+T[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=w+(R^E&(A^R))+T[8]+1770035416&4294967295,w=E+(S<<7&4294967295|S>>>25),S=R+(A^w&(E^A))+T[9]+2336552879&4294967295,R=w+(S<<12&4294967295|S>>>20),S=A+(E^R&(w^E))+T[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(w^A&(R^w))+T[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=w+(R^E&(A^R))+T[12]+1804603682&4294967295,w=E+(S<<7&4294967295|S>>>25),S=R+(A^w&(E^A))+T[13]+4254626195&4294967295,R=w+(S<<12&4294967295|S>>>20),S=A+(E^R&(w^E))+T[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(w^A&(R^w))+T[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=w+(A^R&(E^A))+T[1]+4129170786&4294967295,w=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(w^E))+T[6]+3225465664&4294967295,R=w+(S<<9&4294967295|S>>>23),S=A+(w^E&(R^w))+T[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^w&(A^R))+T[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=w+(A^R&(E^A))+T[5]+3593408605&4294967295,w=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(w^E))+T[10]+38016083&4294967295,R=w+(S<<9&4294967295|S>>>23),S=A+(w^E&(R^w))+T[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^w&(A^R))+T[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=w+(A^R&(E^A))+T[9]+568446438&4294967295,w=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(w^E))+T[14]+3275163606&4294967295,R=w+(S<<9&4294967295|S>>>23),S=A+(w^E&(R^w))+T[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^w&(A^R))+T[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=w+(A^R&(E^A))+T[13]+2850285829&4294967295,w=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(w^E))+T[2]+4243563512&4294967295,R=w+(S<<9&4294967295|S>>>23),S=A+(w^E&(R^w))+T[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^w&(A^R))+T[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=w+(E^A^R)+T[5]+4294588738&4294967295,w=E+(S<<4&4294967295|S>>>28),S=R+(w^E^A)+T[8]+2272392833&4294967295,R=w+(S<<11&4294967295|S>>>21),S=A+(R^w^E)+T[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^w)+T[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=w+(E^A^R)+T[1]+2763975236&4294967295,w=E+(S<<4&4294967295|S>>>28),S=R+(w^E^A)+T[4]+1272893353&4294967295,R=w+(S<<11&4294967295|S>>>21),S=A+(R^w^E)+T[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^w)+T[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=w+(E^A^R)+T[13]+681279174&4294967295,w=E+(S<<4&4294967295|S>>>28),S=R+(w^E^A)+T[0]+3936430074&4294967295,R=w+(S<<11&4294967295|S>>>21),S=A+(R^w^E)+T[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^w)+T[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=w+(E^A^R)+T[9]+3654602809&4294967295,w=E+(S<<4&4294967295|S>>>28),S=R+(w^E^A)+T[12]+3873151461&4294967295,R=w+(S<<11&4294967295|S>>>21),S=A+(R^w^E)+T[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^w)+T[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=w+(A^(E|~R))+T[0]+4096336452&4294967295,w=E+(S<<6&4294967295|S>>>26),S=R+(E^(w|~A))+T[7]+1126891415&4294967295,R=w+(S<<10&4294967295|S>>>22),S=A+(w^(R|~E))+T[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~w))+T[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=w+(A^(E|~R))+T[12]+1700485571&4294967295,w=E+(S<<6&4294967295|S>>>26),S=R+(E^(w|~A))+T[3]+2399980690&4294967295,R=w+(S<<10&4294967295|S>>>22),S=A+(w^(R|~E))+T[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~w))+T[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=w+(A^(E|~R))+T[8]+1873313359&4294967295,w=E+(S<<6&4294967295|S>>>26),S=R+(E^(w|~A))+T[15]+4264355552&4294967295,R=w+(S<<10&4294967295|S>>>22),S=A+(w^(R|~E))+T[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~w))+T[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=w+(A^(E|~R))+T[4]+4149444226&4294967295,w=E+(S<<6&4294967295|S>>>26),S=R+(E^(w|~A))+T[11]+3174756917&4294967295,R=w+(S<<10&4294967295|S>>>22),S=A+(w^(R|~E))+T[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~w))+T[9]+3951481745&4294967295,k.g[0]=k.g[0]+w&4294967295,k.g[1]=k.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+A&4294967295,k.g[3]=k.g[3]+R&4294967295}r.prototype.u=function(k,w){w===void 0&&(w=k.length);for(var E=w-this.blockSize,T=this.B,A=this.h,R=0;R<w;){if(A==0)for(;R<=E;)i(this,k,R),R+=this.blockSize;if(typeof k=="string"){for(;R<w;)if(T[A++]=k.charCodeAt(R++),A==this.blockSize){i(this,T),A=0;break}}else for(;R<w;)if(T[A++]=k[R++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=w},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var w=1;w<k.length-8;++w)k[w]=0;var E=8*this.o;for(w=k.length-8;w<k.length;++w)k[w]=E&255,E/=256;for(this.u(k),k=Array(16),w=E=0;4>w;++w)for(var T=0;32>T;T+=8)k[E++]=this.g[w]>>>T&255;return k};function o(k,w){var E=c;return Object.prototype.hasOwnProperty.call(E,k)?E[k]:E[k]=w(k)}function l(k,w){this.h=w;for(var E=[],T=!0,A=k.length-1;0<=A;A--){var R=k[A]|0;T&&R==w||(E[A]=R,T=!1)}this.g=E}var c={};function d(k){return-128<=k&&128>k?o(k,function(w){return new l([w|0],0>w?-1:0)}):new l([k|0],0>k?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return m;if(0>k)return D(h(-k));for(var w=[],E=1,T=0;k>=E;T++)w[T]=k/E|0,E*=4294967296;return new l(w,0)}function g(k,w){if(k.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k.charAt(0)=="-")return D(g(k.substring(1),w));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(w,8)),T=m,A=0;A<k.length;A+=8){var R=Math.min(8,k.length-A),S=parseInt(k.substring(A,A+R),w);8>R?(R=h(Math.pow(w,R)),T=T.j(R).add(h(S))):(T=T.j(E),T=T.add(h(S)))}return T}var m=d(0),b=d(1),_=d(16777216);e=l.prototype,e.m=function(){if(P(this))return-D(this).m();for(var k=0,w=1,E=0;E<this.g.length;E++){var T=this.i(E);k+=(0<=T?T:4294967296+T)*w,w*=4294967296}return k},e.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(j(this))return"0";if(P(this))return"-"+D(this).toString(k);for(var w=h(Math.pow(k,6)),E=this,T="";;){var A=I(E,w).g;E=x(E,A.j(w));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(k);if(E=A,j(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},e.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function j(k){if(k.h!=0)return!1;for(var w=0;w<k.g.length;w++)if(k.g[w]!=0)return!1;return!0}function P(k){return k.h==-1}e.l=function(k){return k=x(this,k),P(k)?-1:j(k)?0:1};function D(k){for(var w=k.g.length,E=[],T=0;T<w;T++)E[T]=~k.g[T];return new l(E,~k.h).add(b)}e.abs=function(){return P(this)?D(this):this},e.add=function(k){for(var w=Math.max(this.g.length,k.g.length),E=[],T=0,A=0;A<=w;A++){var R=T+(this.i(A)&65535)+(k.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(k.i(A)>>>16);T=S>>>16,R&=65535,S&=65535,E[A]=S<<16|R}return new l(E,E[E.length-1]&-2147483648?-1:0)};function x(k,w){return k.add(D(w))}e.j=function(k){if(j(this)||j(k))return m;if(P(this))return P(k)?D(this).j(D(k)):D(D(this).j(k));if(P(k))return D(this.j(D(k)));if(0>this.l(_)&&0>k.l(_))return h(this.m()*k.m());for(var w=this.g.length+k.g.length,E=[],T=0;T<2*w;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<k.g.length;A++){var R=this.i(T)>>>16,S=this.i(T)&65535,ye=k.i(A)>>>16,Qn=k.i(A)&65535;E[2*T+2*A]+=S*Qn,f(E,2*T+2*A),E[2*T+2*A+1]+=R*Qn,f(E,2*T+2*A+1),E[2*T+2*A+1]+=S*ye,f(E,2*T+2*A+1),E[2*T+2*A+2]+=R*ye,f(E,2*T+2*A+2)}for(T=0;T<w;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=w;T<2*w;T++)E[T]=0;return new l(E,0)};function f(k,w){for(;(k[w]&65535)!=k[w];)k[w+1]+=k[w]>>>16,k[w]&=65535,w++}function v(k,w){this.g=k,this.h=w}function I(k,w){if(j(w))throw Error("division by zero");if(j(k))return new v(m,m);if(P(k))return w=I(D(k),w),new v(D(w.g),D(w.h));if(P(w))return w=I(k,D(w)),new v(D(w.g),w.h);if(30<k.g.length){if(P(k)||P(w))throw Error("slowDivide_ only works with positive integers.");for(var E=b,T=w;0>=T.l(k);)E=N(E),T=N(T);var A=O(E,1),R=O(T,1);for(T=O(T,2),E=O(E,2);!j(T);){var S=R.add(T);0>=S.l(k)&&(A=A.add(E),R=S),T=O(T,1),E=O(E,1)}return w=x(k,A.j(w)),new v(A,w)}for(A=m;0<=k.l(w);){for(E=Math.max(1,Math.floor(k.m()/w.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(E),S=R.j(w);P(S)||0<S.l(k);)E-=T,R=h(E),S=R.j(w);j(R)&&(R=b),A=A.add(R),k=x(k,S)}return new v(A,k)}e.A=function(k){return I(this,k).h},e.and=function(k){for(var w=Math.max(this.g.length,k.g.length),E=[],T=0;T<w;T++)E[T]=this.i(T)&k.i(T);return new l(E,this.h&k.h)},e.or=function(k){for(var w=Math.max(this.g.length,k.g.length),E=[],T=0;T<w;T++)E[T]=this.i(T)|k.i(T);return new l(E,this.h|k.h)},e.xor=function(k){for(var w=Math.max(this.g.length,k.g.length),E=[],T=0;T<w;T++)E[T]=this.i(T)^k.i(T);return new l(E,this.h^k.h)};function N(k){for(var w=k.g.length+1,E=[],T=0;T<w;T++)E[T]=k.i(T)<<1|k.i(T-1)>>>31;return new l(E,k.h)}function O(k,w){var E=w>>5;w%=32;for(var T=k.g.length-E,A=[],R=0;R<T;R++)A[R]=0<w?k.i(R+E)>>>w|k.i(R+E+1)<<32-w:k.i(R+E);return new l(A,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=g,l0=l}).apply(typeof Tf<"u"?Tf:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,p){return a==Array.prototype||a==Object.prototype||(a[u]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,u){if(u)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var z=a[y];if(!(z in p))break e;p=p[z]}a=a[a.length-1],y=p[a],u=u(y),u!=y&&u!=null&&t(p,a,{configurable:!0,writable:!0,value:u})}}function o(a,u){a instanceof String&&(a+="");var p=0,y=!1,z={next:function(){if(!y&&p<a.length){var L=p++;return{value:u(L,a[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}i("Array.prototype.values",function(a){return a||function(){return o(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function g(a,u,p){return a.call.apply(a.bind,arguments)}function m(a,u,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,y),a.apply(u,z)}}return function(){return a.apply(u,arguments)}}function b(a,u,p){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:m,b.apply(null,arguments)}function _(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function j(a,u){function p(){}p.prototype=u.prototype,a.aa=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,z,L){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return u.prototype[z].apply(y,U)}}function P(a){const u=a.length;if(0<u){const p=Array(u);for(let y=0;y<u;y++)p[y]=a[y];return p}return[]}function D(a,u){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(d(y)){const z=a.length||0,L=y.length||0;a.length=z+L;for(let U=0;U<L;U++)a[z+U]=y[U]}else a.push(y)}}class x{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function f(a){return/^[\s\xa0]*$/.test(a)}function v(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function I(a){return I[" "](a),a}I[" "]=function(){};var N=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function O(a,u,p){for(const y in a)u.call(p,a[y],y,a)}function k(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function w(a){const u={};for(const p in a)u[p]=a[p];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let p,y;for(let z=1;z<arguments.length;z++){y=arguments[z];for(p in y)a[p]=y[p];for(let L=0;L<E.length;L++)p=E[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function A(a){var u=1;a=a.split(":");const p=[];for(;0<u&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function R(a){c.setTimeout(()=>{throw a},0)}function S(){var a=H;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ye{constructor(){this.h=this.g=null}add(u,p){const y=Qn.get();y.set(u,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Qn=new x(()=>new vs,a=>a.reset());class vs{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,F=!1,H=new ye,W=()=>{const a=c.Promise.resolve(void 0);Ut=()=>{a.then(ae)}};var ae=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){R(p)}var u=Qn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}F=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return a}();function $t(a,u){if(he.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(N){e:{try{I(u.nodeName);var z=!0;break e}catch{}z=!1}z||(u=null)}}else p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement);this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&$t.aa.h.call(this)}}j($t,he);var Bt={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),S0=0;function T0(a,u,p,y,z){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!y,this.ha=z,this.key=++S0,this.da=this.fa=!1}function Ui(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fi(a){this.src=a,this.g={},this.h=0}Fi.prototype.add=function(a,u,p,y,z){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var U=Ya(a,u,y,z);return-1<U?(u=a[U],p||(u.fa=!1)):(u=new T0(u,this.src,L,!!y,z),u.fa=p,a.push(u)),u};function Xa(a,u){var p=u.type;if(p in a.g){var y=a.g[p],z=Array.prototype.indexOf.call(y,u,void 0),L;(L=0<=z)&&Array.prototype.splice.call(y,z,1),L&&(Ui(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ya(a,u,p,y){for(var z=0;z<a.length;++z){var L=a[z];if(!L.da&&L.listener==u&&L.capture==!!p&&L.ha==y)return z}return-1}var Ja="closure_lm_"+(1e6*Math.random()|0),Qa={};function Lu(a,u,p,y,z){if(Array.isArray(u)){for(var L=0;L<u.length;L++)Lu(a,u[L],p,y,z);return null}return p=Uu(p),a&&a[Vt]?a.K(u,p,h(y)?!!y.capture:!1,z):C0(a,u,p,!1,y,z)}function C0(a,u,p,y,z,L){if(!u)throw Error("Invalid event type");var U=h(z)?!!z.capture:!!z,ee=el(a);if(ee||(a[Ja]=ee=new Fi(a)),p=ee.add(u,p,y,U,L),p.proxy)return p;if(y=I0(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)Ft||(z=U),z===void 0&&(z=!1),a.addEventListener(u.toString(),y,z);else if(a.attachEvent)a.attachEvent(Mu(u.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function I0(){function a(p){return u.call(a.src,a.listener,p)}const u=P0;return a}function Ou(a,u,p,y,z){if(Array.isArray(u))for(var L=0;L<u.length;L++)Ou(a,u[L],p,y,z);else y=h(y)?!!y.capture:!!y,p=Uu(p),a&&a[Vt]?(a=a.i,u=String(u).toString(),u in a.g&&(L=a.g[u],p=Ya(L,p,y,z),-1<p&&(Ui(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[u],a.h--)))):a&&(a=el(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ya(u,p,y,z)),(p=-1<a?u[a]:null)&&Za(p))}function Za(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Vt])Xa(u.i,a);else{var p=a.type,y=a.proxy;u.removeEventListener?u.removeEventListener(p,y,a.capture):u.detachEvent?u.detachEvent(Mu(p),y):u.addListener&&u.removeListener&&u.removeListener(y),(p=el(u))?(Xa(p,a),p.h==0&&(p.src=null,u[Ja]=null)):Ui(a)}}}function Mu(a){return a in Qa?Qa[a]:Qa[a]="on"+a}function P0(a,u){if(a.da)a=!0;else{u=new $t(u,this);var p=a.listener,y=a.ha||a.src;a.fa&&Za(a),a=p.call(y,u)}return a}function el(a){return a=a[Ja],a instanceof Fi?a:null}var tl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uu(a){return typeof a=="function"?a:(a[tl]||(a[tl]=function(u){return a.handleEvent(u)}),a[tl])}function Te(){Z.call(this),this.i=new Fi(this),this.M=this,this.F=null}j(Te,Z),Te.prototype[Vt]=!0,Te.prototype.removeEventListener=function(a,u,p,y){Ou(this,a,u,p,y)};function Le(a,u){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=u.type||u,typeof u=="string")u=new he(u,a);else if(u instanceof he)u.target=u.target||a;else{var z=u;u=new he(y,a),T(u,z)}if(z=!0,p)for(var L=p.length-1;0<=L;L--){var U=u.g=p[L];z=$i(U,y,!0,u)&&z}if(U=u.g=a,z=$i(U,y,!0,u)&&z,z=$i(U,y,!1,u)&&z,p)for(L=0;L<p.length;L++)U=u.g=p[L],z=$i(U,y,!1,u)&&z}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var p=a.g[u],y=0;y<p.length;y++)Ui(p[y]);delete a.g[u],a.h--}}this.F=null},Te.prototype.K=function(a,u,p,y){return this.i.add(String(a),u,!1,p,y)},Te.prototype.L=function(a,u,p,y){return this.i.add(String(a),u,!0,p,y)};function $i(a,u,p,y){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var z=!0,L=0;L<u.length;++L){var U=u[L];if(U&&!U.da&&U.capture==p){var ee=U.listener,ke=U.ha||U.src;U.fa&&Xa(a.i,U),z=ee.call(ke,y)!==!1&&z}}return z&&!y.defaultPrevented}function Fu(a,u,p){if(typeof a=="function")p&&(a=b(a,p));else if(a&&typeof a.handleEvent=="function")a=b(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function $u(a){a.g=Fu(()=>{a.g=null,a.i&&(a.i=!1,$u(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class R0 extends Z{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$u(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(a){Z.call(this),this.h=a,this.g={}}j(ys,Z);var Bu=[];function Vu(a){O(a.g,function(u,p){this.g.hasOwnProperty(p)&&Za(u)},a),a.g={}}ys.prototype.N=function(){ys.aa.N.call(this),Vu(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nl=c.JSON.stringify,A0=c.JSON.parse,D0=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function rl(){}rl.prototype.h=null;function Hu(a){return a.h||(a.h=a.i())}function z0(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sl(){he.call(this,"d")}j(sl,he);function il(){he.call(this,"c")}j(il,he);var Er={},Wu=null;function ol(){return Wu=Wu||new Te}Er.La="serverreachability";function qu(a){he.call(this,Er.La,a)}j(qu,he);function ws(a){const u=ol();Le(u,new qu(u))}Er.STAT_EVENT="statevent";function Gu(a,u){he.call(this,Er.STAT_EVENT,a),this.stat=u}j(Gu,he);function Oe(a){const u=ol();Le(u,new Gu(u,a))}Er.Ma="timingevent";function Ku(a,u){he.call(this,Er.Ma,a),this.size=u}j(Ku,he);function js(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function L0(a,u,p,y,z,L){a.info(function(){if(a.g)if(L)for(var U="",ee=L.split("&"),ke=0;ke<ee.length;ke++){var X=ee[ke].split("=");if(1<X.length){var Ce=X[0];X=X[1];var Ie=Ce.split("_");U=2<=Ie.length&&Ie[1]=="type"?U+(Ce+"="+X+"&"):U+(Ce+"=redacted&")}}else U=null;else U=L;return"XMLHTTP REQ ("+y+") [attempt "+z+"]: "+u+`
`+p+`
`+U})}function O0(a,u,p,y,z,L,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+z+"]: "+u+`
`+p+`
`+L+" "+U})}function Sr(a,u,p,y){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+U0(a,p)+(y?" "+y:"")})}function M0(a,u){a.info(function(){return"TIMEOUT: "+u})}_s.prototype.info=function(){};function U0(a,u){if(!a.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var z=y[1];if(Array.isArray(z)&&!(1>z.length)){var L=z[0];if(L!="noop"&&L!="stop"&&L!="close")for(var U=1;U<z.length;U++)z[U]=""}}}}return nl(p)}catch{return u}}var al={NO_ERROR:0,TIMEOUT:8},F0={},ll;function Bi(){}j(Bi,rl),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},ll=new Bi;function hn(a,u,p,y){this.j=a,this.i=u,this.l=p,this.R=y||1,this.U=new ys(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Yu={},cl={};function dl(a,u,p){a.L=1,a.v=qi(Ht(u)),a.m=p,a.P=!0,Ju(a,null)}function Ju(a,u){a.F=Date.now(),Vi(a),a.A=Ht(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),uh(p.i,"t",y),a.C=0,p=a.j.J,a.h=new Xu,a.g=Ch(a.j,p?u:null,!a.m),0<a.O&&(a.M=new R0(b(a.Y,a,a.g),a.O)),u=a.U,p=a.g,y=a.ca;var z="readystatechange";Array.isArray(z)||(z&&(Bu[0]=z.toString()),z=Bu);for(var L=0;L<z.length;L++){var U=Lu(p,z[L],y||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ws(),L0(a.i,a.u,a.A,a.l,a.R,a.m)}hn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Wt(a)==3?u.j():this.Y(a)},hn.prototype.Y=function(a){try{if(a==this.g)e:{const Ie=Wt(this.g);var u=this.g.Ba();const Ir=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||vh(this.g)))){this.J||Ie!=4||u==7||(u==8||0>=Ir?ws(3):ws(2)),ul(this);var p=this.g.Z();this.X=p;t:if(Qu(this)){var y=vh(this.g);a="";var z=y.length,L=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),ks(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<z;u++)this.h.h=!0,a+=this.h.i.decode(y[u],{stream:!(L&&u==z-1)});y.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,O0(this.i,this.u,this.A,this.l,this.R,Ie,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,ke=this.g;if((ee=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(ee)){var X=ee;break t}}X=null}if(p=X)Sr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hl(this,p);else{this.o=!1,this.s=3,Oe(12),Zn(this),ks(this);break e}}if(this.P){p=!0;let pt;for(;!this.J&&this.C<U.length;)if(pt=$0(this,U),pt==cl){Ie==4&&(this.s=4,Oe(14),p=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Yu){this.s=4,Oe(15),Sr(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else Sr(this.i,this.l,pt,null),hl(this,pt);if(Qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||U.length!=0||this.h.h||(this.s=1,Oe(16),p=!1),this.o=this.o&&p,!p)Sr(this.i,this.l,U,"[Invalid Chunked Response]"),Zn(this),ks(this);else if(0<U.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),vl(Ce),Ce.M=!0,Oe(11))}}else Sr(this.i,this.l,U,null),hl(this,U);Ie==4&&Zn(this),this.o&&!this.J&&(Ie==4?Nh(this.j,this):(this.o=!1,Vi(this)))}else sv(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Zn(this),ks(this)}}}catch{}finally{}};function Qu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $0(a,u){var p=a.C,y=u.indexOf(`
`,p);return y==-1?cl:(p=Number(u.substring(p,y)),isNaN(p)?Yu:(y+=1,y+p>u.length?cl:(u=u.slice(y,y+p),a.C=y+p,u)))}hn.prototype.cancel=function(){this.J=!0,Zn(this)};function Vi(a){a.S=Date.now()+a.I,Zu(a,a.I)}function Zu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=js(b(a.ba,a),u)}function ul(a){a.B&&(c.clearTimeout(a.B),a.B=null)}hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(M0(this.i,this.A),this.L!=2&&(ws(),Oe(17)),Zn(this),this.s=2,ks(this)):Zu(this,this.S-a)};function ks(a){a.j.G==0||a.J||Nh(a.j,a)}function Zn(a){ul(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Vu(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function hl(a,u){try{var p=a.j;if(p.G!=0&&(p.g==a||pl(p.h,a))){if(!a.K&&pl(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var z=y;if(z[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Qi(p),Yi(p);else break e;xl(p),Oe(18)}}else p.za=z[1],0<p.za-p.T&&37500>z[2]&&p.F&&p.v==0&&!p.C&&(p.C=js(b(p.Za,p),6e3));if(1>=nh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else tr(p,11)}else if((a.K||p.g==a)&&Qi(p),!f(u))for(z=p.Da.g.parse(u),u=0;u<z.length;u++){let X=z[u];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Ce=X[3];Ce!=null&&(p.la=Ce,p.j.info("VER="+p.la));const Ie=X[4];Ie!=null&&(p.Aa=Ie,p.j.info("SVER="+p.Aa));const Ir=X[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(y=1.5*Ir,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const pt=a.g;if(pt){const Zi=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var L=y.h;L.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(fl(L,L.h),L.h=null))}if(y.D){const yl=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;yl&&(y.ya=yl,re(y.I,y.D,yl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var U=a;if(y.qa=Th(y,y.J?y.ia:null,y.W),U.K){rh(y.h,U);var ee=U,ke=y.L;ke&&(ee.I=ke),ee.B&&(ul(ee),Vi(ee)),y.g=U}else _h(y);0<p.i.length&&Ji(p)}else X[0]!="stop"&&X[0]!="close"||tr(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?tr(p,7):ml(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}ws(4)}catch{}}var B0=class{constructor(a,u){this.g=a,this.map=u}};function eh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function th(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nh(a){return a.h?1:a.g?a.g.size:0}function pl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function fl(a,u){a.g?a.g.add(u):a.h=u}function rh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.D);return u}return P(a.i)}function V0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(d(a)){for(var u=[],p=a.length,y=0;y<p;y++)u.push(a[y]);return u}u=[],p=0;for(y in a)u[p++]=a[y];return u}function H0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(d(a)||typeof a=="string"){var u=[];a=a.length;for(var p=0;p<a;p++)u.push(p);return u}u=[],p=0;for(const y in a)u[p++]=y;return u}}}function ih(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(d(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var p=H0(a),y=V0(a),z=y.length,L=0;L<z;L++)u.call(void 0,y[L],p&&p[L],a)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function W0(a,u){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),z=null;if(0<=y){var L=a[p].substring(0,y);z=a[p].substring(y+1)}else L=a[p];u(L,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof er){this.h=a.h,Hi(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.s),this.l=a.l;var u=a.i,p=new Ss;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),ah(this,p),this.m=a.m}else a&&(u=String(a).match(oh))?(this.h=!1,Hi(this,u[1]||"",!0),this.o=Ns(u[2]||""),this.g=Ns(u[3]||"",!0),Wi(this,u[4]),this.l=Ns(u[5]||"",!0),ah(this,u[6]||"",!0),this.m=Ns(u[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}er.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Es(u,lh,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Es(u,lh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Es(p,p.charAt(0)=="/"?K0:G0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Es(p,Y0)),a.join("")};function Ht(a){return new er(a)}function Hi(a,u,p){a.j=p?Ns(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ah(a,u,p){u instanceof Ss?(a.i=u,J0(a.i,a.h)):(p||(u=Es(u,X0)),a.i=new Ss(u,a.h))}function re(a,u,p){a.i.set(u,p)}function qi(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Es(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,q0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function q0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,G0=/[#\?:]/g,K0=/[#\?]/g,X0=/[#\?@]/g,Y0=/#/g;function Ss(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function pn(a){a.g||(a.g=new Map,a.h=0,a.i&&W0(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}e=Ss.prototype,e.add=function(a,u){pn(this),this.i=null,a=Tr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function ch(a,u){pn(a),u=Tr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function dh(a,u){return pn(a),u=Tr(a,u),a.g.has(u)}e.forEach=function(a,u){pn(this),this.g.forEach(function(p,y){p.forEach(function(z){a.call(u,z,y,this)},this)},this)},e.na=function(){pn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let y=0;y<u.length;y++){const z=a[y];for(let L=0;L<z.length;L++)p.push(u[y])}return p},e.V=function(a){pn(this);let u=[];if(typeof a=="string")dh(this,a)&&(u=u.concat(this.g.get(Tr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)u=u.concat(a[p])}return u},e.set=function(a,u){return pn(this),this.i=null,a=Tr(this,a),dh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},e.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function uh(a,u,p){ch(a,u),0<p.length&&(a.i=null,a.g.set(Tr(a,u),P(p)),a.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var y=u[p];const L=encodeURIComponent(String(y)),U=this.V(y);for(y=0;y<U.length;y++){var z=L;U[y]!==""&&(z+="="+encodeURIComponent(String(U[y]))),a.push(z)}}return this.i=a.join("&")};function Tr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function J0(a,u){u&&!a.j&&(pn(a),a.i=null,a.g.forEach(function(p,y){var z=y.toLowerCase();y!=z&&(ch(this,y),uh(this,z,p))},a)),a.j=u}function Q0(a,u){const p=new _s;if(c.Image){const y=new Image;y.onload=_(fn,p,"TestLoadImage: loaded",!0,u,y),y.onerror=_(fn,p,"TestLoadImage: error",!1,u,y),y.onabort=_(fn,p,"TestLoadImage: abort",!1,u,y),y.ontimeout=_(fn,p,"TestLoadImage: timeout",!1,u,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else u(!1)}function Z0(a,u){const p=new _s,y=new AbortController,z=setTimeout(()=>{y.abort(),fn(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(z),L.ok?fn(p,"TestPingServer: ok",!0,u):fn(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(z),fn(p,"TestPingServer: error",!1,u)})}function fn(a,u,p,y,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),y(p)}catch{}}function ev(){this.g=new D0}function tv(a,u,p){const y=p||"";try{ih(a,function(z,L){let U=z;h(z)&&(U=nl(z)),u.push(y+L+"="+encodeURIComponent(U))})}catch(z){throw u.push(y+"type="+encodeURIComponent("_badmap")),z}}function Gi(a){this.l=a.Ub||null,this.j=a.eb||!1}j(Gi,rl),Gi.prototype.g=function(){return new Ki(this.l,this.j)},Gi.prototype.i=function(a){return function(){return a}}({});function Ki(a,u){Te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Ki,Te),e=Ki.prototype,e.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Cs(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ts(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ts(this):Cs(this),this.readyState==3&&hh(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,Ts(this))},e.Qa=function(a){this.g&&(this.response=a,Ts(this))},e.ga=function(){this.g&&Ts(this)};function Ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}e.setRequestHeader=function(a,u){this.u.append(a,u)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ph(a){let u="";return O(a,function(p,y){u+=y,u+=":",u+=p,u+=`\r
`}),u}function gl(a,u,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=ph(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):re(a,u,p))}function pe(a){Te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(pe,Te);var nv=/^https?$/i,rv=["POST","PUT"];e=pe.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,u,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ll.g(),this.v=this.o?Hu(this.o):Hu(ll),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(L){fh(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var z in y)p.set(z,y[z]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),z=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rv,u,void 0))||y||z||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,U]of p)this.g.setRequestHeader(L,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xh(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){fh(this,L)}};function fh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,gh(a),Xi(a)}function gh(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),Xi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xi(this,!0)),pe.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?mh(this):this.bb())},e.bb=function(){mh(this)};function mh(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Wt(a)!=4||a.Z()!=2)){if(a.u&&Wt(a)==4)Fu(a.Ea,0,a);else if(Le(a,"readystatechange"),Wt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var y;if(y=U===0){var z=String(a.D).match(oh)[1]||null;!z&&c.self&&c.self.location&&(z=c.self.location.protocol.slice(0,-1)),y=!nv.test(z?z.toLowerCase():"")}p=y}if(p)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var L=2<Wt(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",gh(a)}}finally{Xi(a)}}}}function Xi(a,u){if(a.g){xh(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Le(a,"ready");try{p.onreadystatechange=y}catch{}}}function xh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Wt(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),A0(u)}};function vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function sv(a){const u={};a=(a.g&&2<=Wt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(f(a[y]))continue;var p=A(a[y]);const z=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=u[z]||[];u[z]=L,L.push(p)}k(u,function(y){return y.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function yh(a){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,a),this.cb=Is("retryDelaySeedMs",1e4,a),this.Wa=Is("forwardChannelMaxRetries",2,a),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new eh(a&&a.concurrentRequestLimit),this.Da=new ev,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=yh.prototype,e.la=8,e.G=1,e.connect=function(a,u,p,y){Oe(0),this.W=a,this.H=u||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Th(this,null,this.W),Ji(this)};function ml(a){if(bh(a),a.G==3){var u=a.U++,p=Ht(a.I);if(re(p,"SID",a.K),re(p,"RID",u),re(p,"TYPE","terminate"),Ps(a,p),u=new hn(a,a.j,u),u.L=2,u.v=qi(Ht(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=Ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vi(u)}Sh(a)}function Yi(a){a.g&&(vl(a),a.g.cancel(),a.g=null)}function bh(a){Yi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Qi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ji(a){if(!th(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ut||W(),F||(Ut(),F=!0),H.add(u,a),a.B=0}}function iv(a,u){return nh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=js(b(a.Ga,a,u),Eh(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const z=new hn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=w(L),T(L,this.S)):L=this.S),this.m!==null||this.O||(z.H=L,L=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=jh(this,z,u),p=Ht(this.I),re(p,"RID",a),re(p,"CVER",22),this.D&&re(p,"X-HTTP-Session-Id",this.D),Ps(this,p),L&&(this.O?u="headers="+encodeURIComponent(String(ph(L)))+"&"+u:this.m&&gl(p,this.m,L)),fl(this.h,z),this.Ua&&re(p,"TYPE","init"),this.P?(re(p,"$req",u),re(p,"SID","null"),z.T=!0,dl(z,p,null)):dl(z,p,u),this.G=2}}else this.G==3&&(a?wh(this,a):this.i.length==0||th(this.h)||wh(this))};function wh(a,u){var p;u?p=u.l:p=a.U++;const y=Ht(a.I);re(y,"SID",a.K),re(y,"RID",p),re(y,"AID",a.T),Ps(a,y),a.m&&a.o&&gl(y,a.m,a.o),p=new hn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),u&&(a.i=u.D.concat(a.i)),u=jh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fl(a.h,p),dl(p,y,u)}function Ps(a,u){a.H&&O(a.H,function(p,y){re(u,y,p)}),a.l&&ih({},function(p,y){re(u,y,p)})}function jh(a,u,p){p=Math.min(a.i.length,p);var y=a.l?b(a.l.Na,a.l,a):null;e:{var z=a.i;let L=-1;for(;;){const U=["count="+p];L==-1?0<p?(L=z[0].g,U.push("ofs="+L)):L=0:U.push("ofs="+L);let ee=!0;for(let ke=0;ke<p;ke++){let X=z[ke].g;const Ce=z[ke].map;if(X-=L,0>X)L=Math.max(0,z[ke].g-100),ee=!1;else try{tv(Ce,U,"req"+X+"_")}catch{y&&y(Ce)}}if(ee){y=U.join("&");break e}}}return a=a.i.splice(0,p),u.D=a,y}function _h(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ut||W(),F||(Ut(),F=!0),H.add(u,a),a.v=0}}function xl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=js(b(a.Fa,a),Eh(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=js(b(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Yi(this),kh(this))};function vl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function kh(a){a.g=new hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Ht(a.qa);re(u,"RID","rpc"),re(u,"SID",a.K),re(u,"AID",a.T),re(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(u,"TO",a.ja),re(u,"TYPE","xmlhttp"),Ps(a,u),a.m&&a.o&&gl(u,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=qi(Ht(u)),p.m=null,p.P=!0,Ju(p,a)}e.Za=function(){this.C!=null&&(this.C=null,Yi(this),xl(this),Oe(19))};function Qi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Nh(a,u){var p=null;if(a.g==u){Qi(a),vl(a),a.g=null;var y=2}else if(pl(a.h,u))p=u.D,rh(a.h,u),y=1;else return;if(a.G!=0){if(u.o)if(y==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var z=a.B;y=ol(),Le(y,new Ku(y,p)),Ji(a)}else _h(a);else if(z=u.s,z==3||z==0&&0<u.X||!(y==1&&iv(a,u)||y==2&&xl(a)))switch(p&&0<p.length&&(u=a.h,u.i=u.i.concat(p)),z){case 1:tr(a,5);break;case 4:tr(a,10);break;case 3:tr(a,6);break;default:tr(a,2)}}}function Eh(a,u){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*u}function tr(a,u){if(a.j.info("Error code "+u),u==2){var p=b(a.fb,a),y=a.Xa;const z=!y;y=new er(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hi(y,"https"),qi(y),z?Q0(y.toString(),p):Z0(y.toString(),p)}else Oe(2);a.G=0,a.l&&a.l.sa(u),Sh(a),bh(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Sh(a){if(a.G=0,a.ka=[],a.l){const u=sh(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Th(a,u,p){var y=p instanceof er?Ht(p):new er(p);if(y.g!="")u&&(y.g=u+"."+y.g),Wi(y,y.s);else{var z=c.location;y=z.protocol,u=u?u+"."+z.hostname:z.hostname,z=+z.port;var L=new er(null);y&&Hi(L,y),u&&(L.g=u),z&&Wi(L,z),p&&(L.l=p),y=L}return p=a.D,u=a.ya,p&&u&&re(y,p,u),re(y,"VER",a.la),Ps(a,y),y}function Ch(a,u,p){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new pe(new Gi({eb:p})):new pe(a.pa),u.Ha(a.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}e=Ih.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ot(a,u){Te.call(this),this.g=new yh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!f(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!f(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Cr(this)}j(ot,Te),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){ml(this.g)},ot.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=nl(a),a=p);u.i.push(new B0(u.Ya++,a)),u.G==3&&Ji(u)},ot.prototype.N=function(){this.g.l=null,delete this.j,ml(this.g),delete this.g,ot.aa.N.call(this)};function Ph(a){sl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}j(Ph,sl);function Rh(){il.call(this),this.status=1}j(Rh,il);function Cr(a){this.g=a}j(Cr,Ih),Cr.prototype.ua=function(){Le(this.g,"a")},Cr.prototype.ta=function(a){Le(this.g,new Ph(a))},Cr.prototype.sa=function(a){Le(this.g,new Rh)},Cr.prototype.ra=function(){Le(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,al.NO_ERROR=0,al.TIMEOUT=8,al.HTTP_ERROR=6,F0.COMPLETE="complete",z0.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",Te.prototype.listen=Te.prototype.K,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const Cf="@firebase/firestore";/**
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
 */let Oi="10.14.0";/**
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
 */const cs=new xu("@firebase/firestore");function vt(e,...t){if(cs.logLevel<=Y.DEBUG){const n=t.map(Cu);cs.debug(`Firestore (${Oi}): ${e}`,...n)}}function c0(e,...t){if(cs.logLevel<=Y.ERROR){const n=t.map(Cu);cs.error(`Firestore (${Oi}): ${e}`,...n)}}function L_(e,...t){if(cs.logLevel<=Y.WARN){const n=t.map(Cu);cs.warn(`Firestore (${Oi}): ${e}`,...n)}}function Cu(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Iu(e="Unexpected state"){const t=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+e;throw c0(t),new Error(t)}function ri(e,t){e||Iu()}/**
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
 */const We={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class qe extends Lt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class si{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class d0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class O_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class M_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class U_{constructor(t){this.t=t,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ri(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let o=new si;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new si,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new si)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ri(typeof r.accessToken=="string"),new d0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ri(t===null||typeof t=="string"),new Ue(t)}}class F_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new F_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class B_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){ri(this.o===void 0);const r=o=>{o.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,vt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ri(typeof n.token=="string"),this.R=n.token,new B_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function H_(e){return e.name==="IndexedDbTransactionError"}class va{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof va&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var If,G;(G=If||(If={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new l0([4294967295,4294967295],0);function ec(){return typeof document<"u"?document:null}/**
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
 */class W_{constructor(t,n,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&vt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Pu{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const l=Date.now()+r,c=new Pu(t,n,l,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Pf,Rf;(Rf=Pf||(Pf={})).ea="default",Rf.Cache="cache";/**
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
 */function q_(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Map;function G_(e,t,n,r){if(t===!0&&r===!0)throw new qe(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function K_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Iu()}function X_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qe(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K_(e);throw new qe(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new qe(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new qe(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}G_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q_((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class u0{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qe(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new qe(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new O_;switch(r.type){case"firstParty":return new $_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qe(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Af.get(n);r&&(vt("ComponentProvider","Removing Datastore"),Af.delete(n),r.terminate())}(this),Promise.resolve()}}function Y_(e,t,n,r={}){var i;const o=(e=X_(e,u0))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&L_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Ue.MOCK_USER;else{c=jx(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new qe(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ue(h)}e._authCredentials=new M_(new d0(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new W_(this,"async_queue_retry"),this.Vu=()=>{const r=ec();r&&vt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new si;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!H_(t))throw t;vt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw c0("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Pu.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Iu()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class J_ extends u0{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new zf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new zf(t),this._firestoreClient=void 0,await t}}}function Q_(e,t){const n=typeof e=="object"?e:yu(),r=typeof e=="string"?e:"(default)",i=Ba(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=yx("firestore");o&&Y_(i,...o)}return i}(function(t,n=!0){(function(i){Oi=i})(Nr),gr(new Bn("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new J_(new U_(r.getProvider("auth-internal")),new V_(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new qe(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(h.options.projectId,g)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Rt(Cf,"4.7.3",t),Rt(Cf,"4.7.3","esm2017")})();/**
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
 */const h0="firebasestorage.googleapis.com",Z_="storageBucket",ek=2*60*1e3,tk=10*60*1e3;/**
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
 */class Mt extends Lt{constructor(t,n,r=0){super(tc(t),`Firebase Storage: ${n} (${tc(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return tc(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zt||(zt={}));function tc(e){return"storage/"+e}function nk(){const e="An unknown error occurred, please check the error payload for server response.";return new Mt(zt.UNKNOWN,e)}function rk(){return new Mt(zt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sk(){return new Mt(zt.CANCELED,"User canceled the upload/download.")}function ik(e){return new Mt(zt.INVALID_URL,"Invalid URL '"+e+"'.")}function ok(e){return new Mt(zt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Lf(e){return new Mt(zt.INVALID_ARGUMENT,e)}function p0(){return new Mt(zt.APP_DELETED,"The Firebase app was deleted.")}function ak(e){return new Mt(zt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class yt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=yt.makeFromUrl(t,n)}catch{return new yt(t,"")}if(r.path==="")return r;throw ok(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),d={bucket:1,path:3};function h(I){I.path_=decodeURIComponent(I.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${g}/b/${i}/o${b}`,"i"),j={bucket:1,path:3},P=n===h0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",x=new RegExp(`^https?://${P}/${i}/${D}`,"i"),v=[{regex:c,indices:d,postModify:o},{regex:_,indices:j,postModify:h},{regex:x,indices:{bucket:1,path:2},postModify:h}];for(let I=0;I<v.length;I++){const N=v[I],O=N.regex.exec(t);if(O){const k=O[N.indices.bucket];let w=O[N.indices.path];w||(w=""),r=new yt(k,w),N.postModify(r);break}}if(r==null)throw ik(t);return r}}class lk{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function ck(e,t,n){let r=1,i=null,o=null,l=!1,c=0;function d(){return c===2}let h=!1;function g(...D){h||(h=!0,t.apply(null,D))}function m(D){i=setTimeout(()=>{i=null,e(_,d())},D)}function b(){o&&clearTimeout(o)}function _(D,...x){if(h){b();return}if(D){b(),g.call(null,D,...x);return}if(d()||l){b(),g.call(null,D,...x);return}r<64&&(r*=2);let v;c===1?(c=2,v=0):v=(r+Math.random())*1e3,m(v)}let j=!1;function P(D){j||(j=!0,b(),!h&&(i!==null?(D||(c=2),clearTimeout(i),m(0)):D||(c=1)))}return m(0),o=setTimeout(()=>{l=!0,P(!0)},n),P}function dk(e){e(!1)}/**
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
 */function uk(e){return e!==void 0}function Of(e,t,n,r){if(r<t)throw Lf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Lf(`Invalid value for '${e}'. Expected ${n} or less.`)}function hk(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ya;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ya||(ya={}));/**
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
 */function pk(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class fk{constructor(t,n,r,i,o,l,c,d,h,g,m,b=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=d,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=m,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,j)=>{this.resolve_=_,this.reject_=j,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new bo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=c=>{const d=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,h)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const c=o.getErrorCode()===ya.NO_ERROR,d=o.getStatus();if(!c||pk(d,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===ya.ABORT;r(!1,new bo(!1,null,g));return}const h=this.successCodes_.indexOf(d)!==-1;r(!0,new bo(h,o))})},n=(r,i)=>{const o=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());uk(d)?o(d):o()}catch(d){l(d)}else if(c!==null){const d=nk();d.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,d)):l(d)}else if(i.canceled){const d=this.appDelete_?p0():sk();l(d)}else{const d=rk();l(d)}};this.canceled_?n(!1,new bo(!1,null,!0)):this.backoffId_=ck(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&dk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function gk(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function mk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function xk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function vk(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function yk(e,t,n,r,i,o,l=!0){const c=hk(e.urlParams),d=e.url+c,h=Object.assign({},e.headers);return xk(h,t),gk(h,n),mk(h,o),vk(h,r),new fk(d,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
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
 */class ba{constructor(t,n){this._service=t,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ba(t,n)}get root(){const t=new yt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wk(this._location.path)}get storage(){return this._service}get parent(){const t=bk(this._location.path);if(t===null)return null;const n=new yt(this._location.bucket,t);return new ba(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ak(t)}}function Mf(e,t){const n=t==null?void 0:t[Z_];return n==null?null:yt.makeFromBucketSpec(n,e)}function jk(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:jx(i,e.app.options.projectId))}class _k{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=h0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ek,this._maxUploadRetryTime=tk,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=Mf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,t):this._bucket=Mf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ba(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new lk(p0());{const l=yk(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Uf="@firebase/storage",Ff="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="storage";function kk(e=yu(),t){e=Nt(e);const r=Ba(e,f0).getImmediate({identifier:t}),i=yx("storage");return i&&Nk(r,...i),r}function Nk(e,t,n,r={}){jk(e,t,n,r)}function Ek(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new _k(n,r,i,t,Nr)}function Sk(){gr(new Bn(f0,Ek,"PUBLIC").setMultipleInstances(!0)),Rt(Uf,Ff,""),Rt(Uf,Ff,"esm2017")}Sk();const Tk={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Ru=Nx(Tk),Fs=R_(Ru);Q_(Ru);kk(Ru);const g0=C.createContext(void 0),Ck=({children:e})=>{const[t,n]=C.useState(null),[r,i]=C.useState(!0),[o,l]=C.useState(null);C.useEffect(()=>{const _=bj(Fs,j=>{n(j),i(!1)});return()=>_()},[]);const b={user:t,loading:r,error:o,login:async(_,j)=>{try{l(null),i(!0),await gj(Fs,_,j)}catch(P){const D=nc(P.code);throw l(D),new Error(D)}finally{i(!1)}},register:async(_,j,P)=>{try{l(null),i(!0);const{user:D}=await fj(Fs,_,j);P&&await xj(D,{displayName:P})}catch(D){const x=nc(D.code);throw l(x),new Error(x)}finally{i(!1)}},logout:async()=>{try{l(null),await wj(Fs)}catch(_){throw l("Error al cerrar sesión"),_}},resetPassword:async _=>{try{l(null),await pj(Fs,_)}catch(j){const P=nc(j.code);throw l(P),new Error(P)}},clearError:()=>l(null)};return s.jsx(g0.Provider,{value:b,children:e})},m0=()=>{const e=C.useContext(g0);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function nc(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const fe=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=m0(),i=dn();return r?s.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[s.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),s.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?s.jsx(s.Fragment,{children:e}):s.jsx(Ao,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ik={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=C.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:d,...h},g)=>C.createElement("svg",{ref:g,...Ik,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Pk(e)}`,c].join(" "),...h},[...t.map(([m,b])=>C.createElement(m,b)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=B("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=B("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=B("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=B("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
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
 */const yr=B("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=B("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=B("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=B("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=B("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
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
 */const dd=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=B("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=B("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=B("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=B("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=B("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=B("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
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
 */const b0=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=B("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
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
 */const ud=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=B("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=B("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=B("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=B("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Qk=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Je,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:qn,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:br,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:ds,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:qk,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:Jk,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return s.jsxs("div",{className:"landing-page",children:[s.jsxs("nav",{className:"navbar",children:[s.jsxs("div",{className:"nav-brand",children:[s.jsx(Je,{size:32}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"nav-links",children:[s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx(De,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),s.jsx(De,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),s.jsxs("section",{className:"hero",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),s.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),s.jsxs("div",{className:"hero-buttons",children:[s.jsxs(De,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",s.jsx(wa,{size:20})]}),s.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),s.jsxs("div",{className:"hero-trust",children:[s.jsx("span",{children:"Confiado por +100 empresas de courier"}),s.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>s.jsx(ud,{size:16,fill:"#f59e0b"},r))})]})]}),s.jsx("div",{className:"hero-image",children:s.jsxs("div",{className:"dashboard-preview",children:[s.jsx("div",{className:"preview-header",children:s.jsxs("div",{className:"dots",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})}),s.jsxs("div",{className:"preview-content",children:[s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-chart"})]})]})})]}),s.jsxs("section",{id:"features",className:"features",children:[s.jsx("h2",{children:"Todo lo que necesitas para operar"}),s.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),s.jsx("div",{className:"features-grid",children:t.map((n,r)=>s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(n.icon,{size:28})}),s.jsx("h3",{children:n.title}),s.jsx("p",{children:n.description})]},r))})]}),s.jsxs("section",{id:"pricing",className:"pricing",children:[s.jsx("h2",{children:"Planes simples y transparentes"}),s.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),s.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>s.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&s.jsx("span",{className:"popular-badge",children:"Más Popular"}),s.jsx("h3",{children:n.name}),s.jsx("p",{className:"plan-description",children:n.description}),s.jsxs("div",{className:"plan-price",children:[n.priceLabel&&s.jsx("span",{className:"price-label",children:n.priceLabel}),s.jsxs("span",{className:"price",children:["$",n.price]}),s.jsx("span",{className:"period",children:"/mes"})]}),s.jsx("ul",{className:"plan-features",children:n.features.map((i,o)=>s.jsxs("li",{children:[s.jsx(Tn,{size:16})," ",i]},o))}),s.jsx(De,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),s.jsxs("section",{className:"cta",children:[s.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),s.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),s.jsxs(De,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",s.jsx(wa,{size:24})]})]}),s.jsxs("footer",{className:"footer",children:[s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx(Je,{size:28}),s.jsx("span",{children:"Sistema Courier"}),s.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Producto"}),s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx("a",{href:"/docs",children:"Documentación"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Empresa"}),s.jsx("a",{href:"/about",children:"Nosotros"}),s.jsx("a",{href:"/contact",children:"Contacto"}),s.jsx("a",{href:"/blog",children:"Blog"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"/privacy",children:"Privacidad"}),s.jsx("a",{href:"/terms",children:"Términos"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),s.jsx("style",{children:`
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
      `})]})},Zk=()=>{const e=kt(),[t,n]=C.useState(1),[r,i]=C.useState(!1),[o,l]=C.useState(""),[c,d]=C.useState("idle"),[h,g]=C.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),m=x=>{const{name:f,value:v}=x.target;if(g({...h,[f]:v}),l(""),f==="company_name"){const I=v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);g(N=>({...N,subdomain:I})),I.length>=3&&b(I)}if(f==="subdomain"){const I=v.toLowerCase().replace(/[^a-z0-9-]/g,"");g(N=>({...N,subdomain:I})),I.length>=3&&b(I)}},b=async x=>{d("checking");try{const v=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:x})})).json();d(v.available?"available":"taken")}catch{d("idle")}},_=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),j=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),P=()=>{t===1&&_()&&n(2)},D=async x=>{if(x.preventDefault(),!!j()){i(!0),l("");try{const f=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),v=await f.json();if(!f.ok)throw new Error(v.error||"Error al crear la cuenta");e(`/onboarding?tenant=${v.tenant.subdomain}`)}catch(f){l(f.message)}finally{i(!1)}}};return s.jsxs("div",{className:"register-page",children:[s.jsxs("div",{className:"register-container",children:[s.jsxs("div",{className:"register-brand",children:[s.jsxs(De,{to:"/",className:"brand-logo",children:[s.jsx(Je,{size:40}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"brand-content",children:[s.jsx("h2",{children:"Comienza tu prueba gratuita"}),s.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),s.jsxs("ul",{className:"brand-features",children:[s.jsxs("li",{children:[s.jsx(Tn,{size:20})," Configuración en minutos"]}),s.jsxs("li",{children:[s.jsx(Tn,{size:20})," Soporte incluido"]}),s.jsxs("li",{children:[s.jsx(Tn,{size:20})," Cancela cuando quieras"]})]})]})]}),s.jsxs("div",{className:"register-form-container",children:[s.jsxs("div",{className:"form-header",children:[s.jsx("h1",{children:"Crear cuenta"}),s.jsxs("p",{children:["Paso ",t," de 2"]})]}),s.jsxs("div",{className:"progress-bar",children:[s.jsx("div",{className:"progress-step active",children:"1"}),s.jsx("div",{className:"progress-line"}),s.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),o&&s.jsxs("div",{className:"error-message",children:[s.jsx(Vn,{size:18}),o]}),s.jsx("form",{onSubmit:D,children:t===1?s.jsxs("div",{className:"form-step",children:[s.jsx("h3",{children:"Información de la empresa"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Nombre de la empresa"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(ja,{size:20}),s.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:m,placeholder:"Mi Empresa de Courier",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu subdominio"}),s.jsxs("div",{className:"input-wrapper subdomain-input",children:[s.jsx(ds,{size:20}),s.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:m,placeholder:"miempresa",required:!0}),s.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&s.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&s.jsxs("span",{className:"subdomain-status available",children:[s.jsx(Tn,{size:14})," Disponible"]}),c==="taken"&&s.jsxs("span",{className:"subdomain-status taken",children:[s.jsx(Vn,{size:14})," No disponible"]})]}),s.jsxs("button",{type:"button",onClick:P,className:"btn-next",children:["Continuar ",s.jsx(wa,{size:20})]})]}):s.jsxs("div",{className:"form-step",children:[s.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[s.jsx(qa,{size:18})," Atrás"]}),s.jsx("h3",{children:"Tu cuenta de administrador"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu nombre"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Kk,{size:20}),s.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:m,placeholder:"Juan Pérez",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Email"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Du,{size:20}),s.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:m,placeholder:"juan@miempresa.com",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(dd,{size:20}),s.jsx("input",{type:"password",name:"password",value:h.password,onChange:m,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Confirmar contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(dd,{size:20}),s.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:m,placeholder:"Repite la contraseña",required:!0})]})]}),s.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),s.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",s.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",s.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),s.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",s.jsx(De,{to:"/login",children:"Iniciar sesión"})]})]})]}),s.jsx("style",{children:`
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
      `})]})},eN=()=>{const e=kt(),[t]=O2();t.get("tenant");const[n,r]=C.useState(1),[i,o]=C.useState(!1),[l,c]=C.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),d=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=b=>{var j;const _=(j=b.target.files)==null?void 0:j[0];_&&c({...l,logo:_,logo_preview:URL.createObjectURL(_)})},g=async()=>{o(!0);try{if(l.logo){const b=new FormData;b.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:b})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(b){console.error("Error saving onboarding:",b)}finally{o(!1)}},m=()=>{e("/dashboard")};return s.jsxs("div",{className:"onboarding-wizard",children:[s.jsxs("div",{className:"wizard-container",children:[s.jsxs("div",{className:"wizard-header",children:[s.jsx(Je,{size:32,color:"#3b82f6"}),s.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),s.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),s.jsx("div",{className:"wizard-progress",children:[1,2,3].map(b=>s.jsx("div",{className:`progress-dot ${n>=b?"active":""}`,children:n>b?s.jsx(Tn,{size:16}):b},b))}),s.jsxs("div",{className:"wizard-content",children:[n===1&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Hf,{size:32})}),s.jsx("h2",{children:"Sube tu logo"}),s.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),s.jsx("div",{className:"logo-upload",children:l.logo_preview?s.jsxs("div",{className:"logo-preview",children:[s.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),s.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):s.jsxs("label",{className:"upload-area",children:[s.jsx(Hf,{size:40}),s.jsx("span",{children:"Arrastra o haz clic para subir"}),s.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),s.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Fk,{size:32})}),s.jsx("h2",{children:"Elige tus colores"}),s.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),s.jsx("div",{className:"color-picker",children:d.map(b=>s.jsx("button",{className:`color-option ${l.primary_color===b?"selected":""}`,style:{backgroundColor:b},onClick:()=>c({...l,primary_color:b}),children:l.primary_color===b&&s.jsx(Tn,{size:20})},b))}),s.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:s.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Vf,{size:32})}),s.jsx("h2",{children:"Información de contacto"}),s.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),s.jsxs("div",{className:"contact-form",children:[s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Teléfono (opcional)"}),s.jsx("input",{type:"tel",value:l.company_phone,onChange:b=>c({...l,company_phone:b.target.value}),placeholder:"+1 234 567 8900"})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Dirección (opcional)"}),s.jsx("input",{type:"text",value:l.company_address,onChange:b=>c({...l,company_address:b.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),s.jsxs("div",{className:"wizard-nav",children:[n>1?s.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[s.jsx(qa,{size:20})," Atrás"]}):s.jsx("button",{onClick:m,className:"btn-skip",children:"Omitir configuración"}),n<3?s.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",s.jsx(wa,{size:20})]}):s.jsxs("button",{onClick:g,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",s.jsx(Vf,{size:20})]})]})]}),s.jsx("style",{children:`
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
      `})]})},tN=()=>{var x,f,v,I,N,O,k,w;const{tenant:e,isWhiteLabel:t}=xe(),{login:n,clearError:r}=m0(),i=kt(),o=dn(),[l,c]=C.useState(""),[d,h]=C.useState(""),[g,m]=C.useState(!1),[b,_]=C.useState(""),j=((f=(x=o.state)==null?void 0:x.from)==null?void 0:f.pathname)||"/dashboard",P=async E=>{E.preventDefault(),m(!0),_(""),r();try{await n(l,d),i(j,{replace:!0})}catch(T){_(T.message||"Error al iniciar sesión")}finally{m(!1)}},D=((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6";return s.jsxs("div",{className:"login-page",children:[s.jsxs("div",{className:"login-container",children:[s.jsx("div",{className:"login-logo",children:(I=e==null?void 0:e.branding)!=null&&I.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):s.jsx("div",{className:"logo-placeholder",children:((O=(N=e==null?void 0:e.branding)==null?void 0:N.company_name)==null?void 0:O.charAt(0))||"C"})}),s.jsx("h1",{children:((k=e==null?void 0:e.branding)==null?void 0:k.company_name)||"Sistema Courier"}),((w=e==null?void 0:e.branding)==null?void 0:w.tagline)&&s.jsx("p",{className:"tagline",children:e.branding.tagline}),s.jsxs("form",{onSubmit:P,children:[b&&s.jsx("div",{className:"error-message",children:b}),s.jsxs("div",{className:"input-group",children:[s.jsx(Du,{size:20,className:"input-icon"}),s.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:E=>c(E.target.value),required:!0})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(dd,{size:20,className:"input-icon"}),s.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:E=>h(E.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-login",disabled:g,style:{backgroundColor:D},children:g?"Iniciando sesión...":s.jsxs(s.Fragment,{children:[s.jsx(Uk,{size:20}),"Iniciar Sesión"]})}),s.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&s.jsx("div",{className:"login-footer",children:s.jsxs("p",{children:["Powered by ",s.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),s.jsx("style",{children:`
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
      `})]})},nN=()=>{var P,D,x;const{tenant:e,isWhiteLabel:t}=xe(),n=((P=e==null?void 0:e.branding)==null?void 0:P.primary_color)||"#3b82f6",[r,i]=C.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[o,l]=C.useState([]),[c,d]=C.useState(!0);C.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{d(!0);const f="http://localhost:3001",I=await(await fetch(`${f}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(I);const O=await(await fetch(`${f}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(O)}catch(f){console.error("Error fetching dashboard data:",f)}finally{d(!1)}},g=f=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(f),m=f=>{const v=new Date(f),N=new Date().getTime()-v.getTime(),O=Math.floor(N/6e4);if(O<1)return"Hace un momento";if(O<60)return`Hace ${O} min`;const k=Math.floor(O/60);if(k<24)return`Hace ${k} hora${k>1?"s":""}`;const w=Math.floor(k/24);return`Hace ${w} día${w>1?"s":""}`},b=f=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[f]||f,_=f=>{switch(f){case"delivered":return s.jsx(Qe,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return s.jsx(qn,{size:16,className:"status-icon warning"});case"assigned":case"processing":return s.jsx(Je,{size:16,className:"status-icon info"});default:return s.jsx(vr,{size:16,className:"status-icon pending"})}},j=[{icon:Je,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:qn,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:br,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:yr,label:"Ingresos Mes",value:g(r.monthlyRevenue),color:"#f59e0b"}];return s.jsxs("div",{className:"dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsx("div",{className:"header-left",children:(D=e==null?void 0:e.branding)!=null&&D.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):s.jsx("span",{className:"header-title",children:((x=e==null?void 0:e.branding)==null?void 0:x.company_name)||"Sistema Courier"})}),s.jsxs("div",{className:"header-right",children:[s.jsx("span",{className:"user-name",children:"Admin"}),s.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),s.jsxs("main",{className:"dashboard-main",children:[s.jsx("div",{className:"stats-grid",children:j.map((f,v)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{backgroundColor:`${f.color}20`,color:f.color},children:s.jsx(f.icon,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:c?"...":f.value}),s.jsx("div",{className:"stat-label",children:f.label})]})]},v))}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Paquetes Recientes"}),s.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),s.jsx("div",{className:"card-content",children:c?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):o.length===0?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):o.slice(0,4).map(f=>s.jsxs("div",{className:"package-item",children:[s.jsxs("div",{className:"package-info",children:[s.jsx("span",{className:"package-id",children:f.tracking_number}),s.jsx("span",{className:"package-client",children:f.client_name||"Sin cliente"})]}),s.jsxs("div",{className:"package-status",children:[_(f.status),s.jsx("span",{children:b(f.status)})]}),s.jsx("span",{className:"package-time",children:m(f.created_at)})]},f.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Rendimiento"}),s.jsx(Wn,{size:20,style:{color:"#10b981"}})]}),s.jsxs("div",{className:"card-content performance-grid",children:[s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),s.jsx("span",{className:"perf-value success",children:"94%"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),s.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Incidentes"}),s.jsx("span",{className:"perf-value warning",children:"3"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),s.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&s.jsxs("div",{className:"trial-notice",children:[s.jsx(Vn,{size:20}),s.jsx("span",{children:"Tu período de prueba termina pronto. "}),s.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),s.jsx("style",{children:`
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
      `})]})},rN=()=>{var f,v;const{tenant:e}=xe(),t=kt(),[n,r]=C.useState([]),[i,o]=C.useState(!0),[l,c]=C.useState(""),[d,h]=C.useState(""),[g,m]=C.useState(1),[b,_]=C.useState(0),j=20;C.useEffect(()=>{e&&P()},[e,g,l,d]);const P=async()=>{var I;if(e)try{o(!0);const N="http://localhost:3001",O=new URLSearchParams({page:g.toString(),limit:j.toString(),...l&&{search:l},...d&&{status:d}}),w=await(await fetch(`${N}/api/packages?${O}`,{headers:{"X-Tenant-ID":e.id}})).json();r(w.packages||[]),_(((I=w.pagination)==null?void 0:I.total)||0)}catch(N){console.error("Error fetching packages:",N)}finally{o(!1)}},D=I=>{const O={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[I]||{label:I,color:"#6b7280"};return s.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${O.color}20`,color:O.color},children:O.label})},x=I=>new Date(I).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return s.jsxs("div",{className:"packages-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Paquetes"}),s.jsxs("p",{children:[b," paquetes en total"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(us,{size:20}),"Nuevo Paquete"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("div",{className:"search-box",children:[s.jsx(Mi,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:I=>{c(I.target.value),m(1)}})]}),s.jsxs("select",{value:d,onChange:I=>{h(I.target.value),m(1)},className:"status-filter",children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"pending",children:"Pendiente"}),s.jsx("option",{value:"processing",children:"Procesando"}),s.jsx("option",{value:"assigned",children:"Asignado"}),s.jsx("option",{value:"in_transit",children:"En tránsito"}),s.jsx("option",{value:"out_for_delivery",children:"En reparto"}),s.jsx("option",{value:"delivered",children:"Entregado"}),s.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),s.jsx("div",{className:"table-container",children:i?s.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Je,{size:48}),s.jsx("h3",{children:"No hay paquetes"}),s.jsx("p",{children:"Crea tu primer paquete para comenzar"}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(us,{size:20}),"Crear Paquete"]})]}):s.jsxs("table",{className:"packages-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tracking"}),s.jsx("th",{children:"Destinatario"}),s.jsx("th",{children:"Dirección"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(I=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"tracking-number",children:I.tracking_number})}),s.jsx("td",{children:I.recipient_name}),s.jsx("td",{className:"address-cell",children:I.recipient_address}),s.jsx("td",{children:D(I.status)}),s.jsx("td",{children:x(I.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${I.id}`),title:"Ver detalle",children:s.jsx(zk,{size:16})}),s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${I.id}/edit`),title:"Editar",children:s.jsx(Ga,{size:16})})]})})]},I.id))})]})}),!i&&b>j&&s.jsxs("div",{className:"pagination",children:[s.jsx("button",{disabled:g===1,onClick:()=>m(g-1),children:"Anterior"}),s.jsxs("span",{children:["Página ",g," de ",Math.ceil(b/j)]}),s.jsx("button",{disabled:g>=Math.ceil(b/j),onClick:()=>m(g+1),children:"Siguiente"})]}),s.jsx("style",{children:`
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
            `})]})},sN=()=>{var x,f,v,I;const{tenant:e}=xe(),t=kt(),[n,r]=C.useState(!1),[i,o]=C.useState([]),[l,c]=C.useState([]),[d,h]=C.useState(null),[g,m]=C.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",zone:"",service_type:"standard",weight:"",dimensions:"",declared_value:"",notes:""});C.useEffect(()=>{e&&(b(),_())},[e]),C.useEffect(()=>{g.zone&&g.weight&&parseFloat(g.weight)>0?j():h(null)},[g.zone,g.weight,g.service_type]);const b=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();o(k.clients||[])}catch(N){console.error("Error fetching clients:",N)}},_=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/rates/zones",{headers:{"X-Tenant-ID":e.id}})).json();c(k.zones||[])}catch(N){console.error("Error fetching zones:",N)}},j=async()=>{if(!(!e||!g.zone||!g.weight))try{const k=await(await fetch(`http://localhost:3001/api/rates/calculate?zone=${g.zone}&weight=${g.weight}&serviceType=${g.service_type}`,{headers:{"X-Tenant-ID":e.id}})).json();h(k.totalPrice||null)}catch(N){console.error("Error calculating price:",N),h(null)}},P=N=>{const O=i.find(k=>k.id===N);m(O?{...g,client_id:N,sender_name:O.name,sender_phone:O.phone}:{...g,client_id:N})},D=async N=>{if(N.preventDefault(),!!e){if(!g.client_id||!g.recipient_name||!g.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const k=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...g,weight:parseFloat(g.weight)||0,declared_value:parseFloat(g.declared_value)||0})});if(k.ok){const w=await k.json();alert(`Paquete creado exitosamente! Tracking: ${w.tracking_number}`),t("/packages")}else{const w=await k.json();alert(`Error: ${w.error||"No se pudo crear el paquete"}`)}}catch(O){console.error("Error creating package:",O),alert("Error al crear el paquete")}finally{r(!1)}}};return s.jsxs("div",{className:"new-package-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[s.jsx(qa,{size:20}),"Volver"]}),s.jsx("h1",{children:"Nuevo Paquete"})]}),s.jsxs("form",{onSubmit:D,className:"package-form",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Información del Cliente"}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cliente *"}),s.jsxs("select",{value:g.client_id,onChange:N=>P(N.target.value),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(N=>s.jsx("option",{value:N.id,children:N.name},N.id))]})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Remitente"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Remitente"}),s.jsx("input",{type:"text",value:g.sender_name,onChange:N=>m({...g,sender_name:N.target.value}),placeholder:"Nombre completo"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Remitente"}),s.jsx("input",{type:"tel",value:g.sender_phone,onChange:N=>m({...g,sender_phone:N.target.value}),placeholder:"8888-8888"})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Destinatario"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Destinatario *"}),s.jsx("input",{type:"text",value:g.recipient_name,onChange:N=>m({...g,recipient_name:N.target.value}),placeholder:"Nombre completo",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Destinatario *"}),s.jsx("input",{type:"tel",value:g.recipient_phone,onChange:N=>m({...g,recipient_phone:N.target.value}),placeholder:"8888-8888",required:!0})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Dirección de Entrega *"}),s.jsx("textarea",{value:g.recipient_address,onChange:N=>m({...g,recipient_address:N.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Detalles del Paquete"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Zona de Entrega *"}),s.jsxs("select",{value:g.zone,onChange:N=>m({...g,zone:N.target.value}),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar zona"}),l.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Tipo de Servicio *"}),s.jsxs("select",{value:g.service_type,onChange:N=>m({...g,service_type:N.target.value}),required:!0,children:[s.jsx("option",{value:"standard",children:"Estándar"}),s.jsx("option",{value:"express",children:"Express"}),s.jsx("option",{value:"same_day",children:"Mismo Día"}),s.jsx("option",{value:"scheduled",children:"Programado"})]})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Peso (kg) *"}),s.jsx("input",{type:"number",step:"0.01",value:g.weight,onChange:N=>m({...g,weight:N.target.value}),placeholder:"0.00",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Dimensiones"}),s.jsx("input",{type:"text",value:g.dimensions,onChange:N=>m({...g,dimensions:N.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Valor Declarado (₡)"}),s.jsx("input",{type:"number",step:"0.01",value:g.declared_value,onChange:N=>m({...g,declared_value:N.target.value}),placeholder:"0.00"})]})]}),d!==null&&s.jsxs("div",{className:"price-calculator",children:[s.jsx("div",{className:"price-label",children:"Precio Estimado:"}),s.jsxs("div",{className:"price-value",children:["₡",d.toLocaleString("es-CR",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Notas"}),s.jsx("textarea",{value:g.notes,onChange:N=>m({...g,notes:N.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),s.jsxs("div",{className:"form-actions",children:[s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[s.jsx(b0,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),s.jsx("style",{children:`
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
                    border-color: ${((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6"};
                }

                .form-group textarea {
                    resize: vertical;
                    font-family: inherit;
                }

                .price-calculator {
                    background: linear-gradient(135deg, ${((f=e==null?void 0:e.branding)==null?void 0:f.primary_color)||"#3b82f6"} 0%, ${((v=e==null?void 0:e.branding)==null?void 0:v.secondary_color)||"#8b5cf6"} 100%);
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
                    background: ${((I=e==null?void 0:e.branding)==null?void 0:I.primary_color)||"#3b82f6"};
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
            `})]})};function hd(){return hd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hd.apply(null,arguments)}function iN(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function oN(e,t){if(e==null)return{};var n,r,i=iN(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function pd(e){"@babel/helpers - typeof";return pd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pd(e)}function aN(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function lN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fd(e,t){return fd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},fd(e,t)}function cN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fd(e,t)}function ka(e){return ka=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ka(e)}function j0(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(j0=function(){return!!e})()}function dN(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uN(e,t){if(t&&(pd(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dN(e)}function hN(e){var t=j0();return function(){var n,r=ka(e);if(t){var i=ka(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return uN(this,n)}}var _0={exports:{}},pN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fN=pN,gN=fN;function k0(){}function N0(){}N0.resetWarningCache=k0;var mN=function(){function e(r,i,o,l,c,d){if(d!==gN){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:N0,resetWarningCache:k0};return n.PropTypes=n,n};_0.exports=mN();var xN=_0.exports;const Ze=gd(xN);/*!
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
 */function jr(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}jr.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};jr.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};jr.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function zu(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}zu.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,i=0;i<=e;i+=1){var o=i/e,l=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var d=l-n,h=c-r;t+=Math.sqrt(d*d+h*h)}n=l,r=c}return t};zu.prototype._point=function(e,t,n,r,i){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+i*e*e*e};function vN(e,t,n){var r,i,o,l=null,c=0;n||(n={});var d=function(){c=n.leading===!1?0:Date.now(),l=null,o=e.apply(r,i),l||(r=i=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var g=t-(h-c);return r=this,i=arguments,g<=0||g>t?(l&&(clearTimeout(l),l=null),c=h,o=e.apply(r,i),l||(r=i=null)):!l&&n.trailing!==!1&&(l=setTimeout(d,g)),o}}function te(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=vN(te.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=te.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(i){i.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(i))},this._handleMouseMove=function(i){n._mouseButtonDown&&n._strokeMoveUpdate(i)},this._handleMouseUp=function(i){i.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(i))},this._handleTouchStart=function(i){if(i.targetTouches.length===1){var o=i.changedTouches[0];n._strokeBegin(o)}},this._handleTouchMove=function(i){i.preventDefault();var o=i.targetTouches[0];n._strokeMoveUpdate(o)},this._handleTouchEnd=function(i){var o=i.target===n._canvas;o&&(i.preventDefault(),n._strokeEnd(i))},this.on()}te.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};te.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,i=n.ratio||window.devicePixelRatio||1,o=n.width||this._canvas.width/i,l=n.height||this._canvas.height/i;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,o,l)},this._isEmpty=!1};te.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};te.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};te.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};te.prototype.isEmpty=function(){return this._isEmpty};te.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};te.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),i=this._data[this._data.length-1],o=i&&i[i.length-1],l=o&&r.distanceTo(o)<this.minDistance;if(!(o&&l)){var c=this._addPoint(r),d=c.curve,h=c.widths;d&&h&&this._drawCurve(d,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};te.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],i=r[r.length-1];n.equals(i)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};te.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};te.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};te.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};te.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new jr(e-r.left,t-r.top,n||new Date().getTime())};te.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var i=n.c1,o=new zu(t[1],r,i,t[2]),l=this._calculateCurveWidths(o);return t.shift(),{curve:o,widths:l}}return{}};te.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,i=e.y-t.y,o=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},d={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+i*i),g=Math.sqrt(o*o+l*l),m=c.x-d.x,b=c.y-d.y,_=g/(h+g),j={x:d.x+m*_,y:d.y+b*_},P=t.x-j.x,D=t.y-j.y;return{c1:new jr(c.x+P,c.y+D),c2:new jr(d.x+P,d.y+D)}};te.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(i);return r.start=this._lastWidth,r.end=o,this._lastVelocity=i,this._lastWidth=o,r};te.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};te.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};te.prototype._drawCurve=function(e,t,n){var r=this._ctx,i=n-t,o=Math.floor(e.length());r.beginPath();for(var l=0;l<o;l+=1){var c=l/o,d=c*c,h=d*c,g=1-c,m=g*g,b=m*g,_=b*e.startPoint.x;_+=3*m*c*e.control1.x,_+=3*g*d*e.control2.x,_+=h*e.endPoint.x;var j=b*e.startPoint.y;j+=3*m*c*e.control1.y,j+=3*g*d*e.control2.y,j+=h*e.endPoint.y;var P=t+h*i;this._drawPoint(_,j,P)}r.closePath(),r.fill()};te.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};te.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var i=e[r];if(i.length>1)for(var o=0;o<i.length;o+=1){var l=i[o],c=new jr(l.x,l.y,l.time),d=l.color;if(o===0)this.penColor=d,this._reset(),this._addPoint(c);else if(o!==i.length-1){var h=this._addPoint(c),g=h.curve,m=h.widths;g&&m&&t(g,m,d)}}else{this._reset();var b=i[0];n(b)}}};te.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),i=0,o=0,l=n.width/r,c=n.height/r,d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttributeNS(null,"width",n.width),d.setAttributeNS(null,"height",n.height),this._fromData(t,function(x,f,v){var I=document.createElement("path");if(!isNaN(x.control1.x)&&!isNaN(x.control1.y)&&!isNaN(x.control2.x)&&!isNaN(x.control2.y)){var N="M "+x.startPoint.x.toFixed(3)+","+x.startPoint.y.toFixed(3)+" "+("C "+x.control1.x.toFixed(3)+","+x.control1.y.toFixed(3)+" ")+(x.control2.x.toFixed(3)+","+x.control2.y.toFixed(3)+" ")+(x.endPoint.x.toFixed(3)+","+x.endPoint.y.toFixed(3));I.setAttribute("d",N),I.setAttribute("stroke-width",(f.end*2.25).toFixed(3)),I.setAttribute("stroke",v),I.setAttribute("fill","none"),I.setAttribute("stroke-linecap","round"),d.appendChild(I)}},function(x){var f=document.createElement("circle"),v=typeof e.dotSize=="function"?e.dotSize():e.dotSize;f.setAttribute("r",v),f.setAttribute("cx",x.x),f.setAttribute("cy",x.y),f.setAttribute("fill",x.color),d.appendChild(f)});var h="data:image/svg+xml;base64,",g='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+i+" "+o+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",m=d.innerHTML;if(m===void 0){var b=document.createElement("dummy"),_=d.childNodes;b.innerHTML="";for(var j=0;j<_.length;j+=1)b.appendChild(_[j].cloneNode(!0));m=b.innerHTML}var P="</svg>",D=g+m+P;return h+btoa(D)};te.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};te.prototype.toData=function(){return this._data};var E0={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(av,function(){return function(n){function r(o){if(i[o])return i[o].exports;var l=i[o]={exports:{},id:o,loaded:!1};return n[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(n,r){function i(h){var g=h.getContext("2d"),m=h.width,b=h.height,_=g.getImageData(0,0,m,b).data,j=c(!0,m,b,_),P=c(!1,m,b,_),D=d(!0,m,b,_),x=d(!1,m,b,_),f=x-D+1,v=P-j+1,I=g.getImageData(D,j,f,v);return h.width=f,h.height=v,g.clearRect(0,0,f,v),g.putImageData(I,0,0),h}function o(h,g,m,b){return{red:b[4*(m*g+h)],green:b[4*(m*g+h)+1],blue:b[4*(m*g+h)+2],alpha:b[4*(m*g+h)+3]}}function l(h,g,m,b){return o(h,g,m,b).alpha}function c(h,g,m,b){for(var _=h?1:-1,j=h?0:m-1,P=j;h?P<m:P>-1;P+=_)for(var D=0;D<g;D++)if(l(D,P,g,b))return P;return null}function d(h,g,m,b){for(var _=h?1:-1,j=h?0:g-1,P=j;h?P<g:P>-1;P+=_)for(var D=0;D<m;D++)if(l(P,D,g,b))return P;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}])})})(E0);var yN=E0.exports;const bN=gd(yN);var wN=["canvasProps","clearOnResize"],Ka=function(e){cN(n,e);var t=hN(n);function n(){var r;lN(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var d=oN(c,wN);return d},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new te(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),d=document.createElement("canvas");return d.width=c.width,d.height=c.height,d.getContext("2d").drawImage(c,0,0),bN(d)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,d,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},g=h.width,m=h.height;if(!(typeof g<"u"&&typeof m<"u")){var b=r.getCanvas(),_=Math.max((d=window.devicePixelRatio)!==null&&d!==void 0?d:1,1);typeof g>"u"&&(b.width=b.offsetWidth*_),typeof m>"u"&&(b.height=b.offsetHeight*_),b.getContext("2d").scale(_,_),r.clear()}},r.render=function(){var c=r.props.canvasProps;return bd.createElement("canvas",hd({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,d){return r.getSignaturePad().fromDataURL(c,d)},r.toDataURL=function(c,d){return r.getSignaturePad().toDataURL(c,d)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return aN(n)}(C.Component);Ka.propTypes={velocityFilterWeight:Ze.number,minWidth:Ze.number,maxWidth:Ze.number,minDistance:Ze.number,dotSize:Ze.oneOfType([Ze.number,Ze.func]),penColor:Ze.string,throttle:Ze.number,onEnd:Ze.func,onBegin:Ze.func,canvasProps:Ze.object,clearOnResize:Ze.bool};Ka.defaultProps={clearOnResize:!0};Ka.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const jN=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:i})=>{var _,j;const{tenant:o}=xe(),l=C.useRef(null),[c,d]=C.useState(""),[h,g]=C.useState(!1),m=()=>{var P;(P=l.current)==null||P.clear()},b=async()=>{var P,D;if((P=l.current)!=null&&P.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{g(!0);const x=(D=l.current)==null?void 0:D.toDataURL(),v=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":o.id},body:JSON.stringify({signatureUrl:x,recipientName:n,recipientId:c})});if(v.ok)alert("Entrega confirmada exitosamente"),i();else{const I=await v.json();alert(`Error: ${I.error||"No se pudo confirmar la entrega"}`)}}catch(x){console.error("Error confirmando entrega:",x),alert("Error al confirmar la entrega")}finally{g(!1)}};return s.jsx("div",{className:"modal-overlay",onClick:r,children:s.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Confirmar Entrega"}),s.jsx("button",{className:"btn-close",onClick:r,children:s.jsx(Yk,{size:24})})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"package-info",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tracking:"})," ",t]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Destinatario:"})," ",n]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cédula del Destinatario *"}),s.jsx("input",{type:"text",value:c,onChange:P=>d(P.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),s.jsxs("div",{className:"signature-section",children:[s.jsx("label",{children:"Firma del Destinatario *"}),s.jsx("div",{className:"signature-canvas-container",children:s.jsx(Ka,{ref:l,canvasProps:{className:"signature-canvas"}})}),s.jsxs("button",{className:"btn-clear",onClick:m,disabled:h,children:[s.jsx(Hk,{size:16}),"Limpiar"]})]})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),s.jsxs("button",{className:"btn-primary",onClick:b,disabled:h,children:[s.jsx(Tn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),s.jsx("style",{children:`
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
                        border-color: ${((_=o==null?void 0:o.branding)==null?void 0:_.primary_color)||"#3b82f6"};
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
                        background: ${((j=o==null?void 0:o.branding)==null?void 0:j.primary_color)||"#3b82f6"};
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
                `})]})})},_N=()=>{var P,D;const{id:e}=cx(),{tenant:t}=xe(),n=kt(),[r,i]=C.useState(null),[o,l]=C.useState([]),[c,d]=C.useState(!0),[h,g]=C.useState(!1);C.useEffect(()=>{t&&e&&m()},[t,e]);const m=async()=>{if(!(!t||!e))try{d(!0);const v=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(v)}catch(x){console.error("Error fetching package:",x)}finally{d(!1)}},b=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const v=await f.blob(),I=window.URL.createObjectURL(v),N=document.createElement("a");N.href=I,N.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(N),N.click(),window.URL.revokeObjectURL(I),document.body.removeChild(N)}}catch(x){console.error("Error downloading label:",x),alert("Error al descargar la etiqueta")}},_=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const v=await f.blob(),I=window.URL.createObjectURL(v),N=document.createElement("a");N.href=I,N.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(N),N.click(),window.URL.revokeObjectURL(I),document.body.removeChild(N)}}catch(x){console.error("Error downloading delivery note:",x),alert("Error al descargar la nota de entrega")}},j=x=>{const v={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[x]||{label:x,color:"#6b7280"};return s.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${v.color}20`,color:v.color},children:v.label})};return c?s.jsx("div",{className:"loading-page",children:"Cargando..."}):r?s.jsxs("div",{className:"package-detail-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[s.jsx(qa,{size:20}),"Volver"]}),s.jsxs("div",{className:"header-info",children:[s.jsx("h1",{children:r.tracking_number}),j(r.status)]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"btn-action",onClick:b,title:"Imprimir Etiqueta",children:[s.jsx(Bk,{size:20}),"Etiqueta"]}),s.jsxs("button",{className:"btn-action",onClick:_,title:"Nota de Entrega",children:[s.jsx(es,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&s.jsxs("button",{className:"btn-deliver",onClick:()=>g(!0),title:"Confirmar Entrega",children:[s.jsx(Qe,{size:20}),"Confirmar Entrega"]}),s.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[s.jsx(Ga,{size:20}),"Editar"]})]})]}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Información General"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Cliente:"}),s.jsx("span",{className:"value",children:r.client_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Courier:"}),s.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Peso:"}),s.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dimensiones:"}),s.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Valor Declarado:"}),s.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Creación:"}),s.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Entrega:"}),s.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Remitente"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.sender_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.sender_phone})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Destinatario"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.recipient_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.recipient_phone})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dirección:"}),s.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&s.jsxs("div",{className:"detail-card full-width",children:[s.jsx("h2",{children:"Notas"}),s.jsx("p",{children:r.notes})]})]}),h&&s.jsx(jN,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>g(!1),onSuccess:()=>{g(!1),m()}}),s.jsx("style",{children:`
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
            `})]}):s.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},kN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(!0),[o,l]=C.useState("");C.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{i(!0);const d="http://localhost:3001",h=new URLSearchParams({...o&&{search:o}}),m=await(await fetch(`${d}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(m.clients||[])}catch(d){console.error("Error:",d)}finally{i(!1)}};return s.jsxs("div",{className:"clients-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Clientes"}),s.jsxs("p",{children:[t.length," clientes registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Mi,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:o,onChange:d=>l(d.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(br,{size:48}),s.jsx("h3",{children:"No hay clientes"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Paquetes"})]})}),s.jsx("tbody",{children:t.map(d=>s.jsxs("tr",{children:[s.jsx("td",{children:d.name}),s.jsx("td",{children:d.company_name||"-"}),s.jsx("td",{children:d.email}),s.jsx("td",{children:d.phone}),s.jsx("td",{children:d.total_packages})]},d.id))})]})}),s.jsx("style",{children:`
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
            `})]})},NN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(!0),[o,l]=C.useState("");C.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{i(!0);const h="http://localhost:3001",g=new URLSearchParams({...o&&{search:o}}),b=await(await fetch(`${h}/api/couriers?${g}`,{headers:{"X-Tenant-ID":e.id}})).json();n(b.couriers||[])}catch(h){console.error("Error:",h)}finally{i(!1)}},d=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return s.jsxs("div",{className:"couriers-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Couriers"}),s.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Mi,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar courier...",value:o,onChange:h=>l(h.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(qn,{size:48}),s.jsx("h3",{children:"No hay couriers"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Placa"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Entregas"}),s.jsx("th",{children:"Rating"})]})}),s.jsx("tbody",{children:t.map(h=>s.jsxs("tr",{children:[s.jsx("td",{children:h.name}),s.jsx("td",{children:h.phone}),s.jsx("td",{children:d(h.vehicle_type)}),s.jsx("td",{children:h.vehicle_plate||"-"}),s.jsx("td",{children:h.zone||"-"}),s.jsx("td",{children:h.completed_deliveries}),s.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),s.jsx("style",{children:`
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
            `})]})},EN=()=>{var b;const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(!0),[o,l]=C.useState(!1),[c,d]=C.useState(null);C.useEffect(()=>{e&&h()},[e]);const h=async()=>{if(e)try{i(!0);const P=await(await fetch("http://localhost:3001/api/rates",{headers:{"X-Tenant-ID":e.id}})).json();n(P.rates||[])}catch(_){console.error("Error:",_)}finally{i(!1)}},g=async _=>{if(confirm("¿Eliminar esta tarifa?"))try{(await fetch(`http://localhost:3001/api/rates/${_}`,{method:"DELETE",headers:{"X-Tenant-ID":e.id}})).ok&&h()}catch(j){console.error("Error:",j)}},m=_=>({standard:"Estándar",express:"Express",same_day:"Mismo Día",scheduled:"Programado"})[_]||_;return s.jsxs("div",{className:"rates-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Tarifas"}),s.jsxs("p",{children:[t.length," tarifas configuradas"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[s.jsx(us,{size:20}),"Nueva Tarifa"]})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(yr,{size:48}),s.jsx("h3",{children:"No hay tarifas configuradas"}),s.jsx("p",{children:"Crea tu primera tarifa para comenzar"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Peso (kg)"}),s.jsx("th",{children:"Precio Base"}),s.jsx("th",{children:"Precio/kg"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:t.map(_=>s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsx("strong",{children:_.name}),_.description&&s.jsx("div",{className:"description",children:_.description})]}),s.jsx("td",{children:_.zone||"-"}),s.jsxs("td",{children:[_.min_weight," - ",_.max_weight||"∞"]}),s.jsxs("td",{children:["₡",_.base_price.toLocaleString()]}),s.jsxs("td",{children:["₡",_.price_per_kg.toLocaleString()]}),s.jsx("td",{children:m(_.service_type)}),s.jsx("td",{children:s.jsx("span",{className:`status ${_.active?"active":"inactive"}`,children:_.active?"Activa":"Inactiva"})}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>{d(_),l(!0)},title:"Editar",children:s.jsx(Ga,{size:16})}),s.jsx("button",{className:"btn-icon danger",onClick:()=>g(_.id),title:"Eliminar",children:s.jsx(w0,{size:16})})]})})]},_.id))})]})}),s.jsx("style",{children:`
                .rates-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .btn-primary { display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: ${((b=e==null?void 0:e.branding)==null?void 0:b.primary_color)||"#3b82f6"}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
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
            `})]})},SN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(!0),[o,l]=C.useState(""),[c,d]=C.useState("");C.useEffect(()=>{e&&h()},[e,o,c]);const h=async()=>{if(e)try{i(!0);let P="http://localhost:3001/api/incidents?";o&&(P+=`status=${o}&`),c&&(P+=`priority=${c}`);const x=await(await fetch(P,{headers:{"X-Tenant-ID":e.id}})).json();n(x.incidents||[])}catch(j){console.error("Error:",j)}finally{i(!1)}},g=j=>({delay:"Retraso",damage:"Daño",loss:"Pérdida",client_absent:"Cliente Ausente",address_error:"Error de Dirección",other:"Otro"})[j]||j,m=j=>{switch(j){case"open":return s.jsx(Hn,{size:16});case"investigating":return s.jsx(vr,{size:16});case"resolved":return s.jsx(Qe,{size:16});case"closed":return s.jsx(wr,{size:16});default:return null}},b=j=>({open:"Abierta",investigating:"Investigando",resolved:"Resuelta",closed:"Cerrada"})[j]||j,_=j=>({low:"#10b981",medium:"#f59e0b",high:"#ef4444",critical:"#991b1b"})[j]||"#6b7280";return s.jsxs("div",{className:"incidents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Incidencias"}),s.jsxs("p",{children:[t.length," incidencias registradas"]})]})}),s.jsxs("div",{className:"filters",children:[s.jsxs("select",{value:o,onChange:j=>l(j.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"open",children:"Abierta"}),s.jsx("option",{value:"investigating",children:"Investigando"}),s.jsx("option",{value:"resolved",children:"Resuelta"}),s.jsx("option",{value:"closed",children:"Cerrada"})]}),s.jsxs("select",{value:c,onChange:j=>d(j.target.value),children:[s.jsx("option",{value:"",children:"Todas las prioridades"}),s.jsx("option",{value:"low",children:"Baja"}),s.jsx("option",{value:"medium",children:"Media"}),s.jsx("option",{value:"high",children:"Alta"}),s.jsx("option",{value:"critical",children:"Crítica"})]})]}),s.jsx("div",{className:"incidents-list",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Hn,{size:48}),s.jsx("h3",{children:"No hay incidencias"}),s.jsx("p",{children:"No se encontraron incidencias con los filtros seleccionados"})]}):t.map(j=>s.jsxs("div",{className:"incident-card",children:[s.jsxs("div",{className:"incident-header",children:[s.jsxs("div",{className:"incident-title",children:[s.jsx("span",{className:"incident-icon",style:{color:_(j.priority)},children:m(j.status)}),s.jsxs("div",{children:[s.jsx("h3",{children:g(j.type)}),s.jsxs("p",{className:"tracking",children:["Paquete: ",j.tracking_number]})]})]}),s.jsxs("div",{className:"incident-badges",children:[s.jsx("span",{className:`status-badge status-${j.status}`,children:b(j.status)}),s.jsx("span",{className:"priority-badge",style:{backgroundColor:`${_(j.priority)}20`,color:_(j.priority)},children:j.priority.toUpperCase()})]})]}),s.jsxs("div",{className:"incident-body",children:[s.jsx("p",{className:"description",children:j.description}),j.resolution&&s.jsxs("div",{className:"resolution",children:[s.jsx("strong",{children:"Resolución:"})," ",j.resolution]})]}),s.jsxs("div",{className:"incident-footer",children:[s.jsx("span",{className:"date",children:new Date(j.created_at).toLocaleDateString("es-CR")}),s.jsx("span",{className:"client",children:j.client_name})]})]},j.id))}),s.jsx("style",{children:`
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
            `})]})},TN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(null),[o,l]=C.useState(!0);C.useEffect(()=>{e&&(c(),d())},[e]);const c=async()=>{if(e)try{l(!0);const m=await(await fetch("http://localhost:3001/api/fuel",{headers:{"X-Tenant-ID":e.id}})).json();n(m.records||[])}catch(h){console.error("Error:",h)}finally{l(!1)}},d=async()=>{if(e)try{const m=await(await fetch("http://localhost:3001/api/fuel/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(m)}catch(h){console.error("Error:",h)}};return s.jsxs("div",{className:"fuel-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Control de Combustible"}),s.jsxs("p",{children:[t.length," registros de combustible"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(yr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Costo Total"}),s.jsxs("p",{className:"stat-value",children:["₡",r.totalCost.toLocaleString()]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Dk,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Litros Totales"}),s.jsxs("p",{className:"stat-value",children:[r.totalLiters.toFixed(2)," L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Rendimiento Promedio"}),s.jsxs("p",{className:"stat-value",children:[r.averageEfficiency.toFixed(2)," km/L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Bf,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Registros"}),s.jsx("p",{className:"stat-value",children:r.recordCount})]})]})]}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Registros de Combustible"}),o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Bf,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron registros de combustible"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Courier"}),s.jsx("th",{children:"Litros"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Precio/L"}),s.jsx("th",{children:"Odómetro"}),s.jsx("th",{children:"Distancia"}),s.jsx("th",{children:"Rendimiento"}),s.jsx("th",{children:"Estación"})]})}),s.jsx("tbody",{children:t.map(h=>{var g,m,b;return s.jsxs("tr",{children:[s.jsx("td",{children:new Date(h.created_at).toLocaleDateString("es-CR")}),s.jsx("td",{children:h.courier_name||"-"}),s.jsxs("td",{children:[h.liters.toFixed(2)," L"]}),s.jsxs("td",{children:["₡",h.cost.toLocaleString()]}),s.jsxs("td",{children:["₡",((g=h.price_per_liter)==null?void 0:g.toFixed(2))||"-"]}),s.jsxs("td",{children:[((m=h.odometer_reading)==null?void 0:m.toLocaleString())||"-"," km"]}),s.jsxs("td",{children:[((b=h.distance_traveled)==null?void 0:b.toLocaleString())||"-"," km"]}),s.jsx("td",{children:h.efficiency?s.jsxs("span",{className:"efficiency",children:[h.efficiency.toFixed(2)," km/L"]}):"-"}),s.jsx("td",{children:h.station||"-"})]},h.id)})})]})})]}),s.jsx("style",{children:`
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
            `})]})},CN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(null),[o,l]=C.useState(!0),[c,d]=C.useState("");C.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let P="http://localhost:3001/api/vehicles";c&&(P+=`?status=${c}`);const x=await(await fetch(P,{headers:{"X-Tenant-ID":e.id}})).json();n(x.vehicles||[])}catch(j){console.error("Error:",j)}finally{l(!1)}},g=async()=>{if(e)try{const D=await(await fetch("http://localhost:3001/api/vehicles/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(D)}catch(j){console.error("Error:",j)}},m=j=>{switch(j){case"active":return s.jsx(Qe,{size:20});case"maintenance":return s.jsx(Vn,{size:20});case"inactive":return s.jsx(wr,{size:20});default:return null}},b=j=>{switch(j){case"active":return"#10b981";case"maintenance":return"#f59e0b";case"inactive":return"#ef4444";default:return"#6b7280"}},_=j=>({active:"Activo",maintenance:"Mantenimiento",inactive:"Inactivo"})[j]||j;return s.jsxs("div",{className:"vehicles-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Vehículos"}),s.jsxs("p",{children:[t.length," vehículos registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Vn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Mantenimiento"}),s.jsx("p",{className:"stat-value",children:r.maintenance})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(wr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Inactivos"}),s.jsx("p",{className:"stat-value",children:r.inactive})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:r.total})]})]})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:c,onChange:j=>d(j.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"maintenance",children:"En Mantenimiento"}),s.jsx("option",{value:"inactive",children:"Inactivos"})]})}),s.jsx("div",{className:"vehicles-grid",children:o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(qn,{size:48}),s.jsx("h3",{children:"No hay vehículos"}),s.jsx("p",{children:"No se encontraron vehículos con los filtros seleccionados"})]}):t.map(j=>s.jsxs("div",{className:"vehicle-card",children:[s.jsxs("div",{className:"vehicle-header",children:[s.jsx("div",{className:"vehicle-icon",style:{color:b(j.status)},children:m(j.status)}),s.jsx("div",{className:"vehicle-plate",children:j.plate})]}),s.jsxs("div",{className:"vehicle-body",children:[s.jsxs("h3",{children:[j.brand," ",j.model]}),s.jsxs("div",{className:"vehicle-details",children:[j.year&&s.jsxs("span",{children:["Año: ",j.year]}),j.type&&s.jsxs("span",{children:["Tipo: ",j.type]})]}),j.courier_name&&s.jsxs("div",{className:"vehicle-assigned",children:["Asignado a: ",j.courier_name]})]}),s.jsx("div",{className:"vehicle-footer",children:s.jsx("span",{className:"status-badge",style:{backgroundColor:`${b(j.status)}20`,color:b(j.status)},children:_(j.status)})})]},j.id))}),s.jsx("style",{children:`
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
            `})]})},IN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState([]),[o,l]=C.useState(null),[c,d]=C.useState(!0),[h,g]=C.useState("");C.useEffect(()=>{e&&(m(),b(),_())},[e,h]);const m=async()=>{if(e)try{d(!0);let v="http://localhost:3001/api/maintenance";h&&(v+=`?status=${h}`);const N=await(await fetch(v,{headers:{"X-Tenant-ID":e.id}})).json();n(N.records||[])}catch(f){console.error("Error:",f)}finally{d(!1)}},b=async()=>{if(e)try{const I=await(await fetch("http://localhost:3001/api/maintenance/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(I.records||[])}catch(f){console.error("Error:",f)}},_=async()=>{if(e)try{const I=await(await fetch("http://localhost:3001/api/maintenance/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(I)}catch(f){console.error("Error:",f)}},j=f=>({preventive:"Preventivo",corrective:"Correctivo",inspection:"Inspección"})[f]||f,P=f=>({scheduled:"Programado",in_progress:"En Progreso",completed:"Completado"})[f]||f,D=f=>{switch(f){case"scheduled":return s.jsx(_a,{size:16});case"in_progress":return s.jsx(vr,{size:16});case"completed":return s.jsx(Qe,{size:16});default:return null}},x=f=>{const v=new Date,N=new Date(f).getTime()-v.getTime();return Math.ceil(N/(1e3*60*60*24))};return s.jsxs("div",{className:"maintenance-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Mantenimiento de Vehículos"}),s.jsxs("p",{children:[t.length," registros de mantenimiento"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(_a,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Programados"}),s.jsx("p",{className:"stat-value",children:o.scheduled})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(vr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Progreso"}),s.jsx("p",{className:"stat-value",children:o.inProgress})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Completados"}),s.jsx("p",{className:"stat-value",children:o.completed})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(Hn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Próximos 30 días"}),s.jsx("p",{className:"stat-value",children:o.upcoming})]})]})]}),r.length>0&&s.jsxs("div",{className:"upcoming-section",children:[s.jsx("h2",{children:"⚠️ Próximos Servicios (30 días)"}),s.jsx("div",{className:"upcoming-list",children:r.map(f=>{const v=x(f.next_service_date);return s.jsxs("div",{className:`upcoming-card ${v<=7?"urgent":""}`,children:[s.jsxs("div",{className:"upcoming-header",children:[s.jsxs("span",{className:"vehicle-info",children:[f.vehicle_plate," - ",f.vehicle_brand," ",f.vehicle_model]}),s.jsx("span",{className:`days-badge ${v<=7?"urgent":""}`,children:v<=0?"Vencido":`${v} días`})]}),s.jsxs("div",{className:"upcoming-body",children:[s.jsx("p",{children:f.description}),s.jsx("span",{className:"type-badge",children:j(f.type)})]})]},f.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:f=>g(f.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"scheduled",children:"Programados"}),s.jsx("option",{value:"in_progress",children:"En Progreso"}),s.jsx("option",{value:"completed",children:"Completados"})]})}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Historial de Mantenimientos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Xk,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron mantenimientos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Proveedor"}),s.jsx("th",{children:"Próximo Servicio"}),s.jsx("th",{children:"Estado"})]})}),s.jsx("tbody",{children:t.map(f=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(f.created_at).toLocaleDateString("es-CR")}),s.jsxs("td",{children:[s.jsx("strong",{children:f.vehicle_plate}),s.jsx("br",{}),s.jsxs("small",{children:[f.vehicle_brand," ",f.vehicle_model]})]}),s.jsx("td",{children:j(f.type)}),s.jsx("td",{children:f.description}),s.jsx("td",{children:f.cost?`₡${f.cost.toLocaleString()}`:"-"}),s.jsx("td",{children:f.provider||"-"}),s.jsx("td",{children:f.next_service_date?new Date(f.next_service_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${f.status}`,children:[D(f.status),P(f.status)]})})]},f.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},PN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState([]),[o,l]=C.useState(null),[c,d]=C.useState(!0),[h,g]=C.useState("");C.useEffect(()=>{e&&(m(),b(),_())},[e,h]);const m=async()=>{if(e)try{d(!0);let f="http://localhost:3001/api/documents";h&&(f+=`?status=${h}`);const I=await(await fetch(f,{headers:{"X-Tenant-ID":e.id}})).json();n(I.documents||[])}catch(x){console.error("Error:",x)}finally{d(!1)}},b=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/documents/expiring?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(v.documents||[])}catch(x){console.error("Error:",x)}},_=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/documents/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(v)}catch(x){console.error("Error:",x)}},j=x=>{switch(x){case"valid":return s.jsx(Qe,{size:16});case"expiring_soon":return s.jsx(Hn,{size:16});case"expired":return s.jsx(wr,{size:16});default:return null}},P=x=>({valid:"Válido",expiring_soon:"Por Vencer",expired:"Vencido"})[x]||x,D=x=>{const f=new Date,I=new Date(x).getTime()-f.getTime();return Math.ceil(I/(1e3*60*60*24))};return s.jsxs("div",{className:"documents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Documentos"}),s.jsxs("p",{children:[t.length," documentos registrados"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Válidos"}),s.jsx("p",{className:"stat-value",children:o.valid})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Hn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Por Vencer"}),s.jsx("p",{className:"stat-value",children:o.expiringSoon})]})]}),s.jsxs("div",{className:"stat-card alert-danger",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(wr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Vencidos"}),s.jsx("p",{className:"stat-value",children:o.expired})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(es,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:o.total})]})]})]}),r.length>0&&s.jsxs("div",{className:"expiring-section",children:[s.jsx("h2",{children:"⚠️ Documentos por Vencer (30 días)"}),s.jsx("div",{className:"expiring-list",children:r.map(x=>{const f=D(x.expiration_date),v=f<0;return s.jsxs("div",{className:`expiring-card ${v?"expired":""}`,children:[s.jsxs("div",{className:"expiring-header",children:[s.jsxs("div",{className:"doc-info",children:[s.jsx("strong",{children:x.document_type}),s.jsxs("span",{className:"entity-info",children:[x.entity_type==="courier"?"👤":"🚗"," ",x.entity_identifier]})]}),s.jsx("span",{className:`days-badge ${v?"expired":f<=7?"urgent":""}`,children:v?"VENCIDO":`${f} días`})]}),s.jsxs("div",{className:"expiring-body",children:[x.document_number&&s.jsxs("p",{children:["Número: ",x.document_number]}),s.jsxs("p",{children:["Vence: ",new Date(x.expiration_date).toLocaleDateString("es-CR")]})]})]},x.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"valid",children:"Válidos"}),s.jsx("option",{value:"expiring_soon",children:"Por Vencer"}),s.jsx("option",{value:"expired",children:"Vencidos"})]})}),s.jsxs("div",{className:"documents-list",children:[s.jsx("h2",{children:"Todos los Documentos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(es,{size:48}),s.jsx("h3",{children:"No hay documentos"}),s.jsx("p",{children:"No se encontraron documentos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Número"}),s.jsx("th",{children:"Emisión"}),s.jsx("th",{children:"Vencimiento"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Notas"})]})}),s.jsx("tbody",{children:t.map(x=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:x.document_type})}),s.jsxs("td",{children:[s.jsx("span",{className:"entity-badge",children:x.entity_type==="courier"?"👤 Courier":"🚗 Vehículo"}),s.jsx("br",{}),s.jsx("small",{children:x.entity_identifier})]}),s.jsx("td",{children:x.document_number||"-"}),s.jsx("td",{children:x.issue_date?new Date(x.issue_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:x.expiration_date?s.jsx("span",{className:x.status==="expired"?"expired-date":"",children:new Date(x.expiration_date).toLocaleDateString("es-CR")}):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${x.status}`,children:[j(x.status),P(x.status)]})}),s.jsx("td",{children:x.notes||"-"})]},x.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},RN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(null),[o,l]=C.useState([]),[c,d]=C.useState(!0),[h,g]=C.useState(""),[m,b]=C.useState(""),[_,j]=C.useState(null);C.useEffect(()=>{e&&(P(),D(),x())},[e,h]);const P=async()=>{if(e)try{d(!0);let O="http://localhost:3001/api/warehouse/locations";h&&(O+=`?zone=${h}`);const w=await(await fetch(O,{headers:{"X-Tenant-ID":e.id}})).json();n(w.locations||[])}catch(N){console.error("Error:",N)}finally{d(!1)}},D=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/warehouse/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(k)}catch(N){console.error("Error:",N)}},x=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/warehouse/zones",{headers:{"X-Tenant-ID":e.id}})).json();l(k.zones||[])}catch(N){console.error("Error:",N)}},f=async()=>{if(!(!e||!m.trim()))try{const O=await fetch(`http://localhost:3001/api/warehouse/search/${m}`,{headers:{"X-Tenant-ID":e.id}});if(O.ok){const k=await O.json();j(k)}else j({error:"Paquete no encontrado en almacén"})}catch(N){console.error("Error:",N),j({error:"Error buscando paquete"})}},v=N=>{switch(N){case"active":return"#10b981";case"full":return"#ef4444";case"inactive":return"#6b7280";default:return"#6b7280"}},I=N=>N>=90?"#ef4444":N>=70?"#f59e0b":"#10b981";return s.jsxs("div",{className:"warehouse-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Almacén"}),s.jsxs("p",{children:[t.length," ubicaciones registradas"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Mk,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Ubicaciones Activas"}),s.jsxs("p",{className:"stat-value",children:[r.activeLocations," / ",r.totalLocations]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Je,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Paquetes en Almacén"}),s.jsx("p",{className:"stat-value",children:r.totalPackages})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(rc,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Capacidad Total"}),s.jsx("p",{className:"stat-value",children:r.totalCapacity})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:`${I(r.utilizationRate)}20`,color:I(r.utilizationRate)},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Utilización"}),s.jsxs("p",{className:"stat-value",children:[r.utilizationRate,"%"]})]})]})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("h2",{children:"Búsqueda Rápida"}),s.jsxs("div",{className:"search-box",children:[s.jsx("input",{type:"text",placeholder:"Buscar por tracking number...",value:m,onChange:N=>b(N.target.value),onKeyPress:N=>N.key==="Enter"&&f()}),s.jsxs("button",{onClick:f,children:[s.jsx(Mi,{size:20}),"Buscar"]})]}),_&&s.jsx("div",{className:`search-result ${_.error?"error":"success"}`,children:_.error?s.jsx("p",{children:_.error}):s.jsxs("div",{children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Paquete encontrado:"})," ",_.tracking_number]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Ubicación:"})," ",_.location_code," - ",_.location_name]})]})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:N=>g(N.target.value),children:[s.jsx("option",{value:"",children:"Todas las zonas"}),o.map(N=>s.jsx("option",{value:N,children:N},N))]})}),s.jsxs("div",{className:"locations-section",children:[s.jsx("h2",{children:"Mapa de Ubicaciones"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(rc,{size:48}),s.jsx("h3",{children:"No hay ubicaciones"}),s.jsx("p",{children:"No se encontraron ubicaciones con los filtros seleccionados"})]}):s.jsx("div",{className:"locations-grid",children:t.map(N=>{const O=N.capacity?N.current_packages/N.capacity*100:0;return s.jsxs("div",{className:"location-card",children:[s.jsxs("div",{className:"location-header",children:[s.jsxs("div",{className:"location-code",style:{color:v(N.status)},children:[s.jsx(rc,{size:20}),N.code]}),s.jsx("span",{className:`status-badge status-${N.status}`,children:N.status==="active"?"Activo":N.status==="full"?"Lleno":"Inactivo"})]}),s.jsxs("div",{className:"location-body",children:[s.jsx("p",{className:"location-name",children:N.name||"-"}),N.zone&&s.jsxs("p",{className:"location-zone",children:["Zona: ",N.zone]}),s.jsxs("div",{className:"capacity-info",children:[s.jsx("div",{className:"capacity-bar",children:s.jsx("div",{className:"capacity-fill",style:{width:`${O}%`,backgroundColor:I(O)}})}),s.jsxs("p",{className:"capacity-text",children:[N.current_packages," / ",N.capacity||0," paquetes",s.jsxs("span",{className:"utilization",children:["(",O.toFixed(0),"%)"]})]})]})]})]},N.id)})})]}),s.jsx("style",{children:`
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
            `})]})},AN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState([]),[o,l]=C.useState(null),[c,d]=C.useState(!0),[h,g]=C.useState(""),[m,b]=C.useState(!1),[_,j]=C.useState(null);C.useEffect(()=>{e&&(P(),D(),x())},[e]);const P=async()=>{if(e)try{d(!0);const k=await(await fetch("http://localhost:3001/api/arrivals",{headers:{"X-Tenant-ID":e.id}})).json();n(k.arrivals||[])}catch(N){console.error("Error:",N)}finally{d(!1)}},D=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/arrivals/today",{headers:{"X-Tenant-ID":e.id}})).json();i(k.arrivals||[])}catch(N){console.error("Error:",N)}},x=async()=>{if(e)try{const N="http://localhost:3001",O=new Date().toISOString().split("T")[0],w=await(await fetch(`${N}/api/arrivals/stats?date=${O}`,{headers:{"X-Tenant-ID":e.id}})).json();l(w)}catch(N){console.error("Error:",N)}},f=async()=>{if(!(!e||!h.trim()))try{b(!0),j(null);const O=await fetch("http://localhost:3001/api/arrivals",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({trackingNumber:h,condition:"good"})});if(O.ok)j({type:"success",text:`Paquete ${h} registrado exitosamente`}),g(""),P(),D(),x();else{const k=await O.json();j({type:"error",text:k.error||"Error registrando llegada"})}}catch(N){console.error("Error:",N),j({type:"error",text:"Error registrando llegada"})}finally{b(!1)}},v=N=>{switch(N){case"good":return s.jsx(Qe,{size:16});case"damaged":return s.jsx(Hn,{size:16});case"incomplete":return s.jsx(wr,{size:16});default:return null}},I=N=>({good:"Bueno",damaged:"Dañado",incomplete:"Incompleto"})[N]||N;return s.jsxs("div",{className:"arrivals-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Registro de Llegadas"}),s.jsxs("p",{children:[r.length," llegadas hoy"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Je,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Hoy"}),s.jsx("p",{className:"stat-value",children:o.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Buen Estado"}),s.jsx("p",{className:"stat-value",children:o.good})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Hn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Dañados"}),s.jsx("p",{className:"stat-value",children:o.damaged})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(wr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Incompletos"}),s.jsx("p",{className:"stat-value",children:o.incomplete})]})]})]}),s.jsxs("div",{className:"register-section",children:[s.jsx("h2",{children:"Registrar Llegada"}),s.jsxs("div",{className:"register-box",children:[s.jsx("div",{className:"scan-icon",children:s.jsx(Wk,{size:32})}),s.jsx("input",{type:"text",placeholder:"Escanear o ingresar tracking number...",value:h,onChange:N=>g(N.target.value),onKeyPress:N=>N.key==="Enter"&&f(),disabled:m,autoFocus:!0}),s.jsx("button",{onClick:f,disabled:m||!h.trim(),children:m?"Registrando...":"Registrar"})]}),_&&s.jsx("div",{className:`message ${_.type}`,children:_.text})]}),s.jsxs("div",{className:"today-section",children:[s.jsxs("h2",{children:["Llegadas de Hoy (",r.length,")"]}),r.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Je,{size:48}),s.jsx("p",{children:"No hay llegadas registradas hoy"})]}):s.jsx("div",{className:"arrivals-grid",children:r.map(N=>s.jsxs("div",{className:"arrival-card",children:[s.jsxs("div",{className:"arrival-header",children:[s.jsx("span",{className:"tracking",children:N.tracking_number}),s.jsxs("span",{className:`condition-badge condition-${N.condition_status}`,children:[v(N.condition_status),I(N.condition_status)]})]}),s.jsxs("div",{className:"arrival-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"De:"})," ",N.sender_name||"-"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Para:"})," ",N.receiver_name||"-"]}),s.jsx("p",{className:"time",children:new Date(N.arrived_at).toLocaleTimeString("es-CR")})]})]},N.id))})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("h2",{children:"Historial de Llegadas"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Je,{size:48}),s.jsx("p",{children:"No hay llegadas registradas"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha/Hora"}),s.jsx("th",{children:"Tracking"}),s.jsx("th",{children:"Remitente"}),s.jsx("th",{children:"Destinatario"}),s.jsx("th",{children:"Condición"}),s.jsx("th",{children:"Notas"})]})}),s.jsx("tbody",{children:t.map(N=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(N.arrived_at).toLocaleString("es-CR")}),s.jsx("td",{children:s.jsx("strong",{children:N.tracking_number})}),s.jsx("td",{children:N.sender_name||"-"}),s.jsx("td",{children:N.receiver_name||"-"}),s.jsx("td",{children:s.jsxs("span",{className:`condition-badge condition-${N.condition_status}`,children:[v(N.condition_status),I(N.condition_status)]})}),s.jsx("td",{children:N.notes||"-"})]},N.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},DN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(null),[o,l]=C.useState(!0),[c,d]=C.useState("");C.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let j="http://localhost:3001/api/manifests";c&&(j+=`?status=${c}`);const D=await(await fetch(j,{headers:{"X-Tenant-ID":e.id}})).json();n(D.manifests||[])}catch(_){console.error("Error:",_)}finally{l(!1)}},g=async()=>{if(e)try{const P=await(await fetch("http://localhost:3001/api/manifests/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(P)}catch(_){console.error("Error:",_)}},m=_=>{switch(_){case"draft":return s.jsx(vr,{size:16});case"active":return s.jsx(qn,{size:16});case"completed":return s.jsx(Qe,{size:16});default:return null}},b=_=>({draft:"Borrador",active:"Activo",completed:"Completado"})[_]||_;return s.jsxs("div",{className:"manifests-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Manifiestos de Carga"}),s.jsxs("p",{children:[t.length," manifiestos registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(es,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:r.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(vr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Borradores"}),s.jsx("p",{className:"stat-value",children:r.draft})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Completados"}),s.jsx("p",{className:"stat-value",children:r.completed})]})]})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:c,onChange:_=>d(_.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"draft",children:"Borradores"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"completed",children:"Completados"})]})}),s.jsxs("div",{className:"manifests-section",children:[s.jsx("h2",{children:"Manifiestos"}),o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(es,{size:48}),s.jsx("h3",{children:"No hay manifiestos"}),s.jsx("p",{children:"No se encontraron manifiestos con los filtros seleccionados"})]}):s.jsx("div",{className:"manifests-grid",children:t.map(_=>s.jsxs("div",{className:"manifest-card",children:[s.jsxs("div",{className:"manifest-header",children:[s.jsxs("div",{className:"manifest-number",children:[s.jsx(es,{size:20}),_.manifest_number]}),s.jsxs("span",{className:`status-badge status-${_.status}`,children:[m(_.status),b(_.status)]})]}),s.jsxs("div",{className:"manifest-body",children:[_.route&&s.jsxs("p",{className:"route",children:[s.jsx("strong",{children:"Ruta:"})," ",_.route]}),_.courier_name&&s.jsxs("p",{children:[s.jsx("strong",{children:"Courier:"})," ",_.courier_name]}),_.date&&s.jsxs("p",{children:[s.jsx("strong",{children:"Fecha:"})," ",new Date(_.date).toLocaleDateString("es-CR")]}),s.jsxs("div",{className:"packages-count",children:[s.jsx("strong",{children:_.total_packages})," paquetes"]})]})]},_.id))})]}),s.jsx("style",{children:`
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
            `})]})},zN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(null),[o,l]=C.useState(!0),[c,d]=C.useState("");C.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let b="http://localhost:3001/api/shippers";c&&(b+=`?search=${c}`);const j=await(await fetch(b,{headers:{"X-Tenant-ID":e.id}})).json();n(j.shippers||[])}catch(m){console.error("Error:",m)}finally{l(!1)}},g=async()=>{if(e)try{const _=await(await fetch("http://localhost:3001/api/shippers/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(_)}catch(m){console.error("Error:",m)}};return s.jsxs("div",{className:"shippers-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Remitentes Frecuentes"}),s.jsxs("p",{children:[t.length," remitentes registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(br,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Remitentes"}),s.jsx("p",{className:"stat-value",children:r.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Je,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Envíos"}),s.jsx("p",{className:"stat-value",children:r.totalShipments})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Promedio por Remitente"}),s.jsx("p",{className:"stat-value",children:r.total>0?(r.totalShipments/r.total).toFixed(1):0})]})]})]}),r&&r.topShippers.length>0&&s.jsxs("div",{className:"top-section",children:[s.jsx("h2",{children:"🏆 Top 5 Remitentes"}),s.jsx("div",{className:"top-grid",children:r.topShippers.map((m,b)=>s.jsxs("div",{className:"top-card",children:[s.jsxs("div",{className:"rank",children:["#",b+1]}),s.jsxs("div",{className:"top-info",children:[s.jsx("h3",{children:m.name}),s.jsxs("p",{className:"shipments",children:[m.total_shipments," envíos"]})]})]},m.id))})]}),s.jsx("div",{className:"search-section",children:s.jsx("input",{type:"text",placeholder:"Buscar por nombre, teléfono o email...",value:c,onChange:m=>d(m.target.value)})}),s.jsxs("div",{className:"shippers-section",children:[s.jsx("h2",{children:"Todos los Remitentes"}),o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(br,{size:48}),s.jsx("h3",{children:"No hay remitentes"}),s.jsx("p",{children:"No se encontraron remitentes con los criterios de búsqueda"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Ciudad"}),s.jsx("th",{children:"Dirección"}),s.jsx("th",{children:"Envíos"})]})}),s.jsx("tbody",{children:t.map(m=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:m.name})}),s.jsx("td",{children:m.phone||"-"}),s.jsx("td",{children:m.email||"-"}),s.jsx("td",{children:m.city||"-"}),s.jsx("td",{children:m.address||"-"}),s.jsx("td",{children:s.jsx("span",{className:"shipments-badge",children:m.total_shipments})})]},m.id))})]})})]}),s.jsx("style",{children:`
                .shippers-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .top-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .top-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                .top-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 12px; }
                .top-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 16px; color: white; display: flex; align-items: center; gap: 16px; }
                .rank { font-size: 32px; font-weight: 700; opacity: 0.8; }
                .top-info h3 { margin: 0 0 4px 0; font-size: 16px; }
                .shipments { margin: 0; opacity: 0.9; font-size: 14px; }
                
                .search-section { margin-bottom: 24px; }
                .search-section input { width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
                
                .shippers-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .shippers-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                
                .shipments-badge { display: inline-block; padding: 4px 12px; background: #dbeafe; color: #1e40af; border-radius: 12px; font-weight: 600; font-size: 13px; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},LN=()=>{const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState([]),[o,l]=C.useState(null),[c,d]=C.useState(!0),[h,g]=C.useState("");C.useEffect(()=>{e&&(m(),b(),_())},[e,h]);const m=async()=>{if(e)try{d(!0);let f="http://localhost:3001/api/expenses";h&&(f+=`?status=${h}`);const I=await(await fetch(f,{headers:{"X-Tenant-ID":e.id}})).json();n(I.expenses||[])}catch(x){console.error("Error:",x)}finally{d(!1)}},b=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/expenses/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(v.expenses||[])}catch(x){console.error("Error:",x)}},_=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/expenses/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(v)}catch(x){console.error("Error:",x)}},j=x=>({daily:"Diario",weekly:"Semanal",monthly:"Mensual",yearly:"Anual"})[x]||x,P=x=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(x),D=x=>{const f=new Date,I=new Date(x).getTime()-f.getTime();return Math.ceil(I/(1e3*60*60*24))};return s.jsxs("div",{className:"expenses-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gastos Recurrentes"}),s.jsxs("p",{children:[t.length," gastos registrados"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(yr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Gastos"}),s.jsx("p",{className:"stat-value",children:o.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(_a,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:o.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Mensual"}),s.jsx("p",{className:"stat-value",children:P(o.totalMonthly)})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#e0e7ff",color:"#4f46e5"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Anual"}),s.jsx("p",{className:"stat-value",children:P(o.totalYearly)})]})]})]}),r.length>0&&s.jsxs("div",{className:"upcoming-section",children:[s.jsxs("h2",{children:[s.jsx(Vn,{size:20})," Próximos Vencimientos (30 días)"]}),s.jsx("div",{className:"upcoming-grid",children:r.map(x=>{const f=D(x.next_due_date),v=f<=7;return s.jsxs("div",{className:`upcoming-card ${v?"urgent":""}`,children:[s.jsxs("div",{className:"upcoming-header",children:[s.jsx("strong",{children:x.name}),s.jsx("span",{className:"amount",children:P(x.amount)})]}),s.jsxs("div",{className:"upcoming-body",children:[s.jsxs("p",{className:"due-date",children:["Vence: ",new Date(x.next_due_date).toLocaleDateString("es-CR")]}),s.jsx("p",{className:"days-left",children:f>0?`${f} días`:"Vencido"})]})]},x.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"paused",children:"Pausados"}),s.jsx("option",{value:"cancelled",children:"Cancelados"})]})}),s.jsxs("div",{className:"expenses-section",children:[s.jsx("h2",{children:"Todos los Gastos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(yr,{size:48}),s.jsx("h3",{children:"No hay gastos"}),s.jsx("p",{children:"No se encontraron gastos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Categoría"}),s.jsx("th",{children:"Monto"}),s.jsx("th",{children:"Frecuencia"}),s.jsx("th",{children:"Próximo Vencimiento"}),s.jsx("th",{children:"Estado"})]})}),s.jsx("tbody",{children:t.map(x=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:x.name})}),s.jsx("td",{children:x.category||"-"}),s.jsx("td",{className:"amount-cell",children:P(x.amount)}),s.jsx("td",{children:j(x.frequency)}),s.jsx("td",{children:x.next_due_date?new Date(x.next_due_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:s.jsx("span",{className:`status-badge status-${x.status}`,children:x.status==="active"?"Activo":x.status==="paused"?"Pausado":"Cancelado"})})]},x.id))})]})})]}),s.jsx("style",{children:`
                .expenses-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .upcoming-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .upcoming-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; display: flex; align-items: center; gap: 8px; }
                .upcoming-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
                .upcoming-card { background: #fef3c7; border-radius: 12px; padding: 16px; border-left: 4px solid #f59e0b; }
                .upcoming-card.urgent { background: #fee2e2; border-left-color: #ef4444; }
                .upcoming-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
                .upcoming-header strong { color: #1f2937; }
                .amount { font-weight: 700; color: #059669; }
                .upcoming-body { }
                .due-date { margin: 4px 0; font-size: 14px; color: #374151; }
                .days-left { margin: 4px 0; font-size: 13px; color: #6b7280; font-weight: 600; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .expenses-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .expenses-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .amount-cell { font-weight: 700; color: #059669; }
                
                .status-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-active { background: #d1fae5; color: #065f46; }
                .status-badge.status-paused { background: #fef3c7; color: #92400e; }
                .status-badge.status-cancelled { background: #fee2e2; color: #991b1b; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},ON=()=>s.jsxs("div",{className:"loading-page",children:[s.jsxs("div",{className:"loading-container",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("h2",{children:"Cargando..."}),s.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),s.jsx("style",{children:`
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
      `})]}),MN=({message:e})=>s.jsxs("div",{className:"error-page",children:[s.jsxs("div",{className:"error-container",children:[s.jsx("div",{className:"error-icon",children:s.jsx(Hn,{size:64})}),s.jsx("h1",{children:"No se pudo cargar"}),s.jsx("p",{className:"error-message",children:e}),s.jsxs("div",{className:"error-actions",children:[s.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),s.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),s.jsx("style",{children:`
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
      `})]}),UN=()=>{var T,A;const{tenant:e}=xe(),[t,n]=C.useState([]),[r,i]=C.useState(!0),[o,l]=C.useState(""),[c,d]=C.useState(!1),[h,g]=C.useState(null),[m,b]=C.useState(null),[_,j]=C.useState(""),[P,D]=C.useState(""),x=((T=e==null?void 0:e.plan)==null?void 0:T.id)==="enterprise",f=((A=e==null?void 0:e.branding)==null?void 0:A.primary_color)||"#3b82f6";C.useEffect(()=>{v()},[]);const v=async()=>{try{const S=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(S)}catch(R){console.error("Error fetching domains:",R)}finally{i(!1)}},I=async R=>{if(R.preventDefault(),!!o.trim()){d(!0),j("");try{const S=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:o})}),ye=await S.json();if(!S.ok)throw new Error(ye.error||"Error agregando dominio");n([...t,ye.domain]),g(ye.dns_instructions),l(""),D("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(S){j(S.message)}finally{d(!1)}}},N=async R=>{b(R),j("");try{const ye=await(await fetch(`/api/domains/${R}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ye.verified?(D("DNS verificado. El SSL se está configurando."),v()):j(ye.message)}catch{j("Error verificando DNS")}finally{b(null)}},O=async R=>{try{await fetch(`/api/domains/${R}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),D("Dominio establecido como principal"),v()}catch{j("Error estableciendo dominio principal")}},k=async R=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${R}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(S=>S.id!==R)),D("Dominio eliminado")}catch{j("Error eliminando dominio")}},w=R=>{navigator.clipboard.writeText(R),D("Copiado al portapapeles"),setTimeout(()=>D(""),2e3)},E=R=>{switch(R){case"active":return s.jsxs("span",{className:"badge success",children:[s.jsx(Qe,{size:14})," Activo"]});case"provisioning":return s.jsxs("span",{className:"badge warning",children:[s.jsx(vr,{size:14})," Configurando SSL"]});case"pending":return s.jsxs("span",{className:"badge pending",children:[s.jsx(Vn,{size:14})," Pendiente verificación"]});case"failed":return s.jsxs("span",{className:"badge danger",children:[s.jsx(Vn,{size:14})," Error"]});default:return null}};return x?s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("header",{className:"page-header",children:[s.jsx("h1",{children:"Configuración White Label"}),s.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),_&&s.jsx("div",{className:"alert error",children:_}),P&&s.jsx("div",{className:"alert success",children:P}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsxs("h3",{children:[s.jsx(ds,{size:20})," Dominios"]})}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"domains-list",children:t.map(R=>s.jsxs("div",{className:"domain-row",children:[s.jsxs("div",{className:"domain-info",children:[s.jsxs("div",{className:"domain-name",children:[R.is_primary&&s.jsx(ud,{size:16,className:"primary-star"}),R.domain,R.domain_type==="subdomain"&&s.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),E(R.ssl_status)]}),s.jsxs("div",{className:"domain-actions",children:[R.ssl_status==="pending"&&s.jsx("button",{onClick:()=>N(R.id),disabled:m===R.id,className:"btn-action",children:m===R.id?s.jsx(Vk,{size:16,className:"spin"}):"Verificar DNS"}),R.ssl_status==="active"&&!R.is_primary&&s.jsxs("button",{onClick:()=>O(R.id),className:"btn-action",children:[s.jsx(ud,{size:16})," Hacer principal"]}),R.domain_type==="custom"&&s.jsx("button",{onClick:()=>k(R.id),className:"btn-delete",children:s.jsx(w0,{size:16})}),s.jsx("a",{href:`https://${R.domain}`,target:"_blank",className:"btn-action",children:s.jsx(Au,{size:16})})]})]},R.id))}),s.jsxs("form",{onSubmit:I,className:"add-domain-form",children:[s.jsx("input",{type:"text",placeholder:"miempresa.com",value:o,onChange:R=>l(R.target.value)}),s.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[s.jsx(us,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&s.jsxs("div",{className:"card instructions-card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Configuración DNS"})}),s.jsxs("div",{className:"card-content",children:[s.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),s.jsxs("div",{className:"dns-record",children:[s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Tipo"}),s.jsx("span",{children:h.type})]}),s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Nombre"}),s.jsx("span",{children:h.name}),s.jsx("button",{onClick:()=>w(h.name),className:"copy-btn",children:s.jsx($f,{size:14})})]}),s.jsxs("div",{className:"dns-field wide",children:[s.jsx("label",{children:"Valor"}),s.jsx("span",{children:h.value}),s.jsx("button",{onClick:()=>w(h.value),className:"copy-btn",children:s.jsx($f,{size:14})})]})]}),s.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),s.jsx("style",{children:Wf(f)})]}):s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("div",{className:"upgrade-notice",children:[s.jsx(ds,{size:48}),s.jsx("h2",{children:"White Label disponible en Enterprise"}),s.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),s.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),s.jsx("style",{children:Wf(f)})]})},Wf=e=>`
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
`,FN=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(!0);C.useEffect(()=>{i()},[]);const i=async()=>{try{const d=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(d)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return s.jsx("div",{className:"loading",children:"Cargando dashboard..."});const o=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return s.jsxs("div",{className:"super-admin-dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Super Admin Dashboard"}),s.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),s.jsx("div",{className:"header-actions",children:s.jsxs(De,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(us,{size:20}),"Nuevo Tenant"]})})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card primary",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(ja,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),s.jsxs("div",{className:"stat-card success",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(br,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Activas"}),s.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),s.jsxs("div",{className:"stat-card warning",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(yr,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:o((e==null?void 0:e.summary.mrr)||0)}),s.jsx("div",{className:"stat-label",children:"MRR"}),s.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),s.jsxs("div",{className:"stat-card danger",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(Gk,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),s.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),s.jsxs("div",{className:"content-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Empresas Recientes"}),s.jsx(De,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>s.jsxs("div",{className:"tenant-row",children:[s.jsx("div",{className:"tenant-avatar",children:c.logo_url?s.jsx("img",{src:c.logo_url,alt:c.name}):s.jsx("span",{children:c.name.charAt(0)})}),s.jsxs("div",{className:"tenant-info",children:[s.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),s.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),s.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),s.jsx("div",{className:"tenant-plan",children:c.plan_id}),s.jsx(De,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:s.jsx(x0,{size:18})})]},c.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Ingresos Mensuales"}),s.jsx(Wn,{size:20,className:"success"})]}),s.jsx("div",{className:"card-content chart-container",children:s.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,d)=>s.jsxs("div",{className:"chart-bar",children:[s.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),s.jsx("span",{className:"bar-label",children:c.month}),s.jsx("span",{className:"bar-value",children:o(c.revenue)})]},d))})})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Por Plan"})}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,d)=>s.jsxs("div",{className:"distribution-row",children:[s.jsx("span",{className:"dist-label",children:c.plan_id}),s.jsx("div",{className:"dist-bar",children:s.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][d%4]}})}),s.jsx("span",{className:"dist-count",children:c.count})]},d))})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Acciones Rápidas"})}),s.jsxs("div",{className:"card-content quick-actions",children:[s.jsxs(De,{to:"/super-admin/tenants",className:"quick-action",children:[s.jsx(ja,{size:24}),s.jsx("span",{children:"Gestionar Empresas"})]}),s.jsxs(De,{to:"/super-admin/subscriptions",className:"quick-action",children:[s.jsx(yr,{size:24}),s.jsx("span",{children:"Ver Suscripciones"})]}),s.jsxs(De,{to:"/super-admin/plans",className:"quick-action",children:[s.jsx(Wn,{size:24}),s.jsx("span",{children:"Configurar Planes"})]})]})]})]}),s.jsx("style",{children:`
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
      `})]})},$N=()=>{const e=kt(),[t,n]=C.useState([]),[r,i]=C.useState({page:1,limit:20,total:0,pages:0}),[o,l]=C.useState(!0),[c,d]=C.useState(""),[h,g]=C.useState(""),[m,b]=C.useState(null);C.useEffect(()=>{_()},[r.page,h]);const _=async()=>{try{l(!0);const v=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),N=await(await fetch(`/api/super-admin/tenants?${v}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(N.tenants),i(N.pagination)}catch(v){console.error("Error fetching tenants:",v)}finally{l(!1)}},j=v=>{v.preventDefault(),i({...r,page:1}),_()},P=async v=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${v}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),_()}catch(I){console.error("Error suspending tenant:",I)}},D=async v=>{try{await fetch(`/api/super-admin/tenants/${v}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),_()}catch(I){console.error("Error activating tenant:",I)}},x=v=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[v]||"bg-blue"}`,f=v=>new Date(v).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return s.jsxs("div",{className:"tenants-management",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(De,{to:"/super-admin",className:"back-link",children:s.jsx(cd,{size:20})}),s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Empresas"}),s.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),s.jsxs(De,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(us,{size:20}),"Nueva Empresa"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("form",{onSubmit:j,className:"search-box",children:[s.jsx(Mi,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:v=>d(v.target.value)})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx(Lk,{size:18}),s.jsxs("select",{value:h,onChange:v=>g(v.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"trial",children:"En prueba"}),s.jsx("option",{value:"suspended",children:"Suspendidos"}),s.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Subdominio"}),s.jsx("th",{children:"Plan"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Creado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:o?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(v=>{var I,N,O;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"tenant-cell",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((I=v.branding)==null?void 0:I.primary_color)||"#3b82f6"},children:(N=v.branding)!=null&&N.logo_url?s.jsx("img",{src:v.branding.logo_url,alt:""}):v.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("div",{className:"tenant-name",children:((O=v.branding)==null?void 0:O.company_name)||v.name}),s.jsxs("div",{className:"tenant-id",children:[v.id.slice(0,8),"..."]})]})]})}),s.jsx("td",{children:s.jsxs("a",{href:`https://${v.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[v.subdomain,s.jsx(Au,{size:14})]})}),s.jsx("td",{children:s.jsx("span",{className:"plan-badge",children:v.plan_id})}),s.jsx("td",{children:s.jsx("span",{className:x(v.status),children:v.status})}),s.jsx("td",{children:f(v.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions-cell",children:[s.jsx("button",{onClick:()=>e(`/super-admin/tenants/${v.id}`),className:"action-btn",title:"Ver detalles",children:s.jsx(x0,{size:18})}),v.status==="active"?s.jsx("button",{onClick:()=>P(v.id),className:"action-btn danger",title:"Suspender",children:s.jsx(v0,{size:18})}):v.status==="suspended"&&s.jsx("button",{onClick:()=>D(v.id),className:"action-btn success",title:"Activar",children:s.jsx(y0,{size:18})})]})})]},v.id)})})]})}),r.pages>1&&s.jsxs("div",{className:"pagination",children:[s.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[s.jsx(cd,{size:18}),"Anterior"]}),s.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),s.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",s.jsx(Rk,{size:18})]})]}),s.jsx("style",{children:`
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
      `})]})},BN=()=>{const{id:e}=cx();kt();const[t,n]=C.useState(null),[r,i]=C.useState(!0),[o,l]=C.useState(!1),[c,d]=C.useState({name:"",plan_id:""});C.useEffect(()=>{h()},[e]);const h=async()=>{try{const j=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(j),d({name:j.name,plan_id:j.plan_id})}catch(_){console.error("Error fetching tenant:",_)}finally{i(!1)}},g=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(_){console.error("Error updating tenant:",_)}},m=async _=>{if(confirm(_==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${_}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(P){console.error("Error changing status:",P)}},b=_=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[_]||"#3b82f6";return r?s.jsx("div",{className:"loading-page",children:"Cargando..."}):t?s.jsxs("div",{className:"tenant-detail",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(De,{to:"/super-admin/tenants",className:"back-link",children:s.jsx(cd,{size:20})}),s.jsxs("div",{className:"tenant-header",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?s.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("h1",{children:t.branding.company_name||t.name}),s.jsxs("div",{className:"tenant-meta",children:[s.jsx("span",{className:"status-dot",style:{backgroundColor:b(t.status)}}),s.jsx("span",{children:t.status}),s.jsx("span",{className:"separator",children:"•"}),s.jsx("span",{children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[s.jsx(Au,{size:18}),"Visitar"]}),t.status==="active"?s.jsxs("button",{onClick:()=>m("suspend"),className:"btn btn-danger",children:[s.jsx(v0,{size:18}),"Suspender"]}):t.status==="suspended"&&s.jsxs("button",{onClick:()=>m("activate"),className:"btn btn-success",children:[s.jsx(y0,{size:18}),"Activar"]})]})]}),s.jsxs("div",{className:"detail-content",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Información General"}),o?s.jsxs("button",{onClick:g,className:"btn btn-primary btn-sm",children:[s.jsx(b0,{size:16}),"Guardar"]}):s.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:s.jsx(Ga,{size:18})})]}),s.jsxs("div",{className:"card-content info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx(ja,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Nombre"}),o?s.jsx("input",{value:c.name,onChange:_=>d({...c,name:_.target.value})}):s.jsx("span",{children:t.name})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(ds,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Subdominio"}),s.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Du,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Email"}),s.jsx("span",{children:t.branding.contact_email||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx($k,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Teléfono"}),s.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(_a,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Creado"}),s.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Ak,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Plan"}),o?s.jsxs("select",{value:c.plan_id,onChange:_=>d({...c,plan_id:_.target.value}),children:[s.jsx("option",{value:"trial",children:"Trial"}),s.jsx("option",{value:"starter",children:"Starter"}),s.jsx("option",{value:"professional",children:"Professional"}),s.jsx("option",{value:"enterprise",children:"Enterprise"})]}):s.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Uso del Servicio"})}),s.jsxs("div",{className:"card-content usage-grid",children:[s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(br,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.users}),s.jsx("div",{className:"usage-label",children:"Usuarios"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Je,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),s.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Ok,{size:24})}),s.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),s.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Dominios"})}),s.jsx("div",{className:"card-content",children:t.domains.length===0?s.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((_,j)=>s.jsxs("div",{className:"domain-row",children:[s.jsx(ds,{size:16}),s.jsx("span",{children:_.domain}),_.is_primary&&s.jsx("span",{className:"badge primary",children:"Principal"}),s.jsxs("span",{className:`badge ${_.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",_.ssl_status]})]},j))})]}),t.subscription&&s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Suscripción"})}),s.jsx("div",{className:"card-content",children:s.jsxs("div",{className:"subscription-info",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Estado"}),s.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),s.jsxs("div",{children:[s.jsx("label",{children:"Próximo cobro"}),s.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),s.jsx("style",{children:`
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
      `})]}):s.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},VN=()=>{const{tenant:e,loading:t,error:n}=xe(),r=dn(),o=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&o?s.jsx("div",{className:"app",children:s.jsxs(Kp,{children:[s.jsx(J,{path:"/",element:s.jsx(Qk,{})}),s.jsx(J,{path:"/register",element:s.jsx(Zk,{})}),s.jsx(J,{path:"/onboarding",element:s.jsx(eN,{})}),s.jsx(J,{path:"*",element:s.jsx(Ao,{to:"/",replace:!0})})]})}):t?s.jsx(ON,{}):n&&!l?s.jsx(MN,{message:n}):s.jsx(Ck,{children:s.jsx("div",{className:"app",children:s.jsxs(Kp,{children:[s.jsx(J,{path:"/login",element:s.jsx(tN,{})}),s.jsx(J,{path:"/dashboard",element:s.jsx(fe,{children:s.jsx(nN,{})})}),s.jsx(J,{path:"/packages",element:s.jsx(fe,{children:s.jsx(rN,{})})}),s.jsx(J,{path:"/packages/new",element:s.jsx(fe,{children:s.jsx(sN,{})})}),s.jsx(J,{path:"/packages/:id",element:s.jsx(fe,{children:s.jsx(_N,{})})}),s.jsx(J,{path:"/clients",element:s.jsx(fe,{children:s.jsx(kN,{})})}),s.jsx(J,{path:"/couriers",element:s.jsx(fe,{children:s.jsx(NN,{})})}),s.jsx(J,{path:"/rates",element:s.jsx(fe,{children:s.jsx(EN,{})})}),s.jsx(J,{path:"/incidents",element:s.jsx(fe,{children:s.jsx(SN,{})})}),s.jsx(J,{path:"/fuel",element:s.jsx(fe,{children:s.jsx(TN,{})})}),s.jsx(J,{path:"/vehicles",element:s.jsx(fe,{children:s.jsx(CN,{})})}),s.jsx(J,{path:"/maintenance",element:s.jsx(fe,{children:s.jsx(IN,{})})}),s.jsx(J,{path:"/documents",element:s.jsx(fe,{children:s.jsx(PN,{})})}),s.jsx(J,{path:"/warehouse",element:s.jsx(fe,{children:s.jsx(RN,{})})}),s.jsx(J,{path:"/arrivals",element:s.jsx(fe,{children:s.jsx(AN,{})})}),s.jsx(J,{path:"/manifests",element:s.jsx(fe,{children:s.jsx(DN,{})})}),s.jsx(J,{path:"/shippers",element:s.jsx(fe,{children:s.jsx(zN,{})})}),s.jsx(J,{path:"/expenses",element:s.jsx(fe,{children:s.jsx(LN,{})})}),s.jsx(J,{path:"/account/white-label",element:s.jsx(fe,{children:s.jsx(UN,{})})}),s.jsx(J,{path:"/super-admin",element:s.jsx(fe,{children:s.jsx(FN,{})})}),s.jsx(J,{path:"/super-admin/tenants",element:s.jsx(fe,{children:s.jsx($N,{})})}),s.jsx(J,{path:"/super-admin/tenants/:id",element:s.jsx(fe,{children:s.jsx(BN,{})})}),s.jsx(J,{path:"/",element:s.jsx(Ao,{to:"/dashboard",replace:!0})}),s.jsx(J,{path:"*",element:s.jsx(Ao,{to:"/dashboard",replace:!0})})]})})})};sc.createRoot(document.getElementById("root")).render(s.jsx(bd.StrictMode,{children:s.jsx(A2,{children:s.jsx(F2,{children:s.jsx(VN,{})})})}));
//# sourceMappingURL=index-CEjte5f-.js.map
