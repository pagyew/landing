(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5527],{26595:function(e,t,n){"use strict";var l=n(67294);t.Z=e=>l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0",clipRule:"evenodd"}))},70588:function(e,t,n){"use strict";var l=n(67294);t.Z=e=>l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",clipRule:"evenodd"}))},45527:function(e,t,n){"use strict";n.d(t,{h:function(){return N}});var l=n(67294),a=n(70588),r=n(70926),s=n(50254),o=n(43671);let u=(0,n(32782).Ge)("dropdown-menu"),i=l.createContext({toggle(){},data:void 0});i.displayName="DropdownMenu.Context";var c=n(97582),m=n(26595),d=n(44607),v=n(83508),f=n(8682),p=n(38117),h=n(555);let g=[],b=l.createContext({activeMenuPath:g,setActiveMenuPath:()=>{},anchorRef:{current:null}}),E=({anchorRef:e,children:t,disabled:n})=>{let[a,r]=l.useState(g);l.useEffect(()=>{n&&r(g)},[n]);let s=l.useMemo(()=>({activeMenuPath:a,setActiveMenuPath:r,anchorRef:e}),[a,e]);return l.createElement(b.Provider,{value:s},t)},k={text:"",action:()=>{},path:[]};function w(e){return e.disabled||e===k}function C(e){var t;return null!==(t=null==e?void 0:e.join(" "))&&void 0!==t?t:""}let M=({items:e,open:t,anchorRef:n,onClose:a,size:r,menuProps:s,children:o,popupProps:c,path:m=[]})=>{let{toggle:d,data:f}=l.useContext(i),{activeMenuPath:g,setActiveMenuPath:E,anchorRef:M}=l.useContext(b),x=m.length>0,N=l.useCallback(()=>{E(m.slice(0,m.length-1))},[E,m]),P=l.useCallback(e=>{var t;E(m),null===(t=null==c?void 0:c.onMouseEnter)||void 0===t||t.call(c,e)},[m,c,E]),j=l.useCallback(e=>{var t;N(),null===(t=null==c?void 0:c.onMouseLeave)||void 0===t||t.call(c,e)},[N,c]),O=l.useCallback((e,t)=>{var n;e.items&&e.path?E(e.path):(null===(n=e.action)||void 0===n||n.call(e,t,f),d(!1))},[f,E,d]),R=l.useCallback((t,n)=>{switch(n.key){case"Escape":return x&&(n.stopPropagation(),null==N||N()),!1;case"Enter":case" ":{let l=e[t],a=null==l?void 0:l.items;return(x||a)&&(n.stopPropagation(),n.preventDefault()),l&&O(l,n),!1}}return!0},[N,O,x,e]),D=t&&C(m)===C(g),{activeItemIndex:L,setActiveItemIndex:A,reset:I}=(0,p.c)({items:e,skip:w,anchorRef:M,onAnchorKeyDown:R,disabled:!D,initialValue:x?0:-1});return l.useEffect(()=>{t||I()},[t,I]),l.createElement(h.G,Object.assign({open:t,anchorRef:n,onClose:a},c,{onMouseEnter:P,onMouseLeave:j}),o||l.createElement(v.v,Object.assign({className:u("menu"),size:r},s),e.map((e,n)=>{var r;let s=D&&L===n,o=t&&!s&&0!==g.length&&C(e.path)===C(g.slice(0,e.path.length)),i=Object.assign(Object.assign({},e.extraProps),{onMouseEnter:()=>A(n)});return l.createElement(y,Object.assign({key:n,className:u("menu-item",{separator:e===k,"active-parent":o,"with-submenu":!!(null===(r=e.items)||void 0===r?void 0:r.length)},e.className),selected:s,popupProps:c,closeMenu:a},e,{extraProps:i}))})))},y=e=>{var{text:t,action:n,items:a,popupProps:r,closeMenu:s,children:p,path:h}=e,g=(0,c._T)(e,["text","action","items","popupProps","closeMenu","children","path"]);let{toggle:E,data:k}=l.useContext(i),w=l.useRef(null),C=(0,f.g)(),{hasSubmenu:y,isSubmenuOpen:x,closeSubmenu:N,openSubmenu:P}=function({items:e,path:t}){var n;let{activeMenuPath:a,setActiveMenuPath:r}=l.useContext(b),s=!!t&&!!(null==e?void 0:e.length),o=l.useCallback(()=>{t&&r(t.slice(0,t.length-1))},[t,r]),u=l.useCallback(()=>{t&&r(t)},[t,r]);return{hasSubmenu:s,isSubmenuOpen:null!==(n=null==t?void 0:t.every((e,t)=>e===(null==a?void 0:a[t])))&&void 0!==n&&n,openSubmenu:u,closeSubmenu:o}}({items:a,path:h}),j=l.useCallback(()=>{let e=()=>{s?s():E(!1)};y?(N(),requestAnimationFrame(e)):e()},[s,N,y,E]),O=l.useCallback(e=>{y||(null==n||n(e,k),j())},[n,k,j,y]),R=l.useMemo(()=>Object.assign(Object.assign({},g.extraProps),{onMouseEnter:e=>{var t,n;null===(n=null===(t=g.extraProps)||void 0===t?void 0:t.onMouseEnter)||void 0===n||n.call(t,e),y&&P()},onMouseLeave:e=>{var t,n;null===(n=null===(t=g.extraProps)||void 0===t?void 0:t.onMouseLeave)||void 0===n||n.call(t,e),y&&N()}}),[g.extraProps,N,y,P]),D=l.useMemo(()=>"rtl"===C?["left-start","right-start"]:["right-start","left-start"],[C]),L=l.useMemo(()=>y?l.createElement(o.J,{data:"rtl"===C?m.Z:d.Z,size:10,className:u("sub-menu-arrow")}):g.iconEnd,[y,C,g.iconEnd]);return l.createElement(l.Fragment,null,l.createElement(v.v.Item,Object.assign({ref:w},g,{extraProps:R,onClick:O,iconEnd:L}),t||p),y&&a&&l.createElement(M,{popupProps:Object.assign(Object.assign({},r),{className:u("sub-menu",null==r?void 0:r.className),placement:D}),items:a,path:h,open:x,anchorRef:w,onClose:j}))},x=e=>"function"==typeof e;n(51692);let N=Object.assign(({items:e=[],size:t="m",icon:n=l.createElement(o.J,{data:a.Z}),open:c,onOpenToggle:m,hideOnScroll:d=!0,data:v,disabled:f,switcher:p,renderSwitcher:h,switcherWrapperClassName:g,defaultSwitcherProps:b,defaultSwitcherClassName:w,onSwitcherClick:C,menuProps:y,popupProps:N,children:P})=>{var j;let O=l.useRef(null),{isPopupShown:R,togglePopup:D,closePopup:L}=function(e,t,n){let[a,r]=function(e,t,n,a=void 0!==e&&void 0!==t){let r=function(e,t){let[n,a]=l.useState(e);return[n,l.useCallback(e=>{x(e)?a(n=>{let l=e(n);return null==t||t(l),l}):(null==t||t(e),a(e))},[t])]}(e||n,t);return a?[e,t]:r}(e,t,!1),s=l.useCallback(e=>{r(t=>"boolean"==typeof e?e:!t)},[r]),o=l.useCallback(()=>{r(!1)},[r]);return l.useEffect(()=>{n&&a&&o()},[o,n,a]),{isPopupShown:a,togglePopup:s,closePopup:o}}(c,m,f);j=!R||!d,l.useEffect(()=>{if(j)return;let e=e=>{e.target.contains(O.current)&&L(e)};return document.addEventListener("scroll",e,!0),()=>{document.removeEventListener("scroll",e,!0)}},[O,L,j]);let A=l.useMemo(()=>({toggle:D,data:v}),[v,D]),I=l.useMemo(()=>(function e(t,n,l=[],a=0){let r=[],s=!1,o=a;for(let a of t)if(Array.isArray(a)){let t=e(a,n,l,o);0!==r.length&&r.push(n),r.push(...t),o+=t.length,s=!0}else{if(a.hidden)continue;s&&r.push(n);let t=Object.assign(Object.assign({},a),{path:[...l,o++]});a.items&&(t.items=e(a.items,n,t.path)),r.push(t),s=!1}return r})(e,k),[e]),G=l.useCallback(e=>{f||(null==C||C(e),D())},[f,C,D]),{onKeyDown:z}=(0,r.b)(G),Z=l.useMemo(()=>({onClick:G,onKeyDown:z}),[G,z]);return l.createElement(i.Provider,{value:A},l.createElement("div",Object.assign({ref:O,className:u("switcher-wrapper",g)},h?{}:Z),(null==h?void 0:h(Z))||p||l.createElement(s.z,Object.assign({view:"flat",size:t},b,{className:u("switcher-button",w),disabled:f}),n)),l.createElement(E,{anchorRef:O,disabled:!R},l.createElement(M,{items:I,open:R,size:t,menuProps:y,anchorRef:O,onClose:L,popupProps:N},P)))},{Item:y})},83508:function(e,t,n){"use strict";n.d(t,{v:function(){return u}});var l=n(67294),a=n(32782),r=n(95e3),s=n(82187);n(73600);let o=(0,a.Ge)("menu"),u=l.forwardRef(function({size:e="m",children:t,style:n,className:a,qa:r},s){return l.createElement("ul",{ref:s,role:"menu",style:n,className:o({size:e},a),"data-qa":r},t)});u.Item=s.s,u.Group=r.k},95e3:function(e,t,n){"use strict";n.d(t,{k:function(){return s}});var l=n(67294),a=n(62227);let r=(0,n(32782).Ge)("menu"),s=l.forwardRef(function({label:e,children:t,style:n,className:s,qa:o},u){let i=(0,a.u)();return l.createElement("li",{ref:u,className:r("list-group-item")},l.createElement("div",{style:n,className:r("group",s),"data-qa":o},e&&l.createElement("div",{id:i,className:r("group-label")},e),l.createElement("ul",{role:"group","aria-labelledby":i,className:r("group-list")},t)))})},82187:function(e,t,n){"use strict";n.d(t,{s:function(){return u}});var l=n(67294),a=n(70926),r=n(32782),s=n(42087);let o=(0,r.Ge)("menu"),u=l.forwardRef(function({icon:e,iconStart:t=e,iconEnd:n,title:r,disabled:u,active:i,selected:c,href:m,target:d,rel:v,onClick:f,style:p,className:h,theme:g,extraProps:b,children:E,qa:k},w){let C;let{onKeyDown:M}=(0,a.b)(f),y=l.useCallback(e=>{s.P.publish({componentId:"MenuItem",eventId:"click",domEvent:e})},[]),x={role:"menuitem",onKeyDown:f&&!u?M:void 0},N={title:r,onClick:u?void 0:f,onClickCapture:u?void 0:y,style:p,tabIndex:u?-1:0,className:o("item",{disabled:u,active:i,selected:c,theme:g,interactive:!!f||!!m},h),"data-qa":k},P=[t&&l.createElement("div",{key:"icon-start",className:o("item-icon")},t),l.createElement("div",{key:"content",className:o("item-content")},E),n&&l.createElement("div",{key:"icon-end",className:o("item-icon-end")},n)];return C=m?l.createElement("a",Object.assign({},x,b,N,{href:m,target:d,rel:v}),P):l.createElement("div",Object.assign({},x,b,N),P),l.createElement("li",{ref:w,className:o("list-item")},C)})},38117:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var l=n(67294);function a(e,t,n=1,l){let r=(e.length+t-n%e.length)%e.length;return l&&l(e[r])?a(e,r,1,l):r}function r(e,t,n=1,l){let a=(t+n)%e.length;return l&&l(e[a])?r(e,a,1,l):a}function s({items:e,skip:t,pageSize:n,processHomeKey:s=!0,processEndKey:o=!0,anchorRef:u,disabled:i=!1,initialValue:c=-1,onAnchorKeyDown:m}){let[d,v]=l.useState(c),f=l.useCallback(()=>{v(c)},[c]);return l.useEffect(()=>{e&&f()},[e,f]),l.useLayoutEffect(()=>{if(i||!e.some(e=>!(null==t?void 0:t(e))))return;let l=null==u?void 0:u.current;if(!l)return;let c=l=>{if(!1!==(null==m?void 0:m(d,l)))switch(l.key){case"ArrowDown":l.preventDefault(),v(n=>r(e,n,1,t));break;case"ArrowUp":l.preventDefault(),v(n=>a(e,n,1,t));break;case"PageDown":if(!n)return;l.preventDefault(),v(l=>r(e,l,n,t));break;case"PageUp":if(!n)return;l.preventDefault(),v(l=>a(e,l,n,t));break;case"Home":if(!s)return;l.preventDefault(),v(n=>a(e,n,n,t));break;case"End":if(!o)return;l.preventDefault(),v(n=>a(e,n,n+1,t))}};return l.addEventListener("keydown",c),()=>{l.removeEventListener("keydown",c)}},[d,u,i,e,m,n,o,s,t]),{activeItemIndex:d,setActiveItemIndex:v,reset:f}}},51692:function(){},73600:function(){}}]);