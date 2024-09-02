(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2114],{51693:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))},49179:function(e,t,n){"use strict";n.d(t,{F:function(){return c}});var r=n(67294),a=n(51693),l=n(43671),o=n(32782);n(42554);let i=(0,o.Ge)("arrow-toggle");function c({size:e=16,direction:t="bottom",className:n,qa:o}){return r.createElement("span",{style:{width:e,height:e},className:i({direction:t},n),"data-qa":o},r.createElement(l.J,{data:a.Z,size:e}))}},50254:function(e,t,n){"use strict";n.d(t,{z:function(){return d}});var r=n(67294),a=n(32782),l=n(69110),o=n(42087),i=n(96639),c=n(64200);n(82801);let s=(0,a.Ge)("button"),u=r.forwardRef(function({view:e="normal",size:t="m",pin:n="round-round",selected:a,disabled:l=!1,loading:i=!1,width:c,title:u,tabIndex:d,type:f="button",component:m,href:p,target:h,rel:b,extraProps:g,onClick:x,onMouseEnter:E,onMouseLeave:y,onFocus:w,onBlur:j,children:N,id:O,style:R,className:k,qa:C},P){let A={title:u,tabIndex:d,onClick:x,onClickCapture:r.useCallback(t=>{o.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})},[e]),onMouseEnter:E,onMouseLeave:y,onFocus:w,onBlur:j,id:O,style:R,className:s({view:e,size:t,pin:n,selected:a,disabled:l||i,loading:i,width:c},k),"data-qa":C};return"string"==typeof p||m?r.createElement(m||"a",Object.assign(Object.assign(Object.assign(Object.assign({},g),A),m?{}:{href:p,target:h,rel:"_blank"!==h||b?b:"noopener noreferrer"}),{ref:P,"aria-disabled":l||i}),v(N)):r.createElement("button",Object.assign({},g,A,{ref:P,type:f,disabled:l||i,"aria-pressed":a}),v(N))});u.displayName="Button";let d=Object.assign(u,{Icon:c.E}),f=(0,i.s)(c.E),m=(0,i.s)("span"),p=RegExp(`^${s("icon")}($|\\s+\\w)`);function v(e){let t=r.Children.toArray(e);if(1===t.length){let e=t[0];return f(e)||m(e)&&p.test(e.props.className||"")?e:(0,l.yb)(e)||(0,l.Dc)(e)?r.createElement(d.Icon,{key:"icon"},e):r.createElement("span",{key:"text",className:s("text")},e)}{let e,n,a;let o=[];for(let a of t){let t=(0,l.yb)(a)||(0,l.Dc)(a),i=f(a),u=m(a)&&p.test(a.props.className||"");if(t||i||u){if(e||0!==o.length)n||0===o.length||(n=t?r.createElement(d.Icon,{key:"icon-end",side:"end"},a):i?r.cloneElement(a,{side:"end"}):r.cloneElement(a,{className:s("icon",{side:(0,c.C)("end")},a.props.className)}));else{let n="start";e=t?r.createElement(d.Icon,{key:"icon-start",side:n},a):i?r.cloneElement(a,{side:n}):r.cloneElement(a,{className:s("icon",{side:(0,c.C)(n)},a.props.className)})}}else o.push(a)}return o.length>0&&(a=r.createElement("span",{key:"text",className:s("text")},o)),[e,n,a]}}},64200:function(e,t,n){"use strict";n.d(t,{C:function(){return s},E:function(){return c}});var r=n(67294),a=n(32782),l=n(9042);let o=(0,a.Ge)("button");function i(){(0,l.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}let c=({side:e,className:t,children:n})=>r.createElement("span",{className:o("icon",{side:s(e)},t)},r.createElement("span",{className:o("icon-inner")},n));function s(e){let t=e;return"left"===t&&(i(),t="start"),"right"===t&&(i(),t="end"),t}c.displayName="Button.Icon"},555:function(e,t,n){"use strict";n.d(t,{G:function(){return x}});var r=n(67294),a=n(5031),l=n(77322),o=n(95237),i=n(8682);let c=["bottom-start","bottom","bottom-end","top-start","top","top-end","right-start","right","right-end","left-start","left","left-end"],s={name:"rtlOffsetFix",enabled:!0,phase:"main",requires:["offset"],fn({state:e}){var t;if(!e.placement.startsWith("top")&&!e.placement.startsWith("bottom"))return;let n=null===(t=e.modifiersData.offset)||void 0===t?void 0:t[e.placement];n&&(e.modifiersData.popperOffsets.x-=2*n.x)}};var u=n(86758),d=n(87174),f=n(98484),m=n(32782),p=n(44562),v=n(35860);n(31130);let h=(0,m.Ge)("popup");function b({styles:e,attributes:t,setArrowRef:n}){return r.createElement("div",Object.assign({"data-popper-arrow":!0,ref:n,className:h("arrow"),style:e},t),r.createElement("div",{className:h("arrow-content")},r.createElement("div",{className:h("arrow-circle-wrapper")},r.createElement("div",{className:h("arrow-circle",{left:!0})})),r.createElement("div",{className:h("arrow-circle-wrapper")},r.createElement("div",{className:h("arrow-circle",{right:!0})}))))}let g=(0,m.Ge)("popup");function x({keepMounted:e=!1,hasArrow:t=!1,offset:n=[0,4],open:m,placement:h,anchorRef:x,disableEscapeKeyDown:E,disableOutsideClick:y,disableLayer:w,style:j,className:N,contentClassName:O,modifiers:R=[],children:k,onEscapeKeyDown:C,onOutsideClick:P,onClose:A,onClick:T,onMouseEnter:S,onMouseLeave:M,onFocus:B,onBlur:D,onTransitionEnter:I,onTransitionEntered:G,onTransitionExit:F,onTransitionExited:L,disablePortal:Z,container:_,strategy:q,qa:z,restoreFocus:W,restoreFocusRef:$,"aria-label":H,"aria-labelledby":V,role:U,id:J,focusTrap:Y=!1,autoFocus:K=!1}){let Q=r.useRef(null);(0,p.s)({open:m,disableEscapeKeyDown:E,disableOutsideClick:y,onEscapeKeyDown:C,onOutsideClick:P,onClose:A,contentRefs:[x,Q],enabled:!w,type:"popup"});let{attributes:X,styles:ee,setPopperRef:et,setArrowRef:en}=function({anchorRef:e,placement:t=c,offset:n,modifiers:a=[],strategy:l,altBoundary:u}){let[d,f]=r.useState(null),[m,p]=r.useState(null),v=(0,i.g)(),h=r.useMemo(()=>{let e=Array.isArray(t)?t:[t];return"rtl"===v&&(e=e.map(e=>e.replace(/(top|bottom)-(start|end)/g,(e,t,n)=>"start"===n?t+"-end":"end"===n?t+"-start":e))),e},[t,v]),{attributes:b,styles:g}=(0,o.D)(null==e?void 0:e.current,d,{strategy:l,modifiers:[{name:"arrow",options:{element:m}},{name:"offset",options:{offset:n,altBoundary:u}},{name:"flip",options:{fallbackPlacements:h.slice(1),altBoundary:u}},..."rtl"===v?[s]:[],...a],placement:h[0]});return{attributes:b,styles:g,setPopperRef:f,setArrowRef:p}}({anchorRef:x,placement:h,offset:t?[n[0],n[1]+8]:n,strategy:q,altBoundary:Z,modifiers:[{name:"arrow",options:{enabled:t,padding:4}},{name:"preventOverflow",options:{padding:1,altBoundary:Z}},...R]}),er=(0,l.c)(et,Q,(0,f.e)()),ea=(0,u.H)({enabled:!!(W&&m),restoreFocusRef:$});return r.createElement(a.Z,{nodeRef:Q,in:m,addEndListener:e=>{var t;return null===(t=Q.current)||void 0===t?void 0:t.addEventListener("animationend",e)},classNames:(0,v.Y)(g),mountOnEnter:!e,unmountOnExit:!e,appear:!0,onEnter:()=>{null==I||I()},onEntered:()=>{null==G||G()},onExit:()=>{null==F||F()},onExited:()=>{null==L||L()}},r.createElement(d.h,{container:_,disablePortal:Z},r.createElement("div",Object.assign({ref:er,style:ee.popper},X.popper,ea,{className:g({open:m},N),"data-qa":z,id:J,role:U,"aria-label":H,"aria-labelledby":V}),r.createElement(f.i,{enabled:Y&&m,disableAutoFocus:!K},r.createElement("div",{onClick:T,onMouseEnter:S,onMouseLeave:M,onFocus:B,onBlur:D,className:g("content",O),style:j,tabIndex:-1},t&&r.createElement(b,{styles:ee.arrow,attributes:X.arrow,setArrowRef:en}),k)))))}},7124:function(e,t,n){"use strict";n.d(t,{i:function(){return b}});var r=n(67294),a=n(23279),l=n.n(a),o=n(8682),i=n(32782),c=n(97582),s=n(88936);n(89049);let u=(0,i.Ge)("base-slider"),d=r.forwardRef(function(e,t){var{stateModifiers:n}=e,a=(0,c._T)(e,["stateModifiers"]);return r.createElement(s.Z,Object.assign({},a,{ref:t,className:u(n),classNames:{handle:u("handle",n),rail:u("rail",n),track:u("track",n)},pushable:!1,dots:!1,keyboard:!0}))}),f=({className:e})=>r.createElement("span",{className:e},r.createElement("svg",{width:"12",height:"6",viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M5.99996 5.02325C5.99996 5.02325 7.7674 -1.90735e-06 11.3023 -1.90735e-06H0.697632C4.23252 -1.90735e-06 5.99996 5.02325 5.99996 5.02325Z",fill:"currentColor"})));n(50181);let m=(0,i.Ge)("slider-tooltip"),p=({value:e,className:t,style:n,stateModifiers:a})=>{let l=r.useCallback(e=>{e.preventDefault(),e.stopPropagation()},[]);return r.createElement("div",{className:m(a,t),style:n,onClick:l,onMouseDown:l,onTouchStart:l},r.createElement("div",{className:m("card",a)},e,a.disabled&&r.createElement(f,{className:m("pin",{background:!0})}),r.createElement(f,{className:m("pin")})))};var v=n(99086);n(49907);let h=(0,i.Ge)("slider"),b=r.forwardRef(function({value:e,defaultValue:t=0,size:n="m",min:a=0,max:i=100,step:c=1,marksCount:s=2,availableValues:u,hasTooltip:f=!1,errorMessage:m,validationState:b,disabled:g=!1,debounceDelay:x=0,onBlur:E,onUpdate:y,onUpdateComplete:w,onFocus:j,autoFocus:N=!1,tabIndex:O,className:R,qa:k,apiRef:C,"aria-label":P,"aria-labelledby":A},T){let S=(0,o.g)(),M=r.useCallback(l()(e=>null==y?void 0:y(e),x),[y,x]),B=r.useCallback(l()(e=>null==w?void 0:w(e),x),[w,x]);r.useEffect(()=>()=>{M.cancel(),B.cancel()},[M,B]);let D=(0,v.M)({availableValues:u,defaultValue:t,marksCount:s,max:i,min:a,step:c,value:e}),I={size:n,error:"invalid"===b&&!g,disabled:g,hasTooltip:!!f,rtl:"rtl"===S};return r.createElement("div",{className:h(null,R),ref:T},r.createElement("div",{className:h("top",{size:n,hasTooltip:f})}),r.createElement(d,{ref:C,value:D.value,defaultValue:D.defaultValue,min:D.min,max:D.max,step:D.step,range:D.range,disabled:g,marks:D.marks,onBlur:E,onFocus:j,onChange:M,onChangeComplete:B,stateModifiers:I,autoFocus:N,tabIndex:O,"data-qa":k,handleRender:f?(e,t)=>{var n;let a=I.rtl?"right":"left";return r.createElement(r.Fragment,null,e,r.createElement(p,{value:t.value,className:h("tooltip"),style:{insetInlineStart:null===(n=e.props.style)||void 0===n?void 0:n[a]},stateModifiers:I}))}:void 0,reverse:I.rtl,ariaLabelForHandle:P,ariaLabelledByForHandle:A}),I.error&&m&&r.createElement("div",{className:h("error",{size:n})},m))})},99086:function(e,t,n){"use strict";n.d(t,{M:function(){return i}});let r={left:"",right:"",transform:""};function a({value:e,min:t,max:n}){return void 0===e||e<t?t:e>n?n:e}function l({value:e=[],min:t=0,max:n=100}){return[a({max:n,min:t,value:e[0]}),a({max:n,min:t,value:e[1]})].sort((e,t)=>e-t)}function o(e){let t={},n=e.length-1;return e.forEach((e,a)=>{0===a?t[e]={label:e,style:r}:a===n?t[e]={label:e,style:r}:t[e]=e}),t}function i({max:e=100,min:t=0,availableValues:n,defaultValue:r,marksCount:i,step:c,value:s}){let u={value:s,defaultValue:r,range:!1,max:e,min:t,marks:void 0,step:c};if(e<t&&(u.max=t,u.min=e),n&&n.length>0){u.step=null;let e=Array.from(new Set(n)).sort((e,t)=>e-t);u.min=e[0],u.max=e[e.length-1],u.marks=o(e)}else u.marks=o(function({count:e=0,max:t,min:n}){if(t===n)return[n];if(e>2){let r=[],a=Math.abs(t-n)/(e-1);for(let t=0;t<e;t++)r.push(Math.round((n+a*t)*100)/100);return r}return[n,t]}({count:i,max:e,min:t}));if(void 0===s){let e=Array.isArray(r);u.range=e,u.defaultValue=e?l({min:u.min,max:u.max,value:r}):a({min:u.min,max:u.max,value:r})}else{let e=Array.isArray(s);u.range=e,u.value=e?l({min:u.min,max:u.max,value:s}):a({min:u.min,max:u.max,value:s})}return u}},8682:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(73233);function a(){return(0,r.T)().direction}},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});let r=new Map;function a(e){e&&r.has(e)}},27561:function(e,t,n){var r=n(67990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),a=n(7771),l=n(14841),o=Math.max,i=Math.min;e.exports=function(e,t,n){var c,s,u,d,f,m,p=0,v=!1,h=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=c,r=s;return c=s=void 0,p=t,d=e.apply(r,n)}function x(e){var n=e-m,r=e-p;return void 0===m||n>=t||n<0||h&&r>=u}function E(){var e,n,r,l=a();if(x(l))return y(l);f=setTimeout(E,(e=l-m,n=l-p,r=t-e,h?i(r,u-n):r))}function y(e){return(f=void 0,b&&c)?g(e):(c=s=void 0,d)}function w(){var e,n=a(),r=x(n);if(c=arguments,s=this,m=n,r){if(void 0===f)return p=e=m,f=setTimeout(E,t),v?g(e):d;if(h)return clearTimeout(f),f=setTimeout(E,t),g(m)}return void 0===f&&(f=setTimeout(E,t)),d}return t=l(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?o(l(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),p=0,c=m=s=f=void 0},w.flush=function(){return void 0===f?d:y(a())},w}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),l=n(33448),o=0/0,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):i.test(e)?o:+e}},77886:function(e,t,n){"use strict";n.r(t),n.d(t,{ArrowToggleExample:function(){return c},PopupAnchorExample:function(){return u},PopupPlacementExample:function(){return f},SliderExample:function(){return p}});var r=n(85893),a=n(50254),l=n(49179),o=n(67294);let i=["top","left","bottom","right"],c=e=>{let[t,n]=o.useState(0),c=i[t%i.length];return(0,r.jsxs)(a.z,{onClick:()=>n(t+1),view:"flat",children:[(0,r.jsx)(l.F,{...e,direction:c})," ",(0,r.jsx)("span",{children:c})]})};c.storyName="ArrowToggleExample";var s=n(555);let u=()=>{var e;let t=o.useRef(null),n=o.useRef(null),[l,i]=o.useState(!1);return(0,r.jsxs)("div",{ref:t,style:{position:"relative"},children:[(0,r.jsx)(a.z,{ref:n,onClick:()=>i(e=>!e),children:"Toggle Popup"}),(0,r.jsx)(s.G,{anchorRef:n,open:l,placement:["bottom"],container:null!==(e=t.current)&&void 0!==e?e:void 0,modifiers:[{name:"preventOverflow",enabled:!1}],children:(0,r.jsx)("div",{style:{padding:5},children:"Content"})})]})};function d(e){let{placement:t,anchorRef:n,container:a,children:l}=e;return(0,r.jsx)(s.G,{open:!0,anchorRef:n,placement:t,container:null!=a?a:void 0,disablePortal:!0,modifiers:[{name:"preventOverflow",enabled:!1}],children:(0,r.jsx)("div",{style:{padding:5},children:l})})}u.storyName="PopupAnchorExample";let f=()=>{let e=o.useRef(null),t=o.useRef(null);return(0,r.jsxs)("div",{ref:e,style:{position:"relative"},children:[(0,r.jsx)("div",{ref:t,style:{margin:"40px 100px",width:320,height:140,border:"2px dashed",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em"},children:"Anchor"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"top-start",children:"Top Start"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"top",children:"Top"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"top-end",children:"Top End"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"right-start",children:"Right Start"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"right",children:"Right"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"right-end",children:"Right End"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"bottom-end",children:"Bottom End"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"bottom",children:"Bottom"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"bottom-start",children:"Bottom Start"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"left-end",children:"Left End"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"left",children:"Left"}),(0,r.jsx)(d,{anchorRef:t,container:e.current,placement:"left-start",children:"Left Start"})]})};f.storyName="PopupPlacementExample";var m=n(7124);let p=e=>{let{defaultValue:t,max:n,min:a,marksCount:l,step:i,debounceDelay:c,...s}=e,[u,d]=o.useState(t||a||0),f=Number(n)||void 0,p=Number(a)||void 0,v=Number(l)||void 0,h=Number(i)||void 0,b=Number(c)||void 0;return(0,r.jsxs)("div",{style:{width:"100%",maxWidth:300},children:[(0,r.jsx)(m.i,{...s,onUpdate:d,min:p,max:f,marksCount:v,step:h,debounceDelay:b,defaultValue:t}),(0,r.jsx)("div",{style:{textAlign:"center"},children:"Selected value: ".concat(void 0===u?"":u)})]})}},42554:function(){},82801:function(){},31130:function(){},89049:function(){},49907:function(){},50181:function(){},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(86656);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}}}]);