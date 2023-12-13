var u=(s,m,i)=>new Promise((o,d)=>{var p=e=>{try{a(i.next(e))}catch(t){d(t)}},l=e=>{try{a(i.throw(e))}catch(t){d(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(p,l);a((i=i.apply(s,m)).next())});import{_ as C}from"./BasicTable.vue_vue_type_script_setup_true_lang-08ef1831.js";import"./TableImg.vue_vue_type_style_index_0_lang-b56ea773.js";import"./componentMap-b31aab00.js";import{u as h}from"./useTable-b7ede229.js";import{o as c}from"./select-10be400c.js";import{d as x}from"./table-b1f4ce3d.js";import{t as _}from"./tree-4648116a.js";import{a as w}from"./index.js";import{d as b,Z as I,_ as v,l as P,u as f,m as k}from"./vue-f962b0e4.js";import{a3 as R}from"./antd-2f1e67c0.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const E={class:"p-4"},me=b({__name:"EditCellTable",setup(s){const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:e=>u(this,null,function*(){return e==="2"?"不能输入该值":""}),width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:e})=>k(R,{percent:Number(e)})},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:_,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"时间选择",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200},{title:"单选框",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:c,resultField:"list",labelField:"name",valueField:"id"},width:200}],[i]=h({title:"可编辑单元格示例",api:x,columns:m,showIndexColumn:!1,bordered:!0}),{createMessage:o}=w();function d({record:e,index:t,key:r,value:n}){return!1}function p({value:e,key:t,id:r}){return o.loading({content:`正在模拟保存${t}`,key:"_save_fake_data",duration:0}),new Promise(n=>{setTimeout(()=>{e===""?(o.error({content:"保存失败：不能为空",key:"_save_fake_data",duration:2}),n(!1)):(o.success({content:`记录${r}的${t}已保存`,key:"_save_fake_data",duration:2}),n(!0))},2e3)})}function l(ue){return u(this,arguments,function*({record:e,index:t,key:r,value:n}){return yield p({id:e.id,key:r,value:n})})}function a(){}return(e,t)=>(I(),v("div",E,[P(f(C),{onRegister:f(i),onEditEnd:d,onEditCancel:a,beforeEditSubmit:l},null,8,["onRegister"])]))}});export{me as default};