import{u}from"./useContextMenu-b69faf00.js";import{C as s,a as m}from"./index.js";import{P as d}from"./index-1e1e3c34.js";import{d as b,a7 as f,Z as _,a8 as C,a9 as e,l as n,u as o,E as r}from"./vue-f962b0e4.js";import"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const R=b({__name:"index",setup(x){const[l]=u(),{createMessage:a}=m();function c(t){l({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{a.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{a.success("click open")}}]})}function p(t){l({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{a.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return(t,h)=>{const i=f("a-button");return _(),C(o(d),{title:"右键菜单示例"},{default:e(()=>[n(o(s),{title:"Simple"},{default:e(()=>[n(i,{type:"primary",onContextmenu:c},{default:e(()=>[r(" Right Click on me ")]),_:1})]),_:1}),n(o(s),{title:"Multiple",class:"mt-4"},{default:e(()=>[n(i,{type:"primary",onContextmenu:p},{default:e(()=>[r(" Right Click on me ")]),_:1})]),_:1})]),_:1})}}});export{R as default};
