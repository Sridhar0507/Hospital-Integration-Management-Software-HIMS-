"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[556],{8556:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var l=a(5043),i=a(3003),o=a(6213),c=a(6324),n=a(7392),t=a(7260),r=a(6133),d=(a(1270),a(4885),a(8340),a(579));const h=()=>{const e=(0,i.d4)((e=>{var s;return null===(s=e.userRecord)||void 0===s?void 0:s.UrlLink})),s=((0,i.d4)((e=>{var s;return null===(s=e.userRecord)||void 0===s?void 0:s.UserData})),(0,i.d4)((e=>{var s;return null===(s=e.userRecord)||void 0===s?void 0:s.toast}))),a=(0,i.d4)((e=>{var s;return null===(s=e.Frontoffice)||void 0===s?void 0:s.IP_DoctorWorkbenchNavigation}));console.log(a,"IP_DoctorWorkbenchNavigation");(0,i.wA)();const h=e=>/[a-z]/.test(e)&&/[A-Z]/.test(e)&&!/\d/.test(e)?e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,(e=>e.toUpperCase())):e,[m,x]=(0,l.useState)({PresentingComplaints:"",DetailsPresentingComplaints:"",HistoryOf:"",PatientStatusAtAdmission:"",Allergies:"",Pupil:"",Cvs:"",Rs:"",Pa:"",Cns:""}),u=e=>{const{name:s,value:a}=e.target;x((e=>({...e,[s]:a})))},[v,b]=(0,l.useState)({Anemia:!1,Arthritis:!1,Asthma:!1,Cancer:!1,ChronicObstructivePulmonaryDisease:!1,ClottingDisorder:!1,SkinDisease:!1,CongestiveHeartFailure:!1,CrohnsDisease:!1,Depression:!1,Diabetes:!1,Emphysema:!1,EndocrineProblems:!1,GERD:!1,Glaucoma:!1,Hepatitis:!1,HivAids:!1,Hypertension:!1,KidneyDisease:!1,MyocardialInfarction:!1,PepticUlcerDisease:!1,Seizures:!1,Stroke:!1,UlcerativeColitis:!1}),[y,j]=(0,l.useState)(!1),[g,p]=(0,l.useState)(""),[k,N]=(0,l.useState)({alcoholUseNever:!1,alcoholUseOccasionally:!1,alcoholUseDaily:!1,tobaccoUseNever:!1,tobaccoUseOccasionally:!1,tobaccoUseDaily:!1,SmokingUseNever:!1,SmokingUseOccasionally:!1,SmokingUseDaily:!1}),S=e=>{N((s=>{let a={...s};switch(e){case"alcoholUseNever":case"alcoholUseOccasionally":case"alcoholUseDaily":a={...s,alcoholUseNever:!1,alcoholUseOccasionally:!1,alcoholUseDaily:!1,[e]:!s[e]};break;case"tobaccoUseNever":case"tobaccoUseOccasionally":case"tobaccoUseDaily":a={...s,tobaccoUseNever:!1,tobaccoUseOccasionally:!1,tobaccoUseDaily:!1,[e]:!s[e]};break;case"SmokingUseNever":case"SmokingUseOccasionally":case"SmokingUseDaily":a={...s,SmokingUseNever:!1,SmokingUseOccasionally:!1,SmokingUseDaily:!1,[e]:!s[e]}}return a}))},[C,_]=(0,l.useState)({CancerPolyps:!1,Anemia1:!1,Diabetes1:!1,BloodClots1:!1,HeartDisease1:!1,Stroke1:!1,HighBloodPressure1:!1,AnesthesiaReaction1:!1,BleedingProblems1:!1,Hepatitis1:!1,Tb:!1,SkinDisease:!1}),[P,D]=(0,l.useState)(!1),[f,O]=(0,l.useState)(""),[A,U]=(0,l.useState)({RelationShip:""}),H=e=>{_((s=>({...s,[e]:!s[e]}))),D(!1)},[L,R]=(0,l.useState)({AdrenalGlandSurgery:!1,Appendectomy:!1,BariatricSurgery:!1,BladderSurgery:!1,BreastSurgery:!1,CesareanSection:!1,Cholecystectomy:!1,ColonSurgery:!1,CoronaryArteryBypassGraft:!1,EsophagusSurgery:!1,GastricBypassSurgery:!1,HemorrhoidSurgery:!1,HerniaRepair:!1,Hysterectomy:!1,KidneySurgery:!1,NeckSurgery:!1,ProstateSurgery:!1,SmallIntestineSurgery:!1,SpineSurgery:!1,StomachSurgery:!1,ThyroidSurgery:!1}),[Y,F]=(0,l.useState)(!1),[B,w]=(0,l.useState)(""),[M,G]=(0,l.useState)({Listnamesdates:""}),[T,E]=(0,l.useState)({Monthlyselfexam:!1,Yearlyphysicianexam:!1,Lastmammogram:!1,YearlyGYNexam:!1,YearlyPAPexam:!1,Lastmammogram2:!1,Highsunexposure:!1,Yearlyskinexam:!1}),[I,V]=(0,l.useState)({Yearlyrectalexam:!1,YearlyPSAbloodtest:!1,Yearlyrectalexam2:!1,Yearlystooltestforblood:!1}),[W,q]=(0,l.useState)({Dateoflastcolonoscopy:""}),z=e=>{E((s=>({...s,[e]:!s[e]})))},K=e=>{V((s=>({...s,[e]:!s[e]})))},[J,Z]=(0,l.useState)({Lmp:"",NoOfPregnancies:"",NoOfDeliveries:"",Vaginal:"",Csection:"",MisCarriage:"",VipAbortions:""}),$=e=>{const{name:s,value:a}=e.target;Z((e=>({...e,[s]:a})))},[Q,X]=(0,l.useState)({Temperature:"",PulseRate:"",SPO2:"",HeartRate:"",RR:"",BP:"",Height:"",Weight:"",BMI:"",WC:"",HC:"",PainScore:"",BSL:""}),ee=e=>{const{name:s,value:a,type:l}=e.target;console.log(s,a,l),X((e=>({...e,[s]:a})))};(0,l.useEffect)((()=>{if(Q.Weight&&Q.Height){const e=parseFloat(Q.Weight),s=parseFloat(Q.Height)/100,a=(e/(s*s)).toFixed(2);X((e=>({...e,BMI:a})))}}),[Q.Weight,Q.Height]);const[se,ae]=(0,l.useState)({UlRt:"",UlLt:"",LlRt:"",LlLt:""}),[le,ie]=(0,l.useState)({Rt:"",Lt:""}),oe=e=>["e","E","+","-"].includes(e.key)&&e.preventDefault(),ce=(e,s,a)=>{"Msp"===e?ae({...se,[s]:a}):"Plantars"===e&&ie({...le,[s]:a})},[ne,te]=(0,l.useState)({Oedma:!1,Cyanosis:!1,Clubbing:!1,SurgicalScars:!1,Jaundice:!1,Pallor:!1,Lymphadenopathy:!1,Thyromegaly:!1}),[re,de]=(0,l.useState)(!1),[he,me]=(0,l.useState)(""),xe=e=>{if("LocalOthers"===e){const e=!re;if(de(e),e){const e=Object.fromEntries(Object.entries(ne).map((e=>{let[s]=e;return[s,!1]})));te(e)}}else te((s=>({...s,[e]:!s[e]}))),re&&(de(!1),me(""))},[ue,ve]=(0,l.useState)({ProvisionalDiagnosis:"",FinalDiagnosis:"",TreatmentGiven:""}),[be,ye]=(0,l.useState)(!1),je=e=>{const{name:s,value:a}=e.target;a.length<=1e3&&ve((e=>({...e,[s]:a})))},[ge,pe]=(0,l.useState)([]),[ke,Ne]=(0,l.useState)(!1),[Se,Ce]=(0,l.useState)(!1),_e=[{key:"id",name:"S.No",frozen:!0},{key:"VisitId",name:"VisitId",frozen:!0},{key:"PrimaryDoctorId",name:"Doctor Id",frozen:!0},{key:"PrimaryDoctorName",name:"Doctor Name",frozen:!0},{key:"Date",name:"Date",frozen:!0},{key:"Time",name:"Time",frozen:!0},{key:"view",name:"View",frozen:!0,renderCell:e=>(0,d.jsx)(n.A,{onClick:()=>Pe(e.row),children:(0,d.jsx)(t.A,{})})}];(0,l.useEffect)((()=>{o.A.get("".concat(e,"Ip_Workbench/IP_Assesment_details_Link"),{params:{RegistrationId:null===a||void 0===a?void 0:a.RegistrationId}}).then((e=>{const s=e.data;console.log(e),pe(s)})).catch((e=>{console.log(e)}))}),[ke,e]);const Pe=e=>{var s,a,l,i,o,c,n;x({PresentingComplaints:e.PresentingComplaints||"",DetailsPresentingComplaints:e.DetailsPresentingComplaints||"",HistoryOf:e.HistoryOf||"",PatientStatusAtAdmission:e.PatientStatusAtAdmission||"",Allergies:e.Allergies||"",Pupil:e.Pupil||"",Cvs:e.Cvs||"",Rs:e.Rs||"",Pa:e.Pa||"",Cns:e.Cns||""});const t=null===(s=e.MedicalHistoryCheckbox)||void 0===s?void 0:s.split(",").reduce(((e,s)=>(e[s]=!0,e)),{});b({Anemia:(null===t||void 0===t?void 0:t.Anemia)||!1,Arthritis:(null===t||void 0===t?void 0:t.Arthritis)||!1,Asthma:(null===t||void 0===t?void 0:t.Asthma)||!1,Cancer:(null===t||void 0===t?void 0:t.Cancer)||!1,ChronicObstructivePulmonaryDisease:(null===t||void 0===t?void 0:t.ChronicObstructivePulmonaryDisease)||!1,ClottingDisorder:(null===t||void 0===t?void 0:t.ClottingDisorder)||!1,SkinDisease:(null===t||void 0===t?void 0:t.SkinDisease)||!1,CongestiveHeartFailure:(null===t||void 0===t?void 0:t.CongestiveHeartFailure)||!1,CrohnsDisease:(null===t||void 0===t?void 0:t.CrohnsDisease)||!1,Depression:(null===t||void 0===t?void 0:t.Depression)||!1,Diabetes:(null===t||void 0===t?void 0:t.Diabetes)||!1,Emphysema:(null===t||void 0===t?void 0:t.Emphysema)||!1,EndocrineProblems:(null===t||void 0===t?void 0:t.EndocrineProblems)||!1,GERD:(null===t||void 0===t?void 0:t.GERD)||!1,Glaucoma:(null===t||void 0===t?void 0:t.Glaucoma)||!1,Hepatitis:(null===t||void 0===t?void 0:t.Hepatitis)||!1,HivAids:(null===t||void 0===t?void 0:t.HivAids)||!1,Hypertension:(null===t||void 0===t?void 0:t.Hypertension)||!1,KidneyDisease:(null===t||void 0===t?void 0:t.KidneyDisease)||!1,MyocardialInfarction:(null===t||void 0===t?void 0:t.MyocardialInfarction)||!1,PepticUlcerDisease:(null===t||void 0===t?void 0:t.PepticUlcerDisease)||!1,Seizures:(null===t||void 0===t?void 0:t.Seizures)||!1,Stroke:(null===t||void 0===t?void 0:t.Stroke)||!1,UlcerativeColitis:(null===t||void 0===t?void 0:t.UlcerativeColitis)||!1}),j(e.MedicalHistoryOthers||!1),p(e.MedicalHistoryOthers||""),console.log(e.MedicalHistoryOthers,"data.MedicalHistoryOthers");const r=null===(a=e.SocialHistoryCheckbox)||void 0===a?void 0:a.split(",").reduce(((e,s)=>(e[s]=!0,e)),{});N({alcoholUseNever:(null===r||void 0===r?void 0:r.alcoholUseNever)||!1,alcoholUseOccasionally:(null===r||void 0===r?void 0:r.alcoholUseOccasionally)||!1,alcoholUseDaily:(null===r||void 0===r?void 0:r.alcoholUseDaily)||!1,tobaccoUseNever:(null===r||void 0===r?void 0:r.tobaccoUseNever)||!1,tobaccoUseOccasionally:(null===r||void 0===r?void 0:r.tobaccoUseOccasionally)||!1,tobaccoUseDaily:(null===r||void 0===r?void 0:r.tobaccoUseDaily)||!1,SmokingUseNever:(null===r||void 0===r?void 0:r.SmokingUseNever)||!1,SmokingUseOccasionally:(null===r||void 0===r?void 0:r.SmokingUseOccasionally)||!1,SmokingUseDaily:(null===r||void 0===r?void 0:r.SmokingUseDaily)||!1});const d=null===(l=e.FamilyHistoryCheckbox)||void 0===l?void 0:l.split(",").reduce(((e,s)=>(e[s]=!0,e)),{});_({CancerPolyps:(null===d||void 0===d?void 0:d.CancerPolyps)||!1,Anemia1:(null===d||void 0===d?void 0:d.Anemia1)||!1,Diabetes1:(null===d||void 0===d?void 0:d.Diabetes1)||!1,BloodClots1:(null===d||void 0===d?void 0:d.BloodClots1)||!1,HeartDisease1:(null===d||void 0===d?void 0:d.HeartDisease1)||!1,Stroke1:(null===d||void 0===d?void 0:d.Stroke1)||!1,HighBloodPressure1:(null===d||void 0===d?void 0:d.HighBloodPressure1)||!1,AnesthesiaReaction1:(null===d||void 0===d?void 0:d.AnesthesiaReaction1)||!1,BleedingProblems1:(null===d||void 0===d?void 0:d.BleedingProblems1)||!1,Hepatitis1:(null===d||void 0===d?void 0:d.Hepatitis1)||!1,Tb:(null===d||void 0===d?void 0:d.Tb)||!1,SkinDisease:(null===d||void 0===d?void 0:d.SkinDisease)||!1}),U({RelationShip:e.RelationShip||""}),D(e.FamilyHistoryOthers||!1),O(e.FamilyHistoryOthers||"");const h=null===(i=e.SurgicalHistoryCheckbox)||void 0===i?void 0:i.split(",").reduce(((e,s)=>(e[s]=!0,e)),{});R({AdrenalGlandSurgery:(null===h||void 0===h?void 0:h.AdrenalGlandSurgery)||!1,Appendectomy:(null===h||void 0===h?void 0:h.Appendectomy)||!1,BariatricSurgery:(null===h||void 0===h?void 0:h.BariatricSurgery)||!1,BladderSurgery:(null===h||void 0===h?void 0:h.BladderSurgery)||!1,BreastSurgery:(null===h||void 0===h?void 0:h.BreastSurgery)||!1,CesareanSection:(null===h||void 0===h?void 0:h.CesareanSection)||!1,Cholecystectomy:(null===h||void 0===h?void 0:h.Cholecystectomy)||!1,ColonSurgery:(null===h||void 0===h?void 0:h.ColonSurgery)||!1,CoronaryArteryBypassGraft:(null===h||void 0===h?void 0:h.CoronaryArteryBypassGraft)||!1,EsophagusSurgery:(null===h||void 0===h?void 0:h.EsophagusSurgery)||!1,GastricBypassSurgery:(null===h||void 0===h?void 0:h.GastricBypassSurgery)||!1,HemorrhoidSurgery:(null===h||void 0===h?void 0:h.HemorrhoidSurgery)||!1,HerniaRepair:(null===h||void 0===h?void 0:h.HerniaRepair)||!1,Hysterectomy:(null===h||void 0===h?void 0:h.Hysterectomy)||!1,KidneySurgery:(null===h||void 0===h?void 0:h.KidneySurgery)||!1,NeckSurgery:(null===h||void 0===h?void 0:h.NeckSurgery)||!1,ProstateSurgery:(null===h||void 0===h?void 0:h.ProstateSurgery)||!1,SmallIntestineSurgery:(null===h||void 0===h?void 0:h.SmallIntestineSurgery)||!1,SpineSurgery:(null===h||void 0===h?void 0:h.SpineSurgery)||!1,StomachSurgery:(null===h||void 0===h?void 0:h.StomachSurgery)||!1,ThyroidSurgery:(null===h||void 0===h?void 0:h.ThyroidSurgery)||!1}),F(e.SurgicalHistoryOthers||!1),w(e.SurgicalHistoryOthers||""),G({Listnamesdates:e.Listnamesdates||""});const m=(null===(o=e.womenMenCheckbox)||void 0===o?void 0:o.split(","))||[];E({Monthlyselfexam:m.includes("Monthlyselfexam"),Yearlyphysicianexam:m.includes("Yearlyphysicianexam"),Lastmammogram:m.includes("Lastmammogram"),YearlyGYNexam:m.includes("YearlyGYNexam"),YearlyPAPexam:m.includes("YearlyPAPexam"),Lastmammogram2:m.includes("Lastmammogram2"),Highsunexposure:m.includes("Highsunexposure"),Yearlyskinexam:m.includes("Yearlyskinexam")});const u=(null===(c=e.menCheckbox)||void 0===c?void 0:c.split(","))||[];V({Yearlyrectalexam:u.includes("Yearlyrectalexam"),YearlyPSAbloodtest:u.includes("YearlyPSAbloodtest"),Yearlyrectalexam2:u.includes("Yearlyrectalexam2"),Yearlystooltestforblood:u.includes("Yearlystooltestforblood")}),q({Dateoflastcolonoscopy:e.Dateoflastcolonoscopy||""}),Z({Lmp:e.Lmp||"",NoOfPregnancies:e.NoOfPregnancies||"",NoOfDeliveries:e.NoOfDeliveries||"",Vaginal:e.Vaginal||"",Csection:e.Csection||"",MisCarriage:e.MisCarriage||"",VipAbortions:e.VipAbortions||""}),X({Temperature:e.Temperature||"",PulseRate:e.PulseRate||"",SPO2:e.SPO2||"",HeartRate:e.HeartRate||"",RR:e.RR||"",BP:e.BP||"",Height:e.Height||"",Weight:e.Weight||"",BMI:e.BMI||"",WC:e.WC||"",HC:e.HC||"",PainScore:e.PainScore||"",BSL:e.BSL||""}),ae({UlRt:e.UlRt||"",UlLt:e.UlLt||"",LlRt:e.LlRt||"",LlLt:e.LlLt||""}),ie({Rt:e.Rt||"",Lt:e.Lt||""});const v=(null===(n=e.LocalExamination)||void 0===n?void 0:n.split(","))||[];te({Oedma:v.includes("Oedma"),Cyanosis:v.includes("Cyanosis"),Clubbing:v.includes("Clubbing"),SurgicalScars:v.includes("SurgicalScars"),Jaundice:v.includes("Jaundice"),Pallor:v.includes("Pallor"),Lymphadenopathy:v.includes("Lymphadenopathy"),Thyromegaly:v.includes("Thyromegaly")}),de(e.LocalOthers||!1),me(e.LocalOthers||""),ve({ProvisionalDiagnosis:e.ProvisionalDiagnosis||"",FinalDiagnosis:e.FinalDiagnosis||"",TreatmentGiven:e.TreatmentGiven||""});const y="true"===e.isSameAsProvisional;ye(y||!1),console.log(y),Ce(!0)};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"new-patient-registration-form",children:[(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"RegisFormcon_1",children:[(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","(Presenting Complaints)C/O ",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{name:"PresentingComplaints",id:"PresentingComplaints",onChange:u,value:m.PresentingComplaints})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","Details of Presenting Complaints",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{name:"DetailsPresentingComplaints",id:"DetailsPresentingComplaints",onChange:u,value:m.DetailsPresentingComplaints})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","H/O(history of)",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{name:"HistoryOf",id:"HistoryOf",onChange:u,value:m.HistoryOf})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","Patient Status At Admission",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{name:"PatientStatusAtAdmission",id:"PatientStatusAtAdmission",onChange:u,value:m.PatientStatusAtAdmission})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"Medical History "})}),(0,d.jsxs)("div",{className:"div_ckkkbox_head",children:[Object.keys(v).map(((e,s)=>(0,d.jsx)(l.Fragment,{children:s%8===0&&(0,d.jsx)("div",{className:"div_ckkck_box",children:Object.keys(v).slice(s,s+8).map((e=>(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",id:e,className:"checkbox-input",checked:v[e],onChange:()=>(e=>{b((s=>({...s,[e]:!s[e]}))),j(!1)})(e)}),h(e)]},e)))})},e))),(0,d.jsxs)("div",{className:"checkbox-label_ooo",children:[(0,d.jsxs)("label",{className:"checkbox-label1",children:[(0,d.jsx)("input",{type:"checkbox",id:"others",className:"checkbox-input",checked:y,onChange:e=>{const s=e.target.checked;if(j(s),s){const e=Object.fromEntries(Object.entries(v).map((e=>{let[s]=e;return[s,!1]})));b(e)}p("")}}),(0,d.jsx)("span",{children:"Others"})]},"others"),(0,d.jsx)("textarea",{id:"others-textarea",value:g,onChange:e=>p(e.target.value),placeholder:"Please Specify Here",style:{marginLeft:"8px"},className:"textarea-wide1"})]})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"Social History "})}),(0,d.jsxs)("div",{className:" ",children:[(0,d.jsx)("div",{className:"div_ckkck_box alcho_tac_drg11",children:(0,d.jsxs)("div",{className:"ffdff44",children:[(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:"checkbox-label_ooo alcho_tac_drg",children:[" ","Alcohol use ",(0,d.jsxs)("span",{children:["-"," "]})]})}),(0,d.jsxs)("div",{className:"flx_cjk_labl3",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.alcoholUseNever,onChange:()=>{S("alcoholUseNever")}}),"Never"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.alcoholUseOccasionally,onChange:()=>{S("alcoholUseOccasionally")}}),"Occasionally"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.alcoholUseDaily,onChange:()=>{S("alcoholUseDaily")}}),"Daily"]})]})]})}),(0,d.jsx)("div",{className:"div_ckkck_box alcho_tac_drg11",children:(0,d.jsxs)("div",{className:"ffdff44",children:[(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:"checkbox-label_ooo alcho_tac_drg",children:[" ","Tobacco use ",(0,d.jsxs)("span",{children:["-"," "]})]})}),(0,d.jsxs)("div",{className:"flx_cjk_labl3",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.tobaccoUseNever,onChange:()=>{S("tobaccoUseNever")}}),"Never"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.tobaccoUseOccasionally,onChange:()=>{S("tobaccoUseOccasionally")}}),"Occasionally"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.tobaccoUseDaily,onChange:()=>{S("tobaccoUseDaily")}}),"Daily"]})]})]})}),(0,d.jsx)("div",{className:"div_ckkck_box alcho_tac_drg11",children:(0,d.jsxs)("div",{className:"ffdff44",children:[(0,d.jsx)("div",{children:(0,d.jsxs)("label",{className:"checkbox-label_ooo alcho_tac_drg",children:[" ","Drugs use ",(0,d.jsxs)("span",{children:["-"," "]})]})}),(0,d.jsxs)("div",{className:"flx_cjk_labl3",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.drugsUseNever,onChange:()=>{S("drugsUseNever")}}),"Never"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.drugsUseOccasionally,onChange:()=>{S("drugsUseOccasionally")}}),"Occasionally"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input ddsfe",checked:k.drugsUseDaily,onChange:()=>{S("drugsUseDaily")}}),"Daily"]})]})]})})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"Family History "})}),(0,d.jsxs)("div",{className:"div_ckkkbox_head",children:[(0,d.jsxs)("div",{className:"div_ckkck_box",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.CancerPolyps,onChange:()=>H("CancerPolyps")}),"Cancer/Polyps"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.Anemia1,onChange:()=>H("Anemia1")}),"Anemia"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.Diabetes1,onChange:()=>H("Diabetes1")}),"Diabetes"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.BloodClots1,onChange:()=>H("BloodClots1")}),"Blood Clots"]})]}),(0,d.jsxs)("div",{className:"div_ckkck_box",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.HeartDisease1,onChange:()=>H("HeartDisease1")}),"Heart Disease"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.Stroke1,onChange:()=>H("Stroke1")}),"Stroke"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.HighBloodPressure1,onChange:()=>H("HighBloodPressure1")}),"High Blood Pressure"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.AnesthesiaReaction1,onChange:()=>H("AnesthesiaReaction1")}),"Anesthesia Reaction"]})]}),(0,d.jsxs)("div",{className:"div_ckkck_box",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.BleedingProblems1,onChange:()=>H("BleedingProblems1")}),"Bleeding Problems"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.Hepatitis1,onChange:()=>H("Hepatitis1")}),"Hepatitis"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.Tb,onChange:()=>H("Tb")}),"TB"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:C.SkinDisease,onChange:()=>H("SkinDisease")}),"Skin Disease"]})]}),(0,d.jsxs)("div",{className:"checkbox-label_ooo ",children:[(0,d.jsxs)("label",{className:"checkbox-label1 ",children:[(0,d.jsx)("input",{type:"checkbox",id:"others1",className:"checkbox-input",checked:P,onChange:e=>{const s=e.target.checked;if(D(s),s){const e=Object.fromEntries(Object.entries(C).map((e=>{let[s]=e;return[s,!1]})));_(e)}O("")}}),(0,d.jsx)("span",{style:{marginRight:"8px"},children:"Others"})]},"others1"),(0,d.jsx)("textarea",{id:"others-textarea1",value:f,onChange:e=>O(e.target.value),placeholder:"Please specify...",style:{marginLeft:"8px"},className:"textarea-wide1"})]})]}),(0,d.jsx)("div",{className:"form-section56",children:(0,d.jsxs)("label",{className:"form-field56",children:[" ","Relationship :",(0,d.jsx)("input",{type:"text",name:"RelationShip",value:A.RelationShip,onChange:e=>{const{name:s,value:a}=e.target;U((e=>({...e,[s]:a})))}})]})})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"Surgical History "})}),(0,d.jsxs)("div",{className:"div_ckkkbox_head",children:[Object.keys(L).map(((e,s)=>(0,d.jsx)(l.Fragment,{children:s%7===0&&(0,d.jsx)("div",{className:"div_ckkck_box",children:Object.keys(L).slice(s,s+7).map((e=>(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",id:e,className:"checkbox-input",checked:L[e],onChange:()=>(e=>{R((s=>({...s,[e]:!s[e]}))),F(!1)})(e)}),h(e)]},e)))})},e))),(0,d.jsxs)("div",{className:"checkbox-label_ooo",children:[(0,d.jsxs)("label",{className:"checkbox-label1 ",children:[(0,d.jsx)("input",{type:"checkbox",id:"other",className:"checkbox-input",checked:Y,onChange:e=>{const s=e.target.checked;if(F(s),s){const e=Object.fromEntries(Object.entries(L).map((e=>{let[s]=e;return[s,!1]})));R(e)}w("")}}),(0,d.jsx)("span",{style:{marginRight:"8px"},children:"Others"})]},"other"),(0,d.jsx)("textarea",{id:"others-textarea",value:B,onChange:e=>w(e.target.value),placeholder:"Please specify...",style:{marginLeft:"8px"},className:"textarea-wide1"})]})]}),(0,d.jsx)("div",{className:"RegisFormcon",children:(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsx)("label",{children:" Names and Date of Surgeries :"}),(0,d.jsx)("textarea",{name:"Listnamesdates",value:M.Listnamesdates,onChange:e=>{const{name:s,value:a}=e.target;G((e=>({...e,[s]:a})))}})]})})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"Cancer Health Habits"})}),(0,d.jsxs)("div",{className:"health-habits-container",children:[(0,d.jsx)("div",{className:"women-section",children:(0,d.jsx)("div",{className:"women_head_men",children:(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("h5",{children:"Women"}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"w99jdid_head",children:[(0,d.jsxs)("div",{className:"div_ckkck_box w99jdid",children:[(0,d.jsx)("div",{className:"weedcvt65_head",children:(0,d.jsx)("label",{children:"Breast :"})}),(0,d.jsxs)("div",{className:"weedcvt65",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.Monthlyselfexam,onChange:()=>z("Monthlyselfexam")}),"Monthly self-exam"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.Yearlyphysicianexam,onChange:()=>z("Yearlyphysicianexam")}),"Yearly physician-exam"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.Lastmammogram,onChange:()=>z("Lastmammogram")}),"Last mammogram"]})]})]}),(0,d.jsxs)("div",{className:"div_ckkck_box w99jdid",children:[(0,d.jsx)("div",{className:"weedcvt65_head",children:(0,d.jsx)("label",{children:"GYN :"})}),(0,d.jsxs)("div",{className:"weedcvt65",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.YearlyGYNexam,onChange:()=>z("YearlyGYNexam")}),"Yearly GYN exam"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.YearlyPAPexam,onChange:()=>z("YearlyPAPexam")}),"Yearly PAP exam"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.Lastmammogram2,onChange:()=>z("Lastmammogram2")}),"Last mammogram"]})]})]}),(0,d.jsxs)("div",{className:"div_ckkck_box w99jdid",children:[(0,d.jsx)("div",{className:"weedcvt65_head",children:(0,d.jsx)("label",{children:"Skin :"})}),(0,d.jsxs)("div",{className:"weedcvt65",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.Highsunexposure,onChange:()=>z("Highsunexposure")}),"High sun exposure"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:T.Yearlyskinexam,onChange:()=>z("Yearlyskinexam")}),"Yearly skin exam"]})]})]})]})]})})}),(0,d.jsx)("div",{className:"men-section",children:(0,d.jsx)("div",{className:"women_head_men",children:(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("h5",{children:"Men"}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"w99jdid_head",children:[(0,d.jsxs)("div",{className:"div_ckkck_box w99jdid",children:[(0,d.jsx)("div",{className:"weedcvt65_head",children:(0,d.jsx)("label",{children:"Prostate :"})}),(0,d.jsxs)("div",{className:"weedcvt65",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",name:"Yearlyrectalexam",checked:I.Yearlyrectalexam,onChange:e=>K("Yearlyrectalexam")}),"Yearly rectal exam"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",name:"YearlyPSAbloodtest",checked:I.YearlyPSAbloodtest,onChange:e=>K("YearlyPSAbloodtest")}),"Yearly PSA blood test"]})]})]}),(0,d.jsxs)("div",{className:"div_ckkck_box w99jdid",children:[(0,d.jsx)("div",{className:"weedcvt65_head",children:(0,d.jsx)("label",{children:"Colon :"})}),(0,d.jsxs)("div",{className:"weedcvt65",children:[(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",name:"Yearlyrectalexam2",checked:I.Yearlyrectalexam2,onChange:e=>K("Yearlyrectalexam2")}),"Yearly rectal exam"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",className:"checkbox-input",name:"Yearlystooltestforblood",checked:I.Yearlystooltestforblood,onChange:e=>K("Yearlystooltestforblood")}),"Yearly stool test for blood"]}),(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:["Date of last colonoscopy :",(0,d.jsx)("input",{type:"text",className:"checkbox-input iojiu7",name:"Dateoflastcolonoscopy",value:W.Dateoflastcolonoscopy,onChange:e=>{const{name:s,value:a}=e.target;q((e=>({...e,[s]:a})))}})]})]})]})]})]})})})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"Gynec History"})}),(0,d.jsxs)("div",{className:"RegisFormcon",children:[(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"LMP",children:["LMP ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"date",id:"LMP",name:"Lmp",onChange:$,value:J.Lmp,required:!0})]}),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"Noofpregnancies",children:["No.of Pregnancies ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"number",id:"Noofpregnancies",name:"NoOfPregnancies",onChange:$,value:J.NoOfPregnancies,required:!0})]}),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"Noofdeliveries",children:["No.of Deliveries ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"number",id:"Noofdeliveries",name:"NoOfDeliveries",onChange:$,value:J.NoOfDeliveries,required:!0})]}),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"vaginal",children:["Vaginal ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"text",id:"vaginal",name:"Vaginal",onChange:$,value:J.Vaginal,required:!0})]}),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"csection",children:["C-Section ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"text",id:"csection",name:"Csection",onChange:$,value:J.Csection,required:!0})]}),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"Miscarriage",children:["Miscarriage ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"number",id:"Miscarriage",name:"MisCarriage",onChange:$,value:J.MisCarriage,required:!0})]}),(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{htmlFor:"Vipabortions",children:["VIPs(Abortion)",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"number",id:"Vipabortions",name:"VipAbortions",onChange:$,value:J.VipAbortions,required:!0})]})]})]}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"RegisFormcon",children:(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{htmlFor:"allergies",children:["Allergies",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("textarea",{id:"allergies",name:"Allergies",onChange:u,value:m.Allergies,required:!0,className:"textarea-wide"})]})}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"O/E(on examination) "})})," ",(0,d.jsx)("div",{className:"new-patient-registration-form",children:(0,d.jsx)("div",{className:"RegisFormcon",children:Object.keys(Q).map(((e,s)=>(0,d.jsxs)("div",{className:"RegisForm_1",children:[(0,d.jsxs)("label",{children:[h(e)," ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("input",{type:"CapturedDate"===e?"date":"Time"===e?"time":"number",name:e,onKeyDown:oe,value:Q[e],readOnly:"CapturedDate"===e,onChange:ee})]},s)))})})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"S/E (systemicexamination) "})}),(0,d.jsxs)("div",{className:"RegisFormcon_1",children:[(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","CVS",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{id:"CVS",name:"Cvs",onChange:u,value:m.Cvs,required:!0})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","Pupil",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{id:"pupil",name:"Pupil",onChange:u,value:m.Pupil,required:!0,className:"textarea-wide"})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot nnn_prcx3",children:[(0,d.jsxs)("label",{children:[" ","MSP",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("div",{className:"Selected-table-container",children:(0,d.jsxs)("table",{className:"selected-medicine-table2",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{}),(0,d.jsx)("th",{children:"Rt"}),(0,d.jsx)("th",{children:"Lt"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"UL"}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"number",id:"Ul_RT",name:"UlRt",value:se.UlRt,onChange:e=>ce("Msp","UlRt",e.target.value)})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"number",id:"Ul_LT",name:"UlLt",value:se.UlLt,onChange:e=>ce("Msp","UlLt",e.target.value)})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"LL"}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"number",id:"Ll_Rt",name:"LlRt",value:se.LlRt,onChange:e=>ce("Msp","LlRt",e.target.value)})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"number",id:"Ll_Lt",name:"LlLt",value:se.LlLt,onChange:e=>ce("Msp","LlLt",e.target.value)})})]})]})]})})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot nnn_prcx3",children:[(0,d.jsxs)("label",{children:[" ","Plantors",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("div",{className:"Selected-table-container",children:(0,d.jsxs)("table",{className:"selected-medicine-table2",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Rt"}),(0,d.jsx)("th",{children:"Lt"})]})}),(0,d.jsx)("tbody",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"number",name:"Rt",value:le.Rt,onChange:e=>ce("Plantars","Rt",e.target.value)})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{type:"number",name:"Lt",value:le.Lt,onChange:e=>ce("Plantars","Lt",e.target.value)})})]})})]})})]})]}),(0,d.jsxs)("div",{className:"RegisFormcon_1",children:[(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","RS",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{id:"RS",name:"Rs",onChange:u,value:m.Rs,required:!0})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","P/A",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{id:"PA",name:"Pa",onChange:u,value:m.Pa,required:!0,className:"textarea-wide"})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{children:[" ","CNS",(0,d.jsx)("span",{children:":"})," "]}),(0,d.jsx)("textarea",{id:"CNS",name:"Cns",onChange:u,value:m.Cns,required:!0,className:"textarea-wide"})]})]})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"form-section522",children:[(0,d.jsx)("div",{className:"dkwjd",children:(0,d.jsx)("h3",{children:"L/E (local examination)"})}),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"div_ckkkbox_head",children:[Object.keys(ne).map(((e,s)=>(0,d.jsx)(l.Fragment,{children:s%2===0&&(0,d.jsx)("div",{className:"div_ckkck_box",children:Object.keys(ne).slice(s,s+2).map((e=>(0,d.jsxs)("label",{className:"checkbox-label_ooo",children:[(0,d.jsx)("input",{type:"checkbox",id:e,className:"checkbox-input",checked:ne[e],onChange:()=>xe(e)}),h(e)]},e)))})},e))),(0,d.jsxs)("div",{className:"checkbox-label_ooo",style:{justifyContent:"center"},children:[(0,d.jsxs)("label",{htmlFor:"LocalOthers",className:"checkbox-label1",children:[(0,d.jsx)("input",{type:"checkbox",id:"LocalOthers",className:"checkbox-input",checked:re,onChange:()=>xe("LocalOthers")}),(0,d.jsx)("span",{style:{marginRight:"8px"},children:"Others"})]}),(0,d.jsx)("textarea",{id:"others-textarea",value:he,onChange:e=>me(e.target.value),placeholder:"Please specify...",style:{marginLeft:"8px"},className:"textarea-wide1"})]})]})})]}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"RegisFormcon_1",children:(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{htmlFor:"ProvisionalDiagnosis",children:["Provisional Diagnosis ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("textarea",{id:"ProvisionalDiagnosis",name:"ProvisionalDiagnosis",value:ue.ProvisionalDiagnosis,onChange:je,maxLength:1e3})]})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"RegisFormcon_1",children:(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsx)("input",{type:"checkbox",id:"sameAsProvisional",checked:be,onChange:()=>{ye(!be),ve(be?e=>({...e,FinalDiagnosis:""}):e=>({...e,FinalDiagnosis:ue.ProvisionalDiagnosis}))}}),(0,d.jsx)("label",{htmlFor:"sameAsProvisional",children:"Same as Provisional Diagnosis"})]})}),(0,d.jsx)("br",{}),(0,d.jsxs)("div",{className:"RegisFormcon_1",children:[console.log(be,"isSameAsProvisional"),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{htmlFor:"FinalDiagnosis",children:["Final Diagnosis ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("textarea",{id:"FinalDiagnosis",name:"FinalDiagnosis",value:ue.FinalDiagnosis,onChange:je,maxLength:1e3,readOnly:be})]}),(0,d.jsxs)("div",{className:"text_adjust_mt_Ot",children:[(0,d.jsxs)("label",{htmlFor:"TreatmentGiven",children:["Treatment Given ",(0,d.jsx)("span",{children:":"})]}),(0,d.jsx)("textarea",{id:"TreatmentGiven",name:"TreatmentGiven",value:ue.TreatmentGiven,onChange:je,maxLength:1e3})]})]}),"a",(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"Main_container_Btn",children:Se&&(0,d.jsx)("button",{onClick:()=>{x({PresentingComplaints:"",DetailsPresentingComplaints:"",HistoryOf:"",PatientStatusAtAdmission:"",Allergies:"",Pupil:"",Cvs:"",Rs:"",Pa:"",Cns:""}),b({Anemia:!1,Arthritis:!1,Asthma:!1,Cancer:!1,ChronicObstructivePulmonaryDisease:!1,ClottingDisorder:!1,SkinDisease:!1,CongestiveHeartFailure:!1,CrohnsDisease:!1,Depression:!1,Diabetes:!1,Emphysema:!1,EndocrineProblems:!1,GERD:!1,Glaucoma:!1,Hepatitis:!1,HivAids:!1,Hypertension:!1,KidneyDisease:!1,MyocardialInfarction:!1,PepticUlcerDisease:!1,Seizures:!1,Stroke:!1,UlcerativeColitis:!1}),j(!1),p(""),N({alcoholUseNever:!1,alcoholUseOccasionally:!1,alcoholUseDaily:!1,tobaccoUseNever:!1,tobaccoUseOccasionally:!1,tobaccoUseDaily:!1,SmokingUseNever:!1,SmokingUseOccasionally:!1,SmokingUseDaily:!1}),_({CancerPolyps:!1,Anemia1:!1,Diabetes1:!1,BloodClots1:!1,HeartDisease1:!1,Stroke1:!1,HighBloodPressure1:!1,AnesthesiaReaction1:!1,BleedingProblems1:!1,Hepatitis1:!1,Tb:!1,SkinDisease:!1}),U({RelationShip:""}),D(!1),O(""),R({AdrenalGlandSurgery:!1,Appendectomy:!1,BariatricSurgery:!1,BladderSurgery:!1,BreastSurgery:!1,CesareanSection:!1,Cholecystectomy:!1,ColonSurgery:!1,CoronaryArteryBypassGraft:!1,EsophagusSurgery:!1,GastricBypassSurgery:!1,HemorrhoidSurgery:!1,HerniaRepair:!1,Hysterectomy:!1,KidneySurgery:!1,NeckSurgery:!1,ProstateSurgery:!1,SmallIntestineSurgery:!1,SpineSurgery:!1,StomachSurgery:!1,ThyroidSurgery:!1}),F(!1),w(""),G({Listnamesdates:""}),E({Monthlyselfexam:!1,Yearlyphysicianexam:!1,Lastmammogram:!1,YearlyGYNexam:!1,YearlyPAPexam:!1,Lastmammogram2:!1,Highsunexposure:!1,Yearlyskinexam:!1}),V({Yearlyrectalexam:!1,YearlyPSAbloodtest:!1,Yearlyrectalexam2:!1,Yearlystooltestforblood:!1}),q({Dateoflastcolonoscopy:""}),Z({Lmp:"",NoOfPregnancies:"",NoOfDeliveries:"",Vaginal:"",Csection:"",MisCarriage:"",VipAbortions:""}),X({Temperature:"",PulseRate:"",SPO2:"",HeartRate:"",RR:"",BP:"",Height:"",Weight:"",BMI:"",WC:"",HC:"",PainScore:"",BSL:""}),ae({UlRt:"",UlLt:"",LlRt:"",LlLt:""}),ie({Rt:"",Lt:""}),te({Oedma:!1,Cyanosis:!1,Clubbing:!1,SurgicalScars:!1,Jaundice:!1,Pallor:!1,Lymphadenopathy:!1,Thyromegaly:!1}),de(!1),me(""),ve({ProvisionalDiagnosis:"",FinalDiagnosis:"",TreatmentGiven:""}),ye(!1),Ce(!1)},children:"Clear"})}),ge.length>0&&(0,d.jsx)(r.A,{columns:_e,RowData:ge}),(0,d.jsx)(c.A,{Message:s.message,Type:s.type})]})})}},8340:()=>{},4885:()=>{}}]);
//# sourceMappingURL=556.dcc3965d.chunk.js.map