"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4029],{4029:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(5043),i=a(6213),n=a(6133),l=a(6324),r=a(3003),o=a(1906),d=a(184),c=a(8983),m=a(1828),u=a(2345),p=a(579);const v=()=>{const e=(0,r.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UrlLink})),t=(0,r.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.UserData})),a=(0,r.d4)((e=>{var t;return null===(t=e.userRecord)||void 0===t?void 0:t.toast})),v=(0,r.wA)(),h=(0,r.d4)((e=>{var t;return null===(t=e.Frontoffice)||void 0===t?void 0:t.IP_DoctorWorkbenchNavigation}));console.log("IP_DoctorWorkbenchNavigation",h);const[g,y]=(0,s.useState)("Addtest"),[x,j]=(0,s.useState)([]),[T,_]=(0,s.useState)([]),[N,b]=(0,s.useState)({reporttime:"",reportdate:""}),[k,f]=(0,s.useState)(null);console.log("viewreportind",x),console.log(e);(0,s.useEffect)((()=>{const t={Register_Id:null===h||void 0===h?void 0:h.RegistrationId,RegisterType:"IP"};i.A.get("".concat(e,"OP/lab_report_details_view"),{params:t}).then((e=>{console.log("Response Lab Report:",e.data),console.log("Individual Tests:",e.data.individual_tests),j(e.data.individual_tests||[]),_(e.data.favourite_tests||[]);const t=e.data.lab_report_entry.report_date,a=new Date(t).toISOString().split("T")[0],s=e.data.lab_report_entry.report_time.substring(0,5),i=e.data.lab_report_entry.reportfile;f(i),j(e.data.individual_tests||[]),_(e.data.favourite_tests||[]),b({reporttime:s,reportdate:a}),console.log("Formatted Date (YYYY-MM-DD):",a),console.log("Formatted Time:",s)})).catch((e=>{console.error("Error fetching lab report details:",e)}))}),[e,null===h||void 0===h?void 0:h.RegistrationId]);const[F,I]=(0,s.useState)({LabQueueId:"",IndivitualArr:"",FavouritesArr:""}),[w,R]=(0,s.useState)("Individual"),[A,C]=(0,s.useState)([]),[S,D]=(0,s.useState)([]),[M,L]=(0,s.useState)([]),[P,O]=(0,s.useState)([]);(0,s.useEffect)((()=>{i.A.get("".concat(e,"Masters/Test_Names_link_LabTest")).then((e=>{C(e.data)})).catch((e=>{console.log(e)}))}),[e]),(0,s.useEffect)((()=>{i.A.get("".concat(e,"Masters/Favourites_Names_link")).then((e=>{D(e.data)})).catch((e=>{console.log(e)}))}),[e]);const z=[{key:"id",name:"S.No",frozen:!0},{key:"TestCode",name:"Test Code"},{key:"TestName",name:"Test Name"},{key:"Action",name:"Action",renderCell:e=>(0,p.jsx)(o.A,{className:"cell_btn",onClick:()=>(e=>{const t=M.filter((t=>t.id!==e.TestCode));L(t)})(e.row),children:(0,p.jsx)(d.qbC,{className:"check_box_clrr_cancell"})})}],V=(e=>e.flatMap(((e,t)=>e.TestDetails.map(((a,s)=>({FavouriteName:e.FavouriteName,TestCode:a.TestCode,TestName:a.TestName,id:"".concat(t+1,"-").concat(s+1)}))))))(P),E=(e=>e.map(((e,t)=>({TestCode:e.id,TestName:e.Test_Name,id:t+1}))))(M),[Q,Y]=(0,s.useState)(!1),[q,U]=(0,s.useState)([]);(0,s.useEffect)((()=>{const t={Register_Id:h.pk,RegisterType:"IP"};i.A.get("".concat(e,"OP/Lab_Request_Detailslink"),{params:t}).then((e=>{const t=e.data.sort(((e,t)=>"Individual"===e.TestType&&"Individual"!==t.TestType?-1:"Individual"!==e.TestType&&"Individual"===t.TestType?1:0));U(t)})).catch((e=>{console.log(e)}))}),[Q,e,null===h||void 0===h?void 0:h.RegistrationId]);const W=[{key:"id",name:"S.No ",frozen:!0},{key:"TestType",name:"Test Type",renderCell:e=>{var t,a,s,i;return(0,p.jsx)(p.Fragment,{children:"Individual"===(null===e||void 0===e||null===(t=e.row)||void 0===t?void 0:t.TestType)?(0,p.jsx)(p.Fragment,{children:null===e||void 0===e||null===(a=e.row)||void 0===a?void 0:a.TestType}):(0,p.jsx)(p.Fragment,{children:"".concat(null===e||void 0===e||null===(s=e.row)||void 0===s?void 0:s.FavouriteName," - \n                             \n                             (").concat(null===e||void 0===e||null===(i=e.row)||void 0===i?void 0:i.TestType,")")})})}},{key:"TestName",name:"Test Name",renderCell:e=>{var t,a;return(0,p.jsx)(p.Fragment,{children:"Individual"===(null===e||void 0===e||null===(t=e.row)||void 0===t?void 0:t.TestType)?(0,p.jsx)(p.Fragment,{children:null===e||void 0===e||null===(a=e.row)||void 0===a?void 0:a.TestName}):(0,p.jsx)(p.Fragment,{children:e.row.TestName})})}}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"for",style:{width:"100%"},children:[(0,p.jsx)("div",{style:{width:"100%",display:"grid",placeItems:"center"},children:(0,p.jsxs)(m.A,{value:g,exclusive:!0,onChange:(e,t)=>{null!==t&&t!==g&&y(t)},"aria-label":"Platform",children:[(0,p.jsx)(c.A,{value:"Addtest",style:{height:"30px",width:"180px",backgroundColor:"Addtest"===g?"var(--selectbackgroundcolor)":"inherit"},className:"togglebutton_container",children:"Add Test"}),(0,p.jsx)(c.A,{value:"ViewReport",style:{backgroundColor:"ViewReport"===g?"var(--selectbackgroundcolor)":"inherit",width:"180px",height:"30px"},className:"togglebutton_container",children:"View Report"})]})}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"Addtest"===g&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"RegisFormcon_1",children:(0,p.jsxs)("div",{className:"RegisForm_1",children:[(0,p.jsxs)("label",{style:{fontSize:"20px"},children:["Test Type ",(0,p.jsx)("span",{children:":"})]}),(0,p.jsxs)("select",{name:"testType",value:w,autoComplete:"off",onChange:e=>R(e.target.value),children:[(0,p.jsx)("option",{value:"Individual",children:"Individual"}),(0,p.jsx)("option",{value:"Favourites",children:"Favourites"})]})]})}),(0,p.jsx)("br",{}),"Individual"===w?(0,p.jsx)("div",{className:"displayuseraccess",children:A.map(((e,t)=>(0,p.jsxs)("div",{className:"displayuseraccess_child",style:{marginLeft:"80px"},children:[(0,p.jsx)("input",{type:"checkbox",id:e.id,checked:M.some((t=>t.id===e.id)),onChange:()=>((e,t)=>{if(P.some((t=>t.TestDetails.some((t=>t.TestCode===e)))))return void v({type:"toast",value:{message:"Already Selected The Testname in Favourites .",type:"warn"}});if(M.some((t=>t.id===e))){const t=M.filter((t=>t.id!==e));L(t)}else{const a=[...M,{id:e,Test_Name:t,testType:w}];L(a)}})(e.id,e.Test_Name)}),(0,p.jsx)("label",{htmlFor:e.id,className:"par_acc_lab",children:e.Test_Name})]},t)))}):(0,p.jsx)("div",{className:"displayuseraccess",children:S.map((e=>(0,p.jsxs)("div",{className:"displayuseraccess_child",children:[(0,p.jsx)("input",{type:"checkbox",id:e.id,checked:P.some((t=>t.key===e.id)),onChange:()=>((e,t,a,s)=>{if(s.map((e=>e.TestCode)).some((e=>M.some((t=>t.id===e)))))return void v({type:"toast",value:{message:"Already Some Testname  Selected Indivitual .",type:"warn"}});if(P.some((t=>t.key===e))){const t=P.filter((t=>t.key!==e));O(t)}else{const i=[...P,{key:e,FavouriteName:t,Current_Amount:a,TestDetails:s,testType:w}];O(i)}})(e.id,e.FavouriteName,e.Current_Amount,e.TestName)}),(0,p.jsx)("label",{htmlFor:e.id,className:"par_acc_lab",children:e.FavouriteName}),e.TestName.map(((e,t)=>(0,p.jsxs)("div",{style:{marginLeft:"20px",marginTop:"5px"},children:[(0,p.jsx)("label",{htmlFor:e.TestCode,className:"chi_acc_lab",children:e.TestName}),(0,p.jsx)("br",{})]},t)))]},e.id)))}),E.length>0&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"DivCenter_container",children:(0,p.jsx)("span",{children:"Selected Individual TestName"})}),(0,p.jsx)("div",{className:"Main_container_app",children:(0,p.jsx)(n.A,{columns:z,RowData:E})})]}),(0,p.jsx)("br",{}),V.length>0&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"DivCenter_container",children:(0,p.jsx)("span",{children:"Selected Favourites Name"})}),(0,p.jsx)("div",{className:"Main_container_app",children:(0,p.jsx)(n.A,{columns:[{key:"id",name:"S.No ",frozen:!0},{key:"FavouriteName",name:"Favourite Name"},{key:"TestCode",name:"Test Code"},{key:"TestName",name:"Test Name"}],RowData:V})})]}),(0,p.jsx)("div",{className:"Main_container_Btn",children:(0,p.jsx)("button",{onClick:()=>{if(M.length>0||P.length>0){const a={LabQueueId:F.LabQueueId,IndivitualArr:M||[],FavouritesArr:P||[],created_by:(null===t||void 0===t?void 0:t.username)||"",Register_Id:(null===h||void 0===h?void 0:h.pk)||"",RegisterType:"IP"};i.A.post("".concat(e,"OP/Lab_Request_Detailslink"),a).then((e=>{const t=e.data,a=Object.keys(t)[0],s=Object.values(t)[0];v({type:"toast",value:{message:s,type:a}}),Y((e=>!e)),I({LabQueueId:"",IndivitualArr:"",FavouritesArr:""}),L([]),O([])})).catch((e=>{console.log(e)}))}else{v({type:"toast",value:{message:"Please Select TestNames Or Favourites Names.",type:"warn"}})}},children:"save"})}),q.length>0&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"Main_container_app",children:(0,p.jsx)(n.A,{columns:W,RowData:q})})})]}),(0,p.jsx)("br",{}),"ViewReport"===g&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"RegisFormcon_1",children:[(0,p.jsxs)("div",{className:"RegisForm_1",children:[(0,p.jsxs)("label",{htmlFor:"ReportDate",children:["Report Date ",(0,p.jsx)("span",{children:":"})]}),(0,p.jsx)("input",{type:"date",id:"reportdate",name:"reportdate",value:N.reportdate,readOnly:!0})]}),(0,p.jsxs)("div",{className:"RegisForm_1",children:[(0,p.jsxs)("label",{htmlFor:"ReportTime",children:["Report Time ",(0,p.jsx)("span",{children:":"})]}),(0,p.jsx)("input",{type:"time",id:"reporttime",name:"reporttime",value:N.reporttime,readOnly:!0})]}),(0,p.jsx)("div",{className:"RegisForm_1",children:(0,p.jsx)("button",{className:"fileviewbtn",onClick:()=>(e=>{if(console.log("fileval",e),e){let t={Isopen:!1,content:null,type:"image/jpg"};["data:image/jpeg;base64","data:image/jpg;base64"].includes(null===e||void 0===e?void 0:e.split(",")[0])?t={Isopen:!0,content:e,type:"image/jpeg"}:"data:image/png;base64"===(null===e||void 0===e?void 0:e.split(",")[0])?t={Isopen:!0,content:e,type:"image/png"}:"data:application/pdf;base64"===(null===e||void 0===e?void 0:e.split(",")[0])&&(t={Isopen:!0,content:e,type:"application/pdf"}),v({type:"modelcon",value:t})}else v({type:"toast",value:{message:"There is no file to view.",type:"warn"}})})(k),children:"View"})})]}),(0,p.jsx)("br",{}),x.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"common_center_tag",children:(0,p.jsx)("span",{children:"Individual Test"})}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{className:"Main_container_app",children:(0,p.jsx)(n.A,{columns:[{key:"id",name:"S.No",frozen:!0},{key:"test_name",name:"Test Name",frozen:!0},{key:"category_type",name:"Category Type"},{key:"value",name:"Value"},{key:"description",name:"Description"},{key:"status",name:"Status"}],RowData:x})})]}):null,(0,p.jsx)("br",{}),T.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"common_center_tag",children:(0,p.jsx)("span",{children:"Favourites Test"})}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{className:"Main_container_app",children:(0,p.jsx)(n.A,{columns:[{key:"id",name:"S.No",frozen:!0},{key:"favouriteName",name:"Favourite Name"},{key:"testName",name:"Test Name"},{key:"category_type",name:"Category Type"},{key:"value",name:"Value"},{key:"description",name:"Description"},{key:"status",name:"Status"}],RowData:T})})]}):null,0===x.length&&0===T.length&&(0,p.jsx)("div",{className:"DivCenter_container",children:"No Test was complete during the previous visit."})]})]}),(0,p.jsx)(u.A,{}),(0,p.jsx)(l.A,{Message:a.message,Type:a.type})]})}}}]);
//# sourceMappingURL=4029.ce35e5db.chunk.js.map