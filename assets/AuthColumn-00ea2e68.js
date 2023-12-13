import{_ as s}from"./BasicTable.vue_vue_type_script_setup_true_lang-08ef1831.js";import"./TableImg.vue_vue_type_style_index_0_lang-b56ea773.js";import{a as p}from"./componentMap-b31aab00.js";import{u}from"./useTable-b7ede229.js";import{d as c}from"./table-b1f4ce3d.js";import{d as h,Z as n,_ as f,l as b,a9 as _,a8 as w,u as o,ab as x}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./index.js";import"./antd-2f1e67c0.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const I={class:"p-4"},it=h({__name:"AuthColumn",setup(C){const a=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",minWidth:200,auth:"test"},{title:"状态",dataIndex:"status",width:100},{title:"状态1",dataIndex:"status1",width:100},{title:"状态2",dataIndex:"status2",width:100},{title:"状态3",dataIndex:"status3",width:100},{title:"状态4",dataIndex:"status4",width:100},{title:"状态5",dataIndex:"status5",width:100},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=u({title:"TableAction组件及固定列示例",api:c,columns:a,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},actionColumn:{width:250,title:"Action",dataIndex:"action"}});function l(e){}function m(e){}function i(e){}return(e,k)=>(n(),f("div",I,[b(o(s),{onRegister:o(r)},{bodyCell:_(({column:d,record:t})=>[d.key==="action"?(n(),w(o(p),{key:0,actions:[{label:"编辑",onClick:l.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:m.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:i.bind(null,t)},ifShow:A=>t.status!=="enable"},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:i.bind(null,t)},ifShow:()=>t.status==="enable"},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:i.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])):x("",!0)]),_:1},8,["onRegister"])]))}});export{it as default};