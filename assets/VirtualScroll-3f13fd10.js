import{M as k,z as B,e as R,w as L}from"./index.js";import{d as T,f as D,r as F,c as h,u as e,w as P,o as q,x as z,l,Z as A,a8 as U,a9 as m,E as y,$ as _,a0 as H}from"./vue-f962b0e4.js";import{P as Z}from"./index-1e1e3c34.js";import{E as N}from"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const j={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},f="virtual-scroll";function a(t,o="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${o}`}const G=T({name:"VirtualScroll",props:j,setup(t,{slots:o}){const s=D(null),r=F({first:0,last:0,scrollTop:0}),c=h(()=>parseInt(t.bench,10)),d=h(()=>parseInt(t.itemHeight,10)),g=h(()=>Math.max(0,r.first-e(c))),V=h(()=>Math.min((t.items||[]).length,r.last+e(c))),E=h(()=>({height:a((t.items||[]).length*e(d))})),I=h(()=>{const i={},n=a(t.height),u=a(t.minHeight),S=a(t.minWidth),b=a(t.maxHeight),w=a(t.maxWidth),x=a(t.width);return n&&(i.height=n),u&&(i.minHeight=u),S&&(i.minWidth=S),b&&(i.maxHeight=b),w&&(i.maxWidth=w),x&&(i.width=x),i});P([()=>t.itemHeight,()=>t.height],()=>{v()});function p(i){const n=e(s);if(!n)return 0;const u=parseInt(t.height||0,10)||n.clientHeight;return i+Math.ceil(u/e(d))}function C(){return Math.floor(r.scrollTop/e(d))}function v(){const i=e(s);i&&(r.scrollTop=i.scrollTop,r.first=C(),r.last=p(r.first))}function M(){const{items:i=[]}=t;return i.slice(e(g),e(V)).map($)}function $(i,n){n+=e(g);const u=a(n*e(d));return l("div",{class:`${f}__item`,style:{top:u},key:n},[B(o,"default",{index:n,item:i})])}return q(()=>{r.last=p(0),z(()=>{const i=e(s);i&&k({el:i,name:"scroll",listener:v,wait:0})})}),()=>l("div",{class:f,style:e(I),ref:s},[l("div",{class:`${f}__container`,style:e(E)},[M()])])}});const J=R(G,[["__scopeId","data-v-16482a0c"]]),W=L(J),K={class:"virtual-scroll-demo-wrap"},O={class:"virtual-scroll-demo__item"},Q={class:"virtual-scroll-demo-wrap"},X={class:"virtual-scroll-demo__item"},Y=T({__name:"VirtualScroll",setup(t){const o=(()=>{const s=[];for(let r=1;r<2e4;r++)s.push({title:"列表项"+r});return s})();return(s,r)=>(A(),U(e(Z),{class:"virtual-scroll-demo"},{default:m(()=>[l(e(N),null,{default:m(()=>[y("基础滚动示例")]),_:1}),_("div",K,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300},{default:m(({item:c})=>[_("div",O,H(c.title),1)]),_:1},8,["items"])]),l(e(N),null,{default:m(()=>[y("即使不可见，也预先加载50条数据，防止空白")]),_:1}),_("div",Q,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300,bench:50},{default:m(({item:c})=>[_("div",X,H(c.title),1)]),_:1},8,["items"])])]),_:1}))}});const ot=R(Y,[["__scopeId","data-v-4bd1bb22"]]);export{ot as default};
