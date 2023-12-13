var y=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var h=(e,o,a)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,c=(e,o)=>{for(var a in o||(o={}))I.call(o,a)&&h(e,a,o[a]);if(_)for(var a of _(o))J.call(o,a)&&h(e,a,o[a]);return e},i=(e,o)=>M(e,E(o));import{u as U}from"./useFormDesignState-4fbefc60.js";import{f as g,g as j}from"./index-a99c5411.js";import{C as D,M as F}from"./index-57197b4f.js";import{a as S,e as k}from"./index.js";import{a4 as w,M as O}from"./antd-2f1e67c0.js";import{d as B,r as N,G as $,a7 as r,Z as x,a8 as T,a9 as n,l,E as u,$ as C,a2 as V,a3 as A}from"./vue-f962b0e4.js";import"./isNumber-f0336cfd.js";import"./useWindowSizeFn-844b46eb.js";const K=B({name:"ImportJsonModal",components:{CodeEditor:D,Upload:w,Modal:O},setup(){const{createMessage:e}=S(),o=N({visible:!1,json:`{
  "schemas": [
    {
      "component": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "layout": "horizontal",
  "labelLayout": "flex",
  "labelWidth": 100,
  "labelCol": {},
  "wrapperCol": {}
}`,jsonData:{schemas:{},config:{}},handleSetSelectItem:null}),{formDesignMethods:a}=U(),p=()=>{o.visible=!1},m=()=>{o.visible=!0},d=()=>{try{const t=JSON.parse(o.json);t.schemas&&g(t.schemas,s=>{j(s)}),a.setFormConfig(i(c({},t),{activeKey:1,currentItem:{component:""}})),p(),e.success("导入成功")}catch(t){e.error("导入失败，数据格式不对")}};return i(c({handleImportJson:d,beforeUpload:t=>{const s=new FileReader;return s.readAsText(t),s.onload=function(){o.json=this.result,d()},!1},handleCancel:p,showModal:m},$(o)),{MODE:F})}});const L=e=>(V("data-v-62ebfefa"),e=e(),A(),e),R=L(()=>C("p",{class:"hint-box"},"导入格式如下:",-1)),z={class:"v-json-box"};function G(e,o,a,p,m,d){const f=r("CodeEditor"),t=r("a-button"),s=r("Upload"),b=r("Modal");return x(),T(b,{title:"JSON数据",open:e.visible,onOk:e.handleImportJson,onCancel:e.handleCancel,cancelText:"关闭",destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:850},{footer:n(()=>[l(t,{onClick:e.handleCancel},{default:n(()=>[u("取消")]),_:1},8,["onClick"]),l(s,{class:"upload-button",beforeUpload:e.beforeUpload,showUploadList:!1,accept:"application/json"},{default:n(()=>[l(t,{type:"primary"},{default:n(()=>[u("导入json文件")]),_:1})]),_:1},8,["beforeUpload"]),l(t,{type:"primary",onClick:e.handleImportJson},{default:n(()=>[u("确定")]),_:1},8,["onClick"])]),default:n(()=>[R,C("div",z,[l(f,{value:e.json,"onUpdate:value":o[0]||(o[0]=v=>e.json=v),ref:"myEditor",mode:e.MODE.JSON},null,8,["value","mode"])])]),_:1},8,["open","onOk","onCancel"])}const oe=k(K,[["render",G],["__scopeId","data-v-62ebfefa"]]);export{oe as default};
