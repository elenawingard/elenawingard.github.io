"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_react-shared_hooks_use-virtual-dynamic_ts-app_assets_modules_react-shared_-acdea4"],{22125:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(67294),o=r(78720);let i=e=>e;function a(e){let t=n.useRef({}),r=n.useRef({}),a=(e,r)=>{t.current[e](r)},s=n.useRef(a);s.current=a;let c=n.useRef(new ResizeObserver(e=>{for(let t of e){let e=t.target,r="data-key",n=e.getAttribute(r);if(null===n)throw Error(`Value not found, for '${r}' attribute`);s.current(n,e)}}));n.useEffect(()=>{let e=c.current;return()=>{e.disconnect()}},[]);let{size:l,keyExtractor:u=i}=e,d=n.useMemo(()=>{let e=e=>t=>{r.current[e]&&c.current.unobserve(r.current[e]),t&&(s.current(e,t),c.current.observe(t)),r.current[e]=t},t={};for(let r=0;r<l;r++){let n=u(r);t[n]=e(n)}return t},[l,u]),f=(0,o.o)(e),h=f.virtualItems.map(e=>(t.current[e.key]=e.measureRef,{...e,measureRef:d[e.key]}));return{...f,virtualItems:h}}},15387:(e,t,r)=>{r.d(t,{F:()=>i});var n=r(67294),o=r(78720);function i({scrollToFn:e,horizontal:t,parentRef:r,useVirtualImpl:i=o.o,...s}){let c=(0,n.useRef)(window),l=(0,n.useCallback)(()=>{let e=r.current?.getBoundingClientRect(),n=e?.top??0,o=e?.left??0;return t?-1*o:-1*n},[t,r]),u=(0,n.useCallback)(e=>{let n=(r.current?.getBoundingClientRect().top??0)+window.scrollY,o=e+n;c.current?.scroll({top:t?0:o,left:t?o:0})},[t,r]);return i({...s,horizontal:t,parentRef:r,scrollToFn:e||u,onScrollElement:c,scrollOffsetFn:l,useObserver:()=>a(c)})}function a(e){let[t,r]=(0,n.useState)({height:0,width:0}),o=e.current;return(0,n.useLayoutEffect)(()=>{if(!o)return;let e=()=>{let e={height:o.innerHeight,width:o.innerWidth};r(t=>t.height!==e.height||t.width!==e.width?e:t)};return e(),o.addEventListener("resize",e),()=>{o.removeEventListener("resize",e)}},[o]),t}},89359:(e,t,r)=>{function n(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=n("meta[name=analytics-location]");return e?e.content:window.location.pathname}function i(){let e=n("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=n("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}function a(){return`${window.location.protocol}//${window.location.host}${o()+i()}`}r.d(t,{S:()=>a})},4751:(e,t,r)=>{r.d(t,{AF:()=>E,vC:()=>N,fQ:()=>P});var n,o,i,a,s,c=r(85893),l=r(85529),u=r(98833),d=r(42483),f=r(50919),h=r(67294),p=r(50901),m=r(74121),x=r(66280),y=r(57294),g=r(38490),b=r(73290),w=r(97011);function v({checkRun:e}){let{icon:t,iconColor:r}=S(e.icon),n="in_progress"===e.state;return(0,c.jsxs)(d.Z,{"data-testid":"check-run-item",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",height:"38px",py:2,pr:3,pl:"12px",alignItems:"baseline"},children:[n?C():(0,c.jsx)(u.Z,{icon:t,sx:{color:r,margin:"0px 7px",alignSelf:"center"}}),(0,c.jsx)(g.Z,{"aria-label":e.avatarDescription,direction:"e",children:(0,c.jsx)(b.Z,{href:e.avatarUrl,sx:{mr:2},children:(0,c.jsx)(y.O,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})}),(0,c.jsxs)(w.Z,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"13px",color:"fg.muted"},children:[(0,c.jsxs)(w.Z,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,c.jsx)(w.Z,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,c.jsxs)(w.Z,{children:[" ","- ",e.pending?(0,c.jsx)(w.Z,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,c.jsx)(b.Z,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}function S(e){switch(e){case"check":return{icon:l.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:l.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:l.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:l.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:l.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:l.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:l.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:l.AlertIcon,iconColor:"danger.fg"};default:return{icon:l.XIcon,iconColor:"danger.fg"}}}function C(){return(0,c.jsx)(d.Z,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,c.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,c.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,c.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,c.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})})}try{(n=v).displayName||(n.displayName="CheckRunItem")}catch{}function k({checkRuns:e}){return(0,c.jsx)(d.Z,{sx:{display:"flex",flexDirection:"column",maxHeight:"230px",overflow:"auto"},children:e.map((e,t)=>(0,c.jsx)(v,{checkRun:e},t))})}try{(o=k).displayName||(o.displayName="ChecksStatusBadgeFooter")}catch{}function j({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,c.jsx)(w.Z,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,c.jsx)(w.Z,{sx:{color:"checks.donutError",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,c.jsx)(w.Z,{sx:{color:"checks.donutPending",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,c.jsx)(w.Z,{sx:{color:"checks.donutError",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{(i=j).displayName||(i.displayName="HeaderState")}catch{}function E(e){let{combinedStatus:t,isOpen:r,onDismiss:n}=e,o=t?(0,c.jsx)(j,{checksHeaderState:t.checksHeaderState}):"Loading...";return r?(0,c.jsx)(x.V,{onClose:n,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",borderRadius:0},title:o,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,c.jsx)(x.V.Body,{sx:{padding:0},children:(0,c.jsx)(p.S,{sx:{padding:0},children:t?(0,c.jsx)(k,{checkRuns:t.checkRuns}):(0,c.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,c.jsx)(m.Z,{size:"medium"})})})})}):null}try{(a=E).displayName||(a.displayName="CheckStatusDialog")}catch{}let T={success:{circled:l.CheckCircleIcon,filled:l.CheckCircleFillIcon,default:l.CheckIcon,color:"checks.donutSuccess"},pending:{circled:l.CircleIcon,filled:l.DotFillIcon,default:l.DotFillIcon,color:"checks.donutPending"},error:{circled:l.XCircleIcon,filled:l.XCircleFillIcon,default:l.XIcon,color:"checks.donutError"}};function N(e){let{statusRollup:t,combinedStatus:r,variant:n="default",disablePopover:o,size:i="medium"}=e,[a,s]=(0,h.useState)(!1),l=(0,h.useRef)(null),p=T[t],{icon:m,iconColor:x}={icon:p?.[n]||T.error[n],iconColor:p?.color||T.error.color};return o?(0,c.jsx)("span",{"data-testid":"checks-status-badge-icon-only",children:(0,c.jsx)(u.Z,{icon:m,"aria-label":"See all checks",sx:{color:x}})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.Z,{onClick:()=>{s(!0),e.onWillOpenPopup},onMouseEnter:e.onWillOpenPopup,children:(0,c.jsx)(f.h,{"data-testid":"checks-status-badge-icon",icon:m,variant:"invisible",size:i,"aria-label":r?.checksStatusSummary??t,sx:{py:0,px:0,mr:2,svg:{color:x},":hover:not([disabled])":{bg:"pageHeaderBg"}},ref:l})}),a&&(0,c.jsx)(E,{combinedStatus:r,isOpen:a,onDismiss:()=>{s(!1),l.current?.focus()}})]})}try{(s=N).displayName||(s.displayName="ChecksStatusBadge")}catch{}var R=r(78212),I=r(89445);function P(e,t){let[r,n]=(0,h.useState)(),[o,i]=(0,h.useState)(),a=(0,h.useCallback)(async()=>{if(o!==e&&(i(e),n(void 0),e)){let r=(0,R.S$)(t,e),o=await (0,I.v)(r);n(await o.json())}},[e,o,t]);return[r,a]}},24601:(e,t,r)=>{r.d(t,{aJ:()=>j,cI:()=>S,eK:()=>g});var n=r(82918),o=r(49237),i=r(28382),a=r(89359),s=r(68202),c=r(53729),l=r(86283),u=r(46426);let d=!1,f=0,h=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message}function x(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function g(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!m(e)){if(R(e))return;let r=Error(),n=x(e),o={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${n}`,stacktrace:S(r)};b(v(o,t));return}y(e)||b(v(w(e),t))}else y(e)||b(v(w(e),t))}async function b(e){if(!T())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(k(e.error.stacktrace)){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:S(e)}}function v(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,s.wP)(),timeSinceLoad:Math.round(Date.now()-h),user:j()||void 0,bundler:c.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function S(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let C=/(chrome|moz|safari)-extension:\/\//;function k(e){return e.some(e=>C.test(e.filename)||C.test(e.function))}function j(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,n.b)();return`anonymous-${t}`}let E=!1;function T(){return!E&&!d&&f<10&&(0,o.Gb)()}if(l.iG?.addEventListener("pageshow",()=>E=!1),l.iG?.addEventListener("pagehide",()=>E=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{g(e.data.error)})}let N=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"];function R(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(N.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}},7180:(e,t,r)=>{r.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var n=r(46426),o=r(71643),i=r(24601),a=r(27856),s=r.n(a),c=r(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function l({policy:e,policyName:t,fallback:r,fallbackOnError:a=!1,sanitize:l,silenceErrorReporting:u=!1}){try{if((0,n.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return l&&new Promise(e=>{let r=window.performance.now(),n=s().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==n.length){let a=Error("Trusted Types policy output sanitized"),s=a.stack?.slice(0,1e3),l=i.slice(0,250);(0,c.q)("trusted_types_policy.sanitize",{policyName:t,output:l,stack:s,outputLength:i.length,sanitizedLength:n.length,executionTime:o-r}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!a))throw e}return r}let u={apply:l}},22490:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let i={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},a={createPolicy:(e,t)=>({name:e,...i,...t})},s=globalThis.trustedTypes??a,c=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})},20684:(e,t,r)=>{r.d(t,{o:()=>x});var n,o,i=r(67294),a=r(37169),s=r(69202),c=r(83991),l=r(85893);let u=(0,i.createContext)(null),d=null;function f({children:e,initialMessages:t}){return(0,i.useEffect)(()=>{if(t)for(let[e,r]of t)setTimeout(()=>{h(e,r)},0);return()=>{d=null}}),(0,l.jsx)(u.Provider,{value:m,children:e})}function h(e,t){if(null===d)throw Error('Test helper `dispatchAliveTestMessage` called outside `AliveTestProvider`. Please wrap your component under test in `AliveTestProvider` from "@github-ui/use-alive/test-utils".');let r=Array.from(d.subscribers(e));for(let e of r)e(t)}function p(){return(0,i.useContext)(u)}async function m(e,t){let{SubscriptionSet:n,Topic:o}=await Promise.resolve().then(r.bind(r,21461)),i=o.parse(e);if(!i)throw Error('Invalid channel name. Did you forget to sign it with `signChannel("channel-name")`?');return d||(d=new n),d.add({topic:i,subscriber:t}),{unsubscribe:()=>{d?.delete({topic:i,subscriber:t})}}}try{(n=u).displayName||(n.displayName="AliveTestContext")}catch{}try{(o=f).displayName||(o.displayName="AliveTestProvider")}catch{}function x(e,t){let r=(0,a.Z)(),n=p();(0,i.useEffect)(()=>{let o=()=>{},i=!1;return async function(){if("function"==typeof n){let r=await n(e,t);r&&(o=r.unsubscribe);return}try{let n=await (0,s.G)();if(i)return;let a=(0,c.s)(n,e,t);a?.unsubscribe&&(r()?o=a.unsubscribe:a.unsubscribe())}catch(e){console.error(e)}}(),()=>{i=!0,o()}},[e,t,r,n])}},53664:(e,t,r)=>{r.d(t,{w:()=>s,z:()=>a});var n=r(67294),o=r(95253),i=r(87487);function a(){let e=(0,n.useContext)(i.f);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:r,metadata:a}=e;return{sendAnalyticsEvent:(0,n.useCallback)((e,n,i={})=>{let s={react:!0,app_name:t,category:r,...a};(0,o.q)(e,{...s,...i,target:n})},[t,r,a])}}function s(){let{sendAnalyticsEvent:e}=a();return{sendClickAnalyticsEvent:(0,n.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},98234:(e,t,r)=>{r.d(t,{Z:()=>s});var n,o=r(85893),i=r(42483);function a(){return(0,o.jsx)(i.Z,{"aria-hidden":"true",as:"svg",version:"1.1",viewBox:"0 0 340 84",xmlns:"http://www.w3.org/2000/svg",sx:{bottom:"0 !important",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(50%)",height:"84px",position:"absolute",width:"320px"},children:(0,o.jsxs)("defs",{children:[(0,o.jsxs)("clipPath",{id:"diff-placeholder",children:[(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"67.0175439",x:"0",y:"0"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"100.701754",x:"18.9473684",y:"47.7194983"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"37.8947368",x:"0",y:"71.930126"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"53.3333333",x:"127.017544",y:"48.0703769"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"72.9824561",x:"187.719298",y:"48.0703769"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"76.8421053",y:"0"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"17.8947368",y:"23.8597491"}),(0,o.jsx)("rect",{height:"11.9298746",rx:"2",width:"173.684211",x:"166.315789",y:"23.8597491"})]}),(0,o.jsxs)("linearGradient",{id:"animated-diff-gradient",spreadMethod:"reflect",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.2",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"0.5",stopColor:"#ddd"}),(0,o.jsx)("stop",{offset:"0.8",stopColor:"#eee"}),(0,o.jsx)("stop",{offset:"1",stopColor:"#eee"}),(0,o.jsx)("animateTransform",{attributeName:"y1",dur:"1s",repeatCount:"3",values:"0%; 100%; 0"}),(0,o.jsx)("animateTransform",{attributeName:"y2",dur:"1s",repeatCount:"3",values:"100%; 200%; 0"})]})]})})}let s=a;try{(n=a).displayName||(n.displayName="DiffPlaceholder")}catch{}},69942:(e,t,r)=>{r.d(t,{ZV:()=>h,_G:()=>i,eI:()=>d,xp:()=>f});var n,o,i,a=r(85893),s=r(46263),c=r(67294);!function(e){e[e.small=1]="small",e[e.medium=544]="medium",e[e.large=768]="large",e[e.xlarge=1012]="xlarge",e[e.xxlarge=1280]="xxlarge",e[e.xxxlarge=1350]="xxxlarge",e[e.xxxxlarge=1440]="xxxxlarge"}(i||(i={}));let l=[1440,1350,1280,1012,768,544,1],u=c.createContext({screenSize:1});function d(){return c.useContext(u)}function f({children:e,initialValue:t}){let r=t??h(window.innerWidth),n=(0,c.useRef)(r),[o,i]=(0,c.useState)(r),l=(0,c.useCallback)(()=>{let e=h(window.innerWidth);n.current!==e&&(n.current=e,i(e))},[]);(0,c.useEffect)(()=>{let e=new ResizeObserver((0,s.D)(l));return e.observe(document.documentElement),()=>e.disconnect()},[l]);let d=(0,c.useMemo)(()=>({screenSize:o}),[o]);return(0,a.jsx)(u.Provider,{value:d,children:e})}function h(e){for(let t of l)if(e>=t)return t;return 1}try{(n=u).displayName||(n.displayName="ScreenContext")}catch{}try{(o=f).displayName||(o.displayName="ScreenSizeProvider")}catch{}}}]);
//# sourceMappingURL=app_assets_modules_react-shared_hooks_use-virtual-dynamic_ts-app_assets_modules_react-shared_-acdea4-d2d51b317e6a.js.map