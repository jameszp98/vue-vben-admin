var _=(d,a,r)=>new Promise((m,i)=>{var c=e=>{try{l(r.next(e))}catch(n){i(n)}},f=e=>{try{l(r.throw(e))}catch(n){i(n)}},l=e=>e.done?m(e.value):Promise.resolve(e.value).then(c,f);l((r=r.apply(d,a)).next())});import{_ as b}from"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./componentMap-b31aab00.js";import{u as P}from"./useForm-8838369c.js";import{_ as h}from"./PersonTable.vue_vue_type_script_setup_true_lang-d3d97000.js";import{P as g}from"./index-1e1e3c34.js";import{p as u}from"./antd-2f1e67c0.js";import{d as q,f as y,a7 as k,Z as x,a8 as C,a9 as s,l as t,E as R,u as o}from"./vue-f962b0e4.js";import{e as S}from"./index.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useFormItem-be9db066.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./BasicTable.vue_vue_type_script_setup_true_lang-08ef1831.js";import"./TableImg.vue_vue_type_style_index_0_lang-b56ea773.js";import"./onMountedOrActivated-affa4888.js";import"./sortable.esm-4ae27e0b.js";import"./useTable-b7ede229.js";import"./useContentViewHeight-4ea1ac81.js";const p=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],v=[{label:"私密",value:"1"},{label:"公开",value:"2"}],w=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:p},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:p},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:v},required:!0,colProps:{offset:2}}],B=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:p},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:p},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:v},required:!0,colProps:{offset:2}}],I=q({name:"FormHightPage",__name:"index",setup(d){const a=y(null),[r,{validate:m}]=P({layout:"vertical",baseColProps:{span:6},schemas:w,showActionButtonGroup:!1}),[i,{validate:c}]=P({layout:"vertical",baseColProps:{span:6},schemas:B,showActionButtonGroup:!1});function f(){return _(this,null,function*(){try{a.value;const[l,e]=yield Promise.all([m(),c()])}catch(l){}})}return(l,e)=>{const n=k("a-button");return x(),C(o(g),{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:s(()=>[t(n,{type:"primary",onClick:f},{default:s(()=>[R(" 提交 ")]),_:1})]),default:s(()=>[t(o(u),{title:"仓库管理",bordered:!1},{default:s(()=>[t(o(b),{onRegister:o(r)},null,8,["onRegister"])]),_:1}),t(o(u),{title:"任务管理",bordered:!1,class:"!mt-5"},{default:s(()=>[t(o(b),{onRegister:o(i)},null,8,["onRegister"])]),_:1}),t(o(u),{title:"成员管理",bordered:!1,class:"!mt-5"},{default:s(()=>[t(h,{ref_key:"tableRef",ref:a},null,512)]),_:1})]),_:1})}}});const fe=S(I,[["__scopeId","data-v-ddf1f53d"]]);export{fe as default};
