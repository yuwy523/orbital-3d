(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function B_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zm={exports:{}},jl={},Bm={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),H_=Symbol.for("react.portal"),G_=Symbol.for("react.fragment"),V_=Symbol.for("react.strict_mode"),W_=Symbol.for("react.profiler"),j_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),Y_=Symbol.for("react.forward_ref"),q_=Symbol.for("react.suspense"),$_=Symbol.for("react.memo"),K_=Symbol.for("react.lazy"),Gd=Symbol.iterator;function Z_(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Vm={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Hm}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wm(){}Wm.prototype=Ys.prototype;function Nf(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Hm}var Uf=Nf.prototype=new Wm;Uf.constructor=Nf;Gm(Uf,Ys.prototype);Uf.isPureReactComponent=!0;var Vd=Array.isArray,jm=Object.prototype.hasOwnProperty,Of={current:null},Xm={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jm.call(e,i)&&!Xm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:t,key:s,ref:o,props:r,_owner:Of.current}}function Q_(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function J_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wd=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J_(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ea:case H_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_c(o,0):i,Vd(r)?(n="",t!=null&&(n=t.replace(Wd,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(Ff(r)&&(r=Q_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Wd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_c(s,a);o+=tl(s,e,n,l,r)}else if(l=Z_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_c(s,a++),o+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},nl={transition:null},tv={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Of};function qm(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!Ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=Ys;tt.Fragment=G_;tt.Profiler=W_;tt.PureComponent=Nf;tt.StrictMode=V_;tt.Suspense=q_;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;tt.act=qm;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Of.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jm.call(e,l)&&!Xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ea,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:X_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j_,_context:t},t.Consumer=t};tt.createElement=Ym;tt.createFactory=function(t){var e=Ym.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Y_,render:t}};tt.isValidElement=Ff;tt.lazy=function(t){return{$$typeof:K_,_payload:{_status:-1,_result:t},_init:ev}};tt.memo=function(t,e){return{$$typeof:$_,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};tt.unstable_act=qm;tt.useCallback=function(t,e){return mn.current.useCallback(t,e)};tt.useContext=function(t){return mn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return mn.current.useEffect(t,e)};tt.useId=function(){return mn.current.useId()};tt.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return mn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};tt.useRef=function(t){return mn.current.useRef(t)};tt.useState=function(t){return mn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return mn.current.useTransition()};tt.version="18.3.1";Bm.exports=tt;var de=Bm.exports;const Xl=B_(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=de,iv=Symbol.for("react.element"),rv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function $m(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sv.call(e,i)&&!av.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iv,type:t,key:s,ref:o,props:r,_owner:ov.current}}jl.Fragment=rv;jl.jsx=$m;jl.jsxs=$m;zm.exports=jl;var j=zm.exports,Au={},Km={exports:{}},Nn={},Zm={exports:{}},Qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,H){var V=N.length;N.push(H);e:for(;0<V;){var ee=V-1>>>1,ie=N[ee];if(0<r(ie,H))N[ee]=H,N[V]=ie,V=ee;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var H=N[0],V=N.pop();if(V!==H){N[0]=V;e:for(var ee=0,ie=N.length,k=ie>>>1;ee<k;){var Z=2*(ee+1)-1,ce=N[Z],_e=Z+1,ve=N[_e];if(0>r(ce,V))_e<ie&&0>r(ve,ce)?(N[ee]=ve,N[_e]=V,ee=_e):(N[ee]=ce,N[Z]=V,ee=Z);else if(_e<ie&&0>r(ve,V))N[ee]=ve,N[_e]=V,ee=_e;else break e}}return H}function r(N,H){var V=N.sortIndex-H.sortIndex;return V!==0?V:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,v=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=N)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function y(N){if(x=!1,_(N),!v)if(n(l)!==null)v=!0,q(C);else{var H=n(c);H!==null&&K(y,H.startTime-N)}}function C(N,H){v=!1,x&&(x=!1,u(D),D=-1),m=!0;var V=h;try{for(_(H),d=n(l);d!==null&&(!(d.expirationTime>H)||N&&!B());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var ie=ee(d.expirationTime<=H);H=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&i(l),_(H)}else i(l);d=n(l)}if(d!==null)var k=!0;else{var Z=n(c);Z!==null&&K(y,Z.startTime-H),k=!1}return k}finally{d=null,h=V,m=!1}}var R=!1,A=null,D=-1,S=5,T=-1;function B(){return!(t.unstable_now()-T<S)}function $(){if(A!==null){var N=t.unstable_now();T=N;var H=!0;try{H=A(!0,N)}finally{H?re():(R=!1,A=null)}}else R=!1}var re;if(typeof g=="function")re=function(){g($)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=$,re=function(){G.postMessage(null)}}else re=function(){p($,0)};function q(N){A=N,R||(R=!0,re())}function K(N,H){D=p(function(){N(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,q(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var V=h;h=H;try{return N()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=h;h=N;try{return H()}finally{h=V}},t.unstable_scheduleCallback=function(N,H,V){var ee=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,N){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=V+ie,N={id:f++,callback:H,priorityLevel:N,startTime:V,expirationTime:ie,sortIndex:-1},V>ee?(N.sortIndex=V,e(c,N),n(l)===null&&N===n(c)&&(x?(u(D),D=-1):x=!0,K(y,V-ee))):(N.sortIndex=ie,e(l,N),v||m||(v=!0,q(C))),N},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(N){var H=h;return function(){var V=h;h=H;try{return N.apply(this,arguments)}finally{h=V}}}})(Qm);Zm.exports=Qm;var lv=Zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv=de,In=lv;function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,No={};function Gr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(No[t]=e,t=0;t<e.length;t++)Jm.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},Xd={};function fv(t){return Ru.call(Xd,t)?!0:Ru.call(jd,t)?!1:uv.test(t)?Xd[t]=!0:(jd[t]=!0,!1)}function dv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hv(t,e,n,i){if(e===null||typeof e>"u"||dv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kf=/[\-:]([a-z])/g;function zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kf,zf);Qt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kf,zf);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kf,zf);Qt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bf(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hv(e,n,r,i)&&(n=null),i||r===null?fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Cu=Symbol.for("react.suspense"),Pu=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Yd&&t[Yd]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,vc;function go(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function pv(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case bu:return"Profiler";case Hf:return"StrictMode";case Cu:return"Suspense";case Pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gv(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=gv(t))}function rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&Bf(t,"checked",e,!1)}function Iu(t,e){sg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $d(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nu(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(_o(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function og(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vv=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function Wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bu=null,Cs=null,Ps=null;function Qd(t){if(t=ia(t)){if(typeof Bu!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=Zl(e),Bu(t.stateNode,t.type,e))}}function fg(t){Cs?Ps?Ps.push(t):Ps=[t]:Cs=t}function dg(){if(Cs){var t=Cs,e=Ps;if(Ps=Cs=null,Qd(t),e)for(t=0;t<e.length;t++)Qd(e[t])}}function hg(t,e){return t(e)}function pg(){}var Sc=!1;function mg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return hg(t,e,n)}finally{Sc=!1,(Cs!==null||Ps!==null)&&(pg(),dg())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=Zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var Hu=!1;if(Ri)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Hu=!1}function xv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Mo=!1,ml=null,gl=!1,Gu=null,yv={onError:function(t){Mo=!0,ml=t}};function Sv(t,e,n,i,r,s,o,a,l){Mo=!1,ml=null,xv.apply(yv,arguments)}function Mv(t,e,n,i,r,s,o,a,l){if(Sv.apply(this,arguments),Mo){if(Mo){var c=ml;Mo=!1,ml=null}else throw Error(fe(198));gl||(gl=!0,Gu=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jd(t){if(Vr(t)!==t)throw Error(fe(188))}function Ev(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jd(r),t;if(s===i)return Jd(r),e;s=s.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function _g(t){return t=Ev(t),t!==null?vg(t):null}function vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vg(t);if(e!==null)return e;t=t.sibling}return null}var xg=In.unstable_scheduleCallback,eh=In.unstable_cancelCallback,Tv=In.unstable_shouldYield,wv=In.unstable_requestPaint,Ct=In.unstable_now,Av=In.unstable_getCurrentPriorityLevel,jf=In.unstable_ImmediatePriority,yg=In.unstable_UserBlockingPriority,_l=In.unstable_NormalPriority,Rv=In.unstable_LowPriority,Sg=In.unstable_IdlePriority,Yl=null,di=null;function bv(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:Lv,Cv=Math.log,Pv=Math.LN2;function Lv(t){return t>>>=0,t===0?32:31-(Cv(t)/Pv|0)|0}var ha=64,pa=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=vo(a):(s&=o,s!==0&&(i=vo(s)))}else o=n&~r,o!==0?i=vo(o):s!==0&&(i=vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function Dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Dv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function Nv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function Eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tg,Yf,wg,Ag,Rg,Wu=!1,ma=[],Ki=null,Zi=null,Qi=null,Fo=new Map,ko=new Map,Wi=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&Yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ov(t,e,n,i,r){switch(e){case"focusin":return Ki=eo(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=eo(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=eo(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,eo(Fo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,eo(ko.get(s)||null,t,e,n,i,r)),!0}return!1}function bg(t){var e=wr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=gg(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zu=i,n.target.dispatchEvent(i),zu=null}else return e=ia(n),e!==null&&Yf(e),t.blockedOn=n,!1;e.shift()}return!0}function nh(t,e,n){il(t)&&n.delete(e)}function Fv(){Wu=!1,Ki!==null&&il(Ki)&&(Ki=null),Zi!==null&&il(Zi)&&(Zi=null),Qi!==null&&il(Qi)&&(Qi=null),Fo.forEach(nh),ko.forEach(nh)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,Fv)))}function zo(t){function e(r){return to(r,t)}if(0<ma.length){to(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&to(Ki,t),Zi!==null&&to(Zi,t),Qi!==null&&to(Qi,t),Fo.forEach(e),ko.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)bg(n),n.blockedOn===null&&Wi.shift()}var Ls=Ii.ReactCurrentBatchConfig,xl=!0;function kv(t,e,n,i){var r=ut,s=Ls.transition;Ls.transition=null;try{ut=1,qf(t,e,n,i)}finally{ut=r,Ls.transition=s}}function zv(t,e,n,i){var r=ut,s=Ls.transition;Ls.transition=null;try{ut=4,qf(t,e,n,i)}finally{ut=r,Ls.transition=s}}function qf(t,e,n,i){if(xl){var r=ju(t,e,n,i);if(r===null)Dc(t,e,i,yl,n),th(t,i);else if(Ov(r,t,e,n,i))i.stopPropagation();else if(th(t,i),e&4&&-1<Uv.indexOf(t)){for(;r!==null;){var s=ia(r);if(s!==null&&Tg(s),s=ju(t,e,n,i),s===null&&Dc(t,e,i,yl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dc(t,e,i,null,n)}}var yl=null;function ju(t,e,n,i){if(yl=null,t=Wf(i),t=wr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function Cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case jf:return 1;case yg:return 4;case _l:case Rv:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var Xi=null,$f=null,rl=null;function Pg(){if(rl)return rl;var t,e=$f,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function ih(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:ih,this.isPropagationStopped=ih,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kf=Un(qs),na=At({},qs,{view:0,detail:0}),Bv=Un(na),Ec,Tc,no,ql=At({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(Ec=t.screenX-no.screenX,Tc=t.screenY-no.screenY):Tc=Ec=0,no=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),rh=Un(ql),Hv=At({},ql,{dataTransfer:0}),Gv=Un(Hv),Vv=At({},na,{relatedTarget:0}),wc=Un(Vv),Wv=At({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Un(Wv),Xv=At({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=Un(Xv),qv=At({},qs,{data:0}),sh=Un(qv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zv[t])?!!e[t]:!1}function Zf(){return Qv}var Jv=At({},na,{key:function(t){if(t.key){var e=$v[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Un(Jv),tx=At({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Un(tx),nx=At({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zf}),ix=Un(nx),rx=At({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Un(rx),ox=At({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Un(ox),lx=[9,13,27,32],Qf=Ri&&"CompositionEvent"in window,Eo=null;Ri&&"documentMode"in document&&(Eo=document.documentMode);var cx=Ri&&"TextEvent"in window&&!Eo,Lg=Ri&&(!Qf||Eo&&8<Eo&&11>=Eo),ah=" ",lh=!1;function Dg(t,e){switch(t){case"keyup":return lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function ux(t,e){switch(t){case"compositionend":return Ig(e);case"keypress":return e.which!==32?null:(lh=!0,ah);case"textInput":return t=e.data,t===ah&&lh?null:t;default:return null}}function fx(t,e){if(gs)return t==="compositionend"||!Qf&&Dg(t,e)?(t=Pg(),rl=$f=Xi=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lg&&e.locale!=="ko"?null:e.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dx[t.type]:e==="textarea"}function Ng(t,e,n,i){fg(i),e=Sl(e,"onChange"),0<e.length&&(n=new Kf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var To=null,Bo=null;function hx(t){jg(t,0)}function $l(t){var e=xs(t);if(rg(e))return t}function px(t,e){if(t==="change")return e}var Ug=!1;if(Ri){var Ac;if(Ri){var Rc="oninput"in document;if(!Rc){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),Rc=typeof uh.oninput=="function"}Ac=Rc}else Ac=!1;Ug=Ac&&(!document.documentMode||9<document.documentMode)}function fh(){To&&(To.detachEvent("onpropertychange",Og),Bo=To=null)}function Og(t){if(t.propertyName==="value"&&$l(Bo)){var e=[];Ng(e,Bo,t,Wf(t)),mg(hx,e)}}function mx(t,e,n){t==="focusin"?(fh(),To=e,Bo=n,To.attachEvent("onpropertychange",Og)):t==="focusout"&&fh()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(Bo)}function _x(t,e){if(t==="click")return $l(e)}function vx(t,e){if(t==="input"||t==="change")return $l(e)}function xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:xx;function Ho(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,e){var n=dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dh(n)}}function Fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kg(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yx(t){var e=kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(i!==null&&Jf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=hh(n,s);var o=hh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sx=Ri&&"documentMode"in document&&11>=document.documentMode,_s=null,Xu=null,wo=null,Yu=!1;function ph(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||_s==null||_s!==pl(i)||(i=_s,"selectionStart"in i&&Jf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Ho(wo,i)||(wo=i,i=Sl(Xu,"onSelect"),0<i.length&&(e=new Kf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},bc={},zg={};Ri&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Kl(t){if(bc[t])return bc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zg)return bc[t]=e[n];return t}var Bg=Kl("animationend"),Hg=Kl("animationiteration"),Gg=Kl("animationstart"),Vg=Kl("transitionend"),Wg=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Wg.set(t,e),Gr(e,[t])}for(var Cc=0;Cc<mh.length;Cc++){var Pc=mh[Cc],Mx=Pc.toLowerCase(),Ex=Pc[0].toUpperCase()+Pc.slice(1);ur(Mx,"on"+Ex)}ur(Bg,"onAnimationEnd");ur(Hg,"onAnimationIteration");ur(Gg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Vg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function gh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mv(i,e,void 0,t),t.currentTarget=null}function jg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;gh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;gh(r,a,c),s=l}}}if(gl)throw t=Gu,gl=!1,Gu=null,t}function mt(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(Xg(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),Xg(n,t,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function Go(t){if(!t[va]){t[va]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(Tx.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,Lc("selectionchange",!1,e))}}function Xg(t,e,n,i){switch(Cg(e)){case 1:var r=kv;break;case 4:r=zv;break;default:r=qf}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Dc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}mg(function(){var c=s,f=Wf(n),d=[];e:{var h=Wg.get(t);if(h!==void 0){var m=Kf,v=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":m=ex;break;case"focusin":v="focus",m=wc;break;case"focusout":v="blur",m=wc;break;case"beforeblur":case"afterblur":m=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ix;break;case Bg:case Hg:case Gg:m=jv;break;case Vg:m=sx;break;case"scroll":m=Bv;break;case"wheel":m=ax;break;case"copy":case"cut":case"paste":m=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=oh}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=Oo(g,u),y!=null&&x.push(Vo(g,y,_)))),p)break;g=g.return}0<x.length&&(h=new m(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==zu&&(v=n.relatedTarget||n.fromElement)&&(wr(v)||v[bi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?wr(v):null,v!==null&&(p=Vr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(x=rh,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=oh,y="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:xs(m),_=v==null?h:xs(v),h=new x(y,g+"leave",m,n,f),h.target=p,h.relatedTarget=_,y=null,wr(f)===c&&(x=new x(u,g+"enter",v,n,f),x.target=_,x.relatedTarget=p,y=x),p=y,m&&v)t:{for(x=m,u=v,g=0,_=x;_;_=jr(_))g++;for(_=0,y=u;y;y=jr(y))_++;for(;0<g-_;)x=jr(x),g--;for(;0<_-g;)u=jr(u),_--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=jr(x),u=jr(u)}x=null}else x=null;m!==null&&_h(d,h,m,x,!1),v!==null&&p!==null&&_h(d,p,v,x,!0)}}e:{if(h=c?xs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=px;else if(ch(h))if(Ug)C=vx;else{C=gx;var R=mx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=_x);if(C&&(C=C(t,c))){Ng(d,C,n,f);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Nu(h,"number",h.value)}switch(R=c?xs(c):window,t){case"focusin":(ch(R)||R.contentEditable==="true")&&(_s=R,Xu=c,wo=null);break;case"focusout":wo=Xu=_s=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,ph(d,n,f);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":ph(d,n,f)}var A;if(Qf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else gs?Dg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Lg&&n.locale!=="ko"&&(gs||D!=="onCompositionStart"?D==="onCompositionEnd"&&gs&&(A=Pg()):(Xi=f,$f="value"in Xi?Xi.value:Xi.textContent,gs=!0)),R=Sl(c,D),0<R.length&&(D=new sh(D,t,null,n,f),d.push({event:D,listeners:R}),A?D.data=A:(A=Ig(n),A!==null&&(D.data=A)))),(A=cx?ux(t,n):fx(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(f=new sh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}jg(d,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Vo(t,s,r)),s=Oo(t,e),s!=null&&i.push(Vo(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oo(n,s),l!=null&&o.unshift(Vo(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(Vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function vh(t){return(typeof t=="string"?t:""+t).replace(wx,`
`).replace(Ax,"")}function xa(t,e,n){if(e=vh(e),vh(t)!==e&&n)throw Error(fe(425))}function Ml(){}var qu=null,$u=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,xh=typeof Promise=="function"?Promise:void 0,bx=typeof queueMicrotask=="function"?queueMicrotask:typeof xh<"u"?function(t){return xh.resolve(null).then(t).catch(Cx)}:Zu;function Cx(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),ui="__reactFiber$"+$s,Wo="__reactProps$"+$s,bi="__reactContainer$"+$s,Qu="__reactEvents$"+$s,Px="__reactListeners$"+$s,Lx="__reactHandles$"+$s;function wr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yh(t);t!==null;){if(n=t[ui])return n;t=yh(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[ui]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function Zl(t){return t[Wo]||null}var Ju=[],ys=-1;function fr(t){return{current:t}}function _t(t){0>ys||(t.current=Ju[ys],Ju[ys]=null,ys--)}function pt(t,e){ys++,Ju[ys]=t.current,t.current=e}var lr={},an=fr(lr),xn=fr(!1),Ur=lr;function Os(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function El(){_t(xn),_t(an)}function Sh(t,e,n){if(an.current!==lr)throw Error(fe(168));pt(an,e),pt(xn,n)}function Yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,mv(t)||"Unknown",r));return At({},n,i)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ur=an.current,pt(an,t),pt(xn,xn.current),!0}function Mh(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=Yg(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,_t(xn),_t(an),pt(an,t)):_t(xn),pt(xn,n)}var Si=null,Ql=!1,Nc=!1;function qg(t){Si===null?Si=[t]:Si.push(t)}function Dx(t){Ql=!0,qg(t)}function dr(){if(!Nc&&Si!==null){Nc=!0;var t=0,e=ut;try{var n=Si;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Ql=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),xg(jf,dr),r}finally{ut=e,Nc=!1}}return null}var Ss=[],Ms=0,wl=null,Al=0,zn=[],Bn=0,Or=null,Mi=1,Ei="";function yr(t,e){Ss[Ms++]=Al,Ss[Ms++]=wl,wl=t,Al=e}function $g(t,e,n){zn[Bn++]=Mi,zn[Bn++]=Ei,zn[Bn++]=Or,Or=t;var i=Mi;t=Ei;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-ri(e)+r|n<<r|i,Ei=s+t}else Mi=1<<s|n<<r|i,Ei=t}function ed(t){t.return!==null&&(yr(t,1),$g(t,1,0))}function td(t){for(;t===wl;)wl=Ss[--Ms],Ss[Ms]=null,Al=Ss[--Ms],Ss[Ms]=null;for(;t===Or;)Or=zn[--Bn],zn[Bn]=null,Ei=zn[--Bn],zn[Bn]=null,Mi=zn[--Bn],zn[Bn]=null}var Dn=null,Ln=null,vt=!1,ti=null;function Kg(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(vt){var e=Ln;if(e){var n=e;if(!Eh(t,e)){if(ef(t))throw Error(fe(418));e=Ji(n.nextSibling);var i=Dn;e&&Eh(t,e)?Kg(i,n):(t.flags=t.flags&-4097|2,vt=!1,Dn=t)}}else{if(ef(t))throw Error(fe(418));t.flags=t.flags&-4097|2,vt=!1,Dn=t}}}function Th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function ya(t){if(t!==Dn)return!1;if(!vt)return Th(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=Ln)){if(ef(t))throw Zg(),Error(fe(418));for(;e;)Kg(t,e),e=Ji(e.nextSibling)}if(Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?Ji(t.stateNode.nextSibling):null;return!0}function Zg(){for(var t=Ln;t;)t=Ji(t.nextSibling)}function Fs(){Ln=Dn=null,vt=!1}function nd(t){ti===null?ti=[t]:ti.push(t)}var Ix=Ii.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wh(t){var e=t._init;return e(t._payload)}function Qg(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=ir(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,_,y){return g===null||g.tag!==6?(g=Hc(_,u.mode,y),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,y){var C=_.type;return C===ms?f(u,g,_.props.children,y,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&wh(C)===g.type)?(y=r(g,_.props),y.ref=io(u,g,_),y.return=u,y):(y=dl(_.type,_.key,_.props,null,u.mode,y),y.ref=io(u,g,_),y.return=u,y)}function c(u,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Gc(_,u.mode,y),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function f(u,g,_,y,C){return g===null||g.tag!==7?(g=Pr(_,u.mode,y,C),g.return=u,g):(g=r(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ua:return _=dl(g.type,g.key,g.props,null,u.mode,_),_.ref=io(u,null,g),_.return=u,_;case ps:return g=Gc(g,u.mode,_),g.return=u,g;case Bi:var y=g._init;return d(u,y(g._payload),_)}if(_o(g)||Qs(g))return g=Pr(g,u.mode,_,null),g.return=u,g;Sa(u,g)}return null}function h(u,g,_,y){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(u,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ua:return _.key===C?l(u,g,_,y):null;case ps:return _.key===C?c(u,g,_,y):null;case Bi:return C=_._init,h(u,g,C(_._payload),y)}if(_o(_)||Qs(_))return C!==null?null:f(u,g,_,y,null);Sa(u,_)}return null}function m(u,g,_,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(g,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ua:return u=u.get(y.key===null?_:y.key)||null,l(g,u,y,C);case ps:return u=u.get(y.key===null?_:y.key)||null,c(g,u,y,C);case Bi:var R=y._init;return m(u,g,_,R(y._payload),C)}if(_o(y)||Qs(y))return u=u.get(_)||null,f(g,u,y,C,null);Sa(g,y)}return null}function v(u,g,_,y){for(var C=null,R=null,A=g,D=g=0,S=null;A!==null&&D<_.length;D++){A.index>D?(S=A,A=null):S=A.sibling;var T=h(u,A,_[D],y);if(T===null){A===null&&(A=S);break}t&&A&&T.alternate===null&&e(u,A),g=s(T,g,D),R===null?C=T:R.sibling=T,R=T,A=S}if(D===_.length)return n(u,A),vt&&yr(u,D),C;if(A===null){for(;D<_.length;D++)A=d(u,_[D],y),A!==null&&(g=s(A,g,D),R===null?C=A:R.sibling=A,R=A);return vt&&yr(u,D),C}for(A=i(u,A);D<_.length;D++)S=m(A,u,D,_[D],y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?D:S.key),g=s(S,g,D),R===null?C=S:R.sibling=S,R=S);return t&&A.forEach(function(B){return e(u,B)}),vt&&yr(u,D),C}function x(u,g,_,y){var C=Qs(_);if(typeof C!="function")throw Error(fe(150));if(_=C.call(_),_==null)throw Error(fe(151));for(var R=C=null,A=g,D=g=0,S=null,T=_.next();A!==null&&!T.done;D++,T=_.next()){A.index>D?(S=A,A=null):S=A.sibling;var B=h(u,A,T.value,y);if(B===null){A===null&&(A=S);break}t&&A&&B.alternate===null&&e(u,A),g=s(B,g,D),R===null?C=B:R.sibling=B,R=B,A=S}if(T.done)return n(u,A),vt&&yr(u,D),C;if(A===null){for(;!T.done;D++,T=_.next())T=d(u,T.value,y),T!==null&&(g=s(T,g,D),R===null?C=T:R.sibling=T,R=T);return vt&&yr(u,D),C}for(A=i(u,A);!T.done;D++,T=_.next())T=m(A,u,D,T.value,y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?D:T.key),g=s(T,g,D),R===null?C=T:R.sibling=T,R=T);return t&&A.forEach(function($){return e(u,$)}),vt&&yr(u,D),C}function p(u,g,_,y){if(typeof _=="object"&&_!==null&&_.type===ms&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ua:e:{for(var C=_.key,R=g;R!==null;){if(R.key===C){if(C=_.type,C===ms){if(R.tag===7){n(u,R.sibling),g=r(R,_.props.children),g.return=u,u=g;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Bi&&wh(C)===R.type){n(u,R.sibling),g=r(R,_.props),g.ref=io(u,R,_),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}_.type===ms?(g=Pr(_.props.children,u.mode,y,_.key),g.return=u,u=g):(y=dl(_.type,_.key,_.props,null,u.mode,y),y.ref=io(u,g,_),y.return=u,u=y)}return o(u);case ps:e:{for(R=_.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Gc(_,u.mode,y),g.return=u,u=g}return o(u);case Bi:return R=_._init,p(u,g,R(_._payload),y)}if(_o(_))return v(u,g,_,y);if(Qs(_))return x(u,g,_,y);Sa(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=Hc(_,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return p}var ks=Qg(!0),Jg=Qg(!1),Rl=fr(null),bl=null,Es=null,id=null;function rd(){id=Es=bl=null}function sd(t){var e=Rl.current;_t(Rl),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){bl=t,id=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(bl===null)throw Error(fe(308));Es=t,bl.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Ar=null;function od(t){Ar===null?Ar=[t]:Ar.push(t)}function e0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,od(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,od(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xf(t,n)}}function Ah(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,m=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(m,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(m,d,h):v,h==null)break e;d=At({},d,h);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=o,t.lanes=o,t.memoizedState=d}}function Rh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var ra={},hi=fr(ra),jo=fr(ra),Xo=fr(ra);function Rr(t){if(t===ra)throw Error(fe(174));return t}function ld(t,e){switch(pt(Xo,e),pt(jo,t),pt(hi,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}_t(hi),pt(hi,e)}function zs(){_t(hi),_t(jo),_t(Xo)}function n0(t){Rr(Xo.current);var e=Rr(hi.current),n=Ou(e,t.type);e!==n&&(pt(jo,t),pt(hi,n))}function cd(t){jo.current===t&&(_t(hi),_t(jo))}var Et=fr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function ud(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var al=Ii.ReactCurrentDispatcher,Oc=Ii.ReactCurrentBatchConfig,Fr=0,Tt=null,Nt=null,Gt=null,Ll=!1,Ao=!1,Yo=0,Nx=0;function en(){throw Error(fe(321))}function fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function dd(t,e,n,i,r,s){if(Fr=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?kx:zx,t=n(i,r),Ao){s=0;do{if(Ao=!1,Yo=0,25<=s)throw Error(fe(301));s+=1,Gt=Nt=null,e.updateQueue=null,al.current=Bx,t=n(i,r)}while(Ao)}if(al.current=Dl,e=Nt!==null&&Nt.next!==null,Fr=0,Gt=Nt=Tt=null,Ll=!1,e)throw Error(fe(300));return t}function hd(){var t=Yo!==0;return Yo=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Tt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function qn(){if(Nt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Gt===null?Tt.memoizedState:Gt.next;if(e!==null)Gt=e,Nt=t;else{if(t===null)throw Error(fe(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Gt===null?Tt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function qo(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=qn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Fr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Tt.lanes|=f,kr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,oi(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=qn(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);oi(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function i0(){}function r0(t,e){var n=Tt,i=qn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,pd(a0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,$o(9,o0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(fe(349));Fr&30||s0(n,e,r)}return r}function s0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o0(t,e,n,i){e.value=n,e.getSnapshot=i,l0(e)&&c0(t)}function a0(t,e,n){return n(function(){l0(e)&&c0(t)})}function l0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function c0(t){var e=Ci(t,1);e!==null&&si(e,t,1,-1)}function bh(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:t},e.queue=t,t=t.dispatch=Fx.bind(null,Tt,t),[e.memoizedState,t]}function $o(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function u0(){return qn().memoizedState}function ll(t,e,n,i){var r=li();Tt.flags|=t,r.memoizedState=$o(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&fd(i,o.deps)){r.memoizedState=$o(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=$o(1|e,n,s,i)}function Ch(t,e){return ll(8390656,8,t,e)}function pd(t,e){return Jl(2048,8,t,e)}function f0(t,e){return Jl(4,2,t,e)}function d0(t,e){return Jl(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p0(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,h0.bind(null,e,t),n)}function md(){}function m0(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function g0(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _0(t,e,n){return Fr&21?(oi(n,e)||(n=Mg(),Tt.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function Ux(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Oc.transition;Oc.transition={};try{t(!1),e()}finally{ut=n,Oc.transition=i}}function v0(){return qn().memoizedState}function Ox(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x0(t))y0(e,n);else if(n=e0(t,e,n,i),n!==null){var r=dn();si(n,t,i,r),S0(n,e,i)}}function Fx(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(t))y0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,oi(a,o)){var l=e.interleaved;l===null?(r.next=r,od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=e0(t,e,r,i),n!==null&&(r=dn(),si(n,t,i,r),S0(n,e,i))}}function x0(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function y0(t,e){Ao=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xf(t,n)}}var Dl={readContext:Yn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},kx={readContext:Yn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Ch,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ox.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:bh,useDebugValue:md,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=bh(!1),e=t[0];return t=Ux.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=li();if(vt){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),Vt===null)throw Error(fe(349));Fr&30||s0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ch(a0.bind(null,i,s,t),[t]),i.flags|=2048,$o(9,o0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Vt.identifierPrefix;if(vt){var n=Ei,i=Mi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Nx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zx={readContext:Yn,useCallback:m0,useContext:Yn,useEffect:pd,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:Fc,useRef:u0,useState:function(){return Fc(qo)},useDebugValue:md,useDeferredValue:function(t){var e=qn();return _0(e,Nt.memoizedState,t)},useTransition:function(){var t=Fc(qo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:v0,unstable_isNewReconciler:!1},Bx={readContext:Yn,useCallback:m0,useContext:Yn,useEffect:pd,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:g0,useReducer:kc,useRef:u0,useState:function(){return kc(qo)},useDebugValue:md,useDeferredValue:function(t){var e=qn();return Nt===null?e.memoizedState=t:_0(e,Nt.memoizedState,t)},useTransition:function(){var t=kc(qo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:r0,useId:v0,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=nr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(si(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=nr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(si(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=nr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(si(e,t,i,n),ol(e,t,i))}};function Ph(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,i)||!Ho(r,s):!0}function M0(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=yn(e)?Ur:an.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=yn(e)?Ur:an.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=pv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,gf=i),of(t,e)},n}function T0(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Hx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ty.bind(null,t,e,n),e.then(t,t))}function Ih(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var Gx=Ii.ReactCurrentOwner,vn=!1;function un(t,e,n,i){e.child=t===null?Jg(e,null,n,i):ks(e,t.child,n,i)}function Uh(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=dd(t,e,n,i,s,r),n=hd(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(vt&&n&&ed(e),e.flags|=1,un(t,e,i,r),e.child)}function Oh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w0(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function w0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ho(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return af(t,e,n,i,r)}function A0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(ws,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(ws,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(ws,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(ws,bn),bn|=i;return un(t,e,r,n),e.child}function R0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=yn(n)?Ur:an.current;return s=Os(e,s),Ds(e,r),n=dd(t,e,n,i,s,r),i=hd(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(vt&&i&&ed(e),e.flags|=1,un(t,e,n,r),e.child)}function Fh(t,e,n,i,r){if(yn(n)){var s=!0;Tl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)cl(t,e),M0(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=yn(n)?Ur:an.current,c=Os(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Lh(e,o,i,c),Hi=!1;var h=e.memoizedState;o.state=h,Cl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||xn.current||Hi?(typeof f=="function"&&(rf(e,n,f,i),l=e.memoizedState),(a=Hi||Ph(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,t0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=yn(n)?Ur:an.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Lh(e,o,i,l),Hi=!1,h=e.memoizedState,o.state=h,Cl(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||xn.current||Hi?(typeof m=="function"&&(rf(e,n,m,i),v=e.memoizedState),(c=Hi||Ph(e,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){R0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Mh(e,n,!1),Pi(t,e,s);i=e.stateNode,Gx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&Mh(e,n,!0),e.child}function b0(t){var e=t.stateNode;e.pendingContext?Sh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sh(t,e.context,!1),ld(t,e.containerInfo)}function kh(t,e,n,i,r){return Fs(),nd(r),e.flags|=256,un(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function C0(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Et,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):gd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Vx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gd(t,e){return e=ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&nd(i),ks(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(fe(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=cf,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=zc(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),si(i,t,r,-1))}return Md(),i=zc(Error(fe(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ny.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Ji(r.nextSibling),Dn=e,vt=!0,ti=null,t!==null&&(zn[Bn++]=Mi,zn[Bn++]=Ei,zn[Bn++]=Or,Mi=t.id,Ei=t.overflow,Or=e),e=gd(e,i.children),e.flags|=4096,e)}function zh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function P0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zh(t,n,e);else if(t.tag===19)zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wx(t,e,n){switch(e.tag){case 3:b0(e),Fs();break;case 5:n0(e);break;case 1:yn(e.type)&&Tl(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?C0(t,e,n):(pt(Et,Et.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);pt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,A0(t,e,n)}return Pi(t,e,n)}var L0,ff,D0,I0;L0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};D0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(hi.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Uu(t,r),i=Uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}Fu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ro(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jx(t,e,n){var i=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return yn(e.type)&&El(),tn(e),null;case 3:return i=e.stateNode,zs(),_t(xn),_t(an),ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(xf(ti),ti=null))),ff(t,e),tn(e),null;case 5:cd(e);var r=Rr(Xo.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return tn(e),null}if(t=Rr(hi.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)mt(xo[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":qd(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Kd(i,s),mt("invalid",i)}Fu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":fa(i),$d(i,s,!0);break;case"textarea":fa(i),Zd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ui]=e,t[Wo]=i,L0(t,e,!1,!1),e.stateNode=t;e:{switch(o=ku(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)mt(xo[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":qd(t,i),r=Du(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Kd(t,i),r=Uu(t,i),mt("invalid",t);break;default:r=i}Fu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Bf(t,s,l,o))}switch(n){case"input":fa(t),$d(t,i,!1);break;case"textarea":fa(t),Zd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=Rr(Xo.current),Rr(hi.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return tn(e),null;case 13:if(_t(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Ln!==null&&e.mode&1&&!(e.flags&128))Zg(),Fs(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[ui]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ti!==null&&(xf(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ut===0&&(Ut=3):Md())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return zs(),ff(t,e),t===null&&Go(e.stateNode.containerInfo),tn(e),null;case 10:return sd(e.type._context),tn(e),null;case 17:return yn(e.type)&&El(),tn(e),null;case 19:if(_t(Et),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Hs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return tn(e),null}else 2*Ct()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=Et.current,pt(Et,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Sd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function Xx(t,e){switch(td(e),e.tag){case 1:return yn(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),_t(xn),_t(an),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(_t(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Et),null;case 4:return zs(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var Ea=!1,sn=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function df(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Bh=!1;function qx(t,e){if(qu=xl,t=kg(),Jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},xl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,p=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Jn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=Bh,Bh=!1,v}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&df(e,n,s)}r=r.next}while(r!==i)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N0(t){var e=t.alternate;e!==null&&(t.alternate=null,N0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Wo],delete e[Qu],delete e[Px],delete e[Lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function Hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var qt=null,ei=!1;function Ni(t,e,n){for(n=n.child;n!==null;)O0(t,e,n),n=n.sibling}function O0(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:sn||Ts(n,e);case 6:var i=qt,r=ei;qt=null,Ni(t,e,n),qt=i,ei=r,qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ei?(t=qt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),zo(t)):Ic(qt,n.stateNode));break;case 4:i=qt,r=ei,qt=n.stateNode.containerInfo,ei=!0,Ni(t,e,n),qt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&df(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!sn&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,Ni(t,e,n),sn=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yx),e.forEach(function(i){var r=iy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ei=!1;break e;case 3:qt=a.stateNode.containerInfo,ei=!0;break e;case 4:qt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(qt===null)throw Error(fe(160));O0(s,o,r),qt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F0(e,t),e=e.sibling}function F0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ai(t),i&4){try{Ro(3,t,t.return),tc(3,t)}catch(x){bt(t,t.return,x)}try{Ro(5,t,t.return)}catch(x){bt(t,t.return,x)}}break;case 1:$n(e,t),ai(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if($n(e,t),ai(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Uo(r,"")}catch(x){bt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sg(r,s),ku(a,o);var c=ku(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?ug(r,d):f==="dangerouslySetInnerHTML"?lg(r,d):f==="children"?Uo(r,d):Bf(r,f,d,c)}switch(a){case"input":Iu(r,s);break;case"textarea":og(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?bs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(x){bt(t,t.return,x)}}break;case 6:if($n(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){bt(t,t.return,x)}}break;case 3:if($n(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(x){bt(t,t.return,x)}break;case 4:$n(e,t),ai(t);break;case 13:$n(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xd=Ct())),i&4&&Gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,$n(e,t),sn=c):$n(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ee=t,f=t.child;f!==null;){for(d=Ee=f;Ee!==null;){switch(h=Ee,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ro(4,h,h.return);break;case 1:Ts(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){bt(i,n,x)}}break;case 5:Ts(h,h.return);break;case 22:if(h.memoizedState!==null){Wh(d);continue}}m!==null?(m.return=h,Ee=m):Wh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cg("display",o))}catch(x){bt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){bt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),ai(t),i&4&&Gh(t);break;case 21:break;default:$n(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=Hh(t);mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Hh(t);pf(t,a,o);break;default:throw Error(fe(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $x(t,e,n){Ee=t,k0(t)}function k0(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=Ea;var c=sn;if(Ea=o,(sn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?jh(r):l!==null?(l.return=o,Ee=l):jh(r);for(;s!==null;)Ee=s,k0(s),s=s.sibling;Ee=r,Ea=a,sn=c}Vh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Vh(t)}}function Vh(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}sn||e.flags&512&&hf(e)}catch(h){bt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Wh(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function jh(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{hf(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{hf(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var Kx=Math.ceil,Il=Ii.ReactCurrentDispatcher,_d=Ii.ReactCurrentOwner,Xn=Ii.ReactCurrentBatchConfig,st=0,Vt=null,It=null,Zt=0,bn=0,ws=fr(0),Ut=0,Ko=null,kr=0,nc=0,vd=0,bo=null,_n=null,xd=0,Hs=1/0,yi=null,Nl=!1,gf=null,tr=null,Ta=!1,Yi=null,Ul=0,Co=0,_f=null,ul=-1,fl=0;function dn(){return st&6?Ct():ul!==-1?ul:ul=Ct()}function nr(t){return t.mode&1?st&2&&Zt!==0?Zt&-Zt:Ix.transition!==null?(fl===0&&(fl=Mg()),fl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:Cg(t.type)),t):1}function si(t,e,n,i){if(50<Co)throw Co=0,_f=null,Error(fe(185));ta(t,n,i),(!(st&2)||t!==Vt)&&(t===Vt&&(!(st&2)&&(nc|=n),Ut===4&&ji(t,Zt)),Sn(t,i),n===1&&st===0&&!(e.mode&1)&&(Hs=Ct()+500,Ql&&dr()))}function Sn(t,e){var n=t.callbackNode;Iv(t,e);var i=vl(t,t===Vt?Zt:0);if(i===0)n!==null&&eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&eh(n),e===1)t.tag===0?Dx(Xh.bind(null,t)):qg(Xh.bind(null,t)),bx(function(){!(st&6)&&dr()}),n=null;else{switch(Eg(i)){case 1:n=jf;break;case 4:n=yg;break;case 16:n=_l;break;case 536870912:n=Sg;break;default:n=_l}n=X0(n,z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z0(t,e){if(ul=-1,fl=0,st&6)throw Error(fe(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=vl(t,t===Vt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=st;st|=2;var s=H0();(Vt!==t||Zt!==e)&&(yi=null,Hs=Ct()+500,Cr(t,e));do try{Jx();break}catch(a){B0(t,a)}while(!0);rd(),Il.current=s,st=r,It!==null?e=0:(Vt=null,Zt=0,e=Ut)}if(e!==0){if(e===2&&(r=Vu(t),r!==0&&(i=r,e=vf(t,r))),e===1)throw n=Ko,Cr(t,0),ji(t,i),Sn(t,Ct()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zx(r)&&(e=Ol(t,i),e===2&&(s=Vu(t),s!==0&&(i=s,e=vf(t,s))),e===1))throw n=Ko,Cr(t,0),ji(t,i),Sn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:Sr(t,_n,yi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=xd+500-Ct(),10<e)){if(vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zu(Sr.bind(null,t,_n,yi),e);break}Sr(t,_n,yi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Kx(i/1960))-i,10<i){t.timeoutHandle=Zu(Sr.bind(null,t,_n,yi),i);break}Sr(t,_n,yi);break;case 5:Sr(t,_n,yi);break;default:throw Error(fe(329))}}}return Sn(t,Ct()),t.callbackNode===n?z0.bind(null,t):null}function vf(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=_n,_n=n,e!==null&&xf(e)),t}function xf(t){_n===null?_n=t:_n.push.apply(_n,t)}function Zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~vd,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Xh(t){if(st&6)throw Error(fe(327));Is();var e=vl(t,0);if(!(e&1))return Sn(t,Ct()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Vu(t);i!==0&&(e=i,n=vf(t,i))}if(n===1)throw n=Ko,Cr(t,0),ji(t,e),Sn(t,Ct()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,_n,yi),Sn(t,Ct()),null}function yd(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(Hs=Ct()+500,Ql&&dr())}}function zr(t){Yi!==null&&Yi.tag===0&&!(st&6)&&Is();var e=st;st|=1;var n=Xn.transition,i=ut;try{if(Xn.transition=null,ut=1,t)return t()}finally{ut=i,Xn.transition=n,st=e,!(st&6)&&dr()}}function Sd(){bn=ws.current,_t(ws)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rx(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:zs(),_t(xn),_t(an),ud();break;case 5:cd(i);break;case 4:zs();break;case 13:_t(Et);break;case 19:_t(Et);break;case 10:sd(i.type._context);break;case 22:case 23:Sd()}n=n.return}if(Vt=t,It=t=ir(t.current,null),Zt=bn=e,Ut=0,Ko=null,vd=nc=kr=0,_n=bo=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function B0(t,e){do{var n=It;try{if(rd(),al.current=Dl,Ll){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(Fr=0,Gt=Nt=Tt=null,Ao=!1,Yo=0,_d.current=null,n===null||n.return===null){Ut=1,Ko=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Ih(o);if(m!==null){m.flags&=-257,Nh(m,o,a,s,e),m.mode&1&&Dh(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Dh(s,c,e),Md();break e}l=Error(fe(426))}}else if(vt&&a.mode&1){var p=Ih(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Nh(p,o,a,s,e),nd(Bs(l,a));break e}}s=l=Bs(l,a),Ut!==4&&(Ut=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=E0(s,l,e);Ah(s,u);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(tr===null||!tr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=T0(s,a,e);Ah(s,y);break e}}s=s.return}while(s!==null)}V0(n)}catch(C){e=C,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function H0(){var t=Il.current;return Il.current=Dl,t===null?Dl:t}function Md(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(kr&268435455)&&!(nc&268435455)||ji(Vt,Zt)}function Ol(t,e){var n=st;st|=2;var i=H0();(Vt!==t||Zt!==e)&&(yi=null,Cr(t,e));do try{Qx();break}catch(r){B0(t,r)}while(!0);if(rd(),st=n,Il.current=i,It!==null)throw Error(fe(261));return Vt=null,Zt=0,Ut}function Qx(){for(;It!==null;)G0(It)}function Jx(){for(;It!==null&&!Tv();)G0(It)}function G0(t){var e=j0(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?V0(t):It=e,_d.current=null}function V0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xx(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,It=null;return}}else if(n=jx(n,e,bn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ut===0&&(Ut=5)}function Sr(t,e,n){var i=ut,r=Xn.transition;try{Xn.transition=null,ut=1,ey(t,e,n,i)}finally{Xn.transition=r,ut=i}return null}function ey(t,e,n,i){do Is();while(Yi!==null);if(st&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nv(t,s),t===Vt&&(It=Vt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,X0(_l,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=ut;ut=1;var a=st;st|=4,_d.current=null,qx(t,n),F0(n,t),yx($u),xl=!!qu,$u=qu=null,t.current=n,$x(n),wv(),st=a,ut=o,Xn.transition=s}else t.current=n;if(Ta&&(Ta=!1,Yi=t,Ul=r),s=t.pendingLanes,s===0&&(tr=null),bv(n.stateNode),Sn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=gf,gf=null,t;return Ul&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===_f?Co++:(Co=0,_f=t):Co=0,dr(),null}function Is(){if(Yi!==null){var t=Eg(Ul),e=Xn.transition,n=ut;try{if(Xn.transition=null,ut=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Ul=0,st&6)throw Error(fe(331));var r=st;for(st|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var f=Ee;switch(f.tag){case 0:case 11:case 15:Ro(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ee=d;else for(;Ee!==null;){f=Ee;var h=f.sibling,m=f.return;if(N0(f),f===c){Ee=null;break}if(h!==null){h.return=m,Ee=h;break}Ee=m}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ee=u;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(C){bt(a,a.return,C)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(st=r,dr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Yl,t)}catch{}i=!0}return i}finally{ut=n,Xn.transition=e}}return!1}function Yh(t,e,n){e=Bs(n,e),e=E0(t,e,1),t=er(t,e,1),e=dn(),t!==null&&(ta(t,1,e),Sn(t,e))}function bt(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Bs(n,t),t=T0(e,t,1),e=er(e,t,1),t=dn(),e!==null&&(ta(e,1,t),Sn(e,t));break}}e=e.return}}function ty(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Zt&n)===n&&(Ut===4||Ut===3&&(Zt&130023424)===Zt&&500>Ct()-xd?Cr(t,0):vd|=n),Sn(t,e)}function W0(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=dn();t=Ci(t,e),t!==null&&(ta(t,e,n),Sn(t,n))}function ny(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W0(t,n)}function iy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),W0(t,n)}var j0;j0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,Wx(t,e,n);vn=!!(t.flags&131072)}else vn=!1,vt&&e.flags&1048576&&$g(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=Os(e,an.current);Ds(e,n),r=dd(null,e,i,t,r,n);var s=hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ad(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&ed(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sy(i),t=Jn(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=Fh(null,e,i,t,n);break e;case 11:e=Uh(null,e,i,t,n);break e;case 14:e=Oh(null,e,i,Jn(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Fh(t,e,i,r,n);case 3:e:{if(b0(e),t===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,t0(t,e),Cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(fe(423)),e),e=kh(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(fe(424)),e),e=kh(t,e,i,n,r);break e}else for(Ln=Ji(e.stateNode.containerInfo.firstChild),Dn=e,vt=!0,ti=null,n=Jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=Pi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return n0(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ku(i,r)?o=null:s!==null&&Ku(i,s)&&(e.flags|=32),R0(t,e),un(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return C0(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Uh(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Rl,i._currentValue),i._currentValue=o,s!==null)if(oi(s.value,o)){if(s.children===r.children&&!xn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Yn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Oh(t,e,i,r,n);case 15:return w0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),cl(t,e),e.tag=1,yn(i)?(t=!0,Tl(e)):t=!1,Ds(e,n),M0(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return P0(t,e,n);case 22:return A0(t,e,n)}throw Error(fe(156,e.tag))};function X0(t,e){return xg(t,e)}function ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new ry(t,e,n,i)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sy(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gf)return 11;if(t===Vf)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Pr(n.children,r,s,e);case Hf:o=8,r|=8;break;case bu:return t=Wn(12,n,e,r|2),t.elementType=bu,t.lanes=s,t;case Cu:return t=Wn(13,n,e,r),t.elementType=Cu,t.lanes=s,t;case Pu:return t=Wn(19,n,e,r),t.elementType=Pu,t.lanes=s,t;case ng:return ic(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case Gf:o=11;break e;case Vf:o=14;break e;case Bi:o=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function ic(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Td(t,e,n,i,r,s,o,a,l){return t=new oy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y0(t){if(!t)return lr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(yn(n))return Yg(t,n,e)}return e}function q0(t,e,n,i,r,s,o,a,l){return t=Td(n,i,!0,t,r,s,o,a,l),t.context=Y0(null),n=t.current,i=dn(),r=nr(n),s=wi(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ta(t,r,i),Sn(t,i),t}function rc(t,e,n,i){var r=e.current,s=dn(),o=nr(r);return n=Y0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(si(t,r,o,s),ol(t,r,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function ly(){return null}var $0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}sc.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));rc(t,e,null,null)};sc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){rc(null,t,null,null)}),e[bi]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&bg(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $h(){}function cy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fl(o);s.call(c)}}var o=q0(e,i,t,0,null,!1,!1,"",$h);return t._reactRootContainer=o,t[bi]=o.current,Go(t.nodeType===8?t.parentNode:t),zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fl(l);a.call(c)}}var l=Td(t,0,!1,null,null,!1,!1,"",$h);return t._reactRootContainer=l,t[bi]=l.current,Go(t.nodeType===8?t.parentNode:t),zr(function(){rc(e,l,n,i)}),l}function ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Fl(o);a.call(l)}}rc(e,o,t,r)}else o=cy(n,e,t,r,i);return Fl(o)}Tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(Xf(e,n|1),Sn(e,Ct()),!(st&6)&&(Hs=Ct()+500,dr()))}break;case 13:zr(function(){var i=Ci(t,1);if(i!==null){var r=dn();si(i,t,1,r)}}),wd(t,1)}};Yf=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=dn();si(e,t,134217728,n)}wd(t,134217728)}};wg=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=dn();si(n,t,e,i)}wd(t,e)}};Ag=function(){return ut};Rg=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Bu=function(t,e,n){switch(e){case"input":if(Iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Zl(i);if(!r)throw Error(fe(90));rg(i),Iu(i,r)}}}break;case"textarea":og(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};hg=yd;pg=zr;var uy={usingClientEntryPoint:!1,Events:[ia,xs,Zl,fg,dg,yd]},so={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_g(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wa.isDisabled&&wa.supportsFiber)try{Yl=wa.inject(fy),di=wa}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(fe(200));return ay(t,e,null,n)};Nn.createRoot=function(t,e){if(!Rd(t))throw Error(fe(299));var n=!1,i="",r=$0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Td(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Go(t.nodeType===8?t.parentNode:t),new Ad(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=_g(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return zr(t)};Nn.hydrate=function(t,e,n){if(!oc(e))throw Error(fe(200));return ac(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q0(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,Go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new sc(e)};Nn.render=function(t,e,n){if(!oc(e))throw Error(fe(200));return ac(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!oc(t))throw Error(fe(40));return t._reactRootContainer?(zr(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Nn.unstable_batchedUpdates=yd;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!oc(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return ac(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),Km.exports=Nn;var dy=Km.exports,Kh=dy;Au.createRoot=Kh.createRoot,Au.hydrateRoot=Kh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="160",Xr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hy=0,Zh=1,py=2,Z0=1,Q0=2,xi=3,cr=0,Mn=1,Gn=2,rr=0,Lr=1,Gi=2,Qh=3,Jh=4,my=5,Er=100,gy=101,_y=102,ep=103,tp=104,vy=200,xy=201,yy=202,Sy=203,yf=204,Sf=205,My=206,Ey=207,Ty=208,wy=209,Ay=210,Ry=211,by=212,Cy=213,Py=214,Ly=0,Dy=1,Iy=2,kl=3,Ny=4,Uy=5,Oy=6,Fy=7,J0=0,ky=1,zy=2,sr=0,By=1,Hy=2,Gy=3,e_=4,Vy=5,Wy=6,t_=300,Gs=301,Vs=302,Mf=303,Ef=304,lc=306,Tf=1e3,ni=1001,wf=1002,fn=1003,np=1004,Vc=1005,Cn=1006,jy=1007,Ws=1008,or=1009,Xy=1010,Yy=1011,Cd=1012,n_=1013,qi=1014,$i=1015,Zo=1016,i_=1017,r_=1018,Dr=1020,qy=1021,ii=1023,$y=1024,Ky=1025,Ir=1026,js=1027,Zy=1028,s_=1029,Qy=1030,o_=1031,a_=1033,Wc=33776,jc=33777,Xc=33778,Yc=33779,ip=35840,rp=35841,sp=35842,op=35843,l_=36196,ap=37492,lp=37496,cp=37808,up=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,yp=37819,Sp=37820,Mp=37821,qc=36492,Ep=36494,Tp=36495,Jy=36283,wp=36284,Ap=36285,Rp=36286,c_=3e3,Nr=3001,eS=3200,u_=3201,f_=0,tS=1,Vn="",Dt="srgb",Li="srgb-linear",Pd="display-p3",cc="display-p3-linear",zl="linear",gt="srgb",Bl="rec709",Hl="p3",qr=7680,bp=519,nS=512,iS=513,rS=514,d_=515,sS=516,oS=517,aS=518,lS=519,Af=35044,Cp="300 es",Rf=1035,Ti=2e3,Gl=2001;class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pp=1234567;const Po=Math.PI/180,Qo=180/Math.PI;function Ai(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function Ld(t,e){return(t%e+e)%e}function cS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function uS(t,e,n){return t!==e?(n-t)/(e-t):0}function Lo(t,e,n){return(1-n)*t+n*e}function fS(t,e,n,i){return Lo(t,e,1-Math.exp(-n*i))}function dS(t,e=1){return e-Math.abs(Ld(t,e*2)-e)}function hS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function pS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function mS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gS(t,e){return t+Math.random()*(e-t)}function _S(t){return t*(.5-Math.random())}function vS(t){t!==void 0&&(Pp=t);let e=Pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xS(t){return t*Po}function yS(t){return t*Qo}function bf(t){return(t&t-1)===0&&t!==0}function SS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Vl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function MS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),m=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*v,l*m,a*c);break;case"YXY":t.set(l*m,a*f,l*v,a*c);break;case"ZYZ":t.set(l*v,l*m,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const h_={DEG2RAD:Po,RAD2DEG:Qo,generateUUID:Ai,clamp:on,euclideanModulo:Ld,mapLinear:cS,inverseLerp:uS,lerp:Lo,damp:fS,pingpong:dS,smoothstep:hS,smootherstep:pS,randInt:mS,randFloat:gS,randFloatSpread:_S,seededRandom:vS,degToRad:xS,radToDeg:yS,isPowerOfTwo:bf,ceilPowerOfTwo:SS,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:MS,normalize:dt,denormalize:fi};class Ue{constructor(e=0,n=0){Ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],v=i[8],x=r[0],p=r[3],u=r[6],g=r[1],_=r[4],y=r[7],C=r[2],R=r[5],A=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*p+a*_+l*R,s[6]=o*u+a*y+l*A,s[1]=c*x+f*g+d*C,s[4]=c*p+f*_+d*R,s[7]=c*u+f*y+d*A,s[2]=h*x+m*g+v*C,s[5]=h*p+m*_+v*R,s[8]=h*u+m*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,v=n*d+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($c.makeScale(e,n)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,n){return this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new Je;function p_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ES(){const t=Jo("canvas");return t.style.display="block",t}const Lp={};function Do(t){t in Lp||(Lp[t]=!0,console.warn(t))}const Dp=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ip=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Li]:{transfer:zl,primaries:Bl,toReference:t=>t,fromReference:t=>t},[Dt]:{transfer:gt,primaries:Bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cc]:{transfer:zl,primaries:Hl,toReference:t=>t.applyMatrix3(Ip),fromReference:t=>t.applyMatrix3(Dp)},[Pd]:{transfer:gt,primaries:Hl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ip),fromReference:t=>t.applyMatrix3(Dp).convertLinearToSRGB()}},TS=new Set([Li,cc]),ht={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!TS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Aa[e].toReference,r=Aa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Aa[t].primaries},getTransfer:function(t){return t===Vn?zl:Aa[t].transfer}};function Ns(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class m_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=Jo("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ns(n[i]/255)*255):n[i]=Ns(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wS=0;class g_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;class hn extends Wr{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=ni,r=ni,s=Cn,o=Ws,a=ii,l=or,c=hn.DEFAULT_ANISOTROPY,f=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Ai(),this.name="",this.source=new g_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Nr?Dt:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Nr:c_}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?Dt:Vn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=t_;hn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],v=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(m+1)/2,C=(u+1)/2,R=(f+h)/4,A=(d+x)/4,D=(v+p)/4;return _>y&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=A/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=D/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-v)/g,this.y=(d-x)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RS extends Wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?Dt:Vn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new g_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Br extends RS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class __ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bS extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==v){let p=1-a;const u=l*h+c*m+f*v+d*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const C=Math.sqrt(_),R=Math.atan2(C,u*g);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const y=a*g;if(l=l*p+h*y,c=c*p+m*y,f=f*p+v*y,d=d*p+x*y,p===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=C,c*=C,f*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*m-c*h,e[n+1]=l*v+f*h+c*d-a*m,e[n+2]=c*v+f*m+a*h-l*d,e[n+3]=f*v-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*v,this._y=c*m*d-h*f*v,this._z=c*f*v+h*m*d,this._w=c*f*d-h*m*v;break;case"YXZ":this._x=h*f*d+c*m*v,this._y=c*m*d-h*f*v,this._z=c*f*v-h*m*d,this._w=c*f*d+h*m*v;break;case"ZXY":this._x=h*f*d-c*m*v,this._y=c*m*d+h*f*v,this._z=c*f*v+h*m*d,this._w=c*f*d-h*m*v;break;case"ZYX":this._x=h*f*d-c*m*v,this._y=c*m*d+h*f*v,this._z=c*f*v-h*m*d,this._w=c*f*d+h*m*v;break;case"YZX":this._x=h*f*d+c*m*v,this._y=c*m*d+h*f*v,this._z=c*f*v-h*m*d,this._w=c*f*d-h*m*v;break;case"XZY":this._x=h*f*d-c*m*v,this._y=c*m*d-h*f*v,this._z=c*f*v+h*m*d,this._w=c*f*d+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new L,Np=new Hr;class sa{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),ba.subVectors(this.max,oo),Kr.subVectors(e.a,oo),Zr.subVectors(e.b,oo),Qr.subVectors(e.c,oo),Ui.subVectors(Zr,Kr),Oi.subVectors(Qr,Zr),gr.subVectors(Kr,Qr);let n=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-gr.z,gr.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,gr.z,0,-gr.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-gr.y,gr.x,0];return!Jc(n,Kr,Zr,Qr,ba)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,Kr,Zr,Qr,ba))?!1:(Ca.crossVectors(Ui,Oi),n=[Ca.x,Ca.y,Ca.z],Jc(n,Kr,Zr,Qr,ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new L,new L,new L,new L,new L,new L,new L,new L],Kn=new L,Ra=new sa,Kr=new L,Zr=new L,Qr=new L,Ui=new L,Oi=new L,gr=new L,oo=new L,ba=new L,Ca=new L,_r=new L;function Jc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_r.fromArray(t,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=n.dot(_r),f=i.dot(_r);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const CS=new sa,ao=new L,eu=new L;class oa{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const n=ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(eu)),this.expandByPoint(ao.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new L,tu=new L,Pa=new L,Fi=new L,nu=new L,La=new L,iu=new L;class aa{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Fi.dot(this.direction),l=-Fi.dot(Pa),c=Fi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tu).addScaledVector(Pa,h),m}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),La.subVectors(i,e),iu.crossVectors(nu,La);let o=this.direction.dot(iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Fi,La));if(l<0)return null;const c=a*this.direction.dot(nu.cross(Fi));if(c<0||l+c>o)return null;const f=-a*Fi.dot(iu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,v,x,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,v,x,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,v,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=v,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,v=c*f,x=c*d;n[0]=h+x*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,v=c*f,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=o*f,n[9]=m*d-v,n[2]=v*d-m,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PS,e,LS)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),ki.crossVectors(i,An),ki.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ki.crossVectors(i,An)),ki.normalize(),Da.crossVectors(An,ki),r[0]=ki.x,r[4]=Da.x,r[8]=An.x,r[1]=ki.y,r[5]=Da.y,r[9]=An.y,r[2]=ki.z,r[6]=Da.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],v=i[2],x=i[6],p=i[10],u=i[14],g=i[3],_=i[7],y=i[11],C=i[15],R=r[0],A=r[4],D=r[8],S=r[12],T=r[1],B=r[5],$=r[9],re=r[13],I=r[2],G=r[6],q=r[10],K=r[14],N=r[3],H=r[7],V=r[11],ee=r[15];return s[0]=o*R+a*T+l*I+c*N,s[4]=o*A+a*B+l*G+c*H,s[8]=o*D+a*$+l*q+c*V,s[12]=o*S+a*re+l*K+c*ee,s[1]=f*R+d*T+h*I+m*N,s[5]=f*A+d*B+h*G+m*H,s[9]=f*D+d*$+h*q+m*V,s[13]=f*S+d*re+h*K+m*ee,s[2]=v*R+x*T+p*I+u*N,s[6]=v*A+x*B+p*G+u*H,s[10]=v*D+x*$+p*q+u*V,s[14]=v*S+x*re+p*K+u*ee,s[3]=g*R+_*T+y*I+C*N,s[7]=g*A+_*B+y*G+C*H,s[11]=g*D+_*$+y*q+C*V,s[15]=g*S+_*re+y*K+C*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],v=e[3],x=e[7],p=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+x*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],v=e[12],x=e[13],p=e[14],u=e[15],g=d*p*c-x*h*c+x*l*m-a*p*m-d*l*u+a*h*u,_=v*h*c-f*p*c-v*l*m+o*p*m+f*l*u-o*h*u,y=f*x*c-v*d*c+v*a*m-o*x*m-f*a*u+o*d*u,C=v*d*l-f*x*l-v*a*h+o*x*h+f*a*p-o*d*p,R=n*g+i*_+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(x*h*s-d*p*s-x*r*m+i*p*m+d*r*u-i*h*u)*A,e[2]=(a*p*s-x*l*s+x*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*A,e[4]=_*A,e[5]=(f*p*s-v*h*s+v*r*m-n*p*m-f*r*u+n*h*u)*A,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*A,e[8]=y*A,e[9]=(v*d*s-f*x*s-v*i*m+n*x*m+f*i*u-n*d*u)*A,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*A,e[12]=C*A,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*p+n*d*p)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*p-n*a*p)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,v=s*d,x=o*f,p=o*d,u=a*d,g=l*c,_=l*f,y=l*d,C=i.x,R=i.y,A=i.z;return r[0]=(1-(x+u))*C,r[1]=(m+y)*C,r[2]=(v-_)*C,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+u))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(v+_)*A,r[9]=(p-g)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,f=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=f,Zn.elements[5]*=f,Zn.elements[6]*=f,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(a===Ti)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Gl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let v,x;if(a===Ti)v=(o+s)*d,x=-2*d;else if(a===Gl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new L,Zn=new wt,PS=new L(0,0,0),LS=new L(1,1,1),ki=new L,Da=new L,An=new L,Up=new wt,Op=new Hr;class uc{constructor(e=0,n=0,i=0,r=uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uc.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DS=0;const Fp=new L,es=new Hr,gi=new wt,Ia=new L,lo=new L,IS=new L,NS=new Hr,kp=new L(1,0,0),zp=new L(0,1,0),Bp=new L(0,0,1),US={type:"added"},OS={type:"removed"};class Ot extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new L,n=new uc,i=new Hr,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ia.copy(e):Ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(lo,Ia,this.up):gi.lookAt(Ia,lo,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(gi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(US)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,IS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new L(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new L,_i=new L,ru=new L,vi=new L,ts=new L,ns=new L,Hp=new L,su=new L,ou=new L,au=new L;let Na=!1;class Hn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),_i.subVectors(i,n),ru.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(_i),l=Qn.dot(ru),c=_i.dot(_i),f=_i.dot(ru),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),_i.subVectors(e,n),Qn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Na=!0),Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ts.subVectors(r,i),ns.subVectors(s,i),su.subVectors(e,i);const l=ts.dot(su),c=ns.dot(su);if(l<=0&&c<=0)return n.copy(i);ou.subVectors(e,r);const f=ts.dot(ou),d=ns.dot(ou);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ts,o);au.subVectors(e,s);const m=ts.dot(au),v=ns.dot(au);if(v>=0&&m<=v)return n.copy(s);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ns,a);const p=f*v-m*d;if(p<=0&&d-f>=0&&m-v>=0)return Hp.subVectors(s,r),a=(d-f)/(d-f+(m-v)),n.copy(r).addScaledVector(Hp,a);const u=1/(p+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=Ld(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lu(o,s,e+1/3),this.g=lu(o,s,e),this.b=lu(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,n=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dt){const i=v_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return ht.fromWorkingColorSpace(rn.copy(this),e),Math.round(on(rn.r*255,0,255))*65536+Math.round(on(rn.g*255,0,255))*256+Math.round(on(rn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Dt){ht.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Dt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Ua);const i=Lo(zi.h,Ua.h,n),r=Lo(zi.s,Ua.s,n),s=Lo(zi.l,Ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Ze;Ze.NAMES=v_;let FS=0;class hr extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Lr,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class x_ extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new L,Oa=new Ue;class En{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fi(n,this.array)),n}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fi(n,this.array)),n}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fi(n,this.array)),n}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Af&&(e.usage=this.usage),e}}class y_ extends En{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class S_ extends En{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends En{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kS=0;const kn=new wt,cu=new Ot,is=new L,Rn=new sa,co=new sa,Bt=new L;class Kt extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p_(e)?S_:y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Rn.min,co.min),Rn.expandByPoint(Bt),Bt.addVectors(Rn.max,co.max),Rn.expandByPoint(Bt)):(Rn.expandByPoint(co.min),Rn.expandByPoint(co.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Bt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Bt.add(is)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<a;T++)c[T]=new L,f[T]=new L;const d=new L,h=new L,m=new L,v=new Ue,x=new Ue,p=new Ue,u=new L,g=new L;function _(T,B,$){d.fromArray(r,T*3),h.fromArray(r,B*3),m.fromArray(r,$*3),v.fromArray(o,T*2),x.fromArray(o,B*2),p.fromArray(o,$*2),h.sub(d),m.sub(d),x.sub(v),p.sub(v);const re=1/(x.x*p.y-p.x*x.y);isFinite(re)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(re),g.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(re),c[T].add(u),c[B].add(u),c[$].add(u),f[T].add(g),f[B].add(g),f[$].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,B=y.length;T<B;++T){const $=y[T],re=$.start,I=$.count;for(let G=re,q=re+I;G<q;G+=3)_(i[G+0],i[G+1],i[G+2])}const C=new L,R=new L,A=new L,D=new L;function S(T){A.fromArray(s,T*3),D.copy(A);const B=c[T];C.copy(B),C.sub(A.multiplyScalar(A.dot(B))).normalize(),R.crossVectors(D,B);const re=R.dot(f[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=re}for(let T=0,B=y.length;T<B;++T){const $=y[T],re=$.start,I=$.count;for(let G=re,q=re+I;G<q;G+=3)S(i[G+0]),S(i[G+1]),S(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,d=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)h[v++]=c[m++]}return new En(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new wt,vr=new aa,Fa=new oa,Vp=new L,rs=new L,ss=new L,os=new L,uu=new L,ka=new L,za=new Ue,Ba=new Ue,Ha=new Ue,Wp=new L,jp=new L,Xp=new L,Ga=new L,Va=new L;class jn extends Ot{constructor(e=new Kt,n=new x_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(uu.fromBufferAttribute(d,e),o?ka.addScaledVector(uu,f):ka.addScaledVector(uu.sub(n),f))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Fa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Fa,Vp)===null||vr.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(Gp.copy(s).invert(),vr.copy(e.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],u=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,C=_;y<C;y+=3){const R=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);r=Wa(this,u,e,i,c,f,d,R,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const g=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);r=Wa(this,o,e,i,c,f,d,g,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const p=h[v],u=o[p.materialIndex],g=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,C=_;y<C;y+=3){const R=y,A=y+1,D=y+2;r=Wa(this,u,e,i,c,f,d,R,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=v,u=x;p<u;p+=3){const g=p,_=p+1,y=p+2;r=Wa(this,o,e,i,c,f,d,g,_,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function zS(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,rs),t.getVertexPosition(l,ss),t.getVertexPosition(c,os);const f=zS(t,e,n,i,rs,ss,os,Ga);if(f){r&&(za.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),f.uv=Hn.getInterpolation(Ga,rs,ss,os,za,Ba,Ha,new Ue)),s&&(za.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),f.uv1=Hn.getInterpolation(Ga,rs,ss,os,za,Ba,Ha,new Ue),f.uv2=f.uv1),o&&(Wp.fromBufferAttribute(o,a),jp.fromBufferAttribute(o,l),Xp.fromBufferAttribute(o,c),f.normal=Hn.getInterpolation(Ga,rs,ss,os,Wp,jp,Xp,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Hn.getNormal(rs,ss,os,d.normal),f.face=d}return f}class la extends Kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(d,2));function v(x,p,u,g,_,y,C,R,A,D,S){const T=y/A,B=C/D,$=y/2,re=C/2,I=R/2,G=A+1,q=D+1;let K=0,N=0;const H=new L;for(let V=0;V<q;V++){const ee=V*B-re;for(let ie=0;ie<G;ie++){const k=ie*T-$;H[x]=k*g,H[p]=ee*_,H[u]=I,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[u]=R>0?1:-1,f.push(H.x,H.y,H.z),d.push(ie/A),d.push(1-V/D),K+=1}}for(let V=0;V<D;V++)for(let ee=0;ee<A;ee++){const ie=h+ee+G*V,k=h+ee+G*(V+1),Z=h+(ee+1)+G*(V+1),ce=h+(ee+1)+G*V;l.push(ie,k,ce),l.push(k,Z,ce),N+=6}a.addGroup(m,N,S),m+=N,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const r in i)e[r]=i[r]}return e}function BS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function M_(t){return t.getRenderTarget()===null?t.outputColorSpace:ht.workingColorSpace}const HS={clone:Xs,merge:cn};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=BS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class E_ extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends E_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Po*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class WS extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(as,ls,e,n);r.layers=this.layers,this.add(r);const s=new Pn(as,ls,e,n);s.layers=this.layers,this.add(s);const o=new Pn(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new Pn(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new Pn(as,ls,e,n);l.layers=this.layers,this.add(l);const c=new Pn(as,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class T_ extends hn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends Br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?Dt:Vn),this.texture=new T_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new la(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:rr});s.uniforms.tEquirect.value=n;const o=new jn(r,s),a=n.minFilter;return n.minFilter===Ws&&(n.minFilter=Cn),new WS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fu=new L,XS=new L,YS=new Je;class Vi{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross(XS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YS.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new oa,ja=new L;class Id{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi,o=new Vi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],v=r[9],x=r[10],p=r[11],u=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-u).normalize(),i[1].setComponents(l+s,h+c,p+m,y+u).normalize(),i[2].setComponents(l+o,h+f,p+v,y+g).normalize(),i[3].setComponents(l-o,h-f,p-v,y-g).normalize(),i[4].setComponents(l-a,h-d,p-x,y-_).normalize(),n===Ti)i[5].setComponents(l+a,h+d,p+x,y+_).normalize();else if(n===Gl)i[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,v=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&v.length===0&&t.bufferSubData(d,0,h),v.length!==0){for(let x=0,p=v.length;x<p;x++){const u=v[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class Nd extends Kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],v=[],x=[],p=[];for(let u=0;u<f;u++){const g=u*h-o;for(let _=0;_<c;_++){const y=_*d-s;v.push(y,-g,0),x.push(0,0,1),p.push(_/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const _=g+c*u,y=g+c*(u+1),C=g+1+c*(u+1),R=g+1+c*u;m.push(_,y,R),m.push(y,C,R)}this.setIndex(m),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.width,e.height,e.widthSegments,e.heightSegments)}}var $S=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wM="gl_FragColor = linearToOutputTexel( gl_FragColor );",AM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,RM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$M=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,A1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:$S,alphahash_pars_fragment:KS,alphamap_fragment:ZS,alphamap_pars_fragment:QS,alphatest_fragment:JS,alphatest_pars_fragment:eM,aomap_fragment:tM,aomap_pars_fragment:nM,batching_pars_vertex:iM,batching_vertex:rM,begin_vertex:sM,beginnormal_vertex:oM,bsdfs:aM,iridescence_fragment:lM,bumpmap_pars_fragment:cM,clipping_planes_fragment:uM,clipping_planes_pars_fragment:fM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:hM,color_fragment:pM,color_pars_fragment:mM,color_pars_vertex:gM,color_vertex:_M,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:yM,displacementmap_pars_vertex:SM,displacementmap_vertex:MM,emissivemap_fragment:EM,emissivemap_pars_fragment:TM,colorspace_fragment:wM,colorspace_pars_fragment:AM,envmap_fragment:RM,envmap_common_pars_fragment:bM,envmap_pars_fragment:CM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:GM,envmap_vertex:LM,fog_vertex:DM,fog_pars_vertex:IM,fog_fragment:NM,fog_pars_fragment:UM,gradientmap_pars_fragment:OM,lightmap_fragment:FM,lightmap_pars_fragment:kM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:BM,lights_pars_begin:HM,lights_toon_fragment:VM,lights_toon_pars_fragment:WM,lights_phong_fragment:jM,lights_phong_pars_fragment:XM,lights_physical_fragment:YM,lights_physical_pars_fragment:qM,lights_fragment_begin:$M,lights_fragment_maps:KM,lights_fragment_end:ZM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:tE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:aE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:dE,normal_fragment_maps:hE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:EE,premultiplied_alpha_fragment:TE,project_vertex:wE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:PE,shadowmap_pars_vertex:LE,shadowmap_vertex:DE,shadowmask_pars_fragment:IE,skinbase_vertex:NE,skinning_pars_vertex:UE,skinning_vertex:OE,skinnormal_vertex:FE,specularmap_fragment:kE,specularmap_pars_fragment:zE,tonemapping_fragment:BE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:WE,uv_pars_vertex:jE,uv_vertex:XE,worldpos_vertex:YE,background_vert:qE,background_frag:$E,backgroundCube_vert:KE,backgroundCube_frag:ZE,cube_vert:QE,cube_frag:JE,depth_vert:e1,depth_frag:t1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:u1,meshlambert_frag:f1,meshmatcap_vert:d1,meshmatcap_frag:h1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:_1,meshphysical_vert:v1,meshphysical_frag:x1,meshtoon_vert:y1,meshtoon_frag:S1,points_vert:M1,points_frag:E1,shadow_vert:T1,shadow_frag:w1,sprite_vert:A1,sprite_frag:R1},me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ci={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Xa={r:0,b:0,g:0};function b1(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function v(p,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===lc)?(f===void 0&&(f=new jn(new la(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Xs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=ht.getTransfer(_.colorSpace)!==gt,(d!==_||h!==_.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=_,h=_.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new jn(new Nd(2,2),new Di({name:"BackgroundMaterial",uniforms:Xs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(Xa,M_(t)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:v}}function C1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(I,G,q,K,N){let H=!1;if(o){const V=x(K,q,G);c!==V&&(c=V,m(c.object)),H=u(I,K,q,N),H&&g(I,K,q,N)}else{const V=G.wireframe===!0;(c.geometry!==K.id||c.program!==q.id||c.wireframe!==V)&&(c.geometry=K.id,c.program=q.id,c.wireframe=V,H=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,D(I,G,q,K),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,G,q){const K=q.wireframe===!0;let N=a[I.id];N===void 0&&(N={},a[I.id]=N);let H=N[G.id];H===void 0&&(H={},N[G.id]=H);let V=H[K];return V===void 0&&(V=p(h()),H[K]=V),V}function p(I){const G=[],q=[],K=[];for(let N=0;N<r;N++)G[N]=0,q[N]=0,K[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:K,object:I,attributes:{},index:null}}function u(I,G,q,K){const N=c.attributes,H=G.attributes;let V=0;const ee=q.getAttributes();for(const ie in ee)if(ee[ie].location>=0){const Z=N[ie];let ce=H[ie];if(ce===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;V++}return c.attributesNum!==V||c.index!==K}function g(I,G,q,K){const N={},H=G.attributes;let V=0;const ee=q.getAttributes();for(const ie in ee)if(ee[ie].location>=0){let Z=H[ie];Z===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),N[ie]=ce,V++}c.attributes=N,c.attributesNum=V,c.index=K}function _(){const I=c.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function y(I){C(I,0)}function C(I,G){const q=c.newAttributes,K=c.enabledAttributes,N=c.attributeDivisors;q[I]=1,K[I]===0&&(t.enableVertexAttribArray(I),K[I]=1),N[I]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),N[I]=G)}function R(){const I=c.newAttributes,G=c.enabledAttributes;for(let q=0,K=G.length;q<K;q++)G[q]!==I[q]&&(t.disableVertexAttribArray(q),G[q]=0)}function A(I,G,q,K,N,H,V){V===!0?t.vertexAttribIPointer(I,G,q,N,H):t.vertexAttribPointer(I,G,q,K,N,H)}function D(I,G,q,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const N=K.attributes,H=q.getAttributes(),V=G.defaultAttributeValues;for(const ee in H){const ie=H[ee];if(ie.location>=0){let k=N[ee];if(k===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(k=I.instanceColor)),k!==void 0){const Z=k.normalized,ce=k.itemSize,_e=n.get(k);if(_e===void 0)continue;const ve=_e.buffer,Oe=_e.type,Ie=_e.bytesPerElement,ue=i.isWebGL2===!0&&(Oe===t.INT||Oe===t.UNSIGNED_INT||k.gpuType===n_);if(k.isInterleavedBufferAttribute){const Te=k.data,O=Te.stride,at=k.offset;if(Te.isInstancedInterleavedBuffer){for(let be=0;be<ie.locationSize;be++)C(ie.location+be,Te.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let be=0;be<ie.locationSize;be++)y(ie.location+be);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let be=0;be<ie.locationSize;be++)A(ie.location+be,ce/ie.locationSize,Oe,Z,O*Ie,(at+ce/ie.locationSize*be)*Ie,ue)}else{if(k.isInstancedBufferAttribute){for(let Te=0;Te<ie.locationSize;Te++)C(ie.location+Te,k.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Te=0;Te<ie.locationSize;Te++)y(ie.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Te=0;Te<ie.locationSize;Te++)A(ie.location+Te,ce/ie.locationSize,Oe,Z,ce*Ie,ce/ie.locationSize*Te*Ie,ue)}}else if(V!==void 0){const Z=V[ee];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(ie.location,Z);break;case 3:t.vertexAttrib3fv(ie.location,Z);break;case 4:t.vertexAttrib4fv(ie.location,Z);break;default:t.vertexAttrib1fv(ie.location,Z)}}}}R()}function S(){$();for(const I in a){const G=a[I];for(const q in G){const K=G[q];for(const N in K)v(K[N].object),delete K[N];delete G[q]}delete a[I]}}function T(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const q in G){const K=G[q];for(const N in K)v(K[N].object),delete K[N];delete G[q]}delete a[I.id]}function B(I){for(const G in a){const q=a[G];if(q[I.id]===void 0)continue;const K=q[I.id];for(const N in K)v(K[N].object),delete K[N];delete q[I.id]}}function $(){re(),f=!0,c!==l&&(c=l,m(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:re,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:y,disableUnusedAttributes:R}}function P1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,v;if(r)m=t,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<h;v++)this.render(f[v],d[v]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function L1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),C=_&&y,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function D1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,_=g*4;let y=u.clippingState||null;l.value=y,y=f(v,h,_,m);for(let C=0;C!==_;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const u=m+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let _=0,y=m;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function I1(t){let e=new WeakMap;function n(o,a){return a===Mf?o.mapping=Gs:a===Ef&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mf||a===Ef)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class A_ extends E_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const As=4,Yp=[.125,.215,.35,.446,.526,.582],Tr=20,du=new A_,qp=new Ze;let hu=null,pu=0,mu=0;const Mr=(1+Math.sqrt(5))/2,cs=1/Mr,$p=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Mr,cs),new L(0,Mr,-cs),new L(cs,0,Mr),new L(-cs,0,Mr),new L(Mr,cs,0),new L(-Mr,cs,0)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,pu,mu),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Zo,format:ii,colorSpace:Li,depthBuffer:!1},r=Zp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N1(s)),this._blurMaterial=U1(s,e,n)}return r}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(qp),f.toneMapping=sr,f.autoClear=!1;const m=new x_({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new jn(new la,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(qp),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;Ya(r,g*_,u>2?_:0,_,_),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$p[(r-1)%$p.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tr-1),x=s/v,p=isFinite(s)?1+Math.floor(f*x):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const u=[];let g=0;for(let A=0;A<Tr;++A){const D=A/x,S=Math.exp(-D*D/2);u.push(S),A===0?g+=S:A<p&&(g+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],C=3*y*(r>_-As?r-_+As:0),R=4*(this._cubeSize-y);Ya(n,C,R,3*y,2*y),l.setRenderTarget(n),l.render(d,du)}}function N1(t){const e=[],n=[],i=[];let r=t;const s=t-As+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-As?l=Yp[o-t+As-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,v=6,x=3,p=2,u=1,g=new Float32Array(x*v*m),_=new Float32Array(p*v*m),y=new Float32Array(u*v*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,D=R>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];g.set(S,x*v*R),_.set(h,p*v*R);const T=[R,R,R,R,R,R];y.set(T,u*v*R)}const C=new Kt;C.setAttribute("position",new En(g,x)),C.setAttribute("uv",new En(_,p)),C.setAttribute("faceIndex",new En(y,u)),e.push(C),r>As&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zp(t,e,n){const i=new Br(t,e,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function U1(t,e,n){const i=new Float32Array(Tr),r=new L(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Qp(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Jp(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mf||l===Ef,f=l===Gs||l===Vs;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Kp(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Kp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function k1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let _=0,y=g.length;_<y;_+=3){const C=g[_+0],R=g[_+1],A=g[_+2];h.push(C,R,R,A,A,C)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const C=_+0,R=_+1,A=_+2;h.push(C,R,R,A,A,C)}}else return;const p=new(p_(h)?S_:y_)(h,1);p.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function z1(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,v){t.drawElements(s,v,a,m*l),n.update(v,s,1)}function d(m,v,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,v,a,m*l,x),n.update(v,s,x)}function h(m,v,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,v[u]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,x);let u=0;for(let g=0;g<x;g++)u+=v[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function B1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function H1(t,e){return t[0]-e[0]}function G1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function V1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let p=s.get(f);if(p===void 0||p.count!==x){let G=function(){re.dispose(),s.delete(f),f.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const _=f.morphAttributes.position!==void 0,y=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let T=f.attributes.position.count*S,B=1;T>e.maxTextureSize&&(B=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*B*4*x),re=new __($,T,B,x);re.type=$i,re.needsUpdate=!0;const I=S*4;for(let q=0;q<x;q++){const K=R[q],N=A[q],H=D[q],V=T*B*4*q;for(let ee=0;ee<K.count;ee++){const ie=ee*I;_===!0&&(o.fromBufferAttribute(K,ee),$[V+ie+0]=o.x,$[V+ie+1]=o.y,$[V+ie+2]=o.z,$[V+ie+3]=0),y===!0&&(o.fromBufferAttribute(N,ee),$[V+ie+4]=o.x,$[V+ie+5]=o.y,$[V+ie+6]=o.z,$[V+ie+7]=0),C===!0&&(o.fromBufferAttribute(H,ee),$[V+ie+8]=o.x,$[V+ie+9]=o.y,$[V+ie+10]=o.z,$[V+ie+11]=H.itemSize===4?o.w:1)}}p={count:x,texture:re,size:new Ue(T,B)},s.set(f,p),f.addEventListener("dispose",G)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[f.id]=x}for(let y=0;y<v;y++){const C=x[y];C[0]=y,C[1]=h[y]}x.sort(G1);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(H1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&f.getAttribute("morphTarget"+y)!==p[R]&&f.setAttribute("morphTarget"+y,p[R]),u&&f.getAttribute("morphNormal"+y)!==u[R]&&f.setAttribute("morphNormal"+y,u[R]),r[y]=A,g+=A):(p&&f.hasAttribute("morphTarget"+y)===!0&&f.deleteAttribute("morphTarget"+y),u&&f.hasAttribute("morphNormal"+y)===!0&&f.deleteAttribute("morphNormal"+y),r[y]=0)}const _=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function W1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class R_ extends hn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Ir,f!==Ir&&f!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ir&&(i=qi),i===void 0&&f===js&&(i=Dr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const b_=new hn,C_=new R_(1,1);C_.compareFunction=d_;const P_=new __,L_=new bS,D_=new T_,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=em[r];if(s===void 0&&(s=new Float32Array(r),em[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fc(t,e){let n=tm[e];n===void 0&&(n=new Int32Array(e),tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;rm.set(i),t.uniformMatrix2fv(this.addr,!1,rm),kt(n,i)}}function K1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;im.set(i),t.uniformMatrix3fv(this.addr,!1,im),kt(n,i)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;nm.set(i),t.uniformMatrix4fv(this.addr,!1,nm),kt(n,i)}}function Q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?C_:b_;n.setTexture2D(e||s,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||L_,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||D_,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||P_,r)}function uT(t){switch(t){case 5126:return j1;case 35664:return X1;case 35665:return Y1;case 35666:return q1;case 35674:return $1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return Q1;case 35667:case 35671:return J1;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(t,e){t.uniform1fv(this.addr,e)}function dT(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function hT(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function pT(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function mT(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gT(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _T(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vT(t,e){t.uniform1iv(this.addr,e)}function xT(t,e){t.uniform2iv(this.addr,e)}function yT(t,e){t.uniform3iv(this.addr,e)}function ST(t,e){t.uniform4iv(this.addr,e)}function MT(t,e){t.uniform1uiv(this.addr,e)}function ET(t,e){t.uniform2uiv(this.addr,e)}function TT(t,e){t.uniform3uiv(this.addr,e)}function wT(t,e){t.uniform4uiv(this.addr,e)}function AT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||b_,s[o])}function RT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||L_,s[o])}function bT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||D_,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||P_,s[o])}function PT(t){switch(t){case 5126:return fT;case 35664:return dT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return ET;case 36295:return TT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return CT}}class LT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class DT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PT(n.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function NT(t,e,n){const i=t.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sm(n,c===void 0?new LT(a,t,e):new DT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new IT(a),sm(n,d)),n=d}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);NT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function om(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UT=37297;let OT=0;function FT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function kT(t){const e=ht.getPrimaries(ht.workingColorSpace),n=ht.getPrimaries(t);let i;switch(e===n?i="":e===Hl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===Hl&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case cc:return[i,"LinearTransferOETF"];case Dt:case Pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+FT(t.getShaderSource(e),o)}else return r}function zT(t,e){const n=kT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function BT(t,e){let n;switch(e){case By:n="Linear";break;case Hy:n="Reinhard";break;case Gy:n="OptimizedCineon";break;case e_:n="ACESFilmic";break;case Wy:n="AgX";break;case Vy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function HT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function GT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rs).join(`
`)}function VT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Rs(t){return t!==""}function lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(t){return t.replace(jT,YT)}const XT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YT(t,e){let n=Ke[e];if(n===void 0){const i=XT.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cf(n)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(t){return t.replace(qT,$T)}function $T(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function JT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J0:e="ENVMAP_BLENDING_MULTIPLY";break;case ky:e="ENVMAP_BLENDING_MIX";break;case zy:e="ENVMAP_BLENDING_ADD";break}return e}function ew(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=KT(n),c=ZT(n),f=QT(n),d=JT(n),h=ew(n),m=n.isWebGL2?"":HT(n),v=GT(n),x=VT(s),p=r.createProgram();let u,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Rs).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Rs).join(`
`),g.length>0&&(g+=`
`)):(u=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),g=[m,fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==sr?BT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Cf(o),o=lm(o,n),o=cm(o,n),a=Cf(a),a=lm(a,n),a=cm(a,n),o=um(o),a=um(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+u+o,C=_+g+a,R=om(r,r.VERTEX_SHADER,y),A=om(r,r.FRAGMENT_SHADER,C);r.attachShader(p,R),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D($){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(A).trim();let q=!0,K=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,A);else{const N=am(r,R,"vertex"),H=am(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+N+`
`+H)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(I===""||G==="")&&(K=!1);K&&($.diagnostics={runnable:q,programLog:re,vertexShader:{log:I,prefix:u},fragmentShader:{log:G,prefix:g}})}r.deleteShader(R),r.deleteShader(A),S=new hl(r,p),T=WT(r,p)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(p,UT)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rw(e),n.set(e,i)),i}}class rw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function sw(t,e,n,i,r,s,o){const a=new Dd,l=new iw,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,T,B,$,re){const I=$.fog,G=re.geometry,q=S.isMeshStandardMaterial?$.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),N=K&&K.mapping===lc?K.image.height:null,H=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const V=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=V!==void 0?V.length:0;let ie=0;G.morphAttributes.position!==void 0&&(ie=1),G.morphAttributes.normal!==void 0&&(ie=2),G.morphAttributes.color!==void 0&&(ie=3);let k,Z,ce,_e;if(H){const lt=ci[H];k=lt.vertexShader,Z=lt.fragmentShader}else k=S.vertexShader,Z=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const ve=t.getRenderTarget(),Oe=re.isInstancedMesh===!0,Ie=re.isBatchedMesh===!0,ue=!!S.map,Te=!!S.matcap,O=!!K,at=!!S.aoMap,be=!!S.lightMap,Ne=!!S.bumpMap,Se=!!S.normalMap,ot=!!S.displacementMap,He=!!S.emissiveMap,b=!!S.metalnessMap,M=!!S.roughnessMap,z=S.anisotropy>0,ae=S.clearcoat>0,se=S.iridescence>0,le=S.sheen>0,we=S.transmission>0,ge=z&&!!S.anisotropyMap,xe=ae&&!!S.clearcoatMap,De=ae&&!!S.clearcoatNormalMap,Ve=ae&&!!S.clearcoatRoughnessMap,oe=se&&!!S.iridescenceMap,nt=se&&!!S.iridescenceThicknessMap,Ye=le&&!!S.sheenColorMap,ze=le&&!!S.sheenRoughnessMap,Le=!!S.specularMap,U=!!S.specularColorMap,E=!!S.specularIntensityMap,J=we&&!!S.transmissionMap,pe=we&&!!S.thicknessMap,ne=!!S.gradientMap,Q=!!S.alphaMap,P=S.alphaTest>0,te=!!S.alphaHash,he=!!S.extensions,Ce=!!G.attributes.uv1,Re=!!G.attributes.uv2,Be=!!G.attributes.uv3;let We=sr;return S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(We=t.toneMapping),{isWebGL2:f,shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:Z,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,instancing:Oe,instancingColor:Oe&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Li,map:ue,matcap:Te,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:N,aoMap:at,lightMap:be,bumpMap:Ne,normalMap:Se,displacementMap:h&&ot,emissiveMap:He,normalMapObjectSpace:Se&&S.normalMapType===tS,normalMapTangentSpace:Se&&S.normalMapType===f_,metalnessMap:b,roughnessMap:M,anisotropy:z,anisotropyMap:ge,clearcoat:ae,clearcoatMap:xe,clearcoatNormalMap:De,clearcoatRoughnessMap:Ve,iridescence:se,iridescenceMap:oe,iridescenceThicknessMap:nt,sheen:le,sheenColorMap:Ye,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:U,specularIntensityMap:E,transmission:we,transmissionMap:J,thicknessMap:pe,gradientMap:ne,opaque:S.transparent===!1&&S.blending===Lr,alphaMap:Q,alphaTest:P,alphaHash:te,combine:S.combine,mapUv:ue&&x(S.map.channel),aoMapUv:at&&x(S.aoMap.channel),lightMapUv:be&&x(S.lightMap.channel),bumpMapUv:Ne&&x(S.bumpMap.channel),normalMapUv:Se&&x(S.normalMap.channel),displacementMapUv:ot&&x(S.displacementMap.channel),emissiveMapUv:He&&x(S.emissiveMap.channel),metalnessMapUv:b&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:ge&&x(S.anisotropyMap.channel),clearcoatMapUv:xe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(S.sheenRoughnessMap.channel),specularMapUv:Le&&x(S.specularMap.channel),specularColorMapUv:U&&x(S.specularColorMap.channel),specularIntensityMapUv:E&&x(S.specularIntensityMap.channel),transmissionMapUv:J&&x(S.transmissionMap.channel),thicknessMapUv:pe&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Se||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Re,vertexUv3s:Be,pointsUvs:re.isPoints===!0&&!!G.attributes.uv&&(ue||Q),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ue&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)T.push(B),T.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(g(T,S),_(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function g(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function _(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=v[S.type];let B;if(T){const $=ci[T];B=HS.clone($.uniforms)}else B=S.uniforms;return B}function C(S,T){let B;for(let $=0,re=c.length;$<re;$++){const I=c[$];if(I.cacheKey===T){B=I,++B.usedTimes;break}}return B===void 0&&(B=new tw(t,T,S,s),c.push(B)),B}function R(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:D}}function ow(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function aw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function dm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,v,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function a(d,h,m,v,x,p){const u=o(d,h,m,v,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,v,x,p){const u=o(d,h,m,v,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||aw),i.length>1&&i.sort(h||dm),r.length>1&&r.sort(h||dm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function lw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new hm,t.set(i,[o])):r>=s.length?(o=new hm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ze};break;case"SpotLight":n={position:new L,direction:new L,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fw=0;function dw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hw(t,e){const n=new cw,i=uw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new L);const s=new L,o=new wt,a=new wt;function l(f,d){let h=0,m=0,v=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,p=0,u=0,g=0,_=0,y=0,C=0,R=0,A=0,D=0,S=0;f.sort(dw);const T=d===!0?Math.PI:1;for(let $=0,re=f.length;$<re;$++){const I=f[$],G=I.color,q=I.intensity,K=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*q*T,m+=G.g*q*T,v+=G.b*q*T;else if(I.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(I.sh.coefficients[H],q);S++}else if(I.isDirectionalLight){const H=n.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const V=I.shadow,ee=i.get(I);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.directionalShadow[x]=ee,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=I.shadow.matrix,y++}r.directional[x]=H,x++}else if(I.isSpotLight){const H=n.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(G).multiplyScalar(q*T),H.distance=K,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,r.spot[u]=H;const V=I.shadow;if(I.map&&(r.spotLightMap[A]=I.map,A++,V.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[u]=V.matrix,I.castShadow){const ee=i.get(I);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=N,R++}u++}else if(I.isRectAreaLight){const H=n.get(I);H.color.copy(G).multiplyScalar(q),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=H,g++}else if(I.isPointLight){const H=n.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*T),H.distance=I.distance,H.decay=I.decay,I.castShadow){const V=I.shadow,ee=i.get(I);ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,r.pointShadow[p]=ee,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=I.shadow.matrix,C++}r.point[p]=H,p++}else if(I.isHemisphereLight){const H=n.get(I);H.skyColor.copy(I.color).multiplyScalar(q*T),H.groundColor.copy(I.groundColor).multiplyScalar(q*T),r.hemi[_]=H,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==x||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==g||B.hemiLength!==_||B.numDirectionalShadows!==y||B.numPointShadows!==C||B.numSpotShadows!==R||B.numSpotMaps!==A||B.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-D,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,B.directionalLength=x,B.pointLength=p,B.spotLength=u,B.rectAreaLength=g,B.hemiLength=_,B.numDirectionalShadows=y,B.numPointShadows=C,B.numSpotShadows=R,B.numSpotMaps=A,B.numLightProbes=S,r.version=fw++)}function c(f,d){let h=0,m=0,v=0,x=0,p=0;const u=d.matrixWorldInverse;for(let g=0,_=f.length;g<_;g++){const y=f[g];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(y.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),v++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function pm(t,e){const n=new hw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new pm(t,e),n.set(s,[l])):o>=a.length?(l=new pm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class I_ extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mw extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vw(t,e,n){let i=new Id;const r=new Ue,s=new Ue,o=new xt,a=new I_({depthPacking:u_}),l=new mw,c={},f=n.maxTextureSize,d={[cr]:Mn,[Mn]:cr,[Gn]:Gn},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:gw,fragmentShader:_w}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Kt;v.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let u=this.type;this.render=function(R,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=t.getRenderTarget(),T=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),$=t.state;$.setBlending(rr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const re=u!==xi&&this.type===xi,I=u===xi&&this.type!==xi;for(let G=0,q=R.length;G<q;G++){const K=R[G],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const H=N.getFrameExtents();if(r.multiply(H),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/H.x),r.x=s.x*H.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/H.y),r.y=s.y*H.y,N.mapSize.y=s.y)),N.map===null||re===!0||I===!0){const ee=this.type!==xi?{minFilter:fn,magFilter:fn}:{};N.map!==null&&N.map.dispose(),N.map=new Br(r.x,r.y,ee),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const V=N.getViewportCount();for(let ee=0;ee<V;ee++){const ie=N.getViewport(ee);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),$.viewport(o),N.updateMatrices(K,ee),i=N.getFrustum(),y(A,D,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===xi&&g(N,D),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,T,B)};function g(R,A){const D=e.update(x);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Br(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,D,h,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,D,m,x,null)}function _(R,A,D,S){let T=null;const B=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)T=B;else if(T=D.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=T.uuid,re=A.uuid;let I=c[$];I===void 0&&(I={},c[$]=I);let G=I[re];G===void 0&&(G=T.clone(),I[re]=G,A.addEventListener("dispose",C)),T=G}if(T.visible=A.visible,T.wireframe=A.wireframe,S===xi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const $=t.properties.get(T);$.light=D}return T}function y(R,A,D,S,T){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===xi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const re=e.update(R),I=R.material;if(Array.isArray(I)){const G=re.groups;for(let q=0,K=G.length;q<K;q++){const N=G[q],H=I[N.materialIndex];if(H&&H.visible){const V=_(R,H,S,T);R.onBeforeShadow(t,R,A,D,re,V,N),t.renderBufferDirect(D,null,re,V,R,N),R.onAfterShadow(t,R,A,D,re,V,N)}}}else if(I.visible){const G=_(R,I,S,T);R.onBeforeShadow(t,R,A,D,re,G,null),t.renderBufferDirect(D,null,re,G,R,null),R.onAfterShadow(t,R,A,D,re,G,null)}}const $=R.children;for(let re=0,I=$.length;re<I;re++)y($[re],A,D,S,T)}function C(R){R.target.removeEventListener("dispose",C);for(const D in c){const S=c[D],T=R.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function xw(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const te=new xt;let he=null;const Ce=new xt(0,0,0,0);return{setMask:function(Re){he!==Re&&!P&&(t.colorMask(Re,Re,Re,Re),he=Re)},setLocked:function(Re){P=Re},setClear:function(Re,Be,We,it,lt){lt===!0&&(Re*=it,Be*=it,We*=it),te.set(Re,Be,We,it),Ce.equals(te)===!1&&(t.clearColor(Re,Be,We,it),Ce.copy(te))},reset:function(){P=!1,he=null,Ce.set(-1,0,0,0)}}}function s(){let P=!1,te=null,he=null,Ce=null;return{setTest:function(Re){Re?Ie(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Re){te!==Re&&!P&&(t.depthMask(Re),te=Re)},setFunc:function(Re){if(he!==Re){switch(Re){case Ly:t.depthFunc(t.NEVER);break;case Dy:t.depthFunc(t.ALWAYS);break;case Iy:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case Ny:t.depthFunc(t.EQUAL);break;case Uy:t.depthFunc(t.GEQUAL);break;case Oy:t.depthFunc(t.GREATER);break;case Fy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Re}},setLocked:function(Re){P=Re},setClear:function(Re){Ce!==Re&&(t.clearDepth(Re),Ce=Re)},reset:function(){P=!1,te=null,he=null,Ce=null}}}function o(){let P=!1,te=null,he=null,Ce=null,Re=null,Be=null,We=null,it=null,lt=null;return{setTest:function(je){P||(je?Ie(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(je){te!==je&&!P&&(t.stencilMask(je),te=je)},setFunc:function(je,ct,ft){(he!==je||Ce!==ct||Re!==ft)&&(t.stencilFunc(je,ct,ft),he=je,Ce=ct,Re=ft)},setOp:function(je,ct,ft){(Be!==je||We!==ct||it!==ft)&&(t.stencilOp(je,ct,ft),Be=je,We=ct,it=ft)},setLocked:function(je){P=je},setClear:function(je){lt!==je&&(t.clearStencil(je),lt=je)},reset:function(){P=!1,te=null,he=null,Ce=null,Re=null,Be=null,We=null,it=null,lt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},m={},v=new WeakMap,x=[],p=null,u=!1,g=null,_=null,y=null,C=null,R=null,A=null,D=null,S=new Ze(0,0,0),T=0,B=!1,$=null,re=null,I=null,G=null,q=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=H>=2);let ee=null,ie={};const k=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ce=new xt().fromArray(k),_e=new xt().fromArray(Z);function ve(P,te,he,Ce){const Re=new Uint8Array(4),Be=t.createTexture();t.bindTexture(P,Be),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<he;We++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(te,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(te+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return Be}const Oe={};Oe[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Oe[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(t.DEPTH_TEST),l.setFunc(kl),He(!1),b(Zh),Ie(t.CULL_FACE),Se(rr);function Ie(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function ue(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Te(P,te){return m[P]!==te?(t.bindFramebuffer(P,te),m[P]=te,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=te),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=te)),!0):!1}function O(P,te){let he=x,Ce=!1;if(P)if(he=v.get(te),he===void 0&&(he=[],v.set(te,he)),P.isWebGLMultipleRenderTargets){const Re=P.texture;if(he.length!==Re.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,We=Re.length;Be<We;Be++)he[Be]=t.COLOR_ATTACHMENT0+Be;he.length=Re.length,Ce=!0}}else he[0]!==t.COLOR_ATTACHMENT0&&(he[0]=t.COLOR_ATTACHMENT0,Ce=!0);else he[0]!==t.BACK&&(he[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function at(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const be={[Er]:t.FUNC_ADD,[gy]:t.FUNC_SUBTRACT,[_y]:t.FUNC_REVERSE_SUBTRACT};if(i)be[ep]=t.MIN,be[tp]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(be[ep]=P.MIN_EXT,be[tp]=P.MAX_EXT)}const Ne={[vy]:t.ZERO,[xy]:t.ONE,[yy]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[Ay]:t.SRC_ALPHA_SATURATE,[Ty]:t.DST_COLOR,[My]:t.DST_ALPHA,[Sy]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[wy]:t.ONE_MINUS_DST_COLOR,[Ey]:t.ONE_MINUS_DST_ALPHA,[Ry]:t.CONSTANT_COLOR,[by]:t.ONE_MINUS_CONSTANT_COLOR,[Cy]:t.CONSTANT_ALPHA,[Py]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(P,te,he,Ce,Re,Be,We,it,lt,je){if(P===rr){u===!0&&(ue(t.BLEND),u=!1);return}if(u===!1&&(Ie(t.BLEND),u=!0),P!==my){if(P!==g||je!==B){if((_!==Er||R!==Er)&&(t.blendEquation(t.FUNC_ADD),_=Er,R=Er),je)switch(P){case Lr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gi:t.blendFunc(t.ONE,t.ONE);break;case Qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Lr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gi:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,C=null,A=null,D=null,S.set(0,0,0),T=0,g=P,B=je}return}Re=Re||te,Be=Be||he,We=We||Ce,(te!==_||Re!==R)&&(t.blendEquationSeparate(be[te],be[Re]),_=te,R=Re),(he!==y||Ce!==C||Be!==A||We!==D)&&(t.blendFuncSeparate(Ne[he],Ne[Ce],Ne[Be],Ne[We]),y=he,C=Ce,A=Be,D=We),(it.equals(S)===!1||lt!==T)&&(t.blendColor(it.r,it.g,it.b,lt),S.copy(it),T=lt),g=P,B=!1}function ot(P,te){P.side===Gn?ue(t.CULL_FACE):Ie(t.CULL_FACE);let he=P.side===Mn;te&&(he=!he),He(he),P.blending===Lr&&P.transparent===!1?Se(rr):Se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ce=P.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),z(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(P){$!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),$=P)}function b(P){P!==hy?(Ie(t.CULL_FACE),P!==re&&(P===Zh?t.cullFace(t.BACK):P===py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),re=P}function M(P){P!==I&&(N&&t.lineWidth(P),I=P)}function z(P,te,he){P?(Ie(t.POLYGON_OFFSET_FILL),(G!==te||q!==he)&&(t.polygonOffset(te,he),G=te,q=he)):ue(t.POLYGON_OFFSET_FILL)}function ae(P){P?Ie(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function se(P){P===void 0&&(P=t.TEXTURE0+K-1),ee!==P&&(t.activeTexture(P),ee=P)}function le(P,te,he){he===void 0&&(ee===null?he=t.TEXTURE0+K-1:he=ee);let Ce=ie[he];Ce===void 0&&(Ce={type:void 0,texture:void 0},ie[he]=Ce),(Ce.type!==P||Ce.texture!==te)&&(ee!==he&&(t.activeTexture(he),ee=he),t.bindTexture(P,te||Oe[P]),Ce.type=P,Ce.texture=te)}function we(){const P=ie[ee];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(P){ce.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function J(P){_e.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function pe(P,te){let he=d.get(te);he===void 0&&(he=new WeakMap,d.set(te,he));let Ce=he.get(P);Ce===void 0&&(Ce=t.getUniformBlockIndex(te,P.name),he.set(P,Ce))}function ne(P,te){const Ce=d.get(te).get(P);f.get(te)!==Ce&&(t.uniformBlockBinding(te,Ce,P.__bindingPointIndex),f.set(te,Ce))}function Q(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ee=null,ie={},m={},v=new WeakMap,x=[],p=null,u=!1,g=null,_=null,y=null,C=null,R=null,A=null,D=null,S=new Ze(0,0,0),T=0,B=!1,$=null,re=null,I=null,G=null,q=null,ce.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:ue,bindFramebuffer:Te,drawBuffers:O,useProgram:at,setBlending:Se,setMaterial:ot,setFlipSided:He,setCullFace:b,setLineWidth:M,setPolygonOffset:z,setScissorTest:ae,activeTexture:se,bindTexture:le,unbindTexture:we,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:Le,texImage3D:U,updateUBOMapping:pe,uniformBlockBinding:ne,texStorage2D:Ye,texStorage3D:ze,texSubImage2D:De,texSubImage3D:Ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:nt,scissor:E,viewport:J,reset:Q}}function yw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return m?new OffscreenCanvas(b,M):Jo("canvas")}function x(b,M,z,ae){let se=1;if((b.width>ae||b.height>ae)&&(se=ae/Math.max(b.width,b.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const le=M?Vl:Math.floor,we=le(se*b.width),ge=le(se*b.height);d===void 0&&(d=v(we,ge));const xe=z?v(we,ge):d;return xe.width=we,xe.height=ge,xe.getContext("2d").drawImage(b,0,0,we,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+we+"x"+ge+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return bf(b.width)&&bf(b.height)}function u(b){return a?!1:b.wrapS!==ni||b.wrapT!==ni||b.minFilter!==fn&&b.minFilter!==Cn}function g(b,M){return b.generateMipmaps&&M&&b.minFilter!==fn&&b.minFilter!==Cn}function _(b){t.generateMipmap(b)}function y(b,M,z,ae,se=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le=M;if(M===t.RED&&(z===t.FLOAT&&(le=t.R32F),z===t.HALF_FLOAT&&(le=t.R16F),z===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(le=t.R8UI),z===t.UNSIGNED_SHORT&&(le=t.R16UI),z===t.UNSIGNED_INT&&(le=t.R32UI),z===t.BYTE&&(le=t.R8I),z===t.SHORT&&(le=t.R16I),z===t.INT&&(le=t.R32I)),M===t.RG&&(z===t.FLOAT&&(le=t.RG32F),z===t.HALF_FLOAT&&(le=t.RG16F),z===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const we=se?zl:ht.getTransfer(ae);z===t.FLOAT&&(le=t.RGBA32F),z===t.HALF_FLOAT&&(le=t.RGBA16F),z===t.UNSIGNED_BYTE&&(le=we===gt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function C(b,M,z){return g(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==fn&&b.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function R(b){return b===fn||b===np||b===Vc?t.NEAREST:t.LINEAR}function A(b){const M=b.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&f.delete(M)}function D(b){const M=b.target;M.removeEventListener("dispose",D),B(M)}function S(b){const M=i.get(b);if(M.__webglInit===void 0)return;const z=b.source,ae=h.get(z);if(ae){const se=ae[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(b),Object.keys(ae).length===0&&h.delete(z)}i.remove(b)}function T(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const z=b.source,ae=h.get(z);delete ae[M.__cacheKey],o.memory.textures--}function B(b){const M=b.texture,z=i.get(b),ae=i.get(M);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(z.__webglFramebuffer[se]))for(let le=0;le<z.__webglFramebuffer[se].length;le++)t.deleteFramebuffer(z.__webglFramebuffer[se][le]);else t.deleteFramebuffer(z.__webglFramebuffer[se]);z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer[se])}else{if(Array.isArray(z.__webglFramebuffer))for(let se=0;se<z.__webglFramebuffer.length;se++)t.deleteFramebuffer(z.__webglFramebuffer[se]);else t.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&t.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&t.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let se=0;se<z.__webglColorRenderbuffer.length;se++)z.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(z.__webglColorRenderbuffer[se]);z.__webglDepthRenderbuffer&&t.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,le=M.length;se<le;se++){const we=i.get(M[se]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(b)}let $=0;function re(){$=0}function I(){const b=$;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),$+=1,b}function G(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function q(b,M){const z=i.get(b);if(b.isVideoTexture&&ot(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,b,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function K(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ce(z,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function N(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ce(z,b,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function H(b,M){const z=i.get(b);if(b.version>0&&z.__version!==b.version){_e(z,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const V={[Tf]:t.REPEAT,[ni]:t.CLAMP_TO_EDGE,[wf]:t.MIRRORED_REPEAT},ee={[fn]:t.NEAREST,[np]:t.NEAREST_MIPMAP_NEAREST,[Vc]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[jy]:t.LINEAR_MIPMAP_NEAREST,[Ws]:t.LINEAR_MIPMAP_LINEAR},ie={[nS]:t.NEVER,[lS]:t.ALWAYS,[iS]:t.LESS,[d_]:t.LEQUAL,[rS]:t.EQUAL,[aS]:t.GEQUAL,[sS]:t.GREATER,[oS]:t.NOTEQUAL};function k(b,M,z){if(z?(t.texParameteri(b,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,V[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ee[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ee[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==ni||M.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,R(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==fn&&M.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===fn||M.minFilter!==Vc&&M.minFilter!==Ws||M.type===$i&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Zo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Z(b,M){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const ae=M.source;let se=h.get(ae);se===void 0&&(se={},h.set(ae,se));const le=G(M);if(le!==b.__cacheKey){se[le]===void 0&&(se[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[le].usedTimes++;const we=se[b.__cacheKey];we!==void 0&&(se[b.__cacheKey].usedTimes--,we.usedTimes===0&&T(M)),b.__cacheKey=le,b.__webglTexture=se[le].texture}return z}function ce(b,M,z){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const se=Z(b,M),le=M.source;n.bindTexture(ae,b.__webglTexture,t.TEXTURE0+z);const we=i.get(le);if(le.version!==we.__version||se===!0){n.activeTexture(t.TEXTURE0+z);const ge=ht.getPrimaries(ht.workingColorSpace),xe=M.colorSpace===Vn?null:ht.getPrimaries(M.colorSpace),De=M.colorSpace===Vn||ge===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ve=u(M)&&p(M.image)===!1;let oe=x(M.image,Ve,!1,r.maxTextureSize);oe=He(M,oe);const nt=p(oe)||a,Ye=s.convert(M.format,M.colorSpace);let ze=s.convert(M.type),Le=y(M.internalFormat,Ye,ze,M.colorSpace,M.isVideoTexture);k(ae,M,nt);let U;const E=M.mipmaps,J=a&&M.isVideoTexture!==!0&&Le!==l_,pe=we.__version===void 0||se===!0,ne=C(M,oe,nt);if(M.isDepthTexture)Le=t.DEPTH_COMPONENT,a?M.type===$i?Le=t.DEPTH_COMPONENT32F:M.type===qi?Le=t.DEPTH_COMPONENT24:M.type===Dr?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:M.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ir&&Le===t.DEPTH_COMPONENT&&M.type!==Cd&&M.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=qi,ze=s.convert(M.type)),M.format===js&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,M.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Dr,ze=s.convert(M.type))),pe&&(J?n.texStorage2D(t.TEXTURE_2D,1,Le,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Le,oe.width,oe.height,0,Ye,ze,null));else if(M.isDataTexture)if(E.length>0&&nt){J&&pe&&n.texStorage2D(t.TEXTURE_2D,ne,Le,E[0].width,E[0].height);for(let Q=0,P=E.length;Q<P;Q++)U=E[Q],J?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,U.width,U.height,Ye,ze,U.data):n.texImage2D(t.TEXTURE_2D,Q,Le,U.width,U.height,0,Ye,ze,U.data);M.generateMipmaps=!1}else J?(pe&&n.texStorage2D(t.TEXTURE_2D,ne,Le,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Ye,ze,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Le,oe.width,oe.height,0,Ye,ze,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){J&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,Le,E[0].width,E[0].height,oe.depth);for(let Q=0,P=E.length;Q<P;Q++)U=E[Q],M.format!==ii?Ye!==null?J?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,U.width,U.height,oe.depth,Ye,U.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Le,U.width,U.height,oe.depth,0,U.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,U.width,U.height,oe.depth,Ye,ze,U.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Le,U.width,U.height,oe.depth,0,Ye,ze,U.data)}else{J&&pe&&n.texStorage2D(t.TEXTURE_2D,ne,Le,E[0].width,E[0].height);for(let Q=0,P=E.length;Q<P;Q++)U=E[Q],M.format!==ii?Ye!==null?J?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,U.width,U.height,Ye,U.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Le,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,U.width,U.height,Ye,ze,U.data):n.texImage2D(t.TEXTURE_2D,Q,Le,U.width,U.height,0,Ye,ze,U.data)}else if(M.isDataArrayTexture)J?(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,Le,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ye,ze,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,oe.width,oe.height,oe.depth,0,Ye,ze,oe.data);else if(M.isData3DTexture)J?(pe&&n.texStorage3D(t.TEXTURE_3D,ne,Le,oe.width,oe.height,oe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ye,ze,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Le,oe.width,oe.height,oe.depth,0,Ye,ze,oe.data);else if(M.isFramebufferTexture){if(pe)if(J)n.texStorage2D(t.TEXTURE_2D,ne,Le,oe.width,oe.height);else{let Q=oe.width,P=oe.height;for(let te=0;te<ne;te++)n.texImage2D(t.TEXTURE_2D,te,Le,Q,P,0,Ye,ze,null),Q>>=1,P>>=1}}else if(E.length>0&&nt){J&&pe&&n.texStorage2D(t.TEXTURE_2D,ne,Le,E[0].width,E[0].height);for(let Q=0,P=E.length;Q<P;Q++)U=E[Q],J?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Ye,ze,U):n.texImage2D(t.TEXTURE_2D,Q,Le,Ye,ze,U);M.generateMipmaps=!1}else J?(pe&&n.texStorage2D(t.TEXTURE_2D,ne,Le,oe.width,oe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ye,ze,oe)):n.texImage2D(t.TEXTURE_2D,0,Le,Ye,ze,oe);g(M,nt)&&_(ae),we.__version=le.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function _e(b,M,z){if(M.image.length!==6)return;const ae=Z(b,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+z);const le=i.get(se);if(se.version!==le.__version||ae===!0){n.activeTexture(t.TEXTURE0+z);const we=ht.getPrimaries(ht.workingColorSpace),ge=M.colorSpace===Vn?null:ht.getPrimaries(M.colorSpace),xe=M.colorSpace===Vn||we===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!De&&!Ve?oe[Q]=x(M.image[Q],!1,!0,r.maxCubemapSize):oe[Q]=Ve?M.image[Q].image:M.image[Q],oe[Q]=He(M,oe[Q]);const nt=oe[0],Ye=p(nt)||a,ze=s.convert(M.format,M.colorSpace),Le=s.convert(M.type),U=y(M.internalFormat,ze,Le,M.colorSpace),E=a&&M.isVideoTexture!==!0,J=le.__version===void 0||ae===!0;let pe=C(M,nt,Ye);k(t.TEXTURE_CUBE_MAP,M,Ye);let ne;if(De){E&&J&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,U,nt.width,nt.height);for(let Q=0;Q<6;Q++){ne=oe[Q].mipmaps;for(let P=0;P<ne.length;P++){const te=ne[P];M.format!==ii?ze!==null?E?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,0,0,te.width,te.height,ze,te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,U,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,0,0,te.width,te.height,ze,Le,te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P,U,te.width,te.height,0,ze,Le,te.data)}}}else{ne=M.mipmaps,E&&J&&(ne.length>0&&pe++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,U,oe[0].width,oe[0].height));for(let Q=0;Q<6;Q++)if(Ve){E?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,ze,Le,oe[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,U,oe[Q].width,oe[Q].height,0,ze,Le,oe[Q].data);for(let P=0;P<ne.length;P++){const he=ne[P].image[Q].image;E?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,0,0,he.width,he.height,ze,Le,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,U,he.width,he.height,0,ze,Le,he.data)}}else{E?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,Le,oe[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,U,ze,Le,oe[Q]);for(let P=0;P<ne.length;P++){const te=ne[P];E?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,0,0,ze,Le,te.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,P+1,U,ze,Le,te.image[Q])}}}g(M,Ye)&&_(t.TEXTURE_CUBE_MAP),le.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ve(b,M,z,ae,se,le){const we=s.convert(z.format,z.colorSpace),ge=s.convert(z.type),xe=y(z.internalFormat,we,ge,z.colorSpace);if(!i.get(M).__hasExternalTextures){const Ve=Math.max(1,M.width>>le),oe=Math.max(1,M.height>>le);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,le,xe,Ve,oe,M.depth,0,we,ge,null):n.texImage2D(se,le,xe,Ve,oe,0,we,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,se,i.get(z).__webglTexture,0,Ne(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,se,i.get(z).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(b,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(z||Se(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===$i?ae=t.DEPTH_COMPONENT32F:se.type===qi&&(ae=t.DEPTH_COMPONENT24));const le=Ne(M);Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,ae,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,ae,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ae=Ne(M);z&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<ae.length;se++){const le=ae[se],we=s.convert(le.format,le.colorSpace),ge=s.convert(le.type),xe=y(le.internalFormat,we,ge,le.colorSpace),De=Ne(M);z&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,M.width,M.height):Se(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ae=i.get(M.depthTexture).__webglTexture,se=Ne(M);if(M.depthTexture.format===Ir)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(M.depthTexture.format===js)Se(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ue(b){const M=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,b)}else if(z){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=t.createRenderbuffer(),Oe(M.__webglDepthbuffer[ae],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Oe(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(b,M,z){const ae=i.get(b);M!==void 0&&ve(ae.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ue(b)}function O(b){const M=b.texture,z=i.get(b),ae=i.get(M);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,o.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,le=b.isWebGLMultipleRenderTargets===!0,we=p(b)||a;if(se){z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ge]=[];for(let xe=0;xe<M.mipmaps.length;xe++)z.__webglFramebuffer[ge][xe]=t.createFramebuffer()}else z.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)z.__webglFramebuffer[ge]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const ge=b.texture;for(let xe=0,De=ge.length;xe<De;xe++){const Ve=i.get(ge[xe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Se(b)===!1){const ge=le?M:[M];z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const De=ge[xe];z.__webglColorRenderbuffer[xe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const Ve=s.convert(De.format,De.colorSpace),oe=s.convert(De.type),nt=y(De.internalFormat,Ve,oe,De.colorSpace,b.isXRRenderTarget===!0),Ye=Ne(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,nt,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),k(t.TEXTURE_CUBE_MAP,M,we);for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ve(z.__webglFramebuffer[ge][xe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else ve(z.__webglFramebuffer[ge],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(M,we)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ge=b.texture;for(let xe=0,De=ge.length;xe<De;xe++){const Ve=ge[xe],oe=i.get(Ve);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),k(t.TEXTURE_2D,Ve,we),ve(z.__webglFramebuffer,b,Ve,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,0),g(Ve,we)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ge=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,ae.__webglTexture),k(ge,M,we),a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ve(z.__webglFramebuffer[xe],b,M,t.COLOR_ATTACHMENT0,ge,xe);else ve(z.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,ge,0);g(M,we)&&_(ge),n.unbindTexture()}b.depthBuffer&&ue(b)}function at(b){const M=p(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,se=z.length;ae<se;ae++){const le=z[ae];if(g(le,M)){const we=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(le).__webglTexture;n.bindTexture(we,ge),_(we),n.unbindTexture()}}}function be(b){if(a&&b.samples>0&&Se(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ae=b.height;let se=t.COLOR_BUFFER_BIT;const le=[],we=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(b),xe=b.isWebGLMultipleRenderTargets===!0;if(xe)for(let De=0;De<M.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<M.length;De++){le.push(t.COLOR_ATTACHMENT0+De),b.depthBuffer&&le.push(we);const Ve=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ve===!1&&(b.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),xe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[De]),Ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),xe){const oe=i.get(M[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,z,ae,0,0,z,ae,se,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),xe)for(let De=0;De<M.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);const Ve=i.get(M[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ne(b){return Math.min(r.maxSamples,b.samples)}function Se(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(b){const M=o.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function He(b,M){const z=b.colorSpace,ae=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Rf||z!==Li&&z!==Vn&&(ht.getTransfer(z)===gt?a===!1?e.has("EXT_sRGB")===!0&&ae===ii?(b.format=Rf,b.minFilter=Cn,b.generateMipmaps=!1):M=m_.sRGBToLinear(M):(ae!==ii||se!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=I,this.resetTextureUnits=re,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=Te,this.setupRenderTarget=O,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Se}function Sw(t,e,n){const i=n.isWebGL2;function r(s,o=Vn){let a;const l=ht.getTransfer(o);if(s===or)return t.UNSIGNED_BYTE;if(s===i_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===r_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Xy)return t.BYTE;if(s===Yy)return t.SHORT;if(s===Cd)return t.UNSIGNED_SHORT;if(s===n_)return t.INT;if(s===qi)return t.UNSIGNED_INT;if(s===$i)return t.FLOAT;if(s===Zo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===qy)return t.ALPHA;if(s===ii)return t.RGBA;if(s===$y)return t.LUMINANCE;if(s===Ky)return t.LUMINANCE_ALPHA;if(s===Ir)return t.DEPTH_COMPONENT;if(s===js)return t.DEPTH_STENCIL;if(s===Rf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zy)return t.RED;if(s===s_)return t.RED_INTEGER;if(s===Qy)return t.RG;if(s===o_)return t.RG_INTEGER;if(s===a_)return t.RGBA_INTEGER;if(s===Wc||s===jc||s===Xc||s===Yc)if(l===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ip||s===rp||s===sp||s===op)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ip)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===op)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===l_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ap||s===lp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ap)return l===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===lp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cp||s===up||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp||s===yp||s===Sp||s===Mp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===up)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_p)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Mp)return l===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qc||s===Ep||s===Tp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qc)return l===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ep)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Tp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jy||s===wp||s===Ap||s===Rp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ap)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Mw extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ew={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Tw extends Wr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,v=null;const x=n.getContextAttributes();let p=null,u=null;const g=[],_=[],y=new Ue;let C=null;const R=new Pn;R.layers.enable(1),R.viewport=new xt;const A=new Pn;A.layers.enable(2),A.viewport=new xt;const D=[R,A],S=new Mw;S.layers.enable(1),S.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=g[k];return Z===void 0&&(Z=new _u,g[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=g[k];return Z===void 0&&(Z=new _u,g[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=g[k];return Z===void 0&&(Z=new _u,g[k]=Z),Z.getHandSpace()};function $(k){const Z=_.indexOf(k.inputSource);if(Z===-1)return;const ce=g[Z];ce!==void 0&&(ce.update(k.inputSource,k.frame,c||o),ce.dispatchEvent({type:k.type,data:k.inputSource}))}function re(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",I);for(let k=0;k<g.length;k++){const Z=_[k];Z!==null&&(_[k]=null,g[k].disconnect(Z))}T=null,B=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,u=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",re),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Br(m.framebufferWidth,m.framebufferHeight,{format:ii,type:or,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,ce=null,_e=null;x.depth&&(_e=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?js:Ir,ce=x.stencil?Dr:qi);const ve={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Br(h.textureWidth,h.textureHeight,{format:ii,type:or,depthTexture:new R_(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Oe=e.properties.get(u);Oe.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(k){for(let Z=0;Z<k.removed.length;Z++){const ce=k.removed[Z],_e=_.indexOf(ce);_e>=0&&(_[_e]=null,g[_e].disconnect(ce))}for(let Z=0;Z<k.added.length;Z++){const ce=k.added[Z];let _e=_.indexOf(ce);if(_e===-1){for(let Oe=0;Oe<g.length;Oe++)if(Oe>=_.length){_.push(ce),_e=Oe;break}else if(_[Oe]===null){_[Oe]=ce,_e=Oe;break}if(_e===-1)break}const ve=g[_e];ve&&ve.connect(ce)}}const G=new L,q=new L;function K(k,Z,ce){G.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(ce.matrixWorld);const _e=G.distanceTo(q),ve=Z.projectionMatrix.elements,Oe=ce.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),ue=ve[14]/(ve[10]+1),Te=(ve[9]+1)/ve[5],O=(ve[9]-1)/ve[5],at=(ve[8]-1)/ve[0],be=(Oe[8]+1)/Oe[0],Ne=Ie*at,Se=Ie*be,ot=_e/(-at+be),He=ot*-at;Z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(He),k.translateZ(ot),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const b=Ie+ot,M=ue+ot,z=Ne-He,ae=Se+(_e-He),se=Te*ue/M*b,le=O*ue/M*b;k.projectionMatrix.makePerspective(z,ae,se,le,b,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function N(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;S.near=A.near=R.near=k.near,S.far=A.far=R.far=k.far,(T!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,B=S.far);const Z=k.parent,ce=S.cameras;N(S,Z);for(let _e=0;_e<ce.length;_e++)N(ce[_e],Z);ce.length===2?K(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),H(k,S,Z)};function H(k,Z,ce){ce===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(ce.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Qo*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let V=null;function ee(k,Z){if(f=Z.getViewerPose(c||o),v=Z,f!==null){const ce=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let ve=0;ve<ce.length;ve++){const Oe=ce[ve];let Ie=null;if(m!==null)Ie=m.getViewport(Oe);else{const Te=d.getViewSubImage(h,Oe);Ie=Te.viewport,ve===0&&(e.setRenderTargetTextures(u,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(u))}let ue=D[ve];ue===void 0&&(ue=new Pn,ue.layers.enable(ve),ue.viewport=new xt,D[ve]=ue),ue.matrix.fromArray(Oe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Oe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(S.matrix.copy(ue.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(ue)}}for(let ce=0;ce<g.length;ce++){const _e=_[ce],ve=g[ce];_e!==null&&ve!==void 0&&ve.update(_e,Z,c||o)}V&&V(k,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const ie=new w_;ie.setAnimationLoop(ee),this.setAnimationLoop=function(k){V=k},this.dispose=function(){}}}function ww(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,M_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,_):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Mn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Mn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,_){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=_*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Aw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(v(g),y=f(g),r[g.id]=y,g.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(g,C);const R=e.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function f(g){const _=d();g.__bindingPointIndex=_;const y=t.createBuffer(),C=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let R=0,A=y.length;R<A;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,T=D.length;S<T;S++){const B=D[S];if(m(B,R,S,C)===!0){const $=B.__offset,re=Array.isArray(B.value)?B.value:[B.value];let I=0;for(let G=0;G<re.length;G++){const q=re[G],K=x(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,$+I,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,y,C){const R=g.value,A=_+"_"+y;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const D=C[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return C[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function v(g){const _=g.uniforms;let y=0;const C=16;for(let A=0,D=_.length;A<D;A++){const S=Array.isArray(_[A])?_[A]:[_[A]];for(let T=0,B=S.length;T<B;T++){const $=S[T],re=Array.isArray($.value)?$.value:[$.value];for(let I=0,G=re.length;I<G;I++){const q=re[I],K=x(q),N=y%C;N!==0&&C-N<K.boundary&&(y+=C-N),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=K.storage}}}const R=y%C;return R>0&&(y+=C-R),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function p(g){const _=g.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class N_{constructor(e={}){const{canvas:n=ES(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const _=this;let y=!1,C=0,R=0,A=null,D=-1,S=null;const T=new xt,B=new xt;let $=null;const re=new Ze(0);let I=0,G=n.width,q=n.height,K=1,N=null,H=null;const V=new xt(0,0,G,q),ee=new xt(0,0,G,q);let ie=!1;const k=new Id;let Z=!1,ce=!1,_e=null;const ve=new wt,Oe=new Ue,Ie=new L,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return A===null?K:1}let O=i;function at(w,F){for(let W=0;W<w.length;W++){const X=w[W],Y=n.getContext(X,F);if(Y!==null)return Y}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bd}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",te,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),O=at(F,w),O===null)throw at(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,Ne,Se,ot,He,b,M,z,ae,se,le,we,ge,xe,De,Ve,oe,nt,Ye,ze,Le,U,E,J;function pe(){be=new F1(O),Ne=new L1(O,be,e),be.init(Ne),U=new Sw(O,be,Ne),Se=new xw(O,be,Ne),ot=new B1(O),He=new ow,b=new yw(O,be,Se,He,Ne,U,ot),M=new I1(_),z=new O1(_),ae=new qS(O,Ne),E=new C1(O,be,ae,Ne),se=new k1(O,ae,ot,E),le=new W1(O,se,ae,ot),Ye=new V1(O,Ne,b),Ve=new D1(He),we=new sw(_,M,z,be,Ne,E,Ve),ge=new ww(_,He),xe=new lw,De=new pw(be,Ne),nt=new b1(_,M,z,Se,le,h,l),oe=new vw(_,le,Ne),J=new Aw(O,ot,Ne,Se),ze=new P1(O,be,ot,Ne),Le=new z1(O,be,ot,Ne),ot.programs=we.programs,_.capabilities=Ne,_.extensions=be,_.properties=He,_.renderLists=xe,_.shadowMap=oe,_.state=Se,_.info=ot}pe();const ne=new Tw(_,O);this.xr=ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(G,q,!1))},this.getSize=function(w){return w.set(G,q)},this.setSize=function(w,F,W=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,q=F,n.width=Math.floor(w*K),n.height=Math.floor(F*K),W===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(G*K,q*K).floor()},this.setDrawingBufferSize=function(w,F,W){G=w,q=F,K=W,n.width=Math.floor(w*W),n.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,F,W,X){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,F,W,X),Se.viewport(T.copy(V).multiplyScalar(K).floor())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,F,W,X){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,F,W,X),Se.scissor(B.copy(ee).multiplyScalar(K).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){Se.setScissorTest(ie=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(w=!0,F=!0,W=!0){let X=0;if(w){let Y=!1;if(A!==null){const ye=A.texture.format;Y=ye===a_||ye===o_||ye===s_}if(Y){const ye=A.texture.type,Pe=ye===or||ye===qi||ye===Cd||ye===Dr||ye===i_||ye===r_,Fe=nt.getClearColor(),ke=nt.getClearAlpha(),$e=Fe.r,Xe=Fe.g,qe=Fe.b;Pe?(m[0]=$e,m[1]=Xe,m[2]=qe,m[3]=ke,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=$e,v[1]=Xe,v[2]=qe,v[3]=ke,O.clearBufferiv(O.COLOR,0,v))}else X|=O.COLOR_BUFFER_BIT}F&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",te,!1),xe.dispose(),De.dispose(),He.dispose(),M.dispose(),z.dispose(),le.dispose(),E.dispose(),J.dispose(),we.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",lt),ne.removeEventListener("sessionend",je),_e&&(_e.dispose(),_e=null),ct.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=ot.autoReset,F=oe.enabled,W=oe.autoUpdate,X=oe.needsUpdate,Y=oe.type;pe(),ot.autoReset=w,oe.enabled=F,oe.autoUpdate=W,oe.needsUpdate=X,oe.type=Y}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const F=w.target;F.removeEventListener("dispose",he),Ce(F)}function Ce(w){Re(w),He.remove(w)}function Re(w){const F=He.get(w).programs;F!==void 0&&(F.forEach(function(W){we.releaseProgram(W)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,X,Y,ye){F===null&&(F=ue);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=yt(w,F,W,X,Y);Se.setMaterial(X,Pe);let ke=W.index,$e=1;if(X.wireframe===!0){if(ke=se.getWireframeAttribute(W),ke===void 0)return;$e=2}const Xe=W.drawRange,qe=W.attributes.position;let St=Xe.start*$e,Xt=(Xe.start+Xe.count)*$e;ye!==null&&(St=Math.max(St,ye.start*$e),Xt=Math.min(Xt,(ye.start+ye.count)*$e)),ke!==null?(St=Math.max(St,0),Xt=Math.min(Xt,ke.count)):qe!=null&&(St=Math.max(St,0),Xt=Math.min(Xt,qe.count));const Pt=Xt-St;if(Pt<0||Pt===1/0)return;E.setup(Y,X,Fe,W,ke);let On,Mt=ze;if(ke!==null&&(On=ae.get(ke),Mt=Le,Mt.setIndex(On)),Y.isMesh)X.wireframe===!0?(Se.setLineWidth(X.wireframeLinewidth*Te()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if(Y.isLine){let Qe=X.linewidth;Qe===void 0&&(Qe=1),Se.setLineWidth(Qe*Te()),Y.isLineSegments?Mt.setMode(O.LINES):Y.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else Y.isPoints?Mt.setMode(O.POINTS):Y.isSprite&&Mt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Mt.renderInstances(St,Pt,Y.count);else if(W.isInstancedBufferGeometry){const Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,hc=Math.min(W.instanceCount,Qe);Mt.renderInstances(St,Pt,hc)}else Mt.render(St,Pt)};function Be(w,F,W){w.transparent===!0&&w.side===Gn&&w.forceSinglePass===!1?(w.side=Mn,w.needsUpdate=!0,Ge(w,F,W),w.side=cr,w.needsUpdate=!0,Ge(w,F,W),w.side=Gn):Ge(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),p=De.get(W),p.init(),g.push(p),W.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),w!==W&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(_._useLegacyLights);const X=new Set;return w.traverse(function(Y){const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Fe=ye[Pe];Be(Fe,W,Y),X.add(Fe)}else Be(ye,W,Y),X.add(ye)}),g.pop(),p=null,X},this.compileAsync=function(w,F,W=null){const X=this.compile(w,F,W);return new Promise(Y=>{function ye(){if(X.forEach(function(Pe){He.get(Pe).currentProgram.isReady()&&X.delete(Pe)}),X.size===0){Y(w);return}setTimeout(ye,10)}be.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let We=null;function it(w){We&&We(w)}function lt(){ct.stop()}function je(){ct.start()}const ct=new w_;ct.setAnimationLoop(it),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(w){We=w,ne.setAnimationLoop(w),w===null?ct.stop():ct.start()},ne.addEventListener("sessionstart",lt),ne.addEventListener("sessionend",je),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,A),p=De.get(w,g.length),p.init(),g.push(p),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,Z=Ve.init(this.clippingPlanes,ce),x=xe.get(w,u.length),x.init(),u.push(x),ft(w,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,H),this.info.render.frame++,Z===!0&&Ve.beginShadows();const W=p.state.shadowsArray;if(oe.render(W,w,F),Z===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(x,w),p.setupLights(_._useLegacyLights),F.isArrayCamera){const X=F.cameras;for(let Y=0,ye=X.length;Y<ye;Y++){const Pe=X[Y];Wt(x,w,Pe,Pe.viewport)}}else Wt(x,w,F);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,F),E.resetDefaultState(),D=-1,S=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function ft(w,F,W,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){X&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);const Pe=le.update(w),Fe=w.material;Fe.visible&&x.push(w,Pe,Fe,W,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){const Pe=le.update(w),Fe=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ie.copy(Pe.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Fe)){const ke=Pe.groups;for(let $e=0,Xe=ke.length;$e<Xe;$e++){const qe=ke[$e],St=Fe[qe.materialIndex];St&&St.visible&&x.push(w,Pe,St,W,Ie.z,qe)}}else Fe.visible&&x.push(w,Pe,Fe,W,Ie.z,null)}}const ye=w.children;for(let Pe=0,Fe=ye.length;Pe<Fe;Pe++)ft(ye[Pe],F,W,X)}function Wt(w,F,W,X){const Y=w.opaque,ye=w.transmissive,Pe=w.transparent;p.setupLightsView(W),Z===!0&&Ve.setGlobalState(_.clippingPlanes,W),ye.length>0&&jt(Y,ye,F,W),X&&Se.viewport(T.copy(X)),Y.length>0&&wn(Y,F,W),ye.length>0&&wn(ye,F,W),Pe.length>0&&wn(Pe,F,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function jt(w,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ye=Ne.isWebGL2;_e===null&&(_e=new Br(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Zo:or,minFilter:Ws,samples:ye?4:0})),_.getDrawingBufferSize(Oe),ye?_e.setSize(Oe.x,Oe.y):_e.setSize(Vl(Oe.x),Vl(Oe.y));const Pe=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(re),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Fe=_.toneMapping;_.toneMapping=sr,wn(w,W,X),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e);let ke=!1;for(let $e=0,Xe=F.length;$e<Xe;$e++){const qe=F[$e],St=qe.object,Xt=qe.geometry,Pt=qe.material,On=qe.group;if(Pt.side===Gn&&St.layers.test(X.layers)){const Mt=Pt.side;Pt.side=Mn,Pt.needsUpdate=!0,Me(St,W,X,Xt,Pt,On),Pt.side=Mt,Pt.needsUpdate=!0,ke=!0}}ke===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e)),_.setRenderTarget(Pe),_.setClearColor(re,I),_.toneMapping=Fe}function wn(w,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,ye=w.length;Y<ye;Y++){const Pe=w[Y],Fe=Pe.object,ke=Pe.geometry,$e=X===null?Pe.material:X,Xe=Pe.group;Fe.layers.test(W.layers)&&Me(Fe,F,W,ke,$e,Xe)}}function Me(w,F,W,X,Y,ye){w.onBeforeRender(_,F,W,X,Y,ye),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(_,F,W,X,w,ye),Y.transparent===!0&&Y.side===Gn&&Y.forceSinglePass===!1?(Y.side=Mn,Y.needsUpdate=!0,_.renderBufferDirect(W,F,X,Y,w,ye),Y.side=cr,Y.needsUpdate=!0,_.renderBufferDirect(W,F,X,Y,w,ye),Y.side=Gn):_.renderBufferDirect(W,F,X,Y,w,ye),w.onAfterRender(_,F,W,X,Y,ye)}function Ge(w,F,W){F.isScene!==!0&&(F=ue);const X=He.get(w),Y=p.state.lights,ye=p.state.shadowsArray,Pe=Y.state.version,Fe=we.getParameters(w,Y.state,ye,F,W),ke=we.getProgramCacheKey(Fe);let $e=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?z:M).get(w.envMap||X.environment),$e===void 0&&(w.addEventListener("dispose",he),$e=new Map,X.programs=$e);let Xe=$e.get(ke);if(Xe!==void 0){if(X.currentProgram===Xe&&X.lightsStateVersion===Pe)return et(w,Fe),Xe}else Fe.uniforms=we.getUniforms(w),w.onBuild(W,Fe,_),w.onBeforeCompile(Fe,_),Xe=we.acquireProgram(Fe,ke),$e.set(ke,Xe),X.uniforms=Fe.uniforms;const qe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=Ve.uniform),et(w,Fe),X.needsLights=zt(w),X.lightsStateVersion=Pe,X.needsLights&&(qe.ambientLightColor.value=Y.state.ambient,qe.lightProbe.value=Y.state.probe,qe.directionalLights.value=Y.state.directional,qe.directionalLightShadows.value=Y.state.directionalShadow,qe.spotLights.value=Y.state.spot,qe.spotLightShadows.value=Y.state.spotShadow,qe.rectAreaLights.value=Y.state.rectArea,qe.ltc_1.value=Y.state.rectAreaLTC1,qe.ltc_2.value=Y.state.rectAreaLTC2,qe.pointLights.value=Y.state.point,qe.pointLightShadows.value=Y.state.pointShadow,qe.hemisphereLights.value=Y.state.hemi,qe.directionalShadowMap.value=Y.state.directionalShadowMap,qe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qe.spotShadowMap.value=Y.state.spotShadowMap,qe.spotLightMatrix.value=Y.state.spotLightMatrix,qe.spotLightMap.value=Y.state.spotLightMap,qe.pointShadowMap.value=Y.state.pointShadowMap,qe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.currentProgram=Xe,X.uniformsList=null,Xe}function Ae(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=hl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function et(w,F){const W=He.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function yt(w,F,W,X,Y){F.isScene!==!0&&(F=ue),b.resetTextureUnits();const ye=F.fog,Pe=X.isMeshStandardMaterial?F.environment:null,Fe=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Li,ke=(X.isMeshStandardMaterial?z:M).get(X.envMap||Pe),$e=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),qe=!!W.morphAttributes.position,St=!!W.morphAttributes.normal,Xt=!!W.morphAttributes.color;let Pt=sr;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const On=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Mt=On!==void 0?On.length:0,Qe=He.get(X),hc=p.state.lights;if(Z===!0&&(ce===!0||w!==S)){const Fn=w===S&&X.id===D;Ve.setState(X,w,Fn)}let Rt=!1;X.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==hc.state.version||Qe.outputColorSpace!==Fe||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Qe.envMap!==ke||X.fog===!0&&Qe.fog!==ye||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==$e||Qe.vertexTangents!==Xe||Qe.morphTargets!==qe||Qe.morphNormals!==St||Qe.morphColors!==Xt||Qe.toneMapping!==Pt||Ne.isWebGL2===!0&&Qe.morphTargetsCount!==Mt)&&(Rt=!0):(Rt=!0,Qe.__version=X.version);let pr=Qe.currentProgram;Rt===!0&&(pr=Ge(X,F,Y));let Bd=!1,Zs=!1,pc=!1;const Jt=pr.getUniforms(),mr=Qe.uniforms;if(Se.useProgram(pr.program)&&(Bd=!0,Zs=!0,pc=!0),X.id!==D&&(D=X.id,Zs=!0),Bd||S!==w){Jt.setValue(O,"projectionMatrix",w.projectionMatrix),Jt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Fn=Jt.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,Ie.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&Jt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Jt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Zs=!0,pc=!0)}if(Y.isSkinnedMesh){Jt.setOptional(O,Y,"bindMatrix"),Jt.setOptional(O,Y,"bindMatrixInverse");const Fn=Y.skeleton;Fn&&(Ne.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),Jt.setValue(O,"boneTexture",Fn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Jt.setOptional(O,Y,"batchingTexture"),Jt.setValue(O,"batchingTexture",Y._matricesTexture,b));const mc=W.morphAttributes;if((mc.position!==void 0||mc.normal!==void 0||mc.color!==void 0&&Ne.isWebGL2===!0)&&Ye.update(Y,W,pr),(Zs||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,Jt.setValue(O,"receiveShadow",Y.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mr.envMap.value=ke,mr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Zs&&(Jt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Qe.needsLights&&rt(mr,pc),ye&&X.fog===!0&&ge.refreshFogUniforms(mr,ye),ge.refreshMaterialUniforms(mr,X,K,q,_e),hl.upload(O,Ae(Qe),mr,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(hl.upload(O,Ae(Qe),mr,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Jt.setValue(O,"center",Y.center),Jt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Jt.setValue(O,"normalMatrix",Y.normalMatrix),Jt.setValue(O,"modelMatrix",Y.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Fn=X.uniformsGroups;for(let gc=0,z_=Fn.length;gc<z_;gc++)if(Ne.isWebGL2){const Hd=Fn[gc];J.update(Hd,pr),J.bind(Hd,pr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pr}function rt(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function zt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,F,W){He.get(w.texture).__webglTexture=F,He.get(w.depthTexture).__webglTexture=W;const X=He.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const W=He.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){A=w,C=F,R=W;let X=!0,Y=null,ye=!1,Pe=!1;if(w){const ke=He.get(w);ke.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(O.FRAMEBUFFER,null),X=!1):ke.__webglFramebuffer===void 0?b.setupRenderTarget(w):ke.__hasExternalTextures&&b.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);const Xe=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?Y=Xe[F][W]:Y=Xe[F],ye=!0):Ne.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?Y=He.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?Y=Xe[W]:Y=Xe,T.copy(w.viewport),B.copy(w.scissor),$=w.scissorTest}else T.copy(V).multiplyScalar(K).floor(),B.copy(ee).multiplyScalar(K).floor(),$=ie;if(Se.bindFramebuffer(O.FRAMEBUFFER,Y)&&Ne.drawBuffers&&X&&Se.drawBuffers(w,Y),Se.viewport(T),Se.scissor(B),Se.setScissorTest($),ye){const ke=He.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ke.__webglTexture,W)}else if(Pe){const ke=He.get(w.texture),$e=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,W||0,$e)}D=-1},this.readRenderTargetPixels=function(w,F,W,X,Y,ye,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Se.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const ke=w.texture,$e=ke.format,Xe=ke.type;if($e!==ii&&U.convert($e)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Xe===Zo&&(be.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&be.has("EXT_color_buffer_float"));if(Xe!==or&&U.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===$i&&(Ne.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&W>=0&&W<=w.height-Y&&O.readPixels(F,W,X,Y,U.convert($e),U.convert(Xe),ye)}finally{const ke=A!==null?He.get(A).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(w,F,W=0){const X=Math.pow(2,-W),Y=Math.floor(F.image.width*X),ye=Math.floor(F.image.height*X);b.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,w.x,w.y,Y,ye),Se.unbindTexture()},this.copyTextureToTexture=function(w,F,W,X=0){const Y=F.image.width,ye=F.image.height,Pe=U.convert(W.format),Fe=U.convert(W.type);b.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,w.x,w.y,Y,ye,Pe,Fe,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Pe,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,X,w.x,w.y,Pe,Fe,F.image),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W,X,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=w.max.x-w.min.x+1,Pe=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,ke=U.convert(X.format),$e=U.convert(X.type);let Xe;if(X.isData3DTexture)b.setTexture3D(X,0),Xe=O.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);const qe=O.getParameter(O.UNPACK_ROW_LENGTH),St=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Xt=O.getParameter(O.UNPACK_SKIP_PIXELS),Pt=O.getParameter(O.UNPACK_SKIP_ROWS),On=O.getParameter(O.UNPACK_SKIP_IMAGES),Mt=W.isCompressedTexture?W.mipmaps[Y]:W.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?O.texSubImage3D(Xe,Y,F.x,F.y,F.z,ye,Pe,Fe,ke,$e,Mt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Xe,Y,F.x,F.y,F.z,ye,Pe,Fe,ke,Mt.data)):O.texSubImage3D(Xe,Y,F.x,F.y,F.z,ye,Pe,Fe,ke,$e,Mt),O.pixelStorei(O.UNPACK_ROW_LENGTH,qe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,On),Y===0&&X.generateMipmaps&&O.generateMipmap(Xe),Se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Se.reset(),E.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Pd?"display-p3":"srgb",n.unpackColorSpace=ht.workingColorSpace===cc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Nr:c_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?Dt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rw extends N_{}Rw.prototype.isWebGL1Renderer=!0;class bw extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Cw{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new L;class Wl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=fi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=fi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=fi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=fi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new En(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pf extends hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let us;const uo=new L,fs=new L,ds=new L,hs=new Ue,fo=new Ue,U_=new wt,qa=new L,ho=new L,$a=new L,mm=new Ue,vu=new Ue,gm=new Ue;class _m extends Ot{constructor(e=new Pf){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Kt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cw(n,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Wl(i,3,0,!1)),us.setAttribute("uv",new Wl(i,2,3,!1))}this.geometry=us,this.material=e,this.center=new Ue(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),U_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ka(qa.set(-.5,-.5,0),ds,o,fs,r,s),Ka(ho.set(.5,-.5,0),ds,o,fs,r,s),Ka($a.set(.5,.5,0),ds,o,fs,r,s),mm.set(0,0),vu.set(1,0),gm.set(1,1);let a=e.ray.intersectTriangle(qa,ho,$a,!1,uo);if(a===null&&(Ka(ho.set(-.5,.5,0),ds,o,fs,r,s),vu.set(0,1),a=e.ray.intersectTriangle(qa,$a,ho,!1,uo),a===null))return;const l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||n.push({distance:l,point:uo.clone(),uv:Hn.getInterpolation(uo,qa,ho,$a,mm,vu,gm,new Ue),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ka(t,e,n,i,r,s){hs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(fo.x=s*hs.x-r*hs.y,fo.y=r*hs.x+s*hs.y):fo.copy(hs),t.copy(e),t.x+=fo.x,t.y+=fo.y,t.applyMatrix4(U_)}class Od extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vm=new L,xm=new L,ym=new wt,xu=new aa,Za=new oa;class yu extends Ot{constructor(e=new Kt,n=new Od){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vm.fromBufferAttribute(n,r-1),xm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vm.distanceTo(xm);e.setAttribute("lineDistance",new pn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,e.ray.intersectsSphere(Za)===!1)return;ym.copy(r).invert(),xu.copy(e.ray).applyMatrix4(ym);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,f=new L,d=new L,h=new L,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const u=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let _=u,y=g-1;_<y;_+=m){const C=v.getX(_),R=v.getX(_+1);if(c.fromBufferAttribute(p,C),f.fromBufferAttribute(p,R),xu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||n.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=u,y=g-1;_<y;_+=m){if(c.fromBufferAttribute(p,_),f.fromBufferAttribute(p,_+1),xu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||n.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Lf extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sm=new wt,Df=new aa,Qa=new oa,Ja=new L;class Mm extends Ot{constructor(e=new Kt,n=new Lf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(r),Qa.radius+=s,e.ray.intersectsSphere(Qa)===!1)return;Sm.copy(r).invert(),Df.copy(e.ray).applyMatrix4(Sm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=h,x=m;v<x;v++){const p=c.getX(v);Ja.fromBufferAttribute(d,p),Em(Ja,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=h,x=m;v<x;v++)Ja.fromBufferAttribute(d,v),Em(Ja,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Em(t,e,n,i,r,s,o){const a=Df.distanceSqToPoint(t);if(a<n){const l=new L;Df.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class dc extends hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fd extends Kt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let d=e;const h=(n-e)/r,m=new L,v=new Ue;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,f.push(v.x,v.y)}d+=h}for(let x=0;x<r;x++){const p=x*(i+1);for(let u=0;u<i;u++){const g=u+p,_=g,y=g+i+1,C=g+i+2,R=g+1;a.push(_,y,R),a.push(y,C,R)}}this.setIndex(a),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Io extends Kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new L,h=new L,m=[],v=[],x=[],p=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const R=C/n;d.x=-e*Math.cos(r+R*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+_*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(R+y,1-_),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=f[u][g+1],y=f[u][g],C=f[u+1][g],R=f[u+1][g+1];(u!==0||o>0)&&m.push(_,y,R),(u!==i-1||l<Math.PI)&&m.push(y,C,R)}this.setIndex(m),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Su extends hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=f_,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pw extends Od{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Tm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Lw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],v=c[d+1];if(m.global&&(m.lastIndex=0),m.test(f))return v}return null}}}const Dw=new Lw;class kd{constructor(e){this.manager=e!==void 0?e:Dw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kd.DEFAULT_MATERIAL_NAME="__DEFAULT";class Iw extends kd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){f(),Tm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Nw extends kd{constructor(e){super(e)}load(e,n,i,r){const s=new hn,o=new Iw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class zd extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Mu=new wt,wm=new L,Am=new L;class O_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;wm.setFromMatrixPosition(e.matrixWorld),n.position.copy(wm),Am.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Am),n.updateMatrixWorld(),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rm=new wt,po=new L,Eu=new L;class Uw extends O_{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),i.position.copy(po),Eu.copy(i.position),Eu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Eu),i.updateMatrixWorld(),r.makeTranslation(-po.x,-po.y,-po.z),Rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm)}}class Ow extends zd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Uw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fw extends O_{constructor(){super(new A_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kw extends zd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Fw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zw extends zd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=bm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function bm(){return(typeof performance>"u"?Date:performance).now()}class Hw{constructor(e,n,i=0,r=1/0){this.ray=new aa(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Dd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return If(e,this,i,n),i.sort(Cm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)If(e[r],this,i,n);return i.sort(Cm),i}}function Cm(t,e){return t.distance-e.distance}function If(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)If(r[s],e,n,!0)}}class Pm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(on(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);const Lm={type:"change"},Tu={type:"start"},Dm={type:"end"},el=new aa,Im=new Vi,Gw=Math.cos(70*h_.DEG2RAD);class Vw extends Wr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xr.ROTATE,MIDDLE:Xr.DOLLY,RIGHT:Xr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",De),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Lm),i.update(),s=r.NONE},this.update=function(){const E=new L,J=new Hr().setFromUnitVectors(e.up,new L(0,1,0)),pe=J.clone().invert(),ne=new L,Q=new Hr,P=new L,te=2*Math.PI;return function(Ce=null){const Re=i.object.position;E.copy(Re).sub(i.target),E.applyQuaternion(J),a.setFromVector3(E),i.autoRotate&&s===r.NONE&&$(T(Ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=i.minAzimuthAngle,We=i.maxAzimuthAngle;isFinite(Be)&&isFinite(We)&&(Be<-Math.PI?Be+=te:Be>Math.PI&&(Be-=te),We<-Math.PI?We+=te:We>Math.PI&&(We-=te),Be<=We?a.theta=Math.max(Be,Math.min(We,a.theta)):a.theta=a.theta>(Be+We)/2?Math.max(Be,a.theta):Math.min(We,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),E.setFromSpherical(a),E.applyQuaternion(pe),Re.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let it=!1;if(i.zoomToCursor&&R){let lt=null;if(i.object.isPerspectiveCamera){const je=E.length();lt=V(je*c);const ct=je-lt;i.object.position.addScaledVector(y,ct),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const je=new L(C.x,C.y,0);je.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),it=!0;const ct=new L(C.x,C.y,0);ct.unproject(i.object),i.object.position.sub(ct).add(je),i.object.updateMatrixWorld(),lt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(lt).add(i.object.position):(el.origin.copy(i.object.position),el.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(el.direction))<Gw?e.lookAt(i.target):(Im.setFromNormalAndCoplanarPoint(i.object.up,i.target),el.intersectPlane(Im,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),it=!0);return c=1,R=!1,it||ne.distanceToSquared(i.object.position)>o||8*(1-Q.dot(i.object.quaternion))>o||P.distanceToSquared(i.target)>0?(i.dispatchEvent(Lm),ne.copy(i.object.position),Q.copy(i.object.quaternion),P.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",nt),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",z),i.domElement.removeEventListener("wheel",le),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",z),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",De),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Pm,l=new Pm;let c=1;const f=new L,d=new Ue,h=new Ue,m=new Ue,v=new Ue,x=new Ue,p=new Ue,u=new Ue,g=new Ue,_=new Ue,y=new L,C=new Ue;let R=!1;const A=[],D={};let S=!1;function T(E){return E!==null?2*Math.PI/60*i.autoRotateSpeed*E:2*Math.PI/60/60*i.autoRotateSpeed}function B(E){const J=Math.abs(E*.01);return Math.pow(.95,i.zoomSpeed*J)}function $(E){l.theta-=E}function re(E){l.phi-=E}const I=function(){const E=new L;return function(pe,ne){E.setFromMatrixColumn(ne,0),E.multiplyScalar(-pe),f.add(E)}}(),G=function(){const E=new L;return function(pe,ne){i.screenSpacePanning===!0?E.setFromMatrixColumn(ne,1):(E.setFromMatrixColumn(ne,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(pe),f.add(E)}}(),q=function(){const E=new L;return function(pe,ne){const Q=i.domElement;if(i.object.isPerspectiveCamera){const P=i.object.position;E.copy(P).sub(i.target);let te=E.length();te*=Math.tan(i.object.fov/2*Math.PI/180),I(2*pe*te/Q.clientHeight,i.object.matrix),G(2*ne*te/Q.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(pe*(i.object.right-i.object.left)/i.object.zoom/Q.clientWidth,i.object.matrix),G(ne*(i.object.top-i.object.bottom)/i.object.zoom/Q.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(E,J){if(!i.zoomToCursor)return;R=!0;const pe=i.domElement.getBoundingClientRect(),ne=E-pe.left,Q=J-pe.top,P=pe.width,te=pe.height;C.x=ne/P*2-1,C.y=-(Q/te)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(E){return Math.max(i.minDistance,Math.min(i.maxDistance,E))}function ee(E){d.set(E.clientX,E.clientY)}function ie(E){H(E.clientX,E.clientX),u.set(E.clientX,E.clientY)}function k(E){v.set(E.clientX,E.clientY)}function Z(E){h.set(E.clientX,E.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const J=i.domElement;$(2*Math.PI*m.x/J.clientHeight),re(2*Math.PI*m.y/J.clientHeight),d.copy(h),i.update()}function ce(E){g.set(E.clientX,E.clientY),_.subVectors(g,u),_.y>0?K(B(_.y)):_.y<0&&N(B(_.y)),u.copy(g),i.update()}function _e(E){x.set(E.clientX,E.clientY),p.subVectors(x,v).multiplyScalar(i.panSpeed),q(p.x,p.y),v.copy(x),i.update()}function ve(E){H(E.clientX,E.clientY),E.deltaY<0?N(B(E.deltaY)):E.deltaY>0&&K(B(E.deltaY)),i.update()}function Oe(E){let J=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?re(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?re(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),J=!0;break}J&&(E.preventDefault(),i.update())}function Ie(E){if(A.length===1)d.set(E.pageX,E.pageY);else{const J=U(E),pe=.5*(E.pageX+J.x),ne=.5*(E.pageY+J.y);d.set(pe,ne)}}function ue(E){if(A.length===1)v.set(E.pageX,E.pageY);else{const J=U(E),pe=.5*(E.pageX+J.x),ne=.5*(E.pageY+J.y);v.set(pe,ne)}}function Te(E){const J=U(E),pe=E.pageX-J.x,ne=E.pageY-J.y,Q=Math.sqrt(pe*pe+ne*ne);u.set(0,Q)}function O(E){i.enableZoom&&Te(E),i.enablePan&&ue(E)}function at(E){i.enableZoom&&Te(E),i.enableRotate&&Ie(E)}function be(E){if(A.length==1)h.set(E.pageX,E.pageY);else{const pe=U(E),ne=.5*(E.pageX+pe.x),Q=.5*(E.pageY+pe.y);h.set(ne,Q)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const J=i.domElement;$(2*Math.PI*m.x/J.clientHeight),re(2*Math.PI*m.y/J.clientHeight),d.copy(h)}function Ne(E){if(A.length===1)x.set(E.pageX,E.pageY);else{const J=U(E),pe=.5*(E.pageX+J.x),ne=.5*(E.pageY+J.y);x.set(pe,ne)}p.subVectors(x,v).multiplyScalar(i.panSpeed),q(p.x,p.y),v.copy(x)}function Se(E){const J=U(E),pe=E.pageX-J.x,ne=E.pageY-J.y,Q=Math.sqrt(pe*pe+ne*ne);g.set(0,Q),_.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),K(_.y),u.copy(g);const P=(E.pageX+J.x)*.5,te=(E.pageY+J.y)*.5;H(P,te)}function ot(E){i.enableZoom&&Se(E),i.enablePan&&Ne(E)}function He(E){i.enableZoom&&Se(E),i.enableRotate&&be(E)}function b(E){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",z)),Ye(E),E.pointerType==="touch"?Ve(E):ae(E))}function M(E){i.enabled!==!1&&(E.pointerType==="touch"?oe(E):se(E))}function z(E){ze(E),A.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",z)),i.dispatchEvent(Dm),s=r.NONE}function ae(E){let J;switch(E.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Xr.DOLLY:if(i.enableZoom===!1)return;ie(E),s=r.DOLLY;break;case Xr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;k(E),s=r.PAN}else{if(i.enableRotate===!1)return;ee(E),s=r.ROTATE}break;case Xr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;ee(E),s=r.ROTATE}else{if(i.enablePan===!1)return;k(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Tu)}function se(E){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(E);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(E);break;case r.PAN:if(i.enablePan===!1)return;_e(E);break}}function le(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(Tu),ve(we(E)),i.dispatchEvent(Dm))}function we(E){const J=E.deltaMode,pe={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(J){case 1:pe.deltaY*=16;break;case 2:pe.deltaY*=100;break}return E.ctrlKey&&!S&&(pe.deltaY*=10),pe}function ge(E){E.key==="Control"&&(S=!0,document.addEventListener("keyup",xe,{passive:!0,capture:!0}))}function xe(E){E.key==="Control"&&(S=!1,document.removeEventListener("keyup",xe,{passive:!0,capture:!0}))}function De(E){i.enabled===!1||i.enablePan===!1||Oe(E)}function Ve(E){switch(Le(E),A.length){case 1:switch(i.touches.ONE){case Yr.ROTATE:if(i.enableRotate===!1)return;Ie(E),s=r.TOUCH_ROTATE;break;case Yr.PAN:if(i.enablePan===!1)return;ue(E),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Yr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(E),s=r.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;at(E),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Tu)}function oe(E){switch(Le(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ne(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ot(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;He(E),i.update();break;default:s=r.NONE}}function nt(E){i.enabled!==!1&&E.preventDefault()}function Ye(E){A.push(E.pointerId)}function ze(E){delete D[E.pointerId];for(let J=0;J<A.length;J++)if(A[J]==E.pointerId){A.splice(J,1);return}}function Le(E){let J=D[E.pointerId];J===void 0&&(J=new Ue,D[E.pointerId]=J),J.set(E.pageX,E.pageY)}function U(E){const J=E.pointerId===A[0]?A[1]:A[0];return D[J]}i.domElement.addEventListener("contextmenu",nt),i.domElement.addEventListener("pointerdown",b),i.domElement.addEventListener("pointercancel",z),i.domElement.addEventListener("wheel",le,{passive:!1}),document.addEventListener("keydown",ge,{passive:!0,capture:!0}),this.update()}}const $t=[{id:"sun",name:"太陽 (Sun)",color:"#FFC000",texture:"sun.jpg",ringTexture:"",radius:11,orbitRadius:0,eccentricity:0,orbitAngle:0,inclination:0,axialTilt:7.25,period:0,rotationPeriod:"27 天",rotationSpeed:.037,description:"太陽是位於我們系統中心的黃矮星，佔據了太陽系 99.86% 的質量。它由熾熱的電漿組成，核心溫度高達 1500 萬度，持續進行著將氫融合成氦的核反應。這些能量以光和熱的形式向外輻射，驅動著地球的氣候系統與光合作用。太陽並非固體，不同緯度的自轉速度不同（差動自轉），這導致其磁場線不斷糾纏，形成太陽黑子、閃焰與日冕物質拋射等劇烈活動。",observationInfo:"【嚴重警告】絕對不可用肉眼或未加裝專業濾鏡的器材直視太陽，否則將導致永久性失明。安全的觀測方式包括：1. 使用合格的太陽觀測眼鏡。 2. 使用針孔投影法將影像投射在白紙上。 3. 使用裝有巴德膜（Baader Film）或赫歇爾稜鏡的天文望遠鏡，可見光球層上的黑子結構。",realDistanceAU:0,type:"star",moons:0,magnitude:"-26.74 (絕對)",temperature:"5,500°C (表面)",volume:"130 萬 x 地球",mass:"33.3 萬 x 地球",gravity:"274 m/s² (28G)"},{id:"mercury",name:"水星 (Mercury)",color:"#A5A5A5",texture:"mercury.jpg",ringTexture:"",radius:.038,orbitRadius:975,eccentricity:.205,orbitAngle:29,inclination:6.34,axialTilt:.03,period:.24,rotationPeriod:"58.6 天",rotationSpeed:.017,description:"水星是太陽系最小且最靠近太陽的行星。它幾乎沒有大氣層來保留熱量，導致晝夜溫差極端劇烈（白天攝氏 430 度，夜晚降至零下 180 度）。其表面布滿了密密麻麻的隕石坑，外觀與月球極為相似，但水星擁有一個異常巨大的鐵質核心，約佔其體積的 85%，使其成為太陽系中密度第二高的行星。",observationInfo:"水星常年淹沒在太陽的耀眼光芒中，是「金木水火土」五星中最難觀測的一顆。最佳時機是在「東大距」（日落後西方低空）或「西大距」（日出前東方低空）的前後幾天。透過天文望遠鏡，可以看出它像月球一樣有盈虧變化，但難以看到表面細節。",realDistanceAU:.39,type:"terrestrial",moons:0,magnitude:"最亮: -2.48 / 平均: 0.23",temperature:"-173°C ~ 427°C",volume:"0.056 x 地球",mass:"0.055 x 地球",gravity:"3.7 m/s² (0.38G)"},{id:"venus",name:"金星 (Venus)",color:"#FFC649",texture:"venus.jpg",ringTexture:"",radius:.095,orbitRadius:1800,eccentricity:.007,orbitAngle:55,inclination:2.19,axialTilt:177.3,period:.62,rotationPeriod:"243 天 (大氣繞行速度快60倍)",rotationSpeed:.25,description:"金星常被稱為地球的「姊妹星」，但環境截然不同。其轉軸傾角高達 177.3 度，意味著它是「倒著轉」的（逆行自轉）。雖然金星的岩石表面自轉極慢（243 天一圈），但其濃厚的大氣層卻以驚人的速度旋轉，僅需 4 天就能繞行行星一圈，這種現象稱為「大氣超自轉」。本模型為了符合視覺貼圖（雲層），呈現的是大氣層的旋轉速度。",observationInfo:"金星是全天最亮的行星，古稱「太白金星」。當它位於太陽西側時稱為「啟明」（晨星），位於東側時稱為「長庚」（昏星）。使用雙筒望遠鏡即可輕易觀察到它的相位變化（如眉月狀或半月狀），這是伽利略當年證明「日心說」的關鍵證據之一。",realDistanceAU:.72,type:"terrestrial",moons:0,magnitude:"最亮: -4.92 / 平均: -4.14",temperature:"462°C (平均)",volume:"0.86 x 地球",mass:"0.815 x 地球",gravity:"8.87 m/s² (0.9G)"},{id:"earth",name:"地球 (Earth)",color:"#1B68E3",texture:"earth.jpg",ringTexture:"",cloudTexture:"earth_clouds.jpg",radius:.1,orbitRadius:2500,eccentricity:.017,orbitAngle:102,inclination:1.57,axialTilt:23.4,period:1,rotationPeriod:"23.9 小時",rotationSpeed:1,description:"地球是太陽系中唯一已知擁有表面液態水與生命的行星。其獨特之處在於活躍的板塊構造，這不僅塑造了山脈與海洋，還參與了碳循環，調節了長期氣候。地球的大氣層含有 21% 的氧氣，這是數十億年生物光合作用的結果。強大的磁場（磁層）保護了我們免受太陽風與宇宙射線的直接轟擊。",observationInfo:"除了腳下的大地，我們可以透過觀察「地照」（Earthshine）來間接感受地球。當月球呈現細眉月時，其暗部會被地球反射的陽光微微照亮，呈現出一種幽暗的古銅色，這顯示了地球是一顆高反照率的明亮行星。",realDistanceAU:1,type:"terrestrial",moons:1,magnitude:"N/A (觀測點)",temperature:"-89°C ~ 56.7°C",volume:"1.08 x 10¹² km³",mass:"5.97 x 10²⁴ kg",gravity:"9.8 m/s² (1G)"},{id:"moon",parentId:"earth",name:"月球 (Moon)",color:"#D3D3D3",texture:"moon.jpg",ringTexture:"",radius:.027,orbitRadius:6,eccentricity:.0549,orbitAngle:0,inclination:5.145,axialTilt:6.68,period:.0748,rotationPeriod:"27.3 天 (同步自轉)",rotationSpeed:.0366,description:"月球是地球唯一的天然衛星，也是人類唯一踏足過的地外天體。它是一顆分化的岩石星球，表面布滿了撞擊坑與古老的火山熔岩平原（月海）。由於缺乏大氣與地質活動，月球忠實地記錄了太陽系早期的撞擊歷史。其引力牽引是地球海洋產生潮汐的主要原因，同時也穩定了地球的自轉軸傾角。",observationInfo:"觀測月球的最佳時機是「上弦」或「下弦」期間，而非滿月。此時陽光側面照射，在晨昏線（明暗交界處）附近會投下長長的影子，透過雙筒或小型望遠鏡，可以極為清晰地看到環形山的立體結構、山脈的高度以及月溪（乾涸的熔岩河道）。",realDistanceAU:.00257,type:"moon",moons:0,magnitude:"滿月: -12.74",temperature:"-173°C ~ 117°C",volume:"0.02 x 地球",mass:"0.012 x 地球",gravity:"1.62 m/s² (0.16G)"},{id:"mars",name:"火星 (Mars)",color:"#D6341A",texture:"mars.jpg",ringTexture:"",radius:.053,orbitRadius:3800,eccentricity:.094,orbitAngle:286,inclination:1.67,axialTilt:25.2,period:1.88,rotationPeriod:"24.6 小時",rotationSpeed:.97,description:"火星是一顆寒冷的沙漠行星，因地表廣泛分布氧化鐵（鐵鏽）而呈現紅色。它擁有太陽系最高的火山「奧林帕斯山」（高約 25 公里）與最長的峽谷「水手號峽谷」。雖然現在大氣稀薄（不到地球的 1%），但地表乾涸的河床與礦物證據顯示，遠古火星曾擁有溫暖濕潤的氣候，甚至可能有浩瀚的海洋。",observationInfo:"每兩年兩個月一次的「火星衝」是觀測良機。在視寧度（大氣穩定度）良好時，使用口徑 10 公分以上的望遠鏡，可以看見其白色的極冠（乾冰與水冰）以及深色的地表特徵（如大瑟提斯高原）。若運氣不好遇上全球性沙塵暴，表面細節則會消失。",realDistanceAU:1.52,type:"terrestrial",moons:2,magnitude:"最亮: -2.91 / 平均: -0.5",temperature:"-143°C ~ 35°C",volume:"0.15 x 地球",mass:"0.11 x 地球",gravity:"3.72 m/s² (0.38G)"},{id:"jupiter",name:"木星 (Jupiter)",color:"#D15C21",texture:"jupiter.jpg",ringTexture:"",radius:1.12,orbitRadius:13e3,eccentricity:.049,orbitAngle:274,inclination:.32,axialTilt:3.1,period:11.86,rotationPeriod:"9.9 小時",rotationSpeed:2.41,description:"木星是太陽系最大的行星，質量是其他所有行星總和的 2.5 倍，主要由氫和氦組成。它沒有固體表面，大氣層下是深不見底的液態金屬氫海洋，產生了巨大的磁場。木星表面色彩斑斕的條紋是高速反向流動的風帶，而標誌性的「大紅斑」則是一個已經存在數百年的巨型反氣旋風暴，大到足以吞噬整個地球。",observationInfo:"木星是夜空中最容易觀測的目標之一。使用 7x50 的雙筒望遠鏡，就能看到身旁四顆排列成線的亮點，即「伽利略衛星」。透過天文望遠鏡，可以清晰看到木星盤面上的深色條紋（Belts）與淺色區域（Zones），在大氣穩定時甚至能分辨出大紅斑的顏色。",realDistanceAU:5.2,type:"gas",moons:97,magnitude:"最亮: -2.94 / 平均: -2.2",temperature:"-108°C (平均)",volume:"1,321 x 地球",mass:"318 x 地球",gravity:"24.79 m/s² (2.5G)"},{id:"io",parentId:"jupiter",name:"木衛一 (Io)",color:"#FFFACD",texture:"io.jpg",ringTexture:"",radius:.029,orbitRadius:6.57,eccentricity:.0041,orbitAngle:0,inclination:.04,axialTilt:0,period:.0048,rotationPeriod:"1.77 天 (同步)",rotationSpeed:.56,description:"木衛一（Io）是太陽系中火山活動最劇烈的天體。受到木星巨大的引力以及外側木衛二、木衛三的軌道共振影響，其內部不斷受到潮汐力的拉扯與摩擦，產生極高的熱能。這導致其表面遍布數百座活火山，噴發出的硫磺與二氧化硫羽流可高達 500 公里，將地表染成鮮豔的黃色、橙色與紅色，且地貌變化極快。",observationInfo:"在小型望遠鏡中，木衛一是一個緊貼木星的小亮點。它的特點是移動速度極快，公轉週期僅 1.77 天。在幾個小時的觀測期間內，你就能明顯察覺它相對於木星的位置發生了改變。它是觀測「木衛互食」現象的最佳目標。",realDistanceAU:.0028,type:"moon",moons:0,magnitude:"5.0 (衝時)",temperature:"-130°C ~ 1600°C (火山口)",volume:"0.015 x 地球",mass:"0.015 x 地球",gravity:"1.79 m/s² (0.18G)"},{id:"europa",parentId:"jupiter",name:"木衛二 (Europa)",color:"#FFFFF0",texture:"europa.jpg",ringTexture:"",radius:.025,orbitRadius:10.48,eccentricity:.009,orbitAngle:45,inclination:.46,axialTilt:.1,period:.0097,rotationPeriod:"3.55 天 (同步)",rotationSpeed:.28,description:"木衛二（Europa）表面異常光滑，覆蓋著一層厚厚的冰殼，幾乎沒有隕石坑。科學家有強烈證據顯示，在冰層之下存在一個深邃的全球性鹹水海洋，其水量甚至比地球所有海洋的總和還多。這個地下海洋由潮汐加熱維持液態，並可能與海底岩石發生化學反應，是尋找地外生命最有希望的地方之一。",observationInfo:"木衛二在望遠鏡中呈現為白色的微弱星點。由於其表面由水冰組成，反照率極高（約 0.64）。當它經過木星盤面（凌木）時，在大口徑望遠鏡下有時難以分辨，但其投下的黑色影子則相對容易被看到。",realDistanceAU:.0045,type:"moon",moons:0,magnitude:"5.3 (衝時)",temperature:"-160°C (表面)",volume:"0.015 x 地球",mass:"0.008 x 地球",gravity:"1.31 m/s² (0.13G)"},{id:"ganymede",parentId:"jupiter",name:"木衛三 (Ganymede)",color:"#C7B299",texture:"ganymede.jpg",ringTexture:"",radius:.041,orbitRadius:16.7,eccentricity:.0013,orbitAngle:90,inclination:.18,axialTilt:.2,period:.0196,rotationPeriod:"7.15 天 (同步)",rotationSpeed:.14,description:"木衛三（Ganymede）是太陽系中體積最大的衛星，直徑甚至超過了水星。它是唯一已知擁有自己磁圈的衛星，這意味著其內部擁有一個活躍的熔融鐵核。其表面混合了兩種地形：布滿撞擊坑的古老暗區，以及由構造活動形成的年輕明亮槽溝，顯示其過去曾經歷過劇烈的地殼變動。",observationInfo:"木衛三是四顆伽利略衛星中最亮的一顆（約 4.6 等）。若視力極佳且環境極黑，理論上肉眼可見，但通常被木星的光芒淹沒。使用望遠鏡觀測時，它是最容易辨識的衛星。在專業的高倍率天文攝影中，甚至能拍出其表面的明暗斑塊。",realDistanceAU:.0071,type:"moon",moons:0,magnitude:"4.6 (衝時)",temperature:"-163°C (平均)",volume:"0.07 x 地球",mass:"0.025 x 地球",gravity:"1.42 m/s² (0.14G)"},{id:"callisto",parentId:"jupiter",name:"木衛四 (Callisto)",color:"#696969",texture:"callisto.jpg",ringTexture:"",radius:.038,orbitRadius:29.4,eccentricity:.0074,orbitAngle:180,inclination:.28,axialTilt:0,period:.0457,rotationPeriod:"16.7 天 (同步)",rotationSpeed:.06,description:"木衛四（Callisto）距離木星最遠，受到的潮汐力極小。它是一顆地質活動已經死寂的星球，表面布滿了密密麻麻的隕石坑，被認為是太陽系中最古老的地表之一，幾乎完整保留了 40 億年來的轟擊歷史。它可能擁有一個未完全分化的內部結構，即岩石與冰混合在一起，沒有形成明顯的地核。",observationInfo:"木衛四的亮度較暗（約 5.6 等），但仍在此雙筒望遠鏡的可見範圍內。由於其軌道半徑很大，它在木星兩側擺動的幅度也最大。在觀測時，它經常孤懸於木星遠處，需要對照星圖確認它不是背景恆星。觀察它完成一圈公轉需要半個多月。",realDistanceAU:.012,type:"moon",moons:0,magnitude:"5.6 (衝時)",temperature:"-139°C (平均)",volume:"0.054 x 地球",mass:"0.018 x 地球",gravity:"1.23 m/s² (0.12G)"},{id:"saturn",name:"土星 (Saturn)",color:"#EDD19C",texture:"saturn.jpg",ringTexture:"",radius:.94,orbitRadius:23750,eccentricity:.057,orbitAngle:339,inclination:.93,axialTilt:26.7,period:29.46,rotationPeriod:"10.7 小時",rotationSpeed:2.23,description:"土星是太陽系中最美麗的行星，擁有壯觀且複雜的環系統。這些光環由無數大小不一的冰塊與岩石組成，從微塵到房屋大小都有，儘管寬度達數十萬公里，厚度卻平均只有 10 公尺左右。土星本身是一顆氣態巨行星，大氣呈淡黃色，北極存在著一個神祕的六邊形風暴結構，其邊長大於地球直徑。",observationInfo:"土星環是業餘天文觀測中最令人驚嘆的景象。即使是入門級的小型望遠鏡，也能清楚看到光環的存在，使其看起來像一個帶著耳朵的圓球。若使用口徑較大的望遠鏡，可以看見光環中的黑色縫隙「卡西尼環縫」，以及土星本體投射在光環上的陰影，極具立體感。",realDistanceAU:9.58,type:"gas",moons:146,magnitude:"最亮: +0.43 / 平均: +0.7",temperature:"-139°C (平均)",volume:"764 x 地球",mass:"95 x 地球",gravity:"10.44 m/s² (1.06G)"},{id:"titan",parentId:"saturn",name:"土衛六 (Titan)",color:"#FF8F00",texture:"titan.jpg",ringTexture:"",radius:.04,orbitRadius:19,eccentricity:.0288,orbitAngle:0,inclination:.35,axialTilt:.25,period:.0436,rotationPeriod:"15.9 天 (同步)",rotationSpeed:.063,description:"土衛六（Titan）是土星最大的衛星，也是太陽系第二大衛星。它是唯一擁有濃厚大氣層的衛星，大氣壓力甚至是地球的 1.5 倍，主要由氮氣組成。其表面擁有液態甲烷和乙烷組成的湖泊與河流，形成了與地球極為相似的循環系統，只是流動的不是水。由於大氣中充滿了有機化合物的霧霾，其表面呈現出神秘的橘黃色。",observationInfo:"土衛六亮度約 8.4 等，是土星最容易觀測的衛星。使用小型天文望遠鏡（口徑 8 公分以上）即可看到它呈現為一個橘色的小光點在土星旁邊運行。由於它圍繞土星公轉的軌道面與土星環平行，我們可以觀察到它在土星周圍繞行一圈的完整過程，週期約為 16 天。",realDistanceAU:.0081,type:"moon",moons:0,magnitude:"8.4 (衝時)",temperature:"-179°C (表面)",volume:"0.066 x 地球",mass:"0.0225 x 地球",gravity:"1.35 m/s² (0.14G)"},{id:"uranus",name:"天王星 (Uranus)",color:"#7ED6DF",texture:"uranus.jpg",ringTexture:"",radius:.4,orbitRadius:48e3,eccentricity:.046,orbitAngle:96,inclination:1.02,axialTilt:97.8,period:84.01,rotationPeriod:"17.2 小時 (逆行)",rotationSpeed:1.39,description:"天王星是一顆寒冷的冰巨行星，大氣中豐富的甲烷吸收了紅光，使其呈現出獨特的青藍色。它的內部熱流極低，大氣活動相對平靜。最特別的是，天王星的自轉軸傾角高達 98 度，這意味著它是「躺著」繞太陽公轉的。這可能源於太陽系早期一次巨大的撞擊事件。",observationInfo:"天王星的亮度約為 5.7 等，正好位於人眼可見的極限邊緣。在完全無光害的深山中，視力極佳的人或許能勉強看到，但在一般環境下必須使用雙筒或天文望遠鏡。在望遠鏡中，它是一個微小的、不會閃爍的青色圓盤，與周圍針點般的恆星有明顯區別，但難以看到表面細節。",realDistanceAU:19.22,type:"ice",moons:28,magnitude:"最亮: +5.32 / 平均: +5.68",temperature:"-197°C (平均)",volume:"63 x 地球",mass:"14.5 x 地球",gravity:"8.69 m/s² (0.89G)"},{id:"neptune",name:"海王星 (Neptune)",color:"#4834D4",texture:"neptune.jpg",ringTexture:"",radius:.38,orbitRadius:75e3,eccentricity:.011,orbitAngle:273,inclination:.72,axialTilt:28.3,period:164.8,rotationPeriod:"16.1 小時",rotationSpeed:1.48,description:"海王星是距離太陽最遠的行星，也是一顆深藍色的冰巨行星。儘管距離太陽極遠，接收到的熱量微乎其微，它卻擁有太陽系中最強烈的風暴，風速高達每小時 2100 公里（超音速）。科學家推測其內部可能有未知的熱源驅動著大氣活動。其最大的衛星「海衛一」沿著逆行軌道運行，並有噴發液態氮的冰火山。",observationInfo:"海王星是唯一一顆絕對無法用肉眼看見的八大行星，其視星等約為 7.8 等。必須使用口徑 8 公分以上的望遠鏡才能觀測。在視野中，它看起來像一顆極暗的藍色星星。由於視直徑極小，即使在高倍率下也只是一個模糊的小藍點，需要精確的星圖輔助才能在茫茫星海中找到它。",realDistanceAU:30.05,type:"ice",moons:16,magnitude:"最亮: +7.78 / 平均: +7.9",temperature:"-201°C (平均)",volume:"57 x 地球",mass:"17 x 地球",gravity:"11.15 m/s² (1.14G)"}];$t.forEach(t=>{switch(t.id){case"sun":t.description+=`

【冷知識】光子從太陽核心產生後，需要在緻密的內部不斷碰撞，耗時數萬年甚至十幾萬年才能抵達表面；但一旦脫離表面，只需 8 分 20 秒就能抵達地球。我們現在看到的陽光，其實是冰河時期前就產生的能量。`;break;case"mercury":t.description+=`

【冷知識】水星擁有獨特的「3:2 自轉軌道共振」，即公轉兩圈的時間剛好自轉三圈。這導致在水星的某些位置，太陽會升起、停在空中、倒退落下，然後再升起，一天（日出到日落）長達 176 個地球日，比它的一年還長。`;break;case"venus":t.description+=`

【冷知識】金星的自轉方向與大多數行星相反（逆行），這意味著在金星上太陽是「西升東落」的。而且它的自轉極慢，金星的一天（243 地球日）比金星的一年（225 地球日）還要長。`;break;case"earth":t.description+=`

【冷知識】地球並不是完美的圓球，而是一個扁球體。由於自轉離心力，赤道半徑比極半徑長約 21 公里。這意味著位於赤道的欽博拉索山（Chimborazo）頂峰，其實比聖母峰距離地心更遠，是名副其實的「離太空最近的地方」。`;break;case"moon":t.description+=`

【冷知識】月球正以每年約 3.8 公分的速度遠離地球。這意味著在遙遠的未來，月球在天空中的視直徑將變得太小而無法完全遮擋太陽，屆時地球上將永遠不再能看到壯觀的日全食，只能看到環食。`;break;case"mars":t.description+=`

【冷知識】火星上的夕陽是藍色的。這是因為火星大氣稀薄且充滿懸浮微塵，這些塵埃顆粒的大小傾向於散射紅光，讓紅光向四周擴散，而保留了波長較短的藍光直接穿透大氣，因此在太陽周圍形成藍色的光暈。`;break;case"jupiter":t.description+=`

【冷知識】木星與太陽的「共同質心」（Barycenter）實際上位於太陽表面之外。由於木星質量巨大，它是太陽系中唯一一個不繞著太陽「內部」運行的行星，而是與太陽一起繞著兩者之間的虛空點旋轉，讓太陽本身也產生明顯的晃動。`;break;case"io":t.description+=`

【冷知識】木衛一與木星之間存在著強大的「通量管」（Flux Tube）電流系統。木衛一火山噴發的電離物質會沿著木星磁場線移動，產生高達數百萬安培的電流，這不僅在木星極區製造出強烈的極光，還會發出強大的無線電波暴。`;break;case"europa":t.description+=`

【冷知識】木衛二表面的紅褐色條紋被稱為「線條」（Lineae）。有趣的是，這些條紋兩側的地貌特徵是錯位的，就像地球上的斷層一樣。這證明了它的冰殼是漂浮在液態層之上，並且可以自由移動與旋轉的。`;break;case"ganymede":t.description+=`

【冷知識】木衛三、木衛二與木衛一處於嚴格的 1:2:4 軌道共振狀態。這意味著木衛三每公轉一圈，木衛二就公轉兩圈，木衛一則公轉四圈。這種精密的引力舞蹈維持了它們的軌道離心率，並提供了持續的潮汐加熱來源。`;break;case"callisto":t.description+=`

【冷知識】木衛四擁有著名的「瓦爾哈拉撞擊盆地」（Valhalla），直徑達 3800 公里。與一般凹陷的隕石坑不同，它呈現出一圈圈同心圓的波紋結構，就像石頭丟進水中產生的漣漪被瞬間凍結了一樣，這顯示撞擊當時其冰殼下方可能存在較軟的物質。`;break;case"saturn":t.description+=`

【冷知識】土星是太陽系中密度最低的行星，其平均密度（0.687 g/cm³）甚至比水還低。這意味著如果有一個夠大的宇宙浴缸裝滿水，土星是唯一一顆會浮在水面上的行星，而其他行星都會沉下去。`;break;case"titan":t.description+=`

【冷知識】由於土衛六引力較小（約地球的 1/7）且大氣密度高（地球的 4 倍），如果你在土衛六表面裝上一對翅膀並用力揮動，你真的可以像鳥一樣在空中飛翔，而不需要推進器。`;break;case"uranus":t.description+=`

【冷知識】由於天王星是「躺著轉」，其極區會經歷長達 42 年的連續白晝，接著是 42 年的連續黑夜。只有在赤道附近，才能體驗到正常的晝夜交替，但那裡的太陽位置也極低。這種極端的季節變化是太陽系獨有的。`;break;case"neptune":t.description+=`

【冷知識】海王星是唯一一顆在被觀測到之前，先透過數學計算預測存在的行星。19世紀的天文學家發現天王星的軌道與理論不符，推算出外側還有一顆行星在進行重力干擾，隨後觀測者根據這些計算精確地找到了海王星的位置。`;break}});const Yt={FOV:35,NEAR:.001,FAR:5e6,MAX_DISTANCE:5e5,MIN_DISTANCE:1e-4,INITIAL_POS:{x:0,y:3e4,z:6e4},INITIAL_TARGET:{x:0,y:0,z:0}},Ww=.45,jw=.6,Nm=1.6,yo={COLOR_DESATURATION:.2,VISIBLE_FRACTION:.9,FADE_POWER:.5,BASE_OPACITY:0,PEAK_OPACITY:1},Ht={CORE_COLOR:{r:1,g:.8,b:.6},EDGE_COLOR:{r:1,g:.9,b:.6},SURFACE_BRIGHTNESS:2.5,INNER_GLOW_COLOR:16755200,INNER_GLOW_OPACITY:.5,INNER_GLOW_SIZE_MULT:15,OUTER_GLOW_COLOR:16747776,OUTER_GLOW_OPACITY:.5,OUTER_GLOW_SIZE_MULT:40,INTENSITY_FAR:3,INTENSITY_NEAR:.3},mo={RADIUS:2e6,DUST_COUNT:5e4,DUST_SIZE:6e3,BRIGHT_COUNT:8e3,BRIGHT_SIZE:12e3},Xw=()=>`
  uniform vec3 color;
  uniform float currentAngle;
  uniform float hoverState; // 0.0 = Normal, 1.0 = Hover/Selected
  varying float vLineAngle;
  
  #include <common>
  #include <logdepthbuf_pars_fragment>
  
  void main() {
    #include <logdepthbuf_fragment>

    float cAngle = currentAngle;
    float vAngle = vLineAngle;
    
    // Calculate angular difference
    float diff = cAngle - vAngle;
    
    // Normalize diff to [0, 2PI) range
    diff = mod(diff, 2.0 * PI);
    
    // Normalize distance along the trail (0.0 at planet, 1.0 at tail end)
    float dist = diff / (2.0 * PI);
    
    // --- Config Injected via Template Literals ---
    float visibleFraction = ${yo.VISIBLE_FRACTION.toFixed(2)};
    float alpha = 0.0;

    if (dist < visibleFraction) {
        // Renormalize distance within the visible segment (0.0 to 1.0)
        float localDist = dist / visibleFraction;
        
        // Gradient Logic:
        // When localDist is 0 (at planet), intensity is 1.
        // When localDist is 1 (at tail), intensity is 0.
        float intensity = pow(1.0 - localDist, ${yo.FADE_POWER.toFixed(2)});
        
        // Base Opacity + Dynamic Range
        float baseOp = ${yo.BASE_OPACITY.toFixed(2)};
        float peakOp = ${yo.PEAK_OPACITY.toFixed(2)};
        
        // Interpolate
        alpha = baseOp + (peakOp - baseOp) * intensity;
        
        // --- HOVER GLOW EFFECT ---
        if (hoverState > 0.0) {
            alpha = min(1.0, alpha * 2.0); 
        }
    } else {
        // Respect base opacity even outside visible fraction if fraction is < 1.0
        // But if VISIBLE_FRACTION is 1.0, we just want full loop.
        alpha = 0.0; 
    }
    
    // Mix color with white for "Glow" effect when hovered
    vec3 finalColor = mix(color, vec3(1.0, 1.0, 1.0), hoverState * 0.4);

    gl_FragColor = vec4(finalColor, alpha);
  }
`,Yw=`
  attribute float lineAngle;
  varying float vLineAngle;
  
  #include <common>
  #include <logdepthbuf_pars_vertex>

  void main() {
    vLineAngle = lineAngle;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    #include <logdepthbuf_vertex>
  }
`,qw=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  #include <common>
  #include <logdepthbuf_pars_vertex>

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    
    #include <logdepthbuf_vertex>
  }
`,$w=`
  uniform sampler2D map;
  uniform float time;
  
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  #include <common>
  #include <logdepthbuf_pars_fragment>

  void main() {
    #include <logdepthbuf_fragment>

    vec3 viewDir = normalize(-vPosition);
    vec3 normal = normalize(vNormal);
    vec4 texColor = texture2D(map, vUv);
    
    // N dot V: 1.0 at center, 0.0 at edge
    float viewDot = dot(normal, viewDir);
    float limb = max(0.0, viewDot);
    
    // --- Config (Injected from constants) ---
    vec3 coreColor = vec3(${Ht.CORE_COLOR.r}, ${Ht.CORE_COLOR.g}, ${Ht.CORE_COLOR.b}); 
    vec3 edgeColor = vec3(${Ht.EDGE_COLOR.r}, ${Ht.EDGE_COLOR.g}, ${Ht.EDGE_COLOR.b});
    
    // Transition:
    // Reduced power from 3.0 to 2.0 to create a smoother, wider gradient
    float rimFactor = pow(1.0 - limb, 2.0); 
    
    // Texture Brightness Boost:
    vec3 baseSurface = texColor.rgb * ${Ht.SURFACE_BRIGHTNESS.toFixed(1)};
    
    // Mix:
    vec3 finalColor = mix(baseSurface * coreColor, edgeColor, rimFactor * 0.85);
    
    // Add subtle extra rim definition
    finalColor += edgeColor * 0.4 * pow(1.0 - limb, 4.0);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`,Kw=()=>{const t=document.createElement("canvas");t.width=1,t.height=1;const e=t.getContext("2d");return e&&(e.fillStyle="#ffffff",e.fillRect(0,0,1,1)),new dc(t)},Zw=Kw(),Um=t=>{const n=document.createElement("canvas");n.width=2048,n.height=2048;const i=n.getContext("2d");if(!i)return null;const r=2048/2,s=2048/2;i.clearRect(0,0,2048,2048);const o=(u,g,_,y)=>{i.beginPath(),i.arc(r,s,u,0,Math.PI*2),i.lineWidth=g,i.strokeStyle=_,i.globalAlpha=y,i.stroke()},a=t==="uranus",l=t==="neptune";let c,f;l?(c=1.5,f=2.8):a?(c=1.1,f=3.9):(c=1.3,f=2.3);const d=2048*.5,m=d*(c/f)-2,v=d-1,x=v-m;if(l){const u=A=>{const D=(A-c)/(f-c);return m+x*D},g="#8fa0b5";o(u(1.7),80,g,.15),o(u(2.16),3,g,.5);const _=u(2.16),C=u(2.32)-_,R=_+C/2;o(R,C,g,.08),o(u(2.32),3,g,.4),o(u(2.56),4,"#aabccd",.7)}else if(a){const u=K=>{const N=(K-c)/(f-c);return m+x*N},g="#aaaaaa",_="#ffffff",y="#691616",C="#17176e",R=u(1.62),A=u(1.2),D=i.createRadialGradient(r,s,A,r,s,R);D.addColorStop(0,"rgba(150, 150, 150, 0.0)"),D.addColorStop(.5,"rgba(150, 150, 150, 0.1)"),D.addColorStop(1,"rgba(150, 150, 150, 0.15)"),i.beginPath(),i.arc(r,s,R,0,Math.PI*2),i.arc(r,s,A,0,Math.PI*2,!0),i.fillStyle=D,i.fill(),o(u(1.65),1,g,.4),o(u(1.67),1,g,.4),o(u(1.69),1,g,.4),o(u(1.76),1.5,g,.6),o(u(1.79),1.5,g,.6),o(u(1.86),1.3,g,.6),o(u(1.89),1,g,.4),o(u(1.92),1.3,g,.6),o(u(1.97),1.3,g,.6),o(u(2.01),1.8,_,.8);const S=u(2.65),B=u(2.8)-S,$=S+B/2;o($,B,y,.14);const re=u(3.35),G=u(3.9)-re,q=re+G/2;o(q,G,C,.1)}else{const u=["#d3b589","#c2a278","#a49174","#8a7b63","#e0d0b0"];let _=.8,y=0;for(let C=m;C<v;C+=1.5){const R=(C-m)/(v-m);let A=.8,D=y;Math.random()>.95&&(D=Math.floor(Math.random()*u.length));let S=u[D];R<.15?(S="#5b5b6b",A=.15+Math.random()*.1):R<.6?(A=.9,Math.random()<.02&&(A=.6)):R<.65?(S="#000000",A=0):(A=.6,R>.9&&R<.92&&(A=.05,S="#111111"));let T=_*.8+A*.2+(Math.random()-.5)*.05;T=Math.max(0,Math.min(1,T));let B=1.5+Math.random()*.5;o(C,B,S,T),_=T,y=D}}const p=new dc(n);return p.minFilter=Ws,p.magFilter=Cn,p},Qw=()=>{const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");if(!n)return null;const i=1024/2,r=1024/2;n.clearRect(0,0,1024,1024);const s=n.createImageData(1024,1024),o=s.data;for(let a=0;a<1024;a++)for(let l=0;l<1024;l++){const c=l-i,f=a-i,h=Math.sqrt(c*c+f*f)/r;if(h<1){const m=Math.min(1,h/.7);let v=0;m<1&&(v=Math.pow(1-m,2.5));const x=(a*1024+l)*4;o[x]=255,o[x+1]=255,o[x+2]=255,o[x+3]=v*255}}return n.putImageData(s,0,0),new dc(e)},Jw=()=>{const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");if(!e)return null;const n=32,i=e.createRadialGradient(n,n,0,n,n,32);return i.addColorStop(0,"rgba(255, 255, 255, 0.9)"),i.addColorStop(.2,"rgba(255, 255, 255, 0.9)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.0)"),e.fillStyle=i,e.fillRect(0,0,64,64),new dc(t)},eA=({positions:t,selectedPlanetId:e,onSelectPlanet:n,showOrbits:i,solveKepler:r,speed:s,cameraResetTrigger:o=0,showAxialTilt:a=!1})=>{const l=de.useRef(null),c=de.useRef(null),f=de.useRef(null),d=de.useRef(null),h=de.useRef(null),m=de.useRef(null),v=de.useRef({}),x=de.useRef({}),p=de.useRef({}),u=de.useRef({}),g=de.useRef(null),_=de.useRef({}),y=de.useRef({}),C=de.useRef(null),R=de.useRef(null),A=de.useRef(null),D=de.useRef([]),S=de.useRef(new Bw),T=de.useRef(new Hw),B=de.useRef(new Ue),$=de.useRef(null),re=de.useRef(null),I=de.useRef(e),G=de.useRef(null),q=de.useRef(null),K=de.useRef(!1),N=de.useRef(!1),H=de.useRef(s);de.useEffect(()=>{H.current=s},[s]);const V=de.useRef({x:0,y:0}),ee=de.useRef(!1);de.useEffect(()=>{I.current=e},[e]),de.useEffect(()=>{o>0&&(K.current=!0,N.current=!1,re.current=null)},[o]);const ie=de.useRef(n);return de.useEffect(()=>{ie.current=n},[n]),de.useEffect(()=>{Object.keys(_.current).forEach(k=>{const Z=_.current[k],ce=y.current[k],_e=a&&e===k;Z&&(Z.visible=_e),ce&&(ce.visible=_e)})},[a,e]),de.useEffect(()=>{var Le;if(!l.current)return;D.current=[];const k=new bw;f.current=k;const Z=new Pn(Yt.FOV,l.current.clientWidth/l.current.clientHeight,Yt.NEAR,Yt.FAR);Z.position.set(Yt.INITIAL_POS.x,Yt.INITIAL_POS.y,Yt.INITIAL_POS.z),d.current=Z;const ce=new N_({antialias:!0,alpha:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});ce.setSize(l.current.clientWidth,l.current.clientHeight),ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),ce.shadowMap.enabled=!0,ce.shadowMap.type=Q0,ce.outputColorSpace=Dt,ce.toneMapping=e_,ce.toneMappingExposure=1.2;const _e=ce.capabilities.getMaxAnisotropy();l.current.appendChild(ce.domElement),h.current=ce;const ve=new Vw(Z,ce.domElement);ve.enableDamping=!0,ve.dampingFactor=.05,ve.minDistance=Yt.MIN_DISTANCE,ve.maxDistance=Yt.MAX_DISTANCE;const Oe=window.innerWidth<768?-1800:0;ve.target.set(Yt.INITIAL_TARGET.x,Yt.INITIAL_TARGET.y+Oe,Yt.INITIAL_TARGET.z),m.current=ve,ve.addEventListener("start",()=>{N.current=!1,K.current=!1});const Ie=new Ow(16777215,Ht.INTENSITY_FAR,0,0);Ie.position.set(0,0,0),Ie.castShadow=!1,k.add(Ie),R.current=Ie;const ue=new zw(16777215,.5);k.add(ue);const Te=new kw(16777215,4);Te.castShadow=!0,Te.shadow.mapSize.width=4096,Te.shadow.mapSize.height=4096,Te.shadow.bias=-1e-4,Te.shadow.radius=3.5,Te.visible=!1,k.add(Te),k.add(Te.target),C.current=Te;const O=new br;k.add(O);const at=Jw(),be=mo.DUST_COUNT,Ne=new Kt,Se=new Float32Array(be*3),ot=mo.RADIUS;for(let U=0;U<be;U++){const E=ot*(.6+Math.random()*.4),J=Math.random()*Math.PI*2,pe=Math.acos(Math.random()*2-1),ne=E*Math.sin(pe)*Math.cos(J),Q=E*Math.sin(pe)*Math.sin(J),P=E*Math.cos(pe);Se[U*3]=ne,Se[U*3+1]=Q,Se[U*3+2]=P}Ne.setAttribute("position",new En(Se,3));const He=new Lf({color:16777215,size:mo.DUST_SIZE,map:at,transparent:!0,opacity:1,sizeAttenuation:!0,depthWrite:!1,blending:Gi}),b=new Mm(Ne,He);b.renderOrder=-10,O.add(b);const M=mo.BRIGHT_COUNT,z=new Kt,ae=new Float32Array(M*3),se=new Float32Array(M*3),le=[new Ze("#FFFFFF"),new Ze("#AABFFF"),new Ze("#FFDDAA"),new Ze("#FFBB88")];for(let U=0;U<M;U++){const E=Math.random()*Math.PI*2,J=Math.acos(Math.random()*2-1),pe=ot*(.8+Math.random()*.4),ne=pe*Math.sin(J)*Math.cos(E),Q=pe*Math.sin(J)*Math.sin(E),P=pe*Math.cos(J);ae[U*3]=ne,ae[U*3+1]=Q,ae[U*3+2]=P;const te=le[Math.floor(Math.random()*le.length)];se[U*3]=te.r,se[U*3+1]=te.g,se[U*3+2]=te.b}z.setAttribute("position",new En(ae,3)),z.setAttribute("color",new En(se,3));const we=new Lf({size:mo.BRIGHT_SIZE,map:at,transparent:!0,opacity:1,vertexColors:!0,sizeAttenuation:!0,depthWrite:!1,blending:Gi}),ge=new Mm(z,we);ge.renderOrder=-10,O.add(ge);const xe=new Nw;xe.crossOrigin="anonymous",$t.forEach(U=>{let E,J=new br,pe;if(U.id==="sun"){const ne={map:{value:Zw},time:{value:0}};pe=new Di({uniforms:ne,vertexShader:qw,fragmentShader:$w,transparent:!1,depthWrite:!0}),A.current=ne}else pe=new Su({color:U.color,map:null,roughness:1,metalness:0,emissive:0});if(U.texture&&U.texture.length>0&&xe.load(U.texture,ne=>{ne.colorSpace=Dt,ne.anisotropy=_e,U.id==="sun"?pe.uniforms.map.value=ne:(pe.map=ne,pe.color.setHex(16777215),pe.needsUpdate=!0)},void 0,ne=>console.warn(`Texture failed for ${U.id}`)),U.id==="sun"){const ne=new Io(U.radius,64,64);E=new jn(ne,pe),E.name="planetMesh",E.userData={id:U.id},D.current.push(E);const Q=Qw(),P=new Pf({map:Q,color:Ht.INNER_GLOW_COLOR,transparent:!0,opacity:Ht.INNER_GLOW_OPACITY,blending:Gi,depthWrite:!1}),te=new _m(P);te.scale.set(U.radius*Ht.INNER_GLOW_SIZE_MULT,U.radius*Ht.INNER_GLOW_SIZE_MULT,1),E.add(te);const he=new Pf({map:Q,color:Ht.OUTER_GLOW_COLOR,transparent:!0,opacity:Ht.OUTER_GLOW_OPACITY,blending:Gi,depthWrite:!1}),Ce=new _m(he);Ce.scale.set(U.radius*Ht.OUTER_GLOW_SIZE_MULT,U.radius*Ht.OUTER_GLOW_SIZE_MULT,1),E.add(Ce),k.add(E),v.current[U.id]=E}else{const ne=new br;let Q=k;U.parentId&&U.id!=="moon"?x.current[U.parentId]?Q=x.current[U.parentId]:v.current[U.parentId]&&(Q=v.current[U.parentId]):U.parentId&&v.current[U.parentId]&&(Q=v.current[U.parentId]),Q.add(ne),v.current[U.id]=ne,J.rotation.z=U.axialTilt*(Math.PI/180),ne.add(J),x.current[U.id]=J;const P=new Io(U.radius,64,64);E=new jn(P,pe),E.name="planetMesh",E.userData={id:U.id},D.current.push(E),E.castShadow=!0,E.receiveShadow=!0,J.add(E);const te=U.radius*1.5,he=[new L(0,-te,0),new L(0,te,0)],Ce=new Kt().setFromPoints(he),Re=new Od({color:16777215,depthTest:!1,transparent:!0,opacity:1}),Be=new yu(Ce,Re);Be.visible=!1,Be.renderOrder=999,J.add(Be),_.current[U.id]=Be;const We=[new L(0,-te,0),new L(0,te,0)],it=new Kt().setFromPoints(We),lt=new Pw({color:16777215,dashSize:U.radius*.025,gapSize:U.radius*.025,transparent:!0,opacity:1,depthTest:!1}),je=new yu(it,lt);if(je.computeLineDistances(),je.visible=!1,je.renderOrder=998,ne.add(je),y.current[U.id]=je,U.id==="earth"){const ct=new Io(U.radius*1.02,64,64),ft=new Su({map:null,transparent:!0,opacity:0,side:Gn,blending:Gi,depthWrite:!1,roughness:1,emissive:0});U.cloudTexture&&xe.load(U.cloudTexture,jt=>{jt.colorSpace=Dt,jt.anisotropy=_e,ft.alphaMap=jt,ft.color.setHex(16777215),ft.blending=Lr,ft.opacity=.9,ft.needsUpdate=!0});const Wt=new jn(ct,ft);E.add(Wt),g.current=Wt}if(U.id==="saturn"||U.id==="uranus"||U.id==="neptune"){const ct=U.id==="uranus",ft=U.id==="neptune";let Wt,jt;ft?(Wt=U.radius*1.5,jt=U.radius*2.8):ct?(Wt=U.radius*1.3,jt=U.radius*3.9):(Wt=U.radius*1.3,jt=U.radius*2.3);const wn=new Fd(Wt,jt,256),Me=new Su({color:16777215,side:Gn,shadowSide:Gn,transparent:!0,opacity:.95,roughness:.4,metalness:.1,emissive:0,alphaTest:.05}),Ge=new I_({depthPacking:u_,map:null,alphaTest:.05});if(U.ringTexture)xe.load(U.ringTexture,rt=>{rt.anisotropy=_e,Me.map=rt,Me.needsUpdate=!0,Ge.map=rt,Ge.needsUpdate=!0},void 0,()=>{const rt=Um(U.id);rt&&(rt.anisotropy=_e,Me.map=rt,Me.needsUpdate=!0,Ge.map=rt,Ge.needsUpdate=!0)});else{const rt=Um(U.id);rt&&(rt.anisotropy=_e,Me.map=rt,Ge.map=rt)}const Ae=wn.attributes.position,et=wn.attributes.uv;for(let rt=0;rt<Ae.count;rt++){const zt=Ae.getX(rt),w=Ae.getY(rt),F=jt,W=zt/F*.5+.5,X=w/F*.5+.5;et.setXY(rt,W,X)}const yt=new jn(wn,Me);yt.customDepthMaterial=Ge,yt.rotation.x=-Math.PI/2,yt.castShadow=!1,yt.receiveShadow=!0,J.add(yt)}}if(U.id!=="sun"){const ne=[],Q=[],P=Math.min(2e4,Math.max(256,Math.floor(U.orbitRadius)));let te=0;for(let it=0;it<=P;it++){const lt=it/P*2*Math.PI,je=r(lt,U.eccentricity),ct=U.orbitRadius,ft=U.eccentricity,Wt=ct*Math.sqrt(1-ft*ft),jt=ct*(Math.cos(je)-ft),wn=Wt*Math.sin(je),Me=U.orbitAngle*Math.PI/180,Ge=jt*Math.cos(Me)-wn*Math.sin(Me),Ae=jt*Math.sin(Me)+wn*Math.cos(Me);let et=Math.atan2(Ae,Ge);if(it>0){let zt=et-te;for(;zt<=-Math.PI;)zt+=2*Math.PI;for(;zt>Math.PI;)zt-=2*Math.PI;et=te+zt}te=et;const yt=U.inclination*Math.PI/180,rt=U.orbitRadius*Math.sin(yt)*Math.sin(et);ne.push(new L(Ge,rt,Ae)),Q.push(et)}const he=new Kt().setFromPoints(ne);he.setAttribute("lineAngle",new pn(Q,1));const Ce=Xw(),Re=new Ze(U.color).lerp(new Ze(16777215),yo.COLOR_DESATURATION),Be=new Di({uniforms:{color:{value:Re},currentAngle:{value:0},hoverState:{value:0}},vertexShader:Yw,fragmentShader:Ce,transparent:!0,depthWrite:!1,blending:Gi}),We=new yu(he,Be);U.parentId&&U.id!=="moon"&&x.current[U.parentId]?x.current[U.parentId].add(We):U.parentId&&v.current[U.parentId]?v.current[U.parentId].add(We):k.add(We),p.current[U.id]=We}if(c.current){const ne=document.createElement("div");ne.className="planet-label",ne.textContent=U.name.split(" ")[0],ne.onclick=()=>ie.current(U.id),ne.onmouseenter=()=>{q.current=U.id},ne.onmouseleave=()=>{q.current=null};const Q=U.id==="moon"?"50%":"-120%";ne.style.transform=`translate(-50%, ${Q})`,c.current.appendChild(ne),u.current[U.id]=ne}}),(()=>{Object.keys(_.current).forEach(U=>{_.current[U],y.current[U]})})();const Ve=new ResizeObserver(U=>{for(let E of U)if(E.target===l.current&&d.current&&h.current){const J=E.contentRect.width,pe=E.contentRect.height;d.current.aspect=J/pe,d.current.updateProjectionMatrix(),h.current.setSize(J,pe)}});Ve.observe(l.current);const oe=U=>{ee.current=!1,V.current={x:U.clientX,y:U.clientY}},nt=U=>{const E=U.clientX-V.current.x,J=U.clientY-V.current.y;if((Math.abs(E)>5||Math.abs(J)>5)&&(ee.current=!0),U.pointerType==="mouse"&&l.current&&d.current){const pe=h.current.domElement.getBoundingClientRect();B.current.x=(U.clientX-pe.left)/pe.width*2-1,B.current.y=-((U.clientY-pe.top)/pe.height)*2+1,T.current.setFromCamera(B.current,d.current);const ne=T.current.intersectObjects(D.current,!1);l.current.style.cursor=ne.length>0?"pointer":"default",q.current=ne.length>0?ne[0].object.userData.id:null}},Ye=U=>{if(ee.current||!l.current||!d.current)return;const E=h.current.domElement.getBoundingClientRect();B.current.x=(U.clientX-E.left)/E.width*2-1,B.current.y=-((U.clientY-E.top)/E.height)*2+1,T.current.setFromCamera(B.current,d.current);const J=T.current.intersectObjects(D.current,!1);J.length>0&&ie.current(J[0].object.userData.id)};(Le=h.current)!=null&&Le.domElement&&(h.current.domElement.addEventListener("pointerdown",oe),h.current.domElement.addEventListener("pointermove",nt),h.current.domElement.addEventListener("pointerup",Ye),h.current.domElement.style.touchAction="none");const ze=()=>{if(!l.current)return;$.current=requestAnimationFrame(ze);const U=S.current.getDelta(),E=I.current,J=G.current,pe=q.current;if(A.current&&(A.current.time.value+=U),E&&E!=="sun"?(R.current&&(R.current.intensity=Ht.INTENSITY_NEAR),C.current&&(C.current.visible=!0)):(R.current&&(R.current.intensity=Ht.INTENSITY_FAR),C.current&&(C.current.visible=!1)),E&&E!=="sun"&&C.current){const Me=v.current[E];if(Me){const Ge=new L,Ae=x.current[E],et=Ae?Ae.children.find(W=>W.name==="planetMesh"):null;et?et.getWorldPosition(Ge):Me.getWorldPosition(Ge);const yt=Ge.clone().normalize().negate(),rt=$t.find(W=>W.id===E),zt=rt?rt.radius:1,w=Math.max(2,zt*10);C.current.position.copy(Ge).add(yt.multiplyScalar(w)),C.current.target.position.copy(Ge);const F=Math.max(.1,zt*5);C.current.shadow.camera.left=-F,C.current.shadow.camera.right=F,C.current.shadow.camera.top=F,C.current.shadow.camera.bottom=-F,C.current.shadow.camera.near=.01,C.current.shadow.camera.far=w*3,C.current.shadow.camera.updateProjectionMatrix()}}$t.forEach(Me=>{const Ge=Me.id===E||Me.id===pe;if(p.current[Me.id]){const Ae=p.current[Me.id];Ae.material.uniforms.hoverState&&(Ae.material.uniforms.hoverState.value=Ge?1:0)}if(u.current[Me.id]){const Ae=u.current[Me.id];Ge?(Ae.style.color="#ffffff",Ae.style.textShadow=`0 0 15px ${Me.color}, 0 0 30px ${Me.color}`,Ae.style.opacity="1.0",Ae.style.fontWeight="700",Ae.style.zIndex="100"):(Ae.style.color="rgba(255, 255, 255, 0.9)",Ae.style.textShadow="0 2px 4px rgba(0,0,0,0.8)",Ae.style.opacity="0.9",Ae.style.fontWeight="500",Ae.style.zIndex="1")}}),g.current&&(g.current.rotation.y+=5e-5);let ne=new L(0,0,0),Q=!1;if(J&&!E&&(K.current=!0,N.current=!1,re.current=null),E&&(K.current=!1,E!==J&&(N.current=!0,re.current=null)),E&&v.current[E]){const Me=v.current[E];if(E==="sun")Me.getWorldPosition(ne),Q=!0;else{const Ge=x.current[E],Ae=Ge?Ge.children.find(et=>et.name==="planetMesh"):null;Ae&&(Ae.getWorldPosition(ne),Q=!0)}}if(Q&&E&&!K.current){if(window.innerWidth<768){const Me=$t.find(Ge=>Ge.id===E);if(Me){let Ge=Me.radius;["saturn","uranus","neptune"].includes(Me.id)&&(Ge*=Nm),Me.id==="sun"&&(Ge*=1.2),ne.y-=Ge*.45}}if(re.current){const Me=new L().subVectors(ne,re.current);m.current.target.add(Me),d.current.position.add(Me)}re.current||(re.current=new L),re.current.copy(ne)}const P=1-Math.exp(-4*U);if(K.current){const Ge=window.innerWidth<768?-2500:0,Ae=new L(Yt.INITIAL_TARGET.x,Yt.INITIAL_TARGET.y+Ge,Yt.INITIAL_TARGET.z),et=new L(Yt.INITIAL_POS.x,Yt.INITIAL_POS.y,Yt.INITIAL_POS.z);m.current.target.lerp(Ae,P),d.current.position.lerp(et,P);const yt=m.current.target.distanceTo(Ae),rt=d.current.position.distanceTo(et);yt<1&&rt<5&&(m.current.target.copy(Ae),d.current.position.copy(et),K.current=!1)}else if(E){const Me=m.current.target;if(Me.distanceTo(ne)>.001?Me.lerp(ne,P):Me.copy(ne),N.current){const Ae=$t.find(et=>et.id===E);if(Ae){const et=d.current.fov*Math.PI/180;let yt=Ae.radius;(Ae.id==="saturn"||Ae.id==="uranus"||Ae.id==="neptune")&&(yt*=Nm),Ae.id==="sun"&&(yt*=1.1);const zt=l.current.clientWidth<768?jw:Ww,w=d.current.aspect,F=yt/(Math.tan(et/2)*zt),W=yt/(Math.tan(et*w/2)*zt);let X=Math.max(F,W);const Y=Ae.radius*1.2;if(X=Math.max(X,Y),Ae.id!=="sun"){const ke=new L(0,0,0),$e=new L().subVectors(d.current.position,Me).normalize(),Xe=new L().subVectors(ke,Me).normalize();if($e.dot(Xe)>.8){const St=new L(0,1,0);let Xt=new L().crossVectors(Xe,St).normalize();Xt.lengthSq()<.1&&Xt.set(1,0,0);const Pt=Xt.multiplyScalar(X).add(new L(0,X*.4,0)),On=new L().addVectors(Me,Pt);d.current.position.lerp(On,P),d.current.position.distanceTo(On)<Ae.radius*.5&&(N.current=!1),m.current.update(),h.current.render(f.current,d.current)}}const ye=new L().subVectors(d.current.position,Me),Pe=ye.length(),Fe=Math.max(Ae.radius*.01,1e-4);if(Math.abs(Pe-X)>Fe){const ke=h_.lerp(Pe,X,P);ye.setLength(ke),d.current.position.copy(Me).add(ye)}else N.current=!1}}}if(G.current=E,m.current.update(),h.current.render(f.current,d.current),v.current.sun){const Me=$t.find(et=>et.id==="sun"),Ae=H.current/625e-6;v.current.sun.rotation.y+=.01*((Me==null?void 0:Me.rotationSpeed)||.037)*Ae}const te={},he=l.current.clientWidth,Ce=l.current.clientHeight;$t.forEach(Me=>{const Ge=v.current[Me.id];if(Ge){const Ae=new L;if(Me.id==="sun")Ge.getWorldPosition(Ae);else{const rt=x.current[Me.id],zt=rt?rt.children.find(w=>w.name==="planetMesh"):null;zt?zt.getWorldPosition(Ae):Ge.getWorldPosition(Ae)}Ae.y+=Me.radius*1.5,Ae.project(d.current);const et=(Ae.x*.5+.5)*he,yt=(-(Ae.y*.5)+.5)*Ce;te[Me.id]={x:et,y:yt,z:Ae.z}}});const Re=te.jupiter,Be=te.callisto;let We=!1;const it=90;Re&&Be&&Re.z<1&&Be.z<1&&Math.sqrt(Math.pow(Re.x-Be.x,2)+Math.pow(Re.y-Be.y,2))<it&&(We=!0);const lt=te.saturn,je=te.titan;let ct=!1;lt&&je&&lt.z<1&&je.z<1&&Math.sqrt(Math.pow(lt.x-je.x,2)+Math.pow(lt.y-je.y,2))<it&&(ct=!0);const ft=te.earth,Wt=te.moon;let jt=!1;ft&&Wt&&ft.z<1&&Wt.z<1&&Math.sqrt(Math.pow(ft.x-Wt.x,2)+Math.pow(ft.y-Wt.y,2))<it&&(jt=!0);const wn=["io","europa","ganymede","callisto"];$t.forEach(Me=>{const Ge=u.current[Me.id],Ae=te[Me.id];if(Ge&&Ae){let et=!0;if((Ae.z>1||Math.abs(Ae.x-he/2)>he/2+100||Math.abs(Ae.y-Ce/2)>Ce/2+100)&&(et=!1),et&&wn.includes(Me.id)&&We&&(et=!1),et&&Me.id==="titan"&&ct&&(et=!1),et&&Me.id==="moon"&&jt&&(et=!1),!et)Ge.style.display="none";else{Ge.style.display="block";let yt="-120%",rt="-50%";Me.id==="moon"&&(yt="50%"),Ge.style.transform=`translate(${rt}, ${yt}) translate3d(${Ae.x}px, ${Ae.y}px, 0)`,Ge.style.left="0px",Ge.style.top="0px"}}})};return ze(),()=>{var U,E;$.current&&cancelAnimationFrame($.current),Ve.disconnect(),(U=h.current)!=null&&U.domElement&&(h.current.domElement.removeEventListener("pointerdown",oe),h.current.domElement.removeEventListener("pointermove",nt),h.current.domElement.removeEventListener("pointerup",Ye)),(E=l.current)==null||E.removeChild(h.current.domElement),c.current&&(c.current.innerHTML="")}},[]),de.useEffect(()=>{t.forEach(k=>{var ce;const Z=v.current[k.id];if(Z&&(Z.position.set(k.x,k.y,k.z),k.id!=="sun")){const _e=x.current[k.id];if(_e){const Oe=_e.children.find(Ie=>Ie.name==="planetMesh");if(Oe)if(k.id==="moon"||["io","europa","ganymede","callisto","titan"].includes(k.id))Oe.rotation.y=-k.angle+Math.PI;else{const Ie=((ce=$t.find(O=>O.id===k.id))==null?void 0:ce.rotationSpeed)||1,Te=s/625e-6;Oe.rotation.y+=.01*Ie*Te}}const ve=p.current[k.id];ve&&ve.material.uniforms&&(ve.material.uniforms.currentAngle.value=k.angle)}})},[t,s]),de.useEffect(()=>{Object.values(p.current).forEach(k=>{k.visible=i})},[i]),j.jsxs("div",{className:"w-full h-full relative bg-black",children:[j.jsx("div",{ref:l,className:"w-full h-full"}),j.jsx("div",{ref:c,id:"label-container"})]})},tA=Xl.memo(eA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),iA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Om=t=>{const e=iA(t);return e.charAt(0).toUpperCase()+e.slice(1)},F_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),rA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=de.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>de.createElement("svg",{ref:l,...sA,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:F_("lucide",r),...!s&&!rA(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,f])=>de.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=(t,e)=>{const n=de.forwardRef(({className:i,...r},s)=>de.createElement(oA,{ref:s,iconNode:e,className:F_(`lucide-${nA(Om(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Om(t),n};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lA=Tn("arrow-left",aA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],uA=Tn("book-open",cA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],dA=Tn("chevron-down",fA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],pA=Tn("chevron-up",hA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],gA=Tn("gauge",mA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Fm=Tn("lightbulb",_A);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],xA=Tn("loader-circle",vA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],SA=Tn("pause",yA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],EA=Tn("play",MA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],wA=Tn("rotate-ccw",TA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],RA=Tn("sparkles",AA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],km=Tn("telescope",bA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],PA=Tn("volume-2",CA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],DA=Tn("volume-x",LA),IA=({size:t=20,className:e=""})=>j.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[j.jsx("circle",{cx:"12",cy:"12",r:"3"}),j.jsx("circle",{cx:"19",cy:"5",r:"2"}),j.jsx("circle",{cx:"5",cy:"19",r:"2"}),j.jsx("path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}),j.jsx("path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"})]}),NA=({size:t=20,className:e=""})=>j.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[j.jsx("path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}),j.jsx("path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}),j.jsx("circle",{cx:"12",cy:"12",r:"3"}),j.jsx("circle",{cx:"19",cy:"5",r:"2"}),j.jsx("circle",{cx:"5",cy:"19",r:"2"}),j.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),UA=({isPlaying:t,onTogglePlay:e,speed:n,onSpeedChange:i,onResetCamera:r,showOrbits:s,onToggleOrbits:o,mobileBottomOffset:a})=>{const[l,c]=de.useState(!1),[f,d]=de.useState(!1),h=de.useRef(null);de.useEffect(()=>{const p="thin_places.mp3";h.current=new Audio(p),h.current.loop=!0,h.current.volume=.4;const u=h.current.play();return u!==void 0&&u.then(()=>{c(!1)}).catch(g=>{console.warn("Auto-play prevented by browser policy.",g),c(!0)}),()=>{h.current&&(h.current.pause(),h.current=null)}},[]);const m=()=>{h.current&&(l?(h.current.play().catch(p=>console.error("Audio play failed:",p)),c(!1)):(h.current.pause(),c(!0)))},v=p=>p<=625e-6?"1x":p<=.00125?"2x":p<=.003125?"5x":p<=.00625?"10x":p<=.0125?"20x":p<=.03125?"50x":"100x",x=[{label:"1x",value:625e-6},{label:"2x",value:.00125},{label:"5x",value:.003125},{label:"10x",value:.00625},{label:"20x",value:.0125},{label:"50x",value:.03125},{label:"100x",value:.0625}];return j.jsxs("div",{className:"absolute left-1/2 -translate-x-1/2 z-[150] flex items-center gap-4 w-max max-w-[90vw] animate-in fade-in slide-in-from-bottom-6 transition-[bottom] duration-300 max-md:bottom-[var(--mobile-bottom-offset)] md:bottom-8",style:{"--mobile-bottom-offset":a},children:[j.jsxs("div",{className:"flex items-center gap-3 px-3 py-3 bg-slate-950/80 backdrop-blur-2xl border border-slate-800/80 rounded-full shadow-2xl",children:[j.jsx("button",{onClick:e,className:`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg border ${t?"bg-indigo-600 border-indigo-500 text-white hover:bg-indigo-500":"bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-500"}`,title:t?"暫停":"播放",children:t?j.jsx(SA,{size:22,fill:"currentColor"}):j.jsx(EA,{size:22,fill:"currentColor"})}),j.jsxs("div",{className:"relative",children:[f&&j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>d(!1)}),j.jsx("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-xl flex flex-col min-w-[80px] z-20 animate-in fade-in slide-in-from-bottom-2",children:x.map(p=>j.jsx("button",{onClick:()=>{i(p.value),d(!1)},className:`px-4 py-2.5 text-sm font-bold font-mono hover:bg-indigo-600 hover:text-white transition-colors ${Math.abs(n-p.value)<1e-6?"bg-slate-800 text-indigo-400":"text-slate-300"}`,children:p.label},p.label))})]}),j.jsxs("button",{onClick:()=>d(!f),className:`w-11 h-11 flex flex-col items-center justify-center rounded-full transition-all duration-300 gap-0.5 border ${f?"bg-slate-800 text-white border-slate-600":"text-slate-200 border-transparent hover:text-white hover:bg-slate-800/50"}`,title:"調整速度",children:[j.jsx(gA,{size:18}),j.jsx("span",{className:"text-xs font-medium font-mono leading-none",children:v(n)})]})]}),j.jsx("button",{onClick:o,className:`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 border ${s?"text-indigo-400 bg-indigo-950/30 border-indigo-500/30 hover:bg-indigo-950/50 hover:text-indigo-300":"text-slate-200 border-transparent hover:text-white hover:bg-slate-800/50"}`,title:s?"隱藏軌道":"顯示軌道",children:s?j.jsx(IA,{size:20}):j.jsx(NA,{size:20})}),j.jsx("button",{onClick:r,className:"w-11 h-11 flex items-center justify-center rounded-full text-slate-200 border border-transparent hover:text-white hover:bg-slate-800/50 transition-all duration-300 group",title:"重置",children:j.jsx(wA,{size:20,className:"group-hover:-rotate-180 transition-transform duration-500"})})]}),j.jsx("button",{onClick:m,className:`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl backdrop-blur-2xl ${l?"bg-slate-950/80 border border-slate-800/80 text-slate-200 hover:bg-slate-900/90 hover:text-white":"bg-indigo-950/80 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-900/80 hover:text-indigo-300"}`,title:l?"播放音樂":"暫停音樂",children:l?j.jsx(DA,{size:20}):j.jsx(PA,{size:20})})]})},OA=async(t,e,n)=>{await new Promise(a=>setTimeout(a,800));const i=t.split(" ")[0];n.includes("衝"),n.includes("合"),n.includes("東大距");let r="一般",s="需查閱星圖",o="";switch(i){case"太陽":r="全日可見",s="日間天空",o="今日日照強烈。觀測太陽黑子活動需特別謹慎。【絕對警告】必須使用巴德膜 (Baader Film) 或赫歇爾稜鏡覆蓋物鏡前端。切勿直接使用尋星鏡尋找太陽，以免瞬間失明。";break;case"水星":r="良好（晨前最佳）",s="日出前東南低空，約5:16升起",o="水星正處2025年北半球最佳晨顯，亮度-0.5等，距太陽最大角7日後。黎明前45分鐘掃描東南地平線10°高處，肉眼或雙筒鏡可辨，伴Spica星。避免光污染，捕捉其閃爍橙光。";break;case"金星":r="稍難（晨前低空）",s="日出前東南低空，約6:18升起",o="金星漸沉入晨曦，亮度-3.9等但僅7°離太陽。日出前1小時尋東南地平線，需無阻視野。雙筒鏡助辨其新月相，預告1月合日，錯過後數月難見。";break;case"地球":return`【2025年12月8日香港觀測建議（模擬）】

1. 觀測狀況：身在其中
2. 時間方位：N/A
3. 亮度預估：N/A
4. 專業建議：今日空氣品質指標 (AQI) 與光害程度將決定觀測品質。建議前往視野開闊且光害較少處仰望星空，感受地球在宇宙中的渺小。`;case"月球":r="極佳（上弦後一天）",s="下午1:20升起，日落後東南高空，整夜可見",o="今晚農曆十一（上弦後1日），月齡10.8天，亮度-12.2等，約70%照亮。最佳觀測時段：晚上8點至凌晨。香港時間20:30左右，月球位於雙魚座，與土星同框，超美合影機會！";break;case"火星":r="極難（日間或暮光）",s="日出前東方低空，約7:31升起，日沒後西沉",o="火星陷太陽光輝，亮度1.3等，距太陽僅10°。全天幾乎不可見，僅專業濾鏡或望遠鏡在暮光試探。待2026春季再現，現階段專注其雙子座位置預測軌跡。";break;case"木星":r="極佳（整夜高懸）",s="日落後東北升起，整夜可見，約8:21升起",o="木星位雙子座，亮度-2.5等，視直徑大。望遠鏡觀伽利略衛星凌日事件頻仍，雲帶清晰。1月10日衝日後更佳，現為冬季王者，伴Castor & Pollux雙星閃耀。";break;case"木衛一":case"木衛二":case"木衛三":case"木衛四":r="極佳（需雙筒鏡）",s="日落後東北升起，整夜跟隨木星",o="四顆衛星每晚位置不同，猶如微型的太陽系。建議下載手機 App (如 Stellarium) 確認今晚排列。若見到衛星消失，可能是進入了木星影區 (食) 或正在經過木星表面 (凌)。";break;case"土星":r="良好（晚間南天）",s="下午1:08升起，日落後南方高空，至午夜西沉",o="土星在水瓶座，亮度0.9等，光環傾角-1.5°邊緣視。望遠鏡辨泰坦衛星及環隙，月球26日訪。早晚觀最佳，避免城市燈光，捕捉其金黃光輝。";break;case"土衛六":r="良好（需望遠鏡）",s="下午1:08升起，日落後南方高空",o="Titan亮度8.0等，距土星1.0角分，厚霧大氣橘橙。環邊緣傾角下易辨，望遠鏡見其點光。12月最佳期探測甲烷湖，伴土星環隙觀測。";break;case"天王星":r="中等（需儀器）",s="下午4:27升起，整夜東方至晨前西沉",o="天王星在金牛座，亮度5.6等，11月21日衝日後仍亮。雙筒鏡或小望遠鏡辨其青綠盤，距木星不遠可順道比對。暗空下掃描，留意其慢速逆行。";break;case"海王星":r="難（需望遠鏡）",s="下午1:18升起，晚間南方，至午夜西沉",o="海王星在雙魚座，亮度7.8等，伴土星3.5°內。8吋以上望遠鏡見其藍盤，搜尋星圖精準定位。專業者試探Triton衛星，暮光後1小時最佳，避免月光干擾。";break;default:r="資料分析中",s="請參考星圖",o="請確保觀測地點光害少、視野開闊。"}return`【2025年12月8日香港觀測建議（模擬）】

1. 觀測狀況：${r}
2. 時間方位：${s}
3. 專業建議：${o}`},FA=({planet:t,calculateRealPosition:e,earthRealPosition:n,onClose:i,showAxialTilt:r,onToggleAxialTilt:s})=>{const[o,a]=de.useState("intro"),[l,c]=de.useState(""),[f,d]=de.useState(!1),[h,m]=de.useState(!1),v=de.useRef(null),[x,p]=Xl.useMemo(()=>{var S;const D=t.description.split("【冷知識】");return[D[0].trim(),(S=D[1])==null?void 0:S.trim()]},[t.description]),u=D=>{let S=Math.atan2(D.y,D.x)*(180/Math.PI);return S<0&&(S+=360),S},g=()=>{if(t.id==="sun"||t.id==="earth")return"";if(t.id==="moon")return"模型幾何計算參考: 月相隨地月日相對位置而變化";const D=e(t.id),S=n,T=u(D),B=u(S);let $=T-B;$<0&&($+=360);const re=t.orbitRadius<2490;let I="";if(re){const G=-S.x,q=-S.y,K=D.x-S.x,N=D.y-S.y;G*N-q*K>0?I="東大距側 (昏星/日落後可見)":I="西大距側 (晨星/日出前可見)"}else Math.abs($-180)<20?I="衝 (Opposition) - 整夜可見，最亮":$<20||$>340?I="合 (Conjunction) - 接近太陽，不可見":I="一般觀測期";return`模型幾何計算參考: 行星位於太陽${I}`},_=()=>t.parentId==="jupiter"?"(對木星赤道)":t.parentId==="saturn"?"(對土星赤道)":"(對黃道)",y=D=>{if(D===0)return"0";const S=D.toString();return S.includes(".")?S.split(".")[1].length<2?D.toFixed(2):S:D.toFixed(2)};de.useEffect(()=>{c(""),d(!1),m(!1),a("intro"),v.current&&(v.current.scrollTop=0)},[t.id]),de.useEffect(()=>{v.current&&(v.current.scrollTop=0)},[o]);const C=()=>{m(!0),d(!0);const D=new Date().toLocaleDateString("zh-HK",{year:"numeric",month:"long",day:"numeric"}),S=g();OA(t.name,D,S).then(T=>{c(T),d(!1)})},R=({label:D,value:S,isLast:T=!1,action:B})=>j.jsxs("div",{className:`flex justify-between py-4 mr-5 ml-5 ${T?"":"border-b border-slate-800"}`,children:[j.jsx("span",{className:"text-sm font-medium text-slate-400 tracking-wide break-keep pr-3",children:D}),j.jsxs("div",{className:"flex md:flex-wrap-reverse text-right items-center gap-3 ml-auto",children:[B,j.jsx("span",{className:"text-sm font-mono font-bold text-slate-300 text-right ml-auto",children:S})]})]}),A=t.id!=="earth"&&t.id!=="sun";return j.jsxs("div",{className:"w-full font-sans h-full relative flex flex-col overflow-hidden",children:[j.jsxs("div",{className:"flex-shrink-0 z-30 bg-slate-950 border-b border-slate-800/50 pt-0 md:pt-6 shadow-2xl transition-all duration-300 relative",children:[j.jsxs("div",{className:`hidden md:flex flex-col gap-5 px-6 ${A?"mb-5":""}`,children:[j.jsxs("button",{onClick:i,className:"flex items-center gap-2 text-slate-400 hover:text-white transition-colors group w-max",children:[j.jsx("div",{className:"flex items-center justify-center rounded-full shadow-md transition-all duration-300",children:j.jsx(lA,{size:20})}),j.jsx("span",{className:"text-sm font-bold uppercase tracking-wide",children:"返回"})]}),j.jsxs("div",{children:[j.jsx("h2",{className:"text-xl font-bold text-slate-200 flex items-center gap-3 leading-7",children:j.jsx("span",{children:t.name})}),j.jsx("p",{className:"text-indigo-400 text-sm font-bold uppercase tracking-widest mt-1.5",children:t.type==="terrestrial"?"類地行星":t.type==="gas"?"氣態巨行星":t.type==="ice"?"冰巨行星":t.type==="moon"?"衛星":"恆星"})]})]}),A&&j.jsx("div",{className:"hidden md:block w-full h-px bg-slate-800/50"}),A&&j.jsxs("div",{className:"relative flex w-full",children:[j.jsxs("button",{onClick:()=>a("intro"),className:`flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 ${o==="intro"?"text-indigo-400":"text-slate-400 hover:text-slate-300"}`,children:[j.jsx(uA,{size:16,className:`transition-opacity duration-300 ${o==="intro"?"opacity-100":"opacity-70"}`}),"簡介"]}),j.jsxs("button",{onClick:()=>a("observation"),className:`flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 ${o==="observation"?"text-indigo-400":"text-slate-400 hover:text-slate-300"}`,children:[j.jsx(km,{size:16,className:`transition-opacity duration-300 ${o==="observation"?"opacity-100":"opacity-70"}`}),"觀測指南"]}),j.jsx("div",{className:"absolute bottom-0 h-[2px] bg-indigo-500 transition-all duration-300 ease-out shadow-[0_-1px_6px_rgba(99,102,241,0.5)]",style:{left:o==="intro"?"0%":"50%",width:"50%"}})]}),!A&&j.jsx("div",{className:"hidden md:block pb-5"})]}),j.jsxs("div",{ref:v,className:"flex-1 overflow-y-auto custom-scrollbar px-6 pb-8 pt-6 [scrollbar-gutter:stable] animate-in fade-in slide-in-from-bottom-2 duration-500",children:[o==="intro"&&j.jsxs("div",{className:"space-y-8",children:[j.jsxs("div",{className:"space-y-6",children:[j.jsx("p",{className:"text-slate-300 text-sm font-normal leading-6 text-justify whitespace-pre-line",children:x}),p&&j.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-br from-indigo-950/40 to-purple-900/10 border border-indigo-500/30 rounded-xl p-5 shadow-inner",children:[j.jsx("div",{className:"absolute -bottom-4 -right-4 text-indigo-500/5 transform rotate-12 pointer-events-none",children:j.jsx(Fm,{size:100})}),j.jsxs("div",{className:"relative z-10 space-y-2",children:[j.jsxs("h4",{className:"text-sm text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2",children:[j.jsx(Fm,{size:14,className:"text-indigo-400"}),"星際冷知識"]}),j.jsx("p",{className:"text-slate-300 text-sm font-normal leading-6 text-justify",children:p})]})]})]}),j.jsx("div",{children:j.jsxs("div",{className:"bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden",children:[t.id!=="sun"&&j.jsx(R,{label:"公轉週期",value:t.period===0?"N/A":`${t.period} 年`}),j.jsx(R,{label:"自轉週期",value:t.rotationPeriod}),j.jsx(R,{label:"轉軸傾角",value:`${y(t.axialTilt)}°`,action:t.id!=="sun"&&t.axialTilt>=1?j.jsx("button",{onClick:D=>{D.stopPropagation(),s()},className:`px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs font-medium border ml-auto -mt-1 -mb-1 ${r?"bg-indigo-600 text-white border-transparent shadow-[0_0_10px_rgba(79,70,229,0.5)]":"bg-slate-800 text-slate-300 border-slate-700 hover:text-indigo-400 hover:border-indigo-500/50"}`,title:r?"隱藏轉軸":"顯示轉軸",children:j.jsx("span",{children:r?"隱藏轉軸":"顯示轉軸"})}):void 0}),t.id!=="sun"&&j.jsx(R,{label:"軌道傾角",value:`${y(t.inclination)}° ${_()}`}),t.volume&&j.jsx(R,{label:"體積",value:t.volume}),t.mass&&j.jsx(R,{label:"質量",value:t.mass}),j.jsx(R,{label:"表面溫度",value:t.temperature}),t.gravity&&j.jsx(R,{label:"表面重力",value:t.gravity}),t.id!=="earth"&&j.jsx(R,{label:"視星等",value:t.magnitude}),t.type!=="moon"&&t.id!=="sun"&&j.jsx(R,{label:"已知衛星數目",value:t.moons,isLast:!0})]})})]}),o==="observation"&&A&&j.jsxs("div",{className:"space-y-8",children:[j.jsx("div",{children:t.observationInfo?j.jsx("p",{className:"text-slate-300 text-sm font-normal leading-6 text-justify whitespace-pre-line",children:t.observationInfo}):j.jsx("p",{className:"text-slate-400 italic",children:"暫無詳細觀測資料。"})}),j.jsx("div",{children:h?f?j.jsxs("div",{className:"flex flex-col items-center gap-3 text-slate-300 text-sm py-8 justify-center bg-slate-950/50 rounded-xl border border-slate-800/50",children:[j.jsx(xA,{className:"animate-spin text-indigo-400",size:24}),j.jsx("span",{children:"正在分析天體位置與實時數據..."})]}):j.jsxs("div",{className:"text-sm text-slate-300 space-y-3 whitespace-pre-wrap leading-6 animate-in fade-in slide-in-from-bottom-2 bg-slate-950/50 p-5 rounded-xl border border-slate-800/60",children:[l,j.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/50 text-xs text-slate-400 text-right flex items-center justify-end gap-1.5",children:[j.jsx(RA,{size:14,className:"text-indigo-400"}),j.jsx("span",{children:"Powered by AI (demo only)"})]})]}):j.jsxs("button",{onClick:C,className:"w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-slate-200 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 active:scale-[0.98]",children:[j.jsx(km,{size:18}),"獲取今日香港觀測詳情"]})})]})]})]})},kA=Xl.memo(FA),wu=({p:t,onClick:e})=>{var r;const n=((r=t.name.split("(")[1])==null?void 0:r.replace(")",""))||"",i=t.name.split(" ")[0];return j.jsxs("button",{onClick:()=>e(t.id),className:"group relative flex flex-col justify-center p-3 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden text-left shadow-sm hover:shadow-lg hover:shadow-indigo-900/20",children:[j.jsxs("div",{className:"flex items-center gap-3 relative z-10",children:[j.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500 border border-white/10",style:{background:`radial-gradient(circle at 30% 30%, ${t.color}, #1a1a1a)`,boxShadow:`0 0 10px ${t.color}40`}}),j.jsxs("div",{className:"flex flex-col min-w-0",children:[j.jsx("span",{className:"text-sm font-bold text-slate-200 group-hover:text-white truncate",children:i}),j.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-300 transition-colors truncate",children:n})]})]}),j.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/10 transition-all duration-500"})]})},zA=()=>{const[t,e]=de.useState(!0),[n,i]=de.useState(625e-6),[r,s]=de.useState(0),[o,a]=de.useState(0),[l,c]=de.useState(null),[f,d]=de.useState(!0),[h,m]=de.useState(0),[v,x]=de.useState(!1),[p,u]=de.useState(null),[g,_]=de.useState(!1),y=de.useRef(null),C=de.useRef(void 0),R=de.useRef(n),A=de.useRef(t),D=de.useRef(null),S=de.useRef(null),T=de.useRef(null);de.useEffect(()=>{R.current=n},[n]),de.useEffect(()=>{A.current=t},[t]),de.useEffect(()=>{if(l){const ue=$t.find(Te=>Te.id===l)||null;ue&&u(ue),_(!1)}else T.current&&(T.current.scrollTop=0,requestAnimationFrame(()=>{T.current&&(T.current.scrollTop=0)}));x(!1)},[l]),de.useEffect(()=>{const ue=new Date("2000-01-01T12:00:00Z").getTime(),O=(new Date().getTime()-ue)/(1e3*60*60*24);a(O)},[]);const B=de.useCallback((ue,Te)=>{let O=ue;const at=1e-6;for(let be=0;be<5;be++){const Ne=O-Te*Math.sin(O)-ue,Se=1-Te*Math.cos(O);if(O=O-Ne/Se,Math.abs(Ne)<at)break}return O},[]),$=de.useCallback((ue,Te)=>{const O=$t.find(nt=>nt.id===ue);if(O.id==="sun")return{id:O.id,x:0,y:0,z:0,scale:1,angle:0,distanceFromSun:0};const at=O.period*365.25,Ne=2*Math.PI/at*Te,Se=B(Ne,O.eccentricity),ot=O.orbitRadius,He=O.eccentricity,b=ot*Math.sqrt(1-He*He),M=ot*(Math.cos(Se)-He),z=b*Math.sin(Se),ae=O.orbitAngle*Math.PI/180,se=M*Math.cos(ae)-z*Math.sin(ae),le=M*Math.sin(ae)+z*Math.cos(ae),we=Math.atan2(le,se),ge=O.inclination*Math.PI/180,xe=O.orbitRadius*Math.sin(ge)*Math.sin(we);let De=se,Ve=xe,oe=le;return{id:O.id,x:De,y:Ve,z:oe,scale:1,angle:we,distanceFromSun:Math.sqrt(De*De+oe*oe)}},[B]),re=$t.map(ue=>$(ue.id,r)),I=de.useCallback(ue=>{if(C.current!==void 0){const Te=ue-C.current;A.current&&s(O=>O+Te*R.current*.5)}C.current=ue,y.current=requestAnimationFrame(I)},[]);de.useEffect(()=>(y.current=requestAnimationFrame(I),()=>{y.current&&cancelAnimationFrame(y.current)}),[I]);const G=ue=>{c(ue),_(!1)},q=ue=>{c(ue),_(!1)},K=()=>{c(null),m(ue=>ue+1),_(!1)},N=de.useCallback(()=>{x(ue=>!ue)},[]),H=de.useCallback(()=>{c(null)},[]),V=de.useCallback(ue=>{const Te=$(ue,o),O=$t.find(at=>at.id===ue);if(O!=null&&O.parentId){const at=$(O.parentId,o);return{...Te,x:Te.x+at.x,y:Te.y+at.y,z:Te.z+at.z}}return Te},[$,o]),ee=de.useMemo(()=>$("earth",o),[$,o]),ie=de.useMemo(()=>$t.filter(ue=>ue.type==="star"),[]),k=de.useMemo(()=>$t.filter(ue=>["terrestrial","gas","ice"].includes(ue.type)),[]),Z=de.useMemo(()=>$t.filter(ue=>ue.type==="moon"),[]),ce=de.useMemo(()=>l?p?p.name:"Loading...":"選擇天體",[l,p]),_e=de.useMemo(()=>!l||!p?"Default":p.type==="terrestrial"?"類地行星":p.type==="gas"?"氣態巨行星":p.type==="ice"?"冰巨行星":p.type==="moon"?"衛星":"恆星",[l,p]),ve=l?"5.5rem":"3.5rem",Oe=g?"h-[70dvh]":l?"h-[5.5rem]":"h-[3.5rem]",Ie=g?"calc(70dvh + 24px)":`calc(${ve} + 24px)`;return j.jsxs("div",{className:"w-full h-[100dvh] flex flex-col md:flex-row bg-[#020617] overflow-hidden text-slate-100 font-sans relative",children:[j.jsxs("aside",{ref:D,className:`
          flex flex-col
          bg-slate-950/95 backdrop-blur-xl border-slate-800 shadow-2xl
          transition-all duration-300 ease-in-out z-[200]
          
          md:relative md:w-auto md:min-w-[256px] lg:w-[385px] md:border-r md:rounded-none md:translate-y-0
          
          fixed bottom-0 left-0 right-0 w-full border-t
          ${Oe} md:h-full
        `,children:[j.jsxs("div",{className:`md:hidden flex items-center justify-between px-6 bg-slate-900/80 border-b border-slate-800 cursor-pointer touch-none transition-all duration-300 ${l?"h-24 py-4":"h-14 py-3"}`,onClick:()=>_(!g),children:[j.jsxs("div",{className:"flex flex-col justify-center gap-1",children:[j.jsx("span",{className:`${l?"text-xl font-bold text-slate-200":"text-base font-bold text-slate-300"}`,children:ce}),l&&j.jsx("span",{className:"text-indigo-400 text-sm font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-2",children:_e})]}),j.jsx("div",{className:"text-slate-400",children:g?j.jsx(dA,{size:20}):j.jsx(pA,{size:20})})]}),j.jsxs("div",{className:"relative w-full flex-1 overflow-hidden",children:[j.jsx("div",{ref:T,className:`
                    absolute inset-0 w-full h-full overflow-y-auto custom-scrollbar px-6 pt-2 md:pt-6 pb-8
                    transition-all duration-500 ease-in-out will-change-transform backface-hidden
                    ${l?"-translate-x-[20%] opacity-0 pointer-events-none":"translate-x-0 opacity-100 pointer-events-auto"}
                `,style:{backfaceVisibility:"hidden"},children:j.jsxs("div",{className:"flex flex-col min-h-full",children:[j.jsxs("header",{className:"mb-8 mt-4 md:mt-0 flex-shrink-0 hidden md:block",children:[j.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-wide",children:"ORBITAL"}),j.jsx("p",{className:"text-sm text-slate-400 font-medium tracking-wide",children:"3D Solar Explorer"})]}),j.jsx("div",{className:"md:hidden h-4"}),j.jsxs("div",{className:"flex-grow flex flex-col",children:[ie.length>0&&j.jsxs("div",{className:"mb-8 flex-shrink-0",children:[j.jsx("div",{className:"flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2",children:j.jsx("span",{className:"text-sm font-bold text-slate-400 uppercase tracking-widest",children:"恆星 (Stars)"})}),j.jsx("div",{className:"grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3",children:ie.map(ue=>j.jsx(wu,{p:ue,onClick:q},ue.id))})]}),k.length>0&&j.jsxs("div",{className:"mb-8 flex-shrink-0",children:[j.jsx("div",{className:"flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2",children:j.jsx("span",{className:"text-sm font-bold text-slate-400 uppercase tracking-widest",children:"行星 (Planets)"})}),j.jsx("div",{className:"grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3",children:k.map(ue=>j.jsx(wu,{p:ue,onClick:q},ue.id))})]}),Z.length>0&&j.jsxs("div",{className:"mb-8 flex-shrink-0",children:[j.jsx("div",{className:"flex items-center gap-2 mb-3 border-b border-slate-800/50 pb-2",children:j.jsx("span",{className:"text-sm font-bold text-slate-400 uppercase tracking-widest",children:"衛星 (Moons)"})}),j.jsx("div",{className:"grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3",children:Z.map(ue=>j.jsx(wu,{p:ue,onClick:q},ue.id))})]})]})]})}),j.jsx("div",{ref:S,className:`
                    absolute inset-0 w-full h-full bg-slate-950/95
                    transition-all duration-500 ease-in-out will-change-transform backface-hidden overflow-hidden
                    ${l?"translate-x-0 opacity-100 pointer-events-auto":"translate-x-full opacity-0 pointer-events-none"}
                `,style:{backfaceVisibility:"hidden"},children:p&&j.jsx(kA,{planet:p,calculateRealPosition:V,earthRealPosition:ee,onClose:H,showAxialTilt:v,onToggleAxialTilt:N})})]})]}),j.jsxs("main",{className:"flex-1 min-w-0 h-full relative bg-[#000000]",children:[j.jsx(tA,{positions:re,selectedPlanetId:l,onSelectPlanet:G,showOrbits:f,solveKepler:B,speed:n,cameraResetTrigger:h,showAxialTilt:v}),j.jsx(UA,{isPlaying:t,onTogglePlay:()=>e(!t),speed:n,onSpeedChange:i,onResetCamera:K,showOrbits:f,onToggleOrbits:()=>d(!f),mobileBottomOffset:Ie})]})]})},k_=document.getElementById("root");if(!k_)throw new Error("Could not find root element to mount to");const BA=Au.createRoot(k_);BA.render(j.jsx(Xl.StrictMode,{children:j.jsx(zA,{})}));
