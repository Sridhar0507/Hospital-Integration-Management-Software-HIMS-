"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1608],{9227:(e,r,a)=>{a.r(r),a.d(r,{default:()=>c});var i=a(5043),o=a(6213),t=a(3003),s=a(6133),l=a(6324),n=a(579);const c=()=>{const e=(0,t.d4)((e=>{var r;return null===(r=e.userRecord)||void 0===r?void 0:r.UrlLink})),r=(0,t.d4)((e=>{var r;return null===(r=e.userRecord)||void 0===r?void 0:r.UserData}));console.log("userRecord",r);const a=(0,t.d4)((e=>{var r;return null===(r=e.userRecord)||void 0===r?void 0:r.toast})),c=(0,t.d4)((e=>{var r;return null===(r=e.Frontoffice)||void 0===r?void 0:r.IP_DoctorWorkbenchNavigation}));console.log("IP_DoctorWorkbenchNavigation",c);const d=(0,t.wA)(),[u,m]=(0,i.useState)({OtRequetsId:"",PrimaryDoctor:"",SurgeryName:"",SurgeryDate:"",SurgeryTime:"",Remarks:"",SurgerySpeciality:"",Priority:"",Speciality:"",AdditionalDoctor:"No",SurgeonSpeciality:"",SurgeonName:""});console.log("Ot",u);const[g,y]=(0,i.useState)([]),[h,p]=(0,i.useState)([]),[S,v]=(0,i.useState)([]),[x,j]=(0,i.useState)([]),[N,D]=(0,i.useState)(!1);(0,i.useEffect)((()=>{o.A.get("".concat(e,"Masters/Speciality_Detials_link")).then((e=>{const r=e.data;console.log("specialization",r),y(r)})).catch((e=>{console.log(e)}))}),[e]),(0,i.useEffect)((()=>{const r={DoctorId:null===c||void 0===c?void 0:c.DoctorName,Specialization:null===c||void 0===c?void 0:c.Specialization};r.DoctorId&&r.Specialization&&o.A.get("".concat(e,"OP/OtRequest_Details"),{params:r}).then((e=>{const r=e.data;console.log("Response:",r),r.DoctorName&&r.SpecialityName&&m((e=>({...e,PrimaryDoctor:r.DoctorName,Speciality:r.SpecialityName})))})).catch((e=>{console.error("Error:",e)}))}),[e,null===c||void 0===c?void 0:c.DoctorName,null===c||void 0===c?void 0:c.Specialization]),(0,i.useEffect)((()=>{u.SurgerySpeciality&&o.A.get("".concat(e,"Masters/Surgeryname_Speciality_link"),{params:{Speciality:u.SurgerySpeciality}}).then((e=>{console.log("Response Dataspeciality",e.data),Array.isArray(e.data)?v(e.data):v([])})).catch((e=>{console.log(e),v([])}))}),[e,u.SurgerySpeciality]),(0,i.useEffect)((()=>{"Yes"===u.AdditionalDoctor&&u.SurgerySpeciality&&o.A.get("".concat(e,"Masters/Surgeryname_Speciality_Doctor_link"),{params:{Speciality:u.SurgerySpeciality}}).then((e=>{console.log("Response Dataspecialitydoctor",e.data),Array.isArray(e.data)?j(e.data):j([])})).catch((e=>{console.log(e),j([])}))}),[e,u.SurgerySpeciality]);const _=e=>{const{name:r,value:a}=e.target;"AdditionalDoctor"===r&&("No"===a&&m((e=>({...e,SurgeonName:""}))),m((e=>({...e,AdditionalDoctor:a})))),m((e=>({...e,[r]:a})))};(0,i.useEffect)((()=>{if(null!==c&&void 0!==c&&c.pk){const r={RegistrationId:null===c||void 0===c?void 0:c.pk,RegisterType:"IP"};o.A.get("".concat(e,"OP/OtRequest_Names_link"),{params:r}).then((e=>{const r=e.data;console.log("Response dataget234:",r),p(r)})).catch((e=>{console.error("Error fetching OT request data:",e)}))}}),[e,N,null===c||void 0===c?void 0:c.pk]);const R=[{key:"id",name:"S.No ",frozen:!0},{key:"SurgeryName",name:"Surgery Name"},{key:"SurgeryDate",name:"Surgery Date"},{key:"SurgeryTime",name:"Surgery Time"},{key:"Priority",name:"Priority"},{key:"AdditionalDoctor",name:"AdditionalDoctor",renderCell:e=>(0,n.jsx)("div",{children:e.row.AdditionalDoctor||"Nill"})},{key:"Reason",name:"Reason",renderCell:e=>(0,n.jsxs)("div",{children:[console.log(e),e.row.Reason||"Nill"]})}];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"Main_container_app",children:[(0,n.jsxs)("div",{className:"RegisFormcon_1",children:[(0,n.jsx)("div",{className:"common_center_tag",children:(0,n.jsx)("span",{children:"OT Request"})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{htmlFor:"ReportTime",children:["Primary Doctor ",(0,n.jsx)("span",{children:":"})]}),(0,n.jsx)("input",{type:"text",id:"PrimaryDoctor",name:"PrimaryDoctor",onChange:_,value:u.PrimaryDoctor,required:!0})]}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{children:[" Surgery Speciality",(0,n.jsx)("span",{children:":"})," "]}),(0,n.jsxs)("select",{name:"SurgerySpeciality",value:u.SurgerySpeciality,onChange:_,children:[(0,n.jsx)("option",{value:"",children:"Select"}),g.map((e=>(0,n.jsx)("option",{value:e.id,children:e.SpecialityName},e.id)))]})]}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{children:["Additional Doctor",(0,n.jsx)("span",{children:":"})]}),(0,n.jsxs)("div",{className:"text_adjust_mt_Ot_rado_0",children:[(0,n.jsx)("div",{className:"radio_Nurse_ot2",children:(0,n.jsxs)("label",{htmlFor:"Yes",children:[(0,n.jsx)("input",{type:"radio",id:"Yes",name:"AdditionalDoctor",value:"Yes",checked:"Yes"===u.AdditionalDoctor,onChange:_}),"Yes"]})}),(0,n.jsx)("div",{className:"radio_Nurse_ot2",children:(0,n.jsxs)("label",{htmlFor:"No",children:[(0,n.jsx)("input",{type:"radio",id:"No",name:"AdditionalDoctor",value:"No",checked:"No"===u.AdditionalDoctor,onChange:_}),"No"]})})]})]}),"Yes"===u.AdditionalDoctor&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{htmlFor:"SurgeonName",children:[" Surgeon Name",(0,n.jsx)("span",{children:":"})," "]}),(0,n.jsxs)("select",{name:"SurgeonName",value:u.SurgeonName,onChange:_,children:[(0,n.jsx)("option",{value:"",children:"Select"}),x&&x.length>0?x.map((e=>(0,n.jsx)("option",{value:e.Doctor_ID,children:e.Doctor_Name},e.id))):(0,n.jsx)("option",{value:"",children:"No surgeon available"})]})]})}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{children:[" Surgery Name",(0,n.jsx)("span",{children:":"})," "]}),(0,n.jsxs)("select",{name:"SurgeryName",value:u.SurgeryName,onChange:_,children:[(0,n.jsx)("option",{value:"",children:"Select"}),S&&S.length>0?S.map((e=>(0,n.jsx)("option",{value:e.Surgery_Id,children:e.Surgery_Name},e.id))):(0,n.jsx)("option",{value:"",children:"No surgeries available"})]})]}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{htmlFor:"ReportDate",children:["Surgery Date ",(0,n.jsx)("span",{children:":"})]}),(0,n.jsx)("input",{type:"date",id:"SurgeryDate",name:"SurgeryDate",onChange:_,value:u.SurgeryDate,required:!0})]}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{htmlFor:"ReportTime",children:["Surgery Time ",(0,n.jsx)("span",{children:":"})]}),(0,n.jsx)("input",{type:"time",id:"SurgeryTime",name:"SurgeryTime",onChange:_,value:u.SurgeryTime,required:!0})]}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{children:["Priority ",(0,n.jsx)("span",{children:":"})]}),(0,n.jsxs)("select",{name:"Priority",required:!0,value:u.Priority,onChange:_,children:[(0,n.jsx)("option",{value:"",disabled:!0,children:"Select"}),(0,n.jsx)("option",{value:"Urgent",children:"Urgent"}),(0,n.jsx)("option",{value:"Regular",children:"Regular"})]})]}),(0,n.jsxs)("div",{className:"RegisForm_1",children:[(0,n.jsxs)("label",{htmlFor:"ReportTime",children:["Remarks ",(0,n.jsx)("span",{children:":"})]}),(0,n.jsx)("textarea",{className:"treatcon_body_1 textarea",id:"Remarks",name:"Remarks",onChange:_,value:u.Remarks,required:!0})]})]}),(0,n.jsx)("div",{className:"Main_container_Btn",children:(0,n.jsx)("button",{onClick:()=>{if(""!==u.SurgeryName){const a={...u,RegisterType:"IP",created_by:(null===r||void 0===r?void 0:r.username)||"",RegistrationId:null===c||void 0===c?void 0:c.pk};console.log("sendOtRequestdata",a),o.A.post("".concat(e,"OP/OtRequest_Names_link"),a).then((e=>{const r=e.data,a=Object.keys(r)[0],i=Object.values(r)[0];d({type:"toast",value:{message:i,type:a}}),D((e=>!e)),m({PrimaryDoctor:"",SurgeryName:"",SurgeryDate:"",SurgeryTime:"",Remarks:"",SurgerySpeciality:"",Priority:"",AdditionalDoctor:"No",SurgeonName:""})})).catch((e=>{console.log(e)}))}else{d({type:"toast",value:{message:"Please provide the required fields.",type:"warn"}})}},children:u.RequestId?"Update":"Save"})}),(0,n.jsx)("br",{}),h.length>0&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.A,{columns:R,RowData:h})}),(0,n.jsx)(l.A,{Message:a.message,Type:a.type})]})})}}}]);
//# sourceMappingURL=1608.cd2fdb6e.chunk.js.map