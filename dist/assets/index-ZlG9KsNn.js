(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var wp={exports:{}},jl={},Tp={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function US(){if(Iv)return Le;Iv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,q={};function B(L,$,de){this.props=L,this.context=$,this.refs=q,this.updater=de||D}B.prototype.isReactComponent={},B.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},B.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function J(){}J.prototype=B.prototype;function re(L,$,de){this.props=L,this.context=$,this.refs=q,this.updater=de||D}var ae=re.prototype=new J;ae.constructor=re,V(ae,B.prototype),ae.isPureReactComponent=!0;var pe=Array.isArray,Me=Object.prototype.hasOwnProperty,we={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function A(L,$,de){var Ne,xe={},be=null,fe=null;if($!=null)for(Ne in $.ref!==void 0&&(fe=$.ref),$.key!==void 0&&(be=""+$.key),$)Me.call($,Ne)&&!O.hasOwnProperty(Ne)&&(xe[Ne]=$[Ne]);var Be=arguments.length-2;if(Be===1)xe.children=de;else if(1<Be){for(var je=Array(Be),Dt=0;Dt<Be;Dt++)je[Dt]=arguments[Dt+2];xe.children=je}if(L&&L.defaultProps)for(Ne in Be=L.defaultProps,Be)xe[Ne]===void 0&&(xe[Ne]=Be[Ne]);return{$$typeof:n,type:L,key:be,ref:fe,props:xe,_owner:we.current}}function S(L,$){return{$$typeof:n,type:L.type,key:$,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function k(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(de){return $[de]})}var N=/\/+/g;function C(L,$){return typeof L=="object"&&L!==null&&L.key!=null?k(""+L.key):$.toString(36)}function me(L,$,de,Ne,xe){var be=typeof L;(be==="undefined"||be==="boolean")&&(L=null);var fe=!1;if(L===null)fe=!0;else switch(be){case"string":case"number":fe=!0;break;case"object":switch(L.$$typeof){case n:case e:fe=!0}}if(fe)return fe=L,xe=xe(fe),L=Ne===""?"."+C(fe,0):Ne,pe(xe)?(de="",L!=null&&(de=L.replace(N,"$&/")+"/"),me(xe,$,de,"",function(Dt){return Dt})):xe!=null&&(R(xe)&&(xe=S(xe,de+(!xe.key||fe&&fe.key===xe.key?"":(""+xe.key).replace(N,"$&/")+"/")+L)),$.push(xe)),1;if(fe=0,Ne=Ne===""?".":Ne+":",pe(L))for(var Be=0;Be<L.length;Be++){be=L[Be];var je=Ne+C(be,Be);fe+=me(be,$,de,je,xe)}else if(je=T(L),typeof je=="function")for(L=je.call(L),Be=0;!(be=L.next()).done;)be=be.value,je=Ne+C(be,Be++),fe+=me(be,$,de,je,xe);else if(be==="object")throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return fe}function Re(L,$,de){if(L==null)return L;var Ne=[],xe=0;return me(L,Ne,"","",function(be){return $.call(de,be,xe++)}),Ne}function Ke(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(de){(L._status===0||L._status===-1)&&(L._status=1,L._result=de)},function(de){(L._status===0||L._status===-1)&&(L._status=2,L._result=de)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var Te={current:null},Y={transition:null},ge={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Y,ReactCurrentOwner:we};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Re,forEach:function(L,$,de){Re(L,function(){$.apply(this,arguments)},de)},count:function(L){var $=0;return Re(L,function(){$++}),$},toArray:function(L){return Re(L,function($){return $})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Le.Component=B,Le.Fragment=t,Le.Profiler=s,Le.PureComponent=re,Le.StrictMode=r,Le.Suspense=f,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Le.act=ie,Le.cloneElement=function(L,$,de){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ne=V({},L.props),xe=L.key,be=L.ref,fe=L._owner;if($!=null){if($.ref!==void 0&&(be=$.ref,fe=we.current),$.key!==void 0&&(xe=""+$.key),L.type&&L.type.defaultProps)var Be=L.type.defaultProps;for(je in $)Me.call($,je)&&!O.hasOwnProperty(je)&&(Ne[je]=$[je]===void 0&&Be!==void 0?Be[je]:$[je])}var je=arguments.length-2;if(je===1)Ne.children=de;else if(1<je){Be=Array(je);for(var Dt=0;Dt<je;Dt++)Be[Dt]=arguments[Dt+2];Ne.children=Be}return{$$typeof:n,type:L.type,key:xe,ref:be,props:Ne,_owner:fe}},Le.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},Le.createElement=A,Le.createFactory=function(L){var $=A.bind(null,L);return $.type=L,$},Le.createRef=function(){return{current:null}},Le.forwardRef=function(L){return{$$typeof:d,render:L}},Le.isValidElement=R,Le.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Ke}},Le.memo=function(L,$){return{$$typeof:m,type:L,compare:$===void 0?null:$}},Le.startTransition=function(L){var $=Y.transition;Y.transition={};try{L()}finally{Y.transition=$}},Le.unstable_act=ie,Le.useCallback=function(L,$){return Te.current.useCallback(L,$)},Le.useContext=function(L){return Te.current.useContext(L)},Le.useDebugValue=function(){},Le.useDeferredValue=function(L){return Te.current.useDeferredValue(L)},Le.useEffect=function(L,$){return Te.current.useEffect(L,$)},Le.useId=function(){return Te.current.useId()},Le.useImperativeHandle=function(L,$,de){return Te.current.useImperativeHandle(L,$,de)},Le.useInsertionEffect=function(L,$){return Te.current.useInsertionEffect(L,$)},Le.useLayoutEffect=function(L,$){return Te.current.useLayoutEffect(L,$)},Le.useMemo=function(L,$){return Te.current.useMemo(L,$)},Le.useReducer=function(L,$,de){return Te.current.useReducer(L,$,de)},Le.useRef=function(L){return Te.current.useRef(L)},Le.useState=function(L){return Te.current.useState(L)},Le.useSyncExternalStore=function(L,$,de){return Te.current.useSyncExternalStore(L,$,de)},Le.useTransition=function(){return Te.current.useTransition()},Le.version="18.3.1",Le}var Cv;function Vm(){return Cv||(Cv=1,Tp.exports=US()),Tp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function jS(){if(Sv)return jl;Sv=1;var n=Vm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,E={},T=null,D=null;m!==void 0&&(T=""+m),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(D=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:D,props:E,_owner:s.current}}return jl.Fragment=t,jl.jsx=u,jl.jsxs=u,jl}var Rv;function zS(){return Rv||(Rv=1,wp.exports=jS()),wp.exports}var x=zS(),ke=Vm(),oh={},Ip={exports:{}},En={},Cp={exports:{}},Sp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function BS(){return Av||(Av=1,function(n){function e(Y,ge){var ie=Y.length;Y.push(ge);e:for(;0<ie;){var L=ie-1>>>1,$=Y[L];if(0<s($,ge))Y[L]=ge,Y[ie]=$,ie=L;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ge=Y[0],ie=Y.pop();if(ie!==ge){Y[0]=ie;e:for(var L=0,$=Y.length,de=$>>>1;L<de;){var Ne=2*(L+1)-1,xe=Y[Ne],be=Ne+1,fe=Y[be];if(0>s(xe,ie))be<$&&0>s(fe,xe)?(Y[L]=fe,Y[be]=ie,L=be):(Y[L]=xe,Y[Ne]=ie,L=Ne);else if(be<$&&0>s(fe,ie))Y[L]=fe,Y[be]=ie,L=be;else break e}}return ge}function s(Y,ge){var ie=Y.sortIndex-ge.sortIndex;return ie!==0?ie:Y.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,E=null,T=3,D=!1,V=!1,q=!1,B=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(Y){for(var ge=t(m);ge!==null;){if(ge.callback===null)r(m);else if(ge.startTime<=Y)r(m),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(m)}}function pe(Y){if(q=!1,ae(Y),!V)if(t(f)!==null)V=!0,Ke(Me);else{var ge=t(m);ge!==null&&Te(pe,ge.startTime-Y)}}function Me(Y,ge){V=!1,q&&(q=!1,J(A),A=-1),D=!0;var ie=T;try{for(ae(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||Y&&!k());){var L=E.callback;if(typeof L=="function"){E.callback=null,T=E.priorityLevel;var $=L(E.expirationTime<=ge);ge=n.unstable_now(),typeof $=="function"?E.callback=$:E===t(f)&&r(f),ae(ge)}else r(f);E=t(f)}if(E!==null)var de=!0;else{var Ne=t(m);Ne!==null&&Te(pe,Ne.startTime-ge),de=!1}return de}finally{E=null,T=ie,D=!1}}var we=!1,O=null,A=-1,S=5,R=-1;function k(){return!(n.unstable_now()-R<S)}function N(){if(O!==null){var Y=n.unstable_now();R=Y;var ge=!0;try{ge=O(!0,Y)}finally{ge?C():(we=!1,O=null)}}else we=!1}var C;if(typeof re=="function")C=function(){re(N)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Re=me.port2;me.port1.onmessage=N,C=function(){Re.postMessage(null)}}else C=function(){B(N,0)};function Ke(Y){O=Y,we||(we=!0,C())}function Te(Y,ge){A=B(function(){Y(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){V||D||(V=!0,Ke(Me))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var ie=T;T=ge;try{return Y()}finally{T=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,ge){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ie=T;T=Y;try{return ge()}finally{T=ie}},n.unstable_scheduleCallback=function(Y,ge,ie){var L=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?L+ie:L):ie=L,Y){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ie+$,Y={id:v++,callback:ge,priorityLevel:Y,startTime:ie,expirationTime:$,sortIndex:-1},ie>L?(Y.sortIndex=ie,e(m,Y),t(f)===null&&Y===t(m)&&(q?(J(A),A=-1):q=!0,Te(pe,ie-L))):(Y.sortIndex=$,e(f,Y),V||D||(V=!0,Ke(Me))),Y},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(Y){var ge=T;return function(){var ie=T;T=ge;try{return Y.apply(this,arguments)}finally{T=ie}}}}(Sp)),Sp}var Pv;function WS(){return Pv||(Pv=1,Cp.exports=BS()),Cp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function qS(){if(kv)return En;kv=1;var n=Vm(),e=WS();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)r.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function T(i){return f.call(E,i)?!0:f.call(v,i)?!1:m.test(i)?E[i]=!0:(v[i]=!0,!1)}function D(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function V(i,o,l,h){if(o===null||typeof o>"u"||D(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function q(i,o,l,h,p,_,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=_,this.removeEmptyString=w}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){B[i]=new q(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];B[o]=new q(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){B[i]=new q(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){B[i]=new q(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){B[i]=new q(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){B[i]=new q(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){B[i]=new q(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){B[i]=new q(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){B[i]=new q(i,5,!1,i.toLowerCase(),null,!1,!1)});var J=/[\-:]([a-z])/g;function re(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(J,re);B[o]=new q(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(J,re);B[o]=new q(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(J,re);B[o]=new q(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){B[i]=new q(i,1,!1,i.toLowerCase(),null,!1,!1)}),B.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){B[i]=new q(i,1,!1,i.toLowerCase(),null,!0,!0)});function ae(i,o,l,h){var p=B.hasOwnProperty(o)?B[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(V(o,l,p,h)&&(l=null),h||p===null?T(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var pe=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Me=Symbol.for("react.element"),we=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ge(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var ie=Object.assign,L;function $(i){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+i}var de=!1;function Ne(i,o){if(!i||de)return"";de=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(z){var h=z}Reflect.construct(i,[],o)}else{try{o.call()}catch(z){h=z}i.call(o.prototype)}else{try{throw Error()}catch(z){h=z}i()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var p=z.stack.split(`
`),_=h.stack.split(`
`),w=p.length-1,P=_.length-1;1<=w&&0<=P&&p[w]!==_[P];)P--;for(;1<=w&&0<=P;w--,P--)if(p[w]!==_[P]){if(w!==1||P!==1)do if(w--,P--,0>P||p[w]!==_[P]){var b=`
`+p[w].replace(" at new "," at ");return i.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",i.displayName)),b}while(1<=w&&0<=P);break}}}finally{de=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?$(i):""}function xe(i){switch(i.tag){case 5:return $(i.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return i=Ne(i.type,!1),i;case 11:return i=Ne(i.type.render,!1),i;case 1:return i=Ne(i.type,!0),i;default:return""}}function be(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case we:return"Portal";case S:return"Profiler";case A:return"StrictMode";case C:return"Suspense";case me:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case N:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Re:return o=i.displayName||null,o!==null?o:be(i.type)||"Memo";case Ke:o=i._payload,i=i._init;try{return be(i(o))}catch{}}return null}function fe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(o);case 8:return o===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Be(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function je(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Dt(i){var o=je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,_.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Vr(i){i._valueTracker||(i._valueTracker=Dt(i))}function po(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=je(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function gi(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function _s(i,o){var l=o.checked;return ie({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function mo(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Be(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function $a(i,o){o=o.checked,o!=null&&ae(i,"checked",o,!1)}function Ga(i,o){$a(i,o);var l=Be(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?go(i,o.type,l):o.hasOwnProperty("defaultValue")&&go(i,o.type,Be(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Hu(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function go(i,o,l){(o!=="number"||gi(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Fr=Array.isArray;function Ur(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Be(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Ka(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function _o(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Fr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Be(l)}}function yo(i,o){var l=Be(o.value),h=Be(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function Qa(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function At(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?At(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var jr,Ya=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=jr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function _i(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vs=["Webkit","ms","Moz","O"];Object.keys(ys).forEach(function(i){vs.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ys[o]=ys[i]})});function Xa(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ys.hasOwnProperty(i)&&ys[i]?(""+o).trim():o+"px"}function Ja(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Xa(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Za=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(i,o){if(o){if(Za[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function tl(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Es=null;function vo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Eo=null,Ln=null,gr=null;function wo(i){if(i=Sl(i)){if(typeof Eo!="function")throw Error(t(280));var o=i.stateNode;o&&(o=wc(o),Eo(i.stateNode,i.type,o))}}function _r(i){Ln?gr?gr.push(i):gr=[i]:Ln=i}function nl(){if(Ln){var i=Ln,o=gr;if(gr=Ln=null,wo(i),o)for(i=0;i<o.length;i++)wo(o[i])}}function ws(i,o){return i(o)}function rl(){}var zr=!1;function il(i,o,l){if(zr)return i(o,l);zr=!0;try{return ws(i,o,l)}finally{zr=!1,(Ln!==null||gr!==null)&&(rl(),nl())}}function gt(i,o){var l=i.stateNode;if(l===null)return null;var h=wc(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var To=!1;if(d)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){To=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{To=!1}function Ts(i,o,l,h,p,_,w,P,b){var z=Array.prototype.slice.call(arguments,3);try{o.apply(l,z)}catch(Q){this.onError(Q)}}var Is=!1,Io=null,Qn=!1,sl=null,Kd={onError:function(i){Is=!0,Io=i}};function Co(i,o,l,h,p,_,w,P,b){Is=!1,Io=null,Ts.apply(Kd,arguments)}function $u(i,o,l,h,p,_,w,P,b){if(Co.apply(this,arguments),Is){if(Is){var z=Io;Is=!1,Io=null}else throw Error(t(198));Qn||(Qn=!0,sl=z)}}function Yn(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Cs(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Xn(i){if(Yn(i)!==i)throw Error(t(188))}function Gu(i){var o=i.alternate;if(!o){if(o=Yn(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Xn(p),i;if(_===h)return Xn(p),o;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=_;else{for(var w=!1,P=p.child;P;){if(P===l){w=!0,l=p,h=_;break}if(P===h){w=!0,h=p,l=_;break}P=P.sibling}if(!w){for(P=_.child;P;){if(P===l){w=!0,l=_,h=p;break}if(P===h){w=!0,h=_,l=p;break}P=P.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function ol(i){return i=Gu(i),i!==null?So(i):null}function So(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=So(i);if(o!==null)return o;i=i.sibling}return null}var Ro=e.unstable_scheduleCallback,al=e.unstable_cancelCallback,Ku=e.unstable_shouldYield,Qd=e.unstable_requestPaint,rt=e.unstable_now,Qu=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,yi=e.unstable_UserBlockingPriority,Vn=e.unstable_NormalPriority,ll=e.unstable_LowPriority,Yu=e.unstable_IdlePriority,Rs=null,Sn=null;function Xu(i){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Rs,i,void 0,(i.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Zu,ul=Math.log,Ju=Math.LN2;function Zu(i){return i>>>=0,i===0?32:31-(ul(i)/Ju|0)|0}var Ao=64,Po=4194304;function vi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function As(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var P=w&~p;P!==0?h=vi(P):(_&=w,_!==0&&(h=vi(_)))}else w=l&~p,w!==0?h=vi(w):_!==0&&(h=vi(_));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,_=o&-o,p>=_||p===16&&(_&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-ln(o),p=1<<l,h|=i[l],o&=~p;return h}function Yd(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Br(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-ln(_),P=1<<w,b=p[w];b===-1?((P&l)===0||(P&h)!==0)&&(p[w]=Yd(P,o)):b<=o&&(i.expiredLanes|=P),_&=~P}}function Rn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ps(){var i=Ao;return Ao<<=1,(Ao&4194240)===0&&(Ao=64),i}function Ei(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function wi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-ln(o),i[o]=l}function et(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ln(l),_=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~_}}function Ti(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-ln(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var We=0;function Ii(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ec,ko,tc,nc,rc,cl=!1,yr=[],qt=null,Jn=null,Zn=null,Ci=new Map,Fn=new Map,vr=[],Xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ic(i,o){switch(i){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Ci.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(o.pointerId)}}function fn(i,o,l,h,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[p]},o!==null&&(o=Sl(o),o!==null&&ko(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Jd(i,o,l,h,p){switch(o){case"focusin":return qt=fn(qt,i,o,l,h,p),!0;case"dragenter":return Jn=fn(Jn,i,o,l,h,p),!0;case"mouseover":return Zn=fn(Zn,i,o,l,h,p),!0;case"pointerover":var _=p.pointerId;return Ci.set(_,fn(Ci.get(_)||null,i,o,l,h,p)),!0;case"gotpointercapture":return _=p.pointerId,Fn.set(_,fn(Fn.get(_)||null,i,o,l,h,p)),!0}return!1}function sc(i){var o=Ds(i.target);if(o!==null){var l=Yn(o);if(l!==null){if(o=l.tag,o===13){if(o=Cs(l),o!==null){i.blockedOn=o,rc(i.priority,function(){tc(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Wr(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=xo(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Es=h,l.target.dispatchEvent(h),Es=null}else return o=Sl(l),o!==null&&ko(o),i.blockedOn=l,!1;o.shift()}return!0}function ks(i,o,l){Wr(i)&&l.delete(o)}function oc(){cl=!1,qt!==null&&Wr(qt)&&(qt=null),Jn!==null&&Wr(Jn)&&(Jn=null),Zn!==null&&Wr(Zn)&&(Zn=null),Ci.forEach(ks),Fn.forEach(ks)}function er(i,o){i.blockedOn===o&&(i.blockedOn=null,cl||(cl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,oc)))}function tr(i){function o(p){return er(p,i)}if(0<yr.length){er(yr[0],i);for(var l=1;l<yr.length;l++){var h=yr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(qt!==null&&er(qt,i),Jn!==null&&er(Jn,i),Zn!==null&&er(Zn,i),Ci.forEach(o),Fn.forEach(o),l=0;l<vr.length;l++)h=vr[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<vr.length&&(l=vr[0],l.blockedOn===null);)sc(l),l.blockedOn===null&&vr.shift()}var qr=pe.ReactCurrentBatchConfig,Si=!0;function ut(i,o,l,h){var p=We,_=qr.transition;qr.transition=null;try{We=1,hl(i,o,l,h)}finally{We=p,qr.transition=_}}function Zd(i,o,l,h){var p=We,_=qr.transition;qr.transition=null;try{We=4,hl(i,o,l,h)}finally{We=p,qr.transition=_}}function hl(i,o,l,h){if(Si){var p=xo(i,o,l,h);if(p===null)hf(i,o,h,xs,l),ic(i,h);else if(Jd(p,i,o,l,h))h.stopPropagation();else if(ic(i,h),o&4&&-1<Xd.indexOf(i)){for(;p!==null;){var _=Sl(p);if(_!==null&&ec(_),_=xo(i,o,l,h),_===null&&hf(i,o,h,xs,l),_===p)break;p=_}p!==null&&h.stopPropagation()}else hf(i,o,h,null,l)}}var xs=null;function xo(i,o,l,h){if(xs=null,i=vo(h),i=Ds(i),i!==null)if(o=Yn(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Cs(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return xs=i,null}function dl(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Ss:return 1;case yi:return 4;case Vn:case ll:return 16;case Yu:return 536870912;default:return 16}default:return 16}}var An=null,No=null,pn=null;function fl(){if(pn)return pn;var i,o=No,l=o.length,h,p="value"in An?An.value:An.textContent,_=p.length;for(i=0;i<l&&o[i]===p[i];i++);var w=l-i;for(h=1;h<=w&&o[l-h]===p[_-h];h++);return pn=p.slice(i,1<h?1-h:void 0)}function bo(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Er(){return!0}function pl(){return!1}function Ht(i){function o(l,h,p,_,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var P in i)i.hasOwnProperty(P)&&(l=i[P],this[P]=l?l(_):_[P]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Er:pl,this.isPropagationStopped=pl,this}return ie(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),o}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=Ht(nr),wr=ie({},nr,{view:0,detail:0}),ef=Ht(wr),Oo,Hr,Ri,Ns=ie({},wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ri&&(Ri&&i.type==="mousemove"?(Oo=i.screenX-Ri.screenX,Hr=i.screenY-Ri.screenY):Hr=Oo=0,Ri=i),Oo)},movementY:function(i){return"movementY"in i?i.movementY:Hr}}),Mo=Ht(Ns),ml=ie({},Ns,{dataTransfer:0}),ac=Ht(ml),Lo=ie({},wr,{relatedTarget:0}),Vo=Ht(Lo),lc=ie({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=Ht(lc),uc=ie({},nr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),cc=Ht(uc),hc=ie({},nr,{data:0}),gl=Ht(hc),Fo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fc(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=dc[i])?!!o[i]:!1}function Tr(){return fc}var c=ie({},wr,{key:function(i){if(i.key){var o=Fo[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=bo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?un[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(i){return i.type==="keypress"?bo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?bo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Ht(c),y=ie({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ht(y),F=ie({},wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),W=Ht(F),te=ie({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xe=Ht(te),kt=ie({},Ns,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=Ht(kt),Ot=[9,13,27,32],Et=d&&"CompositionEvent"in window,Un=null;d&&"documentMode"in document&&(Un=document.documentMode);var Pn=d&&"TextEvent"in window&&!Un,bs=d&&(!Et||Un&&8<Un&&11>=Un),Uo=" ",__=!1;function y_(i,o){switch(i){case"keyup":return Ot.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var jo=!1;function LC(i,o){switch(i){case"compositionend":return v_(o);case"keypress":return o.which!==32?null:(__=!0,Uo);case"textInput":return i=o.data,i===Uo&&__?null:i;default:return null}}function VC(i,o){if(jo)return i==="compositionend"||!Et&&y_(i,o)?(i=fl(),pn=No=An=null,jo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return bs&&o.locale!=="ko"?null:o.data;default:return null}}var FC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!FC[i.type]:o==="textarea"}function w_(i,o,l,h){_r(h),o=yc(o,"onChange"),0<o.length&&(l=new Do("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var _l=null,yl=null;function UC(i){U_(i,0)}function pc(i){var o=Ho(i);if(po(o))return i}function jC(i,o){if(i==="change")return o}var T_=!1;if(d){var tf;if(d){var nf="oninput"in document;if(!nf){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),nf=typeof I_.oninput=="function"}tf=nf}else tf=!1;T_=tf&&(!document.documentMode||9<document.documentMode)}function C_(){_l&&(_l.detachEvent("onpropertychange",S_),yl=_l=null)}function S_(i){if(i.propertyName==="value"&&pc(yl)){var o=[];w_(o,yl,i,vo(i)),il(UC,o)}}function zC(i,o,l){i==="focusin"?(C_(),_l=o,yl=l,_l.attachEvent("onpropertychange",S_)):i==="focusout"&&C_()}function BC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return pc(yl)}function WC(i,o){if(i==="click")return pc(o)}function qC(i,o){if(i==="input"||i==="change")return pc(o)}function HC(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var rr=typeof Object.is=="function"?Object.is:HC;function vl(i,o){if(rr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!rr(i[p],o[p]))return!1}return!0}function R_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function A_(i,o){var l=R_(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=R_(l)}}function P_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?P_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function k_(){for(var i=window,o=gi();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=gi(i.document)}return o}function rf(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function $C(i){var o=k_(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&P_(l.ownerDocument.documentElement,l)){if(h!==null&&rf(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(h.start,p);h=h.end===void 0?_:Math.min(h.end,p),!i.extend&&_>h&&(p=h,h=_,_=p),p=A_(l,_);var w=A_(l,h);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),_>h?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var GC=d&&"documentMode"in document&&11>=document.documentMode,zo=null,sf=null,El=null,of=!1;function x_(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;of||zo==null||zo!==gi(h)||(h=zo,"selectionStart"in h&&rf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),El&&vl(El,h)||(El=h,h=yc(sf,"onSelect"),0<h.length&&(o=new Do("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=zo)))}function mc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Bo={animationend:mc("Animation","AnimationEnd"),animationiteration:mc("Animation","AnimationIteration"),animationstart:mc("Animation","AnimationStart"),transitionend:mc("Transition","TransitionEnd")},af={},N_={};d&&(N_=document.createElement("div").style,"AnimationEvent"in window||(delete Bo.animationend.animation,delete Bo.animationiteration.animation,delete Bo.animationstart.animation),"TransitionEvent"in window||delete Bo.transitionend.transition);function gc(i){if(af[i])return af[i];if(!Bo[i])return i;var o=Bo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in N_)return af[i]=o[l];return i}var b_=gc("animationend"),D_=gc("animationiteration"),O_=gc("animationstart"),M_=gc("transitionend"),L_=new Map,V_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(i,o){L_.set(i,o),a(o,[i])}for(var lf=0;lf<V_.length;lf++){var uf=V_[lf],KC=uf.toLowerCase(),QC=uf[0].toUpperCase()+uf.slice(1);Ai(KC,"on"+QC)}Ai(b_,"onAnimationEnd"),Ai(D_,"onAnimationIteration"),Ai(O_,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(M_,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YC=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function F_(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,$u(h,o,void 0,i),i.currentTarget=null}function U_(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var _=void 0;if(o)for(var w=h.length-1;0<=w;w--){var P=h[w],b=P.instance,z=P.currentTarget;if(P=P.listener,b!==_&&p.isPropagationStopped())break e;F_(p,P,z),_=b}else for(w=0;w<h.length;w++){if(P=h[w],b=P.instance,z=P.currentTarget,P=P.listener,b!==_&&p.isPropagationStopped())break e;F_(p,P,z),_=b}}}if(Qn)throw i=sl,Qn=!1,sl=null,i}function st(i,o){var l=o[_f];l===void 0&&(l=o[_f]=new Set);var h=i+"__bubble";l.has(h)||(j_(o,i,2,!1),l.add(h))}function cf(i,o,l){var h=0;o&&(h|=4),j_(l,i,h,o)}var _c="_reactListening"+Math.random().toString(36).slice(2);function Tl(i){if(!i[_c]){i[_c]=!0,r.forEach(function(l){l!=="selectionchange"&&(YC.has(l)||cf(l,!1,i),cf(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[_c]||(o[_c]=!0,cf("selectionchange",!1,o))}}function j_(i,o,l,h){switch(dl(o)){case 1:var p=ut;break;case 4:p=Zd;break;default:p=hl}l=p.bind(null,o,l,i),p=void 0,!To||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function hf(i,o,l,h,p){var _=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var P=h.stateNode.containerInfo;if(P===p||P.nodeType===8&&P.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var b=w.tag;if((b===3||b===4)&&(b=w.stateNode.containerInfo,b===p||b.nodeType===8&&b.parentNode===p))return;w=w.return}for(;P!==null;){if(w=Ds(P),w===null)return;if(b=w.tag,b===5||b===6){h=_=w;continue e}P=P.parentNode}}h=h.return}il(function(){var z=_,Q=vo(l),X=[];e:{var K=L_.get(i);if(K!==void 0){var se=Do,ue=i;switch(i){case"keypress":if(bo(l)===0)break e;case"keydown":case"keyup":se=g;break;case"focusin":ue="focus",se=Vo;break;case"focusout":ue="blur",se=Vo;break;case"beforeblur":case"afterblur":se=Vo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=ac;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=W;break;case b_:case D_:case O_:se=$r;break;case M_:se=Xe;break;case"scroll":se=ef;break;case"wheel":se=qe;break;case"copy":case"cut":case"paste":se=cc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=I}var ce=(o&4)!==0,_t=!ce&&i==="scroll",U=ce?K!==null?K+"Capture":null:K;ce=[];for(var M=z,j;M!==null;){j=M;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,U!==null&&(Z=gt(M,U),Z!=null&&ce.push(Il(M,Z,j)))),_t)break;M=M.return}0<ce.length&&(K=new se(K,ue,null,l,Q),X.push({event:K,listeners:ce}))}}if((o&7)===0){e:{if(K=i==="mouseover"||i==="pointerover",se=i==="mouseout"||i==="pointerout",K&&l!==Es&&(ue=l.relatedTarget||l.fromElement)&&(Ds(ue)||ue[Gr]))break e;if((se||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,se?(ue=l.relatedTarget||l.toElement,se=z,ue=ue?Ds(ue):null,ue!==null&&(_t=Yn(ue),ue!==_t||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=z),se!==ue)){if(ce=Mo,Z="onMouseLeave",U="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(ce=I,Z="onPointerLeave",U="onPointerEnter",M="pointer"),_t=se==null?K:Ho(se),j=ue==null?K:Ho(ue),K=new ce(Z,M+"leave",se,l,Q),K.target=_t,K.relatedTarget=j,Z=null,Ds(Q)===z&&(ce=new ce(U,M+"enter",ue,l,Q),ce.target=j,ce.relatedTarget=_t,Z=ce),_t=Z,se&&ue)t:{for(ce=se,U=ue,M=0,j=ce;j;j=Wo(j))M++;for(j=0,Z=U;Z;Z=Wo(Z))j++;for(;0<M-j;)ce=Wo(ce),M--;for(;0<j-M;)U=Wo(U),j--;for(;M--;){if(ce===U||U!==null&&ce===U.alternate)break t;ce=Wo(ce),U=Wo(U)}ce=null}else ce=null;se!==null&&z_(X,K,se,ce,!1),ue!==null&&_t!==null&&z_(X,_t,ue,ce,!0)}}e:{if(K=z?Ho(z):window,se=K.nodeName&&K.nodeName.toLowerCase(),se==="select"||se==="input"&&K.type==="file")var he=jC;else if(E_(K))if(T_)he=qC;else{he=BC;var ve=zC}else(se=K.nodeName)&&se.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(he=WC);if(he&&(he=he(i,z))){w_(X,he,l,Q);break e}ve&&ve(i,K,z),i==="focusout"&&(ve=K._wrapperState)&&ve.controlled&&K.type==="number"&&go(K,"number",K.value)}switch(ve=z?Ho(z):window,i){case"focusin":(E_(ve)||ve.contentEditable==="true")&&(zo=ve,sf=z,El=null);break;case"focusout":El=sf=zo=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,x_(X,l,Q);break;case"selectionchange":if(GC)break;case"keydown":case"keyup":x_(X,l,Q)}var Ee;if(Et)e:{switch(i){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else jo?y_(i,l)&&(Ae="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ae="onCompositionStart");Ae&&(bs&&l.locale!=="ko"&&(jo||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&jo&&(Ee=fl()):(An=Q,No="value"in An?An.value:An.textContent,jo=!0)),ve=yc(z,Ae),0<ve.length&&(Ae=new gl(Ae,i,null,l,Q),X.push({event:Ae,listeners:ve}),Ee?Ae.data=Ee:(Ee=v_(l),Ee!==null&&(Ae.data=Ee)))),(Ee=Pn?LC(i,l):VC(i,l))&&(z=yc(z,"onBeforeInput"),0<z.length&&(Q=new gl("onBeforeInput","beforeinput",null,l,Q),X.push({event:Q,listeners:z}),Q.data=Ee))}U_(X,o)})}function Il(i,o,l){return{instance:i,listener:o,currentTarget:l}}function yc(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=gt(i,l),_!=null&&h.unshift(Il(i,_,p)),_=gt(i,o),_!=null&&h.push(Il(i,_,p))),i=i.return}return h}function Wo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function z_(i,o,l,h,p){for(var _=o._reactName,w=[];l!==null&&l!==h;){var P=l,b=P.alternate,z=P.stateNode;if(b!==null&&b===h)break;P.tag===5&&z!==null&&(P=z,p?(b=gt(l,_),b!=null&&w.unshift(Il(l,b,P))):p||(b=gt(l,_),b!=null&&w.push(Il(l,b,P)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var XC=/\r\n?/g,JC=/\u0000|\uFFFD/g;function B_(i){return(typeof i=="string"?i:""+i).replace(XC,`
`).replace(JC,"")}function vc(i,o,l){if(o=B_(o),B_(i)!==o&&l)throw Error(t(425))}function Ec(){}var df=null,ff=null;function pf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var mf=typeof setTimeout=="function"?setTimeout:void 0,ZC=typeof clearTimeout=="function"?clearTimeout:void 0,W_=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof W_<"u"?function(i){return W_.resolve(null).then(i).catch(tS)}:mf;function tS(i){setTimeout(function(){throw i})}function gf(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),tr(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);tr(o)}function Pi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function q_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Ir="__reactFiber$"+qo,Cl="__reactProps$"+qo,Gr="__reactContainer$"+qo,_f="__reactEvents$"+qo,nS="__reactListeners$"+qo,rS="__reactHandles$"+qo;function Ds(i){var o=i[Ir];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Gr]||l[Ir]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=q_(i);i!==null;){if(l=i[Ir])return l;i=q_(i)}return o}i=l,l=i.parentNode}return null}function Sl(i){return i=i[Ir]||i[Gr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ho(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function wc(i){return i[Cl]||null}var yf=[],$o=-1;function ki(i){return{current:i}}function ot(i){0>$o||(i.current=yf[$o],yf[$o]=null,$o--)}function it(i,o){$o++,yf[$o]=i.current,i.current=o}var xi={},Xt=ki(xi),mn=ki(!1),Os=xi;function Go(i,o){var l=i.type.contextTypes;if(!l)return xi;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=o[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function gn(i){return i=i.childContextTypes,i!=null}function Tc(){ot(mn),ot(Xt)}function H_(i,o,l){if(Xt.current!==xi)throw Error(t(168));it(Xt,o),it(mn,l)}function $_(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(t(108,fe(i)||"Unknown",p));return ie({},l,h)}function Ic(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||xi,Os=Xt.current,it(Xt,i),it(mn,mn.current),!0}function G_(i,o,l){var h=i.stateNode;if(!h)throw Error(t(169));l?(i=$_(i,o,Os),h.__reactInternalMemoizedMergedChildContext=i,ot(mn),ot(Xt),it(Xt,i)):ot(mn),it(mn,l)}var Kr=null,Cc=!1,vf=!1;function K_(i){Kr===null?Kr=[i]:Kr.push(i)}function iS(i){Cc=!0,K_(i)}function Ni(){if(!vf&&Kr!==null){vf=!0;var i=0,o=We;try{var l=Kr;for(We=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Kr=null,Cc=!1}catch(p){throw Kr!==null&&(Kr=Kr.slice(i+1)),Ro(Ss,Ni),p}finally{We=o,vf=!1}}return null}var Ko=[],Qo=0,Sc=null,Rc=0,jn=[],zn=0,Ms=null,Qr=1,Yr="";function Ls(i,o){Ko[Qo++]=Rc,Ko[Qo++]=Sc,Sc=i,Rc=o}function Q_(i,o,l){jn[zn++]=Qr,jn[zn++]=Yr,jn[zn++]=Ms,Ms=i;var h=Qr;i=Yr;var p=32-ln(h)-1;h&=~(1<<p),l+=1;var _=32-ln(o)+p;if(30<_){var w=p-p%5;_=(h&(1<<w)-1).toString(32),h>>=w,p-=w,Qr=1<<32-ln(o)+p|l<<p|h,Yr=_+i}else Qr=1<<_|l<<p|h,Yr=i}function Ef(i){i.return!==null&&(Ls(i,1),Q_(i,1,0))}function wf(i){for(;i===Sc;)Sc=Ko[--Qo],Ko[Qo]=null,Rc=Ko[--Qo],Ko[Qo]=null;for(;i===Ms;)Ms=jn[--zn],jn[zn]=null,Yr=jn[--zn],jn[zn]=null,Qr=jn[--zn],jn[zn]=null}var kn=null,xn=null,ct=!1,ir=null;function Y_(i,o){var l=Hn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function X_(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,kn=i,xn=Pi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,kn=i,xn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ms!==null?{id:Qr,overflow:Yr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Hn(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,kn=i,xn=null,!0):!1;default:return!1}}function Tf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function If(i){if(ct){var o=xn;if(o){var l=o;if(!X_(i,o)){if(Tf(i))throw Error(t(418));o=Pi(l.nextSibling);var h=kn;o&&X_(i,o)?Y_(h,l):(i.flags=i.flags&-4097|2,ct=!1,kn=i)}}else{if(Tf(i))throw Error(t(418));i.flags=i.flags&-4097|2,ct=!1,kn=i}}}function J_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;kn=i}function Ac(i){if(i!==kn)return!1;if(!ct)return J_(i),ct=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!pf(i.type,i.memoizedProps)),o&&(o=xn)){if(Tf(i))throw Z_(),Error(t(418));for(;o;)Y_(i,o),o=Pi(o.nextSibling)}if(J_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){xn=Pi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}xn=null}}else xn=kn?Pi(i.stateNode.nextSibling):null;return!0}function Z_(){for(var i=xn;i;)i=Pi(i.nextSibling)}function Yo(){xn=kn=null,ct=!1}function Cf(i){ir===null?ir=[i]:ir.push(i)}var sS=pe.ReactCurrentBatchConfig;function Rl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,i));var p=h,_=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(w){var P=p.refs;w===null?delete P[_]:P[_]=w},o._stringRef=_,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Pc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function ey(i){var o=i._init;return o(i._payload)}function ty(i){function o(U,M){if(i){var j=U.deletions;j===null?(U.deletions=[M],U.flags|=16):j.push(M)}}function l(U,M){if(!i)return null;for(;M!==null;)o(U,M),M=M.sibling;return null}function h(U,M){for(U=new Map;M!==null;)M.key!==null?U.set(M.key,M):U.set(M.index,M),M=M.sibling;return U}function p(U,M){return U=Ui(U,M),U.index=0,U.sibling=null,U}function _(U,M,j){return U.index=j,i?(j=U.alternate,j!==null?(j=j.index,j<M?(U.flags|=2,M):j):(U.flags|=2,M)):(U.flags|=1048576,M)}function w(U){return i&&U.alternate===null&&(U.flags|=2),U}function P(U,M,j,Z){return M===null||M.tag!==6?(M=mp(j,U.mode,Z),M.return=U,M):(M=p(M,j),M.return=U,M)}function b(U,M,j,Z){var he=j.type;return he===O?Q(U,M,j.props.children,Z,j.key):M!==null&&(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Ke&&ey(he)===M.type)?(Z=p(M,j.props),Z.ref=Rl(U,M,j),Z.return=U,Z):(Z=Jc(j.type,j.key,j.props,null,U.mode,Z),Z.ref=Rl(U,M,j),Z.return=U,Z)}function z(U,M,j,Z){return M===null||M.tag!==4||M.stateNode.containerInfo!==j.containerInfo||M.stateNode.implementation!==j.implementation?(M=gp(j,U.mode,Z),M.return=U,M):(M=p(M,j.children||[]),M.return=U,M)}function Q(U,M,j,Z,he){return M===null||M.tag!==7?(M=qs(j,U.mode,Z,he),M.return=U,M):(M=p(M,j),M.return=U,M)}function X(U,M,j){if(typeof M=="string"&&M!==""||typeof M=="number")return M=mp(""+M,U.mode,j),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Me:return j=Jc(M.type,M.key,M.props,null,U.mode,j),j.ref=Rl(U,null,M),j.return=U,j;case we:return M=gp(M,U.mode,j),M.return=U,M;case Ke:var Z=M._init;return X(U,Z(M._payload),j)}if(Fr(M)||ge(M))return M=qs(M,U.mode,j,null),M.return=U,M;Pc(U,M)}return null}function K(U,M,j,Z){var he=M!==null?M.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return he!==null?null:P(U,M,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Me:return j.key===he?b(U,M,j,Z):null;case we:return j.key===he?z(U,M,j,Z):null;case Ke:return he=j._init,K(U,M,he(j._payload),Z)}if(Fr(j)||ge(j))return he!==null?null:Q(U,M,j,Z,null);Pc(U,j)}return null}function se(U,M,j,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return U=U.get(j)||null,P(M,U,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Me:return U=U.get(Z.key===null?j:Z.key)||null,b(M,U,Z,he);case we:return U=U.get(Z.key===null?j:Z.key)||null,z(M,U,Z,he);case Ke:var ve=Z._init;return se(U,M,j,ve(Z._payload),he)}if(Fr(Z)||ge(Z))return U=U.get(j)||null,Q(M,U,Z,he,null);Pc(M,Z)}return null}function ue(U,M,j,Z){for(var he=null,ve=null,Ee=M,Ae=M=0,Vt=null;Ee!==null&&Ae<j.length;Ae++){Ee.index>Ae?(Vt=Ee,Ee=null):Vt=Ee.sibling;var Qe=K(U,Ee,j[Ae],Z);if(Qe===null){Ee===null&&(Ee=Vt);break}i&&Ee&&Qe.alternate===null&&o(U,Ee),M=_(Qe,M,Ae),ve===null?he=Qe:ve.sibling=Qe,ve=Qe,Ee=Vt}if(Ae===j.length)return l(U,Ee),ct&&Ls(U,Ae),he;if(Ee===null){for(;Ae<j.length;Ae++)Ee=X(U,j[Ae],Z),Ee!==null&&(M=_(Ee,M,Ae),ve===null?he=Ee:ve.sibling=Ee,ve=Ee);return ct&&Ls(U,Ae),he}for(Ee=h(U,Ee);Ae<j.length;Ae++)Vt=se(Ee,U,Ae,j[Ae],Z),Vt!==null&&(i&&Vt.alternate!==null&&Ee.delete(Vt.key===null?Ae:Vt.key),M=_(Vt,M,Ae),ve===null?he=Vt:ve.sibling=Vt,ve=Vt);return i&&Ee.forEach(function(ji){return o(U,ji)}),ct&&Ls(U,Ae),he}function ce(U,M,j,Z){var he=ge(j);if(typeof he!="function")throw Error(t(150));if(j=he.call(j),j==null)throw Error(t(151));for(var ve=he=null,Ee=M,Ae=M=0,Vt=null,Qe=j.next();Ee!==null&&!Qe.done;Ae++,Qe=j.next()){Ee.index>Ae?(Vt=Ee,Ee=null):Vt=Ee.sibling;var ji=K(U,Ee,Qe.value,Z);if(ji===null){Ee===null&&(Ee=Vt);break}i&&Ee&&ji.alternate===null&&o(U,Ee),M=_(ji,M,Ae),ve===null?he=ji:ve.sibling=ji,ve=ji,Ee=Vt}if(Qe.done)return l(U,Ee),ct&&Ls(U,Ae),he;if(Ee===null){for(;!Qe.done;Ae++,Qe=j.next())Qe=X(U,Qe.value,Z),Qe!==null&&(M=_(Qe,M,Ae),ve===null?he=Qe:ve.sibling=Qe,ve=Qe);return ct&&Ls(U,Ae),he}for(Ee=h(U,Ee);!Qe.done;Ae++,Qe=j.next())Qe=se(Ee,U,Ae,Qe.value,Z),Qe!==null&&(i&&Qe.alternate!==null&&Ee.delete(Qe.key===null?Ae:Qe.key),M=_(Qe,M,Ae),ve===null?he=Qe:ve.sibling=Qe,ve=Qe);return i&&Ee.forEach(function(FS){return o(U,FS)}),ct&&Ls(U,Ae),he}function _t(U,M,j,Z){if(typeof j=="object"&&j!==null&&j.type===O&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Me:e:{for(var he=j.key,ve=M;ve!==null;){if(ve.key===he){if(he=j.type,he===O){if(ve.tag===7){l(U,ve.sibling),M=p(ve,j.props.children),M.return=U,U=M;break e}}else if(ve.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Ke&&ey(he)===ve.type){l(U,ve.sibling),M=p(ve,j.props),M.ref=Rl(U,ve,j),M.return=U,U=M;break e}l(U,ve);break}else o(U,ve);ve=ve.sibling}j.type===O?(M=qs(j.props.children,U.mode,Z,j.key),M.return=U,U=M):(Z=Jc(j.type,j.key,j.props,null,U.mode,Z),Z.ref=Rl(U,M,j),Z.return=U,U=Z)}return w(U);case we:e:{for(ve=j.key;M!==null;){if(M.key===ve)if(M.tag===4&&M.stateNode.containerInfo===j.containerInfo&&M.stateNode.implementation===j.implementation){l(U,M.sibling),M=p(M,j.children||[]),M.return=U,U=M;break e}else{l(U,M);break}else o(U,M);M=M.sibling}M=gp(j,U.mode,Z),M.return=U,U=M}return w(U);case Ke:return ve=j._init,_t(U,M,ve(j._payload),Z)}if(Fr(j))return ue(U,M,j,Z);if(ge(j))return ce(U,M,j,Z);Pc(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,M!==null&&M.tag===6?(l(U,M.sibling),M=p(M,j),M.return=U,U=M):(l(U,M),M=mp(j,U.mode,Z),M.return=U,U=M),w(U)):l(U,M)}return _t}var Xo=ty(!0),ny=ty(!1),kc=ki(null),xc=null,Jo=null,Sf=null;function Rf(){Sf=Jo=xc=null}function Af(i){var o=kc.current;ot(kc),i._currentValue=o}function Pf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function Zo(i,o){xc=i,Sf=Jo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(_n=!0),i.firstContext=null)}function Bn(i){var o=i._currentValue;if(Sf!==i)if(i={context:i,memoizedValue:o,next:null},Jo===null){if(xc===null)throw Error(t(308));Jo=i,xc.dependencies={lanes:0,firstContext:i}}else Jo=Jo.next=i;return o}var Vs=null;function kf(i){Vs===null?Vs=[i]:Vs.push(i)}function ry(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,kf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Xr(i,h)}function Xr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var bi=!1;function xf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iy(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Jr(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Di(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ge&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Xr(i,l)}return p=h.interleaved,p===null?(o.next=o,kf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Xr(i,l)}function Nc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ti(i,l)}}function sy(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=o:_=_.next=o}else p=_=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function bc(i,o,l,h){var p=i.updateQueue;bi=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var b=P,z=b.next;b.next=null,w===null?_=z:w.next=z,w=b;var Q=i.alternate;Q!==null&&(Q=Q.updateQueue,P=Q.lastBaseUpdate,P!==w&&(P===null?Q.firstBaseUpdate=z:P.next=z,Q.lastBaseUpdate=b))}if(_!==null){var X=p.baseState;w=0,Q=z=b=null,P=_;do{var K=P.lane,se=P.eventTime;if((h&K)===K){Q!==null&&(Q=Q.next={eventTime:se,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ue=i,ce=P;switch(K=o,se=l,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(se,X,K);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,K=typeof ue=="function"?ue.call(se,X,K):ue,K==null)break e;X=ie({},X,K);break e;case 2:bi=!0}}P.callback!==null&&P.lane!==0&&(i.flags|=64,K=p.effects,K===null?p.effects=[P]:K.push(P))}else se={eventTime:se,lane:K,tag:P.tag,payload:P.payload,callback:P.callback,next:null},Q===null?(z=Q=se,b=X):Q=Q.next=se,w|=K;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;K=P,P=K.next,K.next=null,p.lastBaseUpdate=K,p.shared.pending=null}}while(!0);if(Q===null&&(b=X),p.baseState=b,p.firstBaseUpdate=z,p.lastBaseUpdate=Q,o=p.shared.interleaved,o!==null){p=o;do w|=p.lane,p=p.next;while(p!==o)}else _===null&&(p.shared.lanes=0);js|=w,i.lanes=w,i.memoizedState=X}}function oy(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var Al={},Cr=ki(Al),Pl=ki(Al),kl=ki(Al);function Fs(i){if(i===Al)throw Error(t(174));return i}function Nf(i,o){switch(it(kl,o),it(Pl,i),it(Cr,Al),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Pt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Pt(o,i)}ot(Cr),it(Cr,o)}function ea(){ot(Cr),ot(Pl),ot(kl)}function ay(i){Fs(kl.current);var o=Fs(Cr.current),l=Pt(o,i.type);o!==l&&(it(Pl,i),it(Cr,l))}function bf(i){Pl.current===i&&(ot(Cr),ot(Pl))}var ht=ki(0);function Dc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Df=[];function Of(){for(var i=0;i<Df.length;i++)Df[i]._workInProgressVersionPrimary=null;Df.length=0}var Oc=pe.ReactCurrentDispatcher,Mf=pe.ReactCurrentBatchConfig,Us=0,dt=null,xt=null,Mt=null,Mc=!1,xl=!1,Nl=0,oS=0;function Jt(){throw Error(t(321))}function Lf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!rr(i[l],o[l]))return!1;return!0}function Vf(i,o,l,h,p,_){if(Us=_,dt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Oc.current=i===null||i.memoizedState===null?cS:hS,i=l(h,p),xl){_=0;do{if(xl=!1,Nl=0,25<=_)throw Error(t(301));_+=1,Mt=xt=null,o.updateQueue=null,Oc.current=dS,i=l(h,p)}while(xl)}if(Oc.current=Fc,o=xt!==null&&xt.next!==null,Us=0,Mt=xt=dt=null,Mc=!1,o)throw Error(t(300));return i}function Ff(){var i=Nl!==0;return Nl=0,i}function Sr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?dt.memoizedState=Mt=i:Mt=Mt.next=i,Mt}function Wn(){if(xt===null){var i=dt.alternate;i=i!==null?i.memoizedState:null}else i=xt.next;var o=Mt===null?dt.memoizedState:Mt.next;if(o!==null)Mt=o,xt=i;else{if(i===null)throw Error(t(310));xt=i,i={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Mt===null?dt.memoizedState=Mt=i:Mt=Mt.next=i}return Mt}function bl(i,o){return typeof o=="function"?o(i):o}function Uf(i){var o=Wn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=xt,p=h.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}h.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,h=h.baseState;var P=w=null,b=null,z=_;do{var Q=z.lane;if((Us&Q)===Q)b!==null&&(b=b.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:i(h,z.action);else{var X={lane:Q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};b===null?(P=b=X,w=h):b=b.next=X,dt.lanes|=Q,js|=Q}z=z.next}while(z!==null&&z!==_);b===null?w=h:b.next=P,rr(h,o.memoizedState)||(_n=!0),o.memoizedState=h,o.baseState=w,o.baseQueue=b,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do _=p.lane,dt.lanes|=_,js|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function jf(i){var o=Wn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,_=o.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);rr(_,o.memoizedState)||(_n=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),l.lastRenderedState=_}return[_,h]}function ly(){}function uy(i,o){var l=dt,h=Wn(),p=o(),_=!rr(h.memoizedState,p);if(_&&(h.memoizedState=p,_n=!0),h=h.queue,zf(dy.bind(null,l,h,i),[i]),h.getSnapshot!==o||_||Mt!==null&&Mt.memoizedState.tag&1){if(l.flags|=2048,Dl(9,hy.bind(null,l,h,p,o),void 0,null),Lt===null)throw Error(t(349));(Us&30)!==0||cy(l,o,p)}return p}function cy(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=dt.updateQueue,o===null?(o={lastEffect:null,stores:null},dt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function hy(i,o,l,h){o.value=l,o.getSnapshot=h,fy(o)&&py(i)}function dy(i,o,l){return l(function(){fy(o)&&py(i)})}function fy(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!rr(i,l)}catch{return!0}}function py(i){var o=Xr(i,1);o!==null&&lr(o,i,1,-1)}function my(i){var o=Sr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:i},o.queue=i,i=i.dispatch=uS.bind(null,dt,i),[o.memoizedState,i]}function Dl(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=dt.updateQueue,o===null?(o={lastEffect:null,stores:null},dt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function gy(){return Wn().memoizedState}function Lc(i,o,l,h){var p=Sr();dt.flags|=i,p.memoizedState=Dl(1|o,l,void 0,h===void 0?null:h)}function Vc(i,o,l,h){var p=Wn();h=h===void 0?null:h;var _=void 0;if(xt!==null){var w=xt.memoizedState;if(_=w.destroy,h!==null&&Lf(h,w.deps)){p.memoizedState=Dl(o,l,_,h);return}}dt.flags|=i,p.memoizedState=Dl(1|o,l,_,h)}function _y(i,o){return Lc(8390656,8,i,o)}function zf(i,o){return Vc(2048,8,i,o)}function yy(i,o){return Vc(4,2,i,o)}function vy(i,o){return Vc(4,4,i,o)}function Ey(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function wy(i,o,l){return l=l!=null?l.concat([i]):null,Vc(4,4,Ey.bind(null,o,i),l)}function Bf(){}function Ty(i,o){var l=Wn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Lf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Iy(i,o){var l=Wn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&Lf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Cy(i,o,l){return(Us&21)===0?(i.baseState&&(i.baseState=!1,_n=!0),i.memoizedState=l):(rr(l,o)||(l=Ps(),dt.lanes|=l,js|=l,i.baseState=!0),o)}function aS(i,o){var l=We;We=l!==0&&4>l?l:4,i(!0);var h=Mf.transition;Mf.transition={};try{i(!1),o()}finally{We=l,Mf.transition=h}}function Sy(){return Wn().memoizedState}function lS(i,o,l){var h=Vi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Ry(i))Ay(o,l);else if(l=ry(i,o,l,h),l!==null){var p=hn();lr(l,i,h,p),Py(l,o,h)}}function uS(i,o,l){var h=Vi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ry(i))Ay(o,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var w=o.lastRenderedState,P=_(w,l);if(p.hasEagerState=!0,p.eagerState=P,rr(P,w)){var b=o.interleaved;b===null?(p.next=p,kf(o)):(p.next=b.next,b.next=p),o.interleaved=p;return}}catch{}finally{}l=ry(i,o,p,h),l!==null&&(p=hn(),lr(l,i,h,p),Py(l,o,h))}}function Ry(i){var o=i.alternate;return i===dt||o!==null&&o===dt}function Ay(i,o){xl=Mc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Py(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,Ti(i,l)}}var Fc={readContext:Bn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},cS={readContext:Bn,useCallback:function(i,o){return Sr().memoizedState=[i,o===void 0?null:o],i},useContext:Bn,useEffect:_y,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Lc(4194308,4,Ey.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Lc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Lc(4,2,i,o)},useMemo:function(i,o){var l=Sr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Sr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=lS.bind(null,dt,i),[h.memoizedState,i]},useRef:function(i){var o=Sr();return i={current:i},o.memoizedState=i},useState:my,useDebugValue:Bf,useDeferredValue:function(i){return Sr().memoizedState=i},useTransition:function(){var i=my(!1),o=i[0];return i=aS.bind(null,i[1]),Sr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=dt,p=Sr();if(ct){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Lt===null)throw Error(t(349));(Us&30)!==0||cy(h,o,l)}p.memoizedState=l;var _={value:l,getSnapshot:o};return p.queue=_,_y(dy.bind(null,h,_,i),[i]),h.flags|=2048,Dl(9,hy.bind(null,h,_,l,o),void 0,null),l},useId:function(){var i=Sr(),o=Lt.identifierPrefix;if(ct){var l=Yr,h=Qr;l=(h&~(1<<32-ln(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=Nl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=oS++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},hS={readContext:Bn,useCallback:Ty,useContext:Bn,useEffect:zf,useImperativeHandle:wy,useInsertionEffect:yy,useLayoutEffect:vy,useMemo:Iy,useReducer:Uf,useRef:gy,useState:function(){return Uf(bl)},useDebugValue:Bf,useDeferredValue:function(i){var o=Wn();return Cy(o,xt.memoizedState,i)},useTransition:function(){var i=Uf(bl)[0],o=Wn().memoizedState;return[i,o]},useMutableSource:ly,useSyncExternalStore:uy,useId:Sy,unstable_isNewReconciler:!1},dS={readContext:Bn,useCallback:Ty,useContext:Bn,useEffect:zf,useImperativeHandle:wy,useInsertionEffect:yy,useLayoutEffect:vy,useMemo:Iy,useReducer:jf,useRef:gy,useState:function(){return jf(bl)},useDebugValue:Bf,useDeferredValue:function(i){var o=Wn();return xt===null?o.memoizedState=i:Cy(o,xt.memoizedState,i)},useTransition:function(){var i=jf(bl)[0],o=Wn().memoizedState;return[i,o]},useMutableSource:ly,useSyncExternalStore:uy,useId:Sy,unstable_isNewReconciler:!1};function sr(i,o){if(i&&i.defaultProps){o=ie({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Wf(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ie({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Uc={isMounted:function(i){return(i=i._reactInternals)?Yn(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=hn(),p=Vi(i),_=Jr(h,p);_.payload=o,l!=null&&(_.callback=l),o=Di(i,_,p),o!==null&&(lr(o,i,p,h),Nc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=hn(),p=Vi(i),_=Jr(h,p);_.tag=1,_.payload=o,l!=null&&(_.callback=l),o=Di(i,_,p),o!==null&&(lr(o,i,p,h),Nc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=hn(),h=Vi(i),p=Jr(l,h);p.tag=2,o!=null&&(p.callback=o),o=Di(i,p,h),o!==null&&(lr(o,i,h,l),Nc(o,i,h))}};function ky(i,o,l,h,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,w):o.prototype&&o.prototype.isPureReactComponent?!vl(l,h)||!vl(p,_):!0}function xy(i,o,l){var h=!1,p=xi,_=o.contextType;return typeof _=="object"&&_!==null?_=Bn(_):(p=gn(o)?Os:Xt.current,h=o.contextTypes,_=(h=h!=null)?Go(i,p):xi),o=new o(l,_),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Uc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),o}function Ny(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&Uc.enqueueReplaceState(o,o.state,null)}function qf(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},xf(i);var _=o.contextType;typeof _=="object"&&_!==null?p.context=Bn(_):(_=gn(o)?Os:Xt.current,p.context=Go(i,_)),p.state=i.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Wf(i,o,_,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&Uc.enqueueReplaceState(p,p.state,null),bc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ta(i,o){try{var l="",h=o;do l+=xe(h),h=h.return;while(h);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:o,stack:p,digest:null}}function Hf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function $f(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function by(i,o,l){l=Jr(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){$c||($c=!0,ap=h),$f(i,o)},l}function Dy(i,o,l){l=Jr(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){$f(i,o)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){$f(i,o),typeof h!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function Oy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new fS;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=AS.bind(null,i,o,l),o.then(i,i))}function My(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Ly(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Jr(-1,1),o.tag=2,Di(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var pS=pe.ReactCurrentOwner,_n=!1;function cn(i,o,l,h){o.child=i===null?ny(o,null,l,h):Xo(o,i.child,l,h)}function Vy(i,o,l,h,p){l=l.render;var _=o.ref;return Zo(o,p),h=Vf(i,o,l,h,_,p),l=Ff(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Zr(i,o,p)):(ct&&l&&Ef(o),o.flags|=1,cn(i,o,h,p),o.child)}function Fy(i,o,l,h,p){if(i===null){var _=l.type;return typeof _=="function"&&!pp(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=_,Uy(i,o,_,h,p)):(i=Jc(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:vl,l(w,h)&&i.ref===o.ref)return Zr(i,o,p)}return o.flags|=1,i=Ui(_,h),i.ref=o.ref,i.return=o,o.child=i}function Uy(i,o,l,h,p){if(i!==null){var _=i.memoizedProps;if(vl(_,h)&&i.ref===o.ref)if(_n=!1,o.pendingProps=h=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(_n=!0);else return o.lanes=i.lanes,Zr(i,o,p)}return Gf(i,o,l,h,p)}function jy(i,o,l){var h=o.pendingProps,p=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ra,Nn),Nn|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,it(ra,Nn),Nn|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,it(ra,Nn),Nn|=h}else _!==null?(h=_.baseLanes|l,o.memoizedState=null):h=l,it(ra,Nn),Nn|=h;return cn(i,o,p,l),o.child}function zy(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Gf(i,o,l,h,p){var _=gn(l)?Os:Xt.current;return _=Go(o,_),Zo(o,p),l=Vf(i,o,l,h,_,p),h=Ff(),i!==null&&!_n?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,Zr(i,o,p)):(ct&&h&&Ef(o),o.flags|=1,cn(i,o,l,p),o.child)}function By(i,o,l,h,p){if(gn(l)){var _=!0;Ic(o)}else _=!1;if(Zo(o,p),o.stateNode===null)zc(i,o),xy(o,l,h),qf(o,l,h,p),h=!0;else if(i===null){var w=o.stateNode,P=o.memoizedProps;w.props=P;var b=w.context,z=l.contextType;typeof z=="object"&&z!==null?z=Bn(z):(z=gn(l)?Os:Xt.current,z=Go(o,z));var Q=l.getDerivedStateFromProps,X=typeof Q=="function"||typeof w.getSnapshotBeforeUpdate=="function";X||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==h||b!==z)&&Ny(o,w,h,z),bi=!1;var K=o.memoizedState;w.state=K,bc(o,h,w,p),b=o.memoizedState,P!==h||K!==b||mn.current||bi?(typeof Q=="function"&&(Wf(o,l,Q,h),b=o.memoizedState),(P=bi||ky(o,l,P,h,K,b,z))?(X||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=b),w.props=h,w.state=b,w.context=z,h=P):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{w=o.stateNode,iy(i,o),P=o.memoizedProps,z=o.type===o.elementType?P:sr(o.type,P),w.props=z,X=o.pendingProps,K=w.context,b=l.contextType,typeof b=="object"&&b!==null?b=Bn(b):(b=gn(l)?Os:Xt.current,b=Go(o,b));var se=l.getDerivedStateFromProps;(Q=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==X||K!==b)&&Ny(o,w,h,b),bi=!1,K=o.memoizedState,w.state=K,bc(o,h,w,p);var ue=o.memoizedState;P!==X||K!==ue||mn.current||bi?(typeof se=="function"&&(Wf(o,l,se,h),ue=o.memoizedState),(z=bi||ky(o,l,z,h,K,ue,b)||!1)?(Q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ue,b),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ue,b)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===i.memoizedProps&&K===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&K===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ue),w.props=h,w.state=ue,w.context=b,h=z):(typeof w.componentDidUpdate!="function"||P===i.memoizedProps&&K===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&K===i.memoizedState||(o.flags|=1024),h=!1)}return Kf(i,o,l,h,_,p)}function Kf(i,o,l,h,p,_){zy(i,o);var w=(o.flags&128)!==0;if(!h&&!w)return p&&G_(o,l,!1),Zr(i,o,_);h=o.stateNode,pS.current=o;var P=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&w?(o.child=Xo(o,i.child,null,_),o.child=Xo(o,null,P,_)):cn(i,o,P,_),o.memoizedState=h.state,p&&G_(o,l,!0),o.child}function Wy(i){var o=i.stateNode;o.pendingContext?H_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&H_(i,o.context,!1),Nf(i,o.containerInfo)}function qy(i,o,l,h,p){return Yo(),Cf(p),o.flags|=256,cn(i,o,l,h),o.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Hy(i,o,l){var h=o.pendingProps,p=ht.current,_=!1,w=(o.flags&128)!==0,P;if((P=w)||(P=i!==null&&i.memoizedState===null?!1:(p&2)!==0),P?(_=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),it(ht,p&1),i===null)return If(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=h.children,i=h.fallback,_?(h=o.mode,_=o.child,w={mode:"hidden",children:w},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=Zc(w,h,0,null),i=qs(i,h,l,null),_.return=o,i.return=o,_.sibling=i,o.child=_,o.child.memoizedState=Yf(l),o.memoizedState=Qf,i):Xf(o,w));if(p=i.memoizedState,p!==null&&(P=p.dehydrated,P!==null))return mS(i,o,w,h,P,p,l);if(_){_=h.fallback,w=o.mode,p=i.child,P=p.sibling;var b={mode:"hidden",children:h.children};return(w&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=b,o.deletions=null):(h=Ui(p,b),h.subtreeFlags=p.subtreeFlags&14680064),P!==null?_=Ui(P,_):(_=qs(_,w,l,null),_.flags|=2),_.return=o,h.return=o,h.sibling=_,o.child=h,h=_,_=o.child,w=i.child.memoizedState,w=w===null?Yf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,o.memoizedState=Qf,h}return _=i.child,i=_.sibling,h=Ui(_,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Xf(i,o){return o=Zc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function jc(i,o,l,h){return h!==null&&Cf(h),Xo(o,i.child,null,l),i=Xf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function mS(i,o,l,h,p,_,w){if(l)return o.flags&256?(o.flags&=-257,h=Hf(Error(t(422))),jc(i,o,w,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(_=h.fallback,p=o.mode,h=Zc({mode:"visible",children:h.children},p,0,null),_=qs(_,p,w,null),_.flags|=2,h.return=o,_.return=o,h.sibling=_,o.child=h,(o.mode&1)!==0&&Xo(o,i.child,null,w),o.child.memoizedState=Yf(w),o.memoizedState=Qf,_);if((o.mode&1)===0)return jc(i,o,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var P=h.dgst;return h=P,_=Error(t(419)),h=Hf(_,h,void 0),jc(i,o,w,h)}if(P=(w&i.childLanes)!==0,_n||P){if(h=Lt,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Xr(i,p),lr(h,i,p,-1))}return fp(),h=Hf(Error(t(421))),jc(i,o,w,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=PS.bind(null,i),p._reactRetry=o,null):(i=_.treeContext,xn=Pi(p.nextSibling),kn=o,ct=!0,ir=null,i!==null&&(jn[zn++]=Qr,jn[zn++]=Yr,jn[zn++]=Ms,Qr=i.id,Yr=i.overflow,Ms=o),o=Xf(o,h.children),o.flags|=4096,o)}function $y(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Pf(i.return,o,l)}function Jf(i,o,l,h,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=p)}function Gy(i,o,l){var h=o.pendingProps,p=h.revealOrder,_=h.tail;if(cn(i,o,h.children,l),h=ht.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&$y(i,l,o);else if(i.tag===19)$y(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(it(ht,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&Dc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Jf(o,!1,p,l,_);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&Dc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Jf(o,!0,l,null,_);break;case"together":Jf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function zc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Zr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),js|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=Ui(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Ui(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function gS(i,o,l){switch(o.tag){case 3:Wy(o),Yo();break;case 5:ay(o);break;case 1:gn(o.type)&&Ic(o);break;case 4:Nf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;it(kc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(it(ht,ht.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Hy(i,o,l):(it(ht,ht.current&1),i=Zr(i,o,l),i!==null?i.sibling:null);it(ht,ht.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Gy(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),it(ht,ht.current),h)break;return null;case 22:case 23:return o.lanes=0,jy(i,o,l)}return Zr(i,o,l)}var Ky,Zf,Qy,Yy;Ky=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Zf=function(){},Qy=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Fs(Cr.current);var _=null;switch(l){case"input":p=_s(i,p),h=_s(i,h),_=[];break;case"select":p=ie({},p,{value:void 0}),h=ie({},h,{value:void 0}),_=[];break;case"textarea":p=Ka(i,p),h=Ka(i,h),_=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Ec)}el(l,h);var w;l=null;for(z in p)if(!h.hasOwnProperty(z)&&p.hasOwnProperty(z)&&p[z]!=null)if(z==="style"){var P=p[z];for(w in P)P.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(s.hasOwnProperty(z)?_||(_=[]):(_=_||[]).push(z,null));for(z in h){var b=h[z];if(P=p?.[z],h.hasOwnProperty(z)&&b!==P&&(b!=null||P!=null))if(z==="style")if(P){for(w in P)!P.hasOwnProperty(w)||b&&b.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in b)b.hasOwnProperty(w)&&P[w]!==b[w]&&(l||(l={}),l[w]=b[w])}else l||(_||(_=[]),_.push(z,l)),l=b;else z==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,P=P?P.__html:void 0,b!=null&&P!==b&&(_=_||[]).push(z,b)):z==="children"?typeof b!="string"&&typeof b!="number"||(_=_||[]).push(z,""+b):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(s.hasOwnProperty(z)?(b!=null&&z==="onScroll"&&st("scroll",i),_||P===b||(_=[])):(_=_||[]).push(z,b))}l&&(_=_||[]).push("style",l);var z=_;(o.updateQueue=z)&&(o.flags|=4)}},Yy=function(i,o,l,h){l!==h&&(o.flags|=4)};function Ol(i,o){if(!ct)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Zt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function _S(i,o,l){var h=o.pendingProps;switch(wf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(o),null;case 1:return gn(o.type)&&Tc(),Zt(o),null;case 3:return h=o.stateNode,ea(),ot(mn),ot(Xt),Of(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Ac(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ir!==null&&(cp(ir),ir=null))),Zf(i,o),Zt(o),null;case 5:bf(o);var p=Fs(kl.current);if(l=o.type,i!==null&&o.stateNode!=null)Qy(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Zt(o),null}if(i=Fs(Cr.current),Ac(o)){h=o.stateNode,l=o.type;var _=o.memoizedProps;switch(h[Ir]=o,h[Cl]=_,i=(o.mode&1)!==0,l){case"dialog":st("cancel",h),st("close",h);break;case"iframe":case"object":case"embed":st("load",h);break;case"video":case"audio":for(p=0;p<wl.length;p++)st(wl[p],h);break;case"source":st("error",h);break;case"img":case"image":case"link":st("error",h),st("load",h);break;case"details":st("toggle",h);break;case"input":mo(h,_),st("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},st("invalid",h);break;case"textarea":_o(h,_),st("invalid",h)}el(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var P=_[w];w==="children"?typeof P=="string"?h.textContent!==P&&(_.suppressHydrationWarning!==!0&&vc(h.textContent,P,i),p=["children",P]):typeof P=="number"&&h.textContent!==""+P&&(_.suppressHydrationWarning!==!0&&vc(h.textContent,P,i),p=["children",""+P]):s.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&st("scroll",h)}switch(l){case"input":Vr(h),Hu(h,_,!0);break;case"textarea":Vr(h),Qa(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=Ec)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=At(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=w.createElement(l,{is:h.is}):(i=w.createElement(l),l==="select"&&(w=i,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):i=w.createElementNS(i,l),i[Ir]=o,i[Cl]=h,Ky(i,o,!1,!1),o.stateNode=i;e:{switch(w=tl(l,h),l){case"dialog":st("cancel",i),st("close",i),p=h;break;case"iframe":case"object":case"embed":st("load",i),p=h;break;case"video":case"audio":for(p=0;p<wl.length;p++)st(wl[p],i);p=h;break;case"source":st("error",i),p=h;break;case"img":case"image":case"link":st("error",i),st("load",i),p=h;break;case"details":st("toggle",i),p=h;break;case"input":mo(i,h),p=_s(i,h),st("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ie({},h,{value:void 0}),st("invalid",i);break;case"textarea":_o(i,h),p=Ka(i,h),st("invalid",i);break;default:p=h}el(l,p),P=p;for(_ in P)if(P.hasOwnProperty(_)){var b=P[_];_==="style"?Ja(i,b):_==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Ya(i,b)):_==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&_i(i,b):typeof b=="number"&&_i(i,""+b):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?b!=null&&_==="onScroll"&&st("scroll",i):b!=null&&ae(i,_,b,w))}switch(l){case"input":Vr(i),Hu(i,h,!1);break;case"textarea":Vr(i),Qa(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Be(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Ur(i,!!h.multiple,_,!1):h.defaultValue!=null&&Ur(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Ec)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Zt(o),null;case 6:if(i&&o.stateNode!=null)Yy(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Fs(kl.current),Fs(Cr.current),Ac(o)){if(h=o.stateNode,l=o.memoizedProps,h[Ir]=o,(_=h.nodeValue!==l)&&(i=kn,i!==null))switch(i.tag){case 3:vc(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&vc(h.nodeValue,l,(i.mode&1)!==0)}_&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ir]=o,o.stateNode=h}return Zt(o),null;case 13:if(ot(ht),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ct&&xn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Z_(),Yo(),o.flags|=98560,_=!1;else if(_=Ac(o),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ir]=o}else Yo(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Zt(o),_=!1}else ir!==null&&(cp(ir),ir=null),_=!0;if(!_)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(ht.current&1)!==0?Nt===0&&(Nt=3):fp())),o.updateQueue!==null&&(o.flags|=4),Zt(o),null);case 4:return ea(),Zf(i,o),i===null&&Tl(o.stateNode.containerInfo),Zt(o),null;case 10:return Af(o.type._context),Zt(o),null;case 17:return gn(o.type)&&Tc(),Zt(o),null;case 19:if(ot(ht),_=o.memoizedState,_===null)return Zt(o),null;if(h=(o.flags&128)!==0,w=_.rendering,w===null)if(h)Ol(_,!1);else{if(Nt!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=Dc(i),w!==null){for(o.flags|=128,Ol(_,!1),h=w.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)_=l,i=h,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return it(ht,ht.current&1|2),o.child}i=i.sibling}_.tail!==null&&rt()>ia&&(o.flags|=128,h=!0,Ol(_,!1),o.lanes=4194304)}else{if(!h)if(i=Dc(w),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Ol(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!ct)return Zt(o),null}else 2*rt()-_.renderingStartTime>ia&&l!==1073741824&&(o.flags|=128,h=!0,Ol(_,!1),o.lanes=4194304);_.isBackwards?(w.sibling=o.child,o.child=w):(l=_.last,l!==null?l.sibling=w:o.child=w,_.last=w)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=rt(),o.sibling=null,l=ht.current,it(ht,h?l&1|2:l&1),o):(Zt(o),null);case 22:case 23:return dp(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Nn&1073741824)!==0&&(Zt(o),o.subtreeFlags&6&&(o.flags|=8192)):Zt(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function yS(i,o){switch(wf(o),o.tag){case 1:return gn(o.type)&&Tc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return ea(),ot(mn),ot(Xt),Of(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return bf(o),null;case 13:if(ot(ht),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Yo()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return ot(ht),null;case 4:return ea(),null;case 10:return Af(o.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var Bc=!1,en=!1,vS=typeof WeakSet=="function"?WeakSet:Set,le=null;function na(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){mt(i,o,h)}else l.current=null}function ep(i,o,l){try{l()}catch(h){mt(i,o,h)}}var Xy=!1;function ES(i,o){if(df=Si,i=k_(),rf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,P=-1,b=-1,z=0,Q=0,X=i,K=null;t:for(;;){for(var se;X!==l||p!==0&&X.nodeType!==3||(P=w+p),X!==_||h!==0&&X.nodeType!==3||(b=w+h),X.nodeType===3&&(w+=X.nodeValue.length),(se=X.firstChild)!==null;)K=X,X=se;for(;;){if(X===i)break t;if(K===l&&++z===p&&(P=w),K===_&&++Q===h&&(b=w),(se=X.nextSibling)!==null)break;X=K,K=X.parentNode}X=se}l=P===-1||b===-1?null:{start:P,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(ff={focusedElem:i,selectionRange:l},Si=!1,le=o;le!==null;)if(o=le,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,le=i;else for(;le!==null;){o=le;try{var ue=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,_t=ue.memoizedState,U=o.stateNode,M=U.getSnapshotBeforeUpdate(o.elementType===o.type?ce:sr(o.type,ce),_t);U.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){mt(o,o.return,Z)}if(i=o.sibling,i!==null){i.return=o.return,le=i;break}le=o.return}return ue=Xy,Xy=!1,ue}function Ml(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&ep(o,l,_)}p=p.next}while(p!==h)}}function Wc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function tp(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Jy(i){var o=i.alternate;o!==null&&(i.alternate=null,Jy(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Ir],delete o[Cl],delete o[_f],delete o[nS],delete o[rS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Zy(i){return i.tag===5||i.tag===3||i.tag===4}function ev(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Zy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function np(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Ec));else if(h!==4&&(i=i.child,i!==null))for(np(i,o,l),i=i.sibling;i!==null;)np(i,o,l),i=i.sibling}function rp(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(rp(i,o,l),i=i.sibling;i!==null;)rp(i,o,l),i=i.sibling}var $t=null,or=!1;function Oi(i,o,l){for(l=l.child;l!==null;)tv(i,o,l),l=l.sibling}function tv(i,o,l){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Rs,l)}catch{}switch(l.tag){case 5:en||na(l,o);case 6:var h=$t,p=or;$t=null,Oi(i,o,l),$t=h,or=p,$t!==null&&(or?(i=$t,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):$t.removeChild(l.stateNode));break;case 18:$t!==null&&(or?(i=$t,l=l.stateNode,i.nodeType===8?gf(i.parentNode,l):i.nodeType===1&&gf(i,l),tr(i)):gf($t,l.stateNode));break;case 4:h=$t,p=or,$t=l.stateNode.containerInfo,or=!0,Oi(i,o,l),$t=h,or=p;break;case 0:case 11:case 14:case 15:if(!en&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&ep(l,o,w),p=p.next}while(p!==h)}Oi(i,o,l);break;case 1:if(!en&&(na(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(P){mt(l,o,P)}Oi(i,o,l);break;case 21:Oi(i,o,l);break;case 22:l.mode&1?(en=(h=en)||l.memoizedState!==null,Oi(i,o,l),en=h):Oi(i,o,l);break;default:Oi(i,o,l)}}function nv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new vS),o.forEach(function(h){var p=kS.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function ar(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var _=i,w=o,P=w;e:for(;P!==null;){switch(P.tag){case 5:$t=P.stateNode,or=!1;break e;case 3:$t=P.stateNode.containerInfo,or=!0;break e;case 4:$t=P.stateNode.containerInfo,or=!0;break e}P=P.return}if($t===null)throw Error(t(160));tv(_,w,p),$t=null,or=!1;var b=p.alternate;b!==null&&(b.return=null),p.return=null}catch(z){mt(p,o,z)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)rv(o,i),o=o.sibling}function rv(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ar(o,i),Rr(i),h&4){try{Ml(3,i,i.return),Wc(3,i)}catch(ce){mt(i,i.return,ce)}try{Ml(5,i,i.return)}catch(ce){mt(i,i.return,ce)}}break;case 1:ar(o,i),Rr(i),h&512&&l!==null&&na(l,l.return);break;case 5:if(ar(o,i),Rr(i),h&512&&l!==null&&na(l,l.return),i.flags&32){var p=i.stateNode;try{_i(p,"")}catch(ce){mt(i,i.return,ce)}}if(h&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,P=i.type,b=i.updateQueue;if(i.updateQueue=null,b!==null)try{P==="input"&&_.type==="radio"&&_.name!=null&&$a(p,_),tl(P,w);var z=tl(P,_);for(w=0;w<b.length;w+=2){var Q=b[w],X=b[w+1];Q==="style"?Ja(p,X):Q==="dangerouslySetInnerHTML"?Ya(p,X):Q==="children"?_i(p,X):ae(p,Q,X,z)}switch(P){case"input":Ga(p,_);break;case"textarea":yo(p,_);break;case"select":var K=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var se=_.value;se!=null?Ur(p,!!_.multiple,se,!1):K!==!!_.multiple&&(_.defaultValue!=null?Ur(p,!!_.multiple,_.defaultValue,!0):Ur(p,!!_.multiple,_.multiple?[]:"",!1))}p[Cl]=_}catch(ce){mt(i,i.return,ce)}}break;case 6:if(ar(o,i),Rr(i),h&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(ce){mt(i,i.return,ce)}}break;case 3:if(ar(o,i),Rr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{tr(o.containerInfo)}catch(ce){mt(i,i.return,ce)}break;case 4:ar(o,i),Rr(i);break;case 13:ar(o,i),Rr(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(op=rt())),h&4&&nv(i);break;case 22:if(Q=l!==null&&l.memoizedState!==null,i.mode&1?(en=(z=en)||Q,ar(o,i),en=z):ar(o,i),Rr(i),h&8192){if(z=i.memoizedState!==null,(i.stateNode.isHidden=z)&&!Q&&(i.mode&1)!==0)for(le=i,Q=i.child;Q!==null;){for(X=le=Q;le!==null;){switch(K=le,se=K.child,K.tag){case 0:case 11:case 14:case 15:Ml(4,K,K.return);break;case 1:na(K,K.return);var ue=K.stateNode;if(typeof ue.componentWillUnmount=="function"){h=K,l=K.return;try{o=h,ue.props=o.memoizedProps,ue.state=o.memoizedState,ue.componentWillUnmount()}catch(ce){mt(h,l,ce)}}break;case 5:na(K,K.return);break;case 22:if(K.memoizedState!==null){ov(X);continue}}se!==null?(se.return=K,le=se):ov(X)}Q=Q.sibling}e:for(Q=null,X=i;;){if(X.tag===5){if(Q===null){Q=X;try{p=X.stateNode,z?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(P=X.stateNode,b=X.memoizedProps.style,w=b!=null&&b.hasOwnProperty("display")?b.display:null,P.style.display=Xa("display",w))}catch(ce){mt(i,i.return,ce)}}}else if(X.tag===6){if(Q===null)try{X.stateNode.nodeValue=z?"":X.memoizedProps}catch(ce){mt(i,i.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===i)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===i)break e;for(;X.sibling===null;){if(X.return===null||X.return===i)break e;Q===X&&(Q=null),X=X.return}Q===X&&(Q=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:ar(o,i),Rr(i),h&4&&nv(i);break;case 21:break;default:ar(o,i),Rr(i)}}function Rr(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Zy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(_i(p,""),h.flags&=-33);var _=ev(i);rp(i,_,p);break;case 3:case 4:var w=h.stateNode.containerInfo,P=ev(i);np(i,P,w);break;default:throw Error(t(161))}}catch(b){mt(i,i.return,b)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function wS(i,o,l){le=i,iv(i)}function iv(i,o,l){for(var h=(i.mode&1)!==0;le!==null;){var p=le,_=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Bc;if(!w){var P=p.alternate,b=P!==null&&P.memoizedState!==null||en;P=Bc;var z=en;if(Bc=w,(en=b)&&!z)for(le=p;le!==null;)w=le,b=w.child,w.tag===22&&w.memoizedState!==null?av(p):b!==null?(b.return=w,le=b):av(p);for(;_!==null;)le=_,iv(_),_=_.sibling;le=p,Bc=P,en=z}sv(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,le=_):sv(i)}}function sv(i){for(;le!==null;){var o=le;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:en||Wc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!en)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:sr(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&oy(o,_,h);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}oy(o,w,l)}break;case 5:var P=o.stateNode;if(l===null&&o.flags&4){l=P;var b=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var z=o.alternate;if(z!==null){var Q=z.memoizedState;if(Q!==null){var X=Q.dehydrated;X!==null&&tr(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}en||o.flags&512&&tp(o)}catch(K){mt(o,o.return,K)}}if(o===i){le=null;break}if(l=o.sibling,l!==null){l.return=o.return,le=l;break}le=o.return}}function ov(i){for(;le!==null;){var o=le;if(o===i){le=null;break}var l=o.sibling;if(l!==null){l.return=o.return,le=l;break}le=o.return}}function av(i){for(;le!==null;){var o=le;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Wc(4,o)}catch(b){mt(o,l,b)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(b){mt(o,p,b)}}var _=o.return;try{tp(o)}catch(b){mt(o,_,b)}break;case 5:var w=o.return;try{tp(o)}catch(b){mt(o,w,b)}}}catch(b){mt(o,o.return,b)}if(o===i){le=null;break}var P=o.sibling;if(P!==null){P.return=o.return,le=P;break}le=o.return}}var TS=Math.ceil,qc=pe.ReactCurrentDispatcher,ip=pe.ReactCurrentOwner,qn=pe.ReactCurrentBatchConfig,Ge=0,Lt=null,wt=null,Gt=0,Nn=0,ra=ki(0),Nt=0,Ll=null,js=0,Hc=0,sp=0,Vl=null,yn=null,op=0,ia=1/0,ei=null,$c=!1,ap=null,Mi=null,Gc=!1,Li=null,Kc=0,Fl=0,lp=null,Qc=-1,Yc=0;function hn(){return(Ge&6)!==0?rt():Qc!==-1?Qc:Qc=rt()}function Vi(i){return(i.mode&1)===0?1:(Ge&2)!==0&&Gt!==0?Gt&-Gt:sS.transition!==null?(Yc===0&&(Yc=Ps()),Yc):(i=We,i!==0||(i=window.event,i=i===void 0?16:dl(i.type)),i)}function lr(i,o,l,h){if(50<Fl)throw Fl=0,lp=null,Error(t(185));wi(i,l,h),((Ge&2)===0||i!==Lt)&&(i===Lt&&((Ge&2)===0&&(Hc|=l),Nt===4&&Fi(i,Gt)),vn(i,h),l===1&&Ge===0&&(o.mode&1)===0&&(ia=rt()+500,Cc&&Ni()))}function vn(i,o){var l=i.callbackNode;Br(i,o);var h=As(i,i===Lt?Gt:0);if(h===0)l!==null&&al(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&al(l),o===1)i.tag===0?iS(uv.bind(null,i)):K_(uv.bind(null,i)),eS(function(){(Ge&6)===0&&Ni()}),l=null;else{switch(Ii(h)){case 1:l=Ss;break;case 4:l=yi;break;case 16:l=Vn;break;case 536870912:l=Yu;break;default:l=Vn}l=_v(l,lv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function lv(i,o){if(Qc=-1,Yc=0,(Ge&6)!==0)throw Error(t(327));var l=i.callbackNode;if(sa()&&i.callbackNode!==l)return null;var h=As(i,i===Lt?Gt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=Xc(i,h);else{o=h;var p=Ge;Ge|=2;var _=hv();(Lt!==i||Gt!==o)&&(ei=null,ia=rt()+500,Bs(i,o));do try{SS();break}catch(P){cv(i,P)}while(!0);Rf(),qc.current=_,Ge=p,wt!==null?o=0:(Lt=null,Gt=0,o=Nt)}if(o!==0){if(o===2&&(p=Rn(i),p!==0&&(h=p,o=up(i,p))),o===1)throw l=Ll,Bs(i,0),Fi(i,h),vn(i,rt()),l;if(o===6)Fi(i,h);else{if(p=i.current.alternate,(h&30)===0&&!IS(p)&&(o=Xc(i,h),o===2&&(_=Rn(i),_!==0&&(h=_,o=up(i,_))),o===1))throw l=Ll,Bs(i,0),Fi(i,h),vn(i,rt()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Ws(i,yn,ei);break;case 3:if(Fi(i,h),(h&130023424)===h&&(o=op+500-rt(),10<o)){if(As(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){hn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=mf(Ws.bind(null,i,yn,ei),o);break}Ws(i,yn,ei);break;case 4:if(Fi(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var w=31-ln(h);_=1<<w,w=o[w],w>p&&(p=w),h&=~_}if(h=p,h=rt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*TS(h/1960))-h,10<h){i.timeoutHandle=mf(Ws.bind(null,i,yn,ei),h);break}Ws(i,yn,ei);break;case 5:Ws(i,yn,ei);break;default:throw Error(t(329))}}}return vn(i,rt()),i.callbackNode===l?lv.bind(null,i):null}function up(i,o){var l=Vl;return i.current.memoizedState.isDehydrated&&(Bs(i,o).flags|=256),i=Xc(i,o),i!==2&&(o=yn,yn=l,o!==null&&cp(o)),i}function cp(i){yn===null?yn=i:yn.push.apply(yn,i)}function IS(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],_=p.getSnapshot;p=p.value;try{if(!rr(_(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Fi(i,o){for(o&=~sp,o&=~Hc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-ln(o),h=1<<l;i[l]=-1,o&=~h}}function uv(i){if((Ge&6)!==0)throw Error(t(327));sa();var o=As(i,0);if((o&1)===0)return vn(i,rt()),null;var l=Xc(i,o);if(i.tag!==0&&l===2){var h=Rn(i);h!==0&&(o=h,l=up(i,h))}if(l===1)throw l=Ll,Bs(i,0),Fi(i,o),vn(i,rt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Ws(i,yn,ei),vn(i,rt()),null}function hp(i,o){var l=Ge;Ge|=1;try{return i(o)}finally{Ge=l,Ge===0&&(ia=rt()+500,Cc&&Ni())}}function zs(i){Li!==null&&Li.tag===0&&(Ge&6)===0&&sa();var o=Ge;Ge|=1;var l=qn.transition,h=We;try{if(qn.transition=null,We=1,i)return i()}finally{We=h,qn.transition=l,Ge=o,(Ge&6)===0&&Ni()}}function dp(){Nn=ra.current,ot(ra)}function Bs(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,ZC(l)),wt!==null)for(l=wt.return;l!==null;){var h=l;switch(wf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Tc();break;case 3:ea(),ot(mn),ot(Xt),Of();break;case 5:bf(h);break;case 4:ea();break;case 13:ot(ht);break;case 19:ot(ht);break;case 10:Af(h.type._context);break;case 22:case 23:dp()}l=l.return}if(Lt=i,wt=i=Ui(i.current,null),Gt=Nn=o,Nt=0,Ll=null,sp=Hc=js=0,yn=Vl=null,Vs!==null){for(o=0;o<Vs.length;o++)if(l=Vs[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,h.next=w}l.pending=h}Vs=null}return i}function cv(i,o){do{var l=wt;try{if(Rf(),Oc.current=Fc,Mc){for(var h=dt.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Mc=!1}if(Us=0,Mt=xt=dt=null,xl=!1,Nl=0,ip.current=null,l===null||l.return===null){Nt=1,Ll=o,wt=null;break}e:{var _=i,w=l.return,P=l,b=o;if(o=Gt,P.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var z=b,Q=P,X=Q.tag;if((Q.mode&1)===0&&(X===0||X===11||X===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var se=My(w);if(se!==null){se.flags&=-257,Ly(se,w,P,_,o),se.mode&1&&Oy(_,z,o),o=se,b=z;var ue=o.updateQueue;if(ue===null){var ce=new Set;ce.add(b),o.updateQueue=ce}else ue.add(b);break e}else{if((o&1)===0){Oy(_,z,o),fp();break e}b=Error(t(426))}}else if(ct&&P.mode&1){var _t=My(w);if(_t!==null){(_t.flags&65536)===0&&(_t.flags|=256),Ly(_t,w,P,_,o),Cf(ta(b,P));break e}}_=b=ta(b,P),Nt!==4&&(Nt=2),Vl===null?Vl=[_]:Vl.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var U=by(_,b,o);sy(_,U);break e;case 1:P=b;var M=_.type,j=_.stateNode;if((_.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Mi===null||!Mi.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var Z=Dy(_,P,o);sy(_,Z);break e}}_=_.return}while(_!==null)}fv(l)}catch(he){o=he,wt===l&&l!==null&&(wt=l=l.return);continue}break}while(!0)}function hv(){var i=qc.current;return qc.current=Fc,i===null?Fc:i}function fp(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Lt===null||(js&268435455)===0&&(Hc&268435455)===0||Fi(Lt,Gt)}function Xc(i,o){var l=Ge;Ge|=2;var h=hv();(Lt!==i||Gt!==o)&&(ei=null,Bs(i,o));do try{CS();break}catch(p){cv(i,p)}while(!0);if(Rf(),Ge=l,qc.current=h,wt!==null)throw Error(t(261));return Lt=null,Gt=0,Nt}function CS(){for(;wt!==null;)dv(wt)}function SS(){for(;wt!==null&&!Ku();)dv(wt)}function dv(i){var o=gv(i.alternate,i,Nn);i.memoizedProps=i.pendingProps,o===null?fv(i):wt=o,ip.current=null}function fv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=_S(l,o,Nn),l!==null){wt=l;return}}else{if(l=yS(l,o),l!==null){l.flags&=32767,wt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Nt=6,wt=null;return}}if(o=o.sibling,o!==null){wt=o;return}wt=o=i}while(o!==null);Nt===0&&(Nt=5)}function Ws(i,o,l){var h=We,p=qn.transition;try{qn.transition=null,We=1,RS(i,o,l,h)}finally{qn.transition=p,We=h}return null}function RS(i,o,l,h){do sa();while(Li!==null);if((Ge&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(et(i,_),i===Lt&&(wt=Lt=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Gc||(Gc=!0,_v(Vn,function(){return sa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=qn.transition,qn.transition=null;var w=We;We=1;var P=Ge;Ge|=4,ip.current=null,ES(i,l),rv(l,i),$C(ff),Si=!!df,ff=df=null,i.current=l,wS(l),Qd(),Ge=P,We=w,qn.transition=_}else i.current=l;if(Gc&&(Gc=!1,Li=i,Kc=p),_=i.pendingLanes,_===0&&(Mi=null),Xu(l.stateNode),vn(i,rt()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if($c)throw $c=!1,i=ap,ap=null,i;return(Kc&1)!==0&&i.tag!==0&&sa(),_=i.pendingLanes,(_&1)!==0?i===lp?Fl++:(Fl=0,lp=i):Fl=0,Ni(),null}function sa(){if(Li!==null){var i=Ii(Kc),o=qn.transition,l=We;try{if(qn.transition=null,We=16>i?16:i,Li===null)var h=!1;else{if(i=Li,Li=null,Kc=0,(Ge&6)!==0)throw Error(t(331));var p=Ge;for(Ge|=4,le=i.current;le!==null;){var _=le,w=_.child;if((le.flags&16)!==0){var P=_.deletions;if(P!==null){for(var b=0;b<P.length;b++){var z=P[b];for(le=z;le!==null;){var Q=le;switch(Q.tag){case 0:case 11:case 15:Ml(8,Q,_)}var X=Q.child;if(X!==null)X.return=Q,le=X;else for(;le!==null;){Q=le;var K=Q.sibling,se=Q.return;if(Jy(Q),Q===z){le=null;break}if(K!==null){K.return=se,le=K;break}le=se}}}var ue=_.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var _t=ce.sibling;ce.sibling=null,ce=_t}while(ce!==null)}}le=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,le=w;else e:for(;le!==null;){if(_=le,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ml(9,_,_.return)}var U=_.sibling;if(U!==null){U.return=_.return,le=U;break e}le=_.return}}var M=i.current;for(le=M;le!==null;){w=le;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,le=j;else e:for(w=M;le!==null;){if(P=le,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Wc(9,P)}}catch(he){mt(P,P.return,he)}if(P===w){le=null;break e}var Z=P.sibling;if(Z!==null){Z.return=P.return,le=Z;break e}le=P.return}}if(Ge=p,Ni(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Rs,i)}catch{}h=!0}return h}finally{We=l,qn.transition=o}}return!1}function pv(i,o,l){o=ta(l,o),o=by(i,o,1),i=Di(i,o,1),o=hn(),i!==null&&(wi(i,1,o),vn(i,o))}function mt(i,o,l){if(i.tag===3)pv(i,i,l);else for(;o!==null;){if(o.tag===3){pv(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Mi===null||!Mi.has(h))){i=ta(l,i),i=Dy(o,i,1),o=Di(o,i,1),i=hn(),o!==null&&(wi(o,1,i),vn(o,i));break}}o=o.return}}function AS(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=hn(),i.pingedLanes|=i.suspendedLanes&l,Lt===i&&(Gt&l)===l&&(Nt===4||Nt===3&&(Gt&130023424)===Gt&&500>rt()-op?Bs(i,0):sp|=l),vn(i,o)}function mv(i,o){o===0&&((i.mode&1)===0?o=1:(o=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var l=hn();i=Xr(i,o),i!==null&&(wi(i,o,l),vn(i,l))}function PS(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),mv(i,l)}function kS(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),mv(i,l)}var gv;gv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||mn.current)_n=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return _n=!1,gS(i,o,l);_n=(i.flags&131072)!==0}else _n=!1,ct&&(o.flags&1048576)!==0&&Q_(o,Rc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;zc(i,o),i=o.pendingProps;var p=Go(o,Xt.current);Zo(o,l),p=Vf(null,o,h,i,p,l);var _=Ff();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,gn(h)?(_=!0,Ic(o)):_=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,xf(o),p.updater=Uc,o.stateNode=p,p._reactInternals=o,qf(o,h,i,l),o=Kf(null,o,h,!0,_,l)):(o.tag=0,ct&&_&&Ef(o),cn(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(zc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=NS(h),i=sr(h,i),p){case 0:o=Gf(null,o,h,i,l);break e;case 1:o=By(null,o,h,i,l);break e;case 11:o=Vy(null,o,h,i,l);break e;case 14:o=Fy(null,o,h,sr(h.type,i),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),Gf(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),By(i,o,h,p,l);case 3:e:{if(Wy(o),i===null)throw Error(t(387));h=o.pendingProps,_=o.memoizedState,p=_.element,iy(i,o),bc(o,h,null,l);var w=o.memoizedState;if(h=w.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){p=ta(Error(t(423)),o),o=qy(i,o,h,l,p);break e}else if(h!==p){p=ta(Error(t(424)),o),o=qy(i,o,h,l,p);break e}else for(xn=Pi(o.stateNode.containerInfo.firstChild),kn=o,ct=!0,ir=null,l=ny(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Yo(),h===p){o=Zr(i,o,l);break e}cn(i,o,h,l)}o=o.child}return o;case 5:return ay(o),i===null&&If(o),h=o.type,p=o.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,pf(h,p)?w=null:_!==null&&pf(h,_)&&(o.flags|=32),zy(i,o),cn(i,o,w,l),o.child;case 6:return i===null&&If(o),null;case 13:return Hy(i,o,l);case 4:return Nf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Xo(o,null,h,l):cn(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),Vy(i,o,h,p,l);case 7:return cn(i,o,o.pendingProps,l),o.child;case 8:return cn(i,o,o.pendingProps.children,l),o.child;case 12:return cn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,_=o.memoizedProps,w=p.value,it(kc,h._currentValue),h._currentValue=w,_!==null)if(rr(_.value,w)){if(_.children===p.children&&!mn.current){o=Zr(i,o,l);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var P=_.dependencies;if(P!==null){w=_.child;for(var b=P.firstContext;b!==null;){if(b.context===h){if(_.tag===1){b=Jr(-1,l&-l),b.tag=2;var z=_.updateQueue;if(z!==null){z=z.shared;var Q=z.pending;Q===null?b.next=b:(b.next=Q.next,Q.next=b),z.pending=b}}_.lanes|=l,b=_.alternate,b!==null&&(b.lanes|=l),Pf(_.return,l,o),P.lanes|=l;break}b=b.next}}else if(_.tag===10)w=_.type===o.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,P=w.alternate,P!==null&&(P.lanes|=l),Pf(w,l,o),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===o){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}cn(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,Zo(o,l),p=Bn(p),h=h(p),o.flags|=1,cn(i,o,h,l),o.child;case 14:return h=o.type,p=sr(h,o.pendingProps),p=sr(h.type,p),Fy(i,o,h,p,l);case 15:return Uy(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:sr(h,p),zc(i,o),o.tag=1,gn(h)?(i=!0,Ic(o)):i=!1,Zo(o,l),xy(o,h,p),qf(o,h,p,l),Kf(null,o,h,!0,i,l);case 19:return Gy(i,o,l);case 22:return jy(i,o,l)}throw Error(t(156,o.tag))};function _v(i,o){return Ro(i,o)}function xS(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(i,o,l,h){return new xS(i,o,l,h)}function pp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function NS(i){if(typeof i=="function")return pp(i)?1:0;if(i!=null){if(i=i.$$typeof,i===N)return 11;if(i===Re)return 14}return 2}function Ui(i,o){var l=i.alternate;return l===null?(l=Hn(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Jc(i,o,l,h,p,_){var w=2;if(h=i,typeof i=="function")pp(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case O:return qs(l.children,p,_,o);case A:w=8,p|=8;break;case S:return i=Hn(12,l,o,p|2),i.elementType=S,i.lanes=_,i;case C:return i=Hn(13,l,o,p),i.elementType=C,i.lanes=_,i;case me:return i=Hn(19,l,o,p),i.elementType=me,i.lanes=_,i;case Te:return Zc(l,p,_,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:w=10;break e;case k:w=9;break e;case N:w=11;break e;case Re:w=14;break e;case Ke:w=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Hn(w,l,o,p),o.elementType=i,o.type=h,o.lanes=_,o}function qs(i,o,l,h){return i=Hn(7,i,h,o),i.lanes=l,i}function Zc(i,o,l,h){return i=Hn(22,i,h,o),i.elementType=Te,i.lanes=l,i.stateNode={isHidden:!1},i}function mp(i,o,l){return i=Hn(6,i,null,o),i.lanes=l,i}function gp(i,o,l){return o=Hn(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function bS(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function _p(i,o,l,h,p,_,w,P,b){return i=new bS(i,o,l,P,b),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Hn(3,null,null,o),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(_),i}function DS(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function yv(i){if(!i)return xi;i=i._reactInternals;e:{if(Yn(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(gn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(gn(l))return $_(i,l,o)}return o}function vv(i,o,l,h,p,_,w,P,b){return i=_p(l,h,!0,i,p,_,w,P,b),i.context=yv(null),l=i.current,h=hn(),p=Vi(l),_=Jr(h,p),_.callback=o??null,Di(l,_,p),i.current.lanes=p,wi(i,p,h),vn(i,h),i}function eh(i,o,l,h){var p=o.current,_=hn(),w=Vi(p);return l=yv(l),o.context===null?o.context=l:o.pendingContext=l,o=Jr(_,w),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Di(p,o,w),i!==null&&(lr(i,p,w,_),Nc(i,p,w)),w}function th(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Ev(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function yp(i,o){Ev(i,o),(i=i.alternate)&&Ev(i,o)}function OS(){return null}var wv=typeof reportError=="function"?reportError:function(i){console.error(i)};function vp(i){this._internalRoot=i}nh.prototype.render=vp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));eh(i,o,null,null)},nh.prototype.unmount=vp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;zs(function(){eh(null,i,null,null)}),o[Gr]=null}};function nh(i){this._internalRoot=i}nh.prototype.unstable_scheduleHydration=function(i){if(i){var o=nc();i={blockedOn:null,target:i,priority:o};for(var l=0;l<vr.length&&o!==0&&o<vr[l].priority;l++);vr.splice(l,0,i),l===0&&sc(i)}};function Ep(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function rh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Tv(){}function MS(i,o,l,h,p){if(p){if(typeof h=="function"){var _=h;h=function(){var z=th(w);_.call(z)}}var w=vv(o,h,i,0,null,!1,!1,"",Tv);return i._reactRootContainer=w,i[Gr]=w.current,Tl(i.nodeType===8?i.parentNode:i),zs(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var P=h;h=function(){var z=th(b);P.call(z)}}var b=_p(i,0,!1,null,null,!1,!1,"",Tv);return i._reactRootContainer=b,i[Gr]=b.current,Tl(i.nodeType===8?i.parentNode:i),zs(function(){eh(o,b,l,h)}),b}function ih(i,o,l,h,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var P=p;p=function(){var b=th(w);P.call(b)}}eh(o,w,i,p)}else w=MS(l,o,i,p,h);return th(w)}ec=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=vi(o.pendingLanes);l!==0&&(Ti(o,l|1),vn(o,rt()),(Ge&6)===0&&(ia=rt()+500,Ni()))}break;case 13:zs(function(){var h=Xr(i,1);if(h!==null){var p=hn();lr(h,i,1,p)}}),yp(i,1)}},ko=function(i){if(i.tag===13){var o=Xr(i,134217728);if(o!==null){var l=hn();lr(o,i,134217728,l)}yp(i,134217728)}},tc=function(i){if(i.tag===13){var o=Vi(i),l=Xr(i,o);if(l!==null){var h=hn();lr(l,i,o,h)}yp(i,o)}},nc=function(){return We},rc=function(i,o){var l=We;try{return We=i,o()}finally{We=l}},Eo=function(i,o,l){switch(o){case"input":if(Ga(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=wc(h);if(!p)throw Error(t(90));po(h),Ga(h,p)}}}break;case"textarea":yo(i,l);break;case"select":o=l.value,o!=null&&Ur(i,!!l.multiple,o,!1)}},ws=hp,rl=zs;var LS={usingClientEntryPoint:!1,Events:[Sl,Ho,wc,_r,nl,hp]},Ul={findFiberByHostInstance:Ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VS={bundleType:Ul.bundleType,version:Ul.version,rendererPackageName:Ul.rendererPackageName,rendererConfig:Ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ol(i),i===null?null:i.stateNode},findFiberByHostInstance:Ul.findFiberByHostInstance||OS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sh.isDisabled&&sh.supportsFiber)try{Rs=sh.inject(VS),Sn=sh}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LS,En.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ep(o))throw Error(t(200));return DS(i,o,null,l)},En.createRoot=function(i,o){if(!Ep(i))throw Error(t(299));var l=!1,h="",p=wv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=_p(i,1,!1,null,null,l,!1,h,p),i[Gr]=o.current,Tl(i.nodeType===8?i.parentNode:i),new vp(o)},En.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ol(o),i=i===null?null:i.stateNode,i},En.flushSync=function(i){return zs(i)},En.hydrate=function(i,o,l){if(!rh(o))throw Error(t(200));return ih(null,i,o,!0,l)},En.hydrateRoot=function(i,o,l){if(!Ep(i))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,_="",w=wv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=vv(o,null,i,1,l??null,p,!1,_,w),i[Gr]=o.current,Tl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new nh(o)},En.render=function(i,o,l){if(!rh(o))throw Error(t(200));return ih(null,i,o,!1,l)},En.unmountComponentAtNode=function(i){if(!rh(i))throw Error(t(40));return i._reactRootContainer?(zs(function(){ih(null,null,i,!1,function(){i._reactRootContainer=null,i[Gr]=null})}),!0):!1},En.unstable_batchedUpdates=hp,En.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!rh(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ih(i,o,l,!1,h)},En.version="18.3.1-next-f1338f8080-20240426",En}var xv;function HS(){if(xv)return Ip.exports;xv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ip.exports=qS(),Ip.exports}var Nv;function $S(){if(Nv)return oh;Nv=1;var n=HS();return oh.createRoot=n.createRoot,oh.hydrateRoot=n.hydrateRoot,oh}var GS=$S();const KS=()=>{};var bv={};/**
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
 */const Gw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ee=function(n,e){if(!n)throw Ma(e)},Ma=function(n){return new Error("Firebase Database ("+Gw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Kw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},QS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],u=n[t++],d=n[t++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],u=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Fm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,f=s+2<n.length,m=f?n[s+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|m>>6,D=m&63;f||(D=64,u||(T=64)),r.push(t[v],t[E],t[T],t[D])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):QS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||m==null||E==null)throw new YS;const T=a<<2|d>>4;if(r.push(T),m!==64){const D=d<<4&240|m>>2;if(r.push(D),E!==64){const V=m<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qw=function(n){const e=Kw(n);return Fm.encodeByteArray(e,!0)},Rh=function(n){return Qw(n).replace(/\./g,"")},Ah=function(n){try{return Fm.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XS(n){return Yw(void 0,n)}function Yw(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!JS(t)||(n[t]=Yw(n[t],e[t]));return n}function JS(n){return n!=="__proto__"}/**
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
 */function ZS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eR=()=>ZS().__FIREBASE_DEFAULTS__,tR=()=>{if(typeof process>"u"||typeof bv>"u")return;const n=bv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ah(n[1]);return e&&JSON.parse(e)},hd=()=>{try{return KS()||eR()||tR()||nR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xw=n=>{var e,t;return(t=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jw=n=>{const e=Xw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zw=()=>{var n;return(n=hd())===null||n===void 0?void 0:n.config},e0=n=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ni{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Um(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function t0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rh(JSON.stringify(t)),Rh(JSON.stringify(u)),""].join(".")}const Jl={};function rR(){const n={prod:[],emulator:[]};for(const e of Object.keys(Jl))Jl[e]?n.emulator.push(e):n.prod.push(e);return n}function iR(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Dv=!1;function jm(n,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Jl[n]===e||Jl[n]||Dv)return;Jl[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",a=rR().prod.length>0;function u(){const T=document.getElementById(r);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function f(T,D){T.setAttribute("width","24"),T.setAttribute("id",D),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function m(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Dv=!0,u()},T}function v(T,D){T.setAttribute("id",D),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=iR(r),D=t("text"),V=document.getElementById(D)||document.createElement("span"),q=t("learnmore"),B=document.getElementById(q)||document.createElement("a"),J=t("preprendIcon"),re=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const ae=T.element;d(ae),v(B,q);const pe=m();f(re,J),ae.append(re,V,B,pe),document.body.appendChild(ae)}a?(V.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function sR(){var n;const e=(n=hd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lR(){const n=on();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function uR(){return Gw.NODE_ADMIN===!0}function cR(){return!sR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hR(){try{return typeof indexedDB=="object"}catch{return!1}}function dR(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const fR="FirebaseError";class mi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fR,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Au.prototype.create)}}class Au{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?pR(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new mi(s,d,r)}}function pR(n,e){return n.replace(mR,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mR=/\{\$([^}]+)}/g;/**
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
 */function cu(n){return JSON.parse(n)}function Wt(n){return JSON.stringify(n)}/**
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
 */const r0=function(n){let e={},t={},r={},s="";try{const a=n.split(".");e=cu(Ah(a[0])||""),t=cu(Ah(a[1])||""),s=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},gR=function(n){const e=r0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},_R=function(n){const e=r0(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Lr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ta(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ph(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kh(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Or(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const a=n[s],u=e[s];if(Ov(a)&&Ov(u)){if(!Or(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ov(n){return n!==null&&typeof n=="object"}/**
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
 */function La(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function $l(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class yR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)r[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)r[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=r[E-3]^r[E-8]^r[E-14]^r[E-16];r[E]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],a=this.chain_[1],u=this.chain_[2],d=this.chain_[3],f=this.chain_[4],m,v;for(let E=0;E<80;E++){E<40?E<20?(m=d^a&(u^d),v=1518500249):(m=a^u^d,v=1859775393):E<60?(m=a&u|d&(a|u),v=2400959708):(m=a^u^d,v=3395469782);const T=(s<<5|s>>>27)+m+f+v+r[E]&4294967295;f=d,d=u,u=(a<<30|a>>>2)&4294967295,a=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const a=this.buf_;let u=this.inbuf_;for(;s<t;){if(u===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(a[u]=e.charCodeAt(s),++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}else for(;s<t;)if(a[u]=e[s],++u,++s,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[s]>>a&255,++r;return e}}function vR(n,e){const t=new ER(n,e);return t.subscribe.bind(t)}class ER{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wR(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Rp),s.error===void 0&&(s.error=Rp),s.complete===void 0&&(s.complete=Rp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rp(){}function Ia(n,e){return`${n} failed: ${e} argument `}/**
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
 */const TR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const a=s-55296;r++,ee(r<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(r)-56320;s=65536+(a<<10)+u}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},dd=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function nt(n){return n&&n._delegate?n._delegate:n}class es{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hs="[DEFAULT]";/**
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
 */class IR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ni;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SR(e))try{this.getOrInitializeService({instanceIdentifier:Hs})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hs){return this.instances.has(e)}getOptions(e=Hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CR(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hs){return this.component?this.component.multipleInstances?e:Hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CR(n){return n===Hs?void 0:n}function SR(n){return n.instantiationMode==="EAGER"}/**
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
 */class RR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new IR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ue||(Ue={}));const AR={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},PR=Ue.INFO,kR={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},xR=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=kR[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fd{constructor(e){this.name=e,this._logLevel=PR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const NR=(n,e)=>e.some(t=>n instanceof t);let Mv,Lv;function bR(){return Mv||(Mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DR(){return Lv||(Lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i0=new WeakMap,$p=new WeakMap,s0=new WeakMap,Ap=new WeakMap,Bm=new WeakMap;function OR(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{t(Gi(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&i0.set(t,n)}).catch(()=>{}),Bm.set(e,n),e}function MR(n){if($p.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{t(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});$p.set(n,e)}let Gp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $p.get(n);if(e==="objectStoreNames")return n.objectStoreNames||s0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function LR(n){Gp=n(Gp)}function VR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pp(this),e,...t);return s0.set(r,e.sort?e.sort():[e]),Gi(r)}:DR().includes(n)?function(...e){return n.apply(Pp(this),e),Gi(i0.get(this))}:function(...e){return Gi(n.apply(Pp(this),e))}}function FR(n){return typeof n=="function"?VR(n):(n instanceof IDBTransaction&&MR(n),NR(n,bR())?new Proxy(n,Gp):n)}function Gi(n){if(n instanceof IDBRequest)return OR(n);if(Ap.has(n))return Ap.get(n);const e=FR(n);return e!==n&&(Ap.set(n,e),Bm.set(e,n)),e}const Pp=n=>Bm.get(n);function UR(n,e,{blocked:t,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,e),d=Gi(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Gi(u.result),f.oldVersion,f.newVersion,Gi(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const jR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],kp=new Map;function Vv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kp.get(e))return kp.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=zR.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jR.includes(t)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),s&&f.done]))[0]};return kp.set(e,a),a}LR(n=>({...n,get:(e,t,r)=>Vv(e,t)||n.get(e,t,r),has:(e,t)=>!!Vv(e,t)||n.has(e,t)}));/**
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
 */class BR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(WR(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function WR(n){const e=n.getComponent();return e?.type==="VERSION"}const Kp="@firebase/app",Fv="0.13.2";/**
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
 */const ui=new fd("@firebase/app"),qR="@firebase/app-compat",HR="@firebase/analytics-compat",$R="@firebase/analytics",GR="@firebase/app-check-compat",KR="@firebase/app-check",QR="@firebase/auth",YR="@firebase/auth-compat",XR="@firebase/database",JR="@firebase/data-connect",ZR="@firebase/database-compat",eA="@firebase/functions",tA="@firebase/functions-compat",nA="@firebase/installations",rA="@firebase/installations-compat",iA="@firebase/messaging",sA="@firebase/messaging-compat",oA="@firebase/performance",aA="@firebase/performance-compat",lA="@firebase/remote-config",uA="@firebase/remote-config-compat",cA="@firebase/storage",hA="@firebase/storage-compat",dA="@firebase/firestore",fA="@firebase/ai",pA="@firebase/firestore-compat",mA="firebase",gA="11.10.0";/**
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
 */const Qp="[DEFAULT]",_A={[Kp]:"fire-core",[qR]:"fire-core-compat",[$R]:"fire-analytics",[HR]:"fire-analytics-compat",[KR]:"fire-app-check",[GR]:"fire-app-check-compat",[QR]:"fire-auth",[YR]:"fire-auth-compat",[XR]:"fire-rtdb",[JR]:"fire-data-connect",[ZR]:"fire-rtdb-compat",[eA]:"fire-fn",[tA]:"fire-fn-compat",[nA]:"fire-iid",[rA]:"fire-iid-compat",[iA]:"fire-fcm",[sA]:"fire-fcm-compat",[oA]:"fire-perf",[aA]:"fire-perf-compat",[lA]:"fire-rc",[uA]:"fire-rc-compat",[cA]:"fire-gcs",[hA]:"fire-gcs-compat",[dA]:"fire-fst",[pA]:"fire-fst-compat",[fA]:"fire-vertex","fire-js":"fire-js",[mA]:"fire-js-all"};/**
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
 */const xh=new Map,yA=new Map,Yp=new Map;function Uv(n,e){try{n.container.addComponent(e)}catch(t){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ys(n){const e=n.name;if(Yp.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;Yp.set(e,n);for(const t of xh.values())Uv(t,n);for(const t of yA.values())Uv(t,n);return!0}function pd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ki=new Au("app","Firebase",vA);/**
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
 */class EA{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ki.create("app-deleted",{appName:this._name})}}/**
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
 */const so=gA;function o0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qp,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ki.create("bad-app-name",{appName:String(s)});if(t||(t=Zw()),!t)throw Ki.create("no-options");const a=xh.get(s);if(a){if(Or(t,a.options)&&Or(r,a.config))return a;throw Ki.create("duplicate-app",{appName:s})}const u=new RR(s);for(const f of Yp.values())u.addComponent(f);const d=new EA(t,r,u);return xh.set(s,d),d}function Wm(n=Qp){const e=xh.get(n);if(!e&&n===Qp&&Zw())return o0();if(!e)throw Ki.create("no-app",{appName:n});return e}function Pr(n,e,t){var r;let s=(r=_A[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(d.join(" "));return}Ys(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wA="firebase-heartbeat-database",TA=1,hu="firebase-heartbeat-store";let xp=null;function a0(){return xp||(xp=UR(wA,TA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ki.create("idb-open",{originalErrorMessage:n.message})})),xp}async function IA(n){try{const t=(await a0()).transaction(hu),r=await t.objectStore(hu).get(l0(n));return await t.done,r}catch(e){if(e instanceof mi)ui.warn(e.message);else{const t=Ki.create("idb-get",{originalErrorMessage:e?.message});ui.warn(t.message)}}}async function jv(n,e){try{const r=(await a0()).transaction(hu,"readwrite");await r.objectStore(hu).put(e,l0(n)),await r.done}catch(t){if(t instanceof mi)ui.warn(t.message);else{const r=Ki.create("idb-set",{originalErrorMessage:t?.message});ui.warn(r.message)}}}function l0(n){return`${n.name}!${n.options.appId}`}/**
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
 */const CA=1024,SA=30;class RA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new PA(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=zv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>SA){const u=kA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ui.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zv(),{heartbeatsToSend:r,unsentEntries:s}=AA(this._heartbeatsCache.heartbeats),a=Rh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return ui.warn(t),""}}}function zv(){return new Date().toISOString().substring(0,10)}function AA(n,e=CA){const t=[];let r=n.slice();for(const s of n){const a=t.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Bv(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bv(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class PA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hR()?dR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await IA(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bv(n){return Rh(JSON.stringify({version:2,heartbeats:n})).length}function kA(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function xA(n){Ys(new es("platform-logger",e=>new BR(e),"PRIVATE")),Ys(new es("heartbeat",e=>new RA(e),"PRIVATE")),Pr(Kp,Fv,n),Pr(Kp,Fv,"esm2017"),Pr("fire-js","")}xA("");var NA="firebase",bA="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr(NA,bA,"app");function qm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function u0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DA=u0,c0=new Au("auth","Firebase",u0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=new fd("@firebase/auth");function OA(n,...e){Nh.logLevel<=Ue.WARN&&Nh.warn(`Auth (${so}): ${n}`,...e)}function mh(n,...e){Nh.logLevel<=Ue.ERROR&&Nh.error(`Auth (${so}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,...e){throw Hm(n,...e)}function kr(n,...e){return Hm(n,...e)}function h0(n,e,t){const r=Object.assign(Object.assign({},DA()),{[e]:t});return new Au("auth","Firebase",r).create(e,{appName:n.name})}function oi(n){return h0(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return c0.create(n,...e)}function Ce(n,e,...t){if(!n)throw Hm(e,...t)}function ri(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mh(e),new Error(e)}function ci(n,e){n||ri(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function MA(){return Wv()==="http:"||Wv()==="https:"}function Wv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MA()||aR()||"connection"in navigator)?navigator.onLine:!0}function VA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t){this.shortDelay=e,this.longDelay=t,ci(t>e,"Short delay should be less than long delay!"),this.isMobile=zm()||n0()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n,e){ci(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jA=new Pu(3e4,6e4);function ds(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fs(n,e,t,r,s={}){return f0(n,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=La(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:f},a);return oR()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&hs(n.emulatorConfig.host)&&(m.credentials="include"),d0.fetch()(await p0(n,n.config.apiHost,t,d),m)})}async function f0(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},FA),e);try{const s=new BA(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ah(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ah(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw ah(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw ah(n,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw h0(n,v,m);pr(n,v)}}catch(s){if(s instanceof mi)throw s;pr(n,"network-request-failed",{message:String(s)})}}async function ku(n,e,t,r,s={}){const a=await fs(n,e,t,r,s);return"mfaPendingCredential"in a&&pr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function p0(n,e,t,r){const s=`${e}${t}?${r}`,a=n,u=a.config.emulator?$m(n.config,s):`${n.config.apiScheme}://${s}`;return UA.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function zA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(kr(this.auth,"network-request-failed")),jA.get())})}}function ah(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=kr(n,e,r);return s.customData._tokenResponse=t,s}function qv(n){return n!==void 0&&n.enterprise!==void 0}class WA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qA(n,e){return fs(n,"GET","/v2/recaptchaConfig",ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n,e){return fs(n,"POST","/v1/accounts:delete",e)}async function bh(n,e){return fs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $A(n,e=!1){const t=nt(n),r=await t.getIdToken(e),s=Gm(r);Ce(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a?.sign_in_provider;return{claims:s,token:r,authTime:Zl(Np(s.auth_time)),issuedAtTime:Zl(Np(s.iat)),expirationTime:Zl(Np(s.exp)),signInProvider:u||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Np(n){return Number(n)*1e3}function Gm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mh("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ah(t);return s?JSON.parse(s):(mh("Failed to decode base64 JWT payload"),null)}catch(s){return mh("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Hv(n){const e=Gm(n);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof mi&&GA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function GA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zl(this.lastLoginAt),this.creationTime=Zl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dh(n){var e;const t=n.auth,r=await n.getIdToken(),s=await du(n,bh(t,{idToken:r}));Ce(s?.users.length,t,"internal-error");const a=s.users[0];n._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?m0(a.providerUserInfo):[],d=YA(n.providerData,u),f=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!d?.length,v=f?m:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Jp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function QA(n){const e=nt(n);await Dh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function m0(n){return n.map(e=>{var{providerId:t}=e,r=qm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n,e){const t=await f0(n,{},async()=>{const r=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await p0(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return n.emulatorConfig&&hs(n.emulatorConfig.host)&&(f.credentials="include"),d0.fetch()(u,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JA(n,e){return fs(n,"POST","/v2/accounts:revokeToken",ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const t=Hv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:a}=await XA(e,t);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:a}=t,u=new pa;return r&&(Ce(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(Ce(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ce(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pa,this.toJSON())}_performRefresh(){return ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e){Ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,a=qm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Jp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await du(this,this.stsTokenManager.getToken(this.auth,e));return Ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $A(this,e)}reload(){return QA(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Dh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(oi(this.auth));const e=await this.getIdToken();return await du(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,a,u,d,f,m,v;const E=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,D=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,V=(u=t.photoURL)!==null&&u!==void 0?u:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,J=(m=t.createdAt)!==null&&m!==void 0?m:void 0,re=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ae,emailVerified:pe,isAnonymous:Me,providerData:we,stsTokenManager:O}=t;Ce(ae&&O,e,"internal-error");const A=pa.fromJSON(this.name,O);Ce(typeof ae=="string",e,"internal-error"),zi(E,e.name),zi(T,e.name),Ce(typeof pe=="boolean",e,"internal-error"),Ce(typeof Me=="boolean",e,"internal-error"),zi(D,e.name),zi(V,e.name),zi(q,e.name),zi(B,e.name),zi(J,e.name),zi(re,e.name);const S=new hr({uid:ae,auth:e,email:T,emailVerified:pe,displayName:E,isAnonymous:Me,photoURL:V,phoneNumber:D,tenantId:q,stsTokenManager:A,createdAt:J,lastLoginAt:re});return we&&Array.isArray(we)&&(S.providerData=we.map(R=>Object.assign({},R))),B&&(S._redirectEventId=B),S}static async _fromIdTokenResponse(e,t,r=!1){const s=new pa;s.updateFromServerResponse(t);const a=new hr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Dh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Ce(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?m0(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!a?.length,d=new pa;d.updateFromIdToken(r);const f=new hr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new Map;function ii(n){ci(n instanceof Function,"Expected a class definition");let e=$v.get(n);return e?(ci(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$v.set(n,e),e)}/**
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
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}g0.type="NONE";const Gv=g0;/**
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
 */function gh(n,e,t){return`firebase:${n}:${e}:${t}`}class ma{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=gh(this.userKey,s.apiKey,a),this.fullPersistenceKey=gh("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bh(this.auth,{idToken:e}).catch(()=>{});return t?hr._fromGetAccountInfoResponse(this.auth,t,e):null}return hr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ma(ii(Gv),e,r);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=s[0]||ii(Gv);const u=gh(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const v=await m._get(u);if(v){let E;if(typeof v=="string"){const T=await bh(e,{idToken:v}).catch(()=>{});if(!T)break;E=await hr._fromGetAccountInfoResponse(e,T,v)}else E=hr._fromJSON(e,v);m!==a&&(d=E),a=m;break}}catch{}const f=s.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ma(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new ma(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T0(e))return"Blackberry";if(I0(e))return"Webos";if(y0(e))return"Safari";if((e.includes("chrome/")||v0(e))&&!e.includes("edge/"))return"Chrome";if(w0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function _0(n=on()){return/firefox\//i.test(n)}function y0(n=on()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v0(n=on()){return/crios\//i.test(n)}function E0(n=on()){return/iemobile/i.test(n)}function w0(n=on()){return/android/i.test(n)}function T0(n=on()){return/blackberry/i.test(n)}function I0(n=on()){return/webos/i.test(n)}function Km(n=on()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZA(n=on()){var e;return Km(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e1(){return lR()&&document.documentMode===10}function C0(n=on()){return Km(n)||w0(n)||I0(n)||T0(n)||/windows phone/i.test(n)||E0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(n,e=[]){let t;switch(n){case"Browser":t=Kv(on());break;case"Worker":t=`${Kv(on())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${so}/${r}`}/**
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
 */class t1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function n1(n,e={}){return fs(n,"GET","/v2/passwordPolicy",ds(n,e))}/**
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
 */const r1=6;class i1{constructor(e){var t,r,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:r1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new t1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ii(t)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await ma.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bh(this,{idToken:e}),r=await hr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s?._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&f?.user&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Dh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(oi(this));const t=e?nt(e):null;return t&&Ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(oi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(oi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ii(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n1(this),t=new i1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Au("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await JA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ii(e)||this._popupRedirectResolver;Ce(t,this,"argument-error"),this.redirectPersistenceManager=await ma.create(this,[ii(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,s);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&OA(`Error while retrieving App Check token: ${t.error}`),t?.token}}function oo(n){return nt(n)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=vR(t=>this.observer=t)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o1(n){md=n}function R0(n){return md.loadJS(n)}function a1(){return md.recaptchaEnterpriseScript}function l1(){return md.gapiScript}function u1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class c1{constructor(){this.enterprise=new h1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class h1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const d1="recaptcha-enterprise",A0="NO_RECAPTCHA";class f1{constructor(e){this.type=d1,this.auth=oo(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{qA(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new WA(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;qv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(A0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new c1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!t&&qv(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=a1();f.length!==0&&(f+=d),R0(f).then(()=>{s(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function Yv(n,e,t,r=!1,s=!1){const a=new f1(n);let u;if(s)u=A0;else try{u=await a.verify(t)}catch{u=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Zp(n,e,t,r,s){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Yv(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Yv(n,e,t,t==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n,e){const t=pd(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(Or(a,e??{}))return s;pr(s,"already-initialized")}return t.initialize({options:e})}function m1(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ii);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function g1(n,e,t){const r=oo(n);Ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,a=P0(e),{host:u,port:d}=_1(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ce(Or(m,r.config.emulator)&&Or(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,hs(u)?(Um(`${a}//${u}${f}`),jm("Auth",!0)):y1()}function P0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _1(n){const e=P0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Xv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Xv(u)}}}function Xv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function y1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ri("not implemented")}_getIdTokenResponse(e){return ri("not implemented")}_linkToIdToken(e,t){return ri("not implemented")}_getReauthenticationResolver(e){return ri("not implemented")}}async function v1(n,e){return fs(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(n,e){return ku(n,"POST","/v1/accounts:signInWithPassword",ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(n,e){return ku(n,"POST","/v1/accounts:signInWithEmailLink",ds(n,e))}async function T1(n,e){return ku(n,"POST","/v1/accounts:signInWithEmailLink",ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends Qm{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new fu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zp(e,t,"signInWithPassword",E1);case"emailLink":return w1(e,{email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zp(e,r,"signUpPassword",v1);case"emailLink":return T1(e,{idToken:t,email:this._email,oobCode:this._password});default:pr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(n,e){return ku(n,"POST","/v1/accounts:signInWithIdp",ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="http://localhost";class Xs extends Qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,a=qm(t,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Xs(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return ga(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ga(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ga(e,t)}buildRequest(){const e={requestUri:I1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=La(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S1(n){const e=Hl($l(n)).link,t=e?Hl($l(e)).deep_link_id:null,r=Hl($l(n)).deep_link_id;return(r?Hl($l(r)).link:null)||r||t||e||n}class Ym{constructor(e){var t,r,s,a,u,d;const f=Hl($l(e)),m=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,E=C1((s=f.mode)!==null&&s!==void 0?s:null);Ce(m&&v&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=S1(e);try{return new Ym(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.providerId=Va.PROVIDER_ID}static credential(e,t){return fu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ym.parseLink(t);return Ce(r,"argument-error"),fu._fromEmailAndCode(e,r.code,r.tenantId)}}Va.PROVIDER_ID="password";Va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xu extends k0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends xu{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch{return null}}}Bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends xu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xs._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Wi.credential(t,r)}catch{return null}}}Wi.GOOGLE_SIGN_IN_METHOD="google.com";Wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends xu{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qi.credential(e.oauthAccessToken)}catch{return null}}}qi.GITHUB_SIGN_IN_METHOD="github.com";qi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends xu{constructor(){super("twitter.com")}static credential(e,t){return Xs._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Hi.credential(t,r)}catch{return null}}}Hi.TWITTER_SIGN_IN_METHOD="twitter.com";Hi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(n,e){return ku(n,"POST","/v1/accounts:signUp",ds(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const a=await hr._fromIdTokenResponse(e,r,s),u=Jv(r);return new Js({user:a,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Jv(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Jv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends mi{constructor(e,t,r,s){var a;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Oh(e,t,r,s)}}function x0(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Oh._fromErrorAndOperation(n,a,e,r):a})}async function A1(n,e,t=!1){const r=await du(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Js._forOperation(n,"link",r)}/**
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
 */async function P1(n,e,t=!1){const{auth:r}=n;if(bn(r.app))return Promise.reject(oi(r));const s="reauthenticate";try{const a=await du(n,x0(r,s,e,n),t);Ce(a.idToken,r,"internal-error");const u=Gm(a.idToken);Ce(u,r,"internal-error");const{sub:d}=u;return Ce(n.uid===d,r,"user-mismatch"),Js._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&pr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(n,e,t=!1){if(bn(n.app))return Promise.reject(oi(n));const r="signIn",s=await x0(n,r,e),a=await Js._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(a.user),a}async function k1(n,e){return N0(oo(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(n){const e=oo(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x1(n,e,t){if(bn(n.app))return Promise.reject(oi(n));const r=oo(n),u=await Zp(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",R1).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&b0(n),f}),d=await Js._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function N1(n,e,t){return bn(n.app)?Promise.reject(oi(n)):k1(nt(n),Va.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&b0(n),r})}function b1(n,e,t,r){return nt(n).onIdTokenChanged(e,t,r)}function D1(n,e,t){return nt(n).beforeAuthStateChanged(e,t)}function O1(n,e,t,r){return nt(n).onAuthStateChanged(e,t,r)}function M1(n){return nt(n).signOut()}const Mh="__sak";/**
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
 */class D0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mh,"1"),this.storage.removeItem(Mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=1e3,V1=10;class O0 extends D0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);e1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,V1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},L1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}O0.type="LOCAL";const F1=O0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends D0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}M0.type="SESSION";const L0=M0;/**
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
 */function U1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class gd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new gd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:a}=t.data,u=this.handlersMap[s];if(!u?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async m=>m(t.origin,a)),f=await U1(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class j1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=Xm("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const T=E;if(T.data.eventId===m)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return window}function z1(n){xr().location.href=n}/**
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
 */function V0(){return typeof xr().WorkerGlobalScope<"u"&&typeof xr().importScripts=="function"}async function B1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W1(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function q1(){return V0()?self:null}/**
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
 */const F0="firebaseLocalStorageDb",H1=1,Lh="firebaseLocalStorage",U0="fbase_key";class Nu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _d(n,e){return n.transaction([Lh],e?"readwrite":"readonly").objectStore(Lh)}function $1(){const n=indexedDB.deleteDatabase(F0);return new Nu(n).toPromise()}function em(){const n=indexedDB.open(F0,H1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Lh,{keyPath:U0})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Lh)?e(r):(r.close(),await $1(),e(await em()))})})}async function Zv(n,e,t){const r=_d(n,!0).put({[U0]:e,value:t});return new Nu(r).toPromise()}async function G1(n,e){const t=_d(n,!1).get(e),r=await new Nu(t).toPromise();return r===void 0?null:r.value}function eE(n,e){const t=_d(n,!0).delete(e);return new Nu(t).toPromise()}const K1=800,Q1=3;class j0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await em(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return V0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gd._getInstance(q1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await B1(),!this.activeServiceWorker)return;this.sender=new j1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await em();return await Zv(e,Mh,"1"),await eE(e,Mh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zv(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>G1(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=_d(s,!1).getAll();return new Nu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j0.type="LOCAL";const Y1=j0;new Pu(3e4,6e4);/**
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
 */function X1(n,e){return e?ii(e):(Ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jm extends Qm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ga(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ga(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ga(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function J1(n){return N0(n.auth,new Jm(n),n.bypassAuthState)}function Z1(n){const{auth:e,user:t}=n;return Ce(t,e,"internal-error"),P1(t,new Jm(n),n.bypassAuthState)}async function eP(n){const{auth:e,user:t}=n;return Ce(t,e,"internal-error"),A1(t,new Jm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,t,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return J1;case"linkViaPopup":case"linkViaRedirect":return eP;case"reauthViaPopup":case"reauthViaRedirect":return Z1;default:pr(this.auth,"internal-error")}}resolve(e){ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=new Pu(2e3,1e4);class ha extends z0{constructor(e,t,r,s,a){super(e,t,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ha.currentPopupAction&&ha.currentPopupAction.cancel(),ha.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){ci(this.filter.length===1,"Popup operations only handle one event");const e=Xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ha.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tP.get())};e()}}ha.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="pendingRedirect",_h=new Map;class rP extends z0{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_h.get(this.auth._key());if(!e){try{const r=await iP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_h.set(this.auth._key(),e)}return this.bypassAuthState||_h.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iP(n,e){const t=aP(e),r=oP(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function sP(n,e){_h.set(n._key(),e)}function oP(n){return ii(n._redirectPersistence)}function aP(n){return gh(nP,n.config.apiKey,n.name)}async function lP(n,e,t=!1){if(bn(n.app))return Promise.reject(oi(n));const r=oo(n),s=X1(r,e),u=await new rP(r,s,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=10*60*1e3;class cP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!B0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(kr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uP&&this.cachedEventUids.clear(),this.cachedEventUids.has(tE(e))}saveEventToCache(e){this.cachedEventUids.add(tE(e)),this.lastProcessedEventTime=Date.now()}}function tE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function B0({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function hP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(n,e={}){return fs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pP=/^https?/;async function mP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dP(n);for(const t of e)try{if(gP(t))return}catch{}pr(n,"unauthorized-domain")}function gP(n){const e=Xp(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!pP.test(t))return!1;if(fP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _P=new Pu(3e4,6e4);function nE(){const n=xr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yP(n){return new Promise((e,t)=>{var r,s,a;function u(){nE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nE(),t(kr(n,"network-request-failed"))},timeout:_P.get()})}if(!((s=(r=xr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=xr().gapi)===null||a===void 0)&&a.load)u();else{const d=u1("iframefcb");return xr()[d]=()=>{gapi.load?u():t(kr(n,"network-request-failed"))},R0(`${l1()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw yh=null,e})}let yh=null;function vP(n){return yh=yh||yP(n),yh}/**
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
 */const EP=new Pu(5e3,15e3),wP="__/auth/iframe",TP="emulator/auth/iframe",IP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SP(n){const e=n.config;Ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$m(e,TP):`https://${n.config.authDomain}/${wP}`,r={apiKey:e.apiKey,appName:n.name,v:so},s=CP.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${La(r).slice(1)}`}async function RP(n){const e=await vP(n),t=xr().gapi;return Ce(t,n,"internal-error"),e.open({where:document.body,url:SP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IP,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=kr(n,"network-request-failed"),d=xr().setTimeout(()=>{a(u)},EP.get());function f(){xr().clearTimeout(d),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const AP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PP=500,kP=600,xP="_blank",NP="http://localhost";class rE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bP(n,e,t,r=PP,s=kP){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},AP),{width:r.toString(),height:s.toString(),top:a,left:u}),m=on().toLowerCase();t&&(d=v0(m)?xP:t),_0(m)&&(e=e||NP,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[D,V])=>`${T}${D}=${V},`,"");if(ZA(m)&&d!=="_self")return DP(e||"",d),new rE(null);const E=window.open(e||"",d,v);Ce(E,n,"popup-blocked");try{E.focus()}catch{}return new rE(E)}function DP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const OP="__/auth/handler",MP="emulator/auth/handler",LP=encodeURIComponent("fac");async function iE(n,e,t,r,s,a){Ce(n.config.authDomain,n,"auth-domain-config-required"),Ce(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:so,eventId:s};if(e instanceof k0){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",Ph(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))u[v]=E}if(e instanceof xu){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),m=f?`#${LP}=${encodeURIComponent(f)}`:"";return`${VP(n)}?${La(d).slice(1)}${m}`}function VP({config:n}){return n.emulator?$m(n,MP):`https://${n.authDomain}/${OP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="webStorageSupport";class FP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=L0,this._completeRedirectFn=lP,this._overrideRedirectResult=sP}async _openPopup(e,t,r,s){var a;ci((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await iE(e,t,r,Xp(),s);return bP(e,u,Xm())}async _openRedirect(e,t,r,s){await this._originValidation(e);const a=await iE(e,t,r,Xp(),s);return z1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(ci(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await RP(e),r=new cP(e);return t.register("authEvent",s=>(Ce(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bp,{type:bp},s=>{var a;const u=(a=s?.[0])===null||a===void 0?void 0:a[bp];u!==void 0&&t(!!u),pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return C0()||y0()||Km()}}const UP=FP;var sE="@firebase/auth",oE="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BP(n){Ys(new es("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ce(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(n)},m=new s1(r,s,a,f);return m1(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ys(new es("auth-internal",e=>{const t=oo(e.getProvider("auth").getImmediate());return(r=>new jP(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pr(sE,oE,zP(n)),Pr(sE,oE,"esm2017")}/**
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
 */const WP=5*60,qP=e0("authIdTokenMaxAge")||WP;let aE=null;const HP=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qP)return;const s=t?.token;aE!==s&&(aE=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $P(n=Wm()){const e=pd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=p1(n,{popupRedirectResolver:UP,persistence:[Y1,F1,L0]}),r=e0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=HP(a.toString());D1(t,u,()=>u(t.currentUser)),b1(t,d=>u(d))}}const s=Xw("auth");return s&&g1(t,`http://${s}`),t}function GP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}o1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const a=kr("internal-error");a.customData=s,t(a)},r.type="text/javascript",r.charset="UTF-8",GP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BP("Browser");var lE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qi,W0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,A){function S(){}S.prototype=A.prototype,O.D=A.prototype,O.prototype=new S,O.prototype.constructor=O,O.C=function(R,k,N){for(var C=Array(arguments.length-2),me=2;me<arguments.length;me++)C[me-2]=arguments[me];return A.prototype[k].apply(R,C)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(O,A,S){S||(S=0);var R=Array(16);if(typeof A=="string")for(var k=0;16>k;++k)R[k]=A.charCodeAt(S++)|A.charCodeAt(S++)<<8|A.charCodeAt(S++)<<16|A.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=A[S++]|A[S++]<<8|A[S++]<<16|A[S++]<<24;A=O.g[0],S=O.g[1],k=O.g[2];var N=O.g[3],C=A+(N^S&(k^N))+R[0]+3614090360&4294967295;A=S+(C<<7&4294967295|C>>>25),C=N+(k^A&(S^k))+R[1]+3905402710&4294967295,N=A+(C<<12&4294967295|C>>>20),C=k+(S^N&(A^S))+R[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=S+(A^k&(N^A))+R[3]+3250441966&4294967295,S=k+(C<<22&4294967295|C>>>10),C=A+(N^S&(k^N))+R[4]+4118548399&4294967295,A=S+(C<<7&4294967295|C>>>25),C=N+(k^A&(S^k))+R[5]+1200080426&4294967295,N=A+(C<<12&4294967295|C>>>20),C=k+(S^N&(A^S))+R[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=S+(A^k&(N^A))+R[7]+4249261313&4294967295,S=k+(C<<22&4294967295|C>>>10),C=A+(N^S&(k^N))+R[8]+1770035416&4294967295,A=S+(C<<7&4294967295|C>>>25),C=N+(k^A&(S^k))+R[9]+2336552879&4294967295,N=A+(C<<12&4294967295|C>>>20),C=k+(S^N&(A^S))+R[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=S+(A^k&(N^A))+R[11]+2304563134&4294967295,S=k+(C<<22&4294967295|C>>>10),C=A+(N^S&(k^N))+R[12]+1804603682&4294967295,A=S+(C<<7&4294967295|C>>>25),C=N+(k^A&(S^k))+R[13]+4254626195&4294967295,N=A+(C<<12&4294967295|C>>>20),C=k+(S^N&(A^S))+R[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=S+(A^k&(N^A))+R[15]+1236535329&4294967295,S=k+(C<<22&4294967295|C>>>10),C=A+(k^N&(S^k))+R[1]+4129170786&4294967295,A=S+(C<<5&4294967295|C>>>27),C=N+(S^k&(A^S))+R[6]+3225465664&4294967295,N=A+(C<<9&4294967295|C>>>23),C=k+(A^S&(N^A))+R[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=S+(N^A&(k^N))+R[0]+3921069994&4294967295,S=k+(C<<20&4294967295|C>>>12),C=A+(k^N&(S^k))+R[5]+3593408605&4294967295,A=S+(C<<5&4294967295|C>>>27),C=N+(S^k&(A^S))+R[10]+38016083&4294967295,N=A+(C<<9&4294967295|C>>>23),C=k+(A^S&(N^A))+R[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=S+(N^A&(k^N))+R[4]+3889429448&4294967295,S=k+(C<<20&4294967295|C>>>12),C=A+(k^N&(S^k))+R[9]+568446438&4294967295,A=S+(C<<5&4294967295|C>>>27),C=N+(S^k&(A^S))+R[14]+3275163606&4294967295,N=A+(C<<9&4294967295|C>>>23),C=k+(A^S&(N^A))+R[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=S+(N^A&(k^N))+R[8]+1163531501&4294967295,S=k+(C<<20&4294967295|C>>>12),C=A+(k^N&(S^k))+R[13]+2850285829&4294967295,A=S+(C<<5&4294967295|C>>>27),C=N+(S^k&(A^S))+R[2]+4243563512&4294967295,N=A+(C<<9&4294967295|C>>>23),C=k+(A^S&(N^A))+R[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=S+(N^A&(k^N))+R[12]+2368359562&4294967295,S=k+(C<<20&4294967295|C>>>12),C=A+(S^k^N)+R[5]+4294588738&4294967295,A=S+(C<<4&4294967295|C>>>28),C=N+(A^S^k)+R[8]+2272392833&4294967295,N=A+(C<<11&4294967295|C>>>21),C=k+(N^A^S)+R[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=S+(k^N^A)+R[14]+4259657740&4294967295,S=k+(C<<23&4294967295|C>>>9),C=A+(S^k^N)+R[1]+2763975236&4294967295,A=S+(C<<4&4294967295|C>>>28),C=N+(A^S^k)+R[4]+1272893353&4294967295,N=A+(C<<11&4294967295|C>>>21),C=k+(N^A^S)+R[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=S+(k^N^A)+R[10]+3200236656&4294967295,S=k+(C<<23&4294967295|C>>>9),C=A+(S^k^N)+R[13]+681279174&4294967295,A=S+(C<<4&4294967295|C>>>28),C=N+(A^S^k)+R[0]+3936430074&4294967295,N=A+(C<<11&4294967295|C>>>21),C=k+(N^A^S)+R[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=S+(k^N^A)+R[6]+76029189&4294967295,S=k+(C<<23&4294967295|C>>>9),C=A+(S^k^N)+R[9]+3654602809&4294967295,A=S+(C<<4&4294967295|C>>>28),C=N+(A^S^k)+R[12]+3873151461&4294967295,N=A+(C<<11&4294967295|C>>>21),C=k+(N^A^S)+R[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=S+(k^N^A)+R[2]+3299628645&4294967295,S=k+(C<<23&4294967295|C>>>9),C=A+(k^(S|~N))+R[0]+4096336452&4294967295,A=S+(C<<6&4294967295|C>>>26),C=N+(S^(A|~k))+R[7]+1126891415&4294967295,N=A+(C<<10&4294967295|C>>>22),C=k+(A^(N|~S))+R[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=S+(N^(k|~A))+R[5]+4237533241&4294967295,S=k+(C<<21&4294967295|C>>>11),C=A+(k^(S|~N))+R[12]+1700485571&4294967295,A=S+(C<<6&4294967295|C>>>26),C=N+(S^(A|~k))+R[3]+2399980690&4294967295,N=A+(C<<10&4294967295|C>>>22),C=k+(A^(N|~S))+R[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=S+(N^(k|~A))+R[1]+2240044497&4294967295,S=k+(C<<21&4294967295|C>>>11),C=A+(k^(S|~N))+R[8]+1873313359&4294967295,A=S+(C<<6&4294967295|C>>>26),C=N+(S^(A|~k))+R[15]+4264355552&4294967295,N=A+(C<<10&4294967295|C>>>22),C=k+(A^(N|~S))+R[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=S+(N^(k|~A))+R[13]+1309151649&4294967295,S=k+(C<<21&4294967295|C>>>11),C=A+(k^(S|~N))+R[4]+4149444226&4294967295,A=S+(C<<6&4294967295|C>>>26),C=N+(S^(A|~k))+R[11]+3174756917&4294967295,N=A+(C<<10&4294967295|C>>>22),C=k+(A^(N|~S))+R[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=S+(N^(k|~A))+R[9]+3951481745&4294967295,O.g[0]=O.g[0]+A&4294967295,O.g[1]=O.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,O.g[2]=O.g[2]+k&4294967295,O.g[3]=O.g[3]+N&4294967295}r.prototype.u=function(O,A){A===void 0&&(A=O.length);for(var S=A-this.blockSize,R=this.B,k=this.h,N=0;N<A;){if(k==0)for(;N<=S;)s(this,O,N),N+=this.blockSize;if(typeof O=="string"){for(;N<A;)if(R[k++]=O.charCodeAt(N++),k==this.blockSize){s(this,R),k=0;break}}else for(;N<A;)if(R[k++]=O[N++],k==this.blockSize){s(this,R),k=0;break}}this.h=k,this.o+=A},r.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var A=1;A<O.length-8;++A)O[A]=0;var S=8*this.o;for(A=O.length-8;A<O.length;++A)O[A]=S&255,S/=256;for(this.u(O),O=Array(16),A=S=0;4>A;++A)for(var R=0;32>R;R+=8)O[S++]=this.g[A]>>>R&255;return O};function a(O,A){var S=d;return Object.prototype.hasOwnProperty.call(S,O)?S[O]:S[O]=A(O)}function u(O,A){this.h=A;for(var S=[],R=!0,k=O.length-1;0<=k;k--){var N=O[k]|0;R&&N==A||(S[k]=N,R=!1)}this.g=S}var d={};function f(O){return-128<=O&&128>O?a(O,function(A){return new u([A|0],0>A?-1:0)}):new u([O|0],0>O?-1:0)}function m(O){if(isNaN(O)||!isFinite(O))return E;if(0>O)return B(m(-O));for(var A=[],S=1,R=0;O>=S;R++)A[R]=O/S|0,S*=4294967296;return new u(A,0)}function v(O,A){if(O.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(O.charAt(0)=="-")return B(v(O.substring(1),A));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=m(Math.pow(A,8)),R=E,k=0;k<O.length;k+=8){var N=Math.min(8,O.length-k),C=parseInt(O.substring(k,k+N),A);8>N?(N=m(Math.pow(A,N)),R=R.j(N).add(m(C))):(R=R.j(S),R=R.add(m(C)))}return R}var E=f(0),T=f(1),D=f(16777216);n=u.prototype,n.m=function(){if(q(this))return-B(this).m();for(var O=0,A=1,S=0;S<this.g.length;S++){var R=this.i(S);O+=(0<=R?R:4294967296+R)*A,A*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(V(this))return"0";if(q(this))return"-"+B(this).toString(O);for(var A=m(Math.pow(O,6)),S=this,R="";;){var k=pe(S,A).g;S=J(S,k.j(A));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(O);if(S=k,V(S))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function V(O){if(O.h!=0)return!1;for(var A=0;A<O.g.length;A++)if(O.g[A]!=0)return!1;return!0}function q(O){return O.h==-1}n.l=function(O){return O=J(this,O),q(O)?-1:V(O)?0:1};function B(O){for(var A=O.g.length,S=[],R=0;R<A;R++)S[R]=~O.g[R];return new u(S,~O.h).add(T)}n.abs=function(){return q(this)?B(this):this},n.add=function(O){for(var A=Math.max(this.g.length,O.g.length),S=[],R=0,k=0;k<=A;k++){var N=R+(this.i(k)&65535)+(O.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(O.i(k)>>>16);R=C>>>16,N&=65535,C&=65535,S[k]=C<<16|N}return new u(S,S[S.length-1]&-2147483648?-1:0)};function J(O,A){return O.add(B(A))}n.j=function(O){if(V(this)||V(O))return E;if(q(this))return q(O)?B(this).j(B(O)):B(B(this).j(O));if(q(O))return B(this.j(B(O)));if(0>this.l(D)&&0>O.l(D))return m(this.m()*O.m());for(var A=this.g.length+O.g.length,S=[],R=0;R<2*A;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<O.g.length;k++){var N=this.i(R)>>>16,C=this.i(R)&65535,me=O.i(k)>>>16,Re=O.i(k)&65535;S[2*R+2*k]+=C*Re,re(S,2*R+2*k),S[2*R+2*k+1]+=N*Re,re(S,2*R+2*k+1),S[2*R+2*k+1]+=C*me,re(S,2*R+2*k+1),S[2*R+2*k+2]+=N*me,re(S,2*R+2*k+2)}for(R=0;R<A;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=A;R<2*A;R++)S[R]=0;return new u(S,0)};function re(O,A){for(;(O[A]&65535)!=O[A];)O[A+1]+=O[A]>>>16,O[A]&=65535,A++}function ae(O,A){this.g=O,this.h=A}function pe(O,A){if(V(A))throw Error("division by zero");if(V(O))return new ae(E,E);if(q(O))return A=pe(B(O),A),new ae(B(A.g),B(A.h));if(q(A))return A=pe(O,B(A)),new ae(B(A.g),A.h);if(30<O.g.length){if(q(O)||q(A))throw Error("slowDivide_ only works with positive integers.");for(var S=T,R=A;0>=R.l(O);)S=Me(S),R=Me(R);var k=we(S,1),N=we(R,1);for(R=we(R,2),S=we(S,2);!V(R);){var C=N.add(R);0>=C.l(O)&&(k=k.add(S),N=C),R=we(R,1),S=we(S,1)}return A=J(O,k.j(A)),new ae(k,A)}for(k=E;0<=O.l(A);){for(S=Math.max(1,Math.floor(O.m()/A.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=m(S),C=N.j(A);q(C)||0<C.l(O);)S-=R,N=m(S),C=N.j(A);V(N)&&(N=T),k=k.add(N),O=J(O,C)}return new ae(k,O)}n.A=function(O){return pe(this,O).h},n.and=function(O){for(var A=Math.max(this.g.length,O.g.length),S=[],R=0;R<A;R++)S[R]=this.i(R)&O.i(R);return new u(S,this.h&O.h)},n.or=function(O){for(var A=Math.max(this.g.length,O.g.length),S=[],R=0;R<A;R++)S[R]=this.i(R)|O.i(R);return new u(S,this.h|O.h)},n.xor=function(O){for(var A=Math.max(this.g.length,O.g.length),S=[],R=0;R<A;R++)S[R]=this.i(R)^O.i(R);return new u(S,this.h^O.h)};function Me(O){for(var A=O.g.length+1,S=[],R=0;R<A;R++)S[R]=O.i(R)<<1|O.i(R-1)>>>31;return new u(S,O.h)}function we(O,A){var S=A>>5;A%=32;for(var R=O.g.length-S,k=[],N=0;N<R;N++)k[N]=0<A?O.i(N+S)>>>A|O.i(N+S+1)<<32-A:O.i(N+S);return new u(k,O.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,W0=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,Qi=u}).apply(typeof lE<"u"?lE:typeof self<"u"?self:typeof window<"u"?window:{});var lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var q0,Gl,H0,vh,tm,$0,G0,K0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,y){return c==Array.prototype||c==Object.prototype||(c[g]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof lh=="object"&&lh];for(var g=0;g<c.length;++g){var y=c[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=t(this);function s(c,g){if(g)e:{var y=r;c=c.split(".");for(var I=0;I<c.length-1;I++){var F=c[I];if(!(F in y))break e;y=y[F]}c=c[c.length-1],I=y[c],g=g(I),g!=I&&g!=null&&e(y,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var y=0,I=!1,F={next:function(){if(!I&&y<c.length){var W=y++;return{value:g(W,c[W]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(c){return c||function(){return a(this,function(g,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,y){return c.call.apply(c.bind,arguments)}function E(c,g,y){if(!c)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),c.apply(g,F)}}return function(){return c.apply(g,arguments)}}function T(c,g,y){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function D(c,g){var y=Array.prototype.slice.call(arguments,1);return function(){var I=y.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function V(c,g){function y(){}y.prototype=g.prototype,c.aa=g.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(I,F,W){for(var te=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)te[Xe-2]=arguments[Xe];return g.prototype[F].apply(I,te)}}function q(c){const g=c.length;if(0<g){const y=Array(g);for(let I=0;I<g;I++)y[I]=c[I];return y}return[]}function B(c,g){for(let y=1;y<arguments.length;y++){const I=arguments[y];if(f(I)){const F=c.length||0,W=I.length||0;c.length=F+W;for(let te=0;te<W;te++)c[F+te]=I[te]}else c.push(I)}}class J{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function re(c){return/^[\s\xa0]*$/.test(c)}function ae(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function pe(c){return pe[" "](c),c}pe[" "]=function(){};var Me=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function we(c,g,y){for(const I in c)g.call(y,c[I],I,c)}function O(c,g){for(const y in c)g.call(void 0,c[y],y,c)}function A(c){const g={};for(const y in c)g[y]=c[y];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(c,g){let y,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(y in I)c[y]=I[y];for(let W=0;W<S.length;W++)y=S[W],Object.prototype.hasOwnProperty.call(I,y)&&(c[y]=I[y])}}function k(c){var g=1;c=c.split(":");const y=[];for(;0<g&&c.length;)y.push(c.shift()),g--;return c.length&&y.push(c.join(":")),y}function N(c){d.setTimeout(()=>{throw c},0)}function C(){var c=ge;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class me{constructor(){this.h=this.g=null}add(g,y){const I=Re.get();I.set(g,y),this.h?this.h.next=I:this.g=I,this.h=I}}var Re=new J(()=>new Ke,c=>c.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Y=!1,ge=new me,ie=()=>{const c=d.Promise.resolve(void 0);Te=()=>{c.then(L)}};var L=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(y){N(y)}var g=Re;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}Y=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ne=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,g),d.removeEventListener("test",y,g)}catch{}return c}();function xe(c,g){if(de.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(Me){e:{try{pe(g.nodeName);var F=!0;break e}catch{}F=!1}F||(g=null)}}else y=="mouseover"?g=c.fromElement:y=="mouseout"&&(g=c.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&xe.aa.h.call(this)}}V(xe,de);var be={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Be=0;function je(c,g,y,I,F){this.listener=c,this.proxy=null,this.src=g,this.type=y,this.capture=!!I,this.ha=F,this.key=++Be,this.da=this.fa=!1}function Dt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Vr(c){this.src=c,this.g={},this.h=0}Vr.prototype.add=function(c,g,y,I,F){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var te=gi(c,g,I,F);return-1<te?(g=c[te],y||(g.fa=!1)):(g=new je(g,this.src,W,!!I,F),g.fa=y,c.push(g)),g};function po(c,g){var y=g.type;if(y in c.g){var I=c.g[y],F=Array.prototype.indexOf.call(I,g,void 0),W;(W=0<=F)&&Array.prototype.splice.call(I,F,1),W&&(Dt(g),c.g[y].length==0&&(delete c.g[y],c.h--))}}function gi(c,g,y,I){for(var F=0;F<c.length;++F){var W=c[F];if(!W.da&&W.listener==g&&W.capture==!!y&&W.ha==I)return F}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),mo={};function $a(c,g,y,I,F){if(Array.isArray(g)){for(var W=0;W<g.length;W++)$a(c,g[W],y,I,F);return null}return y=Qa(y),c&&c[fe]?c.K(g,y,m(I)?!!I.capture:!1,F):Ga(c,g,y,!1,I,F)}function Ga(c,g,y,I,F,W){if(!g)throw Error("Invalid event type");var te=m(F)?!!F.capture:!!F,Xe=_o(c);if(Xe||(c[_s]=Xe=new Vr(c)),y=Xe.add(g,y,I,te,W),y.proxy)return y;if(I=Hu(),y.proxy=I,I.src=c,I.listener=y,c.addEventListener)Ne||(F=te),F===void 0&&(F=!1),c.addEventListener(g.toString(),I,F);else if(c.attachEvent)c.attachEvent(Ur(g.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Hu(){function c(y){return g.call(c.src,c.listener,y)}const g=Ka;return c}function go(c,g,y,I,F){if(Array.isArray(g))for(var W=0;W<g.length;W++)go(c,g[W],y,I,F);else I=m(I)?!!I.capture:!!I,y=Qa(y),c&&c[fe]?(c=c.i,g=String(g).toString(),g in c.g&&(W=c.g[g],y=gi(W,y,I,F),-1<y&&(Dt(W[y]),Array.prototype.splice.call(W,y,1),W.length==0&&(delete c.g[g],c.h--)))):c&&(c=_o(c))&&(g=c.g[g.toString()],c=-1,g&&(c=gi(g,y,I,F)),(y=-1<c?g[c]:null)&&Fr(y))}function Fr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[fe])po(g.i,c);else{var y=c.type,I=c.proxy;g.removeEventListener?g.removeEventListener(y,I,c.capture):g.detachEvent?g.detachEvent(Ur(y),I):g.addListener&&g.removeListener&&g.removeListener(I),(y=_o(g))?(po(y,c),y.h==0&&(y.src=null,g[_s]=null)):Dt(c)}}}function Ur(c){return c in mo?mo[c]:mo[c]="on"+c}function Ka(c,g){if(c.da)c=!0;else{g=new xe(g,this);var y=c.listener,I=c.ha||c.src;c.fa&&Fr(c),c=y.call(I,g)}return c}function _o(c){return c=c[_s],c instanceof Vr?c:null}var yo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qa(c){return typeof c=="function"?c:(c[yo]||(c[yo]=function(g){return c.handleEvent(g)}),c[yo])}function At(){$.call(this),this.i=new Vr(this),this.M=this,this.F=null}V(At,$),At.prototype[fe]=!0,At.prototype.removeEventListener=function(c,g,y,I){go(this,c,g,y,I)};function Pt(c,g){var y,I=c.F;if(I)for(y=[];I;I=I.F)y.push(I);if(c=c.M,I=g.type||g,typeof g=="string")g=new de(g,c);else if(g instanceof de)g.target=g.target||c;else{var F=g;g=new de(I,c),R(g,F)}if(F=!0,y)for(var W=y.length-1;0<=W;W--){var te=g.g=y[W];F=jr(te,I,!0,g)&&F}if(te=g.g=c,F=jr(te,I,!0,g)&&F,F=jr(te,I,!1,g)&&F,y)for(W=0;W<y.length;W++)te=g.g=y[W],F=jr(te,I,!1,g)&&F}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var y=c.g[g],I=0;I<y.length;I++)Dt(y[I]);delete c.g[g],c.h--}}this.F=null},At.prototype.K=function(c,g,y,I){return this.i.add(String(c),g,!1,y,I)},At.prototype.L=function(c,g,y,I){return this.i.add(String(c),g,!0,y,I)};function jr(c,g,y,I){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var F=!0,W=0;W<g.length;++W){var te=g[W];if(te&&!te.da&&te.capture==y){var Xe=te.listener,kt=te.ha||te.src;te.fa&&po(c.i,te),F=Xe.call(kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Ya(c,g,y){if(typeof c=="function")y&&(c=T(c,y));else if(c&&typeof c.handleEvent=="function")c=T(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function _i(c){c.g=Ya(()=>{c.g=null,c.i&&(c.i=!1,_i(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ys extends ${constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(c){$.call(this),this.h=c,this.g={}}V(vs,$);var Xa=[];function Ja(c){we(c.g,function(g,y){this.g.hasOwnProperty(y)&&Fr(g)},c),c.g={}}vs.prototype.N=function(){vs.aa.N.call(this),Ja(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Za=d.JSON.stringify,el=d.JSON.parse,tl=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Es(){}Es.prototype.h=null;function vo(c){return c.h||(c.h=c.i())}function Eo(){}var Ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){de.call(this,"d")}V(gr,de);function wo(){de.call(this,"c")}V(wo,de);var _r={},nl=null;function ws(){return nl=nl||new At}_r.La="serverreachability";function rl(c){de.call(this,_r.La,c)}V(rl,de);function zr(c){const g=ws();Pt(g,new rl(g))}_r.STAT_EVENT="statevent";function il(c,g){de.call(this,_r.STAT_EVENT,c),this.stat=g}V(il,de);function gt(c){const g=ws();Pt(g,new il(g,c))}_r.Ma="timingevent";function To(c,g){de.call(this,_r.Ma,c),this.size=g}V(To,de);function Kn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function Is(c,g,y,I,F,W){c.info(function(){if(c.g)if(W)for(var te="",Xe=W.split("&"),kt=0;kt<Xe.length;kt++){var qe=Xe[kt].split("=");if(1<qe.length){var Ot=qe[0];qe=qe[1];var Et=Ot.split("_");te=2<=Et.length&&Et[1]=="type"?te+(Ot+"="+qe+"&"):te+(Ot+"=redacted&")}}else te=null;else te=W;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+g+`
`+y+`
`+te})}function Io(c,g,y,I,F,W,te){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+g+`
`+y+`
`+W+" "+te})}function Qn(c,g,y,I){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Kd(c,y)+(I?" "+I:"")})}function sl(c,g){c.info(function(){return"TIMEOUT: "+g})}Ts.prototype.info=function(){};function Kd(c,g){if(!c.g)return g;if(!g)return null;try{var y=JSON.parse(g);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var I=y[c];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var te=1;te<F.length;te++)F[te]=""}}}}return Za(y)}catch{return g}}var Co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function Cs(){}V(Cs,Es),Cs.prototype.g=function(){return new XMLHttpRequest},Cs.prototype.i=function(){return{}},Yn=new Cs;function Xn(c,g,y,I){this.j=c,this.i=g,this.l=y,this.R=I||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gu}function Gu(){this.i=null,this.g="",this.h=!1}var ol={},So={};function Ro(c,g,y){c.L=1,c.v=Ti(Rn(g)),c.m=y,c.P=!0,al(c,null)}function al(c,g){c.F=Date.now(),rt(c),c.A=Rn(c.v);var y=c.A,I=c.R;Array.isArray(I)||(I=[String(I)]),Ci(y.i,"t",I),c.C=0,y=c.j.J,c.h=new Gu,c.g=hc(c.j,y?g:null,!c.m),0<c.O&&(c.M=new ys(T(c.Y,c,c.g),c.O)),g=c.U,y=c.g,I=c.ca;var F="readystatechange";Array.isArray(F)||(F&&(Xa[0]=F.toString()),F=Xa);for(var W=0;W<F.length;W++){var te=$a(y,F[W],I||g.handleEvent,!1,g.h||g);if(!te)break;g.g[te.key]=te}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),zr(),Is(c.i,c.u,c.A,c.l,c.R,c.m)}Xn.prototype.ca=function(c){c=c.target;const g=this.M;g&&pn(c)==3?g.j():this.Y(c)},Xn.prototype.Y=function(c){try{if(c==this.g)e:{const Et=pn(this.g);var g=this.g.Ba();const Un=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||fl(this.g)))){this.J||Et!=4||g==7||(g==8||0>=Un?zr(3):zr(2)),Ss(this);var y=this.g.Z();this.X=y;t:if(Ku(this)){var I=fl(this.g);c="";var F=I.length,W=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),yi(this);var te="";break t}this.h.i=new d.TextDecoder}for(g=0;g<F;g++)this.h.h=!0,c+=this.h.i.decode(I[g],{stream:!(W&&g==F-1)});I.length=0,this.h.g+=c,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Io(this.i,this.u,this.A,this.l,this.R,Et,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,kt=this.g;if((Xe=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(Xe)){var qe=Xe;break t}}qe=null}if(y=qe)Qn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ll(this,y);else{this.o=!1,this.s=3,gt(12),Vn(this),yi(this);break e}}if(this.P){y=!0;let Pn;for(;!this.J&&this.C<te.length;)if(Pn=Qd(this,te),Pn==So){Et==4&&(this.s=4,gt(14),y=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Pn==ol){this.s=4,gt(15),Qn(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Qn(this.i,this.l,Pn,null),ll(this,Pn);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||te.length!=0||this.h.h||(this.s=1,gt(16),y=!1),this.o=this.o&&y,!y)Qn(this.i,this.l,te,"[Invalid Chunked Response]"),Vn(this),yi(this);else if(0<te.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ml(Ot),Ot.M=!0,gt(11))}}else Qn(this.i,this.l,te,null),ll(this,te);Et==4&&Vn(this),this.o&&!this.J&&(Et==4?Vo(this.j,this):(this.o=!1,rt(this)))}else bo(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Vn(this),yi(this)}}}catch{}finally{}};function Ku(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Qd(c,g){var y=c.C,I=g.indexOf(`
`,y);return I==-1?So:(y=Number(g.substring(y,I)),isNaN(y)?ol:(I+=1,I+y>g.length?So:(g=g.slice(I,I+y),c.C=I+y,g)))}Xn.prototype.cancel=function(){this.J=!0,Vn(this)};function rt(c){c.S=Date.now()+c.I,Qu(c,c.I)}function Qu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Kn(T(c.ba,c),g)}function Ss(c){c.B&&(d.clearTimeout(c.B),c.B=null)}Xn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(sl(this.i,this.A),this.L!=2&&(zr(),gt(17)),Vn(this),this.s=2,yi(this)):Qu(this,this.S-c)};function yi(c){c.j.G==0||c.J||Vo(c.j,c)}function Vn(c){Ss(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ja(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function ll(c,g){try{var y=c.j;if(y.G!=0&&(y.g==c||ln(y.h,c))){if(!c.K&&ln(y.h,c)&&y.G==3){try{var I=y.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)Lo(y),nr(y);else break e;Mo(y),gt(18)}}else y.za=F[1],0<y.za-y.T&&37500>F[2]&&y.F&&y.v==0&&!y.C&&(y.C=Kn(T(y.Za,y),6e3));if(1>=Xu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else $r(y,11)}else if((c.K||y.g==c)&&Lo(y),!re(g))for(F=y.Da.g.parse(g),g=0;g<F.length;g++){let qe=F[g];if(y.T=qe[0],qe=qe[1],y.G==2)if(qe[0]=="c"){y.K=qe[1],y.ia=qe[2];const Ot=qe[3];Ot!=null&&(y.la=Ot,y.j.info("VER="+y.la));const Et=qe[4];Et!=null&&(y.Aa=Et,y.j.info("SVER="+y.Aa));const Un=qe[5];Un!=null&&typeof Un=="number"&&0<Un&&(I=1.5*Un,y.L=I,y.j.info("backChannelRequestTimeoutMs_="+I)),I=y;const Pn=c.g;if(Pn){const bs=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var W=I.h;W.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(ul(W,W.h),W.h=null))}if(I.D){const Uo=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(I.ya=Uo,et(I.I,I.D,Uo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),I=y;var te=c;if(I.qa=cc(I,I.J?I.ia:null,I.W),te.K){Ju(I.h,te);var Xe=te,kt=I.L;kt&&(Xe.I=kt),Xe.B&&(Ss(Xe),rt(Xe)),I.g=te}else Ns(I);0<y.i.length&&wr(y)}else qe[0]!="stop"&&qe[0]!="close"||$r(y,7);else y.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?$r(y,7):Ht(y):qe[0]!="noop"&&y.l&&y.l.ta(qe),y.v=0)}}zr(4)}catch{}}var Yu=class{constructor(c,g){this.g=c,this.map=g}};function Rs(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Xu(c){return c.h?1:c.g?c.g.size:0}function ln(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ul(c,g){c.g?c.g.add(g):c.h=g}function Ju(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Rs.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const y of c.g.values())g=g.concat(y.D);return g}return q(c.i)}function Ao(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],y=c.length,I=0;I<y;I++)g.push(c[I]);return g}g=[],y=0;for(I in c)g[y++]=c[I];return g}function Po(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var y=0;y<c;y++)g.push(y);return g}g=[],y=0;for(const I in c)g[y++]=I;return g}}}function vi(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var y=Po(c),I=Ao(c),F=I.length,W=0;W<F;W++)g.call(void 0,I[W],y&&y[W],c)}var As=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yd(c,g){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var I=c[y].indexOf("="),F=null;if(0<=I){var W=c[y].substring(0,I);F=c[y].substring(I+1)}else W=c[y];g(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Br(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Br){this.h=c.h,Ps(this,c.j),this.o=c.o,this.g=c.g,Ei(this,c.s),this.l=c.l;var g=c.i,y=new yr;y.i=g.i,g.g&&(y.g=new Map(g.g),y.h=g.h),wi(this,y),this.m=c.m}else c&&(g=String(c).match(As))?(this.h=!1,Ps(this,g[1]||"",!0),this.o=We(g[2]||""),this.g=We(g[3]||"",!0),Ei(this,g[4]),this.l=We(g[5]||"",!0),wi(this,g[6]||"",!0),this.m=We(g[7]||"")):(this.h=!1,this.i=new yr(null,this.h))}Br.prototype.toString=function(){var c=[],g=this.j;g&&c.push(Ii(g,ko,!0),":");var y=this.g;return(y||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Ii(g,ko,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Ii(y,y.charAt(0)=="/"?nc:tc,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Ii(y,cl)),c.join("")};function Rn(c){return new Br(c)}function Ps(c,g,y){c.j=y?We(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ei(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function wi(c,g,y){g instanceof yr?(c.i=g,vr(c.i,c.h)):(y||(g=Ii(g,rc)),c.i=new yr(g,c.h))}function et(c,g,y){c.i.set(g,y)}function Ti(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function We(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ii(c,g,y){return typeof c=="string"?(c=encodeURI(c).replace(g,ec),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ec(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ko=/[#\/\?@]/g,tc=/[#\?:]/g,nc=/[#\?]/g,rc=/[#\?@]/g,cl=/#/g;function yr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function qt(c){c.g||(c.g=new Map,c.h=0,c.i&&Yd(c.i,function(g,y){c.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=yr.prototype,n.add=function(c,g){qt(this),this.i=null,c=Fn(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(g),this.h+=1,this};function Jn(c,g){qt(c),g=Fn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Zn(c,g){return qt(c),g=Fn(c,g),c.g.has(g)}n.forEach=function(c,g){qt(this),this.g.forEach(function(y,I){y.forEach(function(F){c.call(g,F,I,this)},this)},this)},n.na=function(){qt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),y=[];for(let I=0;I<g.length;I++){const F=c[I];for(let W=0;W<F.length;W++)y.push(g[I])}return y},n.V=function(c){qt(this);let g=[];if(typeof c=="string")Zn(this,c)&&(g=g.concat(this.g.get(Fn(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)g=g.concat(c[y])}return g},n.set=function(c,g){return qt(this),this.i=null,c=Fn(this,c),Zn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},n.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ci(c,g,y){Jn(c,g),0<y.length&&(c.i=null,c.g.set(Fn(c,g),q(y)),c.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var y=0;y<g.length;y++){var I=g[y];const W=encodeURIComponent(String(I)),te=this.V(I);for(I=0;I<te.length;I++){var F=W;te[I]!==""&&(F+="="+encodeURIComponent(String(te[I]))),c.push(F)}}return this.i=c.join("&")};function Fn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function vr(c,g){g&&!c.j&&(qt(c),c.i=null,c.g.forEach(function(y,I){var F=I.toLowerCase();I!=F&&(Jn(this,I),Ci(this,F,y))},c)),c.j=g}function Xd(c,g){const y=new Ts;if(d.Image){const I=new Image;I.onload=D(fn,y,"TestLoadImage: loaded",!0,g,I),I.onerror=D(fn,y,"TestLoadImage: error",!1,g,I),I.onabort=D(fn,y,"TestLoadImage: abort",!1,g,I),I.ontimeout=D(fn,y,"TestLoadImage: timeout",!1,g,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else g(!1)}function ic(c,g){const y=new Ts,I=new AbortController,F=setTimeout(()=>{I.abort(),fn(y,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:I.signal}).then(W=>{clearTimeout(F),W.ok?fn(y,"TestPingServer: ok",!0,g):fn(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(F),fn(y,"TestPingServer: error",!1,g)})}function fn(c,g,y,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(y)}catch{}}function Jd(){this.g=new tl}function sc(c,g,y){const I=y||"";try{vi(c,function(F,W){let te=F;m(F)&&(te=Za(F)),g.push(I+W+"="+encodeURIComponent(te))})}catch(F){throw g.push(I+"type="+encodeURIComponent("_badmap")),F}}function Wr(c){this.l=c.Ub||null,this.j=c.eb||!1}V(Wr,Es),Wr.prototype.g=function(){return new ks(this.l,this.j)},Wr.prototype.i=function(c){return function(){return c}}({});function ks(c,g){At.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ks,At),n=ks.prototype,n.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,tr(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oc(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function oc(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?er(this):tr(this),this.readyState==3&&oc(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,er(this))},n.Qa=function(c){this.g&&(this.response=c,er(this))},n.ga=function(){this.g&&er(this)};function er(c){c.readyState=4,c.l=null,c.j=null,c.v=null,tr(c)}n.setRequestHeader=function(c,g){this.u.append(c,g)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=g.next();return c.join(`\r
`)};function tr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function qr(c){let g="";return we(c,function(y,I){g+=I,g+=":",g+=y,g+=`\r
`}),g}function Si(c,g,y){e:{for(I in y){var I=!1;break e}I=!0}I||(y=qr(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):et(c,g,y))}function ut(c){At.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ut,At);var Zd=/^https?$/i,hl=["POST","PUT"];n=ut.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,g,y,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?vo(this.o):vo(Yn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(W){xs(this,W);return}if(c=y||"",y=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)y.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const W of I.keys())y.set(W,I.get(W));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(y.keys()).find(W=>W.toLowerCase()=="content-type"),F=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(hl,g,void 0))||I||F||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,te]of y)this.g.setRequestHeader(W,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{No(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){xs(this,W)}};function xs(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,xo(c),An(c)}function xo(c){c.A||(c.A=!0,Pt(c,"complete"),Pt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Pt(this,"complete"),Pt(this,"abort"),An(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),ut.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?dl(this):this.bb())},n.bb=function(){dl(this)};function dl(c){if(c.h&&typeof u<"u"&&(!c.v[1]||pn(c)!=4||c.Z()!=2)){if(c.u&&pn(c)==4)Ya(c.Ea,0,c);else if(Pt(c,"readystatechange"),pn(c)==4){c.h=!1;try{const te=c.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var I;if(I=te===0){var F=String(c.D).match(As)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Zd.test(F?F.toLowerCase():"")}y=I}if(y)Pt(c,"complete"),Pt(c,"success");else{c.m=6;try{var W=2<pn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",xo(c)}}finally{An(c)}}}}function An(c,g){if(c.g){No(c);const y=c.g,I=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Pt(c,"ready");try{y.onreadystatechange=I}catch{}}}function No(c){c.I&&(d.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function pn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),el(g)}};function fl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function bo(c){const g={};c=(c.g&&2<=pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(re(c[I]))continue;var y=k(c[I]);const F=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const W=g[F]||[];g[F]=W,W.push(y)}O(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Er(c,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||g}function pl(c){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Er("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Er("baseRetryDelayMs",5e3,c),this.cb=Er("retryDelaySeedMs",1e4,c),this.Wa=Er("forwardChannelMaxRetries",2,c),this.wa=Er("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Rs(c&&c.concurrentRequestLimit),this.Da=new Jd,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=pl.prototype,n.la=8,n.G=1,n.connect=function(c,g,y,I){gt(0),this.W=c,this.H=g||{},y&&I!==void 0&&(this.H.OSID=y,this.H.OAID=I),this.F=this.X,this.I=cc(this,null,this.W),wr(this)};function Ht(c){if(Do(c),c.G==3){var g=c.U++,y=Rn(c.I);if(et(y,"SID",c.K),et(y,"RID",g),et(y,"TYPE","terminate"),Hr(c,y),g=new Xn(c,c.j,g),g.L=2,g.v=Ti(Rn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=g.v,y=!0),y||(g.g=hc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),rt(g)}uc(c)}function nr(c){c.g&&(ml(c),c.g.cancel(),c.g=null)}function Do(c){nr(c),c.u&&(d.clearTimeout(c.u),c.u=null),Lo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function wr(c){if(!Sn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Te||ie(),Y||(Te(),Y=!0),ge.add(g,c),c.B=0}}function ef(c,g){return Xu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Kn(T(c.Ga,c,g),lc(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const F=new Xn(this,this.j,c);let W=this.o;if(this.S&&(W?(W=A(W),R(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var I=this.i[y];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=Ri(this,F,g),y=Rn(this.I),et(y,"RID",c),et(y,"CVER",22),this.D&&et(y,"X-HTTP-Session-Id",this.D),Hr(this,y),W&&(this.O?g="headers="+encodeURIComponent(String(qr(W)))+"&"+g:this.m&&Si(y,this.m,W)),ul(this.h,F),this.Ua&&et(y,"TYPE","init"),this.P?(et(y,"$req",g),et(y,"SID","null"),F.T=!0,Ro(F,y,null)):Ro(F,y,g),this.G=2}}else this.G==3&&(c?Oo(this,c):this.i.length==0||Sn(this.h)||Oo(this))};function Oo(c,g){var y;g?y=g.l:y=c.U++;const I=Rn(c.I);et(I,"SID",c.K),et(I,"RID",y),et(I,"AID",c.T),Hr(c,I),c.m&&c.o&&Si(I,c.m,c.o),y=new Xn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Ri(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ul(c.h,y),Ro(y,I,g)}function Hr(c,g){c.H&&we(c.H,function(y,I){et(g,I,y)}),c.l&&vi({},function(y,I){et(g,I,y)})}function Ri(c,g,y){y=Math.min(c.i.length,y);var I=c.l?T(c.l.Na,c.l,c):null;e:{var F=c.i;let W=-1;for(;;){const te=["count="+y];W==-1?0<y?(W=F[0].g,te.push("ofs="+W)):W=0:te.push("ofs="+W);let Xe=!0;for(let kt=0;kt<y;kt++){let qe=F[kt].g;const Ot=F[kt].map;if(qe-=W,0>qe)W=Math.max(0,F[kt].g-100),Xe=!1;else try{sc(Ot,te,"req"+qe+"_")}catch{I&&I(Ot)}}if(Xe){I=te.join("&");break e}}}return c=c.i.splice(0,y),g.D=c,I}function Ns(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Te||ie(),Y||(Te(),Y=!0),ge.add(g,c),c.v=0}}function Mo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Kn(T(c.Fa,c),lc(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,ac(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Kn(T(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),nr(this),ac(this))};function ml(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function ac(c){c.g=new Xn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=Rn(c.qa);et(g,"RID","rpc"),et(g,"SID",c.K),et(g,"AID",c.T),et(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(g,"TO",c.ja),et(g,"TYPE","xmlhttp"),Hr(c,g),c.m&&c.o&&Si(g,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Ti(Rn(g)),y.m=null,y.P=!0,al(y,c)}n.Za=function(){this.C!=null&&(this.C=null,nr(this),Mo(this),gt(19))};function Lo(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Vo(c,g){var y=null;if(c.g==g){Lo(c),ml(c),c.g=null;var I=2}else if(ln(c.h,g))y=g.D,Ju(c.h,g),I=1;else return;if(c.G!=0){if(g.o)if(I==1){y=g.m?g.m.length:0,g=Date.now()-g.F;var F=c.B;I=ws(),Pt(I,new To(I,y)),wr(c)}else Ns(c);else if(F=g.s,F==3||F==0&&0<g.X||!(I==1&&ef(c,g)||I==2&&Mo(c)))switch(y&&0<y.length&&(g=c.h,g.i=g.i.concat(y)),F){case 1:$r(c,5);break;case 4:$r(c,10);break;case 3:$r(c,6);break;default:$r(c,2)}}}function lc(c,g){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*g}function $r(c,g){if(c.j.info("Error code "+g),g==2){var y=T(c.fb,c),I=c.Xa;const F=!I;I=new Br(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ps(I,"https"),Ti(I),F?Xd(I.toString(),y):ic(I.toString(),y)}else gt(2);c.G=0,c.l&&c.l.sa(g),uc(c),Do(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function uc(c){if(c.G=0,c.ka=[],c.l){const g=Zu(c.h);(g.length!=0||c.i.length!=0)&&(B(c.ka,g),B(c.ka,c.i),c.h.i.length=0,q(c.i),c.i.length=0),c.l.ra()}}function cc(c,g,y){var I=y instanceof Br?Rn(y):new Br(y);if(I.g!="")g&&(I.g=g+"."+I.g),Ei(I,I.s);else{var F=d.location;I=F.protocol,g=g?g+"."+F.hostname:F.hostname,F=+F.port;var W=new Br(null);I&&Ps(W,I),g&&(W.g=g),F&&Ei(W,F),y&&(W.l=y),I=W}return y=c.D,g=c.ya,y&&g&&et(I,y,g),et(I,"VER",c.la),Hr(c,I),I}function hc(c,g,y){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ut(new Wr({eb:y})):new ut(c.pa),g.Ha(c.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gl(){}n=gl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Fo(){}Fo.prototype.g=function(c,g){return new un(c,g)};function un(c,g){At.call(this),this.g=new pl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!re(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!re(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Tr(this)}V(un,At),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Ht(this.g)},un.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Za(c),c=y);g.i.push(new Yu(g.Ya++,c)),g.G==3&&wr(g)},un.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,un.aa.N.call(this)};function dc(c){gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const y in g){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}V(dc,gr);function fc(){wo.call(this),this.status=1}V(fc,wo);function Tr(c){this.g=c}V(Tr,gl),Tr.prototype.ua=function(){Pt(this.g,"a")},Tr.prototype.ta=function(c){Pt(this.g,new dc(c))},Tr.prototype.sa=function(c){Pt(this.g,new fc)},Tr.prototype.ra=function(){Pt(this.g,"b")},Fo.prototype.createWebChannel=Fo.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,K0=function(){return new Fo},G0=function(){return ws()},$0=_r,tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,vh=Co,$u.COMPLETE="complete",H0=$u,Eo.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",At.prototype.listen=At.prototype.K,Gl=Eo,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,q0=ut}).apply(typeof lh<"u"?lh:typeof self<"u"?self:typeof window<"u"?window:{});const uE="@firebase/firestore",cE="4.8.0";/**
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
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
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
 */let Fa="11.10.0";/**
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
 */const Zs=new fd("@firebase/firestore");function aa(){return Zs.logLevel}function oe(n,...e){if(Zs.logLevel<=Ue.DEBUG){const t=e.map(Zm);Zs.debug(`Firestore (${Fa}): ${n}`,...t)}}function hi(n,...e){if(Zs.logLevel<=Ue.ERROR){const t=e.map(Zm);Zs.error(`Firestore (${Fa}): ${n}`,...t)}}function ts(n,...e){if(Zs.logLevel<=Ue.WARN){const t=e.map(Zm);Zs.warn(`Firestore (${Fa}): ${n}`,...t)}}function Zm(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ye(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Q0(n,r,t)}function Q0(n,e,t){let r=`FIRESTORE (${Fa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw hi(r),new Error(r)}function $e(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Q0(e,s,r)}function Pe(n,e){return n}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends mi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ai{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Y0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rn.UNAUTHENTICATED))}shutdown(){}}class QP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YP{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ai,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ai)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string",31837,{l:r}),new Y0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class XP{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JP{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new XP(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZP{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const r=a=>{a.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,oe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new hE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function X0(){return new TextEncoder}/**
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
 */class eg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ek(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<t&&(r+=e.charAt(s[a]%62))}return r}}function De(n,e){return n<e?-1:n>e?1:0}function nm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return De(r,s);{const a=X0(),u=tk(a.encode(dE(n,t)),a.encode(dE(e,t)));return u!==0?u:De(r,s)}}t+=r>65535?2:1}return De(n.length,e.length)}function dE(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function tk(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return De(n[t],e[t]);return De(n.length,e.length)}function Ca(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const fE="__name__";class Ar{constructor(e,t,r){t===void 0?t=0:t>e.length&&ye(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ye(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const a=Ar.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return De(e.length,t.length)}static compareSegments(e,t){const r=Ar.isNumericId(e),s=Ar.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ar.extractNumericId(e).compare(Ar.extractNumericId(t)):nm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qi.fromString(e.substring(4,e.length-2))}}class Ze extends Ar{construct(e,t,r){return new Ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const nk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Ar{construct(e,t,r){return new Qt(e,t,r)}static isValidIdentifier(e){return nk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fE}static keyField(){return new Qt([fE])}static fromServerFormat(e){const t=[];let r="",s=0;const a=()=>{if(r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(t)}static emptyPath(){return new Qt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(Ze.fromString(e))}static fromName(e){return new _e(Ze.fromString(e).popFirst(5))}static empty(){return new _e(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new Ze(e.slice()))}}/**
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
 */function J0(n,e,t){if(!t)throw new ne(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rk(n,e,t,r){if(e===!0&&r===!0)throw new ne(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pE(n){if(!_e.isDocumentKey(n))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mE(n){if(_e.isDocumentKey(n))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Z0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function yd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ye(12329,{type:typeof n})}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yd(n);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){const t={typeString:n};return e&&(t.value=e),t}function bu(n,e){if(!Z0(n))throw new ne(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ne(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const gE=-62135596800,_E=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_E);return new lt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gE)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_E}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:lt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bu(e,lt._jsonSchema))return new lt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}lt._jsonSchemaVersion="firestore/timestamp/1.0",lt._jsonSchema={type:St("string",lt._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new lt(0,0))}static max(){return new Ie(new lt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pu=-1;function ik(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Ie.fromTimestamp(r===1e9?new lt(t+1,0):new lt(t,r));return new ns(s,_e.empty(),e)}function sk(n){return new ns(n.readTime,n.key,pu)}class ns{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ns(Ie.min(),_e.empty(),pu)}static max(){return new ns(Ie.max(),_e.empty(),pu)}}function ok(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ua(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==ak)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,r)=>{t(e)})}static reject(e){return new G((t,r)=>{r(e)})}static waitFor(e){return new G((t,r)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&t()},f=>r(f))}),u=!0,a===s&&t()})}static or(e){let t=G.resolve(!1);for(const r of e)t=t.next(s=>s?G.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,a)=>{r.push(t.call(this,s,a))}),this.waitFor(r)}static mapArray(e,t){return new G((r,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;t(e[m]).next(v=>{u[m]=v,++d,d===a&&r(u)},v=>s(v))}})}static doWhile(e,t){return new G((r,s)=>{const a=()=>{e()===!0?t().next(()=>{a()},s):r()};a()})}}function uk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ja(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}vd.ue=-1;/**
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
 */const tg=-1;function Du(n){return n==null}function Vh(n){return n===0&&1/n==-1/0}function ck(n){return typeof n=="number"&&Number.isInteger(n)&&!Vh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const eT="";function hk(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=yE(e)),e=dk(n.get(t),e);return yE(e)}function dk(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":t+="";break;case eT:t+="";break;default:t+=a}}return t}function yE(n){return n+eT+""}/**
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
 */function vE(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ps(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function tT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Rt=class rm{constructor(e,t){this.comparator=e,this.root=t||Yi.EMPTY}insert(e,t){return new rm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yi.BLACK,null,null))}remove(e){return new rm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uh(this.root,e,this.comparator,!1)}getReverseIterator(){return new uh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uh(this.root,e,this.comparator,!0)}},uh=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Yi=class ti{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??ti.RED,this.left=s??ti.EMPTY,this.right=a??ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,a){return new ti(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ti.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ti.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}};Yi.EMPTY=null,Yi.RED=!0,Yi.BLACK=!1;Yi.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,t,r,s,a){return this}insert(e,t,r){return new Yi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new EE(this.data.getIterator())}getIteratorFrom(e){return new EE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class EE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new On([])}unionWith(e){let t=new bt(Qt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ca(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class nT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new nT("Invalid base64 string: "+a):a}}(e);return new Yt(t)}static fromUint8Array(e){const t=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const fk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=fk.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function is(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="server_timestamp",iT="__type__",sT="__previous_value__",oT="__local_write_time__";function ng(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[iT])===null||t===void 0?void 0:t.stringValue)===rT}function Ed(n){const e=n.mapValue.fields[sT];return ng(e)?Ed(e):e}function mu(n){const e=rs(n.mapValue.fields[oT].timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class pk{constructor(e,t,r,s,a,u,d,f,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=v}}const Fh="(default)";class gu{constructor(e,t){this.projectId=e,this.database=t||Fh}static empty(){return new gu("","")}get isDefaultDatabase(){return this.database===Fh}isEqual(e){return e instanceof gu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="__type__",mk="__max__",ch={mapValue:{}},lT="__vector__",Uh="value";function ss(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ng(n)?4:_k(n)?9007199254740991:gk(n)?10:11:ye(28295,{value:n})}function Mr(n,e){if(n===e)return!0;const t=ss(n);if(t!==ss(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return mu(n).isEqual(mu(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=rs(s.timestampValue),d=rs(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return is(s.bytesValue).isEqual(is(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return yt(s.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return yt(s.integerValue)===yt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=yt(s.doubleValue),d=yt(a.doubleValue);return u===d?Vh(u)===Vh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return Ca(n.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(vE(u)!==vE(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Mr(u[f],d[f])))return!1;return!0}(n,e);default:return ye(52216,{left:n})}}function _u(n,e){return(n.values||[]).find(t=>Mr(t,e))!==void 0}function Sa(n,e){if(n===e)return 0;const t=ss(n),r=ss(e);if(t!==r)return De(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return function(a,u){const d=yt(a.integerValue||a.doubleValue),f=yt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return wE(n.timestampValue,e.timestampValue);case 4:return wE(mu(n),mu(e));case 5:return nm(n.stringValue,e.stringValue);case 6:return function(a,u){const d=is(a),f=is(u);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const v=De(d[m],f[m]);if(v!==0)return v}return De(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,u){const d=De(yt(a.latitude),yt(u.latitude));return d!==0?d:De(yt(a.longitude),yt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return TE(n.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,m,v;const E=a.fields||{},T=u.fields||{},D=(d=E[Uh])===null||d===void 0?void 0:d.arrayValue,V=(f=T[Uh])===null||f===void 0?void 0:f.arrayValue,q=De(((m=D?.values)===null||m===void 0?void 0:m.length)||0,((v=V?.values)===null||v===void 0?void 0:v.length)||0);return q!==0?q:TE(D,V)}(n.mapValue,e.mapValue);case 11:return function(a,u){if(a===ch.mapValue&&u===ch.mapValue)return 0;if(a===ch.mapValue)return 1;if(u===ch.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const T=nm(f[E],v[E]);if(T!==0)return T;const D=Sa(d[f[E]],m[v[E]]);if(D!==0)return D}return De(f.length,v.length)}(n.mapValue,e.mapValue);default:throw ye(23264,{le:t})}}function wE(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=rs(n),r=rs(e),s=De(t.seconds,r.seconds);return s!==0?s:De(t.nanos,r.nanos)}function TE(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const a=Sa(t[s],r[s]);if(a)return a}return De(t.length,r.length)}function Ra(n){return im(n)}function im(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=rs(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return is(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return _e.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const a of t.values||[])s?s=!1:r+=",",r+=im(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${im(t.fields[u])}`;return s+"}"}(n.mapValue):ye(61005,{value:n})}function Eh(n){switch(ss(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ed(n);return e?16+Eh(e):16;case 5:return 2*n.stringValue.length;case 6:return is(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+Eh(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ps(r.fields,(a,u)=>{s+=a.length+Eh(u)}),s}(n.mapValue);default:throw ye(13486,{value:n})}}function IE(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sm(n){return!!n&&"integerValue"in n}function rg(n){return!!n&&"arrayValue"in n}function CE(n){return!!n&&"nullValue"in n}function SE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wh(n){return!!n&&"mapValue"in n}function gk(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[aT])===null||t===void 0?void 0:t.stringValue)===lT}function eu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ps(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=eu(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=eu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _k(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===mk}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(t)}setAll(e){let t=Qt.emptyPath(),r={},s=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,r,s),r={},s=[],t=d.popLast()}u?r[d.lastSegment()]=eu(u):s.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,s)}delete(e){const t=this.field(e.popLast());wh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];wh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){ps(t,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new dn(eu(this.value))}}function uT(n){const e=[];return ps(n.fields,(t,r)=>{const s=new Qt([t]);if(wh(r)){const a=uT(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new On(e)}/**
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
 */class Bt{constructor(e,t,r,s,a,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Bt(e,0,Ie.min(),Ie.min(),Ie.min(),dn.empty(),0)}static newFoundDocument(e,t,r,s){return new Bt(e,1,t,Ie.min(),r,s,0)}static newNoDocument(e,t){return new Bt(e,2,t,Ie.min(),Ie.min(),dn.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,Ie.min(),Ie.min(),dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jh{constructor(e,t){this.position=e,this.inclusive=t}}function RE(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const a=e[s],u=n.position[s];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(u.referenceValue),t.key):r=Sa(u,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function AE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zh{constructor(e,t="asc"){this.field=e,this.dir=t}}function yk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class cT{}class Ct extends cT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ek(e,t,r):t==="array-contains"?new Ik(e,r):t==="in"?new Ck(e,r):t==="not-in"?new Sk(e,r):t==="array-contains-any"?new Rk(e,r):new Ct(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wk(e,r):new Tk(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Sa(t,this.value)):t!==null&&ss(this.value)===ss(t)&&this.matchesComparison(Sa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mr extends cT{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new mr(e,t)}matches(e){return hT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function hT(n){return n.op==="and"}function dT(n){return vk(n)&&hT(n)}function vk(n){for(const e of n.filters)if(e instanceof mr)return!1;return!0}function om(n){if(n instanceof Ct)return n.field.canonicalString()+n.op.toString()+Ra(n.value);if(dT(n))return n.filters.map(e=>om(e)).join(",");{const e=n.filters.map(t=>om(t)).join(",");return`${n.op}(${e})`}}function fT(n,e){return n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.field.isEqual(s.field)&&Mr(r.value,s.value)}(n,e):n instanceof mr?function(r,s){return s instanceof mr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,d)=>a&&fT(u,s.filters[d]),!0):!1}(n,e):void ye(19439)}function pT(n){return n instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Ra(t.value)}`}(n):n instanceof mr?function(t){return t.op.toString()+" {"+t.getFilters().map(pT).join(" ,")+"}"}(n):"Filter"}class Ek extends Ct{constructor(e,t,r){super(e,t,r),this.key=_e.fromName(r.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class wk extends Ct{constructor(e,t){super(e,"in",t),this.keys=mT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tk extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=mT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>_e.fromName(r.referenceValue))}class Ik extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rg(t)&&_u(t.arrayValue,this.value)}}class Ck extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_u(this.value.arrayValue,t)}}class Sk extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!_u(this.value.arrayValue,t)}}class Rk extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
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
 */class Ak{constructor(e,t=null,r=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function PE(n,e=null,t=[],r=[],s=null,a=null,u=null){return new Ak(n,e,t,r,s,a,u)}function ig(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>om(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Du(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ra(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ra(r)).join(",")),e.Pe=t}return e.Pe}function sg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!AE(n.startAt,e.startAt)&&AE(n.endAt,e.endAt)}function am(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ou{constructor(e,t=null,r=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Pk(n,e,t,r,s,a,u,d){return new Ou(n,e,t,r,s,a,u,d)}function wd(n){return new Ou(n)}function kE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gT(n){return n.collectionGroup!==null}function tu(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new bt(Qt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new zh(a,r))}),t.has(Qt.keyField().canonicalString())||e.Te.push(new zh(Qt.keyField(),r))}return e.Te}function Nr(n){const e=Pe(n);return e.Ie||(e.Ie=kk(e,tu(n))),e.Ie}function kk(n,e){if(n.limitType==="F")return PE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new zh(s.field,a)});const t=n.endAt?new jh(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new jh(n.startAt.position,n.startAt.inclusive):null;return PE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function lm(n,e){const t=n.filters.concat([e]);return new Ou(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function um(n,e,t){return new Ou(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Td(n,e){return sg(Nr(n),Nr(e))&&n.limitType===e.limitType}function _T(n){return`${ig(Nr(n))}|lt:${n.limitType}`}function la(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>pT(s)).join(", ")}]`),Du(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ra(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ra(s)).join(",")),`Target(${r})`}(Nr(n))}; limitType=${n.limitType})`}function Id(n,e){return e.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,s){for(const a of tu(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(u,d,f){const m=RE(u,d,f);return u.inclusive?m<=0:m<0}(r.startAt,tu(r),s)||r.endAt&&!function(u,d,f){const m=RE(u,d,f);return u.inclusive?m>=0:m>0}(r.endAt,tu(r),s))}(n,e)}function xk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yT(n){return(e,t)=>{let r=!1;for(const s of tu(n)){const a=Nk(s,e,t);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function Nk(n,e,t){const r=n.field.isKeyField()?_e.comparator(e.key,t.key):function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Sa(f,m):ye(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:n.dir})}}/**
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
 */class ao{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(t,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return tT(this.inner)}size(){return this.innerSize}}/**
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
 */const bk=new Rt(_e.comparator);function di(){return bk}const vT=new Rt(_e.comparator);function Kl(...n){let e=vT;for(const t of n)e=e.insert(t.key,t);return e}function ET(n){let e=vT;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Gs(){return nu()}function wT(){return nu()}function nu(){return new ao(n=>n.toString(),(n,e)=>n.isEqual(e))}const Dk=new Rt(_e.comparator),Ok=new bt(_e.comparator);function ze(...n){let e=Ok;for(const t of n)e=e.add(t);return e}const Mk=new bt(De);function Lk(){return Mk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vh(e)?"-0":e}}function TT(n){return{integerValue:""+n}}function IT(n,e){return ck(e)?TT(e):og(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this._=void 0}}function Vk(n,e,t){return n instanceof yu?function(s,a){const u={fields:{[iT]:{stringValue:rT},[oT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&ng(a)&&(a=Ed(a)),a&&(u.fields[sT]=a),{mapValue:u}}(t,e):n instanceof Aa?ST(n,e):n instanceof Pa?RT(n,e):function(s,a){const u=CT(s,a),d=xE(u)+xE(s.Ee);return sm(u)&&sm(s.Ee)?TT(d):og(s.serializer,d)}(n,e)}function Fk(n,e,t){return n instanceof Aa?ST(n,e):n instanceof Pa?RT(n,e):t}function CT(n,e){return n instanceof vu?function(r){return sm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class yu extends Cd{}class Aa extends Cd{constructor(e){super(),this.elements=e}}function ST(n,e){const t=AT(e);for(const r of n.elements)t.some(s=>Mr(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pa extends Cd{constructor(e){super(),this.elements=e}}function RT(n,e){let t=AT(e);for(const r of n.elements)t=t.filter(s=>!Mr(s,r));return{arrayValue:{values:t}}}class vu extends Cd{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function xE(n){return yt(n.integerValue||n.doubleValue)}function AT(n){return rg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Sd{constructor(e,t){this.field=e,this.transform=t}}function Uk(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Aa&&s instanceof Aa||r instanceof Pa&&s instanceof Pa?Ca(r.elements,s.elements,Mr):r instanceof vu&&s instanceof vu?Mr(r.Ee,s.Ee):r instanceof yu&&s instanceof yu}(n.transform,e.transform)}class jk{constructor(e,t){this.version=e,this.transformResults=t}}class sn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Th(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rd{}function PT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ad(n.key,sn.none()):new Mu(n.key,n.data,sn.none());{const t=n.data,r=dn.empty();let s=new bt(Qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=t.field(a);u===null&&a.length>1&&(a=a.popLast(),u=t.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new ms(n.key,r,new On(s.toArray()),sn.none())}}function zk(n,e,t){n instanceof Mu?function(s,a,u){const d=s.value.clone(),f=bE(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof ms?function(s,a,u){if(!Th(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=bE(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(kT(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function ru(n,e,t,r){return n instanceof Mu?function(a,u,d,f){if(!Th(a.precondition,u))return d;const m=a.value.clone(),v=DE(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof ms?function(a,u,d,f){if(!Th(a.precondition,u))return d;const m=DE(a.fieldTransforms,f,u),v=u.data;return v.setAll(kT(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(a,u,d){return Th(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function Bk(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),a=CT(r.transform,s||null);a!=null&&(t===null&&(t=dn.empty()),t.set(r.field,a))}return t||null}function NE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ca(r,s,(a,u)=>Uk(a,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Mu extends Rd{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ms extends Rd{constructor(e,t,r,s,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function kT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bE(n,e,t){const r=new Map;$e(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const a=n[s],u=a.transform,d=e.data.field(a.field);r.set(a.field,Fk(u,d,t[s]))}return r}function DE(n,e,t){const r=new Map;for(const s of n){const a=s.transform,u=t.data.field(s.field);r.set(s.field,Vk(a,u,e))}return r}class Ad extends Rd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xT extends Rd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wk{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&zk(a,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ru(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ru(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wT();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=t.has(s.key)?null:d;const f=PT(u,d);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ze())}isEqual(e){return this.batchId===e.batchId&&Ca(this.mutations,e.mutations,(t,r)=>NE(t,r))&&Ca(this.baseMutations,e.baseMutations,(t,r)=>NE(t,r))}}class ag{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){$e(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return Dk}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new ag(e,t,r,s)}}/**
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
 */class qk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Hk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Tt,He;function NT(n){switch(n){case H.OK:return ye(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ye(15467,{code:n})}}function bT(n){if(n===void 0)return hi("GRPC error has no .code"),H.UNKNOWN;switch(n){case Tt.OK:return H.OK;case Tt.CANCELLED:return H.CANCELLED;case Tt.UNKNOWN:return H.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return H.INTERNAL;case Tt.UNAVAILABLE:return H.UNAVAILABLE;case Tt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Tt.NOT_FOUND:return H.NOT_FOUND;case Tt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Tt.ABORTED:return H.ABORTED;case Tt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Tt.DATA_LOSS:return H.DATA_LOSS;default:return ye(39323,{code:n})}}(He=Tt||(Tt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $k=new Qi([4294967295,4294967295],0);function OE(n){const e=X0().encode(n),t=new W0;return t.update(e),new Uint8Array(t.digest())}function ME(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Qi([t,r],0),new Qi([s,a],0)]}class lg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ql(`Invalid padding: ${t}`);if(r<0)throw new Ql(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ql(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ql(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Qi.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Qi.fromNumber(r)));return s.compare($k)===1&&(s=new Qi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=OE(e),[r,s]=ME(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);if(!this.ye(u))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new lg(a,s,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.fe===0)return;const t=OE(e),[r,s]=ME(t);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,s,a);this.we(u)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pd{constructor(e,t,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Lu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pd(Ie.min(),s,new Rt(De),di(),ze())}}class Lu{constructor(e,t,r,s,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Lu(r,t,ze(),ze(),ze())}}/**
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
 */class Ih{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class DT{constructor(e,t){this.targetId=e,this.De=t}}class OT{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class LE{constructor(){this.ve=0,this.Ce=VE(),this.Fe=Yt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ze(),t=ze(),r=ze();return this.Ce.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:a})}}),new Lu(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=VE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Gk{constructor(e){this.We=e,this.Ge=new Map,this.ze=di(),this.je=hh(),this.Je=hh(),this.He=new Rt(De)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ye(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const a=s.target;if(am(a))if(r===0){const u=new _e(a.path);this.Xe(t,u,Bt.newNoDocument(u,Ie.min()))}else $e(r===1,20013,{expectedCount:r});else{const u=this.ot(t);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(t);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=t;let u,d;try{u=is(r).toUint8Array()}catch(f){if(f instanceof nT)return ts("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new lg(u,s,a)}catch(f){return ts(f instanceof Ql?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,a,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((a,u)=>{const d=this.st(u);if(d){if(a.current&&am(d.target)){const f=new _e(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,Bt.newNoDocument(f,e))}a.Ne&&(t.set(u,a.Le()),a.ke())}});let r=ze();this.Je.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.ze.forEach((a,u)=>u.setReadTime(e));const s=new Pd(e,t,this.He,this.ze,r);return this.ze=di(),this.je=hh(),this.Je=hh(),this.He=new Rt(De),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new LE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new bt(De),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new bt(De),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new LE),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function hh(){return new Rt(_e.comparator)}function VE(){return new Rt(_e.comparator)}const Kk={asc:"ASCENDING",desc:"DESCENDING"},Qk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yk={and:"AND",or:"OR"};class Xk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cm(n,e){return n.useProto3Json||Du(e)?e:{value:e}}function Bh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Jk(n,e){return Bh(n,e.toTimestamp())}function Mn(n){return $e(!!n,49232),Ie.fromTimestamp(function(t){const r=rs(t);return new lt(r.seconds,r.nanos)}(n))}function ug(n,e){return hm(n,e).canonicalString()}function hm(n,e){const t=function(s){return new Ze(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function LT(n){const e=Ze.fromString(n);return $e(BT(e),10190,{key:e.toString()}),e}function Wh(n,e){return ug(n.databaseId,e.path)}function iu(n,e){const t=LT(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(FT(t))}function VT(n,e){return ug(n.databaseId,e)}function Zk(n){const e=LT(n);return e.length===4?Ze.emptyPath():FT(e)}function dm(n){return new Ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function FT(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function FE(n,e,t){return{name:Wh(n,e),fields:t.value.mapValue.fields}}function ex(n,e){return"found"in e?function(r,s){$e(!!s.found,43571),s.found.name,s.found.updateTime;const a=iu(r,s.found.name),u=Mn(s.found.updateTime),d=s.found.createTime?Mn(s.found.createTime):Ie.min(),f=new dn({mapValue:{fields:s.found.fields}});return Bt.newFoundDocument(a,u,d,f)}(n,e):"missing"in e?function(r,s){$e(!!s.missing,3894),$e(!!s.readTime,22933);const a=iu(r,s.missing),u=Mn(s.readTime);return Bt.newNoDocument(a,u)}(n,e):ye(7234,{result:e})}function tx(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ye(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(m,v){return m.useProto3Json?($e(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):($e(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const v=m.code===void 0?H.UNKNOWN:bT(m.code);return new ne(v,m.message||"")}(u);t=new OT(r,s,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=iu(n,r.document.name),a=Mn(r.document.updateTime),u=r.document.createTime?Mn(r.document.createTime):Ie.min(),d=new dn({mapValue:{fields:r.document.fields}}),f=Bt.newFoundDocument(s,a,u,d),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Ih(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=iu(n,r.document),a=r.readTime?Mn(r.readTime):Ie.min(),u=Bt.newNoDocument(s,a),d=r.removedTargetIds||[];t=new Ih([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=iu(n,r.document),a=r.removedTargetIds||[];t=new Ih([],a,s,null)}else{if(!("filter"in e))return ye(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new Hk(s,a),d=r.targetId;t=new DT(d,u)}}return t}function UT(n,e){let t;if(e instanceof Mu)t={update:FE(n,e.key,e.value)};else if(e instanceof Ad)t={delete:Wh(n,e.key)};else if(e instanceof ms)t={update:FE(n,e.key,e.data),updateMask:cx(e.fieldMask)};else{if(!(e instanceof xT))return ye(16599,{Rt:e.type});t={verify:Wh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof yu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Aa)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Pa)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof vu)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw ye(20930,{transform:u.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:Jk(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ye(27497)}(n,e.precondition)),t}function nx(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map(t=>function(s,a){let u=s.updateTime?Mn(s.updateTime):Mn(a);return u.isEqual(Ie.min())&&(u=Mn(a)),new jk(u,s.transformResults||[])}(t,e))):[]}function rx(n,e){return{documents:[VT(n,e.path)]}}function ix(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=VT(n,s);const a=function(m){if(m.length!==0)return zT(mr.create(m,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(v=>function(T){return{field:ua(T.field),direction:ax(T.dir)}}(v))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=cm(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{Vt:t,parent:s}}function sx(n){let e=Zk(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){$e(r===1,65062);const v=t.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(E){const T=jT(E);return T instanceof mr&&dT(T)?T.getFilters():[T]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(T=>function(V){return new zh(ca(V.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,Du(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(E){const T=!!E.before,D=E.values||[];return new jh(D,T)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const T=!E.before,D=E.values||[];return new jh(D,T)}(t.endAt)),Pk(e,s,u,a,d,"F",f,m)}function ox(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ca(t.unaryFilter.field);return Ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ca(t.unaryFilter.field);return Ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ca(t.unaryFilter.field);return Ct.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ca(t.unaryFilter.field);return Ct.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ct.create(ca(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return mr.create(t.compositeFilter.filters.map(r=>jT(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}}(t.compositeFilter.op))}(n):ye(30097,{filter:n})}function ax(n){return Kk[n]}function lx(n){return Qk[n]}function ux(n){return Yk[n]}function ua(n){return{fieldPath:n.canonicalString()}}function ca(n){return Qt.fromServerFormat(n.fieldPath)}function zT(n){return n instanceof Ct?function(t){if(t.op==="=="){if(SE(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NAN"}};if(CE(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(SE(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NOT_NAN"}};if(CE(t.value))return{unaryFilter:{field:ua(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ua(t.field),op:lx(t.op),value:t.value}}}(n):n instanceof mr?function(t){const r=t.getFilters().map(s=>zT(s));return r.length===1?r[0]:{compositeFilter:{op:ux(t.op),filters:r}}}(n):ye(54877,{filter:n})}function cx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function BT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $i{constructor(e,t,r,s,a=Ie.min(),u=Ie.min(),d=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new $i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hx{constructor(e){this.gt=e}}function dx(n){const e=sx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?um(e,e.limit,"L"):e}/**
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
 */class fx{constructor(){this.Dn=new px}addToCollectionParentIndex(e,t){return this.Dn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(ns.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(ns.min())}updateCollectionGroup(e,t,r){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class px{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new bt(Ze.comparator),a=!s.has(r);return this.index[t]=s.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bt(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},WT=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(WT,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
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
 */class ka{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ka(0)}static ur(){return new ka(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="LruGarbageCollector",mx=1048576;function zE([n,e],[t,r]){const s=De(n,t);return s===0?De(e,r):s}class gx{constructor(e){this.Tr=e,this.buffer=new bt(zE),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zE(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _x{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(jE,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ja(t)?oe(jE,"Ignoring IndexedDB error during garbage collection: ",t):await Ua(t)}await this.Rr(3e5)})}}class yx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return G.resolve(vd.ue);const r=new gx(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(UE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),UE):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,a,u,d,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,u=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(r=E,d=Date.now(),this.removeTargets(e,r,t))).next(E=>(a=E,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(m=Date.now(),aa()<=Ue.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${E} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:E})))}}function vx(n,e){return new yx(n,e)}/**
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
 */class Ex{constructor(){this.changes=new ao(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?G.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class wx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Tx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ru(r.mutation,s,On.empty(),lt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ze()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ze()){const s=Gs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(a=>{let u=Kl();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=Gs();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ze()))}populateOverlays(e,t,r){const s=[];return r.forEach(a=>{t.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,s){let a=di();const u=nu(),d=function(){return nu()}();return t.forEach((f,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof ms)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),ru(v.mutation,m,v.mutation.getFieldMask(),lt.now())):u.set(m.key,On.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,v)=>u.set(m,v)),t.forEach((m,v)=>{var E;return d.set(m,new wx(v,(E=u.get(m))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const r=nu();let s=new Rt((u,d)=>u-d),a=ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(f=>{const m=t.get(f);if(m===null)return;let v=r.get(f)||On.empty();v=d.applyToLocalView(m,v),r.set(f,v);const E=(s.get(d.batchId)||ze()).add(f);s=s.insert(d.batchId,E)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,v=f.value,E=wT();v.forEach(T=>{if(!a.has(T)){const D=PT(t.get(T),r.get(T));D!==null&&E.set(T,D),a=a.add(T)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return G.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-a.size):G.resolve(Gs());let d=pu,f=a;return u.next(m=>G.forEach(m,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?G.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{f=f.insert(v,T)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,ze())).next(v=>({batchId:d,changes:ET(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(r=>{let s=Kl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const a=t.collectionGroup;let u=Kl();return this.indexManager.getCollectionParents(e,a).next(d=>G.forEach(d,f=>{const m=function(E,T){return new Ou(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,s).next(v=>{v.forEach((E,T)=>{u=u.insert(E,T)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,s))).next(u=>{a.forEach((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,Bt.newInvalidDocument(v)))});let d=Kl();return u.forEach((f,m)=>{const v=a.get(f);v!==void 0&&ru(v.mutation,m,On.empty(),lt.now()),Id(t,m)&&(d=d.insert(f,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return G.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Mn(s.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:dx(s.bundledQuery),readTime:Mn(s.readTime)}}(t)),G.resolve()}}/**
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
 */class Cx{constructor(){this.overlays=new Rt(_e.comparator),this.kr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Gs();return G.forEach(t,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,a)=>{this.wt(e,t,a)}),G.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.kr.delete(r)),G.resolve()}getOverlaysForCollection(e,t,r){const s=Gs(),a=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return G.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let a=new Rt((m,v)=>m-v);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=Gs(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const d=Gs(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>d.set(m,v)),!(d.size()>=s)););return G.resolve(d)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new qk(t,r));let a=this.kr.get(t);a===void 0&&(a=ze(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class cg{constructor(){this.qr=new bt(jt.Qr),this.$r=new bt(jt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new jt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new jt(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new _e(new Ze([])),r=new jt(t,e),s=new jt(t,e+1),a=[];return this.$r.forEachInRange([r,s],u=>{this.Wr(u),a.push(u.key)}),a}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new Ze([])),r=new jt(t,e),s=new jt(t,e+1);let a=ze();return this.$r.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const t=new jt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class jt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}/**
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
 */class Rx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new bt(jt.Qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Wk(a,t,r,s);this.mutationQueue.push(u);for(const d of s)this.Yr=this.Yr.add(new jt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(u)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),a=s<0?0:s;return G.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?tg:this.er-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new jt(t,0),s=new jt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,s],u=>{const d=this.Zr(u.Hr);a.push(d)}),G.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new bt(De);return t.forEach(s=>{const a=new jt(s,0),u=new jt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],d=>{r=r.add(d.Hr)})}),G.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const u=new jt(new _e(a),0);let d=new bt(De);return this.Yr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(d=d.add(f.Hr)),!0)},u),G.resolve(this.ei(d))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){$e(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return G.forEach(t.mutations,s=>{const a=new jt(s.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new jt(t,0),s=this.Yr.firstAfterOrEqual(r);return G.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ax{constructor(e){this.ni=e,this.docs=function(){return new Rt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),a=s?s.size:0,u=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return G.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let r=di();return t.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():Bt.newInvalidDocument(s))}),G.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let a=di();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||ok(sk(v),r)<=0||(s.has(v.key)||Id(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return G.resolve(a)}getAllFromCollectionGroup(e,t,r,s){ye(9500)}ri(e,t){return G.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Px(this)}getSize(e){return G.resolve(this.size)}}class Px extends Ex{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),G.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class kx{constructor(e){this.persistence=e,this.ii=new ao(t=>ig(t),sg),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.si=0,this.oi=new cg,this.targetCount=0,this._i=ka.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),G.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ka(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.hr(t),G.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,r){let s=0;const a=[];return this.ii.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),G.waitFor(a).next(()=>s)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return G.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),G.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,a=[];return s&&t.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),G.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return G.resolve(r)}containsKey(e,t){return G.resolve(this.oi.containsKey(t))}}/**
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
 */class qT{constructor(e,t){this.ai={},this.overlays={},this.ui=new vd(0),this.ci=!1,this.ci=!0,this.li=new Sx,this.referenceDelegate=e(this),this.hi=new kx(this),this.indexManager=new fx,this.remoteDocumentCache=function(s){return new Ax(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new hx(t),this.Ti=new Ix(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Rx(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){oe("MemoryPersistence","Starting transaction:",e);const s=new xx(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(a=>this.referenceDelegate.di(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(e,t){return G.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class xx extends lk{constructor(e){super(),this.currentSequenceNumber=e}}class hg{constructor(e){this.persistence=e,this.Ai=new cg,this.Ri=null}static Vi(e){return new hg(e)}get mi(){if(this.Ri)return this.Ri;throw ye(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),G.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(a=>this.mi.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.mi,r=>{const s=_e.fromPath(r);return this.fi(e,s).next(a=>{a||t.removeEntry(s,Ie.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return G.or([()=>G.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qh{constructor(e,t){this.persistence=e,this.gi=new ao(r=>hk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vx(this,t)}static Vi(e,t){return new qh(e,t)}Ii(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return G.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(a=>a?G.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ri(e,u=>this.Sr(e,u,t).next(d=>{d||(r++,a.removeEntry(u,Ie.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),G.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eh(e.data.value)),t}Sr(e,t,r){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return G.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class dg{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ze(),s=ze();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new dg(e,t.fromCache,r,s)}}/**
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
 */class Nx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return cR()?8:uk(on())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const a={result:null};return this.ps(e,t).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ys(e,t,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Nx;return this.ws(e,t,u).next(d=>{if(a.result=d,this.Rs)return this.Ss(e,t,u,d.size)})}).next(()=>a.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(aa()<=Ue.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",la(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(aa()<=Ue.DEBUG&&oe("QueryEngine","Query:",la(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(aa()<=Ue.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",la(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nr(t))):G.resolve())}ps(e,t){if(kE(t))return G.resolve(null);let r=Nr(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=um(t,null,"F"),r=Nr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=ze(...a);return this.gs.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.bs(t,d);return this.Ds(t,m,u,f.readTime)?this.ps(e,um(t,null,"F")):this.vs(e,m,t,f)}))})))}ys(e,t,r,s){return kE(t)||s.isEqual(Ie.min())?G.resolve(null):this.gs.getDocuments(e,r).next(a=>{const u=this.bs(t,a);return this.Ds(t,u,r,s)?G.resolve(null):(aa()<=Ue.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),la(t)),this.vs(e,u,t,ik(s,pu)).next(d=>d))})}bs(e,t){let r=new bt(yT(e));return t.forEach((s,a)=>{Id(e,a)&&(r=r.add(a))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ws(e,t,r){return aa()<=Ue.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",la(t)),this.gs.getDocumentsMatchingQuery(e,t,ns.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(a=>(t.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="LocalStore",Dx=3e8;class Ox{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Rt(De),this.Ms=new ao(a=>ig(a),sg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Mx(n,e,t,r){return new Ox(n,e,t,r)}async function HT(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let f=ze();for(const m of s){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){d.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(r,f).next(m=>({Bs:m,removedBatchIds:u,addedBatchIds:d}))})})}function Lx(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return function(d,f,m,v){const E=m.batch,T=E.keys();let D=G.resolve();return T.forEach(V=>{D=D.next(()=>v.getEntry(f,V)).next(q=>{const B=m.docVersions.get(V);$e(B!==null,48541),q.version.compareTo(B)<0&&(E.applyToRemoteDocument(q,m),q.isValidDocument()&&(q.setReadTime(m.commitVersion),v.addEntry(q)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(f,E))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let f=ze();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function $T(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Vx(n,e){const t=Pe(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const d=[];e.targetChanges.forEach((v,E)=>{const T=s.get(E);if(!T)return;d.push(t.hi.removeMatchingKeys(a,v.removedDocuments,E).next(()=>t.hi.addMatchingKeys(a,v.addedDocuments,E)));let D=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?D=D.withResumeToken(Yt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,r)),s=s.insert(E,D),function(q,B,J){return q.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=Dx?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(T,D,v)&&d.push(t.hi.updateTargetData(a,D))});let f=di(),m=ze();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(Fx(a,u,e.documentUpdates).next(v=>{f=v.Ls,m=v.ks})),!r.isEqual(Ie.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next(E=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(v)}return G.waitFor(d).next(()=>u.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(t.Fs=s,a))}function Fx(n,e,t){let r=ze(),s=ze();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let u=di();return t.forEach((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(Ie.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):oe(fg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Ls:u,ks:s}})}function Ux(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=tg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jx(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(a=>a?(s=a,G.resolve(s)):t.hi.allocateTargetId(r).next(u=>(s=new $i(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function fm(n,e,t){const r=Pe(n),s=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!ja(u))throw u;oe(fg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function BE(n,e,t){const r=Pe(n);let s=Ie.min(),a=ze();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,v){const E=Pe(f),T=E.Ms.get(v);return T!==void 0?G.resolve(E.Fs.get(T)):E.hi.getTargetData(m,v)}(r,u,Nr(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,e,t?s:Ie.min(),t?a:ze())).next(d=>(zx(r,xk(e),d),{documents:d,qs:a})))}function zx(n,e,t){let r=n.xs.get(e)||Ie.min();t.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.xs.set(e,r)}class WE{constructor(){this.activeTargetIds=Lk()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bx{constructor(){this.Fo=new WE,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new WE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wx{xo(e){}shutdown(){}}/**
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
 */const qE="ConnectivityMonitor";class HE{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(qE,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(qE,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dh=null;function pm(){return dh===null?dh=function(){return 268435456+Math.round(2147483648*Math.random())}():dh++,"0x"+dh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="RestConnection",qx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Hx{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Fh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,a){const u=pm(),d=this.Go(e,t.toUriEncodedString());oe(Dp,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,a);const{host:m}=new URL(d),v=hs(m);return this.jo(e,d,f,r,v).then(E=>(oe(Dp,`Received RPC '${e}' ${u}: `,E),E),E=>{throw ts(Dp,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",r),E})}Jo(e,t,r,s,a,u){return this.Wo(e,t,r,s,a)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}Go(e,t){const r=qx[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class $x{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const tn="WebChannelConnection";class Gx extends Hx{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,a){const u=pm();return new Promise((d,f)=>{const m=new q0;m.setWithCredentials(!0),m.listenOnce(H0.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case vh.NO_ERROR:const E=m.getResponseJson();oe(tn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case vh.TIMEOUT:oe(tn,`RPC '${e}' ${u} timed out`),f(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case vh.HTTP_ERROR:const T=m.getStatus();if(oe(tn,`RPC '${e}' ${u} failed with status:`,T,"response text:",m.getResponseText()),T>0){let D=m.getResponseJson();Array.isArray(D)&&(D=D[0]);const V=D?.error;if(V&&V.status&&V.message){const q=function(J){const re=J.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(re)>=0?re:H.UNKNOWN}(V.status);f(new ne(q,V.message))}else f(new ne(H.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new ne(H.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{oe(tn,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(s);oe(tn,`RPC '${e}' ${u} sending request:`,s),m.send(t,"POST",v,r,15)})}P_(e,t,r){const s=pm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=K0(),d=G0(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const v=a.join("");oe(tn,`Creating RPC '${e}' stream ${s}: ${v}`,f);const E=u.createWebChannel(v,f);this.T_(E);let T=!1,D=!1;const V=new $x({Ho:B=>{D?oe(tn,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(T||(oe(tn,`Opening RPC '${e}' stream ${s} transport.`),E.open(),T=!0),oe(tn,`RPC '${e}' stream ${s} sending:`,B),E.send(B))},Yo:()=>E.close()}),q=(B,J,re)=>{B.listen(J,ae=>{try{re(ae)}catch(pe){setTimeout(()=>{throw pe},0)}})};return q(E,Gl.EventType.OPEN,()=>{D||(oe(tn,`RPC '${e}' stream ${s} transport opened.`),V.s_())}),q(E,Gl.EventType.CLOSE,()=>{D||(D=!0,oe(tn,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(E))}),q(E,Gl.EventType.ERROR,B=>{D||(D=!0,ts(tn,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),V.__(new ne(H.UNAVAILABLE,"The operation could not be completed")))}),q(E,Gl.EventType.MESSAGE,B=>{var J;if(!D){const re=B.data[0];$e(!!re,16349);const ae=re,pe=ae?.error||((J=ae[0])===null||J===void 0?void 0:J.error);if(pe){oe(tn,`RPC '${e}' stream ${s} received error:`,pe);const Me=pe.status;let we=function(S){const R=Tt[S];if(R!==void 0)return bT(R)}(Me),O=pe.message;we===void 0&&(we=H.INTERNAL,O="Unknown error status: "+Me+" with message "+pe.message),D=!0,V.__(new ne(we,O)),E.close()}else oe(tn,`RPC '${e}' stream ${s} received:`,re),V.a_(re)}}),q(d,$0.STAT_EVENT,B=>{B.stat===tm.PROXY?oe(tn,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===tm.NOPROXY&&oe(tn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.o_()},0),V}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Op(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){return new Xk(n,!0)}/**
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
 */class pg{constructor(e,t,r=1e3,s=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&oe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const $E="PersistentStream";class GT{constructor(e,t,r,s,a,u,d,f){this.Fi=e,this.w_=r,this.S_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new pg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(hi(t.toString()),hi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new ne(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return oe($E,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(oe($E,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kx extends GT{constructor(e,t,r,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=tx(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ie.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Ie.min():u.readTime?Mn(u.readTime):Ie.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=dm(this.serializer),t.addTarget=function(a,u){let d;const f=u.target;if(d=am(f)?{documents:rx(a,f)}:{query:ix(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=MT(a,u.resumeToken);const m=cm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Bh(a,u.snapshotVersion.toTimestamp());const m=cm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=ox(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=dm(this.serializer),t.removeTarget=e,this.k_(t)}}class Qx extends GT{constructor(e,t,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=nx(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=dm(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>UT(this.serializer,r))};this.k_(t)}}/**
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
 */class Yx{}class Xx extends Yx{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(e,hm(t,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(H.UNKNOWN,a.toString())})}Jo(e,t,r,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Jo(e,hm(t,r),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ne(H.UNKNOWN,u.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Jx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(hi(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const eo="RemoteStore";class Zx{constructor(e,t,r,s,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo(u=>{r.enqueueAndForget(async()=>{lo(this)&&(oe(eo,"Restarting streams for network reachability change."),await async function(f){const m=Pe(f);m.Ia.add(4),await Vu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await xd(m)}(this))})}),this.Aa=new Jx(r,s)}}async function xd(n){if(lo(n))for(const e of n.da)await e(!0)}async function Vu(n){for(const e of n.da)await e(!1)}function KT(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),yg(t)?_g(t):za(t).x_()&&gg(t,e))}function mg(n,e){const t=Pe(n),r=za(t);t.Ta.delete(e),r.x_()&&QT(t,e),t.Ta.size===0&&(r.x_()?r.B_():lo(t)&&t.Aa.set("Unknown"))}function gg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}za(n).H_(e)}function QT(n,e){n.Ra.$e(e),za(n).Y_(e)}function _g(n){n.Ra=new Gk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),za(n).start(),n.Aa.aa()}function yg(n){return lo(n)&&!za(n).M_()&&n.Ta.size>0}function lo(n){return Pe(n).Ia.size===0}function YT(n){n.Ra=void 0}async function eN(n){n.Aa.set("Online")}async function tN(n){n.Ta.forEach((e,t)=>{gg(n,e)})}async function nN(n,e){YT(n),yg(n)?(n.Aa.la(e),_g(n)):n.Aa.set("Unknown")}async function rN(n,e,t){if(n.Aa.set("Online"),e instanceof OT&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s.Ta.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s.Ta.delete(d),s.Ra.removeTarget(d))}(n,e)}catch(r){oe(eo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hh(n,r)}else if(e instanceof Ih?n.Ra.Ye(e):e instanceof DT?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ie.min()))try{const r=await $T(n.localStore);t.compareTo(r)>=0&&await function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.Ta.get(m);v&&a.Ta.set(m,v.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,m)=>{const v=a.Ta.get(f);if(!v)return;a.Ta.set(f,v.withResumeToken(Yt.EMPTY_BYTE_STRING,v.snapshotVersion)),QT(a,f);const E=new $i(v.target,f,m,v.sequenceNumber);gg(a,E)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){oe(eo,"Failed to raise snapshot:",r),await Hh(n,r)}}async function Hh(n,e,t){if(!ja(e))throw e;n.Ia.add(1),await Vu(n),n.Aa.set("Offline"),t||(t=()=>$T(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe(eo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await xd(n)})}function XT(n,e){return e().catch(t=>Hh(n,t,e))}async function Nd(n){const e=Pe(n),t=os(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:tg;for(;iN(e);)try{const s=await Ux(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,sN(e,s)}catch(s){await Hh(e,s)}JT(e)&&ZT(e)}function iN(n){return lo(n)&&n.Pa.length<10}function sN(n,e){n.Pa.push(e);const t=os(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function JT(n){return lo(n)&&!os(n).M_()&&n.Pa.length>0}function ZT(n){os(n).start()}async function oN(n){os(n).na()}async function aN(n){const e=os(n);for(const t of n.Pa)e.X_(t.mutations)}async function lN(n,e,t){const r=n.Pa.shift(),s=ag.from(r,e,t);await XT(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Nd(n)}async function uN(n,e){e&&os(n).Z_&&await async function(r,s){if(function(u){return NT(u)&&u!==H.ABORTED}(s.code)){const a=r.Pa.shift();os(r).N_(),await XT(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Nd(r)}}(n,e),JT(n)&&ZT(n)}async function GE(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),oe(eo,"RemoteStore received new credentials");const r=lo(t);t.Ia.add(3),await Vu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await xd(t)}async function cN(n,e){const t=Pe(n);e?(t.Ia.delete(2),await xd(t)):e||(t.Ia.add(2),await Vu(t),t.Aa.set("Unknown"))}function za(n){return n.Va||(n.Va=function(t,r,s){const a=Pe(t);return a.ia(),new Kx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Zo:eN.bind(null,n),e_:tN.bind(null,n),n_:nN.bind(null,n),J_:rN.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),yg(n)?_g(n):n.Aa.set("Unknown")):(await n.Va.stop(),YT(n))})),n.Va}function os(n){return n.ma||(n.ma=function(t,r,s){const a=Pe(t);return a.ia(),new Qx(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:oN.bind(null,n),n_:uN.bind(null,n),ea:aN.bind(null,n),ta:lN.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Nd(n)):(await n.ma.stop(),n.Pa.length>0&&(oe(eo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class vg{constructor(e,t,r,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,a){const u=Date.now()+r,d=new vg(e,t,u,s,a);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eg(n,e){if(hi("AsyncQueue",`${e}: ${n}`),ja(n))return new ne(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class _a{static emptySet(e){return new _a(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||_e.comparator(t.key,r.key):(t,r)=>_e.comparator(t.key,r.key),this.keyedMap=Kl(),this.sortedSet=new Rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _a)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _a;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class KE{constructor(){this.fa=new Rt(_e.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ye(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class xa{constructor(e,t,r,s,a,u,d,f,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,s,a){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new xa(e,t,_a.emptySet(t),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class hN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class dN{constructor(){this.queries=QE(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Pe(t),a=s.queries;s.queries=QE(),a.forEach((u,d)=>{for(const f of d.wa)f.onError(r)})})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function QE(){return new ao(n=>_T(n),Td)}async function eI(n,e){const t=Pe(n);let r=3;const s=e.query;let a=t.queries.get(s);a?!a.Sa()&&e.ba()&&(r=2):(a=new hN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(s,!0);break;case 1:a.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(u){const d=Eg(u,`Initialization of query '${la(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&wg(t)}async function tI(n,e){const t=Pe(n),r=e.query;let s=3;const a=t.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?s=e.ba()?0:1:!a.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function fN(n,e){const t=Pe(n);let r=!1;for(const s of e){const a=s.query,u=t.queries.get(a);if(u){for(const d of u.wa)d.Ca(s)&&(r=!0);u.ya=s}}r&&wg(t)}function pN(n,e,t){const r=Pe(n),s=r.queries.get(e);if(s)for(const a of s.wa)a.onError(t);r.queries.delete(e)}function wg(n){n.Da.forEach(e=>{e.next()})}var mm,YE;(YE=mm||(mm={})).Fa="default",YE.Cache="cache";class nI{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=xa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==mm.Cache}}/**
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
 */class rI{constructor(e){this.key=e}}class iI{constructor(e){this.key=e}}class mN{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ze(),this.mutatedKeys=ze(),this.Xa=yT(e),this.eu=new _a(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new KE,s=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((v,E)=>{const T=s.get(v),D=Id(this.query,E)?E:null,V=!!T&&this.mutatedKeys.has(T.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let B=!1;T&&D?T.data.isEqual(D.data)?V!==q&&(r.track({type:3,doc:D}),B=!0):this.iu(T,D)||(r.track({type:2,doc:D}),B=!0,(f&&this.Xa(D,f)>0||m&&this.Xa(D,m)<0)&&(d=!0)):!T&&D?(r.track({type:0,doc:D}),B=!0):T&&!D&&(r.track({type:1,doc:T}),B=!0,(f||m)&&(d=!0)),B&&(D?(u=u.add(D),a=q?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort((v,E)=>function(D,V){const q=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{At:B})}};return q(D)-q(V)}(v.type,E.type)||this.Xa(v.doc,E.doc)),this.su(r),s=s!=null&&s;const d=t&&!s?this.ou():[],f=this.Za.size===0&&this.current&&!s?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new xa(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new KE,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ze(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new iI(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new rI(r))}),t}uu(e){this.Ha=e.qs,this.Za=ze();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return xa.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Tg="SyncEngine";class gN{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class _N{constructor(e){this.key=e,this.lu=!1}}class yN{constructor(e,t,r,s,a,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ao(d=>_T(d),Td),this.Tu=new Map,this.Iu=new Set,this.du=new Rt(_e.comparator),this.Eu=new Map,this.Au=new cg,this.Ru={},this.Vu=new Map,this.mu=ka.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function vN(n,e,t=!0){const r=cI(n);let s;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.cu()):s=await sI(r,e,t,!0),s}async function EN(n,e){const t=cI(n);await sI(t,e,!0,!1)}async function sI(n,e,t,r){const s=await jx(n.localStore,Nr(e)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,t);let d;return r&&(d=await wN(n,e,a,u==="current",s.resumeToken)),n.isPrimaryClient&&t&&KT(n.remoteStore,s),d}async function wN(n,e,t,r,s){n.gu=(E,T,D)=>async function(q,B,J,re){let ae=B.view.nu(J);ae.Ds&&(ae=await BE(q.localStore,B.query,!1).then(({documents:O})=>B.view.nu(O,ae)));const pe=re&&re.targetChanges.get(B.targetId),Me=re&&re.targetMismatches.get(B.targetId)!=null,we=B.view.applyChanges(ae,q.isPrimaryClient,pe,Me);return JE(q,B.targetId,we._u),we.snapshot}(n,E,T,D);const a=await BE(n.localStore,e,!0),u=new mN(e,a.qs),d=u.nu(a.documents),f=Lu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),m=u.applyChanges(d,n.isPrimaryClient,f);JE(n,t,m._u);const v=new gN(e,t,u);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function TN(n,e,t){const r=Pe(n),s=r.Pu.get(e),a=r.Tu.get(s.targetId);if(a.length>1)return r.Tu.set(s.targetId,a.filter(u=>!Td(u,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&mg(r.remoteStore,s.targetId),gm(r,s.targetId)}).catch(Ua)):(gm(r,s.targetId),await fm(r.localStore,s.targetId,!0))}async function IN(n,e){const t=Pe(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),mg(t.remoteStore,r.targetId))}async function CN(n,e,t){const r=NN(n);try{const s=await function(u,d){const f=Pe(u),m=lt.now(),v=d.reduce((D,V)=>D.add(V.key),ze());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=di(),q=ze();return f.Os.getEntries(D,v).next(B=>{V=B,V.forEach((J,re)=>{re.isValidDocument()||(q=q.add(J))})}).next(()=>f.localDocuments.getOverlayedDocuments(D,V)).next(B=>{E=B;const J=[];for(const re of d){const ae=Bk(re,E.get(re.key).overlayedDocument);ae!=null&&J.push(new ms(re.key,ae,uT(ae.value.mapValue),sn.exists(!0)))}return f.mutationQueue.addMutationBatch(D,m,J,d)}).next(B=>{T=B;const J=B.applyToLocalDocumentSet(E,q);return f.documentOverlayCache.saveOverlays(D,B.batchId,J)})}).then(()=>({batchId:T.batchId,changes:ET(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new Rt(De)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m}(r,s.batchId,t),await Fu(r,s.changes),await Nd(r.remoteStore)}catch(s){const a=Eg(s,"Failed to persist write");t.reject(a)}}async function oI(n,e){const t=Pe(n);try{const r=await Vx(t.localStore,e);e.targetChanges.forEach((s,a)=>{const u=t.Eu.get(a);u&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?$e(u.lu,14607):s.removedDocuments.size>0&&($e(u.lu,42227),u.lu=!1))}),await Fu(t,r,e)}catch(r){await Ua(r)}}function XE(n,e,t){const r=Pe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((a,u)=>{const d=u.view.va(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=Pe(u);f.onlineState=d;let m=!1;f.queries.forEach((v,E)=>{for(const T of E.wa)T.va(d)&&(m=!0)}),m&&wg(f)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SN(n,e,t){const r=Pe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),a=s&&s.key;if(a){let u=new Rt(_e.comparator);u=u.insert(a,Bt.newNoDocument(a,Ie.min()));const d=ze().add(a),f=new Pd(Ie.min(),new Map,new Rt(De),u,d);await oI(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Ig(r)}else await fm(r.localStore,e,!1).then(()=>gm(r,e,t)).catch(Ua)}async function RN(n,e){const t=Pe(n),r=e.batch.batchId;try{const s=await Lx(t.localStore,e);lI(t,r,null),aI(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Fu(t,s)}catch(s){await Ua(s)}}async function AN(n,e,t){const r=Pe(n);try{const s=await function(u,d){const f=Pe(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,d).next(E=>($e(E!==null,37113),v=E.keys(),f.mutationQueue.removeMutationBatch(m,E))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(r.localStore,e);lI(r,e,t),aI(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Fu(r,s)}catch(s){await Ua(s)}}function aI(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function lI(n,e,t){const r=Pe(n);let s=r.Ru[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(t?a.reject(t):a.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function gm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||uI(n,r)})}function uI(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(mg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ig(n))}function JE(n,e,t){for(const r of t)r instanceof rI?(n.Au.addReference(r.key,e),PN(n,r)):r instanceof iI?(oe(Tg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||uI(n,r.key)):ye(19791,{yu:r})}function PN(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(oe(Tg,"New document in limbo: "+t),n.Iu.add(r),Ig(n))}function Ig(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new _e(Ze.fromString(e)),r=n.mu.next();n.Eu.set(r,new _N(t)),n.du=n.du.insert(t,r),KT(n.remoteStore,new $i(Nr(wd(t.path)),r,"TargetPurposeLimboResolution",vd.ue))}}async function Fu(n,e,t){const r=Pe(n),s=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach((d,f)=>{u.push(r.gu(f,e,t).then(m=>{var v;if((m||t)&&r.isPrimaryClient){const E=m?!m.fromCache:(v=t?.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(m){s.push(m);const E=dg.Es(f.targetId,m);a.push(E)}}))}),await Promise.all(u),r.hu.J_(s),await async function(f,m){const v=Pe(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>G.forEach(m,T=>G.forEach(T.Is,D=>v.persistence.referenceDelegate.addReference(E,T.targetId,D)).next(()=>G.forEach(T.ds,D=>v.persistence.referenceDelegate.removeReference(E,T.targetId,D)))))}catch(E){if(!ja(E))throw E;oe(fg,"Failed to update sequence numbers: "+E)}for(const E of m){const T=E.targetId;if(!E.fromCache){const D=v.Fs.get(T),V=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(V);v.Fs=v.Fs.insert(T,q)}}}(r.localStore,a))}async function kN(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){oe(Tg,"User change. New user:",e.toKey());const r=await HT(t.localStore,e);t.currentUser=e,function(a,u){a.Vu.forEach(d=>{d.forEach(f=>{f.reject(new ne(H.CANCELLED,u))})}),a.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fu(t,r.Bs)}}function xN(n,e){const t=Pe(n),r=t.Eu.get(e);if(r&&r.lu)return ze().add(r.key);{let s=ze();const a=t.Tu.get(e);if(!a)return s;for(const u of a){const d=t.Pu.get(u);s=s.unionWith(d.view.tu)}return s}}function cI(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=oI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SN.bind(null,e),e.hu.J_=fN.bind(null,e.eventManager),e.hu.pu=pN.bind(null,e.eventManager),e}function NN(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AN.bind(null,e),e}class $h{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Mx(this.persistence,new bx,e.initialUser,this.serializer)}Du(e){return new qT(hg.Vi,this.serializer)}bu(e){return new Bx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$h.provider={build:()=>new $h};class bN extends $h{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){$e(this.persistence.referenceDelegate instanceof qh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _x(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new qT(r=>qh.Vi(r,t),this.serializer)}}class _m{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>XE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kN.bind(null,this.syncEngine),await cN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dN}()}createDatastore(e){const t=kd(e.databaseInfo.databaseId),r=function(a){return new Gx(a)}(e.databaseInfo);return function(a,u,d,f){return new Xx(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,a,u,d){return new Zx(r,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>XE(this.syncEngine,t,0),function(){return HE.C()?new HE:new Wx}())}createSyncEngine(e,t){return function(s,a,u,d,f,m,v){const E=new yN(s,a,u,d,f,m);return v&&(E.fu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const a=Pe(s);oe(eo,"RemoteStore shutting down."),a.Ia.add(5),await Vu(a),a.Ea.shutdown(),a.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_m.provider={build:()=>new _m};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class hI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):hi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class DN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ne(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,a){const u=Pe(s),d={documents:a.map(E=>Wh(u.serializer,E))},f=await u.Jo("BatchGetDocuments",u.serializer.databaseId,Ze.emptyPath(),d,a.length),m=new Map;f.forEach(E=>{const T=ex(u.serializer,E);m.set(T.key.toString(),T)});const v=[];return a.forEach(E=>{const T=m.get(E.toString());$e(!!T,55234,{key:E}),v.push(T)}),v}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ad(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=_e.fromPath(r);this.mutations.push(new xT(s,this.precondition(s)))}),await async function(r,s){const a=Pe(r),u={writes:s.map(d=>UT(a.serializer,d))};await a.Wo("Commit",a.serializer.databaseId,Ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ye(50498,{Wu:e.constructor.name});t=Ie.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new ne(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ie.min())?sn.exists(!1):sn.updateTime(t):sn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ie.min()))throw new ne(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return sn.updateTime(t)}return sn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ON{constructor(e,t,r,s,a){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=a,this.Gu=r.maxAttempts,this.F_=new pg(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new DN(this.datastore),t=this.Ju(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Hu(s)}))}).catch(r=>{this.Hu(r)})})}Ju(e){try{const t=this.updateFunction(e);return!Du(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!NT(t)}return!1}}/**
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
 */const as="FirestoreClient";class MN{constructor(e,t,r,s,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=rn.UNAUTHENTICATED,this.clientId=eg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{oe(as,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(oe(as,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Eg(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mp(n,e){n.asyncQueue.verifyOperationInProgress(),oe(as,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await HT(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{ts("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{ts("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function ZE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await LN(n);oe(as,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>GE(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>GE(e.remoteStore,s)),n._onlineComponents=e}async function LN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(as,"Using user provided OfflineComponentProvider");try{await Mp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ts("Error using user provided cache. Falling back to memory cache: "+t),await Mp(n,new $h)}}else oe(as,"Using default OfflineComponentProvider"),await Mp(n,new bN(void 0));return n._offlineComponents}async function Cg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(as,"Using user provided OnlineComponentProvider"),await ZE(n,n._uninitializedComponentsProvider._online)):(oe(as,"Using default OnlineComponentProvider"),await ZE(n,new _m))),n._onlineComponents}function VN(n){return Cg(n).then(e=>e.syncEngine)}function FN(n){return Cg(n).then(e=>e.datastore)}async function ym(n){const e=await Cg(n),t=e.eventManager;return t.onListen=vN.bind(null,e.syncEngine),t.onUnlisten=TN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=EN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=IN.bind(null,e.syncEngine),t}function UN(n,e,t={}){const r=new ai;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,m){const v=new hI({next:T=>{v.Ou(),u.enqueueAndForget(()=>tI(a,E));const D=T.docs.has(d);!D&&T.fromCache?m.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&T.fromCache&&f&&f.source==="server"?m.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(T)},error:T=>m.reject(T)}),E=new nI(wd(d.path),v,{includeMetadataChanges:!0,ka:!0});return eI(a,E)}(await ym(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function dI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firestore.googleapis.com",tw=!0;class nw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fI,this.ssl=tw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:tw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=WT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mx)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KP;switch(r.type){case"firstParty":return new JP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ew.get(t);r&&(oe("ComponentProvider","Removing Datastore"),ew.delete(t),r.terminate())}(this),Promise.resolve()}}function jN(n,e,t,r={}){var s;n=Gn(n,bd);const a=hs(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${e}:${t}`;a&&(Um(`https://${f}`),jm("Firestore",!0)),u.host!==fI&&u.host!==f&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!Or(m,d)&&(n._setSettings(m),r.mockUserToken)){let v,E;if(typeof r.mockUserToken=="string")v=r.mockUserToken,E=rn.MOCK_USER;else{v=t0(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new rn(T)}n._authCredentials=new QP(new Y0(v,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ba(this.firestore,e,this._query)}}class ft{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(bu(t,ft._jsonSchema))return new ft(e,r||null,new _e(Ze.fromString(t.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:St("string",ft._jsonSchemaVersion),referencePath:St("string")};class Xi extends Ba{constructor(e,t,r){super(e,t,wd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new _e(e))}withConverter(e){return new Xi(this.firestore,e,this._path)}}function zN(n,e,...t){if(n=nt(n),J0("collection","path",e),n instanceof bd){const r=Ze.fromString(e,...t);return mE(r),new Xi(n,null,r)}{if(!(n instanceof ft||n instanceof Xi))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ze.fromString(e,...t));return mE(r),new Xi(n.firestore,null,r)}}function nn(n,e,...t){if(n=nt(n),arguments.length===1&&(e=eg.newId()),J0("doc","path",e),n instanceof bd){const r=Ze.fromString(e,...t);return pE(r),new ft(n,null,new _e(r))}{if(!(n instanceof ft||n instanceof Xi))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ze.fromString(e,...t));return pE(r),new ft(n.firestore,n instanceof Xi?n.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="AsyncQueue";class iw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new pg(this,"async_queue_retry"),this.oc=()=>{const r=Op();r&&oe(rw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Op();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Op();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ai;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ja(e))throw e;oe(rw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,hi("INTERNAL UNHANDLED ERROR: ",sw(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=vg.createAndSchedule(this,e,t,r,a=>this.lc(a));return this.ec.push(s),s}ac(){this.tc&&ye(47125,{hc:sw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function sw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function ow(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}class ls extends bd{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new iw,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iw(e),this._firestoreClient=void 0,await e}}}function BN(n,e){const t=typeof n=="object"?n:Wm(),r=typeof n=="string"?n:Fh,s=pd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Jw("firestore");a&&jN(s,...a)}return s}function Dd(n){if(n._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||WN(n),n._firestoreClient}function WN(n){var e,t,r;const s=n._freezeSettings(),a=function(d,f,m,v){return new pk(d,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,dI(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new MN(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const f=d?._online.build();return{_offline:d?._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(Yt.fromBase64String(e))}catch(t){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bu(e,Dn._jsonSchema))return Dn.fromBase64String(e.bytes)}}Dn._jsonSchemaVersion="firestore/bytes/1.0",Dn._jsonSchema={type:St("string",Dn._jsonSchemaVersion),bytes:St("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._methodName=e}}/**
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
 */class br{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:br._jsonSchemaVersion}}static fromJSON(e){if(bu(e,br._jsonSchema))return new br(e.latitude,e.longitude)}}br._jsonSchemaVersion="firestore/geoPoint/1.0",br._jsonSchema={type:St("string",br._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bu(e,Dr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Dr(e.vectorValues);throw new ne(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dr._jsonSchemaVersion="firestore/vectorValue/1.0",Dr._jsonSchema={type:St("string",Dr._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const qN=/^__.*__$/;class HN{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mu(e,this.data,t,this.fieldTransforms)}}class pI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ms(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{Ec:n})}}class Od{constructor(e,t,r,s,a,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(mI(this.Ec)&&qN.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $N{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||kd(e)}Dc(e,t,r,s=!1){return new Od({Ec:e,methodName:t,bc:r,path:Qt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Md(n){const e=n._freezeSettings(),t=kd(n._databaseId);return new $N(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gI(n,e,t,r,s,a={}){const u=n.Dc(a.merge||a.mergeFields?2:0,e,t,s);kg("Data must be an object, but it was:",u,r);const d=EI(r,u);let f,m;if(a.merge)f=new On(u.fieldMask),m=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const T=vm(e,E,t);if(!u.contains(T))throw new ne(H.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);TI(v,T)||v.push(T)}f=new On(v),m=u.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,m=u.fieldTransforms;return new HN(new dn(d),f,m)}class Ld extends uo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ld}}function _I(n,e,t){return new Od({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sg extends uo{_toFieldTransform(e){return new Sd(e.path,new yu)}isEqual(e){return e instanceof Sg}}class Rg extends uo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=_I(this,e,!0),r=this.vc.map(a=>co(a,t)),s=new Aa(r);return new Sd(e.path,s)}isEqual(e){return e instanceof Rg&&Or(this.vc,e.vc)}}class Ag extends uo{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=_I(this,e,!0),r=this.vc.map(a=>co(a,t)),s=new Pa(r);return new Sd(e.path,s)}isEqual(e){return e instanceof Ag&&Or(this.vc,e.vc)}}class Pg extends uo{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new vu(e.serializer,IT(e.serializer,this.Cc));return new Sd(e.path,t)}isEqual(e){return e instanceof Pg&&this.Cc===e.Cc}}function yI(n,e,t,r){const s=n.Dc(1,e,t);kg("Data must be an object, but it was:",s,r);const a=[],u=dn.empty();ps(r,(f,m)=>{const v=xg(e,f,t);m=nt(m);const E=s.gc(v);if(m instanceof Ld)a.push(v);else{const T=co(m,E);T!=null&&(a.push(v),u.set(v,T))}});const d=new On(a);return new pI(u,d,s.fieldTransforms)}function vI(n,e,t,r,s,a){const u=n.Dc(1,e,t),d=[vm(e,r,t)],f=[s];if(a.length%2!=0)throw new ne(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(vm(e,a[T])),f.push(a[T+1]);const m=[],v=dn.empty();for(let T=d.length-1;T>=0;--T)if(!TI(m,d[T])){const D=d[T];let V=f[T];V=nt(V);const q=u.gc(D);if(V instanceof Ld)m.push(D);else{const B=co(V,q);B!=null&&(m.push(D),v.set(D,B))}}const E=new On(m);return new pI(v,E,u.fieldTransforms)}function GN(n,e,t,r=!1){return co(t,n.Dc(r?4:3,e))}function co(n,e){if(wI(n=nt(n)))return kg("Unsupported field value:",e,n),EI(n,e);if(n instanceof uo)return function(r,s){if(!mI(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const d of r){let f=co(d,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(n,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return IT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=lt.fromDate(r);return{timestampValue:Bh(s.serializer,a)}}if(r instanceof lt){const a=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bh(s.serializer,a)}}if(r instanceof br)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:MT(s.serializer,r._byteString)};if(r instanceof ft){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:ug(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dr)return function(u,d){return{mapValue:{fields:{[aT]:{stringValue:lT},[Uh]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return og(d.serializer,m)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${yd(r)}`)}(n,e)}function EI(n,e){const t={};return tT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(n,(r,s)=>{const a=co(s,e.Vc(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function wI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof lt||n instanceof br||n instanceof Dn||n instanceof ft||n instanceof uo||n instanceof Dr)}function kg(n,e,t){if(!wI(t)||!Z0(t)){const r=yd(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function vm(n,e,t){if((e=nt(e))instanceof Uu)return e._internalPath;if(typeof e=="string")return xg(n,e);throw Gh("Field path arguments must be of type string or ",n,!1,void 0,t)}const KN=new RegExp("[~\\*/\\[\\]]");function xg(n,e,t){if(e.search(KN)>=0)throw Gh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Uu(...e.split("."))._internalPath}catch{throw Gh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gh(n,e,t,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new ne(H.INVALID_ARGUMENT,d+n+f)}function TI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,r,s,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ng("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QN extends Kh{data(){return super.data()}}function Ng(n,e){return typeof e=="string"?xg(n,e):e instanceof Uu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{}class XN extends bg{}function JN(n,e,...t){let r=[];e instanceof bg&&r.push(e),r=r.concat(t),function(a){const u=a.filter(f=>f instanceof Dg).length,d=a.filter(f=>f instanceof Vd).length;if(u>1||u>0&&d>0)throw new ne(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Vd extends XN{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Vd(e,t,r)}_apply(e){const t=this._parse(e);return II(e._query,t),new Ba(e.firestore,e.converter,lm(e._query,t))}_parse(e){const t=Md(e.firestore);return function(a,u,d,f,m,v,E){let T;if(m.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ne(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){lw(E,v);const V=[];for(const q of E)V.push(aw(f,a,q));T={arrayValue:{values:V}}}else T=aw(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||lw(E,v),T=GN(d,u,E,v==="in"||v==="not-in");return Ct.create(m,v,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ZN(n,e,t){const r=e,s=Ng("where",n);return Vd._create(s,r,t)}class Dg extends bg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Dg(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:mr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,a){let u=s;const d=a.getFlattenedFilters();for(const f of d)II(u,f),u=lm(u,f)}(e._query,t),new Ba(e.firestore,e.converter,lm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function aw(n,e,t){if(typeof(t=nt(t))=="string"){if(t==="")throw new ne(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gT(e)&&t.indexOf("/")!==-1)throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ze.fromString(t));if(!_e.isDocumentKey(r))throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return IE(n,new _e(r))}if(t instanceof ft)return IE(n,t._key);throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yd(t)}.`)}function lw(n,e){if(!Array.isArray(n)||n.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function II(n,e){const t=function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class CI{convertValue(e,t="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ps(e,(s,a)=>{r[s]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,s;const a=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Uh].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>yt(u.doubleValue));return new Dr(a)}convertGeoPoint(e){return new br(yt(e.latitude),yt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ed(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(mu(e));default:return null}}convertTimestamp(e){const t=rs(e);return new lt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ze.fromString(e);$e(BT(r),9688,{name:e});const s=new gu(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return s.isEqual(t)||hi(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class eb extends CI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}class da{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ji extends Kh{constructor(e,t,r,s,a,u){super(e,t,r,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ng("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ji._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ji._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ji._jsonSchema={type:St("string",Ji._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class Ch extends Ji{data(e={}){return super.data(e)}}class ya{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new da(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const f=new Ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new da(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new Ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new da(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let m=-1,v=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),v=u.indexOf(d.doc.key)),{type:tb(d.type),doc:f,oldIndex:m,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ya._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=eg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n){n=Gn(n,ft);const e=Gn(n.firestore,ls);return UN(Dd(e),n._key).then(t=>RI(e,n,t))}ya._jsonSchemaVersion="firestore/querySnapshot/1.0",ya._jsonSchema={type:St("string",ya._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class Og extends CI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}function wm(n,e,t){n=Gn(n,ft);const r=Gn(n.firestore,ls),s=SI(n.converter,e,t);return Mg(r,[gI(Md(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,sn.none())])}function ur(n,e,t,...r){n=Gn(n,ft);const s=Gn(n.firestore,ls),a=Md(s);let u;return u=typeof(e=nt(e))=="string"||e instanceof Uu?vI(a,"updateDoc",n._key,e,t,r):yI(a,"updateDoc",n._key,e),Mg(s,[u.toMutation(n._key,sn.exists(!0))])}function nb(n){return Mg(Gn(n.firestore,ls),[new Ad(n._key,sn.none())])}function Qh(n,...e){var t,r,s;n=nt(n);let a={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||ow(e[u])||(a=e[u++]);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(ow(e[u])){const E=e[u];e[u]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[u+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),e[u+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let f,m,v;if(n instanceof ft)m=Gn(n.firestore,ls),v=wd(n._key.path),f={next:E=>{e[u]&&e[u](RI(m,n,E))},error:e[u+1],complete:e[u+2]};else{const E=Gn(n,Ba);m=Gn(E.firestore,ls),v=E._query;const T=new Og(m);f={next:D=>{e[u]&&e[u](new ya(m,T,E,D))},error:e[u+1],complete:e[u+2]},YN(n._query)}return function(T,D,V,q){const B=new hI(q),J=new nI(D,B,V);return T.asyncQueue.enqueueAndForget(async()=>eI(await ym(T),J)),()=>{B.Ou(),T.asyncQueue.enqueueAndForget(async()=>tI(await ym(T),J))}}(Dd(m),v,d,f)}function Mg(n,e){return function(r,s){const a=new ai;return r.asyncQueue.enqueueAndForget(async()=>CN(await VN(r),s,a)),a.promise}(Dd(n),e)}function RI(n,e,t){const r=t.docs.get(e._key),s=new Og(n);return new Ji(n,s,e._key,r,new da(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const rb={maxAttempts:5};function Yl(n,e){if((n=nt(n)).firestore!==e)throw new ne(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Md(e)}get(e){const t=Yl(e,this._firestore),r=new eb(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return ye(24041);const a=s[0];if(a.isFoundDocument())return new Kh(this._firestore,r,a.key,a,t.converter);if(a.isNoDocument())return new Kh(this._firestore,r,t._key,null,t.converter);throw ye(18433,{doc:a})})}set(e,t,r){const s=Yl(e,this._firestore),a=SI(s.converter,t,r),u=gI(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,r);return this._transaction.set(s._key,u),this}update(e,t,r,...s){const a=Yl(e,this._firestore);let u;return u=typeof(t=nt(t))=="string"||t instanceof Uu?vI(this._dataReader,"Transaction.update",a._key,t,r,s):yI(this._dataReader,"Transaction.update",a._key,t),this._transaction.update(a._key,u),this}delete(e){const t=Yl(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb extends ib{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Yl(e,this._firestore),r=new Og(this._firestore);return super.get(e).then(s=>new Ji(this._firestore,r,t._key,s._document,new da(!1,!1),t.converter))}}function ob(n,e,t){n=Gn(n,ls);const r=Object.assign(Object.assign({},rb),t);return function(a){if(a.maxAttempts<1)throw new ne(H.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(a,u,d){const f=new ai;return a.asyncQueue.enqueueAndForget(async()=>{const m=await FN(a);new ON(a.asyncQueue,m,d,u,f).zu()}),f.promise}(Dd(n),s=>e(new sb(n,s)),r)}function Lp(){return new Sg("serverTimestamp")}function ab(...n){return new Rg("arrayUnion",n)}function lb(...n){return new Ag("arrayRemove",n)}function ub(n){return new Pg("increment",n)}(function(e,t=!0){(function(s){Fa=s})(so),Ys(new es("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new ls(new YP(r.getProvider("auth-internal")),new ZP(u,r.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gu(m.options.projectId,v)}(u,s),u);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Pr(uE,cE,e),Pr(uE,cE,"esm2017")})();var uw={};const cw="@firebase/database",hw="1.0.20";/**
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
 */let AI="";function cb(n){AI=n}/**
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
 */class hb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Wt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:cu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class db{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Lr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const PI=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hb(e)}}catch{}return new db},Ks=PI("localStorage"),fb=PI("sessionStorage");/**
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
 */const va=new fd("@firebase/database"),pb=function(){let n=1;return function(){return n++}}(),kI=function(n){const e=TR(n),t=new yR;t.update(e);const r=t.digest();return Fm.encodeByteArray(r)},ju=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ju.apply(null,r):typeof r=="object"?e+=Wt(r):e+=r,e+=" "}return e};let su=null,dw=!0;const mb=function(n,e){ee(!0,"Can't turn on custom loggers persistently."),va.logLevel=Ue.VERBOSE,su=va.log.bind(va)},Kt=function(...n){if(dw===!0&&(dw=!1,su===null&&fb.get("logging_enabled")===!0&&mb()),su){const e=ju.apply(null,n);su(e)}},zu=function(n){return function(...e){Kt(n,...e)}},Tm=function(...n){const e="FIREBASE INTERNAL ERROR: "+ju(...n);va.error(e)},fi=function(...n){const e=`FIREBASE FATAL ERROR: ${ju(...n)}`;throw va.error(e),new Error(e)},Cn=function(...n){const e="FIREBASE WARNING: "+ju(...n);va.warn(e)},gb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_b=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Na="[MIN_NAME]",to="[MAX_NAME]",ho=function(n,e){if(n===e)return 0;if(n===Na||e===to)return-1;if(e===Na||n===to)return 1;{const t=fw(n),r=fw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},yb=function(n,e){return n===e?0:n<e?-1:1},zl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Wt(e))},Lg=function(n){if(typeof n!="object"||n===null)return Wt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Wt(e[r]),t+=":",t+=Lg(n[e[r]]);return t+="}",t},xI=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function an(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const NI=function(n){ee(!Fd(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,a,u,d,f;n===0?(a=0,u=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=d+r,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(a=0,u=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(f=t;f;f-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(f=e;f;f-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(s?1:0),m.reverse();const v=m.join("");let E="";for(f=0;f<64;f+=8){let T=parseInt(v.substr(f,8),2).toString(16);T.length===1&&(T="0"+T),E=E+T}return E.toLowerCase()},vb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Eb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wb(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Tb=new RegExp("^-?(0*)\\d{1,10}$"),Ib=-2147483648,Cb=2147483647,fw=function(n){if(Tb.test(n)){const e=Number(n);if(e>=Ib&&e<=Cb)return e}return null},Wa=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Cn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Sb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ou=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Rb{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,bn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Cn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ab{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Cn(e)}}class Sh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sh.OWNER="owner";/**
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
 */const Vg="5",bI="v",DI="s",OI="r",MI="f",LI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,VI="ls",FI="p",Im="ac",UI="websocket",jI="long_polling";/**
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
 */class zI{constructor(e,t,r,s,a=!1,u="",d=!1,f=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pb(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function BI(n,e,t){ee(typeof e=="string","typeof type must == string"),ee(typeof t=="object","typeof params must == object");let r;if(e===UI)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===jI)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pb(n)&&(t.ns=n.namespace);const s=[];return an(t,(a,u)=>{s.push(a+"="+u)}),r+s.join("&")}/**
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
 */class kb{constructor(){this.counters_={}}incrementCounter(e,t=1){Lr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return XS(this.counters_)}}/**
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
 */const Vp={},Fp={};function Fg(n){const e=n.toString();return Vp[e]||(Vp[e]=new kb),Vp[e]}function xb(n,e){const t=n.toString();return Fp[t]||(Fp[t]=e()),Fp[t]}/**
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
 */class Nb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Wa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const pw="start",bb="close",Db="pLPCommand",Ob="pRTLPCB",WI="id",qI="pw",HI="ser",Mb="cb",Lb="seg",Vb="ts",Fb="d",Ub="dframe",$I=1870,GI=30,jb=$I-GI,zb=25e3,Bb=3e4;class fa{constructor(e,t,r,s,a,u,d){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zu(e),this.stats_=Fg(t),this.urlFn=f=>(this.appCheckToken&&(f[Im]=this.appCheckToken),BI(t,jI,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Nb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bb)),_b(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ug((...a)=>{const[u,d,f,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===pw)this.id=d,this.password=f;else if(u===bb)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,d]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const r={};r[pw]="t",r[HI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Mb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bI]=Vg,this.transportSessionId&&(r[DI]=this.transportSessionId),this.lastSessionId&&(r[VI]=this.lastSessionId),this.applicationId&&(r[FI]=this.applicationId),this.appCheckToken&&(r[Im]=this.appCheckToken),typeof location<"u"&&location.hostname&&LI.test(location.hostname)&&(r[OI]=MI);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fa.forceAllow_=!0}static forceDisallow(){fa.forceDisallow_=!0}static isAvailable(){return fa.forceAllow_?!0:!fa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vb()&&!Eb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Qw(t),s=xI(r,jb);for(let a=0;a<s.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ub]="t",r[WI]=e,r[qI]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Wt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ug{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pb(),window[Db+this.uniqueCallbackIdentifier]=e,window[Ob+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ug.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){Kt("frame writing exception"),d.stack&&Kt(d.stack),Kt(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[WI]=this.myID,e[qI]=this.myPW,e[HI]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+GI+r.length<=$I;){const u=this.pendingSegs.shift();r=r+"&"+Lb+s+"="+u.seg+"&"+Vb+s+"="+u.ts+"&"+Fb+s+"="+u.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(zb)),a=()=>{clearTimeout(s),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Wb=16384,qb=45e3;let Yh=null;typeof MozWebSocket<"u"?Yh=MozWebSocket:typeof WebSocket<"u"&&(Yh=WebSocket);class cr{constructor(e,t,r,s,a,u,d){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zu(this.connId),this.stats_=Fg(t),this.connURL=cr.connectionURL_(t,u,d,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,a){const u={};return u[bI]=Vg,typeof location<"u"&&location.hostname&&LI.test(location.hostname)&&(u[OI]=MI),t&&(u[DI]=t),r&&(u[VI]=r),s&&(u[Im]=s),a&&(u[FI]=a),BI(e,UI,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ks.set("previous_websocket_failure",!0);try{let r;uR(),this.mySock=new Yh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Yh!==null&&!cr.forceDisallow_}static previouslyFailed(){return Ks.isInMemoryStorage||Ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=cu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ee(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Wt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=xI(t,Wb);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qb))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cr.responsesRequiredToBeHealthy=2;cr.healthyTimeout=3e4;/**
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
 */class Eu{static get ALL_TRANSPORTS(){return[fa,cr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=cr&&cr.isAvailable();let r=t&&!cr.previouslyFailed();if(e.webSocketOnly&&(t||Cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cr];else{const s=this.transports_=[];for(const a of Eu.ALL_TRANSPORTS)a&&a.isAvailable()&&s.push(a);Eu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Eu.globalTransportInitialized_=!1;/**
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
 */const Hb=6e4,$b=5e3,Gb=10*1024,Kb=100*1024,Up="t",mw="d",Qb="s",gw="r",Yb="e",_w="o",yw="a",vw="n",Ew="p",Xb="h";class Jb{constructor(e,t,r,s,a,u,d,f,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=a,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zu("c:"+this.id+":"),this.transportManager_=new Eu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ou(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Up in e){const t=e[Up];t===yw?this.upgradeIfSecondaryHealthy_():t===gw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_w&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zl("t",e),r=zl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ew,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zl("t",e),r=zl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zl(Up,e);if(mw in e){const r=e[mw];if(t===Xb){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===vw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qb?this.onConnectionShutdown_(r):t===gw?this.onReset_(r):t===Yb?Tm("Server Error: "+r):t===_w?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Vg!==r&&Cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ou(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ou(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($b))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ew,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class KI{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class QI{constructor(e){this.allowedEvents_=e,this.listeners_={},ee(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let a=0;a<s.length;a++)if(s[a].callback===t&&(!r||r===s[a].context)){s.splice(a,1);return}}validateEventType_(e){ee(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xh extends QI{static getInstance(){return new Xh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ee(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ww=32,Tw=768;class Je{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ye(){return new Je("")}function Oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function us(n){return n.pieces_.length-n.pieceNum_}function tt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Je(n.pieces_,e)}function jg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Zb(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function wu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function YI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Je(e,0)}function vt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Je)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new Je(t,0)}function Ve(n){return n.pieceNum_>=n.pieces_.length}function Tn(n,e){const t=Oe(n),r=Oe(e);if(t===null)return e;if(t===r)return Tn(tt(n),tt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eD(n,e){const t=wu(n,0),r=wu(e,0);for(let s=0;s<t.length&&s<r.length;s++){const a=ho(t[s],r[s]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function zg(n,e){if(us(n)!==us(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function $n(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(us(n)>us(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class tD{constructor(e,t){this.errorPrefix_=t,this.parts_=wu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=dd(this.parts_[r]);XI(this)}}function nD(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=dd(e),XI(n)}function rD(n){const e=n.parts_.pop();n.byteLength_-=dd(e),n.parts_.length>0&&(n.byteLength_-=1)}function XI(n){if(n.byteLength_>Tw)throw new Error(n.errorPrefix_+"has a key path longer than "+Tw+" bytes ("+n.byteLength_+").");if(n.parts_.length>ww)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ww+") or object contains a cycle "+$s(n))}function $s(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Bg extends QI{static getInstance(){return new Bg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return ee(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bl=1e3,iD=60*5*1e3,Iw=30*1e3,sD=1.3,oD=3e4,aD="server_kill",Cw=3;class li extends KI{constructor(e,t,r,s,a,u,d,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=f,this.id=li.nextPersistentConnectionId_++,this.log_=zu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bl,this.maxReconnectDelay_=iD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,a={r:s,a:e,b:t};this.log_(Wt(a)),ee(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new ni,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,s){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ee(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const d={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(u).set(a,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const a={p:r},u="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,d=>{const f=d.d,m=d.s;li.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Lr(e,"w")){const r=Ta(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_R(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Iw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const a=s.s,u=s.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),ee(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const a={p:e},u="n";s&&(a.q=r,a.t=s),this.sendRequest(u,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{s&&setTimeout(()=>{s(u.s,u.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,a){this.initConnection_();const u={p:t,d:r};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:s}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Wt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Tm("Unrecognized action received from server: "+Wt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ee(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oD&&(this.reconnectDelay_=Bl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+li.nextConnectionId_++,a=this.lastSessionId;let u=!1,d=null;const f=function(){d?d.close():(u=!0,r())},m=function(E){ee(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:f,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,T]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=T&&T.token,d=new Jb(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,D=>{Cn(D+" ("+this.repoInfo_.toString()+")"),this.interrupt(aD)},a))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&Cn(E),f())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ph(this.interruptReasons_)&&(this.reconnectDelay_=Bl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Lg(a)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new Je(e).toString();let s;if(this.listens.has(r)){const a=this.listens.get(r);s=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Kt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cw&&(this.reconnectDelay_=Iw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Kt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+AI.replace(/\./g,"-")]=1,zm()?e["framework.cordova"]=1:n0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xh.getInstance().currentlyOnline();return Ph(this.interruptReasons_)&&e}}li.nextPersistentConnectionId_=0;li.nextConnectionId_=0;/**
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
 */class Fe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Fe(e,t)}}/**
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
 */class Ud{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Fe(Na,e),s=new Fe(Na,t);return this.compare(r,s)!==0}minPost(){return Fe.MIN}}/**
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
 */let fh;class JI extends Ud{static get __EMPTY_NODE(){return fh}static set __EMPTY_NODE(e){fh=e}compare(e,t){return ho(e.name,t.name)}isDefinedOn(e){throw Ma("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(to,fh)}makePost(e,t){return ee(typeof e=="string","KeyIndex indexValue must always be a string."),new Fe(e,fh)}toString(){return".key"}}const Ea=new JI;/**
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
 */class ph{constructor(e,t,r,s,a=null){this.isReverse_=s,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?r(e.key,t):1,s&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,r,s,a){this.key=e,this.value=t,this.color=r??zt.RED,this.left=s??In.EMPTY_NODE,this.right=a??In.EMPTY_NODE}copy(e,t,r,s,a){return new zt(e??this.key,t??this.value,r??this.color,s??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const a=r(e,s.key);return a<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):a===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return In.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return In.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0;zt.BLACK=!1;class lD{copy(e,t,r,s,a){return this}insert(e,t,r){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class In{constructor(e,t=In.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new In(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new In(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ph(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ph(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ph(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ph(this.root_,null,this.comparator_,!0,e)}}In.EMPTY_NODE=new lD;/**
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
 */function uD(n,e){return ho(n.name,e.name)}function Wg(n,e){return ho(n,e)}/**
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
 */let Cm;function cD(n){Cm=n}const ZI=function(n){return typeof n=="number"?"number:"+NI(n):"string:"+n},eC=function(n){if(n.isLeafNode()){const e=n.val();ee(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lr(e,".sv"),"Priority must be a string or number.")}else ee(n===Cm||n.isEmpty(),"priority of unexpected type.");ee(n===Cm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sw;class Ft{static set __childrenNodeConstructor(e){Sw=e}static get __childrenNodeConstructor(){return Sw}constructor(e,t=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ee(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ve(e)?this:Oe(e)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Oe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ee(r!==".priority"||us(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(tt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ZI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=NI(this.value_):e+=this.value_,this.lazyHash_=kI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ft.__childrenNodeConstructor?-1:(ee(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ft.VALUE_TYPE_ORDER.indexOf(t),a=Ft.VALUE_TYPE_ORDER.indexOf(r);return ee(s>=0,"Unknown leaf type: "+t),ee(a>=0,"Unknown leaf type: "+r),s===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let tC,nC;function hD(n){tC=n}function dD(n){nC=n}class fD extends Ud{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),a=r.compareTo(s);return a===0?ho(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(to,new Ft("[PRIORITY-POST]",nC))}makePost(e,t){const r=tC(e);return new Fe(t,new Ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const pt=new fD;/**
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
 */const pD=Math.log(2);class mD{constructor(e){const t=a=>parseInt(Math.log(a)/pD,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jh=function(n,e,t,r){n.sort(e);const s=function(f,m){const v=m-f;let E,T;if(v===0)return null;if(v===1)return E=n[f],T=t?t(E):E,new zt(T,E.node,zt.BLACK,null,null);{const D=parseInt(v/2,10)+f,V=s(f,D),q=s(D+1,m);return E=n[D],T=t?t(E):E,new zt(T,E.node,zt.BLACK,V,q)}},a=function(f){let m=null,v=null,E=n.length;const T=function(V,q){const B=E-V,J=E;E-=V;const re=s(B+1,J),ae=n[B],pe=t?t(ae):ae;D(new zt(pe,ae.node,q,null,re))},D=function(V){m?(m.left=V,m=V):(v=V,m=V)};for(let V=0;V<f.count;++V){const q=f.nextBitIsOne(),B=Math.pow(2,f.count-(V+1));q?T(B,zt.BLACK):(T(B,zt.BLACK),T(B,zt.RED))}return v},u=new mD(n.length),d=a(u);return new In(r||e,d)};/**
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
 */let jp;const oa={};class si{static get Default(){return ee(oa&&pt,"ChildrenNode.ts has not been loaded"),jp=jp||new si({".priority":oa},{".priority":pt}),jp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ta(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof In?t:null}hasIndex(e){return Lr(this.indexSet_,e.toString())}addIndex(e,t){ee(e!==Ea,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const a=t.getIterator(Fe.Wrap);let u=a.getNext();for(;u;)s=s||e.isDefinedOn(u.node),r.push(u),u=a.getNext();let d;s?d=Jh(r,e.getCompare()):d=oa;const f=e.toString(),m=Object.assign({},this.indexSet_);m[f]=e;const v=Object.assign({},this.indexes_);return v[f]=d,new si(v,m)}addToIndexes(e,t){const r=kh(this.indexes_,(s,a)=>{const u=Ta(this.indexSet_,a);if(ee(u,"Missing index implementation for "+a),s===oa)if(u.isDefinedOn(e.node)){const d=[],f=t.getIterator(Fe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&d.push(m),m=f.getNext();return d.push(e),Jh(d,u.getCompare())}else return oa;else{const d=t.get(e.name);let f=s;return d&&(f=f.remove(new Fe(e.name,d))),f.insert(e,e.node)}});return new si(r,this.indexSet_)}removeFromIndexes(e,t){const r=kh(this.indexes_,s=>{if(s===oa)return s;{const a=t.get(e.name);return a?s.remove(new Fe(e.name,a)):s}});return new si(r,this.indexSet_)}}/**
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
 */let Wl;class Se{static get EMPTY_NODE(){return Wl||(Wl=new Se(new In(Wg),null,si.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eC(this.priorityNode_),this.children_.isEmpty()&&ee(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wl}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Wl:t}}getChild(e){const t=Oe(e);return t===null?this:this.getImmediateChild(t).getChild(tt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ee(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Fe(e,t);let s,a;t.isEmpty()?(s=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const u=s.isEmpty()?Wl:this.priorityNode_;return new Se(s,u,a)}}updateChild(e,t){const r=Oe(e);if(r===null)return t;{ee(Oe(e)!==".priority"||us(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(tt(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,a=!0;if(this.forEachChild(pt,(u,d)=>{t[u]=d.val(e),r++,a&&Se.INTEGER_REGEXP_.test(u)?s=Math.max(s,Number(u)):a=!1}),!e&&a&&s<2*r){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ZI(this.getPriority().val())+":"),this.forEachChild(pt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":kI(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const a=s.getPredecessorKey(new Fe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Fe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Fe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)<0;)s.getNext(),a=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Fe.Wrap);let a=s.peek();for(;a!=null&&t.compare(a,e)>0;)s.getNext(),a=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bu?-1:0}withIndex(e){if(e===Ea||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ea||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(pt),s=t.getIterator(pt);let a=r.getNext(),u=s.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=r.getNext(),u=s.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ea?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gD extends Se{constructor(){super(new In(Wg),Se.EMPTY_NODE,si.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const Bu=new gD;Object.defineProperties(Fe,{MIN:{value:new Fe(Na,Se.EMPTY_NODE)},MAX:{value:new Fe(to,Bu)}});JI.__EMPTY_NODE=Se.EMPTY_NODE;Ft.__childrenNodeConstructor=Se;cD(Bu);dD(Bu);/**
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
 */const _D=!0;function It(n,e=null){if(n===null)return Se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ee(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ft(t,It(e))}if(!(n instanceof Array)&&_D){const t=[];let r=!1;if(an(n,(u,d)=>{if(u.substring(0,1)!=="."){const f=It(d);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new Fe(u,f)))}}),t.length===0)return Se.EMPTY_NODE;const a=Jh(t,uD,u=>u.name,Wg);if(r){const u=Jh(t,pt.getCompare());return new Se(a,It(e),new si({".priority":u},{".priority":pt}))}else return new Se(a,It(e),si.Default)}else{let t=Se.EMPTY_NODE;return an(n,(r,s)=>{if(Lr(n,r)&&r.substring(0,1)!=="."){const a=It(s);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(It(e))}}hD(It);/**
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
 */class yD extends Ud{constructor(e){super(),this.indexPath_=e,ee(!Ve(e)&&Oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),a=r.compareTo(s);return a===0?ho(e.name,t.name):a}makePost(e,t){const r=It(e),s=Se.EMPTY_NODE.updateChild(this.indexPath_,r);return new Fe(t,s)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,Bu);return new Fe(to,e)}toString(){return wu(this.indexPath_,0).join("/")}}/**
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
 */class vD extends Ud{compare(e,t){const r=e.node.compareTo(t.node);return r===0?ho(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(e,t){const r=It(e);return new Fe(t,r)}toString(){return".value"}}const ED=new vD;/**
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
 */function rC(n){return{type:"value",snapshotNode:n}}function ba(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Tu(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Iu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function wD(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class qg{constructor(e){this.index_=e}updateChild(e,t,r,s,a,u){ee(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(s).equals(r.getChild(s))&&d.isEmpty()===r.isEmpty()||(u!=null&&(r.isEmpty()?e.hasChild(t)?u.trackChildChange(Tu(t,d)):ee(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(ba(t,r)):u.trackChildChange(Iu(t,r,d))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(pt,(s,a)=>{t.hasChild(s)||r.trackChildChange(Tu(s,a))}),t.isLeafNode()||t.forEachChild(pt,(s,a)=>{if(e.hasChild(s)){const u=e.getImmediateChild(s);u.equals(a)||r.trackChildChange(Iu(s,a,u))}else r.trackChildChange(ba(s,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Cu{constructor(e){this.indexedFilter_=new qg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cu.getStartPost_(e),this.endPost_=Cu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,a,u){return this.matches(new Fe(t,r))||(r=Se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,a,u)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Se.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(Se.EMPTY_NODE);const a=this;return t.forEachChild(pt,(u,d)=>{a.matches(new Fe(u,d))||(s=s.updateImmediateChild(u,Se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class TD{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Cu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,a,u){return this.rangedFilter_.matches(new Fe(t,r))||(r=Se.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,a,u):this.fullLimitUpdateChild_(e,t,r,a,u)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=Se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=Se.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const d=a.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))s=s.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(Se.EMPTY_NODE);let a;this.reverse_?a=s.getReverseIterator(this.index_):a=s.getIterator(this.index_);let u=0;for(;a.hasNext();){const d=a.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:s=s.updateImmediateChild(d.name,Se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,a){let u;if(this.reverse_){const E=this.index_.getCompare();u=(T,D)=>E(D,T)}else u=this.index_.getCompare();const d=e;ee(d.numChildren()===this.limit_,"");const f=new Fe(t,r),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),v=this.rangedFilter_.matches(f);if(d.hasChild(t)){const E=d.getImmediateChild(t);let T=s.getChildAfterChild(this.index_,m,this.reverse_);for(;T!=null&&(T.name===t||d.hasChild(T.name));)T=s.getChildAfterChild(this.index_,T,this.reverse_);const D=T==null?1:u(T,f);if(v&&!r.isEmpty()&&D>=0)return a?.trackChildChange(Iu(t,r,E)),d.updateImmediateChild(t,r);{a?.trackChildChange(Tu(t,E));const q=d.updateImmediateChild(t,Se.EMPTY_NODE);return T!=null&&this.rangedFilter_.matches(T)?(a?.trackChildChange(ba(T.name,T.node)),q.updateImmediateChild(T.name,T.node)):q}}else return r.isEmpty()?e:v&&u(m,f)>=0?(a!=null&&(a.trackChildChange(Tu(m.name,m.node)),a.trackChildChange(ba(t,r))),d.updateImmediateChild(t,r).updateImmediateChild(m.name,Se.EMPTY_NODE)):e}}/**
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
 */class Hg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ee(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ee(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Na}hasEnd(){return this.endSet_}getIndexEndValue(){return ee(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ee(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:to}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ee(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pt}copy(){const e=new Hg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ID(n){return n.loadsAllData()?new qg(n.getIndex()):n.hasLimit()?new TD(n):new Cu(n)}function Rw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pt?t="$priority":n.index_===ED?t="$value":n.index_===Ea?t="$key":(ee(n.index_ instanceof yD,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Wt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Wt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Wt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Wt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Wt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Aw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pt&&(e.i=n.index_.toString()),e}/**
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
 */class Zh extends KI{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ee(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=zu("p:rest:"),this.listens_={}}listen(e,t,r,s){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Zh.getListenId_(e,r),d={};this.listens_[u]=d;const f=Rw(e._queryParams);this.restRequest_(a+".json",f,(m,v)=>{let E=v;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(a,E,!1,r),Ta(this.listens_,u)===d){let T;m?m===401?T="permission_denied":T="rest_error:"+m:T="ok",s(T,null)}})}unlisten(e,t){const r=Zh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Rw(e._queryParams),r=e._path.toString(),s=new ni;return this.restRequest_(r+".json",t,(a,u)=>{let d=u;a===404&&(d=null,a=null),a===null?(this.onDataUpdate_(r,d,!1,null),s.resolve(d)):s.reject(new Error(d))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,a])=>{s&&s.accessToken&&(t.auth=s.accessToken),a&&a.token&&(t.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+La(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(r&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let f=null;if(d.status>=200&&d.status<300){try{f=cu(d.responseText)}catch{Cn("Failed to parse JSON response for "+u+": "+d.responseText)}r(null,f)}else d.status!==401&&d.status!==404&&Cn("Got unsuccessful REST response for "+u+" Status: "+d.status),r(d.status);r=null}},d.open("GET",u,!0),d.send()})}}/**
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
 */class CD{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ed(){return{value:null,children:new Map}}function qa(n,e,t){if(Ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Oe(e);n.children.has(r)||n.children.set(r,ed());const s=n.children.get(r);e=tt(e),qa(s,e,t)}}function Sm(n,e){if(Ve(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(pt,(r,s)=>{qa(n,new Je(r),s)}),Sm(n,e)}}else if(n.children.size>0){const t=Oe(e);return e=tt(e),n.children.has(t)&&Sm(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Rm(n,e,t){n.value!==null?t(e,n.value):SD(n,(r,s)=>{const a=new Je(e.toString()+"/"+r);Rm(s,a,t)})}function SD(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class RD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&an(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Pw=10*1e3,AD=30*1e3,PD=5*60*1e3;class kD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new RD(e);const r=Pw+(AD-Pw)*Math.random();ou(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;an(e,(s,a)=>{a>0&&Lr(this.statsToReport_,s)&&(t[s]=a,r=!0)}),r&&this.server_.reportStats(t),ou(this.reportStats_.bind(this),Math.floor(Math.random()*2*PD))}}/**
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
 */var dr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dr||(dr={}));function iC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $g(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gg(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class td{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=dr.ACK_USER_WRITE,this.source=iC()}operationForChild(e){if(Ve(this.path)){if(this.affectedTree.value!=null)return ee(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Je(e));return new td(Ye(),t,this.revert)}}else return ee(Oe(this.path)===e,"operationForChild called for unrelated child."),new td(tt(this.path),this.affectedTree,this.revert)}}/**
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
 */class Su{constructor(e,t){this.source=e,this.path=t,this.type=dr.LISTEN_COMPLETE}operationForChild(e){return Ve(this.path)?new Su(this.source,Ye()):new Su(this.source,tt(this.path))}}/**
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
 */class no{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=dr.OVERWRITE}operationForChild(e){return Ve(this.path)?new no(this.source,Ye(),this.snap.getImmediateChild(e)):new no(this.source,tt(this.path),this.snap)}}/**
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
 */class Ru{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=dr.MERGE}operationForChild(e){if(Ve(this.path)){const t=this.children.subtree(new Je(e));return t.isEmpty()?null:t.value?new no(this.source,Ye(),t.value):new Ru(this.source,Ye(),t)}else return ee(Oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ru(this.source,tt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ro{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ND(n,e,t,r){const s=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(wD(u.childName,u.snapshotNode))}),ql(n,s,"child_removed",e,r,t),ql(n,s,"child_added",e,r,t),ql(n,s,"child_moved",a,r,t),ql(n,s,"child_changed",e,r,t),ql(n,s,"value",e,r,t),s}function ql(n,e,t,r,s,a){const u=r.filter(d=>d.type===t);u.sort((d,f)=>DD(n,d,f)),u.forEach(d=>{const f=bD(n,d,a);s.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(f,n.query_))})})}function bD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function DD(n,e,t){if(e.childName==null||t.childName==null)throw Ma("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),s=new Fe(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function jd(n,e){return{eventCache:n,serverCache:e}}function au(n,e,t,r){return jd(new ro(e,t,r),n.serverCache)}function sC(n,e,t,r){return jd(n.eventCache,new ro(e,t,r))}function Am(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function io(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let zp;const OD=()=>(zp||(zp=new In(yb)),zp);class at{static fromObject(e){let t=new at(null);return an(e,(r,s)=>{t=t.set(new Je(r),s)}),t}constructor(e,t=OD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ye(),value:this.value};if(Ve(e))return null;{const r=Oe(e),s=this.children.get(r);if(s!==null){const a=s.findRootMostMatchingPathAndValue(tt(e),t);return a!=null?{path:vt(new Je(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ve(e))return this;{const t=Oe(e),r=this.children.get(t);return r!==null?r.subtree(tt(e)):new at(null)}}set(e,t){if(Ve(e))return new at(t,this.children);{const r=Oe(e),a=(this.children.get(r)||new at(null)).set(tt(e),t),u=this.children.insert(r,a);return new at(this.value,u)}}remove(e){if(Ve(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const t=Oe(e),r=this.children.get(t);if(r){const s=r.remove(tt(e));let a;return s.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,s),this.value===null&&a.isEmpty()?new at(null):new at(this.value,a)}else return this}}get(e){if(Ve(e))return this.value;{const t=Oe(e),r=this.children.get(t);return r?r.get(tt(e)):null}}setTree(e,t){if(Ve(e))return t;{const r=Oe(e),a=(this.children.get(r)||new at(null)).setTree(tt(e),t);let u;return a.isEmpty()?u=this.children.remove(r):u=this.children.insert(r,a),new at(this.value,u)}}fold(e){return this.fold_(Ye(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,a)=>{r[s]=a.fold_(vt(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ye(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Ve(e))return null;{const a=Oe(e),u=this.children.get(a);return u?u.findOnPath_(tt(e),vt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ye(),t)}foreachOnPath_(e,t,r){if(Ve(e))return this;{this.value&&r(t,this.value);const s=Oe(e),a=this.children.get(s);return a?a.foreachOnPath_(tt(e),vt(t,s),r):new at(null)}}foreach(e){this.foreach_(Ye(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(vt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class fr{constructor(e){this.writeTree_=e}static empty(){return new fr(new at(null))}}function lu(n,e,t){if(Ve(e))return new fr(new at(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let a=r.value;const u=Tn(s,e);return a=a.updateChild(u,t),new fr(n.writeTree_.set(s,a))}else{const s=new at(t),a=n.writeTree_.setTree(e,s);return new fr(a)}}}function kw(n,e,t){let r=n;return an(t,(s,a)=>{r=lu(r,vt(e,s),a)}),r}function xw(n,e){if(Ve(e))return fr.empty();{const t=n.writeTree_.setTree(e,new at(null));return new fr(t)}}function Pm(n,e){return fo(n,e)!=null}function fo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Tn(t.path,e)):null}function Nw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pt,(r,s)=>{e.push(new Fe(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Fe(r,s.value))}),e}function Zi(n,e){if(Ve(e))return n;{const t=fo(n,e);return t!=null?new fr(new at(t)):new fr(n.writeTree_.subtree(e))}}function km(n){return n.writeTree_.isEmpty()}function Da(n,e){return oC(Ye(),n.writeTree_,e)}function oC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,a)=>{s===".priority"?(ee(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=oC(vt(n,s),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(vt(n,".priority"),r)),t}}/**
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
 */function Kg(n,e){return cC(e,n)}function MD(n,e,t,r,s){ee(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=lu(n.visibleWrites,e,t)),n.lastWriteId=r}function LD(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function VD(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ee(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,a=!1,u=n.allWrites.length-1;for(;s&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&FD(d,r.path)?s=!1:$n(r.path,d.path)&&(a=!0)),u--}if(s){if(a)return UD(n),!0;if(r.snap)n.visibleWrites=xw(n.visibleWrites,r.path);else{const d=r.children;an(d,f=>{n.visibleWrites=xw(n.visibleWrites,vt(r.path,f))})}return!0}else return!1}function FD(n,e){if(n.snap)return $n(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$n(vt(n.path,t),e))return!0;return!1}function UD(n){n.visibleWrites=aC(n.allWrites,jD,Ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jD(n){return n.visible}function aC(n,e,t){let r=fr.empty();for(let s=0;s<n.length;++s){const a=n[s];if(e(a)){const u=a.path;let d;if(a.snap)$n(t,u)?(d=Tn(t,u),r=lu(r,d,a.snap)):$n(u,t)&&(d=Tn(u,t),r=lu(r,Ye(),a.snap.getChild(d)));else if(a.children){if($n(t,u))d=Tn(t,u),r=kw(r,d,a.children);else if($n(u,t))if(d=Tn(u,t),Ve(d))r=kw(r,Ye(),a.children);else{const f=Ta(a.children,Oe(d));if(f){const m=f.getChild(tt(d));r=lu(r,Ye(),m)}}}else throw Ma("WriteRecord should have .snap or .children")}}return r}function lC(n,e,t,r,s){if(!r&&!s){const a=fo(n.visibleWrites,e);if(a!=null)return a;{const u=Zi(n.visibleWrites,e);if(km(u))return t;if(t==null&&!Pm(u,Ye()))return null;{const d=t||Se.EMPTY_NODE;return Da(u,d)}}}else{const a=Zi(n.visibleWrites,e);if(!s&&km(a))return t;if(!s&&t==null&&!Pm(a,Ye()))return null;{const u=function(m){return(m.visible||s)&&(!r||!~r.indexOf(m.writeId))&&($n(m.path,e)||$n(e,m.path))},d=aC(n.allWrites,u,e),f=t||Se.EMPTY_NODE;return Da(d,f)}}}function zD(n,e,t){let r=Se.EMPTY_NODE;const s=fo(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(pt,(a,u)=>{r=r.updateImmediateChild(a,u)}),r;if(t){const a=Zi(n.visibleWrites,e);return t.forEachChild(pt,(u,d)=>{const f=Da(Zi(a,new Je(u)),d);r=r.updateImmediateChild(u,f)}),Nw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}else{const a=Zi(n.visibleWrites,e);return Nw(a).forEach(u=>{r=r.updateImmediateChild(u.name,u.node)}),r}}function BD(n,e,t,r,s){ee(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=vt(e,t);if(Pm(n.visibleWrites,a))return null;{const u=Zi(n.visibleWrites,a);return km(u)?s.getChild(t):Da(u,s.getChild(t))}}function WD(n,e,t,r){const s=vt(e,t),a=fo(n.visibleWrites,s);if(a!=null)return a;if(r.isCompleteForChild(t)){const u=Zi(n.visibleWrites,s);return Da(u,r.getNode().getImmediateChild(t))}else return null}function qD(n,e){return fo(n.visibleWrites,e)}function HD(n,e,t,r,s,a,u){let d;const f=Zi(n.visibleWrites,e),m=fo(f,Ye());if(m!=null)d=m;else if(t!=null)d=Da(f,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const v=[],E=u.getCompare(),T=a?d.getReverseIteratorFrom(r,u):d.getIteratorFrom(r,u);let D=T.getNext();for(;D&&v.length<s;)E(D,r)!==0&&v.push(D),D=T.getNext();return v}else return[]}function $D(){return{visibleWrites:fr.empty(),allWrites:[],lastWriteId:-1}}function nd(n,e,t,r){return lC(n.writeTree,n.treePath,e,t,r)}function Qg(n,e){return zD(n.writeTree,n.treePath,e)}function bw(n,e,t,r){return BD(n.writeTree,n.treePath,e,t,r)}function rd(n,e){return qD(n.writeTree,vt(n.treePath,e))}function GD(n,e,t,r,s,a){return HD(n.writeTree,n.treePath,e,t,r,s,a)}function Yg(n,e,t){return WD(n.writeTree,n.treePath,e,t)}function uC(n,e){return cC(vt(n.treePath,e),n.writeTree)}function cC(n,e){return{treePath:n,writeTree:e}}/**
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
 */class KD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ee(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ee(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const a=s.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Iu(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Tu(r,s.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,ba(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Iu(r,e.snapshotNode,s.oldSnap));else throw Ma("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class QD{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const hC=new QD;class Xg{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ro(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yg(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:io(this.viewCache_),a=GD(this.writes_,s,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function YD(n){return{filter:n}}function XD(n,e){ee(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ee(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function JD(n,e,t,r,s){const a=new KD;let u,d;if(t.type===dr.OVERWRITE){const m=t;m.source.fromUser?u=xm(n,e,m.path,m.snap,r,s,a):(ee(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Ve(m.path),u=id(n,e,m.path,m.snap,r,s,d,a))}else if(t.type===dr.MERGE){const m=t;m.source.fromUser?u=eO(n,e,m.path,m.children,r,s,a):(ee(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=Nm(n,e,m.path,m.children,r,s,d,a))}else if(t.type===dr.ACK_USER_WRITE){const m=t;m.revert?u=rO(n,e,m.path,r,s,a):u=tO(n,e,m.path,m.affectedTree,r,s,a)}else if(t.type===dr.LISTEN_COMPLETE)u=nO(n,e,t.path,r,a);else throw Ma("Unknown operation type: "+t.type);const f=a.getChanges();return ZD(e,u,f),{viewCache:u,changes:f}}function ZD(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Am(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(rC(Am(e)))}}function dC(n,e,t,r,s,a){const u=e.eventCache;if(rd(r,t)!=null)return e;{let d,f;if(Ve(t))if(ee(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=io(e),v=m instanceof Se?m:Se.EMPTY_NODE,E=Qg(r,v);d=n.filter.updateFullNode(e.eventCache.getNode(),E,a)}else{const m=nd(r,io(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Oe(t);if(m===".priority"){ee(us(t)===1,"Can't have a priority with additional path components");const v=u.getNode();f=e.serverCache.getNode();const E=bw(r,t,v,f);E!=null?d=n.filter.updatePriority(v,E):d=u.getNode()}else{const v=tt(t);let E;if(u.isCompleteForChild(m)){f=e.serverCache.getNode();const T=bw(r,t,u.getNode(),f);T!=null?E=u.getNode().getImmediateChild(m).updateChild(v,T):E=u.getNode().getImmediateChild(m)}else E=Yg(r,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,v,s,a):d=u.getNode()}}return au(e,d,u.isFullyInitialized()||Ve(t),n.filter.filtersNodes())}}function id(n,e,t,r,s,a,u,d){const f=e.serverCache;let m;const v=u?n.filter:n.filter.getIndexedFilter();if(Ve(t))m=v.updateFullNode(f.getNode(),r,null);else if(v.filtersNodes()&&!f.isFiltered()){const D=f.getNode().updateChild(t,r);m=v.updateFullNode(f.getNode(),D,null)}else{const D=Oe(t);if(!f.isCompleteForPath(t)&&us(t)>1)return e;const V=tt(t),B=f.getNode().getImmediateChild(D).updateChild(V,r);D===".priority"?m=v.updatePriority(f.getNode(),B):m=v.updateChild(f.getNode(),D,B,V,hC,null)}const E=sC(e,m,f.isFullyInitialized()||Ve(t),v.filtersNodes()),T=new Xg(s,E,a);return dC(n,E,t,s,T,d)}function xm(n,e,t,r,s,a,u){const d=e.eventCache;let f,m;const v=new Xg(s,e,a);if(Ve(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,u),f=au(e,m,!0,n.filter.filtersNodes());else{const E=Oe(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),f=au(e,m,d.isFullyInitialized(),d.isFiltered());else{const T=tt(t),D=d.getNode().getImmediateChild(E);let V;if(Ve(T))V=r;else{const q=v.getCompleteChild(E);q!=null?jg(T)===".priority"&&q.getChild(YI(T)).isEmpty()?V=q:V=q.updateChild(T,r):V=Se.EMPTY_NODE}if(D.equals(V))f=e;else{const q=n.filter.updateChild(d.getNode(),E,V,T,v,u);f=au(e,q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function Dw(n,e){return n.eventCache.isCompleteForChild(e)}function eO(n,e,t,r,s,a,u){let d=e;return r.foreach((f,m)=>{const v=vt(t,f);Dw(e,Oe(v))&&(d=xm(n,d,v,m,s,a,u))}),r.foreach((f,m)=>{const v=vt(t,f);Dw(e,Oe(v))||(d=xm(n,d,v,m,s,a,u))}),d}function Ow(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Nm(n,e,t,r,s,a,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;Ve(t)?m=r:m=new at(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((E,T)=>{if(v.hasChild(E)){const D=e.serverCache.getNode().getImmediateChild(E),V=Ow(n,D,T);f=id(n,f,new Je(E),V,s,a,u,d)}}),m.children.inorderTraversal((E,T)=>{const D=!e.serverCache.isCompleteForChild(E)&&T.value===null;if(!v.hasChild(E)&&!D){const V=e.serverCache.getNode().getImmediateChild(E),q=Ow(n,V,T);f=id(n,f,new Je(E),q,s,a,u,d)}}),f}function tO(n,e,t,r,s,a,u){if(rd(s,t)!=null)return e;const d=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Ve(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return id(n,e,t,f.getNode().getChild(t),s,a,d,u);if(Ve(t)){let m=new at(null);return f.getNode().forEachChild(Ea,(v,E)=>{m=m.set(new Je(v),E)}),Nm(n,e,t,m,s,a,d,u)}else return e}else{let m=new at(null);return r.foreach((v,E)=>{const T=vt(t,v);f.isCompleteForPath(T)&&(m=m.set(v,f.getNode().getChild(T)))}),Nm(n,e,t,m,s,a,d,u)}}function nO(n,e,t,r,s){const a=e.serverCache,u=sC(e,a.getNode(),a.isFullyInitialized()||Ve(t),a.isFiltered());return dC(n,u,t,r,hC,s)}function rO(n,e,t,r,s,a){let u;if(rd(r,t)!=null)return e;{const d=new Xg(r,e,s),f=e.eventCache.getNode();let m;if(Ve(t)||Oe(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=nd(r,io(e));else{const E=e.serverCache.getNode();ee(E instanceof Se,"serverChildren would be complete if leaf node"),v=Qg(r,E)}v=v,m=n.filter.updateFullNode(f,v,a)}else{const v=Oe(t);let E=Yg(r,v,e.serverCache);E==null&&e.serverCache.isCompleteForChild(v)&&(E=f.getImmediateChild(v)),E!=null?m=n.filter.updateChild(f,v,E,tt(t),d,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(f,v,Se.EMPTY_NODE,tt(t),d,a):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=nd(r,io(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,a)))}return u=e.serverCache.isFullyInitialized()||rd(r,Ye())!=null,au(e,m,u,n.filter.filtersNodes())}}/**
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
 */class iO{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new qg(r.getIndex()),a=ID(r);this.processor_=YD(a);const u=t.serverCache,d=t.eventCache,f=s.updateFullNode(Se.EMPTY_NODE,u.getNode(),null),m=a.updateFullNode(Se.EMPTY_NODE,d.getNode(),null),v=new ro(f,u.isFullyInitialized(),s.filtersNodes()),E=new ro(m,d.isFullyInitialized(),a.filtersNodes());this.viewCache_=jd(E,v),this.eventGenerator_=new xD(this.query_)}get query(){return this.query_}}function sO(n){return n.viewCache_.serverCache.getNode()}function oO(n,e){const t=io(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ve(e)&&!t.getImmediateChild(Oe(e)).isEmpty())?t.getChild(e):null}function Mw(n){return n.eventRegistrations_.length===0}function aO(n,e){n.eventRegistrations_.push(e)}function Lw(n,e,t){const r=[];if(t){ee(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(t,s);u&&r.push(u)})}if(e){let s=[];for(let a=0;a<n.eventRegistrations_.length;++a){const u=n.eventRegistrations_[a];if(!u.matches(e))s.push(u);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function Vw(n,e,t,r){e.type===dr.MERGE&&e.source.queryId!==null&&(ee(io(n.viewCache_),"We should always have a full cache before handling merges"),ee(Am(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,a=JD(n.processor_,s,e,t,r);return XD(n.processor_,a.viewCache),ee(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,fC(n,a.changes,a.viewCache.eventCache.getNode(),null)}function lO(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(pt,(a,u)=>{r.push(ba(a,u))}),t.isFullyInitialized()&&r.push(rC(t.getNode())),fC(n,r,t.getNode(),e)}function fC(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return ND(n.eventGenerator_,e,t,s)}/**
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
 */let sd;class uO{constructor(){this.views=new Map}}function cO(n){ee(!sd,"__referenceConstructor has already been defined"),sd=n}function hO(){return ee(sd,"Reference.ts has not been loaded"),sd}function dO(n){return n.views.size===0}function Jg(n,e,t,r){const s=e.source.queryId;if(s!==null){const a=n.views.get(s);return ee(a!=null,"SyncTree gave us an op for an invalid query."),Vw(a,e,t,r)}else{let a=[];for(const u of n.views.values())a=a.concat(Vw(u,e,t,r));return a}}function fO(n,e,t,r,s){const a=e._queryIdentifier,u=n.views.get(a);if(!u){let d=nd(t,s?r:null),f=!1;d?f=!0:r instanceof Se?(d=Qg(t,r),f=!1):(d=Se.EMPTY_NODE,f=!1);const m=jd(new ro(d,f,!1),new ro(r,s,!1));return new iO(e,m)}return u}function pO(n,e,t,r,s,a){const u=fO(n,e,r,s,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),aO(u,t),lO(u,t)}function mO(n,e,t,r){const s=e._queryIdentifier,a=[];let u=[];const d=cs(n);if(s==="default")for(const[f,m]of n.views.entries())u=u.concat(Lw(m,t,r)),Mw(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||a.push(m.query));else{const f=n.views.get(s);f&&(u=u.concat(Lw(f,t,r)),Mw(f)&&(n.views.delete(s),f.query._queryParams.loadsAllData()||a.push(f.query)))}return d&&!cs(n)&&a.push(new(hO())(e._repo,e._path)),{removed:a,events:u}}function pC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function wa(n,e){let t=null;for(const r of n.views.values())t=t||oO(r,e);return t}function mC(n,e){if(e._queryParams.loadsAllData())return zd(n);{const r=e._queryIdentifier;return n.views.get(r)}}function gC(n,e){return mC(n,e)!=null}function cs(n){return zd(n)!=null}function zd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let od;function gO(n){ee(!od,"__referenceConstructor has already been defined"),od=n}function _O(){return ee(od,"Reference.ts has not been loaded"),od}let yO=1;class Fw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=$D(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _C(n,e,t,r,s){return MD(n.pendingWriteTree_,e,t,r,s),s?Wu(n,new no(iC(),e,t)):[]}function Qs(n,e,t=!1){const r=LD(n.pendingWriteTree_,e);if(VD(n.pendingWriteTree_,e)){let a=new at(null);return r.snap!=null?a=a.set(Ye(),!0):an(r.children,u=>{a=a.set(new Je(u),!0)}),Wu(n,new td(r.path,a,t))}else return[]}function Bd(n,e,t){return Wu(n,new no($g(),e,t))}function vO(n,e,t){const r=at.fromObject(t);return Wu(n,new Ru($g(),e,r))}function EO(n,e){return Wu(n,new Su($g(),e))}function wO(n,e,t){const r=e_(n,t);if(r){const s=t_(r),a=s.path,u=s.queryId,d=Tn(a,e),f=new Su(Gg(u),d);return n_(n,a,f)}else return[]}function bm(n,e,t,r,s=!1){const a=e._path,u=n.syncPointTree_.get(a);let d=[];if(u&&(e._queryIdentifier==="default"||gC(u,e))){const f=mO(u,e,t,r);dO(u)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=f.removed;if(d=f.events,!s){const v=m.findIndex(T=>T._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(a,(T,D)=>cs(D));if(v&&!E){const T=n.syncPointTree_.subtree(a);if(!T.isEmpty()){const D=CO(T);for(let V=0;V<D.length;++V){const q=D[V],B=q.query,J=EC(n,q);n.listenProvider_.startListening(uu(B),ad(n,B),J.hashFn,J.onComplete)}}}!E&&m.length>0&&!r&&(v?n.listenProvider_.stopListening(uu(e),null):m.forEach(T=>{const D=n.queryToTagMap.get(Wd(T));n.listenProvider_.stopListening(uu(T),D)}))}SO(n,m)}return d}function TO(n,e,t,r){const s=e_(n,r);if(s!=null){const a=t_(s),u=a.path,d=a.queryId,f=Tn(u,e),m=new no(Gg(d),f,t);return n_(n,u,m)}else return[]}function IO(n,e,t,r){const s=e_(n,r);if(s){const a=t_(s),u=a.path,d=a.queryId,f=Tn(u,e),m=at.fromObject(t),v=new Ru(Gg(d),f,m);return n_(n,u,v)}else return[]}function Uw(n,e,t,r=!1){const s=e._path;let a=null,u=!1;n.syncPointTree_.foreachOnPath(s,(T,D)=>{const V=Tn(T,s);a=a||wa(D,V),u=u||cs(D)});let d=n.syncPointTree_.get(s);d?(u=u||cs(d),a=a||wa(d,Ye())):(d=new uO,n.syncPointTree_=n.syncPointTree_.set(s,d));let f;a!=null?f=!0:(f=!1,a=Se.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((D,V)=>{const q=wa(V,Ye());q&&(a=a.updateImmediateChild(D,q))}));const m=gC(d,e);if(!m&&!e._queryParams.loadsAllData()){const T=Wd(e);ee(!n.queryToTagMap.has(T),"View does not exist, but we have a tag");const D=RO();n.queryToTagMap.set(T,D),n.tagToQueryMap.set(D,T)}const v=Kg(n.pendingWriteTree_,s);let E=pO(d,e,t,v,a,f);if(!m&&!u&&!r){const T=mC(d,e);E=E.concat(AO(n,e,T))}return E}function Zg(n,e,t){const s=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(u,d)=>{const f=Tn(u,e),m=wa(d,f);if(m)return m});return lC(s,e,a,t,!0)}function Wu(n,e){return yC(e,n.syncPointTree_,null,Kg(n.pendingWriteTree_,Ye()))}function yC(n,e,t,r){if(Ve(n.path))return vC(n,e,t,r);{const s=e.get(Ye());t==null&&s!=null&&(t=wa(s,Ye()));let a=[];const u=Oe(n.path),d=n.operationForChild(u),f=e.children.get(u);if(f&&d){const m=t?t.getImmediateChild(u):null,v=uC(r,u);a=a.concat(yC(d,f,m,v))}return s&&(a=a.concat(Jg(s,n,r,t))),a}}function vC(n,e,t,r){const s=e.get(Ye());t==null&&s!=null&&(t=wa(s,Ye()));let a=[];return e.children.inorderTraversal((u,d)=>{const f=t?t.getImmediateChild(u):null,m=uC(r,u),v=n.operationForChild(u);v&&(a=a.concat(vC(v,d,f,m)))}),s&&(a=a.concat(Jg(s,n,r,t))),a}function EC(n,e){const t=e.query,r=ad(n,t);return{hashFn:()=>(sO(e)||Se.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?wO(n,t._path,r):EO(n,t._path);{const a=wb(s,t);return bm(n,t,null,a)}}}}function ad(n,e){const t=Wd(e);return n.queryToTagMap.get(t)}function Wd(n){return n._path.toString()+"$"+n._queryIdentifier}function e_(n,e){return n.tagToQueryMap.get(e)}function t_(n){const e=n.indexOf("$");return ee(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Je(n.substr(0,e))}}function n_(n,e,t){const r=n.syncPointTree_.get(e);ee(r,"Missing sync point for query tag that we're tracking");const s=Kg(n.pendingWriteTree_,e);return Jg(r,t,s,null)}function CO(n){return n.fold((e,t,r)=>{if(t&&cs(t))return[zd(t)];{let s=[];return t&&(s=pC(t)),an(r,(a,u)=>{s=s.concat(u)}),s}})}function uu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_O())(n._repo,n._path):n}function SO(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=Wd(r),a=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(a)}}}function RO(){return yO++}function AO(n,e,t){const r=e._path,s=ad(n,e),a=EC(n,t),u=n.listenProvider_.startListening(uu(e),s,a.hashFn,a.onComplete),d=n.syncPointTree_.subtree(r);if(s)ee(!cs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const f=d.fold((m,v,E)=>{if(!Ve(m)&&v&&cs(v))return[zd(v).query];{let T=[];return v&&(T=T.concat(pC(v).map(D=>D.query))),an(E,(D,V)=>{T=T.concat(V)}),T}});for(let m=0;m<f.length;++m){const v=f[m];n.listenProvider_.stopListening(uu(v),ad(n,v))}}return u}/**
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
 */class r_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new r_(t)}node(){return this.node_}}class i_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new i_(this.syncTree_,t)}node(){return Zg(this.syncTree_,this.path_)}}const PO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},jw=function(n,e,t){if(!n||typeof n!="object")return n;if(ee(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return kO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xO(n[".sv"],e);ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},kO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ee(!1,"Unexpected server value: "+n)}},xO=function(n,e,t){n.hasOwnProperty("increment")||ee(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ee(!1,"Unexpected increment value: "+r);const s=e.node();if(ee(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const u=s.getValue();return typeof u!="number"?r:u+r},NO=function(n,e,t,r){return s_(e,new i_(t,n),r)},wC=function(n,e,t){return s_(n,new r_(e),t)};function s_(n,e,t){const r=n.getPriority().val(),s=jw(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const u=n,d=jw(u.getValue(),e,t);return d!==u.getValue()||s!==u.getPriority().val()?new Ft(d,It(s)):n}else{const u=n;return a=u,s!==u.getPriority().val()&&(a=a.updatePriority(new Ft(s))),u.forEachChild(pt,(d,f)=>{const m=s_(f,e.getImmediateChild(d),t);m!==f&&(a=a.updateImmediateChild(d,m))}),a}}/**
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
 */class o_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function a_(n,e){let t=e instanceof Je?e:new Je(e),r=n,s=Oe(t);for(;s!==null;){const a=Ta(r.node.children,s)||{children:{},childCount:0};r=new o_(s,r,a),t=tt(t),s=Oe(t)}return r}function Ha(n){return n.node.value}function TC(n,e){n.node.value=e,Dm(n)}function IC(n){return n.node.childCount>0}function bO(n){return Ha(n)===void 0&&!IC(n)}function qd(n,e){an(n.node.children,(t,r)=>{e(new o_(t,n,r))})}function CC(n,e,t,r){t&&e(n),qd(n,s=>{CC(s,e,!0)})}function DO(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function qu(n){return new Je(n.parent===null?n.name:qu(n.parent)+"/"+n.name)}function Dm(n){n.parent!==null&&OO(n.parent,n.name,n)}function OO(n,e,t){const r=bO(t),s=Lr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Dm(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Dm(n))}/**
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
 */const MO=/[\[\].#$\/\u0000-\u001F\u007F]/,LO=/[\[\].#$\u0000-\u001F\u007F]/,Bp=10*1024*1024,l_=function(n){return typeof n=="string"&&n.length!==0&&!MO.test(n)},SC=function(n){return typeof n=="string"&&n.length!==0&&!LO.test(n)},VO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),SC(n)},RC=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Fd(n)||n&&typeof n=="object"&&Lr(n,".sv")},Om=function(n,e,t,r){Hd(Ia(n,"value"),e,t)},Hd=function(n,e,t){const r=t instanceof Je?new tD(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$s(r));if(typeof e=="function")throw new Error(n+"contains a function "+$s(r)+" with contents = "+e.toString());if(Fd(e))throw new Error(n+"contains "+e.toString()+" "+$s(r));if(typeof e=="string"&&e.length>Bp/3&&dd(e)>Bp)throw new Error(n+"contains a string greater than "+Bp+" utf8 bytes "+$s(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,a=!1;if(an(e,(u,d)=>{if(u===".value")s=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!l_(u)))throw new Error(n+" contains an invalid key ("+u+") "+$s(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nD(r,u),Hd(n,d,r),rD(r)}),s&&a)throw new Error(n+' contains ".value" child '+$s(r)+" in addition to actual children.")}},FO=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=wu(r);for(let u=0;u<a.length;u++)if(!(a[u]===".priority"&&u===a.length-1)){if(!l_(a[u]))throw new Error(n+"contains an invalid key ("+a[u]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eD);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&$n(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},UO=function(n,e,t,r){const s=Ia(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const a=[];an(e,(u,d)=>{const f=new Je(u);if(Hd(s,d,vt(t,f)),jg(f)===".priority"&&!RC(d))throw new Error(s+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),FO(s,a)},jO=function(n,e,t){if(Fd(e))throw new Error(Ia(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!RC(e))throw new Error(Ia(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},AC=function(n,e,t,r){if(!SC(t))throw new Error(Ia(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zO=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AC(n,e,t)},Xl=function(n,e){if(Oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},BO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!l_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VO(t))throw new Error(Ia(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class WO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function u_(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],a=s.getPath();t!==null&&!zg(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(s)}t&&n.eventLists_.push(t)}function PC(n,e,t){u_(n,t),kC(n,r=>zg(r,e))}function pi(n,e,t){u_(n,t),kC(n,r=>$n(r,e)||$n(e,r))}function kC(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const a=s.path;e(a)?(qO(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();su&&Kt("event: "+t.toString()),Wa(r)}}}/**
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
 */const HO="repo_interrupt",$O=25;class GO{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ed(),this.transactionQueueTree_=new o_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function KO(n,e,t){if(n.stats_=Fg(n.repoInfo_),n.forceRestClient_||Sb())n.server_=new Zh(n.repoInfo_,(r,s,a,u)=>{zw(n,r,s,a,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Bw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Wt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new li(n.repoInfo_,e,(r,s,a,u)=>{zw(n,r,s,a,u)},r=>{Bw(n,r)},r=>{YO(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=xb(n.repoInfo_,()=>new kD(n.stats_,n.server_)),n.infoData_=new CD,n.infoSyncTree_=new Fw({startListening:(r,s,a,u)=>{let d=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(d=Bd(n.infoSyncTree_,r._path,f),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),h_(n,"connected",!1),n.serverSyncTree_=new Fw({startListening:(r,s,a,u)=>(n.server_.listen(r,a,s,(d,f)=>{const m=u(d,f);pi(n.eventQueue_,r._path,m)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function QO(n){const t=n.infoData_.getNode(new Je(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function c_(n){return PO({timestamp:QO(n)})}function zw(n,e,t,r,s){n.dataUpdateCount++;const a=new Je(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(s)if(r){const f=kh(t,m=>It(m));u=IO(n.serverSyncTree_,a,f,s)}else{const f=It(t);u=TO(n.serverSyncTree_,a,f,s)}else if(r){const f=kh(t,m=>It(m));u=vO(n.serverSyncTree_,a,f)}else{const f=It(t);u=Bd(n.serverSyncTree_,a,f)}let d=a;u.length>0&&(d=$d(n,a)),pi(n.eventQueue_,d,u)}function Bw(n,e){h_(n,"connected",e),e===!1&&JO(n)}function YO(n,e){an(e,(t,r)=>{h_(n,t,r)})}function h_(n,e,t){const r=new Je("/.info/"+e),s=It(t);n.infoData_.updateSnapshot(r,s);const a=Bd(n.infoSyncTree_,r,s);pi(n.eventQueue_,r,a)}function xC(n){return n.nextWriteId_++}function XO(n,e,t,r,s){d_(n,"set",{path:e.toString(),value:t,priority:r});const a=c_(n),u=It(t,r),d=Zg(n.serverSyncTree_,e),f=wC(u,d,a),m=xC(n),v=_C(n.serverSyncTree_,e,f,m,!0);u_(n.eventQueue_,v),n.server_.put(e.toString(),u.val(!0),(T,D)=>{const V=T==="ok";V||Cn("set at "+e+" failed: "+T);const q=Qs(n.serverSyncTree_,m,!V);pi(n.eventQueue_,e,q),Oa(n,s,T,D)});const E=MC(n,e);$d(n,E),pi(n.eventQueue_,E,[])}function JO(n){d_(n,"onDisconnectEvents");const e=c_(n),t=ed();Rm(n.onDisconnect_,Ye(),(s,a)=>{const u=NO(s,a,n.serverSyncTree_,e);qa(t,s,u)});let r=[];Rm(t,Ye(),(s,a)=>{r=r.concat(Bd(n.serverSyncTree_,s,a));const u=MC(n,s);$d(n,u)}),n.onDisconnect_=ed(),pi(n.eventQueue_,Ye(),r)}function ZO(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Sm(n.onDisconnect_,e),Oa(n,t,r,s)})}function Ww(n,e,t,r){const s=It(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(a,u)=>{a==="ok"&&qa(n.onDisconnect_,e,s),Oa(n,r,a,u)})}function e2(n,e,t,r,s){const a=It(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(u,d)=>{u==="ok"&&qa(n.onDisconnect_,e,a),Oa(n,s,u,d)})}function t2(n,e,t,r){if(Ph(t)){Kt("onDisconnect().update() called with empty data.  Don't do anything."),Oa(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,a)=>{s==="ok"&&an(t,(u,d)=>{const f=It(d);qa(n.onDisconnect_,vt(e,u),f)}),Oa(n,r,s,a)})}function n2(n,e,t){let r;Oe(e._path)===".info"?r=Uw(n.infoSyncTree_,e,t):r=Uw(n.serverSyncTree_,e,t),PC(n.eventQueue_,e._path,r)}function r2(n,e,t){let r;Oe(e._path)===".info"?r=bm(n.infoSyncTree_,e,t):r=bm(n.serverSyncTree_,e,t),PC(n.eventQueue_,e._path,r)}function i2(n){n.persistentConnection_&&n.persistentConnection_.interrupt(HO)}function d_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Kt(t,...e)}function Oa(n,e,t,r){e&&Wa(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let a=s;r&&(a+=": "+r);const u=new Error(a);u.code=s,e(u)}})}function NC(n,e,t){return Zg(n.serverSyncTree_,e,t)||Se.EMPTY_NODE}function f_(n,e=n.transactionQueueTree_){if(e||Gd(n,e),Ha(e)){const t=DC(n,e);ee(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&s2(n,qu(e),t)}else IC(e)&&qd(e,t=>{f_(n,t)})}function s2(n,e,t){const r=t.map(m=>m.currentWriteId),s=NC(n,e,r);let a=s;const u=s.hash();for(let m=0;m<t.length;m++){const v=t[m];ee(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const E=Tn(e,v.path);a=a.updateChild(E,v.currentOutputSnapshotRaw)}const d=a.val(!0),f=e;n.server_.put(f.toString(),d,m=>{d_(n,"transaction put response",{path:f.toString(),status:m});let v=[];if(m==="ok"){const E=[];for(let T=0;T<t.length;T++)t[T].status=2,v=v.concat(Qs(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&E.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();Gd(n,a_(n.transactionQueueTree_,e)),f_(n,n.transactionQueueTree_),pi(n.eventQueue_,e,v);for(let T=0;T<E.length;T++)Wa(E[T])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{Cn("transaction at "+f.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}$d(n,e)}},u)}function $d(n,e){const t=bC(n,e),r=qu(t),s=DC(n,t);return o2(n,s,r),r}function o2(n,e,t){if(e.length===0)return;const r=[];let s=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],m=Tn(t,f.path);let v=!1,E;if(ee(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)v=!0,E=f.abortReason,s=s.concat(Qs(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=$O)v=!0,E="maxretry",s=s.concat(Qs(n.serverSyncTree_,f.currentWriteId,!0));else{const T=NC(n,f.path,u);f.currentInputSnapshot=T;const D=e[d].update(T.val());if(D!==void 0){Hd("transaction failed: Data returned ",D,f.path);let V=It(D);typeof D=="object"&&D!=null&&Lr(D,".priority")||(V=V.updatePriority(T.getPriority()));const B=f.currentWriteId,J=c_(n),re=wC(V,T,J);f.currentOutputSnapshotRaw=V,f.currentOutputSnapshotResolved=re,f.currentWriteId=xC(n),u.splice(u.indexOf(B),1),s=s.concat(_C(n.serverSyncTree_,f.path,re,f.currentWriteId,f.applyLocally)),s=s.concat(Qs(n.serverSyncTree_,B,!0))}else v=!0,E="nodata",s=s.concat(Qs(n.serverSyncTree_,f.currentWriteId,!0))}pi(n.eventQueue_,t,s),s=[],v&&(e[d].status=2,function(T){setTimeout(T,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?r.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):r.push(()=>e[d].onComplete(new Error(E),!1,null))))}Gd(n,n.transactionQueueTree_);for(let d=0;d<r.length;d++)Wa(r[d]);f_(n,n.transactionQueueTree_)}function bC(n,e){let t,r=n.transactionQueueTree_;for(t=Oe(e);t!==null&&Ha(r)===void 0;)r=a_(r,t),e=tt(e),t=Oe(e);return r}function DC(n,e){const t=[];return OC(n,e,t),t.sort((r,s)=>r.order-s.order),t}function OC(n,e,t){const r=Ha(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);qd(e,s=>{OC(n,s,t)})}function Gd(n,e){const t=Ha(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,TC(e,t.length>0?t:void 0)}qd(e,r=>{Gd(n,r)})}function MC(n,e){const t=qu(bC(n,e)),r=a_(n.transactionQueueTree_,e);return DO(r,s=>{Wp(n,s)}),Wp(n,r),CC(r,s=>{Wp(n,s)}),t}function Wp(n,e){const t=Ha(e);if(t){const r=[];let s=[],a=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ee(a===u-1,"All SENT items should be at beginning of queue."),a=u,t[u].status=3,t[u].abortReason="set"):(ee(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),s=s.concat(Qs(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&r.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?TC(e,void 0):t.length=a+1,pi(n.eventQueue_,qu(e),s);for(let u=0;u<r.length;u++)Wa(r[u])}}/**
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
 */function a2(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function l2(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Cn(`Invalid query segment '${t}' in query '${n}'`)}return e}const qw=function(n,e){const t=u2(n),r=t.namespace;t.domain==="firebase.com"&&fi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&fi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||gb();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new zI(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new Je(t.pathString)}},u2=function(n){let e="",t="",r="",s="",a="",u=!0,d="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(v,E)),v<E&&(s=a2(n.substring(v,E)));const T=l2(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const D=e.slice(0,m);if(D.toLowerCase()==="localhost")t="localhost";else if(D.split(".").length<=2)t=D;else{const V=e.indexOf(".");r=e.substring(0,V).toLowerCase(),t=e.substring(V+1),a=r}"ns"in T&&(a=T.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:u,scheme:d,pathString:s,namespace:a}};/**
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
 */class c2{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Wt(this.snapshot.exportVal())}}class h2{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class d2{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ee(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class f2{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ni;return ZO(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xl("OnDisconnect.remove",this._path);const e=new ni;return Ww(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xl("OnDisconnect.set",this._path),Om("OnDisconnect.set",e,this._path);const t=new ni;return Ww(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Xl("OnDisconnect.setWithPriority",this._path),Om("OnDisconnect.setWithPriority",e,this._path),jO("OnDisconnect.setWithPriority",t);const r=new ni;return e2(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){Xl("OnDisconnect.update",this._path),UO("OnDisconnect.update",e,this._path);const t=new ni;return t2(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Ve(this._path)?null:jg(this._path)}get ref(){return new gs(this._repo,this._path)}get _queryIdentifier(){const e=Aw(this._queryParams),t=Lg(e);return t==="{}"?"default":t}get _queryObject(){return Aw(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof p_))return!1;const t=this._repo===e._repo,r=zg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zb(this._path)}}class gs extends p_{constructor(e,t){super(e,t,new Hg,!1)}get parent(){const e=YI(this._path);return e===null?null:new gs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ld{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Je(e),r=Mm(this.ref,e);return new ld(this._node.getChild(t),r,pt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ld(s,Mm(this.ref,r),pt)))}hasChild(e){const t=new Je(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qp(n,e){return n=nt(n),n._checkNotDeleted("ref"),e!==void 0?Mm(n._root,e):n._root}function Mm(n,e){return n=nt(n),Oe(n._path)===null?zO("child","path",e):AC("child","path",e),new gs(n._repo,vt(n._path,e))}function p2(n){return n=nt(n),new f2(n._repo,n._path)}function Hw(n,e){n=nt(n),Xl("set",n._path),Om("set",e,n._path);const t=new ni;return XO(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class m_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new c2("value",this,new ld(e.snapshotNode,new gs(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new h2(this,e,t):null}matches(e){return e instanceof m_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function m2(n,e,t,r,s){const a=new d2(t,void 0),u=new m_(a);return n2(n._repo,n,u),()=>r2(n._repo,n,u)}function g2(n,e,t,r){return m2(n,"value",e)}cO(gs);gO(gs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="FIREBASE_DATABASE_EMULATOR_HOST",Lm={};let y2=!1;function v2(n,e,t,r){const s=e.lastIndexOf(":"),a=e.substring(0,s),u=hs(a);n.repoInfo_=new zI(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function E2(n,e,t,r,s){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||fi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=qw(a,s),d=u.repoInfo,f;typeof process<"u"&&uw&&(f=uw[_2]),f?(a=`http://${f}?ns=${d.namespace}`,u=qw(a,s),d=u.repoInfo):u.repoInfo.secure;const m=new Ab(n.name,n.options,e);BO("Invalid Firebase Database URL",u),Ve(u.path)||fi("Database URL must point to the root of a Firebase Database (not including a child path).");const v=T2(d,n,m,new Rb(n,t));return new I2(v,n)}function w2(n,e){const t=Lm[e];(!t||t[n.key]!==n)&&fi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),i2(n),delete t[n.key]}function T2(n,e,t,r){let s=Lm[e.name];s||(s={},Lm[e.name]=s);let a=s[n.toURLString()];return a&&fi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new GO(n,y2,t,r),s[n.toURLString()]=a,a}class I2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(KO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gs(this._repo,Ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(w2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fi("Cannot call "+e+" on a deleted database.")}}function C2(n=Wm(),e){const t=pd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Jw("database");r&&S2(t,...r)}return t}function S2(n,e,t,r={}){n=nt(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Or(r,a.repoInfo_.emulatorOptions))return;fi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&fi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Sh(Sh.OWNER);else if(r.mockUserToken){const d=typeof r.mockUserToken=="string"?r.mockUserToken:t0(r.mockUserToken,n.app.options.projectId);u=new Sh(d)}hs(e)&&(Um(e),jm("Database",!0)),v2(a,s,r,u)}/**
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
 */function R2(n){cb(so),Ys(new es("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return E2(r,s,a,t)},"PUBLIC").setMultipleInstances(!0)),Pr(cw,hw,n),Pr(cw,hw,"esm2017")}li.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};li.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};R2();const A2={apiKey:"AIzaSyBVcDX9Ut7Jb4u_QE1w4F4yevKpF8Ci_tg",authDomain:"undercover-5dd71.firebaseapp.com",projectId:"undercover-5dd71",storageBucket:"undercover-5dd71.firebasestorage.app",messagingSenderId:"213129592280",appId:"1:213129592280:web:3103669e4fee85d9b986ad",measurementId:"G-4XCML5NCTM"},g_=o0(A2),ud=$P(g_),Ut=BN(g_),Hp=C2(g_),P2=({className:n})=>x.jsxs("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[x.jsx("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}),x.jsx("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})]}),k2=({className:n})=>x.jsx("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:x.jsx("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.242 4.242a4 4 0 00-5.656 5.656l1.414-1.414a2 2 0 012.828-2.828l1.414-1.414zM10 17a7 7 0 01-7-7c0-1.551.48-3.006 1.332-4.243L15.243 14.668A6.96 6.96 0 0110 17z",clipRule:"evenodd"})}),x2=({className:n})=>x.jsx("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})}),N2=({className:n})=>x.jsx("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:x.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),cd=[{civilian:"Café",undercover:"Thé"},{civilian:"Chien",undercover:"Chat"},{civilian:"Soleil",undercover:"Lune"},{civilian:"Plage",undercover:"Montagne"},{civilian:"Livre",undercover:"Film"},{civilian:"Piano",undercover:"Guitare"},{civilian:"Paris",undercover:"Londres"},{civilian:"Pizza",undercover:"Burger"},{civilian:"Été",undercover:"Hiver"},{civilian:"Voiture",undercover:"Avion"},{civilian:"Fruit",undercover:"Légume"},{civilian:"Peinture",undercover:"Dessin"},{civilian:"Danse",undercover:"Chant"},{civilian:"Football",undercover:"Basketball"},{civilian:"Serpent",undercover:"Lézard"},{civilian:"Médecin",undercover:"Infirmier"},{civilian:"Rêve",undercover:"Cauchemar"},{civilian:"Chaise",undercover:"Tabouret"},{civilian:"Chemise",undercover:"T-shirt"},{civilian:"Amour",undercover:"Amitié"},{civilian:"Guerre",undercover:"Paix"},{civilian:"Ordinateur",undercover:"Tablette"},{civilian:"Forêt",undercover:"Désert"},{civilian:"Rivière",undercover:"Océan"},{civilian:"Sucre",undercover:"Sel"},{civilian:"Or",undercover:"Argent"},{civilian:"Jour",undercover:"Nuit"},{civilian:"Chaud",undercover:"Froid"},{civilian:"Rire",undercover:"Sourire"},{civilian:"Magie",undercover:"Science"},{civilian:"Héros",undercover:"Méchant"},{civilian:"Vitesse",undercover:"Lenteur"},{civilian:"Lumière",undercover:"Ombre"},{civilian:"Roi",undercover:"Reine"},{civilian:"Poésie",undercover:"Prose"},{civilian:"Théâtre",undercover:"Cinéma"},{civilian:"Violon",undercover:"Violoncelle"},{civilian:"Miel",undercover:"Confiture"},{civilian:"Bateau",undercover:"Navire"},{civilian:"Fée",undercover:"Sorcier"},{civilian:"Dragon",undercover:"Griffon"},{civilian:"Château",undercover:"Palais"},{civilian:"Épée",undercover:"Bouclier"},{civilian:"Flèche",undercover:"Lance"},{civilian:"Fantôme",undercover:"Zombie"},{civilian:"Vampire",undercover:"Loup-garou"},{civilian:"Robot",undercover:"Cyborg"},{civilian:"Galaxie",undercover:"Nébuleuse"},{civilian:"Planète",undercover:"Étoile"},{civilian:"Comète",undercover:"Astéroïde"},{civilian:"Volcan",undercover:"Geyser"},{civilian:"Tornade",undercover:"Ouragan"},{civilian:"Neige",undercover:"Pluie"},{civilian:"Glace",undercover:"Eau"},{civilian:"Feu",undercover:"Fumée"},{civilian:"Vent",undercover:"Brise"},{civilian:"Sable",undercover:"Terre"},{civilian:"Roche",undercover:"Pierre"},{civilian:"Diamant",undercover:"Rubis"},{civilian:"Journal",undercover:"Magazine"},{civilian:"Radio",undercover:"Télévision"},{civilian:"Téléphone",undercover:"Smartphone"},{civilian:"Lettre",undercover:"Email"},{civilian:"Pont",undercover:"Tunnel"},{civilian:"Route",undercover:"Autoroute"},{civilian:"Train",undercover:"Métro"},{civilian:"Bus",undercover:"Tramway"},{civilian:"Vélo",undercover:"Moto"},{civilian:"Jardin",undercover:"Parc"},{civilian:"Fleur",undercover:"Arbre"},{civilian:"Herbe",undercover:"Mousse"},{civilian:"Champignon",undercover:"Truffe"},{civilian:"Loup",undercover:"Renard"},{civilian:"Ours",undercover:"Panda"},{civilian:"Aigle",undercover:"Faucon"},{civilian:"Hibou",undercover:"Chouette"},{civilian:"Baleine",undercover:"Dauphin"},{civilian:"Requin",undercover:"Orque"},{civilian:"Crabe",undercover:"Crevette"},{civilian:"Papillon",undercover:"Libellule"},{civilian:"Abeille",undercover:"Guêpe"},{civilian:"Fourmi",undercover:"Termite"},{civilian:"Araignée",undercover:"Scorpion"},{civilian:"Chocolat",undercover:"Vanille"},{civilian:"Fraise",undercover:"Framboise"},{civilian:"Pomme",undercover:"Poire"},{civilian:"Banane",undercover:"Orange"},{civilian:"Raisin",undercover:"Cerise"},{civilian:"Pain",undercover:"Baguette"},{civilian:"Fromage",undercover:"Yaourt"},{civilian:"Vin",undercover:"Bière"},{civilian:"Jus",undercover:"Soda"},{civilian:"Soupe",undercover:"Salade"},{civilian:"Pâtes",undercover:"Riz"},{civilian:"Gâteau",undercover:"Tarte"},{civilian:"Biscuit",undercover:"Cookie"},{civilian:"Bonbon",undercover:"Caramel"},{civilian:"École",undercover:"Université"},{civilian:"Professeur",undercover:"Élève"},{civilian:"Bibliothèque",undercover:"Librairie"},{civilian:"Hôpital",undercover:"Clinique"},{civilian:"Police",undercover:"Pompier"},{civilian:"Soldat",undercover:"Général"},{civilian:"Président",undercover:"Premier ministre"},{civilian:"Juge",undercover:"Avocat"},{civilian:"Artiste",undercover:"Artisan"},{civilian:"Musicien",undercover:"Compositeur"},{civilian:"Acteur",undercover:"Réalisateur"},{civilian:"Écrivain",undercover:"Poète"},{civilian:"Scientifique",undercover:"Chercheur"},{civilian:"Inventeur",undercover:"Ingénieur"},{civilian:"Explorateur",undercover:"Aventurier"},{civilian:"Pirate",undercover:"Corsaire"},{civilian:"Ninja",undercover:"Samouraï"},{civilian:"Cowboy",undercover:"Shérif"},{civilian:"Détective",undercover:"Espion"},{civilian:"Journaliste",undercover:"Photographe"},{civilian:"Cuisinier",undercover:"Pâtissier"},{civilian:"Boulanger",undercover:"Boucher"},{civilian:"Fermier",undercover:"Jardinier"},{civilian:"Pilote",undercover:"Astronaute"},{civilian:"Capitaine",undercover:"Matelot"},{civilian:"Joie",undercover:"Bonheur"},{civilian:"Tristesse",undercover:"Mélancolie"},{civilian:"Colère",undercover:"Rage"},{civilian:"Peur",undercover:"Anxiété"},{civilian:"Surprise",undercover:"Étonnement"},{civilian:"Courage",undercover:"Bravoure"},{civilian:"Sagesse",undercover:"Intelligence"},{civilian:"Beauté",undercover:"Charme"},{civilian:"Force",undercover:"Puissance"},{civilian:"Chance",undercover:"Destin"},{civilian:"Histoire",undercover:"Légende"},{civilian:"Mythe",undercover:"Conte"},{civilian:"Secret",undercover:"Mystère"},{civilian:"Silence",undercover:"Calme"},{civilian:"Bruit",undercover:"Son"},{civilian:"Couleur",undercover:"Nuance"},{civilian:"Forme",undercover:"Silhouette"},{civilian:"Début",undercover:"Fin"},{civilian:"Cause",undercover:"Conséquence"}];function b2(){const[n,e]=ke.useState(null),[t,r]=ke.useState(!0),[s,a]=ke.useState("splash"),[u,d]=ke.useState(null),[f,m]=ke.useState(null);ke.useEffect(()=>{const T=O1(ud,D=>{e(D),D&&!D.isAnonymous&&s==="auth"&&a("lobby"),r(!1)});return()=>T()},[s]),ke.useEffect(()=>{if(n&&!n.isAnonymous){const T=qp(Hp,"status/"+n.uid),D=nn(Ut,"userProfiles",n.uid),V={state:"online",last_changed:Lp()},q={state:"offline",last_changed:Lp()};g2(qp(Hp,".info/connected"),B=>{B.val()!==!1&&p2(T).set(q).then(()=>{Hw(T,V),ur(D,{state:"online"}).catch(J=>{J.code!=="not-found"&&console.error("Error setting online status:",J)})}).catch(J=>console.error("Error setting onDisconnect:",J))})}},[n]);const v=async()=>{if(n&&!n.isAnonymous){const T=qp(Hp,"status/"+n.uid),D=nn(Ut,"userProfiles",n.uid);try{await Hw(T,{state:"offline",last_changed:Lp()}),await ur(D,{state:"offline"})}catch(V){console.error("Error signing out:",V)}}await M1(ud),a("welcome"),d(null)};if(t)return x.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-900 text-white",children:"Chargement..."});const E=()=>{switch(s){case"splash":return x.jsx(D2,{onFinish:()=>a("welcome")});case"welcome":return x.jsx($w,{setScreen:a});case"auth":return x.jsx(O2,{setScreen:a});case"lobby":return x.jsx(M2,{user:n,setScreen:a,setOnlineGameId:d,onSignOut:v});case"onlineGame":return x.jsx(L2,{gameId:u,user:n,setScreen:a,setOnlineGameId:d});case"offlineSetup":return x.jsx(B2,{setScreen:a,setLocalGameData:m});case"offlineGame":return x.jsx(W2,{localGameData:f,setScreen:a});default:return x.jsx($w,{setScreen:a})}};return x.jsx("div",{className:"min-h-screen bg-gray-900 text-white font-sans",children:E()})}function D2({onFinish:n}){return ke.useEffect(()=>{const e=setTimeout(()=>{n()},4e3);return()=>clearTimeout(e)},[n]),x.jsxs("div",{className:"flex items-center justify-center w-screen h-screen bg-gray-900 overflow-hidden",children:[x.jsx("style",{children:`
                    @keyframes rotate-in {
                        0% {
                            transform: rotateY(-180deg) scale(0.5);
                            opacity: 0;
                        }
                        100% {
                            transform: rotateY(0deg) scale(1);
                            opacity: 1;
                        }
                    }
                    .rotate-text {
                        animation: rotate-in 2.5s ease-out forwards;
                    }
                `}),x.jsx("h1",{className:"rotate-text text-5xl md:text-7xl font-black text-white tracking-wider",style:{textShadow:"0 0 20px rgba(192, 192, 192, 0.5)"},children:"PANKOSS GAME"})]})}function $w({setScreen:n}){return x.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4",children:x.jsxs("div",{className:"w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-lg text-center",children:[x.jsx("h1",{className:"text-5xl font-bold text-white tracking-wider",children:"UNDERCOVER"}),x.jsx("p",{className:"text-lg text-gray-300",children:"Choisissez votre mode de jeu"}),x.jsxs("div",{className:"space-y-4 pt-4",children:[x.jsx("button",{onClick:()=>n("auth"),className:"w-full py-4 text-xl font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition transform hover:scale-105",children:"Jouer en Ligne"}),x.jsx("button",{onClick:()=>n("offlineSetup"),className:"w-full py-4 text-xl font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition transform hover:scale-105",children:"Jouer Hors Ligne"})]})]})})}function O2({setScreen:n}){const[e,t]=ke.useState(!0),[r,s]=ke.useState(""),[a,u]=ke.useState(""),[d,f]=ke.useState(""),[m,v]=ke.useState(""),[E,T]=ke.useState(!1),D=async V=>{V.preventDefault(),v("");try{if(e)await N1(ud,r,a);else{if(!d.trim()){v("Le pseudo est requis.");return}const q=await x1(ud,r,a),B=nn(Ut,"userProfiles",q.user.uid);await wm(B,{email:q.user.email,pseudo:d,score:0,state:"online"})}}catch(q){v(q.message)}};return x.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4",children:x.jsxs("div",{className:"w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg",children:[x.jsx("h2",{className:"text-3xl font-bold text-center text-indigo-400",children:e?"Connexion":"Inscription"}),x.jsxs("form",{onSubmit:D,className:"space-y-4 mt-4",children:[!e&&x.jsxs("div",{children:[x.jsx("label",{className:"text-sm font-bold text-gray-400",children:"Pseudo"}),x.jsx("input",{type:"text",value:d,onChange:V=>f(V.target.value),className:"w-full p-3 mt-1 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition",required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{className:"text-sm font-bold text-gray-400",children:"Email"}),x.jsx("input",{type:"email",value:r,onChange:V=>s(V.target.value),className:"w-full p-3 mt-1 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition",required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{className:"text-sm font-bold text-gray-400",children:"Mot de passe"}),x.jsxs("div",{className:"relative",children:[x.jsx("input",{type:E?"text":"password",value:a,onChange:V=>u(V.target.value),className:"w-full p-3 mt-1 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition",required:!0}),x.jsx("button",{type:"button",onClick:()=>T(!E),className:"absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-white",children:E?x.jsx(k2,{className:"h-5 w-5"}):x.jsx(P2,{className:"h-5 w-5"})})]})]}),m&&x.jsx("p",{className:"text-red-400 text-sm",children:m}),x.jsx("button",{type:"submit",className:"w-full py-3 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105",children:e?"Se connecter":"S'inscrire"})]}),x.jsxs("p",{className:"text-center text-gray-400 mt-4",children:[e?"Pas de compte ?":"Déjà un compte ?",x.jsx("button",{onClick:()=>t(!e),className:"font-bold text-indigo-400 hover:underline ml-2",children:e?"Inscrivez-vous":"Connectez-vous"})]}),x.jsx("button",{onClick:()=>n("welcome"),className:"w-full mt-4 py-2 text-sm font-semibold text-gray-300 bg-gray-600 rounded-lg hover:bg-gray-700 transition",children:"Retour"})]})})}function M2({user:n,setScreen:e,setOnlineGameId:t,onSignOut:r}){const[s,a]=ke.useState(""),[u,d]=ke.useState(""),[f,m]=ke.useState(null),[v,E]=ke.useState([]),[T,D]=ke.useState(!1),V=(J=6)=>{const re="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let ae="";for(let pe=0;pe<J;pe++)ae+=re.charAt(Math.floor(Math.random()*re.length));return ae};ke.useEffect(()=>{if(!n||n.isAnonymous)return;const J=nn(Ut,"userProfiles",n.uid),re=Qh(J,Me=>{if(Me.exists()){const we=Me.data();if(we.pseudo)m(we);else{const O=n.email.split("@")[0];ur(J,{pseudo:O}).then(()=>m({...we,pseudo:O}))}}else{const we=n.email.split("@")[0];wm(J,{email:n.email,pseudo:we,score:0,state:"online"})}},Me=>console.error("Error reading user profile:",Me)),ae=JN(zN(Ut,"userProfiles"),ZN("state","==","online")),pe=Qh(ae,Me=>{const we=Me.docs.map(O=>({id:O.id,...O.data()})).filter(O=>O.id!==n.uid);E(we)},Me=>console.error("Error reading online players:",Me));return()=>{re(),pe()}},[n]);const q=async()=>{if(!f||!f.pseudo){d("Profil en cours de chargement, veuillez patienter...");return}d(""),D(!0);try{let J,re=!0;for(;re;){J=V();const pe=nn(Ut,"games",J);re=(await Em(pe)).exists()}const ae={uid:n.uid,pseudo:f.pseudo,isHost:!0};await wm(nn(Ut,"games",J),{host:ae,players:[ae],createdAt:new Date,status:"waiting"}),t(J),e("onlineGame")}catch(J){console.error(J),d("Impossible de créer la partie.")}finally{D(!1)}},B=async()=>{if(!f||!f.pseudo){d("Profil en cours de chargement, veuillez patienter...");return}if(d(""),!s.trim()){d("Veuillez entrer un code de partie.");return}try{const J=nn(Ut,"games",s.toUpperCase()),re=await Em(J);if(re.exists()){const ae=re.data();if(ae.players.some(pe=>pe.uid===n.uid)){t(s.toUpperCase()),e("onlineGame");return}if(ae.status!=="waiting"){d("Cette partie a déjà commencé ou est terminée.");return}await ur(J,{players:ab({uid:n.uid,pseudo:f.pseudo,isHost:!1})}),t(s.toUpperCase()),e("onlineGame")}else d("Partie non trouvée.")}catch(J){console.error(J),d("Impossible de rejoindre la partie.")}};return x.jsxs("div",{className:"min-h-screen bg-gray-900 p-4 lg:p-8",children:[x.jsxs("div",{className:"absolute top-4 right-4 flex space-x-2",children:[x.jsx("button",{onClick:()=>e("welcome"),className:"px-4 py-2 text-sm font-semibold bg-gray-600 rounded-lg hover:bg-gray-700 transition",children:"Changer de mode"}),x.jsx("button",{onClick:r,className:"px-4 py-2 text-sm font-semibold bg-red-600 rounded-lg hover:bg-red-700 transition",children:"Déconnexion"})]}),x.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"lg:col-span-2",children:[x.jsxs("div",{className:"text-center lg:text-left",children:[x.jsx("h1",{className:"text-5xl font-bold text-white mb-2",children:"Bienvenue,"}),x.jsx("p",{className:"text-indigo-400 text-lg mb-2",children:f?.pseudo||n.email}),x.jsxs("p",{className:"text-2xl text-yellow-400 font-bold mb-10",children:["Score: ",f?.score||0]})]}),x.jsxs("div",{className:"space-y-6 w-full max-w-sm mx-auto lg:mx-0",children:[x.jsx("button",{onClick:q,disabled:T||!f,className:"w-full py-4 text-xl font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition transform hover:scale-105 disabled:bg-gray-500",children:T?"Création...":"Créer une Partie"}),x.jsxs("div",{className:"relative flex items-center",children:[x.jsx("hr",{className:"w-full border-gray-600"}),x.jsx("span",{className:"absolute px-3 font-medium text-gray-400 bg-gray-900 -translate-x-1/2 left-1/2",children:"OU"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("input",{type:"text",value:s,onChange:J=>a(J.target.value),placeholder:"CODE DE PARTIE",className:"w-full p-4 text-center tracking-widest text-white bg-gray-800 border-2 border-gray-700 rounded-lg focus:border-indigo-500 outline-none transition uppercase"}),x.jsx("button",{onClick:B,disabled:!f,className:"w-full py-3 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 disabled:bg-gray-500",children:"Rejoindre une Partie"})]}),u&&x.jsx("p",{className:"text-red-400 mt-4",children:u})]})]}),x.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl shadow-lg",children:[x.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Joueurs en Ligne"}),x.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:v.length>0?v.map(J=>x.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-700 rounded-lg",children:[x.jsx("span",{className:"w-3 h-3 bg-green-500 rounded-full flex-shrink-0"}),x.jsx("p",{className:"text-gray-200 font-semibold truncate",children:J.pseudo})]},J.id)):x.jsx("p",{className:"text-gray-400",children:"Aucun autre joueur en ligne."})})]})]})]})}function L2({gameId:n,user:e,setScreen:t,setOnlineGameId:r}){const[s,a]=ke.useState(null),[u,d]=ke.useState(!0),[f,m]=ke.useState(""),[v,E]=ke.useState(null),[T,D]=ke.useState(0),[V,q]=ke.useState(0),B=s?.host.uid===e.uid,J=s?.players.find(R=>R.uid===e.uid);ke.useEffect(()=>{if(e&&!e.isAnonymous){const R=nn(Ut,"userProfiles",e.uid),k=Qh(R,N=>{N.exists()&&E(N.data())});return()=>k()}},[e]),ke.useEffect(()=>{const R=nn(Ut,"games",n),k=Qh(R,N=>{if(N.exists()){const C={id:N.id,...N.data()};s?.status!=="finished"&&C.status==="finished"&&re(C.winner,C.players),s?.status!=="waiting"&&C.status==="waiting"&&D(0),a(C)}else m("La partie n'existe plus."),a(null),setTimeout(()=>{r(null),t("lobby")},3e3);d(!1)},N=>{console.error(N),m("Erreur de connexion à la partie."),d(!1)});return()=>k()},[n,t,r,s?.status]);const re=async(R,k)=>{const N=k.find(me=>me.uid===e.uid);if(!N)return;let C=0;if(R==="Undercovers"&&(N.role==="Undercover"||N.role==="Mr. White")?C=10:R==="Civilians"&&N.role==="Civilian"?C=2:R==="Mr. White"&&N.role==="Mr. White"&&(C=8),q(v.score),D(C),C>0){const me=nn(Ut,"userProfiles",N.uid);await ur(me,{score:ub(C)})}},ae=async()=>{try{const R=nn(Ut,"games",n),k=(await Em(R)).data();if(B&&k.players.length===1)await nb(R);else{const N=k.players.find(C=>C.uid===e.uid);await ur(R,{players:lb(N)})}r(null),t("lobby")}catch(R){console.error("Error leaving game: ",R)}},pe=async()=>{if(!(!B||s.players.length<3))try{const R=nn(Ut,"games",n);let k=[...s.players];for(let Te=k.length-1;Te>0;Te--){const Y=Math.floor(Math.random()*(Te+1));[k[Te],k[Y]]=[k[Y],k[Te]]}const N=k.length>=5;let C=[],me=0;for(N&&C.push({...k[me++],role:"Mr. White"}),C.push({...k[me++],role:"Undercover"});me<k.length;)C.push({...k[me++],role:"Civilian"});const Re=C.map(Te=>({...Te,isEliminated:!1,hasVoted:!1})),Ke=cd[Math.floor(Math.random()*cd.length)];await ur(R,{status:"playing_clues",players:Re,wordPair:Ke,votes:{},eliminatedPlayer:null,turn:0,turnOrder:Re.filter(Te=>!Te.isEliminated).map(Te=>Te.uid),clues:{}})}catch(R){console.error("Error starting game:",R)}},Me=async R=>{const k=nn(Ut,"games",n),N=s.turnOrder,C=s.turn+1,me={...s.clues,[e.uid]:R};C>=N.length?await ur(k,{status:"playing_voting",clues:me}):await ur(k,{turn:C,clues:me})},we=async R=>{const k=nn(Ut,"games",n);try{await ob(Ut,async N=>{const C=await N.get(k);if(!C.exists())throw"Document does not exist!";let Re=C.data().players.map(Y=>Y.uid===e.uid?{...Y,hasVoted:!0}:Y),Ke={...C.data().votes};Ke[R]=(Ke[R]||0)+1,N.update(k,{players:Re,votes:Ke}),Re.filter(Y=>!Y.isEliminated).every(Y=>Y.hasVoted)&&O(N,k,Ke,Re)})}catch(N){console.error("Vote transaction failed: ",N)}},O=async(R,k,N,C)=>{const me=C.filter(fe=>!fe.isEliminated),Re=Object.values(N);if(me.length>2&&me.length===Re.length&&Re.every(fe=>fe===1)){const fe=C.map(je=>({...je,hasVoted:!1})),Be=me.map(je=>je.uid).sort(()=>Math.random()-.5);R.update(k,{status:"playing_clues",players:fe,votes:{},clues:{},turn:0,turnOrder:Be,eliminatedPlayer:{pseudo:"Personne (égalité)",role:"Aucun"}});return}let Te=-1,Y=[];for(const fe in N)N[fe]>Te?(Te=N[fe],Y=[fe]):N[fe]===Te&&Y.push(fe);const ge=Y[Math.floor(Math.random()*Y.length)],ie=C.find(fe=>fe.uid===ge);let L=C.map(fe=>fe.uid===ge?{...fe,isEliminated:!0}:fe);const $=L.filter(fe=>!fe.isEliminated),de=$.filter(fe=>fe.role==="Undercover"),Ne=$.find(fe=>fe.role==="Mr. White");let xe=null,be="playing_clues";if($.length<=2&&de.length>0?(xe="Undercovers",be="finished"):de.length===0&&(Ne?be="mrWhiteGuess":(xe="Civilians",be="finished")),be==="finished")R.update(k,{status:"finished",winner:xe,players:L,eliminatedPlayer:ie});else if(be==="mrWhiteGuess")R.update(k,{status:"mrWhiteGuess",players:L,eliminatedPlayer:ie});else{const fe=L.map(je=>({...je,hasVoted:!1})),Be=fe.filter(je=>!je.isEliminated).map(je=>je.uid);R.update(k,{status:"playing_clues",players:fe,votes:{},clues:{},turn:0,turnOrder:Be,eliminatedPlayer:ie})}},A=async R=>{const k=nn(Ut,"games",n),N=s.wordPair.civilian;let C=R.trim().toLowerCase()===N.toLowerCase()?"Mr. White":"Civilians";await ur(k,{status:"finished",winner:C})},S=async()=>{if(!B)return;const R=nn(Ut,"games",n),N=[...s.players].map(C=>({...C,isEliminated:!1,hasVoted:!1,role:"",word:""}));await ur(R,{status:"waiting",winner:null,eliminatedPlayer:null,players:N}),pe()};return u?x.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-900 text-white",children:"Chargement..."}):f?x.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-gray-900 text-red-400",children:[f,x.jsx("button",{onClick:()=>{r(null),t("lobby")},className:"mt-4 px-4 py-2 bg-indigo-600 text-white rounded",children:"Retour"})]}):s?x.jsx("div",{className:"min-h-screen bg-gray-900 text-white p-4 md:p-8",children:x.jsxs("div",{className:"max-w-4xl mx-auto",children:[x.jsxs("div",{className:"flex justify-between items-center mb-6",children:[x.jsxs("div",{children:[x.jsx("h1",{className:"text-3xl font-bold text-indigo-400",children:"Partie en Ligne"}),x.jsxs("p",{className:"text-gray-400",children:["Code: ",x.jsx("span",{className:"font-mono bg-gray-800 px-2 py-1 rounded",children:s.id})]})]}),x.jsx("button",{onClick:ae,className:"px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition",children:"Quitter"})]}),s.status==="waiting"&&x.jsx(V2,{game:s,isHost:B,onStartGame:pe}),s.status==="playing_clues"&&J&&x.jsx(F2,{game:s,myPlayerInfo:J,onGiveClue:Me}),s.status==="playing_voting"&&J&&x.jsx(U2,{game:s,myPlayerInfo:J,onVote:we}),s.status==="mrWhiteGuess"&&J&&x.jsx(j2,{game:s,myPlayerInfo:J,onGuess:A}),s.status==="finished"&&x.jsx(z2,{game:s,isHost:B,onPlayAgain:S,onLeave:()=>{r(null),t("lobby")},userProfile:v,pointsGained:T,initialScore:V})]})}):null}function V2({game:n,isHost:e,onStartGame:t}){return x.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-xl text-center",children:[x.jsx("h2",{className:"text-2xl font-semibold mb-6 text-white",children:"Salle d'attente"}),x.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8",children:n.players.map(r=>x.jsxs("div",{className:"bg-gray-700 p-4 rounded-lg",children:[x.jsx("p",{className:"font-semibold truncate",children:r.pseudo}),r.isHost&&x.jsx("span",{className:"text-xs text-indigo-400",children:"Hôte"})]},r.uid))}),e&&x.jsxs("div",{children:[x.jsxs("button",{onClick:t,disabled:n.players.length<3,className:"px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition disabled:bg-gray-500 disabled:cursor-not-allowed",children:["Lancer la partie (",n.players.length,"/10)"]}),n.players.length<3&&x.jsx("p",{className:"text-yellow-400 text-sm mt-2",children:"Minimum 3 joueurs requis."})]})]})}function F2({game:n,myPlayerInfo:e,onGiveClue:t}){const[r,s]=ke.useState(""),a=n.turnOrder[n.turn],u=n.players.find(m=>m.uid===a),d=u.uid===e.uid,f=m=>{m.preventDefault(),r.trim()&&(t(r),s(""))};return x.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-xl",children:[x.jsxs("div",{className:"text-center bg-gray-700 p-6 rounded-lg mb-6",children:[x.jsx("p",{className:"text-lg text-gray-300",children:"Votre mot :"}),x.jsx("p",{className:"text-4xl font-bold text-white tracking-widest uppercase",children:e.role==="Mr. White"?"?????":e.role==="Civilian"?n.wordPair.civilian:n.wordPair.undercover}),e.role==="Mr. White"&&x.jsx("p",{className:"text-sm text-gray-400 mt-2",children:"Vous n'avez pas de mot. Votre objectif est de deviner le mot des civils !"})]}),x.jsxs("div",{className:"mb-6",children:[x.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Indices donnés :"}),x.jsx("div",{className:"grid grid-cols-2 gap-2 text-center",children:n.turnOrder.map(m=>n.clues[m]&&x.jsxs("div",{className:"bg-gray-900 p-2 rounded",children:[x.jsx("p",{className:"font-mono text-lg",children:n.clues[m]}),x.jsx("p",{className:"text-xs text-gray-400",children:n.players.find(v=>v.uid===m)?.pseudo})]},m))})]}),x.jsxs("div",{className:"text-center p-4 border-2 border-dashed border-indigo-500 rounded-lg",children:[x.jsx("p",{className:"text-lg mb-2",children:"Tour de :"}),x.jsx("p",{className:"text-2xl font-bold text-yellow-400 mb-4",children:u.pseudo}),d&&x.jsxs("form",{onSubmit:f,children:[x.jsx("input",{type:"text",value:r,onChange:m=>s(m.target.value),className:"w-full max-w-sm p-3 text-center text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition",placeholder:"Donnez votre indice..."}),x.jsx("button",{type:"submit",className:"mt-3 px-8 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition",children:"Soumettre"})]})]})]})}function U2({game:n,myPlayerInfo:e,onVote:t}){const r=ke.useMemo(()=>n.players.filter(s=>!s.isEliminated).sort(()=>Math.random()-.5),[n.players]);return x.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg shadow-xl",children:[x.jsxs("div",{className:"mb-6",children:[x.jsx("h3",{className:"text-xl font-semibold mb-3 text-center",children:"Récapitulatif des indices :"}),x.jsx("div",{className:"grid grid-cols-2 gap-2 text-center",children:n.turnOrder.map(s=>n.clues[s]&&x.jsxs("div",{className:"bg-gray-900 p-2 rounded",children:[x.jsx("p",{className:"font-mono text-lg",children:n.clues[s]}),x.jsx("p",{className:"text-xs text-gray-400",children:n.players.find(a=>a.uid===s)?.pseudo})]},s))})]}),n.eliminatedPlayer&&x.jsx("div",{className:"text-center bg-red-900/50 p-3 rounded-lg mb-6",children:x.jsxs("p",{children:[n.eliminatedPlayer.pseudo," a été éliminé. C'était un ",x.jsx("span",{className:"font-bold",children:n.eliminatedPlayer.role}),"."]})}),x.jsx("h3",{className:"text-xl font-semibold mb-4 text-center",children:"Votez pour éliminer un joueur"}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:r.map(s=>x.jsxs("button",{onClick:()=>t(s.uid),disabled:e.hasVoted||e.isEliminated||s.uid===e.uid,className:"w-full p-4 bg-gray-700 rounded-lg text-left transition hover:bg-indigo-800 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed",children:[x.jsx("p",{className:"font-semibold",children:s.pseudo}),s.hasVoted&&x.jsx("p",{className:"text-xs text-gray-400",children:"A voté"})]},s.uid))}),e.hasVoted&&x.jsx("p",{className:"text-center text-green-400 mt-4",children:"Vous avez voté. En attente des autres joueurs..."})]})}function j2({game:n,myPlayerInfo:e,onGuess:t}){const[r,s]=ke.useState(""),a=e.role==="Mr. White",u=d=>{d.preventDefault(),r.trim()&&t(r)};return x.jsxs("div",{className:"text-center bg-gray-800 p-8 rounded-lg",children:[x.jsx("h2",{className:"text-3xl font-bold text-yellow-400 mb-4",children:"Tour de Mr. White !"}),a?x.jsxs("form",{onSubmit:u,children:[x.jsx("p",{className:"text-lg mb-4",children:"L'Undercover a été démasqué ! C'est votre chance. Devinez le mot des Civils pour gagner."}),x.jsx("input",{type:"text",value:r,onChange:d=>s(d.target.value),className:"w-full max-w-sm p-3 text-center text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none transition",placeholder:"Entrez votre proposition"}),x.jsx("button",{type:"submit",className:"mt-4 px-8 py-3 text-lg font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition",children:"Valider"})]}):x.jsx("p",{className:"text-lg",children:"En attente de la proposition de Mr. White..."})]})}function z2({game:n,isHost:e,onPlayAgain:t,onLeave:r,userProfile:s,pointsGained:a,initialScore:u}){return x.jsxs("div",{className:"text-center bg-gray-800 p-8 rounded-lg",children:[x.jsx("h2",{className:"text-5xl font-bold text-yellow-400 mb-4",children:"Partie Terminée !"}),x.jsxs("p",{className:"text-3xl text-white mb-8",children:["Les ",x.jsx("span",{className:"font-bold",children:n.winner})," ont gagné !"]}),x.jsxs("div",{className:"w-full max-w-md mx-auto bg-gray-700 p-6 rounded-lg",children:[x.jsx("h3",{className:"text-xl font-bold mb-4",children:"Rôles finaux :"}),n.players.map(d=>x.jsxs("div",{className:`flex justify-between items-center p-2 ${d.isEliminated?"opacity-60":""}`,children:[x.jsx("span",{className:`font-semibold ${d.isEliminated?"line-through":""}`,children:d.pseudo}),x.jsx("span",{className:d.role==="Civilian"?"text-blue-400":d.role==="Undercover"?"text-red-400":"text-gray-200",children:d.role})]},d.uid)),s&&x.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-600 text-center",children:[x.jsx("h3",{className:"text-xl font-bold text-yellow-400 mb-2",children:"Votre Score"}),x.jsxs("p",{className:"text-2xl text-white",children:[u," + ",x.jsx("span",{className:"font-bold text-green-400",children:a})," = ",s.score]})]})]}),x.jsxs("div",{className:"flex justify-center space-x-4 mt-8",children:[e&&x.jsx("button",{onClick:t,className:"px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition",children:"Rejouer"}),x.jsx("button",{onClick:r,className:"px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition",children:"Quitter"})]})]})}function B2({setScreen:n,setLocalGameData:e}){const[t,r]=ke.useState([{name:""},{name:""},{name:""}]),[s,a]=ke.useState(""),u=(v,E)=>{const T=[...t];T[v].name=E,r(T)},d=()=>{t.length<10&&r([...t,{name:""}])},f=v=>{t.length>3&&r(t.filter((E,T)=>T!==v))},m=()=>{if(t.some(E=>E.name.trim()==="")){a("Tous les joueurs doivent avoir un nom.");return}a("");const v=t.map((E,T)=>({...E,id:T,score:0}));e({players:v}),n("offlineGame")};return x.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4",children:[x.jsx("div",{className:"absolute top-4 left-4",children:x.jsx("button",{onClick:()=>n("welcome"),className:"px-4 py-2 text-sm font-semibold bg-gray-600 rounded-lg hover:bg-gray-700 transition",children:"Retour"})}),x.jsxs("div",{className:"w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg",children:[x.jsx("h1",{className:"text-3xl font-bold text-center text-indigo-400",children:"Configuration Hors Ligne"}),x.jsx("p",{className:"text-center text-gray-400",children:"Entrez le nom des joueurs (3-10)."}),x.jsx("div",{className:"space-y-3 max-h-96 overflow-y-auto pr-2",children:t.map((v,E)=>x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsxs("span",{className:"text-gray-400 font-semibold",children:[E+1,"."]}),x.jsx("input",{type:"text",placeholder:`Nom du Joueur ${E+1}`,value:v.name,onChange:T=>u(E,T.target.value),className:"flex-grow p-3 text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-indigo-500 outline-none transition"}),x.jsx("button",{onClick:()=>f(E),disabled:t.length<=3,className:"p-2 text-red-400 hover:text-red-300 disabled:text-gray-600 disabled:cursor-not-allowed",children:x.jsx(N2,{className:"h-6 w-6"})})]},E))}),x.jsxs("div",{className:"flex justify-between items-center",children:[x.jsxs("button",{onClick:d,disabled:t.length>=10,className:"flex items-center space-x-2 px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:bg-gray-500 transition",children:[x.jsx(x2,{className:"h-5 w-5"}),x.jsx("span",{children:"Ajouter"})]}),x.jsx("button",{onClick:m,className:"px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition",children:"Commencer"})]}),s&&x.jsx("p",{className:"text-red-400 text-center",children:s})]})]})}function W2({localGameData:n,setScreen:e}){const[t,r]=ke.useState([]),[s,a]=ke.useState("setup"),[u,d]=ke.useState(0),[f,m]=ke.useState(!1),[v,E]=ke.useState(null),[T,D]=ke.useState([]),[V,q]=ke.useState(""),[B,J]=ke.useState("");ke.useEffect(()=>{re(n.players)},[]);const re=S=>{const R=cd[Math.floor(Math.random()*cd.length)];q(R.civilian);let k=[...S];const N=k.length>=5;let C=[];for(N&&C.push("Mr. White"),C.push("Undercover");C.length<k.length;)C.push("Civilian");for(let Re=C.length-1;Re>0;Re--){const Ke=Math.floor(Math.random()*(Re+1));[C[Re],C[Ke]]=[C[Ke],C[Re]]}let me=k.map((Re,Ke)=>{const Te=C[Ke];let Y="";return Te==="Civilian"&&(Y=R.civilian),Te==="Undercover"&&(Y=R.undercover),{...Re,role:Te,word:Y,isEliminated:!1}});for(let Re=me.length-1;Re>0;Re--){const Ke=Math.floor(Math.random()*(Re+1));[me[Re],me[Ke]]=[me[Ke],me[Re]]}r(me),E(null),D([]),d(0),a("reveal")},ae=()=>m(!0),pe=()=>{m(!1),u<t.length-1?d(u+1):a("playing")},Me=S=>{let R=t.map(k=>k.id===S?{...k,isEliminated:!0}:k);r(R),we(R)},we=S=>{const R=S.filter(me=>!me.isEliminated),k=R.filter(me=>me.role==="Undercover"),N=R.find(me=>me.role==="Mr. White");let C=null;if(R.length<=2&&k.length>0)C="Undercovers";else if(k.length===0)if(N){a("mrWhiteGuess");return}else C="Civilians";C&&(E(C),A(C,S),a("finished"))},O=()=>{let S=B.trim().toLowerCase()===V.toLowerCase()?"Mr. White":"Civilians";E(S),A(S,t),a("finished")},A=(S,R)=>{let k=[...R],N=[],C=0,me="";S==="Undercovers"?(C=10,me="Undercover"):S==="Civilians"?(C=2,me="Civilian"):S==="Mr. White"&&(C=8,me="Mr. White"),k=k.map(Re=>Re.role===me||S==="Undercovers"&&Re.role==="Mr. White"?(N.push({name:Re.name,points:C}),{...Re,score:Re.score+C}):Re),r(k),D(N)};if(s==="reveal"){const S=t[u];return S?x.jsx("div",{className:"flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 p-4",children:f?x.jsxs(x.Fragment,{children:[x.jsx("p",{className:"text-lg text-gray-300",children:"Votre mot :"}),S.role!=="Mr. White"?x.jsx("p",{className:"text-5xl font-bold text-white tracking-widest uppercase mb-10",children:S.word}):x.jsx("p",{className:"text-xl text-gray-300 mb-10",children:"Vous n'avez pas de mot. Votre objectif est de deviner le mot des Civils !"}),x.jsx("button",{onClick:pe,className:"px-10 py-4 text-2xl font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition",children:u<t.length-1?"Cacher et passer":"Commencer à jouer"})]}):x.jsxs(x.Fragment,{children:[x.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Passez le téléphone à"}),x.jsx("p",{className:"text-6xl font-extrabold text-indigo-400 mb-8",children:S.name}),x.jsx("button",{onClick:ae,className:"px-10 py-4 text-2xl font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition transform hover:scale-105",children:"Voir mon mot"})]})}):null}if(s==="playing")return x.jsx("div",{className:"min-h-screen bg-gray-900 text-white p-4 md:p-8",children:x.jsxs("div",{className:"max-w-2xl mx-auto",children:[x.jsx("h1",{className:"text-3xl font-bold text-center text-indigo-400 mb-6",children:"Que la discussion commence !"}),x.jsx("p",{className:"text-center text-gray-400 mb-8",children:"Discutez et votez pour éliminer un joueur."}),x.jsx("div",{className:"space-y-3",children:t.map(S=>x.jsxs("div",{className:`p-4 rounded-lg flex justify-between items-center transition ${S.isEliminated?"bg-red-900 opacity-50":"bg-gray-800"}`,children:[x.jsxs("div",{children:[x.jsx("p",{className:`text-xl font-semibold ${S.isEliminated?"line-through":""}`,children:S.name}),S.isEliminated&&x.jsx("p",{className:"text-sm text-red-300",children:S.role})]}),!S.isEliminated&&x.jsx("button",{onClick:()=>Me(S.id),className:"px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition",children:"Éliminer"})]},S.id))})]})});if(s==="mrWhiteGuess"){const S=t.find(R=>R.role==="Mr. White");return x.jsxs("div",{className:"flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 p-4",children:[x.jsx("h2",{className:"text-3xl font-bold text-yellow-400 mb-4",children:"Tour de Mr. White !"}),x.jsxs("p",{className:"text-lg mb-4",children:["Passez le téléphone à ",x.jsx("span",{className:"font-bold",children:S.name}),"."]}),x.jsx("p",{className:"text-lg mb-6",children:"Vous devez deviner le mot des Civils pour gagner."}),x.jsx("input",{type:"text",value:B,onChange:R=>J(R.target.value),className:"w-full max-w-sm p-3 text-center text-white bg-gray-700 rounded-lg border border-gray-600 focus:border-yellow-500 outline-none transition",placeholder:"Entrez votre proposition"}),x.jsx("button",{onClick:O,className:"mt-4 px-8 py-3 text-lg font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition",children:"Valider"})]})}return s==="finished"?x.jsxs("div",{className:"flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 p-4",children:[x.jsx("h2",{className:"text-5xl font-bold text-yellow-400 mb-4",children:"Partie Terminée !"}),x.jsxs("p",{className:"text-3xl text-white mb-6",children:["Les ",x.jsx("span",{className:"font-bold",children:v})," ont gagné !"]}),x.jsxs("div",{className:"w-full max-w-md bg-gray-800 p-4 rounded-lg mb-6",children:[x.jsx("h3",{className:"text-xl font-bold mb-3",children:"Points de la manche"}),T.map((S,R)=>x.jsxs("p",{className:"text-lg",children:[S.name," ",x.jsxs("span",{className:"font-bold text-green-400",children:["+",S.points," points"]})]},R))]}),x.jsxs("div",{className:"w-full max-w-md bg-gray-800 p-6 rounded-lg",children:[x.jsx("h3",{className:"text-xl font-bold mb-4",children:"Scores Totaux"}),t.sort((S,R)=>R.score-S.score).map(S=>x.jsxs("div",{className:"flex justify-between items-center p-2 text-lg",children:[x.jsx("span",{className:"font-semibold",children:S.name}),x.jsx("span",{className:"font-bold text-yellow-400",children:S.score})]},S.id))]}),x.jsxs("div",{className:"flex space-x-4 mt-8",children:[x.jsx("button",{onClick:()=>re(t),className:"px-8 py-3 text-lg font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition",children:"Rejouer"}),x.jsx("button",{onClick:()=>e("welcome"),className:"px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition",children:"Menu Principal"})]})]}):null}GS.createRoot(document.getElementById("root")).render(x.jsx(ke.StrictMode,{children:x.jsx(b2,{})}));
