"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5463],{5463:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(5043),o=n(3003),i=(n(4312),n(6213)),s=n(6324),d=n(3216),c=n(579);const r=()=>{const e=(0,o.d4)((e=>{var t;return null===(t=e.Frontoffice)||void 0===t?void 0:t.Registeredit})),t=(0,o.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UrlLink})),n=(0,o.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.toast})),r=(0,o.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UserData})),[l,v]=(0,a.useState)(!1),u=(0,o.wA)(),h=(0,d.Zp)(),[m,g]=(0,a.useState)({ReasonForAdmission:"",PatientConditionOnAdmission:"",PatientFileGiven:"No",AadharGiven:"No",getdata:!1}),p=e=>{const{name:t,value:n}=e.target;g((e=>({...e,[t]:n})))};(0,a.useEffect)((()=>{i.A.get("".concat(t,"Frontoffice/post_ip_handover_details?RegistrationId=").concat(null===e||void 0===e?void 0:e.RegistrationId)).then((e=>{const t=e.data;g({ReasonForAdmission:t.ReasonForAdmission,PatientConditionOnAdmission:t.PatientConditionOnAdmission,PatientFileGiven:t.PatientFileGiven,AadharGiven:t.AadharGiven,getdata:!0})})).catch((e=>{g({ReasonForAdmission:"",PatientConditionOnAdmission:"",PatientFileGiven:"No",AadharGiven:"No",getdata:!1}),console.log(e)}))}),[l,t,e]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"form-section5 handover_con",children:(0,c.jsx)("div",{className:"Otdoctor_intra_Con handover",children:Object.keys(m).filter((e=>"getdata"!==e)).map(((e,t)=>(0,c.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,c.jsxs)("label",{htmlFor:"".concat(e,"_").concat(t),children:[e,(0,c.jsx)("span",{children:":"})]}),["PatientFileGiven","AadharGiven"].includes(e)?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{type:"radio",id:"".concat(e,"_yes"),name:e,value:"Yes",checked:"Yes"===m[e],onChange:p}),(0,c.jsx)("label",{htmlFor:"".concat(e,"_yes"),children:"Yes"}),(0,c.jsx)("input",{type:"radio",id:"".concat(e,"_no"),name:e,value:"No",checked:"No"===m[e],onChange:p}),(0,c.jsx)("label",{htmlFor:"".concat(e,"_no"),children:"No"})]}):(0,c.jsx)("textarea",{id:"".concat(e,"_").concat(t),name:e,value:m[e],onChange:p})]},t)))})}),(0,c.jsx)("div",{className:"Main_container_Btn",children:(0,c.jsx)("button",{onClick:m.getdata?()=>{const n={RegistrationId:null===e||void 0===e?void 0:e.RegistrationId,type:"Admit",Reason:""};i.A.post("".concat(t,"Frontoffice/post_ip_submit_handover_or_cancel_details"),n).then((e=>{const t=e.data;let n=Object.keys(t)[0];const a={message:Object.values(t)[0],type:n};v((e=>!e)),u({type:"toast",value:a}),u({type:"Registeredit",value:{}}),h("Home/IpHandoverQue")})).catch((e=>{console.log(e)}))}:()=>{const n=Object.keys(m).filter((e=>!m[e]));if(0===n.length){const n={...m,RegistrationId:null===e||void 0===e?void 0:e.RegistrationId,created_by:null===r||void 0===r?void 0:r.username};i.A.post("".concat(t,"Frontoffice/post_ip_handover_details"),n).then((e=>{const t=e.data;let n=Object.keys(t)[0];const a={message:Object.values(t)[0],type:n};v((e=>!e)),u({type:"toast",value:a})})).catch((e=>{console.log(e)}))}else{const e={message:"Please fill the detials : ".concat(n.join(",")),type:"warn"};u({type:"toast",value:e})}},children:m.getdata?"Hand Over":"save"})}),(0,c.jsx)(s.A,{Message:n.message,Type:n.type})]})}}}]);
//# sourceMappingURL=5463.5d26e0ac.chunk.js.map