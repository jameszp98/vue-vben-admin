import{d as a,f as m,o as c,j as p,Z as u,a8 as _,a9 as d,$ as l,a1 as f,u as g,l as S,t as v}from"./vue-f962b0e4.js";import{_ as B}from"./Login.vue_vue_type_style_index_0_lang-f3b4d257.js";import{h as x,m as C,bz as I,bd as T,by as M,e as L}from"./index.js";import"./LoginForm.vue_vue_type_script_setup_true_lang-31abeda2.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang-27a56767.js";import"./antd-2f1e67c0.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-6b984777.js";import"./index-8a187562.js";import"./useFormItem-be9db066.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang-3737b559.js";import"./index-544ec404.js";import"./MobileForm.vue_vue_type_script_setup_true_lang-7d43df77.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang-bc7cf989.js";import"./index-8453a9c0.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";const U=a({__name:"SessionTimeoutLogin",setup(b){const{prefixCls:t}=x("st-login"),s=C(),r=I(),i=T(),e=m(0),n=()=>i.getProjectConfig.permissionMode===M.BACK;return c(()=>{var o;e.value=(o=s.getUserInfo)==null?void 0:o.userId}),p(()=>{(e.value&&e.value!==s.getUserInfo.userId||n()&&r.getLastBuildMenuTime===0)&&document.location.reload()}),(o,h)=>(u(),_(v,null,{default:d(()=>[l("div",{class:f(g(t))},[S(B,{sessionTimeout:""})],2)]),_:1}))}});const G=L(U,[["__scopeId","data-v-8023cfc5"]]);export{G as default};