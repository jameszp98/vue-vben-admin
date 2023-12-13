import{d as g}from"./vuedraggable.umd-39acd589.js";import f from"./LayoutItem-0366c0b6.js";import{u as _}from"./useFormDesignState-4fbefc60.js";import{y as h,ah as v}from"./antd-2f1e67c0.js";import{c as C,e as y}from"./index.js";import{d as S,c as F,a7 as r,Z as E,_ as I,n as b,z as D,l as n,a9 as c,$ as A,ai as P,aj as V}from"./vue-f962b0e4.js";import"./FormNode-5999d4e1.js";import"./FormNodeOperate-b59a24e9.js";import"./index-a99c5411.js";import"./isNumber-f0336cfd.js";import"./index-1eaa2345.js";import"./formItemConfig-33ae784b.js";import"./componentMap-b31aab00.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-c26a6a3e.js";import"./index-05c55ef7.js";import"./useWindowSizeFn-844b46eb.js";import"./isBoolean-9388e2d6.js";import"./uuid-31b8b5a4.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-544ec404.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-d52cfa35.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";const $=S({name:"FormComponentPanel",components:{LayoutItem:f,draggable:g,Form:h,Empty:v},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:e}=_(),i=({newIndex:t})=>{e.value.schemas=e.value.schemas||[];const m=e.value.schemas;m[t]=C(m[t]),a("handleSetSelectItem",m[t])},p=t=>{a("handleSetSelectItem",e.value.schemas[t.oldIndex])},l=F(()=>e.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:e,layoutTag:l}}});const k={class:"form-panel v-form-container"},B={class:"draggable-box"};function z(o,a,e,i,p,l){const t=r("Empty"),m=r("LayoutItem"),d=r("draggable"),u=r("Form");return E(),I("div",k,[b(n(t,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[D,o.formConfig.schemas.length===0]]),n(u,P(V(o.formConfig)),{default:c(()=>[A("div",B,[n(d,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=s=>o.formConfig.schemas=s),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:c(({element:s})=>[n(m,{class:"drag-move",schema:s,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const io=y($,[["render",z],["__scopeId","data-v-823b7e92"]]);export{io as default};