function iy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hf={exports:{}},ba={},Wf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),oy=Symbol.for("react.portal"),ay=Symbol.for("react.fragment"),ly=Symbol.for("react.strict_mode"),cy=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),dy=Symbol.for("react.context"),hy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),fy=Symbol.for("react.memo"),gy=Symbol.for("react.lazy"),Ph=Symbol.iterator;function my(e){return e===null||typeof e!="object"?null:(e=Ph&&e[Ph]||e["@@iterator"],typeof e=="function"?e:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kf=Object.assign,Gf={};function si(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||qf}si.prototype.isReactComponent={};si.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};si.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xf(){}Xf.prototype=si.prototype;function fu(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||qf}var gu=fu.prototype=new Xf;gu.constructor=fu;Kf(gu,si.prototype);gu.isPureReactComponent=!0;var Rh=Array.isArray,Yf=Object.prototype.hasOwnProperty,mu={current:null},Jf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Yf.call(t,r)&&!Jf.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:bs,type:e,key:o,ref:l,props:i,_owner:mu.current}}function vy(e,t){return{$$typeof:bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs}function xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ah=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xy(""+e.key):t.toString(36)}function mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case bs:case oy:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+vl(l,0):r,Rh(i)?(n="",e!=null&&(n=e.replace(Ah,"$&/")+"/"),mo(i,t,n,"",function(h){return h})):i!=null&&(vu(i)&&(i=vy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ah,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Rh(e))for(var c=0;c<e.length;c++){o=e[c];var u=r+vl(o,c);l+=mo(o,t,n,u,i)}else if(u=my(e),typeof u=="function")for(e=u.call(e),c=0;!(o=e.next()).done;)o=o.value,u=r+vl(o,c++),l+=mo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xs(e,t,n){if(e==null)return e;var r=[],i=0;return mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},vo={transition:null},wy={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:vo,ReactCurrentOwner:mu};function Zf(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Xs,forEach:function(e,t,n){Xs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xs(e,function(){t++}),t},toArray:function(e){return Xs(e,function(t){return t})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=si;q.Fragment=ay;q.Profiler=cy;q.PureComponent=fu;q.StrictMode=ly;q.Suspense=py;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;q.act=Zf;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=mu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)Yf.call(t,u)&&!Jf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:bs,type:e.type,key:i,ref:o,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:dy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uy,_context:e},e.Consumer=e};q.createElement=Qf;q.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:hy,render:e}};q.isValidElement=vu;q.lazy=function(e){return{$$typeof:gy,_payload:{_status:-1,_result:e},_init:yy}};q.memo=function(e,t){return{$$typeof:fy,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};q.unstable_act=Zf;q.useCallback=function(e,t){return $e.current.useCallback(e,t)};q.useContext=function(e){return $e.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};q.useEffect=function(e,t){return $e.current.useEffect(e,t)};q.useId=function(){return $e.current.useId()};q.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return $e.current.useMemo(e,t)};q.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};q.useRef=function(e){return $e.current.useRef(e)};q.useState=function(e){return $e.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return $e.current.useTransition()};q.version="18.3.1";Wf.exports=q;var R=Wf.exports;const xu=pu(R),by=iy({__proto__:null,default:xu},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=R,ky=Symbol.for("react.element"),jy=Symbol.for("react.fragment"),Ey=Object.prototype.hasOwnProperty,Sy=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ny={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ey.call(t,r)&&!Ny.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ky,type:e,key:o,ref:l,props:i,_owner:Sy.current}}ba.Fragment=jy;ba.jsx=eg;ba.jsxs=eg;Hf.exports=ba;var s=Hf.exports,ec={},tg={exports:{}},nt={},ng={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var oe=W-1>>>1,Q=F[oe];if(0<i(Q,H))F[oe]=H,F[W]=Q,W=oe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var oe=0,Q=F.length,he=Q>>>1;oe<he;){var Mt=2*(oe+1)-1,Ut=F[Mt],Ft=Mt+1,$t=F[Ft];if(0>i(Ut,W))Ft<Q&&0>i($t,Ut)?(F[oe]=$t,F[Ft]=W,oe=Ft):(F[oe]=Ut,F[Mt]=W,oe=Mt);else if(Ft<Q&&0>i($t,W))F[oe]=$t,F[Ft]=W,oe=Ft;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],h=[],g=1,m=null,w=3,E=!1,b=!1,I=!1,D=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(h)}}function C(F){if(I=!1,x(F),!b)if(n(u)!==null)b=!0,di(A);else{var H=n(h);H!==null&&zt(C,H.startTime-F)}}function A(F,H){b=!1,I&&(I=!1,_(y),y=-1),E=!0;var W=w;try{for(x(H),m=n(u);m!==null&&(!(m.expirationTime>H)||F&&!P());){var oe=m.callback;if(typeof oe=="function"){m.callback=null,w=m.priorityLevel;var Q=oe(m.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(u)&&r(u),x(H)}else r(u);m=n(u)}if(m!==null)var he=!0;else{var Mt=n(h);Mt!==null&&zt(C,Mt.startTime-H),he=!1}return he}finally{m=null,w=W,E=!1}}var z=!1,k=null,y=-1,j=5,N=-1;function P(){return!(e.unstable_now()-N<j)}function T(){if(k!==null){var F=e.unstable_now();N=F;var H=!0;try{H=k(!0,F)}finally{H?S():(z=!1,k=null)}}else z=!1}var S;if(typeof f=="function")S=function(){f(T)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Gn=ve.port2;ve.port1.onmessage=T,S=function(){Gn.postMessage(null)}}else S=function(){D(T,0)};function di(F){k=F,z||(z=!0,S())}function zt(F,H){y=D(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){b||E||(b=!0,di(A))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var W=w;w=H;try{return F()}finally{w=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=w;w=F;try{return H()}finally{w=W}},e.unstable_scheduleCallback=function(F,H,W){var oe=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:g++,callback:H,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>oe?(F.sortIndex=W,t(h,F),n(u)===null&&F===n(h)&&(I?(_(y),y=-1):I=!0,zt(C,W-oe))):(F.sortIndex=Q,t(u,F),b||E||(b=!0,di(A))),F},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(F){var H=w;return function(){var W=w;w=H;try{return F.apply(this,arguments)}finally{w=W}}}})(rg);ng.exports=rg;var Cy=ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty=R,tt=Cy;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,Qi={};function mr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(Qi[e]=t,e=0;e<t.length;e++)ig.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,Iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Oh={};function Py(e){return tc.call(Oh,e)?!0:tc.call(Dh,e)?!1:Iy.test(e)?Oh[e]=!0:(Dh[e]=!0,!1)}function Ry(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ay(e,t,n,r){if(t===null||typeof t>"u"||Ry(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yu,wu);Ee[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yu,wu);Ee[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yu,wu);Ee[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function bu(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ay(t,n,i,r)&&(n=null),r||i===null?Py(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=Ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),sg=Symbol.for("react.provider"),og=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),rc=Symbol.for("react.suspense"),ic=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),ag=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function Ei(e){return e===null||typeof e!="object"?null:(e=Lh&&e[Lh]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,xl;function Di(e){if(xl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||""}return`
`+xl+e}var yl=!1;function wl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,c=o.length-1;1<=l&&0<=c&&i[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==o[c]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Di(e):""}function Dy(e){switch(e.tag){case 5:return Di(e.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function sc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case Er:return"Portal";case nc:return"Profiler";case _u:return"StrictMode";case rc:return"Suspense";case ic:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case og:return(e.displayName||"Context")+".Consumer";case sg:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:sc(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return sc(e(t))}catch{}}return null}function Oy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(t);case 8:return t===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ly(e){var t=lg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Js(e){e._valueTracker||(e._valueTracker=Ly(e))}function cg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oc(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ug(e,t){t=t.checked,t!=null&&bu(e,"checked",t,!1)}function ac(e,t){ug(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lc(e,t.type,n):t.hasOwnProperty("defaultValue")&&lc(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lc(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oi=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Oi(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function dg(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,pg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zy=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(e){zy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fi[t]=Fi[e]})});function fg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fi.hasOwnProperty(e)&&Fi[e]?(""+t).trim():t+"px"}function gg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var My=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(e,t){if(t){if(My[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function hc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fc=null,Ur=null,Fr=null;function $h(e){if(e=js(e)){if(typeof fc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Sa(t),fc(e.stateNode,e.type,t))}}function mg(e){Ur?Fr?Fr.push(e):Fr=[e]:Ur=e}function vg(){if(Ur){var e=Ur,t=Fr;if(Fr=Ur=null,$h(e),t)for(e=0;e<t.length;e++)$h(t[e])}}function xg(e,t){return e(t)}function yg(){}var bl=!1;function wg(e,t,n){if(bl)return e(t,n);bl=!0;try{return xg(e,t,n)}finally{bl=!1,(Ur!==null||Fr!==null)&&(yg(),vg())}}function es(e,t){var n=e.stateNode;if(n===null)return null;var r=Sa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var gc=!1;if(en)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{gc=!1}function Uy(e,t,n,r,i,o,l,c,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(g){this.onError(g)}}var $i=!1,Do=null,Oo=!1,mc=null,Fy={onError:function(e){$i=!0,Do=e}};function $y(e,t,n,r,i,o,l,c,u){$i=!1,Do=null,Uy.apply(Fy,arguments)}function By(e,t,n,r,i,o,l,c,u){if($y.apply(this,arguments),$i){if($i){var h=Do;$i=!1,Do=null}else throw Error(M(198));Oo||(Oo=!0,mc=h)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bh(e){if(vr(e)!==e)throw Error(M(188))}function Vy(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Bh(i),e;if(o===r)return Bh(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function _g(e){return e=Vy(e),e!==null?kg(e):null}function kg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kg(e);if(t!==null)return t;e=e.sibling}return null}var jg=tt.unstable_scheduleCallback,Vh=tt.unstable_cancelCallback,Hy=tt.unstable_shouldYield,Wy=tt.unstable_requestPaint,fe=tt.unstable_now,qy=tt.unstable_getCurrentPriorityLevel,Su=tt.unstable_ImmediatePriority,Eg=tt.unstable_UserBlockingPriority,Lo=tt.unstable_NormalPriority,Ky=tt.unstable_LowPriority,Sg=tt.unstable_IdlePriority,_a=null,Ct=null;function Gy(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Jy,Xy=Math.log,Yy=Math.LN2;function Jy(e){return e>>>=0,e===0?32:31-(Xy(e)/Yy|0)|0}var Zs=64,eo=4194304;function Li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=Li(c):(o&=l,o!==0&&(r=Li(o)))}else l=n&~i,l!==0?r=Li(l):o!==0&&(r=Li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function Qy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xt(o),c=1<<l,u=i[l];u===-1?(!(c&n)||c&r)&&(i[l]=Qy(c,t)):u<=t&&(e.expiredLanes|=c),o&=~c}}function vc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ng(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function e0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Cg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tg,Cu,Ig,Pg,Rg,xc=!1,to=[],Cn=null,Tn=null,In=null,ts=new Map,ns=new Map,xn=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ts.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(t.pointerId)}}function Ni(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=js(t),t!==null&&Cu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function n0(e,t,n,r,i){switch(t){case"focusin":return Cn=Ni(Cn,e,t,n,r,i),!0;case"dragenter":return Tn=Ni(Tn,e,t,n,r,i),!0;case"mouseover":return In=Ni(In,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ts.set(o,Ni(ts.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ns.set(o,Ni(ns.get(o)||null,e,t,n,r,i)),!0}return!1}function Ag(e){var t=tr(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=bg(n),t!==null){e.blockedOn=t,Rg(e.priority,function(){Ig(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pc=r,n.target.dispatchEvent(r),pc=null}else return t=js(n),t!==null&&Cu(t),e.blockedOn=n,!1;t.shift()}return!0}function Wh(e,t,n){xo(e)&&n.delete(t)}function r0(){xc=!1,Cn!==null&&xo(Cn)&&(Cn=null),Tn!==null&&xo(Tn)&&(Tn=null),In!==null&&xo(In)&&(In=null),ts.forEach(Wh),ns.forEach(Wh)}function Ci(e,t){e.blockedOn===t&&(e.blockedOn=null,xc||(xc=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,r0)))}function rs(e){function t(i){return Ci(i,e)}if(0<to.length){Ci(to[0],e);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&Ci(Cn,e),Tn!==null&&Ci(Tn,e),In!==null&&Ci(In,e),ts.forEach(t),ns.forEach(t),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&xn.shift()}var $r=an.ReactCurrentBatchConfig,Mo=!0;function i0(e,t,n,r){var i=J,o=$r.transition;$r.transition=null;try{J=1,Tu(e,t,n,r)}finally{J=i,$r.transition=o}}function s0(e,t,n,r){var i=J,o=$r.transition;$r.transition=null;try{J=4,Tu(e,t,n,r)}finally{J=i,$r.transition=o}}function Tu(e,t,n,r){if(Mo){var i=yc(e,t,n,r);if(i===null)Rl(e,t,r,Uo,n),Hh(e,r);else if(n0(i,e,t,n,r))r.stopPropagation();else if(Hh(e,r),t&4&&-1<t0.indexOf(e)){for(;i!==null;){var o=js(i);if(o!==null&&Tg(o),o=yc(e,t,n,r),o===null&&Rl(e,t,r,Uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var Uo=null;function yc(e,t,n,r){if(Uo=null,e=Eu(r),e=tr(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function Dg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qy()){case Su:return 1;case Eg:return 4;case Lo:case Ky:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var jn=null,Iu=null,yo=null;function Og(){if(yo)return yo;var e,t=Iu,n=t.length,r,i="value"in jn?jn.value:jn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return yo=i.slice(e,1<r?1-r:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function qh(){return!1}function rt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?no:qh,this.isPropagationStopped=qh,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=rt(oi),ks=ue({},oi,{view:0,detail:0}),o0=rt(ks),kl,jl,Ti,ka=ue({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(kl=e.screenX-Ti.screenX,jl=e.screenY-Ti.screenY):jl=kl=0,Ti=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),Kh=rt(ka),a0=ue({},ka,{dataTransfer:0}),l0=rt(a0),c0=ue({},ks,{relatedTarget:0}),El=rt(c0),u0=ue({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=rt(u0),h0=ue({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p0=rt(h0),f0=ue({},oi,{data:0}),Gh=rt(f0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v0[e])?!!t[e]:!1}function Ru(){return x0}var y0=ue({},ks,{key:function(e){if(e.key){var t=g0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w0=rt(y0),b0=ue({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=rt(b0),_0=ue({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),k0=rt(_0),j0=ue({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),E0=rt(j0),S0=ue({},ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=rt(S0),C0=[9,13,27,32],Au=en&&"CompositionEvent"in window,Bi=null;en&&"documentMode"in document&&(Bi=document.documentMode);var T0=en&&"TextEvent"in window&&!Bi,Lg=en&&(!Au||Bi&&8<Bi&&11>=Bi),Yh=" ",Jh=!1;function zg(e,t){switch(e){case"keyup":return C0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function I0(e,t){switch(e){case"compositionend":return Mg(t);case"keypress":return t.which!==32?null:(Jh=!0,Yh);case"textInput":return e=t.data,e===Yh&&Jh?null:e;default:return null}}function P0(e,t){if(Nr)return e==="compositionend"||!Au&&zg(e,t)?(e=Og(),yo=Iu=jn=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lg&&t.locale!=="ko"?null:t.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!R0[e.type]:t==="textarea"}function Ug(e,t,n,r){mg(r),t=Fo(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vi=null,is=null;function A0(e){Yg(e,0)}function ja(e){var t=Ir(e);if(cg(t))return e}function D0(e,t){if(e==="change")return t}var Fg=!1;if(en){var Sl;if(en){var Nl="oninput"in document;if(!Nl){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),Nl=typeof Zh.oninput=="function"}Sl=Nl}else Sl=!1;Fg=Sl&&(!document.documentMode||9<document.documentMode)}function ep(){Vi&&(Vi.detachEvent("onpropertychange",$g),is=Vi=null)}function $g(e){if(e.propertyName==="value"&&ja(is)){var t=[];Ug(t,is,e,Eu(e)),wg(A0,t)}}function O0(e,t,n){e==="focusin"?(ep(),Vi=t,is=n,Vi.attachEvent("onpropertychange",$g)):e==="focusout"&&ep()}function L0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(is)}function z0(e,t){if(e==="click")return ja(t)}function M0(e,t){if(e==="input"||e==="change")return ja(t)}function U0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:U0;function ss(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tc.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,t){var n=tp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function Bg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vg(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function F0(e){var t=Vg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bg(n.ownerDocument.documentElement,n)){if(r!==null&&Du(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=np(n,o);var l=np(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $0=en&&"documentMode"in document&&11>=document.documentMode,Cr=null,wc=null,Hi=null,bc=!1;function rp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bc||Cr==null||Cr!==Ao(r)||(r=Cr,"selectionStart"in r&&Du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&ss(Hi,r)||(Hi=r,r=Fo(wc,"onSelect"),0<r.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Cl={},Hg={};en&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ea(e){if(Cl[e])return Cl[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hg)return Cl[e]=t[n];return e}var Wg=Ea("animationend"),qg=Ea("animationiteration"),Kg=Ea("animationstart"),Gg=Ea("transitionend"),Xg=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){Xg.set(e,t),mr(t,[e])}for(var Tl=0;Tl<ip.length;Tl++){var Il=ip[Tl],B0=Il.toLowerCase(),V0=Il[0].toUpperCase()+Il.slice(1);Vn(B0,"on"+V0)}Vn(Wg,"onAnimationEnd");Vn(qg,"onAnimationIteration");Vn(Kg,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Gg,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function sp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,By(r,t,void 0,e),e.currentTarget=null}function Yg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==o&&i.isPropagationStopped())break e;sp(i,c,h),o=u}else for(l=0;l<r.length;l++){if(c=r[l],u=c.instance,h=c.currentTarget,c=c.listener,u!==o&&i.isPropagationStopped())break e;sp(i,c,h),o=u}}}if(Oo)throw e=mc,Oo=!1,mc=null,e}function re(e,t){var n=t[Sc];n===void 0&&(n=t[Sc]=new Set);var r=e+"__bubble";n.has(r)||(Jg(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),Jg(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[io]){e[io]=!0,ig.forEach(function(n){n!=="selectionchange"&&(H0.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Pl("selectionchange",!1,t))}}function Jg(e,t,n,r){switch(Dg(t)){case 1:var i=i0;break;case 4:i=s0;break;default:i=Tu}n=i.bind(null,t,n,e),i=void 0,!gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;c!==null;){if(l=tr(c),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}c=c.parentNode}}r=r.return}wg(function(){var h=o,g=Eu(n),m=[];e:{var w=Xg.get(e);if(w!==void 0){var E=Pu,b=e;switch(e){case"keypress":if(wo(n)===0)break e;case"keydown":case"keyup":E=w0;break;case"focusin":b="focus",E=El;break;case"focusout":b="blur",E=El;break;case"beforeblur":case"afterblur":E=El;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=l0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=k0;break;case Wg:case qg:case Kg:E=d0;break;case Gg:E=E0;break;case"scroll":E=o0;break;case"wheel":E=N0;break;case"copy":case"cut":case"paste":E=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Xh}var I=(t&4)!==0,D=!I&&e==="scroll",_=I?w!==null?w+"Capture":null:w;I=[];for(var f=h,x;f!==null;){x=f;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,_!==null&&(C=es(f,_),C!=null&&I.push(as(f,C,x)))),D)break;f=f.return}0<I.length&&(w=new E(w,b,null,n,g),m.push({event:w,listeners:I}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&n!==pc&&(b=n.relatedTarget||n.fromElement)&&(tr(b)||b[tn]))break e;if((E||w)&&(w=g.window===g?g:(w=g.ownerDocument)?w.defaultView||w.parentWindow:window,E?(b=n.relatedTarget||n.toElement,E=h,b=b?tr(b):null,b!==null&&(D=vr(b),b!==D||b.tag!==5&&b.tag!==6)&&(b=null)):(E=null,b=h),E!==b)){if(I=Kh,C="onMouseLeave",_="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(I=Xh,C="onPointerLeave",_="onPointerEnter",f="pointer"),D=E==null?w:Ir(E),x=b==null?w:Ir(b),w=new I(C,f+"leave",E,n,g),w.target=D,w.relatedTarget=x,C=null,tr(g)===h&&(I=new I(_,f+"enter",b,n,g),I.target=x,I.relatedTarget=D,C=I),D=C,E&&b)t:{for(I=E,_=b,f=0,x=I;x;x=jr(x))f++;for(x=0,C=_;C;C=jr(C))x++;for(;0<f-x;)I=jr(I),f--;for(;0<x-f;)_=jr(_),x--;for(;f--;){if(I===_||_!==null&&I===_.alternate)break t;I=jr(I),_=jr(_)}I=null}else I=null;E!==null&&op(m,w,E,I,!1),b!==null&&D!==null&&op(m,D,b,I,!0)}}e:{if(w=h?Ir(h):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var A=D0;else if(Qh(w))if(Fg)A=M0;else{A=L0;var z=O0}else(E=w.nodeName)&&E.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=z0);if(A&&(A=A(e,h))){Ug(m,A,n,g);break e}z&&z(e,w,h),e==="focusout"&&(z=w._wrapperState)&&z.controlled&&w.type==="number"&&lc(w,"number",w.value)}switch(z=h?Ir(h):window,e){case"focusin":(Qh(z)||z.contentEditable==="true")&&(Cr=z,wc=h,Hi=null);break;case"focusout":Hi=wc=Cr=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,rp(m,n,g);break;case"selectionchange":if($0)break;case"keydown":case"keyup":rp(m,n,g)}var k;if(Au)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Nr?zg(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Lg&&n.locale!=="ko"&&(Nr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Nr&&(k=Og()):(jn=g,Iu="value"in jn?jn.value:jn.textContent,Nr=!0)),z=Fo(h,y),0<z.length&&(y=new Gh(y,e,null,n,g),m.push({event:y,listeners:z}),k?y.data=k:(k=Mg(n),k!==null&&(y.data=k)))),(k=T0?I0(e,n):P0(e,n))&&(h=Fo(h,"onBeforeInput"),0<h.length&&(g=new Gh("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:h}),g.data=k))}Yg(m,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=es(e,n),o!=null&&r.unshift(as(e,o,i)),o=es(e,t),o!=null&&r.push(as(e,o,i))),e=e.return}return r}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function op(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,i?(u=es(n,o),u!=null&&l.unshift(as(n,u,c))):i||(u=es(n,o),u!=null&&l.push(as(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var W0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function ap(e){return(typeof e=="string"?e:""+e).replace(W0,`
`).replace(q0,"")}function so(e,t,n){if(t=ap(t),ap(e)!==t&&n)throw Error(M(425))}function $o(){}var _c=null,kc=null;function jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(e){return lp.resolve(null).then(e).catch(X0)}:Ec;function X0(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),rs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rs(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ai=Math.random().toString(36).slice(2),St="__reactFiber$"+ai,ls="__reactProps$"+ai,tn="__reactContainer$"+ai,Sc="__reactEvents$"+ai,Y0="__reactListeners$"+ai,J0="__reactHandles$"+ai;function tr(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cp(e);e!==null;){if(n=e[St])return n;e=cp(e)}return t}e=n,n=e.parentNode}return null}function js(e){return e=e[St]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Sa(e){return e[ls]||null}var Nc=[],Pr=-1;function Hn(e){return{current:e}}function ie(e){0>Pr||(e.current=Nc[Pr],Nc[Pr]=null,Pr--)}function te(e,t){Pr++,Nc[Pr]=e.current,e.current=t}var Fn={},Ae=Hn(Fn),Ge=Hn(!1),or=Fn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Bo(){ie(Ge),ie(Ae)}function up(e,t,n){if(Ae.current!==Fn)throw Error(M(168));te(Ae,t),te(Ge,n)}function Qg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Oy(e)||"Unknown",i));return ue({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,or=Ae.current,te(Ae,e),te(Ge,Ge.current),!0}function dp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Qg(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,ie(Ge),ie(Ae),te(Ae,e)):ie(Ge),te(Ge,n)}var Wt=null,Na=!1,Dl=!1;function Zg(e){Wt===null?Wt=[e]:Wt.push(e)}function Q0(e){Na=!0,Zg(e)}function Wn(){if(!Dl&&Wt!==null){Dl=!0;var e=0,t=J;try{var n=Wt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,Na=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),jg(Su,Wn),i}finally{J=t,Dl=!1}}return null}var Rr=[],Ar=0,Ho=null,Wo=0,st=[],ot=0,ar=null,qt=1,Kt="";function Qn(e,t){Rr[Ar++]=Wo,Rr[Ar++]=Ho,Ho=e,Wo=t}function em(e,t,n){st[ot++]=qt,st[ot++]=Kt,st[ot++]=ar,ar=e;var r=qt;e=Kt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,qt=1<<32-xt(t)+i|n<<i|r,Kt=o+e}else qt=1<<o|n<<i|r,Kt=e}function Ou(e){e.return!==null&&(Qn(e,1),em(e,1,0))}function Lu(e){for(;e===Ho;)Ho=Rr[--Ar],Rr[Ar]=null,Wo=Rr[--Ar],Rr[Ar]=null;for(;e===ar;)ar=st[--ot],st[ot]=null,Kt=st[--ot],st[ot]=null,qt=st[--ot],st[ot]=null}var et=null,Ze=null,se=!1,gt=null;function tm(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Ze=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Ze=null,!0):!1;default:return!1}}function Cc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tc(e){if(se){var t=Ze;if(t){var n=t;if(!hp(e,t)){if(Cc(e))throw Error(M(418));t=Pn(n.nextSibling);var r=et;t&&hp(e,t)?tm(r,n):(e.flags=e.flags&-4097|2,se=!1,et=e)}}else{if(Cc(e))throw Error(M(418));e.flags=e.flags&-4097|2,se=!1,et=e}}}function pp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function oo(e){if(e!==et)return!1;if(!se)return pp(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!jc(e.type,e.memoizedProps)),t&&(t=Ze)){if(Cc(e))throw nm(),Error(M(418));for(;t;)tm(e,t),t=Pn(t.nextSibling)}if(pp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=et?Pn(e.stateNode.nextSibling):null;return!0}function nm(){for(var e=Ze;e;)e=Pn(e.nextSibling)}function Xr(){Ze=et=null,se=!1}function zu(e){gt===null?gt=[e]:gt.push(e)}var Z0=an.ReactCurrentBatchConfig;function Ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=i.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fp(e){var t=e._init;return t(e._payload)}function rm(e){function t(_,f){if(e){var x=_.deletions;x===null?(_.deletions=[f],_.flags|=16):x.push(f)}}function n(_,f){if(!e)return null;for(;f!==null;)t(_,f),f=f.sibling;return null}function r(_,f){for(_=new Map;f!==null;)f.key!==null?_.set(f.key,f):_.set(f.index,f),f=f.sibling;return _}function i(_,f){return _=On(_,f),_.index=0,_.sibling=null,_}function o(_,f,x){return _.index=x,e?(x=_.alternate,x!==null?(x=x.index,x<f?(_.flags|=2,f):x):(_.flags|=2,f)):(_.flags|=1048576,f)}function l(_){return e&&_.alternate===null&&(_.flags|=2),_}function c(_,f,x,C){return f===null||f.tag!==6?(f=$l(x,_.mode,C),f.return=_,f):(f=i(f,x),f.return=_,f)}function u(_,f,x,C){var A=x.type;return A===Sr?g(_,f,x.props.children,C,x.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mn&&fp(A)===f.type)?(C=i(f,x.props),C.ref=Ii(_,f,x),C.return=_,C):(C=No(x.type,x.key,x.props,null,_.mode,C),C.ref=Ii(_,f,x),C.return=_,C)}function h(_,f,x,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Bl(x,_.mode,C),f.return=_,f):(f=i(f,x.children||[]),f.return=_,f)}function g(_,f,x,C,A){return f===null||f.tag!==7?(f=sr(x,_.mode,C,A),f.return=_,f):(f=i(f,x),f.return=_,f)}function m(_,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$l(""+f,_.mode,x),f.return=_,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ys:return x=No(f.type,f.key,f.props,null,_.mode,x),x.ref=Ii(_,null,f),x.return=_,x;case Er:return f=Bl(f,_.mode,x),f.return=_,f;case mn:var C=f._init;return m(_,C(f._payload),x)}if(Oi(f)||Ei(f))return f=sr(f,_.mode,x,null),f.return=_,f;ao(_,f)}return null}function w(_,f,x,C){var A=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:c(_,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ys:return x.key===A?u(_,f,x,C):null;case Er:return x.key===A?h(_,f,x,C):null;case mn:return A=x._init,w(_,f,A(x._payload),C)}if(Oi(x)||Ei(x))return A!==null?null:g(_,f,x,C,null);ao(_,x)}return null}function E(_,f,x,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return _=_.get(x)||null,c(f,_,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Ys:return _=_.get(C.key===null?x:C.key)||null,u(f,_,C,A);case Er:return _=_.get(C.key===null?x:C.key)||null,h(f,_,C,A);case mn:var z=C._init;return E(_,f,x,z(C._payload),A)}if(Oi(C)||Ei(C))return _=_.get(x)||null,g(f,_,C,A,null);ao(f,C)}return null}function b(_,f,x,C){for(var A=null,z=null,k=f,y=f=0,j=null;k!==null&&y<x.length;y++){k.index>y?(j=k,k=null):j=k.sibling;var N=w(_,k,x[y],C);if(N===null){k===null&&(k=j);break}e&&k&&N.alternate===null&&t(_,k),f=o(N,f,y),z===null?A=N:z.sibling=N,z=N,k=j}if(y===x.length)return n(_,k),se&&Qn(_,y),A;if(k===null){for(;y<x.length;y++)k=m(_,x[y],C),k!==null&&(f=o(k,f,y),z===null?A=k:z.sibling=k,z=k);return se&&Qn(_,y),A}for(k=r(_,k);y<x.length;y++)j=E(k,_,y,x[y],C),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?y:j.key),f=o(j,f,y),z===null?A=j:z.sibling=j,z=j);return e&&k.forEach(function(P){return t(_,P)}),se&&Qn(_,y),A}function I(_,f,x,C){var A=Ei(x);if(typeof A!="function")throw Error(M(150));if(x=A.call(x),x==null)throw Error(M(151));for(var z=A=null,k=f,y=f=0,j=null,N=x.next();k!==null&&!N.done;y++,N=x.next()){k.index>y?(j=k,k=null):j=k.sibling;var P=w(_,k,N.value,C);if(P===null){k===null&&(k=j);break}e&&k&&P.alternate===null&&t(_,k),f=o(P,f,y),z===null?A=P:z.sibling=P,z=P,k=j}if(N.done)return n(_,k),se&&Qn(_,y),A;if(k===null){for(;!N.done;y++,N=x.next())N=m(_,N.value,C),N!==null&&(f=o(N,f,y),z===null?A=N:z.sibling=N,z=N);return se&&Qn(_,y),A}for(k=r(_,k);!N.done;y++,N=x.next())N=E(k,_,y,N.value,C),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?y:N.key),f=o(N,f,y),z===null?A=N:z.sibling=N,z=N);return e&&k.forEach(function(T){return t(_,T)}),se&&Qn(_,y),A}function D(_,f,x,C){if(typeof x=="object"&&x!==null&&x.type===Sr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ys:e:{for(var A=x.key,z=f;z!==null;){if(z.key===A){if(A=x.type,A===Sr){if(z.tag===7){n(_,z.sibling),f=i(z,x.props.children),f.return=_,_=f;break e}}else if(z.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===mn&&fp(A)===z.type){n(_,z.sibling),f=i(z,x.props),f.ref=Ii(_,z,x),f.return=_,_=f;break e}n(_,z);break}else t(_,z);z=z.sibling}x.type===Sr?(f=sr(x.props.children,_.mode,C,x.key),f.return=_,_=f):(C=No(x.type,x.key,x.props,null,_.mode,C),C.ref=Ii(_,f,x),C.return=_,_=C)}return l(_);case Er:e:{for(z=x.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(_,f.sibling),f=i(f,x.children||[]),f.return=_,_=f;break e}else{n(_,f);break}else t(_,f);f=f.sibling}f=Bl(x,_.mode,C),f.return=_,_=f}return l(_);case mn:return z=x._init,D(_,f,z(x._payload),C)}if(Oi(x))return b(_,f,x,C);if(Ei(x))return I(_,f,x,C);ao(_,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(_,f.sibling),f=i(f,x),f.return=_,_=f):(n(_,f),f=$l(x,_.mode,C),f.return=_,_=f),l(_)):n(_,f)}return D}var Yr=rm(!0),im=rm(!1),qo=Hn(null),Ko=null,Dr=null,Mu=null;function Uu(){Mu=Dr=Ko=null}function Fu(e){var t=qo.current;ie(qo),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){Ko=e,Mu=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Mu!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Ko===null)throw Error(M(308));Dr=e,Ko.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var nr=null;function $u(e){nr===null?nr=[e]:nr.push(e)}function sm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$u(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,$u(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}function gp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var i=e.updateQueue;vn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,h=u.next;u.next=null,l===null?o=h:l.next=h,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==l&&(c===null?g.firstBaseUpdate=h:c.next=h,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,g=h=u=null,c=o;do{var w=c.lane,E=c.eventTime;if((r&w)===w){g!==null&&(g=g.next={eventTime:E,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var b=e,I=c;switch(w=t,E=n,I.tag){case 1:if(b=I.payload,typeof b=="function"){m=b.call(E,m,w);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=I.payload,w=typeof b=="function"?b.call(E,m,w):b,w==null)break e;m=ue({},m,w);break e;case 2:vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[c]:w.push(c))}else E={eventTime:E,lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(h=g=E,u=m):g=g.next=E,l|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;w=c,c=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cr|=l,e.lanes=l,e.memoizedState=m}}function mp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Es={},Tt=Hn(Es),cs=Hn(Es),us=Hn(Es);function rr(e){if(e===Es)throw Error(M(174));return e}function Vu(e,t){switch(te(us,t),te(cs,e),te(Tt,Es),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uc(t,e)}ie(Tt),te(Tt,t)}function Jr(){ie(Tt),ie(cs),ie(us)}function am(e){rr(us.current);var t=rr(Tt.current),n=uc(t,e.type);t!==n&&(te(cs,e),te(Tt,n))}function Hu(e){cs.current===e&&(ie(Tt),ie(cs))}var le=Hn(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function Wu(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var _o=an.ReactCurrentDispatcher,Ll=an.ReactCurrentBatchConfig,lr=0,ce=null,xe=null,we=null,Yo=!1,Wi=!1,ds=0,e1=0;function Te(){throw Error(M(321))}function qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Ku(e,t,n,r,i,o){if(lr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?i1:s1,e=n(r,i),Wi){o=0;do{if(Wi=!1,ds=0,25<=o)throw Error(M(301));o+=1,we=xe=null,t.updateQueue=null,_o.current=o1,e=n(r,i)}while(Wi)}if(_o.current=Jo,t=xe!==null&&xe.next!==null,lr=0,we=xe=ce=null,Yo=!1,t)throw Error(M(300));return e}function Gu(){var e=ds!==0;return ds=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function ut(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=we===null?ce.memoizedState:we.next;if(t!==null)we=t,xe=e;else{if(e===null)throw Error(M(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function hs(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=l=null,u=null,h=o;do{var g=h.lane;if((lr&g)===g)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=m,l=r):u=u.next=m,ce.lanes|=g,cr|=g}h=h.next}while(h!==null&&h!==o);u===null?l=r:u.next=c,wt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,cr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ml(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);wt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lm(){}function cm(e,t){var n=ce,r=ut(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,Xu(hm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ps(9,dm.bind(null,n,r,i,t),void 0,null),be===null)throw Error(M(349));lr&30||um(n,t,i)}return i}function um(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dm(e,t,n,r){t.value=n,t.getSnapshot=r,pm(t)&&fm(e)}function hm(e,t,n){return n(function(){pm(t)&&fm(e)})}function pm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function fm(e){var t=nn(e,1);t!==null&&yt(t,e,1,-1)}function vp(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t.queue=e,e=e.dispatch=r1.bind(null,ce,e),[t.memoizedState,e]}function ps(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gm(){return ut().memoizedState}function ko(e,t,n,r){var i=Et();ce.flags|=e,i.memoizedState=ps(1|t,n,void 0,r===void 0?null:r)}function Ca(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(xe!==null){var l=xe.memoizedState;if(o=l.destroy,r!==null&&qu(r,l.deps)){i.memoizedState=ps(t,n,o,r);return}}ce.flags|=e,i.memoizedState=ps(1|t,n,o,r)}function xp(e,t){return ko(8390656,8,e,t)}function Xu(e,t){return Ca(2048,8,e,t)}function mm(e,t){return Ca(4,2,e,t)}function vm(e,t){return Ca(4,4,e,t)}function xm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ym(e,t,n){return n=n!=null?n.concat([e]):null,Ca(4,4,xm.bind(null,t,e),n)}function Yu(){}function wm(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bm(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _m(e,t,n){return lr&21?(wt(n,t)||(n=Ng(),ce.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function t1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{J=n,Ll.transition=r}}function km(){return ut().memoizedState}function n1(e,t,n){var r=Dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jm(e))Em(t,n);else if(n=sm(e,t,n,r),n!==null){var i=Ue();yt(n,e,r,i),Sm(n,t,r)}}function r1(e,t,n){var r=Dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jm(e))Em(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(i.hasEagerState=!0,i.eagerState=c,wt(c,l)){var u=t.interleaved;u===null?(i.next=i,$u(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=sm(e,t,i,r),n!==null&&(i=Ue(),yt(n,e,r,i),Sm(n,t,r))}}function jm(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Em(e,t){Wi=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nu(e,n)}}var Jo={readContext:ct,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},i1={readContext:ct,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:xp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,xm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=n1.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:vp,useDebugValue:Yu,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=vp(!1),t=e[0];return e=t1.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Et();if(se){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),be===null)throw Error(M(349));lr&30||um(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xp(hm.bind(null,r,o,e),[e]),r.flags|=2048,ps(9,dm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=be.identifierPrefix;if(se){var n=Kt,r=qt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ds++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s1={readContext:ct,useCallback:wm,useContext:ct,useEffect:Xu,useImperativeHandle:ym,useInsertionEffect:mm,useLayoutEffect:vm,useMemo:bm,useReducer:zl,useRef:gm,useState:function(){return zl(hs)},useDebugValue:Yu,useDeferredValue:function(e){var t=ut();return _m(t,xe.memoizedState,e)},useTransition:function(){var e=zl(hs)[0],t=ut().memoizedState;return[e,t]},useMutableSource:lm,useSyncExternalStore:cm,useId:km,unstable_isNewReconciler:!1},o1={readContext:ct,useCallback:wm,useContext:ct,useEffect:Xu,useImperativeHandle:ym,useInsertionEffect:mm,useLayoutEffect:vm,useMemo:bm,useReducer:Ml,useRef:gm,useState:function(){return Ml(hs)},useDebugValue:Yu,useDeferredValue:function(e){var t=ut();return xe===null?t.memoizedState=e:_m(t,xe.memoizedState,e)},useTransition:function(){var e=Ml(hs)[0],t=ut().memoizedState;return[e,t]},useMutableSource:lm,useSyncExternalStore:cm,useId:km,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ta={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Dn(e),o=Jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(yt(t,e,i,r),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Dn(e),o=Jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(yt(t,e,i,r),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Dn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(yt(t,e,r,n),bo(t,e,r))}};function yp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ss(n,r)||!ss(i,o):!0}function Nm(e,t,n){var r=!1,i=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Xe(t)?or:Ae.current,r=t.contextTypes,o=(r=r!=null)?Gr(e,i):Fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ta,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ta.enqueueReplaceState(t,t.state,null)}function Rc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Xe(t)?or:Ae.current,i.context=Gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ta.enqueueReplaceState(i,i.state,null),Go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var n="",r=t;do n+=Dy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ac(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a1=typeof WeakMap=="function"?WeakMap:Map;function Cm(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zo||(Zo=!0,Vc=r),Ac(e,t)},n}function Tm(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ac(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ac(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function bp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new a1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=b1.bind(null,e,t,n),t.then(e,e))}function _p(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var l1=an.ReactCurrentOwner,Ke=!1;function ze(e,t,n,r){t.child=e===null?im(t,null,n,r):Yr(t,e.child,n,r)}function jp(e,t,n,r,i){n=n.render;var o=t.ref;return Br(t,i),r=Ku(e,t,n,r,o,i),n=Gu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(se&&n&&Ou(t),t.flags|=1,ze(e,t,r,i),t.child)}function Ep(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!id(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Im(e,t,o,r,i)):(e=No(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(l,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=On(o,r),e.ref=t.ref,e.return=t,t.child=e}function Im(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ss(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Dc(e,t,n,r,i)}function Pm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Lr,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Lr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Lr,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Lr,Qe),Qe|=r;return ze(e,t,i,n),t.child}function Rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dc(e,t,n,r,i){var o=Xe(n)?or:Ae.current;return o=Gr(t,o),Br(t,i),n=Ku(e,t,n,r,o,i),r=Gu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(se&&r&&Ou(t),t.flags|=1,ze(e,t,n,i),t.child)}function Sp(e,t,n,r,i){if(Xe(n)){var o=!0;Vo(t)}else o=!1;if(Br(t,i),t.stateNode===null)jo(e,t),Nm(t,n,r),Rc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=ct(h):(h=Xe(n)?or:Ae.current,h=Gr(t,h));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||u!==h)&&wp(t,l,r,h),vn=!1;var w=t.memoizedState;l.state=w,Go(t,r,l,i),u=t.memoizedState,c!==r||w!==u||Ge.current||vn?(typeof g=="function"&&(Pc(t,n,g,r),u=t.memoizedState),(c=vn||yp(t,n,c,r,w,u,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,om(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:pt(t.type,c),l.props=h,m=t.pendingProps,w=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?or:Ae.current,u=Gr(t,u));var E=n.getDerivedStateFromProps;(g=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||w!==u)&&wp(t,l,r,u),vn=!1,w=t.memoizedState,l.state=w,Go(t,r,l,i);var b=t.memoizedState;c!==m||w!==b||Ge.current||vn?(typeof E=="function"&&(Pc(t,n,E,r),b=t.memoizedState),(h=vn||yp(t,n,h,r,w,b,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Oc(e,t,n,r,o,i)}function Oc(e,t,n,r,i,o){Rm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&dp(t,n,!1),rn(e,t,o);r=t.stateNode,l1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yr(t,e.child,null,o),t.child=Yr(t,null,c,o)):ze(e,t,c,o),t.memoizedState=r.state,i&&dp(t,n,!0),t.child}function Am(e){var t=e.stateNode;t.pendingContext?up(e,t.pendingContext,t.pendingContext!==t.context):t.context&&up(e,t.context,!1),Vu(e,t.containerInfo)}function Np(e,t,n,r,i){return Xr(),zu(i),t.flags|=256,ze(e,t,n,r),t.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function zc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dm(e,t,n){var r=t.pendingProps,i=le.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(le,i&1),e===null)return Tc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ra(l,r,0,null),e=sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zc(n),t.memoizedState=Lc,e):Ju(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return c1(e,t,l,r,c,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,c=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=On(i,u),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=On(c,o):(o=sr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?zc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Lc,r}return o=e.child,e=o.sibling,r=On(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ju(e,t){return t=Ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lo(e,t,n,r){return r!==null&&zu(r),Yr(t,e.child,null,n),e=Ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(M(422))),lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ra({mode:"visible",children:r.children},i,0,null),o=sr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yr(t,e.child,null,l),t.child.memoizedState=zc(l),t.memoizedState=Lc,o);if(!(t.mode&1))return lo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(M(419)),r=Ul(o,r,void 0),lo(e,t,l,r)}if(c=(l&e.childLanes)!==0,Ke||c){if(r=be,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nn(e,i),yt(r,e,i,-1))}return rd(),r=Ul(Error(M(421))),lo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=_1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ze=Pn(i.nextSibling),et=t,se=!0,gt=null,e!==null&&(st[ot++]=qt,st[ot++]=Kt,st[ot++]=ar,qt=e.id,Kt=e.overflow,ar=t),t=Ju(t,r.children),t.flags|=4096,t)}function Cp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function Fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Om(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ze(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cp(e,n,t);else if(e.tag===19)Cp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fl(t,!0,n,null,o);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u1(e,t,n){switch(t.tag){case 3:Am(t),Xr();break;case 5:am(t);break;case 1:Xe(t.type)&&Vo(t);break;case 4:Vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(qo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Dm(e,t,n):(te(le,le.current&1),e=rn(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Om(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Pm(e,t,n)}return rn(e,t,n)}var Lm,Mc,zm,Mm;Lm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};zm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(Tt.current);var o=null;switch(n){case"input":i=oc(e,i),r=oc(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=cc(e,i),r=cc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$o)}dc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Qi.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var u=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(o=o||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&re("scroll",e),o||c===u||(o=[])):(o=o||[]).push(h,u))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};Mm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pi(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function d1(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Xe(t.type)&&Bo(),Ie(t),null;case 3:return r=t.stateNode,Jr(),ie(Ge),ie(Ae),Wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(qc(gt),gt=null))),Mc(e,t),Ie(t),null;case 5:Hu(t);var i=rr(us.current);if(n=t.type,e!==null&&t.stateNode!=null)zm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ie(t),null}if(e=rr(Tt.current),oo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[ls]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<zi.length;i++)re(zi[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":zh(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Uh(r,o),re("invalid",r)}dc(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&so(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&so(r.textContent,c,e),i=["children",""+c]):Qi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Js(r),Mh(r,o,!0);break;case"textarea":Js(r),Fh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$o)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[ls]=r,Lm(e,t,!1,!1),t.stateNode=e;e:{switch(l=hc(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<zi.length;i++)re(zi[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":zh(e,r),i=oc(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":Uh(e,r),i=cc(e,r),re("invalid",e);break;default:i=r}dc(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var u=c[o];o==="style"?gg(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pg(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zi(e,u):typeof u=="number"&&Zi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&re("scroll",e):u!=null&&bu(e,o,u,l))}switch(n){case"input":Js(e),Mh(e,r,!1);break;case"textarea":Js(e),Fh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Mm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=rr(us.current),rr(Tt.current),oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ie(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Ze!==null&&t.mode&1&&!(t.flags&128))nm(),Xr(),t.flags|=98560,o=!1;else if(o=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[St]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else gt!==null&&(qc(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ye===0&&(ye=3):rd())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Jr(),Mc(e,t),e===null&&os(t.stateNode.containerInfo),Ie(t),null;case 10:return Fu(t.type._context),Ie(t),null;case 17:return Xe(t.type)&&Bo(),Ie(t),null;case 19:if(ie(le),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Pi(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xo(e),l!==null){for(t.flags|=128,Pi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>Zr&&(t.flags|=128,r=!0,Pi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Xo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!se)return Ie(t),null}else 2*fe()-o.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,Pi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return nd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function h1(e,t){switch(Lu(t),t.tag){case 1:return Xe(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),ie(Ge),ie(Ae),Wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hu(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return Jr(),null;case 10:return Fu(t.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var co=!1,Pe=!1,p1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Uc(e,t,n){try{n()}catch(r){de(e,t,r)}}var Tp=!1;function f1(e,t){if(_c=Mo,e=Vg(),Du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,h=0,g=0,m=e,w=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(E=m.firstChild)!==null;)w=m,m=E;for(;;){if(m===e)break t;if(w===n&&++h===i&&(c=l),w===o&&++g===r&&(u=l),(E=m.nextSibling)!==null)break;m=w,w=m.parentNode}m=E}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:e,selectionRange:n},Mo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var I=b.memoizedProps,D=b.memoizedState,_=t.stateNode,f=_.getSnapshotBeforeUpdate(t.elementType===t.type?I:pt(t.type,I),D);_.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){de(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=Tp,Tp=!1,b}function qi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Uc(t,n,o)}i=i.next}while(i!==r)}}function Ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Um(e){var t=e.alternate;t!==null&&(e.alternate=null,Um(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[ls],delete t[Sc],delete t[Y0],delete t[J0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fm(e){return e.tag===5||e.tag===3||e.tag===4}function Ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$o));else if(r!==4&&(e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function Bc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bc(e,t,n),e=e.sibling;e!==null;)Bc(e,t,n),e=e.sibling}var ke=null,ft=!1;function fn(e,t,n){for(n=n.child;n!==null;)$m(e,t,n),n=n.sibling}function $m(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(_a,n)}catch{}switch(n.tag){case 5:Pe||Or(n,t);case 6:var r=ke,i=ft;ke=null,fn(e,t,n),ke=r,ft=i,ke!==null&&(ft?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ft?(e=ke,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),rs(e)):Al(ke,n.stateNode));break;case 4:r=ke,i=ft,ke=n.stateNode.containerInfo,ft=!0,fn(e,t,n),ke=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Uc(n,t,l),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Pe&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){de(n,t,c)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,fn(e,t,n),Pe=r):fn(e,t,n);break;default:fn(e,t,n)}}function Pp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p1),t.forEach(function(r){var i=k1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:ke=c.stateNode,ft=!1;break e;case 3:ke=c.stateNode.containerInfo,ft=!0;break e;case 4:ke=c.stateNode.containerInfo,ft=!0;break e}c=c.return}if(ke===null)throw Error(M(160));$m(o,l,i),ke=null,ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){de(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bm(t,e),t=t.sibling}function Bm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),jt(e),r&4){try{qi(3,e,e.return),Ia(3,e)}catch(I){de(e,e.return,I)}try{qi(5,e,e.return)}catch(I){de(e,e.return,I)}}break;case 1:ht(t,e),jt(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(ht(t,e),jt(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var i=e.stateNode;try{Zi(i,"")}catch(I){de(e,e.return,I)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&ug(i,o),hc(c,l);var h=hc(c,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?gg(i,m):g==="dangerouslySetInnerHTML"?pg(i,m):g==="children"?Zi(i,m):bu(i,g,m,h)}switch(c){case"input":ac(i,o);break;case"textarea":dg(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Mr(i,!!o.multiple,E,!1):w!==!!o.multiple&&(o.defaultValue!=null?Mr(i,!!o.multiple,o.defaultValue,!0):Mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ls]=o}catch(I){de(e,e.return,I)}}break;case 6:if(ht(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(I){de(e,e.return,I)}}break;case 3:if(ht(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch(I){de(e,e.return,I)}break;case 4:ht(t,e),jt(e);break;case 13:ht(t,e),jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ed=fe())),r&4&&Pp(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(h=Pe)||g,ht(t,e),Pe=h):ht(t,e),jt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for($=e,g=e.child;g!==null;){for(m=$=g;$!==null;){switch(w=$,E=w.child,w.tag){case 0:case 11:case 14:case 15:qi(4,w,w.return);break;case 1:Or(w,w.return);var b=w.stateNode;if(typeof b.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(I){de(r,n,I)}}break;case 5:Or(w,w.return);break;case 22:if(w.memoizedState!==null){Ap(m);continue}}E!==null?(E.return=w,$=E):Ap(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=fg("display",l))}catch(I){de(e,e.return,I)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(I){de(e,e.return,I)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ht(t,e),jt(e),r&4&&Pp(e);break;case 21:break;default:ht(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zi(i,""),r.flags&=-33);var o=Ip(e);Bc(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Ip(e);$c(e,c,l);break;default:throw Error(M(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g1(e,t,n){$=e,Vm(e)}function Vm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||co;if(!l){var c=i.alternate,u=c!==null&&c.memoizedState!==null||Pe;c=co;var h=Pe;if(co=l,(Pe=u)&&!h)for($=i;$!==null;)l=$,u=l.child,l.tag===22&&l.memoizedState!==null?Dp(i):u!==null?(u.return=l,$=u):Dp(i);for(;o!==null;)$=o,Vm(o),o=o.sibling;$=i,co=c,Pe=h}Rp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Rp(e)}}function Rp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&rs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Pe||t.flags&512&&Fc(t)}catch(w){de(t,t.return,w)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Ap(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Dp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ia(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){de(t,i,u)}}var o=t.return;try{Fc(t)}catch(u){de(t,o,u)}break;case 5:var l=t.return;try{Fc(t)}catch(u){de(t,l,u)}}}catch(u){de(t,t.return,u)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var m1=Math.ceil,Qo=an.ReactCurrentDispatcher,Qu=an.ReactCurrentOwner,lt=an.ReactCurrentBatchConfig,G=0,be=null,me=null,je=0,Qe=0,Lr=Hn(0),ye=0,fs=null,cr=0,Pa=0,Zu=0,Ki=null,He=null,ed=0,Zr=1/0,Ht=null,Zo=!1,Vc=null,An=null,uo=!1,En=null,ea=0,Gi=0,Hc=null,Eo=-1,So=0;function Ue(){return G&6?fe():Eo!==-1?Eo:Eo=fe()}function Dn(e){return e.mode&1?G&2&&je!==0?je&-je:Z0.transition!==null?(So===0&&(So=Ng()),So):(e=J,e!==0||(e=window.event,e=e===void 0?16:Dg(e.type)),e):1}function yt(e,t,n,r){if(50<Gi)throw Gi=0,Hc=null,Error(M(185));_s(e,n,r),(!(G&2)||e!==be)&&(e===be&&(!(G&2)&&(Pa|=n),ye===4&&yn(e,je)),Ye(e,r),n===1&&G===0&&!(t.mode&1)&&(Zr=fe()+500,Na&&Wn()))}function Ye(e,t){var n=e.callbackNode;Zy(e,t);var r=zo(e,e===be?je:0);if(r===0)n!==null&&Vh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vh(n),t===1)e.tag===0?Q0(Op.bind(null,e)):Zg(Op.bind(null,e)),G0(function(){!(G&6)&&Wn()}),n=null;else{switch(Cg(r)){case 1:n=Su;break;case 4:n=Eg;break;case 16:n=Lo;break;case 536870912:n=Sg;break;default:n=Lo}n=Jm(n,Hm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hm(e,t){if(Eo=-1,So=0,G&6)throw Error(M(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=zo(e,e===be?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ta(e,r);else{t=r;var i=G;G|=2;var o=qm();(be!==e||je!==t)&&(Ht=null,Zr=fe()+500,ir(e,t));do try{y1();break}catch(c){Wm(e,c)}while(!0);Uu(),Qo.current=o,G=i,me!==null?t=0:(be=null,je=0,t=ye)}if(t!==0){if(t===2&&(i=vc(e),i!==0&&(r=i,t=Wc(e,i))),t===1)throw n=fs,ir(e,0),yn(e,r),Ye(e,fe()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!v1(i)&&(t=ta(e,r),t===2&&(o=vc(e),o!==0&&(r=o,t=Wc(e,o))),t===1))throw n=fs,ir(e,0),yn(e,r),Ye(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Zn(e,He,Ht);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=ed+500-fe(),10<t)){if(zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ec(Zn.bind(null,e,He,Ht),t);break}Zn(e,He,Ht);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-xt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*m1(r/1960))-r,10<r){e.timeoutHandle=Ec(Zn.bind(null,e,He,Ht),r);break}Zn(e,He,Ht);break;case 5:Zn(e,He,Ht);break;default:throw Error(M(329))}}}return Ye(e,fe()),e.callbackNode===n?Hm.bind(null,e):null}function Wc(e,t){var n=Ki;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=ta(e,t),e!==2&&(t=He,He=n,t!==null&&qc(t)),e}function qc(e){He===null?He=e:He.push.apply(He,e)}function v1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~Zu,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Op(e){if(G&6)throw Error(M(327));Vr();var t=zo(e,0);if(!(t&1))return Ye(e,fe()),null;var n=ta(e,t);if(e.tag!==0&&n===2){var r=vc(e);r!==0&&(t=r,n=Wc(e,r))}if(n===1)throw n=fs,ir(e,0),yn(e,t),Ye(e,fe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,He,Ht),Ye(e,fe()),null}function td(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Zr=fe()+500,Na&&Wn())}}function ur(e){En!==null&&En.tag===0&&!(G&6)&&Vr();var t=G;G|=1;var n=lt.transition,r=J;try{if(lt.transition=null,J=1,e)return e()}finally{J=r,lt.transition=n,G=t,!(G&6)&&Wn()}}function nd(){Qe=Lr.current,ie(Lr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,K0(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:Jr(),ie(Ge),ie(Ae),Wu();break;case 5:Hu(r);break;case 4:Jr();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Fu(r.type._context);break;case 22:case 23:nd()}n=n.return}if(be=e,me=e=On(e.current,null),je=Qe=t,ye=0,fs=null,Zu=Pa=cr=0,He=Ki=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}nr=null}return e}function Wm(e,t){do{var n=me;try{if(Uu(),_o.current=Jo,Yo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(lr=0,we=xe=ce=null,Wi=!1,ds=0,Qu.current=null,n===null||n.return===null){ye=1,fs=t,me=null;break}e:{var o=e,l=n.return,c=n,u=t;if(t=je,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var w=g.alternate;w?(g.updateQueue=w.updateQueue,g.memoizedState=w.memoizedState,g.lanes=w.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=_p(l);if(E!==null){E.flags&=-257,kp(E,l,c,o,t),E.mode&1&&bp(o,h,t),t=E,u=h;var b=t.updateQueue;if(b===null){var I=new Set;I.add(u),t.updateQueue=I}else b.add(u);break e}else{if(!(t&1)){bp(o,h,t),rd();break e}u=Error(M(426))}}else if(se&&c.mode&1){var D=_p(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),kp(D,l,c,o,t),zu(Qr(u,c));break e}}o=u=Qr(u,c),ye!==4&&(ye=2),Ki===null?Ki=[o]:Ki.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var _=Cm(o,u,t);gp(o,_);break e;case 1:c=u;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(An===null||!An.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Tm(o,c,t);gp(o,C);break e}}o=o.return}while(o!==null)}Gm(n)}catch(A){t=A,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function qm(){var e=Qo.current;return Qo.current=Jo,e===null?Jo:e}function rd(){(ye===0||ye===3||ye===2)&&(ye=4),be===null||!(cr&268435455)&&!(Pa&268435455)||yn(be,je)}function ta(e,t){var n=G;G|=2;var r=qm();(be!==e||je!==t)&&(Ht=null,ir(e,t));do try{x1();break}catch(i){Wm(e,i)}while(!0);if(Uu(),G=n,Qo.current=r,me!==null)throw Error(M(261));return be=null,je=0,ye}function x1(){for(;me!==null;)Km(me)}function y1(){for(;me!==null&&!Hy();)Km(me)}function Km(e){var t=Ym(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Gm(e):me=t,Qu.current=null}function Gm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=h1(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=d1(n,t,Qe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function Zn(e,t,n){var r=J,i=lt.transition;try{lt.transition=null,J=1,w1(e,t,n,r)}finally{lt.transition=i,J=r}return null}function w1(e,t,n,r){do Vr();while(En!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(e0(e,o),e===be&&(me=be=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Jm(Lo,function(){return Vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var l=J;J=1;var c=G;G|=4,Qu.current=null,f1(e,n),Bm(n,e),F0(kc),Mo=!!_c,kc=_c=null,e.current=n,g1(n),Wy(),G=c,J=l,lt.transition=o}else e.current=n;if(uo&&(uo=!1,En=e,ea=i),o=e.pendingLanes,o===0&&(An=null),Gy(n.stateNode),Ye(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zo)throw Zo=!1,e=Vc,Vc=null,e;return ea&1&&e.tag!==0&&Vr(),o=e.pendingLanes,o&1?e===Hc?Gi++:(Gi=0,Hc=e):Gi=0,Wn(),null}function Vr(){if(En!==null){var e=Cg(ea),t=lt.transition,n=J;try{if(lt.transition=null,J=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,ea=0,G&6)throw Error(M(331));var i=G;for(G|=4,$=e.current;$!==null;){var o=$,l=o.child;if($.flags&16){var c=o.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for($=h;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:qi(8,g,o)}var m=g.child;if(m!==null)m.return=g,$=m;else for(;$!==null;){g=$;var w=g.sibling,E=g.return;if(Um(g),g===h){$=null;break}if(w!==null){w.return=E,$=w;break}$=E}}}var b=o.alternate;if(b!==null){var I=b.child;if(I!==null){b.child=null;do{var D=I.sibling;I.sibling=null,I=D}while(I!==null)}}$=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,$=l;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qi(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,$=_;break e}$=o.return}}var f=e.current;for($=f;$!==null;){l=$;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,$=x;else e:for(l=f;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Ia(9,c)}}catch(A){de(c,c.return,A)}if(c===l){$=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,$=C;break e}$=c.return}}if(G=i,Wn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(_a,e)}catch{}r=!0}return r}finally{J=n,lt.transition=t}}return!1}function Lp(e,t,n){t=Qr(n,t),t=Cm(e,t,1),e=Rn(e,t,1),t=Ue(),e!==null&&(_s(e,1,t),Ye(e,t))}function de(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Qr(n,e),e=Tm(t,e,1),t=Rn(t,e,1),e=Ue(),t!==null&&(_s(t,1,e),Ye(t,e));break}}t=t.return}}function b1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(je&n)===n&&(ye===4||ye===3&&(je&130023424)===je&&500>fe()-ed?ir(e,0):Zu|=n),Ye(e,t)}function Xm(e,t){t===0&&(e.mode&1?(t=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):t=1);var n=Ue();e=nn(e,t),e!==null&&(_s(e,t,n),Ye(e,n))}function _1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xm(e,n)}function k1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Xm(e,n)}var Ym;Ym=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,u1(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,se&&t.flags&1048576&&em(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var i=Gr(t,Ae.current);Br(t,n),i=Ku(null,t,r,e,i,n);var o=Gu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Vo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bu(t),i.updater=Ta,t.stateNode=i,i._reactInternals=t,Rc(t,r,e,n),t=Oc(null,t,r,!0,o,n)):(t.tag=0,se&&o&&Ou(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=E1(r),e=pt(r,e),i){case 0:t=Dc(null,t,r,e,n);break e;case 1:t=Sp(null,t,r,e,n);break e;case 11:t=jp(null,t,r,e,n);break e;case 14:t=Ep(null,t,r,pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Dc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Sp(e,t,r,i,n);case 3:e:{if(Am(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,om(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qr(Error(M(423)),t),t=Np(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(M(424)),t),t=Np(e,t,r,n,i);break e}else for(Ze=Pn(t.stateNode.containerInfo.firstChild),et=t,se=!0,gt=null,n=im(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){t=rn(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return am(t),e===null&&Tc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,jc(r,i)?l=null:o!==null&&jc(r,o)&&(t.flags|=32),Rm(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&Tc(t),null;case 13:return Dm(e,t,n);case 4:return Vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),jp(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,te(qo,r._currentValue),r._currentValue=l,o!==null)if(wt(o.value,l)){if(o.children===i.children&&!Ge.current){t=rn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Jt(-1,n&-n),u.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ic(o.return,n,t),c.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ic(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Br(t,n),i=ct(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Ep(e,t,r,i,n);case 15:return Im(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),jo(e,t),t.tag=1,Xe(r)?(e=!0,Vo(t)):e=!1,Br(t,n),Nm(t,r,i),Rc(t,r,i,n),Oc(null,t,r,!0,e,n);case 19:return Om(e,t,n);case 22:return Pm(e,t,n)}throw Error(M(156,t.tag))};function Jm(e,t){return jg(e,t)}function j1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new j1(e,t,n,r)}function id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E1(e){if(typeof e=="function")return id(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===ju)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")id(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sr:return sr(n.children,i,o,t);case _u:l=8,i|=8;break;case nc:return e=at(12,n,t,i|2),e.elementType=nc,e.lanes=o,e;case rc:return e=at(13,n,t,i),e.elementType=rc,e.lanes=o,e;case ic:return e=at(19,n,t,i),e.elementType=ic,e.lanes=o,e;case ag:return Ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sg:l=10;break e;case og:l=9;break e;case ku:l=11;break e;case ju:l=14;break e;case mn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=at(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sr(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ra(e,t,n,r){return e=at(22,e,r,t),e.elementType=ag,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sd(e,t,n,r,i,o,l,c,u){return e=new S1(e,t,n,c,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(o),e}function N1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qm(e){if(!e)return Fn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Qg(e,n,t)}return t}function Zm(e,t,n,r,i,o,l,c,u){return e=sd(n,r,!0,e,i,o,l,c,u),e.context=Qm(null),n=e.current,r=Ue(),i=Dn(n),o=Jt(r,i),o.callback=t??null,Rn(n,o,i),e.current.lanes=i,_s(e,i,r),Ye(e,r),e}function Aa(e,t,n,r){var i=t.current,o=Ue(),l=Dn(i);return n=Qm(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,l),e!==null&&(yt(e,i,l,o),bo(e,i,l)),l}function na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function od(e,t){zp(e,t),(e=e.alternate)&&zp(e,t)}function C1(){return null}var ev=typeof reportError=="function"?reportError:function(e){console.error(e)};function ad(e){this._internalRoot=e}Da.prototype.render=ad.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Aa(e,t,null,null)};Da.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){Aa(null,e,null,null)}),t[tn]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xn.length&&t!==0&&t<xn[n].priority;n++);xn.splice(n,0,e),n===0&&Ag(e)}};function ld(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function T1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=na(l);o.call(h)}}var l=Zm(t,r,e,0,null,!1,!1,"",Mp);return e._reactRootContainer=l,e[tn]=l.current,os(e.nodeType===8?e.parentNode:e),ur(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=na(u);c.call(h)}}var u=sd(e,0,!1,null,null,!1,!1,"",Mp);return e._reactRootContainer=u,e[tn]=u.current,os(e.nodeType===8?e.parentNode:e),ur(function(){Aa(t,u,n,r)}),u}function La(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var c=i;i=function(){var u=na(l);c.call(u)}}Aa(t,l,e,i)}else l=T1(n,t,e,i,r);return na(l)}Tg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Li(t.pendingLanes);n!==0&&(Nu(t,n|1),Ye(t,fe()),!(G&6)&&(Zr=fe()+500,Wn()))}break;case 13:ur(function(){var r=nn(e,1);if(r!==null){var i=Ue();yt(r,e,1,i)}}),od(e,1)}};Cu=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Ue();yt(t,e,134217728,n)}od(e,134217728)}};Ig=function(e){if(e.tag===13){var t=Dn(e),n=nn(e,t);if(n!==null){var r=Ue();yt(n,e,t,r)}od(e,t)}};Pg=function(){return J};Rg=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};fc=function(e,t,n){switch(t){case"input":if(ac(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Sa(r);if(!i)throw Error(M(90));cg(r),ac(r,i)}}}break;case"textarea":dg(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};xg=td;yg=ur;var I1={usingClientEntryPoint:!1,Events:[js,Ir,Sa,mg,vg,td]},Ri={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P1={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_g(e),e===null?null:e.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{_a=ho.inject(P1),Ct=ho}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I1;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(t))throw Error(M(200));return N1(e,t,null,n)};nt.createRoot=function(e,t){if(!ld(e))throw Error(M(299));var n=!1,r="",i=ev;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sd(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,os(e.nodeType===8?e.parentNode:e),new ad(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=_g(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return ur(e)};nt.hydrate=function(e,t,n){if(!Oa(t))throw Error(M(200));return La(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!ld(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zm(t,null,e,1,n??null,i,!1,o,l),e[tn]=t.current,os(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Da(t)};nt.render=function(e,t,n){if(!Oa(t))throw Error(M(200));return La(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!Oa(e))throw Error(M(40));return e._reactRootContainer?(ur(function(){La(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};nt.unstable_batchedUpdates=td;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oa(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return La(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv)}catch(e){console.error(e)}}tv(),tg.exports=nt;var R1=tg.exports,Up=R1;ec.createRoot=Up.createRoot,ec.hydrateRoot=Up.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Fp="popstate";function A1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:c}=r.location;return Kc("",{pathname:o,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ra(i)}return O1(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function D1(){return Math.random().toString(36).substr(2,8)}function $p(e,t){return{usr:e.state,key:e.key,idx:t}}function Kc(e,t,n,r){return n===void 0&&(n=null),gs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?li(t):t,{state:n,key:t&&t.key||r||D1()})}function ra(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function li(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,c=Sn.Pop,u=null,h=g();h==null&&(h=0,l.replaceState(gs({},l.state,{idx:h}),""));function g(){return(l.state||{idx:null}).idx}function m(){c=Sn.Pop;let D=g(),_=D==null?null:D-h;h=D,u&&u({action:c,location:I.location,delta:_})}function w(D,_){c=Sn.Push;let f=Kc(I.location,D,_);h=g()+1;let x=$p(f,h),C=I.createHref(f);try{l.pushState(x,"",C)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(C)}o&&u&&u({action:c,location:I.location,delta:1})}function E(D,_){c=Sn.Replace;let f=Kc(I.location,D,_);h=g();let x=$p(f,h),C=I.createHref(f);l.replaceState(x,"",C),o&&u&&u({action:c,location:I.location,delta:0})}function b(D){let _=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof D=="string"?D:ra(D);return f=f.replace(/ $/,"%20"),ge(_,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,_)}let I={get action(){return c},get location(){return e(i,l)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Fp,m),u=D,()=>{i.removeEventListener(Fp,m),u=null}},createHref(D){return t(i,D)},createURL:b,encodeLocation(D){let _=b(D);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:w,replace:E,go(D){return l.go(D)}};return I}var Bp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bp||(Bp={}));function L1(e,t,n){return n===void 0&&(n="/"),z1(e,t,n)}function z1(e,t,n,r){let i=typeof t=="string"?li(t):t,o=ud(i.pathname||"/",n);if(o==null)return null;let l=nv(e);M1(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let h=Y1(o);c=K1(l[u],h)}return c}function nv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,c)=>{let u={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Ln([r,u.relativePath]),g=n.concat(u);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),nv(o.children,t,g,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:W1(h,o.index),routesMeta:g})};return e.forEach((o,l)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,l);else for(let u of rv(o.path))i(o,l,u)}),t}function rv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=rv(r.join("/")),c=[];return c.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function M1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:q1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const U1=/^:[\w-]+$/,F1=3,$1=2,B1=1,V1=10,H1=-2,Vp=e=>e==="*";function W1(e,t){let n=e.split("/"),r=n.length;return n.some(Vp)&&(r+=H1),t&&(r+=$1),n.filter(i=>!Vp(i)).reduce((i,o)=>i+(U1.test(o)?F1:o===""?B1:V1),r)}function q1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function K1(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=G1({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},g),w=u.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:Ln([o,m.pathname]),pathnameBase:t2(Ln([o,m.pathnameBase])),route:w}),m.pathnameBase!=="/"&&(o=Ln([o,m.pathnameBase]))}return l}function G1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,g,m)=>{let{paramName:w,isOptional:E}=g;if(w==="*"){let I=c[m]||"";l=o.slice(0,o.length-I.length).replace(/(.)\/+$/,"$1")}const b=c[m];return E&&!b?h[w]=void 0:h[w]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:l,pattern:e}}function X1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Y1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ud(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q1=e=>J1.test(e);function Z1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?li(e):e,o;if(n)if(Q1(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),cd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=Hp(n.substring(1),"/"):o=Hp(n,t)}else o=t;return{pathname:o,search:n2(r),hash:r2(i)}}function Hp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dd(e,t){let n=e2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=li(e):(i=gs({},e),ge(!i.pathname||!i.pathname.includes("?"),Vl("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Vl("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Vl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),m-=1;i.pathname=w.join("/")}c=m>=0?t[m]:"/"}let u=Z1(i,c),h=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||g)&&(u.pathname+="/"),u}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),t2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function i2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iv=["post","put","patch","delete"];new Set(iv);const s2=["get",...iv];new Set(s2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}const pd=R.createContext(null),o2=R.createContext(null),qn=R.createContext(null),za=R.createContext(null),ln=R.createContext({outlet:null,matches:[],isDataRoute:!1}),sv=R.createContext(null);function a2(e,t){let{relative:n}=t===void 0?{}:t;ci()||ge(!1);let{basename:r,navigator:i}=R.useContext(qn),{hash:o,pathname:l,search:c}=lv(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ln([r,l])),i.createHref({pathname:u,search:c,hash:o})}function ci(){return R.useContext(za)!=null}function cn(){return ci()||ge(!1),R.useContext(za).location}function ov(e){R.useContext(qn).static||R.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=R.useContext(ln);return e?w2():l2()}function l2(){ci()||ge(!1);let e=R.useContext(pd),{basename:t,future:n,navigator:r}=R.useContext(qn),{matches:i}=R.useContext(ln),{pathname:o}=cn(),l=JSON.stringify(dd(i,n.v7_relativeSplatPath)),c=R.useRef(!1);return ov(()=>{c.current=!0}),R.useCallback(function(h,g){if(g===void 0&&(g={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=hd(h,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ln([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,l,o,e])}function av(){let{matches:e}=R.useContext(ln),t=e[e.length-1];return t?t.params:{}}function lv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.useContext(qn),{matches:i}=R.useContext(ln),{pathname:o}=cn(),l=JSON.stringify(dd(i,r.v7_relativeSplatPath));return R.useMemo(()=>hd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function c2(e,t){return u2(e,t)}function u2(e,t,n,r){ci()||ge(!1);let{navigator:i}=R.useContext(qn),{matches:o}=R.useContext(ln),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let h=cn(),g;if(t){var m;let D=typeof t=="string"?li(t):t;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||ge(!1),g=D}else g=h;let w=g.pathname||"/",E=w;if(u!=="/"){let D=u.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(D.length).join("/")}let b=L1(e,{pathname:E}),I=g2(b&&b.map(D=>Object.assign({},D,{params:Object.assign({},c,D.params),pathname:Ln([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:Ln([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),o,n,r);return t&&I?R.createElement(za.Provider,{value:{location:ms({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Sn.Pop}},I):I}function d2(){let e=y2(),t=i2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,null)}const h2=R.createElement(d2,null);class p2 extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(ln.Provider,{value:this.props.routeContext},R.createElement(sv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function f2(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(pd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(ln.Provider,{value:t},r)}function g2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let g=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);g>=0||ge(!1),l=l.slice(0,Math.min(l.length,g+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=g),m.route.id){let{loaderData:w,errors:E}=n,b=m.route.loader&&w[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||b){u=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((g,m,w)=>{let E,b=!1,I=null,D=null;n&&(E=c&&m.route.id?c[m.route.id]:void 0,I=m.route.errorElement||h2,u&&(h<0&&w===0?(b2("route-fallback"),b=!0,D=null):h===w&&(b=!0,D=m.route.hydrateFallbackElement||null)));let _=t.concat(l.slice(0,w+1)),f=()=>{let x;return E?x=I:b?x=D:m.route.Component?x=R.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=g,R.createElement(f2,{match:m,routeContext:{outlet:g,matches:_,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?R.createElement(p2,{location:n.location,revalidation:n.revalidation,component:I,error:E,children:f(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):f()},null)}var cv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cv||{}),uv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(uv||{});function m2(e){let t=R.useContext(pd);return t||ge(!1),t}function v2(e){let t=R.useContext(o2);return t||ge(!1),t}function x2(e){let t=R.useContext(ln);return t||ge(!1),t}function dv(e){let t=x2(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function y2(){var e;let t=R.useContext(sv),n=v2(),r=dv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function w2(){let{router:e}=m2(cv.UseNavigateStable),t=dv(uv.UseNavigateStable),n=R.useRef(!1);return ov(()=>{n.current=!0}),R.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ms({fromRouteId:t},o)))},[e,t])}const Wp={};function b2(e,t,n){Wp[e]||(Wp[e]=!0)}function _2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Co(e){let{to:t,replace:n,state:r,relative:i}=e;ci()||ge(!1);let{future:o,static:l}=R.useContext(qn),{matches:c}=R.useContext(ln),{pathname:u}=cn(),h=_t(),g=hd(t,dd(c,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(g);return R.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:i}),[h,m,i,n,r]),null}function ae(e){ge(!1)}function k2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sn.Pop,navigator:o,static:l=!1,future:c}=e;ci()&&ge(!1);let u=t.replace(/^\/*/,"/"),h=R.useMemo(()=>({basename:u,navigator:o,static:l,future:ms({v7_relativeSplatPath:!1},c)}),[u,c,o,l]);typeof r=="string"&&(r=li(r));let{pathname:g="/",search:m="",hash:w="",state:E=null,key:b="default"}=r,I=R.useMemo(()=>{let D=ud(g,u);return D==null?null:{location:{pathname:D,search:m,hash:w,state:E,key:b},navigationType:i}},[u,g,m,w,E,b,i]);return I==null?null:R.createElement(qn.Provider,{value:h},R.createElement(za.Provider,{children:n,value:I}))}function qp(e){let{children:t,location:n}=e;return c2(Gc(t),n)}new Promise(()=>{});function Gc(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;let o=[...t,i];if(r.type===R.Fragment){n.push.apply(n,Gc(r.props.children,o));return}r.type!==ae&&ge(!1),!r.props.index||!r.props.children||ge(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Gc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xc(){return Xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xc.apply(this,arguments)}function j2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function E2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S2(e,t){return e.button===0&&(!t||t==="_self")&&!E2(e)}function Yc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function N2(e,t){let n=Yc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const C2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T2="6";try{window.__reactRouterVersion=T2}catch{}const I2="startTransition",Kp=by[I2];function P2(e){let{basename:t,children:n,future:r,window:i}=e,o=R.useRef();o.current==null&&(o.current=A1({window:i,v5Compat:!0}));let l=o.current,[c,u]=R.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},g=R.useCallback(m=>{h&&Kp?Kp(()=>u(m)):u(m)},[u,h]);return R.useLayoutEffect(()=>l.listen(g),[l,g]),R.useEffect(()=>_2(r),[r]),R.createElement(k2,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const R2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=R.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:c,target:u,to:h,preventScrollReset:g,viewTransition:m}=t,w=j2(t,C2),{basename:E}=R.useContext(qn),b,I=!1;if(typeof h=="string"&&A2.test(h)&&(b=h,R2))try{let x=new URL(window.location.href),C=h.startsWith("//")?new URL(x.protocol+h):new URL(h),A=ud(C.pathname,E);C.origin===x.origin&&A!=null?h=A+C.search+C.hash:I=!0}catch{}let D=a2(h,{relative:i}),_=D2(h,{replace:l,state:c,target:u,preventScrollReset:g,relative:i,viewTransition:m});function f(x){r&&r(x),x.defaultPrevented||_(x)}return R.createElement("a",Xc({},w,{href:b||D,onClick:I||o?r:f,ref:n,target:u}))});var Gp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gp||(Gp={}));var Xp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xp||(Xp={}));function D2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:c}=t===void 0?{}:t,u=_t(),h=cn(),g=lv(e,{relative:l});return R.useCallback(m=>{if(S2(m,n)){m.preventDefault();let w=r!==void 0?r:ra(h)===ra(g);u(e,{replace:w,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[h,u,g,r,i,n,e,o,l,c])}function O2(e){let t=R.useRef(Yc(e)),n=R.useRef(!1),r=cn(),i=R.useMemo(()=>N2(r.search,n.current?null:t.current),[r.search]),o=_t(),l=R.useCallback((c,u)=>{const h=Yc(typeof c=="function"?c(i):c);n.current=!0,o("?"+h,u)},[o,i]);return[i,l]}const hv=R.createContext(void 0),Ve=()=>{const e=R.useContext(hv);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},L2=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},z2=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},M2=({children:e})=>{const[t,n]=R.useState(null),[r,i]=R.useState(!0),[o,l]=R.useState(null),c=async()=>{try{i(!0),l(null);const{type:h,value:g}=z2(),m=h==="subdomain"?`/api/tenants/by-subdomain/${g}`:`/api/tenants/by-domain/${encodeURIComponent(g)}`,w=await fetch(`http://localhost:3001${m}`);if(!w.ok)throw w.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const E=await w.json();if(E.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(E.status==="cancelled")throw new Error("Cuenta cancelada.");n(E),L2(E.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{i(!1)}};R.useEffect(()=>{c()},[]);const u=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return s.jsx(hv.Provider,{value:{tenant:t,loading:r,error:o,isWhiteLabel:u,refreshTenant:c},children:e})};var Yp={};/**
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
 */const pv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},U2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],l=e[n++],c=e[n++],u=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],l=i+1<e.length,c=l?e[i+1]:0,u=i+2<e.length,h=u?e[i+2]:0,g=o>>2,m=(o&3)<<4|c>>4;let w=(c&15)<<2|h>>6,E=h&63;u||(E=64,l||(w=64)),r.push(n[g],n[m],n[w],n[E])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):U2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||c==null||h==null||m==null)throw new F2;const w=o<<2|c>>4;if(r.push(w),h!==64){const E=c<<4&240|h>>2;if(r.push(E),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class F2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $2=function(e){const t=pv(e);return fv.encodeByteArray(t,!0)},ia=function(e){return $2(e).replace(/\./g,"")},gv=function(e){try{return fv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function B2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const V2=()=>B2().__FIREBASE_DEFAULTS__,H2=()=>{if(typeof process>"u"||typeof Yp>"u")return;const e=Yp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},W2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gv(e[1]);return t&&JSON.parse(t)},fd=()=>{try{return V2()||H2()||W2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mv=e=>{var t,n;return(n=(t=fd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},vv=e=>{const t=mv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},xv=()=>{var e;return(e=fd())===null||e===void 0?void 0:e.config},yv=e=>{var t;return(t=fd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class q2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function wv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ia(JSON.stringify(n)),ia(JSON.stringify(l)),""].join(".")}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function G2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function X2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Y2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J2(){const e=Fe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Q2(){try{return typeof indexedDB=="object"}catch{return!1}}function Z2(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const ew="FirebaseError";class Dt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ew,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?tw(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Dt(i,c,r)}}function tw(e,t){return e.replace(nw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nw=/\{\$([^}]+)}/g;function rw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function sa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],l=t[i];if(Jp(o)&&Jp(l)){if(!sa(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jp(e){return e!==null&&typeof e=="object"}/**
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
 */function Ns(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Ui(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function iw(e,t){const n=new sw(e,t);return n.subscribe.bind(n)}class sw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ow(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Hl),i.error===void 0&&(i.error=Hl),i.complete===void 0&&(i.complete=Hl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Hl(){}/**
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
 */class aw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new q2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cw(t))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=er){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=er){return this.instances.has(t)}getOptions(t=er){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=er){return this.component?this.component.multipleInstances?t:er:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lw(e){return e===er?void 0:e}function cw(e){return e.instantiationMode==="EAGER"}/**
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
 */class uw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const dw={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},hw=Y.INFO,pw={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},fw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=pw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gd{constructor(t){this.name=t,this._logLevel=hw,this._logHandler=fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const gw=(e,t)=>t.some(n=>e instanceof n);let Qp,Zp;function mw(){return Qp||(Qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return Zp||(Zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,Jc=new WeakMap,_v=new WeakMap,Wl=new WeakMap,md=new WeakMap;function xw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(zn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&bv.set(n,e)}).catch(()=>{}),md.set(t,e),t}function yw(e){if(Jc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});Jc.set(e,t)}let Qc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Jc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_v.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ww(e){Qc=e(Qc)}function bw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ql(this),t,...n);return _v.set(r,t.sort?t.sort():[t]),zn(r)}:vw().includes(e)?function(...t){return e.apply(ql(this),t),zn(bv.get(this))}:function(...t){return zn(e.apply(ql(this),t))}}function _w(e){return typeof e=="function"?bw(e):(e instanceof IDBTransaction&&yw(e),gw(e,mw())?new Proxy(e,Qc):e)}function zn(e){if(e instanceof IDBRequest)return xw(e);if(Wl.has(e))return Wl.get(e);const t=_w(e);return t!==e&&(Wl.set(e,t),md.set(t,e)),t}const ql=e=>md.get(e);function kw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(e,t),c=zn(l);return r&&l.addEventListener("upgradeneeded",u=>{r(zn(l.result),u.oldVersion,u.newVersion,zn(l.transaction),u)}),n&&l.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const jw=["get","getKey","getAll","getAllKeys","count"],Ew=["put","add","delete","clear"],Kl=new Map;function ef(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Kl.get(t))return Kl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jw.includes(n)))return;const o=async function(l,...c){const u=this.transaction(l,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&u.done]))[0]};return Kl.set(t,o),o}ww(e=>({...e,get:(t,n,r)=>ef(t,n)||e.get(t,n,r),has:(t,n)=>!!ef(t,n)||e.has(t,n)}));/**
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
 */class Sw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zc="@firebase/app",tf="0.10.13";/**
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
 */const sn=new gd("@firebase/app"),Cw="@firebase/app-compat",Tw="@firebase/analytics-compat",Iw="@firebase/analytics",Pw="@firebase/app-check-compat",Rw="@firebase/app-check",Aw="@firebase/auth",Dw="@firebase/auth-compat",Ow="@firebase/database",Lw="@firebase/data-connect",zw="@firebase/database-compat",Mw="@firebase/functions",Uw="@firebase/functions-compat",Fw="@firebase/installations",$w="@firebase/installations-compat",Bw="@firebase/messaging",Vw="@firebase/messaging-compat",Hw="@firebase/performance",Ww="@firebase/performance-compat",qw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Gw="@firebase/storage",Xw="@firebase/storage-compat",Yw="@firebase/firestore",Jw="@firebase/vertexai-preview",Qw="@firebase/firestore-compat",Zw="firebase",eb="10.14.1";/**
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
 */const eu="[DEFAULT]",tb={[Zc]:"fire-core",[Cw]:"fire-core-compat",[Iw]:"fire-analytics",[Tw]:"fire-analytics-compat",[Rw]:"fire-app-check",[Pw]:"fire-app-check-compat",[Aw]:"fire-auth",[Dw]:"fire-auth-compat",[Ow]:"fire-rtdb",[Lw]:"fire-data-connect",[zw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Uw]:"fire-fn-compat",[Fw]:"fire-iid",[$w]:"fire-iid-compat",[Bw]:"fire-fcm",[Vw]:"fire-fcm-compat",[Hw]:"fire-perf",[Ww]:"fire-perf-compat",[qw]:"fire-rc",[Kw]:"fire-rc-compat",[Gw]:"fire-gcs",[Xw]:"fire-gcs-compat",[Yw]:"fire-fst",[Qw]:"fire-fst-compat",[Jw]:"fire-vertex","fire-js":"fire-js",[Zw]:"fire-js-all"};/**
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
 */const oa=new Map,nb=new Map,tu=new Map;function nf(e,t){try{e.container.addComponent(t)}catch(n){sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dr(e){const t=e.name;if(tu.has(t))return sn.debug(`There were multiple attempts to register component ${t}.`),!1;tu.set(t,e);for(const n of oa.values())nf(n,e);for(const n of nb.values())nf(n,e);return!0}function Ma(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nt(e){return e.settings!==void 0}/**
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
 */const rb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new Ss("app","Firebase",rb);/**
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
 */class ib{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=eb;function kv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:eu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=xv()),!n)throw Mn.create("no-options");const o=oa.get(i);if(o){if(sa(n,o.options)&&sa(r,o.config))return o;throw Mn.create("duplicate-app",{appName:i})}const l=new uw(i);for(const u of tu.values())l.addComponent(u);const c=new ib(n,r,l);return oa.set(i,c),c}function vd(e=eu){const t=oa.get(e);if(!t&&e===eu&&xv())return kv();if(!t)throw Mn.create("no-app",{appName:e});return t}function It(e,t,n){var r;let i=(r=tb[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sn.warn(c.join(" "));return}dr(new $n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const sb="firebase-heartbeat-database",ob=1,vs="firebase-heartbeat-store";let Gl=null;function jv(){return Gl||(Gl=kw(sb,ob,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(vs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),Gl}async function ab(e){try{const n=(await jv()).transaction(vs),r=await n.objectStore(vs).get(Ev(e));return await n.done,r}catch(t){if(t instanceof Dt)sn.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sn.warn(n.message)}}}async function rf(e,t){try{const r=(await jv()).transaction(vs,"readwrite");await r.objectStore(vs).put(t,Ev(e)),await r.done}catch(n){if(n instanceof Dt)sn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function Ev(e){return`${e.name}!${e.options.appId}`}/**
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
 */const lb=1024,cb=30*24*60*60*1e3;class ub{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=sf();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=cb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sf(),{heartbeatsToSend:r,unsentEntries:i}=db(this._heartbeatsCache.heartbeats),o=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return sn.warn(n),""}}}function sf(){return new Date().toISOString().substring(0,10)}function db(e,t=lb){const n=[];let r=e.slice();for(const i of e){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),of(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),of(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Q2()?Z2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ab(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function of(e){return ia(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function pb(e){dr(new $n("platform-logger",t=>new Sw(t),"PRIVATE")),dr(new $n("heartbeat",t=>new ub(t),"PRIVATE")),It(Zc,tf,e),It(Zc,tf,"esm2017"),It("fire-js","")}pb("");function xd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fb=Sv,Nv=new Ss("auth","Firebase",Sv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new gd("@firebase/auth");function gb(e,...t){aa.logLevel<=Y.WARN&&aa.warn(`Auth (${xr}): ${e}`,...t)}function To(e,...t){aa.logLevel<=Y.ERROR&&aa.error(`Auth (${xr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,...t){throw yd(e,...t)}function Pt(e,...t){return yd(e,...t)}function Cv(e,t,n){const r=Object.assign(Object.assign({},fb()),{[t]:n});return new Ss("auth","Firebase",r).create(t,{appName:e.name})}function Qt(e){return Cv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Nv.create(e,...t)}function V(e,t,...n){if(!e)throw yd(t,...n)}function Gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw To(t),new Error(t)}function on(e,t){e||Gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function mb(){return af()==="http:"||af()==="https:"}function af(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mb()||X2()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,n){this.shortDelay=t,this.longDelay=n,on(n>t,"Short delay should be less than long delay!"),this.isMobile=K2()||Y2()}get(){return vb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e,t){on(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new Cs(3e4,6e4);function un(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ot(e,t,n,r,i={}){return Iv(e,i,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const c=Ns(Object.assign({key:e.config.apiKey},l)).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:u},o);return G2()||(h.referrerPolicy="no-referrer"),Tv.fetch()(Pv(e,e.config.apiHost,n,c),h)})}async function Iv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},yb),t);try{const i=new _b(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw po(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(e,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw po(e,"email-already-in-use",l);if(u==="USER_DISABLED")throw po(e,"user-disabled",l);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cv(e,g,h);bt(e,g)}}catch(i){if(i instanceof Dt)throw i;bt(e,"network-request-failed",{message:String(i)})}}async function Ts(e,t,n,r,i={}){const o=await Ot(e,t,n,r,i);return"mfaPendingCredential"in o&&bt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Pv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?wd(e.config,i):`${e.config.apiScheme}://${i}`}function bb(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _b{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),wb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function po(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(e,t,r);return i.customData._tokenResponse=n,i}function lf(e){return e!==void 0&&e.enterprise!==void 0}class kb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return bb(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function jb(e,t){return Ot(e,"GET","/v2/recaptchaConfig",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(e,t){return Ot(e,"POST","/v1/accounts:delete",t)}async function Rv(e,t){return Ot(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Sb(e,t=!1){const n=kt(e),r=await n.getIdToken(t),i=bd(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Xi(Xl(i.auth_time)),issuedAtTime:Xi(Xl(i.iat)),expirationTime:Xi(Xl(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xl(e){return Number(e)*1e3}function bd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=gv(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cf(e){const t=bd(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Dt&&Nb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Nb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ei(e,Rv(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Av(o.providerUserInfo):[],c=Ib(e.providerData,l),u=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),g=u?h:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ru(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(e,m)}async function Tb(e){const t=kt(e);await la(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ib(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Av(e){return e.map(t=>{var{providerId:n}=t,r=xd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(e,t){const n=await Iv(e,{},async()=>{const r=Ns({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,l=Pv(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Tv.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rb(e,t){return Ot(e,"POST","/v2/accounts:revokeToken",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):cf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=cf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Pb(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new Hr;return r&&(V(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Xt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=xd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ru(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ei(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Sb(this,t)}reload(){return Tb(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Xt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Qt(this.auth));const t=await this.getIdToken();return await ei(this,Eb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,l,c,u,h,g;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(l=n.photoURL)!==null&&l!==void 0?l:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(h=n.createdAt)!==null&&h!==void 0?h:void 0,f=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:x,emailVerified:C,isAnonymous:A,providerData:z,stsTokenManager:k}=n;V(x&&k,t,"internal-error");const y=Hr.fromJSON(this.name,k);V(typeof x=="string",t,"internal-error"),gn(m,t.name),gn(w,t.name),V(typeof C=="boolean",t,"internal-error"),V(typeof A=="boolean",t,"internal-error"),gn(E,t.name),gn(b,t.name),gn(I,t.name),gn(D,t.name),gn(_,t.name),gn(f,t.name);const j=new Xt({uid:x,auth:t,email:w,emailVerified:C,displayName:m,isAnonymous:A,photoURL:b,phoneNumber:E,tenantId:I,stsTokenManager:y,createdAt:_,lastLoginAt:f});return z&&Array.isArray(z)&&(j.providerData=z.map(N=>Object.assign({},N))),D&&(j._redirectEventId=D),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new Hr;i.updateFromServerResponse(n);const o=new Xt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await la(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Av(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Hr;c.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ru(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Map;function Yt(e){on(e instanceof Function,"Expected a class definition");let t=uf.get(e);return t?(on(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,uf.set(e,t),t)}/**
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
 */class Dv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Dv.type="NONE";const df=Dv;/**
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
 */function Io(e,t,n){return`firebase:${e}:${t}:${n}`}class Wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,o),this.fullPersistenceKey=Io("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Xt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Wr(Yt(df),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||Yt(df);const l=Io(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const g=await h._get(l);if(g){const m=Xt._fromJSON(t,g);h!==o&&(c=m),o=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Wr(o,t,r):(o=u[0],c&&await o._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(l)}catch{}})),new Wr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ov(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fv(t))return"Blackberry";if($v(t))return"Webos";if(Lv(t))return"Safari";if((t.includes("chrome/")||zv(t))&&!t.includes("edge/"))return"Chrome";if(Uv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ov(e=Fe()){return/firefox\//i.test(e)}function Lv(e=Fe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zv(e=Fe()){return/crios\//i.test(e)}function Mv(e=Fe()){return/iemobile/i.test(e)}function Uv(e=Fe()){return/android/i.test(e)}function Fv(e=Fe()){return/blackberry/i.test(e)}function $v(e=Fe()){return/webos/i.test(e)}function _d(e=Fe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ab(e=Fe()){var t;return _d(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Db(){return J2()&&document.documentMode===10}function Bv(e=Fe()){return _d(e)||Uv(e)||$v(e)||Fv(e)||/windows phone/i.test(e)||Mv(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(e,t=[]){let n;switch(e){case"Browser":n=hf(Fe());break;case"Worker":n=`${hf(Fe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class Ob{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,c)=>{try{const u=t(o);l(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Lb(e,t={}){return Ot(e,"GET","/v2/passwordPolicy",un(e,t))}/**
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
 */const zb=6;class Mb{constructor(t){var n,r,i,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:zb,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,l,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.beforeStateQueue=new Ob(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Rv(this,{idToken:t}),r=await Xt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Nt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!l||l===c)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await la(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nt(this.app))return Promise.reject(Qt(this));const n=t?kt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nt(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Lb(this),n=new Mb(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ss("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rb(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{l=!0,u()}}else{const u=t.addObserver(n);return()=>{l=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kn(e){return kt(e)}class pf{constructor(t){this.auth=t,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fb(e){Ua=e}function Hv(e){return Ua.loadJS(e)}function $b(){return Ua.recaptchaEnterpriseScript}function Bb(){return Ua.gapiScript}function Vb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Hb="recaptcha-enterprise",Wb="NO_RECAPTCHA";class qb{constructor(t){this.type=Hb,this.auth=Kn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,c)=>{jb(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new kb(u);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,l(h.siteKey)}}).catch(u=>{c(u)})})}function i(o,l,c){const u=window.grecaptcha;lf(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:t}).then(h=>{l(h)}).catch(()=>{l(Wb)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(c=>{if(!n&&lf(window.grecaptcha))i(c,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$b();u.length!==0&&(u+=c),Hv(u).then(()=>{i(c,o,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function ff(e,t,n,r=!1){const i=new qb(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ca(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ff(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ff(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(e,t){const n=Ma(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(sa(o,t??{}))return i;bt(i,"already-initialized")}return n.initialize({options:t})}function Gb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Xb(e,t,n){const r=Kn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Wv(t),{host:l,port:c}=Yb(t),u=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Jb()}function Wv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Yb(e){const t=Wv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:gf(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:gf(l)}}}function gf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Jb(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(t){return Gt("not implemented")}_linkToIdToken(t,n){return Gt("not implemented")}_getReauthenticationResolver(t){return Gt("not implemented")}}async function Qb(e,t){return Ot(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(e,t){return Ts(e,"POST","/v1/accounts:signInWithPassword",un(e,t))}async function e_(e,t){return Ot(e,"POST","/v1/accounts:sendOobCode",un(e,t))}async function t_(e,t){return e_(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(e,t){return Ts(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}async function r_(e,t){return Ts(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends kd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new xs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new xs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ca(t,n,"signInWithPassword",Zb);case"emailLink":return n_(t,{email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ca(t,r,"signUpPassword",Qb);case"emailLink":return r_(t,{idToken:n,email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t){return Ts(e,"POST","/v1/accounts:signInWithIdp",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="http://localhost";class hr extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new hr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=xd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new hr(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return qr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,qr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,qr(t,n)}buildRequest(){const t={requestUri:i_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ns(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o_(e){const t=Mi(Ui(e)).link,n=t?Mi(Ui(t)).deep_link_id:null,r=Mi(Ui(e)).deep_link_id;return(r?Mi(Ui(r)).link:null)||r||n||t||e}class jd{constructor(t){var n,r,i,o,l,c;const u=Mi(Ui(t)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,m=s_((i=u.mode)!==null&&i!==void 0?i:null);V(h&&g&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=g,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=u.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=o_(t);try{return new jd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(t,n){return xs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=jd.parseLink(n);return V(r,"argument-error"),xs._fromEmailAndCode(t,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends qv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Is{constructor(){super("facebook.com")}static credential(t){return hr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return hr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Is{constructor(){super("github.com")}static credential(t){return hr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _n.credential(t.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Is{constructor(){super("twitter.com")}static credential(t,n){return hr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(e,t){return Ts(e,"POST","/v1/accounts:signUp",un(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Xt._fromIdTokenResponse(t,r,i),l=mf(r);return new pr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=mf(r);return new pr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function mf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Dt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ua.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ua(t,n,r,i)}}function Kv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ua._fromErrorAndOperation(e,o,t,r):o})}async function l_(e,t,n=!1){const r=await ei(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pr._forOperation(e,"link",r)}/**
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
 */async function c_(e,t,n=!1){const{auth:r}=e;if(Nt(r.app))return Promise.reject(Qt(r));const i="reauthenticate";try{const o=await ei(e,Kv(r,i,t,e),n);V(o.idToken,r,"internal-error");const l=bd(o.idToken);V(l,r,"internal-error");const{sub:c}=l;return V(e.uid===c,r,"user-mismatch"),pr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(e,t,n=!1){if(Nt(e.app))return Promise.reject(Qt(e));const r="signIn",i=await Kv(e,r,t),o=await pr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function u_(e,t){return Gv(Kn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(e){const t=Kn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function d_(e,t,n){const r=Kn(e);await ca(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",t_)}async function h_(e,t,n){if(Nt(e.app))return Promise.reject(Qt(e));const r=Kn(e),l=await ca(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Xv(e),u}),c=await pr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function p_(e,t,n){return Nt(e.app)?Promise.reject(Qt(e)):u_(kt(e),ui.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xv(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(e,t){return Ot(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=kt(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await ei(r,f_(r.auth,o));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function m_(e,t,n,r){return kt(e).onIdTokenChanged(t,n,r)}function v_(e,t,n){return kt(e).beforeAuthStateChanged(t,n)}function x_(e,t,n,r){return kt(e).onAuthStateChanged(t,n,r)}function y_(e){return kt(e).signOut()}const da="__sak";/**
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
 */class Yv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1e3,b_=10;class Jv extends Yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,u)=>{this.notifyListeners(l,u)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);Db()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,b_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},w_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jv.type="LOCAL";const __=Jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Qv.type="SESSION";const Zv=Qv;/**
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
 */class Fa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Fa(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async h=>h(n.origin,o)),u=await k_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class j_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((c,u)=>{const h=Ed("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(g),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function E_(e){Rt().location.href=e}/**
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
 */function ex(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function S_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function C_(){return ex()?self:null}/**
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
 */const tx="firebaseLocalStorageDb",T_=1,ha="firebaseLocalStorage",nx="fbase_key";class Ps{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $a(e,t){return e.transaction([ha],t?"readwrite":"readonly").objectStore(ha)}function I_(){const e=indexedDB.deleteDatabase(tx);return new Ps(e).toPromise()}function iu(){const e=indexedDB.open(tx,T_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ha,{keyPath:nx})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ha)?t(r):(r.close(),await I_(),t(await iu()))})})}async function vf(e,t,n){const r=$a(e,!0).put({[nx]:t,value:n});return new Ps(r).toPromise()}async function P_(e,t){const n=$a(e,!1).get(t),r=await new Ps(n).toPromise();return r===void 0?null:r.value}function xf(e,t){const n=$a(e,!0).delete(t);return new Ps(n).toPromise()}const R_=800,A_=3;class rx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await iu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>A_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ex()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(C_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await S_(),!this.activeServiceWorker)return;this.sender=new j_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||N_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await iu();return await vf(t,da,"1"),await xf(t,da),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>P_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=$a(i,!1).getAll();return new Ps(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rx.type="LOCAL";const D_=rx;new Cs(3e4,6e4);/**
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
 */function O_(e,t){return t?Yt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Sd extends kd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return qr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return qr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function L_(e){return Gv(e.auth,new Sd(e),e.bypassAuthState)}function z_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),c_(n,new Sd(e),e.bypassAuthState)}async function M_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),l_(n,new Sd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:c}=t;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return L_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return z_;default:bt(this.auth,"internal-error")}}resolve(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Cs(2e3,1e4);class zr extends ix{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const t=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,U_.get())};t()}}zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="pendingRedirect",Po=new Map;class $_ extends ix{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Po.get(this.auth._key());if(!t){try{const r=await B_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Po.set(this.auth._key(),t)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(e,t){const n=W_(t),r=H_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function V_(e,t){Po.set(e._key(),t)}function H_(e){return Yt(e._redirectPersistence)}function W_(e){return Io(F_,e.config.apiKey,e.name)}async function q_(e,t,n=!1){if(Nt(e.app))return Promise.reject(Qt(e));const r=Kn(e),i=O_(r,t),l=await new $_(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=10*60*1e3;class G_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!X_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sx(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=K_&&this.cachedEventUids.clear(),this.cachedEventUids.has(yf(t))}saveEventToCache(t){this.cachedEventUids.add(yf(t)),this.lastProcessedEventTime=Date.now()}}function yf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sx({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function X_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sx(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(e,t={}){return Ot(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q_=/^https?/;async function Z_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Y_(e);for(const n of t)try{if(ek(n))return}catch{}bt(e,"unauthorized-domain")}function ek(e){const t=nu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Q_.test(n))return!1;if(J_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tk=new Cs(3e4,6e4);function wf(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function nk(e){return new Promise((t,n)=>{var r,i,o;function l(){wf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wf(),n(Pt(e,"network-request-failed"))},timeout:tk.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Rt().gapi)===null||o===void 0)&&o.load)l();else{const c=Vb("iframefcb");return Rt()[c]=()=>{gapi.load?l():n(Pt(e,"network-request-failed"))},Hv(`${Bb()}?onload=${c}`).catch(u=>n(u))}}).catch(t=>{throw Ro=null,t})}let Ro=null;function rk(e){return Ro=Ro||nk(e),Ro}/**
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
 */const ik=new Cs(5e3,15e3),sk="__/auth/iframe",ok="emulator/auth/iframe",ak={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ck(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wd(t,ok):`https://${e.config.authDomain}/${sk}`,r={apiKey:t.apiKey,appName:e.name,v:xr},i=lk.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ns(r).slice(1)}`}async function uk(e){const t=await rk(e),n=Rt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:ck(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ak,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=Pt(e,"network-request-failed"),c=Rt().setTimeout(()=>{o(l)},ik.get());function u(){Rt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{o(l)})}))}/**
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
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hk=500,pk=600,fk="_blank",gk="http://localhost";class bf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mk(e,t,n,r=hk,i=pk){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},dk),{width:r.toString(),height:i.toString(),top:o,left:l}),h=Fe().toLowerCase();n&&(c=zv(h)?fk:n),Ov(h)&&(t=t||gk,u.scrollbars="yes");const g=Object.entries(u).reduce((w,[E,b])=>`${w}${E}=${b},`,"");if(Ab(h)&&c!=="_self")return vk(t||"",c),new bf(null);const m=window.open(t||"",c,g);V(m,e,"popup-blocked");try{m.focus()}catch{}return new bf(m)}function vk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xk="__/auth/handler",yk="emulator/auth/handler",wk=encodeURIComponent("fac");async function _f(e,t,n,r,i,o){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(t instanceof qv){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",rw(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,m]of Object.entries({}))l[g]=m}if(t instanceof Is){const g=t.getScopes().filter(m=>m!=="");g.length>0&&(l.scopes=g.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await e._getAppCheckToken(),h=u?`#${wk}=${encodeURIComponent(u)}`:"";return`${bk(e)}?${Ns(c).slice(1)}${h}`}function bk({config:e}){return e.emulator?wd(e,yk):`https://${e.authDomain}/${xk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="webStorageSupport";class _k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zv,this._completeRedirectFn=q_,this._overrideRedirectResult=V_}async _openPopup(t,n,r,i){var o;on((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await _f(t,n,r,nu(),i);return mk(t,l,Ed())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await _f(t,n,r,nu(),i);return E_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(on(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await uk(t),r=new G_(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Yl,{type:Yl},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Yl];l!==void 0&&n(!!l),bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bv()||Lv()||_d()}}const kk=_k;var kf="@firebase/auth",jf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sk(e){dr(new $n("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(e)},h=new Ub(r,i,o,u);return Gb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),dr(new $n("auth-internal",t=>{const n=Kn(t.getProvider("auth").getImmediate());return(r=>new jk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(kf,jf,Ek(e)),It(kf,jf,"esm2017")}/**
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
 */const Nk=5*60,Ck=yv("authIdTokenMaxAge")||Nk;let Ef=null;const Tk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ck)return;const i=n==null?void 0:n.token;Ef!==i&&(Ef=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ik(e=vd()){const t=Ma(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Kb(e,{popupRedirectResolver:kk,persistence:[D_,__,Zv]}),r=yv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=Tk(o.toString());v_(n,l,()=>l(n.currentUser)),m_(n,c=>l(c))}}const i=mv("auth");return i&&Xb(n,`http://${i}`),n}function Pk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Fb({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sk("Browser");var Rk="firebase",Ak="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(Rk,Ak,"app");var Sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ox;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,y){function j(){}j.prototype=y.prototype,k.D=y.prototype,k.prototype=new j,k.prototype.constructor=k,k.C=function(N,P,T){for(var S=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)S[ve-2]=arguments[ve];return y.prototype[P].apply(N,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,y,j){j||(j=0);var N=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)N[P]=y.charCodeAt(j++)|y.charCodeAt(j++)<<8|y.charCodeAt(j++)<<16|y.charCodeAt(j++)<<24;else for(P=0;16>P;++P)N[P]=y[j++]|y[j++]<<8|y[j++]<<16|y[j++]<<24;y=k.g[0],j=k.g[1],P=k.g[2];var T=k.g[3],S=y+(T^j&(P^T))+N[0]+3614090360&4294967295;y=j+(S<<7&4294967295|S>>>25),S=T+(P^y&(j^P))+N[1]+3905402710&4294967295,T=y+(S<<12&4294967295|S>>>20),S=P+(j^T&(y^j))+N[2]+606105819&4294967295,P=T+(S<<17&4294967295|S>>>15),S=j+(y^P&(T^y))+N[3]+3250441966&4294967295,j=P+(S<<22&4294967295|S>>>10),S=y+(T^j&(P^T))+N[4]+4118548399&4294967295,y=j+(S<<7&4294967295|S>>>25),S=T+(P^y&(j^P))+N[5]+1200080426&4294967295,T=y+(S<<12&4294967295|S>>>20),S=P+(j^T&(y^j))+N[6]+2821735955&4294967295,P=T+(S<<17&4294967295|S>>>15),S=j+(y^P&(T^y))+N[7]+4249261313&4294967295,j=P+(S<<22&4294967295|S>>>10),S=y+(T^j&(P^T))+N[8]+1770035416&4294967295,y=j+(S<<7&4294967295|S>>>25),S=T+(P^y&(j^P))+N[9]+2336552879&4294967295,T=y+(S<<12&4294967295|S>>>20),S=P+(j^T&(y^j))+N[10]+4294925233&4294967295,P=T+(S<<17&4294967295|S>>>15),S=j+(y^P&(T^y))+N[11]+2304563134&4294967295,j=P+(S<<22&4294967295|S>>>10),S=y+(T^j&(P^T))+N[12]+1804603682&4294967295,y=j+(S<<7&4294967295|S>>>25),S=T+(P^y&(j^P))+N[13]+4254626195&4294967295,T=y+(S<<12&4294967295|S>>>20),S=P+(j^T&(y^j))+N[14]+2792965006&4294967295,P=T+(S<<17&4294967295|S>>>15),S=j+(y^P&(T^y))+N[15]+1236535329&4294967295,j=P+(S<<22&4294967295|S>>>10),S=y+(P^T&(j^P))+N[1]+4129170786&4294967295,y=j+(S<<5&4294967295|S>>>27),S=T+(j^P&(y^j))+N[6]+3225465664&4294967295,T=y+(S<<9&4294967295|S>>>23),S=P+(y^j&(T^y))+N[11]+643717713&4294967295,P=T+(S<<14&4294967295|S>>>18),S=j+(T^y&(P^T))+N[0]+3921069994&4294967295,j=P+(S<<20&4294967295|S>>>12),S=y+(P^T&(j^P))+N[5]+3593408605&4294967295,y=j+(S<<5&4294967295|S>>>27),S=T+(j^P&(y^j))+N[10]+38016083&4294967295,T=y+(S<<9&4294967295|S>>>23),S=P+(y^j&(T^y))+N[15]+3634488961&4294967295,P=T+(S<<14&4294967295|S>>>18),S=j+(T^y&(P^T))+N[4]+3889429448&4294967295,j=P+(S<<20&4294967295|S>>>12),S=y+(P^T&(j^P))+N[9]+568446438&4294967295,y=j+(S<<5&4294967295|S>>>27),S=T+(j^P&(y^j))+N[14]+3275163606&4294967295,T=y+(S<<9&4294967295|S>>>23),S=P+(y^j&(T^y))+N[3]+4107603335&4294967295,P=T+(S<<14&4294967295|S>>>18),S=j+(T^y&(P^T))+N[8]+1163531501&4294967295,j=P+(S<<20&4294967295|S>>>12),S=y+(P^T&(j^P))+N[13]+2850285829&4294967295,y=j+(S<<5&4294967295|S>>>27),S=T+(j^P&(y^j))+N[2]+4243563512&4294967295,T=y+(S<<9&4294967295|S>>>23),S=P+(y^j&(T^y))+N[7]+1735328473&4294967295,P=T+(S<<14&4294967295|S>>>18),S=j+(T^y&(P^T))+N[12]+2368359562&4294967295,j=P+(S<<20&4294967295|S>>>12),S=y+(j^P^T)+N[5]+4294588738&4294967295,y=j+(S<<4&4294967295|S>>>28),S=T+(y^j^P)+N[8]+2272392833&4294967295,T=y+(S<<11&4294967295|S>>>21),S=P+(T^y^j)+N[11]+1839030562&4294967295,P=T+(S<<16&4294967295|S>>>16),S=j+(P^T^y)+N[14]+4259657740&4294967295,j=P+(S<<23&4294967295|S>>>9),S=y+(j^P^T)+N[1]+2763975236&4294967295,y=j+(S<<4&4294967295|S>>>28),S=T+(y^j^P)+N[4]+1272893353&4294967295,T=y+(S<<11&4294967295|S>>>21),S=P+(T^y^j)+N[7]+4139469664&4294967295,P=T+(S<<16&4294967295|S>>>16),S=j+(P^T^y)+N[10]+3200236656&4294967295,j=P+(S<<23&4294967295|S>>>9),S=y+(j^P^T)+N[13]+681279174&4294967295,y=j+(S<<4&4294967295|S>>>28),S=T+(y^j^P)+N[0]+3936430074&4294967295,T=y+(S<<11&4294967295|S>>>21),S=P+(T^y^j)+N[3]+3572445317&4294967295,P=T+(S<<16&4294967295|S>>>16),S=j+(P^T^y)+N[6]+76029189&4294967295,j=P+(S<<23&4294967295|S>>>9),S=y+(j^P^T)+N[9]+3654602809&4294967295,y=j+(S<<4&4294967295|S>>>28),S=T+(y^j^P)+N[12]+3873151461&4294967295,T=y+(S<<11&4294967295|S>>>21),S=P+(T^y^j)+N[15]+530742520&4294967295,P=T+(S<<16&4294967295|S>>>16),S=j+(P^T^y)+N[2]+3299628645&4294967295,j=P+(S<<23&4294967295|S>>>9),S=y+(P^(j|~T))+N[0]+4096336452&4294967295,y=j+(S<<6&4294967295|S>>>26),S=T+(j^(y|~P))+N[7]+1126891415&4294967295,T=y+(S<<10&4294967295|S>>>22),S=P+(y^(T|~j))+N[14]+2878612391&4294967295,P=T+(S<<15&4294967295|S>>>17),S=j+(T^(P|~y))+N[5]+4237533241&4294967295,j=P+(S<<21&4294967295|S>>>11),S=y+(P^(j|~T))+N[12]+1700485571&4294967295,y=j+(S<<6&4294967295|S>>>26),S=T+(j^(y|~P))+N[3]+2399980690&4294967295,T=y+(S<<10&4294967295|S>>>22),S=P+(y^(T|~j))+N[10]+4293915773&4294967295,P=T+(S<<15&4294967295|S>>>17),S=j+(T^(P|~y))+N[1]+2240044497&4294967295,j=P+(S<<21&4294967295|S>>>11),S=y+(P^(j|~T))+N[8]+1873313359&4294967295,y=j+(S<<6&4294967295|S>>>26),S=T+(j^(y|~P))+N[15]+4264355552&4294967295,T=y+(S<<10&4294967295|S>>>22),S=P+(y^(T|~j))+N[6]+2734768916&4294967295,P=T+(S<<15&4294967295|S>>>17),S=j+(T^(P|~y))+N[13]+1309151649&4294967295,j=P+(S<<21&4294967295|S>>>11),S=y+(P^(j|~T))+N[4]+4149444226&4294967295,y=j+(S<<6&4294967295|S>>>26),S=T+(j^(y|~P))+N[11]+3174756917&4294967295,T=y+(S<<10&4294967295|S>>>22),S=P+(y^(T|~j))+N[2]+718787259&4294967295,P=T+(S<<15&4294967295|S>>>17),S=j+(T^(P|~y))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+y&4294967295,k.g[1]=k.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+T&4294967295}r.prototype.u=function(k,y){y===void 0&&(y=k.length);for(var j=y-this.blockSize,N=this.B,P=this.h,T=0;T<y;){if(P==0)for(;T<=j;)i(this,k,T),T+=this.blockSize;if(typeof k=="string"){for(;T<y;)if(N[P++]=k.charCodeAt(T++),P==this.blockSize){i(this,N),P=0;break}}else for(;T<y;)if(N[P++]=k[T++],P==this.blockSize){i(this,N),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var y=1;y<k.length-8;++y)k[y]=0;var j=8*this.o;for(y=k.length-8;y<k.length;++y)k[y]=j&255,j/=256;for(this.u(k),k=Array(16),y=j=0;4>y;++y)for(var N=0;32>N;N+=8)k[j++]=this.g[y]>>>N&255;return k};function o(k,y){var j=c;return Object.prototype.hasOwnProperty.call(j,k)?j[k]:j[k]=y(k)}function l(k,y){this.h=y;for(var j=[],N=!0,P=k.length-1;0<=P;P--){var T=k[P]|0;N&&T==y||(j[P]=T,N=!1)}this.g=j}var c={};function u(k){return-128<=k&&128>k?o(k,function(y){return new l([y|0],0>y?-1:0)}):new l([k|0],0>k?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return m;if(0>k)return D(h(-k));for(var y=[],j=1,N=0;k>=j;N++)y[N]=k/j|0,j*=4294967296;return new l(y,0)}function g(k,y){if(k.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(k.charAt(0)=="-")return D(g(k.substring(1),y));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var j=h(Math.pow(y,8)),N=m,P=0;P<k.length;P+=8){var T=Math.min(8,k.length-P),S=parseInt(k.substring(P,P+T),y);8>T?(T=h(Math.pow(y,T)),N=N.j(T).add(h(S))):(N=N.j(j),N=N.add(h(S)))}return N}var m=u(0),w=u(1),E=u(16777216);e=l.prototype,e.m=function(){if(I(this))return-D(this).m();for(var k=0,y=1,j=0;j<this.g.length;j++){var N=this.i(j);k+=(0<=N?N:4294967296+N)*y,y*=4294967296}return k},e.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(b(this))return"0";if(I(this))return"-"+D(this).toString(k);for(var y=h(Math.pow(k,6)),j=this,N="";;){var P=C(j,y).g;j=_(j,P.j(y));var T=((0<j.g.length?j.g[0]:j.h)>>>0).toString(k);if(j=P,b(j))return T+N;for(;6>T.length;)T="0"+T;N=T+N}},e.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function b(k){if(k.h!=0)return!1;for(var y=0;y<k.g.length;y++)if(k.g[y]!=0)return!1;return!0}function I(k){return k.h==-1}e.l=function(k){return k=_(this,k),I(k)?-1:b(k)?0:1};function D(k){for(var y=k.g.length,j=[],N=0;N<y;N++)j[N]=~k.g[N];return new l(j,~k.h).add(w)}e.abs=function(){return I(this)?D(this):this},e.add=function(k){for(var y=Math.max(this.g.length,k.g.length),j=[],N=0,P=0;P<=y;P++){var T=N+(this.i(P)&65535)+(k.i(P)&65535),S=(T>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);N=S>>>16,T&=65535,S&=65535,j[P]=S<<16|T}return new l(j,j[j.length-1]&-2147483648?-1:0)};function _(k,y){return k.add(D(y))}e.j=function(k){if(b(this)||b(k))return m;if(I(this))return I(k)?D(this).j(D(k)):D(D(this).j(k));if(I(k))return D(this.j(D(k)));if(0>this.l(E)&&0>k.l(E))return h(this.m()*k.m());for(var y=this.g.length+k.g.length,j=[],N=0;N<2*y;N++)j[N]=0;for(N=0;N<this.g.length;N++)for(var P=0;P<k.g.length;P++){var T=this.i(N)>>>16,S=this.i(N)&65535,ve=k.i(P)>>>16,Gn=k.i(P)&65535;j[2*N+2*P]+=S*Gn,f(j,2*N+2*P),j[2*N+2*P+1]+=T*Gn,f(j,2*N+2*P+1),j[2*N+2*P+1]+=S*ve,f(j,2*N+2*P+1),j[2*N+2*P+2]+=T*ve,f(j,2*N+2*P+2)}for(N=0;N<y;N++)j[N]=j[2*N+1]<<16|j[2*N];for(N=y;N<2*y;N++)j[N]=0;return new l(j,0)};function f(k,y){for(;(k[y]&65535)!=k[y];)k[y+1]+=k[y]>>>16,k[y]&=65535,y++}function x(k,y){this.g=k,this.h=y}function C(k,y){if(b(y))throw Error("division by zero");if(b(k))return new x(m,m);if(I(k))return y=C(D(k),y),new x(D(y.g),D(y.h));if(I(y))return y=C(k,D(y)),new x(D(y.g),y.h);if(30<k.g.length){if(I(k)||I(y))throw Error("slowDivide_ only works with positive integers.");for(var j=w,N=y;0>=N.l(k);)j=A(j),N=A(N);var P=z(j,1),T=z(N,1);for(N=z(N,2),j=z(j,2);!b(N);){var S=T.add(N);0>=S.l(k)&&(P=P.add(j),T=S),N=z(N,1),j=z(j,1)}return y=_(k,P.j(y)),new x(P,y)}for(P=m;0<=k.l(y);){for(j=Math.max(1,Math.floor(k.m()/y.m())),N=Math.ceil(Math.log(j)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),T=h(j),S=T.j(y);I(S)||0<S.l(k);)j-=N,T=h(j),S=T.j(y);b(T)&&(T=w),P=P.add(T),k=_(k,S)}return new x(P,k)}e.A=function(k){return C(this,k).h},e.and=function(k){for(var y=Math.max(this.g.length,k.g.length),j=[],N=0;N<y;N++)j[N]=this.i(N)&k.i(N);return new l(j,this.h&k.h)},e.or=function(k){for(var y=Math.max(this.g.length,k.g.length),j=[],N=0;N<y;N++)j[N]=this.i(N)|k.i(N);return new l(j,this.h|k.h)},e.xor=function(k){for(var y=Math.max(this.g.length,k.g.length),j=[],N=0;N<y;N++)j[N]=this.i(N)^k.i(N);return new l(j,this.h^k.h)};function A(k){for(var y=k.g.length+1,j=[],N=0;N<y;N++)j[N]=k.i(N)<<1|k.i(N-1)>>>31;return new l(j,k.h)}function z(k,y){var j=y>>5;y%=32;for(var N=k.g.length-j,P=[],T=0;T<N;T++)P[T]=0<y?k.i(T+j)>>>y|k.i(T+j+1)<<32-y:k.i(T+j);return new l(P,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=g,ox=l}).apply(typeof Sf<"u"?Sf:typeof self<"u"?self:typeof window<"u"?window:{});var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fo=="object"&&fo];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in p))break e;p=p[O]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&t(p,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var p=0,v=!1,O={next:function(){if(!v&&p<a.length){var L=p++;return{value:d(L,a[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function g(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),a.apply(d,O)}}return function(){return a.apply(d,arguments)}}function w(a,d,p){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:m,w.apply(null,arguments)}function E(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function b(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,O,L){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return d.prototype[O].apply(v,U)}}function I(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function D(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const O=a.length||0,L=v.length||0;a.length=O+L;for(let U=0;U<L;U++)a[O+U]=v[U]}else a.push(v)}}class _{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function f(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function C(a){return C[" "](a),a}C[" "]=function(){};var A=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function k(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function y(a){const d={};for(const p in a)d[p]=a[p];return d}const j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,d){let p,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(p in v)a[p]=v[p];for(let L=0;L<j.length;L++)p=j[L],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function P(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function T(a){c.setTimeout(()=>{throw a},0)}function S(){var a=H;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ve{constructor(){this.h=this.g=null}add(d,p){const v=Gn.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Gn=new _(()=>new di,a=>a.reset());class di{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,F=!1,H=new ve,W=()=>{const a=c.Promise.resolve(void 0);zt=()=>{a.then(oe)}};var oe=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){T(p)}var d=Gn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return a}();function Ut(a,d){if(he.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(A){e:{try{C(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ft[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ut.aa.h.call(this)}}b(Ut,he);var Ft={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),Ex=0;function Sx(a,d,p,v,O){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=O,this.key=++Ex,this.da=this.fa=!1}function Ds(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Os(a){this.src=a,this.g={},this.h=0}Os.prototype.add=function(a,d,p,v,O){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var U=Ka(a,d,v,O);return-1<U?(d=a[U],p||(d.fa=!1)):(d=new Sx(d,this.src,L,!!v,O),d.fa=p,a.push(d)),d};function qa(a,d){var p=d.type;if(p in a.g){var v=a.g[p],O=Array.prototype.indexOf.call(v,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(v,O,1),L&&(Ds(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ka(a,d,p,v){for(var O=0;O<a.length;++O){var L=a[O];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==v)return O}return-1}var Ga="closure_lm_"+(1e6*Math.random()|0),Xa={};function Dd(a,d,p,v,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Dd(a,d[L],p,v,O);return null}return p=zd(p),a&&a[$t]?a.K(d,p,h(v)?!!v.capture:!1,O):Nx(a,d,p,!1,v,O)}function Nx(a,d,p,v,O,L){if(!d)throw Error("Invalid event type");var U=h(O)?!!O.capture:!!O,Z=Ja(a);if(Z||(a[Ga]=Z=new Os(a)),p=Z.add(d,p,v,U,L),p.proxy)return p;if(v=Cx(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)Mt||(O=U),O===void 0&&(O=!1),a.addEventListener(d.toString(),v,O);else if(a.attachEvent)a.attachEvent(Ld(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Cx(){function a(p){return d.call(a.src,a.listener,p)}const d=Tx;return a}function Od(a,d,p,v,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Od(a,d[L],p,v,O);else v=h(v)?!!v.capture:!!v,p=zd(p),a&&a[$t]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],p=Ka(L,p,v,O),-1<p&&(Ds(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=Ja(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ka(d,p,v,O)),(p=-1<a?d[a]:null)&&Ya(p))}function Ya(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$t])qa(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(Ld(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Ja(d))?(qa(p,a),p.h==0&&(p.src=null,d[Ga]=null)):Ds(a)}}}function Ld(a){return a in Xa?Xa[a]:Xa[a]="on"+a}function Tx(a,d){if(a.da)a=!0;else{d=new Ut(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&Ya(a),a=p.call(v,d)}return a}function Ja(a){return a=a[Ga],a instanceof Os?a:null}var Qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function zd(a){return typeof a=="function"?a:(a[Qa]||(a[Qa]=function(d){return a.handleEvent(d)}),a[Qa])}function Se(){Q.call(this),this.i=new Os(this),this.M=this,this.F=null}b(Se,Q),Se.prototype[$t]=!0,Se.prototype.removeEventListener=function(a,d,p,v){Od(this,a,d,p,v)};function De(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new he(d,a);else if(d instanceof he)d.target=d.target||a;else{var O=d;d=new he(v,a),N(d,O)}if(O=!0,p)for(var L=p.length-1;0<=L;L--){var U=d.g=p[L];O=Ls(U,v,!0,d)&&O}if(U=d.g=a,O=Ls(U,v,!0,d)&&O,O=Ls(U,v,!1,d)&&O,p)for(L=0;L<p.length;L++)U=d.g=p[L],O=Ls(U,v,!1,d)&&O}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)Ds(p[v]);delete a.g[d],a.h--}}this.F=null},Se.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Se.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function Ls(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var U=d[L];if(U&&!U.da&&U.capture==p){var Z=U.listener,_e=U.ha||U.src;U.fa&&qa(a.i,U),O=Z.call(_e,v)!==!1&&O}}return O&&!v.defaultPrevented}function Md(a,d,p){if(typeof a=="function")p&&(a=w(a,p));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Ud(a){a.g=Md(()=>{a.g=null,a.i&&(a.i=!1,Ud(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ix extends Q{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ud(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hi(a){Q.call(this),this.h=a,this.g={}}b(hi,Q);var Fd=[];function $d(a){z(a.g,function(d,p){this.g.hasOwnProperty(p)&&Ya(d)},a),a.g={}}hi.prototype.N=function(){hi.aa.N.call(this),$d(this)},hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Za=c.JSON.stringify,Px=c.JSON.parse,Rx=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function el(){}el.prototype.h=null;function Bd(a){return a.h||(a.h=a.i())}function Ax(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tl(){he.call(this,"d")}b(tl,he);function nl(){he.call(this,"c")}b(nl,he);var yr={},Vd=null;function rl(){return Vd=Vd||new Se}yr.La="serverreachability";function Hd(a){he.call(this,yr.La,a)}b(Hd,he);function fi(a){const d=rl();De(d,new Hd(d))}yr.STAT_EVENT="statevent";function Wd(a,d){he.call(this,yr.STAT_EVENT,a),this.stat=d}b(Wd,he);function Oe(a){const d=rl();De(d,new Wd(d,a))}yr.Ma="timingevent";function qd(a,d){he.call(this,yr.Ma,a),this.size=d}b(qd,he);function gi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function Dx(a,d,p,v,O,L){a.info(function(){if(a.g)if(L)for(var U="",Z=L.split("&"),_e=0;_e<Z.length;_e++){var X=Z[_e].split("=");if(1<X.length){var Ne=X[0];X=X[1];var Ce=Ne.split("_");U=2<=Ce.length&&Ce[1]=="type"?U+(Ne+"="+X+"&"):U+(Ne+"=redacted&")}}else U=null;else U=L;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+d+`
`+p+`
`+U})}function Ox(a,d,p,v,O,L,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+d+`
`+p+`
`+L+" "+U})}function wr(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+zx(a,p)+(v?" "+v:"")})}function Lx(a,d){a.info(function(){return"TIMEOUT: "+d})}mi.prototype.info=function(){};function zx(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var U=1;U<O.length;U++)O[U]=""}}}}return Za(p)}catch{return d}}var il={NO_ERROR:0,TIMEOUT:8},Mx={},sl;function zs(){}b(zs,el),zs.prototype.g=function(){return new XMLHttpRequest},zs.prototype.i=function(){return{}},sl=new zs;function dn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kd}function Kd(){this.i=null,this.g="",this.h=!1}var Gd={},ol={};function al(a,d,p){a.L=1,a.v=$s(Bt(d)),a.m=p,a.P=!0,Xd(a,null)}function Xd(a,d){a.F=Date.now(),Ms(a),a.A=Bt(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),ch(p.i,"t",v),a.C=0,p=a.j.J,a.h=new Kd,a.g=Nh(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Ix(w(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Fd[0]=O.toString()),O=Fd);for(var L=0;L<O.length;L++){var U=Dd(p,O[L],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),fi(),Dx(a.i,a.u,a.A,a.l,a.R,a.m)}dn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Vt(a)==3?d.j():this.Y(a)},dn.prototype.Y=function(a){try{if(a==this.g)e:{const Ce=Vt(this.g);var d=this.g.Ba();const kr=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||mh(this.g)))){this.J||Ce!=4||d==7||(d==8||0>=kr?fi(3):fi(2)),ll(this);var p=this.g.Z();this.X=p;t:if(Yd(this)){var v=mh(this.g);a="";var O=v.length,L=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),vi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(L&&d==O-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,Ox(this.i,this.u,this.A,this.l,this.R,Ce,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(Z)){var X=Z;break t}}X=null}if(p=X)wr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cl(this,p);else{this.o=!1,this.s=3,Oe(12),Xn(this),vi(this);break e}}if(this.P){p=!0;let dt;for(;!this.J&&this.C<U.length;)if(dt=Ux(this,U),dt==ol){Ce==4&&(this.s=4,Oe(14),p=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Gd){this.s=4,Oe(15),wr(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else wr(this.i,this.l,dt,null),cl(this,dt);if(Yd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||U.length!=0||this.h.h||(this.s=1,Oe(16),p=!1),this.o=this.o&&p,!p)wr(this.i,this.l,U,"[Invalid Chunked Response]"),Xn(this),vi(this);else if(0<U.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),gl(Ne),Ne.M=!0,Oe(11))}}else wr(this.i,this.l,U,null),cl(this,U);Ce==4&&Xn(this),this.o&&!this.J&&(Ce==4?kh(this.j,this):(this.o=!1,Ms(this)))}else ny(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Xn(this),vi(this)}}}catch{}finally{}};function Yd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ux(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?ol:(p=Number(d.substring(p,v)),isNaN(p)?Gd:(v+=1,v+p>d.length?ol:(d=d.slice(v,v+p),a.C=v+p,d)))}dn.prototype.cancel=function(){this.J=!0,Xn(this)};function Ms(a){a.S=Date.now()+a.I,Jd(a,a.I)}function Jd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gi(w(a.ba,a),d)}function ll(a){a.B&&(c.clearTimeout(a.B),a.B=null)}dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Lx(this.i,this.A),this.L!=2&&(fi(),Oe(17)),Xn(this),this.s=2,vi(this)):Jd(this,this.S-a)};function vi(a){a.j.G==0||a.J||kh(a.j,a)}function Xn(a){ll(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,$d(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function cl(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||ul(p.h,a))){if(!a.K&&ul(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ks(p),Ws(p);else break e;fl(p),Oe(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=gi(w(p.Za,p),6e3));if(1>=eh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Jn(p,11)}else if((a.K||p.g==a)&&Ks(p),!f(d))for(O=p.Da.g.parse(d),d=0;d<O.length;d++){let X=O[d];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Ne=X[3];Ne!=null&&(p.la=Ne,p.j.info("VER="+p.la));const Ce=X[4];Ce!=null&&(p.Aa=Ce,p.j.info("SVER="+p.Aa));const kr=X[5];kr!=null&&typeof kr=="number"&&0<kr&&(v=1.5*kr,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const dt=a.g;if(dt){const Gs=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gs){var L=v.h;L.g||Gs.indexOf("spdy")==-1&&Gs.indexOf("quic")==-1&&Gs.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(dl(L,L.h),L.h=null))}if(v.D){const ml=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(v.ya=ml,ne(v.I,v.D,ml))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var U=a;if(v.qa=Sh(v,v.J?v.ia:null,v.W),U.K){th(v.h,U);var Z=U,_e=v.L;_e&&(Z.I=_e),Z.B&&(ll(Z),Ms(Z)),v.g=U}else bh(v);0<p.i.length&&qs(p)}else X[0]!="stop"&&X[0]!="close"||Jn(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Jn(p,7):pl(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}fi(4)}catch{}}var Fx=class{constructor(a,d){this.g=a,this.map=d}};function Qd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function eh(a){return a.h?1:a.g?a.g.size:0}function ul(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function dl(a,d){a.g?a.g.add(d):a.h=d}function th(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Qd.prototype.cancel=function(){if(this.i=nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return I(a.i)}function $x(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function Bx(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function rh(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Bx(a),v=$x(a),O=v.length,L=0;L<O;L++)d.call(void 0,v[L],p&&p[L],a)}var ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vx(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),O=null;if(0<=v){var L=a[p].substring(0,v);O=a[p].substring(v+1)}else L=a[p];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Yn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Yn){this.h=a.h,Us(this,a.j),this.o=a.o,this.g=a.g,Fs(this,a.s),this.l=a.l;var d=a.i,p=new wi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),sh(this,p),this.m=a.m}else a&&(d=String(a).match(ih))?(this.h=!1,Us(this,d[1]||"",!0),this.o=xi(d[2]||""),this.g=xi(d[3]||"",!0),Fs(this,d[4]),this.l=xi(d[5]||"",!0),sh(this,d[6]||"",!0),this.m=xi(d[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Yn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(yi(d,oh,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(yi(d,oh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(yi(p,p.charAt(0)=="/"?qx:Wx,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",yi(p,Gx)),a.join("")};function Bt(a){return new Yn(a)}function Us(a,d,p){a.j=p?xi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Fs(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function sh(a,d,p){d instanceof wi?(a.i=d,Xx(a.i,a.h)):(p||(d=yi(d,Kx)),a.i=new wi(d,a.h))}function ne(a,d,p){a.i.set(d,p)}function $s(a){return ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Hx),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oh=/[#\/\?@]/g,Wx=/[#\?:]/g,qx=/[#\?]/g,Kx=/[#\?@]/g,Gx=/#/g;function wi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function hn(a){a.g||(a.g=new Map,a.h=0,a.i&&Vx(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}e=wi.prototype,e.add=function(a,d){hn(this),this.i=null,a=br(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function ah(a,d){hn(a),d=br(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function lh(a,d){return hn(a),d=br(a,d),a.g.has(d)}e.forEach=function(a,d){hn(this),this.g.forEach(function(p,v){p.forEach(function(O){a.call(d,O,v,this)},this)},this)},e.na=function(){hn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const O=a[v];for(let L=0;L<O.length;L++)p.push(d[v])}return p},e.V=function(a){hn(this);let d=[];if(typeof a=="string")lh(this,a)&&(d=d.concat(this.g.get(br(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},e.set=function(a,d){return hn(this),this.i=null,a=br(this,a),lh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},e.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ch(a,d,p){ah(a,d),0<p.length&&(a.i=null,a.g.set(br(a,d),I(p)),a.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const L=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var O=L;U[v]!==""&&(O+="="+encodeURIComponent(String(U[v]))),a.push(O)}}return this.i=a.join("&")};function br(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Xx(a,d){d&&!a.j&&(hn(a),a.i=null,a.g.forEach(function(p,v){var O=v.toLowerCase();v!=O&&(ah(this,v),ch(this,O,p))},a)),a.j=d}function Yx(a,d){const p=new mi;if(c.Image){const v=new Image;v.onload=E(pn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=E(pn,p,"TestLoadImage: error",!1,d,v),v.onabort=E(pn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=E(pn,p,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Jx(a,d){const p=new mi,v=new AbortController,O=setTimeout(()=>{v.abort(),pn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(O),L.ok?pn(p,"TestPingServer: ok",!0,d):pn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),pn(p,"TestPingServer: error",!1,d)})}function pn(a,d,p,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(p)}catch{}}function Qx(){this.g=new Rx}function Zx(a,d,p){const v=p||"";try{rh(a,function(O,L){let U=O;h(O)&&(U=Za(O)),d.push(v+L+"="+encodeURIComponent(U))})}catch(O){throw d.push(v+"type="+encodeURIComponent("_badmap")),O}}function Bs(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Bs,el),Bs.prototype.g=function(){return new Vs(this.l,this.j)},Bs.prototype.i=function(a){return function(){return a}}({});function Vs(a,d){Se.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Vs,Se),e=Vs.prototype,e.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,_i(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function uh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?bi(this):_i(this),this.readyState==3&&uh(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,bi(this))},e.Qa=function(a){this.g&&(this.response=a,bi(this))},e.ga=function(){this.g&&bi(this)};function bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_i(a)}e.setRequestHeader=function(a,d){this.u.append(a,d)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dh(a){let d="";return z(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function hl(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=dh(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ne(a,d,p))}function pe(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(pe,Se);var ey=/^https?$/i,ty=["POST","PUT"];e=pe.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sl.g(),this.v=this.o?Bd(this.o):Bd(sl),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){hh(this,L);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)p.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())p.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),O=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ty,d,void 0))||v||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,U]of p)this.g.setRequestHeader(L,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gh(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){hh(this,L)}};function hh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,ph(a),Hs(a)}function ph(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),Hs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hs(this,!0)),pe.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?fh(this):this.bb())},e.bb=function(){fh(this)};function fh(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Vt(a)!=4||a.Z()!=2)){if(a.u&&Vt(a)==4)Md(a.Ea,0,a);else if(De(a,"readystatechange"),Vt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=U===0){var O=String(a.D).match(ih)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),v=!ey.test(O?O.toLowerCase():"")}p=v}if(p)De(a,"complete"),De(a,"success");else{a.m=6;try{var L=2<Vt(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",ph(a)}}finally{Hs(a)}}}}function Hs(a,d){if(a.g){gh(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||De(a,"ready");try{p.onreadystatechange=v}catch{}}}function gh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Vt(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Px(d)}};function mh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(a){const d={};a=(a.g&&2<=Vt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(f(a[v]))continue;var p=P(a[v]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[O]||[];d[O]=L,L.push(p)}k(d,function(v){return v.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function vh(a){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qd(a&&a.concurrentRequestLimit),this.Da=new Qx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=vh.prototype,e.la=8,e.G=1,e.connect=function(a,d,p,v){Oe(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Sh(this,null,this.W),qs(this)};function pl(a){if(xh(a),a.G==3){var d=a.U++,p=Bt(a.I);if(ne(p,"SID",a.K),ne(p,"RID",d),ne(p,"TYPE","terminate"),ji(a,p),d=new dn(a,a.j,d),d.L=2,d.v=$s(Bt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=Nh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ms(d)}Eh(a)}function Ws(a){a.g&&(gl(a),a.g.cancel(),a.g=null)}function xh(a){Ws(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function qs(a){if(!Zd(a.h)&&!a.s){a.s=!0;var d=a.Ga;zt||W(),F||(zt(),F=!0),H.add(d,a),a.B=0}}function ry(a,d){return eh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gi(w(a.Ga,a,d),jh(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new dn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=y(L),N(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=wh(this,O,d),p=Bt(this.I),ne(p,"RID",a),ne(p,"CVER",22),this.D&&ne(p,"X-HTTP-Session-Id",this.D),ji(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(dh(L)))+"&"+d:this.m&&hl(p,this.m,L)),dl(this.h,O),this.Ua&&ne(p,"TYPE","init"),this.P?(ne(p,"$req",d),ne(p,"SID","null"),O.T=!0,al(O,p,null)):al(O,p,d),this.G=2}}else this.G==3&&(a?yh(this,a):this.i.length==0||Zd(this.h)||yh(this))};function yh(a,d){var p;d?p=d.l:p=a.U++;const v=Bt(a.I);ne(v,"SID",a.K),ne(v,"RID",p),ne(v,"AID",a.T),ji(a,v),a.m&&a.o&&hl(v,a.m,a.o),p=new dn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=wh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dl(a.h,p),al(p,v,d)}function ji(a,d){a.H&&z(a.H,function(p,v){ne(d,v,p)}),a.l&&rh({},function(p,v){ne(d,v,p)})}function wh(a,d,p){p=Math.min(a.i.length,p);var v=a.l?w(a.l.Na,a.l,a):null;e:{var O=a.i;let L=-1;for(;;){const U=["count="+p];L==-1?0<p?(L=O[0].g,U.push("ofs="+L)):L=0:U.push("ofs="+L);let Z=!0;for(let _e=0;_e<p;_e++){let X=O[_e].g;const Ne=O[_e].map;if(X-=L,0>X)L=Math.max(0,O[_e].g-100),Z=!1;else try{Zx(Ne,U,"req"+X+"_")}catch{v&&v(Ne)}}if(Z){v=U.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function bh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;zt||W(),F||(zt(),F=!0),H.add(d,a),a.v=0}}function fl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gi(w(a.Fa,a),jh(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,_h(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gi(w(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Ws(this),_h(this))};function gl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function _h(a){a.g=new dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Bt(a.qa);ne(d,"RID","rpc"),ne(d,"SID",a.K),ne(d,"AID",a.T),ne(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ne(d,"TO",a.ja),ne(d,"TYPE","xmlhttp"),ji(a,d),a.m&&a.o&&hl(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=$s(Bt(d)),p.m=null,p.P=!0,Xd(p,a)}e.Za=function(){this.C!=null&&(this.C=null,Ws(this),fl(this),Oe(19))};function Ks(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function kh(a,d){var p=null;if(a.g==d){Ks(a),gl(a),a.g=null;var v=2}else if(ul(a.h,d))p=d.D,th(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var O=a.B;v=rl(),De(v,new qd(v,p)),qs(a)}else bh(a);else if(O=d.s,O==3||O==0&&0<d.X||!(v==1&&ry(a,d)||v==2&&fl(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),O){case 1:Jn(a,5);break;case 4:Jn(a,10);break;case 3:Jn(a,6);break;default:Jn(a,2)}}}function jh(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Jn(a,d){if(a.j.info("Error code "+d),d==2){var p=w(a.fb,a),v=a.Xa;const O=!v;v=new Yn(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Us(v,"https"),$s(v),O?Yx(v.toString(),p):Jx(v.toString(),p)}else Oe(2);a.G=0,a.l&&a.l.sa(d),Eh(a),xh(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Eh(a){if(a.G=0,a.ka=[],a.l){const d=nh(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function Sh(a,d,p){var v=p instanceof Yn?Bt(p):new Yn(p);if(v.g!="")d&&(v.g=d+"."+v.g),Fs(v,v.s);else{var O=c.location;v=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new Yn(null);v&&Us(L,v),d&&(L.g=d),O&&Fs(L,O),p&&(L.l=p),v=L}return p=a.D,d=a.ya,p&&d&&ne(v,p,d),ne(v,"VER",a.la),ji(a,v),v}function Nh(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new pe(new Bs({eb:p})):new pe(a.pa),d.Ha(a.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ch(){}e=Ch.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function it(a,d){Se.call(this),this.g=new vh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!f(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!f(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new _r(this)}b(it,Se),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){pl(this.g)},it.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Za(a),a=p);d.i.push(new Fx(d.Ya++,a)),d.G==3&&qs(d)},it.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,it.aa.N.call(this)};function Th(a){tl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}b(Th,tl);function Ih(){nl.call(this),this.status=1}b(Ih,nl);function _r(a){this.g=a}b(_r,Ch),_r.prototype.ua=function(){De(this.g,"a")},_r.prototype.ta=function(a){De(this.g,new Th(a))},_r.prototype.sa=function(a){De(this.g,new Ih)},_r.prototype.ra=function(){De(this.g,"b")},it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,il.NO_ERROR=0,il.TIMEOUT=8,il.HTTP_ERROR=6,Mx.COMPLETE="complete",Ax.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",Se.prototype.listen=Se.prototype.K,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha}).apply(typeof fo<"u"?fo:typeof self<"u"?self:typeof window<"u"?window:{});const Nf="@firebase/firestore";/**
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
 */let Me=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
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
 */let Rs="10.14.0";/**
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
 */const ti=new gd("@firebase/firestore");function mt(e,...t){if(ti.logLevel<=Y.DEBUG){const n=t.map(Nd);ti.debug(`Firestore (${Rs}): ${e}`,...n)}}function ax(e,...t){if(ti.logLevel<=Y.ERROR){const n=t.map(Nd);ti.error(`Firestore (${Rs}): ${e}`,...n)}}function Dk(e,...t){if(ti.logLevel<=Y.WARN){const n=t.map(Nd);ti.warn(`Firestore (${Rs}): ${e}`,...n)}}function Nd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Cd(e="Unexpected state"){const t=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+e;throw ax(t),new Error(t)}function Yi(e,t){e||Cd()}/**
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
 */const We={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class qe extends Dt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ji{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class lx{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ok{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class Lk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zk{constructor(t){this.t=t,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Yi(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ji,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ji)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Yi(typeof r.accessToken=="string"),new lx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yi(t===null||typeof t=="string"),new Me(t)}}class Mk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Mk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $k{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Yi(this.o===void 0);const r=o=>{o.error!=null&&mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,mt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Yi(typeof n.token=="string"),this.R=n.token,new Fk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Bk(e){return e.name==="IndexedDbTransactionError"}class pa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof pa&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Cf,K;(K=Cf||(Cf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ox([4294967295,4294967295],0);function Jl(){return typeof document<"u"?document:null}/**
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
 */class Vk{constructor(t,n,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Td{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const l=Date.now()+r,c=new Td(t,n,l,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Tf,If;(If=Tf||(Tf={})).ea="default",If.Cache="cache";/**
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
 */function Hk(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function Wk(e,t,n,r){if(t===!0&&r===!0)throw new qe(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function qk(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Cd()}function Kk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qe(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qk(e);throw new qe(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new qe(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new qe(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wk("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hk((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class cx{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qe(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new qe(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ok;switch(r.type){case"firstParty":return new Uk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qe(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pf.get(n);r&&(mt("ComponentProvider","Removing Datastore"),Pf.delete(n),r.terminate())}(this),Promise.resolve()}}function Gk(e,t,n,r={}){var i;const o=(e=Kk(e,cx))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Dk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Me.MOCK_USER;else{c=wv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new qe(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Me(h)}e._authCredentials=new Lk(new lx(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Vk(this,"async_queue_retry"),this.Vu=()=>{const r=Jl();r&&mt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Jl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ji;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Bk(t))throw t;mt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw ax("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Td.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Cd()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Xk extends cx{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Af,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Af(t),this._firestoreClient=void 0,await t}}}function Yk(e,t){const n=typeof e=="object"?e:vd(),r=typeof e=="string"?e:"(default)",i=Ma(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=vv("firestore");o&&Gk(i,...o)}return i}(function(t,n=!0){(function(i){Rs=i})(xr),dr(new $n("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Xk(new zk(r.getProvider("auth-internal")),new $k(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new qe(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(h.options.projectId,g)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),It(Nf,"4.7.3",t),It(Nf,"4.7.3","esm2017")})();/**
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
 */const ux="firebasestorage.googleapis.com",Jk="storageBucket",Qk=2*60*1e3,Zk=10*60*1e3;/**
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
 */class Lt extends Dt{constructor(t,n,r=0){super(Ql(t),`Firebase Storage: ${n} (${Ql(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ql(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function Ql(e){return"storage/"+e}function ej(){const e="An unknown error occurred, please check the error payload for server response.";return new Lt(At.UNKNOWN,e)}function tj(){return new Lt(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nj(){return new Lt(At.CANCELED,"User canceled the upload/download.")}function rj(e){return new Lt(At.INVALID_URL,"Invalid URL '"+e+"'.")}function ij(e){return new Lt(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Df(e){return new Lt(At.INVALID_ARGUMENT,e)}function dx(){return new Lt(At.APP_DELETED,"The Firebase app was deleted.")}function sj(e){return new Lt(At.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=vt.makeFromUrl(t,n)}catch{return new vt(t,"")}if(r.path==="")return r;throw ij(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),u={bucket:1,path:3};function h(C){C.path_=decodeURIComponent(C.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${g}/b/${i}/o${w}`,"i"),b={bucket:1,path:3},I=n===ux?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",_=new RegExp(`^https?://${I}/${i}/${D}`,"i"),x=[{regex:c,indices:u,postModify:o},{regex:E,indices:b,postModify:h},{regex:_,indices:{bucket:1,path:2},postModify:h}];for(let C=0;C<x.length;C++){const A=x[C],z=A.regex.exec(t);if(z){const k=z[A.indices.bucket];let y=z[A.indices.path];y||(y=""),r=new vt(k,y),A.postModify(r);break}}if(r==null)throw rj(t);return r}}class oj{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function aj(e,t,n){let r=1,i=null,o=null,l=!1,c=0;function u(){return c===2}let h=!1;function g(...D){h||(h=!0,t.apply(null,D))}function m(D){i=setTimeout(()=>{i=null,e(E,u())},D)}function w(){o&&clearTimeout(o)}function E(D,..._){if(h){w();return}if(D){w(),g.call(null,D,..._);return}if(u()||l){w(),g.call(null,D,..._);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,m(x)}let b=!1;function I(D){b||(b=!0,w(),!h&&(i!==null?(D||(c=2),clearTimeout(i),m(0)):D||(c=1)))}return m(0),o=setTimeout(()=>{l=!0,I(!0)},n),I}function lj(e){e(!1)}/**
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
 */function cj(e){return e!==void 0}function Of(e,t,n,r){if(r<t)throw Df(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Df(`Invalid value for '${e}'. Expected ${n} or less.`)}function uj(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var fa;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(fa||(fa={}));/**
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
 */function dj(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class hj{constructor(t,n,r,i,o,l,c,u,h,g,m,w=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=m,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,b)=>{this.resolve_=E,this.reject_=b,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new go(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const c=o.getErrorCode()===fa.NO_ERROR,u=o.getStatus();if(!c||dj(u,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===fa.ABORT;r(!1,new go(!1,null,g));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new go(h,o))})},n=(r,i)=>{const o=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());cj(u)?o(u):o()}catch(u){l(u)}else if(c!==null){const u=ej();u.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,u)):l(u)}else if(i.canceled){const u=this.appDelete_?dx():nj();l(u)}else{const u=tj();l(u)}};this.canceled_?n(!1,new go(!1,null,!0)):this.backoffId_=aj(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&lj(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class go{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function pj(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function fj(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function gj(e,t){t&&(e["X-Firebase-GMPID"]=t)}function mj(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function vj(e,t,n,r,i,o,l=!0){const c=uj(e.urlParams),u=e.url+c,h=Object.assign({},e.headers);return gj(h,t),pj(h,n),fj(h,o),mj(h,r),new hj(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
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
 */function xj(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function yj(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class ga{constructor(t,n){this._service=t,n instanceof vt?this._location=n:this._location=vt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ga(t,n)}get root(){const t=new vt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yj(this._location.path)}get storage(){return this._service}get parent(){const t=xj(this._location.path);if(t===null)return null;const n=new vt(this._location.bucket,t);return new ga(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw sj(t)}}function Lf(e,t){const n=t==null?void 0:t[Jk];return n==null?null:vt.makeFromBucketSpec(n,e)}function wj(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:wv(i,e.app.options.projectId))}class bj{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=ux,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qk,this._maxUploadRetryTime=Zk,this._requests=new Set,i!=null?this._bucket=vt.makeFromBucketSpec(i,this._host):this._bucket=Lf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,t):this._bucket=Lf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ga(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new oj(dx());{const l=vj(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const zf="@firebase/storage",Mf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="storage";function _j(e=vd(),t){e=kt(e);const r=Ma(e,hx).getImmediate({identifier:t}),i=vv("storage");return i&&kj(r,...i),r}function kj(e,t,n,r={}){wj(e,t,n,r)}function jj(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new bj(n,r,i,t,xr)}function Ej(){dr(new $n(hx,jj,"PUBLIC").setMultipleInstances(!0)),It(zf,Mf,""),It(zf,Mf,"esm2017")}Ej();const Sj={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Id=kv(Sj),Ai=Ik(Id);Yk(Id);_j(Id);const px=R.createContext(void 0),Nj=({children:e})=>{const[t,n]=R.useState(null),[r,i]=R.useState(!0),[o,l]=R.useState(null);R.useEffect(()=>{const E=x_(Ai,b=>{n(b),i(!1)});return()=>E()},[]);const w={user:t,loading:r,error:o,login:async(E,b)=>{try{l(null),i(!0),await p_(Ai,E,b)}catch(I){const D=Zl(I.code);throw l(D),new Error(D)}finally{i(!1)}},register:async(E,b,I)=>{try{l(null),i(!0);const{user:D}=await h_(Ai,E,b);I&&await g_(D,{displayName:I})}catch(D){const _=Zl(D.code);throw l(_),new Error(_)}finally{i(!1)}},logout:async()=>{try{l(null),await y_(Ai)}catch(E){throw l("Error al cerrar sesión"),E}},resetPassword:async E=>{try{l(null),await d_(Ai,E)}catch(b){const I=Zl(b.code);throw l(I),new Error(I)}},clearError:()=>l(null)};return s.jsx(px.Provider,{value:w,children:e})},fx=()=>{const e=R.useContext(px);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function Zl(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const Le=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=fx(),i=cn();return r?s.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[s.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),s.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?s.jsx(s.Fragment,{children:e}):s.jsx(Co,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=R.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:u,...h},g)=>R.createElement("svg",{ref:g,...Cj,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Tj(e)}`,c].join(" "),...h},[...t.map(([m,w])=>R.createElement(m,w)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=B("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=B("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=B("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=B("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=B("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=B("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=B("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=B("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=B("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=B("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=B("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=B("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=B("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=B("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=B("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=B("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=B("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=B("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=B("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=B("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=B("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=B("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=B("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=B("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=B("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Xj=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Zt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:ii,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:As,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:ni,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:Vj,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:Gj,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return s.jsxs("div",{className:"landing-page",children:[s.jsxs("nav",{className:"navbar",children:[s.jsxs("div",{className:"nav-brand",children:[s.jsx(Zt,{size:32}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"nav-links",children:[s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx(Re,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),s.jsx(Re,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),s.jsxs("section",{className:"hero",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),s.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),s.jsxs("div",{className:"hero-buttons",children:[s.jsxs(Re,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",s.jsx(va,{size:20})]}),s.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),s.jsxs("div",{className:"hero-trust",children:[s.jsx("span",{children:"Confiado por +100 empresas de courier"}),s.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>s.jsx(lu,{size:16,fill:"#f59e0b"},r))})]})]}),s.jsx("div",{className:"hero-image",children:s.jsxs("div",{className:"dashboard-preview",children:[s.jsx("div",{className:"preview-header",children:s.jsxs("div",{className:"dots",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})}),s.jsxs("div",{className:"preview-content",children:[s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-chart"})]})]})})]}),s.jsxs("section",{id:"features",className:"features",children:[s.jsx("h2",{children:"Todo lo que necesitas para operar"}),s.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),s.jsx("div",{className:"features-grid",children:t.map((n,r)=>s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(n.icon,{size:28})}),s.jsx("h3",{children:n.title}),s.jsx("p",{children:n.description})]},r))})]}),s.jsxs("section",{id:"pricing",className:"pricing",children:[s.jsx("h2",{children:"Planes simples y transparentes"}),s.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),s.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>s.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&s.jsx("span",{className:"popular-badge",children:"Más Popular"}),s.jsx("h3",{children:n.name}),s.jsx("p",{className:"plan-description",children:n.description}),s.jsxs("div",{className:"plan-price",children:[n.priceLabel&&s.jsx("span",{className:"price-label",children:n.priceLabel}),s.jsxs("span",{className:"price",children:["$",n.price]}),s.jsx("span",{className:"period",children:"/mes"})]}),s.jsx("ul",{className:"plan-features",children:n.features.map((i,o)=>s.jsxs("li",{children:[s.jsx(Nn,{size:16})," ",i]},o))}),s.jsx(Re,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),s.jsxs("section",{className:"cta",children:[s.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),s.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),s.jsxs(Re,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",s.jsx(va,{size:24})]})]}),s.jsxs("footer",{className:"footer",children:[s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx(Zt,{size:28}),s.jsx("span",{children:"Sistema Courier"}),s.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Producto"}),s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx("a",{href:"/docs",children:"Documentación"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Empresa"}),s.jsx("a",{href:"/about",children:"Nosotros"}),s.jsx("a",{href:"/contact",children:"Contacto"}),s.jsx("a",{href:"/blog",children:"Blog"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"/privacy",children:"Privacidad"}),s.jsx("a",{href:"/terms",children:"Términos"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),s.jsx("style",{children:`
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
      `})]})},Yj=()=>{const e=_t(),[t,n]=R.useState(1),[r,i]=R.useState(!1),[o,l]=R.useState(""),[c,u]=R.useState("idle"),[h,g]=R.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),m=_=>{const{name:f,value:x}=_.target;if(g({...h,[f]:x}),l(""),f==="company_name"){const C=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);g(A=>({...A,subdomain:C})),C.length>=3&&w(C)}if(f==="subdomain"){const C=x.toLowerCase().replace(/[^a-z0-9-]/g,"");g(A=>({...A,subdomain:C})),C.length>=3&&w(C)}},w=async _=>{u("checking");try{const x=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:_})})).json();u(x.available?"available":"taken")}catch{u("idle")}},E=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),b=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),I=()=>{t===1&&E()&&n(2)},D=async _=>{if(_.preventDefault(),!!b()){i(!0),l("");try{const f=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),x=await f.json();if(!f.ok)throw new Error(x.error||"Error al crear la cuenta");e(`/onboarding?tenant=${x.tenant.subdomain}`)}catch(f){l(f.message)}finally{i(!1)}}};return s.jsxs("div",{className:"register-page",children:[s.jsxs("div",{className:"register-container",children:[s.jsxs("div",{className:"register-brand",children:[s.jsxs(Re,{to:"/",className:"brand-logo",children:[s.jsx(Zt,{size:40}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"brand-content",children:[s.jsx("h2",{children:"Comienza tu prueba gratuita"}),s.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),s.jsxs("ul",{className:"brand-features",children:[s.jsxs("li",{children:[s.jsx(Nn,{size:20})," Configuración en minutos"]}),s.jsxs("li",{children:[s.jsx(Nn,{size:20})," Soporte incluido"]}),s.jsxs("li",{children:[s.jsx(Nn,{size:20})," Cancela cuando quieras"]})]})]})]}),s.jsxs("div",{className:"register-form-container",children:[s.jsxs("div",{className:"form-header",children:[s.jsx("h1",{children:"Crear cuenta"}),s.jsxs("p",{children:["Paso ",t," de 2"]})]}),s.jsxs("div",{className:"progress-bar",children:[s.jsx("div",{className:"progress-step active",children:"1"}),s.jsx("div",{className:"progress-line"}),s.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),o&&s.jsxs("div",{className:"error-message",children:[s.jsx(fr,{size:18}),o]}),s.jsx("form",{onSubmit:D,children:t===1?s.jsxs("div",{className:"form-step",children:[s.jsx("h3",{children:"Información de la empresa"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Nombre de la empresa"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(xa,{size:20}),s.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:m,placeholder:"Mi Empresa de Courier",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu subdominio"}),s.jsxs("div",{className:"input-wrapper subdomain-input",children:[s.jsx(ni,{size:20}),s.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:m,placeholder:"miempresa",required:!0}),s.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&s.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&s.jsxs("span",{className:"subdomain-status available",children:[s.jsx(Nn,{size:14})," Disponible"]}),c==="taken"&&s.jsxs("span",{className:"subdomain-status taken",children:[s.jsx(fr,{size:14})," No disponible"]})]}),s.jsxs("button",{type:"button",onClick:I,className:"btn-next",children:["Continuar ",s.jsx(va,{size:20})]})]}):s.jsxs("div",{className:"form-step",children:[s.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[s.jsx(Ba,{size:18})," Atrás"]}),s.jsx("h3",{children:"Tu cuenta de administrador"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu nombre"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Wj,{size:20}),s.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:m,placeholder:"Juan Pérez",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Email"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Rd,{size:20}),s.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:m,placeholder:"juan@miempresa.com",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(au,{size:20}),s.jsx("input",{type:"password",name:"password",value:h.password,onChange:m,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Confirmar contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(au,{size:20}),s.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:m,placeholder:"Repite la contraseña",required:!0})]})]}),s.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),s.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",s.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",s.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),s.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",s.jsx(Re,{to:"/login",children:"Iniciar sesión"})]})]})]}),s.jsx("style",{children:`
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
      `})]})},Jj=()=>{const e=_t(),[t]=O2();t.get("tenant");const[n,r]=R.useState(1),[i,o]=R.useState(!1),[l,c]=R.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),u=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=w=>{var b;const E=(b=w.target.files)==null?void 0:b[0];E&&c({...l,logo:E,logo_preview:URL.createObjectURL(E)})},g=async()=>{o(!0);try{if(l.logo){const w=new FormData;w.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:w})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(w){console.error("Error saving onboarding:",w)}finally{o(!1)}},m=()=>{e("/dashboard")};return s.jsxs("div",{className:"onboarding-wizard",children:[s.jsxs("div",{className:"wizard-container",children:[s.jsxs("div",{className:"wizard-header",children:[s.jsx(Zt,{size:32,color:"#3b82f6"}),s.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),s.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),s.jsx("div",{className:"wizard-progress",children:[1,2,3].map(w=>s.jsx("div",{className:`progress-dot ${n>=w?"active":""}`,children:n>w?s.jsx(Nn,{size:16}):w},w))}),s.jsxs("div",{className:"wizard-content",children:[n===1&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Bf,{size:32})}),s.jsx("h2",{children:"Sube tu logo"}),s.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),s.jsx("div",{className:"logo-upload",children:l.logo_preview?s.jsxs("div",{className:"logo-preview",children:[s.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),s.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):s.jsxs("label",{className:"upload-area",children:[s.jsx(Bf,{size:40}),s.jsx("span",{children:"Arrastra o haz clic para subir"}),s.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),s.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Mj,{size:32})}),s.jsx("h2",{children:"Elige tus colores"}),s.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),s.jsx("div",{className:"color-picker",children:u.map(w=>s.jsx("button",{className:`color-option ${l.primary_color===w?"selected":""}`,style:{backgroundColor:w},onClick:()=>c({...l,primary_color:w}),children:l.primary_color===w&&s.jsx(Nn,{size:20})},w))}),s.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:s.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx($f,{size:32})}),s.jsx("h2",{children:"Información de contacto"}),s.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),s.jsxs("div",{className:"contact-form",children:[s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Teléfono (opcional)"}),s.jsx("input",{type:"tel",value:l.company_phone,onChange:w=>c({...l,company_phone:w.target.value}),placeholder:"+1 234 567 8900"})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Dirección (opcional)"}),s.jsx("input",{type:"text",value:l.company_address,onChange:w=>c({...l,company_address:w.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),s.jsxs("div",{className:"wizard-nav",children:[n>1?s.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[s.jsx(Ba,{size:20})," Atrás"]}):s.jsx("button",{onClick:m,className:"btn-skip",children:"Omitir configuración"}),n<3?s.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",s.jsx(va,{size:20})]}):s.jsxs("button",{onClick:g,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",s.jsx($f,{size:20})]})]})]}),s.jsx("style",{children:`
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
      `})]})},Qj=()=>{var _,f,x,C,A,z,k,y;const{tenant:e,isWhiteLabel:t}=Ve(),{login:n,clearError:r}=fx(),i=_t(),o=cn(),[l,c]=R.useState(""),[u,h]=R.useState(""),[g,m]=R.useState(!1),[w,E]=R.useState(""),b=((f=(_=o.state)==null?void 0:_.from)==null?void 0:f.pathname)||"/dashboard",I=async j=>{j.preventDefault(),m(!0),E(""),r();try{await n(l,u),i(b,{replace:!0})}catch(N){E(N.message||"Error al iniciar sesión")}finally{m(!1)}},D=((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6";return s.jsxs("div",{className:"login-page",children:[s.jsxs("div",{className:"login-container",children:[s.jsx("div",{className:"login-logo",children:(C=e==null?void 0:e.branding)!=null&&C.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):s.jsx("div",{className:"logo-placeholder",children:((z=(A=e==null?void 0:e.branding)==null?void 0:A.company_name)==null?void 0:z.charAt(0))||"C"})}),s.jsx("h1",{children:((k=e==null?void 0:e.branding)==null?void 0:k.company_name)||"Sistema Courier"}),((y=e==null?void 0:e.branding)==null?void 0:y.tagline)&&s.jsx("p",{className:"tagline",children:e.branding.tagline}),s.jsxs("form",{onSubmit:I,children:[w&&s.jsx("div",{className:"error-message",children:w}),s.jsxs("div",{className:"input-group",children:[s.jsx(Rd,{size:20,className:"input-icon"}),s.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:j=>c(j.target.value),required:!0})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(au,{size:20,className:"input-icon"}),s.jsx("input",{type:"password",placeholder:"Contraseña",value:u,onChange:j=>h(j.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-login",disabled:g,style:{backgroundColor:D},children:g?"Iniciando sesión...":s.jsxs(s.Fragment,{children:[s.jsx(zj,{size:20}),"Iniciar Sesión"]})}),s.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&s.jsx("div",{className:"login-footer",children:s.jsxs("p",{children:["Powered by ",s.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),s.jsx("style",{children:`
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
      `})]})},Zj=()=>{var I,D,_;const{tenant:e,isWhiteLabel:t}=Ve(),n=((I=e==null?void 0:e.branding)==null?void 0:I.primary_color)||"#3b82f6",[r,i]=R.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[o,l]=R.useState([]),[c,u]=R.useState(!0);R.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{u(!0);const f="http://localhost:3001",C=await(await fetch(`${f}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(C);const z=await(await fetch(`${f}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(z)}catch(f){console.error("Error fetching dashboard data:",f)}finally{u(!1)}},g=f=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(f),m=f=>{const x=new Date(f),A=new Date().getTime()-x.getTime(),z=Math.floor(A/6e4);if(z<1)return"Hace un momento";if(z<60)return`Hace ${z} min`;const k=Math.floor(z/60);if(k<24)return`Hace ${k} hora${k>1?"s":""}`;const y=Math.floor(k/24);return`Hace ${y} día${y>1?"s":""}`},w=f=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[f]||f,E=f=>{switch(f){case"delivered":return s.jsx(Bn,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return s.jsx(ii,{size:16,className:"status-icon warning"});case"assigned":case"processing":return s.jsx(Zt,{size:16,className:"status-icon info"});default:return s.jsx(ys,{size:16,className:"status-icon pending"})}},b=[{icon:Zt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:ii,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:As,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:ws,label:"Ingresos Mes",value:g(r.monthlyRevenue),color:"#f59e0b"}];return s.jsxs("div",{className:"dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsx("div",{className:"header-left",children:(D=e==null?void 0:e.branding)!=null&&D.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):s.jsx("span",{className:"header-title",children:((_=e==null?void 0:e.branding)==null?void 0:_.company_name)||"Sistema Courier"})}),s.jsxs("div",{className:"header-right",children:[s.jsx("span",{className:"user-name",children:"Admin"}),s.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),s.jsxs("main",{className:"dashboard-main",children:[s.jsx("div",{className:"stats-grid",children:b.map((f,x)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{backgroundColor:`${f.color}20`,color:f.color},children:s.jsx(f.icon,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:c?"...":f.value}),s.jsx("div",{className:"stat-label",children:f.label})]})]},x))}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Paquetes Recientes"}),s.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),s.jsx("div",{className:"card-content",children:c?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):o.length===0?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):o.slice(0,4).map(f=>s.jsxs("div",{className:"package-item",children:[s.jsxs("div",{className:"package-info",children:[s.jsx("span",{className:"package-id",children:f.tracking_number}),s.jsx("span",{className:"package-client",children:f.client_name||"Sin cliente"})]}),s.jsxs("div",{className:"package-status",children:[E(f.status),s.jsx("span",{children:w(f.status)})]}),s.jsx("span",{className:"package-time",children:m(f.created_at)})]},f.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Rendimiento"}),s.jsx(ya,{size:20,style:{color:"#10b981"}})]}),s.jsxs("div",{className:"card-content performance-grid",children:[s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),s.jsx("span",{className:"perf-value success",children:"94%"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),s.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Incidentes"}),s.jsx("span",{className:"perf-value warning",children:"3"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),s.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&s.jsxs("div",{className:"trial-notice",children:[s.jsx(fr,{size:20}),s.jsx("span",{children:"Tu período de prueba termina pronto. "}),s.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),s.jsx("style",{children:`
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
      `})]})},eE=()=>{var f,x;const{tenant:e}=Ve(),t=_t(),[n,r]=R.useState([]),[i,o]=R.useState(!0),[l,c]=R.useState(""),[u,h]=R.useState(""),[g,m]=R.useState(1),[w,E]=R.useState(0),b=20;R.useEffect(()=>{e&&I()},[e,g,l,u]);const I=async()=>{var C;if(e)try{o(!0);const A="http://localhost:3001",z=new URLSearchParams({page:g.toString(),limit:b.toString(),...l&&{search:l},...u&&{status:u}}),y=await(await fetch(`${A}/api/packages?${z}`,{headers:{"X-Tenant-ID":e.id}})).json();r(y.packages||[]),E(((C=y.pagination)==null?void 0:C.total)||0)}catch(A){console.error("Error fetching packages:",A)}finally{o(!1)}},D=C=>{const z={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[C]||{label:C,color:"#6b7280"};return s.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${z.color}20`,color:z.color},children:z.label})},_=C=>new Date(C).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return s.jsxs("div",{className:"packages-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Paquetes"}),s.jsxs("p",{children:[w," paquetes en total"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(ri,{size:20}),"Nuevo Paquete"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("div",{className:"search-box",children:[s.jsx(Ha,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:C=>{c(C.target.value),m(1)}})]}),s.jsxs("select",{value:u,onChange:C=>{h(C.target.value),m(1)},className:"status-filter",children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"pending",children:"Pendiente"}),s.jsx("option",{value:"processing",children:"Procesando"}),s.jsx("option",{value:"assigned",children:"Asignado"}),s.jsx("option",{value:"in_transit",children:"En tránsito"}),s.jsx("option",{value:"out_for_delivery",children:"En reparto"}),s.jsx("option",{value:"delivered",children:"Entregado"}),s.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),s.jsx("div",{className:"table-container",children:i?s.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Zt,{size:48}),s.jsx("h3",{children:"No hay paquetes"}),s.jsx("p",{children:"Crea tu primer paquete para comenzar"}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(ri,{size:20}),"Crear Paquete"]})]}):s.jsxs("table",{className:"packages-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tracking"}),s.jsx("th",{children:"Destinatario"}),s.jsx("th",{children:"Dirección"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(C=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"tracking-number",children:C.tracking_number})}),s.jsx("td",{children:C.recipient_name}),s.jsx("td",{className:"address-cell",children:C.recipient_address}),s.jsx("td",{children:D(C.status)}),s.jsx("td",{children:_(C.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}`),title:"Ver detalle",children:s.jsx(Aj,{size:16})}),s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}/edit`),title:"Editar",children:s.jsx(Va,{size:16})})]})})]},C.id))})]})}),!i&&w>b&&s.jsxs("div",{className:"pagination",children:[s.jsx("button",{disabled:g===1,onClick:()=>m(g-1),children:"Anterior"}),s.jsxs("span",{children:["Página ",g," de ",Math.ceil(w/b)]}),s.jsx("button",{disabled:g>=Math.ceil(w/b),onClick:()=>m(g+1),children:"Siguiente"})]}),s.jsx("style",{children:`
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
            `})]})},tE=()=>{var _,f,x,C;const{tenant:e}=Ve(),t=_t(),[n,r]=R.useState(!1),[i,o]=R.useState([]),[l,c]=R.useState([]),[u,h]=R.useState(null),[g,m]=R.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",zone:"",service_type:"standard",weight:"",dimensions:"",declared_value:"",notes:""});R.useEffect(()=>{e&&(w(),E())},[e]),R.useEffect(()=>{g.zone&&g.weight&&parseFloat(g.weight)>0?b():h(null)},[g.zone,g.weight,g.service_type]);const w=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();o(k.clients||[])}catch(A){console.error("Error fetching clients:",A)}},E=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/rates/zones",{headers:{"X-Tenant-ID":e.id}})).json();c(k.zones||[])}catch(A){console.error("Error fetching zones:",A)}},b=async()=>{if(!(!e||!g.zone||!g.weight))try{const k=await(await fetch(`http://localhost:3001/api/rates/calculate?zone=${g.zone}&weight=${g.weight}&serviceType=${g.service_type}`,{headers:{"X-Tenant-ID":e.id}})).json();h(k.totalPrice||null)}catch(A){console.error("Error calculating price:",A),h(null)}},I=A=>{const z=i.find(k=>k.id===A);m(z?{...g,client_id:A,sender_name:z.name,sender_phone:z.phone}:{...g,client_id:A})},D=async A=>{if(A.preventDefault(),!!e){if(!g.client_id||!g.recipient_name||!g.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const k=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...g,weight:parseFloat(g.weight)||0,declared_value:parseFloat(g.declared_value)||0})});if(k.ok){const y=await k.json();alert(`Paquete creado exitosamente! Tracking: ${y.tracking_number}`),t("/packages")}else{const y=await k.json();alert(`Error: ${y.error||"No se pudo crear el paquete"}`)}}catch(z){console.error("Error creating package:",z),alert("Error al crear el paquete")}finally{r(!1)}}};return s.jsxs("div",{className:"new-package-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[s.jsx(Ba,{size:20}),"Volver"]}),s.jsx("h1",{children:"Nuevo Paquete"})]}),s.jsxs("form",{onSubmit:D,className:"package-form",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Información del Cliente"}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cliente *"}),s.jsxs("select",{value:g.client_id,onChange:A=>I(A.target.value),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(A=>s.jsx("option",{value:A.id,children:A.name},A.id))]})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Remitente"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Remitente"}),s.jsx("input",{type:"text",value:g.sender_name,onChange:A=>m({...g,sender_name:A.target.value}),placeholder:"Nombre completo"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Remitente"}),s.jsx("input",{type:"tel",value:g.sender_phone,onChange:A=>m({...g,sender_phone:A.target.value}),placeholder:"8888-8888"})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Destinatario"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Destinatario *"}),s.jsx("input",{type:"text",value:g.recipient_name,onChange:A=>m({...g,recipient_name:A.target.value}),placeholder:"Nombre completo",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Destinatario *"}),s.jsx("input",{type:"tel",value:g.recipient_phone,onChange:A=>m({...g,recipient_phone:A.target.value}),placeholder:"8888-8888",required:!0})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Dirección de Entrega *"}),s.jsx("textarea",{value:g.recipient_address,onChange:A=>m({...g,recipient_address:A.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Detalles del Paquete"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Zona de Entrega *"}),s.jsxs("select",{value:g.zone,onChange:A=>m({...g,zone:A.target.value}),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar zona"}),l.map(A=>s.jsx("option",{value:A,children:A},A))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Tipo de Servicio *"}),s.jsxs("select",{value:g.service_type,onChange:A=>m({...g,service_type:A.target.value}),required:!0,children:[s.jsx("option",{value:"standard",children:"Estándar"}),s.jsx("option",{value:"express",children:"Express"}),s.jsx("option",{value:"same_day",children:"Mismo Día"}),s.jsx("option",{value:"scheduled",children:"Programado"})]})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Peso (kg) *"}),s.jsx("input",{type:"number",step:"0.01",value:g.weight,onChange:A=>m({...g,weight:A.target.value}),placeholder:"0.00",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Dimensiones"}),s.jsx("input",{type:"text",value:g.dimensions,onChange:A=>m({...g,dimensions:A.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Valor Declarado (₡)"}),s.jsx("input",{type:"number",step:"0.01",value:g.declared_value,onChange:A=>m({...g,declared_value:A.target.value}),placeholder:"0.00"})]})]}),u!==null&&s.jsxs("div",{className:"price-calculator",children:[s.jsx("div",{className:"price-label",children:"Precio Estimado:"}),s.jsxs("div",{className:"price-value",children:["₡",u.toLocaleString("es-CR",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Notas"}),s.jsx("textarea",{value:g.notes,onChange:A=>m({...g,notes:A.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),s.jsxs("div",{className:"form-actions",children:[s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[s.jsx(xx,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),s.jsx("style",{children:`
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
                    border-color: ${((_=e==null?void 0:e.branding)==null?void 0:_.primary_color)||"#3b82f6"};
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
            `})]})};function uu(){return uu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uu.apply(null,arguments)}function nE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function rE(e,t){if(e==null)return{};var n,r,i=nE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function du(e){"@babel/helpers - typeof";return du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},du(e)}function iE(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function sE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hu(e,t){return hu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},hu(e,t)}function oE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hu(e,t)}function wa(e){return wa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wa(e)}function wx(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wx=function(){return!!e})()}function aE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lE(e,t){if(t&&(du(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aE(e)}function cE(e){var t=wx();return function(){var n,r=wa(e);if(t){var i=wa(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return lE(this,n)}}var bx={exports:{}},uE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dE=uE,hE=dE;function _x(){}function kx(){}kx.resetWarningCache=_x;var pE=function(){function e(r,i,o,l,c,u){if(u!==hE){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:kx,resetWarningCache:_x};return n.PropTypes=n,n};bx.exports=pE();var fE=bx.exports;const Je=pu(fE);/*!
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
 */function gr(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}gr.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};gr.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};gr.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function Ad(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}Ad.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,i=0;i<=e;i+=1){var o=i/e,l=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var u=l-n,h=c-r;t+=Math.sqrt(u*u+h*h)}n=l,r=c}return t};Ad.prototype._point=function(e,t,n,r,i){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+i*e*e*e};function gE(e,t,n){var r,i,o,l=null,c=0;n||(n={});var u=function(){c=n.leading===!1?0:Date.now(),l=null,o=e.apply(r,i),l||(r=i=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var g=t-(h-c);return r=this,i=arguments,g<=0||g>t?(l&&(clearTimeout(l),l=null),c=h,o=e.apply(r,i),l||(r=i=null)):!l&&n.trailing!==!1&&(l=setTimeout(u,g)),o}}function ee(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=gE(ee.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=ee.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(i){i.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(i))},this._handleMouseMove=function(i){n._mouseButtonDown&&n._strokeMoveUpdate(i)},this._handleMouseUp=function(i){i.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(i))},this._handleTouchStart=function(i){if(i.targetTouches.length===1){var o=i.changedTouches[0];n._strokeBegin(o)}},this._handleTouchMove=function(i){i.preventDefault();var o=i.targetTouches[0];n._strokeMoveUpdate(o)},this._handleTouchEnd=function(i){var o=i.target===n._canvas;o&&(i.preventDefault(),n._strokeEnd(i))},this.on()}ee.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};ee.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,i=n.ratio||window.devicePixelRatio||1,o=n.width||this._canvas.width/i,l=n.height||this._canvas.height/i;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,o,l)},this._isEmpty=!1};ee.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};ee.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};ee.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};ee.prototype.isEmpty=function(){return this._isEmpty};ee.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};ee.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),i=this._data[this._data.length-1],o=i&&i[i.length-1],l=o&&r.distanceTo(o)<this.minDistance;if(!(o&&l)){var c=this._addPoint(r),u=c.curve,h=c.widths;u&&h&&this._drawCurve(u,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};ee.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],i=r[r.length-1];n.equals(i)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};ee.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};ee.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};ee.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};ee.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new gr(e-r.left,t-r.top,n||new Date().getTime())};ee.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var i=n.c1,o=new Ad(t[1],r,i,t[2]),l=this._calculateCurveWidths(o);return t.shift(),{curve:o,widths:l}}return{}};ee.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,i=e.y-t.y,o=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},u={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+i*i),g=Math.sqrt(o*o+l*l),m=c.x-u.x,w=c.y-u.y,E=g/(h+g),b={x:u.x+m*E,y:u.y+w*E},I=t.x-b.x,D=t.y-b.y;return{c1:new gr(c.x+I,c.y+D),c2:new gr(u.x+I,u.y+D)}};ee.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(i);return r.start=this._lastWidth,r.end=o,this._lastVelocity=i,this._lastWidth=o,r};ee.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};ee.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};ee.prototype._drawCurve=function(e,t,n){var r=this._ctx,i=n-t,o=Math.floor(e.length());r.beginPath();for(var l=0;l<o;l+=1){var c=l/o,u=c*c,h=u*c,g=1-c,m=g*g,w=m*g,E=w*e.startPoint.x;E+=3*m*c*e.control1.x,E+=3*g*u*e.control2.x,E+=h*e.endPoint.x;var b=w*e.startPoint.y;b+=3*m*c*e.control1.y,b+=3*g*u*e.control2.y,b+=h*e.endPoint.y;var I=t+h*i;this._drawPoint(E,b,I)}r.closePath(),r.fill()};ee.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};ee.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var i=e[r];if(i.length>1)for(var o=0;o<i.length;o+=1){var l=i[o],c=new gr(l.x,l.y,l.time),u=l.color;if(o===0)this.penColor=u,this._reset(),this._addPoint(c);else if(o!==i.length-1){var h=this._addPoint(c),g=h.curve,m=h.widths;g&&m&&t(g,m,u)}}else{this._reset();var w=i[0];n(w)}}};ee.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),i=0,o=0,l=n.width/r,c=n.height/r,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttributeNS(null,"width",n.width),u.setAttributeNS(null,"height",n.height),this._fromData(t,function(_,f,x){var C=document.createElement("path");if(!isNaN(_.control1.x)&&!isNaN(_.control1.y)&&!isNaN(_.control2.x)&&!isNaN(_.control2.y)){var A="M "+_.startPoint.x.toFixed(3)+","+_.startPoint.y.toFixed(3)+" "+("C "+_.control1.x.toFixed(3)+","+_.control1.y.toFixed(3)+" ")+(_.control2.x.toFixed(3)+","+_.control2.y.toFixed(3)+" ")+(_.endPoint.x.toFixed(3)+","+_.endPoint.y.toFixed(3));C.setAttribute("d",A),C.setAttribute("stroke-width",(f.end*2.25).toFixed(3)),C.setAttribute("stroke",x),C.setAttribute("fill","none"),C.setAttribute("stroke-linecap","round"),u.appendChild(C)}},function(_){var f=document.createElement("circle"),x=typeof e.dotSize=="function"?e.dotSize():e.dotSize;f.setAttribute("r",x),f.setAttribute("cx",_.x),f.setAttribute("cy",_.y),f.setAttribute("fill",_.color),u.appendChild(f)});var h="data:image/svg+xml;base64,",g='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+i+" "+o+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",m=u.innerHTML;if(m===void 0){var w=document.createElement("dummy"),E=u.childNodes;w.innerHTML="";for(var b=0;b<E.length;b+=1)w.appendChild(E[b].cloneNode(!0));m=w.innerHTML}var I="</svg>",D=g+m+I;return h+btoa(D)};ee.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};ee.prototype.toData=function(){return this._data};var jx={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(sy,function(){return function(n){function r(o){if(i[o])return i[o].exports;var l=i[o]={exports:{},id:o,loaded:!1};return n[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(n,r){function i(h){var g=h.getContext("2d"),m=h.width,w=h.height,E=g.getImageData(0,0,m,w).data,b=c(!0,m,w,E),I=c(!1,m,w,E),D=u(!0,m,w,E),_=u(!1,m,w,E),f=_-D+1,x=I-b+1,C=g.getImageData(D,b,f,x);return h.width=f,h.height=x,g.clearRect(0,0,f,x),g.putImageData(C,0,0),h}function o(h,g,m,w){return{red:w[4*(m*g+h)],green:w[4*(m*g+h)+1],blue:w[4*(m*g+h)+2],alpha:w[4*(m*g+h)+3]}}function l(h,g,m,w){return o(h,g,m,w).alpha}function c(h,g,m,w){for(var E=h?1:-1,b=h?0:m-1,I=b;h?I<m:I>-1;I+=E)for(var D=0;D<g;D++)if(l(D,I,g,w))return I;return null}function u(h,g,m,w){for(var E=h?1:-1,b=h?0:g-1,I=b;h?I<g:I>-1;I+=E)for(var D=0;D<m;D++)if(l(I,D,g,w))return I;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}])})})(jx);var mE=jx.exports;const vE=pu(mE);var xE=["canvasProps","clearOnResize"],Wa=function(e){oE(n,e);var t=cE(n);function n(){var r;sE(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var u=rE(c,xE);return u},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new ee(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),u=document.createElement("canvas");return u.width=c.width,u.height=c.height,u.getContext("2d").drawImage(c,0,0),vE(u)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,u,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},g=h.width,m=h.height;if(!(typeof g<"u"&&typeof m<"u")){var w=r.getCanvas(),E=Math.max((u=window.devicePixelRatio)!==null&&u!==void 0?u:1,1);typeof g>"u"&&(w.width=w.offsetWidth*E),typeof m>"u"&&(w.height=w.offsetHeight*E),w.getContext("2d").scale(E,E),r.clear()}},r.render=function(){var c=r.props.canvasProps;return xu.createElement("canvas",uu({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,u){return r.getSignaturePad().fromDataURL(c,u)},r.toDataURL=function(c,u){return r.getSignaturePad().toDataURL(c,u)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return iE(n)}(R.Component);Wa.propTypes={velocityFilterWeight:Je.number,minWidth:Je.number,maxWidth:Je.number,minDistance:Je.number,dotSize:Je.oneOfType([Je.number,Je.func]),penColor:Je.string,throttle:Je.number,onEnd:Je.func,onBegin:Je.func,canvasProps:Je.object,clearOnResize:Je.bool};Wa.defaultProps={clearOnResize:!0};Wa.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const yE=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:i})=>{var E,b;const{tenant:o}=Ve(),l=R.useRef(null),[c,u]=R.useState(""),[h,g]=R.useState(!1),m=()=>{var I;(I=l.current)==null||I.clear()},w=async()=>{var I,D;if((I=l.current)!=null&&I.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{g(!0);const _=(D=l.current)==null?void 0:D.toDataURL(),x=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":o.id},body:JSON.stringify({signatureUrl:_,recipientName:n,recipientId:c})});if(x.ok)alert("Entrega confirmada exitosamente"),i();else{const C=await x.json();alert(`Error: ${C.error||"No se pudo confirmar la entrega"}`)}}catch(_){console.error("Error confirmando entrega:",_),alert("Error al confirmar la entrega")}finally{g(!1)}};return s.jsx("div",{className:"modal-overlay",onClick:r,children:s.jsxs("div",{className:"modal-content",onClick:I=>I.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Confirmar Entrega"}),s.jsx("button",{className:"btn-close",onClick:r,children:s.jsx(Kj,{size:24})})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"package-info",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tracking:"})," ",t]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Destinatario:"})," ",n]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cédula del Destinatario *"}),s.jsx("input",{type:"text",value:c,onChange:I=>u(I.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),s.jsxs("div",{className:"signature-section",children:[s.jsx("label",{children:"Firma del Destinatario *"}),s.jsx("div",{className:"signature-canvas-container",children:s.jsx(Wa,{ref:l,canvasProps:{className:"signature-canvas"}})}),s.jsxs("button",{className:"btn-clear",onClick:m,disabled:h,children:[s.jsx(Bj,{size:16}),"Limpiar"]})]})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),s.jsxs("button",{className:"btn-primary",onClick:w,disabled:h,children:[s.jsx(Nn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),s.jsx("style",{children:`
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
                        background: ${((b=o==null?void 0:o.branding)==null?void 0:b.primary_color)||"#3b82f6"};
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
                `})]})})},wE=()=>{var I,D;const{id:e}=av(),{tenant:t}=Ve(),n=_t(),[r,i]=R.useState(null),[o,l]=R.useState([]),[c,u]=R.useState(!0),[h,g]=R.useState(!1);R.useEffect(()=>{t&&e&&m()},[t,e]);const m=async()=>{if(!(!t||!e))try{u(!0);const x=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(x)}catch(_){console.error("Error fetching package:",_)}finally{u(!1)}},w=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const x=await f.blob(),C=window.URL.createObjectURL(x),A=document.createElement("a");A.href=C,A.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(A),A.click(),window.URL.revokeObjectURL(C),document.body.removeChild(A)}}catch(_){console.error("Error downloading label:",_),alert("Error al descargar la etiqueta")}},E=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const x=await f.blob(),C=window.URL.createObjectURL(x),A=document.createElement("a");A.href=C,A.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(A),A.click(),window.URL.revokeObjectURL(C),document.body.removeChild(A)}}catch(_){console.error("Error downloading delivery note:",_),alert("Error al descargar la nota de entrega")}},b=_=>{const x={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[_]||{label:_,color:"#6b7280"};return s.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${x.color}20`,color:x.color},children:x.label})};return c?s.jsx("div",{className:"loading-page",children:"Cargando..."}):r?s.jsxs("div",{className:"package-detail-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[s.jsx(Ba,{size:20}),"Volver"]}),s.jsxs("div",{className:"header-info",children:[s.jsx("h1",{children:r.tracking_number}),b(r.status)]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"btn-action",onClick:w,title:"Imprimir Etiqueta",children:[s.jsx(Fj,{size:20}),"Etiqueta"]}),s.jsxs("button",{className:"btn-action",onClick:E,title:"Nota de Entrega",children:[s.jsx(Dj,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&s.jsxs("button",{className:"btn-deliver",onClick:()=>g(!0),title:"Confirmar Entrega",children:[s.jsx(Bn,{size:20}),"Confirmar Entrega"]}),s.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[s.jsx(Va,{size:20}),"Editar"]})]})]}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Información General"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Cliente:"}),s.jsx("span",{className:"value",children:r.client_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Courier:"}),s.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Peso:"}),s.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dimensiones:"}),s.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Valor Declarado:"}),s.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Creación:"}),s.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Entrega:"}),s.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Remitente"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.sender_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.sender_phone})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Destinatario"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.recipient_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.recipient_phone})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dirección:"}),s.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&s.jsxs("div",{className:"detail-card full-width",children:[s.jsx("h2",{children:"Notas"}),s.jsx("p",{children:r.notes})]})]}),h&&s.jsx(yE,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>g(!1),onSuccess:()=>{g(!1),m()}}),s.jsx("style",{children:`
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
            `})]}):s.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},bE=()=>{const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[o,l]=R.useState("");R.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{i(!0);const u="http://localhost:3001",h=new URLSearchParams({...o&&{search:o}}),m=await(await fetch(`${u}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(m.clients||[])}catch(u){console.error("Error:",u)}finally{i(!1)}};return s.jsxs("div",{className:"clients-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Clientes"}),s.jsxs("p",{children:[t.length," clientes registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Ha,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:o,onChange:u=>l(u.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(As,{size:48}),s.jsx("h3",{children:"No hay clientes"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Paquetes"})]})}),s.jsx("tbody",{children:t.map(u=>s.jsxs("tr",{children:[s.jsx("td",{children:u.name}),s.jsx("td",{children:u.company_name||"-"}),s.jsx("td",{children:u.email}),s.jsx("td",{children:u.phone}),s.jsx("td",{children:u.total_packages})]},u.id))})]})}),s.jsx("style",{children:`
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
            `})]})},_E=()=>{const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[o,l]=R.useState("");R.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{i(!0);const h="http://localhost:3001",g=new URLSearchParams({...o&&{search:o}}),w=await(await fetch(`${h}/api/couriers?${g}`,{headers:{"X-Tenant-ID":e.id}})).json();n(w.couriers||[])}catch(h){console.error("Error:",h)}finally{i(!1)}},u=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return s.jsxs("div",{className:"couriers-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Couriers"}),s.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Ha,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar courier...",value:o,onChange:h=>l(h.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ii,{size:48}),s.jsx("h3",{children:"No hay couriers"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Placa"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Entregas"}),s.jsx("th",{children:"Rating"})]})}),s.jsx("tbody",{children:t.map(h=>s.jsxs("tr",{children:[s.jsx("td",{children:h.name}),s.jsx("td",{children:h.phone}),s.jsx("td",{children:u(h.vehicle_type)}),s.jsx("td",{children:h.vehicle_plate||"-"}),s.jsx("td",{children:h.zone||"-"}),s.jsx("td",{children:h.completed_deliveries}),s.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),s.jsx("style",{children:`
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
            `})]})},kE=()=>{var w;const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[o,l]=R.useState(!1),[c,u]=R.useState(null);R.useEffect(()=>{e&&h()},[e]);const h=async()=>{if(e)try{i(!0);const I=await(await fetch("http://localhost:3001/api/rates",{headers:{"X-Tenant-ID":e.id}})).json();n(I.rates||[])}catch(E){console.error("Error:",E)}finally{i(!1)}},g=async E=>{if(confirm("¿Eliminar esta tarifa?"))try{(await fetch(`http://localhost:3001/api/rates/${E}`,{method:"DELETE",headers:{"X-Tenant-ID":e.id}})).ok&&h()}catch(b){console.error("Error:",b)}},m=E=>({standard:"Estándar",express:"Express",same_day:"Mismo Día",scheduled:"Programado"})[E]||E;return s.jsxs("div",{className:"rates-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Tarifas"}),s.jsxs("p",{children:[t.length," tarifas configuradas"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[s.jsx(ri,{size:20}),"Nueva Tarifa"]})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ws,{size:48}),s.jsx("h3",{children:"No hay tarifas configuradas"}),s.jsx("p",{children:"Crea tu primera tarifa para comenzar"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Peso (kg)"}),s.jsx("th",{children:"Precio Base"}),s.jsx("th",{children:"Precio/kg"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:t.map(E=>s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsx("strong",{children:E.name}),E.description&&s.jsx("div",{className:"description",children:E.description})]}),s.jsx("td",{children:E.zone||"-"}),s.jsxs("td",{children:[E.min_weight," - ",E.max_weight||"∞"]}),s.jsxs("td",{children:["₡",E.base_price.toLocaleString()]}),s.jsxs("td",{children:["₡",E.price_per_kg.toLocaleString()]}),s.jsx("td",{children:m(E.service_type)}),s.jsx("td",{children:s.jsx("span",{className:`status ${E.active?"active":"inactive"}`,children:E.active?"Activa":"Inactiva"})}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>{u(E),l(!0)},title:"Editar",children:s.jsx(Va,{size:16})}),s.jsx("button",{className:"btn-icon danger",onClick:()=>g(E.id),title:"Eliminar",children:s.jsx(yx,{size:16})})]})})]},E.id))})]})}),s.jsx("style",{children:`
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
            `})]})},jE=()=>{const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[o,l]=R.useState(""),[c,u]=R.useState("");R.useEffect(()=>{e&&h()},[e,o,c]);const h=async()=>{if(e)try{i(!0);let I="http://localhost:3001/api/incidents?";o&&(I+=`status=${o}&`),c&&(I+=`priority=${c}`);const _=await(await fetch(I,{headers:{"X-Tenant-ID":e.id}})).json();n(_.incidents||[])}catch(b){console.error("Error:",b)}finally{i(!1)}},g=b=>({delay:"Retraso",damage:"Daño",loss:"Pérdida",client_absent:"Cliente Ausente",address_error:"Error de Dirección",other:"Otro"})[b]||b,m=b=>{switch(b){case"open":return s.jsx(ma,{size:16});case"investigating":return s.jsx(ys,{size:16});case"resolved":return s.jsx(Bn,{size:16});case"closed":return s.jsx(cu,{size:16});default:return null}},w=b=>({open:"Abierta",investigating:"Investigando",resolved:"Resuelta",closed:"Cerrada"})[b]||b,E=b=>({low:"#10b981",medium:"#f59e0b",high:"#ef4444",critical:"#991b1b"})[b]||"#6b7280";return s.jsxs("div",{className:"incidents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Incidencias"}),s.jsxs("p",{children:[t.length," incidencias registradas"]})]})}),s.jsxs("div",{className:"filters",children:[s.jsxs("select",{value:o,onChange:b=>l(b.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"open",children:"Abierta"}),s.jsx("option",{value:"investigating",children:"Investigando"}),s.jsx("option",{value:"resolved",children:"Resuelta"}),s.jsx("option",{value:"closed",children:"Cerrada"})]}),s.jsxs("select",{value:c,onChange:b=>u(b.target.value),children:[s.jsx("option",{value:"",children:"Todas las prioridades"}),s.jsx("option",{value:"low",children:"Baja"}),s.jsx("option",{value:"medium",children:"Media"}),s.jsx("option",{value:"high",children:"Alta"}),s.jsx("option",{value:"critical",children:"Crítica"})]})]}),s.jsx("div",{className:"incidents-list",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ma,{size:48}),s.jsx("h3",{children:"No hay incidencias"}),s.jsx("p",{children:"No se encontraron incidencias con los filtros seleccionados"})]}):t.map(b=>s.jsxs("div",{className:"incident-card",children:[s.jsxs("div",{className:"incident-header",children:[s.jsxs("div",{className:"incident-title",children:[s.jsx("span",{className:"incident-icon",style:{color:E(b.priority)},children:m(b.status)}),s.jsxs("div",{children:[s.jsx("h3",{children:g(b.type)}),s.jsxs("p",{className:"tracking",children:["Paquete: ",b.tracking_number]})]})]}),s.jsxs("div",{className:"incident-badges",children:[s.jsx("span",{className:`status-badge status-${b.status}`,children:w(b.status)}),s.jsx("span",{className:"priority-badge",style:{backgroundColor:`${E(b.priority)}20`,color:E(b.priority)},children:b.priority.toUpperCase()})]})]}),s.jsxs("div",{className:"incident-body",children:[s.jsx("p",{className:"description",children:b.description}),b.resolution&&s.jsxs("div",{className:"resolution",children:[s.jsx("strong",{children:"Resolución:"})," ",b.resolution]})]}),s.jsxs("div",{className:"incident-footer",children:[s.jsx("span",{className:"date",children:new Date(b.created_at).toLocaleDateString("es-CR")}),s.jsx("span",{className:"client",children:b.client_name})]})]},b.id))}),s.jsx("style",{children:`
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
            `})]})},EE=()=>{const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(null),[o,l]=R.useState(!0);R.useEffect(()=>{e&&(c(),u())},[e]);const c=async()=>{if(e)try{l(!0);const m=await(await fetch("http://localhost:3001/api/fuel",{headers:{"X-Tenant-ID":e.id}})).json();n(m.records||[])}catch(h){console.error("Error:",h)}finally{l(!1)}},u=async()=>{if(e)try{const m=await(await fetch("http://localhost:3001/api/fuel/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(m)}catch(h){console.error("Error:",h)}};return s.jsxs("div",{className:"fuel-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Control de Combustible"}),s.jsxs("p",{children:[t.length," registros de combustible"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(ws,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Costo Total"}),s.jsxs("p",{className:"stat-value",children:["₡",r.totalCost.toLocaleString()]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Rj,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Litros Totales"}),s.jsxs("p",{className:"stat-value",children:[r.totalLiters.toFixed(2)," L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(ya,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Rendimiento Promedio"}),s.jsxs("p",{className:"stat-value",children:[r.averageEfficiency.toFixed(2)," km/L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Ff,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Registros"}),s.jsx("p",{className:"stat-value",children:r.recordCount})]})]})]}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Registros de Combustible"}),o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Ff,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron registros de combustible"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Courier"}),s.jsx("th",{children:"Litros"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Precio/L"}),s.jsx("th",{children:"Odómetro"}),s.jsx("th",{children:"Distancia"}),s.jsx("th",{children:"Rendimiento"}),s.jsx("th",{children:"Estación"})]})}),s.jsx("tbody",{children:t.map(h=>{var g,m,w;return s.jsxs("tr",{children:[s.jsx("td",{children:new Date(h.created_at).toLocaleDateString("es-CR")}),s.jsx("td",{children:h.courier_name||"-"}),s.jsxs("td",{children:[h.liters.toFixed(2)," L"]}),s.jsxs("td",{children:["₡",h.cost.toLocaleString()]}),s.jsxs("td",{children:["₡",((g=h.price_per_liter)==null?void 0:g.toFixed(2))||"-"]}),s.jsxs("td",{children:[((m=h.odometer_reading)==null?void 0:m.toLocaleString())||"-"," km"]}),s.jsxs("td",{children:[((w=h.distance_traveled)==null?void 0:w.toLocaleString())||"-"," km"]}),s.jsx("td",{children:h.efficiency?s.jsxs("span",{className:"efficiency",children:[h.efficiency.toFixed(2)," km/L"]}):"-"}),s.jsx("td",{children:h.station||"-"})]},h.id)})})]})})]}),s.jsx("style",{children:`
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
            `})]})},SE=()=>{const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(null),[o,l]=R.useState(!0),[c,u]=R.useState("");R.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let I="http://localhost:3001/api/vehicles";c&&(I+=`?status=${c}`);const _=await(await fetch(I,{headers:{"X-Tenant-ID":e.id}})).json();n(_.vehicles||[])}catch(b){console.error("Error:",b)}finally{l(!1)}},g=async()=>{if(e)try{const D=await(await fetch("http://localhost:3001/api/vehicles/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(D)}catch(b){console.error("Error:",b)}},m=b=>{switch(b){case"active":return s.jsx(Bn,{size:20});case"maintenance":return s.jsx(fr,{size:20});case"inactive":return s.jsx(cu,{size:20});default:return null}},w=b=>{switch(b){case"active":return"#10b981";case"maintenance":return"#f59e0b";case"inactive":return"#ef4444";default:return"#6b7280"}},E=b=>({active:"Activo",maintenance:"Mantenimiento",inactive:"Inactivo"})[b]||b;return s.jsxs("div",{className:"vehicles-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Vehículos"}),s.jsxs("p",{children:[t.length," vehículos registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Bn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(fr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Mantenimiento"}),s.jsx("p",{className:"stat-value",children:r.maintenance})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(cu,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Inactivos"}),s.jsx("p",{className:"stat-value",children:r.inactive})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(ii,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:r.total})]})]})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:c,onChange:b=>u(b.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"maintenance",children:"En Mantenimiento"}),s.jsx("option",{value:"inactive",children:"Inactivos"})]})}),s.jsx("div",{className:"vehicles-grid",children:o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ii,{size:48}),s.jsx("h3",{children:"No hay vehículos"}),s.jsx("p",{children:"No se encontraron vehículos con los filtros seleccionados"})]}):t.map(b=>s.jsxs("div",{className:"vehicle-card",children:[s.jsxs("div",{className:"vehicle-header",children:[s.jsx("div",{className:"vehicle-icon",style:{color:w(b.status)},children:m(b.status)}),s.jsx("div",{className:"vehicle-plate",children:b.plate})]}),s.jsxs("div",{className:"vehicle-body",children:[s.jsxs("h3",{children:[b.brand," ",b.model]}),s.jsxs("div",{className:"vehicle-details",children:[b.year&&s.jsxs("span",{children:["Año: ",b.year]}),b.type&&s.jsxs("span",{children:["Tipo: ",b.type]})]}),b.courier_name&&s.jsxs("div",{className:"vehicle-assigned",children:["Asignado a: ",b.courier_name]})]}),s.jsx("div",{className:"vehicle-footer",children:s.jsx("span",{className:"status-badge",style:{backgroundColor:`${w(b.status)}20`,color:w(b.status)},children:E(b.status)})})]},b.id))}),s.jsx("style",{children:`
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
            `})]})},NE=()=>{const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState([]),[o,l]=R.useState(null),[c,u]=R.useState(!0),[h,g]=R.useState("");R.useEffect(()=>{e&&(m(),w(),E())},[e,h]);const m=async()=>{if(e)try{u(!0);let x="http://localhost:3001/api/maintenance";h&&(x+=`?status=${h}`);const A=await(await fetch(x,{headers:{"X-Tenant-ID":e.id}})).json();n(A.records||[])}catch(f){console.error("Error:",f)}finally{u(!1)}},w=async()=>{if(e)try{const C=await(await fetch("http://localhost:3001/api/maintenance/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(C.records||[])}catch(f){console.error("Error:",f)}},E=async()=>{if(e)try{const C=await(await fetch("http://localhost:3001/api/maintenance/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(C)}catch(f){console.error("Error:",f)}},b=f=>({preventive:"Preventivo",corrective:"Correctivo",inspection:"Inspección"})[f]||f,I=f=>({scheduled:"Programado",in_progress:"En Progreso",completed:"Completado"})[f]||f,D=f=>{switch(f){case"scheduled":return s.jsx(su,{size:16});case"in_progress":return s.jsx(ys,{size:16});case"completed":return s.jsx(Bn,{size:16});default:return null}},_=f=>{const x=new Date,A=new Date(f).getTime()-x.getTime();return Math.ceil(A/(1e3*60*60*24))};return s.jsxs("div",{className:"maintenance-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Mantenimiento de Vehículos"}),s.jsxs("p",{children:[t.length," registros de mantenimiento"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(su,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Programados"}),s.jsx("p",{className:"stat-value",children:o.scheduled})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(ys,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Progreso"}),s.jsx("p",{className:"stat-value",children:o.inProgress})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Bn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Completados"}),s.jsx("p",{className:"stat-value",children:o.completed})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(ma,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Próximos 30 días"}),s.jsx("p",{className:"stat-value",children:o.upcoming})]})]})]}),r.length>0&&s.jsxs("div",{className:"upcoming-section",children:[s.jsx("h2",{children:"⚠️ Próximos Servicios (30 días)"}),s.jsx("div",{className:"upcoming-list",children:r.map(f=>{const x=_(f.next_service_date);return s.jsxs("div",{className:`upcoming-card ${x<=7?"urgent":""}`,children:[s.jsxs("div",{className:"upcoming-header",children:[s.jsxs("span",{className:"vehicle-info",children:[f.vehicle_plate," - ",f.vehicle_brand," ",f.vehicle_model]}),s.jsx("span",{className:`days-badge ${x<=7?"urgent":""}`,children:x<=0?"Vencido":`${x} días`})]}),s.jsxs("div",{className:"upcoming-body",children:[s.jsx("p",{children:f.description}),s.jsx("span",{className:"type-badge",children:b(f.type)})]})]},f.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:f=>g(f.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"scheduled",children:"Programados"}),s.jsx("option",{value:"in_progress",children:"En Progreso"}),s.jsx("option",{value:"completed",children:"Completados"})]})}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Historial de Mantenimientos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(qj,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron mantenimientos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Proveedor"}),s.jsx("th",{children:"Próximo Servicio"}),s.jsx("th",{children:"Estado"})]})}),s.jsx("tbody",{children:t.map(f=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(f.created_at).toLocaleDateString("es-CR")}),s.jsxs("td",{children:[s.jsx("strong",{children:f.vehicle_plate}),s.jsx("br",{}),s.jsxs("small",{children:[f.vehicle_brand," ",f.vehicle_model]})]}),s.jsx("td",{children:b(f.type)}),s.jsx("td",{children:f.description}),s.jsx("td",{children:f.cost?`₡${f.cost.toLocaleString()}`:"-"}),s.jsx("td",{children:f.provider||"-"}),s.jsx("td",{children:f.next_service_date?new Date(f.next_service_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${f.status}`,children:[D(f.status),I(f.status)]})})]},f.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},CE=()=>s.jsxs("div",{className:"loading-page",children:[s.jsxs("div",{className:"loading-container",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("h2",{children:"Cargando..."}),s.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),s.jsx("style",{children:`
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
      `})]}),TE=({message:e})=>s.jsxs("div",{className:"error-page",children:[s.jsxs("div",{className:"error-container",children:[s.jsx("div",{className:"error-icon",children:s.jsx(ma,{size:64})}),s.jsx("h1",{children:"No se pudo cargar"}),s.jsx("p",{className:"error-message",children:e}),s.jsxs("div",{className:"error-actions",children:[s.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),s.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),s.jsx("style",{children:`
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
      `})]}),IE=()=>{var N,P;const{tenant:e}=Ve(),[t,n]=R.useState([]),[r,i]=R.useState(!0),[o,l]=R.useState(""),[c,u]=R.useState(!1),[h,g]=R.useState(null),[m,w]=R.useState(null),[E,b]=R.useState(""),[I,D]=R.useState(""),_=((N=e==null?void 0:e.plan)==null?void 0:N.id)==="enterprise",f=((P=e==null?void 0:e.branding)==null?void 0:P.primary_color)||"#3b82f6";R.useEffect(()=>{x()},[]);const x=async()=>{try{const S=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(S)}catch(T){console.error("Error fetching domains:",T)}finally{i(!1)}},C=async T=>{if(T.preventDefault(),!!o.trim()){u(!0),b("");try{const S=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:o})}),ve=await S.json();if(!S.ok)throw new Error(ve.error||"Error agregando dominio");n([...t,ve.domain]),g(ve.dns_instructions),l(""),D("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(S){b(S.message)}finally{u(!1)}}},A=async T=>{w(T),b("");try{const ve=await(await fetch(`/api/domains/${T}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ve.verified?(D("DNS verificado. El SSL se está configurando."),x()):b(ve.message)}catch{b("Error verificando DNS")}finally{w(null)}},z=async T=>{try{await fetch(`/api/domains/${T}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),D("Dominio establecido como principal"),x()}catch{b("Error estableciendo dominio principal")}},k=async T=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${T}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(S=>S.id!==T)),D("Dominio eliminado")}catch{b("Error eliminando dominio")}},y=T=>{navigator.clipboard.writeText(T),D("Copiado al portapapeles"),setTimeout(()=>D(""),2e3)},j=T=>{switch(T){case"active":return s.jsxs("span",{className:"badge success",children:[s.jsx(Bn,{size:14})," Activo"]});case"provisioning":return s.jsxs("span",{className:"badge warning",children:[s.jsx(ys,{size:14})," Configurando SSL"]});case"pending":return s.jsxs("span",{className:"badge pending",children:[s.jsx(fr,{size:14})," Pendiente verificación"]});case"failed":return s.jsxs("span",{className:"badge danger",children:[s.jsx(fr,{size:14})," Error"]});default:return null}};return _?s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("header",{className:"page-header",children:[s.jsx("h1",{children:"Configuración White Label"}),s.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),E&&s.jsx("div",{className:"alert error",children:E}),I&&s.jsx("div",{className:"alert success",children:I}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsxs("h3",{children:[s.jsx(ni,{size:20})," Dominios"]})}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"domains-list",children:t.map(T=>s.jsxs("div",{className:"domain-row",children:[s.jsxs("div",{className:"domain-info",children:[s.jsxs("div",{className:"domain-name",children:[T.is_primary&&s.jsx(lu,{size:16,className:"primary-star"}),T.domain,T.domain_type==="subdomain"&&s.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),j(T.ssl_status)]}),s.jsxs("div",{className:"domain-actions",children:[T.ssl_status==="pending"&&s.jsx("button",{onClick:()=>A(T.id),disabled:m===T.id,className:"btn-action",children:m===T.id?s.jsx($j,{size:16,className:"spin"}):"Verificar DNS"}),T.ssl_status==="active"&&!T.is_primary&&s.jsxs("button",{onClick:()=>z(T.id),className:"btn-action",children:[s.jsx(lu,{size:16})," Hacer principal"]}),T.domain_type==="custom"&&s.jsx("button",{onClick:()=>k(T.id),className:"btn-delete",children:s.jsx(yx,{size:16})}),s.jsx("a",{href:`https://${T.domain}`,target:"_blank",className:"btn-action",children:s.jsx(Pd,{size:16})})]})]},T.id))}),s.jsxs("form",{onSubmit:C,className:"add-domain-form",children:[s.jsx("input",{type:"text",placeholder:"miempresa.com",value:o,onChange:T=>l(T.target.value)}),s.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[s.jsx(ri,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&s.jsxs("div",{className:"card instructions-card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Configuración DNS"})}),s.jsxs("div",{className:"card-content",children:[s.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),s.jsxs("div",{className:"dns-record",children:[s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Tipo"}),s.jsx("span",{children:h.type})]}),s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Nombre"}),s.jsx("span",{children:h.name}),s.jsx("button",{onClick:()=>y(h.name),className:"copy-btn",children:s.jsx(Uf,{size:14})})]}),s.jsxs("div",{className:"dns-field wide",children:[s.jsx("label",{children:"Valor"}),s.jsx("span",{children:h.value}),s.jsx("button",{onClick:()=>y(h.value),className:"copy-btn",children:s.jsx(Uf,{size:14})})]})]}),s.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),s.jsx("style",{children:Vf(f)})]}):s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("div",{className:"upgrade-notice",children:[s.jsx(ni,{size:48}),s.jsx("h2",{children:"White Label disponible en Enterprise"}),s.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),s.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),s.jsx("style",{children:Vf(f)})]})},Vf=e=>`
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
`,PE=()=>{const[e,t]=R.useState(null),[n,r]=R.useState(!0);R.useEffect(()=>{i()},[]);const i=async()=>{try{const u=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(u)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return s.jsx("div",{className:"loading",children:"Cargando dashboard..."});const o=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return s.jsxs("div",{className:"super-admin-dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Super Admin Dashboard"}),s.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),s.jsx("div",{className:"header-actions",children:s.jsxs(Re,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(ri,{size:20}),"Nuevo Tenant"]})})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card primary",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(xa,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),s.jsxs("div",{className:"stat-card success",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(As,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Activas"}),s.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),s.jsxs("div",{className:"stat-card warning",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(ws,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:o((e==null?void 0:e.summary.mrr)||0)}),s.jsx("div",{className:"stat-label",children:"MRR"}),s.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),s.jsxs("div",{className:"stat-card danger",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(Hj,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),s.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),s.jsxs("div",{className:"content-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Empresas Recientes"}),s.jsx(Re,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>s.jsxs("div",{className:"tenant-row",children:[s.jsx("div",{className:"tenant-avatar",children:c.logo_url?s.jsx("img",{src:c.logo_url,alt:c.name}):s.jsx("span",{children:c.name.charAt(0)})}),s.jsxs("div",{className:"tenant-info",children:[s.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),s.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),s.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),s.jsx("div",{className:"tenant-plan",children:c.plan_id}),s.jsx(Re,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:s.jsx(gx,{size:18})})]},c.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Ingresos Mensuales"}),s.jsx(ya,{size:20,className:"success"})]}),s.jsx("div",{className:"card-content chart-container",children:s.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,u)=>s.jsxs("div",{className:"chart-bar",children:[s.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),s.jsx("span",{className:"bar-label",children:c.month}),s.jsx("span",{className:"bar-value",children:o(c.revenue)})]},u))})})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Por Plan"})}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,u)=>s.jsxs("div",{className:"distribution-row",children:[s.jsx("span",{className:"dist-label",children:c.plan_id}),s.jsx("div",{className:"dist-bar",children:s.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][u%4]}})}),s.jsx("span",{className:"dist-count",children:c.count})]},u))})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Acciones Rápidas"})}),s.jsxs("div",{className:"card-content quick-actions",children:[s.jsxs(Re,{to:"/super-admin/tenants",className:"quick-action",children:[s.jsx(xa,{size:24}),s.jsx("span",{children:"Gestionar Empresas"})]}),s.jsxs(Re,{to:"/super-admin/subscriptions",className:"quick-action",children:[s.jsx(ws,{size:24}),s.jsx("span",{children:"Ver Suscripciones"})]}),s.jsxs(Re,{to:"/super-admin/plans",className:"quick-action",children:[s.jsx(ya,{size:24}),s.jsx("span",{children:"Configurar Planes"})]})]})]})]}),s.jsx("style",{children:`
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
      `})]})},RE=()=>{const e=_t(),[t,n]=R.useState([]),[r,i]=R.useState({page:1,limit:20,total:0,pages:0}),[o,l]=R.useState(!0),[c,u]=R.useState(""),[h,g]=R.useState(""),[m,w]=R.useState(null);R.useEffect(()=>{E()},[r.page,h]);const E=async()=>{try{l(!0);const x=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),A=await(await fetch(`/api/super-admin/tenants?${x}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(A.tenants),i(A.pagination)}catch(x){console.error("Error fetching tenants:",x)}finally{l(!1)}},b=x=>{x.preventDefault(),i({...r,page:1}),E()},I=async x=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${x}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),E()}catch(C){console.error("Error suspending tenant:",C)}},D=async x=>{try{await fetch(`/api/super-admin/tenants/${x}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),E()}catch(C){console.error("Error activating tenant:",C)}},_=x=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[x]||"bg-blue"}`,f=x=>new Date(x).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return s.jsxs("div",{className:"tenants-management",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(Re,{to:"/super-admin",className:"back-link",children:s.jsx(ou,{size:20})}),s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Empresas"}),s.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),s.jsxs(Re,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(ri,{size:20}),"Nueva Empresa"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("form",{onSubmit:b,className:"search-box",children:[s.jsx(Ha,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:x=>u(x.target.value)})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx(Oj,{size:18}),s.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"trial",children:"En prueba"}),s.jsx("option",{value:"suspended",children:"Suspendidos"}),s.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Subdominio"}),s.jsx("th",{children:"Plan"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Creado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:o?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(x=>{var C,A,z;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"tenant-cell",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((C=x.branding)==null?void 0:C.primary_color)||"#3b82f6"},children:(A=x.branding)!=null&&A.logo_url?s.jsx("img",{src:x.branding.logo_url,alt:""}):x.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("div",{className:"tenant-name",children:((z=x.branding)==null?void 0:z.company_name)||x.name}),s.jsxs("div",{className:"tenant-id",children:[x.id.slice(0,8),"..."]})]})]})}),s.jsx("td",{children:s.jsxs("a",{href:`https://${x.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[x.subdomain,s.jsx(Pd,{size:14})]})}),s.jsx("td",{children:s.jsx("span",{className:"plan-badge",children:x.plan_id})}),s.jsx("td",{children:s.jsx("span",{className:_(x.status),children:x.status})}),s.jsx("td",{children:f(x.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions-cell",children:[s.jsx("button",{onClick:()=>e(`/super-admin/tenants/${x.id}`),className:"action-btn",title:"Ver detalles",children:s.jsx(gx,{size:18})}),x.status==="active"?s.jsx("button",{onClick:()=>I(x.id),className:"action-btn danger",title:"Suspender",children:s.jsx(mx,{size:18})}):x.status==="suspended"&&s.jsx("button",{onClick:()=>D(x.id),className:"action-btn success",title:"Activar",children:s.jsx(vx,{size:18})})]})})]},x.id)})})]})}),r.pages>1&&s.jsxs("div",{className:"pagination",children:[s.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[s.jsx(ou,{size:18}),"Anterior"]}),s.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),s.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",s.jsx(Ij,{size:18})]})]}),s.jsx("style",{children:`
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
      `})]})},AE=()=>{const{id:e}=av();_t();const[t,n]=R.useState(null),[r,i]=R.useState(!0),[o,l]=R.useState(!1),[c,u]=R.useState({name:"",plan_id:""});R.useEffect(()=>{h()},[e]);const h=async()=>{try{const b=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(b),u({name:b.name,plan_id:b.plan_id})}catch(E){console.error("Error fetching tenant:",E)}finally{i(!1)}},g=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(E){console.error("Error updating tenant:",E)}},m=async E=>{if(confirm(E==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${E}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(I){console.error("Error changing status:",I)}},w=E=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[E]||"#3b82f6";return r?s.jsx("div",{className:"loading-page",children:"Cargando..."}):t?s.jsxs("div",{className:"tenant-detail",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(Re,{to:"/super-admin/tenants",className:"back-link",children:s.jsx(ou,{size:20})}),s.jsxs("div",{className:"tenant-header",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?s.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("h1",{children:t.branding.company_name||t.name}),s.jsxs("div",{className:"tenant-meta",children:[s.jsx("span",{className:"status-dot",style:{backgroundColor:w(t.status)}}),s.jsx("span",{children:t.status}),s.jsx("span",{className:"separator",children:"•"}),s.jsx("span",{children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[s.jsx(Pd,{size:18}),"Visitar"]}),t.status==="active"?s.jsxs("button",{onClick:()=>m("suspend"),className:"btn btn-danger",children:[s.jsx(mx,{size:18}),"Suspender"]}):t.status==="suspended"&&s.jsxs("button",{onClick:()=>m("activate"),className:"btn btn-success",children:[s.jsx(vx,{size:18}),"Activar"]})]})]}),s.jsxs("div",{className:"detail-content",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Información General"}),o?s.jsxs("button",{onClick:g,className:"btn btn-primary btn-sm",children:[s.jsx(xx,{size:16}),"Guardar"]}):s.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:s.jsx(Va,{size:18})})]}),s.jsxs("div",{className:"card-content info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx(xa,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Nombre"}),o?s.jsx("input",{value:c.name,onChange:E=>u({...c,name:E.target.value})}):s.jsx("span",{children:t.name})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(ni,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Subdominio"}),s.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Rd,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Email"}),s.jsx("span",{children:t.branding.contact_email||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Uj,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Teléfono"}),s.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(su,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Creado"}),s.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Pj,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Plan"}),o?s.jsxs("select",{value:c.plan_id,onChange:E=>u({...c,plan_id:E.target.value}),children:[s.jsx("option",{value:"trial",children:"Trial"}),s.jsx("option",{value:"starter",children:"Starter"}),s.jsx("option",{value:"professional",children:"Professional"}),s.jsx("option",{value:"enterprise",children:"Enterprise"})]}):s.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Uso del Servicio"})}),s.jsxs("div",{className:"card-content usage-grid",children:[s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(As,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.users}),s.jsx("div",{className:"usage-label",children:"Usuarios"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Zt,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),s.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Lj,{size:24})}),s.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),s.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Dominios"})}),s.jsx("div",{className:"card-content",children:t.domains.length===0?s.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((E,b)=>s.jsxs("div",{className:"domain-row",children:[s.jsx(ni,{size:16}),s.jsx("span",{children:E.domain}),E.is_primary&&s.jsx("span",{className:"badge primary",children:"Principal"}),s.jsxs("span",{className:`badge ${E.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",E.ssl_status]})]},b))})]}),t.subscription&&s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Suscripción"})}),s.jsx("div",{className:"card-content",children:s.jsxs("div",{className:"subscription-info",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Estado"}),s.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),s.jsxs("div",{children:[s.jsx("label",{children:"Próximo cobro"}),s.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),s.jsx("style",{children:`
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
      `})]}):s.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},DE=()=>{const{tenant:e,loading:t,error:n}=Ve(),r=cn(),o=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&o?s.jsx("div",{className:"app",children:s.jsxs(qp,{children:[s.jsx(ae,{path:"/",element:s.jsx(Xj,{})}),s.jsx(ae,{path:"/register",element:s.jsx(Yj,{})}),s.jsx(ae,{path:"/onboarding",element:s.jsx(Jj,{})}),s.jsx(ae,{path:"*",element:s.jsx(Co,{to:"/",replace:!0})})]})}):t?s.jsx(CE,{}):n&&!l?s.jsx(TE,{message:n}):s.jsx(Nj,{children:s.jsx("div",{className:"app",children:s.jsxs(qp,{children:[s.jsx(ae,{path:"/login",element:s.jsx(Qj,{})}),s.jsx(ae,{path:"/dashboard",element:s.jsx(Le,{children:s.jsx(Zj,{})})}),s.jsx(ae,{path:"/packages",element:s.jsx(Le,{children:s.jsx(eE,{})})}),s.jsx(ae,{path:"/packages/new",element:s.jsx(Le,{children:s.jsx(tE,{})})}),s.jsx(ae,{path:"/packages/:id",element:s.jsx(Le,{children:s.jsx(wE,{})})}),s.jsx(ae,{path:"/clients",element:s.jsx(Le,{children:s.jsx(bE,{})})}),s.jsx(ae,{path:"/couriers",element:s.jsx(Le,{children:s.jsx(_E,{})})}),s.jsx(ae,{path:"/rates",element:s.jsx(Le,{children:s.jsx(kE,{})})}),s.jsx(ae,{path:"/incidents",element:s.jsx(Le,{children:s.jsx(jE,{})})}),s.jsx(ae,{path:"/fuel",element:s.jsx(Le,{children:s.jsx(EE,{})})}),s.jsx(ae,{path:"/vehicles",element:s.jsx(Le,{children:s.jsx(SE,{})})}),s.jsx(ae,{path:"/maintenance",element:s.jsx(Le,{children:s.jsx(NE,{})})}),s.jsx(ae,{path:"/account/white-label",element:s.jsx(Le,{children:s.jsx(IE,{})})}),s.jsx(ae,{path:"/super-admin",element:s.jsx(Le,{children:s.jsx(PE,{})})}),s.jsx(ae,{path:"/super-admin/tenants",element:s.jsx(Le,{children:s.jsx(RE,{})})}),s.jsx(ae,{path:"/super-admin/tenants/:id",element:s.jsx(Le,{children:s.jsx(AE,{})})}),s.jsx(ae,{path:"/",element:s.jsx(Co,{to:"/dashboard",replace:!0})}),s.jsx(ae,{path:"*",element:s.jsx(Co,{to:"/dashboard",replace:!0})})]})})})};ec.createRoot(document.getElementById("root")).render(s.jsx(xu.StrictMode,{children:s.jsx(P2,{children:s.jsx(M2,{children:s.jsx(DE,{})})})}));
//# sourceMappingURL=index-DfOcydOx.js.map
