var G=Object.defineProperty,P=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(e,n,t)=>n in e?G(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n)=>{for(var t in n||(n={}))B.call(n,t)&&k(e,t,n[t]);if(I)for(var t of I(n))D.call(n,t)&&k(e,t,n[t]);return e},C=(e,n)=>P(e,U(n));import{u as w}from"./useFormDesignState-4fbefc60.js";import{c as $}from"./index-a99c5411.js";import{a as N,I as V,e as A}from"./index.js";import{h as E}from"./antd-2f1e67c0.js";import{d as M,r as S,G as T,a7 as b,Z as l,_ as i,F as h,aa as y,$ as c,l as u,E as F}from"./vue-f962b0e4.js";import"./isNumber-f0336cfd.js";const{createMessage:p}=N(),j=Object.assign({success:e=>{p.success(e)},error:e=>{p.error(e)},warning:e=>{p.warning(e)},info:e=>{p.info(e)}}),L=j,R=M({name:"FormOptions",components:{Input:E,Icon:V},setup(){var r;const e=S({}),{formConfig:n}=w(),t=((r=n.value.currentItem)==null?void 0:r.component)==="TreeSelect"?"treeData":"options",m=()=>{var s,a,_,g;(a=(s=n.value.currentItem)==null?void 0:s.componentProps)!=null&&a[t]||(n.value.currentItem.componentProps[t]=[]);const o=((g=(_=n.value.currentItem)==null?void 0:_.componentProps)==null?void 0:g[t].length)+1;n.value.currentItem.componentProps[t].push({label:`选项${o}`,value:""+o})},v=o=>{var s,a;$((a=(s=n.value.currentItem)==null?void 0:s.componentProps)==null?void 0:a[t],o)},f=()=>{var o,s;(s=(o=n.value.currentItem)==null?void 0:o.columns)==null||s.push({span:12,children:[]})},d=o=>{if(o===0)return L.warning("请至少保留一个栅格");$(n.value.currentItem.columns,o)};return C(O({},T(e)),{formConfig:n,addOptions:m,deleteOptions:v,key:t,deleteGridOptions:d,addGridOptions:f})}});const Z={key:0},q={class:"options-box"},z=["onClick"],H={key:1},J={class:"options-box"},K=["onClick"];function Q(e,n,t,m,v,f){const d=b("Input"),r=b("Icon");return l(),i("div",null,[["Grid"].includes(e.formConfig.currentItem.component)?(l(),i("div",Z,[(l(!0),i(h,null,y(e.formConfig.currentItem.columns,(o,s)=>(l(),i("div",{key:s},[c("div",q,[u(d,{value:o.span,"onUpdate:value":a=>o.span=a,class:"options-value"},null,8,["value","onUpdate:value"]),c("a",{class:"options-delete",onClick:a=>e.deleteGridOptions(s)},[u(r,{icon:"ant-design:delete-outlined"})],8,z)])]))),128)),c("a",{onClick:n[0]||(n[0]=(...o)=>e.addGridOptions&&e.addGridOptions(...o))},[u(r,{icon:"ant-design:file-add-outlined"}),F(" 添加栅格 ")])])):(l(),i("div",H,[(l(!0),i(h,null,y(e.formConfig.currentItem.componentProps[e.key],(o,s)=>(l(),i("div",{key:s},[c("div",J,[u(d,{value:o.label,"onUpdate:value":a=>o.label=a},null,8,["value","onUpdate:value"]),u(d,{value:o.value,"onUpdate:value":a=>o.value=a,class:"options-value"},null,8,["value","onUpdate:value"]),c("a",{class:"options-delete",onClick:a=>e.deleteOptions(s)},[u(r,{icon:"ant-design:delete-outlined"})],8,K)])]))),128)),c("a",{onClick:n[1]||(n[1]=(...o)=>e.addOptions&&e.addOptions(...o))},[u(r,{icon:"ant-design:file-add-outlined"}),F(" 添加选项 ")])]))])}const te=A(R,[["render",Q],["__scopeId","data-v-a999f6b7"]]);export{te as default};