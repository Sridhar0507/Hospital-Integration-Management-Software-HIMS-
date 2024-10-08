"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6519],{6519:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(5043),l=a(3003),r=a(6133),s=a(6213),o=a(6324),i=a(7392),c=a(7260),d=a(8983),u=a(1828),p=a(579);const h=()=>{const e=(0,l.wA)(),t=(0,l.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UrlLink})),a=(0,l.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.toast})),h=(0,l.d4)((e=>{var t;return null===(t=e.Frontoffice)||void 0===t?void 0:t.IP_DoctorWorkbenchNavigation}));console.log(h,"IP_DoctorWorkbenchNavigation");const g=(0,l.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UserData})),[x,m]=(0,n.useState)({Temperature:"",PulseRate:"",SPO2:"",HeartRate:"",RespiratoryRate:"",SBP:"",DBP:"",Height:"",Weight:"",BMI:"",WC:"",HC:"",BSL:"",Painscore:"",SupplementalOxygen:"",LevelOfConsiousness:"",CapillaryRefillTime:""}),[v,y]=(0,n.useState)("Vital"),[f,C]=(0,n.useState)([]),[S,R]=(0,n.useState)(!1),[j,w]=(0,n.useState)(!1),b=e=>{switch(e){case 3:return"red";case 2:return"orange";case 1:return"yellow";case 0:return"green";default:return""}};(0,n.useEffect)((()=>{if(x.Weight&&x.Height){const e=parseFloat(x.Weight),t=parseFloat(x.Height)/100,a=(e/(t*t)).toFixed(2);m((e=>({...e,BMI:a})))}}),[x.Weight,x.Height]);const _=[{key:"id",name:"S.No",frozen:!0},{key:"Type",name:"Type",frozen:!0},{key:"PrimaryDoctorId",name:"Doctor Id",frozen:!0},{key:"PrimaryDoctorName",name:"Doctor Name",frozen:!0},{key:"Date",name:"Date",frozen:!0},{key:"Time",name:"Time",frozen:!0},{key:"view",frozen:!0,name:"View",renderCell:e=>(0,p.jsx)(i.A,{onClick:()=>k(e.row),children:(0,p.jsx)(c.A,{})})}],k=e=>{m({Temperature:e.Temperature||"",PulseRate:e.PulseRate||"",SPO2:e.SPO2||"",HeartRate:e.HeartRate||"",RespiratoryRate:e.RespiratoryRate||"",SBP:e.SBP||"",DBP:e.DBP||"",Height:e.Height||"",Weight:e.Weight||"",BMI:e.BMI||"",WC:e.WC||"",HC:e.HC||"",BSL:e.BSL||"",Painscore:e.Painscore||"",SupplementalOxygen:e.SupplementalOxygen||"",LevelOfConsiousness:e.LevelOfConsiousness||"",CapillaryRefillTime:e.CapillaryRefillTime||""}),w(!0)},P=()=>{m({Temperature:"",PulseRate:"",SPO2:"",HeartRate:"",RespiratoryRate:"",SBP:"",DBP:"",Height:"",Weight:"",BMI:"",WC:"",HC:"",BSL:"",Painscore:"",SupplementalOxygen:"",LevelOfConsiousness:"",CapillaryRefillTime:""}),w(!1)};(0,n.useEffect)((()=>{s.A.get("".concat(t,"Ip_Workbench/IP_Vitals_Form_Details_Link"),{params:{RegistrationId:null===h||void 0===h?void 0:h.RegistrationId}}).then((e=>{const t=e.data;console.log("API Data:",t),t&&Array.isArray(t.vital_details)?C(t.vital_details):console.error("vital_details is not an array:",t)})).catch((e=>{console.error("Error fetching data:",e)}))}),[t,h,S]);const O=e=>{const{name:t,value:a}=e.target,n=a.trim();m((e=>({...e,[t]:n})))},A=[{key:"temperature_status",name:"Temperature Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.temperature_status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.temperature_status})},{key:"spo2_status",name:"SPO2 Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.spo2_status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.spo2_status})},{key:"heartrate_status",name:"Heart Rate Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.heartrate_status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.heartrate_status})},{key:"RespiratoryStatus",name:"Respiratory Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.RespiratoryStatus),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.RespiratoryStatus})},{key:"sbp_status",name:"SBP Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.sbp_status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.sbp_status})},{key:"SupplementalOxygen_status",name:"Supplemental Oxygen Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.SupplementalOxygen_status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.SupplementalOxygen_status})},{key:"LevelOfConsiousness_Status",name:"Level of Consciousness Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.LevelOfConsiousness_Status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.LevelOfConsiousness_Status})},{key:"CapillaryRefillTime_Status",name:"Capillary Refill Time Status",renderCell:e=>(0,p.jsx)("div",{style:{backgroundColor:b(e.row.CapillaryRefillTime_Status),width:"100%",height:"100%",textAlign:"center",color:"#fff",fontWeight:"bold",borderRadius:"4px",padding:"5px"},children:e.row.CapillaryRefillTime_Status})}],B=null===h||void 0===h?void 0:h.DOB,L=B?(e=>{const t=new Date(e),a=new Date;let n=a.getFullYear()-t.getFullYear();const l=a.getMonth()-t.getMonth();return(l<0||0===l&&a.getDate()<t.getDate())&&n--,n})(B):null,W=f.length>0?(D=f[f.length-1],["LevelOfConsiousness_Status","RespiratoryStatus","SupplementalOxygen_status","heartrate_status","temperature_status","spo2_status","sbp_status","CapillaryRefillTime_Status"].reduce(((e,t)=>{const a=D[t];return e+(null!==a?a:0)}),0)):0;var D;const M=null!==L?((e,t)=>t>=16?e>=0&&e<=4?"Low":e>=5&&e<=6?"Medium":e>=7&&e<=21?"High":"Unknown":e>=0&&e<=2?"Low":e>=3&&e<=5?"Medium":e>=6&&e<=12?"High":"Unknown")(W,L):"Unknown";console.log(W,"totalScore");return(0,p.jsx)("div",{className:"new-patient-registration-form",children:(0,p.jsxs)("div",{className:"RegisFormcon_1",children:[(0,p.jsx)("div",{style:{width:"100%",display:"grid",placeItems:"center"},children:(0,p.jsxs)(u.A,{value:v,exclusive:!0,onChange:e=>{y(e.target.value)},"aria-label":"Platform",children:[(0,p.jsx)(d.A,{value:"Vital",style:{height:"30px",width:"100px",backgroundColor:"Vital"===v?"var(--selectbackgroundcolor)":"inherit"},className:"togglebutton_container",children:"Vital"}),(0,p.jsx)(d.A,{value:"NewsScore",style:{backgroundColor:"NewsScore"===v?"var(--selectbackgroundcolor)":"inherit",width:"100px",height:"30px"},className:"togglebutton_container",children:"NewsScore"})]})}),"Vital"===v?Object.keys(x).map(((e,t)=>{return(0,p.jsxs)("div",{className:"RegisForm_1",children:[(0,p.jsxs)("label",{htmlFor:"".concat(e,"_").concat(t),children:[(a=e,/[a-z]/.test(a)&&/[A-Z]/.test(a)&&!/\d/.test(a)?a.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,(e=>e.toUpperCase())):a)," ",(0,p.jsx)("span",{children:":"})]}),"SupplementalOxygen"===e?(0,p.jsxs)("select",{id:"".concat(e,"_").concat(t),name:e,value:x[e],onChange:O,children:[(0,p.jsx)("option",{value:"",children:"Select"}),(0,p.jsx)("option",{value:"Yes",children:"Yes"}),(0,p.jsx)("option",{value:"No",children:"No"})]}):"LevelOfConsiousness"===e?(0,p.jsxs)("select",{id:"".concat(e,"_").concat(t),name:e,value:x[e],onChange:O,children:[(0,p.jsx)("option",{value:"",children:"Select"}),(0,p.jsx)("option",{value:"Alert",children:"Alert"}),(0,p.jsx)("option",{value:"Responsive to Voice",children:"V - Responsive to Voice"}),(0,p.jsx)("option",{value:"Responsive to Pain",children:"P - Responsive to Pain"}),(0,p.jsx)("option",{value:"Unresponsive",children:"U - Unresponsive"})]}):"CapillaryRefillTime"===e?(0,p.jsxs)("select",{id:"".concat(e,"_").concat(t),name:e,value:x[e],onChange:O,children:[(0,p.jsx)("option",{value:"",children:"Select"}),(0,p.jsx)("option",{value:"under 2 seconds",children:"under 2 seconds"}),(0,p.jsx)("option",{value:"3 to 4 seconds",children:"3-4 seconds"}),(0,p.jsxs)("option",{value:"greaterthan 4 seconds",children:[" ",">4 seconds"]})]}):(0,p.jsx)("input",{id:"".concat(e,"_").concat(t),autoComplete:"off",type:"Date"===e?"date":"Time"===e?"time":"text",name:e,value:x[e],onChange:O})]},e);var a})):"NewsScore"===v?(0,p.jsx)("div",{className:"RegisFormcon",style:{gap:"20px"},children:["Min High","Min Medium","Min Low","Normal","Max Low","Max Medium","Max High"].map(((e,t)=>(0,p.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center"},children:[(0,p.jsx)("div",{style:{width:"30px",height:"30px",backgroundColor:b("Normal"===e?0:["Min Low","Max Low"].includes(e)?1:["Min Medium","Max Medium"].includes(e)?2:3),alignContent:"center",borderRadius:"5px"},children:e.charAt(0).toUpperCase()},t),(0,p.jsx)("div",{children:e})]})))}):null,(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{className:"Main_container_Btn",children:[j&&(0,p.jsx)("button",{onClick:P,children:"Clear"}),!j&&"Vital"===v&&(0,p.jsx)("button",{onClick:()=>{console.log(null===h||void 0===h?void 0:h.RegistrationId);const a={Temperature:x.Temperature||null,PulseRate:x.PulseRate||null,SPO2:x.SPO2||null,HeartRate:x.HeartRate||null,RespiratoryRate:x.RespiratoryRate||null,SBP:x.SBP||null,DBP:x.DBP||null,Height:x.Height||null,Weight:x.Weight||null,BMI:x.BMI||null,WC:x.WC||null,HC:x.HC||null,BSL:x.BSL||null,Painscore:x.Painscore||null,SupplementalOxygen:x.SupplementalOxygen||"",LevelOfConsiousness:x.LevelOfConsiousness||"",CapillaryRefillTime:x.CapillaryRefillTime||"",RegistrationId:null===h||void 0===h?void 0:h.RegistrationId,Createdby:null===g||void 0===g?void 0:g.username,Type:"Doctor"};console.log(a,"senddata"),s.A.post("".concat(t,"Ip_Workbench/IP_Vitals_Form_Details_Link"),a).then((t=>{const[a,n]=[Object.keys(t.data)[0],Object.values(t.data)[0]];e({type:"toast",value:{message:n,type:a}}),R((e=>!e)),P()})).catch((e=>console.log(e)))},children:"Submit"})]}),(0,p.jsx)("br",{}),"Vital"===v&&(0,p.jsx)("div",{style:{display:"flex",alignItems:"center",marginLeft:"0%",textAlign:"center",marginTop:"20px"},children:(0,p.jsxs)("h2",{children:["EWS Score: ",W," (",M,")"]})}),"Vital"===v&&f.length>0&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.A,{columns:_,RowData:f})}),"NewsScore"===v&&f.length>0&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.A,{columns:A,RowData:f})}),(0,p.jsx)(o.A,{Message:a.message,Type:a.type})]})})}}}]);
//# sourceMappingURL=6519.ab6bcac6.chunk.js.map