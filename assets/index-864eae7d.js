import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-08ef1831.js";import"./TableImg.vue_vue_type_style_index_0_lang-b56ea773.js";import{a as b}from"./componentMap-b31aab00.js";import{u as g}from"./useTable-b7ede229.js";import{a as C}from"./system-f9b163cb.js";import{b as x}from"./index-05c55ef7.js";import{_ as k,c as y,s as R}from"./DeptModal.vue_vue_type_script_setup_true_lang-77c633d6.js";import{d as S,a7 as w,Z as n,_ as M,l as o,a9 as i,E as T,a8 as v,u as e,ab as B}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./index.js";import"./antd-2f1e67c0.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const ce=S({name:"DeptManagement",__name:"index",setup(D){const[m,{openModal:r}]=x(),[s,{reload:l}]=g({title:"部门列表",api:C,columns:y,formConfig:{labelWidth:120,schemas:R},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function d(t){}function u(){l()}return(t,E)=>{const f=w("a-button");return n(),M("div",null,[o(e(h),{onRegister:e(s)},{toolbar:i(()=>[o(f,{type:"primary",onClick:p},{default:i(()=>[T(" 新增部门 ")]),_:1})]),bodyCell:i(({column:_,record:a})=>[_.key==="action"?(n(),v(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,a)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),o(k,{onRegister:e(m),onSuccess:u},null,8,["onRegister"])])}}});export{ce as default};