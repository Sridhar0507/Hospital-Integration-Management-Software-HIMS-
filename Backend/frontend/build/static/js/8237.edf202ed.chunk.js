"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8237],{8237:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var o=a(5043),n=a(3003),s=a(6133),i=a(6213),l=a(6324),r=a(7392),d=a(7260),c=a(2345),m=a(579);const p=()=>{const e=(0,n.wA)(),t=(0,n.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UrlLink})),a=(0,n.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.toast})),p=(0,n.d4)((e=>{var t;return null===(t=e.Frontoffice)||void 0===t?void 0:t.IP_DoctorWorkbenchNavigation})),u=(0,n.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UserData})),[h,v]=(0,o.useState)({Date:"",Time:"",Department:"",ConsentFormName:"",ChooseDocument:null,ChkBox:!1,SisterName:""}),[y,C]=(0,o.useState)([]),[D,g]=(0,o.useState)({}),[f,x]=(0,o.useState)([]),[b,k]=(0,o.useState)(!1),[N,j]=(0,o.useState)(!1),F=t=>{if(t){let a={Isopen:!1,content:null,type:"image/jpg"};["data:image/jpeg;base64","data:image/jpg;base64"].includes(null===t||void 0===t?void 0:t.split(",")[0])?a={Isopen:!0,content:t,type:"image/jpeg"}:"data:image/png;base64"===(null===t||void 0===t?void 0:t.split(",")[0])?a={Isopen:!0,content:t,type:"image/png"}:"data:application/pdf;base64"===(null===t||void 0===t?void 0:t.split(",")[0])&&(a={Isopen:!0,content:t,type:"application/pdf"}),e({type:"modelcon",value:a})}else{e({type:"toast",value:{message:"There is no file to view.",type:"warn"}})}},_=[{key:"id",name:"S.No",frozen:!0},{key:"PrimaryDoctorName",name:"Doctor Name",frozen:!0},{key:"Date",name:"Date",frozen:!0},{key:"Time",name:"Time",frozen:!0},{key:"ConsentFormName",name:"ConsentFormName"},{key:"SisterName",name:"SisterName"},{key:"ChooseDocument",name:"ChooseDocument",renderCell:e=>(0,m.jsx)(r.A,{className:"cell_btn",onClick:()=>F(e.row.ChooseDocument),children:(0,m.jsx)(d.A,{})})},{key:"view",frozen:!0,name:"View",renderCell:e=>(0,m.jsx)(r.A,{onClick:()=>w(e.row),children:(0,m.jsx)(d.A,{})})}],w=e=>{const t=e.Department,a=D[t]||[];g({...D,[t]:a}),v({Date:e.Date||"",Time:e.Time||"",Department:e.Department||"",ConsentFormName:e.ConsentFormName||"",ChooseDocument:e.ChooseDocument||null,ChkBox:"true"===e.ChkBox||!0===e.ChkBox||!1,SisterName:e.SisterName||""}),j(!0)},I=()=>{v({Date:"",Time:"",Department:"",ConsentFormName:"",ChooseDocument:null,ChkBox:!1,SisterName:""}),j(!1)};(0,o.useEffect)((()=>{i.A.get("".concat(t,"Masters/ConsentName_Detials_link")).then((e=>{const t=e.data,a=t.reduce(((e,t)=>(e.some((e=>e.value===t.DepartmentId))||e.push({label:t.Department,value:t.DepartmentId}),e)),[]);C(a);const o=a.reduce(((e,a)=>{const o=t.filter((e=>e.DepartmentId===a.value)).map((e=>({label:e.ConsentFormsName,value:e.ConsentFormsName})));return e[a.value]=o,e}),{});g(o)})).catch((e=>console.log(e)))}),[t]),(0,o.useEffect)((()=>{null!==p&&void 0!==p&&p.RegistrationId&&i.A.get("".concat(t,"Ip_Workbench/IP_ConsentForm_Details_Link"),{params:{RegistrationId:null===p||void 0===p?void 0:p.RegistrationId}}).then((e=>{x(e.data)})).catch((e=>console.log(e)))}),[t,p,b]);const S=e=>{const{id:t,value:a,type:o,checked:n}=e.target;if("Department"===t){const e=D[a]||[];v((e=>({...e,[t]:a,ConsentFormName:""}))),g((t=>({...t,[a]:e})))}else v((e=>({...e,[t]:"checkbox"===o?n:a})))},A=t=>{const{name:a,files:o}=t.target;if(o&&o.length>0){const t=o[0],n=5242880;if(["application/pdf","image/jpeg","image/png"].includes(t.type)&&""!==t.type)if(t.size>n){e({type:"toast",value:{message:"File size exceeds the limit of 5MB.",type:"warn"}})}else{const e=new FileReader;e.onload=()=>{v((t=>({...t,[a]:e.result})))},e.readAsDataURL(t)}else{e({type:"toast",value:{message:"Invalid file type. Please upload a PDF, JPEG, or PNG file.",type:"warn"}})}}else{e({type:"toast",value:{message:"No file selected. Please choose a file to upload.",type:"warn"}})}};return(0,m.jsxs)("div",{className:"new-patient-registration-form",children:[(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"form-section5",children:[(0,m.jsx)("div",{className:"common_center_tag",children:(0,m.jsx)("h3",{children:"Consent Form Details"})}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"RegisFormcon_1",children:[{label:"Date",id:"Date",type:"date"},{label:"Time",id:"Time",type:"time"},{label:"Department",id:"Department",type:"select",options:y},{label:"ConsentFormName",id:"ConsentFormName",type:"select",options:D[h.Department]||[]},{label:"ChkBox",id:"ChkBox",type:"checkbox"},{label:"SisterName",id:"SisterName",type:"text"},{label:"ChooseDocument",id:"ChooseDocument",type:"file"}].map((e=>(0,m.jsxs)("div",{className:"RegisForm_1",children:[(0,m.jsxs)("label",{htmlFor:e.id,children:[e.label," ",(0,m.jsx)("span",{children:":"})]}),"select"===e.type?(0,m.jsxs)("select",{id:e.id,name:e.id,onChange:S,value:h[e.id]||"",required:!0,disabled:N,children:[(0,m.jsxs)("option",{value:"",children:["Select ",e.label]}),Array.isArray(e.options)&&e.options.length>0?e.options.map((e=>(0,m.jsx)("option",{value:e.value,children:e.label},e.value))):(0,m.jsx)("option",{disabled:!0,children:"No options available"})]}):"ChooseDocument"===e.id?(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,m.jsx)("input",{type:"file",name:e.id,accept:"image/jpeg, image/png, application/pdf",required:!0,id:"".concat(e.id,"_").concat(e.id),autoComplete:"off",onChange:A,style:{display:"none"}}),(0,m.jsxs)("div",{style:{width:"150px",display:"flex",justifyContent:"space-around"},children:[(0,m.jsx)("label",{htmlFor:"".concat(e.id,"_").concat(e.id),className:"RegisterForm_1_btns choose_file_update",children:"Choose File"}),(0,m.jsx)("button",{className:"fileviewbtn",onClick:()=>F(h.ChooseDocument),children:"View"})]})]}):(0,m.jsx)("input",{type:e.type,id:e.id,name:e.id,onChange:S,value:"file"!==e.type?h[e.id]||"":void 0,required:"checkbox"!==e.type,checked:"checkbox"===e.type?h[e.id]||!1:void 0,readOnly:N&&"file"!==e.type})]},e.id)))})]}),(0,m.jsx)("div",{className:"Main_container_Btn",children:N?(0,m.jsx)("button",{onClick:I,children:"Clear"}):(0,m.jsx)("button",{onClick:async()=>{const a=new FormData;console.log(FormData,"formData"),a.append("Date",h.Date),a.append("Time",h.Time),a.append("Department",h.Department),a.append("ConsentFormName",h.ConsentFormName),a.append("ChkBox",h.ChkBox),a.append("SisterName",h.SisterName),h.ChooseDocument&&a.append("ChooseDocument",h.ChooseDocument),console.log(h.ChooseDocument,"ChooseDocument"),a.append("RegistrationId",null===p||void 0===p?void 0:p.RegistrationId),a.append("Createdby",null===u||void 0===u?void 0:u.username);try{const o=await i.A.post("".concat(t,"Ip_Workbench/IP_ConsentForm_Details_Link"),a,{headers:{"Content-Type":"multipart/form-data"}}),[n,s]=[Object.keys(o.data)[0],Object.values(o.data)[0]];e({type:"toast",value:{message:s,type:n}}),k((e=>!e)),I()}catch(o){console.error(o)}},children:"Submit"})}),f.length>0&&(0,m.jsx)(s.A,{columns:_,RowData:f}),(0,m.jsx)(l.A,{Message:a.message,Type:a.type}),(0,m.jsx)(c.A,{})]})}}}]);
//# sourceMappingURL=8237.edf202ed.chunk.js.map