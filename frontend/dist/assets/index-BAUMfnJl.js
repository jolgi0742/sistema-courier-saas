function ov(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qf={exports:{}},Eo={},Gf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),cv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),uv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),xv=Symbol.for("react.memo"),vv=Symbol.for("react.lazy"),Ah=Symbol.iterator;function yv(e){return e===null||typeof e!="object"?null:(e=Ah&&e[Ah]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Yf={};function ps(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Kf}ps.prototype.isReactComponent={};ps.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ps.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jf(){}Jf.prototype=ps.prototype;function xd(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Kf}var vd=xd.prototype=new Jf;vd.constructor=xd;Xf(vd,ps.prototype);vd.isPureReactComponent=!0;var Dh=Array.isArray,Qf=Object.prototype.hasOwnProperty,yd={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Qf.call(t,r)&&!Zf.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var d=Array(c),h=0;h<c;h++)d[h]=arguments[h+2];i.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:Si,type:e,key:a,ref:l,props:i,_owner:yd.current}}function bv(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function wv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zh=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wv(""+e.key):t.toString(36)}function wa(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Si:case cv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+jl(l,0):r,Dh(i)?(n="",e!=null&&(n=e.replace(zh,"$&/")+"/"),wa(i,t,n,"",function(h){return h})):i!=null&&(bd(i)&&(i=bv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(zh,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Dh(e))for(var c=0;c<e.length;c++){a=e[c];var d=r+jl(a,c);l+=wa(a,t,n,d,i)}else if(d=yv(e),typeof d=="function")for(e=d.call(e),c=0;!(a=e.next()).done;)a=a.value,d=r+jl(a,c++),l+=wa(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ta(e,t,n){if(e==null)return e;var r=[],i=0;return wa(e,r,"","",function(a){return t.call(n,a,i++)}),r}function jv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},ja={transition:null},_v={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ja,ReactCurrentOwner:yd};function tg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:ta,forEach:function(e,t,n){ta(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ta(e,function(){t++}),t},toArray:function(e){return ta(e,function(t){return t})||[]},only:function(e){if(!bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ps;q.Fragment=dv;q.Profiler=hv;q.PureComponent=xd;q.StrictMode=uv;q.Suspense=mv;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;q.act=tg;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xf({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=yd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Qf.call(t,d)&&!Zf.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var h=0;h<d;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:Si,type:e.type,key:i,ref:a,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pv,_context:e},e.Consumer=e};q.createElement=eg;q.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:gv,render:e}};q.isValidElement=bd;q.lazy=function(e){return{$$typeof:vv,_payload:{_status:-1,_result:e},_init:jv}};q.memo=function(e,t){return{$$typeof:xv,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=ja.transition;ja.transition={};try{e()}finally{ja.transition=t}};q.unstable_act=tg;q.useCallback=function(e,t){return Be.current.useCallback(e,t)};q.useContext=function(e){return Be.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};q.useEffect=function(e,t){return Be.current.useEffect(e,t)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Be.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};q.useRef=function(e){return Be.current.useRef(e)};q.useState=function(e){return Be.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";Gf.exports=q;var T=Gf.exports;const wd=md(T),kv=ov({__proto__:null,default:wd},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=T,Ev=Symbol.for("react.element"),Sv=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,Cv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iv={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Tv.call(t,r)&&!Iv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ev,type:e,key:a,ref:l,props:i,_owner:Cv.current}}Eo.Fragment=Sv;Eo.jsx=ng;Eo.jsxs=ng;qf.exports=Eo;var s=qf.exports,ic={},rg={exports:{}},st={},sg={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var oe=W-1>>>1,Z=F[oe];if(0<i(Z,H))F[oe]=H,F[W]=Z,W=oe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var oe=0,Z=F.length,fe=Z>>>1;oe<fe;){var Ft=2*(oe+1)-1,$t=F[Ft],Bt=Ft+1,Vt=F[Bt];if(0>i($t,W))Bt<Z&&0>i(Vt,$t)?(F[oe]=Vt,F[Bt]=W,oe=Bt):(F[oe]=$t,F[Ft]=W,oe=Ft);else if(Bt<Z&&0>i(Vt,W))F[oe]=Vt,F[Bt]=W,oe=Bt;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],h=[],g=1,m=null,y=3,w=!1,_=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(d,H);else break;H=n(h)}}function I(F){if(P=!1,v(F),!_)if(n(d)!==null)_=!0,ys(N);else{var H=n(h);H!==null&&Ut(I,H.startTime-F)}}function N(F,H){_=!1,P&&(P=!1,x(j),j=-1),w=!0;var W=y;try{for(v(H),m=n(d);m!==null&&(!(m.expirationTime>H)||F&&!A());){var oe=m.callback;if(typeof oe=="function"){m.callback=null,y=m.priorityLevel;var Z=oe(m.expirationTime<=H);H=e.unstable_now(),typeof Z=="function"?m.callback=Z:m===n(d)&&r(d),v(H)}else r(d);m=n(d)}if(m!==null)var fe=!0;else{var Ft=n(h);Ft!==null&&Ut(I,Ft.startTime-H),fe=!1}return fe}finally{m=null,y=W,w=!1}}var O=!1,k=null,j=-1,E=5,C=-1;function A(){return!(e.unstable_now()-C<E)}function R(){if(k!==null){var F=e.unstable_now();C=F;var H=!0;try{H=k(!0,F)}finally{H?S():(O=!1,k=null)}}else O=!1}var S;if(typeof f=="function")S=function(){f(R)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Zn=ye.port2;ye.port1.onmessage=R,S=function(){Zn.postMessage(null)}}else S=function(){D(R,0)};function ys(F){k=F,O||(O=!0,S())}function Ut(F,H){j=D(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){_||w||(_=!0,ys(N))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var W=y;y=H;try{return F()}finally{y=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=y;y=F;try{return H()}finally{y=W}},e.unstable_scheduleCallback=function(F,H,W){var oe=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,F){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=W+Z,F={id:g++,callback:H,priorityLevel:F,startTime:W,expirationTime:Z,sortIndex:-1},W>oe?(F.sortIndex=W,t(h,F),n(d)===null&&F===n(h)&&(P?(x(j),j=-1):P=!0,Ut(I,W-oe))):(F.sortIndex=Z,t(d,F),_||w||(_=!0,ys(N))),F},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(F){var H=y;return function(){var W=y;y=H;try{return F.apply(this,arguments)}finally{y=W}}}})(ig);sg.exports=ig;var Pv=sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=T,rt=Pv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,ai={};function kr(e,t){ns(e,t),ns(e+"Capture",t)}function ns(e,t){for(ai[e]=t,e=0;e<t.length;e++)ag.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=Object.prototype.hasOwnProperty,Av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Oh={};function Dv(e){return ac.call(Oh,e)?!0:ac.call(Lh,e)?!1:Av.test(e)?Oh[e]=!0:(Lh[e]=!0,!1)}function zv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lv(e,t,n,r){if(t===null||typeof t>"u"||zv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function _d(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jd,_d);Se[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jd,_d);Se[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jd,_d);Se[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function kd(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lv(t,n,i,r)&&(n=null),r||i===null?Dv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),lg=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),lc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function As(e){return e===null||typeof e!="object"?null:(e=Mh&&e[Mh]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,_l;function Bs(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var kl=!1;function Nl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,c=a.length-1;1<=l&&0<=c&&i[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==a[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bs(e):""}function Ov(e){switch(e.tag){case 5:return Bs(e.type);case 16:return Bs("Lazy");case 13:return Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function dc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Ar:return"Portal";case oc:return"Profiler";case Nd:return"StrictMode";case lc:return"Suspense";case cc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case og:return(e._context.displayName||"Context")+".Provider";case Ed:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sd:return t=e.displayName||null,t!==null?t:dc(e.type)||"Memo";case vn:t=e._payload,e=e._init;try{return dc(e(t))}catch{}}return null}function Mv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dc(t);case 8:return t===Nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uv(e){var t=dg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ra(e){e._valueTracker||(e._valueTracker=Uv(e))}function ug(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ua(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function uc(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hg(e,t){t=t.checked,t!=null&&kd(e,"checked",t,!1)}function hc(e,t){hg(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pc(e,t.type,n):t.hasOwnProperty("defaultValue")&&pc(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pc(e,t,n){(t!=="number"||Ua(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vs=Array.isArray;function qr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $h(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Vs(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function pg(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fv=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(e){Fv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ks[t]=Ks[e]})});function mg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ks.hasOwnProperty(e)&&Ks[e]?(""+t).trim():t+"px"}function xg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $v=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(e,t){if(t){if($v[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function xc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vc=null;function Td(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yc=null,Gr=null,Kr=null;function Vh(e){if(e=Ii(e)){if(typeof yc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Po(t),yc(e.stateNode,e.type,t))}}function vg(e){Gr?Kr?Kr.push(e):Kr=[e]:Gr=e}function yg(){if(Gr){var e=Gr,t=Kr;if(Kr=Gr=null,Vh(e),t)for(e=0;e<t.length;e++)Vh(t[e])}}function bg(e,t){return e(t)}function wg(){}var El=!1;function jg(e,t,n){if(El)return e(t,n);El=!0;try{return bg(e,t,n)}finally{El=!1,(Gr!==null||Kr!==null)&&(wg(),yg())}}function li(e,t){var n=e.stateNode;if(n===null)return null;var r=Po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var bc=!1;if(nn)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{bc=!1}function Bv(e,t,n,r,i,a,l,c,d){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(g){this.onError(g)}}var Xs=!1,Fa=null,$a=!1,wc=null,Vv={onError:function(e){Xs=!0,Fa=e}};function Hv(e,t,n,r,i,a,l,c,d){Xs=!1,Fa=null,Bv.apply(Vv,arguments)}function Wv(e,t,n,r,i,a,l,c,d){if(Hv.apply(this,arguments),Xs){if(Xs){var h=Fa;Xs=!1,Fa=null}else throw Error(M(198));$a||($a=!0,wc=h)}}function Nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hh(e){if(Nr(e)!==e)throw Error(M(188))}function qv(e){var t=e.alternate;if(!t){if(t=Nr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Hh(i),e;if(a===r)return Hh(i),t;a=a.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function kg(e){return e=qv(e),e!==null?Ng(e):null}function Ng(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ng(e);if(t!==null)return t;e=e.sibling}return null}var Eg=rt.unstable_scheduleCallback,Wh=rt.unstable_cancelCallback,Gv=rt.unstable_shouldYield,Kv=rt.unstable_requestPaint,me=rt.unstable_now,Xv=rt.unstable_getCurrentPriorityLevel,Cd=rt.unstable_ImmediatePriority,Sg=rt.unstable_UserBlockingPriority,Ba=rt.unstable_NormalPriority,Yv=rt.unstable_LowPriority,Tg=rt.unstable_IdlePriority,So=null,It=null;function Jv(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:ey,Qv=Math.log,Zv=Math.LN2;function ey(e){return e>>>=0,e===0?32:31-(Qv(e)/Zv|0)|0}var ia=64,aa=4194304;function Hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Va(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=Hs(c):(a&=l,a!==0&&(r=Hs(a)))}else l=n&~i,l!==0?r=Hs(l):a!==0&&(r=Hs(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function ty(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ny(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-bt(a),c=1<<l,d=i[l];d===-1?(!(c&n)||c&r)&&(i[l]=ty(c,t)):d<=t&&(e.expiredLanes|=c),a&=~c}}function jc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cg(){var e=ia;return ia<<=1,!(ia&4194240)&&(ia=64),e}function Sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ti(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function ry(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Id(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pg,Pd,Rg,Ag,Dg,_c=!1,oa=[],In=null,Pn=null,Rn=null,ci=new Map,di=new Map,bn=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function zs(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&Pd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function iy(e,t,n,r,i){switch(t){case"focusin":return In=zs(In,e,t,n,r,i),!0;case"dragenter":return Pn=zs(Pn,e,t,n,r,i),!0;case"mouseover":return Rn=zs(Rn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ci.set(a,zs(ci.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,di.set(a,zs(di.get(a)||null,e,t,n,r,i)),!0}return!1}function zg(e){var t=ar(e.target);if(t!==null){var n=Nr(t);if(n!==null){if(t=n.tag,t===13){if(t=_g(n),t!==null){e.blockedOn=t,Dg(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vc=r,n.target.dispatchEvent(r),vc=null}else return t=Ii(n),t!==null&&Pd(t),e.blockedOn=n,!1;t.shift()}return!0}function Gh(e,t,n){_a(e)&&n.delete(t)}function ay(){_c=!1,In!==null&&_a(In)&&(In=null),Pn!==null&&_a(Pn)&&(Pn=null),Rn!==null&&_a(Rn)&&(Rn=null),ci.forEach(Gh),di.forEach(Gh)}function Ls(e,t){e.blockedOn===t&&(e.blockedOn=null,_c||(_c=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,ay)))}function ui(e){function t(i){return Ls(i,e)}if(0<oa.length){Ls(oa[0],e);for(var n=1;n<oa.length;n++){var r=oa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&Ls(In,e),Pn!==null&&Ls(Pn,e),Rn!==null&&Ls(Rn,e),ci.forEach(t),di.forEach(t),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&bn.shift()}var Xr=cn.ReactCurrentBatchConfig,Ha=!0;function oy(e,t,n,r){var i=Q,a=Xr.transition;Xr.transition=null;try{Q=1,Rd(e,t,n,r)}finally{Q=i,Xr.transition=a}}function ly(e,t,n,r){var i=Q,a=Xr.transition;Xr.transition=null;try{Q=4,Rd(e,t,n,r)}finally{Q=i,Xr.transition=a}}function Rd(e,t,n,r){if(Ha){var i=kc(e,t,n,r);if(i===null)Ol(e,t,r,Wa,n),qh(e,r);else if(iy(i,e,t,n,r))r.stopPropagation();else if(qh(e,r),t&4&&-1<sy.indexOf(e)){for(;i!==null;){var a=Ii(i);if(a!==null&&Pg(a),a=kc(e,t,n,r),a===null&&Ol(e,t,r,Wa,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var Wa=null;function kc(e,t,n,r){if(Wa=null,e=Td(r),e=ar(e),e!==null)if(t=Nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wa=e,null}function Lg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xv()){case Cd:return 1;case Sg:return 4;case Ba:case Yv:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var En=null,Ad=null,ka=null;function Og(){if(ka)return ka;var e,t=Ad,n=t.length,r,i="value"in En?En.value:En.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return ka=i.slice(e,1<r?1-r:void 0)}function Na(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function la(){return!0}function Kh(){return!1}function it(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?la:Kh,this.isPropagationStopped=Kh,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),t}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=it(fs),Ci=de({},fs,{view:0,detail:0}),cy=it(Ci),Tl,Cl,Os,To=de({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Os&&(Os&&e.type==="mousemove"?(Tl=e.screenX-Os.screenX,Cl=e.screenY-Os.screenY):Cl=Tl=0,Os=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Xh=it(To),dy=de({},To,{dataTransfer:0}),uy=it(dy),hy=de({},Ci,{relatedTarget:0}),Il=it(hy),py=de({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=it(py),gy=de({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),my=it(gy),xy=de({},fs,{data:0}),Yh=it(xy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=by[e])?!!t[e]:!1}function zd(){return wy}var jy=de({},Ci,{key:function(e){if(e.key){var t=vy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Na(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?Na(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Na(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=it(jy),ky=de({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=it(ky),Ny=de({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Ey=it(Ny),Sy=de({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=it(Sy),Cy=de({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=it(Cy),Py=[9,13,27,32],Ld=nn&&"CompositionEvent"in window,Ys=null;nn&&"documentMode"in document&&(Ys=document.documentMode);var Ry=nn&&"TextEvent"in window&&!Ys,Mg=nn&&(!Ld||Ys&&8<Ys&&11>=Ys),Qh=" ",Zh=!1;function Ug(e,t){switch(e){case"keyup":return Py.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function Ay(e,t){switch(e){case"compositionend":return Fg(t);case"keypress":return t.which!==32?null:(Zh=!0,Qh);case"textInput":return e=t.data,e===Qh&&Zh?null:e;default:return null}}function Dy(e,t){if(zr)return e==="compositionend"||!Ld&&Ug(e,t)?(e=Og(),ka=Ad=En=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mg&&t.locale!=="ko"?null:t.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zy[e.type]:t==="textarea"}function $g(e,t,n,r){vg(r),t=qa(t,"onChange"),0<t.length&&(n=new Dd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Js=null,hi=null;function Ly(e){Qg(e,0)}function Co(e){var t=Mr(e);if(ug(t))return e}function Oy(e,t){if(e==="change")return t}var Bg=!1;if(nn){var Pl;if(nn){var Rl="oninput"in document;if(!Rl){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Rl=typeof tp.oninput=="function"}Pl=Rl}else Pl=!1;Bg=Pl&&(!document.documentMode||9<document.documentMode)}function np(){Js&&(Js.detachEvent("onpropertychange",Vg),hi=Js=null)}function Vg(e){if(e.propertyName==="value"&&Co(hi)){var t=[];$g(t,hi,e,Td(e)),jg(Ly,t)}}function My(e,t,n){e==="focusin"?(np(),Js=t,hi=n,Js.attachEvent("onpropertychange",Vg)):e==="focusout"&&np()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(hi)}function Fy(e,t){if(e==="click")return Co(t)}function $y(e,t){if(e==="input"||e==="change")return Co(t)}function By(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:By;function pi(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ac.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=rp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wg(){for(var e=window,t=Ua();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ua(e.document)}return t}function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vy(e){var t=Wg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=sp(n,a);var l=sp(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hy=nn&&"documentMode"in document&&11>=document.documentMode,Lr=null,Nc=null,Qs=null,Ec=!1;function ip(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ec||Lr==null||Lr!==Ua(r)||(r=Lr,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qs&&pi(Qs,r)||(Qs=r,r=qa(Nc,"onSelect"),0<r.length&&(t=new Dd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Or={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Al={},qg={};nn&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Io(e){if(Al[e])return Al[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qg)return Al[e]=t[n];return e}var Gg=Io("animationend"),Kg=Io("animationiteration"),Xg=Io("animationstart"),Yg=Io("transitionend"),Jg=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Jg.set(e,t),kr(t,[e])}for(var Dl=0;Dl<ap.length;Dl++){var zl=ap[Dl],Wy=zl.toLowerCase(),qy=zl[0].toUpperCase()+zl.slice(1);Kn(Wy,"on"+qy)}Kn(Gg,"onAnimationEnd");Kn(Kg,"onAnimationIteration");Kn(Xg,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Yg,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wv(r,t,void 0,e),e.currentTarget=null}function Qg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],d=c.instance,h=c.currentTarget;if(c=c.listener,d!==a&&i.isPropagationStopped())break e;op(i,c,h),a=d}else for(l=0;l<r.length;l++){if(c=r[l],d=c.instance,h=c.currentTarget,c=c.listener,d!==a&&i.isPropagationStopped())break e;op(i,c,h),a=d}}}if($a)throw e=wc,$a=!1,wc=null,e}function se(e,t){var n=t[Pc];n===void 0&&(n=t[Pc]=new Set);var r=e+"__bubble";n.has(r)||(Zg(t,e,2,!1),n.add(r))}function Ll(e,t,n){var r=0;t&&(r|=4),Zg(n,e,r,t)}var da="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[da]){e[da]=!0,ag.forEach(function(n){n!=="selectionchange"&&(Gy.has(n)||Ll(n,!1,e),Ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[da]||(t[da]=!0,Ll("selectionchange",!1,t))}}function Zg(e,t,n,r){switch(Lg(t)){case 1:var i=oy;break;case 4:i=ly;break;default:i=Rd}n=i.bind(null,t,n,e),i=void 0,!bc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=ar(c),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}c=c.parentNode}}r=r.return}jg(function(){var h=a,g=Td(n),m=[];e:{var y=Jg.get(e);if(y!==void 0){var w=Dd,_=e;switch(e){case"keypress":if(Na(n)===0)break e;case"keydown":case"keyup":w=_y;break;case"focusin":_="focus",w=Il;break;case"focusout":_="blur",w=Il;break;case"beforeblur":case"afterblur":w=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ey;break;case Gg:case Kg:case Xg:w=fy;break;case Yg:w=Ty;break;case"scroll":w=cy;break;case"wheel":w=Iy;break;case"copy":case"cut":case"paste":w=my;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Jh}var P=(t&4)!==0,D=!P&&e==="scroll",x=P?y!==null?y+"Capture":null:y;P=[];for(var f=h,v;f!==null;){v=f;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,x!==null&&(I=li(f,x),I!=null&&P.push(gi(f,I,v)))),D)break;f=f.return}0<P.length&&(y=new w(y,_,null,n,g),m.push({event:y,listeners:P}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",y&&n!==vc&&(_=n.relatedTarget||n.fromElement)&&(ar(_)||_[rn]))break e;if((w||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,w?(_=n.relatedTarget||n.toElement,w=h,_=_?ar(_):null,_!==null&&(D=Nr(_),_!==D||_.tag!==5&&_.tag!==6)&&(_=null)):(w=null,_=h),w!==_)){if(P=Xh,I="onMouseLeave",x="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(P=Jh,I="onPointerLeave",x="onPointerEnter",f="pointer"),D=w==null?y:Mr(w),v=_==null?y:Mr(_),y=new P(I,f+"leave",w,n,g),y.target=D,y.relatedTarget=v,I=null,ar(g)===h&&(P=new P(x,f+"enter",_,n,g),P.target=v,P.relatedTarget=D,I=P),D=I,w&&_)t:{for(P=w,x=_,f=0,v=P;v;v=Rr(v))f++;for(v=0,I=x;I;I=Rr(I))v++;for(;0<f-v;)P=Rr(P),f--;for(;0<v-f;)x=Rr(x),v--;for(;f--;){if(P===x||x!==null&&P===x.alternate)break t;P=Rr(P),x=Rr(x)}P=null}else P=null;w!==null&&lp(m,y,w,P,!1),_!==null&&D!==null&&lp(m,D,_,P,!0)}}e:{if(y=h?Mr(h):window,w=y.nodeName&&y.nodeName.toLowerCase(),w==="select"||w==="input"&&y.type==="file")var N=Oy;else if(ep(y))if(Bg)N=$y;else{N=Uy;var O=My}else(w=y.nodeName)&&w.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=Fy);if(N&&(N=N(e,h))){$g(m,N,n,g);break e}O&&O(e,y,h),e==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&pc(y,"number",y.value)}switch(O=h?Mr(h):window,e){case"focusin":(ep(O)||O.contentEditable==="true")&&(Lr=O,Nc=h,Qs=null);break;case"focusout":Qs=Nc=Lr=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,ip(m,n,g);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":ip(m,n,g)}var k;if(Ld)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else zr?Ug(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Mg&&n.locale!=="ko"&&(zr||j!=="onCompositionStart"?j==="onCompositionEnd"&&zr&&(k=Og()):(En=g,Ad="value"in En?En.value:En.textContent,zr=!0)),O=qa(h,j),0<O.length&&(j=new Yh(j,e,null,n,g),m.push({event:j,listeners:O}),k?j.data=k:(k=Fg(n),k!==null&&(j.data=k)))),(k=Ry?Ay(e,n):Dy(e,n))&&(h=qa(h,"onBeforeInput"),0<h.length&&(g=new Yh("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:h}),g.data=k))}Qg(m,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=li(e,n),a!=null&&r.unshift(gi(e,a,i)),a=li(e,t),a!=null&&r.push(gi(e,a,i))),e=e.return}return r}function Rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lp(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var c=n,d=c.alternate,h=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&h!==null&&(c=h,i?(d=li(n,a),d!=null&&l.unshift(gi(n,d,c))):i||(d=li(n,a),d!=null&&l.push(gi(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ky=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function cp(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Xy,"")}function ua(e,t,n){if(t=cp(t),cp(e)!==t&&n)throw Error(M(425))}function Ga(){}var Sc=null,Tc=null;function Cc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(e){return dp.resolve(null).then(e).catch(Qy)}:Ic;function Qy(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Tt="__reactFiber$"+gs,mi="__reactProps$"+gs,rn="__reactContainer$"+gs,Pc="__reactEvents$"+gs,Zy="__reactListeners$"+gs,e1="__reactHandles$"+gs;function ar(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=up(e);e!==null;){if(n=e[Tt])return n;e=up(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[Tt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Po(e){return e[mi]||null}var Rc=[],Ur=-1;function Xn(e){return{current:e}}function ie(e){0>Ur||(e.current=Rc[Ur],Rc[Ur]=null,Ur--)}function ne(e,t){Ur++,Rc[Ur]=e.current,e.current=t}var Bn={},ze=Xn(Bn),Ke=Xn(!1),ur=Bn;function rs(e,t){var n=e.type.contextTypes;if(!n)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Ka(){ie(Ke),ie(ze)}function hp(e,t,n){if(ze.current!==Bn)throw Error(M(168));ne(ze,t),ne(Ke,n)}function em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Mv(e)||"Unknown",i));return de({},n,r)}function Xa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,ur=ze.current,ne(ze,e),ne(Ke,Ke.current),!0}function pp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=em(e,t,ur),r.__reactInternalMemoizedMergedChildContext=e,ie(Ke),ie(ze),ne(ze,e)):ie(Ke),ne(Ke,n)}var Gt=null,Ro=!1,Ul=!1;function tm(e){Gt===null?Gt=[e]:Gt.push(e)}function t1(e){Ro=!0,tm(e)}function Yn(){if(!Ul&&Gt!==null){Ul=!0;var e=0,t=Q;try{var n=Gt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,Ro=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),Eg(Cd,Yn),i}finally{Q=t,Ul=!1}}return null}var Fr=[],$r=0,Ya=null,Ja=0,ot=[],lt=0,hr=null,Xt=1,Yt="";function rr(e,t){Fr[$r++]=Ja,Fr[$r++]=Ya,Ya=e,Ja=t}function nm(e,t,n){ot[lt++]=Xt,ot[lt++]=Yt,ot[lt++]=hr,hr=e;var r=Xt;e=Yt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var a=32-bt(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Xt=1<<32-bt(t)+i|n<<i|r,Yt=a+e}else Xt=1<<a|n<<i|r,Yt=e}function Md(e){e.return!==null&&(rr(e,1),nm(e,1,0))}function Ud(e){for(;e===Ya;)Ya=Fr[--$r],Fr[$r]=null,Ja=Fr[--$r],Fr[$r]=null;for(;e===hr;)hr=ot[--lt],ot[lt]=null,Yt=ot[--lt],ot[lt]=null,Xt=ot[--lt],ot[lt]=null}var nt=null,tt=null,ae=!1,xt=null;function rm(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:Xt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function Ac(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dc(e){if(ae){var t=tt;if(t){var n=t;if(!fp(e,t)){if(Ac(e))throw Error(M(418));t=An(n.nextSibling);var r=nt;t&&fp(e,t)?rm(r,n):(e.flags=e.flags&-4097|2,ae=!1,nt=e)}}else{if(Ac(e))throw Error(M(418));e.flags=e.flags&-4097|2,ae=!1,nt=e}}}function gp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function ha(e){if(e!==nt)return!1;if(!ae)return gp(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Cc(e.type,e.memoizedProps)),t&&(t=tt)){if(Ac(e))throw sm(),Error(M(418));for(;t;)rm(e,t),t=An(t.nextSibling)}if(gp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?An(e.stateNode.nextSibling):null;return!0}function sm(){for(var e=tt;e;)e=An(e.nextSibling)}function ss(){tt=nt=null,ae=!1}function Fd(e){xt===null?xt=[e]:xt.push(e)}var n1=cn.ReactCurrentBatchConfig;function Ms(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=i.refs;l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function pa(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mp(e){var t=e._init;return t(e._payload)}function im(e){function t(x,f){if(e){var v=x.deletions;v===null?(x.deletions=[f],x.flags|=16):v.push(f)}}function n(x,f){if(!e)return null;for(;f!==null;)t(x,f),f=f.sibling;return null}function r(x,f){for(x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function i(x,f){return x=On(x,f),x.index=0,x.sibling=null,x}function a(x,f,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<f?(x.flags|=2,f):v):(x.flags|=2,f)):(x.flags|=1048576,f)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function c(x,f,v,I){return f===null||f.tag!==6?(f=ql(v,x.mode,I),f.return=x,f):(f=i(f,v),f.return=x,f)}function d(x,f,v,I){var N=v.type;return N===Dr?g(x,f,v.props.children,I,v.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vn&&mp(N)===f.type)?(I=i(f,v.props),I.ref=Ms(x,f,v),I.return=x,I):(I=Ra(v.type,v.key,v.props,null,x.mode,I),I.ref=Ms(x,f,v),I.return=x,I)}function h(x,f,v,I){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Gl(v,x.mode,I),f.return=x,f):(f=i(f,v.children||[]),f.return=x,f)}function g(x,f,v,I,N){return f===null||f.tag!==7?(f=dr(v,x.mode,I,N),f.return=x,f):(f=i(f,v),f.return=x,f)}function m(x,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ql(""+f,x.mode,v),f.return=x,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case na:return v=Ra(f.type,f.key,f.props,null,x.mode,v),v.ref=Ms(x,null,f),v.return=x,v;case Ar:return f=Gl(f,x.mode,v),f.return=x,f;case vn:var I=f._init;return m(x,I(f._payload),v)}if(Vs(f)||As(f))return f=dr(f,x.mode,v,null),f.return=x,f;pa(x,f)}return null}function y(x,f,v,I){var N=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:c(x,f,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case na:return v.key===N?d(x,f,v,I):null;case Ar:return v.key===N?h(x,f,v,I):null;case vn:return N=v._init,y(x,f,N(v._payload),I)}if(Vs(v)||As(v))return N!==null?null:g(x,f,v,I,null);pa(x,v)}return null}function w(x,f,v,I,N){if(typeof I=="string"&&I!==""||typeof I=="number")return x=x.get(v)||null,c(f,x,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case na:return x=x.get(I.key===null?v:I.key)||null,d(f,x,I,N);case Ar:return x=x.get(I.key===null?v:I.key)||null,h(f,x,I,N);case vn:var O=I._init;return w(x,f,v,O(I._payload),N)}if(Vs(I)||As(I))return x=x.get(v)||null,g(f,x,I,N,null);pa(f,I)}return null}function _(x,f,v,I){for(var N=null,O=null,k=f,j=f=0,E=null;k!==null&&j<v.length;j++){k.index>j?(E=k,k=null):E=k.sibling;var C=y(x,k,v[j],I);if(C===null){k===null&&(k=E);break}e&&k&&C.alternate===null&&t(x,k),f=a(C,f,j),O===null?N=C:O.sibling=C,O=C,k=E}if(j===v.length)return n(x,k),ae&&rr(x,j),N;if(k===null){for(;j<v.length;j++)k=m(x,v[j],I),k!==null&&(f=a(k,f,j),O===null?N=k:O.sibling=k,O=k);return ae&&rr(x,j),N}for(k=r(x,k);j<v.length;j++)E=w(k,x,j,v[j],I),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?j:E.key),f=a(E,f,j),O===null?N=E:O.sibling=E,O=E);return e&&k.forEach(function(A){return t(x,A)}),ae&&rr(x,j),N}function P(x,f,v,I){var N=As(v);if(typeof N!="function")throw Error(M(150));if(v=N.call(v),v==null)throw Error(M(151));for(var O=N=null,k=f,j=f=0,E=null,C=v.next();k!==null&&!C.done;j++,C=v.next()){k.index>j?(E=k,k=null):E=k.sibling;var A=y(x,k,C.value,I);if(A===null){k===null&&(k=E);break}e&&k&&A.alternate===null&&t(x,k),f=a(A,f,j),O===null?N=A:O.sibling=A,O=A,k=E}if(C.done)return n(x,k),ae&&rr(x,j),N;if(k===null){for(;!C.done;j++,C=v.next())C=m(x,C.value,I),C!==null&&(f=a(C,f,j),O===null?N=C:O.sibling=C,O=C);return ae&&rr(x,j),N}for(k=r(x,k);!C.done;j++,C=v.next())C=w(k,x,j,C.value,I),C!==null&&(e&&C.alternate!==null&&k.delete(C.key===null?j:C.key),f=a(C,f,j),O===null?N=C:O.sibling=C,O=C);return e&&k.forEach(function(R){return t(x,R)}),ae&&rr(x,j),N}function D(x,f,v,I){if(typeof v=="object"&&v!==null&&v.type===Dr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case na:e:{for(var N=v.key,O=f;O!==null;){if(O.key===N){if(N=v.type,N===Dr){if(O.tag===7){n(x,O.sibling),f=i(O,v.props.children),f.return=x,x=f;break e}}else if(O.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vn&&mp(N)===O.type){n(x,O.sibling),f=i(O,v.props),f.ref=Ms(x,O,v),f.return=x,x=f;break e}n(x,O);break}else t(x,O);O=O.sibling}v.type===Dr?(f=dr(v.props.children,x.mode,I,v.key),f.return=x,x=f):(I=Ra(v.type,v.key,v.props,null,x.mode,I),I.ref=Ms(x,f,v),I.return=x,x=I)}return l(x);case Ar:e:{for(O=v.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(x,f.sibling),f=i(f,v.children||[]),f.return=x,x=f;break e}else{n(x,f);break}else t(x,f);f=f.sibling}f=Gl(v,x.mode,I),f.return=x,x=f}return l(x);case vn:return O=v._init,D(x,f,O(v._payload),I)}if(Vs(v))return _(x,f,v,I);if(As(v))return P(x,f,v,I);pa(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(x,f.sibling),f=i(f,v),f.return=x,x=f):(n(x,f),f=ql(v,x.mode,I),f.return=x,x=f),l(x)):n(x,f)}return D}var is=im(!0),am=im(!1),Qa=Xn(null),Za=null,Br=null,$d=null;function Bd(){$d=Br=Za=null}function Vd(e){var t=Qa.current;ie(Qa),e._currentValue=t}function zc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){Za=e,$d=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if($d!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(Za===null)throw Error(M(308));Br=e,Za.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var or=null;function Hd(e){or===null?or=[e]:or.push(e)}function om(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Hd(t)):(n.next=i.next,i.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yn=!1;function Wd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,sn(e,n)}return i=r.interleaved,i===null?(t.next=t,Hd(r)):(t.next=i.next,i.next=t),r.interleaved=t,sn(e,n)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Id(e,n)}}function xp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;yn=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,h=d.next;d.next=null,l===null?a=h:l.next=h,l=d;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==l&&(c===null?g.firstBaseUpdate=h:c.next=h,g.lastBaseUpdate=d))}if(a!==null){var m=i.baseState;l=0,g=h=d=null,c=a;do{var y=c.lane,w=c.eventTime;if((r&y)===y){g!==null&&(g=g.next={eventTime:w,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var _=e,P=c;switch(y=t,w=n,P.tag){case 1:if(_=P.payload,typeof _=="function"){m=_.call(w,m,y);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=P.payload,y=typeof _=="function"?_.call(w,m,y):_,y==null)break e;m=de({},m,y);break e;case 2:yn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[c]:y.push(c))}else w={eventTime:w,lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(h=g=w,d=m):g=g.next=w,l|=y;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;y=c,c=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(g===null&&(d=m),i.baseState=d,i.firstBaseUpdate=h,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fr|=l,e.lanes=l,e.memoizedState=m}}function vp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Pi={},Pt=Xn(Pi),xi=Xn(Pi),vi=Xn(Pi);function lr(e){if(e===Pi)throw Error(M(174));return e}function qd(e,t){switch(ne(vi,t),ne(xi,e),ne(Pt,Pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gc(t,e)}ie(Pt),ne(Pt,t)}function as(){ie(Pt),ie(xi),ie(vi)}function cm(e){lr(vi.current);var t=lr(Pt.current),n=gc(t,e.type);t!==n&&(ne(xi,e),ne(Pt,n))}function Gd(e){xi.current===e&&(ie(Pt),ie(xi))}var le=Xn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function Kd(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Sa=cn.ReactCurrentDispatcher,$l=cn.ReactCurrentBatchConfig,pr=0,ce=null,be=null,je=null,no=!1,Zs=!1,yi=0,r1=0;function Pe(){throw Error(M(321))}function Xd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Yd(e,t,n,r,i,a){if(pr=a,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sa.current=e===null||e.memoizedState===null?o1:l1,e=n(r,i),Zs){a=0;do{if(Zs=!1,yi=0,25<=a)throw Error(M(301));a+=1,je=be=null,t.updateQueue=null,Sa.current=c1,e=n(r,i)}while(Zs)}if(Sa.current=ro,t=be!==null&&be.next!==null,pr=0,je=be=ce=null,no=!1,t)throw Error(M(300));return e}function Jd(){var e=yi!==0;return yi=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ce.memoizedState=je=e:je=je.next=e,je}function ht(){if(be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=je===null?ce.memoizedState:je.next;if(t!==null)je=t,be=e;else{if(e===null)throw Error(M(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},je===null?ce.memoizedState=je=e:je=je.next=e}return je}function bi(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=ht(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var c=l=null,d=null,h=a;do{var g=h.lane;if((pr&g)===g)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(c=d=m,l=r):d=d.next=m,ce.lanes|=g,fr|=g}h=h.next}while(h!==null&&h!==a);d===null?l=r:d.next=c,jt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ce.lanes|=a,fr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=ht(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);jt(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function dm(){}function um(e,t){var n=ce,r=ht(),i=t(),a=!jt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ge=!0),r=r.queue,Qd(fm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,wi(9,pm.bind(null,n,r,i,t),void 0,null),_e===null)throw Error(M(349));pr&30||hm(n,t,i)}return i}function hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pm(e,t,n,r){t.value=n,t.getSnapshot=r,gm(t)&&mm(e)}function fm(e,t,n){return n(function(){gm(t)&&mm(e)})}function gm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function mm(e){var t=sn(e,1);t!==null&&wt(t,e,1,-1)}function yp(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=a1.bind(null,ce,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xm(){return ht().memoizedState}function Ta(e,t,n,r){var i=St();ce.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Ao(e,t,n,r){var i=ht();r=r===void 0?null:r;var a=void 0;if(be!==null){var l=be.memoizedState;if(a=l.destroy,r!==null&&Xd(r,l.deps)){i.memoizedState=wi(t,n,a,r);return}}ce.flags|=e,i.memoizedState=wi(1|t,n,a,r)}function bp(e,t){return Ta(8390656,8,e,t)}function Qd(e,t){return Ao(2048,8,e,t)}function vm(e,t){return Ao(4,2,e,t)}function ym(e,t){return Ao(4,4,e,t)}function bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wm(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4,4,bm.bind(null,t,e),n)}function Zd(){}function jm(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _m(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function km(e,t,n){return pr&21?(jt(n,t)||(n=Cg(),ce.lanes|=n,fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function s1(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),t()}finally{Q=n,$l.transition=r}}function Nm(){return ht().memoizedState}function i1(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Em(e))Sm(t,n);else if(n=om(e,t,n,r),n!==null){var i=Fe();wt(n,e,r,i),Tm(n,t,r)}}function a1(e,t,n){var r=Ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Em(e))Sm(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(i.hasEagerState=!0,i.eagerState=c,jt(c,l)){var d=t.interleaved;d===null?(i.next=i,Hd(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=om(e,t,i,r),n!==null&&(i=Fe(),wt(n,e,r,i),Tm(n,t,r))}}function Em(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Sm(e,t){Zs=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Id(e,n)}}var ro={readContext:ut,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},o1={readContext:ut,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:bp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4194308,4,bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i1.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:yp,useDebugValue:Zd,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=yp(!1),t=e[0];return e=s1.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=St();if(ae){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),_e===null)throw Error(M(349));pr&30||hm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,bp(fm.bind(null,r,a,e),[e]),r.flags|=2048,wi(9,pm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=St(),t=_e.identifierPrefix;if(ae){var n=Yt,r=Xt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=r1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l1={readContext:ut,useCallback:jm,useContext:ut,useEffect:Qd,useImperativeHandle:wm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:_m,useReducer:Bl,useRef:xm,useState:function(){return Bl(bi)},useDebugValue:Zd,useDeferredValue:function(e){var t=ht();return km(t,be.memoizedState,e)},useTransition:function(){var e=Bl(bi)[0],t=ht().memoizedState;return[e,t]},useMutableSource:dm,useSyncExternalStore:um,useId:Nm,unstable_isNewReconciler:!1},c1={readContext:ut,useCallback:jm,useContext:ut,useEffect:Qd,useImperativeHandle:wm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:_m,useReducer:Vl,useRef:xm,useState:function(){return Vl(bi)},useDebugValue:Zd,useDeferredValue:function(e){var t=ht();return be===null?t.memoizedState=e:km(t,be.memoizedState,e)},useTransition:function(){var e=Vl(bi)[0],t=ht().memoizedState;return[e,t]},useMutableSource:dm,useSyncExternalStore:um,useId:Nm,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Do={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Ln(e),a=en(r,i);a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(wt(t,e,i,r),Ea(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Ln(e),a=en(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(wt(t,e,i,r),Ea(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Ln(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,r),t!==null&&(wt(t,e,r,n),Ea(t,e,r))}};function wp(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!pi(n,r)||!pi(i,a):!0}function Cm(e,t,n){var r=!1,i=Bn,a=t.contextType;return typeof a=="object"&&a!==null?a=ut(a):(i=Xe(t)?ur:ze.current,r=t.contextTypes,a=(r=r!=null)?rs(e,i):Bn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Do,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function jp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Do.enqueueReplaceState(t,t.state,null)}function Oc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Wd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=ut(a):(a=Xe(t)?ur:ze.current,i.context=rs(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Lc(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Do.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function os(e,t){try{var n="",r=t;do n+=Ov(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function Im(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,Kc=r),Mc(e,t)},n}function Pm(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Mc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Mc(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=k1.bind(null,e,t,n),t.then(e,e))}function kp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Np(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,Dn(n,t,1))),n.lanes|=1),e)}var u1=cn.ReactCurrentOwner,Ge=!1;function Me(e,t,n,r){t.child=e===null?am(t,null,n,r):is(t,e.child,n,r)}function Ep(e,t,n,r,i){n=n.render;var a=t.ref;return Yr(t,i),r=Yd(e,t,n,r,a,i),n=Jd(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(ae&&n&&Md(t),t.flags|=1,Me(e,t,r,i),t.child)}function Sp(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ou(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Rm(e,t,a,r,i)):(e=Ra(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(l,r)&&e.ref===t.ref)return an(e,t,i)}return t.flags|=1,e=On(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rm(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(pi(a,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,an(e,t,i)}return Uc(e,t,n,r,i)}function Am(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Hr,et),et|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Hr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ne(Hr,et),et|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ne(Hr,et),et|=r;return Me(e,t,i,n),t.child}function Dm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uc(e,t,n,r,i){var a=Xe(n)?ur:ze.current;return a=rs(t,a),Yr(t,i),n=Yd(e,t,n,r,a,i),r=Jd(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,an(e,t,i)):(ae&&r&&Md(t),t.flags|=1,Me(e,t,n,i),t.child)}function Tp(e,t,n,r,i){if(Xe(n)){var a=!0;Xa(t)}else a=!1;if(Yr(t,i),t.stateNode===null)Ca(e,t),Cm(t,n,r),Oc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=ut(h):(h=Xe(n)?ur:ze.current,h=rs(t,h));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||d!==h)&&jp(t,l,r,h),yn=!1;var y=t.memoizedState;l.state=y,eo(t,r,l,i),d=t.memoizedState,c!==r||y!==d||Ke.current||yn?(typeof g=="function"&&(Lc(t,n,g,r),d=t.memoizedState),(c=yn||wp(t,n,c,r,y,d,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lm(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:gt(t.type,c),l.props=h,m=t.pendingProps,y=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=ut(d):(d=Xe(n)?ur:ze.current,d=rs(t,d));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||y!==d)&&jp(t,l,r,d),yn=!1,y=t.memoizedState,l.state=y,eo(t,r,l,i);var _=t.memoizedState;c!==m||y!==_||Ke.current||yn?(typeof w=="function"&&(Lc(t,n,w,r),_=t.memoizedState),(h=yn||wp(t,n,h,r,y,_,d)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),l.props=r,l.state=_,l.context=d,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Fc(e,t,n,r,a,i)}function Fc(e,t,n,r,i,a){Dm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&pp(t,n,!1),an(e,t,a);r=t.stateNode,u1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=is(t,e.child,null,a),t.child=is(t,null,c,a)):Me(e,t,c,a),t.memoizedState=r.state,i&&pp(t,n,!0),t.child}function zm(e){var t=e.stateNode;t.pendingContext?hp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hp(e,t.context,!1),qd(e,t.containerInfo)}function Cp(e,t,n,r,i){return ss(),Fd(i),t.flags|=256,Me(e,t,n,r),t.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Bc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lm(e,t,n){var r=t.pendingProps,i=le.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(le,i&1),e===null)return Dc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Oo(l,r,0,null),e=dr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Bc(n),t.memoizedState=$c,e):eu(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return h1(e,t,l,r,c,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=On(i,d),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=On(c,a):(a=dr(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Bc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=$c,r}return a=e.child,e=a.sibling,r=On(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eu(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,n,r){return r!==null&&Fd(r),is(t,e.child,null,n),e=eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h1(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(M(422))),fa(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),a=dr(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&is(t,e.child,null,l),t.child.memoizedState=Bc(l),t.memoizedState=$c,a);if(!(t.mode&1))return fa(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(M(419)),r=Hl(a,r,void 0),fa(e,t,l,r)}if(c=(l&e.childLanes)!==0,Ge||c){if(r=_e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,sn(e,i),wt(r,e,i,-1))}return au(),r=Hl(Error(M(421))),fa(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=N1.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,tt=An(i.nextSibling),nt=t,ae=!0,xt=null,e!==null&&(ot[lt++]=Xt,ot[lt++]=Yt,ot[lt++]=hr,Xt=e.id,Yt=e.overflow,hr=t),t=eu(t,r.children),t.flags|=4096,t)}function Ip(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zc(e.return,t,n)}function Wl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Om(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wl(t,!0,n,null,a);break;case"together":Wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ca(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function p1(e,t,n){switch(t.tag){case 3:zm(t),ss();break;case 5:cm(t);break;case 1:Xe(t.type)&&Xa(t);break;case 4:qd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(Qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Lm(e,t,n):(ne(le,le.current&1),e=an(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Om(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Am(e,t,n)}return an(e,t,n)}var Mm,Vc,Um,Fm;Mm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vc=function(){};Um=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,lr(Pt.current);var a=null;switch(n){case"input":i=uc(e,i),r=uc(e,r),a=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),a=[];break;case"textarea":i=fc(e,i),r=fc(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ga)}mc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ai.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in r){var d=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&d!==c&&(d!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(a=a||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ai.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&se("scroll",e),a||c===d||(a=[])):(a=a||[]).push(h,d))}n&&(a=a||[]).push("style",n);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};Fm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Us(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f1(e,t,n){var r=t.pendingProps;switch(Ud(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&Ka(),Re(t),null;case 3:return r=t.stateNode,as(),ie(Ke),ie(ze),Kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Jc(xt),xt=null))),Vc(e,t),Re(t),null;case 5:Gd(t);var i=lr(vi.current);if(n=t.type,e!==null&&t.stateNode!=null)Um(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Re(t),null}if(e=lr(Pt.current),ha(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Tt]=t,r[mi]=a,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Ws.length;i++)se(Ws[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Uh(r,a),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},se("invalid",r);break;case"textarea":$h(r,a),se("invalid",r)}mc(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&ua(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&ua(r.textContent,c,e),i=["children",""+c]):ai.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&se("scroll",r)}switch(n){case"input":ra(r),Fh(r,a,!0);break;case"textarea":ra(r),Bh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ga)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Tt]=t,e[mi]=r,Mm(e,t,!1,!1),t.stateNode=e;e:{switch(l=xc(n,r),n){case"dialog":se("cancel",e),se("close",e),i=r;break;case"iframe":case"object":case"embed":se("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ws.length;i++)se(Ws[i],e);i=r;break;case"source":se("error",e),i=r;break;case"img":case"image":case"link":se("error",e),se("load",e),i=r;break;case"details":se("toggle",e),i=r;break;case"input":Uh(e,r),i=uc(e,r),se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),se("invalid",e);break;case"textarea":$h(e,r),i=fc(e,r),se("invalid",e);break;default:i=r}mc(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var d=c[a];a==="style"?xg(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&gg(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&oi(e,d):typeof d=="number"&&oi(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ai.hasOwnProperty(a)?d!=null&&a==="onScroll"&&se("scroll",e):d!=null&&kd(e,a,d,l))}switch(n){case"input":ra(e),Fh(e,r,!1);break;case"textarea":ra(e),Bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?qr(e,!!r.multiple,a,!1):r.defaultValue!=null&&qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Fm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=lr(vi.current),lr(Pt.current),ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(a=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:ua(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Re(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&tt!==null&&t.mode&1&&!(t.flags&128))sm(),ss(),t.flags|=98560,a=!1;else if(a=ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(M(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[Tt]=t}else ss(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),a=!1}else xt!==null&&(Jc(xt),xt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?we===0&&(we=3):au())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return as(),Vc(e,t),e===null&&fi(t.stateNode.containerInfo),Re(t),null;case 10:return Vd(t.type._context),Re(t),null;case 17:return Xe(t.type)&&Ka(),Re(t),null;case 19:if(ie(le),a=t.memoizedState,a===null)return Re(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Us(a,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,Us(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}a.tail!==null&&me()>ls&&(t.flags|=128,r=!0,Us(a,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Us(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ae)return Re(t),null}else 2*me()-a.renderingStartTime>ls&&n!==1073741824&&(t.flags|=128,r=!0,Us(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=me(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function g1(e,t){switch(Ud(t),t.tag){case 1:return Xe(t.type)&&Ka(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return as(),ie(Ke),ie(ze),Kd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gd(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return as(),null;case 10:return Vd(t.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var ga=!1,Ae=!1,m1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Hc(e,t,n){try{n()}catch(r){he(e,t,r)}}var Pp=!1;function x1(e,t){if(Sc=Ha,e=Wg(),Od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,h=0,g=0,m=e,y=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==a||r!==0&&m.nodeType!==3||(d=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)y=m,m=w;for(;;){if(m===e)break t;if(y===n&&++h===i&&(c=l),y===a&&++g===r&&(d=l),(w=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=w}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tc={focusedElem:e,selectionRange:n},Ha=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var P=_.memoizedProps,D=_.memoizedState,x=t.stateNode,f=x.getSnapshotBeforeUpdate(t.elementType===t.type?P:gt(t.type,P),D);x.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(I){he(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return _=Pp,Pp=!1,_}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Hc(t,n,a)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $m(e){var t=e.alternate;t!==null&&(e.alternate=null,$m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[mi],delete t[Pc],delete t[Zy],delete t[e1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bm(e){return e.tag===5||e.tag===3||e.tag===4}function Rp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ga));else if(r!==4&&(e=e.child,e!==null))for(qc(e,t,n),e=e.sibling;e!==null;)qc(e,t,n),e=e.sibling}function Gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}var Ne=null,mt=!1;function mn(e,t,n){for(n=n.child;n!==null;)Vm(e,t,n),n=n.sibling}function Vm(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:Ae||Vr(n,t);case 6:var r=Ne,i=mt;Ne=null,mn(e,t,n),Ne=r,mt=i,Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),ui(e)):Ml(Ne,n.stateNode));break;case 4:r=Ne,i=mt,Ne=n.stateNode.containerInfo,mt=!0,mn(e,t,n),Ne=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Hc(n,t,l),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Ae&&(Vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){he(n,t,c)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,mn(e,t,n),Ae=r):mn(e,t,n);break;default:mn(e,t,n)}}function Ap(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m1),t.forEach(function(r){var i=E1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Ne=c.stateNode,mt=!1;break e;case 3:Ne=c.stateNode.containerInfo,mt=!0;break e;case 4:Ne=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Ne===null)throw Error(M(160));Vm(a,l,i),Ne=null,mt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(h){he(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hm(t,e),t=t.sibling}function Hm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),Et(e),r&4){try{ei(3,e,e.return),zo(3,e)}catch(P){he(e,e.return,P)}try{ei(5,e,e.return)}catch(P){he(e,e.return,P)}}break;case 1:ft(t,e),Et(e),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(ft(t,e),Et(e),r&512&&n!==null&&Vr(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(P){he(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&hg(i,a),xc(c,l);var h=xc(c,a);for(l=0;l<d.length;l+=2){var g=d[l],m=d[l+1];g==="style"?xg(i,m):g==="dangerouslySetInnerHTML"?gg(i,m):g==="children"?oi(i,m):kd(i,g,m,h)}switch(c){case"input":hc(i,a);break;case"textarea":pg(i,a);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?qr(i,!!a.multiple,w,!1):y!==!!a.multiple&&(a.defaultValue!=null?qr(i,!!a.multiple,a.defaultValue,!0):qr(i,!!a.multiple,a.multiple?[]:"",!1))}i[mi]=a}catch(P){he(e,e.return,P)}}break;case 6:if(ft(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(P){he(e,e.return,P)}}break;case 3:if(ft(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(P){he(e,e.return,P)}break;case 4:ft(t,e),Et(e);break;case 13:ft(t,e),Et(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ru=me())),r&4&&Ap(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(h=Ae)||g,ft(t,e),Ae=h):ft(t,e),Et(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for($=e,g=e.child;g!==null;){for(m=$=g;$!==null;){switch(y=$,w=y.child,y.tag){case 0:case 11:case 14:case 15:ei(4,y,y.return);break;case 1:Vr(y,y.return);var _=y.stateNode;if(typeof _.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(P){he(r,n,P)}}break;case 5:Vr(y,y.return);break;case 22:if(y.memoizedState!==null){zp(m);continue}}w!==null?(w.return=y,$=w):zp(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=mg("display",l))}catch(P){he(e,e.return,P)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){he(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ft(t,e),Et(e),r&4&&Ap(e);break;case 21:break;default:ft(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var a=Rp(e);Gc(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Rp(e);qc(e,c,l);break;default:throw Error(M(161))}}catch(d){he(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v1(e,t,n){$=e,Wm(e)}function Wm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ga;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||Ae;c=ga;var h=Ae;if(ga=l,(Ae=d)&&!h)for($=i;$!==null;)l=$,d=l.child,l.tag===22&&l.memoizedState!==null?Lp(i):d!==null?(d.return=l,$=d):Lp(i);for(;a!==null;)$=a,Wm(a),a=a.sibling;$=i,ga=c,Ae=h}Dp(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,$=a):Dp(e)}}function Dp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&vp(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&ui(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ae||t.flags&512&&Wc(t)}catch(y){he(t,t.return,y)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function zp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Lp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(d){he(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){he(t,i,d)}}var a=t.return;try{Wc(t)}catch(d){he(t,a,d)}break;case 5:var l=t.return;try{Wc(t)}catch(d){he(t,l,d)}}}catch(d){he(t,t.return,d)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var y1=Math.ceil,so=cn.ReactCurrentDispatcher,tu=cn.ReactCurrentOwner,dt=cn.ReactCurrentBatchConfig,K=0,_e=null,ve=null,Ee=0,et=0,Hr=Xn(0),we=0,ji=null,fr=0,Lo=0,nu=0,ti=null,He=null,ru=0,ls=1/0,qt=null,io=!1,Kc=null,zn=null,ma=!1,Sn=null,ao=0,ni=0,Xc=null,Ia=-1,Pa=0;function Fe(){return K&6?me():Ia!==-1?Ia:Ia=me()}function Ln(e){return e.mode&1?K&2&&Ee!==0?Ee&-Ee:n1.transition!==null?(Pa===0&&(Pa=Cg()),Pa):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Lg(e.type)),e):1}function wt(e,t,n,r){if(50<ni)throw ni=0,Xc=null,Error(M(185));Ti(e,n,r),(!(K&2)||e!==_e)&&(e===_e&&(!(K&2)&&(Lo|=n),we===4&&wn(e,Ee)),Ye(e,r),n===1&&K===0&&!(t.mode&1)&&(ls=me()+500,Ro&&Yn()))}function Ye(e,t){var n=e.callbackNode;ny(e,t);var r=Va(e,e===_e?Ee:0);if(r===0)n!==null&&Wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wh(n),t===1)e.tag===0?t1(Op.bind(null,e)):tm(Op.bind(null,e)),Jy(function(){!(K&6)&&Yn()}),n=null;else{switch(Ig(r)){case 1:n=Cd;break;case 4:n=Sg;break;case 16:n=Ba;break;case 536870912:n=Tg;break;default:n=Ba}n=Zm(n,qm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qm(e,t){if(Ia=-1,Pa=0,K&6)throw Error(M(327));var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var r=Va(e,e===_e?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=K;K|=2;var a=Km();(_e!==e||Ee!==t)&&(qt=null,ls=me()+500,cr(e,t));do try{j1();break}catch(c){Gm(e,c)}while(!0);Bd(),so.current=a,K=i,ve!==null?t=0:(_e=null,Ee=0,t=we)}if(t!==0){if(t===2&&(i=jc(e),i!==0&&(r=i,t=Yc(e,i))),t===1)throw n=ji,cr(e,0),wn(e,r),Ye(e,me()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!b1(i)&&(t=oo(e,r),t===2&&(a=jc(e),a!==0&&(r=a,t=Yc(e,a))),t===1))throw n=ji,cr(e,0),wn(e,r),Ye(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:sr(e,He,qt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=ru+500-me(),10<t)){if(Va(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ic(sr.bind(null,e,He,qt),t);break}sr(e,He,qt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-bt(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*y1(r/1960))-r,10<r){e.timeoutHandle=Ic(sr.bind(null,e,He,qt),r);break}sr(e,He,qt);break;case 5:sr(e,He,qt);break;default:throw Error(M(329))}}}return Ye(e,me()),e.callbackNode===n?qm.bind(null,e):null}function Yc(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&(cr(e,t).flags|=256),e=oo(e,t),e!==2&&(t=He,He=n,t!==null&&Jc(t)),e}function Jc(e){He===null?He=e:He.push.apply(He,e)}function b1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~nu,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Op(e){if(K&6)throw Error(M(327));Jr();var t=Va(e,0);if(!(t&1))return Ye(e,me()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=jc(e);r!==0&&(t=r,n=Yc(e,r))}if(n===1)throw n=ji,cr(e,0),wn(e,t),Ye(e,me()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,He,qt),Ye(e,me()),null}function su(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(ls=me()+500,Ro&&Yn())}}function gr(e){Sn!==null&&Sn.tag===0&&!(K&6)&&Jr();var t=K;K|=1;var n=dt.transition,r=Q;try{if(dt.transition=null,Q=1,e)return e()}finally{Q=r,dt.transition=n,K=t,!(K&6)&&Yn()}}function iu(){et=Hr.current,ie(Hr)}function cr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yy(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ka();break;case 3:as(),ie(Ke),ie(ze),Kd();break;case 5:Gd(r);break;case 4:as();break;case 13:ie(le);break;case 19:ie(le);break;case 10:Vd(r.type._context);break;case 22:case 23:iu()}n=n.return}if(_e=e,ve=e=On(e.current,null),Ee=et=t,we=0,ji=null,nu=Lo=fr=0,He=ti=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}or=null}return e}function Gm(e,t){do{var n=ve;try{if(Bd(),Sa.current=ro,no){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(pr=0,je=be=ce=null,Zs=!1,yi=0,tu.current=null,n===null||n.return===null){we=1,ji=t,ve=null;break}e:{var a=e,l=n.return,c=n,d=t;if(t=Ee,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=kp(l);if(w!==null){w.flags&=-257,Np(w,l,c,a,t),w.mode&1&&_p(a,h,t),t=w,d=h;var _=t.updateQueue;if(_===null){var P=new Set;P.add(d),t.updateQueue=P}else _.add(d);break e}else{if(!(t&1)){_p(a,h,t),au();break e}d=Error(M(426))}}else if(ae&&c.mode&1){var D=kp(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Np(D,l,c,a,t),Fd(os(d,c));break e}}a=d=os(d,c),we!==4&&(we=2),ti===null?ti=[a]:ti.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Im(a,d,t);xp(a,x);break e;case 1:c=d;var f=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zn===null||!zn.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var I=Pm(a,c,t);xp(a,I);break e}}a=a.return}while(a!==null)}Ym(n)}catch(N){t=N,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Km(){var e=so.current;return so.current=ro,e===null?ro:e}function au(){(we===0||we===3||we===2)&&(we=4),_e===null||!(fr&268435455)&&!(Lo&268435455)||wn(_e,Ee)}function oo(e,t){var n=K;K|=2;var r=Km();(_e!==e||Ee!==t)&&(qt=null,cr(e,t));do try{w1();break}catch(i){Gm(e,i)}while(!0);if(Bd(),K=n,so.current=r,ve!==null)throw Error(M(261));return _e=null,Ee=0,we}function w1(){for(;ve!==null;)Xm(ve)}function j1(){for(;ve!==null&&!Gv();)Xm(ve)}function Xm(e){var t=Qm(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Ym(e):ve=t,tu.current=null}function Ym(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=g1(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=f1(n,t,et),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function sr(e,t,n){var r=Q,i=dt.transition;try{dt.transition=null,Q=1,_1(e,t,n,r)}finally{dt.transition=i,Q=r}return null}function _1(e,t,n,r){do Jr();while(Sn!==null);if(K&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ry(e,a),e===_e&&(ve=_e=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,Zm(Ba,function(){return Jr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=dt.transition,dt.transition=null;var l=Q;Q=1;var c=K;K|=4,tu.current=null,x1(e,n),Hm(n,e),Vy(Tc),Ha=!!Sc,Tc=Sc=null,e.current=n,v1(n),Kv(),K=c,Q=l,dt.transition=a}else e.current=n;if(ma&&(ma=!1,Sn=e,ao=i),a=e.pendingLanes,a===0&&(zn=null),Jv(n.stateNode),Ye(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=Kc,Kc=null,e;return ao&1&&e.tag!==0&&Jr(),a=e.pendingLanes,a&1?e===Xc?ni++:(ni=0,Xc=e):ni=0,Yn(),null}function Jr(){if(Sn!==null){var e=Ig(ao),t=dt.transition,n=Q;try{if(dt.transition=null,Q=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,ao=0,K&6)throw Error(M(331));var i=K;for(K|=4,$=e.current;$!==null;){var a=$,l=a.child;if($.flags&16){var c=a.deletions;if(c!==null){for(var d=0;d<c.length;d++){var h=c[d];for($=h;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:ei(8,g,a)}var m=g.child;if(m!==null)m.return=g,$=m;else for(;$!==null;){g=$;var y=g.sibling,w=g.return;if($m(g),g===h){$=null;break}if(y!==null){y.return=w,$=y;break}$=w}}}var _=a.alternate;if(_!==null){var P=_.child;if(P!==null){_.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}$=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,$=l;else e:for(;$!==null;){if(a=$,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ei(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,$=x;break e}$=a.return}}var f=e.current;for($=f;$!==null;){l=$;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,$=v;else e:for(l=f;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:zo(9,c)}}catch(N){he(c,c.return,N)}if(c===l){$=null;break e}var I=c.sibling;if(I!==null){I.return=c.return,$=I;break e}$=c.return}}if(K=i,Yn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{Q=n,dt.transition=t}}return!1}function Mp(e,t,n){t=os(n,t),t=Im(e,t,1),e=Dn(e,t,1),t=Fe(),e!==null&&(Ti(e,1,t),Ye(e,t))}function he(e,t,n){if(e.tag===3)Mp(e,e,n);else for(;t!==null;){if(t.tag===3){Mp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=os(n,e),e=Pm(t,e,1),t=Dn(t,e,1),e=Fe(),t!==null&&(Ti(t,1,e),Ye(t,e));break}}t=t.return}}function k1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>me()-ru?cr(e,0):nu|=n),Ye(e,t)}function Jm(e,t){t===0&&(e.mode&1?(t=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):t=1);var n=Fe();e=sn(e,t),e!==null&&(Ti(e,t,n),Ye(e,n))}function N1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function E1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Jm(e,n)}var Qm;Qm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,p1(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,ae&&t.flags&1048576&&nm(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ca(e,t),e=t.pendingProps;var i=rs(t,ze.current);Yr(t,n),i=Yd(null,t,r,e,i,n);var a=Jd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(a=!0,Xa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wd(t),i.updater=Do,t.stateNode=i,i._reactInternals=t,Oc(t,r,e,n),t=Fc(null,t,r,!0,a,n)):(t.tag=0,ae&&a&&Md(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ca(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T1(r),e=gt(r,e),i){case 0:t=Uc(null,t,r,e,n);break e;case 1:t=Tp(null,t,r,e,n);break e;case 11:t=Ep(null,t,r,e,n);break e;case 14:t=Sp(null,t,r,gt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Uc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Tp(e,t,r,i,n);case 3:e:{if(zm(t),e===null)throw Error(M(387));r=t.pendingProps,a=t.memoizedState,i=a.element,lm(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=os(Error(M(423)),t),t=Cp(e,t,r,n,i);break e}else if(r!==i){i=os(Error(M(424)),t),t=Cp(e,t,r,n,i);break e}else for(tt=An(t.stateNode.containerInfo.firstChild),nt=t,ae=!0,xt=null,n=am(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){t=an(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return cm(t),e===null&&Dc(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Cc(r,i)?l=null:a!==null&&Cc(r,a)&&(t.flags|=32),Dm(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Dc(t),null;case 13:return Lm(e,t,n);case 4:return qd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=is(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Ep(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ne(Qa,r._currentValue),r._currentValue=l,a!==null)if(jt(a.value,l)){if(a.children===i.children&&!Ke.current){t=an(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=en(-1,n&-n),d.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?d.next=d:(d.next=g.next,g.next=d),h.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),zc(a.return,n,t),c.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),zc(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yr(t,n),i=ut(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),Sp(e,t,r,i,n);case 15:return Rm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),Ca(e,t),t.tag=1,Xe(r)?(e=!0,Xa(t)):e=!1,Yr(t,n),Cm(t,r,i),Oc(t,r,i,n),Fc(null,t,r,!0,e,n);case 19:return Om(e,t,n);case 22:return Am(e,t,n)}throw Error(M(156,t.tag))};function Zm(e,t){return Eg(e,t)}function S1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new S1(e,t,n,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T1(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ed)return 11;if(e===Sd)return 14}return 2}function On(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ra(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")ou(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dr:return dr(n.children,i,a,t);case Nd:l=8,i|=8;break;case oc:return e=ct(12,n,t,i|2),e.elementType=oc,e.lanes=a,e;case lc:return e=ct(13,n,t,i),e.elementType=lc,e.lanes=a,e;case cc:return e=ct(19,n,t,i),e.elementType=cc,e.lanes=a,e;case cg:return Oo(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case og:l=10;break e;case lg:l=9;break e;case Ed:l=11;break e;case Sd:l=14;break e;case vn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ct(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function dr(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=ct(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lu(e,t,n,r,i,a,l,c,d){return e=new C1(e,t,n,c,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ct(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(a),e}function I1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ex(e){if(!e)return Bn;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return em(e,n,t)}return t}function tx(e,t,n,r,i,a,l,c,d){return e=lu(n,r,!0,e,i,a,l,c,d),e.context=ex(null),n=e.current,r=Fe(),i=Ln(n),a=en(r,i),a.callback=t??null,Dn(n,a,i),e.current.lanes=i,Ti(e,i,r),Ye(e,r),e}function Mo(e,t,n,r){var i=t.current,a=Fe(),l=Ln(i);return n=ex(n),t.context===null?t.context=n:t.pendingContext=n,t=en(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dn(i,t,l),e!==null&&(wt(e,i,l,a),Ea(e,i,l)),l}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){Up(e,t),(e=e.alternate)&&Up(e,t)}function P1(){return null}var nx=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}Uo.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Mo(e,t,null,null)};Uo.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){Mo(null,e,null,null)}),t[rn]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ag();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bn.length&&t!==0&&t<bn[n].priority;n++);bn.splice(n,0,e),n===0&&zg(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function R1(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var h=lo(l);a.call(h)}}var l=tx(t,r,e,0,null,!1,!1,"",Fp);return e._reactRootContainer=l,e[rn]=l.current,fi(e.nodeType===8?e.parentNode:e),gr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=lo(d);c.call(h)}}var d=lu(e,0,!1,null,null,!1,!1,"",Fp);return e._reactRootContainer=d,e[rn]=d.current,fi(e.nodeType===8?e.parentNode:e),gr(function(){Mo(t,d,n,r)}),d}function $o(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var c=i;i=function(){var d=lo(l);c.call(d)}}Mo(t,l,e,i)}else l=R1(n,t,e,i,r);return lo(l)}Pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hs(t.pendingLanes);n!==0&&(Id(t,n|1),Ye(t,me()),!(K&6)&&(ls=me()+500,Yn()))}break;case 13:gr(function(){var r=sn(e,1);if(r!==null){var i=Fe();wt(r,e,1,i)}}),cu(e,1)}};Pd=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=Fe();wt(t,e,134217728,n)}cu(e,134217728)}};Rg=function(e){if(e.tag===13){var t=Ln(e),n=sn(e,t);if(n!==null){var r=Fe();wt(n,e,t,r)}cu(e,t)}};Ag=function(){return Q};Dg=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};yc=function(e,t,n){switch(t){case"input":if(hc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Po(r);if(!i)throw Error(M(90));ug(r),hc(r,i)}}}break;case"textarea":pg(e,n);break;case"select":t=n.value,t!=null&&qr(e,!!n.multiple,t,!1)}};bg=su;wg=gr;var A1={usingClientEntryPoint:!1,Events:[Ii,Mr,Po,vg,yg,su]},Fs={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D1={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kg(e),e===null?null:e.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xa.isDisabled&&xa.supportsFiber)try{So=xa.inject(D1),It=xa}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(t))throw Error(M(200));return I1(e,t,null,n)};st.createRoot=function(e,t){if(!uu(e))throw Error(M(299));var n=!1,r="",i=nx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lu(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,fi(e.nodeType===8?e.parentNode:e),new du(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=kg(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return gr(e)};st.hydrate=function(e,t,n){if(!Fo(t))throw Error(M(200));return $o(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!uu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=nx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tx(t,null,e,1,n??null,i,!1,a,l),e[rn]=t.current,fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};st.render=function(e,t,n){if(!Fo(t))throw Error(M(200));return $o(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Fo(e))throw Error(M(40));return e._reactRootContainer?(gr(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};st.unstable_batchedUpdates=su;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fo(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return $o(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(e){console.error(e)}}rx(),rg.exports=st;var z1=rg.exports,$p=z1;ic.createRoot=$p.createRoot,ic.hydrateRoot=$p.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const Bp="popstate";function L1(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:c}=r.location;return Qc("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return M1(t,n,null,e)}function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O1(){return Math.random().toString(36).substr(2,8)}function Vp(e,t){return{usr:e.state,key:e.key,idx:t}}function Qc(e,t,n,r){return n===void 0&&(n=null),_i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ms(t):t,{state:n,key:t&&t.key||r||O1()})}function co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ms(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c=Tn.Pop,d=null,h=g();h==null&&(h=0,l.replaceState(_i({},l.state,{idx:h}),""));function g(){return(l.state||{idx:null}).idx}function m(){c=Tn.Pop;let D=g(),x=D==null?null:D-h;h=D,d&&d({action:c,location:P.location,delta:x})}function y(D,x){c=Tn.Push;let f=Qc(P.location,D,x);h=g()+1;let v=Vp(f,h),I=P.createHref(f);try{l.pushState(v,"",I)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(I)}a&&d&&d({action:c,location:P.location,delta:1})}function w(D,x){c=Tn.Replace;let f=Qc(P.location,D,x);h=g();let v=Vp(f,h),I=P.createHref(f);l.replaceState(v,"",I),a&&d&&d({action:c,location:P.location,delta:0})}function _(D){let x=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof D=="string"?D:co(D);return f=f.replace(/ $/,"%20"),xe(x,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,x)}let P={get action(){return c},get location(){return e(i,l)},listen(D){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Bp,m),d=D,()=>{i.removeEventListener(Bp,m),d=null}},createHref(D){return t(i,D)},createURL:_,encodeLocation(D){let x=_(D);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:w,go(D){return l.go(D)}};return P}var Hp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hp||(Hp={}));function U1(e,t,n){return n===void 0&&(n="/"),F1(e,t,n)}function F1(e,t,n,r){let i=typeof t=="string"?ms(t):t,a=pu(i.pathname||"/",n);if(a==null)return null;let l=sx(e);$1(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let h=Z1(a);c=Y1(l[d],h)}return c}function sx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(xe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let h=Mn([r,d.relativePath]),g=n.concat(d);a.children&&a.children.length>0&&(xe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),sx(a.children,t,g,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:K1(h,a.index),routesMeta:g})};return e.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let d of ix(a.path))i(a,l,d)}),t}function ix(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=ix(r.join("/")),c=[];return c.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function $1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:X1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const B1=/^:[\w-]+$/,V1=3,H1=2,W1=1,q1=10,G1=-2,Wp=e=>e==="*";function K1(e,t){let n=e.split("/"),r=n.length;return n.some(Wp)&&(r+=G1),t&&(r+=H1),n.filter(i=>!Wp(i)).reduce((i,a)=>i+(B1.test(a)?V1:a===""?W1:q1),r)}function X1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Y1(e,t,n){let{routesMeta:r}=e,i={},a="/",l=[];for(let c=0;c<r.length;++c){let d=r[c],h=c===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",m=J1({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},g),y=d.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:Mn([a,m.pathname]),pathnameBase:sb(Mn([a,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(a=Mn([a,m.pathnameBase]))}return l}function J1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Q1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,g,m)=>{let{paramName:y,isOptional:w}=g;if(y==="*"){let P=c[m]||"";l=a.slice(0,a.length-P.length).replace(/(.)\/+$/,"$1")}const _=c[m];return w&&!_?h[y]=void 0:h[y]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:e}}function Q1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(r.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Z1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const eb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tb=e=>eb.test(e);function nb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ms(e):e,a;if(n)if(tb(n))a=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),hu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?a=qp(n.substring(1),"/"):a=qp(n,t)}else a=t;return{pathname:a,search:ib(r),hash:ab(i)}}function qp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fu(e,t){let n=rb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function gu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ms(e):(i=_i({},e),xe(!i.pathname||!i.pathname.includes("?"),Kl("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),Kl("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),Kl("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}c=m>=0?t[m]:"/"}let d=nb(i,c),h=l&&l!=="/"&&l.endsWith("/"),g=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||g)&&(d.pathname+="/"),d}const Mn=e=>e.join("/").replace(/\/\/+/g,"/"),sb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ib=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ab=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ob(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ax=["post","put","patch","delete"];new Set(ax);const lb=["get",...ax];new Set(lb);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}const mu=T.createContext(null),cb=T.createContext(null),Jn=T.createContext(null),Bo=T.createContext(null),dn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),ox=T.createContext(null);function db(e,t){let{relative:n}=t===void 0?{}:t;xs()||xe(!1);let{basename:r,navigator:i}=T.useContext(Jn),{hash:a,pathname:l,search:c}=dx(e,{relative:n}),d=l;return r!=="/"&&(d=l==="/"?r:Mn([r,l])),i.createHref({pathname:d,search:c,hash:a})}function xs(){return T.useContext(Bo)!=null}function un(){return xs()||xe(!1),T.useContext(Bo).location}function lx(e){T.useContext(Jn).static||T.useLayoutEffect(e)}function kt(){let{isDataRoute:e}=T.useContext(dn);return e?_b():ub()}function ub(){xs()||xe(!1);let e=T.useContext(mu),{basename:t,future:n,navigator:r}=T.useContext(Jn),{matches:i}=T.useContext(dn),{pathname:a}=un(),l=JSON.stringify(fu(i,n.v7_relativeSplatPath)),c=T.useRef(!1);return lx(()=>{c.current=!0}),T.useCallback(function(h,g){if(g===void 0&&(g={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=gu(h,JSON.parse(l),a,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Mn([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,l,a,e])}function cx(){let{matches:e}=T.useContext(dn),t=e[e.length-1];return t?t.params:{}}function dx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Jn),{matches:i}=T.useContext(dn),{pathname:a}=un(),l=JSON.stringify(fu(i,r.v7_relativeSplatPath));return T.useMemo(()=>gu(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function hb(e,t){return pb(e,t)}function pb(e,t,n,r){xs()||xe(!1);let{navigator:i}=T.useContext(Jn),{matches:a}=T.useContext(dn),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let h=un(),g;if(t){var m;let D=typeof t=="string"?ms(t):t;d==="/"||(m=D.pathname)!=null&&m.startsWith(d)||xe(!1),g=D}else g=h;let y=g.pathname||"/",w=y;if(d!=="/"){let D=d.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(D.length).join("/")}let _=U1(e,{pathname:w}),P=vb(_&&_.map(D=>Object.assign({},D,{params:Object.assign({},c,D.params),pathname:Mn([d,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?d:Mn([d,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),a,n,r);return t&&P?T.createElement(Bo.Provider,{value:{location:ki({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Tn.Pop}},P):P}function fb(){let e=jb(),t=ob(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const gb=T.createElement(fb,null);class mb extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(dn.Provider,{value:this.props.routeContext},T.createElement(ox.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xb(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(mu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(dn.Provider,{value:t},r)}function vb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let g=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);g>=0||xe(!1),l=l.slice(0,Math.min(l.length,g+1))}let d=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=g),m.route.id){let{loaderData:y,errors:w}=n,_=m.route.loader&&y[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||_){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((g,m,y)=>{let w,_=!1,P=null,D=null;n&&(w=c&&m.route.id?c[m.route.id]:void 0,P=m.route.errorElement||gb,d&&(h<0&&y===0?(kb("route-fallback"),_=!0,D=null):h===y&&(_=!0,D=m.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,y+1)),f=()=>{let v;return w?v=P:_?v=D:m.route.Component?v=T.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=g,T.createElement(xb,{match:m,routeContext:{outlet:g,matches:x,isDataRoute:n!=null},children:v})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?T.createElement(mb,{location:n.location,revalidation:n.revalidation,component:P,error:w,children:f(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):f()},null)}var ux=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ux||{}),hx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hx||{});function yb(e){let t=T.useContext(mu);return t||xe(!1),t}function bb(e){let t=T.useContext(cb);return t||xe(!1),t}function wb(e){let t=T.useContext(dn);return t||xe(!1),t}function px(e){let t=wb(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function jb(){var e;let t=T.useContext(ox),n=bb(),r=px();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _b(){let{router:e}=yb(ux.UseNavigateStable),t=px(hx.UseNavigateStable),n=T.useRef(!1);return lx(()=>{n.current=!0}),T.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ki({fromRouteId:t},a)))},[e,t])}const Gp={};function kb(e,t,n){Gp[e]||(Gp[e]=!0)}function Nb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Aa(e){let{to:t,replace:n,state:r,relative:i}=e;xs()||xe(!1);let{future:a,static:l}=T.useContext(Jn),{matches:c}=T.useContext(dn),{pathname:d}=un(),h=kt(),g=gu(t,fu(c,a.v7_relativeSplatPath),d,i==="path"),m=JSON.stringify(g);return T.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:i}),[h,m,i,n,r]),null}function Y(e){xe(!1)}function Eb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:a,static:l=!1,future:c}=e;xs()&&xe(!1);let d=t.replace(/^\/*/,"/"),h=T.useMemo(()=>({basename:d,navigator:a,static:l,future:ki({v7_relativeSplatPath:!1},c)}),[d,c,a,l]);typeof r=="string"&&(r=ms(r));let{pathname:g="/",search:m="",hash:y="",state:w=null,key:_="default"}=r,P=T.useMemo(()=>{let D=pu(g,d);return D==null?null:{location:{pathname:D,search:m,hash:y,state:w,key:_},navigationType:i}},[d,g,m,y,w,_,i]);return P==null?null:T.createElement(Jn.Provider,{value:h},T.createElement(Bo.Provider,{children:n,value:P}))}function Kp(e){let{children:t,location:n}=e;return hb(Zc(t),n)}new Promise(()=>{});function Zc(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let a=[...t,i];if(r.type===T.Fragment){n.push.apply(n,Zc(r.props.children,a));return}r.type!==Y&&xe(!1),!r.props.index||!r.props.children||xe(!1);let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Zc(r.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ed(){return ed=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ed.apply(this,arguments)}function Sb(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Tb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Cb(e,t){return e.button===0&&(!t||t==="_self")&&!Tb(e)}function td(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Ib(e,t){let n=td(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const Pb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rb="6";try{window.__reactRouterVersion=Rb}catch{}const Ab="startTransition",Xp=kv[Ab];function Db(e){let{basename:t,children:n,future:r,window:i}=e,a=T.useRef();a.current==null&&(a.current=L1({window:i,v5Compat:!0}));let l=a.current,[c,d]=T.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},g=T.useCallback(m=>{h&&Xp?Xp(()=>d(m)):d(m)},[d,h]);return T.useLayoutEffect(()=>l.listen(g),[l,g]),T.useEffect(()=>Nb(r),[r]),T.createElement(Eb,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:l,state:c,target:d,to:h,preventScrollReset:g,viewTransition:m}=t,y=Sb(t,Pb),{basename:w}=T.useContext(Jn),_,P=!1;if(typeof h=="string"&&Lb.test(h)&&(_=h,zb))try{let v=new URL(window.location.href),I=h.startsWith("//")?new URL(v.protocol+h):new URL(h),N=pu(I.pathname,w);I.origin===v.origin&&N!=null?h=N+I.search+I.hash:P=!0}catch{}let D=db(h,{relative:i}),x=Ob(h,{replace:l,state:c,target:d,preventScrollReset:g,relative:i,viewTransition:m});function f(v){r&&r(v),v.defaultPrevented||x(v)}return T.createElement("a",ed({},y,{href:_||D,onClick:P||a?r:f,ref:n,target:d}))});var Yp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yp||(Yp={}));var Jp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jp||(Jp={}));function Ob(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:l,viewTransition:c}=t===void 0?{}:t,d=kt(),h=un(),g=dx(e,{relative:l});return T.useCallback(m=>{if(Cb(m,n)){m.preventDefault();let y=r!==void 0?r:co(h)===co(g);d(e,{replace:y,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[h,d,g,r,i,n,e,a,l,c])}function Mb(e){let t=T.useRef(td(e)),n=T.useRef(!1),r=un(),i=T.useMemo(()=>Ib(r.search,n.current?null:t.current),[r.search]),a=kt(),l=T.useCallback((c,d)=>{const h=td(typeof c=="function"?c(i):c);n.current=!0,a("?"+h,d)},[a,i]);return[i,l]}const fx=T.createContext(void 0),pe=()=>{const e=T.useContext(fx);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},Ub=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},Fb=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},$b=({children:e})=>{const[t,n]=T.useState(null),[r,i]=T.useState(!0),[a,l]=T.useState(null),c=async()=>{try{i(!0),l(null);const{type:h,value:g}=Fb(),m=h==="subdomain"?`/api/tenants/by-subdomain/${g}`:`/api/tenants/by-domain/${encodeURIComponent(g)}`,y=await fetch(`http://localhost:3001${m}`);if(!y.ok)throw y.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const w=await y.json();if(w.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(w.status==="cancelled")throw new Error("Cuenta cancelada.");n(w),Ub(w.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{i(!1)}};T.useEffect(()=>{c()},[]);const d=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return s.jsx(fx.Provider,{value:{tenant:t,loading:r,error:a,isWhiteLabel:d,refreshTenant:c},children:e})};var Qp={};/**
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
 */const gx=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Bb=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],l=e[n++],c=e[n++],d=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const a=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return t.join("")},mx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],l=i+1<e.length,c=l?e[i+1]:0,d=i+2<e.length,h=d?e[i+2]:0,g=a>>2,m=(a&3)<<4|c>>4;let y=(c&15)<<2|h>>6,w=h&63;d||(w=64,l||(y=64)),r.push(n[g],n[m],n[y],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gx(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Bb(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||c==null||h==null||m==null)throw new Vb;const y=a<<2|c>>4;if(r.push(y),h!==64){const w=c<<4&240|h>>2;if(r.push(w),m!==64){const _=h<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Vb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hb=function(e){const t=gx(e);return mx.encodeByteArray(t,!0)},uo=function(e){return Hb(e).replace(/\./g,"")},xx=function(e){try{return mx.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qb=()=>Wb().__FIREBASE_DEFAULTS__,Gb=()=>{if(typeof process>"u"||typeof Qp>"u")return;const e=Qp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kb=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xx(e[1]);return t&&JSON.parse(t)},xu=()=>{try{return qb()||Gb()||Kb()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vx=e=>{var t,n;return(n=(t=xu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yx=e=>{const t=vx(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},bx=()=>{var e;return(e=xu())===null||e===void 0?void 0:e.config},wx=e=>{var t;return(t=xu())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Xb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function jx(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},e);return[uo(JSON.stringify(n)),uo(JSON.stringify(l)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Jb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qb(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Zb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e2(){const e=$e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function t2(){try{return typeof indexedDB=="object"}catch{return!1}}function n2(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const r2="FirebaseError";class Lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=r2,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],l=a?s2(a,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Lt(i,c,r)}}function s2(e,t){return e.replace(i2,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const i2=/\{\$([^}]+)}/g;function a2(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ho(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],l=t[i];if(Zp(a)&&Zp(l)){if(!ho(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zp(e){return e!==null&&typeof e=="object"}/**
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
 */function Ai(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function qs(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Gs(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function o2(e,t){const n=new l2(e,t);return n.subscribe.bind(n)}class l2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");c2(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Xl),i.error===void 0&&(i.error=Xl),i.complete===void 0&&(i.complete=Xl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Xl(){}/**
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
 */function Nt(e){return e&&e._delegate?e._delegate:e}class Vn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class d2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(h2(t))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=ir){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ir){return this.instances.has(t)}getOptions(t=ir){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&t(l,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u2(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ir){return this.component?this.component.multipleInstances?t:ir:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u2(e){return e===ir?void 0:e}function h2(e){return e.instantiationMode==="EAGER"}/**
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
 */class p2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new d2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const f2={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},g2=J.INFO,m2={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},x2=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=m2[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vu{constructor(t){this.name=t,this._logLevel=g2,this._logHandler=x2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?f2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const v2=(e,t)=>t.some(n=>e instanceof n);let ef,tf;function y2(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b2(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _x=new WeakMap,nd=new WeakMap,kx=new WeakMap,Yl=new WeakMap,yu=new WeakMap;function w2(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{n(Un(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&_x.set(n,e)}).catch(()=>{}),yu.set(t,e),t}function j2(e){if(nd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});nd.set(e,t)}let rd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kx.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _2(e){rd=e(rd)}function k2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Jl(this),t,...n);return kx.set(r,t.sort?t.sort():[t]),Un(r)}:b2().includes(e)?function(...t){return e.apply(Jl(this),t),Un(_x.get(this))}:function(...t){return Un(e.apply(Jl(this),t))}}function N2(e){return typeof e=="function"?k2(e):(e instanceof IDBTransaction&&j2(e),v2(e,y2())?new Proxy(e,rd):e)}function Un(e){if(e instanceof IDBRequest)return w2(e);if(Yl.has(e))return Yl.get(e);const t=N2(e);return t!==e&&(Yl.set(e,t),yu.set(t,e)),t}const Jl=e=>yu.get(e);function E2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(e,t),c=Un(l);return r&&l.addEventListener("upgradeneeded",d=>{r(Un(l.result),d.oldVersion,d.newVersion,Un(l.transaction),d)}),n&&l.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),c.then(d=>{a&&d.addEventListener("close",()=>a()),i&&d.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const S2=["get","getKey","getAll","getAllKeys","count"],T2=["put","add","delete","clear"],Ql=new Map;function nf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ql.get(t))return Ql.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=T2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||S2.includes(n)))return;const a=async function(l,...c){const d=this.transaction(l,i?"readwrite":"readonly");let h=d.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&d.done]))[0]};return Ql.set(t,a),a}_2(e=>({...e,get:(t,n,r)=>nf(t,n)||e.get(t,n,r),has:(t,n)=>!!nf(t,n)||e.has(t,n)}));/**
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
 */class C2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function I2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sd="@firebase/app",rf="0.10.13";/**
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
 */const on=new vu("@firebase/app"),P2="@firebase/app-compat",R2="@firebase/analytics-compat",A2="@firebase/analytics",D2="@firebase/app-check-compat",z2="@firebase/app-check",L2="@firebase/auth",O2="@firebase/auth-compat",M2="@firebase/database",U2="@firebase/data-connect",F2="@firebase/database-compat",$2="@firebase/functions",B2="@firebase/functions-compat",V2="@firebase/installations",H2="@firebase/installations-compat",W2="@firebase/messaging",q2="@firebase/messaging-compat",G2="@firebase/performance",K2="@firebase/performance-compat",X2="@firebase/remote-config",Y2="@firebase/remote-config-compat",J2="@firebase/storage",Q2="@firebase/storage-compat",Z2="@firebase/firestore",ew="@firebase/vertexai-preview",tw="@firebase/firestore-compat",nw="firebase",rw="10.14.1";/**
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
 */const id="[DEFAULT]",sw={[sd]:"fire-core",[P2]:"fire-core-compat",[A2]:"fire-analytics",[R2]:"fire-analytics-compat",[z2]:"fire-app-check",[D2]:"fire-app-check-compat",[L2]:"fire-auth",[O2]:"fire-auth-compat",[M2]:"fire-rtdb",[U2]:"fire-data-connect",[F2]:"fire-rtdb-compat",[$2]:"fire-fn",[B2]:"fire-fn-compat",[V2]:"fire-iid",[H2]:"fire-iid-compat",[W2]:"fire-fcm",[q2]:"fire-fcm-compat",[G2]:"fire-perf",[K2]:"fire-perf-compat",[X2]:"fire-rc",[Y2]:"fire-rc-compat",[J2]:"fire-gcs",[Q2]:"fire-gcs-compat",[Z2]:"fire-fst",[tw]:"fire-fst-compat",[ew]:"fire-vertex","fire-js":"fire-js",[nw]:"fire-js-all"};/**
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
 */const po=new Map,iw=new Map,ad=new Map;function sf(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mr(e){const t=e.name;if(ad.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;ad.set(t,e);for(const n of po.values())sf(n,e);for(const n of iw.values())sf(n,e);return!0}function Vo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ct(e){return e.settings!==void 0}/**
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
 */const aw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Ri("app","Firebase",aw);/**
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
 */class ow{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
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
 */const Er=rw;function Nx(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:id,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=bx()),!n)throw Fn.create("no-options");const a=po.get(i);if(a){if(ho(n,a.options)&&ho(r,a.config))return a;throw Fn.create("duplicate-app",{appName:i})}const l=new p2(i);for(const d of ad.values())l.addComponent(d);const c=new ow(n,r,l);return po.set(i,c),c}function bu(e=id){const t=po.get(e);if(!t&&e===id&&bx())return Nx();if(!t)throw Fn.create("no-app",{appName:e});return t}function Rt(e,t,n){var r;let i=(r=sw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${t}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}mr(new Vn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const lw="firebase-heartbeat-database",cw=1,Ni="firebase-heartbeat-store";let Zl=null;function Ex(){return Zl||(Zl=E2(lw,cw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(e=>{throw Fn.create("idb-open",{originalErrorMessage:e.message})})),Zl}async function dw(e){try{const n=(await Ex()).transaction(Ni),r=await n.objectStore(Ni).get(Sx(e));return await n.done,r}catch(t){if(t instanceof Lt)on.warn(t.message);else{const n=Fn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function af(e,t){try{const r=(await Ex()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(t,Sx(e)),await r.done}catch(n){if(n instanceof Lt)on.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function Sx(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uw=1024,hw=30*24*60*60*1e3;class pw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=of();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=hw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=of(),{heartbeatsToSend:r,unsentEntries:i}=fw(this._heartbeatsCache.heartbeats),a=uo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return on.warn(n),""}}}function of(){return new Date().toISOString().substring(0,10)}function fw(e,t=uw){const n=[];let r=e.slice();for(const i of e){const a=n.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),lf(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t2()?n2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return af(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function lf(e){return uo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function mw(e){mr(new Vn("platform-logger",t=>new C2(t),"PRIVATE")),mr(new Vn("heartbeat",t=>new pw(t),"PRIVATE")),Rt(sd,rf,e),Rt(sd,rf,"esm2017"),Rt("fire-js","")}mw("");function wu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Tx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xw=Tx,Cx=new Ri("auth","Firebase",Tx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new vu("@firebase/auth");function vw(e,...t){fo.logLevel<=J.WARN&&fo.warn(`Auth (${Er}): ${e}`,...t)}function Da(e,...t){fo.logLevel<=J.ERROR&&fo.error(`Auth (${Er}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,...t){throw ju(e,...t)}function At(e,...t){return ju(e,...t)}function Ix(e,t,n){const r=Object.assign(Object.assign({},xw()),{[t]:n});return new Ri("auth","Firebase",r).create(t,{appName:e.name})}function tn(e){return Ix(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ju(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cx.create(e,...t)}function V(e,t,...n){if(!e)throw ju(t,...n)}function Jt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Da(t),new Error(t)}function ln(e,t){e||Jt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yw(){return cf()==="http:"||cf()==="https:"}function cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yw()||Qb()||"connection"in navigator)?navigator.onLine:!0}function ww(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n){this.shortDelay=t,this.longDelay=n,ln(n>t,"Short delay should be less than long delay!"),this.isMobile=Yb()||Zb()}get(){return bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t){ln(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=new Di(3e4,6e4);function hn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ot(e,t,n,r,i={}){return Rx(e,i,async()=>{let a={},l={};r&&(t==="GET"?l=r:a={body:JSON.stringify(r)});const c=Ai(Object.assign({key:e.config.apiKey},l)).slice(1),d=await e._getAdditionalHeaders();d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:d},a);return Jb()||(h.referrerPolicy="no-referrer"),Px.fetch()(Ax(e,e.config.apiHost,n,c),h)})}async function Rx(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jw),t);try{const i=new Nw(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw va(e,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[d,h]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(e,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw va(e,"email-already-in-use",l);if(d==="USER_DISABLED")throw va(e,"user-disabled",l);const g=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ix(e,g,h);_t(e,g)}}catch(i){if(i instanceof Lt)throw i;_t(e,"network-request-failed",{message:String(i)})}}async function zi(e,t,n,r,i={}){const a=await Ot(e,t,n,r,i);return"mfaPendingCredential"in a&&_t(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Ax(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?_u(e.config,i):`${e.config.apiScheme}://${i}`}function kw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),_w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=At(e,t,r);return i.customData._tokenResponse=n,i}function df(e){return e!==void 0&&e.enterprise!==void 0}class Ew{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return kw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Sw(e,t){return Ot(e,"GET","/v2/recaptchaConfig",hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(e,t){return Ot(e,"POST","/v1/accounts:delete",t)}async function Dx(e,t){return Ot(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Cw(e,t=!1){const n=Nt(e),r=await n.getIdToken(t),i=ku(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ri(ec(i.auth_time)),issuedAtTime:ri(ec(i.iat)),expirationTime:ri(ec(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ec(e){return Number(e)*1e3}function ku(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=xx(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uf(e){const t=ku(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Lt&&Iw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Iw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(e){var t;const n=e.auth,r=await e.getIdToken(),i=await cs(e,Dx(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const l=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?zx(a.providerUserInfo):[],c=Aw(e.providerData,l),d=e.isAnonymous,h=!(e.email&&a.passwordHash)&&!(c!=null&&c.length),g=d?h:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new ld(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(e,m)}async function Rw(e){const t=Nt(e);await go(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Aw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function zx(e){return e.map(t=>{var{providerId:n}=t,r=wu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(e,t){const n=await Rx(e,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,l=Ax(e,i,"/v1/token",`key=${a}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Px.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zw(e,t){return Ot(e,"POST","/v2/accounts:revokeToken",hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=uf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await Dw(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,l=new Qr;return r&&(V(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),a&&(V(typeof a=="number","internal-error",{appName:t}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Qt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=wu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ld(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await cs(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Cw(this,t)}reload(){return Rw(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Qt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(tn(this.auth));const t=await this.getIdToken();return await cs(this,Tw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,l,c,d,h,g;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,w=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,_=(l=n.photoURL)!==null&&l!==void 0?l:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,f=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:v,emailVerified:I,isAnonymous:N,providerData:O,stsTokenManager:k}=n;V(v&&k,t,"internal-error");const j=Qr.fromJSON(this.name,k);V(typeof v=="string",t,"internal-error"),xn(m,t.name),xn(y,t.name),V(typeof I=="boolean",t,"internal-error"),V(typeof N=="boolean",t,"internal-error"),xn(w,t.name),xn(_,t.name),xn(P,t.name),xn(D,t.name),xn(x,t.name),xn(f,t.name);const E=new Qt({uid:v,auth:t,email:y,emailVerified:I,displayName:m,isAnonymous:N,photoURL:_,phoneNumber:w,tenantId:P,stsTokenManager:j,createdAt:x,lastLoginAt:f});return O&&Array.isArray(O)&&(E.providerData=O.map(C=>Object.assign({},C))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(t,n,r=!1){const i=new Qr;i.updateFromServerResponse(n);const a=new Qt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await go(a),a}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?zx(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new Qr;c.updateFromIdToken(r);const d=new Qt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ld(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(d,h),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function Zt(e){ln(e instanceof Function,"Expected a class definition");let t=hf.get(e);return t?(ln(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hf.set(e,t),t)}/**
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
 */function za(e,t,n){return`firebase:${e}:${t}:${n}`}class Zr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,a),this.fullPersistenceKey=za("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Qt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Zr(Zt(pf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let a=i[0]||Zt(pf);const l=za(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const g=await h._get(l);if(g){const m=Qt._fromJSON(t,g);h!==a&&(c=m),a=h;break}}catch{}const d=i.filter(h=>h._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new Zr(a,t,r):(a=d[0],c&&await a._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==a)try{await h._remove(l)}catch{}})),new Zr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fx(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ox(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bx(t))return"Blackberry";if(Vx(t))return"Webos";if(Mx(t))return"Safari";if((t.includes("chrome/")||Ux(t))&&!t.includes("edge/"))return"Chrome";if($x(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ox(e=$e()){return/firefox\//i.test(e)}function Mx(e=$e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ux(e=$e()){return/crios\//i.test(e)}function Fx(e=$e()){return/iemobile/i.test(e)}function $x(e=$e()){return/android/i.test(e)}function Bx(e=$e()){return/blackberry/i.test(e)}function Vx(e=$e()){return/webos/i.test(e)}function Nu(e=$e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lw(e=$e()){var t;return Nu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ow(){return e2()&&document.documentMode===10}function Hx(e=$e()){return Nu(e)||$x(e)||Vx(e)||Bx(e)||/windows phone/i.test(e)||Fx(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(e,t=[]){let n;switch(e){case"Browser":n=ff($e());break;case"Worker":n=`${ff($e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}/**
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
 */class Mw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((l,c)=>{try{const d=t(a);l(d)}catch(d){c(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Uw(e,t={}){return Ot(e,"GET","/v2/passwordPolicy",hn(e,t))}/**
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
 */const Fw=6;class $w{constructor(t){var n,r,i,a;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Fw,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=t.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,a,l,c;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,d),this.validatePasswordCharacterOptions(t,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(a=d.containsUppercaseLetter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new Mw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Dx(this,{idToken:t}),r=await Qt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ct(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(t);(!l||l===c)&&(d!=null&&d.user)&&(i=d.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await go(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ww()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ct(this.app))return Promise.reject(tn(this));const n=t?Nt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ct(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Uw(this),n=new $w(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ri("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Zt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof n=="function"){const d=t.addObserver(n,r,i);return()=>{l=!0,d()}}else{const d=t.addObserver(n);return()=>{l=!0,d()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&vw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(e){return Nt(e)}class gf{constructor(t){this.auth=t,this.observer=null,this.addObserver=o2(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vw(e){Ho=e}function qx(e){return Ho.loadJS(e)}function Hw(){return Ho.recaptchaEnterpriseScript}function Ww(){return Ho.gapiScript}function qw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Gw="recaptcha-enterprise",Kw="NO_RECAPTCHA";class Xw{constructor(t){this.type=Gw,this.auth=Qn(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{Sw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ew(d);return a.tenantId==null?a._agentRecaptchaConfig=h:a._tenantRecaptchaConfigs[a.tenantId]=h,l(h.siteKey)}}).catch(d=>{c(d)})})}function i(a,l,c){const d=window.grecaptcha;df(d)?d.enterprise.ready(()=>{d.enterprise.execute(a,{action:t}).then(h=>{l(h)}).catch(()=>{l(Kw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,l)=>{r(this.auth).then(c=>{if(!n&&df(window.grecaptcha))i(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=Hw();d.length!==0&&(d+=c),qx(d).then(()=>{i(c,a,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function mf(e,t,n,r=!1){const i=new Xw(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function mo(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await mf(e,t,n,n==="getOobCode");return r(e,a)}else return r(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mf(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(e,t){const n=Vo(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(ho(a,t??{}))return i;_t(i,"already-initialized")}return n.initialize({options:t})}function Jw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Qw(e,t,n){const r=Qn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,a=Gx(t),{host:l,port:c}=Zw(t),d=c===null?"":`:${c}`;r.config.emulator={url:`${a}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),ej()}function Gx(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Zw(e){const t=Gx(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:xf(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:xf(l)}}}function xf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ej(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(t){return Jt("not implemented")}_linkToIdToken(t,n){return Jt("not implemented")}_getReauthenticationResolver(t){return Jt("not implemented")}}async function tj(e,t){return Ot(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nj(e,t){return zi(e,"POST","/v1/accounts:signInWithPassword",hn(e,t))}async function rj(e,t){return Ot(e,"POST","/v1/accounts:sendOobCode",hn(e,t))}async function sj(e,t){return rj(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ij(e,t){return zi(e,"POST","/v1/accounts:signInWithEmailLink",hn(e,t))}async function aj(e,t){return zi(e,"POST","/v1/accounts:signInWithEmailLink",hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Eu{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ei(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ei(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mo(t,n,"signInWithPassword",nj);case"emailLink":return ij(t,{email:this._email,oobCode:this._password});default:_t(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mo(t,r,"signUpPassword",tj);case"emailLink":return aj(t,{idToken:n,email:this._email,oobCode:this._password});default:_t(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e,t){return zi(e,"POST","/v1/accounts:signInWithIdp",hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj="http://localhost";class xr extends Eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=wu(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new xr(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return es(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,es(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,es(t,n)}buildRequest(){const t={requestUri:oj,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ai(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cj(e){const t=qs(Gs(e)).link,n=t?qs(Gs(t)).deep_link_id:null,r=qs(Gs(e)).deep_link_id;return(r?qs(Gs(r)).link:null)||r||n||t||e}class Su{constructor(t){var n,r,i,a,l,c;const d=qs(Gs(t)),h=(n=d.apiKey)!==null&&n!==void 0?n:null,g=(r=d.oobCode)!==null&&r!==void 0?r:null,m=lj((i=d.mode)!==null&&i!==void 0?i:null);V(h&&g&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=g,this.continueUrl=(a=d.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=cj(t);try{return new Su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.providerId=vs.PROVIDER_ID}static credential(t,n){return Ei._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Su.parseLink(n);return V(r,"argument-error"),Ei._fromEmailAndCode(t,r.code,r.tenantId)}}vs.PROVIDER_ID="password";vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Li extends Kx{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Li{constructor(){super("facebook.com")}static credential(t){return xr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jn.credential(t.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Li{constructor(){super("github.com")}static credential(t){return xr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kn.credential(t.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Li{constructor(){super("twitter.com")}static credential(t,n){return xr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nn.credentialFromTaggedObject(t)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dj(e,t){return zi(e,"POST","/v1/accounts:signUp",hn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await Qt._fromIdTokenResponse(t,r,i),l=vf(r);return new vr({user:a,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=vf(r);return new vr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function vf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Lt{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new xo(t,n,r,i)}}function Xx(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(e,a,t,r):a})}async function uj(e,t,n=!1){const r=await cs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vr._forOperation(e,"link",r)}/**
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
 */async function hj(e,t,n=!1){const{auth:r}=e;if(Ct(r.app))return Promise.reject(tn(r));const i="reauthenticate";try{const a=await cs(e,Xx(r,i,t,e),n);V(a.idToken,r,"internal-error");const l=ku(a.idToken);V(l,r,"internal-error");const{sub:c}=l;return V(e.uid===c,r,"user-mismatch"),vr._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(e,t,n=!1){if(Ct(e.app))return Promise.reject(tn(e));const r="signIn",i=await Xx(e,r,t),a=await vr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function pj(e,t){return Yx(Qn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(e){const t=Qn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function fj(e,t,n){const r=Qn(e);await mo(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",sj)}async function gj(e,t,n){if(Ct(e.app))return Promise.reject(tn(e));const r=Qn(e),l=await mo(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dj).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Jx(e),d}),c=await vr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function mj(e,t,n){return Ct(e.app)?Promise.reject(tn(e)):pj(Nt(e),vs.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jx(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xj(e,t){return Ot(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vj(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Nt(e),a={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await cs(r,xj(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:d})=>d==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function yj(e,t,n,r){return Nt(e).onIdTokenChanged(t,n,r)}function bj(e,t,n){return Nt(e).beforeAuthStateChanged(t,n)}function wj(e,t,n,r){return Nt(e).onAuthStateChanged(t,n,r)}function jj(e){return Nt(e).signOut()}const vo="__sak";/**
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
 */class Qx{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j=1e3,kj=10;class Zx extends Qx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hx(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,d)=>{this.notifyListeners(l,d)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);Ow()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,kj):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},_j)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zx.type="LOCAL";const Nj=Zx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ej(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Wo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async h=>h(n.origin,a)),d=await Ej(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Sj{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((c,d)=>{const h=Tu("",20);i.port1.start();const g=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(y.data.response);break;default:clearTimeout(g),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function Tj(e){Dt().location.href=e}/**
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
 */function n0(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function Cj(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ij(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Pj(){return n0()?self:null}/**
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
 */const r0="firebaseLocalStorageDb",Rj=1,yo="firebaseLocalStorage",s0="fbase_key";class Oi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(e,t){return e.transaction([yo],t?"readwrite":"readonly").objectStore(yo)}function Aj(){const e=indexedDB.deleteDatabase(r0);return new Oi(e).toPromise()}function cd(){const e=indexedDB.open(r0,Rj);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(yo,{keyPath:s0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(yo)?t(r):(r.close(),await Aj(),t(await cd()))})})}async function yf(e,t,n){const r=qo(e,!0).put({[s0]:t,value:n});return new Oi(r).toPromise()}async function Dj(e,t){const n=qo(e,!1).get(t),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function bf(e,t){const n=qo(e,!0).delete(t);return new Oi(n).toPromise()}const zj=800,Lj=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Lj)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wo._getInstance(Pj()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Cj(),!this.activeServiceWorker)return;this.sender=new Sj(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ij()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cd();return await yf(t,vo,"1"),await bf(t,vo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Dj(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=qo(i,!1).getAll();return new Oi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zj)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const Oj=i0;new Di(3e4,6e4);/**
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
 */function Mj(e,t){return t?Zt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Cu extends Eu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return es(t,this._buildIdpRequest())}_linkToIdToken(t,n){return es(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return es(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Uj(e){return Yx(e.auth,new Cu(e),e.bypassAuthState)}function Fj(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),hj(n,new Cu(e),e.bypassAuthState)}async function $j(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),uj(n,new Cu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:l,type:c}=t;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Uj;case"linkViaPopup":case"linkViaRedirect":return $j;case"reauthViaPopup":case"reauthViaRedirect":return Fj;default:_t(this.auth,"internal-error")}}resolve(t){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj=new Di(2e3,1e4);class Wr extends a0{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const t=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Bj.get())};t()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vj="pendingRedirect",La=new Map;class Hj extends a0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=La.get(this.auth._key());if(!t){try{const r=await Wj(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}La.set(this.auth._key(),t)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wj(e,t){const n=Kj(t),r=Gj(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qj(e,t){La.set(e._key(),t)}function Gj(e){return Zt(e._redirectPersistence)}function Kj(e){return za(Vj,e.config.apiKey,e.name)}async function Xj(e,t,n=!1){if(Ct(e.app))return Promise.reject(tn(e));const r=Qn(e),i=Mj(r,t),l=await new Hj(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj=10*60*1e3;class Jj{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Qj(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!o0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Yj&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(t))}saveEventToCache(t){this.cachedEventUids.add(wf(t)),this.lastProcessedEventTime=Date.now()}}function wf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function o0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Qj(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zj(e,t={}){return Ot(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t_=/^https?/;async function n_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Zj(e);for(const n of t)try{if(r_(n))return}catch{}_t(e,"unauthorized-domain")}function r_(e){const t=od(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!t_.test(n))return!1;if(e_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const s_=new Di(3e4,6e4);function jf(){const e=Dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function i_(e){return new Promise((t,n)=>{var r,i,a;function l(){jf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(At(e,"network-request-failed"))},timeout:s_.get()})}if(!((i=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=Dt().gapi)===null||a===void 0)&&a.load)l();else{const c=qw("iframefcb");return Dt()[c]=()=>{gapi.load?l():n(At(e,"network-request-failed"))},qx(`${Ww()}?onload=${c}`).catch(d=>n(d))}}).catch(t=>{throw Oa=null,t})}let Oa=null;function a_(e){return Oa=Oa||i_(e),Oa}/**
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
 */const o_=new Di(5e3,15e3),l_="__/auth/iframe",c_="emulator/auth/iframe",d_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h_(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_u(t,c_):`https://${e.config.authDomain}/${l_}`,r={apiKey:t.apiKey,appName:e.name,v:Er},i=u_.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ai(r).slice(1)}`}async function p_(e){const t=await a_(e),n=Dt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:h_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d_,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=At(e,"network-request-failed"),c=Dt().setTimeout(()=>{a(l)},o_.get());function d(){Dt().clearTimeout(c),i(r)}r.ping(d).then(d,()=>{a(l)})}))}/**
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
 */const f_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g_=500,m_=600,x_="_blank",v_="http://localhost";class _f{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y_(e,t,n,r=g_,i=m_){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const d=Object.assign(Object.assign({},f_),{width:r.toString(),height:i.toString(),top:a,left:l}),h=$e().toLowerCase();n&&(c=Ux(h)?x_:n),Ox(h)&&(t=t||v_,d.scrollbars="yes");const g=Object.entries(d).reduce((y,[w,_])=>`${y}${w}=${_},`,"");if(Lw(h)&&c!=="_self")return b_(t||"",c),new _f(null);const m=window.open(t||"",c,g);V(m,e,"popup-blocked");try{m.focus()}catch{}return new _f(m)}function b_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const w_="__/auth/handler",j_="emulator/auth/handler",__=encodeURIComponent("fac");async function kf(e,t,n,r,i,a){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Er,eventId:i};if(t instanceof Kx){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",a2(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,m]of Object.entries({}))l[g]=m}if(t instanceof Li){const g=t.getScopes().filter(m=>m!=="");g.length>0&&(l.scopes=g.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const d=await e._getAppCheckToken(),h=d?`#${__}=${encodeURIComponent(d)}`:"";return`${k_(e)}?${Ai(c).slice(1)}${h}`}function k_({config:e}){return e.emulator?_u(e,j_):`https://${e.authDomain}/${w_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t0,this._completeRedirectFn=Xj,this._overrideRedirectResult=qj}async _openPopup(t,n,r,i){var a;ln((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await kf(t,n,r,od(),i);return y_(t,l,Tu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await kf(t,n,r,od(),i);return Tj(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(ln(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await p_(t),r=new Jj(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(tc,{type:tc},i=>{var a;const l=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[tc];l!==void 0&&n(!!l),_t(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hx()||Mx()||Nu()}}const E_=N_;var Nf="@firebase/auth",Ef="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C_(e){mr(new Vn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wx(e)},h=new Bw(r,i,a,d);return Jw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),mr(new Vn("auth-internal",t=>{const n=Qn(t.getProvider("auth").getImmediate());return(r=>new S_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Nf,Ef,T_(e)),Rt(Nf,Ef,"esm2017")}/**
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
 */const I_=5*60,P_=wx("authIdTokenMaxAge")||I_;let Sf=null;const R_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P_)return;const i=n==null?void 0:n.token;Sf!==i&&(Sf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function A_(e=bu()){const t=Vo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Yw(e,{popupRedirectResolver:E_,persistence:[Oj,Nj,t0]}),r=wx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=R_(a.toString());bj(n,l,()=>l(n.currentUser)),yj(n,c=>l(c))}}const i=vx("auth");return i&&Qw(n,`http://${i}`),n}function D_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Vw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=At("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",D_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C_("Browser");var z_="firebase",L_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(z_,L_,"app");var Tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l0;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,j){function E(){}E.prototype=j.prototype,k.D=j.prototype,k.prototype=new E,k.prototype.constructor=k,k.C=function(C,A,R){for(var S=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)S[ye-2]=arguments[ye];return j.prototype[A].apply(C,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,j,E){E||(E=0);var C=Array(16);if(typeof j=="string")for(var A=0;16>A;++A)C[A]=j.charCodeAt(E++)|j.charCodeAt(E++)<<8|j.charCodeAt(E++)<<16|j.charCodeAt(E++)<<24;else for(A=0;16>A;++A)C[A]=j[E++]|j[E++]<<8|j[E++]<<16|j[E++]<<24;j=k.g[0],E=k.g[1],A=k.g[2];var R=k.g[3],S=j+(R^E&(A^R))+C[0]+3614090360&4294967295;j=E+(S<<7&4294967295|S>>>25),S=R+(A^j&(E^A))+C[1]+3905402710&4294967295,R=j+(S<<12&4294967295|S>>>20),S=A+(E^R&(j^E))+C[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(j^A&(R^j))+C[3]+3250441966&4294967295,E=A+(S<<22&4294967295|S>>>10),S=j+(R^E&(A^R))+C[4]+4118548399&4294967295,j=E+(S<<7&4294967295|S>>>25),S=R+(A^j&(E^A))+C[5]+1200080426&4294967295,R=j+(S<<12&4294967295|S>>>20),S=A+(E^R&(j^E))+C[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(j^A&(R^j))+C[7]+4249261313&4294967295,E=A+(S<<22&4294967295|S>>>10),S=j+(R^E&(A^R))+C[8]+1770035416&4294967295,j=E+(S<<7&4294967295|S>>>25),S=R+(A^j&(E^A))+C[9]+2336552879&4294967295,R=j+(S<<12&4294967295|S>>>20),S=A+(E^R&(j^E))+C[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(j^A&(R^j))+C[11]+2304563134&4294967295,E=A+(S<<22&4294967295|S>>>10),S=j+(R^E&(A^R))+C[12]+1804603682&4294967295,j=E+(S<<7&4294967295|S>>>25),S=R+(A^j&(E^A))+C[13]+4254626195&4294967295,R=j+(S<<12&4294967295|S>>>20),S=A+(E^R&(j^E))+C[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=E+(j^A&(R^j))+C[15]+1236535329&4294967295,E=A+(S<<22&4294967295|S>>>10),S=j+(A^R&(E^A))+C[1]+4129170786&4294967295,j=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(j^E))+C[6]+3225465664&4294967295,R=j+(S<<9&4294967295|S>>>23),S=A+(j^E&(R^j))+C[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^j&(A^R))+C[0]+3921069994&4294967295,E=A+(S<<20&4294967295|S>>>12),S=j+(A^R&(E^A))+C[5]+3593408605&4294967295,j=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(j^E))+C[10]+38016083&4294967295,R=j+(S<<9&4294967295|S>>>23),S=A+(j^E&(R^j))+C[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^j&(A^R))+C[4]+3889429448&4294967295,E=A+(S<<20&4294967295|S>>>12),S=j+(A^R&(E^A))+C[9]+568446438&4294967295,j=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(j^E))+C[14]+3275163606&4294967295,R=j+(S<<9&4294967295|S>>>23),S=A+(j^E&(R^j))+C[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^j&(A^R))+C[8]+1163531501&4294967295,E=A+(S<<20&4294967295|S>>>12),S=j+(A^R&(E^A))+C[13]+2850285829&4294967295,j=E+(S<<5&4294967295|S>>>27),S=R+(E^A&(j^E))+C[2]+4243563512&4294967295,R=j+(S<<9&4294967295|S>>>23),S=A+(j^E&(R^j))+C[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=E+(R^j&(A^R))+C[12]+2368359562&4294967295,E=A+(S<<20&4294967295|S>>>12),S=j+(E^A^R)+C[5]+4294588738&4294967295,j=E+(S<<4&4294967295|S>>>28),S=R+(j^E^A)+C[8]+2272392833&4294967295,R=j+(S<<11&4294967295|S>>>21),S=A+(R^j^E)+C[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^j)+C[14]+4259657740&4294967295,E=A+(S<<23&4294967295|S>>>9),S=j+(E^A^R)+C[1]+2763975236&4294967295,j=E+(S<<4&4294967295|S>>>28),S=R+(j^E^A)+C[4]+1272893353&4294967295,R=j+(S<<11&4294967295|S>>>21),S=A+(R^j^E)+C[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^j)+C[10]+3200236656&4294967295,E=A+(S<<23&4294967295|S>>>9),S=j+(E^A^R)+C[13]+681279174&4294967295,j=E+(S<<4&4294967295|S>>>28),S=R+(j^E^A)+C[0]+3936430074&4294967295,R=j+(S<<11&4294967295|S>>>21),S=A+(R^j^E)+C[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^j)+C[6]+76029189&4294967295,E=A+(S<<23&4294967295|S>>>9),S=j+(E^A^R)+C[9]+3654602809&4294967295,j=E+(S<<4&4294967295|S>>>28),S=R+(j^E^A)+C[12]+3873151461&4294967295,R=j+(S<<11&4294967295|S>>>21),S=A+(R^j^E)+C[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=E+(A^R^j)+C[2]+3299628645&4294967295,E=A+(S<<23&4294967295|S>>>9),S=j+(A^(E|~R))+C[0]+4096336452&4294967295,j=E+(S<<6&4294967295|S>>>26),S=R+(E^(j|~A))+C[7]+1126891415&4294967295,R=j+(S<<10&4294967295|S>>>22),S=A+(j^(R|~E))+C[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~j))+C[5]+4237533241&4294967295,E=A+(S<<21&4294967295|S>>>11),S=j+(A^(E|~R))+C[12]+1700485571&4294967295,j=E+(S<<6&4294967295|S>>>26),S=R+(E^(j|~A))+C[3]+2399980690&4294967295,R=j+(S<<10&4294967295|S>>>22),S=A+(j^(R|~E))+C[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~j))+C[1]+2240044497&4294967295,E=A+(S<<21&4294967295|S>>>11),S=j+(A^(E|~R))+C[8]+1873313359&4294967295,j=E+(S<<6&4294967295|S>>>26),S=R+(E^(j|~A))+C[15]+4264355552&4294967295,R=j+(S<<10&4294967295|S>>>22),S=A+(j^(R|~E))+C[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~j))+C[13]+1309151649&4294967295,E=A+(S<<21&4294967295|S>>>11),S=j+(A^(E|~R))+C[4]+4149444226&4294967295,j=E+(S<<6&4294967295|S>>>26),S=R+(E^(j|~A))+C[11]+3174756917&4294967295,R=j+(S<<10&4294967295|S>>>22),S=A+(j^(R|~E))+C[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=E+(R^(A|~j))+C[9]+3951481745&4294967295,k.g[0]=k.g[0]+j&4294967295,k.g[1]=k.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+A&4294967295,k.g[3]=k.g[3]+R&4294967295}r.prototype.u=function(k,j){j===void 0&&(j=k.length);for(var E=j-this.blockSize,C=this.B,A=this.h,R=0;R<j;){if(A==0)for(;R<=E;)i(this,k,R),R+=this.blockSize;if(typeof k=="string"){for(;R<j;)if(C[A++]=k.charCodeAt(R++),A==this.blockSize){i(this,C),A=0;break}}else for(;R<j;)if(C[A++]=k[R++],A==this.blockSize){i(this,C),A=0;break}}this.h=A,this.o+=j},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var j=1;j<k.length-8;++j)k[j]=0;var E=8*this.o;for(j=k.length-8;j<k.length;++j)k[j]=E&255,E/=256;for(this.u(k),k=Array(16),j=E=0;4>j;++j)for(var C=0;32>C;C+=8)k[E++]=this.g[j]>>>C&255;return k};function a(k,j){var E=c;return Object.prototype.hasOwnProperty.call(E,k)?E[k]:E[k]=j(k)}function l(k,j){this.h=j;for(var E=[],C=!0,A=k.length-1;0<=A;A--){var R=k[A]|0;C&&R==j||(E[A]=R,C=!1)}this.g=E}var c={};function d(k){return-128<=k&&128>k?a(k,function(j){return new l([j|0],0>j?-1:0)}):new l([k|0],0>k?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return m;if(0>k)return D(h(-k));for(var j=[],E=1,C=0;k>=E;C++)j[C]=k/E|0,E*=4294967296;return new l(j,0)}function g(k,j){if(k.length==0)throw Error("number format error: empty string");if(j=j||10,2>j||36<j)throw Error("radix out of range: "+j);if(k.charAt(0)=="-")return D(g(k.substring(1),j));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(j,8)),C=m,A=0;A<k.length;A+=8){var R=Math.min(8,k.length-A),S=parseInt(k.substring(A,A+R),j);8>R?(R=h(Math.pow(j,R)),C=C.j(R).add(h(S))):(C=C.j(E),C=C.add(h(S)))}return C}var m=d(0),y=d(1),w=d(16777216);e=l.prototype,e.m=function(){if(P(this))return-D(this).m();for(var k=0,j=1,E=0;E<this.g.length;E++){var C=this.i(E);k+=(0<=C?C:4294967296+C)*j,j*=4294967296}return k},e.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(_(this))return"0";if(P(this))return"-"+D(this).toString(k);for(var j=h(Math.pow(k,6)),E=this,C="";;){var A=I(E,j).g;E=x(E,A.j(j));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(k);if(E=A,_(E))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},e.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function _(k){if(k.h!=0)return!1;for(var j=0;j<k.g.length;j++)if(k.g[j]!=0)return!1;return!0}function P(k){return k.h==-1}e.l=function(k){return k=x(this,k),P(k)?-1:_(k)?0:1};function D(k){for(var j=k.g.length,E=[],C=0;C<j;C++)E[C]=~k.g[C];return new l(E,~k.h).add(y)}e.abs=function(){return P(this)?D(this):this},e.add=function(k){for(var j=Math.max(this.g.length,k.g.length),E=[],C=0,A=0;A<=j;A++){var R=C+(this.i(A)&65535)+(k.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(k.i(A)>>>16);C=S>>>16,R&=65535,S&=65535,E[A]=S<<16|R}return new l(E,E[E.length-1]&-2147483648?-1:0)};function x(k,j){return k.add(D(j))}e.j=function(k){if(_(this)||_(k))return m;if(P(this))return P(k)?D(this).j(D(k)):D(D(this).j(k));if(P(k))return D(this.j(D(k)));if(0>this.l(w)&&0>k.l(w))return h(this.m()*k.m());for(var j=this.g.length+k.g.length,E=[],C=0;C<2*j;C++)E[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<k.g.length;A++){var R=this.i(C)>>>16,S=this.i(C)&65535,ye=k.i(A)>>>16,Zn=k.i(A)&65535;E[2*C+2*A]+=S*Zn,f(E,2*C+2*A),E[2*C+2*A+1]+=R*Zn,f(E,2*C+2*A+1),E[2*C+2*A+1]+=S*ye,f(E,2*C+2*A+1),E[2*C+2*A+2]+=R*ye,f(E,2*C+2*A+2)}for(C=0;C<j;C++)E[C]=E[2*C+1]<<16|E[2*C];for(C=j;C<2*j;C++)E[C]=0;return new l(E,0)};function f(k,j){for(;(k[j]&65535)!=k[j];)k[j+1]+=k[j]>>>16,k[j]&=65535,j++}function v(k,j){this.g=k,this.h=j}function I(k,j){if(_(j))throw Error("division by zero");if(_(k))return new v(m,m);if(P(k))return j=I(D(k),j),new v(D(j.g),D(j.h));if(P(j))return j=I(k,D(j)),new v(D(j.g),j.h);if(30<k.g.length){if(P(k)||P(j))throw Error("slowDivide_ only works with positive integers.");for(var E=y,C=j;0>=C.l(k);)E=N(E),C=N(C);var A=O(E,1),R=O(C,1);for(C=O(C,2),E=O(E,2);!_(C);){var S=R.add(C);0>=S.l(k)&&(A=A.add(E),R=S),C=O(C,1),E=O(E,1)}return j=x(k,A.j(j)),new v(A,j)}for(A=m;0<=k.l(j);){for(E=Math.max(1,Math.floor(k.m()/j.m())),C=Math.ceil(Math.log(E)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=h(E),S=R.j(j);P(S)||0<S.l(k);)E-=C,R=h(E),S=R.j(j);_(R)&&(R=y),A=A.add(R),k=x(k,S)}return new v(A,k)}e.A=function(k){return I(this,k).h},e.and=function(k){for(var j=Math.max(this.g.length,k.g.length),E=[],C=0;C<j;C++)E[C]=this.i(C)&k.i(C);return new l(E,this.h&k.h)},e.or=function(k){for(var j=Math.max(this.g.length,k.g.length),E=[],C=0;C<j;C++)E[C]=this.i(C)|k.i(C);return new l(E,this.h|k.h)},e.xor=function(k){for(var j=Math.max(this.g.length,k.g.length),E=[],C=0;C<j;C++)E[C]=this.i(C)^k.i(C);return new l(E,this.h^k.h)};function N(k){for(var j=k.g.length+1,E=[],C=0;C<j;C++)E[C]=k.i(C)<<1|k.i(C-1)>>>31;return new l(E,k.h)}function O(k,j){var E=j>>5;j%=32;for(var C=k.g.length-E,A=[],R=0;R<C;R++)A[R]=0<j?k.i(R+E)>>>j|k.i(R+E+1)<<32-j:k.i(R+E);return new l(A,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=g,l0=l}).apply(typeof Tf<"u"?Tf:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,p){return o==Array.prototype||o==Object.prototype||(o[u]=p.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var u=0;u<o.length;++u){var p=o[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var p=r;o=o.split(".");for(var b=0;b<o.length-1;b++){var z=o[b];if(!(z in p))break e;p=p[z]}o=o[o.length-1],b=p[o],u=u(b),u!=b&&u!=null&&t(p,o,{configurable:!0,writable:!0,value:u})}}function a(o,u){o instanceof String&&(o+="");var p=0,b=!1,z={next:function(){if(!b&&p<o.length){var L=p++;return{value:u(L,o[L]),done:!1}}return b=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}i("Array.prototype.values",function(o){return o||function(){return a(this,function(u,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function g(o,u,p){return o.call.apply(o.bind,arguments)}function m(o,u,p){if(!o)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,b),o.apply(u,z)}}return function(){return o.apply(u,arguments)}}function y(o,u,p){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:m,y.apply(null,arguments)}function w(o,u){var p=Array.prototype.slice.call(arguments,1);return function(){var b=p.slice();return b.push.apply(b,arguments),o.apply(this,b)}}function _(o,u){function p(){}p.prototype=u.prototype,o.aa=u.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(b,z,L){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return u.prototype[z].apply(b,U)}}function P(o){const u=o.length;if(0<u){const p=Array(u);for(let b=0;b<u;b++)p[b]=o[b];return p}return[]}function D(o,u){for(let p=1;p<arguments.length;p++){const b=arguments[p];if(d(b)){const z=o.length||0,L=b.length||0;o.length=z+L;for(let U=0;U<L;U++)o[z+U]=b[U]}else o.push(b)}}class x{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function f(o){return/^[\s\xa0]*$/.test(o)}function v(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function I(o){return I[" "](o),o}I[" "]=function(){};var N=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function O(o,u,p){for(const b in o)u.call(p,o[b],b,o)}function k(o,u){for(const p in o)u.call(void 0,o[p],p,o)}function j(o){const u={};for(const p in o)u[p]=o[p];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(o,u){let p,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(p in b)o[p]=b[p];for(let L=0;L<E.length;L++)p=E[L],Object.prototype.hasOwnProperty.call(b,p)&&(o[p]=b[p])}}function A(o){var u=1;o=o.split(":");const p=[];for(;0<u&&o.length;)p.push(o.shift()),u--;return o.length&&p.push(o.join(":")),p}function R(o){c.setTimeout(()=>{throw o},0)}function S(){var o=H;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ye{constructor(){this.h=this.g=null}add(u,p){const b=Zn.get();b.set(u,p),this.h?this.h.next=b:this.g=b,this.h=b}}var Zn=new x(()=>new ys,o=>o.reset());class ys{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,F=!1,H=new ye,W=()=>{const o=c.Promise.resolve(void 0);Ut=()=>{o.then(oe)}};var oe=()=>{for(var o;o=S();){try{o.h.call(o.g)}catch(p){R(p)}var u=Zn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}F=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,u),c.removeEventListener("test",p,u)}catch{}return o}();function $t(o,u){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,b=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(N){e:{try{I(u.nodeName);var z=!0;break e}catch{}z=!1}z||(u=null)}}else p=="mouseover"?u=o.fromElement:p=="mouseout"&&(u=o.toElement);this.relatedTarget=u,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$t.aa.h.call(this)}}_($t,fe);var Bt={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),T0=0;function C0(o,u,p,b,z){this.listener=o,this.proxy=null,this.src=u,this.type=p,this.capture=!!b,this.ha=z,this.key=++T0,this.da=this.fa=!1}function Fi(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $i(o){this.src=o,this.g={},this.h=0}$i.prototype.add=function(o,u,p,b,z){var L=o.toString();o=this.g[L],o||(o=this.g[L]=[],this.h++);var U=Qo(o,u,b,z);return-1<U?(u=o[U],p||(u.fa=!1)):(u=new C0(u,this.src,L,!!b,z),u.fa=p,o.push(u)),u};function Jo(o,u){var p=u.type;if(p in o.g){var b=o.g[p],z=Array.prototype.indexOf.call(b,u,void 0),L;(L=0<=z)&&Array.prototype.splice.call(b,z,1),L&&(Fi(u),o.g[p].length==0&&(delete o.g[p],o.h--))}}function Qo(o,u,p,b){for(var z=0;z<o.length;++z){var L=o[z];if(!L.da&&L.listener==u&&L.capture==!!p&&L.ha==b)return z}return-1}var Zo="closure_lm_"+(1e6*Math.random()|0),el={};function Lu(o,u,p,b,z){if(Array.isArray(u)){for(var L=0;L<u.length;L++)Lu(o,u[L],p,b,z);return null}return p=Uu(p),o&&o[Vt]?o.K(u,p,h(b)?!!b.capture:!1,z):I0(o,u,p,!1,b,z)}function I0(o,u,p,b,z,L){if(!u)throw Error("Invalid event type");var U=h(z)?!!z.capture:!!z,ee=nl(o);if(ee||(o[Zo]=ee=new $i(o)),p=ee.add(u,p,b,U,L),p.proxy)return p;if(b=P0(),p.proxy=b,b.src=o,b.listener=p,o.addEventListener)Ft||(z=U),z===void 0&&(z=!1),o.addEventListener(u.toString(),b,z);else if(o.attachEvent)o.attachEvent(Mu(u.toString()),b);else if(o.addListener&&o.removeListener)o.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return p}function P0(){function o(p){return u.call(o.src,o.listener,p)}const u=R0;return o}function Ou(o,u,p,b,z){if(Array.isArray(u))for(var L=0;L<u.length;L++)Ou(o,u[L],p,b,z);else b=h(b)?!!b.capture:!!b,p=Uu(p),o&&o[Vt]?(o=o.i,u=String(u).toString(),u in o.g&&(L=o.g[u],p=Qo(L,p,b,z),-1<p&&(Fi(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete o.g[u],o.h--)))):o&&(o=nl(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Qo(u,p,b,z)),(p=-1<o?u[o]:null)&&tl(p))}function tl(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Vt])Jo(u.i,o);else{var p=o.type,b=o.proxy;u.removeEventListener?u.removeEventListener(p,b,o.capture):u.detachEvent?u.detachEvent(Mu(p),b):u.addListener&&u.removeListener&&u.removeListener(b),(p=nl(u))?(Jo(p,o),p.h==0&&(p.src=null,u[Zo]=null)):Fi(o)}}}function Mu(o){return o in el?el[o]:el[o]="on"+o}function R0(o,u){if(o.da)o=!0;else{u=new $t(u,this);var p=o.listener,b=o.ha||o.src;o.fa&&tl(o),o=p.call(b,u)}return o}function nl(o){return o=o[Zo],o instanceof $i?o:null}var rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uu(o){return typeof o=="function"?o:(o[rl]||(o[rl]=function(u){return o.handleEvent(u)}),o[rl])}function Te(){Z.call(this),this.i=new $i(this),this.M=this,this.F=null}_(Te,Z),Te.prototype[Vt]=!0,Te.prototype.removeEventListener=function(o,u,p,b){Ou(this,o,u,p,b)};function Le(o,u){var p,b=o.F;if(b)for(p=[];b;b=b.F)p.push(b);if(o=o.M,b=u.type||u,typeof u=="string")u=new fe(u,o);else if(u instanceof fe)u.target=u.target||o;else{var z=u;u=new fe(b,o),C(u,z)}if(z=!0,p)for(var L=p.length-1;0<=L;L--){var U=u.g=p[L];z=Bi(U,b,!0,u)&&z}if(U=u.g=o,z=Bi(U,b,!0,u)&&z,z=Bi(U,b,!1,u)&&z,p)for(L=0;L<p.length;L++)U=u.g=p[L],z=Bi(U,b,!1,u)&&z}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var p=o.g[u],b=0;b<p.length;b++)Fi(p[b]);delete o.g[u],o.h--}}this.F=null},Te.prototype.K=function(o,u,p,b){return this.i.add(String(o),u,!1,p,b)},Te.prototype.L=function(o,u,p,b){return this.i.add(String(o),u,!0,p,b)};function Bi(o,u,p,b){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var z=!0,L=0;L<u.length;++L){var U=u[L];if(U&&!U.da&&U.capture==p){var ee=U.listener,ke=U.ha||U.src;U.fa&&Jo(o.i,U),z=ee.call(ke,b)!==!1&&z}}return z&&!b.defaultPrevented}function Fu(o,u,p){if(typeof o=="function")p&&(o=y(o,p));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function $u(o){o.g=Fu(()=>{o.g=null,o.i&&(o.i=!1,$u(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class A0 extends Z{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$u(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(o){Z.call(this),this.h=o,this.g={}}_(bs,Z);var Bu=[];function Vu(o){O(o.g,function(u,p){this.g.hasOwnProperty(p)&&tl(u)},o),o.g={}}bs.prototype.N=function(){bs.aa.N.call(this),Vu(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sl=c.JSON.stringify,D0=c.JSON.parse,z0=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function il(){}il.prototype.h=null;function Hu(o){return o.h||(o.h=o.i())}function L0(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function al(){fe.call(this,"d")}_(al,fe);function ol(){fe.call(this,"c")}_(ol,fe);var Sr={},Wu=null;function ll(){return Wu=Wu||new Te}Sr.La="serverreachability";function qu(o){fe.call(this,Sr.La,o)}_(qu,fe);function js(o){const u=ll();Le(u,new qu(u))}Sr.STAT_EVENT="statevent";function Gu(o,u){fe.call(this,Sr.STAT_EVENT,o),this.stat=u}_(Gu,fe);function Oe(o){const u=ll();Le(u,new Gu(u,o))}Sr.Ma="timingevent";function Ku(o,u){fe.call(this,Sr.Ma,o),this.size=u}_(Ku,fe);function _s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function O0(o,u,p,b,z,L){o.info(function(){if(o.g)if(L)for(var U="",ee=L.split("&"),ke=0;ke<ee.length;ke++){var X=ee[ke].split("=");if(1<X.length){var Ce=X[0];X=X[1];var Ie=Ce.split("_");U=2<=Ie.length&&Ie[1]=="type"?U+(Ce+"="+X+"&"):U+(Ce+"=redacted&")}}else U=null;else U=L;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+u+`
`+p+`
`+U})}function M0(o,u,p,b,z,L,U){o.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+u+`
`+p+`
`+L+" "+U})}function Tr(o,u,p,b){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+F0(o,p)+(b?" "+b:"")})}function U0(o,u){o.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function F0(o,u){if(!o.g)return u;if(!u)return null;try{var p=JSON.parse(u);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var b=p[o];if(!(2>b.length)){var z=b[1];if(Array.isArray(z)&&!(1>z.length)){var L=z[0];if(L!="noop"&&L!="stop"&&L!="close")for(var U=1;U<z.length;U++)z[U]=""}}}}return sl(p)}catch{return u}}var cl={NO_ERROR:0,TIMEOUT:8},$0={},dl;function Vi(){}_(Vi,il),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},dl=new Vi;function pn(o,u,p,b){this.j=o,this.i=u,this.l=p,this.R=b||1,this.U=new bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Yu={},ul={};function hl(o,u,p){o.L=1,o.v=Gi(Ht(u)),o.m=p,o.P=!0,Ju(o,null)}function Ju(o,u){o.F=Date.now(),Hi(o),o.A=Ht(o.v);var p=o.A,b=o.R;Array.isArray(b)||(b=[String(b)]),uh(p.i,"t",b),o.C=0,p=o.j.J,o.h=new Xu,o.g=Ch(o.j,p?u:null,!o.m),0<o.O&&(o.M=new A0(y(o.Y,o,o.g),o.O)),u=o.U,p=o.g,b=o.ca;var z="readystatechange";Array.isArray(z)||(z&&(Bu[0]=z.toString()),z=Bu);for(var L=0;L<z.length;L++){var U=Lu(p,z[L],b||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.H?j(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),js(),O0(o.i,o.u,o.A,o.l,o.R,o.m)}pn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Wt(o)==3?u.j():this.Y(o)},pn.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=Wt(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||vh(this.g)))){this.J||Ie!=4||u==7||(u==8||0>=Pr?js(3):js(2)),pl(this);var p=this.g.Z();this.X=p;t:if(Qu(this)){var b=vh(this.g);o="";var z=b.length,L=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){er(this),Ns(this);var U="";break t}this.h.i=new c.TextDecoder}for(u=0;u<z;u++)this.h.h=!0,o+=this.h.i.decode(b[u],{stream:!(L&&u==z-1)});b.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,M0(this.i,this.u,this.A,this.l,this.R,Ie,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ee,ke=this.g;if((ee=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(ee)){var X=ee;break t}}X=null}if(p=X)Tr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fl(this,p);else{this.o=!1,this.s=3,Oe(12),er(this),Ns(this);break e}}if(this.P){p=!0;let pt;for(;!this.J&&this.C<U.length;)if(pt=B0(this,U),pt==ul){Ie==4&&(this.s=4,Oe(14),p=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Yu){this.s=4,Oe(15),Tr(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else Tr(this.i,this.l,pt,null),fl(this,pt);if(Qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||U.length!=0||this.h.h||(this.s=1,Oe(16),p=!1),this.o=this.o&&p,!p)Tr(this.i,this.l,U,"[Invalid Chunked Response]"),er(this),Ns(this);else if(0<U.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),bl(Ce),Ce.M=!0,Oe(11))}}else Tr(this.i,this.l,U,null),fl(this,U);Ie==4&&er(this),this.o&&!this.J&&(Ie==4?Nh(this.j,this):(this.o=!1,Hi(this)))}else iv(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),er(this),Ns(this)}}}catch{}finally{}};function Qu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function B0(o,u){var p=o.C,b=u.indexOf(`
`,p);return b==-1?ul:(p=Number(u.substring(p,b)),isNaN(p)?Yu:(b+=1,b+p>u.length?ul:(u=u.slice(b,b+p),o.C=b+p,u)))}pn.prototype.cancel=function(){this.J=!0,er(this)};function Hi(o){o.S=Date.now()+o.I,Zu(o,o.I)}function Zu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=_s(y(o.ba,o),u)}function pl(o){o.B&&(c.clearTimeout(o.B),o.B=null)}pn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(U0(this.i,this.A),this.L!=2&&(js(),Oe(17)),er(this),this.s=2,Ns(this)):Zu(this,this.S-o)};function Ns(o){o.j.G==0||o.J||Nh(o.j,o)}function er(o){pl(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Vu(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function fl(o,u){try{var p=o.j;if(p.G!=0&&(p.g==o||gl(p.h,o))){if(!o.K&&gl(p.h,o)&&p.G==3){try{var b=p.Da.g.parse(u)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)Zi(p),Ji(p);else break e;yl(p),Oe(18)}}else p.za=z[1],0<p.za-p.T&&37500>z[2]&&p.F&&p.v==0&&!p.C&&(p.C=_s(y(p.Za,p),6e3));if(1>=nh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else nr(p,11)}else if((o.K||p.g==o)&&Zi(p),!f(u))for(z=p.Da.g.parse(u),u=0;u<z.length;u++){let X=z[u];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Ce=X[3];Ce!=null&&(p.la=Ce,p.j.info("VER="+p.la));const Ie=X[4];Ie!=null&&(p.Aa=Ie,p.j.info("SVER="+p.Aa));const Pr=X[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(b=1.5*Pr,p.L=b,p.j.info("backChannelRequestTimeoutMs_="+b)),b=p;const pt=o.g;if(pt){const ea=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var L=b.h;L.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ml(L,L.h),L.h=null))}if(b.D){const wl=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;wl&&(b.ya=wl,re(b.I,b.D,wl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),b=p;var U=o;if(b.qa=Th(b,b.J?b.ia:null,b.W),U.K){rh(b.h,U);var ee=U,ke=b.L;ke&&(ee.I=ke),ee.B&&(pl(ee),Hi(ee)),b.g=U}else _h(b);0<p.i.length&&Qi(p)}else X[0]!="stop"&&X[0]!="close"||nr(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?nr(p,7):vl(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}js(4)}catch{}}var V0=class{constructor(o,u){this.g=o,this.map=u}};function eh(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function th(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nh(o){return o.h?1:o.g?o.g.size:0}function gl(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ml(o,u){o.g?o.g.add(u):o.h=u}function rh(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const p of o.g.values())u=u.concat(p.D);return u}return P(o.i)}function H0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],p=o.length,b=0;b<p;b++)u.push(o[b]);return u}u=[],p=0;for(b in o)u[p++]=o[b];return u}function W0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var p=0;p<o;p++)u.push(p);return u}u=[],p=0;for(const b in o)u[p++]=b;return u}}}function ih(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var p=W0(o),b=H0(o),z=b.length,L=0;L<z;L++)u.call(void 0,b[L],p&&p[L],o)}var ah=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function q0(o,u){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var b=o[p].indexOf("="),z=null;if(0<=b){var L=o[p].substring(0,b);z=o[p].substring(b+1)}else L=o[p];u(L,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function tr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof tr){this.h=o.h,Wi(this,o.j),this.o=o.o,this.g=o.g,qi(this,o.s),this.l=o.l;var u=o.i,p=new Ts;p.i=u.i,u.g&&(p.g=new Map(u.g),p.h=u.h),oh(this,p),this.m=o.m}else o&&(u=String(o).match(ah))?(this.h=!1,Wi(this,u[1]||"",!0),this.o=Es(u[2]||""),this.g=Es(u[3]||"",!0),qi(this,u[4]),this.l=Es(u[5]||"",!0),oh(this,u[6]||"",!0),this.m=Es(u[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}tr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,lh,!0),":");var p=this.g;return(p||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,lh,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Ss(p,p.charAt(0)=="/"?X0:K0,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Ss(p,J0)),o.join("")};function Ht(o){return new tr(o)}function Wi(o,u,p){o.j=p?Es(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function qi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function oh(o,u,p){u instanceof Ts?(o.i=u,Q0(o.i,o.h)):(p||(u=Ss(u,Y0)),o.i=new Ts(u,o.h))}function re(o,u,p){o.i.set(u,p)}function Gi(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Es(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,p){return typeof o=="string"?(o=encodeURI(o).replace(u,G0),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function G0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var lh=/[#\/\?@]/g,K0=/[#\?:]/g,X0=/[#\?]/g,Y0=/[#\?@]/g,J0=/#/g;function Ts(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&q0(o.i,function(u,p){o.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}e=Ts.prototype,e.add=function(o,u){fn(this),this.i=null,o=Cr(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(u),this.h+=1,this};function ch(o,u){fn(o),u=Cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function dh(o,u){return fn(o),u=Cr(o,u),o.g.has(u)}e.forEach=function(o,u){fn(this),this.g.forEach(function(p,b){p.forEach(function(z){o.call(u,z,b,this)},this)},this)},e.na=function(){fn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),p=[];for(let b=0;b<u.length;b++){const z=o[b];for(let L=0;L<z.length;L++)p.push(u[b])}return p},e.V=function(o){fn(this);let u=[];if(typeof o=="string")dh(this,o)&&(u=u.concat(this.g.get(Cr(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)u=u.concat(o[p])}return u},e.set=function(o,u){return fn(this),this.i=null,o=Cr(this,o),dh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function uh(o,u,p){ch(o,u),0<p.length&&(o.i=null,o.g.set(Cr(o,u),P(p)),o.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var p=0;p<u.length;p++){var b=u[p];const L=encodeURIComponent(String(b)),U=this.V(b);for(b=0;b<U.length;b++){var z=L;U[b]!==""&&(z+="="+encodeURIComponent(String(U[b]))),o.push(z)}}return this.i=o.join("&")};function Cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Q0(o,u){u&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(p,b){var z=b.toLowerCase();b!=z&&(ch(this,b),uh(this,z,p))},o)),o.j=u}function Z0(o,u){const p=new ks;if(c.Image){const b=new Image;b.onload=w(gn,p,"TestLoadImage: loaded",!0,u,b),b.onerror=w(gn,p,"TestLoadImage: error",!1,u,b),b.onabort=w(gn,p,"TestLoadImage: abort",!1,u,b),b.ontimeout=w(gn,p,"TestLoadImage: timeout",!1,u,b),c.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=o}else u(!1)}function ev(o,u){const p=new ks,b=new AbortController,z=setTimeout(()=>{b.abort(),gn(p,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:b.signal}).then(L=>{clearTimeout(z),L.ok?gn(p,"TestPingServer: ok",!0,u):gn(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(z),gn(p,"TestPingServer: error",!1,u)})}function gn(o,u,p,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(p)}catch{}}function tv(){this.g=new z0}function nv(o,u,p){const b=p||"";try{ih(o,function(z,L){let U=z;h(z)&&(U=sl(z)),u.push(b+L+"="+encodeURIComponent(U))})}catch(z){throw u.push(b+"type="+encodeURIComponent("_badmap")),z}}function Ki(o){this.l=o.Ub||null,this.j=o.eb||!1}_(Ki,il),Ki.prototype.g=function(){return new Xi(this.l,this.j)},Ki.prototype.i=function(o){return function(){return o}}({});function Xi(o,u){Te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Xi,Te),e=Xi.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Is(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Is(this)),this.g&&(this.readyState=3,Is(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function hh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Cs(this):Is(this),this.readyState==3&&hh(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Cs(this))},e.Qa=function(o){this.g&&(this.response=o,Cs(this))},e.ga=function(){this.g&&Cs(this)};function Cs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Is(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=u.next();return o.join(`\r
`)};function Is(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ph(o){let u="";return O(o,function(p,b){u+=b,u+=":",u+=p,u+=`\r
`}),u}function xl(o,u,p){e:{for(b in p){var b=!1;break e}b=!0}b||(p=ph(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):re(o,u,p))}function ge(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(ge,Te);var rv=/^https?$/i,sv=["POST","PUT"];e=ge.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,p,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dl.g(),this.v=this.o?Hu(this.o):Hu(dl),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(L){fh(this,L);return}if(o=p||"",p=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)p.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const L of b.keys())p.set(L,b.get(L));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),z=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(sv,u,void 0))||b||z||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,U]of p)this.g.setRequestHeader(L,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xh(this),this.u=!0,this.g.send(o),this.u=!1}catch(L){fh(this,L)}};function fh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,gh(o),Yi(o)}function gh(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),Yi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yi(this,!0)),ge.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?mh(this):this.bb())},e.bb=function(){mh(this)};function mh(o){if(o.h&&typeof l<"u"&&(!o.v[1]||Wt(o)!=4||o.Z()!=2)){if(o.u&&Wt(o)==4)Fu(o.Ea,0,o);else if(Le(o,"readystatechange"),Wt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var b;if(b=U===0){var z=String(o.D).match(ah)[1]||null;!z&&c.self&&c.self.location&&(z=c.self.location.protocol.slice(0,-1)),b=!rv.test(z?z.toLowerCase():"")}p=b}if(p)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var L=2<Wt(o)?o.g.statusText:""}catch{L=""}o.l=L+" ["+o.Z()+"]",gh(o)}}finally{Yi(o)}}}}function Yi(o,u){if(o.g){xh(o);const p=o.g,b=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Le(o,"ready");try{p.onreadystatechange=b}catch{}}}function xh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Wt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),D0(u)}};function vh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function iv(o){const u={};o=(o.g&&2<=Wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<o.length;b++){if(f(o[b]))continue;var p=A(o[b]);const z=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=u[z]||[];u[z]=L,L.push(p)}k(u,function(b){return b.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(o,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||u}function yh(o){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,o),this.cb=Ps("retryDelaySeedMs",1e4,o),this.Wa=Ps("forwardChannelMaxRetries",2,o),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new eh(o&&o.concurrentRequestLimit),this.Da=new tv,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=yh.prototype,e.la=8,e.G=1,e.connect=function(o,u,p,b){Oe(0),this.W=o,this.H=u||{},p&&b!==void 0&&(this.H.OSID=p,this.H.OAID=b),this.F=this.X,this.I=Th(this,null,this.W),Qi(this)};function vl(o){if(bh(o),o.G==3){var u=o.U++,p=Ht(o.I);if(re(p,"SID",o.K),re(p,"RID",u),re(p,"TYPE","terminate"),Rs(o,p),u=new pn(o,o.j,u),u.L=2,u.v=Gi(Ht(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=u.v,p=!0),p||(u.g=Ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}Sh(o)}function Ji(o){o.g&&(bl(o),o.g.cancel(),o.g=null)}function bh(o){Ji(o),o.u&&(c.clearTimeout(o.u),o.u=null),Zi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Qi(o){if(!th(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ut||W(),F||(Ut(),F=!0),H.add(u,o),o.B=0}}function av(o,u){return nh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=_s(y(o.Ga,o,u),Eh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const z=new pn(this,this.j,o);let L=this.o;if(this.S&&(L?(L=j(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(z.H=L,L=null),this.P)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var b=this.i[p];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(u+=b,4096<u){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=jh(this,z,u),p=Ht(this.I),re(p,"RID",o),re(p,"CVER",22),this.D&&re(p,"X-HTTP-Session-Id",this.D),Rs(this,p),L&&(this.O?u="headers="+encodeURIComponent(String(ph(L)))+"&"+u:this.m&&xl(p,this.m,L)),ml(this.h,z),this.Ua&&re(p,"TYPE","init"),this.P?(re(p,"$req",u),re(p,"SID","null"),z.T=!0,hl(z,p,null)):hl(z,p,u),this.G=2}}else this.G==3&&(o?wh(this,o):this.i.length==0||th(this.h)||wh(this))};function wh(o,u){var p;u?p=u.l:p=o.U++;const b=Ht(o.I);re(b,"SID",o.K),re(b,"RID",p),re(b,"AID",o.T),Rs(o,b),o.m&&o.o&&xl(b,o.m,o.o),p=new pn(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),u&&(o.i=u.D.concat(o.i)),u=jh(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ml(o.h,p),hl(p,b,u)}function Rs(o,u){o.H&&O(o.H,function(p,b){re(u,b,p)}),o.l&&ih({},function(p,b){re(u,b,p)})}function jh(o,u,p){p=Math.min(o.i.length,p);var b=o.l?y(o.l.Na,o.l,o):null;e:{var z=o.i;let L=-1;for(;;){const U=["count="+p];L==-1?0<p?(L=z[0].g,U.push("ofs="+L)):L=0:U.push("ofs="+L);let ee=!0;for(let ke=0;ke<p;ke++){let X=z[ke].g;const Ce=z[ke].map;if(X-=L,0>X)L=Math.max(0,z[ke].g-100),ee=!1;else try{nv(Ce,U,"req"+X+"_")}catch{b&&b(Ce)}}if(ee){b=U.join("&");break e}}}return o=o.i.splice(0,p),u.D=o,b}function _h(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ut||W(),F||(Ut(),F=!0),H.add(u,o),o.v=0}}function yl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=_s(y(o.Fa,o),Eh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=_s(y(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Ji(this),kh(this))};function bl(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function kh(o){o.g=new pn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ht(o.qa);re(u,"RID","rpc"),re(u,"SID",o.K),re(u,"AID",o.T),re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(u,"TO",o.ja),re(u,"TYPE","xmlhttp"),Rs(o,u),o.m&&o.o&&xl(u,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=Gi(Ht(u)),p.m=null,p.P=!0,Ju(p,o)}e.Za=function(){this.C!=null&&(this.C=null,Ji(this),yl(this),Oe(19))};function Zi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Nh(o,u){var p=null;if(o.g==u){Zi(o),bl(o),o.g=null;var b=2}else if(gl(o.h,u))p=u.D,rh(o.h,u),b=1;else return;if(o.G!=0){if(u.o)if(b==1){p=u.m?u.m.length:0,u=Date.now()-u.F;var z=o.B;b=ll(),Le(b,new Ku(b,p)),Qi(o)}else _h(o);else if(z=u.s,z==3||z==0&&0<u.X||!(b==1&&av(o,u)||b==2&&yl(o)))switch(p&&0<p.length&&(u=o.h,u.i=u.i.concat(p)),z){case 1:nr(o,5);break;case 4:nr(o,10);break;case 3:nr(o,6);break;default:nr(o,2)}}}function Eh(o,u){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*u}function nr(o,u){if(o.j.info("Error code "+u),u==2){var p=y(o.fb,o),b=o.Xa;const z=!b;b=new tr(b||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Wi(b,"https"),Gi(b),z?Z0(b.toString(),p):ev(b.toString(),p)}else Oe(2);o.G=0,o.l&&o.l.sa(u),Sh(o),bh(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Sh(o){if(o.G=0,o.ka=[],o.l){const u=sh(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function Th(o,u,p){var b=p instanceof tr?Ht(p):new tr(p);if(b.g!="")u&&(b.g=u+"."+b.g),qi(b,b.s);else{var z=c.location;b=z.protocol,u=u?u+"."+z.hostname:z.hostname,z=+z.port;var L=new tr(null);b&&Wi(L,b),u&&(L.g=u),z&&qi(L,z),p&&(L.l=p),b=L}return p=o.D,u=o.ya,p&&u&&re(b,p,u),re(b,"VER",o.la),Rs(o,b),b}function Ch(o,u,p){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ge(new Ki({eb:p})):new ge(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}e=Ih.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function at(o,u){Te.call(this),this.g=new yh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!f(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!f(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ir(this)}_(at,Te),at.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){vl(this.g)},at.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=sl(o),o=p);u.i.push(new V0(u.Ya++,o)),u.G==3&&Qi(u)},at.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,at.aa.N.call(this)};function Ph(o){al.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const p in u){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}_(Ph,al);function Rh(){ol.call(this),this.status=1}_(Rh,ol);function Ir(o){this.g=o}_(Ir,Ih),Ir.prototype.ua=function(){Le(this.g,"a")},Ir.prototype.ta=function(o){Le(this.g,new Ph(o))},Ir.prototype.sa=function(o){Le(this.g,new Rh)},Ir.prototype.ra=function(){Le(this.g,"b")},at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,cl.NO_ERROR=0,cl.TIMEOUT=8,cl.HTTP_ERROR=6,$0.COMPLETE="complete",L0.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",Te.prototype.listen=Te.prototype.K,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});const Cf="@firebase/firestore";/**
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
 */let Mi="10.14.0";/**
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
 */const ds=new vu("@firebase/firestore");function vt(e,...t){if(ds.logLevel<=J.DEBUG){const n=t.map(Iu);ds.debug(`Firestore (${Mi}): ${e}`,...n)}}function c0(e,...t){if(ds.logLevel<=J.ERROR){const n=t.map(Iu);ds.error(`Firestore (${Mi}): ${e}`,...n)}}function O_(e,...t){if(ds.logLevel<=J.WARN){const n=t.map(Iu);ds.warn(`Firestore (${Mi}): ${e}`,...n)}}function Iu(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Pu(e="Unexpected state"){const t=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+e;throw c0(t),new Error(t)}function si(e,t){e||Pu()}/**
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
 */class ii{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class d0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class M_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class U_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class F_{constructor(t){this.t=t,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){si(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let a=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ii,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const d=a;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ii)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(si(typeof r.accessToken=="string"),new d0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return si(t===null||typeof t=="string"),new Ue(t)}}class $_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class B_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new $_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){si(this.o===void 0);const r=a=>{a.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,vt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const i=a=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?i(a):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(si(typeof n.token=="string"),this.R=n.token,new V_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function W_(e){return e.name==="IndexedDbTransactionError"}class bo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof bo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */new l0([4294967295,4294967295],0);function nc(){return typeof document<"u"?document:null}/**
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
 */class q_{constructor(t,n,r=1e3,i=1.5,a=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&vt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ru{constructor(t,n,r,i,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,a){const l=Date.now()+r,c=new Ru(t,n,l,i,a);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Pf,Rf;(Rf=Pf||(Pf={})).ea="default",Rf.Cache="cache";/**
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
 */function G_(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Map;function K_(e,t,n,r){if(t===!0&&r===!0)throw new qe(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function X_(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Pu()}function Y_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qe(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=X_(e);throw new qe(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new qe(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new qe(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}K_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G_((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class u0{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qe(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new qe(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M_;switch(r.type){case"firstParty":return new B_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qe(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Af.get(n);r&&(vt("ComponentProvider","Removing Datastore"),Af.delete(n),r.terminate())}(this),Promise.resolve()}}function J_(e,t,n,r={}){var i;const a=(e=Y_(e,u0))._getSettings(),l=`${t}:${n}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&O_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Ue.MOCK_USER;else{c=jx(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new qe(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ue(h)}e._authCredentials=new U_(new d0(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new q_(this,"async_queue_retry"),this.Vu=()=>{const r=nc();r&&vt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ii;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!W_(t))throw t;vt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw c0("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Ru.createAndSchedule(this,t,n,r,a=>this.yu(a));return this.Tu.push(i),i}fu(){this.Eu&&Pu()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Q_ extends u0{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new zf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new zf(t),this._firestoreClient=void 0,await t}}}function Z_(e,t){const n=typeof e=="object"?e:bu(),r=typeof e=="string"?e:"(default)",i=Vo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=yx("firestore");a&&J_(i,...a)}return i}(function(t,n=!0){(function(i){Mi=i})(Er),mr(new Vn("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),c=new Q_(new F_(r.getProvider("auth-internal")),new H_(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new qe(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(h.options.projectId,g)}(l,i),l);return a=Object.assign({useFetchStreams:n},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Rt(Cf,"4.7.3",t),Rt(Cf,"4.7.3","esm2017")})();/**
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
 */const h0="firebasestorage.googleapis.com",ek="storageBucket",tk=2*60*1e3,nk=10*60*1e3;/**
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
 */class Mt extends Lt{constructor(t,n,r=0){super(rc(t),`Firebase Storage: ${n} (${rc(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return rc(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zt||(zt={}));function rc(e){return"storage/"+e}function rk(){const e="An unknown error occurred, please check the error payload for server response.";return new Mt(zt.UNKNOWN,e)}function sk(){return new Mt(zt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ik(){return new Mt(zt.CANCELED,"User canceled the upload/download.")}function ak(e){return new Mt(zt.INVALID_URL,"Invalid URL '"+e+"'.")}function ok(e){return new Mt(zt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Lf(e){return new Mt(zt.INVALID_ARGUMENT,e)}function p0(){return new Mt(zt.APP_DELETED,"The Firebase app was deleted.")}function lk(e){return new Mt(zt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class yt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=yt.makeFromUrl(t,n)}catch{return new yt(t,"")}if(r.path==="")return r;throw ok(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function a(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),d={bucket:1,path:3};function h(I){I.path_=decodeURIComponent(I.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${g}/b/${i}/o${y}`,"i"),_={bucket:1,path:3},P=n===h0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",x=new RegExp(`^https?://${P}/${i}/${D}`,"i"),v=[{regex:c,indices:d,postModify:a},{regex:w,indices:_,postModify:h},{regex:x,indices:{bucket:1,path:2},postModify:h}];for(let I=0;I<v.length;I++){const N=v[I],O=N.regex.exec(t);if(O){const k=O[N.indices.bucket];let j=O[N.indices.path];j||(j=""),r=new yt(k,j),N.postModify(r);break}}if(r==null)throw ak(t);return r}}class ck{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function dk(e,t,n){let r=1,i=null,a=null,l=!1,c=0;function d(){return c===2}let h=!1;function g(...D){h||(h=!0,t.apply(null,D))}function m(D){i=setTimeout(()=>{i=null,e(w,d())},D)}function y(){a&&clearTimeout(a)}function w(D,...x){if(h){y();return}if(D){y(),g.call(null,D,...x);return}if(d()||l){y(),g.call(null,D,...x);return}r<64&&(r*=2);let v;c===1?(c=2,v=0):v=(r+Math.random())*1e3,m(v)}let _=!1;function P(D){_||(_=!0,y(),!h&&(i!==null?(D||(c=2),clearTimeout(i),m(0)):D||(c=1)))}return m(0),a=setTimeout(()=>{l=!0,P(!0)},n),P}function uk(e){e(!1)}/**
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
 */function hk(e){return e!==void 0}function Of(e,t,n,r){if(r<t)throw Lf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Lf(`Invalid value for '${e}'. Expected ${n} or less.`)}function pk(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var wo;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(wo||(wo={}));/**
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
 */function fk(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,a=t.indexOf(e)!==-1;return n||i||a}/**
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
 */class gk{constructor(t,n,r,i,a,l,c,d,h,g,m,y=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=d,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=m,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,_)=>{this.resolve_=w,this.reject_=_,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ba(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=c=>{const d=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,h)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const c=a.getErrorCode()===wo.NO_ERROR,d=a.getStatus();if(!c||fk(d,this.additionalRetryCodes_)&&this.retry){const g=a.getErrorCode()===wo.ABORT;r(!1,new ba(!1,null,g));return}const h=this.successCodes_.indexOf(d)!==-1;r(!0,new ba(h,a))})},n=(r,i)=>{const a=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(c,c.getResponse());hk(d)?a(d):a()}catch(d){l(d)}else if(c!==null){const d=rk();d.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,d)):l(d)}else if(i.canceled){const d=this.appDelete_?p0():ik();l(d)}else{const d=sk();l(d)}};this.canceled_?n(!1,new ba(!1,null,!0)):this.backoffId_=dk(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&uk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ba{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function mk(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function xk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function vk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function yk(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function bk(e,t,n,r,i,a,l=!0){const c=pk(e.urlParams),d=e.url+c,h=Object.assign({},e.headers);return vk(h,t),mk(h,n),xk(h,a),yk(h,r),new gk(d,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
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
 */function wk(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function jk(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class jo{constructor(t,n){this._service=t,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new jo(t,n)}get root(){const t=new yt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jk(this._location.path)}get storage(){return this._service}get parent(){const t=wk(this._location.path);if(t===null)return null;const n=new yt(this._location.bucket,t);return new jo(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw lk(t)}}function Mf(e,t){const n=t==null?void 0:t[ek];return n==null?null:yt.makeFromBucketSpec(n,e)}function _k(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:jx(i,e.app.options.projectId))}class kk{constructor(t,n,r,i,a){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=h0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tk,this._maxUploadRetryTime=nk,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=Mf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,t):this._bucket=Mf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new jo(this,t)}_makeRequest(t,n,r,i,a=!0){if(this._deleted)return new ck(p0());{const l=bk(t,this._appId,r,i,n,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Uf="@firebase/storage",Ff="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="storage";function Nk(e=bu(),t){e=Nt(e);const r=Vo(e,f0).getImmediate({identifier:t}),i=yx("storage");return i&&Ek(r,...i),r}function Ek(e,t,n,r={}){_k(e,t,n,r)}function Sk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new kk(n,r,i,t,Er)}function Tk(){mr(new Vn(f0,Sk,"PUBLIC").setMultipleInstances(!0)),Rt(Uf,Ff,""),Rt(Uf,Ff,"esm2017")}Tk();const Ck={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Au=Nx(Ck),$s=A_(Au);Z_(Au);Nk(Au);const g0=T.createContext(void 0),Ik=({children:e})=>{const[t,n]=T.useState(null),[r,i]=T.useState(!0),[a,l]=T.useState(null);T.useEffect(()=>{const w=wj($s,_=>{n(_),i(!1)});return()=>w()},[]);const y={user:t,loading:r,error:a,login:async(w,_)=>{try{l(null),i(!0),await mj($s,w,_)}catch(P){const D=sc(P.code);throw l(D),new Error(D)}finally{i(!1)}},register:async(w,_,P)=>{try{l(null),i(!0);const{user:D}=await gj($s,w,_);P&&await vj(D,{displayName:P})}catch(D){const x=sc(D.code);throw l(x),new Error(x)}finally{i(!1)}},logout:async()=>{try{l(null),await jj($s)}catch(w){throw l("Error al cerrar sesión"),w}},resetPassword:async w=>{try{l(null),await fj($s,w)}catch(_){const P=sc(_.code);throw l(P),new Error(P)}},clearError:()=>l(null)};return s.jsx(g0.Provider,{value:y,children:e})},m0=()=>{const e=T.useContext(g0);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function sc(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const ue=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=m0(),i=un();return r?s.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[s.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),s.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?s.jsx(s.Fragment,{children:e}):s.jsx(Aa,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=T.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:l,className:c="",children:d,...h},g)=>T.createElement("svg",{ref:g,...Pk,width:i,height:i,stroke:r,strokeWidth:l?Number(a)*24/Number(i):a,className:["lucide",`lucide-${Rk(e)}`,c].join(" "),...h},[...t.map(([m,y])=>T.createElement(m,y)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=B("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=B("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=B("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=B("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=B("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=B("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=B("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=B("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=B("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=B("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=B("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=B("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=B("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=B("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=B("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
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
 */const $k=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=B("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=B("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
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
 */const w0=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=B("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
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
 */const hd=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=B("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=B("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
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
 */const wr=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=B("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=B("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Qk=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Je,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:Gn,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:wr,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:us,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:qk,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:Jk,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return s.jsxs("div",{className:"landing-page",children:[s.jsxs("nav",{className:"navbar",children:[s.jsxs("div",{className:"nav-brand",children:[s.jsx(Je,{size:32}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"nav-links",children:[s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx(De,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),s.jsx(De,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),s.jsxs("section",{className:"hero",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),s.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),s.jsxs("div",{className:"hero-buttons",children:[s.jsxs(De,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",s.jsx(_o,{size:20})]}),s.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),s.jsxs("div",{className:"hero-trust",children:[s.jsx("span",{children:"Confiado por +100 empresas de courier"}),s.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>s.jsx(hd,{size:16,fill:"#f59e0b"},r))})]})]}),s.jsx("div",{className:"hero-image",children:s.jsxs("div",{className:"dashboard-preview",children:[s.jsx("div",{className:"preview-header",children:s.jsxs("div",{className:"dots",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})}),s.jsxs("div",{className:"preview-content",children:[s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-chart"})]})]})})]}),s.jsxs("section",{id:"features",className:"features",children:[s.jsx("h2",{children:"Todo lo que necesitas para operar"}),s.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),s.jsx("div",{className:"features-grid",children:t.map((n,r)=>s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(n.icon,{size:28})}),s.jsx("h3",{children:n.title}),s.jsx("p",{children:n.description})]},r))})]}),s.jsxs("section",{id:"pricing",className:"pricing",children:[s.jsx("h2",{children:"Planes simples y transparentes"}),s.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),s.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>s.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&s.jsx("span",{className:"popular-badge",children:"Más Popular"}),s.jsx("h3",{children:n.name}),s.jsx("p",{className:"plan-description",children:n.description}),s.jsxs("div",{className:"plan-price",children:[n.priceLabel&&s.jsx("span",{className:"price-label",children:n.priceLabel}),s.jsxs("span",{className:"price",children:["$",n.price]}),s.jsx("span",{className:"period",children:"/mes"})]}),s.jsx("ul",{className:"plan-features",children:n.features.map((i,a)=>s.jsxs("li",{children:[s.jsx(Cn,{size:16})," ",i]},a))}),s.jsx(De,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),s.jsxs("section",{className:"cta",children:[s.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),s.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),s.jsxs(De,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",s.jsx(_o,{size:24})]})]}),s.jsxs("footer",{className:"footer",children:[s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx(Je,{size:28}),s.jsx("span",{children:"Sistema Courier"}),s.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Producto"}),s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx("a",{href:"/docs",children:"Documentación"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Empresa"}),s.jsx("a",{href:"/about",children:"Nosotros"}),s.jsx("a",{href:"/contact",children:"Contacto"}),s.jsx("a",{href:"/blog",children:"Blog"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"/privacy",children:"Privacidad"}),s.jsx("a",{href:"/terms",children:"Términos"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),s.jsx("style",{children:`
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
      `})]})},Zk=()=>{const e=kt(),[t,n]=T.useState(1),[r,i]=T.useState(!1),[a,l]=T.useState(""),[c,d]=T.useState("idle"),[h,g]=T.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),m=x=>{const{name:f,value:v}=x.target;if(g({...h,[f]:v}),l(""),f==="company_name"){const I=v.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);g(N=>({...N,subdomain:I})),I.length>=3&&y(I)}if(f==="subdomain"){const I=v.toLowerCase().replace(/[^a-z0-9-]/g,"");g(N=>({...N,subdomain:I})),I.length>=3&&y(I)}},y=async x=>{d("checking");try{const v=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:x})})).json();d(v.available?"available":"taken")}catch{d("idle")}},w=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),_=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),P=()=>{t===1&&w()&&n(2)},D=async x=>{if(x.preventDefault(),!!_()){i(!0),l("");try{const f=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),v=await f.json();if(!f.ok)throw new Error(v.error||"Error al crear la cuenta");e(`/onboarding?tenant=${v.tenant.subdomain}`)}catch(f){l(f.message)}finally{i(!1)}}};return s.jsxs("div",{className:"register-page",children:[s.jsxs("div",{className:"register-container",children:[s.jsxs("div",{className:"register-brand",children:[s.jsxs(De,{to:"/",className:"brand-logo",children:[s.jsx(Je,{size:40}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"brand-content",children:[s.jsx("h2",{children:"Comienza tu prueba gratuita"}),s.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),s.jsxs("ul",{className:"brand-features",children:[s.jsxs("li",{children:[s.jsx(Cn,{size:20})," Configuración en minutos"]}),s.jsxs("li",{children:[s.jsx(Cn,{size:20})," Soporte incluido"]}),s.jsxs("li",{children:[s.jsx(Cn,{size:20})," Cancela cuando quieras"]})]})]})]}),s.jsxs("div",{className:"register-form-container",children:[s.jsxs("div",{className:"form-header",children:[s.jsx("h1",{children:"Crear cuenta"}),s.jsxs("p",{children:["Paso ",t," de 2"]})]}),s.jsxs("div",{className:"progress-bar",children:[s.jsx("div",{className:"progress-step active",children:"1"}),s.jsx("div",{className:"progress-line"}),s.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),a&&s.jsxs("div",{className:"error-message",children:[s.jsx(Hn,{size:18}),a]}),s.jsx("form",{onSubmit:D,children:t===1?s.jsxs("div",{className:"form-step",children:[s.jsx("h3",{children:"Información de la empresa"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Nombre de la empresa"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Kt,{size:20}),s.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:m,placeholder:"Mi Empresa de Courier",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu subdominio"}),s.jsxs("div",{className:"input-wrapper subdomain-input",children:[s.jsx(us,{size:20}),s.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:m,placeholder:"miempresa",required:!0}),s.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&s.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&s.jsxs("span",{className:"subdomain-status available",children:[s.jsx(Cn,{size:14})," Disponible"]}),c==="taken"&&s.jsxs("span",{className:"subdomain-status taken",children:[s.jsx(Hn,{size:14})," No disponible"]})]}),s.jsxs("button",{type:"button",onClick:P,className:"btn-next",children:["Continuar ",s.jsx(_o,{size:20})]})]}):s.jsxs("div",{className:"form-step",children:[s.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[s.jsx(Go,{size:18})," Atrás"]}),s.jsx("h3",{children:"Tu cuenta de administrador"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu nombre"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Kk,{size:20}),s.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:m,placeholder:"Juan Pérez",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Email"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Ko,{size:20}),s.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:m,placeholder:"juan@miempresa.com",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(ud,{size:20}),s.jsx("input",{type:"password",name:"password",value:h.password,onChange:m,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Confirmar contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(ud,{size:20}),s.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:m,placeholder:"Repite la contraseña",required:!0})]})]}),s.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),s.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",s.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",s.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),s.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",s.jsx(De,{to:"/login",children:"Iniciar sesión"})]})]})]}),s.jsx("style",{children:`
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
      `})]})},eN=()=>{const e=kt(),[t]=Mb();t.get("tenant");const[n,r]=T.useState(1),[i,a]=T.useState(!1),[l,c]=T.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),d=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=y=>{var _;const w=(_=y.target.files)==null?void 0:_[0];w&&c({...l,logo:w,logo_preview:URL.createObjectURL(w)})},g=async()=>{a(!0);try{if(l.logo){const y=new FormData;y.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:y})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(y){console.error("Error saving onboarding:",y)}finally{a(!1)}},m=()=>{e("/dashboard")};return s.jsxs("div",{className:"onboarding-wizard",children:[s.jsxs("div",{className:"wizard-container",children:[s.jsxs("div",{className:"wizard-header",children:[s.jsx(Je,{size:32,color:"#3b82f6"}),s.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),s.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),s.jsx("div",{className:"wizard-progress",children:[1,2,3].map(y=>s.jsx("div",{className:`progress-dot ${n>=y?"active":""}`,children:n>y?s.jsx(Cn,{size:16}):y},y))}),s.jsxs("div",{className:"wizard-content",children:[n===1&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Hf,{size:32})}),s.jsx("h2",{children:"Sube tu logo"}),s.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),s.jsx("div",{className:"logo-upload",children:l.logo_preview?s.jsxs("div",{className:"logo-preview",children:[s.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),s.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):s.jsxs("label",{className:"upload-area",children:[s.jsx(Hf,{size:40}),s.jsx("span",{children:"Arrastra o haz clic para subir"}),s.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),s.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx($k,{size:32})}),s.jsx("h2",{children:"Elige tus colores"}),s.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),s.jsx("div",{className:"color-picker",children:d.map(y=>s.jsx("button",{className:`color-option ${l.primary_color===y?"selected":""}`,style:{backgroundColor:y},onClick:()=>c({...l,primary_color:y}),children:l.primary_color===y&&s.jsx(Cn,{size:20})},y))}),s.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:s.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Vf,{size:32})}),s.jsx("h2",{children:"Información de contacto"}),s.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),s.jsxs("div",{className:"contact-form",children:[s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Teléfono (opcional)"}),s.jsx("input",{type:"tel",value:l.company_phone,onChange:y=>c({...l,company_phone:y.target.value}),placeholder:"+1 234 567 8900"})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Dirección (opcional)"}),s.jsx("input",{type:"text",value:l.company_address,onChange:y=>c({...l,company_address:y.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),s.jsxs("div",{className:"wizard-nav",children:[n>1?s.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[s.jsx(Go,{size:20})," Atrás"]}):s.jsx("button",{onClick:m,className:"btn-skip",children:"Omitir configuración"}),n<3?s.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",s.jsx(_o,{size:20})]}):s.jsxs("button",{onClick:g,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",s.jsx(Vf,{size:20})]})]})]}),s.jsx("style",{children:`
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
      `})]})},tN=()=>{var x,f,v,I,N,O,k,j;const{tenant:e,isWhiteLabel:t}=pe(),{login:n,clearError:r}=m0(),i=kt(),a=un(),[l,c]=T.useState(""),[d,h]=T.useState(""),[g,m]=T.useState(!1),[y,w]=T.useState(""),_=((f=(x=a.state)==null?void 0:x.from)==null?void 0:f.pathname)||"/dashboard",P=async E=>{E.preventDefault(),m(!0),w(""),r();try{await n(l,d),i(_,{replace:!0})}catch(C){w(C.message||"Error al iniciar sesión")}finally{m(!1)}},D=((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6";return s.jsxs("div",{className:"login-page",children:[s.jsxs("div",{className:"login-container",children:[s.jsx("div",{className:"login-logo",children:(I=e==null?void 0:e.branding)!=null&&I.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):s.jsx("div",{className:"logo-placeholder",children:((O=(N=e==null?void 0:e.branding)==null?void 0:N.company_name)==null?void 0:O.charAt(0))||"C"})}),s.jsx("h1",{children:((k=e==null?void 0:e.branding)==null?void 0:k.company_name)||"Sistema Courier"}),((j=e==null?void 0:e.branding)==null?void 0:j.tagline)&&s.jsx("p",{className:"tagline",children:e.branding.tagline}),s.jsxs("form",{onSubmit:P,children:[y&&s.jsx("div",{className:"error-message",children:y}),s.jsxs("div",{className:"input-group",children:[s.jsx(Ko,{size:20,className:"input-icon"}),s.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:E=>c(E.target.value),required:!0})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(ud,{size:20,className:"input-icon"}),s.jsx("input",{type:"password",placeholder:"Contraseña",value:d,onChange:E=>h(E.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-login",disabled:g,style:{backgroundColor:D},children:g?"Iniciando sesión...":s.jsxs(s.Fragment,{children:[s.jsx(Fk,{size:20}),"Iniciar Sesión"]})}),s.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&s.jsx("div",{className:"login-footer",children:s.jsxs("p",{children:["Powered by ",s.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),s.jsx("style",{children:`
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
      `})]})},nN=()=>{var P,D,x;const{tenant:e,isWhiteLabel:t}=pe(),n=((P=e==null?void 0:e.branding)==null?void 0:P.primary_color)||"#3b82f6",[r,i]=T.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[a,l]=T.useState([]),[c,d]=T.useState(!0);T.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{d(!0);const f="http://localhost:3001",I=await(await fetch(`${f}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(I);const O=await(await fetch(`${f}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(O)}catch(f){console.error("Error fetching dashboard data:",f)}finally{d(!1)}},g=f=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(f),m=f=>{const v=new Date(f),N=new Date().getTime()-v.getTime(),O=Math.floor(N/6e4);if(O<1)return"Hace un momento";if(O<60)return`Hace ${O} min`;const k=Math.floor(O/60);if(k<24)return`Hace ${k} hora${k>1?"s":""}`;const j=Math.floor(k/24);return`Hace ${j} día${j>1?"s":""}`},y=f=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[f]||f,w=f=>{switch(f){case"delivered":return s.jsx(Qe,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return s.jsx(Gn,{size:16,className:"status-icon warning"});case"assigned":case"processing":return s.jsx(Je,{size:16,className:"status-icon info"});default:return s.jsx(yr,{size:16,className:"status-icon pending"})}},_=[{icon:Je,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:Gn,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:wr,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:br,label:"Ingresos Mes",value:g(r.monthlyRevenue),color:"#f59e0b"}];return s.jsxs("div",{className:"dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsx("div",{className:"header-left",children:(D=e==null?void 0:e.branding)!=null&&D.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):s.jsx("span",{className:"header-title",children:((x=e==null?void 0:e.branding)==null?void 0:x.company_name)||"Sistema Courier"})}),s.jsxs("div",{className:"header-right",children:[s.jsx("span",{className:"user-name",children:"Admin"}),s.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),s.jsxs("main",{className:"dashboard-main",children:[s.jsx("div",{className:"stats-grid",children:_.map((f,v)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{backgroundColor:`${f.color}20`,color:f.color},children:s.jsx(f.icon,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:c?"...":f.value}),s.jsx("div",{className:"stat-label",children:f.label})]})]},v))}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Paquetes Recientes"}),s.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),s.jsx("div",{className:"card-content",children:c?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):a.length===0?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):a.slice(0,4).map(f=>s.jsxs("div",{className:"package-item",children:[s.jsxs("div",{className:"package-info",children:[s.jsx("span",{className:"package-id",children:f.tracking_number}),s.jsx("span",{className:"package-client",children:f.client_name||"Sin cliente"})]}),s.jsxs("div",{className:"package-status",children:[w(f.status),s.jsx("span",{children:y(f.status)})]}),s.jsx("span",{className:"package-time",children:m(f.created_at)})]},f.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Rendimiento"}),s.jsx(qn,{size:20,style:{color:"#10b981"}})]}),s.jsxs("div",{className:"card-content performance-grid",children:[s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),s.jsx("span",{className:"perf-value success",children:"94%"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),s.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Incidentes"}),s.jsx("span",{className:"perf-value warning",children:"3"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),s.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&s.jsxs("div",{className:"trial-notice",children:[s.jsx(Hn,{size:20}),s.jsx("span",{children:"Tu período de prueba termina pronto. "}),s.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),s.jsx("style",{children:`
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
      `})]})},rN=()=>{var f,v;const{tenant:e}=pe(),t=kt(),[n,r]=T.useState([]),[i,a]=T.useState(!0),[l,c]=T.useState(""),[d,h]=T.useState(""),[g,m]=T.useState(1),[y,w]=T.useState(0),_=20;T.useEffect(()=>{e&&P()},[e,g,l,d]);const P=async()=>{var I;if(e)try{a(!0);const N="http://localhost:3001",O=new URLSearchParams({page:g.toString(),limit:_.toString(),...l&&{search:l},...d&&{status:d}}),j=await(await fetch(`${N}/api/packages?${O}`,{headers:{"X-Tenant-ID":e.id}})).json();r(j.packages||[]),w(((I=j.pagination)==null?void 0:I.total)||0)}catch(N){console.error("Error fetching packages:",N)}finally{a(!1)}},D=I=>{const O={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[I]||{label:I,color:"#6b7280"};return s.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${O.color}20`,color:O.color},children:O.label})},x=I=>new Date(I).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return s.jsxs("div",{className:"packages-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Paquetes"}),s.jsxs("p",{children:[y," paquetes en total"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(hs,{size:20}),"Nuevo Paquete"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("div",{className:"search-box",children:[s.jsx(Ui,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:I=>{c(I.target.value),m(1)}})]}),s.jsxs("select",{value:d,onChange:I=>{h(I.target.value),m(1)},className:"status-filter",children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"pending",children:"Pendiente"}),s.jsx("option",{value:"processing",children:"Procesando"}),s.jsx("option",{value:"assigned",children:"Asignado"}),s.jsx("option",{value:"in_transit",children:"En tránsito"}),s.jsx("option",{value:"out_for_delivery",children:"En reparto"}),s.jsx("option",{value:"delivered",children:"Entregado"}),s.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),s.jsx("div",{className:"table-container",children:i?s.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Je,{size:48}),s.jsx("h3",{children:"No hay paquetes"}),s.jsx("p",{children:"Crea tu primer paquete para comenzar"}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(hs,{size:20}),"Crear Paquete"]})]}):s.jsxs("table",{className:"packages-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tracking"}),s.jsx("th",{children:"Destinatario"}),s.jsx("th",{children:"Dirección"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(I=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"tracking-number",children:I.tracking_number})}),s.jsx("td",{children:I.recipient_name}),s.jsx("td",{className:"address-cell",children:I.recipient_address}),s.jsx("td",{children:D(I.status)}),s.jsx("td",{children:x(I.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${I.id}`),title:"Ver detalle",children:s.jsx(Lk,{size:16})}),s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${I.id}/edit`),title:"Editar",children:s.jsx(Xo,{size:16})})]})})]},I.id))})]})}),!i&&y>_&&s.jsxs("div",{className:"pagination",children:[s.jsx("button",{disabled:g===1,onClick:()=>m(g-1),children:"Anterior"}),s.jsxs("span",{children:["Página ",g," de ",Math.ceil(y/_)]}),s.jsx("button",{disabled:g>=Math.ceil(y/_),onClick:()=>m(g+1),children:"Siguiente"})]}),s.jsx("style",{children:`
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
            `})]})},sN=()=>{var x,f,v,I;const{tenant:e}=pe(),t=kt(),[n,r]=T.useState(!1),[i,a]=T.useState([]),[l,c]=T.useState([]),[d,h]=T.useState(null),[g,m]=T.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",zone:"",service_type:"standard",weight:"",dimensions:"",declared_value:"",notes:""});T.useEffect(()=>{e&&(y(),w())},[e]),T.useEffect(()=>{g.zone&&g.weight&&parseFloat(g.weight)>0?_():h(null)},[g.zone,g.weight,g.service_type]);const y=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();a(k.clients||[])}catch(N){console.error("Error fetching clients:",N)}},w=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/rates/zones",{headers:{"X-Tenant-ID":e.id}})).json();c(k.zones||[])}catch(N){console.error("Error fetching zones:",N)}},_=async()=>{if(!(!e||!g.zone||!g.weight))try{const k=await(await fetch(`http://localhost:3001/api/rates/calculate?zone=${g.zone}&weight=${g.weight}&serviceType=${g.service_type}`,{headers:{"X-Tenant-ID":e.id}})).json();h(k.totalPrice||null)}catch(N){console.error("Error calculating price:",N),h(null)}},P=N=>{const O=i.find(k=>k.id===N);m(O?{...g,client_id:N,sender_name:O.name,sender_phone:O.phone}:{...g,client_id:N})},D=async N=>{if(N.preventDefault(),!!e){if(!g.client_id||!g.recipient_name||!g.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const k=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...g,weight:parseFloat(g.weight)||0,declared_value:parseFloat(g.declared_value)||0})});if(k.ok){const j=await k.json();alert(`Paquete creado exitosamente! Tracking: ${j.tracking_number}`),t("/packages")}else{const j=await k.json();alert(`Error: ${j.error||"No se pudo crear el paquete"}`)}}catch(O){console.error("Error creating package:",O),alert("Error al crear el paquete")}finally{r(!1)}}};return s.jsxs("div",{className:"new-package-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[s.jsx(Go,{size:20}),"Volver"]}),s.jsx("h1",{children:"Nuevo Paquete"})]}),s.jsxs("form",{onSubmit:D,className:"package-form",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Información del Cliente"}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cliente *"}),s.jsxs("select",{value:g.client_id,onChange:N=>P(N.target.value),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(N=>s.jsx("option",{value:N.id,children:N.name},N.id))]})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Remitente"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Remitente"}),s.jsx("input",{type:"text",value:g.sender_name,onChange:N=>m({...g,sender_name:N.target.value}),placeholder:"Nombre completo"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Remitente"}),s.jsx("input",{type:"tel",value:g.sender_phone,onChange:N=>m({...g,sender_phone:N.target.value}),placeholder:"8888-8888"})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Destinatario"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Destinatario *"}),s.jsx("input",{type:"text",value:g.recipient_name,onChange:N=>m({...g,recipient_name:N.target.value}),placeholder:"Nombre completo",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Destinatario *"}),s.jsx("input",{type:"tel",value:g.recipient_phone,onChange:N=>m({...g,recipient_phone:N.target.value}),placeholder:"8888-8888",required:!0})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Dirección de Entrega *"}),s.jsx("textarea",{value:g.recipient_address,onChange:N=>m({...g,recipient_address:N.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Detalles del Paquete"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Zona de Entrega *"}),s.jsxs("select",{value:g.zone,onChange:N=>m({...g,zone:N.target.value}),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar zona"}),l.map(N=>s.jsx("option",{value:N,children:N},N))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Tipo de Servicio *"}),s.jsxs("select",{value:g.service_type,onChange:N=>m({...g,service_type:N.target.value}),required:!0,children:[s.jsx("option",{value:"standard",children:"Estándar"}),s.jsx("option",{value:"express",children:"Express"}),s.jsx("option",{value:"same_day",children:"Mismo Día"}),s.jsx("option",{value:"scheduled",children:"Programado"})]})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Peso (kg) *"}),s.jsx("input",{type:"number",step:"0.01",value:g.weight,onChange:N=>m({...g,weight:N.target.value}),placeholder:"0.00",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Dimensiones"}),s.jsx("input",{type:"text",value:g.dimensions,onChange:N=>m({...g,dimensions:N.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Valor Declarado (₡)"}),s.jsx("input",{type:"number",step:"0.01",value:g.declared_value,onChange:N=>m({...g,declared_value:N.target.value}),placeholder:"0.00"})]})]}),d!==null&&s.jsxs("div",{className:"price-calculator",children:[s.jsx("div",{className:"price-label",children:"Precio Estimado:"}),s.jsxs("div",{className:"price-value",children:["₡",d.toLocaleString("es-CR",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Notas"}),s.jsx("textarea",{value:g.notes,onChange:N=>m({...g,notes:N.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),s.jsxs("div",{className:"form-actions",children:[s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[s.jsx(w0,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),s.jsx("style",{children:`
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
            `})]})};function pd(){return pd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pd.apply(null,arguments)}function iN(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function aN(e,t){if(e==null)return{};var n,r,i=iN(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function fd(e){"@babel/helpers - typeof";return fd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fd(e)}function oN(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function lN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gd(e,t){return gd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},gd(e,t)}function cN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gd(e,t)}function No(e){return No=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},No(e)}function _0(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_0=function(){return!!e})()}function dN(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function uN(e,t){if(t&&(fd(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dN(e)}function hN(e){var t=_0();return function(){var n,r=No(e);if(t){var i=No(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return uN(this,n)}}var k0={exports:{}},pN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fN=pN,gN=fN;function N0(){}function E0(){}E0.resetWarningCache=N0;var mN=function(){function e(r,i,a,l,c,d){if(d!==gN){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:E0,resetWarningCache:N0};return n.PropTypes=n,n};k0.exports=mN();var xN=k0.exports;const Ze=md(xN);/*!
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
 */function _r(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}_r.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};_r.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};_r.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function zu(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}zu.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,i=0;i<=e;i+=1){var a=i/e,l=this._point(a,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(a,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var d=l-n,h=c-r;t+=Math.sqrt(d*d+h*h)}n=l,r=c}return t};zu.prototype._point=function(e,t,n,r,i){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+i*e*e*e};function vN(e,t,n){var r,i,a,l=null,c=0;n||(n={});var d=function(){c=n.leading===!1?0:Date.now(),l=null,a=e.apply(r,i),l||(r=i=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var g=t-(h-c);return r=this,i=arguments,g<=0||g>t?(l&&(clearTimeout(l),l=null),c=h,a=e.apply(r,i),l||(r=i=null)):!l&&n.trailing!==!1&&(l=setTimeout(d,g)),a}}function te(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=vN(te.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=te.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(i){i.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(i))},this._handleMouseMove=function(i){n._mouseButtonDown&&n._strokeMoveUpdate(i)},this._handleMouseUp=function(i){i.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(i))},this._handleTouchStart=function(i){if(i.targetTouches.length===1){var a=i.changedTouches[0];n._strokeBegin(a)}},this._handleTouchMove=function(i){i.preventDefault();var a=i.targetTouches[0];n._strokeMoveUpdate(a)},this._handleTouchEnd=function(i){var a=i.target===n._canvas;a&&(i.preventDefault(),n._strokeEnd(i))},this.on()}te.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};te.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,i=n.ratio||window.devicePixelRatio||1,a=n.width||this._canvas.width/i,l=n.height||this._canvas.height/i;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,a,l)},this._isEmpty=!1};te.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};te.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};te.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};te.prototype.isEmpty=function(){return this._isEmpty};te.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};te.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),i=this._data[this._data.length-1],a=i&&i[i.length-1],l=a&&r.distanceTo(a)<this.minDistance;if(!(a&&l)){var c=this._addPoint(r),d=c.curve,h=c.widths;d&&h&&this._drawCurve(d,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};te.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],i=r[r.length-1];n.equals(i)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};te.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};te.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};te.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};te.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new _r(e-r.left,t-r.top,n||new Date().getTime())};te.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var i=n.c1,a=new zu(t[1],r,i,t[2]),l=this._calculateCurveWidths(a);return t.shift(),{curve:a,widths:l}}return{}};te.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,i=e.y-t.y,a=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},d={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+i*i),g=Math.sqrt(a*a+l*l),m=c.x-d.x,y=c.y-d.y,w=g/(h+g),_={x:d.x+m*w,y:d.y+y*w},P=t.x-_.x,D=t.y-_.y;return{c1:new _r(c.x+P,c.y+D),c2:new _r(d.x+P,d.y+D)}};te.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(i);return r.start=this._lastWidth,r.end=a,this._lastVelocity=i,this._lastWidth=a,r};te.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};te.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};te.prototype._drawCurve=function(e,t,n){var r=this._ctx,i=n-t,a=Math.floor(e.length());r.beginPath();for(var l=0;l<a;l+=1){var c=l/a,d=c*c,h=d*c,g=1-c,m=g*g,y=m*g,w=y*e.startPoint.x;w+=3*m*c*e.control1.x,w+=3*g*d*e.control2.x,w+=h*e.endPoint.x;var _=y*e.startPoint.y;_+=3*m*c*e.control1.y,_+=3*g*d*e.control2.y,_+=h*e.endPoint.y;var P=t+h*i;this._drawPoint(w,_,P)}r.closePath(),r.fill()};te.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};te.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var i=e[r];if(i.length>1)for(var a=0;a<i.length;a+=1){var l=i[a],c=new _r(l.x,l.y,l.time),d=l.color;if(a===0)this.penColor=d,this._reset(),this._addPoint(c);else if(a!==i.length-1){var h=this._addPoint(c),g=h.curve,m=h.widths;g&&m&&t(g,m,d)}}else{this._reset();var y=i[0];n(y)}}};te.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),i=0,a=0,l=n.width/r,c=n.height/r,d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttributeNS(null,"width",n.width),d.setAttributeNS(null,"height",n.height),this._fromData(t,function(x,f,v){var I=document.createElement("path");if(!isNaN(x.control1.x)&&!isNaN(x.control1.y)&&!isNaN(x.control2.x)&&!isNaN(x.control2.y)){var N="M "+x.startPoint.x.toFixed(3)+","+x.startPoint.y.toFixed(3)+" "+("C "+x.control1.x.toFixed(3)+","+x.control1.y.toFixed(3)+" ")+(x.control2.x.toFixed(3)+","+x.control2.y.toFixed(3)+" ")+(x.endPoint.x.toFixed(3)+","+x.endPoint.y.toFixed(3));I.setAttribute("d",N),I.setAttribute("stroke-width",(f.end*2.25).toFixed(3)),I.setAttribute("stroke",v),I.setAttribute("fill","none"),I.setAttribute("stroke-linecap","round"),d.appendChild(I)}},function(x){var f=document.createElement("circle"),v=typeof e.dotSize=="function"?e.dotSize():e.dotSize;f.setAttribute("r",v),f.setAttribute("cx",x.x),f.setAttribute("cy",x.y),f.setAttribute("fill",x.color),d.appendChild(f)});var h="data:image/svg+xml;base64,",g='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+i+" "+a+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",m=d.innerHTML;if(m===void 0){var y=document.createElement("dummy"),w=d.childNodes;y.innerHTML="";for(var _=0;_<w.length;_+=1)y.appendChild(w[_].cloneNode(!0));m=y.innerHTML}var P="</svg>",D=g+m+P;return h+btoa(D)};te.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};te.prototype.toData=function(){return this._data};var S0={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(lv,function(){return function(n){function r(a){if(i[a])return i[a].exports;var l=i[a]={exports:{},id:a,loaded:!1};return n[a].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(n,r){function i(h){var g=h.getContext("2d"),m=h.width,y=h.height,w=g.getImageData(0,0,m,y).data,_=c(!0,m,y,w),P=c(!1,m,y,w),D=d(!0,m,y,w),x=d(!1,m,y,w),f=x-D+1,v=P-_+1,I=g.getImageData(D,_,f,v);return h.width=f,h.height=v,g.clearRect(0,0,f,v),g.putImageData(I,0,0),h}function a(h,g,m,y){return{red:y[4*(m*g+h)],green:y[4*(m*g+h)+1],blue:y[4*(m*g+h)+2],alpha:y[4*(m*g+h)+3]}}function l(h,g,m,y){return a(h,g,m,y).alpha}function c(h,g,m,y){for(var w=h?1:-1,_=h?0:m-1,P=_;h?P<m:P>-1;P+=w)for(var D=0;D<g;D++)if(l(D,P,g,y))return P;return null}function d(h,g,m,y){for(var w=h?1:-1,_=h?0:g-1,P=_;h?P<g:P>-1;P+=w)for(var D=0;D<m;D++)if(l(P,D,g,y))return P;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}])})})(S0);var yN=S0.exports;const bN=md(yN);var wN=["canvasProps","clearOnResize"],Yo=function(e){cN(n,e);var t=hN(n);function n(){var r;lN(this,n);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return r=t.call.apply(t,[this].concat(a)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var d=aN(c,wN);return d},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new te(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),d=document.createElement("canvas");return d.width=c.width,d.height=c.height,d.getContext("2d").drawImage(c,0,0),bN(d)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,d,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},g=h.width,m=h.height;if(!(typeof g<"u"&&typeof m<"u")){var y=r.getCanvas(),w=Math.max((d=window.devicePixelRatio)!==null&&d!==void 0?d:1,1);typeof g>"u"&&(y.width=y.offsetWidth*w),typeof m>"u"&&(y.height=y.offsetHeight*w),y.getContext("2d").scale(w,w),r.clear()}},r.render=function(){var c=r.props.canvasProps;return wd.createElement("canvas",pd({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,d){return r.getSignaturePad().fromDataURL(c,d)},r.toDataURL=function(c,d){return r.getSignaturePad().toDataURL(c,d)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return oN(n)}(T.Component);Yo.propTypes={velocityFilterWeight:Ze.number,minWidth:Ze.number,maxWidth:Ze.number,minDistance:Ze.number,dotSize:Ze.oneOfType([Ze.number,Ze.func]),penColor:Ze.string,throttle:Ze.number,onEnd:Ze.func,onBegin:Ze.func,canvasProps:Ze.object,clearOnResize:Ze.bool};Yo.defaultProps={clearOnResize:!0};Yo.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const jN=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:i})=>{var w,_;const{tenant:a}=pe(),l=T.useRef(null),[c,d]=T.useState(""),[h,g]=T.useState(!1),m=()=>{var P;(P=l.current)==null||P.clear()},y=async()=>{var P,D;if((P=l.current)!=null&&P.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{g(!0);const x=(D=l.current)==null?void 0:D.toDataURL(),v=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":a.id},body:JSON.stringify({signatureUrl:x,recipientName:n,recipientId:c})});if(v.ok)alert("Entrega confirmada exitosamente"),i();else{const I=await v.json();alert(`Error: ${I.error||"No se pudo confirmar la entrega"}`)}}catch(x){console.error("Error confirmando entrega:",x),alert("Error al confirmar la entrega")}finally{g(!1)}};return s.jsx("div",{className:"modal-overlay",onClick:r,children:s.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Confirmar Entrega"}),s.jsx("button",{className:"btn-close",onClick:r,children:s.jsx(Yk,{size:24})})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"package-info",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tracking:"})," ",t]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Destinatario:"})," ",n]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cédula del Destinatario *"}),s.jsx("input",{type:"text",value:c,onChange:P=>d(P.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),s.jsxs("div",{className:"signature-section",children:[s.jsx("label",{children:"Firma del Destinatario *"}),s.jsx("div",{className:"signature-canvas-container",children:s.jsx(Yo,{ref:l,canvasProps:{className:"signature-canvas"}})}),s.jsxs("button",{className:"btn-clear",onClick:m,disabled:h,children:[s.jsx(Hk,{size:16}),"Limpiar"]})]})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),s.jsxs("button",{className:"btn-primary",onClick:y,disabled:h,children:[s.jsx(Cn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),s.jsx("style",{children:`
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
                        border-color: ${((w=a==null?void 0:a.branding)==null?void 0:w.primary_color)||"#3b82f6"};
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
                        background: ${((_=a==null?void 0:a.branding)==null?void 0:_.primary_color)||"#3b82f6"};
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
                `})]})})},_N=()=>{var P,D;const{id:e}=cx(),{tenant:t}=pe(),n=kt(),[r,i]=T.useState(null),[a,l]=T.useState([]),[c,d]=T.useState(!0),[h,g]=T.useState(!1);T.useEffect(()=>{t&&e&&m()},[t,e]);const m=async()=>{if(!(!t||!e))try{d(!0);const v=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(v)}catch(x){console.error("Error fetching package:",x)}finally{d(!1)}},y=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const v=await f.blob(),I=window.URL.createObjectURL(v),N=document.createElement("a");N.href=I,N.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(N),N.click(),window.URL.revokeObjectURL(I),document.body.removeChild(N)}}catch(x){console.error("Error downloading label:",x),alert("Error al descargar la etiqueta")}},w=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const v=await f.blob(),I=window.URL.createObjectURL(v),N=document.createElement("a");N.href=I,N.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(N),N.click(),window.URL.revokeObjectURL(I),document.body.removeChild(N)}}catch(x){console.error("Error downloading delivery note:",x),alert("Error al descargar la nota de entrega")}},_=x=>{const v={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[x]||{label:x,color:"#6b7280"};return s.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${v.color}20`,color:v.color},children:v.label})};return c?s.jsx("div",{className:"loading-page",children:"Cargando..."}):r?s.jsxs("div",{className:"package-detail-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[s.jsx(Go,{size:20}),"Volver"]}),s.jsxs("div",{className:"header-info",children:[s.jsx("h1",{children:r.tracking_number}),_(r.status)]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"btn-action",onClick:y,title:"Imprimir Etiqueta",children:[s.jsx(Bk,{size:20}),"Etiqueta"]}),s.jsxs("button",{className:"btn-action",onClick:w,title:"Nota de Entrega",children:[s.jsx(ts,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&s.jsxs("button",{className:"btn-deliver",onClick:()=>g(!0),title:"Confirmar Entrega",children:[s.jsx(Qe,{size:20}),"Confirmar Entrega"]}),s.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[s.jsx(Xo,{size:20}),"Editar"]})]})]}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Información General"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Cliente:"}),s.jsx("span",{className:"value",children:r.client_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Courier:"}),s.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Peso:"}),s.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dimensiones:"}),s.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Valor Declarado:"}),s.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Creación:"}),s.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Entrega:"}),s.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Remitente"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.sender_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.sender_phone})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Destinatario"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.recipient_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.recipient_phone})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dirección:"}),s.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&s.jsxs("div",{className:"detail-card full-width",children:[s.jsx("h2",{children:"Notas"}),s.jsx("p",{children:r.notes})]})]}),h&&s.jsx(jN,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>g(!1),onSuccess:()=>{g(!1),m()}}),s.jsx("style",{children:`
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
            `})]}):s.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},kN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(!0),[a,l]=T.useState("");T.useEffect(()=>{e&&c()},[e,a]);const c=async()=>{if(e)try{i(!0);const d="http://localhost:3001",h=new URLSearchParams({...a&&{search:a}}),m=await(await fetch(`${d}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(m.clients||[])}catch(d){console.error("Error:",d)}finally{i(!1)}};return s.jsxs("div",{className:"clients-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Clientes"}),s.jsxs("p",{children:[t.length," clientes registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Ui,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:a,onChange:d=>l(d.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(wr,{size:48}),s.jsx("h3",{children:"No hay clientes"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Paquetes"})]})}),s.jsx("tbody",{children:t.map(d=>s.jsxs("tr",{children:[s.jsx("td",{children:d.name}),s.jsx("td",{children:d.company_name||"-"}),s.jsx("td",{children:d.email}),s.jsx("td",{children:d.phone}),s.jsx("td",{children:d.total_packages})]},d.id))})]})}),s.jsx("style",{children:`
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
            `})]})},NN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(!0),[a,l]=T.useState("");T.useEffect(()=>{e&&c()},[e,a]);const c=async()=>{if(e)try{i(!0);const h="http://localhost:3001",g=new URLSearchParams({...a&&{search:a}}),y=await(await fetch(`${h}/api/couriers?${g}`,{headers:{"X-Tenant-ID":e.id}})).json();n(y.couriers||[])}catch(h){console.error("Error:",h)}finally{i(!1)}},d=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return s.jsxs("div",{className:"couriers-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Couriers"}),s.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Ui,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar courier...",value:a,onChange:h=>l(h.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Gn,{size:48}),s.jsx("h3",{children:"No hay couriers"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Placa"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Entregas"}),s.jsx("th",{children:"Rating"})]})}),s.jsx("tbody",{children:t.map(h=>s.jsxs("tr",{children:[s.jsx("td",{children:h.name}),s.jsx("td",{children:h.phone}),s.jsx("td",{children:d(h.vehicle_type)}),s.jsx("td",{children:h.vehicle_plate||"-"}),s.jsx("td",{children:h.zone||"-"}),s.jsx("td",{children:h.completed_deliveries}),s.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),s.jsx("style",{children:`
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
            `})]})},EN=()=>{var y;const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(!0),[a,l]=T.useState(!1),[c,d]=T.useState(null);T.useEffect(()=>{e&&h()},[e]);const h=async()=>{if(e)try{i(!0);const P=await(await fetch("http://localhost:3001/api/rates",{headers:{"X-Tenant-ID":e.id}})).json();n(P.rates||[])}catch(w){console.error("Error:",w)}finally{i(!1)}},g=async w=>{if(confirm("¿Eliminar esta tarifa?"))try{(await fetch(`http://localhost:3001/api/rates/${w}`,{method:"DELETE",headers:{"X-Tenant-ID":e.id}})).ok&&h()}catch(_){console.error("Error:",_)}},m=w=>({standard:"Estándar",express:"Express",same_day:"Mismo Día",scheduled:"Programado"})[w]||w;return s.jsxs("div",{className:"rates-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Tarifas"}),s.jsxs("p",{children:[t.length," tarifas configuradas"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[s.jsx(hs,{size:20}),"Nueva Tarifa"]})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(br,{size:48}),s.jsx("h3",{children:"No hay tarifas configuradas"}),s.jsx("p",{children:"Crea tu primera tarifa para comenzar"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Peso (kg)"}),s.jsx("th",{children:"Precio Base"}),s.jsx("th",{children:"Precio/kg"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:t.map(w=>s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsx("strong",{children:w.name}),w.description&&s.jsx("div",{className:"description",children:w.description})]}),s.jsx("td",{children:w.zone||"-"}),s.jsxs("td",{children:[w.min_weight," - ",w.max_weight||"∞"]}),s.jsxs("td",{children:["₡",w.base_price.toLocaleString()]}),s.jsxs("td",{children:["₡",w.price_per_kg.toLocaleString()]}),s.jsx("td",{children:m(w.service_type)}),s.jsx("td",{children:s.jsx("span",{className:`status ${w.active?"active":"inactive"}`,children:w.active?"Activa":"Inactiva"})}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>{d(w),l(!0)},title:"Editar",children:s.jsx(Xo,{size:16})}),s.jsx("button",{className:"btn-icon danger",onClick:()=>g(w.id),title:"Eliminar",children:s.jsx(j0,{size:16})})]})})]},w.id))})]})}),s.jsx("style",{children:`
                .rates-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .btn-primary { display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: ${((y=e==null?void 0:e.branding)==null?void 0:y.primary_color)||"#3b82f6"}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
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
            `})]})},SN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(!0),[a,l]=T.useState(""),[c,d]=T.useState("");T.useEffect(()=>{e&&h()},[e,a,c]);const h=async()=>{if(e)try{i(!0);let P="http://localhost:3001/api/incidents?";a&&(P+=`status=${a}&`),c&&(P+=`priority=${c}`);const x=await(await fetch(P,{headers:{"X-Tenant-ID":e.id}})).json();n(x.incidents||[])}catch(_){console.error("Error:",_)}finally{i(!1)}},g=_=>({delay:"Retraso",damage:"Daño",loss:"Pérdida",client_absent:"Cliente Ausente",address_error:"Error de Dirección",other:"Otro"})[_]||_,m=_=>{switch(_){case"open":return s.jsx(Wn,{size:16});case"investigating":return s.jsx(yr,{size:16});case"resolved":return s.jsx(Qe,{size:16});case"closed":return s.jsx(jr,{size:16});default:return null}},y=_=>({open:"Abierta",investigating:"Investigando",resolved:"Resuelta",closed:"Cerrada"})[_]||_,w=_=>({low:"#10b981",medium:"#f59e0b",high:"#ef4444",critical:"#991b1b"})[_]||"#6b7280";return s.jsxs("div",{className:"incidents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Incidencias"}),s.jsxs("p",{children:[t.length," incidencias registradas"]})]})}),s.jsxs("div",{className:"filters",children:[s.jsxs("select",{value:a,onChange:_=>l(_.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"open",children:"Abierta"}),s.jsx("option",{value:"investigating",children:"Investigando"}),s.jsx("option",{value:"resolved",children:"Resuelta"}),s.jsx("option",{value:"closed",children:"Cerrada"})]}),s.jsxs("select",{value:c,onChange:_=>d(_.target.value),children:[s.jsx("option",{value:"",children:"Todas las prioridades"}),s.jsx("option",{value:"low",children:"Baja"}),s.jsx("option",{value:"medium",children:"Media"}),s.jsx("option",{value:"high",children:"Alta"}),s.jsx("option",{value:"critical",children:"Crítica"})]})]}),s.jsx("div",{className:"incidents-list",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Wn,{size:48}),s.jsx("h3",{children:"No hay incidencias"}),s.jsx("p",{children:"No se encontraron incidencias con los filtros seleccionados"})]}):t.map(_=>s.jsxs("div",{className:"incident-card",children:[s.jsxs("div",{className:"incident-header",children:[s.jsxs("div",{className:"incident-title",children:[s.jsx("span",{className:"incident-icon",style:{color:w(_.priority)},children:m(_.status)}),s.jsxs("div",{children:[s.jsx("h3",{children:g(_.type)}),s.jsxs("p",{className:"tracking",children:["Paquete: ",_.tracking_number]})]})]}),s.jsxs("div",{className:"incident-badges",children:[s.jsx("span",{className:`status-badge status-${_.status}`,children:y(_.status)}),s.jsx("span",{className:"priority-badge",style:{backgroundColor:`${w(_.priority)}20`,color:w(_.priority)},children:_.priority.toUpperCase()})]})]}),s.jsxs("div",{className:"incident-body",children:[s.jsx("p",{className:"description",children:_.description}),_.resolution&&s.jsxs("div",{className:"resolution",children:[s.jsx("strong",{children:"Resolución:"})," ",_.resolution]})]}),s.jsxs("div",{className:"incident-footer",children:[s.jsx("span",{className:"date",children:new Date(_.created_at).toLocaleDateString("es-CR")}),s.jsx("span",{className:"client",children:_.client_name})]})]},_.id))}),s.jsx("style",{children:`
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
            `})]})},TN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(null),[a,l]=T.useState(!0);T.useEffect(()=>{e&&(c(),d())},[e]);const c=async()=>{if(e)try{l(!0);const m=await(await fetch("http://localhost:3001/api/fuel",{headers:{"X-Tenant-ID":e.id}})).json();n(m.records||[])}catch(h){console.error("Error:",h)}finally{l(!1)}},d=async()=>{if(e)try{const m=await(await fetch("http://localhost:3001/api/fuel/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(m)}catch(h){console.error("Error:",h)}};return s.jsxs("div",{className:"fuel-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Control de Combustible"}),s.jsxs("p",{children:[t.length," registros de combustible"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(br,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Costo Total"}),s.jsxs("p",{className:"stat-value",children:["₡",r.totalCost.toLocaleString()]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(zk,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Litros Totales"}),s.jsxs("p",{className:"stat-value",children:[r.totalLiters.toFixed(2)," L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Rendimiento Promedio"}),s.jsxs("p",{className:"stat-value",children:[r.averageEfficiency.toFixed(2)," km/L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Bf,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Registros"}),s.jsx("p",{className:"stat-value",children:r.recordCount})]})]})]}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Registros de Combustible"}),a?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Bf,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron registros de combustible"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Courier"}),s.jsx("th",{children:"Litros"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Precio/L"}),s.jsx("th",{children:"Odómetro"}),s.jsx("th",{children:"Distancia"}),s.jsx("th",{children:"Rendimiento"}),s.jsx("th",{children:"Estación"})]})}),s.jsx("tbody",{children:t.map(h=>{var g,m,y;return s.jsxs("tr",{children:[s.jsx("td",{children:new Date(h.created_at).toLocaleDateString("es-CR")}),s.jsx("td",{children:h.courier_name||"-"}),s.jsxs("td",{children:[h.liters.toFixed(2)," L"]}),s.jsxs("td",{children:["₡",h.cost.toLocaleString()]}),s.jsxs("td",{children:["₡",((g=h.price_per_liter)==null?void 0:g.toFixed(2))||"-"]}),s.jsxs("td",{children:[((m=h.odometer_reading)==null?void 0:m.toLocaleString())||"-"," km"]}),s.jsxs("td",{children:[((y=h.distance_traveled)==null?void 0:y.toLocaleString())||"-"," km"]}),s.jsx("td",{children:h.efficiency?s.jsxs("span",{className:"efficiency",children:[h.efficiency.toFixed(2)," km/L"]}):"-"}),s.jsx("td",{children:h.station||"-"})]},h.id)})})]})})]}),s.jsx("style",{children:`
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
            `})]})},CN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(null),[a,l]=T.useState(!0),[c,d]=T.useState("");T.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let P="http://localhost:3001/api/vehicles";c&&(P+=`?status=${c}`);const x=await(await fetch(P,{headers:{"X-Tenant-ID":e.id}})).json();n(x.vehicles||[])}catch(_){console.error("Error:",_)}finally{l(!1)}},g=async()=>{if(e)try{const D=await(await fetch("http://localhost:3001/api/vehicles/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(D)}catch(_){console.error("Error:",_)}},m=_=>{switch(_){case"active":return s.jsx(Qe,{size:20});case"maintenance":return s.jsx(Hn,{size:20});case"inactive":return s.jsx(jr,{size:20});default:return null}},y=_=>{switch(_){case"active":return"#10b981";case"maintenance":return"#f59e0b";case"inactive":return"#ef4444";default:return"#6b7280"}},w=_=>({active:"Activo",maintenance:"Mantenimiento",inactive:"Inactivo"})[_]||_;return s.jsxs("div",{className:"vehicles-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Vehículos"}),s.jsxs("p",{children:[t.length," vehículos registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Hn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Mantenimiento"}),s.jsx("p",{className:"stat-value",children:r.maintenance})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(jr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Inactivos"}),s.jsx("p",{className:"stat-value",children:r.inactive})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Gn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:r.total})]})]})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:c,onChange:_=>d(_.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"maintenance",children:"En Mantenimiento"}),s.jsx("option",{value:"inactive",children:"Inactivos"})]})}),s.jsx("div",{className:"vehicles-grid",children:a?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Gn,{size:48}),s.jsx("h3",{children:"No hay vehículos"}),s.jsx("p",{children:"No se encontraron vehículos con los filtros seleccionados"})]}):t.map(_=>s.jsxs("div",{className:"vehicle-card",children:[s.jsxs("div",{className:"vehicle-header",children:[s.jsx("div",{className:"vehicle-icon",style:{color:y(_.status)},children:m(_.status)}),s.jsx("div",{className:"vehicle-plate",children:_.plate})]}),s.jsxs("div",{className:"vehicle-body",children:[s.jsxs("h3",{children:[_.brand," ",_.model]}),s.jsxs("div",{className:"vehicle-details",children:[_.year&&s.jsxs("span",{children:["Año: ",_.year]}),_.type&&s.jsxs("span",{children:["Tipo: ",_.type]})]}),_.courier_name&&s.jsxs("div",{className:"vehicle-assigned",children:["Asignado a: ",_.courier_name]})]}),s.jsx("div",{className:"vehicle-footer",children:s.jsx("span",{className:"status-badge",style:{backgroundColor:`${y(_.status)}20`,color:y(_.status)},children:w(_.status)})})]},_.id))}),s.jsx("style",{children:`
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
            `})]})},IN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState([]),[a,l]=T.useState(null),[c,d]=T.useState(!0),[h,g]=T.useState("");T.useEffect(()=>{e&&(m(),y(),w())},[e,h]);const m=async()=>{if(e)try{d(!0);let v="http://localhost:3001/api/maintenance";h&&(v+=`?status=${h}`);const N=await(await fetch(v,{headers:{"X-Tenant-ID":e.id}})).json();n(N.records||[])}catch(f){console.error("Error:",f)}finally{d(!1)}},y=async()=>{if(e)try{const I=await(await fetch("http://localhost:3001/api/maintenance/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(I.records||[])}catch(f){console.error("Error:",f)}},w=async()=>{if(e)try{const I=await(await fetch("http://localhost:3001/api/maintenance/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(I)}catch(f){console.error("Error:",f)}},_=f=>({preventive:"Preventivo",corrective:"Correctivo",inspection:"Inspección"})[f]||f,P=f=>({scheduled:"Programado",in_progress:"En Progreso",completed:"Completado"})[f]||f,D=f=>{switch(f){case"scheduled":return s.jsx(ko,{size:16});case"in_progress":return s.jsx(yr,{size:16});case"completed":return s.jsx(Qe,{size:16});default:return null}},x=f=>{const v=new Date,N=new Date(f).getTime()-v.getTime();return Math.ceil(N/(1e3*60*60*24))};return s.jsxs("div",{className:"maintenance-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Mantenimiento de Vehículos"}),s.jsxs("p",{children:[t.length," registros de mantenimiento"]})]})}),a&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(ko,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Programados"}),s.jsx("p",{className:"stat-value",children:a.scheduled})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(yr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Progreso"}),s.jsx("p",{className:"stat-value",children:a.inProgress})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Completados"}),s.jsx("p",{className:"stat-value",children:a.completed})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Próximos 30 días"}),s.jsx("p",{className:"stat-value",children:a.upcoming})]})]})]}),r.length>0&&s.jsxs("div",{className:"upcoming-section",children:[s.jsx("h2",{children:"⚠️ Próximos Servicios (30 días)"}),s.jsx("div",{className:"upcoming-list",children:r.map(f=>{const v=x(f.next_service_date);return s.jsxs("div",{className:`upcoming-card ${v<=7?"urgent":""}`,children:[s.jsxs("div",{className:"upcoming-header",children:[s.jsxs("span",{className:"vehicle-info",children:[f.vehicle_plate," - ",f.vehicle_brand," ",f.vehicle_model]}),s.jsx("span",{className:`days-badge ${v<=7?"urgent":""}`,children:v<=0?"Vencido":`${v} días`})]}),s.jsxs("div",{className:"upcoming-body",children:[s.jsx("p",{children:f.description}),s.jsx("span",{className:"type-badge",children:_(f.type)})]})]},f.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:f=>g(f.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"scheduled",children:"Programados"}),s.jsx("option",{value:"in_progress",children:"En Progreso"}),s.jsx("option",{value:"completed",children:"Completados"})]})}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Historial de Mantenimientos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Xk,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron mantenimientos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Proveedor"}),s.jsx("th",{children:"Próximo Servicio"}),s.jsx("th",{children:"Estado"})]})}),s.jsx("tbody",{children:t.map(f=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(f.created_at).toLocaleDateString("es-CR")}),s.jsxs("td",{children:[s.jsx("strong",{children:f.vehicle_plate}),s.jsx("br",{}),s.jsxs("small",{children:[f.vehicle_brand," ",f.vehicle_model]})]}),s.jsx("td",{children:_(f.type)}),s.jsx("td",{children:f.description}),s.jsx("td",{children:f.cost?`₡${f.cost.toLocaleString()}`:"-"}),s.jsx("td",{children:f.provider||"-"}),s.jsx("td",{children:f.next_service_date?new Date(f.next_service_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${f.status}`,children:[D(f.status),P(f.status)]})})]},f.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},PN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState([]),[a,l]=T.useState(null),[c,d]=T.useState(!0),[h,g]=T.useState("");T.useEffect(()=>{e&&(m(),y(),w())},[e,h]);const m=async()=>{if(e)try{d(!0);let f="http://localhost:3001/api/documents";h&&(f+=`?status=${h}`);const I=await(await fetch(f,{headers:{"X-Tenant-ID":e.id}})).json();n(I.documents||[])}catch(x){console.error("Error:",x)}finally{d(!1)}},y=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/documents/expiring?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(v.documents||[])}catch(x){console.error("Error:",x)}},w=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/documents/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(v)}catch(x){console.error("Error:",x)}},_=x=>{switch(x){case"valid":return s.jsx(Qe,{size:16});case"expiring_soon":return s.jsx(Wn,{size:16});case"expired":return s.jsx(jr,{size:16});default:return null}},P=x=>({valid:"Válido",expiring_soon:"Por Vencer",expired:"Vencido"})[x]||x,D=x=>{const f=new Date,I=new Date(x).getTime()-f.getTime();return Math.ceil(I/(1e3*60*60*24))};return s.jsxs("div",{className:"documents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Documentos"}),s.jsxs("p",{children:[t.length," documentos registrados"]})]})}),a&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Válidos"}),s.jsx("p",{className:"stat-value",children:a.valid})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Por Vencer"}),s.jsx("p",{className:"stat-value",children:a.expiringSoon})]})]}),s.jsxs("div",{className:"stat-card alert-danger",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(jr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Vencidos"}),s.jsx("p",{className:"stat-value",children:a.expired})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(ts,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:a.total})]})]})]}),r.length>0&&s.jsxs("div",{className:"expiring-section",children:[s.jsx("h2",{children:"⚠️ Documentos por Vencer (30 días)"}),s.jsx("div",{className:"expiring-list",children:r.map(x=>{const f=D(x.expiration_date),v=f<0;return s.jsxs("div",{className:`expiring-card ${v?"expired":""}`,children:[s.jsxs("div",{className:"expiring-header",children:[s.jsxs("div",{className:"doc-info",children:[s.jsx("strong",{children:x.document_type}),s.jsxs("span",{className:"entity-info",children:[x.entity_type==="courier"?"👤":"🚗"," ",x.entity_identifier]})]}),s.jsx("span",{className:`days-badge ${v?"expired":f<=7?"urgent":""}`,children:v?"VENCIDO":`${f} días`})]}),s.jsxs("div",{className:"expiring-body",children:[x.document_number&&s.jsxs("p",{children:["Número: ",x.document_number]}),s.jsxs("p",{children:["Vence: ",new Date(x.expiration_date).toLocaleDateString("es-CR")]})]})]},x.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"valid",children:"Válidos"}),s.jsx("option",{value:"expiring_soon",children:"Por Vencer"}),s.jsx("option",{value:"expired",children:"Vencidos"})]})}),s.jsxs("div",{className:"documents-list",children:[s.jsx("h2",{children:"Todos los Documentos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ts,{size:48}),s.jsx("h3",{children:"No hay documentos"}),s.jsx("p",{children:"No se encontraron documentos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Número"}),s.jsx("th",{children:"Emisión"}),s.jsx("th",{children:"Vencimiento"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Notas"})]})}),s.jsx("tbody",{children:t.map(x=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:x.document_type})}),s.jsxs("td",{children:[s.jsx("span",{className:"entity-badge",children:x.entity_type==="courier"?"👤 Courier":"🚗 Vehículo"}),s.jsx("br",{}),s.jsx("small",{children:x.entity_identifier})]}),s.jsx("td",{children:x.document_number||"-"}),s.jsx("td",{children:x.issue_date?new Date(x.issue_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:x.expiration_date?s.jsx("span",{className:x.status==="expired"?"expired-date":"",children:new Date(x.expiration_date).toLocaleDateString("es-CR")}):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${x.status}`,children:[_(x.status),P(x.status)]})}),s.jsx("td",{children:x.notes||"-"})]},x.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},RN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(null),[a,l]=T.useState([]),[c,d]=T.useState(!0),[h,g]=T.useState(""),[m,y]=T.useState(""),[w,_]=T.useState(null);T.useEffect(()=>{e&&(P(),D(),x())},[e,h]);const P=async()=>{if(e)try{d(!0);let O="http://localhost:3001/api/warehouse/locations";h&&(O+=`?zone=${h}`);const j=await(await fetch(O,{headers:{"X-Tenant-ID":e.id}})).json();n(j.locations||[])}catch(N){console.error("Error:",N)}finally{d(!1)}},D=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/warehouse/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(k)}catch(N){console.error("Error:",N)}},x=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/warehouse/zones",{headers:{"X-Tenant-ID":e.id}})).json();l(k.zones||[])}catch(N){console.error("Error:",N)}},f=async()=>{if(!(!e||!m.trim()))try{const O=await fetch(`http://localhost:3001/api/warehouse/search/${m}`,{headers:{"X-Tenant-ID":e.id}});if(O.ok){const k=await O.json();_(k)}else _({error:"Paquete no encontrado en almacén"})}catch(N){console.error("Error:",N),_({error:"Error buscando paquete"})}},v=N=>{switch(N){case"active":return"#10b981";case"full":return"#ef4444";case"inactive":return"#6b7280";default:return"#6b7280"}},I=N=>N>=90?"#ef4444":N>=70?"#f59e0b":"#10b981";return s.jsxs("div",{className:"warehouse-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Almacén"}),s.jsxs("p",{children:[t.length," ubicaciones registradas"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Uk,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Ubicaciones Activas"}),s.jsxs("p",{className:"stat-value",children:[r.activeLocations," / ",r.totalLocations]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Je,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Paquetes en Almacén"}),s.jsx("p",{className:"stat-value",children:r.totalPackages})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Ma,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Capacidad Total"}),s.jsx("p",{className:"stat-value",children:r.totalCapacity})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:`${I(r.utilizationRate)}20`,color:I(r.utilizationRate)},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Utilización"}),s.jsxs("p",{className:"stat-value",children:[r.utilizationRate,"%"]})]})]})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("h2",{children:"Búsqueda Rápida"}),s.jsxs("div",{className:"search-box",children:[s.jsx("input",{type:"text",placeholder:"Buscar por tracking number...",value:m,onChange:N=>y(N.target.value),onKeyPress:N=>N.key==="Enter"&&f()}),s.jsxs("button",{onClick:f,children:[s.jsx(Ui,{size:20}),"Buscar"]})]}),w&&s.jsx("div",{className:`search-result ${w.error?"error":"success"}`,children:w.error?s.jsx("p",{children:w.error}):s.jsxs("div",{children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Paquete encontrado:"})," ",w.tracking_number]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Ubicación:"})," ",w.location_code," - ",w.location_name]})]})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:N=>g(N.target.value),children:[s.jsx("option",{value:"",children:"Todas las zonas"}),a.map(N=>s.jsx("option",{value:N,children:N},N))]})}),s.jsxs("div",{className:"locations-section",children:[s.jsx("h2",{children:"Mapa de Ubicaciones"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Ma,{size:48}),s.jsx("h3",{children:"No hay ubicaciones"}),s.jsx("p",{children:"No se encontraron ubicaciones con los filtros seleccionados"})]}):s.jsx("div",{className:"locations-grid",children:t.map(N=>{const O=N.capacity?N.current_packages/N.capacity*100:0;return s.jsxs("div",{className:"location-card",children:[s.jsxs("div",{className:"location-header",children:[s.jsxs("div",{className:"location-code",style:{color:v(N.status)},children:[s.jsx(Ma,{size:20}),N.code]}),s.jsx("span",{className:`status-badge status-${N.status}`,children:N.status==="active"?"Activo":N.status==="full"?"Lleno":"Inactivo"})]}),s.jsxs("div",{className:"location-body",children:[s.jsx("p",{className:"location-name",children:N.name||"-"}),N.zone&&s.jsxs("p",{className:"location-zone",children:["Zona: ",N.zone]}),s.jsxs("div",{className:"capacity-info",children:[s.jsx("div",{className:"capacity-bar",children:s.jsx("div",{className:"capacity-fill",style:{width:`${O}%`,backgroundColor:I(O)}})}),s.jsxs("p",{className:"capacity-text",children:[N.current_packages," / ",N.capacity||0," paquetes",s.jsxs("span",{className:"utilization",children:["(",O.toFixed(0),"%)"]})]})]})]})]},N.id)})})]}),s.jsx("style",{children:`
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
            `})]})},AN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState([]),[a,l]=T.useState(null),[c,d]=T.useState(!0),[h,g]=T.useState(""),[m,y]=T.useState(!1),[w,_]=T.useState(null);T.useEffect(()=>{e&&(P(),D(),x())},[e]);const P=async()=>{if(e)try{d(!0);const k=await(await fetch("http://localhost:3001/api/arrivals",{headers:{"X-Tenant-ID":e.id}})).json();n(k.arrivals||[])}catch(N){console.error("Error:",N)}finally{d(!1)}},D=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/arrivals/today",{headers:{"X-Tenant-ID":e.id}})).json();i(k.arrivals||[])}catch(N){console.error("Error:",N)}},x=async()=>{if(e)try{const N="http://localhost:3001",O=new Date().toISOString().split("T")[0],j=await(await fetch(`${N}/api/arrivals/stats?date=${O}`,{headers:{"X-Tenant-ID":e.id}})).json();l(j)}catch(N){console.error("Error:",N)}},f=async()=>{if(!(!e||!h.trim()))try{y(!0),_(null);const O=await fetch("http://localhost:3001/api/arrivals",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({trackingNumber:h,condition:"good"})});if(O.ok)_({type:"success",text:`Paquete ${h} registrado exitosamente`}),g(""),P(),D(),x();else{const k=await O.json();_({type:"error",text:k.error||"Error registrando llegada"})}}catch(N){console.error("Error:",N),_({type:"error",text:"Error registrando llegada"})}finally{y(!1)}},v=N=>{switch(N){case"good":return s.jsx(Qe,{size:16});case"damaged":return s.jsx(Wn,{size:16});case"incomplete":return s.jsx(jr,{size:16});default:return null}},I=N=>({good:"Bueno",damaged:"Dañado",incomplete:"Incompleto"})[N]||N;return s.jsxs("div",{className:"arrivals-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Registro de Llegadas"}),s.jsxs("p",{children:[r.length," llegadas hoy"]})]})}),a&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Je,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Hoy"}),s.jsx("p",{className:"stat-value",children:a.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Buen Estado"}),s.jsx("p",{className:"stat-value",children:a.good})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(Wn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Dañados"}),s.jsx("p",{className:"stat-value",children:a.damaged})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(jr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Incompletos"}),s.jsx("p",{className:"stat-value",children:a.incomplete})]})]})]}),s.jsxs("div",{className:"register-section",children:[s.jsx("h2",{children:"Registrar Llegada"}),s.jsxs("div",{className:"register-box",children:[s.jsx("div",{className:"scan-icon",children:s.jsx(Wk,{size:32})}),s.jsx("input",{type:"text",placeholder:"Escanear o ingresar tracking number...",value:h,onChange:N=>g(N.target.value),onKeyPress:N=>N.key==="Enter"&&f(),disabled:m,autoFocus:!0}),s.jsx("button",{onClick:f,disabled:m||!h.trim(),children:m?"Registrando...":"Registrar"})]}),w&&s.jsx("div",{className:`message ${w.type}`,children:w.text})]}),s.jsxs("div",{className:"today-section",children:[s.jsxs("h2",{children:["Llegadas de Hoy (",r.length,")"]}),r.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Je,{size:48}),s.jsx("p",{children:"No hay llegadas registradas hoy"})]}):s.jsx("div",{className:"arrivals-grid",children:r.map(N=>s.jsxs("div",{className:"arrival-card",children:[s.jsxs("div",{className:"arrival-header",children:[s.jsx("span",{className:"tracking",children:N.tracking_number}),s.jsxs("span",{className:`condition-badge condition-${N.condition_status}`,children:[v(N.condition_status),I(N.condition_status)]})]}),s.jsxs("div",{className:"arrival-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"De:"})," ",N.sender_name||"-"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Para:"})," ",N.receiver_name||"-"]}),s.jsx("p",{className:"time",children:new Date(N.arrived_at).toLocaleTimeString("es-CR")})]})]},N.id))})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("h2",{children:"Historial de Llegadas"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Je,{size:48}),s.jsx("p",{children:"No hay llegadas registradas"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha/Hora"}),s.jsx("th",{children:"Tracking"}),s.jsx("th",{children:"Remitente"}),s.jsx("th",{children:"Destinatario"}),s.jsx("th",{children:"Condición"}),s.jsx("th",{children:"Notas"})]})}),s.jsx("tbody",{children:t.map(N=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(N.arrived_at).toLocaleString("es-CR")}),s.jsx("td",{children:s.jsx("strong",{children:N.tracking_number})}),s.jsx("td",{children:N.sender_name||"-"}),s.jsx("td",{children:N.receiver_name||"-"}),s.jsx("td",{children:s.jsxs("span",{className:`condition-badge condition-${N.condition_status}`,children:[v(N.condition_status),I(N.condition_status)]})}),s.jsx("td",{children:N.notes||"-"})]},N.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},DN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(null),[a,l]=T.useState(!0),[c,d]=T.useState("");T.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let _="http://localhost:3001/api/manifests";c&&(_+=`?status=${c}`);const D=await(await fetch(_,{headers:{"X-Tenant-ID":e.id}})).json();n(D.manifests||[])}catch(w){console.error("Error:",w)}finally{l(!1)}},g=async()=>{if(e)try{const P=await(await fetch("http://localhost:3001/api/manifests/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(P)}catch(w){console.error("Error:",w)}},m=w=>{switch(w){case"draft":return s.jsx(yr,{size:16});case"active":return s.jsx(Gn,{size:16});case"completed":return s.jsx(Qe,{size:16});default:return null}},y=w=>({draft:"Borrador",active:"Activo",completed:"Completado"})[w]||w;return s.jsxs("div",{className:"manifests-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Manifiestos de Carga"}),s.jsxs("p",{children:[t.length," manifiestos registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(ts,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:r.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(yr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Borradores"}),s.jsx("p",{className:"stat-value",children:r.draft})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Gn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Qe,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Completados"}),s.jsx("p",{className:"stat-value",children:r.completed})]})]})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:c,onChange:w=>d(w.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"draft",children:"Borradores"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"completed",children:"Completados"})]})}),s.jsxs("div",{className:"manifests-section",children:[s.jsx("h2",{children:"Manifiestos"}),a?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ts,{size:48}),s.jsx("h3",{children:"No hay manifiestos"}),s.jsx("p",{children:"No se encontraron manifiestos con los filtros seleccionados"})]}):s.jsx("div",{className:"manifests-grid",children:t.map(w=>s.jsxs("div",{className:"manifest-card",children:[s.jsxs("div",{className:"manifest-header",children:[s.jsxs("div",{className:"manifest-number",children:[s.jsx(ts,{size:20}),w.manifest_number]}),s.jsxs("span",{className:`status-badge status-${w.status}`,children:[m(w.status),y(w.status)]})]}),s.jsxs("div",{className:"manifest-body",children:[w.route&&s.jsxs("p",{className:"route",children:[s.jsx("strong",{children:"Ruta:"})," ",w.route]}),w.courier_name&&s.jsxs("p",{children:[s.jsx("strong",{children:"Courier:"})," ",w.courier_name]}),w.date&&s.jsxs("p",{children:[s.jsx("strong",{children:"Fecha:"})," ",new Date(w.date).toLocaleDateString("es-CR")]}),s.jsxs("div",{className:"packages-count",children:[s.jsx("strong",{children:w.total_packages})," paquetes"]})]})]},w.id))})]}),s.jsx("style",{children:`
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
            `})]})},zN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(null),[a,l]=T.useState(!0),[c,d]=T.useState("");T.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let y="http://localhost:3001/api/shippers";c&&(y+=`?search=${c}`);const _=await(await fetch(y,{headers:{"X-Tenant-ID":e.id}})).json();n(_.shippers||[])}catch(m){console.error("Error:",m)}finally{l(!1)}},g=async()=>{if(e)try{const w=await(await fetch("http://localhost:3001/api/shippers/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(w)}catch(m){console.error("Error:",m)}};return s.jsxs("div",{className:"shippers-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Remitentes Frecuentes"}),s.jsxs("p",{children:[t.length," remitentes registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(wr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Remitentes"}),s.jsx("p",{className:"stat-value",children:r.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Je,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Envíos"}),s.jsx("p",{className:"stat-value",children:r.totalShipments})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Promedio por Remitente"}),s.jsx("p",{className:"stat-value",children:r.total>0?(r.totalShipments/r.total).toFixed(1):0})]})]})]}),r&&r.topShippers.length>0&&s.jsxs("div",{className:"top-section",children:[s.jsx("h2",{children:"🏆 Top 5 Remitentes"}),s.jsx("div",{className:"top-grid",children:r.topShippers.map((m,y)=>s.jsxs("div",{className:"top-card",children:[s.jsxs("div",{className:"rank",children:["#",y+1]}),s.jsxs("div",{className:"top-info",children:[s.jsx("h3",{children:m.name}),s.jsxs("p",{className:"shipments",children:[m.total_shipments," envíos"]})]})]},m.id))})]}),s.jsx("div",{className:"search-section",children:s.jsx("input",{type:"text",placeholder:"Buscar por nombre, teléfono o email...",value:c,onChange:m=>d(m.target.value)})}),s.jsxs("div",{className:"shippers-section",children:[s.jsx("h2",{children:"Todos los Remitentes"}),a?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(wr,{size:48}),s.jsx("h3",{children:"No hay remitentes"}),s.jsx("p",{children:"No se encontraron remitentes con los criterios de búsqueda"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Ciudad"}),s.jsx("th",{children:"Dirección"}),s.jsx("th",{children:"Envíos"})]})}),s.jsx("tbody",{children:t.map(m=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:m.name})}),s.jsx("td",{children:m.phone||"-"}),s.jsx("td",{children:m.email||"-"}),s.jsx("td",{children:m.city||"-"}),s.jsx("td",{children:m.address||"-"}),s.jsx("td",{children:s.jsx("span",{className:"shipments-badge",children:m.total_shipments})})]},m.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},LN=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState([]),[a,l]=T.useState(null),[c,d]=T.useState(!0),[h,g]=T.useState("");T.useEffect(()=>{e&&(m(),y(),w())},[e,h]);const m=async()=>{if(e)try{d(!0);let f="http://localhost:3001/api/expenses";h&&(f+=`?status=${h}`);const I=await(await fetch(f,{headers:{"X-Tenant-ID":e.id}})).json();n(I.expenses||[])}catch(x){console.error("Error:",x)}finally{d(!1)}},y=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/expenses/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(v.expenses||[])}catch(x){console.error("Error:",x)}},w=async()=>{if(e)try{const v=await(await fetch("http://localhost:3001/api/expenses/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(v)}catch(x){console.error("Error:",x)}},_=x=>({daily:"Diario",weekly:"Semanal",monthly:"Mensual",yearly:"Anual"})[x]||x,P=x=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(x),D=x=>{const f=new Date,I=new Date(x).getTime()-f.getTime();return Math.ceil(I/(1e3*60*60*24))};return s.jsxs("div",{className:"expenses-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gastos Recurrentes"}),s.jsxs("p",{children:[t.length," gastos registrados"]})]})}),a&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(br,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Gastos"}),s.jsx("p",{className:"stat-value",children:a.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(ko,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:a.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Mensual"}),s.jsx("p",{className:"stat-value",children:P(a.totalMonthly)})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#e0e7ff",color:"#4f46e5"},children:s.jsx(qn,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Anual"}),s.jsx("p",{className:"stat-value",children:P(a.totalYearly)})]})]})]}),r.length>0&&s.jsxs("div",{className:"upcoming-section",children:[s.jsxs("h2",{children:[s.jsx(Hn,{size:20})," Próximos Vencimientos (30 días)"]}),s.jsx("div",{className:"upcoming-grid",children:r.map(x=>{const f=D(x.next_due_date),v=f<=7;return s.jsxs("div",{className:`upcoming-card ${v?"urgent":""}`,children:[s.jsxs("div",{className:"upcoming-header",children:[s.jsx("strong",{children:x.name}),s.jsx("span",{className:"amount",children:P(x.amount)})]}),s.jsxs("div",{className:"upcoming-body",children:[s.jsxs("p",{className:"due-date",children:["Vence: ",new Date(x.next_due_date).toLocaleDateString("es-CR")]}),s.jsx("p",{className:"days-left",children:f>0?`${f} días`:"Vencido"})]})]},x.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"paused",children:"Pausados"}),s.jsx("option",{value:"cancelled",children:"Cancelados"})]})}),s.jsxs("div",{className:"expenses-section",children:[s.jsx("h2",{children:"Todos los Gastos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(br,{size:48}),s.jsx("h3",{children:"No hay gastos"}),s.jsx("p",{children:"No se encontraron gastos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Categoría"}),s.jsx("th",{children:"Monto"}),s.jsx("th",{children:"Frecuencia"}),s.jsx("th",{children:"Próximo Vencimiento"}),s.jsx("th",{children:"Estado"})]})}),s.jsx("tbody",{children:t.map(x=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:x.name})}),s.jsx("td",{children:x.category||"-"}),s.jsx("td",{className:"amount-cell",children:P(x.amount)}),s.jsx("td",{children:_(x.frequency)}),s.jsx("td",{children:x.next_due_date?new Date(x.next_due_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:s.jsx("span",{className:`status-badge status-${x.status}`,children:x.status==="active"?"Activo":x.status==="paused"?"Pausado":"Cancelado"})})]},x.id))})]})})]}),s.jsx("style",{children:`
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
            `})]})},ON=()=>{const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(null),[a,l]=T.useState(!0),[c,d]=T.useState(""),[h,g]=T.useState("");T.useEffect(()=>{e&&(m(),y())},[e,c,h]);const m=async()=>{if(e)try{l(!0);let _="http://localhost:3001/api/suppliers?";c&&(_+=`search=${c}&`),h&&(_+=`status=${h}&`);const D=await(await fetch(_,{headers:{"X-Tenant-ID":e.id}})).json();n(D.suppliers||[])}catch(w){console.error("Error:",w)}finally{l(!1)}},y=async()=>{if(e)try{const P=await(await fetch("http://localhost:3001/api/suppliers/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(P)}catch(w){console.error("Error:",w)}};return s.jsxs("div",{className:"suppliers-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Proveedores"}),s.jsxs("p",{children:[t.length," proveedores registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Kt,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total Proveedores"}),s.jsx("p",{className:"stat-value",children:r.total})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Kt,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(Kt,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Inactivos"}),s.jsx("p",{className:"stat-value",children:r.inactive})]})]})]}),r&&r.byCategory.length>0&&s.jsxs("div",{className:"categories-section",children:[s.jsx("h2",{children:"Por Categoría"}),s.jsx("div",{className:"categories-grid",children:r.byCategory.map(w=>s.jsxs("div",{className:"category-card",children:[s.jsx("span",{className:"category-name",children:w.category}),s.jsx("span",{className:"category-count",children:w.count})]},w.category))})]}),s.jsxs("div",{className:"filters",children:[s.jsx("input",{type:"text",placeholder:"Buscar por nombre, contacto o email...",value:c,onChange:w=>d(w.target.value)}),s.jsxs("select",{value:h,onChange:w=>g(w.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"inactive",children:"Inactivos"})]})]}),s.jsxs("div",{className:"suppliers-section",children:[s.jsx("h2",{children:"Todos los Proveedores"}),a?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Kt,{size:48}),s.jsx("h3",{children:"No hay proveedores"}),s.jsx("p",{children:"No se encontraron proveedores con los criterios de búsqueda"})]}):s.jsx("div",{className:"suppliers-grid",children:t.map(w=>s.jsxs("div",{className:"supplier-card",children:[s.jsxs("div",{className:"supplier-header",children:[s.jsxs("div",{className:"supplier-name",children:[s.jsx(Kt,{size:20}),s.jsx("strong",{children:w.name})]}),s.jsx("span",{className:`status-badge status-${w.status}`,children:w.status==="active"?"Activo":"Inactivo"})]}),s.jsxs("div",{className:"supplier-body",children:[w.contact_name&&s.jsxs("p",{className:"contact-name",children:["👤 ",w.contact_name]}),w.phone&&s.jsxs("p",{className:"contact-item",children:[s.jsx(y0,{size:14})," ",w.phone]}),w.email&&s.jsxs("p",{className:"contact-item",children:[s.jsx(Ko,{size:14})," ",w.email]}),w.city&&s.jsxs("p",{className:"contact-item",children:[s.jsx(Ma,{size:14})," ",w.city]}),w.category&&s.jsx("div",{className:"category-tag",children:w.category})]})]},w.id))})]}),s.jsx("style",{children:`
                .suppliers-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .categories-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .categories-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .categories-grid { display: flex; flex-wrap: wrap; gap: 12px; }
                .category-card { background: #f3f4f6; padding: 12px 20px; border-radius: 8px; display: flex; align-items: center; gap: 12px; }
                .category-name { font-weight: 600; color: #1f2937; }
                .category-count { background: #2563eb; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 700; }
                
                .filters { display: flex; gap: 12px; margin-bottom: 24px; }
                .filters input { flex: 1; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
                .filters select { padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .suppliers-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .suppliers-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .suppliers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
                .supplier-card { background: #f9fafb; border-radius: 12px; padding: 20px; border: 2px solid #e5e7eb; transition: transform 0.2s; }
                .supplier-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .supplier-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb; }
                .supplier-name { display: flex; align-items: center; gap: 8px; font-size: 16px; color: #1f2937; }
                .status-badge { display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-active { background: #d1fae5; color: #065f46; }
                .status-badge.status-inactive { background: #fee2e2; color: #991b1b; }
                
                .supplier-body { }
                .contact-name { margin: 8px 0; font-size: 14px; color: #374151; font-weight: 600; }
                .contact-item { margin: 6px 0; font-size: 14px; color: #6b7280; display: flex; align-items: center; gap: 8px; }
                .category-tag { display: inline-block; margin-top: 12px; padding: 6px 12px; background: #dbeafe; color: #1e40af; border-radius: 6px; font-size: 12px; font-weight: 600; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},MN=()=>s.jsxs("div",{className:"loading-page",children:[s.jsxs("div",{className:"loading-container",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("h2",{children:"Cargando..."}),s.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),s.jsx("style",{children:`
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
      `})]}),UN=({message:e})=>s.jsxs("div",{className:"error-page",children:[s.jsxs("div",{className:"error-container",children:[s.jsx("div",{className:"error-icon",children:s.jsx(Wn,{size:64})}),s.jsx("h1",{children:"No se pudo cargar"}),s.jsx("p",{className:"error-message",children:e}),s.jsxs("div",{className:"error-actions",children:[s.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),s.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),s.jsx("style",{children:`
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
      `})]}),FN=()=>{var C,A;const{tenant:e}=pe(),[t,n]=T.useState([]),[r,i]=T.useState(!0),[a,l]=T.useState(""),[c,d]=T.useState(!1),[h,g]=T.useState(null),[m,y]=T.useState(null),[w,_]=T.useState(""),[P,D]=T.useState(""),x=((C=e==null?void 0:e.plan)==null?void 0:C.id)==="enterprise",f=((A=e==null?void 0:e.branding)==null?void 0:A.primary_color)||"#3b82f6";T.useEffect(()=>{v()},[]);const v=async()=>{try{const S=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(S)}catch(R){console.error("Error fetching domains:",R)}finally{i(!1)}},I=async R=>{if(R.preventDefault(),!!a.trim()){d(!0),_("");try{const S=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:a})}),ye=await S.json();if(!S.ok)throw new Error(ye.error||"Error agregando dominio");n([...t,ye.domain]),g(ye.dns_instructions),l(""),D("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(S){_(S.message)}finally{d(!1)}}},N=async R=>{y(R),_("");try{const ye=await(await fetch(`/api/domains/${R}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();ye.verified?(D("DNS verificado. El SSL se está configurando."),v()):_(ye.message)}catch{_("Error verificando DNS")}finally{y(null)}},O=async R=>{try{await fetch(`/api/domains/${R}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),D("Dominio establecido como principal"),v()}catch{_("Error estableciendo dominio principal")}},k=async R=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${R}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(S=>S.id!==R)),D("Dominio eliminado")}catch{_("Error eliminando dominio")}},j=R=>{navigator.clipboard.writeText(R),D("Copiado al portapapeles"),setTimeout(()=>D(""),2e3)},E=R=>{switch(R){case"active":return s.jsxs("span",{className:"badge success",children:[s.jsx(Qe,{size:14})," Activo"]});case"provisioning":return s.jsxs("span",{className:"badge warning",children:[s.jsx(yr,{size:14})," Configurando SSL"]});case"pending":return s.jsxs("span",{className:"badge pending",children:[s.jsx(Hn,{size:14})," Pendiente verificación"]});case"failed":return s.jsxs("span",{className:"badge danger",children:[s.jsx(Hn,{size:14})," Error"]});default:return null}};return x?s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("header",{className:"page-header",children:[s.jsx("h1",{children:"Configuración White Label"}),s.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),w&&s.jsx("div",{className:"alert error",children:w}),P&&s.jsx("div",{className:"alert success",children:P}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsxs("h3",{children:[s.jsx(us,{size:20})," Dominios"]})}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"domains-list",children:t.map(R=>s.jsxs("div",{className:"domain-row",children:[s.jsxs("div",{className:"domain-info",children:[s.jsxs("div",{className:"domain-name",children:[R.is_primary&&s.jsx(hd,{size:16,className:"primary-star"}),R.domain,R.domain_type==="subdomain"&&s.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),E(R.ssl_status)]}),s.jsxs("div",{className:"domain-actions",children:[R.ssl_status==="pending"&&s.jsx("button",{onClick:()=>N(R.id),disabled:m===R.id,className:"btn-action",children:m===R.id?s.jsx(Vk,{size:16,className:"spin"}):"Verificar DNS"}),R.ssl_status==="active"&&!R.is_primary&&s.jsxs("button",{onClick:()=>O(R.id),className:"btn-action",children:[s.jsx(hd,{size:16})," Hacer principal"]}),R.domain_type==="custom"&&s.jsx("button",{onClick:()=>k(R.id),className:"btn-delete",children:s.jsx(j0,{size:16})}),s.jsx("a",{href:`https://${R.domain}`,target:"_blank",className:"btn-action",children:s.jsx(Du,{size:16})})]})]},R.id))}),s.jsxs("form",{onSubmit:I,className:"add-domain-form",children:[s.jsx("input",{type:"text",placeholder:"miempresa.com",value:a,onChange:R=>l(R.target.value)}),s.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[s.jsx(hs,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&s.jsxs("div",{className:"card instructions-card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Configuración DNS"})}),s.jsxs("div",{className:"card-content",children:[s.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),s.jsxs("div",{className:"dns-record",children:[s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Tipo"}),s.jsx("span",{children:h.type})]}),s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Nombre"}),s.jsx("span",{children:h.name}),s.jsx("button",{onClick:()=>j(h.name),className:"copy-btn",children:s.jsx($f,{size:14})})]}),s.jsxs("div",{className:"dns-field wide",children:[s.jsx("label",{children:"Valor"}),s.jsx("span",{children:h.value}),s.jsx("button",{onClick:()=>j(h.value),className:"copy-btn",children:s.jsx($f,{size:14})})]})]}),s.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),s.jsx("style",{children:Wf(f)})]}):s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("div",{className:"upgrade-notice",children:[s.jsx(us,{size:48}),s.jsx("h2",{children:"White Label disponible en Enterprise"}),s.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),s.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),s.jsx("style",{children:Wf(f)})]})},Wf=e=>`
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
`,$N=()=>{const[e,t]=T.useState(null),[n,r]=T.useState(!0);T.useEffect(()=>{i()},[]);const i=async()=>{try{const d=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(d)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return s.jsx("div",{className:"loading",children:"Cargando dashboard..."});const a=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return s.jsxs("div",{className:"super-admin-dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Super Admin Dashboard"}),s.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),s.jsx("div",{className:"header-actions",children:s.jsxs(De,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(hs,{size:20}),"Nuevo Tenant"]})})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card primary",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(Kt,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),s.jsxs("div",{className:"stat-card success",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(wr,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Activas"}),s.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),s.jsxs("div",{className:"stat-card warning",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(br,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:a((e==null?void 0:e.summary.mrr)||0)}),s.jsx("div",{className:"stat-label",children:"MRR"}),s.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),s.jsxs("div",{className:"stat-card danger",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(Gk,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),s.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),s.jsxs("div",{className:"content-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Empresas Recientes"}),s.jsx(De,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>s.jsxs("div",{className:"tenant-row",children:[s.jsx("div",{className:"tenant-avatar",children:c.logo_url?s.jsx("img",{src:c.logo_url,alt:c.name}):s.jsx("span",{children:c.name.charAt(0)})}),s.jsxs("div",{className:"tenant-info",children:[s.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),s.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),s.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),s.jsx("div",{className:"tenant-plan",children:c.plan_id}),s.jsx(De,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:s.jsx(x0,{size:18})})]},c.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Ingresos Mensuales"}),s.jsx(qn,{size:20,className:"success"})]}),s.jsx("div",{className:"card-content chart-container",children:s.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,d)=>s.jsxs("div",{className:"chart-bar",children:[s.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),s.jsx("span",{className:"bar-label",children:c.month}),s.jsx("span",{className:"bar-value",children:a(c.revenue)})]},d))})})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Por Plan"})}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,d)=>s.jsxs("div",{className:"distribution-row",children:[s.jsx("span",{className:"dist-label",children:c.plan_id}),s.jsx("div",{className:"dist-bar",children:s.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][d%4]}})}),s.jsx("span",{className:"dist-count",children:c.count})]},d))})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Acciones Rápidas"})}),s.jsxs("div",{className:"card-content quick-actions",children:[s.jsxs(De,{to:"/super-admin/tenants",className:"quick-action",children:[s.jsx(Kt,{size:24}),s.jsx("span",{children:"Gestionar Empresas"})]}),s.jsxs(De,{to:"/super-admin/subscriptions",className:"quick-action",children:[s.jsx(br,{size:24}),s.jsx("span",{children:"Ver Suscripciones"})]}),s.jsxs(De,{to:"/super-admin/plans",className:"quick-action",children:[s.jsx(qn,{size:24}),s.jsx("span",{children:"Configurar Planes"})]})]})]})]}),s.jsx("style",{children:`
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
      `})]})},BN=()=>{const e=kt(),[t,n]=T.useState([]),[r,i]=T.useState({page:1,limit:20,total:0,pages:0}),[a,l]=T.useState(!0),[c,d]=T.useState(""),[h,g]=T.useState(""),[m,y]=T.useState(null);T.useEffect(()=>{w()},[r.page,h]);const w=async()=>{try{l(!0);const v=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),N=await(await fetch(`/api/super-admin/tenants?${v}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(N.tenants),i(N.pagination)}catch(v){console.error("Error fetching tenants:",v)}finally{l(!1)}},_=v=>{v.preventDefault(),i({...r,page:1}),w()},P=async v=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${v}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),w()}catch(I){console.error("Error suspending tenant:",I)}},D=async v=>{try{await fetch(`/api/super-admin/tenants/${v}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),w()}catch(I){console.error("Error activating tenant:",I)}},x=v=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[v]||"bg-blue"}`,f=v=>new Date(v).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return s.jsxs("div",{className:"tenants-management",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(De,{to:"/super-admin",className:"back-link",children:s.jsx(dd,{size:20})}),s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Empresas"}),s.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),s.jsxs(De,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(hs,{size:20}),"Nueva Empresa"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("form",{onSubmit:_,className:"search-box",children:[s.jsx(Ui,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:v=>d(v.target.value)})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx(Ok,{size:18}),s.jsxs("select",{value:h,onChange:v=>g(v.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"trial",children:"En prueba"}),s.jsx("option",{value:"suspended",children:"Suspendidos"}),s.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Subdominio"}),s.jsx("th",{children:"Plan"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Creado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:a?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(v=>{var I,N,O;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"tenant-cell",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((I=v.branding)==null?void 0:I.primary_color)||"#3b82f6"},children:(N=v.branding)!=null&&N.logo_url?s.jsx("img",{src:v.branding.logo_url,alt:""}):v.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("div",{className:"tenant-name",children:((O=v.branding)==null?void 0:O.company_name)||v.name}),s.jsxs("div",{className:"tenant-id",children:[v.id.slice(0,8),"..."]})]})]})}),s.jsx("td",{children:s.jsxs("a",{href:`https://${v.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[v.subdomain,s.jsx(Du,{size:14})]})}),s.jsx("td",{children:s.jsx("span",{className:"plan-badge",children:v.plan_id})}),s.jsx("td",{children:s.jsx("span",{className:x(v.status),children:v.status})}),s.jsx("td",{children:f(v.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions-cell",children:[s.jsx("button",{onClick:()=>e(`/super-admin/tenants/${v.id}`),className:"action-btn",title:"Ver detalles",children:s.jsx(x0,{size:18})}),v.status==="active"?s.jsx("button",{onClick:()=>P(v.id),className:"action-btn danger",title:"Suspender",children:s.jsx(v0,{size:18})}):v.status==="suspended"&&s.jsx("button",{onClick:()=>D(v.id),className:"action-btn success",title:"Activar",children:s.jsx(b0,{size:18})})]})})]},v.id)})})]})}),r.pages>1&&s.jsxs("div",{className:"pagination",children:[s.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[s.jsx(dd,{size:18}),"Anterior"]}),s.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),s.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",s.jsx(Ak,{size:18})]})]}),s.jsx("style",{children:`
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
      `})]})},VN=()=>{const{id:e}=cx();kt();const[t,n]=T.useState(null),[r,i]=T.useState(!0),[a,l]=T.useState(!1),[c,d]=T.useState({name:"",plan_id:""});T.useEffect(()=>{h()},[e]);const h=async()=>{try{const _=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(_),d({name:_.name,plan_id:_.plan_id})}catch(w){console.error("Error fetching tenant:",w)}finally{i(!1)}},g=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(w){console.error("Error updating tenant:",w)}},m=async w=>{if(confirm(w==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${w}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(P){console.error("Error changing status:",P)}},y=w=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[w]||"#3b82f6";return r?s.jsx("div",{className:"loading-page",children:"Cargando..."}):t?s.jsxs("div",{className:"tenant-detail",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(De,{to:"/super-admin/tenants",className:"back-link",children:s.jsx(dd,{size:20})}),s.jsxs("div",{className:"tenant-header",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?s.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("h1",{children:t.branding.company_name||t.name}),s.jsxs("div",{className:"tenant-meta",children:[s.jsx("span",{className:"status-dot",style:{backgroundColor:y(t.status)}}),s.jsx("span",{children:t.status}),s.jsx("span",{className:"separator",children:"•"}),s.jsx("span",{children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[s.jsx(Du,{size:18}),"Visitar"]}),t.status==="active"?s.jsxs("button",{onClick:()=>m("suspend"),className:"btn btn-danger",children:[s.jsx(v0,{size:18}),"Suspender"]}):t.status==="suspended"&&s.jsxs("button",{onClick:()=>m("activate"),className:"btn btn-success",children:[s.jsx(b0,{size:18}),"Activar"]})]})]}),s.jsxs("div",{className:"detail-content",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Información General"}),a?s.jsxs("button",{onClick:g,className:"btn btn-primary btn-sm",children:[s.jsx(w0,{size:16}),"Guardar"]}):s.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:s.jsx(Xo,{size:18})})]}),s.jsxs("div",{className:"card-content info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx(Kt,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Nombre"}),a?s.jsx("input",{value:c.name,onChange:w=>d({...c,name:w.target.value})}):s.jsx("span",{children:t.name})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(us,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Subdominio"}),s.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Ko,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Email"}),s.jsx("span",{children:t.branding.contact_email||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(y0,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Teléfono"}),s.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(ko,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Creado"}),s.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Dk,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Plan"}),a?s.jsxs("select",{value:c.plan_id,onChange:w=>d({...c,plan_id:w.target.value}),children:[s.jsx("option",{value:"trial",children:"Trial"}),s.jsx("option",{value:"starter",children:"Starter"}),s.jsx("option",{value:"professional",children:"Professional"}),s.jsx("option",{value:"enterprise",children:"Enterprise"})]}):s.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Uso del Servicio"})}),s.jsxs("div",{className:"card-content usage-grid",children:[s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(wr,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.users}),s.jsx("div",{className:"usage-label",children:"Usuarios"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Je,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),s.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Mk,{size:24})}),s.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),s.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Dominios"})}),s.jsx("div",{className:"card-content",children:t.domains.length===0?s.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((w,_)=>s.jsxs("div",{className:"domain-row",children:[s.jsx(us,{size:16}),s.jsx("span",{children:w.domain}),w.is_primary&&s.jsx("span",{className:"badge primary",children:"Principal"}),s.jsxs("span",{className:`badge ${w.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",w.ssl_status]})]},_))})]}),t.subscription&&s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Suscripción"})}),s.jsx("div",{className:"card-content",children:s.jsxs("div",{className:"subscription-info",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Estado"}),s.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),s.jsxs("div",{children:[s.jsx("label",{children:"Próximo cobro"}),s.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),s.jsx("style",{children:`
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
      `})]}):s.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},HN=()=>{const{tenant:e,loading:t,error:n}=pe(),r=un(),a=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&a?s.jsx("div",{className:"app",children:s.jsxs(Kp,{children:[s.jsx(Y,{path:"/",element:s.jsx(Qk,{})}),s.jsx(Y,{path:"/register",element:s.jsx(Zk,{})}),s.jsx(Y,{path:"/onboarding",element:s.jsx(eN,{})}),s.jsx(Y,{path:"*",element:s.jsx(Aa,{to:"/",replace:!0})})]})}):t?s.jsx(MN,{}):n&&!l?s.jsx(UN,{message:n}):s.jsx(Ik,{children:s.jsx("div",{className:"app",children:s.jsxs(Kp,{children:[s.jsx(Y,{path:"/login",element:s.jsx(tN,{})}),s.jsx(Y,{path:"/dashboard",element:s.jsx(ue,{children:s.jsx(nN,{})})}),s.jsx(Y,{path:"/packages",element:s.jsx(ue,{children:s.jsx(rN,{})})}),s.jsx(Y,{path:"/packages/new",element:s.jsx(ue,{children:s.jsx(sN,{})})}),s.jsx(Y,{path:"/packages/:id",element:s.jsx(ue,{children:s.jsx(_N,{})})}),s.jsx(Y,{path:"/clients",element:s.jsx(ue,{children:s.jsx(kN,{})})}),s.jsx(Y,{path:"/couriers",element:s.jsx(ue,{children:s.jsx(NN,{})})}),s.jsx(Y,{path:"/rates",element:s.jsx(ue,{children:s.jsx(EN,{})})}),s.jsx(Y,{path:"/incidents",element:s.jsx(ue,{children:s.jsx(SN,{})})}),s.jsx(Y,{path:"/fuel",element:s.jsx(ue,{children:s.jsx(TN,{})})}),s.jsx(Y,{path:"/vehicles",element:s.jsx(ue,{children:s.jsx(CN,{})})}),s.jsx(Y,{path:"/maintenance",element:s.jsx(ue,{children:s.jsx(IN,{})})}),s.jsx(Y,{path:"/documents",element:s.jsx(ue,{children:s.jsx(PN,{})})}),s.jsx(Y,{path:"/warehouse",element:s.jsx(ue,{children:s.jsx(RN,{})})}),s.jsx(Y,{path:"/arrivals",element:s.jsx(ue,{children:s.jsx(AN,{})})}),s.jsx(Y,{path:"/manifests",element:s.jsx(ue,{children:s.jsx(DN,{})})}),s.jsx(Y,{path:"/shippers",element:s.jsx(ue,{children:s.jsx(zN,{})})}),s.jsx(Y,{path:"/expenses",element:s.jsx(ue,{children:s.jsx(LN,{})})}),s.jsx(Y,{path:"/suppliers",element:s.jsx(ue,{children:s.jsx(ON,{})})}),s.jsx(Y,{path:"/account/white-label",element:s.jsx(ue,{children:s.jsx(FN,{})})}),s.jsx(Y,{path:"/super-admin",element:s.jsx(ue,{children:s.jsx($N,{})})}),s.jsx(Y,{path:"/super-admin/tenants",element:s.jsx(ue,{children:s.jsx(BN,{})})}),s.jsx(Y,{path:"/super-admin/tenants/:id",element:s.jsx(ue,{children:s.jsx(VN,{})})}),s.jsx(Y,{path:"/",element:s.jsx(Aa,{to:"/dashboard",replace:!0})}),s.jsx(Y,{path:"*",element:s.jsx(Aa,{to:"/dashboard",replace:!0})})]})})})};ic.createRoot(document.getElementById("root")).render(s.jsx(wd.StrictMode,{children:s.jsx(Db,{children:s.jsx($b,{children:s.jsx(HN,{})})})}));
//# sourceMappingURL=index-BAUMfnJl.js.map
