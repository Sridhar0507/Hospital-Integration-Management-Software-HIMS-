"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8113],{8113:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var n=t(5043),i=t(3003),o=t(6133),l=t(6213),s=t(6324),r=t(7392),c=t(7260),d=t(579);const m=()=>{const e=(0,i.wA)(),a=(0,i.d4)((e=>{var a;return null===(a=e.userRecord)||void 0===a?void 0:a.UrlLink})),t=(0,i.d4)((e=>{var a;return null===(a=e.userRecord)||void 0===a?void 0:a.toast})),m=(0,i.d4)((e=>{var a;return null===(a=e.Frontoffice)||void 0===a?void 0:a.IP_DoctorWorkbenchNavigation}));console.log(m,"IP_DoctorWorkbenchNavigation");const y=(0,i.d4)((e=>{var a;return null===(a=e.userRecord)||void 0===a?void 0:a.UserData})),[p,v]=(0,n.useState)({MlcNo:"",MlcInfoDate:"",MlcInfoTime:"",InformedBy:"",MlcSendTime:"",Reason:"",Type:"",PoliceStationName:"",ConsultantName:"",RmoName:"",MlcCopyReceiveTime:"",ReceivedBySister:"",ReceptionStaffName:"",InchargeName:"",Remarks:""}),[u,N]=(0,n.useState)([]),[R,f]=(0,n.useState)(!1),[h,I]=(0,n.useState)(!1),x=[{key:"id",name:"S.No",frozen:!0},{key:"VisitId",name:"VisitId",frozen:!0},{key:"PrimaryDoctorName",name:"Doctor Name",frozen:!0},{key:"Date",name:"Date",frozen:!0},{key:"Time",name:"Time",frozen:!0},{key:"view",frozen:!0,name:"View",renderCell:e=>(0,d.jsx)(r.A,{onClick:()=>M(e.row),children:(0,d.jsx)(c.A,{})})}],M=e=>{v({MlcNo:e.MlcNo||"",MlcInfoDate:e.MlcInfoDate||"",MlcInfoTime:e.MlcInfoTime||"",InformedBy:e.InformedBy||"",MlcSendTime:e.MlcSendTime||"",Reason:e.Reason||"",Type:e.Type||"",PoliceStationName:e.PoliceStationName||"",ConsultantName:e.ConsultantName||"",RmoName:e.RmoName||"",MlcCopyReceiveTime:e.MlcCopyReceiveTime||"",ReceivedBySister:e.ReceivedBySister||"",ReceptionStaffName:e.ReceptionStaffName||"",InchargeName:e.InchargeName||"",Remarks:e.Remarks||""}),I(!0)},g=()=>{v({MlcNo:"",MlcInfoDate:"",MlcInfoTime:"",InformedBy:"",MlcSendTime:"",Reason:"",Type:"",PoliceStationName:"",ConsultantName:"",RmoName:"",MlcCopyReceiveTime:"",ReceivedBySister:"",ReceptionStaffName:"",InchargeName:"",Remarks:""}),I(!1)};(0,n.useEffect)((()=>{l.A.get("".concat(a,"Ip_Workbench/IP_Mlc_Details_Link"),{params:{RegistrationId:null===m||void 0===m?void 0:m.RegistrationId,Type:"Nurse"}}).then((e=>{const a=e.data;console.log(a),N(a)})).catch((e=>{console.log(e)}))}),[a,m,R]);const b=e=>{const{name:a,value:t}=e.target;v((e=>({...e,[a]:t})))};return(0,d.jsxs)("div",{className:"new-patient-registration-form",children:[(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section5",children:[(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"RegisFormcon_1",children:[[{label:"MLC No",id:"MlcNo",type:"text"},{label:"MLC Info Date",id:"MlcInfoDate",type:"date"},{label:"MLC Info Time",id:"MlcInfoTime",type:"time"},{label:"Informed By",id:"InformedBy",type:"text"},{label:"MLC Send Time",id:"MlcSendTime",type:"time"},{label:"Reason",id:"Reason",type:"text"},{label:"Police Station Name",id:"PoliceStationName",type:"text"},{label:"Consultant Name",id:"ConsultantName",type:"text"},{label:"RMO Name",id:"RmoName",type:"text"},{label:"MLC Copy Receive Time",id:"MlcCopyReceiveTime",type:"time"},{label:"Received By Sister",id:"ReceivedBySister",type:"text"},{label:"Reception Staff Name",id:"ReceptionStaffName",type:"text"},{label:"Incharge Name",id:"InchargeName",type:"text"},{label:"Remarks",id:"Remarks",type:"textarea"}].map((e=>(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:e.id,children:[e.label," ",(0,d.jsx)("span",{children:":"})]}),"textarea"===e.type?(0,d.jsx)("textarea",{id:e.id,name:e.id,onChange:b,value:p[e.id],required:!0,readOnly:h}):(0,d.jsx)("input",{type:e.type,id:e.id,name:e.id,onChange:b,value:p[e.id],required:!0,readOnly:h})]},e.id))),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"Type",children:["Type ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsxs)("select",{id:"Type",name:"Type",onChange:b,value:p.Type,required:!0,readOnly:h,children:[(0,d.jsx)("option",{value:"online",readOnly:h,children:"Online"}),(0,d.jsx)("option",{value:"driver",readOnly:h,children:"Driver"})]})]})]})]}),(0,d.jsxs)("div",{className:"Main_container_Btn",children:[h&&(0,d.jsx)("button",{onClick:g,children:"Clear"}),!h&&(0,d.jsx)("button",{onClick:()=>{console.log(null===m||void 0===m?void 0:m.RegistrationId);const t={...p,RegistrationId:null===m||void 0===m?void 0:m.RegistrationId,Createdby:null===y||void 0===y?void 0:y.username};console.log(t,"senddata"),l.A.post("".concat(a,"Ip_Workbench/IP_Mlc_Details_Link"),t).then((a=>{const[t,n]=[Object.keys(a.data)[0],Object.values(a.data)[0]];e({type:"toast",value:{message:n,type:t}}),f((e=>!e)),g()})).catch((e=>console.log(e)))},children:"Submit"})]}),u.length>=0&&(0,d.jsx)(o.A,{columns:x,RowData:u}),(0,d.jsx)(s.A,{Message:t.message,Type:t.type})]})}}}]);
//# sourceMappingURL=8113.68926d29.chunk.js.map