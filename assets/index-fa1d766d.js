var q=Object.defineProperty,A=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var S=(t,e,o)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,k=(t,e)=>{for(var o in e||(e={}))z.call(e,o)&&S(t,o,e[o]);if(T)for(var o of T(e))E.call(e,o)&&S(t,o,e[o]);return t},I=(t,e)=>A(t,K(e));var M=(t,e,o)=>new Promise((i,p)=>{var y=s=>{try{d(o.next(s))}catch(g){p(g)}},c=s=>{try{d(o.throw(s))}catch(g){p(g)}},d=s=>s.done?i(s.value):Promise.resolve(s.value).then(y,c);d((o=o.apply(t,e)).next())});import{b as w}from"./index-05c55ef7.js";import{_ as N}from"./Modal1.vue_vue_type_script_setup_true_lang-b8268a96.js";import{_ as O}from"./Modal2.vue_vue_type_script_setup_true_lang-5f546d6d.js";import{_ as V}from"./Modal3.vue_vue_type_script_setup_true_lang-ffa21129.js";import{_ as B}from"./Modal4.vue_vue_type_script_setup_true_lang-9eb0acac.js";import{P as U}from"./index-1e1e3c34.js";import{d as P,f as b,Z as x,a8 as R,a9 as r,$ as G,l as a,u as n,r as H,I as L,m as Z,s as j,a7 as J,E as u,ah as Q,ab as X,x as Y}from"./vue-f962b0e4.js";import{_ as ee}from"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./componentMap-b31aab00.js";import{u as oe}from"./useForm-8838369c.js";import{M as te,x as f,u as ae,m as ne}from"./antd-2f1e67c0.js";import"./index.js";import"./useWindowSizeFn-844b46eb.js";import"./useContentViewHeight-4ea1ac81.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./helper-b0407d84.js";import"./isBoolean-9388e2d6.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const re={InputTextArea:{colProps:{span:23},componentProps:{placeholder:"请输入内容",autoSize:{minRows:2,maxRows:6},maxlength:255,showCount:!0}},InputNumber:{colProps:{span:20,offset:2},componentProps:{placeholder:"请输入数字",min:0}},Input:{colProps:{span:20,offset:2},componentProps:{placeholder:"请输入内容",min:0}}};function se({label:t="备注信息",required:e=!0,inputType:o="InputTextArea",defaultValue:i=""}){return[k({field:"txt",component:o,label:t,defaultValue:i,required:!!e},re[o])]}const le={class:"pt-5 pr-3px"},ie=P({__name:"dialog",props:{title:{},addFormSchemas:{},onOK:{},width:{},labelWidth:{},layout:{}},setup(t){const e=t,o=b(!0),[i,{validate:p}]=oe({schemas:e.addFormSchemas,showActionButtonGroup:!1,labelWidth:e.labelWidth||80,layout:e.layout||"horizontal"});function y(){return M(this,null,function*(){const c=yield p();e.onOK&&(yield e.onOK(c.txt)),o.value=!1})}return(c,d)=>(x(),R(n(te),{open:o.value,"onUpdate:open":d[0]||(d[0]=s=>o.value=s),title:c.title,onOk:y,destroyOnClose:!0,width:c.width||"500px",okText:"确定",cancelText:"取消"},{default:r(()=>[G("div",le,[a(n(ee),{onRegister:n(i)},null,8,["onRegister"])])]),_:1},8,["open","title","width"]))}});function pe(t){let e=null;const o=H(I(k({},t),{addFormSchemas:se({label:t.label,required:t.required,inputType:t.inputType,defaultValue:t.defaultValue})})),i=P({render(){return Z(ie,k({},o))}});e=a(i),L(e,document.createElement("div"));function p(){e!=null&&e.el&&e.el.parentNode&&e.el.parentNode.removeChild(e.el)}return{vm:e,close:p,get $el(){return e==null?void 0:e.el}}}const Ue=P({__name:"index",setup(t){const e=j(null),[o,{openModal:i}]=w(),[p,{openModal:y}]=w(),[c,{openModal:d}]=w(),[s,{openModal:g}]=w(),C=b(!1),$=b(null);function D(){g(!0,{data:"content",info:"Info"})}function F(){i(!0)}function h(v){switch(v){case 1:e.value=N;break;case 2:e.value=O;break;case 3:e.value=V;break;default:e.value=B;break}Y(()=>{$.value={data:Math.random(),info:"Info222"},C.value=!0})}function W(){pe({title:"请输入邮箱",required:!0,label:"邮箱",defaultValue:"默认邮箱",onOK:v=>M(this,null,function*(){ne.success("填写的邮箱地址为"+v)}),inputType:"Input"})}return(v,l)=>{const m=J("a-button");return x(),R(n(U),{title:"modal组件使用示例"},{default:r(()=>[a(n(f),{message:`使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable
    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度`,"show-icon":""}),a(m,{type:"primary",class:"my-4",onClick:F},{default:r(()=>[u(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) ")]),_:1}),a(n(f),{message:"内外同时同时显示隐藏","show-icon":""}),a(m,{type:"primary",class:"my-4",onClick:n(y)},{default:r(()=>[u(" 打开弹窗 ")]),_:1},8,["onClick"]),a(n(f),{message:"自适应高度","show-icon":""}),a(m,{type:"primary",class:"my-4",onClick:n(d)},{default:r(()=>[u(" 打开弹窗 ")]),_:1},8,["onClick"]),a(n(f),{message:"内外数据交互","show-icon":""}),a(m,{type:"primary",class:"my-4",onClick:D},{default:r(()=>[u(" 打开弹窗并传递数据 ")]),_:1}),a(n(f),{message:"使用动态组件的方式在页面内使用多个弹窗","show-icon":""}),a(n(ae),null,{default:r(()=>[a(m,{type:"primary",class:"my-4",onClick:l[0]||(l[0]=_=>h(1))},{default:r(()=>[u(" 打开弹窗1 ")]),_:1}),a(m,{type:"primary",class:"my-4",onClick:l[1]||(l[1]=_=>h(2))},{default:r(()=>[u(" 打开弹窗2 ")]),_:1}),a(m,{type:"primary",class:"my-4",onClick:l[2]||(l[2]=_=>h(3))},{default:r(()=>[u(" 打开弹窗3 ")]),_:1}),a(m,{type:"primary",class:"my-4",onClick:l[3]||(l[3]=_=>h(4))},{default:r(()=>[u(" 打开弹窗4 ")]),_:1})]),_:1}),a(n(f),{message:"使用函数方式创建Prompt，适合较为简单的表单内容，如果需要弹出较为复杂的内容，请使用 Modal.","show-icon":""}),a(m,{type:"primary",class:"my-4",onClick:W},{default:r(()=>[u(" Prompt ")]),_:1}),e.value?(x(),R(Q(e.value),{key:0,open:C.value,"onUpdate:open":l[4]||(l[4]=_=>C.value=_),userData:$.value},null,40,["open","userData"])):X("",!0),a(N,{onRegister:n(o),minHeight:100},null,8,["onRegister"]),a(O,{onRegister:n(p)},null,8,["onRegister"]),a(V,{onRegister:n(c)},null,8,["onRegister"]),a(B,{onRegister:n(s)},null,8,["onRegister"])]),_:1})}}});export{Ue as default};
