(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5131],{81372:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0m3.03-.75c-.962-1.665-3.366-1.665-4.329 0L.918 10.749c-.963 1.666.24 3.751 2.165 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0",clipRule:"evenodd"}))},58405:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))},16730:function(e,t,n){"use strict";n.d(t,{x:function(){return u}});var r=n(97582),i=n(67294),a=n(32782),o=n(88267);n(26154);let l=(0,a.Ge)("box"),u=i.forwardRef(function(e,t){var{as:n,children:a,qa:u,className:c,width:s,height:f,minWidth:d,minHeight:v,maxHeight:m,maxWidth:p,position:g,style:x,spacing:h,overflow:b}=e,w=(0,r._T)(e,["as","children","qa","className","width","height","minWidth","minHeight","maxHeight","maxWidth","position","style","spacing","overflow"]);let y=Object.assign({width:s,height:f,minWidth:d,minHeight:v,maxHeight:m,maxWidth:p,position:g},x);return i.createElement(n||"div",Object.assign({},w,{"data-qa":u,style:y,ref:t,className:l({overflow:b},h?(0,o.sp)(h,c):c)}),a)})},16468:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var r=n(97582),i=n(67294),a=n(32782),o=n(16730),l=n(23507),u=n(21245);n(69589);let c=(0,a.Ge)("flex"),s=i.forwardRef(function(e,t){let{as:n,direction:a,grow:s,basis:f,children:d,style:v,alignContent:m,alignItems:p,alignSelf:g,justifyContent:x,justifyItems:h,justifySelf:b,shrink:w,wrap:y,inline:E,gap:j,gapRow:C,className:N,space:S,centerContent:O}=e,z=(0,r._T)(e,["as","direction","grow","basis","children","style","alignContent","alignItems","alignSelf","justifyContent","justifyItems","justifySelf","shrink","wrap","inline","gap","gapRow","className","space","centerContent"]),{getClosestMediaProps:R,theme:{spaceBaseSize:k}}=(0,l.l)(),M=e=>"object"==typeof e&&null!==e?R(e):e,I=M(j),A=I?k*Number(I):void 0,_=M(C)||I,G=_?k*Number(_):void 0,B=M(S),L=j||C||!B?void 0:(0,u.cA)(B);return i.createElement(o.x,Object.assign({as:n||"div",className:c({"center-content":O,inline:E,s:L},N),ref:t,style:Object.assign({flexDirection:M(a),flexGrow:!0===s?1:s,flexWrap:!0===y?"wrap":y,flexBasis:f,flexShrink:w,columnGap:A,rowGap:G,alignContent:M(m),alignItems:M(p),alignSelf:M(g),justifyContent:M(x),justifyItems:M(h),justifySelf:M(b)},v)},z),S?i.Children.map(d,e=>e?i.createElement("div",{className:c("wr")},e):e):d)})},76820:function(e,t,n){"use strict";n.d(t,{A:function(){return i},Q:function(){return r}});let r={"0.5":"half"},i={breakpoints:{s:576,m:768,l:1080,xl:1200,xxl:1400,xxxl:1920},spaceBaseSize:4,components:{container:{gutters:"3",media:{l:{gutters:"5"}}}}}},47989:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(67294),i=n(76820);let a=r.createContext({theme:i.A,activeMediaQuery:"s"})},23507:function(e,t,n){"use strict";n.d(t,{l:function(){return o}});var r=n(67294),i=n(47989),a=n(21245);let o=()=>{let{activeMediaQuery:e,theme:t}=r.useContext(i.V),{isMediaActive:n,getClosestMediaProps:o}=r.useMemo(()=>({isMediaActive:(0,a.ur)(e),getClosestMediaProps:(0,a.GD)(e)}),[e]);return{theme:t,activeMediaQuery:e,isMediaActive:n,getClosestMediaProps:o}}},88267:function(e,t,n){"use strict";n.d(t,{W:function(){return o},sp:function(){return l}});var r=n(32782),i=n(21245);n(4676);let a=(0,r.Ge)("s"),o=(e,t)=>{let n=[];for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let r=e[t];void 0!==r&&n.push(a(`${t}_${(0,i.cA)(r)}`))}return t&&n.push(t),n.join(" ")},l=o},21245:function(e,t,n){"use strict";n.d(t,{GD:function(){return l},cA:function(){return u},ur:function(){return a}});var r=n(76820);let i={s:0,m:1,l:2,xl:3,xxl:4,xxxl:5},a=e=>t=>e in i&&i[e]-i[t]>=0,o=["s","m","l","xl","xxl","xxxl"],l=e=>(t={})=>{if(!e)return;let n=e;for(;n;){if(t[n])return t[n];n=o[i[n]-1]}},u=e=>e in r.Q?r.Q[e]:String(e)},11197:function(e,t,n){"use strict";n.d(t,{o:function(){return N}});var r=n(67294),i=n(81372),a=n(70033),o=n(38071),l=n(93258),u=n(64770),c=n(59854),s=n.n(c),f=n(23493),d=n.n(f);function v(e,t){let[n,i]=r.useState({width:0,height:0});return r.useLayoutEffect(()=>{if(!(null==e?void 0:e.current))return;let t=new ResizeObserver(d()(e=>{if(!Array.isArray(e))return;let t=e[0];if(t.borderBoxSize){let e=t.borderBoxSize[0]?t.borderBoxSize[0]:t.borderBoxSize;i({width:s()(e.inlineSize,2),height:s()(e.blockSize,2)})}else{let e=t.target;i({width:s()(e.offsetWidth,2),height:s()(e.offsetHeight,2)})}},16));return t.observe(e.current),()=>{t.disconnect()}},[e,t]),n}var m=n(1960),p=n(94294),g=n(76657),x=n(77950),h=n(14182),b=n(94088);let w=(0,g.Ge)("text-input"),y=r.forwardRef(function({placement:e,children:t,onClick:n},i){return t?r.createElement("div",{ref:i,className:w("additional-content",{placement:e}),onClick:n},t):null}),E=(0,g.Ge)("text-input");function j(e){let{controlProps:t,controlRef:n,type:i,name:a,id:o,tabIndex:l,autoComplete:u,placeholder:c,value:s,defaultValue:f,autoFocus:d,disabled:v,onChange:m,onFocus:p,onBlur:g,onKeyDown:x,onKeyUp:h,onKeyPress:b}=e;return r.createElement("input",Object.assign({},t,{ref:n,className:E("control",{type:"input"},t.className),type:i,name:a,id:o,tabIndex:l,placeholder:c,value:s,defaultValue:f,autoFocus:d,autoComplete:u,onChange:m,onFocus:p,onBlur:g,onKeyDown:x,onKeyUp:h,onKeyPress:b,disabled:null!=v?v:t.disabled}))}n(95738);let C=(0,g.Ge)("text-input"),N=r.forwardRef(function(e,t){let{view:n="normal",size:c="m",pin:s="round-round",name:f,value:d,defaultValue:g,label:w,disabled:E=!1,hasClear:N=!1,error:S,errorMessage:O,errorPlacement:z="outside",validationState:R,autoComplete:k,id:M,tabIndex:I,style:A,className:_,qa:G,controlProps:B,leftContent:L,rightContent:P,startContent:q=L,endContent:$=P,note:D,onUpdate:W,onChange:Z}=e,{errorMessage:J,errorPlacement:T,validationState:F}=(0,b.II)({error:S,errorMessage:O,errorPlacement:z,validationState:R}),[K,Q]=(0,a.z)(d,null!=g?g:"",W),V=r.useRef(null),H=(0,u.q)({initialValue:K,onReset:Q}),U=(0,o.c)(e.controlRef,V,H),X=r.useRef(null),Y=r.useRef(null),ee=(0,b.O_)(F),et=!!w,en="invalid"===F&&!!J&&"outside"===T,er="invalid"===F&&!!J&&"inside"===T,ei=!!(N&&!E&&K),ea=!!q,eo=!!$,el=et&&!M&&!f&&void 0===k,eu=(0,l.u)(),ec=et?M||eu:M,es=v(et?X:null,c),ef=v(ea?Y:null,c),ed=(0,l.u)(),ev=(0,l.u)(),em=[null==B?void 0:B["aria-describedby"],D?ev:void 0,en?ed:void 0].filter(Boolean).join(" "),ep=Object.assign(Object.assign({},B),{style:Object.assign(Object.assign({},null==B?void 0:B.style),et&&es.width?{paddingInlineStart:`${es.width}px`}:{}),"aria-invalid":"invalid"===F||void 0,"aria-describedby":em||void 0}),eg={id:ec,tabIndex:I,name:f,onChange(e){Q(e.target.value),Z&&Z(e)},autoComplete:el?"off":(0,b.xp)(k),controlProps:ep},ex=e=>{var t,n;let r=!e.currentTarget.contains(document.activeElement)&&e.currentTarget.contains(e.target),i=!!(null===(t=document.getSelection())||void 0===t?void 0:t.toString());r&&!i&&(null===(n=V.current)||void 0===n||n.focus())};return r.createElement("span",{ref:t,style:A,className:C({view:n,size:c,disabled:E,state:ee,pin:"clear"===n?void 0:s,"has-clear":ei,"has-start-content":ea,"has-end-content":ei||eo},_),"data-qa":G},r.createElement("span",{className:C("content")},ea&&r.createElement(y,{ref:Y,placement:"start",onClick:ex},q),et&&r.createElement("label",{ref:X,style:{insetInlineStart:ea?ef.width:void 0,maxWidth:`calc(50% - ${ef.width}px)`},className:C("label"),title:w,htmlFor:ec},`${w}`),r.createElement(j,Object.assign({},e,eg,{controlRef:U})),ei&&r.createElement(x.C,{size:(0,x.X)(c),onClick:e=>{Q("");let t=V.current;if(t){let n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",Z&&Z(n)}},className:C("clear",{size:c})}),eo&&r.createElement(y,{placement:"end",onClick:ex},$),er&&r.createElement(p.J,{content:J},r.createElement("span",{"data-qa":b.eP},r.createElement(m.J,{data:i.Z,className:C("error-icon"),size:"s"===c?12:16})))),r.createElement(h.Z,{note:D,errorMessage:en?J:null,noteId:ev,errorMessageId:ed}))})},77950:function(e,t,n){"use strict";n.d(t,{C:function(){return m},X:function(){return v}});var r=n(67294),i=n(58405),a=n(51525),o=n(1960),l=n(76657),u=n(53263),c=JSON.parse('{"label_clear-button":"Clear"}'),s=JSON.parse('{"label_clear-button":"Очистить"}'),f=(0,u.e)({en:c,ru:s},`${l.A7}clear-button`);n(98029);let d=(0,l.Ge)("clear-button"),v=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw Error(`Unknown text input size "${e}"`)}},m=e=>{let{size:t,className:n,onClick:l}=e;return r.createElement(a.z,{size:t,className:d(null,n),onClick:l,extraProps:{onMouseDown:e=>{e.preventDefault()},"aria-label":f("label_clear-button")}},r.createElement(o.J,{data:i.Z,size:16}))}},14182:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),i=n(76657),a=n(94088);n(7567);let o=(0,i.Ge)("outer-additional-content"),l=({errorMessage:e,note:t,noteId:n,errorMessageId:i})=>e||t?r.createElement("div",{className:o()},e&&r.createElement("div",{className:o("error"),id:i,"data-qa":a.fz},e),t&&r.createElement("div",{className:o("note"),id:n},t)):null},94088:function(e,t,n){"use strict";n.d(t,{II:function(){return l},O_:function(){return o},eP:function(){return i},fz:function(){return r},xp:function(){return a}});let r="control-error-message-qa",i="control-error-icon-qa",a=e=>"boolean"==typeof e?e?"on":"off":e,o=e=>"invalid"===e?"error":void 0,l=e=>{let t,n;let{error:r,errorMessage:i,errorPlacement:a,validationState:o}=e;return"string"==typeof r&&(t=r),i&&(t=i),("invalid"===o||r)&&(n="invalid"),{errorMessage:t,errorPlacement:a,validationState:n}}},53263:function(e,t,n){"use strict";n.d(t,{e:function(){return l}});var r=n(98085),i=n(82894);let a=(0,i.iE)().lang,o=new r.m({lang:a,fallbackLang:a});function l(e,t){return Object.entries(e).forEach(([e,n])=>o.registerKeyset(e,t,n)),o.keyset(t)}(0,i.Pe)(e=>{o.setLang(e.lang)})},44286:function(e){e.exports=function(e){return e.split("")}},14259:function(e){e.exports=function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}},40180:function(e,t,n){var r=n(14259);e.exports=function(e,t,n){var i=e.length;return n=void 0===n?i:n,!t&&n>=i?e:r(e,t,n)}},98805:function(e,t,n){var r=n(40180),i=n(62689),a=n(83140),o=n(79833);e.exports=function(e){return function(t){var n=i(t=o(t))?a(t):void 0,l=n?n[0]:t.charAt(0),u=n?r(n,1).join(""):t.slice(1);return l[e]()+u}}},89179:function(e,t,n){var r=n(55639),i=n(40554),a=n(14841),o=n(79833),l=r.isFinite,u=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=a(e),(n=null==n?0:u(i(n),292))&&l(e)){var r=(o(e)+"e").split("e");return+((r=(o(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},62689:function(e){var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},83140:function(e,t,n){var r=n(44286),i=n(62689),a=n(676);e.exports=function(e){return i(e)?a(e):r(e)}},676:function(e){var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\ud83c[\udffb-\udfff]",i="[^"+t+"]",a="(?:\ud83c[\udde6-\uddff]){2}",o="[\ud800-\udbff][\udc00-\udfff]",l="(?:"+n+"|"+r+")?",u="[\\ufe0e\\ufe0f]?",c="(?:\\u200d(?:"+[i,a,o].join("|")+")"+u+l+")*",s=RegExp(r+"(?="+r+")|(?:"+[i+n+"?",n,a,o,"["+t+"]"].join("|")+")"+(u+l+c),"g");e.exports=function(e){return e.match(s)||[]}},48403:function(e,t,n){var r=n(79833),i=n(11700);e.exports=function(e){return i(r(e).toLowerCase())}},85564:function(e,t,n){var r=n(21078);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},59854:function(e,t,n){var r=n(89179)("round");e.exports=r},18601:function(e,t,n){var r=n(14841),i=1/0;e.exports=function(e){return e?(e=r(e))===i||e===-i?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},40554:function(e,t,n){var r=n(18601);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},11700:function(e,t,n){var r=n(98805)("toUpperCase");e.exports=r},26154:function(){},69589:function(){},4676:function(){},95738:function(){},98029:function(){},7567:function(){}}]);