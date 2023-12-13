import{_ as S}from"./BasicTable.vue_vue_type_script_setup_true_lang-08ef1831.js";import"./TableImg.vue_vue_type_style_index_0_lang-b56ea773.js";import"./componentMap-b31aab00.js";import{getBasicColumns as r,getBasicShortColumns as x}from"./tableData-e46dcad6.js";import{a as T}from"./index.js";import{d as L}from"./table-b1f4ce3d.js";import{d as K,f as B,a7 as P,Z as v,_ as A,$ as m,l as e,a9 as o,E as n,u as a}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./antd-2f1e67c0.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./select-10be400c.js";const E={class:"p-4"},I={class:"mb-4"},M={class:"mb-4"},ge=K({__name:"RefTable",setup(N){const c=B(null),{createMessage:s}=T(),u=r();function i(){const l=a(c);if(!l)throw new Error("tableAction is null");return l}function f(){i().setLoading(!0),setTimeout(()=>{i().setLoading(!1)},1e3)}function p(){i().setProps({columns:x(),rowSelection:{type:"checkbox"},showIndexColumn:!0})}function d(){i().setProps({columns:r(),rowSelection:{type:"checkbox"},showIndexColumn:!0}),i().reload({page:1})}function _(){s.info("请在控制台查看！")}function C(){s.info("请在控制台查看！")}function g(){s.info("请在控制台查看！")}function k(){s.info("请在控制台查看！")}function b(){i().setPagination({current:2}),i().reload()}function w(){s.info("请在控制台查看！")}function h(){s.info("请在控制台查看！")}function R(){i().setSelectedRowKeys(["0","1","2"])}function y(){i().clearSelectedRowKeys()}return(l,V)=>{const t=P("a-button");return v(),A("div",E,[m("div",I,[e(t,{class:"mr-2",onClick:d},{default:o(()=>[n(" 还原 ")]),_:1}),e(t,{class:"mr-2",onClick:f},{default:o(()=>[n(" 开启loading ")]),_:1}),e(t,{class:"mr-2",onClick:p},{default:o(()=>[n(" 更改Columns ")]),_:1}),e(t,{class:"mr-2",onClick:_},{default:o(()=>[n(" 获取Columns ")]),_:1}),e(t,{class:"mr-2",onClick:C},{default:o(()=>[n(" 获取表格数据 ")]),_:1}),e(t,{class:"mr-2",onClick:g},{default:o(()=>[n(" 获取接口原始数据 ")]),_:1}),e(t,{class:"mr-2",onClick:b},{default:o(()=>[n(" 跳转到第2页 ")]),_:1})]),m("div",M,[e(t,{class:"mr-2",onClick:w},{default:o(()=>[n(" 获取选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:h},{default:o(()=>[n(" 获取选中行Key ")]),_:1}),e(t,{class:"mr-2",onClick:R},{default:o(()=>[n(" 设置选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:y},{default:o(()=>[n(" 清空选中行 ")]),_:1}),e(t,{class:"mr-2",onClick:k},{default:o(()=>[n(" 获取分页信息 ")]),_:1})]),e(a(S),{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref_key:"tableRef",ref:c,api:a(L),columns:a(u),rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}}});export{ge as default};