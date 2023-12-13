import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-08ef1831.js";import"./TableImg.vue_vue_type_style_index_0_lang-b56ea773.js";import"./componentMap-b31aab00.js";import{u as n}from"./useTable-b7ede229.js";import{P as f}from"./index-1e1e3c34.js";import{refundTimeTableSchema as c,refundTimeTableData as b}from"./data-9aaff08e.js";import{w as s,O as a,aM as i,p as r,E as d,ah as I}from"./antd-2f1e67c0.js";import{d as h,a7 as T,Z as y,a8 as g,a9 as l,l as e,E as o,u as t,$ as m}from"./vue-f962b0e4.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-8097235a.js";import"./FormItem.vue_vue_type_script_lang-d4dd8dda.js";import"./index.js";import"./helper-b0407d84.js";import"./isNumber-f0336cfd.js";import"./isBoolean-9388e2d6.js";import"./BasicForm.vue_vue_type_style_index_0_lang-e8e0eb37.js";import"./get-3d19de2f.js";import"./uniqBy-3d1a97d8.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./useForm-8838369c.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./useFormItem-be9db066.js";import"./onMountedOrActivated-affa4888.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./useContentViewHeight-4ea1ac81.js";const k={class:"pt-4 m-4 desc-wrap"},x=m("a",null,"12421",-1),C=m("div",null,"Vben",-1),S=m("p",null,"2016-12-12 12:32",-1),X=m("p",null,"Chad",-1),v=m("h4",null,"信息组",-1),_e=h({__name:"index",setup(w){const[_]=n({title:"退货进度",columns:c,pagination:!1,dataSource:b,showIndexColumn:!1,scroll:{y:300}});return(B,N)=>{const u=T("a-button");return y(),g(t(f),{title:"单号：234231029431",contentBackground:""},{extra:l(()=>[e(u,null,{default:l(()=>[o(" 操作一 ")]),_:1}),e(u,null,{default:l(()=>[o(" 操作二 ")]),_:1}),e(u,{type:"primary"},{default:l(()=>[o(" 主操作 ")]),_:1})]),footer:l(()=>[e(t(s),{"default-active-key":"1"},{default:l(()=>[e(t(s).TabPane,{key:"1",tab:"详情"}),e(t(s).TabPane,{key:"2",tab:"规则"})]),_:1})]),default:l(()=>[m("div",k,[e(t(a),{size:"small",column:2},{default:l(()=>[e(t(a).Item,{label:"创建人"},{default:l(()=>[o(" 曲丽丽 ")]),_:1}),e(t(a).Item,{label:"订购产品"},{default:l(()=>[o(" XX 服务 ")]),_:1}),e(t(a).Item,{label:"创建时间"},{default:l(()=>[o(" 2017-01-10 ")]),_:1}),e(t(a).Item,{label:"关联单据"},{default:l(()=>[x]),_:1}),e(t(a).Item,{label:"生效日期"},{default:l(()=>[o(" 2017-07-07 ~ 2017-08-08 ")]),_:1}),e(t(a).Item,{label:"备注"},{default:l(()=>[o(" 请于两个工作日内确认 ")]),_:1})]),_:1}),e(t(r),{title:"流程进度",bordered:!1},{default:l(()=>[e(t(i),{current:1,"progress-dot":"",size:"small"},{default:l(()=>[e(t(i).Step,{title:"创建项目"},{description:l(()=>[C,S]),_:1}),e(t(i).Step,{title:"部门初审"},{description:l(()=>[X]),_:1}),e(t(i).Step,{title:"财务复核"}),e(t(i).Step,{title:"完成"})]),_:1})]),_:1}),e(t(r),{title:"用户信息",bordered:!1,class:"mt-5"},{default:l(()=>[e(t(a),{column:3},{default:l(()=>[e(t(a).Item,{label:"用户姓名"},{default:l(()=>[o(" 付小小 ")]),_:1}),e(t(a).Item,{label:"会员卡号"},{default:l(()=>[o(" XX 32943898021309809423 ")]),_:1}),e(t(a).Item,{label:"身份证"},{default:l(()=>[o(" 3321944288191034921 ")]),_:1}),e(t(a).Item,{label:"联系方式"},{default:l(()=>[o(" 18112345678 ")]),_:1}),e(t(a).Item,{label:"联系地址",span:2},{default:l(()=>[o(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 ")]),_:1})]),_:1}),e(t(a),{title:"信息组",column:3},{default:l(()=>[e(t(a).Item,{label:"某某数据"},{default:l(()=>[o(" 111 ")]),_:1}),e(t(a).Item,{label:"该数据更新时间"},{default:l(()=>[o(" 2017-08-08 ")]),_:1}),e(t(a).Item,{label:"某某数据"},{default:l(()=>[o(" 725 ")]),_:1}),e(t(a).Item,{label:"该数据更新时间"},{default:l(()=>[o(" 2017-08-08 ")]),_:1})]),_:1}),v,e(t(r),{title:"多层级信息组"},{default:l(()=>[e(t(a),{title:"组名称",column:3},{default:l(()=>[e(t(a).Item,{label:"负责人"},{default:l(()=>[o(" 林东东 ")]),_:1}),e(t(a).Item,{label:"角色码"},{default:l(()=>[o(" 1234567 ")]),_:1}),e(t(a).Item,{label:"所属部门"},{default:l(()=>[o(" XX公司 - YY部 ")]),_:1}),e(t(a).Item,{label:"过期时间"},{default:l(()=>[o(" 2017-08-08 ")]),_:1}),e(t(a).Item,{label:"描述",span:2},{default:l(()=>[o(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... ")]),_:1})]),_:1}),e(t(d)),e(t(a),{title:"组名称",column:1},{default:l(()=>[e(t(a).Item,{label:"学名"},{default:l(()=>[o(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. ")]),_:1})]),_:1}),e(t(d)),e(t(a),{title:"组名称",column:1},{default:l(()=>[e(t(a).Item,{label:"负责人"},{default:l(()=>[o(" 付小小 ")]),_:1}),e(t(a).Item,{label:"角色码"},{default:l(()=>[o(" 1234568 ")]),_:1})]),_:1})]),_:1})]),_:1}),e(t(r),{title:"用户近半年来电记录",class:"my-5"},{default:l(()=>[e(t(I))]),_:1}),e(t(p),{onRegister:t(_)},null,8,["onRegister"])])]),_:1})}}});export{_e as default};
