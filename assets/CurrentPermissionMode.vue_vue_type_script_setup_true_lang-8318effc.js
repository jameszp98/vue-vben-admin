import{bd as m,a2 as c,by as p}from"./index.js";import{d,c as _,a7 as l,Z as u,_ as f,E as e,l as o,a9 as n,a0 as C,u as s}from"./vue-f962b0e4.js";import{E as M}from"./antd-2f1e67c0.js";const P={class:"mt-2"},E=d({name:"CurrentPermissionMode",__name:"CurrentPermissionMode",setup(g){const a=m(),r=_(()=>a.getProjectConfig.permissionMode),{togglePermissionMode:i}=c();return(k,y)=>{const t=l("a-button");return u(),f("div",P,[e(" 当前权限模式： "),o(t,{type:"link"},{default:n(()=>[e(C(r.value===s(p).BACK?"后台权限模式":"前端角色权限模式"),1)]),_:1}),o(t,{class:"ml-4",onClick:s(i),type:"primary"},{default:n(()=>[e(" 切换权限模式 ")]),_:1},8,["onClick"]),o(s(M))])}}});export{E as _};