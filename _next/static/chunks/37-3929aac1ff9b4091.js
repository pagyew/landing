(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{49725:function(e,t,n){"use strict";n.d(t,{m:function(){return k}});var r=n(97582),s=n(67294),o=n(97387),i=n(7696),c=n(48696),a=n(54272),l=n(23030),u=n(32782),d=n(97580),h=JSON.parse('{"startCopy":"Copy","endCopy":"Copied!"}'),p=JSON.parse('{"startCopy":"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","endCopy":"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!"}');var f=(0,d.e)({en:h,ru:p},"ClipboardButton");n(21467);const m=(0,u.Ge)("clipboard-button"),v=24,C=1e3,b=e=>{const{size:t=v,className:n,qa:r,hasTooltip:c=!0,tooltipInitialText:u=f("startCopy"),tooltipSuccessText:d=f("endCopy"),status:h,onClick:p}=e,C=s.useRef(null);return s.useEffect((()=>{var e;null===(e=null===C||void 0===C?void 0:C.current)||void 0===e||e.style.setProperty("--yc-button-height",`${t}px`)}),[t]),s.createElement(l.u,{disabled:!c,content:h===a.T.Success?d:u},s.createElement(o.z,{ref:C,view:"flat",className:m(null,n),qa:r,onClick:p},s.createElement(o.z.Icon,null,s.createElement(i.K,{status:h,size:t,className:m("icon")}))))};function k(e){const{text:t,timeout:n=C,onCopy:o,options:i}=e,a=(0,r.__rest)(e,["text","timeout","onCopy","options"]);return s.createElement(c.h,{text:t,timeout:n,onCopy:o,options:i},(e=>s.createElement(b,Object.assign({},a,{status:e}))))}},9367:function(e,t,n){"use strict";n.d(t,{p:function(){return x},u:function(){return y}});var r=n(97582),s=n(67294),o=n(91966),i=n.n(o),c=n(27361),a=n.n(c),l=n(88306),u=n.n(l),d=n(93386),h=n.n(d),p=n(82569),f=n.n(p),m=n(11604),v=n(32782),C=n(73809),b=n(72564);n(8665);const k=(0,v.Ge)("table"),x="_selection";function y(e){var t;const n=`withTableSelection(${(0,C.i)(e)})`;return t=class extends s.Component{constructor(){super(...arguments),this.renderHeadCell=()=>{const{data:e,selectedIds:t}=this.props;let n=!0,r=e.every(((e,r)=>{if(this.isDisabled(e,r))return!0;n=!1;const s=b.i.getRowId(this.props,e,r);return t.includes(s)}));return n&&(r=!1),this.renderCheckBox({disabled:n,checked:r,handler:this.handleAllCheckBoxUpdate})},this.renderBodyCell=(e,t)=>{const{selectedIds:n}=this.props,r=b.i.getRowId(this.props,e,t),s=n.includes(r);return this.renderCheckBox({disabled:this.isDisabled(e,t),checked:s,handler:this.handleCheckBoxUpdate.bind(this,r,t)})},this.handleCheckBoxUpdate=(e,t,n)=>{const{checked:r}=n.target,s=n.nativeEvent.shiftKey,{data:o,selectedIds:i,onSelectionChange:c}=this.props;if(s&&void 0!==this.lastCheckedIndex&&this.lastCheckedIndex>=0){const e=Math.min(this.lastCheckedIndex,t),n=Math.max(this.lastCheckedIndex,t),s=o.map(((e,t)=>b.i.getRowId(this.props,e,t))).filter(((t,r)=>e<=r&&r<=n&&!this.isDisabled(o[r],r)));c(r?h()(i,s):f()(i,...s))}else c(r?[...i,e]:f()(i,e));this.lastCheckedIndex=t},this.handleAllCheckBoxUpdate=e=>{const{checked:t}=e.target,{data:n,selectedIds:r,onSelectionChange:s}=this.props,o=n.map(((e,t)=>b.i.getRowId(this.props,e,t))),c=o.filter(((e,t)=>!this.isDisabled(n[t],t)));s(t?h()(r,c):i()(r,o))},this.enhanceColumns=u()((e=>[{id:x,name:this.renderHeadCell,template:this.renderBodyCell,className:k("checkbox_cell"),sticky:"left"===a()(e,[0,"sticky"])?"left":void 0},...e])),this.enhanceOnRowClick=u()((e=>e?(t,n,r)=>{const s=k("selection-checkbox");if(!r.nativeEvent.target.matches(`.${s}, .${s} *`))return e(t,n,r)}:e)),this.enhanceGetRowClassNames=u()((e=>(t,n)=>{const{selectedIds:r}=this.props,s=e?e(t,n).slice():[],o=b.i.getRowId(this.props,t,n),i=r.includes(o);return s.push(k("row",{selected:i})),s})),this.isDisabled=(e,t)=>{const{isRowDisabled:n,isRowSelectionDisabled:r}=this.props;return!(!r||!r(e,t))||!!n&&n(e,t)}}render(){const t=this.props,{selectedIds:n,onSelectionChange:o,columns:i,onRowClick:c,getRowClassNames:a}=t,l=(0,r.__rest)(t,["selectedIds","onSelectionChange","columns","onRowClick","getRowClassNames"]);return s.createElement(e,Object.assign({},l,{columns:this.enhanceColumns(i),onRowClick:this.enhanceOnRowClick(c),getRowClassNames:this.enhanceGetRowClassNames(a)}))}renderCheckBox({disabled:e,checked:t,handler:n}){return s.createElement(m.X,{size:"l",checked:t,disabled:e,onChange:n,className:k("selection-checkbox",{"vertical-align":this.props.verticalAlign})})}},t.displayName=n,t}},23030:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r=n(67294),s=n(30839),o=n(77322);var i=n(51960),c=n(32782);n(10913);const a=(0,c.Ge)("tooltip"),l=["bottom","top"],u=e=>{const{children:t,content:n,disabled:c,placement:u=l,qa:d}=e,[h,p]=r.useState(null),f=function(e,{openDelay:t=250,closeDelay:n}){const[o,i,c]=function(e){const[t,n]=r.useState(e);return[t,r.useCallback((()=>n(!0)),[]),r.useCallback((()=>n(!1)),[]),r.useCallback((()=>n((e=>!e))),[])]}(!1),a=r.useRef(),l=r.useRef(!1);return r.useEffect((()=>{if(e)return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",o),e.addEventListener("focus",u),e.addEventListener("blur",d),e.addEventListener("keydown",h),()=>{e.removeEventListener("mouseenter",r),e.removeEventListener("mouseleave",o),e.removeEventListener("focus",u),e.removeEventListener("blur",d),e.removeEventListener("keydown",h)};function r(){clearTimeout(a.current),a.current=window.setTimeout(i,t)}function o(){clearTimeout(a.current),a.current=window.setTimeout(c,n)}function u(e){l.current||document.activeElement!==e.target||(l.current=!0,clearTimeout(a.current),i())}function d(e){l.current&&!e.currentTarget.contains(e.relatedTarget)&&(l.current=!1,clearTimeout(a.current),c())}function h(e){e.key===s.V.ESCAPE&&(clearTimeout(a.current),c())}}),[e,i,c,t,n]),o}(h,e),m=r.Children.only(t),v=m.ref,C=(0,o.c)(p,v);return r.createElement(r.Fragment,null,r.cloneElement(m,{ref:C}),h?r.createElement(i.G,{id:e.id,role:"tooltip",className:a(null,e.className),style:e.style,open:f&&!c,placement:u,anchorRef:{current:h},disablePortal:e.disablePortal,disableEscapeKeyDown:!0,disableOutsideClick:!0,disableLayer:!0,qa:d},r.createElement("div",{className:a("content",e.contentClassName)},n)):null)}},96874:function(e){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},20731:function(e,t,n){var r=n(88668),s=n(47443),o=n(1196),i=n(29932),c=n(7518),a=n(74757);e.exports=function(e,t,n,l){var u=-1,d=s,h=!0,p=e.length,f=[],m=t.length;if(!p)return f;n&&(t=i(t,c(n))),l?(d=o,h=!1):t.length>=200&&(d=a,h=!1,t=new r(t));e:for(;++u<p;){var v=e[u],C=null==n?v:n(v);if(v=l||0!==v?v:0,h&&C===C){for(var b=m;b--;)if(t[b]===C)continue e;f.push(v)}else d(t,C,l)||f.push(v)}return f}},21078:function(e,t,n){var r=n(62488),s=n(37285);e.exports=function e(t,n,o,i,c){var a=-1,l=t.length;for(o||(o=s),c||(c=[]);++a<l;){var u=t[a];n>0&&o(u)?n>1?e(u,n-1,o,i,c):r(c,u):i||(c[c.length]=u)}return c}},5976:function(e,t,n){var r=n(6557),s=n(45357),o=n(30061);e.exports=function(e,t){return o(s(e,t,r),e+"")}},56560:function(e,t,n){var r=n(75703),s=n(38777),o=n(6557),i=s?function(e,t){return s(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:o;e.exports=i},38777:function(e,t,n){var r=n(10852),s=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=s},37285:function(e,t,n){var r=n(62705),s=n(35694),o=n(1469),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||s(e)||!!(i&&e&&e[i])}},45357:function(e,t,n){var r=n(96874),s=Math.max;e.exports=function(e,t,n){return t=s(void 0===t?e.length-1:t,0),function(){for(var o=arguments,i=-1,c=s(o.length-t,0),a=Array(c);++i<c;)a[i]=o[t+i];i=-1;for(var l=Array(t+1);++i<t;)l[i]=o[i];return l[t]=n(a),r(e,this,l)}}},30061:function(e,t,n){var r=n(56560),s=n(21275)(r);e.exports=s},21275:function(e){var t=Date.now;e.exports=function(e){var n=0,r=0;return function(){var s=t(),o=16-(s-r);if(r=s,o>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},75703:function(e){e.exports=function(e){return function(){return e}}},91966:function(e,t,n){var r=n(20731),s=n(21078),o=n(5976),i=n(29246),c=o((function(e,t){return i(e)?r(e,s(t,1,i,!0)):[]}));e.exports=c},29246:function(e,t,n){var r=n(98612),s=n(37005);e.exports=function(e){return s(e)&&r(e)}},93386:function(e,t,n){var r=n(21078),s=n(5976),o=n(45652),i=n(29246),c=s((function(e){return o(r(e,1,i,!0))}));e.exports=c},82569:function(e,t,n){var r=n(20731),s=n(5976),o=n(29246),i=s((function(e,t){return o(e)?r(e,t):[]}));e.exports=i},21467:function(){},8665:function(){},10913:function(){}}]);