"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6363],{6363:(e,n,s)=>{s.r(n),s.d(n,{default:()=>o});var t=s(5043),a=s(3003),l=s(6213),i=s(6324),d=s(7392),r=s(7260),c=s(6133),x=(s(4312),s(579));const o=function(){const e=(0,a.d4)((e=>{var n;return null===(n=e.userRecord)||void 0===n?void 0:n.UrlLink})),n=(0,a.d4)((e=>{var n;return null===(n=e.userRecord)||void 0===n?void 0:n.UserData})),s=(0,a.d4)((e=>{var n;return null===(n=e.userRecord)||void 0===n?void 0:n.toast})),o=(0,a.wA)(),h=(0,a.d4)((e=>{var n;return null===(n=e.Frontoffice)||void 0===n?void 0:n.DoctorWorkbenchNavigation})),[j,u]=(0,t.useState)({History:"",PastInvestigations:"",Examination:"",GeneralExam:"",Vision:"",Fundus:"",Fields:"",EOM:"",Pupils:"",Nerves:"",LowerCranialNerves:"",SensoryExam:"",InvoluntaryMovements:"",FN:"",Dysdiadoko:"",Tandem:"",Gait:"",Power:"",Neck:""}),p=e=>{const{name:n,value:s}=e.target;u((e=>({...e,[n]:s})))},[m,y]=(0,t.useState)({ShoulderR:["","","",""],HipR:["","","",""],ElbowR:["",""],KneeR:["",""],WristR:["",""],HandR:["",""],AnkleR:["","","",""]}),[v,g]=(0,t.useState)({ShoulderL:["","","",""],HipL:["","","",""],ElbowL:["",""],KneeL:["",""],WristL:["",""],HandL:["",""],AnkleL:["","","",""]}),_=(e,n,s)=>{const t=s.target.value;y((s=>({...s,[e+"R"]:[...(s[e+"R"]||[]).slice(0,n),t,...(s[e+"R"]||[]).slice(n+1)]})))},L=(e,n,s)=>{const t=s.target.value;g((s=>({...s,[e+"L"]:[...(s[e+"L"]||[]).slice(0,n),t,...(s[e+"L"]||[]).slice(n+1)]})))},[R,f]=(0,t.useState)({RB1:"",RT1:"",RS1:"",RK1:"",RA1:"",RPlantars1:"",RAbdominals1:"",RAbdominals2:"",RCr1:""}),C=(e,n)=>{const{value:s}=e.target;f((e=>({...e,[n]:s})))},[k,N]=(0,t.useState)({LB1:"",LT1:"",LS1:"",LK1:"",LA1:"",LPlantars1:"",LAbdominals1:"",LAbdominals2:"",LCr1:""}),b=(e,n)=>{const{value:s}=e.target;N((e=>({...e,[n]:s})))},w=[{key:"id",name:"S.No",frozen:!0},{key:"VisitId",name:"VisitId",frozen:!0},{key:"PrimaryDoctorId",name:"Doctor Id",frozen:!0},{key:"PrimaryDoctorName",name:"Doctor Name",frozen:!0},{key:"created_by",name:"Created By",frozen:!0},{key:"Date",name:"Date",frozen:!0},{key:"Time",name:"Time",frozen:!0},{key:"History",name:"History"},{key:"PastInvestigations",name:"Past Investigations"},{key:"Examination",name:"Examination"},{key:"GeneralExam",name:"General Exam"},{key:"Vision",name:"Vision"},{key:"Fundus",name:"Fundus"},{key:"Fields",name:"Fields"},{key:"Eom",name:"EOM"},{key:"Pupils",name:"Pupils"},{key:"Nerves",name:"Nerves"},{key:"LowerCranialNerves",name:"Lower Cranial Nerves"},{key:"SensoryExam",name:"SensoryExam"},{key:"InvoluntaryMovements",name:"InvoluntaryMovements"},{key:"Fn",name:"FN"},{key:"Dysdiadoko",name:"Dysdiadoko"},{key:"Tandem",name:"Tandem"},{key:"Gait",name:"Gait"},{key:"Power",name:"Power"},{key:"Neck",name:"Neck"},{key:"ShoulderR",name:"ShoulderR"},{key:"HipR",name:"HipR"},{key:"ElbowR",name:"ElbowR"},{key:"KneeR",name:"KneeR"},{key:"WristR",name:"WristR"},{key:"HandR",name:"HandR"},{key:"AnkleR",name:"AnkleR"},{key:"ShoulderL",name:"ShoulderL"},{key:"HipL",name:"HipL"},{key:"ElbowL",name:"ElbowL"},{key:"KneeL",name:"KneeL"},{key:"WristL",name:"WristL"},{key:"HandL",name:"HandL"},{key:"AnkleL",name:"AnkleL"},{key:"Rb1",name:"Rb1"},{key:"Rt1",name:"Rt1"},{key:"Rs1",name:"Rs1"},{key:"Rk1",name:"Rk1"},{key:"Ra1",name:"Ra1"},{key:"RPlantars1",name:"RPlantars1"},{key:"RAbdominals1",name:"RAbdominals1"},{key:"RAbdominals2",name:"RAbdominals2"},{key:"RCr1",name:"RCr1"},{key:"Lb1",name:"Lb1"},{key:"Lt1",name:"Lt1"},{key:"Ls1",name:"Ls1"},{key:"Lk1",name:"Lk1"},{key:"La1",name:"La1"},{key:"LPlantars1",name:"LPlantars1"},{key:"LAbdominals1",name:"LAbdominals1"},{key:"LAbdominals2",name:"LAbdominals2"},{key:"LCr1",name:"LCr1"},{key:"view",name:"View",frozen:!0,renderCell:e=>(0,x.jsx)(d.A,{onClick:()=>F(e.row),children:(0,x.jsx)(r.A,{})})}],[A,E]=(0,t.useState)([]),[H,S]=(0,t.useState)(!1),[P,I]=(0,t.useState)(!1);(0,t.useEffect)((()=>{l.A.get("".concat(e,"Workbench/Workbench_Neurology_Details"),{params:{RegistrationId:null===h||void 0===h?void 0:h.pk}}).then((e=>{const n=e.data;E(n)})).catch((e=>{console.log(e)}))}),[H,e,h]);const F=e=>{console.log(e,"8888888");const n=(e,n)=>{try{return JSON.parse(e.replace(/'/g,'"'))}catch(s){return n}};u({History:e.History||"",PastInvestigations:e.PastInvestigations||"",Examination:e.Examination||"",GeneralExam:e.GeneralExam||"",Vision:e.Vision||"",Fundus:e.Fundus||"",Fields:e.Fields||"",EOM:e.Eom||"",Pupils:e.Pupils||"",Nerves:e.Nerves||"",LowerCranialNerves:e.LowerCranialNerves||"",SensoryExam:e.SensoryExam||"",InvoluntaryMovements:e.InvoluntaryMovements||"",FN:e.Fn||"",Dysdiadoko:e.Dysdiadoko||"",Tandem:e.Tandem||"",Gait:e.Gait||"",Power:e.Power||"",Neck:e.Neck||""}),y({ShoulderR:n(e.ShoulderR,["","","",""]),HipR:n(e.HipR,["","","",""]),ElbowR:n(e.ElbowR,["",""]),KneeR:n(e.KneeR,["",""]),WristR:n(e.WristR,["",""]),HandR:n(e.HandR,["",""]),AnkleR:n(e.AnkleR,["","","",""])}),g({ShoulderL:n(e.ShoulderL,["","","",""]),HipL:n(e.HipL,["","","",""]),ElbowL:n(e.ElbowL,["",""]),KneeL:n(e.KneeL,["",""]),WristL:n(e.WristL,["",""]),HandL:n(e.HandL,["",""]),AnkleL:n(e.AnkleL,["","","",""])}),f({RB1:e.Rb1||"",RT1:e.Rt1||"",RS1:e.Rs1||"",RK1:e.Rk1||"",RA1:e.Ra1||"",RPlantars1:e.RPlantars1||"",RAbdominals1:e.RAbdominals1||"",RAbdominals2:e.RAbdominals2||"",RCr1:e.RCr1||""}),N({LB1:e.Lb1||"",LT1:e.Lt1||"",LS1:e.Ls1||"",LK1:e.Lk1||"",LA1:e.La1||"",LPlantars1:e.LPlantars1||"",LAbdominals1:e.LAbdominals1||"",LAbdominals2:e.LAbdominals2||"",LCr1:e.LCr1||""}),I(!0)},D=()=>{u({History:"",PastInvestigations:"",Examination:"",GeneralExam:"",Vision:"",Fundus:"",Fields:"",EOM:"",Pupils:"",Nerves:"",LowerCranialNerves:"",SensoryExam:"",InvoluntaryMovements:"",FN:"",Dysdiadoko:"",Tandem:"",Gait:"",Power:"",Neck:""}),y({ShoulderR:["","","",""],HipR:["","","",""],ElbowR:["",""],KneeR:["",""],WristR:["",""],HandR:["",""],AnkleR:["","","",""]}),g({ShoulderL:["","","",""],HipL:["","","",""],ElbowL:["",""],KneeL:["",""],WristL:["",""],HandL:["",""],AnkleL:["","","",""]}),f({RB1:"",RT1:"",RS1:"",RK1:"",RA1:"",RPlantars1:"",RAbdominals1:"",RAbdominals2:"",RCr1:""}),N({LT1:"",LS1:"",LK1:"",LA1:"",LPlantars1:"",LAbdominals1:"",LAbdominals2:"",LCr1:""}),I(!1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"new-patient-registration-form",children:[(0,x.jsx)("div",{className:"Otdoctor_intra_Con",children:(0,x.jsxs)("div",{className:"Otdoctor_intra_Con_2",children:[(0,x.jsxs)("label",{children:["History ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{name:"History",value:j.History,onChange:p})]})}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{className:"case_sheet_5con",children:(0,x.jsxs)("div",{className:"case_sheet_5con_20",children:[(0,x.jsxs)("label",{children:["Past Investigations ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"PastInvestigations",name:"PastInvestigations",value:j.PastInvestigations,onChange:p})]})}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"efwewedc_neuro",children:[(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Examination ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Examination",name:"Examination",value:j.Examination,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["General Exam ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"GeneralExam",name:"GeneralExam",value:j.GeneralExam,onChange:p,className:"lifecycle_h3udwh34"})]})]}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("h4",{style:{color:"var(--labelcolor)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"start",padding:"10px"},children:"Higher Functions"}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"efwewedc_neuro",children:[(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Vision ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Vision",name:"Vision",value:j.Vision,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Fundus ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Fundus",name:"Fundus",value:j.Fundus,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Fields ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Fields",name:"Fields",value:j.Fields,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["EOM ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"EOM",name:"EOM",value:j.EOM,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Pupils ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Pupils",name:"Pupils",value:j.Pupils,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["5,7,8 Nerves ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Nerves",name:"Nerves",value:j.Nerves,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Lower Cranial Nerves ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"LowerCranialNerves",name:"LowerCranialNerves",value:j.LowerCranialNerves,onChange:p,className:"lifecycle_h3udwh34"})]})]}),(0,x.jsx)("br",{}),(0,x.jsx)("h4",{style:{color:"var(--labelcolor)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"start",padding:"10px"},children:"Nutrition / Tone"}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"RegisFormcon",style:{justifyContent:"center"},children:[(0,x.jsxs)("div",{className:"RegisForm_1",children:[(0,x.jsxs)("label",{htmlFor:"Power",children:["Power ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("input",{type:"text",id:"Power",name:"Power",value:j.Power,onChange:p,required:!0})]}),(0,x.jsxs)("div",{className:"RegisForm_1",children:[(0,x.jsxs)("label",{htmlFor:"Neck",children:["Neck ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("input",{type:"text",id:"Neck",name:"Neck",value:j.Neck,onChange:p,required:!0})]})]}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{className:"Selected-table-container",children:(0,x.jsxs)("table",{className:"selected-medicine-table2",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{}),(0,x.jsx)("th",{children:"R"}),(0,x.jsx)("th",{children:"L"}),(0,x.jsx)("th",{}),(0,x.jsx)("th",{children:"R"}),(0,x.jsx)("th",{children:"L"})]})}),(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{style:{width:"200px"},children:(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"start",width:"200px"},children:[(0,x.jsx)("div",{style:{fontSize:"15px",fontWeight:"bolder",width:"80px",display:"flex",textAlign:"start",justifyContent:"flex-start"},children:(0,x.jsx)("td",{children:"Shoulder"})}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"eewujtd_u",children:[(0,x.jsxs)("td",{children:["F ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["Abd ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["Add ",(0,x.jsx)("span",{children:":"})]})]})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsx)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:m.ShoulderR.map(((e,n)=>(0,x.jsx)("input",{type:"text",value:e,onChange:e=>_("Shoulder",n,e)},n)))})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsx)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:v.ShoulderL.map(((e,n)=>(0,x.jsx)("input",{type:"text",value:e,onChange:e=>L("Shoulder",n,e)},n)))})}),(0,x.jsx)("td",{style:{width:"200px"},children:(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"start",width:"200px"},children:[(0,x.jsx)("div",{style:{fontSize:"15px",fontWeight:"bolder",width:"80px",display:"flex",textAlign:"start",justifyContent:"flex-start"},children:(0,x.jsx)("td",{children:"Hip"})}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"eewujtd_u",children:[(0,x.jsxs)("td",{children:["F ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["Abd ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["Add ",(0,x.jsx)("span",{children:":"})]})]})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:m.HipR[0],onChange:e=>_("Hip",0,e)}),(0,x.jsx)("input",{type:"text",value:m.HipR[1],onChange:e=>_("Hip",1,e)}),(0,x.jsx)("input",{type:"text",value:m.HipR[2],onChange:e=>_("Hip",2,e)}),(0,x.jsx)("input",{type:"text",value:m.HipR[3],onChange:e=>_("Hip",3,e)})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:v.HipL[0],onChange:e=>L("Hip",0,e)}),(0,x.jsx)("input",{type:"text",value:v.HipL[1],onChange:e=>L("Hip",1,e)}),(0,x.jsx)("input",{type:"text",value:v.HipL[2],onChange:e=>L("Hip",2,e)}),(0,x.jsx)("input",{type:"text",value:v.HipL[3],onChange:e=>L("Hip",3,e)})]})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{style:{width:"200px"},children:(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"start",width:"200px"},children:[(0,x.jsx)("div",{style:{fontSize:"15px",fontWeight:"bolder",width:"80px",display:"flex",textAlign:"start",justifyContent:"flex-start"},children:(0,x.jsx)("td",{children:"Elbow"})}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"eewujtd_u",children:[(0,x.jsxs)("td",{children:["F ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]})]})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:m.ElbowR[0],onChange:e=>_("Elbow",0,e)}),(0,x.jsx)("input",{type:"text",value:m.ElbowR[1],onChange:e=>_("Elbow",1,e)})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:v.ElbowL[0],onChange:e=>L("Elbow",0,e)}),(0,x.jsx)("input",{type:"text",value:v.ElbowL[1],onChange:e=>L("Elbow",1,e)})]})}),(0,x.jsx)("td",{style:{width:"200px"},children:(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"start",width:"200px"},children:[(0,x.jsx)("div",{style:{fontSize:"15px",fontWeight:"bolder",width:"80px",display:"flex",textAlign:"start",justifyContent:"flex-start"},children:(0,x.jsx)("td",{children:"Knee"})}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"eewujtd_u",children:[(0,x.jsxs)("td",{children:["F ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]})]})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:m.KneeR[0],onChange:e=>_("Knee",0,e)}),(0,x.jsx)("input",{type:"text",value:m.KneeR[1],onChange:e=>_("Knee",1,e)})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:v.KneeL[0],onChange:e=>L("Knee",0,e)}),(0,x.jsx)("input",{type:"text",value:v.KneeL[1],onChange:e=>L("Knee",1,e)})]})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{style:{width:"200px"},children:(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"start",width:"200px"},children:[(0,x.jsxs)("div",{style:{fontSize:"15px",fontWeight:"bolder",width:"80px",display:"flex",textAlign:"start",justifyContent:"flex-start",flexDirection:"column",rowGap:"25px"},children:[(0,x.jsx)("td",{children:"Wrist"}),(0,x.jsx)("td",{children:"Hand"})]}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"eewujtd_u",children:[(0,x.jsxs)("td",{children:["F ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["I ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]})]})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:m.WristR[0],onChange:e=>_("Wrist",0,e)}),(0,x.jsx)("input",{type:"text",value:m.WristR[1],onChange:e=>_("Wrist",1,e)}),(0,x.jsx)("input",{type:"text",value:m.HandR[0],onChange:e=>_("Hand",0,e)}),(0,x.jsx)("input",{type:"text",value:m.HandR[1],onChange:e=>_("Hand",1,e)})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:v.WristL[0],onChange:e=>L("Wrist",0,e)}),(0,x.jsx)("input",{type:"text",value:v.WristL[1],onChange:e=>L("Wrist",1,e)}),(0,x.jsx)("input",{type:"text",value:v.HandL[0],onChange:e=>L("Hand",0,e)}),(0,x.jsx)("input",{type:"text",value:v.HandL[1],onChange:e=>L("Hand",1,e)})]})}),(0,x.jsx)("td",{style:{width:"200px"},children:(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"start",width:"200px"},children:[(0,x.jsx)("div",{style:{fontSize:"15px",fontWeight:"bolder",width:"80px",display:"flex",textAlign:"start",justifyContent:"flex-start"},children:(0,x.jsx)("td",{children:"Ankle"})}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"eewujtd_u",children:[(0,x.jsxs)("td",{children:["DF ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["PF ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["I ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsxs)("td",{children:["E ",(0,x.jsx)("span",{children:":"})]})]})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:m.AnkleR[0],onChange:e=>_("Ankle",0,e)}),(0,x.jsx)("input",{type:"text",value:m.AnkleR[1],onChange:e=>_("Ankle",1,e)}),(0,x.jsx)("input",{type:"text",value:m.AnkleR[2],onChange:e=>_("Ankle",2,e)}),(0,x.jsx)("input",{type:"text",value:m.AnkleR[3],onChange:e=>_("Ankle",3,e)})]})}),(0,x.jsx)("td",{style:{width:"150px"},children:(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:"5px",justifyContent:"center",alignItems:"center"},className:"ejd_td_input6",children:[(0,x.jsx)("input",{type:"text",value:v.AnkleL[0],onChange:e=>L("Ankle",0,e)}),(0,x.jsx)("input",{type:"text",value:v.AnkleL[1],onChange:e=>L("Ankle",1,e)}),(0,x.jsx)("input",{type:"text",value:v.AnkleL[2],onChange:e=>L("Ankle",2,e)}),(0,x.jsx)("input",{type:"text",value:v.AnkleL[3],onChange:e=>L("Ankle",3,e)})]})})]})]})]})}),(0,x.jsx)("div",{className:"Selected-table-container",children:(0,x.jsxs)("table",{className:"selected-medicine-table2",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Reflexes"}),(0,x.jsx)("th",{children:"B"}),(0,x.jsx)("th",{children:"T"}),(0,x.jsx)("th",{children:"S"}),(0,x.jsx)("th",{children:"K"}),(0,x.jsx)("th",{children:"A"}),(0,x.jsx)("th",{children:"Plantars"}),(0,x.jsx)("th",{children:"Abdominals"}),(0,x.jsx)("th",{children:"Cr"})]})}),(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"R"}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RB1,onChange:e=>C(e,"RB1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RT1,onChange:e=>C(e,"RT1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RS1,onChange:e=>C(e,"RS1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RK1,onChange:e=>C(e,"RK1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RA1,onChange:e=>C(e,"RA1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RPlantars1,onChange:e=>C(e,"RPlantars1")})}),(0,x.jsxs)("td",{style:{display:"flex",gap:"25px",justifyContent:"center"},children:[(0,x.jsx)("div",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RAbdominals1,onChange:e=>C(e,"RAbdominals1")})}),(0,x.jsx)("div",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RAbdominals2,onChange:e=>C(e,"RAbdominals2")})})]}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:R.RCr1,onChange:e=>C(e,"RCr1")})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"L"}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LB1,onChange:e=>b(e,"LB1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LT1,onChange:e=>b(e,"LT1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LS1,onChange:e=>b(e,"LS1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LK1,onChange:e=>b(e,"LK1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LA1,onChange:e=>b(e,"LA1")})}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LPlantars1,onChange:e=>b(e,"LPlantars1")})}),(0,x.jsxs)("td",{style:{display:"flex",gap:"25px",justifyContent:"center"},children:[(0,x.jsx)("div",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LAbdominals1,onChange:e=>b(e,"LAbdominals1")})}),(0,x.jsx)("div",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LAbdominals2,onChange:e=>b(e,"LAbdominals2")})})]}),(0,x.jsx)("td",{className:"ejd_td_input6",children:(0,x.jsx)("input",{type:"text",value:k.LCr1,onChange:e=>b(e,"LCr1")})})]})]})]})}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"efwewedc_neuro",children:[(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Sensory Exam ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"SensoryExam",name:"SensoryExam",value:j.SensoryExam,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Involuntary Movements ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"InvoluntaryMovements",name:"InvoluntaryMovements",value:j.InvoluntaryMovements,onChange:p,className:"lifecycle_h3udwh34"})]})]}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("h4",{style:{color:"var(--labelcolor)",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"start",padding:"10px"},children:"Cerebellar Signs"}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"efwewedc_neuro",children:[(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["F.N. ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"FN",name:"FN",value:j.FN,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Dysdiadoko ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Dysdiadoko",name:"Dysdiadoko",value:j.Dysdiadoko,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Tandem ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Tandem",name:"Tandem",value:j.Tandem,onChange:p,className:"lifecycle_h3udwh34"})]}),(0,x.jsxs)("div",{className:"case_sheet_5con_20 nero20",children:[(0,x.jsxs)("label",{children:["Gait ",(0,x.jsx)("span",{children:":"})]}),(0,x.jsx)("textarea",{id:"Gait",name:"Gait",value:j.Gait,onChange:p,className:"lifecycle_h3udwh34"})]})]}),(0,x.jsx)("br",{}),(0,x.jsxs)("div",{className:"Main_container_Btn",children:[P&&(0,x.jsx)("button",{onClick:D,children:"Clear"}),!P&&(0,x.jsx)("button",{onClick:()=>{const s={...j,...m,...v,...R,...k,RegistrationId:null===h||void 0===h?void 0:h.pk,created_by:(null===n||void 0===n?void 0:n.username)||""};console.log(s,"dataaaaaaaa"),l.A.post("".concat(e,"Workbench/Workbench_Neurology_Details"),s).then((e=>{const n=e.data,s=Object.keys(n)[0],t=Object.values(n)[0];o({type:"toast",value:{message:t,type:s}}),S((e=>!e)),D()})).catch((e=>{console.log(e)}))},children:"Submit"})]})]}),A.length>0&&(0,x.jsx)(c.A,{columns:w,RowData:A}),(0,x.jsx)(i.A,{Message:s.message,Type:s.type})]})}},4312:()=>{}}]);
//# sourceMappingURL=6363.36b909ac.chunk.js.map