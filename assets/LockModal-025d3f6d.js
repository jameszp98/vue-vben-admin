var _=(u,s,o)=>new Promise((l,m)=>{var p=t=>{try{r(o.next(t))}catch(n){m(n)}},d=t=>{try{r(o.throw(t))}catch(n){m(n)}},r=t=>t.done?l(t.value):Promise.resolve(t.value).then(p,d);r((o=o.apply(u,s)).next())});import{h as $,m as B,i as I}from"./index.js";import{a as L,B as C}from"./index-05c55ef7.js";import{_ as M}from"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./componentMap-b31aab00.js";import{u as x}from"./useForm-8838369c.js";import{u as N}from"./lock-5a0d57cb.js";import{h as R}from"./header-55b09394.js";import{d as b,c as f,a7 as P,Z as F,a8 as U,a9 as g,$ as i,a1 as c,u as e,a0 as h,l as k,E as V,ac as D}from"./vue-f962b0e4.js";import"./antd-2f1e67c0.js";import"./useWindowSizeFn-844b46eb.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const q=["src"],fe=b({name:"LockModal",__name:"LockModal",setup(u){const{t:s}=I(),{prefixCls:o}=$("header-lock-modal"),l=B(),m=N(),p=f(()=>{var a;return(a=l.getUserInfo)==null?void 0:a.realName}),[d,{closeModal:r}]=L(),[t,{validate:n,resetFields:v}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:s("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]}),y=()=>_(this,null,function*(){const{password:a=""}=yield n();r(),m.setLockInfo({isLock:!0,pwd:a}),yield v()}),w=f(()=>{const{avatar:a}=l.getUserInfo;return a||R});return(a,z)=>{const S=P("a-button");return F(),U(e(C),D({footer:null,title:e(s)("layout.header.lockScreen")},a.$attrs,{class:e(o),onRegister:e(d)}),{default:g(()=>[i("div",{class:c(`${e(o)}__entry`)},[i("div",{class:c(`${e(o)}__header`)},[i("img",{src:w.value,class:c(`${e(o)}__header-img`)},null,10,q),i("p",{class:c(`${e(o)}__header-name`)},h(p.value),3)],2),k(e(M),{onRegister:e(t)},null,8,["onRegister"]),i("div",{class:c(`${e(o)}__footer`)},[k(S,{type:"primary",block:"",class:"mt-2",onClick:y},{default:g(()=>[V(h(e(s)("layout.header.lockScreenBtn")),1)]),_:1})],2)],2)]),_:1},16,["title","class","onRegister"])}}});export{fe as default};
