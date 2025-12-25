function nx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var rx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bf={exports:{}},ya={},Vf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ys=Symbol.for("react.element"),ix=Symbol.for("react.portal"),sx=Symbol.for("react.fragment"),ox=Symbol.for("react.strict_mode"),ax=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),cx=Symbol.for("react.context"),ux=Symbol.for("react.forward_ref"),dx=Symbol.for("react.suspense"),hx=Symbol.for("react.memo"),px=Symbol.for("react.lazy"),Th=Symbol.iterator;function fx(e){return e===null||typeof e!="object"?null:(e=Th&&e[Th]||e["@@iterator"],typeof e=="function"?e:null)}var Hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wf=Object.assign,qf={};function ni(e,t,n){this.props=e,this.context=t,this.refs=qf,this.updater=n||Hf}ni.prototype.isReactComponent={};ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=ni.prototype;function du(e,t,n){this.props=e,this.context=t,this.refs=qf,this.updater=n||Hf}var hu=du.prototype=new Kf;hu.constructor=du;Wf(hu,ni.prototype);hu.isPureReactComponent=!0;var Ih=Array.isArray,Gf=Object.prototype.hasOwnProperty,pu={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Gf.call(t,r)&&!Xf.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:ys,type:e,key:s,ref:l,props:i,_owner:pu.current}}function gx(e,t){return{$$typeof:ys,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ys}function mx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ph=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mx(""+e.key):t.toString(36)}function po(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ys:case ix:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+gl(l,0):r,Ih(i)?(n="",e!=null&&(n=e.replace(Ph,"$&/")+"/"),po(i,t,n,"",function(h){return h})):i!=null&&(fu(i)&&(i=gx(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ph,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ih(e))for(var c=0;c<e.length;c++){s=e[c];var u=r+gl(s,c);l+=po(s,t,n,u,i)}else if(u=fx(e),typeof u=="function")for(e=u.call(e),c=0;!(s=e.next()).done;)s=s.value,u=r+gl(s,c++),l+=po(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function qs(e,t,n){if(e==null)return e;var r=[],i=0;return po(e,r,"","",function(s){return t.call(n,s,i++)}),r}function vx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},fo={transition:null},yx={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:fo,ReactCurrentOwner:pu};function Jf(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:qs,forEach:function(e,t,n){qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qs(e,function(){t++}),t},toArray:function(e){return qs(e,function(t){return t})||[]},only:function(e){if(!fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ni;q.Fragment=sx;q.Profiler=ax;q.PureComponent=du;q.StrictMode=ox;q.Suspense=dx;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;q.act=Jf;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wf({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=pu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)Gf.call(t,u)&&!Xf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:ys,type:e.type,key:i,ref:s,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:cx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lx,_context:e},e.Consumer=e};q.createElement=Yf;q.createFactory=function(e){var t=Yf.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:ux,render:e}};q.isValidElement=fu;q.lazy=function(e){return{$$typeof:px,_payload:{_status:-1,_result:e},_init:vx}};q.memo=function(e,t){return{$$typeof:hx,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=fo.transition;fo.transition={};try{e()}finally{fo.transition=t}};q.unstable_act=Jf;q.useCallback=function(e,t){return Fe.current.useCallback(e,t)};q.useContext=function(e){return Fe.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};q.useEffect=function(e,t){return Fe.current.useEffect(e,t)};q.useId=function(){return Fe.current.useId()};q.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Fe.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};q.useRef=function(e){return Fe.current.useRef(e)};q.useState=function(e){return Fe.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Fe.current.useTransition()};q.version="18.3.1";Vf.exports=q;var R=Vf.exports;const gu=uu(R),xx=nx({__proto__:null,default:gu},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx=R,bx=Symbol.for("react.element"),_x=Symbol.for("react.fragment"),kx=Object.prototype.hasOwnProperty,Ex=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)kx.call(t,r)&&!jx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bx,type:e,key:s,ref:l,props:i,_owner:Ex.current}}ya.Fragment=_x;ya.jsx=Qf;ya.jsxs=Qf;Bf.exports=ya;var o=Bf.exports,Ql={},Zf={exports:{}},tt={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var oe=W-1>>>1,Q=F[oe];if(0<i(Q,H))F[oe]=H,F[W]=Q,W=oe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var oe=0,Q=F.length,de=Q>>>1;oe<de;){var Mt=2*(oe+1)-1,Ut=F[Mt],Ft=Mt+1,$t=F[Ft];if(0>i(Ut,W))Ft<Q&&0>i($t,Ut)?(F[oe]=$t,F[Ft]=W,oe=Ft):(F[oe]=Ut,F[Mt]=W,oe=Mt);else if(Ft<Q&&0>i($t,W))F[oe]=$t,F[Ft]=W,oe=Ft;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],h=[],f=1,m=null,x=3,S=!1,E=!1,I=!1,O=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(h)}}function T(F){if(I=!1,w(F),!E)if(n(u)!==null)E=!0,li(A);else{var H=n(h);H!==null&&zt(T,H.startTime-F)}}function A(F,H){E=!1,I&&(I=!1,b(v),v=-1),S=!0;var W=x;try{for(w(H),m=n(u);m!==null&&(!(m.expirationTime>H)||F&&!P());){var oe=m.callback;if(typeof oe=="function"){m.callback=null,x=m.priorityLevel;var Q=oe(m.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(u)&&r(u),w(H)}else r(u);m=n(u)}if(m!==null)var de=!0;else{var Mt=n(h);Mt!==null&&zt(T,Mt.startTime-H),de=!1}return de}finally{m=null,x=W,S=!1}}var z=!1,_=null,v=-1,k=5,N=-1;function P(){return!(e.unstable_now()-N<k)}function C(){if(_!==null){var F=e.unstable_now();N=F;var H=!0;try{H=_(!0,F)}finally{H?j():(z=!1,_=null)}}else z=!1}var j;if(typeof y=="function")j=function(){y(C)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Kn=ve.port2;ve.port1.onmessage=C,j=function(){Kn.postMessage(null)}}else j=function(){O(C,0)};function li(F){_=F,z||(z=!0,j())}function zt(F,H){v=O(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){E||S||(E=!0,li(A))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var W=x;x=H;try{return F()}finally{x=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=x;x=F;try{return H()}finally{x=W}},e.unstable_scheduleCallback=function(F,H,W){var oe=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:f++,callback:H,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>oe?(F.sortIndex=W,t(h,F),n(u)===null&&F===n(h)&&(I?(b(v),v=-1):I=!0,zt(T,W-oe))):(F.sortIndex=Q,t(u,F),E||S||(E=!0,li(A))),F},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(F){var H=x;return function(){var W=x;x=H;try{return F.apply(this,arguments)}finally{x=W}}}})(tg);eg.exports=tg;var Sx=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx=R,et=Sx;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ng=new Set,Xi={};function fr(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(Xi[e]=t,e=0;e<t.length;e++)ng.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Ah={};function Tx(e){return Zl.call(Ah,e)?!0:Zl.call(Rh,e)?!1:Cx.test(e)?Ah[e]=!0:(Rh[e]=!0,!1)}function Ix(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Px(e,t,n,r){if(t===null||typeof t>"u"||Ix(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function vu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,vu);je[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,vu);je[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,vu);je[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function yu(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Px(t,n,i,r)&&(n=null),r||i===null?Tx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=Nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),xu=Symbol.for("react.strict_mode"),ec=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),ig=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),nc=Symbol.for("react.suspense_list"),bu=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),sg=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function _i(e){return e===null||typeof e!="object"?null:(e=Dh&&e[Dh]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ml;function Pi(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var vl=!1;function yl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,c=s.length-1;1<=l&&0<=c&&i[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==s[c]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pi(e):""}function Rx(e){switch(e.tag){case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function rc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case kr:return"Portal";case ec:return"Profiler";case xu:return"StrictMode";case tc:return"Suspense";case nc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ig:return(e.displayName||"Context")+".Consumer";case rg:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bu:return t=e.displayName||null,t!==null?t:rc(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return rc(e(t))}catch{}}return null}function Ax(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rc(t);case 8:return t===xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function og(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dx(e){var t=og(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gs(e){e._valueTracker||(e._valueTracker=Dx(e))}function ag(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=og(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ic(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Oh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lg(e,t){t=t.checked,t!=null&&yu(e,"checked",t,!1)}function sc(e,t){lg(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oc(e,t.type,n):t.hasOwnProperty("defaultValue")&&oc(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oc(e,t,n){(t!=="number"||Io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ri=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ac(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ri(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function cg(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ug(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ug(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xs,dg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ox=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(e){Ox.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zi[t]=zi[e]})});function hg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zi.hasOwnProperty(e)&&zi[e]?(""+t).trim():t+"px"}function pg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lx=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cc(e,t){if(t){if(Lx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function uc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hc=null,zr=null,Mr=null;function Uh(e){if(e=bs(e)){if(typeof hc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ka(t),hc(e.stateNode,e.type,t))}}function fg(e){zr?Mr?Mr.push(e):Mr=[e]:zr=e}function gg(){if(zr){var e=zr,t=Mr;if(Mr=zr=null,Uh(e),t)for(e=0;e<t.length;e++)Uh(t[e])}}function mg(e,t){return e(t)}function vg(){}var xl=!1;function yg(e,t,n){if(xl)return e(t,n);xl=!0;try{return mg(e,t,n)}finally{xl=!1,(zr!==null||Mr!==null)&&(vg(),gg())}}function Ji(e,t){var n=e.stateNode;if(n===null)return null;var r=ka(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var pc=!1;if(en)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){pc=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{pc=!1}function zx(e,t,n,r,i,s,l,c,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(f){this.onError(f)}}var Mi=!1,Po=null,Ro=!1,fc=null,Mx={onError:function(e){Mi=!0,Po=e}};function Ux(e,t,n,r,i,s,l,c,u){Mi=!1,Po=null,zx.apply(Mx,arguments)}function Fx(e,t,n,r,i,s,l,c,u){if(Ux.apply(this,arguments),Mi){if(Mi){var h=Po;Mi=!1,Po=null}else throw Error(M(198));Ro||(Ro=!0,fc=h)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fh(e){if(gr(e)!==e)throw Error(M(188))}function $x(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Fh(i),e;if(s===r)return Fh(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=s;break}if(c===r){l=!0,r=i,n=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===n){l=!0,n=s,r=i;break}if(c===r){l=!0,r=s,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function wg(e){return e=$x(e),e!==null?bg(e):null}function bg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bg(e);if(t!==null)return t;e=e.sibling}return null}var _g=et.unstable_scheduleCallback,$h=et.unstable_cancelCallback,Bx=et.unstable_shouldYield,Vx=et.unstable_requestPaint,fe=et.unstable_now,Hx=et.unstable_getCurrentPriorityLevel,ku=et.unstable_ImmediatePriority,kg=et.unstable_UserBlockingPriority,Ao=et.unstable_NormalPriority,Wx=et.unstable_LowPriority,Eg=et.unstable_IdlePriority,xa=null,Ct=null;function qx(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Xx,Kx=Math.log,Gx=Math.LN2;function Xx(e){return e>>>=0,e===0?32:31-(Kx(e)/Gx|0)|0}var Ys=64,Js=4194304;function Ai(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=Ai(c):(s&=l,s!==0&&(r=Ai(s)))}else l=n&~i,l!==0?r=Ai(l):s!==0&&(r=Ai(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function Yx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-yt(s),c=1<<l,u=i[l];u===-1?(!(c&n)||c&r)&&(i[l]=Yx(c,t)):u<=t&&(e.expiredLanes|=c),s&=~c}}function gc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jg(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function Qx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Sg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ng,ju,Cg,Tg,Ig,mc=!1,Qs=[],Cn=null,Tn=null,In=null,Qi=new Map,Zi=new Map,yn=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function Ei(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=bs(t),t!==null&&ju(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function e0(e,t,n,r,i){switch(t){case"focusin":return Cn=Ei(Cn,e,t,n,r,i),!0;case"dragenter":return Tn=Ei(Tn,e,t,n,r,i),!0;case"mouseover":return In=Ei(In,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qi.set(s,Ei(Qi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zi.set(s,Ei(Zi.get(s)||null,e,t,n,r,i)),!0}return!1}function Pg(e){var t=er(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=xg(n),t!==null){e.blockedOn=t,Ig(e.priority,function(){Cg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dc=r,n.target.dispatchEvent(r),dc=null}else return t=bs(n),t!==null&&ju(t),e.blockedOn=n,!1;t.shift()}return!0}function Vh(e,t,n){go(e)&&n.delete(t)}function t0(){mc=!1,Cn!==null&&go(Cn)&&(Cn=null),Tn!==null&&go(Tn)&&(Tn=null),In!==null&&go(In)&&(In=null),Qi.forEach(Vh),Zi.forEach(Vh)}function ji(e,t){e.blockedOn===t&&(e.blockedOn=null,mc||(mc=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,t0)))}function es(e){function t(i){return ji(i,e)}if(0<Qs.length){ji(Qs[0],e);for(var n=1;n<Qs.length;n++){var r=Qs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&ji(Cn,e),Tn!==null&&ji(Tn,e),In!==null&&ji(In,e),Qi.forEach(t),Zi.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&yn.shift()}var Ur=an.ReactCurrentBatchConfig,Oo=!0;function n0(e,t,n,r){var i=J,s=Ur.transition;Ur.transition=null;try{J=1,Su(e,t,n,r)}finally{J=i,Ur.transition=s}}function r0(e,t,n,r){var i=J,s=Ur.transition;Ur.transition=null;try{J=4,Su(e,t,n,r)}finally{J=i,Ur.transition=s}}function Su(e,t,n,r){if(Oo){var i=vc(e,t,n,r);if(i===null)Il(e,t,r,Lo,n),Bh(e,r);else if(e0(i,e,t,n,r))r.stopPropagation();else if(Bh(e,r),t&4&&-1<Zx.indexOf(e)){for(;i!==null;){var s=bs(i);if(s!==null&&Ng(s),s=vc(e,t,n,r),s===null&&Il(e,t,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Lo=null;function vc(e,t,n,r){if(Lo=null,e=_u(r),e=er(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function Rg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hx()){case ku:return 1;case kg:return 4;case Ao:case Wx:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var En=null,Nu=null,mo=null;function Ag(){if(mo)return mo;var e,t=Nu,n=t.length,r,i="value"in En?En.value:En.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return mo=i.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function Hh(){return!1}function nt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zs:Hh,this.isPropagationStopped=Hh,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=nt(ri),ws=ce({},ri,{view:0,detail:0}),i0=nt(ws),bl,_l,Si,wa=ce({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(bl=e.screenX-Si.screenX,_l=e.screenY-Si.screenY):_l=bl=0,Si=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Wh=nt(wa),s0=ce({},wa,{dataTransfer:0}),o0=nt(s0),a0=ce({},ws,{relatedTarget:0}),kl=nt(a0),l0=ce({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=nt(l0),u0=ce({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d0=nt(u0),h0=ce({},ri,{data:0}),qh=nt(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=g0[e])?!!t[e]:!1}function Tu(){return m0}var v0=ce({},ws,{key:function(e){if(e.key){var t=p0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y0=nt(v0),x0=ce({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=nt(x0),w0=ce({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),b0=nt(w0),_0=ce({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=nt(_0),E0=ce({},wa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=nt(E0),S0=[9,13,27,32],Iu=en&&"CompositionEvent"in window,Ui=null;en&&"documentMode"in document&&(Ui=document.documentMode);var N0=en&&"TextEvent"in window&&!Ui,Dg=en&&(!Iu||Ui&&8<Ui&&11>=Ui),Gh=" ",Xh=!1;function Og(e,t){switch(e){case"keyup":return S0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function C0(e,t){switch(e){case"compositionend":return Lg(t);case"keypress":return t.which!==32?null:(Xh=!0,Gh);case"textInput":return e=t.data,e===Gh&&Xh?null:e;default:return null}}function T0(e,t){if(jr)return e==="compositionend"||!Iu&&Og(e,t)?(e=Ag(),mo=Nu=En=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dg&&t.locale!=="ko"?null:t.data;default:return null}}var I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!I0[e.type]:t==="textarea"}function zg(e,t,n,r){fg(r),t=zo(t,"onChange"),0<t.length&&(n=new Cu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fi=null,ts=null;function P0(e){Gg(e,0)}function ba(e){var t=Cr(e);if(ag(t))return e}function R0(e,t){if(e==="change")return t}var Mg=!1;if(en){var El;if(en){var jl="oninput"in document;if(!jl){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),jl=typeof Jh.oninput=="function"}El=jl}else El=!1;Mg=El&&(!document.documentMode||9<document.documentMode)}function Qh(){Fi&&(Fi.detachEvent("onpropertychange",Ug),ts=Fi=null)}function Ug(e){if(e.propertyName==="value"&&ba(ts)){var t=[];zg(t,ts,e,_u(e)),yg(P0,t)}}function A0(e,t,n){e==="focusin"?(Qh(),Fi=t,ts=n,Fi.attachEvent("onpropertychange",Ug)):e==="focusout"&&Qh()}function D0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba(ts)}function O0(e,t){if(e==="click")return ba(t)}function L0(e,t){if(e==="input"||e==="change")return ba(t)}function z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:z0;function ns(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function Zh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,t){var n=Zh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zh(n)}}function Fg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $g(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M0(e){var t=$g(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(r!==null&&Pu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ep(n,s);var l=ep(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var U0=en&&"documentMode"in document&&11>=document.documentMode,Sr=null,yc=null,$i=null,xc=!1;function tp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xc||Sr==null||Sr!==Io(r)||(r=Sr,"selectionStart"in r&&Pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&ns($i,r)||($i=r,r=zo(yc,"onSelect"),0<r.length&&(t=new Cu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sr)))}function eo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Sl={},Bg={};en&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function _a(e){if(Sl[e])return Sl[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bg)return Sl[e]=t[n];return e}var Vg=_a("animationend"),Hg=_a("animationiteration"),Wg=_a("animationstart"),qg=_a("transitionend"),Kg=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Kg.set(e,t),fr(t,[e])}for(var Nl=0;Nl<np.length;Nl++){var Cl=np[Nl],F0=Cl.toLowerCase(),$0=Cl[0].toUpperCase()+Cl.slice(1);Bn(F0,"on"+$0)}Bn(Vg,"onAnimationEnd");Bn(Hg,"onAnimationIteration");Bn(Wg,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(qg,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fx(r,t,void 0,e),e.currentTarget=null}function Gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==s&&i.isPropagationStopped())break e;rp(i,c,h),s=u}else for(l=0;l<r.length;l++){if(c=r[l],u=c.instance,h=c.currentTarget,c=c.listener,u!==s&&i.isPropagationStopped())break e;rp(i,c,h),s=u}}}if(Ro)throw e=fc,Ro=!1,fc=null,e}function re(e,t){var n=t[Ec];n===void 0&&(n=t[Ec]=new Set);var r=e+"__bubble";n.has(r)||(Xg(t,e,2,!1),n.add(r))}function Tl(e,t,n){var r=0;t&&(r|=4),Xg(n,e,r,t)}var to="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[to]){e[to]=!0,ng.forEach(function(n){n!=="selectionchange"&&(B0.has(n)||Tl(n,!1,e),Tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[to]||(t[to]=!0,Tl("selectionchange",!1,t))}}function Xg(e,t,n,r){switch(Rg(t)){case 1:var i=n0;break;case 4:i=r0;break;default:i=Su}n=i.bind(null,t,n,e),i=void 0,!pc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;c!==null;){if(l=er(c),l===null)return;if(u=l.tag,u===5||u===6){r=s=l;continue e}c=c.parentNode}}r=r.return}yg(function(){var h=s,f=_u(n),m=[];e:{var x=Kg.get(e);if(x!==void 0){var S=Cu,E=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":S=y0;break;case"focusin":E="focus",S=kl;break;case"focusout":E="blur",S=kl;break;case"beforeblur":case"afterblur":S=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=b0;break;case Vg:case Hg:case Wg:S=c0;break;case qg:S=k0;break;case"scroll":S=i0;break;case"wheel":S=j0;break;case"copy":case"cut":case"paste":S=d0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Kh}var I=(t&4)!==0,O=!I&&e==="scroll",b=I?x!==null?x+"Capture":null:x;I=[];for(var y=h,w;y!==null;){w=y;var T=w.stateNode;if(w.tag===5&&T!==null&&(w=T,b!==null&&(T=Ji(y,b),T!=null&&I.push(is(y,T,w)))),O)break;y=y.return}0<I.length&&(x=new S(x,E,null,n,f),m.push({event:x,listeners:I}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",x&&n!==dc&&(E=n.relatedTarget||n.fromElement)&&(er(E)||E[tn]))break e;if((S||x)&&(x=f.window===f?f:(x=f.ownerDocument)?x.defaultView||x.parentWindow:window,S?(E=n.relatedTarget||n.toElement,S=h,E=E?er(E):null,E!==null&&(O=gr(E),E!==O||E.tag!==5&&E.tag!==6)&&(E=null)):(S=null,E=h),S!==E)){if(I=Wh,T="onMouseLeave",b="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(I=Kh,T="onPointerLeave",b="onPointerEnter",y="pointer"),O=S==null?x:Cr(S),w=E==null?x:Cr(E),x=new I(T,y+"leave",S,n,f),x.target=O,x.relatedTarget=w,T=null,er(f)===h&&(I=new I(b,y+"enter",E,n,f),I.target=w,I.relatedTarget=O,T=I),O=T,S&&E)t:{for(I=S,b=E,y=0,w=I;w;w=_r(w))y++;for(w=0,T=b;T;T=_r(T))w++;for(;0<y-w;)I=_r(I),y--;for(;0<w-y;)b=_r(b),w--;for(;y--;){if(I===b||b!==null&&I===b.alternate)break t;I=_r(I),b=_r(b)}I=null}else I=null;S!==null&&ip(m,x,S,I,!1),E!==null&&O!==null&&ip(m,O,E,I,!0)}}e:{if(x=h?Cr(h):window,S=x.nodeName&&x.nodeName.toLowerCase(),S==="select"||S==="input"&&x.type==="file")var A=R0;else if(Yh(x))if(Mg)A=L0;else{A=D0;var z=A0}else(S=x.nodeName)&&S.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(A=O0);if(A&&(A=A(e,h))){zg(m,A,n,f);break e}z&&z(e,x,h),e==="focusout"&&(z=x._wrapperState)&&z.controlled&&x.type==="number"&&oc(x,"number",x.value)}switch(z=h?Cr(h):window,e){case"focusin":(Yh(z)||z.contentEditable==="true")&&(Sr=z,yc=h,$i=null);break;case"focusout":$i=yc=Sr=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,tp(m,n,f);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":tp(m,n,f)}var _;if(Iu)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else jr?Og(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Dg&&n.locale!=="ko"&&(jr||v!=="onCompositionStart"?v==="onCompositionEnd"&&jr&&(_=Ag()):(En=f,Nu="value"in En?En.value:En.textContent,jr=!0)),z=zo(h,v),0<z.length&&(v=new qh(v,e,null,n,f),m.push({event:v,listeners:z}),_?v.data=_:(_=Lg(n),_!==null&&(v.data=_)))),(_=N0?C0(e,n):T0(e,n))&&(h=zo(h,"onBeforeInput"),0<h.length&&(f=new qh("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=_))}Gg(m,t)})}function is(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ji(e,n),s!=null&&r.unshift(is(e,s,i)),s=Ji(e,t),s!=null&&r.push(is(e,s,i))),e=e.return}return r}function _r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ip(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,i?(u=Ji(n,s),u!=null&&l.unshift(is(n,u,c))):i||(u=Ji(n,s),u!=null&&l.push(is(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var V0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function sp(e){return(typeof e=="string"?e:""+e).replace(V0,`
`).replace(H0,"")}function no(e,t,n){if(t=sp(t),sp(e)!==t&&n)throw Error(M(425))}function Mo(){}var wc=null,bc=null;function _c(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(e){return op.resolve(null).then(e).catch(K0)}:kc;function K0(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),St="__reactFiber$"+ii,ss="__reactProps$"+ii,tn="__reactContainer$"+ii,Ec="__reactEvents$"+ii,G0="__reactListeners$"+ii,X0="__reactHandles$"+ii;function er(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ap(e);e!==null;){if(n=e[St])return n;e=ap(e)}return t}e=n,n=e.parentNode}return null}function bs(e){return e=e[St]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ka(e){return e[ss]||null}var jc=[],Tr=-1;function Vn(e){return{current:e}}function ie(e){0>Tr||(e.current=jc[Tr],jc[Tr]=null,Tr--)}function te(e,t){Tr++,jc[Tr]=e.current,e.current=t}var Fn={},Ae=Vn(Fn),qe=Vn(!1),sr=Fn;function qr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Uo(){ie(qe),ie(Ae)}function lp(e,t,n){if(Ae.current!==Fn)throw Error(M(168));te(Ae,t),te(qe,n)}function Yg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Ax(e)||"Unknown",i));return ce({},n,r)}function Fo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,sr=Ae.current,te(Ae,e),te(qe,qe.current),!0}function cp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Yg(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,ie(qe),ie(Ae),te(Ae,e)):ie(qe),te(qe,n)}var Wt=null,Ea=!1,Rl=!1;function Jg(e){Wt===null?Wt=[e]:Wt.push(e)}function Y0(e){Ea=!0,Jg(e)}function Hn(){if(!Rl&&Wt!==null){Rl=!0;var e=0,t=J;try{var n=Wt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,Ea=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),_g(ku,Hn),i}finally{J=t,Rl=!1}}return null}var Ir=[],Pr=0,$o=null,Bo=0,st=[],ot=0,or=null,qt=1,Kt="";function Jn(e,t){Ir[Pr++]=Bo,Ir[Pr++]=$o,$o=e,Bo=t}function Qg(e,t,n){st[ot++]=qt,st[ot++]=Kt,st[ot++]=or,or=e;var r=qt;e=Kt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,qt=1<<32-yt(t)+i|n<<i|r,Kt=s+e}else qt=1<<s|n<<i|r,Kt=e}function Ru(e){e.return!==null&&(Jn(e,1),Qg(e,1,0))}function Au(e){for(;e===$o;)$o=Ir[--Pr],Ir[Pr]=null,Bo=Ir[--Pr],Ir[Pr]=null;for(;e===or;)or=st[--ot],st[ot]=null,Kt=st[--ot],st[ot]=null,qt=st[--ot],st[ot]=null}var Ze=null,Qe=null,se=!1,gt=null;function Zg(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function up(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Qe=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Qe=null,!0):!1;default:return!1}}function Sc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(se){var t=Qe;if(t){var n=t;if(!up(e,t)){if(Sc(e))throw Error(M(418));t=Pn(n.nextSibling);var r=Ze;t&&up(e,t)?Zg(r,n):(e.flags=e.flags&-4097|2,se=!1,Ze=e)}}else{if(Sc(e))throw Error(M(418));e.flags=e.flags&-4097|2,se=!1,Ze=e}}}function dp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function ro(e){if(e!==Ze)return!1;if(!se)return dp(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_c(e.type,e.memoizedProps)),t&&(t=Qe)){if(Sc(e))throw em(),Error(M(418));for(;t;)Zg(e,t),t=Pn(t.nextSibling)}if(dp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ze?Pn(e.stateNode.nextSibling):null;return!0}function em(){for(var e=Qe;e;)e=Pn(e.nextSibling)}function Kr(){Qe=Ze=null,se=!1}function Du(e){gt===null?gt=[e]:gt.push(e)}var J0=an.ReactCurrentBatchConfig;function Ni(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=i.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function io(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hp(e){var t=e._init;return t(e._payload)}function tm(e){function t(b,y){if(e){var w=b.deletions;w===null?(b.deletions=[y],b.flags|=16):w.push(y)}}function n(b,y){if(!e)return null;for(;y!==null;)t(b,y),y=y.sibling;return null}function r(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function i(b,y){return b=On(b,y),b.index=0,b.sibling=null,b}function s(b,y,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<y?(b.flags|=2,y):w):(b.flags|=2,y)):(b.flags|=1048576,y)}function l(b){return e&&b.alternate===null&&(b.flags|=2),b}function c(b,y,w,T){return y===null||y.tag!==6?(y=Ul(w,b.mode,T),y.return=b,y):(y=i(y,w),y.return=b,y)}function u(b,y,w,T){var A=w.type;return A===Er?f(b,y,w.props.children,T,w.key):y!==null&&(y.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mn&&hp(A)===y.type)?(T=i(y,w.props),T.ref=Ni(b,y,w),T.return=b,T):(T=Eo(w.type,w.key,w.props,null,b.mode,T),T.ref=Ni(b,y,w),T.return=b,T)}function h(b,y,w,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=Fl(w,b.mode,T),y.return=b,y):(y=i(y,w.children||[]),y.return=b,y)}function f(b,y,w,T,A){return y===null||y.tag!==7?(y=ir(w,b.mode,T,A),y.return=b,y):(y=i(y,w),y.return=b,y)}function m(b,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ul(""+y,b.mode,w),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ks:return w=Eo(y.type,y.key,y.props,null,b.mode,w),w.ref=Ni(b,null,y),w.return=b,w;case kr:return y=Fl(y,b.mode,w),y.return=b,y;case mn:var T=y._init;return m(b,T(y._payload),w)}if(Ri(y)||_i(y))return y=ir(y,b.mode,w,null),y.return=b,y;io(b,y)}return null}function x(b,y,w,T){var A=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return A!==null?null:c(b,y,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ks:return w.key===A?u(b,y,w,T):null;case kr:return w.key===A?h(b,y,w,T):null;case mn:return A=w._init,x(b,y,A(w._payload),T)}if(Ri(w)||_i(w))return A!==null?null:f(b,y,w,T,null);io(b,w)}return null}function S(b,y,w,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return b=b.get(w)||null,c(y,b,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ks:return b=b.get(T.key===null?w:T.key)||null,u(y,b,T,A);case kr:return b=b.get(T.key===null?w:T.key)||null,h(y,b,T,A);case mn:var z=T._init;return S(b,y,w,z(T._payload),A)}if(Ri(T)||_i(T))return b=b.get(w)||null,f(y,b,T,A,null);io(y,T)}return null}function E(b,y,w,T){for(var A=null,z=null,_=y,v=y=0,k=null;_!==null&&v<w.length;v++){_.index>v?(k=_,_=null):k=_.sibling;var N=x(b,_,w[v],T);if(N===null){_===null&&(_=k);break}e&&_&&N.alternate===null&&t(b,_),y=s(N,y,v),z===null?A=N:z.sibling=N,z=N,_=k}if(v===w.length)return n(b,_),se&&Jn(b,v),A;if(_===null){for(;v<w.length;v++)_=m(b,w[v],T),_!==null&&(y=s(_,y,v),z===null?A=_:z.sibling=_,z=_);return se&&Jn(b,v),A}for(_=r(b,_);v<w.length;v++)k=S(_,b,v,w[v],T),k!==null&&(e&&k.alternate!==null&&_.delete(k.key===null?v:k.key),y=s(k,y,v),z===null?A=k:z.sibling=k,z=k);return e&&_.forEach(function(P){return t(b,P)}),se&&Jn(b,v),A}function I(b,y,w,T){var A=_i(w);if(typeof A!="function")throw Error(M(150));if(w=A.call(w),w==null)throw Error(M(151));for(var z=A=null,_=y,v=y=0,k=null,N=w.next();_!==null&&!N.done;v++,N=w.next()){_.index>v?(k=_,_=null):k=_.sibling;var P=x(b,_,N.value,T);if(P===null){_===null&&(_=k);break}e&&_&&P.alternate===null&&t(b,_),y=s(P,y,v),z===null?A=P:z.sibling=P,z=P,_=k}if(N.done)return n(b,_),se&&Jn(b,v),A;if(_===null){for(;!N.done;v++,N=w.next())N=m(b,N.value,T),N!==null&&(y=s(N,y,v),z===null?A=N:z.sibling=N,z=N);return se&&Jn(b,v),A}for(_=r(b,_);!N.done;v++,N=w.next())N=S(_,b,v,N.value,T),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?v:N.key),y=s(N,y,v),z===null?A=N:z.sibling=N,z=N);return e&&_.forEach(function(C){return t(b,C)}),se&&Jn(b,v),A}function O(b,y,w,T){if(typeof w=="object"&&w!==null&&w.type===Er&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ks:e:{for(var A=w.key,z=y;z!==null;){if(z.key===A){if(A=w.type,A===Er){if(z.tag===7){n(b,z.sibling),y=i(z,w.props.children),y.return=b,b=y;break e}}else if(z.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mn&&hp(A)===z.type){n(b,z.sibling),y=i(z,w.props),y.ref=Ni(b,z,w),y.return=b,b=y;break e}n(b,z);break}else t(b,z);z=z.sibling}w.type===Er?(y=ir(w.props.children,b.mode,T,w.key),y.return=b,b=y):(T=Eo(w.type,w.key,w.props,null,b.mode,T),T.ref=Ni(b,y,w),T.return=b,b=T)}return l(b);case kr:e:{for(z=w.key;y!==null;){if(y.key===z)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(b,y.sibling),y=i(y,w.children||[]),y.return=b,b=y;break e}else{n(b,y);break}else t(b,y);y=y.sibling}y=Fl(w,b.mode,T),y.return=b,b=y}return l(b);case mn:return z=w._init,O(b,y,z(w._payload),T)}if(Ri(w))return E(b,y,w,T);if(_i(w))return I(b,y,w,T);io(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(b,y.sibling),y=i(y,w),y.return=b,b=y):(n(b,y),y=Ul(w,b.mode,T),y.return=b,b=y),l(b)):n(b,y)}return O}var Gr=tm(!0),nm=tm(!1),Vo=Vn(null),Ho=null,Rr=null,Ou=null;function Lu(){Ou=Rr=Ho=null}function zu(e){var t=Vo.current;ie(Vo),e._currentValue=t}function Cc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){Ho=e,Ou=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Ou!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Ho===null)throw Error(M(308));Rr=e,Ho.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var tr=null;function Mu(e){tr===null?tr=[e]:tr.push(e)}function rm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Mu(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Mu(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}function pp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;vn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,h=u.next;u.next=null,l===null?s=h:l.next=h,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==l&&(c===null?f.firstBaseUpdate=h:c.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;l=0,f=h=u=null,c=s;do{var x=c.lane,S=c.eventTime;if((r&x)===x){f!==null&&(f=f.next={eventTime:S,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var E=e,I=c;switch(x=t,S=n,I.tag){case 1:if(E=I.payload,typeof E=="function"){m=E.call(S,m,x);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=I.payload,x=typeof E=="function"?E.call(S,m,x):E,x==null)break e;m=ce({},m,x);break e;case 2:vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[c]:x.push(c))}else S={eventTime:S,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(h=f=S,u=m):f=f.next=S,l|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;x=c,c=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);lr|=l,e.lanes=l,e.memoizedState=m}}function fp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var _s={},Tt=Vn(_s),os=Vn(_s),as=Vn(_s);function nr(e){if(e===_s)throw Error(M(174));return e}function Fu(e,t){switch(te(as,t),te(os,e),te(Tt,_s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lc(t,e)}ie(Tt),te(Tt,t)}function Xr(){ie(Tt),ie(os),ie(as)}function sm(e){nr(as.current);var t=nr(Tt.current),n=lc(t,e.type);t!==n&&(te(os,e),te(Tt,n))}function $u(e){os.current===e&&(ie(Tt),ie(os))}var ae=Vn(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function Bu(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var xo=an.ReactCurrentDispatcher,Dl=an.ReactCurrentBatchConfig,ar=0,le=null,ye=null,we=null,Ko=!1,Bi=!1,ls=0,Q0=0;function Te(){throw Error(M(321))}function Vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Hu(e,t,n,r,i,s){if(ar=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?n1:r1,e=n(r,i),Bi){s=0;do{if(Bi=!1,ls=0,25<=s)throw Error(M(301));s+=1,we=ye=null,t.updateQueue=null,xo.current=i1,e=n(r,i)}while(Bi)}if(xo.current=Go,t=ye!==null&&ye.next!==null,ar=0,we=ye=le=null,Ko=!1,t)throw Error(M(300));return e}function Wu(){var e=ls!==0;return ls=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function ut(){if(ye===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,ye=e;else{if(e===null)throw Error(M(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function cs(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=l=null,u=null,h=s;do{var f=h.lane;if((ar&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=m,l=r):u=u.next=m,le.lanes|=f,lr|=f}h=h.next}while(h!==null&&h!==s);u===null?l=r:u.next=c,wt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,le.lanes|=s,lr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ll(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);wt(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function om(){}function am(e,t){var n=le,r=ut(),i=t(),s=!wt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,qu(um.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,us(9,cm.bind(null,n,r,i,t),void 0,null),be===null)throw Error(M(349));ar&30||lm(n,t,i)}return i}function lm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cm(e,t,n,r){t.value=n,t.getSnapshot=r,dm(t)&&hm(e)}function um(e,t,n){return n(function(){dm(t)&&hm(e)})}function dm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function hm(e){var t=nn(e,1);t!==null&&xt(t,e,1,-1)}function gp(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t.queue=e,e=e.dispatch=t1.bind(null,le,e),[t.memoizedState,e]}function us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pm(){return ut().memoizedState}function wo(e,t,n,r){var i=jt();le.flags|=e,i.memoizedState=us(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(ye!==null){var l=ye.memoizedState;if(s=l.destroy,r!==null&&Vu(r,l.deps)){i.memoizedState=us(t,n,s,r);return}}le.flags|=e,i.memoizedState=us(1|t,n,s,r)}function mp(e,t){return wo(8390656,8,e,t)}function qu(e,t){return ja(2048,8,e,t)}function fm(e,t){return ja(4,2,e,t)}function gm(e,t){return ja(4,4,e,t)}function mm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vm(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,mm.bind(null,t,e),n)}function Ku(){}function ym(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xm(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wm(e,t,n){return ar&21?(wt(n,t)||(n=jg(),le.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function Z0(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{J=n,Dl.transition=r}}function bm(){return ut().memoizedState}function e1(e,t,n){var r=Dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_m(e))km(t,n);else if(n=rm(e,t,n,r),n!==null){var i=Me();xt(n,e,r,i),Em(n,t,r)}}function t1(e,t,n){var r=Dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_m(e))km(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(i.hasEagerState=!0,i.eagerState=c,wt(c,l)){var u=t.interleaved;u===null?(i.next=i,Mu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=rm(e,t,i,r),n!==null&&(i=Me(),xt(n,e,r,i),Em(n,t,r))}}function _m(e){var t=e.alternate;return e===le||t!==null&&t===le}function km(e,t){Bi=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Em(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Eu(e,n)}}var Go={readContext:ct,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},n1={readContext:ct,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:mp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,mm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=e1.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:gp,useDebugValue:Ku,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=gp(!1),t=e[0];return e=Z0.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=jt();if(se){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),be===null)throw Error(M(349));ar&30||lm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,mp(um.bind(null,r,s,e),[e]),r.flags|=2048,us(9,cm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=jt(),t=be.identifierPrefix;if(se){var n=Kt,r=qt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ls++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r1={readContext:ct,useCallback:ym,useContext:ct,useEffect:qu,useImperativeHandle:vm,useInsertionEffect:fm,useLayoutEffect:gm,useMemo:xm,useReducer:Ol,useRef:pm,useState:function(){return Ol(cs)},useDebugValue:Ku,useDeferredValue:function(e){var t=ut();return wm(t,ye.memoizedState,e)},useTransition:function(){var e=Ol(cs)[0],t=ut().memoizedState;return[e,t]},useMutableSource:om,useSyncExternalStore:am,useId:bm,unstable_isNewReconciler:!1},i1={readContext:ct,useCallback:ym,useContext:ct,useEffect:qu,useImperativeHandle:vm,useInsertionEffect:fm,useLayoutEffect:gm,useMemo:xm,useReducer:Ll,useRef:pm,useState:function(){return Ll(cs)},useDebugValue:Ku,useDeferredValue:function(e){var t=ut();return ye===null?t.memoizedState=e:wm(t,ye.memoizedState,e)},useTransition:function(){var e=Ll(cs)[0],t=ut().memoizedState;return[e,t]},useMutableSource:om,useSyncExternalStore:am,useId:bm,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sa={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=Dn(e),s=Jt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(xt(t,e,i,r),yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=Dn(e),s=Jt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(xt(t,e,i,r),yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Dn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(xt(t,e,r,n),yo(t,e,r))}};function vp(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!ns(n,r)||!ns(i,s):!0}function jm(e,t,n){var r=!1,i=Fn,s=t.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Ke(t)?sr:Ae.current,r=t.contextTypes,s=(r=r!=null)?qr(e,i):Fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function yp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sa.enqueueReplaceState(t,t.state,null)}function Ic(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Uu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Ke(t)?sr:Ae.current,i.context=qr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Tc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Sa.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",r=t;do n+=Rx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s1=typeof WeakMap=="function"?WeakMap:Map;function Sm(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yo||(Yo=!0,$c=r),Pc(e,t)},n}function Nm(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pc(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=x1.bind(null,e,t,n),t.then(e,e))}function wp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var o1=an.ReactCurrentOwner,We=!1;function Le(e,t,n,r){t.child=e===null?nm(t,null,n,r):Gr(t,e.child,n,r)}function _p(e,t,n,r,i){n=n.render;var s=t.ref;return Fr(t,i),r=Hu(e,t,n,r,s,i),n=Wu(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(se&&n&&Ru(t),t.flags|=1,Le(e,t,r,i),t.child)}function kp(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!td(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Cm(e,t,s,r,i)):(e=Eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(l,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=On(s,r),e.ref=t.ref,e.return=t,t.child=e}function Cm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ns(s,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Rc(e,t,n,r,i)}function Tm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Dr,Je),Je|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Dr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Dr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,te(Dr,Je),Je|=r;return Le(e,t,i,n),t.child}function Im(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rc(e,t,n,r,i){var s=Ke(n)?sr:Ae.current;return s=qr(t,s),Fr(t,i),n=Hu(e,t,n,r,s,i),r=Wu(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(se&&r&&Ru(t),t.flags|=1,Le(e,t,n,i),t.child)}function Ep(e,t,n,r,i){if(Ke(n)){var s=!0;Fo(t)}else s=!1;if(Fr(t,i),t.stateNode===null)bo(e,t),jm(t,n,r),Ic(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=ct(h):(h=Ke(n)?sr:Ae.current,h=qr(t,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||u!==h)&&yp(t,l,r,h),vn=!1;var x=t.memoizedState;l.state=x,Wo(t,r,l,i),u=t.memoizedState,c!==r||x!==u||qe.current||vn?(typeof f=="function"&&(Tc(t,n,f,r),u=t.memoizedState),(c=vn||vp(t,n,c,r,x,u,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,im(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:pt(t.type,c),l.props=h,m=t.pendingProps,x=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Ke(n)?sr:Ae.current,u=qr(t,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||x!==u)&&yp(t,l,r,u),vn=!1,x=t.memoizedState,l.state=x,Wo(t,r,l,i);var E=t.memoizedState;c!==m||x!==E||qe.current||vn?(typeof S=="function"&&(Tc(t,n,S,r),E=t.memoizedState),(h=vn||vp(t,n,h,r,x,E,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ac(e,t,n,r,s,i)}function Ac(e,t,n,r,i,s){Im(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&cp(t,n,!1),rn(e,t,s);r=t.stateNode,o1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gr(t,e.child,null,s),t.child=Gr(t,null,c,s)):Le(e,t,c,s),t.memoizedState=r.state,i&&cp(t,n,!0),t.child}function Pm(e){var t=e.stateNode;t.pendingContext?lp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lp(e,t.context,!1),Fu(e,t.containerInfo)}function jp(e,t,n,r,i){return Kr(),Du(i),t.flags|=256,Le(e,t,n,r),t.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Oc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rm(e,t,n){var r=t.pendingProps,i=ae.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ae,i&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ta(l,r,0,null),e=ir(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Oc(n),t.memoizedState=Dc,e):Gu(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return a1(e,t,l,r,c,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,c=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=On(i,u),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=On(c,s):(s=ir(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Oc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Dc,r}return s=e.child,e=s.sibling,r=On(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gu(e,t){return t=Ta({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function so(e,t,n,r){return r!==null&&Du(r),Gr(t,e.child,null,n),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a1(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=zl(Error(M(422))),so(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ta({mode:"visible",children:r.children},i,0,null),s=ir(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Gr(t,e.child,null,l),t.child.memoizedState=Oc(l),t.memoizedState=Dc,s);if(!(t.mode&1))return so(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(M(419)),r=zl(s,r,void 0),so(e,t,l,r)}if(c=(l&e.childLanes)!==0,We||c){if(r=be,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(e,i),xt(r,e,i,-1))}return ed(),r=zl(Error(M(421))),so(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=w1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Qe=Pn(i.nextSibling),Ze=t,se=!0,gt=null,e!==null&&(st[ot++]=qt,st[ot++]=Kt,st[ot++]=or,qt=e.id,Kt=e.overflow,or=t),t=Gu(t,r.children),t.flags|=4096,t)}function Sp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cc(e.return,t,n)}function Ml(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Am(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Le(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sp(e,n,t);else if(e.tag===19)Sp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ml(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ml(t,!0,n,null,s);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l1(e,t,n){switch(t.tag){case 3:Pm(t),Kr();break;case 5:sm(t);break;case 1:Ke(t.type)&&Fo(t);break;case 4:Fu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Vo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Rm(e,t,n):(te(ae,ae.current&1),e=rn(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Am(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Tm(e,t,n)}return rn(e,t,n)}var Dm,Lc,Om,Lm;Dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};Om=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nr(Tt.current);var s=null;switch(n){case"input":i=ic(e,i),r=ic(e,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=ac(e,i),r=ac(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}cc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xi.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&re("scroll",e),s||c===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};Lm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ci(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function c1(e,t,n){var r=t.pendingProps;switch(Au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ke(t.type)&&Uo(),Ie(t),null;case 3:return r=t.stateNode,Xr(),ie(qe),ie(Ae),Bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ro(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Hc(gt),gt=null))),Lc(e,t),Ie(t),null;case 5:$u(t);var i=nr(as.current);if(n=t.type,e!==null&&t.stateNode!=null)Om(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ie(t),null}if(e=nr(Tt.current),ro(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[St]=t,r[ss]=s,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)re(Di[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Oh(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":zh(r,s),re("invalid",r)}cc(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&no(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&no(r.textContent,c,e),i=["children",""+c]):Xi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Gs(r),Lh(r,s,!0);break;case"textarea":Gs(r),Mh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ug(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[ss]=r,Dm(e,t,!1,!1),t.stateNode=e;e:{switch(l=uc(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)re(Di[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":Oh(e,r),i=ic(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":zh(e,r),i=ac(e,r),re("invalid",e);break;default:i=r}cc(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var u=c[s];s==="style"?pg(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dg(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yi(e,u):typeof u=="number"&&Yi(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xi.hasOwnProperty(s)?u!=null&&s==="onScroll"&&re("scroll",e):u!=null&&yu(e,s,u,l))}switch(n){case"input":Gs(e),Lh(e,r,!1);break;case"textarea":Gs(e),Mh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Lr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Lm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=nr(as.current),nr(Tt.current),ro(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(s=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:no(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ie(t),null;case 13:if(ie(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Qe!==null&&t.mode&1&&!(t.flags&128))em(),Kr(),t.flags|=98560,s=!1;else if(s=ro(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[St]=t}else Kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),s=!1}else gt!==null&&(Hc(gt),gt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?xe===0&&(xe=3):ed())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Xr(),Lc(e,t),e===null&&rs(t.stateNode.containerInfo),Ie(t),null;case 10:return zu(t.type._context),Ie(t),null;case 17:return Ke(t.type)&&Uo(),Ie(t),null;case 19:if(ie(ae),s=t.memoizedState,s===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Ci(s,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=qo(e),l!==null){for(t.flags|=128,Ci(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Jr&&(t.flags|=128,r=!0,Ci(s,!1),t.lanes=4194304)}else{if(!r)if(e=qo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!se)return Ie(t),null}else 2*fe()-s.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,Ci(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Zu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function u1(e,t){switch(Au(t),t.tag){case 1:return Ke(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),ie(qe),ie(Ae),Bu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $u(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return Xr(),null;case 10:return zu(t.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var oo=!1,Pe=!1,d1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function zc(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Np=!1;function h1(e,t){if(wc=Oo,e=$g(),Pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,h=0,f=0,m=e,x=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==s||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(S=m.firstChild)!==null;)x=m,m=S;for(;;){if(m===e)break t;if(x===n&&++h===i&&(c=l),x===s&&++f===r&&(u=l),(S=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=S}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:e,selectionRange:n},Oo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var I=E.memoizedProps,O=E.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?I:pt(t.type,I),O);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(T){ue(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return E=Np,Np=!1,E}function Vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&zc(t,n,s)}i=i.next}while(i!==r)}}function Na(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zm(e){var t=e.alternate;t!==null&&(e.alternate=null,zm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[ss],delete t[Ec],delete t[G0],delete t[X0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mm(e){return e.tag===5||e.tag===3||e.tag===4}function Cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}var ke=null,ft=!1;function fn(e,t,n){for(n=n.child;n!==null;)Um(e,t,n),n=n.sibling}function Um(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:Pe||Ar(n,t);case 6:var r=ke,i=ft;ke=null,fn(e,t,n),ke=r,ft=i,ke!==null&&(ft?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ft?(e=ke,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),es(e)):Pl(ke,n.stateNode));break;case 4:r=ke,i=ft,ke=n.stateNode.containerInfo,ft=!0,fn(e,t,n),ke=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&zc(n,t,l),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Pe&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ue(n,t,c)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,fn(e,t,n),Pe=r):fn(e,t,n);break;default:fn(e,t,n)}}function Tp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new d1),t.forEach(function(r){var i=b1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:ke=c.stateNode,ft=!1;break e;case 3:ke=c.stateNode.containerInfo,ft=!0;break e;case 4:ke=c.stateNode.containerInfo,ft=!0;break e}c=c.return}if(ke===null)throw Error(M(160));Um(s,l,i),ke=null,ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ue(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fm(t,e),t=t.sibling}function Fm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Et(e),r&4){try{Vi(3,e,e.return),Na(3,e)}catch(I){ue(e,e.return,I)}try{Vi(5,e,e.return)}catch(I){ue(e,e.return,I)}}break;case 1:ht(t,e),Et(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(ht(t,e),Et(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{Yi(i,"")}catch(I){ue(e,e.return,I)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&lg(i,s),uc(c,l);var h=uc(c,s);for(l=0;l<u.length;l+=2){var f=u[l],m=u[l+1];f==="style"?pg(i,m):f==="dangerouslySetInnerHTML"?dg(i,m):f==="children"?Yi(i,m):yu(i,f,m,h)}switch(c){case"input":sc(i,s);break;case"textarea":cg(i,s);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Lr(i,!!s.multiple,S,!1):x!==!!s.multiple&&(s.defaultValue!=null?Lr(i,!!s.multiple,s.defaultValue,!0):Lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ss]=s}catch(I){ue(e,e.return,I)}}break;case 6:if(ht(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(I){ue(e,e.return,I)}}break;case 3:if(ht(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(t.containerInfo)}catch(I){ue(e,e.return,I)}break;case 4:ht(t,e),Et(e);break;case 13:ht(t,e),Et(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ju=fe())),r&4&&Tp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(h=Pe)||f,ht(t,e),Pe=h):ht(t,e),Et(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(m=$=f;$!==null;){switch(x=$,S=x.child,x.tag){case 0:case 11:case 14:case 15:Vi(4,x,x.return);break;case 1:Ar(x,x.return);var E=x.stateNode;if(typeof E.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(I){ue(r,n,I)}}break;case 5:Ar(x,x.return);break;case 22:if(x.memoizedState!==null){Pp(m);continue}}S!==null?(S.return=x,$=S):Pp(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=hg("display",l))}catch(I){ue(e,e.return,I)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(I){ue(e,e.return,I)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ht(t,e),Et(e),r&4&&Tp(e);break;case 21:break;default:ht(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yi(i,""),r.flags&=-33);var s=Cp(e);Fc(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Cp(e);Uc(e,c,l);break;default:throw Error(M(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function p1(e,t,n){$=e,$m(e)}function $m(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||oo;if(!l){var c=i.alternate,u=c!==null&&c.memoizedState!==null||Pe;c=oo;var h=Pe;if(oo=l,(Pe=u)&&!h)for($=i;$!==null;)l=$,u=l.child,l.tag===22&&l.memoizedState!==null?Rp(i):u!==null?(u.return=l,$=u):Rp(i);for(;s!==null;)$=s,$m(s),s=s.sibling;$=i,oo=c,Pe=h}Ip(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Ip(e)}}function Ip(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Na(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&fp(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&es(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Pe||t.flags&512&&Mc(t)}catch(x){ue(t,t.return,x)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Pp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Rp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Na(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ue(t,i,u)}}var s=t.return;try{Mc(t)}catch(u){ue(t,s,u)}break;case 5:var l=t.return;try{Mc(t)}catch(u){ue(t,l,u)}}}catch(u){ue(t,t.return,u)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var f1=Math.ceil,Xo=an.ReactCurrentDispatcher,Xu=an.ReactCurrentOwner,lt=an.ReactCurrentBatchConfig,G=0,be=null,me=null,Ee=0,Je=0,Dr=Vn(0),xe=0,ds=null,lr=0,Ca=0,Yu=0,Hi=null,Be=null,Ju=0,Jr=1/0,Ht=null,Yo=!1,$c=null,An=null,ao=!1,jn=null,Jo=0,Wi=0,Bc=null,_o=-1,ko=0;function Me(){return G&6?fe():_o!==-1?_o:_o=fe()}function Dn(e){return e.mode&1?G&2&&Ee!==0?Ee&-Ee:J0.transition!==null?(ko===0&&(ko=jg()),ko):(e=J,e!==0||(e=window.event,e=e===void 0?16:Rg(e.type)),e):1}function xt(e,t,n,r){if(50<Wi)throw Wi=0,Bc=null,Error(M(185));xs(e,n,r),(!(G&2)||e!==be)&&(e===be&&(!(G&2)&&(Ca|=n),xe===4&&xn(e,Ee)),Ge(e,r),n===1&&G===0&&!(t.mode&1)&&(Jr=fe()+500,Ea&&Hn()))}function Ge(e,t){var n=e.callbackNode;Jx(e,t);var r=Do(e,e===be?Ee:0);if(r===0)n!==null&&$h(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$h(n),t===1)e.tag===0?Y0(Ap.bind(null,e)):Jg(Ap.bind(null,e)),q0(function(){!(G&6)&&Hn()}),n=null;else{switch(Sg(r)){case 1:n=ku;break;case 4:n=kg;break;case 16:n=Ao;break;case 536870912:n=Eg;break;default:n=Ao}n=Xm(n,Bm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bm(e,t){if(_o=-1,ko=0,G&6)throw Error(M(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=Do(e,e===be?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var i=G;G|=2;var s=Hm();(be!==e||Ee!==t)&&(Ht=null,Jr=fe()+500,rr(e,t));do try{v1();break}catch(c){Vm(e,c)}while(!0);Lu(),Xo.current=s,G=i,me!==null?t=0:(be=null,Ee=0,t=xe)}if(t!==0){if(t===2&&(i=gc(e),i!==0&&(r=i,t=Vc(e,i))),t===1)throw n=ds,rr(e,0),xn(e,r),Ge(e,fe()),n;if(t===6)xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!g1(i)&&(t=Qo(e,r),t===2&&(s=gc(e),s!==0&&(r=s,t=Vc(e,s))),t===1))throw n=ds,rr(e,0),xn(e,r),Ge(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Qn(e,Be,Ht);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=Ju+500-fe(),10<t)){if(Do(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kc(Qn.bind(null,e,Be,Ht),t);break}Qn(e,Be,Ht);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-yt(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f1(r/1960))-r,10<r){e.timeoutHandle=kc(Qn.bind(null,e,Be,Ht),r);break}Qn(e,Be,Ht);break;case 5:Qn(e,Be,Ht);break;default:throw Error(M(329))}}}return Ge(e,fe()),e.callbackNode===n?Bm.bind(null,e):null}function Vc(e,t){var n=Hi;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=Be,Be=n,t!==null&&Hc(t)),e}function Hc(e){Be===null?Be=e:Be.push.apply(Be,e)}function g1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Yu,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Ap(e){if(G&6)throw Error(M(327));$r();var t=Do(e,0);if(!(t&1))return Ge(e,fe()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=gc(e);r!==0&&(t=r,n=Vc(e,r))}if(n===1)throw n=ds,rr(e,0),xn(e,t),Ge(e,fe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,Be,Ht),Ge(e,fe()),null}function Qu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Jr=fe()+500,Ea&&Hn())}}function cr(e){jn!==null&&jn.tag===0&&!(G&6)&&$r();var t=G;G|=1;var n=lt.transition,r=J;try{if(lt.transition=null,J=1,e)return e()}finally{J=r,lt.transition=n,G=t,!(G&6)&&Hn()}}function Zu(){Je=Dr.current,ie(Dr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,W0(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:Xr(),ie(qe),ie(Ae),Bu();break;case 5:$u(r);break;case 4:Xr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:zu(r.type._context);break;case 22:case 23:Zu()}n=n.return}if(be=e,me=e=On(e.current,null),Ee=Je=t,xe=0,ds=null,Yu=Ca=lr=0,Be=Hi=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}tr=null}return e}function Vm(e,t){do{var n=me;try{if(Lu(),xo.current=Go,Ko){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(ar=0,we=ye=le=null,Bi=!1,ls=0,Xu.current=null,n===null||n.return===null){xe=1,ds=t,me=null;break}e:{var s=e,l=n.return,c=n,u=t;if(t=Ee,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=c,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var x=f.alternate;x?(f.updateQueue=x.updateQueue,f.memoizedState=x.memoizedState,f.lanes=x.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=wp(l);if(S!==null){S.flags&=-257,bp(S,l,c,s,t),S.mode&1&&xp(s,h,t),t=S,u=h;var E=t.updateQueue;if(E===null){var I=new Set;I.add(u),t.updateQueue=I}else E.add(u);break e}else{if(!(t&1)){xp(s,h,t),ed();break e}u=Error(M(426))}}else if(se&&c.mode&1){var O=wp(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),bp(O,l,c,s,t),Du(Yr(u,c));break e}}s=u=Yr(u,c),xe!==4&&(xe=2),Hi===null?Hi=[s]:Hi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var b=Sm(s,u,t);pp(s,b);break e;case 1:c=u;var y=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(An===null||!An.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var T=Nm(s,c,t);pp(s,T);break e}}s=s.return}while(s!==null)}qm(n)}catch(A){t=A,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Hm(){var e=Xo.current;return Xo.current=Go,e===null?Go:e}function ed(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(lr&268435455)&&!(Ca&268435455)||xn(be,Ee)}function Qo(e,t){var n=G;G|=2;var r=Hm();(be!==e||Ee!==t)&&(Ht=null,rr(e,t));do try{m1();break}catch(i){Vm(e,i)}while(!0);if(Lu(),G=n,Xo.current=r,me!==null)throw Error(M(261));return be=null,Ee=0,xe}function m1(){for(;me!==null;)Wm(me)}function v1(){for(;me!==null&&!Bx();)Wm(me)}function Wm(e){var t=Gm(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?qm(e):me=t,Xu.current=null}function qm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=u1(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(n=c1(n,t,Je),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);xe===0&&(xe=5)}function Qn(e,t,n){var r=J,i=lt.transition;try{lt.transition=null,J=1,y1(e,t,n,r)}finally{lt.transition=i,J=r}return null}function y1(e,t,n,r){do $r();while(jn!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qx(e,s),e===be&&(me=be=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,Xm(Ao,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var l=J;J=1;var c=G;G|=4,Xu.current=null,h1(e,n),Fm(n,e),M0(bc),Oo=!!wc,bc=wc=null,e.current=n,p1(n),Vx(),G=c,J=l,lt.transition=s}else e.current=n;if(ao&&(ao=!1,jn=e,Jo=i),s=e.pendingLanes,s===0&&(An=null),qx(n.stateNode),Ge(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,e=$c,$c=null,e;return Jo&1&&e.tag!==0&&$r(),s=e.pendingLanes,s&1?e===Bc?Wi++:(Wi=0,Bc=e):Wi=0,Hn(),null}function $r(){if(jn!==null){var e=Sg(Jo),t=lt.transition,n=J;try{if(lt.transition=null,J=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,Jo=0,G&6)throw Error(M(331));var i=G;for(G|=4,$=e.current;$!==null;){var s=$,l=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Vi(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var x=f.sibling,S=f.return;if(zm(f),f===h){$=null;break}if(x!==null){x.return=S,$=x;break}$=S}}}var E=s.alternate;if(E!==null){var I=E.child;if(I!==null){E.child=null;do{var O=I.sibling;I.sibling=null,I=O}while(I!==null)}}$=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,$=l;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vi(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,$=b;break e}$=s.return}}var y=e.current;for($=y;$!==null;){l=$;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,$=w;else e:for(l=y;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Na(9,c)}}catch(A){ue(c,c.return,A)}if(c===l){$=null;break e}var T=c.sibling;if(T!==null){T.return=c.return,$=T;break e}$=c.return}}if(G=i,Hn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(xa,e)}catch{}r=!0}return r}finally{J=n,lt.transition=t}}return!1}function Dp(e,t,n){t=Yr(n,t),t=Sm(e,t,1),e=Rn(e,t,1),t=Me(),e!==null&&(xs(e,1,t),Ge(e,t))}function ue(e,t,n){if(e.tag===3)Dp(e,e,n);else for(;t!==null;){if(t.tag===3){Dp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Yr(n,e),e=Nm(t,e,1),t=Rn(t,e,1),e=Me(),t!==null&&(xs(t,1,e),Ge(t,e));break}}t=t.return}}function x1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Ee&n)===n&&(xe===4||xe===3&&(Ee&130023424)===Ee&&500>fe()-Ju?rr(e,0):Yu|=n),Ge(e,t)}function Km(e,t){t===0&&(e.mode&1?(t=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):t=1);var n=Me();e=nn(e,t),e!==null&&(xs(e,t,n),Ge(e,n))}function w1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Km(e,n)}function b1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Km(e,n)}var Gm;Gm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,l1(e,t,n);We=!!(e.flags&131072)}else We=!1,se&&t.flags&1048576&&Qg(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var i=qr(t,Ae.current);Fr(t,n),i=Hu(null,t,r,e,i,n);var s=Wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(s=!0,Fo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uu(t),i.updater=Sa,t.stateNode=i,i._reactInternals=t,Ic(t,r,e,n),t=Ac(null,t,r,!0,s,n)):(t.tag=0,se&&s&&Ru(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=k1(r),e=pt(r,e),i){case 0:t=Rc(null,t,r,e,n);break e;case 1:t=Ep(null,t,r,e,n);break e;case 11:t=_p(null,t,r,e,n);break e;case 14:t=kp(null,t,r,pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Rc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Ep(e,t,r,i,n);case 3:e:{if(Pm(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,im(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Yr(Error(M(423)),t),t=jp(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(M(424)),t),t=jp(e,t,r,n,i);break e}else for(Qe=Pn(t.stateNode.containerInfo.firstChild),Ze=t,se=!0,gt=null,n=nm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){t=rn(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return sm(t),e===null&&Nc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,_c(r,i)?l=null:s!==null&&_c(r,s)&&(t.flags|=32),Im(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&Nc(t),null;case 13:return Rm(e,t,n);case 4:return Fu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),_p(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,te(Vo,r._currentValue),r._currentValue=l,s!==null)if(wt(s.value,l)){if(s.children===i.children&&!qe.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Jt(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Cc(s.return,n,t),c.lanes|=n;break}u=u.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Cc(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=ct(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),kp(e,t,r,i,n);case 15:return Cm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),bo(e,t),t.tag=1,Ke(r)?(e=!0,Fo(t)):e=!1,Fr(t,n),jm(t,r,i),Ic(t,r,i,n),Ac(null,t,r,!0,e,n);case 19:return Am(e,t,n);case 22:return Tm(e,t,n)}throw Error(M(156,t.tag))};function Xm(e,t){return _g(e,t)}function _1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new _1(e,t,n,r)}function td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k1(e){if(typeof e=="function")return td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===bu)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")td(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Er:return ir(n.children,i,s,t);case xu:l=8,i|=8;break;case ec:return e=at(12,n,t,i|2),e.elementType=ec,e.lanes=s,e;case tc:return e=at(13,n,t,i),e.elementType=tc,e.lanes=s,e;case nc:return e=at(19,n,t,i),e.elementType=nc,e.lanes=s,e;case sg:return Ta(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rg:l=10;break e;case ig:l=9;break e;case wu:l=11;break e;case bu:l=14;break e;case mn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=at(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ir(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ta(e,t,n,r){return e=at(22,e,r,t),e.elementType=sg,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nd(e,t,n,r,i,s,l,c,u){return e=new E1(e,t,n,c,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=at(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(s),e}function j1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ym(e){if(!e)return Fn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Yg(e,n,t)}return t}function Jm(e,t,n,r,i,s,l,c,u){return e=nd(n,r,!0,e,i,s,l,c,u),e.context=Ym(null),n=e.current,r=Me(),i=Dn(n),s=Jt(r,i),s.callback=t??null,Rn(n,s,i),e.current.lanes=i,xs(e,i,r),Ge(e,r),e}function Ia(e,t,n,r){var i=t.current,s=Me(),l=Dn(i);return n=Ym(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,l),e!==null&&(xt(e,i,l,s),yo(e,i,l)),l}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rd(e,t){Op(e,t),(e=e.alternate)&&Op(e,t)}function S1(){return null}var Qm=typeof reportError=="function"?reportError:function(e){console.error(e)};function id(e){this._internalRoot=e}Pa.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ia(e,t,null,null)};Pa.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){Ia(null,e,null,null)}),t[tn]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Pg(e)}};function sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function N1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Zo(l);s.call(h)}}var l=Jm(t,r,e,0,null,!1,!1,"",Lp);return e._reactRootContainer=l,e[tn]=l.current,rs(e.nodeType===8?e.parentNode:e),cr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=Zo(u);c.call(h)}}var u=nd(e,0,!1,null,null,!1,!1,"",Lp);return e._reactRootContainer=u,e[tn]=u.current,rs(e.nodeType===8?e.parentNode:e),cr(function(){Ia(t,u,n,r)}),u}function Aa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var c=i;i=function(){var u=Zo(l);c.call(u)}}Ia(t,l,e,i)}else l=N1(n,t,e,i,r);return Zo(l)}Ng=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ai(t.pendingLanes);n!==0&&(Eu(t,n|1),Ge(t,fe()),!(G&6)&&(Jr=fe()+500,Hn()))}break;case 13:cr(function(){var r=nn(e,1);if(r!==null){var i=Me();xt(r,e,1,i)}}),rd(e,1)}};ju=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Me();xt(t,e,134217728,n)}rd(e,134217728)}};Cg=function(e){if(e.tag===13){var t=Dn(e),n=nn(e,t);if(n!==null){var r=Me();xt(n,e,t,r)}rd(e,t)}};Tg=function(){return J};Ig=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};hc=function(e,t,n){switch(t){case"input":if(sc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ka(r);if(!i)throw Error(M(90));ag(r),sc(r,i)}}}break;case"textarea":cg(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};mg=Qu;vg=cr;var C1={usingClientEntryPoint:!1,Events:[bs,Cr,ka,fg,gg,Qu]},Ti={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},T1={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||S1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{xa=lo.inject(T1),Ct=lo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sd(t))throw Error(M(200));return j1(e,t,null,n)};tt.createRoot=function(e,t){if(!sd(e))throw Error(M(299));var n=!1,r="",i=Qm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nd(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,rs(e.nodeType===8?e.parentNode:e),new id(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=wg(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return cr(e)};tt.hydrate=function(e,t,n){if(!Ra(t))throw Error(M(200));return Aa(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!sd(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Qm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Jm(t,null,e,1,n??null,i,!1,s,l),e[tn]=t.current,rs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pa(t)};tt.render=function(e,t,n){if(!Ra(t))throw Error(M(200));return Aa(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(M(40));return e._reactRootContainer?(cr(function(){Aa(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};tt.unstable_batchedUpdates=Qu;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ra(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Aa(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zm)}catch(e){console.error(e)}}Zm(),Zf.exports=tt;var I1=Zf.exports,zp=I1;Ql.createRoot=zp.createRoot,Ql.hydrateRoot=zp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hs(){return hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hs.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Mp="popstate";function P1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:c}=r.location;return Wc("",{pathname:s,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ea(i)}return A1(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function od(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R1(){return Math.random().toString(36).substr(2,8)}function Up(e,t){return{usr:e.state,key:e.key,idx:t}}function Wc(e,t,n,r){return n===void 0&&(n=null),hs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?si(t):t,{state:n,key:t&&t.key||r||R1()})}function ea(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function si(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function A1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,c=Sn.Pop,u=null,h=f();h==null&&(h=0,l.replaceState(hs({},l.state,{idx:h}),""));function f(){return(l.state||{idx:null}).idx}function m(){c=Sn.Pop;let O=f(),b=O==null?null:O-h;h=O,u&&u({action:c,location:I.location,delta:b})}function x(O,b){c=Sn.Push;let y=Wc(I.location,O,b);h=f()+1;let w=Up(y,h),T=I.createHref(y);try{l.pushState(w,"",T)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(T)}s&&u&&u({action:c,location:I.location,delta:1})}function S(O,b){c=Sn.Replace;let y=Wc(I.location,O,b);h=f();let w=Up(y,h),T=I.createHref(y);l.replaceState(w,"",T),s&&u&&u({action:c,location:I.location,delta:0})}function E(O){let b=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof O=="string"?O:ea(O);return y=y.replace(/ $/,"%20"),ge(b,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,b)}let I={get action(){return c},get location(){return e(i,l)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Mp,m),u=O,()=>{i.removeEventListener(Mp,m),u=null}},createHref(O){return t(i,O)},createURL:E,encodeLocation(O){let b=E(O);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:x,replace:S,go(O){return l.go(O)}};return I}var Fp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fp||(Fp={}));function D1(e,t,n){return n===void 0&&(n="/"),O1(e,t,n)}function O1(e,t,n,r){let i=typeof t=="string"?si(t):t,s=ad(i.pathname||"/",n);if(s==null)return null;let l=ev(e);L1(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let h=G1(s);c=W1(l[u],h)}return c}function ev(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,c)=>{let u={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Ln([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ev(s.children,t,f,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:V1(h,s.index),routesMeta:f})};return e.forEach((s,l)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,l);else for(let u of tv(s.path))i(s,l,u)}),t}function tv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=tv(r.join("/")),c=[];return c.push(...l.map(u=>u===""?s:[s,u].join("/"))),i&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function L1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:H1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const z1=/^:[\w-]+$/,M1=3,U1=2,F1=1,$1=10,B1=-2,$p=e=>e==="*";function V1(e,t){let n=e.split("/"),r=n.length;return n.some($p)&&(r+=B1),t&&(r+=U1),n.filter(i=>!$p(i)).reduce((i,s)=>i+(z1.test(s)?M1:s===""?F1:$1),r)}function H1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function W1(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,f=s==="/"?t:t.slice(s.length)||"/",m=q1({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),x=u.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:Ln([s,m.pathname]),pathnameBase:Z1(Ln([s,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(s=Ln([s,m.pathnameBase]))}return l}function q1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=K1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:x,isOptional:S}=f;if(x==="*"){let I=c[m]||"";l=s.slice(0,s.length-I.length).replace(/(.)\/+$/,"$1")}const E=c[m];return S&&!E?h[x]=void 0:h[x]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:l,pattern:e}}function K1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),od(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function G1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return od(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ad(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const X1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y1=e=>X1.test(e);function J1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?si(e):e,s;if(n)if(Y1(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),od(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Bp(n.substring(1),"/"):s=Bp(n,t)}else s=t;return{pathname:s,search:ew(r),hash:tw(i)}}function Bp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ld(e,t){let n=Q1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=si(e):(i=hs({},e),ge(!i.pathname||!i.pathname.includes("?"),$l("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),$l("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),$l("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),m-=1;i.pathname=x.join("/")}c=m>=0?t[m]:"/"}let u=J1(i,c),h=l&&l!=="/"&&l.endsWith("/"),f=(s||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),Z1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ew=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nv=["post","put","patch","delete"];new Set(nv);const rw=["get",...nv];new Set(rw);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}const ud=R.createContext(null),iw=R.createContext(null),Wn=R.createContext(null),Da=R.createContext(null),ln=R.createContext({outlet:null,matches:[],isDataRoute:!1}),rv=R.createContext(null);function sw(e,t){let{relative:n}=t===void 0?{}:t;oi()||ge(!1);let{basename:r,navigator:i}=R.useContext(Wn),{hash:s,pathname:l,search:c}=ov(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ln([r,l])),i.createHref({pathname:u,search:c,hash:s})}function oi(){return R.useContext(Da)!=null}function cn(){return oi()||ge(!1),R.useContext(Da).location}function iv(e){R.useContext(Wn).static||R.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=R.useContext(ln);return e?yw():ow()}function ow(){oi()||ge(!1);let e=R.useContext(ud),{basename:t,future:n,navigator:r}=R.useContext(Wn),{matches:i}=R.useContext(ln),{pathname:s}=cn(),l=JSON.stringify(ld(i,n.v7_relativeSplatPath)),c=R.useRef(!1);return iv(()=>{c.current=!0}),R.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=cd(h,JSON.parse(l),s,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ln([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,l,s,e])}function sv(){let{matches:e}=R.useContext(ln),t=e[e.length-1];return t?t.params:{}}function ov(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.useContext(Wn),{matches:i}=R.useContext(ln),{pathname:s}=cn(),l=JSON.stringify(ld(i,r.v7_relativeSplatPath));return R.useMemo(()=>cd(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function aw(e,t){return lw(e,t)}function lw(e,t,n,r){oi()||ge(!1);let{navigator:i}=R.useContext(Wn),{matches:s}=R.useContext(ln),l=s[s.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let h=cn(),f;if(t){var m;let O=typeof t=="string"?si(t):t;u==="/"||(m=O.pathname)!=null&&m.startsWith(u)||ge(!1),f=O}else f=h;let x=f.pathname||"/",S=x;if(u!=="/"){let O=u.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(O.length).join("/")}let E=D1(e,{pathname:S}),I=pw(E&&E.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:Ln([u,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?u:Ln([u,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return t&&I?R.createElement(Da.Provider,{value:{location:ps({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Sn.Pop}},I):I}function cw(){let e=vw(),t=nw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,null)}const uw=R.createElement(cw,null);class dw extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(ln.Provider,{value:this.props.routeContext},R.createElement(rv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hw(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(ud);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(ln.Provider,{value:t},r)}function pw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let f=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||ge(!1),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let m=l[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:x,errors:S}=n,E=m.route.loader&&x[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||E){u=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((f,m,x)=>{let S,E=!1,I=null,O=null;n&&(S=c&&m.route.id?c[m.route.id]:void 0,I=m.route.errorElement||uw,u&&(h<0&&x===0?(xw("route-fallback"),E=!0,O=null):h===x&&(E=!0,O=m.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,x+1)),y=()=>{let w;return S?w=I:E?w=O:m.route.Component?w=R.createElement(m.route.Component,null):m.route.element?w=m.route.element:w=f,R.createElement(hw,{match:m,routeContext:{outlet:f,matches:b,isDataRoute:n!=null},children:w})};return n&&(m.route.ErrorBoundary||m.route.errorElement||x===0)?R.createElement(dw,{location:n.location,revalidation:n.revalidation,component:I,error:S,children:y(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):y()},null)}var av=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(av||{}),lv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lv||{});function fw(e){let t=R.useContext(ud);return t||ge(!1),t}function gw(e){let t=R.useContext(iw);return t||ge(!1),t}function mw(e){let t=R.useContext(ln);return t||ge(!1),t}function cv(e){let t=mw(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function vw(){var e;let t=R.useContext(rv),n=gw(),r=cv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function yw(){let{router:e}=fw(av.UseNavigateStable),t=cv(lv.UseNavigateStable),n=R.useRef(!1);return iv(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ps({fromRouteId:t},s)))},[e,t])}const Vp={};function xw(e,t,n){Vp[e]||(Vp[e]=!0)}function ww(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jo(e){let{to:t,replace:n,state:r,relative:i}=e;oi()||ge(!1);let{future:s,static:l}=R.useContext(Wn),{matches:c}=R.useContext(ln),{pathname:u}=cn(),h=_t(),f=cd(t,ld(c,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return R.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:i}),[h,m,i,n,r]),null}function pe(e){ge(!1)}function bw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:s,static:l=!1,future:c}=e;oi()&&ge(!1);let u=t.replace(/^\/*/,"/"),h=R.useMemo(()=>({basename:u,navigator:s,static:l,future:ps({v7_relativeSplatPath:!1},c)}),[u,c,s,l]);typeof r=="string"&&(r=si(r));let{pathname:f="/",search:m="",hash:x="",state:S=null,key:E="default"}=r,I=R.useMemo(()=>{let O=ad(f,u);return O==null?null:{location:{pathname:O,search:m,hash:x,state:S,key:E},navigationType:i}},[u,f,m,x,S,E,i]);return I==null?null:R.createElement(Wn.Provider,{value:h},R.createElement(Da.Provider,{children:n,value:I}))}function Hp(e){let{children:t,location:n}=e;return aw(qc(t),n)}new Promise(()=>{});function qc(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;let s=[...t,i];if(r.type===R.Fragment){n.push.apply(n,qc(r.props.children,s));return}r.type!==pe&&ge(!1),!r.props.index||!r.props.children||ge(!1);let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=qc(r.props.children,s)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kc(){return Kc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Kc.apply(this,arguments)}function _w(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ew(e,t){return e.button===0&&(!t||t==="_self")&&!kw(e)}function Gc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function jw(e,t){let n=Gc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Sw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nw="6";try{window.__reactRouterVersion=Nw}catch{}const Cw="startTransition",Wp=xx[Cw];function Tw(e){let{basename:t,children:n,future:r,window:i}=e,s=R.useRef();s.current==null&&(s.current=P1({window:i,v5Compat:!0}));let l=s.current,[c,u]=R.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},f=R.useCallback(m=>{h&&Wp?Wp(()=>u(m)):u(m)},[u,h]);return R.useLayoutEffect(()=>l.listen(f),[l,f]),R.useEffect(()=>ww(r),[r]),R.createElement(bw,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const Iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=R.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:l,state:c,target:u,to:h,preventScrollReset:f,viewTransition:m}=t,x=_w(t,Sw),{basename:S}=R.useContext(Wn),E,I=!1;if(typeof h=="string"&&Pw.test(h)&&(E=h,Iw))try{let w=new URL(window.location.href),T=h.startsWith("//")?new URL(w.protocol+h):new URL(h),A=ad(T.pathname,S);T.origin===w.origin&&A!=null?h=A+T.search+T.hash:I=!0}catch{}let O=sw(h,{relative:i}),b=Rw(h,{replace:l,state:c,target:u,preventScrollReset:f,relative:i,viewTransition:m});function y(w){r&&r(w),w.defaultPrevented||b(w)}return R.createElement("a",Kc({},x,{href:E||O,onClick:I||s?r:y,ref:n,target:u}))});var qp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(qp||(qp={}));var Kp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kp||(Kp={}));function Rw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:l,viewTransition:c}=t===void 0?{}:t,u=_t(),h=cn(),f=ov(e,{relative:l});return R.useCallback(m=>{if(Ew(m,n)){m.preventDefault();let x=r!==void 0?r:ea(h)===ea(f);u(e,{replace:x,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[h,u,f,r,i,n,e,s,l,c])}function Aw(e){let t=R.useRef(Gc(e)),n=R.useRef(!1),r=cn(),i=R.useMemo(()=>jw(r.search,n.current?null:t.current),[r.search]),s=_t(),l=R.useCallback((c,u)=>{const h=Gc(typeof c=="function"?c(i):c);n.current=!0,s("?"+h,u)},[s,i]);return[i,l]}const uv=R.createContext(void 0),rt=()=>{const e=R.useContext(uv);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},Dw=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},Ow=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},Lw=({children:e})=>{const[t,n]=R.useState(null),[r,i]=R.useState(!0),[s,l]=R.useState(null),c=async()=>{try{i(!0),l(null);const{type:h,value:f}=Ow(),m=h==="subdomain"?`/api/tenants/by-subdomain/${f}`:`/api/tenants/by-domain/${encodeURIComponent(f)}`,x=await fetch(`http://localhost:3001${m}`);if(!x.ok)throw x.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const S=await x.json();if(S.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(S.status==="cancelled")throw new Error("Cuenta cancelada.");n(S),Dw(S.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{i(!1)}};R.useEffect(()=>{c()},[]);const u=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return o.jsx(uv.Provider,{value:{tenant:t,loading:r,error:s,isWhiteLabel:u,refreshTenant:c},children:e})};var Gp={};/**
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
 */const dv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],l=e[n++],c=e[n++],u=((i&7)<<18|(s&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|l&63)}}return t.join("")},hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],l=i+1<e.length,c=l?e[i+1]:0,u=i+2<e.length,h=u?e[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let x=(c&15)<<2|h>>6,S=h&63;u||(S=64,l||(x=64)),r.push(n[f],n[m],n[x],n[S])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new Mw;const x=s<<2|c>>4;if(r.push(x),h!==64){const S=c<<4&240|h>>2;if(r.push(S),m!==64){const E=h<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uw=function(e){const t=dv(e);return hv.encodeByteArray(t,!0)},ta=function(e){return Uw(e).replace(/\./g,"")},pv=function(e){try{return hv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Fw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $w=()=>Fw().__FIREBASE_DEFAULTS__,Bw=()=>{if(typeof process>"u"||typeof Gp>"u")return;const e=Gp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pv(e[1]);return t&&JSON.parse(t)},dd=()=>{try{return $w()||Bw()||Vw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},fv=e=>{var t,n;return(n=(t=dd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},gv=e=>{const t=fv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},mv=()=>{var e;return(e=dd())===null||e===void 0?void 0:e.config},vv=e=>{var t;return(t=dd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Hw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function yv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ta(JSON.stringify(n)),ta(JSON.stringify(l)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ww(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function qw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Gw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xw(){const e=Ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Yw(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Qw="FirebaseError";class Dt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Qw,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],l=s?Zw(s,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Dt(i,c,r)}}function Zw(e,t){return e.replace(e2,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const e2=/\{\$([^}]+)}/g;function t2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function na(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],l=t[i];if(Xp(s)&&Xp(l)){if(!na(s,l))return!1}else if(s!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xp(e){return e!==null&&typeof e=="object"}/**
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
 */function Es(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Oi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Li(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function n2(e,t){const n=new r2(e,t);return n.subscribe.bind(n)}class r2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");i2(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Bl),i.error===void 0&&(i.error=Bl),i.complete===void 0&&(i.complete=Bl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Bl(){}/**
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
 */function kt(e){return e&&e._delegate?e._delegate:e}class $n{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class s2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(a2(t))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zn){return this.instances.has(t)}getOptions(t=Zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&t(l,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o2(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zn){return this.component?this.component.multipleInstances?t:Zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o2(e){return e===Zn?void 0:e}function a2(e){return e.instantiationMode==="EAGER"}/**
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
 */class l2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new s2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const c2={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},u2=Y.INFO,d2={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},h2=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=d2[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class hd{constructor(t){this.name=t,this._logLevel=u2,this._logHandler=h2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?c2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const p2=(e,t)=>t.some(n=>e instanceof n);let Yp,Jp;function f2(){return Yp||(Yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g2(){return Jp||(Jp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xv=new WeakMap,Xc=new WeakMap,wv=new WeakMap,Vl=new WeakMap,pd=new WeakMap;function m2(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",l)},s=()=>{n(zn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&xv.set(n,e)}).catch(()=>{}),pd.set(t,e),t}function v2(e){if(Xc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",l),e.removeEventListener("abort",l)},s=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",l),e.addEventListener("abort",l)});Xc.set(e,t)}let Yc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function y2(e){Yc=e(Yc)}function x2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Hl(this),t,...n);return wv.set(r,t.sort?t.sort():[t]),zn(r)}:g2().includes(e)?function(...t){return e.apply(Hl(this),t),zn(xv.get(this))}:function(...t){return zn(e.apply(Hl(this),t))}}function w2(e){return typeof e=="function"?x2(e):(e instanceof IDBTransaction&&v2(e),p2(e,f2())?new Proxy(e,Yc):e)}function zn(e){if(e instanceof IDBRequest)return m2(e);if(Vl.has(e))return Vl.get(e);const t=w2(e);return t!==e&&(Vl.set(e,t),pd.set(t,e)),t}const Hl=e=>pd.get(e);function b2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const l=indexedDB.open(e,t),c=zn(l);return r&&l.addEventListener("upgradeneeded",u=>{r(zn(l.result),u.oldVersion,u.newVersion,zn(l.transaction),u)}),n&&l.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const _2=["get","getKey","getAll","getAllKeys","count"],k2=["put","add","delete","clear"],Wl=new Map;function Qp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Wl.get(t))return Wl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_2.includes(n)))return;const s=async function(l,...c){const u=this.transaction(l,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&u.done]))[0]};return Wl.set(t,s),s}y2(e=>({...e,get:(t,n,r)=>Qp(t,n)||e.get(t,n,r),has:(t,n)=>!!Qp(t,n)||e.has(t,n)}));/**
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
 */class E2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function j2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jc="@firebase/app",Zp="0.10.13";/**
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
 */const sn=new hd("@firebase/app"),S2="@firebase/app-compat",N2="@firebase/analytics-compat",C2="@firebase/analytics",T2="@firebase/app-check-compat",I2="@firebase/app-check",P2="@firebase/auth",R2="@firebase/auth-compat",A2="@firebase/database",D2="@firebase/data-connect",O2="@firebase/database-compat",L2="@firebase/functions",z2="@firebase/functions-compat",M2="@firebase/installations",U2="@firebase/installations-compat",F2="@firebase/messaging",$2="@firebase/messaging-compat",B2="@firebase/performance",V2="@firebase/performance-compat",H2="@firebase/remote-config",W2="@firebase/remote-config-compat",q2="@firebase/storage",K2="@firebase/storage-compat",G2="@firebase/firestore",X2="@firebase/vertexai-preview",Y2="@firebase/firestore-compat",J2="firebase",Q2="10.14.1";/**
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
 */const Qc="[DEFAULT]",Z2={[Jc]:"fire-core",[S2]:"fire-core-compat",[C2]:"fire-analytics",[N2]:"fire-analytics-compat",[I2]:"fire-app-check",[T2]:"fire-app-check-compat",[P2]:"fire-auth",[R2]:"fire-auth-compat",[A2]:"fire-rtdb",[D2]:"fire-data-connect",[O2]:"fire-rtdb-compat",[L2]:"fire-fn",[z2]:"fire-fn-compat",[M2]:"fire-iid",[U2]:"fire-iid-compat",[F2]:"fire-fcm",[$2]:"fire-fcm-compat",[B2]:"fire-perf",[V2]:"fire-perf-compat",[H2]:"fire-rc",[W2]:"fire-rc-compat",[q2]:"fire-gcs",[K2]:"fire-gcs-compat",[G2]:"fire-fst",[Y2]:"fire-fst-compat",[X2]:"fire-vertex","fire-js":"fire-js",[J2]:"fire-js-all"};/**
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
 */const ra=new Map,eb=new Map,Zc=new Map;function ef(e,t){try{e.container.addComponent(t)}catch(n){sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ur(e){const t=e.name;if(Zc.has(t))return sn.debug(`There were multiple attempts to register component ${t}.`),!1;Zc.set(t,e);for(const n of ra.values())ef(n,e);for(const n of eb.values())ef(n,e);return!0}function Oa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nt(e){return e.settings!==void 0}/**
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
 */const tb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new ks("app","Firebase",tb);/**
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
 */class nb{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=Q2;function bv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=mv()),!n)throw Mn.create("no-options");const s=ra.get(i);if(s){if(na(n,s.options)&&na(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const l=new l2(i);for(const u of Zc.values())l.addComponent(u);const c=new nb(n,r,l);return ra.set(i,c),c}function fd(e=Qc){const t=ra.get(e);if(!t&&e===Qc&&mv())return bv();if(!t)throw Mn.create("no-app",{appName:e});return t}function It(e,t,n){var r;let i=(r=Z2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=t.match(/\s|\//);if(s||l){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sn.warn(c.join(" "));return}ur(new $n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const rb="firebase-heartbeat-database",ib=1,fs="firebase-heartbeat-store";let ql=null;function _v(){return ql||(ql=b2(rb,ib,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),ql}async function sb(e){try{const n=(await _v()).transaction(fs),r=await n.objectStore(fs).get(kv(e));return await n.done,r}catch(t){if(t instanceof Dt)sn.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sn.warn(n.message)}}}async function tf(e,t){try{const r=(await _v()).transaction(fs,"readwrite");await r.objectStore(fs).put(t,kv(e)),await r.done}catch(n){if(n instanceof Dt)sn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function kv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ob=1024,ab=30*24*60*60*1e3;class lb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ub(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=ab}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nf(),{heartbeatsToSend:r,unsentEntries:i}=cb(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sn.warn(n),""}}}function nf(){return new Date().toISOString().substring(0,10)}function cb(e,t=ob){const n=[];let r=e.slice();for(const i of e){const s=n.find(l=>l.agent===i.agent);if(s){if(s.dates.push(i.date),rf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ub{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yw()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rf(e){return ta(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function db(e){ur(new $n("platform-logger",t=>new E2(t),"PRIVATE")),ur(new $n("heartbeat",t=>new lb(t),"PRIVATE")),It(Jc,Zp,e),It(Jc,Zp,"esm2017"),It("fire-js","")}db("");function gd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hb=Ev,jv=new ks("auth","Firebase",Ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new hd("@firebase/auth");function pb(e,...t){ia.logLevel<=Y.WARN&&ia.warn(`Auth (${mr}): ${e}`,...t)}function So(e,...t){ia.logLevel<=Y.ERROR&&ia.error(`Auth (${mr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,...t){throw md(e,...t)}function Pt(e,...t){return md(e,...t)}function Sv(e,t,n){const r=Object.assign(Object.assign({},hb()),{[t]:n});return new ks("auth","Firebase",r).create(t,{appName:e.name})}function Qt(e){return Sv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function md(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return jv.create(e,...t)}function V(e,t,...n){if(!e)throw md(t,...n)}function Gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw So(t),new Error(t)}function on(e,t){e||Gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function fb(){return sf()==="http:"||sf()==="https:"}function sf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fb()||Kw()||"connection"in navigator)?navigator.onLine:!0}function mb(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,n){this.shortDelay=t,this.longDelay=n,on(n>t,"Short delay should be less than long delay!"),this.isMobile=Ww()||Gw()}get(){return gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(e,t){on(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new js(3e4,6e4);function un(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ot(e,t,n,r,i={}){return Cv(e,i,async()=>{let s={},l={};r&&(t==="GET"?l=r:s={body:JSON.stringify(r)});const c=Es(Object.assign({key:e.config.apiKey},l)).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:u},s);return qw()||(h.referrerPolicy="no-referrer"),Nv.fetch()(Tv(e,e.config.apiHost,n,c),h)})}async function Cv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},vb),t);try{const i=new wb(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await s.json();if("needConfirmation"in l)throw co(e,"account-exists-with-different-credential",l);if(s.ok&&!("errorMessage"in l))return l;{const c=s.ok?l.errorMessage:l.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw co(e,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw co(e,"email-already-in-use",l);if(u==="USER_DISABLED")throw co(e,"user-disabled",l);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sv(e,f,h);bt(e,f)}}catch(i){if(i instanceof Dt)throw i;bt(e,"network-request-failed",{message:String(i)})}}async function Ss(e,t,n,r,i={}){const s=await Ot(e,t,n,r,i);return"mfaPendingCredential"in s&&bt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Tv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?vd(e.config,i):`${e.config.apiScheme}://${i}`}function xb(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wb{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),yb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function co(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(e,t,r);return i.customData._tokenResponse=n,i}function of(e){return e!==void 0&&e.enterprise!==void 0}class bb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return xb(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function _b(e,t){return Ot(e,"GET","/v2/recaptchaConfig",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(e,t){return Ot(e,"POST","/v1/accounts:delete",t)}async function Iv(e,t){return Ot(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Eb(e,t=!1){const n=kt(e),r=await n.getIdToken(t),i=yd(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,l=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qi(Kl(i.auth_time)),issuedAtTime:qi(Kl(i.iat)),expirationTime:qi(Kl(i.exp)),signInProvider:l||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kl(e){return Number(e)*1e3}function yd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=pv(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function af(e){const t=yd(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Dt&&jb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function jb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qr(e,Iv(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const l=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Pv(s.providerUserInfo):[],c=Cb(e.providerData,l),u=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new tu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,m)}async function Nb(e){const t=kt(e);await sa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Cb(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Pv(e){return e.map(t=>{var{providerId:n}=t,r=gd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(e,t){const n=await Cv(e,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,l=Tv(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Nv.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ib(e,t){return Ot(e,"POST","/v2/accounts:revokeToken",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):af(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=af(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tb(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,l=new Br;return r&&(V(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:t}),l.expirationTime=s),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Xt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=gd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Eb(this,t)}reload(){return Nb(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Xt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Qt(this.auth));const t=await this.getIdToken();return await Qr(this,kb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,l,c,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,x=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(l=n.photoURL)!==null&&l!==void 0?l:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,b=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:T,isAnonymous:A,providerData:z,stsTokenManager:_}=n;V(w&&_,t,"internal-error");const v=Br.fromJSON(this.name,_);V(typeof w=="string",t,"internal-error"),gn(m,t.name),gn(x,t.name),V(typeof T=="boolean",t,"internal-error"),V(typeof A=="boolean",t,"internal-error"),gn(S,t.name),gn(E,t.name),gn(I,t.name),gn(O,t.name),gn(b,t.name),gn(y,t.name);const k=new Xt({uid:w,auth:t,email:x,emailVerified:T,displayName:m,isAnonymous:A,photoURL:E,phoneNumber:S,tenantId:I,stsTokenManager:v,createdAt:b,lastLoginAt:y});return z&&Array.isArray(z)&&(k.providerData=z.map(N=>Object.assign({},N))),O&&(k._redirectEventId=O),k}static async _fromIdTokenResponse(t,n,r=!1){const i=new Br;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await sa(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Pv(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Br;c.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map;function Yt(e){on(e instanceof Function,"Expected a class definition");let t=lf.get(e);return t?(on(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lf.set(e,t),t)}/**
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
 */class Rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Rv.type="NONE";const cf=Rv;/**
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
 */function No(e,t,n){return`firebase:${e}:${t}:${n}`}class Vr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=No(this.userKey,i.apiKey,s),this.fullPersistenceKey=No("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Xt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Vr(Yt(cf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Yt(cf);const l=No(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const f=await h._get(l);if(f){const m=Xt._fromJSON(t,f);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vr(s,t,r):(s=u[0],c&&await s._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(l)}catch{}})),new Vr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Av(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mv(t))return"Blackberry";if(Uv(t))return"Webos";if(Dv(t))return"Safari";if((t.includes("chrome/")||Ov(t))&&!t.includes("edge/"))return"Chrome";if(zv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Av(e=Ue()){return/firefox\//i.test(e)}function Dv(e=Ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ov(e=Ue()){return/crios\//i.test(e)}function Lv(e=Ue()){return/iemobile/i.test(e)}function zv(e=Ue()){return/android/i.test(e)}function Mv(e=Ue()){return/blackberry/i.test(e)}function Uv(e=Ue()){return/webos/i.test(e)}function xd(e=Ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pb(e=Ue()){var t;return xd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Rb(){return Xw()&&document.documentMode===10}function Fv(e=Ue()){return xd(e)||zv(e)||Uv(e)||Mv(e)||/windows phone/i.test(e)||Lv(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(e,t=[]){let n;switch(e){case"Browser":n=uf(Ue());break;case"Worker":n=`${uf(Ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
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
 */class Ab{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((l,c)=>{try{const u=t(s);l(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Db(e,t={}){return Ot(e,"GET","/v2/passwordPolicy",un(e,t))}/**
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
 */const Ob=6;class Lb{constructor(t){var n,r,i,s;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Ob,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,l,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new Ab(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Iv(this,{idToken:t}),r=await Xt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Nt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!l||l===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await sa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=mb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nt(this.app))return Promise.reject(Qt(this));const n=t?kt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nt(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Db(this),n=new Lb(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ks("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ib(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{l||s(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{l=!0,u()}}else{const u=t.addObserver(n);return()=>{l=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$v(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&pb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qn(e){return kt(e)}class df{constructor(t){this.auth=t,this.observer=null,this.addObserver=n2(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(e){La=e}function Bv(e){return La.loadJS(e)}function Ub(){return La.recaptchaEnterpriseScript}function Fb(){return La.gapiScript}function $b(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Bb="recaptcha-enterprise",Vb="NO_RECAPTCHA";class Hb{constructor(t){this.type=Bb,this.auth=qn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(l,c)=>{_b(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new bb(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,l(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,l,c){const u=window.grecaptcha;of(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(h=>{l(h)}).catch(()=>{l(Vb)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,l)=>{r(this.auth).then(c=>{if(!n&&of(window.grecaptcha))i(c,s,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ub();u.length!==0&&(u+=c),Bv(u).then(()=>{i(c,s,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function hf(e,t,n,r=!1){const i=new Hb(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:s}):Object.assign(l,{captchaResponse:s}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function oa(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await hf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await hf(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(e,t){const n=Oa(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(na(s,t??{}))return i;bt(i,"already-initialized")}return n.initialize({options:t})}function qb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Kb(e,t,n){const r=qn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Vv(t),{host:l,port:c}=Gb(t),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Xb()}function Vv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Gb(e){const t=Vv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pf(r.substr(s.length+1))}}else{const[s,l]=r.split(":");return{host:s,port:pf(l)}}}function pf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Xb(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(t){return Gt("not implemented")}_linkToIdToken(t,n){return Gt("not implemented")}_getReauthenticationResolver(t){return Gt("not implemented")}}async function Yb(e,t){return Ot(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jb(e,t){return Ss(e,"POST","/v1/accounts:signInWithPassword",un(e,t))}async function Qb(e,t){return Ot(e,"POST","/v1/accounts:sendOobCode",un(e,t))}async function Zb(e,t){return Qb(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(e,t){return Ss(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}async function t_(e,t){return Ss(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends wd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new gs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new gs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oa(t,n,"signInWithPassword",Jb);case"emailLink":return e_(t,{email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oa(t,r,"signUpPassword",Yb);case"emailLink":return t_(t,{idToken:n,email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const n_="http://localhost";class dr extends wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new dr(r,i);return l.idToken=s.idToken||void 0,l.accessToken=s.accessToken||void 0,l.secret=s.secret,l.nonce=s.nonce,l.pendingToken=s.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return Hr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Hr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Hr(t,n)}buildRequest(){const t={requestUri:n_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Es(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i_(e){const t=Oi(Li(e)).link,n=t?Oi(Li(t)).deep_link_id:null,r=Oi(Li(e)).deep_link_id;return(r?Oi(Li(r)).link:null)||r||n||t||e}class bd{constructor(t){var n,r,i,s,l,c;const u=Oi(Li(t)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=r_((i=u.mode)!==null&&i!==void 0?i:null);V(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(l=u.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=i_(t);try{return new bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(t,n){return gs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=bd.parseLink(n);return V(r,"argument-error"),gs._fromEmailAndCode(t,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ns extends Hv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ns{constructor(){super("facebook.com")}static credential(t){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ns{constructor(){super("github.com")}static credential(t){return dr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ns{constructor(){super("twitter.com")}static credential(t,n){return dr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(e,t){return Ss(e,"POST","/v1/accounts:signUp",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Xt._fromIdTokenResponse(t,r,i),l=ff(r);return new hr({user:s,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ff(r);return new hr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ff(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends Dt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new aa(t,n,r,i)}}function Wv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(e,s,t,r):s})}async function o_(e,t,n=!1){const r=await Qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hr._forOperation(e,"link",r)}/**
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
 */async function a_(e,t,n=!1){const{auth:r}=e;if(Nt(r.app))return Promise.reject(Qt(r));const i="reauthenticate";try{const s=await Qr(e,Wv(r,i,t,e),n);V(s.idToken,r,"internal-error");const l=yd(s.idToken);V(l,r,"internal-error");const{sub:c}=l;return V(e.uid===c,r,"user-mismatch"),hr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(e,t,n=!1){if(Nt(e.app))return Promise.reject(Qt(e));const r="signIn",i=await Wv(e,r,t),s=await hr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function l_(e,t){return qv(qn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(e){const t=qn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function c_(e,t,n){const r=qn(e);await oa(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Zb)}async function u_(e,t,n){if(Nt(e.app))return Promise.reject(Qt(e));const r=qn(e),l=await oa(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",s_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Kv(e),u}),c=await hr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function d_(e,t,n){return Nt(e.app)?Promise.reject(Qt(e)):l_(kt(e),ai.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(e,t){return Ot(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=kt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await Qr(r,h_(r.auth,s));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function f_(e,t,n,r){return kt(e).onIdTokenChanged(t,n,r)}function g_(e,t,n){return kt(e).beforeAuthStateChanged(t,n)}function m_(e,t,n,r){return kt(e).onAuthStateChanged(t,n,r)}function v_(e){return kt(e).signOut()}const la="__sak";/**
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
 */class Gv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=1e3,x_=10;class Xv extends Gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,u)=>{this.notifyListeners(l,u)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},s=this.storage.getItem(r);Rb()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,x_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xv.type="LOCAL";const w_=Xv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends Gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Yv.type="SESSION";const Jv=Yv;/**
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
 */function b_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class za{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new za(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async h=>h(n.origin,s)),u=await b_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class __{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,l;return new Promise((c,u)=>{const h=_d("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(m){const x=m;if(x.data.eventId===h)switch(x.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(x.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function k_(e){Rt().location.href=e}/**
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
 */function Qv(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function E_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function S_(){return Qv()?self:null}/**
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
 */const Zv="firebaseLocalStorageDb",N_=1,ca="firebaseLocalStorage",ey="fbase_key";class Cs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(e,t){return e.transaction([ca],t?"readwrite":"readonly").objectStore(ca)}function C_(){const e=indexedDB.deleteDatabase(Zv);return new Cs(e).toPromise()}function nu(){const e=indexedDB.open(Zv,N_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ca,{keyPath:ey})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ca)?t(r):(r.close(),await C_(),t(await nu()))})})}async function gf(e,t,n){const r=Ma(e,!0).put({[ey]:t,value:n});return new Cs(r).toPromise()}async function T_(e,t){const n=Ma(e,!1).get(t),r=await new Cs(n).toPromise();return r===void 0?null:r.value}function mf(e,t){const n=Ma(e,!0).delete(t);return new Cs(n).toPromise()}const I_=800,P_=3;class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>P_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(S_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await E_(),!this.activeServiceWorker)return;this.sender=new __(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||j_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await nu();return await gf(t,la,"1"),await mf(t,la),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>T_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>mf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ma(i,!1).getAll();return new Cs(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ty.type="LOCAL";const R_=ty;new js(3e4,6e4);/**
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
 */function A_(e,t){return t?Yt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class kd extends wd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Hr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function D_(e){return qv(e.auth,new kd(e),e.bypassAuthState)}function O_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),a_(n,new kd(e),e.bypassAuthState)}async function L_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),o_(n,new kd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:l,type:c}=t;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return D_;case"linkViaPopup":case"linkViaRedirect":return L_;case"reauthViaPopup":case"reauthViaRedirect":return O_;default:bt(this.auth,"internal-error")}}resolve(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=new js(2e3,1e4);class Or extends ny{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const t=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,z_.get())};t()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="pendingRedirect",Co=new Map;class U_ extends ny{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Co.get(this.auth._key());if(!t){try{const r=await F_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Co.set(this.auth._key(),t)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F_(e,t){const n=V_(t),r=B_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $_(e,t){Co.set(e._key(),t)}function B_(e){return Yt(e._redirectPersistence)}function V_(e){return No(M_,e.config.apiKey,e.name)}async function H_(e,t,n=!1){if(Nt(e.app))return Promise.reject(Qt(e));const r=qn(e),i=A_(r,t),l=await new U_(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=10*60*1e3;class q_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!K_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ry(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=W_&&this.cachedEventUids.clear(),this.cachedEventUids.has(vf(t))}saveEventToCache(t){this.cachedEventUids.add(vf(t)),this.lastProcessedEventTime=Date.now()}}function vf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ry({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function K_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ry(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(e,t={}){return Ot(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y_=/^https?/;async function J_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await G_(e);for(const n of t)try{if(Q_(n))return}catch{}bt(e,"unauthorized-domain")}function Q_(e){const t=eu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Y_.test(n))return!1;if(X_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Z_=new js(3e4,6e4);function yf(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ek(e){return new Promise((t,n)=>{var r,i,s;function l(){yf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yf(),n(Pt(e,"network-request-failed"))},timeout:Z_.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Rt().gapi)===null||s===void 0)&&s.load)l();else{const c=$b("iframefcb");return Rt()[c]=()=>{gapi.load?l():n(Pt(e,"network-request-failed"))},Bv(`${Fb()}?onload=${c}`).catch(u=>n(u))}}).catch(t=>{throw To=null,t})}let To=null;function tk(e){return To=To||ek(e),To}/**
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
 */const nk=new js(5e3,15e3),rk="__/auth/iframe",ik="emulator/auth/iframe",sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ok=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ak(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vd(t,ik):`https://${e.config.authDomain}/${rk}`,r={apiKey:t.apiKey,appName:e.name,v:mr},i=ok.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function lk(e){const t=await tk(e),n=Rt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:ak(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const l=Pt(e,"network-request-failed"),c=Rt().setTimeout(()=>{s(l)},nk.get());function u(){Rt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(l)})}))}/**
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
 */const ck={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uk=500,dk=600,hk="_blank",pk="http://localhost";class xf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fk(e,t,n,r=uk,i=dk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ck),{width:r.toString(),height:i.toString(),top:s,left:l}),h=Ue().toLowerCase();n&&(c=Ov(h)?hk:n),Av(h)&&(t=t||pk,u.scrollbars="yes");const f=Object.entries(u).reduce((x,[S,E])=>`${x}${S}=${E},`,"");if(Pb(h)&&c!=="_self")return gk(t||"",c),new xf(null);const m=window.open(t||"",c,f);V(m,e,"popup-blocked");try{m.focus()}catch{}return new xf(m)}function gk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mk="__/auth/handler",vk="emulator/auth/handler",yk=encodeURIComponent("fac");async function wf(e,t,n,r,i,s){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(t instanceof Hv){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",t2(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,m]of Object.entries({}))l[f]=m}if(t instanceof Ns){const f=t.getScopes().filter(m=>m!=="");f.length>0&&(l.scopes=f.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await e._getAppCheckToken(),h=u?`#${yk}=${encodeURIComponent(u)}`:"";return`${xk(e)}?${Es(c).slice(1)}${h}`}function xk({config:e}){return e.emulator?vd(e,vk):`https://${e.authDomain}/${mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jv,this._completeRedirectFn=H_,this._overrideRedirectResult=$_}async _openPopup(t,n,r,i){var s;on((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const l=await wf(t,n,r,eu(),i);return fk(t,l,_d())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await wf(t,n,r,eu(),i);return k_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await lk(t),r=new q_(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Gl,{type:Gl},i=>{var s;const l=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gl];l!==void 0&&n(!!l),bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=J_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fv()||Dv()||xd()}}const bk=wk;var bf="@firebase/auth",_f="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ek(e){ur(new $n("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$v(e)},h=new zb(r,i,s,u);return qb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ur(new $n("auth-internal",t=>{const n=qn(t.getProvider("auth").getImmediate());return(r=>new _k(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(bf,_f,kk(e)),It(bf,_f,"esm2017")}/**
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
 */const jk=5*60,Sk=vv("authIdTokenMaxAge")||jk;let kf=null;const Nk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sk)return;const i=n==null?void 0:n.token;kf!==i&&(kf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ck(e=fd()){const t=Oa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Wb(e,{popupRedirectResolver:bk,persistence:[R_,w_,Jv]}),r=vv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const l=Nk(s.toString());g_(n,l,()=>l(n.currentUser)),f_(n,c=>l(c))}}const i=fv("auth");return i&&Kb(n,`http://${i}`),n}function Tk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Mb({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Pt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ek("Browser");var Ik="firebase",Pk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(Ik,Pk,"app");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iy;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,v){function k(){}k.prototype=v.prototype,_.D=v.prototype,_.prototype=new k,_.prototype.constructor=_,_.C=function(N,P,C){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return v.prototype[P].apply(N,j)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,v,k){k||(k=0);var N=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)N[P]=v.charCodeAt(k++)|v.charCodeAt(k++)<<8|v.charCodeAt(k++)<<16|v.charCodeAt(k++)<<24;else for(P=0;16>P;++P)N[P]=v[k++]|v[k++]<<8|v[k++]<<16|v[k++]<<24;v=_.g[0],k=_.g[1],P=_.g[2];var C=_.g[3],j=v+(C^k&(P^C))+N[0]+3614090360&4294967295;v=k+(j<<7&4294967295|j>>>25),j=C+(P^v&(k^P))+N[1]+3905402710&4294967295,C=v+(j<<12&4294967295|j>>>20),j=P+(k^C&(v^k))+N[2]+606105819&4294967295,P=C+(j<<17&4294967295|j>>>15),j=k+(v^P&(C^v))+N[3]+3250441966&4294967295,k=P+(j<<22&4294967295|j>>>10),j=v+(C^k&(P^C))+N[4]+4118548399&4294967295,v=k+(j<<7&4294967295|j>>>25),j=C+(P^v&(k^P))+N[5]+1200080426&4294967295,C=v+(j<<12&4294967295|j>>>20),j=P+(k^C&(v^k))+N[6]+2821735955&4294967295,P=C+(j<<17&4294967295|j>>>15),j=k+(v^P&(C^v))+N[7]+4249261313&4294967295,k=P+(j<<22&4294967295|j>>>10),j=v+(C^k&(P^C))+N[8]+1770035416&4294967295,v=k+(j<<7&4294967295|j>>>25),j=C+(P^v&(k^P))+N[9]+2336552879&4294967295,C=v+(j<<12&4294967295|j>>>20),j=P+(k^C&(v^k))+N[10]+4294925233&4294967295,P=C+(j<<17&4294967295|j>>>15),j=k+(v^P&(C^v))+N[11]+2304563134&4294967295,k=P+(j<<22&4294967295|j>>>10),j=v+(C^k&(P^C))+N[12]+1804603682&4294967295,v=k+(j<<7&4294967295|j>>>25),j=C+(P^v&(k^P))+N[13]+4254626195&4294967295,C=v+(j<<12&4294967295|j>>>20),j=P+(k^C&(v^k))+N[14]+2792965006&4294967295,P=C+(j<<17&4294967295|j>>>15),j=k+(v^P&(C^v))+N[15]+1236535329&4294967295,k=P+(j<<22&4294967295|j>>>10),j=v+(P^C&(k^P))+N[1]+4129170786&4294967295,v=k+(j<<5&4294967295|j>>>27),j=C+(k^P&(v^k))+N[6]+3225465664&4294967295,C=v+(j<<9&4294967295|j>>>23),j=P+(v^k&(C^v))+N[11]+643717713&4294967295,P=C+(j<<14&4294967295|j>>>18),j=k+(C^v&(P^C))+N[0]+3921069994&4294967295,k=P+(j<<20&4294967295|j>>>12),j=v+(P^C&(k^P))+N[5]+3593408605&4294967295,v=k+(j<<5&4294967295|j>>>27),j=C+(k^P&(v^k))+N[10]+38016083&4294967295,C=v+(j<<9&4294967295|j>>>23),j=P+(v^k&(C^v))+N[15]+3634488961&4294967295,P=C+(j<<14&4294967295|j>>>18),j=k+(C^v&(P^C))+N[4]+3889429448&4294967295,k=P+(j<<20&4294967295|j>>>12),j=v+(P^C&(k^P))+N[9]+568446438&4294967295,v=k+(j<<5&4294967295|j>>>27),j=C+(k^P&(v^k))+N[14]+3275163606&4294967295,C=v+(j<<9&4294967295|j>>>23),j=P+(v^k&(C^v))+N[3]+4107603335&4294967295,P=C+(j<<14&4294967295|j>>>18),j=k+(C^v&(P^C))+N[8]+1163531501&4294967295,k=P+(j<<20&4294967295|j>>>12),j=v+(P^C&(k^P))+N[13]+2850285829&4294967295,v=k+(j<<5&4294967295|j>>>27),j=C+(k^P&(v^k))+N[2]+4243563512&4294967295,C=v+(j<<9&4294967295|j>>>23),j=P+(v^k&(C^v))+N[7]+1735328473&4294967295,P=C+(j<<14&4294967295|j>>>18),j=k+(C^v&(P^C))+N[12]+2368359562&4294967295,k=P+(j<<20&4294967295|j>>>12),j=v+(k^P^C)+N[5]+4294588738&4294967295,v=k+(j<<4&4294967295|j>>>28),j=C+(v^k^P)+N[8]+2272392833&4294967295,C=v+(j<<11&4294967295|j>>>21),j=P+(C^v^k)+N[11]+1839030562&4294967295,P=C+(j<<16&4294967295|j>>>16),j=k+(P^C^v)+N[14]+4259657740&4294967295,k=P+(j<<23&4294967295|j>>>9),j=v+(k^P^C)+N[1]+2763975236&4294967295,v=k+(j<<4&4294967295|j>>>28),j=C+(v^k^P)+N[4]+1272893353&4294967295,C=v+(j<<11&4294967295|j>>>21),j=P+(C^v^k)+N[7]+4139469664&4294967295,P=C+(j<<16&4294967295|j>>>16),j=k+(P^C^v)+N[10]+3200236656&4294967295,k=P+(j<<23&4294967295|j>>>9),j=v+(k^P^C)+N[13]+681279174&4294967295,v=k+(j<<4&4294967295|j>>>28),j=C+(v^k^P)+N[0]+3936430074&4294967295,C=v+(j<<11&4294967295|j>>>21),j=P+(C^v^k)+N[3]+3572445317&4294967295,P=C+(j<<16&4294967295|j>>>16),j=k+(P^C^v)+N[6]+76029189&4294967295,k=P+(j<<23&4294967295|j>>>9),j=v+(k^P^C)+N[9]+3654602809&4294967295,v=k+(j<<4&4294967295|j>>>28),j=C+(v^k^P)+N[12]+3873151461&4294967295,C=v+(j<<11&4294967295|j>>>21),j=P+(C^v^k)+N[15]+530742520&4294967295,P=C+(j<<16&4294967295|j>>>16),j=k+(P^C^v)+N[2]+3299628645&4294967295,k=P+(j<<23&4294967295|j>>>9),j=v+(P^(k|~C))+N[0]+4096336452&4294967295,v=k+(j<<6&4294967295|j>>>26),j=C+(k^(v|~P))+N[7]+1126891415&4294967295,C=v+(j<<10&4294967295|j>>>22),j=P+(v^(C|~k))+N[14]+2878612391&4294967295,P=C+(j<<15&4294967295|j>>>17),j=k+(C^(P|~v))+N[5]+4237533241&4294967295,k=P+(j<<21&4294967295|j>>>11),j=v+(P^(k|~C))+N[12]+1700485571&4294967295,v=k+(j<<6&4294967295|j>>>26),j=C+(k^(v|~P))+N[3]+2399980690&4294967295,C=v+(j<<10&4294967295|j>>>22),j=P+(v^(C|~k))+N[10]+4293915773&4294967295,P=C+(j<<15&4294967295|j>>>17),j=k+(C^(P|~v))+N[1]+2240044497&4294967295,k=P+(j<<21&4294967295|j>>>11),j=v+(P^(k|~C))+N[8]+1873313359&4294967295,v=k+(j<<6&4294967295|j>>>26),j=C+(k^(v|~P))+N[15]+4264355552&4294967295,C=v+(j<<10&4294967295|j>>>22),j=P+(v^(C|~k))+N[6]+2734768916&4294967295,P=C+(j<<15&4294967295|j>>>17),j=k+(C^(P|~v))+N[13]+1309151649&4294967295,k=P+(j<<21&4294967295|j>>>11),j=v+(P^(k|~C))+N[4]+4149444226&4294967295,v=k+(j<<6&4294967295|j>>>26),j=C+(k^(v|~P))+N[11]+3174756917&4294967295,C=v+(j<<10&4294967295|j>>>22),j=P+(v^(C|~k))+N[2]+718787259&4294967295,P=C+(j<<15&4294967295|j>>>17),j=k+(C^(P|~v))+N[9]+3951481745&4294967295,_.g[0]=_.g[0]+v&4294967295,_.g[1]=_.g[1]+(P+(j<<21&4294967295|j>>>11))&4294967295,_.g[2]=_.g[2]+P&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,v){v===void 0&&(v=_.length);for(var k=v-this.blockSize,N=this.B,P=this.h,C=0;C<v;){if(P==0)for(;C<=k;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<v;)if(N[P++]=_.charCodeAt(C++),P==this.blockSize){i(this,N),P=0;break}}else for(;C<v;)if(N[P++]=_[C++],P==this.blockSize){i(this,N),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var v=1;v<_.length-8;++v)_[v]=0;var k=8*this.o;for(v=_.length-8;v<_.length;++v)_[v]=k&255,k/=256;for(this.u(_),_=Array(16),v=k=0;4>v;++v)for(var N=0;32>N;N+=8)_[k++]=this.g[v]>>>N&255;return _};function s(_,v){var k=c;return Object.prototype.hasOwnProperty.call(k,_)?k[_]:k[_]=v(_)}function l(_,v){this.h=v;for(var k=[],N=!0,P=_.length-1;0<=P;P--){var C=_[P]|0;N&&C==v||(k[P]=C,N=!1)}this.g=k}var c={};function u(_){return-128<=_&&128>_?s(_,function(v){return new l([v|0],0>v?-1:0)}):new l([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return m;if(0>_)return O(h(-_));for(var v=[],k=1,N=0;_>=k;N++)v[N]=_/k|0,k*=4294967296;return new l(v,0)}function f(_,v){if(_.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(_.charAt(0)=="-")return O(f(_.substring(1),v));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=h(Math.pow(v,8)),N=m,P=0;P<_.length;P+=8){var C=Math.min(8,_.length-P),j=parseInt(_.substring(P,P+C),v);8>C?(C=h(Math.pow(v,C)),N=N.j(C).add(h(j))):(N=N.j(k),N=N.add(h(j)))}return N}var m=u(0),x=u(1),S=u(16777216);e=l.prototype,e.m=function(){if(I(this))return-O(this).m();for(var _=0,v=1,k=0;k<this.g.length;k++){var N=this.i(k);_+=(0<=N?N:4294967296+N)*v,v*=4294967296}return _},e.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E(this))return"0";if(I(this))return"-"+O(this).toString(_);for(var v=h(Math.pow(_,6)),k=this,N="";;){var P=T(k,v).g;k=b(k,P.j(v));var C=((0<k.g.length?k.g[0]:k.h)>>>0).toString(_);if(k=P,E(k))return C+N;for(;6>C.length;)C="0"+C;N=C+N}},e.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function E(_){if(_.h!=0)return!1;for(var v=0;v<_.g.length;v++)if(_.g[v]!=0)return!1;return!0}function I(_){return _.h==-1}e.l=function(_){return _=b(this,_),I(_)?-1:E(_)?0:1};function O(_){for(var v=_.g.length,k=[],N=0;N<v;N++)k[N]=~_.g[N];return new l(k,~_.h).add(x)}e.abs=function(){return I(this)?O(this):this},e.add=function(_){for(var v=Math.max(this.g.length,_.g.length),k=[],N=0,P=0;P<=v;P++){var C=N+(this.i(P)&65535)+(_.i(P)&65535),j=(C>>>16)+(this.i(P)>>>16)+(_.i(P)>>>16);N=j>>>16,C&=65535,j&=65535,k[P]=j<<16|C}return new l(k,k[k.length-1]&-2147483648?-1:0)};function b(_,v){return _.add(O(v))}e.j=function(_){if(E(this)||E(_))return m;if(I(this))return I(_)?O(this).j(O(_)):O(O(this).j(_));if(I(_))return O(this.j(O(_)));if(0>this.l(S)&&0>_.l(S))return h(this.m()*_.m());for(var v=this.g.length+_.g.length,k=[],N=0;N<2*v;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(var P=0;P<_.g.length;P++){var C=this.i(N)>>>16,j=this.i(N)&65535,ve=_.i(P)>>>16,Kn=_.i(P)&65535;k[2*N+2*P]+=j*Kn,y(k,2*N+2*P),k[2*N+2*P+1]+=C*Kn,y(k,2*N+2*P+1),k[2*N+2*P+1]+=j*ve,y(k,2*N+2*P+1),k[2*N+2*P+2]+=C*ve,y(k,2*N+2*P+2)}for(N=0;N<v;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=v;N<2*v;N++)k[N]=0;return new l(k,0)};function y(_,v){for(;(_[v]&65535)!=_[v];)_[v+1]+=_[v]>>>16,_[v]&=65535,v++}function w(_,v){this.g=_,this.h=v}function T(_,v){if(E(v))throw Error("division by zero");if(E(_))return new w(m,m);if(I(_))return v=T(O(_),v),new w(O(v.g),O(v.h));if(I(v))return v=T(_,O(v)),new w(O(v.g),v.h);if(30<_.g.length){if(I(_)||I(v))throw Error("slowDivide_ only works with positive integers.");for(var k=x,N=v;0>=N.l(_);)k=A(k),N=A(N);var P=z(k,1),C=z(N,1);for(N=z(N,2),k=z(k,2);!E(N);){var j=C.add(N);0>=j.l(_)&&(P=P.add(k),C=j),N=z(N,1),k=z(k,1)}return v=b(_,P.j(v)),new w(P,v)}for(P=m;0<=_.l(v);){for(k=Math.max(1,Math.floor(_.m()/v.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),C=h(k),j=C.j(v);I(j)||0<j.l(_);)k-=N,C=h(k),j=C.j(v);E(C)&&(C=x),P=P.add(C),_=b(_,j)}return new w(P,_)}e.A=function(_){return T(this,_).h},e.and=function(_){for(var v=Math.max(this.g.length,_.g.length),k=[],N=0;N<v;N++)k[N]=this.i(N)&_.i(N);return new l(k,this.h&_.h)},e.or=function(_){for(var v=Math.max(this.g.length,_.g.length),k=[],N=0;N<v;N++)k[N]=this.i(N)|_.i(N);return new l(k,this.h|_.h)},e.xor=function(_){for(var v=Math.max(this.g.length,_.g.length),k=[],N=0;N<v;N++)k[N]=this.i(N)^_.i(N);return new l(k,this.h^_.h)};function A(_){for(var v=_.g.length+1,k=[],N=0;N<v;N++)k[N]=_.i(N)<<1|_.i(N-1)>>>31;return new l(k,_.h)}function z(_,v){var k=v>>5;v%=32;for(var N=_.g.length-k,P=[],C=0;C<N;C++)P[C]=0<v?_.i(C+k)>>>v|_.i(C+k+1)<<32-v:_.i(C+k);return new l(P,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=f,iy=l}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uo=="object"&&uo];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in p))break e;p=p[D]}a=a[a.length-1],g=p[a],d=d(g),d!=g&&d!=null&&t(p,a,{configurable:!0,writable:!0,value:d})}}function s(a,d){a instanceof String&&(a+="");var p=0,g=!1,D={next:function(){if(!g&&p<a.length){var L=p++;return{value:d(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function f(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(d,D)}}return function(){return a.apply(d,arguments)}}function x(a,d,p){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,x.apply(null,arguments)}function S(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function E(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(g,D,L){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return d.prototype[D].apply(g,U)}}function I(a){const d=a.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=a[g];return p}return[]}function O(a,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(u(g)){const D=a.length||0,L=g.length||0;a.length=D+L;for(let U=0;U<L;U++)a[D+U]=g[U]}else a.push(g)}}class b{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(a){return/^[\s\xa0]*$/.test(a)}function w(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function T(a){return T[" "](a),a}T[" "]=function(){};var A=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function z(a,d,p){for(const g in a)d.call(p,a[g],g,a)}function _(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function v(a){const d={};for(const p in a)d[p]=a[p];return d}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,d){let p,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(p in g)a[p]=g[p];for(let L=0;L<k.length;L++)p=k[L],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function P(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function C(a){c.setTimeout(()=>{throw a},0)}function j(){var a=H;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ve{constructor(){this.h=this.g=null}add(d,p){const g=Kn.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Kn=new b(()=>new li,a=>a.reset());class li{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,F=!1,H=new ve,W=()=>{const a=c.Promise.resolve(void 0);zt=()=>{a.then(oe)}};var oe=()=>{for(var a;a=j();){try{a.h.call(a.g)}catch(p){C(p)}var d=Kn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return a}();function Ut(a,d){if(de.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(A){e:{try{T(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ut.aa.h.call(this)}}E(Ut,de);var Ft={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),ky=0;function Ey(a,d,p,g,D){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=D,this.key=++ky,this.da=this.fa=!1}function Ps(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Rs(a){this.src=a,this.g={},this.h=0}Rs.prototype.add=function(a,d,p,g,D){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var U=Wa(a,d,g,D);return-1<U?(d=a[U],p||(d.fa=!1)):(d=new Ey(d,this.src,L,!!g,D),d.fa=p,a.push(d)),d};function Ha(a,d){var p=d.type;if(p in a.g){var g=a.g[p],D=Array.prototype.indexOf.call(g,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(g,D,1),L&&(Ps(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Wa(a,d,p,g){for(var D=0;D<a.length;++D){var L=a[D];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==g)return D}return-1}var qa="closure_lm_"+(1e6*Math.random()|0),Ka={};function Rd(a,d,p,g,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Rd(a,d[L],p,g,D);return null}return p=Od(p),a&&a[$t]?a.K(d,p,h(g)?!!g.capture:!1,D):jy(a,d,p,!1,g,D)}function jy(a,d,p,g,D,L){if(!d)throw Error("Invalid event type");var U=h(D)?!!D.capture:!!D,Z=Xa(a);if(Z||(a[qa]=Z=new Rs(a)),p=Z.add(d,p,g,U,L),p.proxy)return p;if(g=Sy(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)Mt||(D=U),D===void 0&&(D=!1),a.addEventListener(d.toString(),g,D);else if(a.attachEvent)a.attachEvent(Dd(d.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Sy(){function a(p){return d.call(a.src,a.listener,p)}const d=Ny;return a}function Ad(a,d,p,g,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)Ad(a,d[L],p,g,D);else g=h(g)?!!g.capture:!!g,p=Od(p),a&&a[$t]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],p=Wa(L,p,g,D),-1<p&&(Ps(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=Xa(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Wa(d,p,g,D)),(p=-1<a?d[a]:null)&&Ga(p))}function Ga(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$t])Ha(d.i,a);else{var p=a.type,g=a.proxy;d.removeEventListener?d.removeEventListener(p,g,a.capture):d.detachEvent?d.detachEvent(Dd(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=Xa(d))?(Ha(p,a),p.h==0&&(p.src=null,d[qa]=null)):Ps(a)}}}function Dd(a){return a in Ka?Ka[a]:Ka[a]="on"+a}function Ny(a,d){if(a.da)a=!0;else{d=new Ut(d,this);var p=a.listener,g=a.ha||a.src;a.fa&&Ga(a),a=p.call(g,d)}return a}function Xa(a){return a=a[qa],a instanceof Rs?a:null}var Ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function Od(a){return typeof a=="function"?a:(a[Ya]||(a[Ya]=function(d){return a.handleEvent(d)}),a[Ya])}function Se(){Q.call(this),this.i=new Rs(this),this.M=this,this.F=null}E(Se,Q),Se.prototype[$t]=!0,Se.prototype.removeEventListener=function(a,d,p,g){Ad(this,a,d,p,g)};function De(a,d){var p,g=a.F;if(g)for(p=[];g;g=g.F)p.push(g);if(a=a.M,g=d.type||d,typeof d=="string")d=new de(d,a);else if(d instanceof de)d.target=d.target||a;else{var D=d;d=new de(g,a),N(d,D)}if(D=!0,p)for(var L=p.length-1;0<=L;L--){var U=d.g=p[L];D=As(U,g,!0,d)&&D}if(U=d.g=a,D=As(U,g,!0,d)&&D,D=As(U,g,!1,d)&&D,p)for(L=0;L<p.length;L++)U=d.g=p[L],D=As(U,g,!1,d)&&D}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],g=0;g<p.length;g++)Ps(p[g]);delete a.g[d],a.h--}}this.F=null},Se.prototype.K=function(a,d,p,g){return this.i.add(String(a),d,!1,p,g)},Se.prototype.L=function(a,d,p,g){return this.i.add(String(a),d,!0,p,g)};function As(a,d,p,g){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var U=d[L];if(U&&!U.da&&U.capture==p){var Z=U.listener,_e=U.ha||U.src;U.fa&&Ha(a.i,U),D=Z.call(_e,g)!==!1&&D}}return D&&!g.defaultPrevented}function Ld(a,d,p){if(typeof a=="function")p&&(a=x(a,p));else if(a&&typeof a.handleEvent=="function")a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function zd(a){a.g=Ld(()=>{a.g=null,a.i&&(a.i=!1,zd(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Cy extends Q{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:zd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(a){Q.call(this),this.h=a,this.g={}}E(ci,Q);var Md=[];function Ud(a){z(a.g,function(d,p){this.g.hasOwnProperty(p)&&Ga(d)},a),a.g={}}ci.prototype.N=function(){ci.aa.N.call(this),Ud(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ja=c.JSON.stringify,Ty=c.JSON.parse,Iy=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Qa(){}Qa.prototype.h=null;function Fd(a){return a.h||(a.h=a.i())}function Py(){}var ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Za(){de.call(this,"d")}E(Za,de);function el(){de.call(this,"c")}E(el,de);var vr={},$d=null;function tl(){return $d=$d||new Se}vr.La="serverreachability";function Bd(a){de.call(this,vr.La,a)}E(Bd,de);function di(a){const d=tl();De(d,new Bd(d))}vr.STAT_EVENT="statevent";function Vd(a,d){de.call(this,vr.STAT_EVENT,a),this.stat=d}E(Vd,de);function Oe(a){const d=tl();De(d,new Vd(d,a))}vr.Ma="timingevent";function Hd(a,d){de.call(this,vr.Ma,a),this.size=d}E(Hd,de);function hi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function pi(){this.g=!0}pi.prototype.xa=function(){this.g=!1};function Ry(a,d,p,g,D,L){a.info(function(){if(a.g)if(L)for(var U="",Z=L.split("&"),_e=0;_e<Z.length;_e++){var X=Z[_e].split("=");if(1<X.length){var Ne=X[0];X=X[1];var Ce=Ne.split("_");U=2<=Ce.length&&Ce[1]=="type"?U+(Ne+"="+X+"&"):U+(Ne+"=redacted&")}}else U=null;else U=L;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+d+`
`+p+`
`+U})}function Ay(a,d,p,g,D,L,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+d+`
`+p+`
`+L+" "+U})}function yr(a,d,p,g){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Oy(a,p)+(g?" "+g:"")})}function Dy(a,d){a.info(function(){return"TIMEOUT: "+d})}pi.prototype.info=function(){};function Oy(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var g=p[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var U=1;U<D.length;U++)D[U]=""}}}}return Ja(p)}catch{return d}}var nl={NO_ERROR:0,TIMEOUT:8},Ly={},rl;function Ds(){}E(Ds,Qa),Ds.prototype.g=function(){return new XMLHttpRequest},Ds.prototype.i=function(){return{}},rl=new Ds;function dn(a,d,p,g){this.j=a,this.i=d,this.l=p,this.R=g||1,this.U=new ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wd}function Wd(){this.i=null,this.g="",this.h=!1}var qd={},il={};function sl(a,d,p){a.L=1,a.v=Ms(Bt(d)),a.m=p,a.P=!0,Kd(a,null)}function Kd(a,d){a.F=Date.now(),Os(a),a.A=Bt(a.v);var p=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ah(p.i,"t",g),a.C=0,p=a.j.J,a.h=new Wd,a.g=jh(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Cy(x(a.Y,a,a.g),a.O)),d=a.U,p=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Md[0]=D.toString()),D=Md);for(var L=0;L<D.length;L++){var U=Rd(p,D[L],g||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),di(),Ry(a.i,a.u,a.A,a.l,a.R,a.m)}dn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Vt(a)==3?d.j():this.Y(a)},dn.prototype.Y=function(a){try{if(a==this.g)e:{const Ce=Vt(this.g);var d=this.g.Ba();const br=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||fh(this.g)))){this.J||Ce!=4||d==7||(d==8||0>=br?di(3):di(2)),ol(this);var p=this.g.Z();this.X=p;t:if(Gd(this)){var g=fh(this.g);a="";var D=g.length,L=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),fi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,a+=this.h.i.decode(g[d],{stream:!(L&&d==D-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,Ay(this.i,this.u,this.A,this.l,this.R,Ce,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Z)){var X=Z;break t}}X=null}if(p=X)yr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,al(this,p);else{this.o=!1,this.s=3,Oe(12),Gn(this),fi(this);break e}}if(this.P){p=!0;let dt;for(;!this.J&&this.C<U.length;)if(dt=zy(this,U),dt==il){Ce==4&&(this.s=4,Oe(14),p=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==qd){this.s=4,Oe(15),yr(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else yr(this.i,this.l,dt,null),al(this,dt);if(Gd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||U.length!=0||this.h.h||(this.s=1,Oe(16),p=!1),this.o=this.o&&p,!p)yr(this.i,this.l,U,"[Invalid Chunked Response]"),Gn(this),fi(this);else if(0<U.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),pl(Ne),Ne.M=!0,Oe(11))}}else yr(this.i,this.l,U,null),al(this,U);Ce==4&&Gn(this),this.o&&!this.J&&(Ce==4?bh(this.j,this):(this.o=!1,Os(this)))}else ex(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Gn(this),fi(this)}}}catch{}finally{}};function Gd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function zy(a,d){var p=a.C,g=d.indexOf(`
`,p);return g==-1?il:(p=Number(d.substring(p,g)),isNaN(p)?qd:(g+=1,g+p>d.length?il:(d=d.slice(g,g+p),a.C=g+p,d)))}dn.prototype.cancel=function(){this.J=!0,Gn(this)};function Os(a){a.S=Date.now()+a.I,Xd(a,a.I)}function Xd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=hi(x(a.ba,a),d)}function ol(a){a.B&&(c.clearTimeout(a.B),a.B=null)}dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Dy(this.i,this.A),this.L!=2&&(di(),Oe(17)),Gn(this),this.s=2,fi(this)):Xd(this,this.S-a)};function fi(a){a.j.G==0||a.J||bh(a.j,a)}function Gn(a){ol(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Ud(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function al(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||ll(p.h,a))){if(!a.K&&ll(p.h,a)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Hs(p),Bs(p);else break e;hl(p),Oe(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=hi(x(p.Za,p),6e3));if(1>=Qd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yn(p,11)}else if((a.K||p.g==a)&&Hs(p),!y(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let X=D[d];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Ne=X[3];Ne!=null&&(p.la=Ne,p.j.info("VER="+p.la));const Ce=X[4];Ce!=null&&(p.Aa=Ce,p.j.info("SVER="+p.Aa));const br=X[5];br!=null&&typeof br=="number"&&0<br&&(g=1.5*br,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const dt=a.g;if(dt){const Ws=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var L=g.h;L.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(cl(L,L.h),L.h=null))}if(g.D){const fl=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(g.ya=fl,ne(g.I,g.D,fl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var U=a;if(g.qa=Eh(g,g.J?g.ia:null,g.W),U.K){Zd(g.h,U);var Z=U,_e=g.L;_e&&(Z.I=_e),Z.B&&(ol(Z),Os(Z)),g.g=U}else xh(g);0<p.i.length&&Vs(p)}else X[0]!="stop"&&X[0]!="close"||Yn(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Yn(p,7):dl(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}di(4)}catch{}}var My=class{constructor(a,d){this.g=a,this.map=d}};function Yd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qd(a){return a.h?1:a.g?a.g.size:0}function ll(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function cl(a,d){a.g?a.g.add(d):a.h=d}function Zd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Yd.prototype.cancel=function(){if(this.i=eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return I(a.i)}function Uy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,g=0;g<p;g++)d.push(a[g]);return d}d=[],p=0;for(g in a)d[p++]=a[g];return d}function Fy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const g in a)d[p++]=g;return d}}}function th(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Fy(a),g=Uy(a),D=g.length,L=0;L<D;L++)d.call(void 0,g[L],p&&p[L],a)}var nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $y(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var g=a[p].indexOf("="),D=null;if(0<=g){var L=a[p].substring(0,g);D=a[p].substring(g+1)}else L=a[p];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Xn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Xn){this.h=a.h,Ls(this,a.j),this.o=a.o,this.g=a.g,zs(this,a.s),this.l=a.l;var d=a.i,p=new vi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),rh(this,p),this.m=a.m}else a&&(d=String(a).match(nh))?(this.h=!1,Ls(this,d[1]||"",!0),this.o=gi(d[2]||""),this.g=gi(d[3]||"",!0),zs(this,d[4]),this.l=gi(d[5]||"",!0),rh(this,d[6]||"",!0),this.m=gi(d[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}Xn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(mi(d,ih,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(mi(d,ih,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(mi(p,p.charAt(0)=="/"?Hy:Vy,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",mi(p,qy)),a.join("")};function Bt(a){return new Xn(a)}function Ls(a,d,p){a.j=p?gi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function zs(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function rh(a,d,p){d instanceof vi?(a.i=d,Ky(a.i,a.h)):(p||(d=mi(d,Wy)),a.i=new vi(d,a.h))}function ne(a,d,p){a.i.set(d,p)}function Ms(a){return ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function mi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,By),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function By(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ih=/[#\/\?@]/g,Vy=/[#\?:]/g,Hy=/[#\?]/g,Wy=/[#\?@]/g,qy=/#/g;function vi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function hn(a){a.g||(a.g=new Map,a.h=0,a.i&&$y(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}e=vi.prototype,e.add=function(a,d){hn(this),this.i=null,a=xr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function sh(a,d){hn(a),d=xr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function oh(a,d){return hn(a),d=xr(a,d),a.g.has(d)}e.forEach=function(a,d){hn(this),this.g.forEach(function(p,g){p.forEach(function(D){a.call(d,D,g,this)},this)},this)},e.na=function(){hn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const D=a[g];for(let L=0;L<D.length;L++)p.push(d[g])}return p},e.V=function(a){hn(this);let d=[];if(typeof a=="string")oh(this,a)&&(d=d.concat(this.g.get(xr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},e.set=function(a,d){return hn(this),this.i=null,a=xr(this,a),oh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},e.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ah(a,d,p){sh(a,d),0<p.length&&(a.i=null,a.g.set(xr(a,d),I(p)),a.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const L=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var D=L;U[g]!==""&&(D+="="+encodeURIComponent(String(U[g]))),a.push(D)}}return this.i=a.join("&")};function xr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Ky(a,d){d&&!a.j&&(hn(a),a.i=null,a.g.forEach(function(p,g){var D=g.toLowerCase();g!=D&&(sh(this,g),ah(this,D,p))},a)),a.j=d}function Gy(a,d){const p=new pi;if(c.Image){const g=new Image;g.onload=S(pn,p,"TestLoadImage: loaded",!0,d,g),g.onerror=S(pn,p,"TestLoadImage: error",!1,d,g),g.onabort=S(pn,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=S(pn,p,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else d(!1)}function Xy(a,d){const p=new pi,g=new AbortController,D=setTimeout(()=>{g.abort(),pn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(D),L.ok?pn(p,"TestPingServer: ok",!0,d):pn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),pn(p,"TestPingServer: error",!1,d)})}function pn(a,d,p,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(p)}catch{}}function Yy(){this.g=new Iy}function Jy(a,d,p){const g=p||"";try{th(a,function(D,L){let U=D;h(D)&&(U=Ja(D)),d.push(g+L+"="+encodeURIComponent(U))})}catch(D){throw d.push(g+"type="+encodeURIComponent("_badmap")),D}}function Us(a){this.l=a.Ub||null,this.j=a.eb||!1}E(Us,Qa),Us.prototype.g=function(){return new Fs(this.l,this.j)},Us.prototype.i=function(a){return function(){return a}}({});function Fs(a,d){Se.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Fs,Se),e=Fs.prototype,e.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,xi(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function lh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?yi(this):xi(this),this.readyState==3&&lh(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},e.Qa=function(a){this.g&&(this.response=a,yi(this))},e.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xi(a)}e.setRequestHeader=function(a,d){this.u.append(a,d)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ch(a){let d="";return z(a,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function ul(a,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=ch(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ne(a,d,p))}function he(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(he,Se);var Qy=/^https?$/i,Zy=["POST","PUT"];e=he.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rl.g(),this.v=this.o?Fd(this.o):Fd(rl),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){uh(this,L);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)p.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())p.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Zy,d,void 0))||g||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,U]of p)this.g.setRequestHeader(L,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ph(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){uh(this,L)}};function uh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,dh(a),$s(a)}function dh(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),$s(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$s(this,!0)),he.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?hh(this):this.bb())},e.bb=function(){hh(this)};function hh(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Vt(a)!=4||a.Z()!=2)){if(a.u&&Vt(a)==4)Ld(a.Ea,0,a);else if(De(a,"readystatechange"),Vt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=U===0){var D=String(a.D).match(nh)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),g=!Qy.test(D?D.toLowerCase():"")}p=g}if(p)De(a,"complete"),De(a,"success");else{a.m=6;try{var L=2<Vt(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",dh(a)}}finally{$s(a)}}}}function $s(a,d){if(a.g){ph(a);const p=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||De(a,"ready");try{p.onreadystatechange=g}catch{}}}function ph(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Vt(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ty(d)}};function fh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ex(a){const d={};a=(a.g&&2<=Vt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var p=P(a[g]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[D]||[];d[D]=L,L.push(p)}_(d,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function gh(a){this.Aa=0,this.i=[],this.j=new pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wi("baseRetryDelayMs",5e3,a),this.cb=wi("retryDelaySeedMs",1e4,a),this.Wa=wi("forwardChannelMaxRetries",2,a),this.wa=wi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Yd(a&&a.concurrentRequestLimit),this.Da=new Yy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=gh.prototype,e.la=8,e.G=1,e.connect=function(a,d,p,g){Oe(0),this.W=a,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Eh(this,null,this.W),Vs(this)};function dl(a){if(mh(a),a.G==3){var d=a.U++,p=Bt(a.I);if(ne(p,"SID",a.K),ne(p,"RID",d),ne(p,"TYPE","terminate"),bi(a,p),d=new dn(a,a.j,d),d.L=2,d.v=Ms(Bt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=jh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Os(d)}kh(a)}function Bs(a){a.g&&(pl(a),a.g.cancel(),a.g=null)}function mh(a){Bs(a),a.u&&(c.clearTimeout(a.u),a.u=null),Hs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Vs(a){if(!Jd(a.h)&&!a.s){a.s=!0;var d=a.Ga;zt||W(),F||(zt(),F=!0),H.add(d,a),a.B=0}}function tx(a,d){return Qd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=hi(x(a.Ga,a,d),_h(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new dn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),N(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=yh(this,D,d),p=Bt(this.I),ne(p,"RID",a),ne(p,"CVER",22),this.D&&ne(p,"X-HTTP-Session-Id",this.D),bi(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(ch(L)))+"&"+d:this.m&&ul(p,this.m,L)),cl(this.h,D),this.Ua&&ne(p,"TYPE","init"),this.P?(ne(p,"$req",d),ne(p,"SID","null"),D.T=!0,sl(D,p,null)):sl(D,p,d),this.G=2}}else this.G==3&&(a?vh(this,a):this.i.length==0||Jd(this.h)||vh(this))};function vh(a,d){var p;d?p=d.l:p=a.U++;const g=Bt(a.I);ne(g,"SID",a.K),ne(g,"RID",p),ne(g,"AID",a.T),bi(a,g),a.m&&a.o&&ul(g,a.m,a.o),p=new dn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=yh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cl(a.h,p),sl(p,g,d)}function bi(a,d){a.H&&z(a.H,function(p,g){ne(d,g,p)}),a.l&&th({},function(p,g){ne(d,g,p)})}function yh(a,d,p){p=Math.min(a.i.length,p);var g=a.l?x(a.l.Na,a.l,a):null;e:{var D=a.i;let L=-1;for(;;){const U=["count="+p];L==-1?0<p?(L=D[0].g,U.push("ofs="+L)):L=0:U.push("ofs="+L);let Z=!0;for(let _e=0;_e<p;_e++){let X=D[_e].g;const Ne=D[_e].map;if(X-=L,0>X)L=Math.max(0,D[_e].g-100),Z=!1;else try{Jy(Ne,U,"req"+X+"_")}catch{g&&g(Ne)}}if(Z){g=U.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,g}function xh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;zt||W(),F||(zt(),F=!0),H.add(d,a),a.v=0}}function hl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=hi(x(a.Fa,a),_h(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,wh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=hi(x(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Bs(this),wh(this))};function pl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function wh(a){a.g=new dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Bt(a.qa);ne(d,"RID","rpc"),ne(d,"SID",a.K),ne(d,"AID",a.T),ne(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ne(d,"TO",a.ja),ne(d,"TYPE","xmlhttp"),bi(a,d),a.m&&a.o&&ul(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ms(Bt(d)),p.m=null,p.P=!0,Kd(p,a)}e.Za=function(){this.C!=null&&(this.C=null,Bs(this),hl(this),Oe(19))};function Hs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function bh(a,d){var p=null;if(a.g==d){Hs(a),pl(a),a.g=null;var g=2}else if(ll(a.h,d))p=d.D,Zd(a.h,d),g=1;else return;if(a.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=a.B;g=tl(),De(g,new Hd(g,p)),Vs(a)}else xh(a);else if(D=d.s,D==3||D==0&&0<d.X||!(g==1&&tx(a,d)||g==2&&hl(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),D){case 1:Yn(a,5);break;case 4:Yn(a,10);break;case 3:Yn(a,6);break;default:Yn(a,2)}}}function _h(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Yn(a,d){if(a.j.info("Error code "+d),d==2){var p=x(a.fb,a),g=a.Xa;const D=!g;g=new Xn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ls(g,"https"),Ms(g),D?Gy(g.toString(),p):Xy(g.toString(),p)}else Oe(2);a.G=0,a.l&&a.l.sa(d),kh(a),mh(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function kh(a){if(a.G=0,a.ka=[],a.l){const d=eh(a.h);(d.length!=0||a.i.length!=0)&&(O(a.ka,d),O(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function Eh(a,d,p){var g=p instanceof Xn?Bt(p):new Xn(p);if(g.g!="")d&&(g.g=d+"."+g.g),zs(g,g.s);else{var D=c.location;g=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new Xn(null);g&&Ls(L,g),d&&(L.g=d),D&&zs(L,D),p&&(L.l=p),g=L}return p=a.D,d=a.ya,p&&d&&ne(g,p,d),ne(g,"VER",a.la),bi(a,g),g}function jh(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new he(new Us({eb:p})):new he(a.pa),d.Ha(a.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sh(){}e=Sh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function it(a,d){Se.call(this),this.g=new gh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!y(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new wr(this)}E(it,Se),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){dl(this.g)},it.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ja(a),a=p);d.i.push(new My(d.Ya++,a)),d.G==3&&Vs(d)},it.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,it.aa.N.call(this)};function Nh(a){Za.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}E(Nh,Za);function Ch(){el.call(this),this.status=1}E(Ch,el);function wr(a){this.g=a}E(wr,Sh),wr.prototype.ua=function(){De(this.g,"a")},wr.prototype.ta=function(a){De(this.g,new Nh(a))},wr.prototype.sa=function(a){De(this.g,new Ch)},wr.prototype.ra=function(){De(this.g,"b")},it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,nl.NO_ERROR=0,nl.TIMEOUT=8,nl.HTTP_ERROR=6,Ly.COMPLETE="complete",Py.EventType=ui,ui.OPEN="a",ui.CLOSE="b",ui.ERROR="c",ui.MESSAGE="d",Se.prototype.listen=Se.prototype.K,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});const jf="@firebase/firestore";/**
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
 */const Zr=new hd("@firebase/firestore");function mt(e,...t){if(Zr.logLevel<=Y.DEBUG){const n=t.map(Ed);Zr.debug(`Firestore (${Ts}): ${e}`,...n)}}function sy(e,...t){if(Zr.logLevel<=Y.ERROR){const n=t.map(Ed);Zr.error(`Firestore (${Ts}): ${e}`,...n)}}function Rk(e,...t){if(Zr.logLevel<=Y.WARN){const n=t.map(Ed);Zr.warn(`Firestore (${Ts}): ${e}`,...n)}}function Ed(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function jd(e="Unexpected state"){const t=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+e;throw sy(t),new Error(t)}function Ki(e,t){e||jd()}/**
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
 */const Ve={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class He extends Dt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class oy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class Dk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ok{constructor(t){this.t=t,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ki(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gi,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gi)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ki(typeof r.accessToken=="string"),new oy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ki(t===null||typeof t=="string"),new ze(t)}}class Lk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Lk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Ki(this.o===void 0);const r=s=>{s.error!=null&&mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const l=s.token!==this.R;return this.R=s.token,mt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ki(typeof n.token=="string"),this.R=n.token,new Mk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Fk(e){return e.name==="IndexedDbTransactionError"}class ua{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ua&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Sf,K;(K=Sf||(Sf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new iy([4294967295,4294967295],0);function Xl(){return typeof document<"u"?document:null}/**
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
 */class $k{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const l=Date.now()+r,c=new Sd(t,n,l,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(Ve.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Nf,Cf;(Cf=Nf||(Nf={})).ea="default",Cf.Cache="cache";/**
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
 */function Bk(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new Map;function Vk(e,t,n,r){if(t===!0&&r===!0)throw new He(Ve.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Hk(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":jd()}function Wk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new He(Ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hk(e);throw new He(Ve.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new He(Ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new He(Ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vk("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bk((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new He(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new He(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new He(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ay{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new He(Ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new He(Ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ak;switch(r.type){case"firstParty":return new zk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new He(Ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tf.get(n);r&&(mt("ComponentProvider","Removing Datastore"),Tf.delete(n),r.terminate())}(this),Promise.resolve()}}function qk(e,t,n,r={}){var i;const s=(e=Wk(e,ay))._getSettings(),l=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==l&&Rk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:l,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ze.MOCK_USER;else{c=yv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new He(Ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ze(h)}e._authCredentials=new Dk(new oy(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $k(this,"async_queue_retry"),this.Vu=()=>{const r=Xl();r&&mt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Xl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Gi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Fk(t))throw t;mt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw sy("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Sd.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&jd()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Kk extends ay{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Pf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Pf(t),this._firestoreClient=void 0,await t}}}function Gk(e,t){const n=typeof e=="object"?e:fd(),r=typeof e=="string"?e:"(default)",i=Oa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gv("firestore");s&&qk(i,...s)}return i}(function(t,n=!0){(function(i){Ts=i})(mr),ur(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const l=r.getProvider("app").getImmediate(),c=new Kk(new Ok(r.getProvider("auth-internal")),new Uk(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new He(Ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(h.options.projectId,f)}(l,i),l);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),It(jf,"4.7.3",t),It(jf,"4.7.3","esm2017")})();/**
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
 */const ly="firebasestorage.googleapis.com",Xk="storageBucket",Yk=2*60*1e3,Jk=10*60*1e3;/**
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
 */class Lt extends Dt{constructor(t,n,r=0){super(Yl(t),`Firebase Storage: ${n} (${Yl(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Yl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function Yl(e){return"storage/"+e}function Qk(){const e="An unknown error occurred, please check the error payload for server response.";return new Lt(At.UNKNOWN,e)}function Zk(){return new Lt(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eE(){return new Lt(At.CANCELED,"User canceled the upload/download.")}function tE(e){return new Lt(At.INVALID_URL,"Invalid URL '"+e+"'.")}function nE(e){return new Lt(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Rf(e){return new Lt(At.INVALID_ARGUMENT,e)}function cy(){return new Lt(At.APP_DELETED,"The Firebase app was deleted.")}function rE(e){return new Lt(At.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=vt.makeFromUrl(t,n)}catch{return new vt(t,"")}if(r.path==="")return r;throw nE(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),u={bucket:1,path:3};function h(T){T.path_=decodeURIComponent(T.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",S=new RegExp(`^https?://${m}/${f}/b/${i}/o${x}`,"i"),E={bucket:1,path:3},I=n===ly?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",b=new RegExp(`^https?://${I}/${i}/${O}`,"i"),w=[{regex:c,indices:u,postModify:s},{regex:S,indices:E,postModify:h},{regex:b,indices:{bucket:1,path:2},postModify:h}];for(let T=0;T<w.length;T++){const A=w[T],z=A.regex.exec(t);if(z){const _=z[A.indices.bucket];let v=z[A.indices.path];v||(v=""),r=new vt(_,v),A.postModify(r);break}}if(r==null)throw tE(t);return r}}class iE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function sE(e,t,n){let r=1,i=null,s=null,l=!1,c=0;function u(){return c===2}let h=!1;function f(...O){h||(h=!0,t.apply(null,O))}function m(O){i=setTimeout(()=>{i=null,e(S,u())},O)}function x(){s&&clearTimeout(s)}function S(O,...b){if(h){x();return}if(O){x(),f.call(null,O,...b);return}if(u()||l){x(),f.call(null,O,...b);return}r<64&&(r*=2);let w;c===1?(c=2,w=0):w=(r+Math.random())*1e3,m(w)}let E=!1;function I(O){E||(E=!0,x(),!h&&(i!==null?(O||(c=2),clearTimeout(i),m(0)):O||(c=1)))}return m(0),s=setTimeout(()=>{l=!0,I(!0)},n),I}function oE(e){e(!1)}/**
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
 */function aE(e){return e!==void 0}function Af(e,t,n,r){if(r<t)throw Rf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Rf(`Invalid value for '${e}'. Expected ${n} or less.`)}function lE(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var da;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(da||(da={}));/**
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
 */function cE(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class uE{constructor(t,n,r,i,s,l,c,u,h,f,m,x=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,E)=>{this.resolve_=S,this.reject_=E,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ho(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const l=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(l),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(l),this.pendingConnection_=null;const c=s.getErrorCode()===da.NO_ERROR,u=s.getStatus();if(!c||cE(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===da.ABORT;r(!1,new ho(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ho(h,s))})},n=(r,i)=>{const s=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());aE(u)?s(u):s()}catch(u){l(u)}else if(c!==null){const u=Qk();u.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,u)):l(u)}else if(i.canceled){const u=this.appDelete_?cy():eE();l(u)}else{const u=Zk();l(u)}};this.canceled_?n(!1,new ho(!1,null,!0)):this.backoffId_=sE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&oE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ho{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function dE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function hE(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function pE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function fE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function gE(e,t,n,r,i,s,l=!0){const c=lE(e.urlParams),u=e.url+c,h=Object.assign({},e.headers);return pE(h,t),dE(h,n),hE(h,s),fE(h,r),new uE(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
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
 */function mE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function vE(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class ha{constructor(t,n){this._service=t,n instanceof vt?this._location=n:this._location=vt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ha(t,n)}get root(){const t=new vt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vE(this._location.path)}get storage(){return this._service}get parent(){const t=mE(this._location.path);if(t===null)return null;const n=new vt(this._location.bucket,t);return new ha(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw rE(t)}}function Df(e,t){const n=t==null?void 0:t[Xk];return n==null?null:vt.makeFromBucketSpec(n,e)}function yE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:yv(i,e.app.options.projectId))}class xE{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ly,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yk,this._maxUploadRetryTime=Jk,this._requests=new Set,i!=null?this._bucket=vt.makeFromBucketSpec(i,this._host):this._bucket=Df(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,t):this._bucket=Df(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Af("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Af("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ha(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new iE(cy());{const l=gE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Of="@firebase/storage",Lf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="storage";function wE(e=fd(),t){e=kt(e);const r=Oa(e,uy).getImmediate({identifier:t}),i=gv("storage");return i&&bE(r,...i),r}function bE(e,t,n,r={}){yE(e,t,n,r)}function _E(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new xE(n,r,i,t,mr)}function kE(){ur(new $n(uy,_E,"PUBLIC").setMultipleInstances(!0)),It(Of,Lf,""),It(Of,Lf,"esm2017")}kE();const EE={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Nd=bv(EE),Ii=Ck(Nd);Gk(Nd);wE(Nd);const dy=R.createContext(void 0),jE=({children:e})=>{const[t,n]=R.useState(null),[r,i]=R.useState(!0),[s,l]=R.useState(null);R.useEffect(()=>{const S=m_(Ii,E=>{n(E),i(!1)});return()=>S()},[]);const x={user:t,loading:r,error:s,login:async(S,E)=>{try{l(null),i(!0),await d_(Ii,S,E)}catch(I){const O=Jl(I.code);throw l(O),new Error(O)}finally{i(!1)}},register:async(S,E,I)=>{try{l(null),i(!0);const{user:O}=await u_(Ii,S,E);I&&await p_(O,{displayName:I})}catch(O){const b=Jl(O.code);throw l(b),new Error(b)}finally{i(!1)}},logout:async()=>{try{l(null),await v_(Ii)}catch(S){throw l("Error al cerrar sesión"),S}},resetPassword:async S=>{try{l(null),await c_(Ii,S)}catch(E){const I=Jl(E.code);throw l(I),new Error(I)}},clearError:()=>l(null)};return o.jsx(dy.Provider,{value:x,children:e})},hy=()=>{const e=R.useContext(dy);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function Jl(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const Xe=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=hy(),i=cn();return r?o.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[o.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?o.jsx(o.Fragment,{children:e}):o.jsx(jo,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=R.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:u,...h},f)=>R.createElement("svg",{ref:f,...SE,width:i,height:i,stroke:r,strokeWidth:l?Number(s)*24/Number(i):s,className:["lucide",`lucide-${NE(e)}`,c].join(" "),...h},[...t.map(([m,x])=>R.createElement(m,x)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=B("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=B("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=B("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=B("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=B("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=B("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=B("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=B("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=B("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=B("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=B("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=B("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=B("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=B("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=B("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=B("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=B("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=B("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=B("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=B("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=B("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=B("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=B("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=B("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),GE=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Zt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:ma,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:Is,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:ei,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:BE,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:KE,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return o.jsxs("div",{className:"landing-page",children:[o.jsxs("nav",{className:"navbar",children:[o.jsxs("div",{className:"nav-brand",children:[o.jsx(Zt,{size:32}),o.jsx("span",{children:"Sistema Courier"})]}),o.jsxs("div",{className:"nav-links",children:[o.jsx("a",{href:"#features",children:"Características"}),o.jsx("a",{href:"#pricing",children:"Precios"}),o.jsx(Re,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),o.jsx(Re,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),o.jsxs("section",{className:"hero",children:[o.jsxs("div",{className:"hero-content",children:[o.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),o.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),o.jsxs("div",{className:"hero-buttons",children:[o.jsxs(Re,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",o.jsx(pa,{size:20})]}),o.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),o.jsxs("div",{className:"hero-trust",children:[o.jsx("span",{children:"Confiado por +100 empresas de courier"}),o.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>o.jsx(ou,{size:16,fill:"#f59e0b"},r))})]})]}),o.jsx("div",{className:"hero-image",children:o.jsxs("div",{className:"dashboard-preview",children:[o.jsx("div",{className:"preview-header",children:o.jsxs("div",{className:"dots",children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})}),o.jsxs("div",{className:"preview-content",children:[o.jsx("div",{className:"mock-stat"}),o.jsx("div",{className:"mock-stat"}),o.jsx("div",{className:"mock-stat"}),o.jsx("div",{className:"mock-chart"})]})]})})]}),o.jsxs("section",{id:"features",className:"features",children:[o.jsx("h2",{children:"Todo lo que necesitas para operar"}),o.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),o.jsx("div",{className:"features-grid",children:t.map((n,r)=>o.jsxs("div",{className:"feature-card",children:[o.jsx("div",{className:"feature-icon",children:o.jsx(n.icon,{size:28})}),o.jsx("h3",{children:n.title}),o.jsx("p",{children:n.description})]},r))})]}),o.jsxs("section",{id:"pricing",className:"pricing",children:[o.jsx("h2",{children:"Planes simples y transparentes"}),o.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),o.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>o.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&o.jsx("span",{className:"popular-badge",children:"Más Popular"}),o.jsx("h3",{children:n.name}),o.jsx("p",{className:"plan-description",children:n.description}),o.jsxs("div",{className:"plan-price",children:[n.priceLabel&&o.jsx("span",{className:"price-label",children:n.priceLabel}),o.jsxs("span",{className:"price",children:["$",n.price]}),o.jsx("span",{className:"period",children:"/mes"})]}),o.jsx("ul",{className:"plan-features",children:n.features.map((i,s)=>o.jsxs("li",{children:[o.jsx(Nn,{size:16})," ",i]},s))}),o.jsx(Re,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),o.jsxs("section",{className:"cta",children:[o.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),o.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),o.jsxs(Re,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",o.jsx(pa,{size:24})]})]}),o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"footer-content",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx(Zt,{size:28}),o.jsx("span",{children:"Sistema Courier"}),o.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),o.jsxs("div",{className:"footer-links",children:[o.jsx("h4",{children:"Producto"}),o.jsx("a",{href:"#features",children:"Características"}),o.jsx("a",{href:"#pricing",children:"Precios"}),o.jsx("a",{href:"/docs",children:"Documentación"})]}),o.jsxs("div",{className:"footer-links",children:[o.jsx("h4",{children:"Empresa"}),o.jsx("a",{href:"/about",children:"Nosotros"}),o.jsx("a",{href:"/contact",children:"Contacto"}),o.jsx("a",{href:"/blog",children:"Blog"})]}),o.jsxs("div",{className:"footer-links",children:[o.jsx("h4",{children:"Legal"}),o.jsx("a",{href:"/privacy",children:"Privacidad"}),o.jsx("a",{href:"/terms",children:"Términos"})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),o.jsx("style",{children:`
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
      `})]})},XE=()=>{const e=_t(),[t,n]=R.useState(1),[r,i]=R.useState(!1),[s,l]=R.useState(""),[c,u]=R.useState("idle"),[h,f]=R.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),m=b=>{const{name:y,value:w}=b.target;if(f({...h,[y]:w}),l(""),y==="company_name"){const T=w.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);f(A=>({...A,subdomain:T})),T.length>=3&&x(T)}if(y==="subdomain"){const T=w.toLowerCase().replace(/[^a-z0-9-]/g,"");f(A=>({...A,subdomain:T})),T.length>=3&&x(T)}},x=async b=>{u("checking");try{const w=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:b})})).json();u(w.available?"available":"taken")}catch{u("idle")}},S=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),E=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),I=()=>{t===1&&S()&&n(2)},O=async b=>{if(b.preventDefault(),!!E()){i(!0),l("");try{const y=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),w=await y.json();if(!y.ok)throw new Error(w.error||"Error al crear la cuenta");e(`/onboarding?tenant=${w.tenant.subdomain}`)}catch(y){l(y.message)}finally{i(!1)}}};return o.jsxs("div",{className:"register-page",children:[o.jsxs("div",{className:"register-container",children:[o.jsxs("div",{className:"register-brand",children:[o.jsxs(Re,{to:"/",className:"brand-logo",children:[o.jsx(Zt,{size:40}),o.jsx("span",{children:"Sistema Courier"})]}),o.jsxs("div",{className:"brand-content",children:[o.jsx("h2",{children:"Comienza tu prueba gratuita"}),o.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),o.jsxs("ul",{className:"brand-features",children:[o.jsxs("li",{children:[o.jsx(Nn,{size:20})," Configuración en minutos"]}),o.jsxs("li",{children:[o.jsx(Nn,{size:20})," Soporte incluido"]}),o.jsxs("li",{children:[o.jsx(Nn,{size:20})," Cancela cuando quieras"]})]})]})]}),o.jsxs("div",{className:"register-form-container",children:[o.jsxs("div",{className:"form-header",children:[o.jsx("h1",{children:"Crear cuenta"}),o.jsxs("p",{children:["Paso ",t," de 2"]})]}),o.jsxs("div",{className:"progress-bar",children:[o.jsx("div",{className:"progress-step active",children:"1"}),o.jsx("div",{className:"progress-line"}),o.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),s&&o.jsxs("div",{className:"error-message",children:[o.jsx(ms,{size:18}),s]}),o.jsx("form",{onSubmit:O,children:t===1?o.jsxs("div",{className:"form-step",children:[o.jsx("h3",{children:"Información de la empresa"}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Nombre de la empresa"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(fa,{size:20}),o.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:m,placeholder:"Mi Empresa de Courier",required:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Tu subdominio"}),o.jsxs("div",{className:"input-wrapper subdomain-input",children:[o.jsx(ei,{size:20}),o.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:m,placeholder:"miempresa",required:!0}),o.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&o.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&o.jsxs("span",{className:"subdomain-status available",children:[o.jsx(Nn,{size:14})," Disponible"]}),c==="taken"&&o.jsxs("span",{className:"subdomain-status taken",children:[o.jsx(ms,{size:14})," No disponible"]})]}),o.jsxs("button",{type:"button",onClick:I,className:"btn-next",children:["Continuar ",o.jsx(pa,{size:20})]})]}):o.jsxs("div",{className:"form-step",children:[o.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[o.jsx(Ua,{size:18})," Atrás"]}),o.jsx("h3",{children:"Tu cuenta de administrador"}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Tu nombre"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(HE,{size:20}),o.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:m,placeholder:"Juan Pérez",required:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Email"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(Id,{size:20}),o.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:m,placeholder:"juan@miempresa.com",required:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Contraseña"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(su,{size:20}),o.jsx("input",{type:"password",name:"password",value:h.password,onChange:m,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Confirmar contraseña"}),o.jsxs("div",{className:"input-wrapper",children:[o.jsx(su,{size:20}),o.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:m,placeholder:"Repite la contraseña",required:!0})]})]}),o.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),o.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",o.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",o.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),o.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",o.jsx(Re,{to:"/login",children:"Iniciar sesión"})]})]})]}),o.jsx("style",{children:`
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
      `})]})},YE=()=>{const e=_t(),[t]=Aw();t.get("tenant");const[n,r]=R.useState(1),[i,s]=R.useState(!1),[l,c]=R.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),u=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=x=>{var E;const S=(E=x.target.files)==null?void 0:E[0];S&&c({...l,logo:S,logo_preview:URL.createObjectURL(S)})},f=async()=>{s(!0);try{if(l.logo){const x=new FormData;x.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:x})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(x){console.error("Error saving onboarding:",x)}finally{s(!1)}},m=()=>{e("/dashboard")};return o.jsxs("div",{className:"onboarding-wizard",children:[o.jsxs("div",{className:"wizard-container",children:[o.jsxs("div",{className:"wizard-header",children:[o.jsx(Zt,{size:32,color:"#3b82f6"}),o.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),o.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),o.jsx("div",{className:"wizard-progress",children:[1,2,3].map(x=>o.jsx("div",{className:`progress-dot ${n>=x?"active":""}`,children:n>x?o.jsx(Nn,{size:16}):x},x))}),o.jsxs("div",{className:"wizard-content",children:[n===1&&o.jsxs("div",{className:"wizard-step",children:[o.jsx("div",{className:"step-icon",children:o.jsx(Ff,{size:32})}),o.jsx("h2",{children:"Sube tu logo"}),o.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),o.jsx("div",{className:"logo-upload",children:l.logo_preview?o.jsxs("div",{className:"logo-preview",children:[o.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),o.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):o.jsxs("label",{className:"upload-area",children:[o.jsx(Ff,{size:40}),o.jsx("span",{children:"Arrastra o haz clic para subir"}),o.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),o.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&o.jsxs("div",{className:"wizard-step",children:[o.jsx("div",{className:"step-icon",children:o.jsx(zE,{size:32})}),o.jsx("h2",{children:"Elige tus colores"}),o.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),o.jsx("div",{className:"color-picker",children:u.map(x=>o.jsx("button",{className:`color-option ${l.primary_color===x?"selected":""}`,style:{backgroundColor:x},onClick:()=>c({...l,primary_color:x}),children:l.primary_color===x&&o.jsx(Nn,{size:20})},x))}),o.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:o.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&o.jsxs("div",{className:"wizard-step",children:[o.jsx("div",{className:"step-icon",children:o.jsx(Uf,{size:32})}),o.jsx("h2",{children:"Información de contacto"}),o.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),o.jsxs("div",{className:"contact-form",children:[o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Teléfono (opcional)"}),o.jsx("input",{type:"tel",value:l.company_phone,onChange:x=>c({...l,company_phone:x.target.value}),placeholder:"+1 234 567 8900"})]}),o.jsxs("div",{className:"input-group",children:[o.jsx("label",{children:"Dirección (opcional)"}),o.jsx("input",{type:"text",value:l.company_address,onChange:x=>c({...l,company_address:x.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),o.jsxs("div",{className:"wizard-nav",children:[n>1?o.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[o.jsx(Ua,{size:20})," Atrás"]}):o.jsx("button",{onClick:m,className:"btn-skip",children:"Omitir configuración"}),n<3?o.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",o.jsx(pa,{size:20})]}):o.jsxs("button",{onClick:f,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",o.jsx(Uf,{size:20})]})]})]}),o.jsx("style",{children:`
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
      `})]})},JE=()=>{var b,y,w,T,A,z,_,v;const{tenant:e,isWhiteLabel:t}=rt(),{login:n,clearError:r}=hy(),i=_t(),s=cn(),[l,c]=R.useState(""),[u,h]=R.useState(""),[f,m]=R.useState(!1),[x,S]=R.useState(""),E=((y=(b=s.state)==null?void 0:b.from)==null?void 0:y.pathname)||"/dashboard",I=async k=>{k.preventDefault(),m(!0),S(""),r();try{await n(l,u),i(E,{replace:!0})}catch(N){S(N.message||"Error al iniciar sesión")}finally{m(!1)}},O=((w=e==null?void 0:e.branding)==null?void 0:w.primary_color)||"#3b82f6";return o.jsxs("div",{className:"login-page",children:[o.jsxs("div",{className:"login-container",children:[o.jsx("div",{className:"login-logo",children:(T=e==null?void 0:e.branding)!=null&&T.logo_url?o.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):o.jsx("div",{className:"logo-placeholder",children:((z=(A=e==null?void 0:e.branding)==null?void 0:A.company_name)==null?void 0:z.charAt(0))||"C"})}),o.jsx("h1",{children:((_=e==null?void 0:e.branding)==null?void 0:_.company_name)||"Sistema Courier"}),((v=e==null?void 0:e.branding)==null?void 0:v.tagline)&&o.jsx("p",{className:"tagline",children:e.branding.tagline}),o.jsxs("form",{onSubmit:I,children:[x&&o.jsx("div",{className:"error-message",children:x}),o.jsxs("div",{className:"input-group",children:[o.jsx(Id,{size:20,className:"input-icon"}),o.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:k=>c(k.target.value),required:!0})]}),o.jsxs("div",{className:"input-group",children:[o.jsx(su,{size:20,className:"input-icon"}),o.jsx("input",{type:"password",placeholder:"Contraseña",value:u,onChange:k=>h(k.target.value),required:!0})]}),o.jsx("button",{type:"submit",className:"btn-login",disabled:f,style:{backgroundColor:O},children:f?"Iniciando sesión...":o.jsxs(o.Fragment,{children:[o.jsx(LE,{size:20}),"Iniciar Sesión"]})}),o.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&o.jsx("div",{className:"login-footer",children:o.jsxs("p",{children:["Powered by ",o.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),o.jsx("style",{children:`
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
      `})]})},QE=()=>{var I,O,b;const{tenant:e,isWhiteLabel:t}=rt(),n=((I=e==null?void 0:e.branding)==null?void 0:I.primary_color)||"#3b82f6",[r,i]=R.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[s,l]=R.useState([]),[c,u]=R.useState(!0);R.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{u(!0);const y="http://localhost:3001",T=await(await fetch(`${y}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(T);const z=await(await fetch(`${y}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(z)}catch(y){console.error("Error fetching dashboard data:",y)}finally{u(!1)}},f=y=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(y),m=y=>{const w=new Date(y),A=new Date().getTime()-w.getTime(),z=Math.floor(A/6e4);if(z<1)return"Hace un momento";if(z<60)return`Hace ${z} min`;const _=Math.floor(z/60);if(_<24)return`Hace ${_} hora${_>1?"s":""}`;const v=Math.floor(_/24);return`Hace ${v} día${v>1?"s":""}`},x=y=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[y]||y,S=y=>{switch(y){case"delivered":return o.jsx(Fa,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return o.jsx(ma,{size:16,className:"status-icon warning"});case"assigned":case"processing":return o.jsx(Zt,{size:16,className:"status-icon info"});default:return o.jsx(Cd,{size:16,className:"status-icon pending"})}},E=[{icon:Zt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:ma,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:Is,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:vs,label:"Ingresos Mes",value:f(r.monthlyRevenue),color:"#f59e0b"}];return o.jsxs("div",{className:"dashboard",children:[o.jsxs("header",{className:"dashboard-header",children:[o.jsx("div",{className:"header-left",children:(O=e==null?void 0:e.branding)!=null&&O.logo_url?o.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):o.jsx("span",{className:"header-title",children:((b=e==null?void 0:e.branding)==null?void 0:b.company_name)||"Sistema Courier"})}),o.jsxs("div",{className:"header-right",children:[o.jsx("span",{className:"user-name",children:"Admin"}),o.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),o.jsxs("main",{className:"dashboard-main",children:[o.jsx("div",{className:"stats-grid",children:E.map((y,w)=>o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",style:{backgroundColor:`${y.color}20`,color:y.color},children:o.jsx(y.icon,{size:24})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("div",{className:"stat-value",children:c?"...":y.value}),o.jsx("div",{className:"stat-label",children:y.label})]})]},w))}),o.jsxs("div",{className:"dashboard-grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("h3",{children:"Paquetes Recientes"}),o.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),o.jsx("div",{className:"card-content",children:c?o.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):s.length===0?o.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):s.slice(0,4).map(y=>o.jsxs("div",{className:"package-item",children:[o.jsxs("div",{className:"package-info",children:[o.jsx("span",{className:"package-id",children:y.tracking_number}),o.jsx("span",{className:"package-client",children:y.client_name||"Sin cliente"})]}),o.jsxs("div",{className:"package-status",children:[S(y.status),o.jsx("span",{children:x(y.status)})]}),o.jsx("span",{className:"package-time",children:m(y.created_at)})]},y.id))})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("h3",{children:"Rendimiento"}),o.jsx(ga,{size:20,style:{color:"#10b981"}})]}),o.jsxs("div",{className:"card-content performance-grid",children:[o.jsxs("div",{className:"performance-item",children:[o.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),o.jsx("span",{className:"perf-value success",children:"94%"})]}),o.jsxs("div",{className:"performance-item",children:[o.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),o.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),o.jsxs("div",{className:"performance-item",children:[o.jsx("span",{className:"perf-label",children:"Incidentes"}),o.jsx("span",{className:"perf-value warning",children:"3"})]}),o.jsxs("div",{className:"performance-item",children:[o.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),o.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&o.jsxs("div",{className:"trial-notice",children:[o.jsx(ms,{size:20}),o.jsx("span",{children:"Tu período de prueba termina pronto. "}),o.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),o.jsx("style",{children:`
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
      `})]})},ZE=()=>{var y,w;const{tenant:e}=rt(),t=_t(),[n,r]=R.useState([]),[i,s]=R.useState(!0),[l,c]=R.useState(""),[u,h]=R.useState(""),[f,m]=R.useState(1),[x,S]=R.useState(0),E=20;R.useEffect(()=>{e&&I()},[e,f,l,u]);const I=async()=>{var T;if(e)try{s(!0);const A="http://localhost:3001",z=new URLSearchParams({page:f.toString(),limit:E.toString(),...l&&{search:l},...u&&{status:u}}),v=await(await fetch(`${A}/api/packages?${z}`,{headers:{"X-Tenant-ID":e.id}})).json();r(v.packages||[]),S(((T=v.pagination)==null?void 0:T.total)||0)}catch(A){console.error("Error fetching packages:",A)}finally{s(!1)}},O=T=>{const z={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[T]||{label:T,color:"#6b7280"};return o.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${z.color}20`,color:z.color},children:z.label})},b=T=>new Date(T).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return o.jsxs("div",{className:"packages-page",children:[o.jsxs("div",{className:"page-header",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Paquetes"}),o.jsxs("p",{children:[x," paquetes en total"]})]}),o.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[o.jsx(ti,{size:20}),"Nuevo Paquete"]})]}),o.jsxs("div",{className:"filters-bar",children:[o.jsxs("div",{className:"search-box",children:[o.jsx(Ba,{size:20}),o.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:T=>{c(T.target.value),m(1)}})]}),o.jsxs("select",{value:u,onChange:T=>{h(T.target.value),m(1)},className:"status-filter",children:[o.jsx("option",{value:"",children:"Todos los estados"}),o.jsx("option",{value:"pending",children:"Pendiente"}),o.jsx("option",{value:"processing",children:"Procesando"}),o.jsx("option",{value:"assigned",children:"Asignado"}),o.jsx("option",{value:"in_transit",children:"En tránsito"}),o.jsx("option",{value:"out_for_delivery",children:"En reparto"}),o.jsx("option",{value:"delivered",children:"Entregado"}),o.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),o.jsx("div",{className:"table-container",children:i?o.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Zt,{size:48}),o.jsx("h3",{children:"No hay paquetes"}),o.jsx("p",{children:"Crea tu primer paquete para comenzar"}),o.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[o.jsx(ti,{size:20}),"Crear Paquete"]})]}):o.jsxs("table",{className:"packages-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Tracking"}),o.jsx("th",{children:"Destinatario"}),o.jsx("th",{children:"Dirección"}),o.jsx("th",{children:"Estado"}),o.jsx("th",{children:"Fecha"}),o.jsx("th",{children:"Acciones"})]})}),o.jsx("tbody",{children:n.map(T=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("span",{className:"tracking-number",children:T.tracking_number})}),o.jsx("td",{children:T.recipient_name}),o.jsx("td",{className:"address-cell",children:T.recipient_address}),o.jsx("td",{children:O(T.status)}),o.jsx("td",{children:b(T.created_at)}),o.jsx("td",{children:o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${T.id}`),title:"Ver detalle",children:o.jsx(RE,{size:16})}),o.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${T.id}/edit`),title:"Editar",children:o.jsx($a,{size:16})})]})})]},T.id))})]})}),!i&&x>E&&o.jsxs("div",{className:"pagination",children:[o.jsx("button",{disabled:f===1,onClick:()=>m(f-1),children:"Anterior"}),o.jsxs("span",{children:["Página ",f," de ",Math.ceil(x/E)]}),o.jsx("button",{disabled:f>=Math.ceil(x/E),onClick:()=>m(f+1),children:"Siguiente"})]}),o.jsx("style",{children:`
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
                    background: ${((y=e==null?void 0:e.branding)==null?void 0:y.primary_color)||"#3b82f6"};
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
                    color: ${((w=e==null?void 0:e.branding)==null?void 0:w.primary_color)||"#3b82f6"};
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
            `})]})},ej=()=>{var b,y,w,T;const{tenant:e}=rt(),t=_t(),[n,r]=R.useState(!1),[i,s]=R.useState([]),[l,c]=R.useState([]),[u,h]=R.useState(null),[f,m]=R.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",zone:"",service_type:"standard",weight:"",dimensions:"",declared_value:"",notes:""});R.useEffect(()=>{e&&(x(),S())},[e]),R.useEffect(()=>{f.zone&&f.weight&&parseFloat(f.weight)>0?E():h(null)},[f.zone,f.weight,f.service_type]);const x=async()=>{if(e)try{const _=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();s(_.clients||[])}catch(A){console.error("Error fetching clients:",A)}},S=async()=>{if(e)try{const _=await(await fetch("http://localhost:3001/api/rates/zones",{headers:{"X-Tenant-ID":e.id}})).json();c(_.zones||[])}catch(A){console.error("Error fetching zones:",A)}},E=async()=>{if(!(!e||!f.zone||!f.weight))try{const _=await(await fetch(`http://localhost:3001/api/rates/calculate?zone=${f.zone}&weight=${f.weight}&serviceType=${f.service_type}`,{headers:{"X-Tenant-ID":e.id}})).json();h(_.totalPrice||null)}catch(A){console.error("Error calculating price:",A),h(null)}},I=A=>{const z=i.find(_=>_.id===A);m(z?{...f,client_id:A,sender_name:z.name,sender_phone:z.phone}:{...f,client_id:A})},O=async A=>{if(A.preventDefault(),!!e){if(!f.client_id||!f.recipient_name||!f.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const _=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...f,weight:parseFloat(f.weight)||0,declared_value:parseFloat(f.declared_value)||0})});if(_.ok){const v=await _.json();alert(`Paquete creado exitosamente! Tracking: ${v.tracking_number}`),t("/packages")}else{const v=await _.json();alert(`Error: ${v.error||"No se pudo crear el paquete"}`)}}catch(z){console.error("Error creating package:",z),alert("Error al crear el paquete")}finally{r(!1)}}};return o.jsxs("div",{className:"new-package-page",children:[o.jsxs("div",{className:"page-header",children:[o.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[o.jsx(Ua,{size:20}),"Volver"]}),o.jsx("h1",{children:"Nuevo Paquete"})]}),o.jsxs("form",{onSubmit:O,className:"package-form",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h2",{children:"Información del Cliente"}),o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Cliente *"}),o.jsxs("select",{value:f.client_id,onChange:A=>I(A.target.value),required:!0,children:[o.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(A=>o.jsx("option",{value:A.id,children:A.name},A.id))]})]})})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h2",{children:"Datos del Remitente"}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Nombre del Remitente"}),o.jsx("input",{type:"text",value:f.sender_name,onChange:A=>m({...f,sender_name:A.target.value}),placeholder:"Nombre completo"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Teléfono del Remitente"}),o.jsx("input",{type:"tel",value:f.sender_phone,onChange:A=>m({...f,sender_phone:A.target.value}),placeholder:"8888-8888"})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h2",{children:"Datos del Destinatario"}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Nombre del Destinatario *"}),o.jsx("input",{type:"text",value:f.recipient_name,onChange:A=>m({...f,recipient_name:A.target.value}),placeholder:"Nombre completo",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Teléfono del Destinatario *"}),o.jsx("input",{type:"tel",value:f.recipient_phone,onChange:A=>m({...f,recipient_phone:A.target.value}),placeholder:"8888-8888",required:!0})]})]}),o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsx("label",{children:"Dirección de Entrega *"}),o.jsx("textarea",{value:f.recipient_address,onChange:A=>m({...f,recipient_address:A.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h2",{children:"Detalles del Paquete"}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Zona de Entrega *"}),o.jsxs("select",{value:f.zone,onChange:A=>m({...f,zone:A.target.value}),required:!0,children:[o.jsx("option",{value:"",children:"Seleccionar zona"}),l.map(A=>o.jsx("option",{value:A,children:A},A))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Tipo de Servicio *"}),o.jsxs("select",{value:f.service_type,onChange:A=>m({...f,service_type:A.target.value}),required:!0,children:[o.jsx("option",{value:"standard",children:"Estándar"}),o.jsx("option",{value:"express",children:"Express"}),o.jsx("option",{value:"same_day",children:"Mismo Día"}),o.jsx("option",{value:"scheduled",children:"Programado"})]})]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Peso (kg) *"}),o.jsx("input",{type:"number",step:"0.01",value:f.weight,onChange:A=>m({...f,weight:A.target.value}),placeholder:"0.00",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Dimensiones"}),o.jsx("input",{type:"text",value:f.dimensions,onChange:A=>m({...f,dimensions:A.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Valor Declarado (₡)"}),o.jsx("input",{type:"number",step:"0.01",value:f.declared_value,onChange:A=>m({...f,declared_value:A.target.value}),placeholder:"0.00"})]})]}),u!==null&&o.jsxs("div",{className:"price-calculator",children:[o.jsx("div",{className:"price-label",children:"Precio Estimado:"}),o.jsxs("div",{className:"price-value",children:["₡",u.toLocaleString("es-CR",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsx("label",{children:"Notas"}),o.jsx("textarea",{value:f.notes,onChange:A=>m({...f,notes:A.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),o.jsxs("div",{className:"form-actions",children:[o.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),o.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[o.jsx(my,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),o.jsx("style",{children:`
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
                    border-color: ${((b=e==null?void 0:e.branding)==null?void 0:b.primary_color)||"#3b82f6"};
                }

                .form-group textarea {
                    resize: vertical;
                    font-family: inherit;
                }

                .price-calculator {
                    background: linear-gradient(135deg, ${((y=e==null?void 0:e.branding)==null?void 0:y.primary_color)||"#3b82f6"} 0%, ${((w=e==null?void 0:e.branding)==null?void 0:w.secondary_color)||"#8b5cf6"} 100%);
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
            `})]})};function au(){return au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},au.apply(null,arguments)}function tj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function nj(e,t){if(e==null)return{};var n,r,i=tj(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function lu(e){"@babel/helpers - typeof";return lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lu(e)}function rj(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function ij(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cu(e,t){return cu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},cu(e,t)}function sj(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&cu(e,t)}function va(e){return va=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},va(e)}function yy(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(yy=function(){return!!e})()}function oj(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aj(e,t){if(t&&(lu(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oj(e)}function lj(e){var t=yy();return function(){var n,r=va(e);if(t){var i=va(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return aj(this,n)}}var xy={exports:{}},cj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uj=cj,dj=uj;function wy(){}function by(){}by.resetWarningCache=wy;var hj=function(){function e(r,i,s,l,c,u){if(u!==dj){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:by,resetWarningCache:wy};return n.PropTypes=n,n};xy.exports=hj();var pj=xy.exports;const Ye=uu(pj);/*!
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
 */function pr(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}pr.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};pr.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};pr.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function Pd(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}Pd.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,i=0;i<=e;i+=1){var s=i/e,l=this._point(s,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(s,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var u=l-n,h=c-r;t+=Math.sqrt(u*u+h*h)}n=l,r=c}return t};Pd.prototype._point=function(e,t,n,r,i){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+i*e*e*e};function fj(e,t,n){var r,i,s,l=null,c=0;n||(n={});var u=function(){c=n.leading===!1?0:Date.now(),l=null,s=e.apply(r,i),l||(r=i=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var f=t-(h-c);return r=this,i=arguments,f<=0||f>t?(l&&(clearTimeout(l),l=null),c=h,s=e.apply(r,i),l||(r=i=null)):!l&&n.trailing!==!1&&(l=setTimeout(u,f)),s}}function ee(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=fj(ee.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=ee.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(i){i.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(i))},this._handleMouseMove=function(i){n._mouseButtonDown&&n._strokeMoveUpdate(i)},this._handleMouseUp=function(i){i.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(i))},this._handleTouchStart=function(i){if(i.targetTouches.length===1){var s=i.changedTouches[0];n._strokeBegin(s)}},this._handleTouchMove=function(i){i.preventDefault();var s=i.targetTouches[0];n._strokeMoveUpdate(s)},this._handleTouchEnd=function(i){var s=i.target===n._canvas;s&&(i.preventDefault(),n._strokeEnd(i))},this.on()}ee.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};ee.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,i=n.ratio||window.devicePixelRatio||1,s=n.width||this._canvas.width/i,l=n.height||this._canvas.height/i;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,s,l)},this._isEmpty=!1};ee.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};ee.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};ee.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};ee.prototype.isEmpty=function(){return this._isEmpty};ee.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};ee.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),i=this._data[this._data.length-1],s=i&&i[i.length-1],l=s&&r.distanceTo(s)<this.minDistance;if(!(s&&l)){var c=this._addPoint(r),u=c.curve,h=c.widths;u&&h&&this._drawCurve(u,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};ee.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],i=r[r.length-1];n.equals(i)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};ee.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};ee.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};ee.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};ee.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new pr(e-r.left,t-r.top,n||new Date().getTime())};ee.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var i=n.c1,s=new Pd(t[1],r,i,t[2]),l=this._calculateCurveWidths(s);return t.shift(),{curve:s,widths:l}}return{}};ee.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,i=e.y-t.y,s=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},u={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+i*i),f=Math.sqrt(s*s+l*l),m=c.x-u.x,x=c.y-u.y,S=f/(h+f),E={x:u.x+m*S,y:u.y+x*S},I=t.x-E.x,O=t.y-E.y;return{c1:new pr(c.x+I,c.y+O),c2:new pr(u.x+I,u.y+O)}};ee.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(i);return r.start=this._lastWidth,r.end=s,this._lastVelocity=i,this._lastWidth=s,r};ee.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};ee.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};ee.prototype._drawCurve=function(e,t,n){var r=this._ctx,i=n-t,s=Math.floor(e.length());r.beginPath();for(var l=0;l<s;l+=1){var c=l/s,u=c*c,h=u*c,f=1-c,m=f*f,x=m*f,S=x*e.startPoint.x;S+=3*m*c*e.control1.x,S+=3*f*u*e.control2.x,S+=h*e.endPoint.x;var E=x*e.startPoint.y;E+=3*m*c*e.control1.y,E+=3*f*u*e.control2.y,E+=h*e.endPoint.y;var I=t+h*i;this._drawPoint(S,E,I)}r.closePath(),r.fill()};ee.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};ee.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var i=e[r];if(i.length>1)for(var s=0;s<i.length;s+=1){var l=i[s],c=new pr(l.x,l.y,l.time),u=l.color;if(s===0)this.penColor=u,this._reset(),this._addPoint(c);else if(s!==i.length-1){var h=this._addPoint(c),f=h.curve,m=h.widths;f&&m&&t(f,m,u)}}else{this._reset();var x=i[0];n(x)}}};ee.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),i=0,s=0,l=n.width/r,c=n.height/r,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttributeNS(null,"width",n.width),u.setAttributeNS(null,"height",n.height),this._fromData(t,function(b,y,w){var T=document.createElement("path");if(!isNaN(b.control1.x)&&!isNaN(b.control1.y)&&!isNaN(b.control2.x)&&!isNaN(b.control2.y)){var A="M "+b.startPoint.x.toFixed(3)+","+b.startPoint.y.toFixed(3)+" "+("C "+b.control1.x.toFixed(3)+","+b.control1.y.toFixed(3)+" ")+(b.control2.x.toFixed(3)+","+b.control2.y.toFixed(3)+" ")+(b.endPoint.x.toFixed(3)+","+b.endPoint.y.toFixed(3));T.setAttribute("d",A),T.setAttribute("stroke-width",(y.end*2.25).toFixed(3)),T.setAttribute("stroke",w),T.setAttribute("fill","none"),T.setAttribute("stroke-linecap","round"),u.appendChild(T)}},function(b){var y=document.createElement("circle"),w=typeof e.dotSize=="function"?e.dotSize():e.dotSize;y.setAttribute("r",w),y.setAttribute("cx",b.x),y.setAttribute("cy",b.y),y.setAttribute("fill",b.color),u.appendChild(y)});var h="data:image/svg+xml;base64,",f='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+i+" "+s+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",m=u.innerHTML;if(m===void 0){var x=document.createElement("dummy"),S=u.childNodes;x.innerHTML="";for(var E=0;E<S.length;E+=1)x.appendChild(S[E].cloneNode(!0));m=x.innerHTML}var I="</svg>",O=f+m+I;return h+btoa(O)};ee.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};ee.prototype.toData=function(){return this._data};var _y={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(rx,function(){return function(n){function r(s){if(i[s])return i[s].exports;var l=i[s]={exports:{},id:s,loaded:!1};return n[s].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(n,r){function i(h){var f=h.getContext("2d"),m=h.width,x=h.height,S=f.getImageData(0,0,m,x).data,E=c(!0,m,x,S),I=c(!1,m,x,S),O=u(!0,m,x,S),b=u(!1,m,x,S),y=b-O+1,w=I-E+1,T=f.getImageData(O,E,y,w);return h.width=y,h.height=w,f.clearRect(0,0,y,w),f.putImageData(T,0,0),h}function s(h,f,m,x){return{red:x[4*(m*f+h)],green:x[4*(m*f+h)+1],blue:x[4*(m*f+h)+2],alpha:x[4*(m*f+h)+3]}}function l(h,f,m,x){return s(h,f,m,x).alpha}function c(h,f,m,x){for(var S=h?1:-1,E=h?0:m-1,I=E;h?I<m:I>-1;I+=S)for(var O=0;O<f;O++)if(l(O,I,f,x))return I;return null}function u(h,f,m,x){for(var S=h?1:-1,E=h?0:f-1,I=E;h?I<f:I>-1;I+=S)for(var O=0;O<m;O++)if(l(I,O,f,x))return I;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}])})})(_y);var gj=_y.exports;const mj=uu(gj);var vj=["canvasProps","clearOnResize"],Va=function(e){sj(n,e);var t=lj(n);function n(){var r;ij(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return r=t.call.apply(t,[this].concat(s)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var u=nj(c,vj);return u},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new ee(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),u=document.createElement("canvas");return u.width=c.width,u.height=c.height,u.getContext("2d").drawImage(c,0,0),mj(u)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,u,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},f=h.width,m=h.height;if(!(typeof f<"u"&&typeof m<"u")){var x=r.getCanvas(),S=Math.max((u=window.devicePixelRatio)!==null&&u!==void 0?u:1,1);typeof f>"u"&&(x.width=x.offsetWidth*S),typeof m>"u"&&(x.height=x.offsetHeight*S),x.getContext("2d").scale(S,S),r.clear()}},r.render=function(){var c=r.props.canvasProps;return gu.createElement("canvas",au({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,u){return r.getSignaturePad().fromDataURL(c,u)},r.toDataURL=function(c,u){return r.getSignaturePad().toDataURL(c,u)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return rj(n)}(R.Component);Va.propTypes={velocityFilterWeight:Ye.number,minWidth:Ye.number,maxWidth:Ye.number,minDistance:Ye.number,dotSize:Ye.oneOfType([Ye.number,Ye.func]),penColor:Ye.string,throttle:Ye.number,onEnd:Ye.func,onBegin:Ye.func,canvasProps:Ye.object,clearOnResize:Ye.bool};Va.defaultProps={clearOnResize:!0};Va.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const yj=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:i})=>{var S,E;const{tenant:s}=rt(),l=R.useRef(null),[c,u]=R.useState(""),[h,f]=R.useState(!1),m=()=>{var I;(I=l.current)==null||I.clear()},x=async()=>{var I,O;if((I=l.current)!=null&&I.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{f(!0);const b=(O=l.current)==null?void 0:O.toDataURL(),w=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":s.id},body:JSON.stringify({signatureUrl:b,recipientName:n,recipientId:c})});if(w.ok)alert("Entrega confirmada exitosamente"),i();else{const T=await w.json();alert(`Error: ${T.error||"No se pudo confirmar la entrega"}`)}}catch(b){console.error("Error confirmando entrega:",b),alert("Error al confirmar la entrega")}finally{f(!1)}};return o.jsx("div",{className:"modal-overlay",onClick:r,children:o.jsxs("div",{className:"modal-content",onClick:I=>I.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{children:"Confirmar Entrega"}),o.jsx("button",{className:"btn-close",onClick:r,children:o.jsx(qE,{size:24})})]}),o.jsxs("div",{className:"modal-body",children:[o.jsxs("div",{className:"package-info",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Tracking:"})," ",t]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Destinatario:"})," ",n]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Cédula del Destinatario *"}),o.jsx("input",{type:"text",value:c,onChange:I=>u(I.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),o.jsxs("div",{className:"signature-section",children:[o.jsx("label",{children:"Firma del Destinatario *"}),o.jsx("div",{className:"signature-canvas-container",children:o.jsx(Va,{ref:l,canvasProps:{className:"signature-canvas"}})}),o.jsxs("button",{className:"btn-clear",onClick:m,disabled:h,children:[o.jsx($E,{size:16}),"Limpiar"]})]})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),o.jsxs("button",{className:"btn-primary",onClick:x,disabled:h,children:[o.jsx(Nn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),o.jsx("style",{children:`
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
                        border-color: ${((S=s==null?void 0:s.branding)==null?void 0:S.primary_color)||"#3b82f6"};
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
                        background: ${((E=s==null?void 0:s.branding)==null?void 0:E.primary_color)||"#3b82f6"};
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
                `})]})})},xj=()=>{var I,O;const{id:e}=sv(),{tenant:t}=rt(),n=_t(),[r,i]=R.useState(null),[s,l]=R.useState([]),[c,u]=R.useState(!0),[h,f]=R.useState(!1);R.useEffect(()=>{t&&e&&m()},[t,e]);const m=async()=>{if(!(!t||!e))try{u(!0);const w=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(w)}catch(b){console.error("Error fetching package:",b)}finally{u(!1)}},x=async()=>{if(!(!t||!e))try{const y=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(y.ok){const w=await y.blob(),T=window.URL.createObjectURL(w),A=document.createElement("a");A.href=T,A.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(A),A.click(),window.URL.revokeObjectURL(T),document.body.removeChild(A)}}catch(b){console.error("Error downloading label:",b),alert("Error al descargar la etiqueta")}},S=async()=>{if(!(!t||!e))try{const y=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(y.ok){const w=await y.blob(),T=window.URL.createObjectURL(w),A=document.createElement("a");A.href=T,A.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(A),A.click(),window.URL.revokeObjectURL(T),document.body.removeChild(A)}}catch(b){console.error("Error downloading delivery note:",b),alert("Error al descargar la nota de entrega")}},E=b=>{const w={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[b]||{label:b,color:"#6b7280"};return o.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${w.color}20`,color:w.color},children:w.label})};return c?o.jsx("div",{className:"loading-page",children:"Cargando..."}):r?o.jsxs("div",{className:"package-detail-page",children:[o.jsxs("div",{className:"page-header",children:[o.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[o.jsx(Ua,{size:20}),"Volver"]}),o.jsxs("div",{className:"header-info",children:[o.jsx("h1",{children:r.tracking_number}),E(r.status)]}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("button",{className:"btn-action",onClick:x,title:"Imprimir Etiqueta",children:[o.jsx(UE,{size:20}),"Etiqueta"]}),o.jsxs("button",{className:"btn-action",onClick:S,title:"Nota de Entrega",children:[o.jsx(AE,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&o.jsxs("button",{className:"btn-deliver",onClick:()=>f(!0),title:"Confirmar Entrega",children:[o.jsx(Fa,{size:20}),"Confirmar Entrega"]}),o.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[o.jsx($a,{size:20}),"Editar"]})]})]}),o.jsxs("div",{className:"detail-grid",children:[o.jsxs("div",{className:"detail-card",children:[o.jsx("h2",{children:"Información General"}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Cliente:"}),o.jsx("span",{className:"value",children:r.client_name})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Courier:"}),o.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Peso:"}),o.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Dimensiones:"}),o.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Valor Declarado:"}),o.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Fecha Creación:"}),o.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Fecha Entrega:"}),o.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),o.jsxs("div",{className:"detail-card",children:[o.jsx("h2",{children:"Remitente"}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Nombre:"}),o.jsx("span",{className:"value",children:r.sender_name})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Teléfono:"}),o.jsx("span",{className:"value",children:r.sender_phone})]})]}),o.jsxs("div",{className:"detail-card",children:[o.jsx("h2",{children:"Destinatario"}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Nombre:"}),o.jsx("span",{className:"value",children:r.recipient_name})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Teléfono:"}),o.jsx("span",{className:"value",children:r.recipient_phone})]}),o.jsxs("div",{className:"detail-row",children:[o.jsx("span",{className:"label",children:"Dirección:"}),o.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&o.jsxs("div",{className:"detail-card full-width",children:[o.jsx("h2",{children:"Notas"}),o.jsx("p",{children:r.notes})]})]}),h&&o.jsx(yj,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>f(!1),onSuccess:()=>{f(!1),m()}}),o.jsx("style",{children:`
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
                    background: ${((I=t==null?void 0:t.branding)==null?void 0:I.primary_color)||"#3b82f6"};
                    color: white;
                    border: none;
                }

                .btn-edit:hover {
                    opacity: 0.9;
                    background: ${((O=t==null?void 0:t.branding)==null?void 0:O.primary_color)||"#3b82f6"};
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
            `})]}):o.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},wj=()=>{const{tenant:e}=rt(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[s,l]=R.useState("");R.useEffect(()=>{e&&c()},[e,s]);const c=async()=>{if(e)try{i(!0);const u="http://localhost:3001",h=new URLSearchParams({...s&&{search:s}}),m=await(await fetch(`${u}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(m.clients||[])}catch(u){console.error("Error:",u)}finally{i(!1)}};return o.jsxs("div",{className:"clients-page",children:[o.jsxs("div",{className:"page-header",children:[o.jsx("h1",{children:"Clientes"}),o.jsxs("p",{children:[t.length," clientes registrados"]})]}),o.jsxs("div",{className:"search-box",children:[o.jsx(Ba,{size:20}),o.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:s,onChange:u=>l(u.target.value)})]}),o.jsx("div",{className:"table-container",children:r?o.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Is,{size:48}),o.jsx("h3",{children:"No hay clientes"})]}):o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nombre"}),o.jsx("th",{children:"Empresa"}),o.jsx("th",{children:"Email"}),o.jsx("th",{children:"Teléfono"}),o.jsx("th",{children:"Paquetes"})]})}),o.jsx("tbody",{children:t.map(u=>o.jsxs("tr",{children:[o.jsx("td",{children:u.name}),o.jsx("td",{children:u.company_name||"-"}),o.jsx("td",{children:u.email}),o.jsx("td",{children:u.phone}),o.jsx("td",{children:u.total_packages})]},u.id))})]})}),o.jsx("style",{children:`
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
            `})]})},bj=()=>{const{tenant:e}=rt(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[s,l]=R.useState("");R.useEffect(()=>{e&&c()},[e,s]);const c=async()=>{if(e)try{i(!0);const h="http://localhost:3001",f=new URLSearchParams({...s&&{search:s}}),x=await(await fetch(`${h}/api/couriers?${f}`,{headers:{"X-Tenant-ID":e.id}})).json();n(x.couriers||[])}catch(h){console.error("Error:",h)}finally{i(!1)}},u=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return o.jsxs("div",{className:"couriers-page",children:[o.jsxs("div",{className:"page-header",children:[o.jsx("h1",{children:"Couriers"}),o.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),o.jsxs("div",{className:"search-box",children:[o.jsx(Ba,{size:20}),o.jsx("input",{type:"text",placeholder:"Buscar courier...",value:s,onChange:h=>l(h.target.value)})]}),o.jsx("div",{className:"table-container",children:r?o.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(ma,{size:48}),o.jsx("h3",{children:"No hay couriers"})]}):o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nombre"}),o.jsx("th",{children:"Teléfono"}),o.jsx("th",{children:"Vehículo"}),o.jsx("th",{children:"Placa"}),o.jsx("th",{children:"Zona"}),o.jsx("th",{children:"Entregas"}),o.jsx("th",{children:"Rating"})]})}),o.jsx("tbody",{children:t.map(h=>o.jsxs("tr",{children:[o.jsx("td",{children:h.name}),o.jsx("td",{children:h.phone}),o.jsx("td",{children:u(h.vehicle_type)}),o.jsx("td",{children:h.vehicle_plate||"-"}),o.jsx("td",{children:h.zone||"-"}),o.jsx("td",{children:h.completed_deliveries}),o.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),o.jsx("style",{children:`
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
            `})]})},_j=()=>{var x;const{tenant:e}=rt(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[s,l]=R.useState(!1),[c,u]=R.useState(null);R.useEffect(()=>{e&&h()},[e]);const h=async()=>{if(e)try{i(!0);const I=await(await fetch("http://localhost:3001/api/rates",{headers:{"X-Tenant-ID":e.id}})).json();n(I.rates||[])}catch(S){console.error("Error:",S)}finally{i(!1)}},f=async S=>{if(confirm("¿Eliminar esta tarifa?"))try{(await fetch(`http://localhost:3001/api/rates/${S}`,{method:"DELETE",headers:{"X-Tenant-ID":e.id}})).ok&&h()}catch(E){console.error("Error:",E)}},m=S=>({standard:"Estándar",express:"Express",same_day:"Mismo Día",scheduled:"Programado"})[S]||S;return o.jsxs("div",{className:"rates-page",children:[o.jsxs("div",{className:"page-header",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Tarifas"}),o.jsxs("p",{children:[t.length," tarifas configuradas"]})]}),o.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[o.jsx(ti,{size:20}),"Nueva Tarifa"]})]}),o.jsx("div",{className:"table-container",children:r?o.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(vs,{size:48}),o.jsx("h3",{children:"No hay tarifas configuradas"}),o.jsx("p",{children:"Crea tu primera tarifa para comenzar"})]}):o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nombre"}),o.jsx("th",{children:"Zona"}),o.jsx("th",{children:"Peso (kg)"}),o.jsx("th",{children:"Precio Base"}),o.jsx("th",{children:"Precio/kg"}),o.jsx("th",{children:"Tipo"}),o.jsx("th",{children:"Estado"}),o.jsx("th",{children:"Acciones"})]})}),o.jsx("tbody",{children:t.map(S=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("strong",{children:S.name}),S.description&&o.jsx("div",{className:"description",children:S.description})]}),o.jsx("td",{children:S.zone||"-"}),o.jsxs("td",{children:[S.min_weight," - ",S.max_weight||"∞"]}),o.jsxs("td",{children:["₡",S.base_price.toLocaleString()]}),o.jsxs("td",{children:["₡",S.price_per_kg.toLocaleString()]}),o.jsx("td",{children:m(S.service_type)}),o.jsx("td",{children:o.jsx("span",{className:`status ${S.active?"active":"inactive"}`,children:S.active?"Activa":"Inactiva"})}),o.jsx("td",{children:o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"btn-icon",onClick:()=>{u(S),l(!0)},title:"Editar",children:o.jsx($a,{size:16})}),o.jsx("button",{className:"btn-icon danger",onClick:()=>f(S.id),title:"Eliminar",children:o.jsx(vy,{size:16})})]})})]},S.id))})]})}),o.jsx("style",{children:`
                .rates-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .btn-primary { display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: ${((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6"}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
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
            `})]})},kj=()=>{const{tenant:e}=rt(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[s,l]=R.useState(""),[c,u]=R.useState("");R.useEffect(()=>{e&&h()},[e,s,c]);const h=async()=>{if(e)try{i(!0);let I="http://localhost:3001/api/incidents?";s&&(I+=`status=${s}&`),c&&(I+=`priority=${c}`);const b=await(await fetch(I,{headers:{"X-Tenant-ID":e.id}})).json();n(b.incidents||[])}catch(E){console.error("Error:",E)}finally{i(!1)}},f=E=>({delay:"Retraso",damage:"Daño",loss:"Pérdida",client_absent:"Cliente Ausente",address_error:"Error de Dirección",other:"Otro"})[E]||E,m=E=>{switch(E){case"open":return o.jsx(ru,{size:16});case"investigating":return o.jsx(Cd,{size:16});case"resolved":return o.jsx(Fa,{size:16});case"closed":return o.jsx(WE,{size:16});default:return null}},x=E=>({open:"Abierta",investigating:"Investigando",resolved:"Resuelta",closed:"Cerrada"})[E]||E,S=E=>({low:"#10b981",medium:"#f59e0b",high:"#ef4444",critical:"#991b1b"})[E]||"#6b7280";return o.jsxs("div",{className:"incidents-page",children:[o.jsx("div",{className:"page-header",children:o.jsxs("div",{children:[o.jsx("h1",{children:"Incidencias"}),o.jsxs("p",{children:[t.length," incidencias registradas"]})]})}),o.jsxs("div",{className:"filters",children:[o.jsxs("select",{value:s,onChange:E=>l(E.target.value),children:[o.jsx("option",{value:"",children:"Todos los estados"}),o.jsx("option",{value:"open",children:"Abierta"}),o.jsx("option",{value:"investigating",children:"Investigando"}),o.jsx("option",{value:"resolved",children:"Resuelta"}),o.jsx("option",{value:"closed",children:"Cerrada"})]}),o.jsxs("select",{value:c,onChange:E=>u(E.target.value),children:[o.jsx("option",{value:"",children:"Todas las prioridades"}),o.jsx("option",{value:"low",children:"Baja"}),o.jsx("option",{value:"medium",children:"Media"}),o.jsx("option",{value:"high",children:"Alta"}),o.jsx("option",{value:"critical",children:"Crítica"})]})]}),o.jsx("div",{className:"incidents-list",children:r?o.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(ru,{size:48}),o.jsx("h3",{children:"No hay incidencias"}),o.jsx("p",{children:"No se encontraron incidencias con los filtros seleccionados"})]}):t.map(E=>o.jsxs("div",{className:"incident-card",children:[o.jsxs("div",{className:"incident-header",children:[o.jsxs("div",{className:"incident-title",children:[o.jsx("span",{className:"incident-icon",style:{color:S(E.priority)},children:m(E.status)}),o.jsxs("div",{children:[o.jsx("h3",{children:f(E.type)}),o.jsxs("p",{className:"tracking",children:["Paquete: ",E.tracking_number]})]})]}),o.jsxs("div",{className:"incident-badges",children:[o.jsx("span",{className:`status-badge status-${E.status}`,children:x(E.status)}),o.jsx("span",{className:"priority-badge",style:{backgroundColor:`${S(E.priority)}20`,color:S(E.priority)},children:E.priority.toUpperCase()})]})]}),o.jsxs("div",{className:"incident-body",children:[o.jsx("p",{className:"description",children:E.description}),E.resolution&&o.jsxs("div",{className:"resolution",children:[o.jsx("strong",{children:"Resolución:"})," ",E.resolution]})]}),o.jsxs("div",{className:"incident-footer",children:[o.jsx("span",{className:"date",children:new Date(E.created_at).toLocaleDateString("es-CR")}),o.jsx("span",{className:"client",children:E.client_name})]})]},E.id))}),o.jsx("style",{children:`
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
            `})]})},Ej=()=>{const{tenant:e}=rt(),[t,n]=R.useState([]),[r,i]=R.useState(null),[s,l]=R.useState(!0);R.useEffect(()=>{e&&(c(),u())},[e]);const c=async()=>{if(e)try{l(!0);const m=await(await fetch("http://localhost:3001/api/fuel",{headers:{"X-Tenant-ID":e.id}})).json();n(m.records||[])}catch(h){console.error("Error:",h)}finally{l(!1)}},u=async()=>{if(e)try{const m=await(await fetch("http://localhost:3001/api/fuel/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(m)}catch(h){console.error("Error:",h)}};return o.jsxs("div",{className:"fuel-page",children:[o.jsx("div",{className:"page-header",children:o.jsxs("div",{children:[o.jsx("h1",{children:"Control de Combustible"}),o.jsxs("p",{children:[t.length," registros de combustible"]})]})}),r&&o.jsxs("div",{className:"stats-grid",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:o.jsx(vs,{size:24})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("p",{className:"stat-label",children:"Costo Total"}),o.jsxs("p",{className:"stat-value",children:["₡",r.totalCost.toLocaleString()]})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:o.jsx(PE,{size:24})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("p",{className:"stat-label",children:"Litros Totales"}),o.jsxs("p",{className:"stat-value",children:[r.totalLiters.toFixed(2)," L"]})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:o.jsx(ga,{size:24})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("p",{className:"stat-label",children:"Rendimiento Promedio"}),o.jsxs("p",{className:"stat-value",children:[r.averageEfficiency.toFixed(2)," km/L"]})]})]}),o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:o.jsx(Mf,{size:24})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("p",{className:"stat-label",children:"Registros"}),o.jsx("p",{className:"stat-value",children:r.recordCount})]})]})]}),o.jsxs("div",{className:"records-list",children:[o.jsx("h2",{children:"Registros de Combustible"}),s?o.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Mf,{size:48}),o.jsx("h3",{children:"No hay registros"}),o.jsx("p",{children:"No se encontraron registros de combustible"})]}):o.jsx("div",{className:"table-container",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Fecha"}),o.jsx("th",{children:"Courier"}),o.jsx("th",{children:"Litros"}),o.jsx("th",{children:"Costo"}),o.jsx("th",{children:"Precio/L"}),o.jsx("th",{children:"Odómetro"}),o.jsx("th",{children:"Distancia"}),o.jsx("th",{children:"Rendimiento"}),o.jsx("th",{children:"Estación"})]})}),o.jsx("tbody",{children:t.map(h=>{var f,m,x;return o.jsxs("tr",{children:[o.jsx("td",{children:new Date(h.created_at).toLocaleDateString("es-CR")}),o.jsx("td",{children:h.courier_name||"-"}),o.jsxs("td",{children:[h.liters.toFixed(2)," L"]}),o.jsxs("td",{children:["₡",h.cost.toLocaleString()]}),o.jsxs("td",{children:["₡",((f=h.price_per_liter)==null?void 0:f.toFixed(2))||"-"]}),o.jsxs("td",{children:[((m=h.odometer_reading)==null?void 0:m.toLocaleString())||"-"," km"]}),o.jsxs("td",{children:[((x=h.distance_traveled)==null?void 0:x.toLocaleString())||"-"," km"]}),o.jsx("td",{children:h.efficiency?o.jsxs("span",{className:"efficiency",children:[h.efficiency.toFixed(2)," km/L"]}):"-"}),o.jsx("td",{children:h.station||"-"})]},h.id)})})]})})]}),o.jsx("style",{children:`
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
            `})]})},jj=()=>o.jsxs("div",{className:"loading-page",children:[o.jsxs("div",{className:"loading-container",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("h2",{children:"Cargando..."}),o.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),o.jsx("style",{children:`
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
      `})]}),Sj=({message:e})=>o.jsxs("div",{className:"error-page",children:[o.jsxs("div",{className:"error-container",children:[o.jsx("div",{className:"error-icon",children:o.jsx(ru,{size:64})}),o.jsx("h1",{children:"No se pudo cargar"}),o.jsx("p",{className:"error-message",children:e}),o.jsxs("div",{className:"error-actions",children:[o.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),o.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),o.jsx("style",{children:`
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
      `})]}),Nj=()=>{var N,P;const{tenant:e}=rt(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[s,l]=R.useState(""),[c,u]=R.useState(!1),[h,f]=R.useState(null),[m,x]=R.useState(null),[S,E]=R.useState(""),[I,O]=R.useState(""),b=((N=e==null?void 0:e.plan)==null?void 0:N.id)==="enterprise",y=((P=e==null?void 0:e.branding)==null?void 0:P.primary_color)||"#3b82f6";R.useEffect(()=>{w()},[]);const w=async()=>{try{const j=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(j)}catch(C){console.error("Error fetching domains:",C)}finally{i(!1)}},T=async C=>{if(C.preventDefault(),!!s.trim()){u(!0),E("");try{const j=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:s})}),ve=await j.json();if(!j.ok)throw new Error(ve.error||"Error agregando dominio");n([...t,ve.domain]),f(ve.dns_instructions),l(""),O("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(j){E(j.message)}finally{u(!1)}}},A=async C=>{x(C),E("");try{const ve=await(await fetch(`/api/domains/${C}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ve.verified?(O("DNS verificado. El SSL se está configurando."),w()):E(ve.message)}catch{E("Error verificando DNS")}finally{x(null)}},z=async C=>{try{await fetch(`/api/domains/${C}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),O("Dominio establecido como principal"),w()}catch{E("Error estableciendo dominio principal")}},_=async C=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${C}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(j=>j.id!==C)),O("Dominio eliminado")}catch{E("Error eliminando dominio")}},v=C=>{navigator.clipboard.writeText(C),O("Copiado al portapapeles"),setTimeout(()=>O(""),2e3)},k=C=>{switch(C){case"active":return o.jsxs("span",{className:"badge success",children:[o.jsx(Fa,{size:14})," Activo"]});case"provisioning":return o.jsxs("span",{className:"badge warning",children:[o.jsx(Cd,{size:14})," Configurando SSL"]});case"pending":return o.jsxs("span",{className:"badge pending",children:[o.jsx(ms,{size:14})," Pendiente verificación"]});case"failed":return o.jsxs("span",{className:"badge danger",children:[o.jsx(ms,{size:14})," Error"]});default:return null}};return b?o.jsxs("div",{className:"white-label-settings",children:[o.jsxs("header",{className:"page-header",children:[o.jsx("h1",{children:"Configuración White Label"}),o.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),S&&o.jsx("div",{className:"alert error",children:S}),I&&o.jsx("div",{className:"alert success",children:I}),o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-header",children:o.jsxs("h3",{children:[o.jsx(ei,{size:20})," Dominios"]})}),o.jsxs("div",{className:"card-content",children:[o.jsx("div",{className:"domains-list",children:t.map(C=>o.jsxs("div",{className:"domain-row",children:[o.jsxs("div",{className:"domain-info",children:[o.jsxs("div",{className:"domain-name",children:[C.is_primary&&o.jsx(ou,{size:16,className:"primary-star"}),C.domain,C.domain_type==="subdomain"&&o.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),k(C.ssl_status)]}),o.jsxs("div",{className:"domain-actions",children:[C.ssl_status==="pending"&&o.jsx("button",{onClick:()=>A(C.id),disabled:m===C.id,className:"btn-action",children:m===C.id?o.jsx(FE,{size:16,className:"spin"}):"Verificar DNS"}),C.ssl_status==="active"&&!C.is_primary&&o.jsxs("button",{onClick:()=>z(C.id),className:"btn-action",children:[o.jsx(ou,{size:16})," Hacer principal"]}),C.domain_type==="custom"&&o.jsx("button",{onClick:()=>_(C.id),className:"btn-delete",children:o.jsx(vy,{size:16})}),o.jsx("a",{href:`https://${C.domain}`,target:"_blank",className:"btn-action",children:o.jsx(Td,{size:16})})]})]},C.id))}),o.jsxs("form",{onSubmit:T,className:"add-domain-form",children:[o.jsx("input",{type:"text",placeholder:"miempresa.com",value:s,onChange:C=>l(C.target.value)}),o.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[o.jsx(ti,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&o.jsxs("div",{className:"card instructions-card",children:[o.jsx("div",{className:"card-header",children:o.jsx("h3",{children:"Configuración DNS"})}),o.jsxs("div",{className:"card-content",children:[o.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),o.jsxs("div",{className:"dns-record",children:[o.jsxs("div",{className:"dns-field",children:[o.jsx("label",{children:"Tipo"}),o.jsx("span",{children:h.type})]}),o.jsxs("div",{className:"dns-field",children:[o.jsx("label",{children:"Nombre"}),o.jsx("span",{children:h.name}),o.jsx("button",{onClick:()=>v(h.name),className:"copy-btn",children:o.jsx(zf,{size:14})})]}),o.jsxs("div",{className:"dns-field wide",children:[o.jsx("label",{children:"Valor"}),o.jsx("span",{children:h.value}),o.jsx("button",{onClick:()=>v(h.value),className:"copy-btn",children:o.jsx(zf,{size:14})})]})]}),o.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),o.jsx("style",{children:$f(y)})]}):o.jsxs("div",{className:"white-label-settings",children:[o.jsxs("div",{className:"upgrade-notice",children:[o.jsx(ei,{size:48}),o.jsx("h2",{children:"White Label disponible en Enterprise"}),o.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),o.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),o.jsx("style",{children:$f(y)})]})},$f=e=>`
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
`,Cj=()=>{const[e,t]=R.useState(null),[n,r]=R.useState(!0);R.useEffect(()=>{i()},[]);const i=async()=>{try{const u=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(u)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return o.jsx("div",{className:"loading",children:"Cargando dashboard..."});const s=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return o.jsxs("div",{className:"super-admin-dashboard",children:[o.jsxs("header",{className:"dashboard-header",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Super Admin Dashboard"}),o.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),o.jsx("div",{className:"header-actions",children:o.jsxs(Re,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[o.jsx(ti,{size:20}),"Nuevo Tenant"]})})]}),o.jsxs("div",{className:"stats-grid",children:[o.jsxs("div",{className:"stat-card primary",children:[o.jsx("div",{className:"stat-icon",children:o.jsx(fa,{size:28})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),o.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),o.jsxs("div",{className:"stat-card success",children:[o.jsx("div",{className:"stat-icon",children:o.jsx(Is,{size:28})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),o.jsx("div",{className:"stat-label",children:"Activas"}),o.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),o.jsxs("div",{className:"stat-card warning",children:[o.jsx("div",{className:"stat-icon",children:o.jsx(vs,{size:28})}),o.jsxs("div",{className:"stat-content",children:[o.jsx("div",{className:"stat-value",children:s((e==null?void 0:e.summary.mrr)||0)}),o.jsx("div",{className:"stat-label",children:"MRR"}),o.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),o.jsxs("div",{className:"stat-card danger",children:[o.jsx("div",{className:"stat-icon",children:o.jsx(VE,{size:28})}),o.jsxs("div",{className:"stat-content",children:[o.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),o.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),o.jsxs("div",{className:"content-grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("h3",{children:"Empresas Recientes"}),o.jsx(Re,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),o.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>o.jsxs("div",{className:"tenant-row",children:[o.jsx("div",{className:"tenant-avatar",children:c.logo_url?o.jsx("img",{src:c.logo_url,alt:c.name}):o.jsx("span",{children:c.name.charAt(0)})}),o.jsxs("div",{className:"tenant-info",children:[o.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),o.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),o.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),o.jsx("div",{className:"tenant-plan",children:c.plan_id}),o.jsx(Re,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:o.jsx(py,{size:18})})]},c.id))})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("h3",{children:"Ingresos Mensuales"}),o.jsx(ga,{size:20,className:"success"})]}),o.jsx("div",{className:"card-content chart-container",children:o.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,u)=>o.jsxs("div",{className:"chart-bar",children:[o.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),o.jsx("span",{className:"bar-label",children:c.month}),o.jsx("span",{className:"bar-value",children:s(c.revenue)})]},u))})})]}),o.jsxs("div",{className:"card small",children:[o.jsx("div",{className:"card-header",children:o.jsx("h3",{children:"Por Plan"})}),o.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,u)=>o.jsxs("div",{className:"distribution-row",children:[o.jsx("span",{className:"dist-label",children:c.plan_id}),o.jsx("div",{className:"dist-bar",children:o.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][u%4]}})}),o.jsx("span",{className:"dist-count",children:c.count})]},u))})]}),o.jsxs("div",{className:"card small",children:[o.jsx("div",{className:"card-header",children:o.jsx("h3",{children:"Acciones Rápidas"})}),o.jsxs("div",{className:"card-content quick-actions",children:[o.jsxs(Re,{to:"/super-admin/tenants",className:"quick-action",children:[o.jsx(fa,{size:24}),o.jsx("span",{children:"Gestionar Empresas"})]}),o.jsxs(Re,{to:"/super-admin/subscriptions",className:"quick-action",children:[o.jsx(vs,{size:24}),o.jsx("span",{children:"Ver Suscripciones"})]}),o.jsxs(Re,{to:"/super-admin/plans",className:"quick-action",children:[o.jsx(ga,{size:24}),o.jsx("span",{children:"Configurar Planes"})]})]})]})]}),o.jsx("style",{children:`
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
      `})]})},Tj=()=>{const e=_t(),[t,n]=R.useState([]),[r,i]=R.useState({page:1,limit:20,total:0,pages:0}),[s,l]=R.useState(!0),[c,u]=R.useState(""),[h,f]=R.useState(""),[m,x]=R.useState(null);R.useEffect(()=>{S()},[r.page,h]);const S=async()=>{try{l(!0);const w=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),A=await(await fetch(`/api/super-admin/tenants?${w}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(A.tenants),i(A.pagination)}catch(w){console.error("Error fetching tenants:",w)}finally{l(!1)}},E=w=>{w.preventDefault(),i({...r,page:1}),S()},I=async w=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${w}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),S()}catch(T){console.error("Error suspending tenant:",T)}},O=async w=>{try{await fetch(`/api/super-admin/tenants/${w}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),S()}catch(T){console.error("Error activating tenant:",T)}},b=w=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[w]||"bg-blue"}`,y=w=>new Date(w).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return o.jsxs("div",{className:"tenants-management",children:[o.jsxs("header",{className:"page-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsx(Re,{to:"/super-admin",className:"back-link",children:o.jsx(iu,{size:20})}),o.jsxs("div",{children:[o.jsx("h1",{children:"Gestión de Empresas"}),o.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),o.jsxs(Re,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[o.jsx(ti,{size:20}),"Nueva Empresa"]})]}),o.jsxs("div",{className:"filters-bar",children:[o.jsxs("form",{onSubmit:E,className:"search-box",children:[o.jsx(Ba,{size:20}),o.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:w=>u(w.target.value)})]}),o.jsxs("div",{className:"filter-group",children:[o.jsx(DE,{size:18}),o.jsxs("select",{value:h,onChange:w=>f(w.target.value),children:[o.jsx("option",{value:"",children:"Todos los estados"}),o.jsx("option",{value:"active",children:"Activos"}),o.jsx("option",{value:"trial",children:"En prueba"}),o.jsx("option",{value:"suspended",children:"Suspendidos"}),o.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),o.jsx("div",{className:"table-container",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Empresa"}),o.jsx("th",{children:"Subdominio"}),o.jsx("th",{children:"Plan"}),o.jsx("th",{children:"Estado"}),o.jsx("th",{children:"Creado"}),o.jsx("th",{children:"Acciones"})]})}),o.jsx("tbody",{children:s?o.jsx("tr",{children:o.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(w=>{var T,A,z;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsxs("div",{className:"tenant-cell",children:[o.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((T=w.branding)==null?void 0:T.primary_color)||"#3b82f6"},children:(A=w.branding)!=null&&A.logo_url?o.jsx("img",{src:w.branding.logo_url,alt:""}):w.name.charAt(0)}),o.jsxs("div",{children:[o.jsx("div",{className:"tenant-name",children:((z=w.branding)==null?void 0:z.company_name)||w.name}),o.jsxs("div",{className:"tenant-id",children:[w.id.slice(0,8),"..."]})]})]})}),o.jsx("td",{children:o.jsxs("a",{href:`https://${w.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[w.subdomain,o.jsx(Td,{size:14})]})}),o.jsx("td",{children:o.jsx("span",{className:"plan-badge",children:w.plan_id})}),o.jsx("td",{children:o.jsx("span",{className:b(w.status),children:w.status})}),o.jsx("td",{children:y(w.created_at)}),o.jsx("td",{children:o.jsxs("div",{className:"actions-cell",children:[o.jsx("button",{onClick:()=>e(`/super-admin/tenants/${w.id}`),className:"action-btn",title:"Ver detalles",children:o.jsx(py,{size:18})}),w.status==="active"?o.jsx("button",{onClick:()=>I(w.id),className:"action-btn danger",title:"Suspender",children:o.jsx(fy,{size:18})}):w.status==="suspended"&&o.jsx("button",{onClick:()=>O(w.id),className:"action-btn success",title:"Activar",children:o.jsx(gy,{size:18})})]})})]},w.id)})})]})}),r.pages>1&&o.jsxs("div",{className:"pagination",children:[o.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[o.jsx(iu,{size:18}),"Anterior"]}),o.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),o.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",o.jsx(TE,{size:18})]})]}),o.jsx("style",{children:`
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
      `})]})},Ij=()=>{const{id:e}=sv();_t();const[t,n]=R.useState(null),[r,i]=R.useState(!0),[s,l]=R.useState(!1),[c,u]=R.useState({name:"",plan_id:""});R.useEffect(()=>{h()},[e]);const h=async()=>{try{const E=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(E),u({name:E.name,plan_id:E.plan_id})}catch(S){console.error("Error fetching tenant:",S)}finally{i(!1)}},f=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(S){console.error("Error updating tenant:",S)}},m=async S=>{if(confirm(S==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${S}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(I){console.error("Error changing status:",I)}},x=S=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[S]||"#3b82f6";return r?o.jsx("div",{className:"loading-page",children:"Cargando..."}):t?o.jsxs("div",{className:"tenant-detail",children:[o.jsxs("header",{className:"page-header",children:[o.jsxs("div",{className:"header-left",children:[o.jsx(Re,{to:"/super-admin/tenants",className:"back-link",children:o.jsx(iu,{size:20})}),o.jsxs("div",{className:"tenant-header",children:[o.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?o.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),o.jsxs("div",{children:[o.jsx("h1",{children:t.branding.company_name||t.name}),o.jsxs("div",{className:"tenant-meta",children:[o.jsx("span",{className:"status-dot",style:{backgroundColor:x(t.status)}}),o.jsx("span",{children:t.status}),o.jsx("span",{className:"separator",children:"•"}),o.jsx("span",{children:t.plan_id})]})]})]})]}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[o.jsx(Td,{size:18}),"Visitar"]}),t.status==="active"?o.jsxs("button",{onClick:()=>m("suspend"),className:"btn btn-danger",children:[o.jsx(fy,{size:18}),"Suspender"]}):t.status==="suspended"&&o.jsxs("button",{onClick:()=>m("activate"),className:"btn btn-success",children:[o.jsx(gy,{size:18}),"Activar"]})]})]}),o.jsxs("div",{className:"detail-content",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("h3",{children:"Información General"}),s?o.jsxs("button",{onClick:f,className:"btn btn-primary btn-sm",children:[o.jsx(my,{size:16}),"Guardar"]}):o.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:o.jsx($a,{size:18})})]}),o.jsxs("div",{className:"card-content info-grid",children:[o.jsxs("div",{className:"info-item",children:[o.jsx(fa,{size:18}),o.jsxs("div",{children:[o.jsx("label",{children:"Nombre"}),s?o.jsx("input",{value:c.name,onChange:S=>u({...c,name:S.target.value})}):o.jsx("span",{children:t.name})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(ei,{size:18}),o.jsxs("div",{children:[o.jsx("label",{children:"Subdominio"}),o.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(Id,{size:18}),o.jsxs("div",{children:[o.jsx("label",{children:"Email"}),o.jsx("span",{children:t.branding.contact_email||"-"})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(ME,{size:18}),o.jsxs("div",{children:[o.jsx("label",{children:"Teléfono"}),o.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(CE,{size:18}),o.jsxs("div",{children:[o.jsx("label",{children:"Creado"}),o.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),o.jsxs("div",{className:"info-item",children:[o.jsx(IE,{size:18}),o.jsxs("div",{children:[o.jsx("label",{children:"Plan"}),s?o.jsxs("select",{value:c.plan_id,onChange:S=>u({...c,plan_id:S.target.value}),children:[o.jsx("option",{value:"trial",children:"Trial"}),o.jsx("option",{value:"starter",children:"Starter"}),o.jsx("option",{value:"professional",children:"Professional"}),o.jsx("option",{value:"enterprise",children:"Enterprise"})]}):o.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-header",children:o.jsx("h3",{children:"Uso del Servicio"})}),o.jsxs("div",{className:"card-content usage-grid",children:[o.jsxs("div",{className:"usage-item",children:[o.jsx("div",{className:"usage-icon",children:o.jsx(Is,{size:24})}),o.jsx("div",{className:"usage-value",children:t.usage.users}),o.jsx("div",{className:"usage-label",children:"Usuarios"})]}),o.jsxs("div",{className:"usage-item",children:[o.jsx("div",{className:"usage-icon",children:o.jsx(Zt,{size:24})}),o.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),o.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),o.jsxs("div",{className:"usage-item",children:[o.jsx("div",{className:"usage-icon",children:o.jsx(OE,{size:24})}),o.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),o.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-header",children:o.jsx("h3",{children:"Dominios"})}),o.jsx("div",{className:"card-content",children:t.domains.length===0?o.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((S,E)=>o.jsxs("div",{className:"domain-row",children:[o.jsx(ei,{size:16}),o.jsx("span",{children:S.domain}),S.is_primary&&o.jsx("span",{className:"badge primary",children:"Principal"}),o.jsxs("span",{className:`badge ${S.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",S.ssl_status]})]},E))})]}),t.subscription&&o.jsxs("div",{className:"card",children:[o.jsx("div",{className:"card-header",children:o.jsx("h3",{children:"Suscripción"})}),o.jsx("div",{className:"card-content",children:o.jsxs("div",{className:"subscription-info",children:[o.jsxs("div",{children:[o.jsx("label",{children:"Estado"}),o.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),o.jsxs("div",{children:[o.jsx("label",{children:"Próximo cobro"}),o.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),o.jsx("style",{children:`
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
      `})]}):o.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},Pj=()=>{const{tenant:e,loading:t,error:n}=rt(),r=cn(),s=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&s?o.jsx("div",{className:"app",children:o.jsxs(Hp,{children:[o.jsx(pe,{path:"/",element:o.jsx(GE,{})}),o.jsx(pe,{path:"/register",element:o.jsx(XE,{})}),o.jsx(pe,{path:"/onboarding",element:o.jsx(YE,{})}),o.jsx(pe,{path:"*",element:o.jsx(jo,{to:"/",replace:!0})})]})}):t?o.jsx(jj,{}):n&&!l?o.jsx(Sj,{message:n}):o.jsx(jE,{children:o.jsx("div",{className:"app",children:o.jsxs(Hp,{children:[o.jsx(pe,{path:"/login",element:o.jsx(JE,{})}),o.jsx(pe,{path:"/dashboard",element:o.jsx(Xe,{children:o.jsx(QE,{})})}),o.jsx(pe,{path:"/packages",element:o.jsx(Xe,{children:o.jsx(ZE,{})})}),o.jsx(pe,{path:"/packages/new",element:o.jsx(Xe,{children:o.jsx(ej,{})})}),o.jsx(pe,{path:"/packages/:id",element:o.jsx(Xe,{children:o.jsx(xj,{})})}),o.jsx(pe,{path:"/clients",element:o.jsx(Xe,{children:o.jsx(wj,{})})}),o.jsx(pe,{path:"/couriers",element:o.jsx(Xe,{children:o.jsx(bj,{})})}),o.jsx(pe,{path:"/rates",element:o.jsx(Xe,{children:o.jsx(_j,{})})}),o.jsx(pe,{path:"/incidents",element:o.jsx(Xe,{children:o.jsx(kj,{})})}),o.jsx(pe,{path:"/fuel",element:o.jsx(Xe,{children:o.jsx(Ej,{})})}),o.jsx(pe,{path:"/account/white-label",element:o.jsx(Xe,{children:o.jsx(Nj,{})})}),o.jsx(pe,{path:"/super-admin",element:o.jsx(Xe,{children:o.jsx(Cj,{})})}),o.jsx(pe,{path:"/super-admin/tenants",element:o.jsx(Xe,{children:o.jsx(Tj,{})})}),o.jsx(pe,{path:"/super-admin/tenants/:id",element:o.jsx(Xe,{children:o.jsx(Ij,{})})}),o.jsx(pe,{path:"/",element:o.jsx(jo,{to:"/dashboard",replace:!0})}),o.jsx(pe,{path:"*",element:o.jsx(jo,{to:"/dashboard",replace:!0})})]})})})};Ql.createRoot(document.getElementById("root")).render(o.jsx(gu.StrictMode,{children:o.jsx(Tw,{children:o.jsx(Lw,{children:o.jsx(Pj,{})})})}));
//# sourceMappingURL=index-CQ-Ja-ad.js.map
