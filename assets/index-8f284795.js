import{P as L}from"./index-1e1e3c34.js";import{bk as N,a_ as S}from"./index.js";import{h as B,o as E}from"./antd-2f1e67c0.js";import{d as D,r as I,h as O,c as u,a7 as f,Z as m,a8 as P,a9 as r,$ as e,l as o,u as l,E as p,a0 as c,_ as h,F as W,aa as A}from"./vue-f962b0e4.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const F={class:"flex"},M={class:"w-1/3 bg-white p-4"},U={class:"flex items-center"},J=e("span",{class:"text-lg font-medium mr-4"}," 连接状态: ",-1),R=e("hr",{class:"my-4"},null,-1),Z={class:"flex"},$=e("p",{class:"text-lg font-medium mt-4"},"设置",-1),j=e("hr",{class:"my-4"},null,-1),q={class:"w-2/3 bg-white ml-4 p-4"},z=e("span",{class:"text-lg font-medium mr-4"}," 消息记录: ",-1),G=e("hr",{class:"my-4"},null,-1),H={class:"max-h-80 overflow-auto"},K={class:"flex items-center"},Q=e("span",{class:"mr-2 text-primary font-medium"},"收到消息:",-1),re=D({__name:"index",setup(X){const g=B.TextArea,t=I({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:_,data:i,send:x,close:b,open:y}=N(t.server,{autoReconnect:!1,heartbeat:!0});O(()=>{if(i.value)try{const d=JSON.parse(i.value);t.recordList.push(d)}catch(d){t.recordList.push({res:i.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const a=u(()=>_.value==="OPEN"),k=u(()=>a.value?"success":"red"),w=u(()=>[...t.recordList].reverse());function T(){x(t.sendValue),t.sendValue=""}function V(){a.value?b():y()}return(d,n)=>{const C=f("a-input"),v=f("a-button");return m(),P(l(L),{title:"WebSocket 示例"},{default:r(()=>[e("div",F,[e("div",M,[e("div",U,[J,o(l(E),{color:k.value},{default:r(()=>[p(c(l(_)),1)]),_:1},8,["color"])]),R,e("div",Z,[o(C,{value:t.server,"onUpdate:value":n[0]||(n[0]=s=>t.server=s),"addon-before":"服务地址",disabled:""},null,8,["value"]),o(v,{type:a.value?"danger":"primary",onClick:V},{default:r(()=>[p(c(a.value?"关闭连接":"开启连接"),1)]),_:1},8,["type"])]),$,j,o(l(g),{placeholder:"需要发送到服务器的内容",disabled:!a.value,value:t.sendValue,"onUpdate:value":n[1]||(n[1]=s=>t.sendValue=s),allowClear:""},null,8,["disabled","value"]),o(v,{type:"primary",block:"",class:"mt-4",disabled:!a.value,onClick:T},{default:r(()=>[p(" 发送 ")]),_:1},8,["disabled"])]),e("div",q,[z,G,e("div",H,[e("ul",null,[(m(!0),h(W,null,A(w.value,s=>(m(),h("li",{class:"mt-2",key:s.time},[e("div",K,[Q,e("span",null,c(l(S)(s.time)),1)]),e("div",null,c(s.res),1)]))),128))])])])])]),_:1})}}});export{re as default};
