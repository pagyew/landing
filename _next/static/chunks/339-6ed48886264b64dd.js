(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{81372:function(e,t,n){"use strict";var o=n(67294);t.Z=e=>o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0Zm3.03-.75c-.962-1.665-3.366-1.665-4.328 0L.919 10.749c-.964 1.666.239 3.751 2.164 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751l-4.917-8.505ZM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",clipRule:"evenodd"}))},58405:function(e,t,n){"use strict";var o=n(67294);t.Z=e=>o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},85956:function(e,t,n){"use strict";n.d(t,{J:function(){return b}});var o=n(67294),l=n(58405),a=n(97387),r=n(54321),i=n(51960);const c=(0,n(32782).Ge)("popover"),s=(e,t=!1)=>{switch(e){case"special":return t?"normal-contrast":"flat-contrast";case"announcement":return t?"normal-contrast":"outlined";default:return t?"normal":"flat"}},u=({theme:e,tooltipActionButton:t,tooltipCancelButton:n})=>t||n?o.createElement("div",{className:c("tooltip-buttons")},t&&o.createElement(a.z,{view:s(e,!0),width:"max",onClick:t.onClick,className:c("tooltip-button")},t.text),n&&o.createElement(a.z,{view:s(e,!1),width:"max",onClick:n.onClick,className:c("tooltip-button")},n.text)):null,d=({secondary:e,htmlContent:t,content:n,className:l})=>t||n?t?o.createElement("div",{className:c("tooltip-content",{secondary:e},l),dangerouslySetInnerHTML:{__html:t}}):n?o.createElement("div",{className:c("tooltip-content",{secondary:e},l)},n):null:null;var m=n(5378);const f=({links:e})=>0===e.length?null:o.createElement("div",{className:c("tooltip-links")},e.map(((e,t)=>{const{text:n,href:l,target:a="_blank",onClick:r}=e;return o.createElement(o.Fragment,{key:`link-${t}`},o.createElement(m.r,{href:l,target:a,onClick:r,className:c("tooltip-link")},n),o.createElement("br",null))})));var p=n(70926);const v=({open:e,openOnHover:t,disabled:n,className:l,openTooltip:a,closeTooltip:r,closedManually:i,onClick:c,children:s})=>{const u=async o=>{if(n||e&&t)return;if(!(!c||await c(o)))return;e?(r(),i.current=!0):(a(),i.current=!1)},{onKeyDown:d}=(0,p.b)(u);return"function"===typeof s?o.createElement(o.Fragment,null,s({onClick:u,onKeyDown:d})):o.createElement("div",{className:l,onClick:u,onKeyDown:c?d:void 0},s)};var h=n(40338);const g=({initialOpen:e,disabled:t,autoclosable:n,onOpenChange:l,delayOpening:a,delayClosing:r,behavior:i,shouldBeOpen:c})=>{const s=o.useRef(null),u=o.useRef(null),[d,m]=o.useState(e),f=o.useCallback((()=>{s.current&&(clearTimeout(s.current),s.current=null)}),[]),p=o.useCallback((()=>{u.current&&(clearTimeout(u.current),u.current=null)}),[]);o.useEffect((()=>()=>{f(),p()}),[p,f]);const v=o.useCallback((e=>{m(e),c.current=e,null===l||void 0===l||l(e)}),[l,c]),g=o.useCallback((()=>{f(),v(!0)}),[v,f]),b=o.useCallback((()=>{p(),v(!1)}),[v,p]);o.useEffect((()=>{t&&b()}),[t,b]),((e,t)=>{const n=o.useRef(!0);o.useEffect((()=>{n.current?n.current=!1:e()}),t)})((()=>{n&&!c.current&&b()}),[n,b,c]);const[C,y]=h.q[i],E=o.useCallback((()=>{s.current=setTimeout((()=>{s.current=null,g()}),null!==a&&void 0!==a?a:C)}),[C,a,g]),w=o.useCallback((()=>{u.current=setTimeout((()=>{u.current=null,b()}),null!==r&&void 0!==r?r:y)}),[b,y,r]);return{isOpen:d,closingTimeout:u,openTooltip:g,openTooltipDelayed:E,unsetOpeningTimeout:f,closeTooltip:b,closeTooltipDelayed:w,unsetClosingTimeout:p}};n(7775);const b=o.forwardRef((function({initialOpen:e=!1,disabled:t=!1,autoclosable:n=!0,openOnHover:s=!0,delayOpening:m,delayClosing:p,behavior:b=h.x.Delayed,placement:C=["right","bottom"],offset:y={},tooltipOffset:E,tooltipClassName:w,tooltipContentClassName:k,theme:x="info",size:N="s",hasArrow:O=!0,hasClose:T=!1,className:B,children:z,title:R,content:S,htmlContent:M,contentClassName:I,links:P,forceLinksAppearance:F=!1,tooltipActionButton:D,tooltipCancelButton:_,onOpenChange:A,onCloseClick:Z,onClick:q,anchorRef:L,strategy:j,qa:K,disablePortal:J=!1,tooltipId:$,focusTrap:G,autoFocus:H,restoreFocusRef:U,modifiers:V},W){const X=o.useRef(null),Q=o.useRef(!1),Y=o.useRef(e),{isOpen:ee,closingTimeout:te,openTooltip:ne,openTooltipDelayed:oe,unsetOpeningTimeout:le,closeTooltip:ae,closeTooltipDelayed:re,unsetClosingTimeout:ie}=g({initialOpen:e,disabled:t,autoclosable:n,onOpenChange:A,delayOpening:m,delayClosing:p,behavior:b,shouldBeOpen:Y});o.useImperativeHandle(W,(()=>({openTooltip:ne,closeTooltip:ae})),[ne,ae]);const ce=Boolean(R),se=o.createElement(i.G,{id:$,role:s?"tooltip":"dialog",strategy:j,anchorRef:L||X,className:c("tooltip",{theme:x,size:N,"with-close":T,"force-links-appearance":F},w),contentClassName:c("tooltip-popup-content",k),open:ee,placement:C,hasArrow:O,offset:E,onClose:L?void 0:ae,qa:K?`${K}-tooltip`:"",disablePortal:J,focusTrap:G,autoFocus:H,restoreFocus:!0,restoreFocusRef:U||X,modifiers:V},o.createElement(o.Fragment,null,R&&o.createElement("h3",{className:c("tooltip-title")},R),o.createElement(d,{secondary:!!ce&&"announcement"!==x,content:S,htmlContent:M,className:I}),P&&o.createElement(f,{links:P}),o.createElement(u,{theme:x,tooltipActionButton:D,tooltipCancelButton:_}),T&&o.createElement("div",{className:c("tooltip-close")},o.createElement(a.z,{size:"s",view:"flat-secondary",onClick:async e=>{ae(),null===Z||void 0===Z||Z(e)},extraProps:{"aria-label":"Close"}},o.createElement(r.J,{data:l.Z,size:16})))));if(L)return se;const ue=()=>{ie(),ee||t||Q.current?Y.current=!0:oe()},de=()=>{!n||Q.current||te.current?Y.current=!1:(le(),re()),Q.current=!1};return o.createElement("div",{ref:X,className:c({disabled:t},B),onMouseEnter:s?ue:void 0,onMouseLeave:s?de:void 0,onFocus:s?ue:void 0,onBlur:s?de:void 0,style:{top:y.top,left:y.left},"data-qa":K},o.createElement(v,{closeTooltip:ae,openTooltip:ne,open:ee,openOnHover:s,className:c("handler"),disabled:t,onClick:q,closedManually:Q},z),se)}));b.displayName="Popover"},40338:function(e,t,n){"use strict";var o;n.d(t,{q:function(){return l},x:function(){return o}}),function(e){e.Immediate="immediate",e.Delayed="delayed",e.DelayedClosing="delayedClosing"}(o||(o={}));const l={[o.Immediate]:[0,0],[o.Delayed]:[300,300],[o.DelayedClosing]:[0,300]}},23825:function(e,t,n){"use strict";n.d(t,{o:function(){return k}});var o=n(67294),l=n(81372),a=n(77322),r=n(62227),i=n(59854),c=n.n(i),s=n(23493),u=n.n(s);function d(e,t){const[n,l]=o.useState({width:0,height:0});return o.useLayoutEffect((()=>{if(!(null===e||void 0===e?void 0:e.current))return;const t=new ResizeObserver(u()((e=>{if(!Array.isArray(e))return;const t=e[0];if(t.borderBoxSize){const e=t.borderBoxSize[0]?t.borderBoxSize[0]:t.borderBoxSize;l({width:c()(e.inlineSize,2),height:c()(e.blockSize,2)})}else{const e=t.target;l({width:c()(e.offsetWidth,2),height:c()(e.offsetHeight,2)})}}),16));return t.observe(e.current),()=>{t.disconnect()}}),[e,t]),n}var m=n(54321),f=n(85956),p=n(32782),v=n(90553),h=n(13079),g=n(87948);const b=(0,p.Ge)("text-input"),C=o.forwardRef((function({placement:e,children:t,onClick:n},l){return t?o.createElement("div",{ref:l,className:b("additional-content",{placement:e}),onClick:n},t):null})),y=(0,p.Ge)("text-input");function E(e){const{controlProps:t,controlRef:n,type:l,name:a,id:r,tabIndex:i,autoComplete:c,placeholder:s,value:u,defaultValue:d,autoFocus:m,disabled:f,onChange:p,onFocus:v,onBlur:h,onKeyDown:g,onKeyUp:b,onKeyPress:C}=e;return o.createElement("input",Object.assign({},t,{ref:n,className:y("control",{type:"input"},null===t||void 0===t?void 0:t.className),type:l,name:a,id:r,tabIndex:i,placeholder:s,value:u,defaultValue:d,autoFocus:m,autoComplete:c,onChange:p,onFocus:v,onBlur:h,onKeyDown:g,onKeyUp:b,onKeyPress:C,disabled:f}))}n(81346);const w=(0,p.Ge)("text-input"),k=o.forwardRef((function(e,t){const{view:n="normal",size:i="m",pin:c="round-round",name:s,value:u,defaultValue:p,label:b,disabled:y=!1,hasClear:k=!1,error:x,errorMessage:N,errorPlacement:O="outside",validationState:T,autoComplete:B,id:z,tabIndex:R,style:S,className:M,qa:I,controlProps:P,leftContent:F,rightContent:D,note:_,onUpdate:A,onChange:Z}=e,{errorMessage:q,errorPlacement:L,validationState:j}=(0,g.II)({error:x,errorMessage:N,errorPlacement:O,validationState:T}),[K,J]=o.useState(null!==p&&void 0!==p?p:""),$=o.useRef(null),G=(0,a.c)(e.controlRef,$),H=o.useRef(null),U=o.useRef(null),V=(0,g.O_)(j),W=void 0!==u,X=W?u:K,Q=Boolean(b),Y="invalid"===j&&Boolean(q)&&"outside"===L,ee="invalid"===j&&Boolean(q)&&"inside"===L,te=Boolean(k&&!y&&X),ne=Boolean(F),oe=Boolean(D),le=Q&&!z&&!s&&"undefined"===typeof B,ae=(0,r.u)(),re=Q?z||ae:z,ie=d(Q?H:null,i),ce=d(ne?U:null,i),se=(0,r.u)(),ue=(0,r.u)(),de=[null===P||void 0===P?void 0:P["aria-describedby"],_?ue:void 0,Y?se:void 0].filter(Boolean).join(" "),me=Object.assign(Object.assign({},P),{style:Object.assign(Object.assign({},null===P||void 0===P?void 0:P.style),Q&&ie.width?{paddingLeft:`${ie.width}px`}:{}),"aria-invalid":"invalid"===j||void 0,"aria-describedby":de||void 0}),fe={id:re,tabIndex:R,name:s,onChange(e){const t=e.target.value;W||J(t),Z&&Z(e),A&&A(t)},autoComplete:le?"off":(0,g.xp)(B),controlProps:me},pe=e=>{var t,n;const o=e.currentTarget.contains(document.activeElement),l=Boolean(null===(t=document.getSelection())||void 0===t?void 0:t.toString());o||l||null===(n=$.current)||void 0===n||n.focus()};return o.createElement("span",{ref:t,style:S,className:w({view:n,size:i,disabled:y,state:V,pin:"clear"===n?void 0:c,"has-clear":te,"has-left-content":ne,"has-right-content":te||oe},M),"data-qa":I},o.createElement("span",{className:w("content")},ne&&o.createElement(C,{ref:U,placement:"left",onClick:pe},F),Q&&o.createElement("label",{ref:H,style:{left:ne?ce.width:void 0,maxWidth:`calc(50% - ${ce.width}px)`},className:w("label"),title:b,htmlFor:re},`${b}`),o.createElement(E,Object.assign({},e,fe,{controlRef:G})),te&&o.createElement(v.C,{size:(0,v.X)(i),onClick:e=>{const t=$.current;if(t){t.focus();const n=Object.create(e);n.target=t,n.currentTarget=t,t.value="",Z&&Z(n),A&&A("")}W||J("")},className:w("clear")}),oe&&o.createElement(C,{placement:"right",onClick:pe},D),ee&&o.createElement(f.J,{content:q},o.createElement("span",{"data-qa":g.eP},o.createElement(m.J,{data:l.Z,className:w("error-icon"),size:"s"===i?12:16})))),o.createElement(h.Z,{note:_,errorMessage:Y?q:null,noteId:ue,errorMessageId:se}))}))},90553:function(e,t,n){"use strict";n.d(t,{C:function(){return p},X:function(){return f}});var o=n(67294),l=n(58405),a=n(97387),r=n(54321),i=n(32782),c=n(97580),s=JSON.parse('{"label_clear-button":"Clear"}'),u=JSON.parse('{"label_clear-button":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}'),d=(0,c.e)({en:s,ru:u},`${i.bJ}clear-button`);n(58511);const m=(0,i.B_)("clear-button"),f=e=>{switch(e){case"s":return"xs";case"m":return"s";case"l":return"m";case"xl":return"l";default:throw new Error(`Unknown text input size "${e}"`)}},p=e=>{const{size:t,className:n,onClick:i}=e;return o.createElement(a.z,{size:t,className:m(null,n),onClick:i,extraProps:{"aria-label":d("label_clear-button")}},o.createElement(r.J,{data:l.Z,size:16}))}},13079:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(67294),l=n(32782),a=n(87948);n(55633);const r=(0,l.Ge)("outer-additional-content"),i=({errorMessage:e,note:t,noteId:n,errorMessageId:l})=>e||t?o.createElement("div",{className:r()},e&&o.createElement("div",{className:r("error"),id:l,"data-qa":a.fz},e),t&&o.createElement("div",{className:r("note"),id:n},t)):null},87948:function(e,t,n){"use strict";n.d(t,{II:function(){return i},O_:function(){return r},eP:function(){return l},fz:function(){return o},xp:function(){return a}});const o="control-error-message-qa",l="control-error-icon-qa",a=e=>"boolean"===typeof e?e?"on":"off":e,r=e=>"invalid"===e?"error":void 0,i=e=>{const{error:t,errorMessage:n,errorPlacement:o,validationState:l}=e;let a,r;return"string"===typeof t&&(a=t),n&&(a=n),("invalid"===l||Boolean(t))&&(r="invalid"),{errorMessage:a,errorPlacement:o,validationState:r}}},29932:function(e){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,l=Array(o);++n<o;)l[n]=t(e[n],n,e);return l}},80531:function(e,t,n){var o=n(62705),l=n(29932),a=n(1469),r=n(33448),i=o?o.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return l(t,e)+"";if(r(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},89179:function(e,t,n){var o=n(55639),l=n(40554),a=n(14841),r=n(79833),i=o.isFinite,c=Math.min;e.exports=function(e){var t=Math[e];return function(e,n){if(e=a(e),(n=null==n?0:c(l(n),292))&&i(e)){var o=(r(e)+"e").split("e"),s=t(o[0]+"e"+(+o[1]+n));return+((o=(r(s)+"e").split("e"))[0]+"e"+(+o[1]-n))}return t(e)}}},1469:function(e){var t=Array.isArray;e.exports=t},59854:function(e,t,n){var o=n(89179)("round");e.exports=o},18601:function(e,t,n){var o=n(14841),l=1/0;e.exports=function(e){return e?(e=o(e))===l||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},40554:function(e,t,n){var o=n(18601);e.exports=function(e){var t=o(e),n=t%1;return t===t?n?t-n:t:0}},79833:function(e,t,n){var o=n(80531);e.exports=function(e){return null==e?"":o(e)}},7775:function(){},81346:function(){},58511:function(){},55633:function(){}}]);