(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2849],{61191:function(e,t,n){"use strict";var a=n(67294);t.Z=e=>a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-3.9-1.55a.75.75 0 1 0-1.2-.9L7.419 8.858 6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08l3-4Z",clipRule:"evenodd"}))},52010:function(e,t,n){"use strict";n.d(t,{_:function(){return p}});var a=n(67294),i=n(58405),o=n(70926),r=n(97387),s=n(7696),c=n(54272),l=n(48696),d=n(54321),u=n(32782);n(32424);const m=(0,u.Ge)("label"),f={xs:{copyIconSize:12,closeIconSize:12,buttonSize:"xs"},s:{copyIconSize:14,closeIconSize:14,buttonSize:"s"},m:{copyIconSize:16,closeIconSize:16,buttonSize:"m"}},v={pin:"brick-round",className:m("addon",{side:"right",interactive:!0})},p=a.forwardRef((function(e,t){const{type:n="default",theme:u="normal",size:p="xs",icon:h,children:b,onClose:y,className:g,disabled:E,copyText:N,closeButtonLabel:k,copyButtonLabel:w,interactive:x=!1,value:z,onCopy:C,onClick:O,qa:j}=e,S=a.useRef(null),L=Boolean(""!==b&&a.Children.count(b)>0),P="close"===n&&L,T="copy"===n&&L,B=Boolean(O),R=Boolean(T&&N),I=(B||R||x)&&!E,{copyIconSize:q,closeIconSize:G,buttonSize:_}=f[p],M=h&&a.createElement("div",{className:m("addon",{side:L?"left":void 0})},h),U=L&&a.createElement("div",{className:m("text")},a.createElement("div",{className:m("content")},b),Boolean(z)&&a.createElement("div",{className:m("value")},a.createElement("div",{className:m("separator")},":"),a.createElement("div",{className:m("key")},z))),V=e=>{B&&e.stopPropagation(),y&&y(e)},D=e=>{var t;(null===(t=S.current)||void 0===t?void 0:t.contains(e.target))||null===O||void 0===O||O(e)},{onKeyDown:K}=(0,o.b)(D),Q=e=>{let o;return T?o=a.createElement(r.z,Object.assign({ref:S,size:_,extraProps:{"aria-label":w||void 0}},v),a.createElement(r.z.Icon,null,a.createElement(s.K,{status:e||c.T.Pending,size:q}))):P&&(o=a.createElement(r.z,Object.assign({ref:S,onClick:y?V:void 0,size:_,extraProps:{"aria-label":k||void 0}},v),a.createElement(d.J,{size:G,data:i.Z}))),a.createElement("div",{ref:t,role:B?"button":void 0,tabIndex:B?0:void 0,onClick:B?D:void 0,onKeyDown:B?K:void 0,className:m({theme:u,size:p,type:n,"is-interactive":I,"has-right-addon":Boolean(o),"has-left-addon":Boolean(M),disabled:E},g),"data-qa":j},M,U,o)};return R&&N&&!B?a.createElement(l.h,{text:N,onCopy:C,timeout:1e3},(e=>Q(e))):Q()}))},75670:function(e,t,n){"use strict";n.d(t,{Y:function(){return c}});var a=n(67294),i=n(47684),o=n(72099),r=n(32782);n(12240);const s=(0,r.Ge)("radio"),c=a.forwardRef((function(e,t){const{size:n="m",disabled:r=!1,content:c,children:l,title:d,style:u,className:m,qa:f}=e,{checked:v,inputProps:p}=(0,i.x)(e),h=c||l,b=a.createElement("span",{className:s("indicator")},a.createElement("span",{className:s("disc")}),a.createElement("input",Object.assign({},p,{className:s("control")})),a.createElement("span",{className:s("outline")}));return a.createElement(o.J,{ref:t,title:d,style:u,size:n,disabled:r,className:s({size:n,disabled:r,checked:v},m),qa:f,control:b},h)}))},74418:function(e,t,n){"use strict";n.d(t,{E:function(){return u}});var a=n(67294),i=n(62555),o=n(32782),r=n(47684),s=n(69110);const c=(0,o.Ge)("radio-button"),l=a.forwardRef((function(e,t){const{disabled:n=!1,content:i,children:o}=e,{checked:l,inputProps:d}=(0,r.x)(e),u=i||o,m=(0,s.y)(u);return a.createElement("label",{className:c("option",{disabled:n,checked:l}),ref:t},a.createElement("input",Object.assign({},d,{className:c("option-control")})),a.createElement("span",{className:c("option-outline")}),u&&a.createElement("span",{className:c("option-text",{icon:m})},u))}));n(39332);const d=(0,o.Ge)("radio-button"),u=a.forwardRef((function(e,t){const{size:n="m",width:o,style:r,className:s,qa:c,children:u}=e;let m=e.options;m||(m=a.Children.toArray(u).map((({props:e})=>({value:e.value,content:e.content||e.children,disabled:e.disabled}))));const f=a.useRef(null),v=a.useRef(),p=a.useCallback((e=>{if(!e)return;const t=f.current;if(!t)return;const n=v.current;if(n&&n!==e){const a=e=>{t.style.left=`${e.offsetLeft}px`,t.style.width=`${e.offsetWidth}px`};a(n),t.hidden=!1,a(e)}v.current=e}),[]),h=a.useCallback((e=>{e.currentTarget.hidden=!0}),[]),{containerProps:b,optionsProps:y}=(0,i.a)(Object.assign(Object.assign({},e),{options:m}));return a.createElement("div",Object.assign({},b,{ref:t,style:r,className:d({size:n,width:o},s),"data-qa":c}),a.createElement("div",{ref:f,className:d("plate"),onTransitionEnd:h,hidden:!0}),y.map((e=>a.createElement(l,Object.assign({},e,{key:e.value,ref:e.checked?p:void 0})))))}));u.Option=l},92665:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var a=n(67294),i=n(62555),o=n(75670),r=n(32782);n(95257);const s=(0,r.Ge)("radio-group"),c=a.forwardRef((function(e,t){const{size:n="m",direction:r="horizontal",style:c,className:l,optionClassName:d,qa:u,children:m}=e;let f=e.options;f||(f=a.Children.toArray(m).map((({props:e})=>({value:e.value,content:e.content||e.children,disabled:e.disabled}))));const{containerProps:v,optionsProps:p}=(0,i.a)(Object.assign(Object.assign({},e),{options:f}));return a.createElement("div",Object.assign({},v,{ref:t,style:c,className:s({size:n,direction:r},l),"data-qa":u}),p.map((e=>a.createElement(o.Y,Object.assign({},e,{key:e.value,className:s("option",d),size:n})))))}));c.Option=o.Y},95395:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var a=n(67294),i=n(32782);n(95603);const o=(0,i.Ge)("spin"),r=a.forwardRef((function(e,t){const{size:n="m",style:i,className:r,qa:s}=e;return a.createElement("div",{ref:t,style:i,className:o({size:n},r),"data-qa":s},a.createElement("div",{className:o("inner")}))}))},33527:function(e,t,n){"use strict";n.d(t,{r:function(){return c}});var a=n(67294),i=n(39039),o=n(72099),r=n(32782);n(73890);const s=(0,r.Ge)("switch"),c=a.forwardRef((function(e,t){const{size:n="m",disabled:r=!1,content:c,children:l,title:d,style:u,className:m,qa:f}=e,{checked:v,inputProps:p}=(0,i.O)(e),h=c||l,b=a.createElement("span",{className:s("indicator")},a.createElement("input",Object.assign({},p,{className:s("control")})),a.createElement("span",{className:s("outline")}),a.createElement("span",{className:s("slider")}));return a.createElement(o.J,{ref:t,title:d,style:u,size:n,disabled:r,className:s({size:n,disabled:r,checked:v},m),labelClassName:s("text"),qa:f,control:b},h)}))},88391:function(e,t,n){"use strict";n.d(t,{m:function(){return f},c:function(){return d}});var a=n(67294),i=n(32782);const o=a.createContext({activeTabId:void 0});o.displayName="TabsContext";var r=n(52010);const s=(0,i.Ge)("tabs");function c({id:e,className:t,title:n,meta:i,hint:c,icon:l,counter:d,label:u,active:m,disabled:f,hasOverflow:v,extraProps:p,onClick:h}){const{activeTabId:b}=a.useContext(o),y="boolean"===typeof m?m:b===e,g=a.useMemo((()=>void 0!==c?c:"string"===typeof n?n:void 0),[c,n]);return a.createElement("div",Object.assign({},p,{role:"tab","aria-selected":y,"aria-disabled":!0===f,tabIndex:f?-1:0,className:s("item",{active:y,disabled:f,overflow:Boolean(v)},t),title:g,onClick:()=>{h(e)},onKeyDown:t=>{" "===t.key&&h(e)}}),a.createElement("div",{className:s("item-content")},l&&a.createElement("div",{className:s("item-icon")},l),a.createElement("div",{className:s("item-title")},n||e),"number"===typeof d&&a.createElement("div",{className:s("item-counter")},d),u&&a.createElement(r._,{className:s("item-label"),theme:u.theme},u.content)),i&&a.createElement("div",{className:s("item-meta")},i))}c.displayName="Tabs.Item";n(11460);const l=(0,i.Ge)("tabs");var d;!function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(d||(d={}));const u=[],m=a.forwardRef((({direction:e=d.Horizontal,size:t="m",activeTab:n,allowNotSelected:i=!1,items:r=u,children:s,className:m,onSelectTab:f,wrapTo:v,qa:p},h)=>{const b=((e,t,n)=>{var a;return e||(t||0===(null===n||void 0===n?void 0:n.length)||null===(a=null===n||void 0===n?void 0:n[0])||void 0===a?void 0:a.id)})(n,i,r),y=a.useMemo((()=>({activeTabId:b})),[b]),g=a.useMemo((()=>{const e=e=>{f&&f(e)};return r.map(((t,n)=>{const i=a.createElement(c,Object.assign({key:t.id},t,{onClick:e}));return v?v(t,i,n):i}))}),[r,f,v]);return a.createElement("div",{role:"tablist",className:l({direction:e,size:t},m),"data-qa":p,ref:h},a.createElement(o.Provider,{value:y},s||g))}));m.displayName="Tabs";const f=Object.assign(m,{Item:c})},48323:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var a=n(97582),i=n(67294),o=n(35930),r=n(74200);const s=i.forwardRef(((e,t)=>{var{as:n,children:s,variant:c,className:l,ellipsis:d,color:u,whiteSpace:m,wordBreak:f,qa:v}=e,p=(0,a.__rest)(e,["as","children","variant","className","ellipsis","color","whiteSpace","wordBreak","qa"]);const h=n||"span";return i.createElement(h,Object.assign({ref:t,className:(0,r.f)({variant:c,ellipsis:d,whiteSpace:m,wordBreak:f},u?(0,o.V)({color:u},l):l),"data-qa":v},p),s)}));s.displayName="Text"},35930:function(e,t,n){"use strict";n.d(t,{V:function(){return r},b:function(){return o}});var a=n(32782);n(74050);const i=(0,a.Ge)("color-text"),o=["primary","complementary","secondary","hint","info","info-heavy","positive","positive-heavy","warning","warning-heavy","danger","danger-heavy","utility","utility-heavy","misc","misc-heavy","brand","link","link-hover","link-visited","link-visited-hover","dark-primary","dark-complementary","dark-secondary","light-primary","light-complementary","light-secondary","light-hint","inverted-primary","inverted-complementary","inverted-secondary","inverted-hint"],r=({color:e},t)=>i({color:e},t)},74200:function(e,t,n){"use strict";n.d(t,{S:function(){return o},f:function(){return r}});var a=n(32782);n(24872);const i=(0,a.Ge)("text"),o=["display-4","display-3","display-2","display-1","header-2","header-1","subheader-3","subheader-2","subheader-1","body-3","body-2","body-1","body-short","caption-2","caption-1","code-3","code-inline-3","code-2","code-inline-2","code-1","code-inline-1"],r=({variant:e="body-1",ellipsis:t,whiteSpace:n,wordBreak:a},o)=>i({variant:e,ellipsis:t,ws:n,wb:a},o)},67913:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var a=n(67294),i=n(7872);const o={theme:i.t0,themeValue:i.CR},r=a.createContext(o);r.displayName="ThemeContext"},57410:function(e,t,n){"use strict";n.d(t,{f:function(){return y}});var a=n(67294),i=n(32782),o=n(67913),r=n(88300),s=n(7872);const c=(0,i.Ge)(s.Qf),l=(0,i.B_)(s.Qf),d=c(),u=l(),m={"native-scrollbar":!1};function f(e,t,n){const a=document.body;if(a.classList.contains(d)||a.classList.add(d),a.classList.contains(u)||a.classList.add(u),n){n.split(" ").forEach((e=>{e&&!a.classList.contains(e)&&a.classList.add(e)}))}[...a.classList].forEach((e=>{e.startsWith((0,i.Ui)(c({theme:!0})))&&a.classList.remove(e),e.startsWith((0,i.Ui)(l({theme:!0})))&&a.classList.remove(e)})),a.classList.add((0,i.Ui)(c({theme:e}))),a.classList.add((0,i.Ui)(l({theme:e})));for(const[o,r]of Object.entries(Object.assign(Object.assign({},m),t)))a.classList.toggle((0,i.Ui)(c({[o]:!0})),r),a.classList.toggle((0,i.Ui)(l({[o]:!0})),r)}const v=()=>window.matchMedia("(prefers-color-scheme: dark)");function p(){const[e,t]=a.useState("object"===typeof window&&v().matches?"dark":"light");return a.useEffect((()=>{const e=function(e,t){const n="function"!==typeof e.addEventListener;return n?e.addListener(t):e.addEventListener("change",t),()=>{n?e.removeListener(t):e.removeEventListener("change",t)}}(v(),(function(e){t(e.matches?"dark":"light")}));return()=>e()}),[]),e}const h=(0,i.Ge)(s.Qf),b=(0,i.B_)(s.Qf);function y({theme:e=s.t0,systemLightTheme:t=s.CR,systemDarkTheme:n=s.y1,nativeScrollbar:i=!1,scoped:c=!1,rootClassName:l="",children:d}){const u="light"===p()?t:n,m="system"===e?u:e;a.useEffect((()=>{c||f(m,{"native-scrollbar":i},l)}),[i,m,c,l]);const v=a.useMemo((()=>({theme:e,themeValue:m})),[e,m]),y=a.useMemo((()=>({systemLightTheme:t,systemDarkTheme:n})),[t,n]);return a.createElement(o.N.Provider,{value:v},a.createElement(r.e.Provider,{value:y},c?a.createElement("div",{className:b({theme:m,"native-scrollbar":i},[h({theme:m,"native-scrollbar":i}),l])},d):d))}y.displayName="ThemeProvider"},88300:function(e,t,n){"use strict";n.d(t,{e:function(){return a}});const a=n(67294).createContext(void 0);a.displayName="ThemeSettingsContext"},7872:function(e,t,n){"use strict";n.d(t,{CK:function(){return r},CR:function(){return i},Qf:function(){return s},t0:function(){return a},y1:function(){return o}});const a="system",i="light",o="dark",r=["dark","dark-hc"],s="root"},47684:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var a=n(67294),i=n(62227),o=n(77322),r=n(42087);function s({name:e,value:t,checked:n,defaultChecked:s,disabled:c,controlRef:l,controlProps:d,onUpdate:u,onChange:m,onFocus:f,onBlur:v,id:p}){const h=(0,i.u)(),b=a.useRef(null),[y,g]=a.useState(null!==s&&void 0!==s&&s),E="boolean"===typeof n,N=E?n:y,k=(0,o.c)(l,b);return{checked:N,inputProps:Object.assign(Object.assign({},d),{name:e||h,value:t,id:p,onFocus:f,onBlur:v,disabled:c,type:"radio",onChange:e=>{E||g(e.target.checked),m&&m(e),u&&u(e.target.checked)},onChangeCapture:e=>{r.P.publish({componentId:"Radio",eventId:"click",domEvent:e})},checked:n,defaultChecked:s,"aria-checked":N,ref:k})}}},62555:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var a=n(67294),i=n(62227);function o(e){var t,n;const{name:o,value:r,defaultValue:s,options:c=[],disabled:l,onUpdate:d,onChange:u,onFocus:m,onBlur:f}=e,v=(0,i.u)(),[p,h]=a.useState(null!==s&&void 0!==s?s:null===(n=null===(t=c[0])||void 0===t?void 0:t.value)||void 0===n?void 0:n.toString()),b="undefined"!==typeof r,y=b?r:p,g=a.useCallback((e=>{b||h(e.target.value),u&&u(e),d&&d(e.target.value)}),[b,d,u]);return{containerProps:{role:"radiogroup","aria-disabled":l,"aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"]},optionsProps:c.map((e=>({name:o||v,value:e.value,content:e.content,checked:y===String(e.value),disabled:l||e.disabled,onChange:g,onFocus:m,onBlur:f})))}}},13:function(e){e.exports=function(e,t){return null!=e&&t in Object(e)}},2958:function(e,t,n){var a=n(46384),i=n(90939);e.exports=function(e,t,n,o){var r=n.length,s=r,c=!o;if(null==e)return!s;for(e=Object(e);r--;){var l=n[r];if(c&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++r<s;){var d=(l=n[r])[0],u=e[d],m=l[1];if(c&&l[2]){if(void 0===u&&!(d in e))return!1}else{var f=new a;if(o)var v=o(u,m,d,e,t,f);if(!(void 0===v?i(m,u,3,o,f):v))return!1}}return!0}},67206:function(e,t,n){var a=n(91573),i=n(16432),o=n(6557),r=n(1469),s=n(39601);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?r(e)?i(e[0],e[1]):a(e):s(e)}},91573:function(e,t,n){var a=n(2958),i=n(1499),o=n(42634);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||a(n,e,t)}}},16432:function(e,t,n){var a=n(90939),i=n(27361),o=n(79095),r=n(15403),s=n(89162),c=n(42634),l=n(40327);e.exports=function(e,t){return r(e)&&s(t)?c(l(e),t):function(n){var r=i(n,e);return void 0===r&&r===t?o(n,e):a(t,r,3)}}},40371:function(e){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},79152:function(e,t,n){var a=n(97786);e.exports=function(e){return function(t){return a(t,e)}}},1499:function(e,t,n){var a=n(89162),i=n(3674);e.exports=function(e){for(var t=i(e),n=t.length;n--;){var o=t[n],r=e[o];t[n]=[o,r,a(r)]}return t}},89162:function(e,t,n){var a=n(13218);e.exports=function(e){return e===e&&!a(e)}},42634:function(e){e.exports=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}},79095:function(e,t,n){var a=n(13),i=n(222);e.exports=function(e,t){return null!=e&&i(e,t,a)}},39601:function(e,t,n){var a=n(40371),i=n(79152),o=n(15403),r=n(40327);e.exports=function(e){return o(e)?a(r(e)):i(e)}},32424:function(){},12240:function(){},39332:function(){},95257:function(){},95603:function(){},73890:function(){},11460:function(){},74050:function(){},24872:function(){}}]);