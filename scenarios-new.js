const SCENARIOS = [
// ═══════════════════════════════════════════════════════════
// MEDICAL (10 scenarios)
// ═══════════════════════════════════════════════════════════

{id:"med-acs-atypical-01",title:"Jaw Pain and Nausea in Diabetic Female",category:"Medical",difficulty:"Hard",
dispatch:"Respond to an office building for a 45-year-old female with jaw pain and nausea.",
patient:{age:45,sex:"F",cc:"Jaw pain, nausea, fatigue"},
scene:"Office break room. Patient seated, pale, diaphoretic, holding jaw. Coworker states she's been complaining of feeling 'off' for an hour.",
vitals:{hr:104,bp:"152/94",rr:22,spo2:93,gcs:15,temp:"98.8°F",bg:"268 mg/dL"},
history:{pmh:"Type 2 diabetes, HTN, obesity, PCOS",meds:"Metformin, lisinopril, glipizide",allergies:"Codeine"},
presentation:"Diaphoretic female c/o bilateral jaw pain radiating to neck, nausea x1 hour, progressive fatigue. Denies chest pain. Skin pale, cool, diaphoretic. Breath sounds clear bilaterally.",
primary_protocol:"03.02",related_protocols:["02.02","02.10A","01.01"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"What is your primary clinical suspicion for this patient?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Diabetic patients — especially women — frequently present with atypical ACS. Jaw pain, nausea, fatigue, and diaphoresis without chest pain are classic anginal equivalents. Always maintain high suspicion for cardiac events in diabetics even without chest pain.",
  options:[
   {text:"Acute Coronary Syndrome presenting as anginal equivalent — jaw pain, nausea, diaphoresis in a diabetic female with cardiac risk factors",correct:true,explanation:"This is a classic atypical ACS presentation. Diabetic neuropathy can blunt chest pain perception. Jaw pain, nausea, diaphoresis, and fatigue are recognized anginal equivalents, especially in women and diabetics.",protocol_ref:"03.02"},
   {text:"Dental emergency — bilateral jaw pain is most likely TMJ dysfunction or dental abscess requiring oral surgery referral",correct:false,explanation:"Bilateral jaw pain with diaphoresis, nausea, and cardiac risk factors demands cardiac evaluation before attributing to dental causes.",protocol_ref:"03.02"},
   {text:"Diabetic ketoacidosis — elevated blood glucose of 268 with nausea indicates DKA as the primary problem",correct:false,explanation:"While the glucose is elevated, DKA typically presents with Kussmaul respirations, acetone breath, and much higher glucose. The diaphoresis and jaw pain point to ACS.",protocol_ref:"02.10A"},
   {text:"Anxiety attack with hyperventilation — the patient is simply having a panic episode in a stressful work environment",correct:false,critical:true,explanation:"Attributing these symptoms to anxiety in a 45yo diabetic female with multiple cardiac risk factors could be fatal. This is a dangerous cognitive bias.",protocol_ref:"03.02"}
  ]},
 {phase:"treatment",prompt:"What is your initial treatment priority for this patient?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Aspirin 324mg (4 x 81mg chewed), oxygen to maintain SpO2 94-99%, obtain 12-lead ECG if resources available",correct:true,explanation:"Per Protocol 03.02: ASA 81mg x4 chewed for suspected ACS. Oxygen for SpO2 <94%. Multi-lead ECG should be obtained for any suspected cardiac etiology.",protocol_ref:"03.02"},
   {text:"Administer oral glucose for the elevated blood sugar and reassess after glucose normalizes",correct:false,explanation:"Oral glucose is for hypoglycemia, not hyperglycemia. The elevated glucose is secondary — ACS treatment takes priority.",protocol_ref:"02.10A"},
   {text:"Ondansetron 4mg for nausea first, then reassess the jaw pain after the nausea resolves",correct:false,explanation:"Treating nausea alone delays critical ACS interventions. ASA and ECG take priority.",protocol_ref:"02.07A"},
   {text:"Ice pack to jaw and ibuprofen for presumed musculoskeletal jaw pain with transport to urgent care",correct:false,critical:true,explanation:"Treating this as musculoskeletal pain and diverting from emergency care could result in missed MI and death.",protocol_ref:"03.02"}
  ]},
 {phase:"treatment",prompt:"The 12-lead ECG shows ST elevation in V3R-V5R. The patient's SBP remains 152/94. A coworker finds her prescribed nitroglycerin in her purse. What do you do?",multi_select:false,level_filter:"ACP",
  clinical_pearl:"Right ventricular infarction is identified by ST elevation in right-sided leads (V3R-V5R). These patients are preload-dependent — NTG causes venous pooling that can precipitate cardiovascular collapse. Always obtain right-sided leads when inferior STEMI is suspected.",
  options:[
   {text:"Withhold nitroglycerin — ST elevation in right-sided leads indicates right ventricular involvement where NTG can cause cardiovascular collapse; activate CODE STEMI",correct:true,explanation:"Right ventricular MI patients are preload-dependent. NTG causes venous pooling and can drop BP catastrophically. Activate STEMI alert and transport to PCI facility.",protocol_ref:"03.02"},
   {text:"Administer NTG 0.4mg SL since SBP is well above 100 and the patient has it prescribed for chest pain episodes",correct:false,critical:true,explanation:"This is a RIGHT-SIDED MI. Despite SBP >100, NTG causes venous pooling and can precipitate cardiovascular collapse in RV infarction. The SBP threshold alone does not make NTG safe here.",protocol_ref:"03.02"},
   {text:"Administer half the usual NTG dose (0.2mg) as a compromise to treat pain while minimizing hemodynamic risk",correct:false,explanation:"There is no 'half dose' NTG protocol. Any NTG in right ventricular MI risks hemodynamic collapse regardless of dose.",protocol_ref:"03.02"},
   {text:"Start a fluid bolus of 500ml NS first, then administer NTG once you've 'preloaded' the patient with fluids",correct:false,explanation:"While fluid resuscitation is appropriate for RV MI, the goal is NOT to enable NTG administration. NTG should be avoided entirely in RV infarction.",protocol_ref:"03.02"}
  ]},
 {phase:"treatment",prompt:"During transport to the PCI facility, the patient suddenly becomes unresponsive. Monitor shows ventricular tachycardia with a pulse. BP is 78/50. What is your immediate action?",multi_select:false,level_filter:"CP",
  vitals_update:{hr:188,bp:"78/50",rr:8,spo2:84},
  narrative:"The patient suddenly clutches her chest, gasps, and becomes unresponsive. You look at the monitor.",
  clinical_pearl:"Unstable wide complex tachycardia (VT with a pulse) with hemodynamic compromise requires immediate synchronized cardioversion. Do not delay with medications in the unstable patient.",
  options:[
   {text:"Immediate synchronized cardioversion at 100-200J biphasic — this is unstable VT with hemodynamic compromise",correct:true,explanation:"Per Protocol 03.07A: Unstable/pre-arrest wide complex tachycardia requires synchronized cardioversion 100-200J biphasic. Patient is hypotensive and unresponsive — this is unstable.",protocol_ref:"03.07A"},
   {text:"Administer amiodarone 150mg IV over 10 minutes and reassess rhythm after the infusion completes",correct:false,explanation:"Amiodarone is for stable VT or after cardioversion. This patient is hemodynamically unstable — electrical therapy takes priority over pharmacologic.",protocol_ref:"03.07A"},
   {text:"Perform unsynchronized defibrillation at maximum energy since the patient is unresponsive",correct:false,explanation:"The patient has a pulse and organized rhythm. Synchronized cardioversion is correct. Unsynchronized defib is for VF or pulseless VT.",protocol_ref:"03.07A"},
   {text:"Administer lidocaine 1.5mg/kg IV push and prepare for cardioversion only if the lidocaine is unsuccessful",correct:false,explanation:"Medications should not delay cardioversion in the unstable patient. Electricity first, drugs second.",protocol_ref:"03.07A"}
  ]},
 {phase:"transport",prompt:"After successful cardioversion, the patient converts to sinus rhythm at 88 with BP 96/62. Select ALL appropriate post-conversion actions.",multi_select:true,level_filter:"CP",
  options:[
   {text:"Continue transport to PCI facility with CODE STEMI activation and continuous cardiac monitoring",correct:true,explanation:"The underlying STEMI still requires emergent PCI. Continue STEMI activation and monitoring.",protocol_ref:"03.02"},
   {text:"Prepare amiodarone maintenance infusion at 1mg/min in case of recurrent VT",correct:true,explanation:"Per Protocol 03.07A: If amiodarone/cardioversion is effective, consider maintenance infusion of 1mg/min to prevent recurrence.",protocol_ref:"03.07A"},
   {text:"Administer LR 500ml IV bolus for hypotension given the right ventricular involvement",correct:true,explanation:"Per Protocol 02.20A: Fluid resuscitation for hypotension. RV MI patients are preload-dependent and benefit from volume.",protocol_ref:"02.20A"},
   {text:"Divert to the closest emergency department since the patient just had a cardiac arrest event",correct:false,explanation:"The patient had VT with a pulse (not cardiac arrest) and still needs PCI for the STEMI. Continue to PCI facility unless the patient arrests.",protocol_ref:"03.02"}
  ]}
]},

{id:"med-resp-01",title:"COPD Exacerbation with Crashing Respiratory Failure",category:"Medical",difficulty:"Hard",
dispatch:"Respond to a residence for a 68-year-old male with difficulty breathing.",
patient:{age:68,sex:"M",cc:"Severe shortness of breath"},
scene:"Small apartment, smells of cigarette smoke. Patient tripoding on edge of bed, pursed lip breathing, speaking in 1-2 word sentences. Multiple inhalers on nightstand. Home oxygen at 2L via NC.",
vitals:{hr:112,bp:"168/92",rr:32,spo2:82,gcs:14,temp:"100.2°F",bg:"136 mg/dL"},
history:{pmh:"COPD (3 hospitalizations past year), CHF, HTN",meds:"Albuterol, ipratropium, prednisone, furosemide, lisinopril",allergies:"Penicillin"},
presentation:"Severe respiratory distress with accessory muscle use, diffuse expiratory wheezing with diminished bases bilaterally, unable to speak full sentences. Peripheral edema noted. JVD present.",
primary_protocol:"02.08A",related_protocols:["03.01","05.01A","01.01"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"This patient has features of BOTH COPD exacerbation and acute decompensated heart failure. Which findings support concurrent CHF? Select ALL that apply.",multi_select:true,level_filter:"EACP",
  clinical_pearl:"COPD and CHF frequently coexist and exacerbate each other. JVD, peripheral edema, and crackles at the bases suggest fluid overload, while diffuse wheezing and prolonged expiration suggest bronchospasm. CPAP treats both conditions simultaneously.",
  options:[
   {text:"Jugular venous distention and peripheral edema suggesting fluid overload and right heart failure",correct:true,explanation:"JVD and peripheral edema are hallmarks of right-sided heart failure and fluid overload, pointing to concurrent CHF.",protocol_ref:"03.01"},
   {text:"Diminished breath sounds at the bases bilaterally, consistent with pleural effusion or pulmonary edema",correct:true,explanation:"Diminished bases in this context suggests fluid — either pleural effusions or dependent pulmonary edema from CHF.",protocol_ref:"03.01"},
   {text:"Diffuse expiratory wheezing throughout all lung fields indicating pure bronchospasm",correct:false,explanation:"While wheezing can occur with both COPD and cardiac asthma, diffuse expiratory wheezing is more characteristic of bronchospasm than CHF.",protocol_ref:"02.08A"},
   {text:"Pursed lip breathing and prolonged expiratory phase consistent with air trapping",correct:false,explanation:"Pursed lip breathing and prolonged expiration are compensatory mechanisms for obstructive disease (COPD), not CHF.",protocol_ref:"02.08A"}
  ]},
 {phase:"treatment",prompt:"What is the most appropriate initial respiratory intervention for this patient?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Albuterol 2.5mg with ipratropium 500mcg via SVN AND CPAP at 5-10 cmH2O — treats both bronchospasm and pulmonary edema simultaneously",correct:true,explanation:"Per Protocols 02.08A and 03.01: Albuterol/ipratropium via SVN for bronchospasm plus CPAP for respiratory distress with CHF component. CPAP is indicated for both conditions and many CPAP devices allow in-line nebulization.",protocol_ref:"02.08A"},
   {text:"High-flow oxygen at 15L via non-rebreather mask only — avoid CPAP due to risk of pneumothorax in COPD patients",correct:false,explanation:"While COPD patients have some risk of barotrauma, CPAP at 5-10 cmH2O is well within safe parameters and is specifically indicated in both protocols.",protocol_ref:"02.08A"},
   {text:"Withhold oxygen entirely — the patient's chronic hypoxic drive means any supplemental oxygen will cause respiratory arrest",correct:false,critical:true,explanation:"The hypoxic drive theory is largely debunked in acute settings. This patient has an SpO2 of 82% and is in respiratory failure — withholding oxygen is dangerous. Titrate oxygen to SpO2 94-99%.",protocol_ref:"01.01"},
   {text:"Immediate bag-valve-mask ventilation at 100% FiO2 with rapid transport — this patient needs intubation",correct:false,explanation:"BVM is premature. The patient is still breathing with a GCS of 14. CPAP and bronchodilators should be attempted first before escalating to positive pressure ventilation.",protocol_ref:"05.01A"}
  ]},
 {phase:"treatment",prompt:"After 5 minutes of CPAP and nebulized albuterol/ipratropium, the patient is now more agitated, pulling at the CPAP mask. SpO2 has improved to 89%. What is the appropriate next step?",multi_select:false,level_filter:"CP",
  vitals_update:{hr:124,bp:"172/96",rr:28,spo2:89},
  narrative:"The patient is fighting the CPAP mask, repeatedly pulling it off his face. He is becoming increasingly agitated but SpO2 drops to 82% each time the mask is removed.",
  options:[
   {text:"Contact Medical Control for authorization to administer midazolam 1-2mg IV for CPAP compliance, continue current therapy",correct:true,explanation:"Per Protocol 02.08A: If necessary for CPAP mask compliance, contact Medical Control for authorization to administer midazolam 1-2mg IV. This allows continued non-invasive ventilation.",protocol_ref:"02.08A"},
   {text:"Discontinue CPAP since the patient is clearly not tolerating it and switch to NRB at 15L with continued nebulizers",correct:false,explanation:"SpO2 drops to 82% without CPAP. The patient is tolerating CPAP physiologically — the agitation is the issue. Sedation for compliance is the protocol approach.",protocol_ref:"02.08A"},
   {text:"Proceed directly to RSI and endotracheal intubation since the patient cannot tolerate non-invasive ventilation",correct:false,explanation:"RSI carries significant risks, especially in COPD patients. CPAP with sedation for compliance should be attempted before escalating to intubation.",protocol_ref:"05.04"},
   {text:"Administer morphine 4mg IV for anxiety reduction and to decrease preload, which will help both the COPD and CHF",correct:false,explanation:"Morphine is not indicated in RI protocol for this purpose. Midazolam is the specified agent for CPAP compliance. Morphine carries respiratory depression risk.",protocol_ref:"02.08A"}
  ]},
 {phase:"treatment",prompt:"After midazolam and continued CPAP, the patient's condition is improving. The ALS provider notes this patient has both COPD and CHF. Should methylprednisolone be administered?",multi_select:false,level_filter:"CP",
  clinical_pearl:"Corticosteroids benefit COPD exacerbations by reducing airway inflammation. They don't worsen CHF acutely. The key is treating both conditions — steroids for bronchospasm, CPAP and NTG for fluid overload. Don't withhold beneficial treatment for one condition because of the other.",
  options:[
   {text:"Yes — administer methylprednisolone 125mg IV for the COPD component; it will not acutely worsen the CHF",correct:true,explanation:"Per Protocol 02.08A: Methylprednisolone 125mg IV is indicated for COPD exacerbation. While chronic steroid use can worsen fluid retention, a single acute dose will not significantly impact CHF.",protocol_ref:"02.08A"},
   {text:"No — steroids cause fluid retention and will worsen the heart failure component, potentially causing flash pulmonary edema",correct:false,explanation:"A single dose of IV steroids will not cause acute fluid retention significant enough to worsen CHF. The bronchodilatory benefit outweighs this theoretical risk.",protocol_ref:"02.08A"},
   {text:"Only administer if Medical Control specifically authorizes it due to the complexity of treating both conditions simultaneously",correct:false,explanation:"Methylprednisolone 125mg IV is within standing orders for COPD exacerbation at the Cardiac/Paramedic level. Medical Control is not required for this administration.",protocol_ref:"02.08A"},
   {text:"Substitute with dexamethasone instead since it has less mineralocorticoid activity and won't worsen fluid retention",correct:false,explanation:"While dexamethasone is an option per protocol, the rationale of avoiding methylprednisolone due to fluid retention concerns is not evidence-based for a single acute dose.",protocol_ref:"02.08A"}
  ]},
 {phase:"transport",prompt:"Where is the most appropriate transport destination for this patient?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Nearest appropriate Hospital Emergency Facility with early notification of a critically ill patient requiring respiratory support",correct:true,explanation:"Per Protocol 02.08A and 03.01: Transport to nearest appropriate Hospital Emergency Facility. This patient doesn't meet criteria for a specialized facility but needs early notification due to critical status.",protocol_ref:"01.01"},
   {text:"Comprehensive Stroke Center since the patient's agitation could indicate a neurological event",correct:false,explanation:"There is no evidence of stroke. Agitation is from respiratory distress and hypoxia. Stroke center is not indicated.",protocol_ref:"02.12"},
   {text:"Patient's preferred hospital 25 minutes away where his pulmonologist practices",correct:false,explanation:"In acute respiratory failure, the nearest appropriate facility takes priority over physician preference.",protocol_ref:"01.01"},
   {text:"PCI-capable facility since the patient has CHF and could be having an acute cardiac event",correct:false,explanation:"While CHF is present, there's no ECG evidence of STEMI. PCI facility is not specifically indicated without ACS findings.",protocol_ref:"03.02"}
  ]}
]},

{id:"med-neuro-stroke-01",title:"Young Female Stroke on OCPs",category:"Medical",difficulty:"Hard",
dispatch:"Respond to a gym for a 28-year-old female with sudden headache and left arm weakness.",
patient:{age:28,sex:"F",cc:"Sudden severe headache, left arm weakness"},
scene:"Gym floor. Patient lying supine on mat, personal trainer holding her head. She was on the treadmill when she suddenly grabbed her head and collapsed. Left arm is flaccid.",
vitals:{hr:96,bp:"192/108",rr:18,spo2:97,gcs:13,temp:"98.6°F",bg:"94 mg/dL"},
history:{pmh:"Migraines with aura, smoker 1/2 ppd",meds:"Oral contraceptives (combination), sumatriptan PRN",allergies:"NKDA"},
presentation:"Left facial droop, left arm drift with no grip strength, left leg weakness, slurred speech, complains of 'worst headache of my life.' Alert but confused.",
primary_protocol:"02.12",related_protocols:["02.01","01.01"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"Calculate this patient's LAMS score based on the neurological findings.",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Stroke in young adults is rare but not uncommon. Risk factors include OCPs (especially combined with smoking or migraines with aura), coagulopathies, and illicit drug use. 'Worst headache of my life' with neuro deficits suggests hemorrhagic stroke or SAH. LAMS score guides transport destination.",
  options:[
   {text:"LAMS 5 — facial droop present (1), arm drifts down (1), no grip strength (2), plus the clinical picture demands Comprehensive Stroke Center transport",correct:true,explanation:"Per Protocol 02.12: Facial droop present=1, arm drifts down=1, no grip=2. LAMS score of 4+ suggests ELVO and patient should go to Comprehensive Stroke Center. This patient scores at least 4.",protocol_ref:"02.12"},
   {text:"LAMS 2 — only count facial droop and arm drift; grip strength testing is unreliable during acute events",correct:false,explanation:"Grip strength is a required component of LAMS scoring. No grip = 2 points. All components should be assessed and scored.",protocol_ref:"02.12"},
   {text:"LAMS cannot be calculated because the patient is too young for a stroke — consider other diagnoses first",correct:false,critical:true,explanation:"Stroke occurs at any age. This patient has multiple risk factors (OCPs + smoking + migraines with aura). Delaying stroke assessment due to age bias can cost critical treatment time.",protocol_ref:"02.12"},
   {text:"LAMS 3 — facial droop (1), arm drift (1), weak grip (1); the left leg weakness is not part of the LAMS assessment",correct:false,explanation:"While leg weakness is not part of LAMS, the grip strength score is 2 (no grip), not 1 (weak grip). The patient has no grip strength in the left hand.",protocol_ref:"02.12"}
  ]},
 {phase:"treatment",prompt:"The patient is becoming increasingly drowsy. GCS drops from 13 to 9. Pupils are now unequal — right pupil is 6mm and sluggish. What does this suggest and what is your priority?",multi_select:false,level_filter:"EACP",
  vitals_update:{hr:62,bp:"210/118",rr:10,spo2:93,gcs:9},
  narrative:"The patient stops responding to questions. Her right pupil is now notably larger than her left. Her respiratory rate is slowing.",
  clinical_pearl:"Cushing's triad (hypertension, bradycardia, irregular respirations) with unilateral pupil dilation indicates increased ICP with uncal herniation. This is a neurosurgical emergency. The 'worst headache of my life' with rapid deterioration strongly suggests hemorrhagic stroke or ruptured aneurysm.",
  options:[
   {text:"Increased intracranial pressure with herniation — elevate HOB >30°, maintain airway, ventilate to EtCO2 30-35mmHg, emergent transport to Comprehensive Stroke Center",correct:true,explanation:"Per Protocol 02.01: GCS <8, unilateral pupil dilation, bradycardia, and hypertension indicate increased ICP. Elevate HOB >30°, ventilate to EtCO2 30-35mmHg, avoid obstructions to venous drainage.",protocol_ref:"02.01"},
   {text:"Postictal state from a seizure — place in recovery position, dim lights, and monitor for additional seizure activity",correct:false,explanation:"While seizures can occur with hemorrhagic stroke, the unilateral pupil dilation with Cushing's triad indicates herniation, not a postictal state. This requires aggressive ICP management.",protocol_ref:"02.01"},
   {text:"Administer sumatriptan from her bag since this is likely a severe migraine with aura causing the neurological symptoms",correct:false,critical:true,explanation:"Sumatriptan is a vasoconstrictor CONTRAINDICATED in stroke. Administering it could worsen a hemorrhagic stroke catastrophically. These are not migraine symptoms.",protocol_ref:"02.12"},
   {text:"Hyperventilate aggressively at 24 breaths per minute to rapidly decrease the intracranial pressure",correct:false,explanation:"Per Protocol 02.01: Ventilate to EtCO2 30-35mmHg (14-16 bpm without capnography). Over-aggressive hyperventilation worsens brain ischemia. Mild hyperventilation only.",protocol_ref:"02.01"}
  ]},
 {phase:"treatment",prompt:"The patient's GCS is now 7. Select ALL appropriate ALS interventions.",multi_select:true,level_filter:"CP",
  options:[
   {text:"Provide airway management per Airway Management Protocol — GCS <8 indicates loss of airway protective reflexes",correct:true,explanation:"Per Protocol 05.01A: GCS <8 indicates loss of airway protective reflexes requiring advanced airway management.",protocol_ref:"05.01A"},
   {text:"Administer 3% hypertonic saline 3ml/kg IV over 15 minutes for suspected increased ICP",correct:true,explanation:"Per Protocol 02.01: 3% Saline (HTS) 3ml/kg IV over 15 minutes is indicated for increased ICP at the Cardiac/Paramedic level.",protocol_ref:"02.01"},
   {text:"Manage hypotension if it develops — maintain MAP ≥80 or SBP ≥110",correct:true,explanation:"Per Protocol 02.01: Maintain MAP ≥80 or SBP ≥110. Short isolated episodes of hypotension can cause secondary brain injury.",protocol_ref:"02.01"},
   {text:"Administer labetalol to aggressively lower the blood pressure from 210/118 to normal range",correct:false,explanation:"Aggressive BP lowering in acute stroke with increased ICP can worsen cerebral perfusion. The hypertension is a compensatory response (Cushing's reflex). RI protocol does not include antihypertensives for this scenario.",protocol_ref:"02.01"}
  ]},
 {phase:"transport",prompt:"What is the appropriate transport destination for this patient?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Comprehensive Stroke Center (Rhode Island Hospital) — LAMS ≥4 with evidence of hemorrhagic stroke requiring neurosurgical capability",correct:true,explanation:"Per Protocol 02.12: LAMS ≥4 patients go to Comprehensive Stroke Center. This patient likely has hemorrhagic stroke requiring neurosurgical intervention available only at CSC.",protocol_ref:"02.12"},
   {text:"Nearest Primary Stroke Center since LAMS score is technically only 4, which is borderline",correct:false,explanation:"LAMS ≥4 is the threshold for Comprehensive Stroke Center transport. This patient's LAMS is ≥4 AND she has evidence of hemorrhagic stroke/herniation requiring CSC.",protocol_ref:"02.12"},
   {text:"Nearest Hospital Emergency Facility since the patient is deteriorating and needs immediate stabilization",correct:false,explanation:"Unless the Comprehensive Stroke Center is unreachable (>45 min) or there's unmanageable airway compromise, CSC is the destination.",protocol_ref:"02.12"},
   {text:"Hasbro Children's Hospital since the patient is only 28 years old",correct:false,explanation:"Hasbro is for patients <18 years old. A 28-year-old is an adult patient regardless of how young they seem.",protocol_ref:"04.01A"}
  ]}
]},

{id:"med-diabetic-01",title:"Diabetic Emergency with Altered Mental Status",category:"Medical",difficulty:"Medium",
dispatch:"Respond to a residence for a 56-year-old male found confused by his wife.",
patient:{age:56,sex:"M",cc:"Confusion, diaphoresis"},
scene:"Bedroom. Patient sitting on bed edge, diaphoretic, mumbling incoherently. Wife states he skipped dinner but took his insulin at the usual time. Empty beer cans on nightstand.",
vitals:{hr:108,bp:"138/82",rr:20,spo2:97,gcs:12,temp:"97.8°F",bg:"38 mg/dL"},
history:{pmh:"Type 1 diabetes x30 years, peripheral neuropathy, gastroparesis",meds:"Insulin glargine, insulin lispro, gabapentin",allergies:"Sulfa drugs"},
presentation:"Diaphoretic, confused, slurred speech, tremulous. Skin pale, cool, clammy. No focal neurologic deficits. Pupils equal and reactive.",
primary_protocol:"02.10A",related_protocols:["02.05A","04.18A","01.01"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"The patient is confused with a blood glucose of 38 mg/dL and has been drinking alcohol. What is your primary impression?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Alcohol inhibits hepatic gluconeogenesis, making hypoglycemia more severe and prolonged. Patients who have been drinking may not respond to glucagon (which works by stimulating hepatic glycogen breakdown) because alcohol depletes glycogen stores. IV dextrose is strongly preferred in this setting.",
  options:[
   {text:"Severe hypoglycemia — BG 38 with insulin use, missed meal, and alcohol consumption all contributing to dangerously low glucose",correct:true,explanation:"Blood glucose of 38 is critically low. The combination of insulin administration without food intake and alcohol (which inhibits gluconeogenesis) creates a dangerous hypoglycemic state.",protocol_ref:"02.10A"},
   {text:"Acute alcohol intoxication — the empty beer cans explain the confusion and the glucose will self-correct",correct:false,critical:true,explanation:"A BG of 38 is a life-threatening emergency regardless of alcohol use. Alcohol actually WORSENS hypoglycemia by inhibiting gluconeogenesis. Attributing symptoms to intoxication is dangerous.",protocol_ref:"02.10A"},
   {text:"Acute stroke — confusion and slurred speech require immediate stroke assessment before treating the glucose",correct:false,explanation:"While stroke must be considered, a BG of 38 is the most likely cause of these symptoms. Treat hypoglycemia first — it can perfectly mimic stroke and must be corrected before other diagnoses are pursued.",protocol_ref:"02.12"},
   {text:"Diabetic ketoacidosis — as a Type 1 diabetic, any altered mental status is most likely DKA",correct:false,explanation:"DKA presents with hyperglycemia, not a BG of 38. The glucose level clearly indicates hypoglycemia, not DKA.",protocol_ref:"02.10A"}
  ]},
 {phase:"treatment",prompt:"The patient is not alert to verbal stimuli and is nauseated. What is the appropriate treatment?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"EMT: Contact Medical Control for glucagon 1mg IM or glucagon 3mg IN. ALS: Thiamine 100mg IV/IM followed by D10W 250ml (25g) IV over 5 minutes",correct:true,explanation:"Per Protocol 02.10A: For patients not alert/nauseated with BG ≤60, EMTs should contact MC for glucagon. ALS should give thiamine 100mg IV/IM first, then D10W 250ml IV over 5 min. Thiamine before dextrose prevents Wernicke's encephalopathy, especially important with alcohol use.",protocol_ref:"02.10A"},
   {text:"Administer oral glucose solution 15g by mouth and recheck blood glucose in 15 minutes",correct:false,critical:true,explanation:"The patient is NOT alert and is nauseated. Oral glucose in a patient with altered mental status and nausea creates aspiration risk. This is for alert, non-nauseated patients only.",protocol_ref:"02.10A"},
   {text:"D50W 25g IV push as fast as possible to rapidly correct the severe hypoglycemia",correct:false,explanation:"RI protocol specifies D10W 250ml, not D50W. D10W is preferred because it is less caustic to veins and allows more controlled glucose correction.",protocol_ref:"02.10A"},
   {text:"Administer glucagon 1mg IM and transport — IV dextrose is not necessary if glucagon is given",correct:false,explanation:"In patients who have been drinking alcohol, glucagon may be ineffective because alcohol depletes hepatic glycogen stores. IV dextrose (D10W) is strongly preferred when IV access is available.",protocol_ref:"02.10A"}
  ]},
 {phase:"treatment",prompt:"After D10W administration, the patient's BG rises to 84 mg/dL but 10 minutes later drops back to 52. What is the most likely explanation and appropriate action?",multi_select:false,level_filter:"ACP",
  vitals_update:{hr:96,bp:"132/78",rr:18,spo2:98,bg:"52 mg/dL"},
  narrative:"The patient briefly improves, becoming more alert, but then becomes confused again. Repeat glucose check shows 52 mg/dL.",
  clinical_pearl:"Recurrent hypoglycemia after treatment is common with long-acting insulin (glargine) and alcohol use. Alcohol inhibits hepatic gluconeogenesis for hours. These patients need repeat dextrose and close monitoring. Always recheck BG after treatment.",
  options:[
   {text:"Recurrent hypoglycemia from long-acting insulin (glargine) and impaired gluconeogenesis from alcohol — repeat D10W 250ml IV and continue monitoring",correct:true,explanation:"Per Protocol 02.10A: Repeat D10W if BG remains <60. Long-acting insulin continues to work for hours, and alcohol-impaired gluconeogenesis prevents endogenous glucose production.",protocol_ref:"02.10A"},
   {text:"The initial D10W simply wasn't enough — administer a 1 liter normal saline bolus to dilute the insulin in the bloodstream",correct:false,explanation:"Normal saline does not treat hypoglycemia and does not 'dilute insulin.' The patient needs more dextrose.",protocol_ref:"02.10A"},
   {text:"Switch to glucagon since the D10W clearly isn't working and the intramuscular route may be more effective",correct:false,explanation:"Glucagon relies on hepatic glycogen stores which are depleted by alcohol. It will likely be less effective than IV dextrose in this patient.",protocol_ref:"02.10A"},
   {text:"Stop treating — a glucose of 52 is adequate and further dextrose risks causing hyperglycemia which is more dangerous",correct:false,explanation:"A glucose of 52 is still below 60 and the patient is symptomatic. Per protocol, treatment should continue until BG >60. The risk of persistent hypoglycemia far exceeds the risk of transient hyperglycemia.",protocol_ref:"02.10A"}
  ]},
 {phase:"transport",prompt:"The patient's glucose is now stable at 112 mg/dL and he is alert. He wants to refuse transport. What factors must you consider?",multi_select:true,level_filter:"EACP",
  options:[
   {text:"Long-acting insulin (glargine) will continue to lower glucose for hours, creating high risk of recurrent hypoglycemia",correct:true,explanation:"Insulin glargine has a duration of up to 24 hours. The patient remains at high risk for recurrent hypoglycemia even after treatment.",protocol_ref:"02.10A"},
   {text:"Alcohol impairs the patient's ability to recognize hypoglycemic symptoms and make informed decisions about refusing care",correct:true,explanation:"Alcohol blunts hypoglycemia awareness and may impair decision-making capacity. This must be considered when evaluating refusal competency.",protocol_ref:"06.04"},
   {text:"The patient can safely refuse since his glucose is now normal and he is alert and oriented",correct:false,explanation:"Multiple risk factors for recurrent hypoglycemia exist: long-acting insulin, alcohol, missed meal. Transport should be strongly encouraged despite current improvement.",protocol_ref:"06.04"},
   {text:"You must transport this patient against his will since he had a life-threatening glucose level",correct:false,explanation:"Competent patients have the right to refuse transport. However, you should strongly encourage transport and ensure the patient understands the risks of recurrent hypoglycemia.",protocol_ref:"06.04"}
  ]}
]},

{id:"med-sepsis-01",title:"Sepsis Mimicking Intoxication in Elderly",category:"Medical",difficulty:"Hard",
dispatch:"Respond to a bus stop for an elderly male found confused, possible intoxication.",
patient:{age:78,sex:"M",cc:"Found confused at bus stop"},
scene:"Bus stop bench. Patient slumped over, mumbling. Bystanders report he's been sitting there for 2 hours and 'seems drunk.' No alcohol containers visible. Patient is wearing a medical alert bracelet (diabetes). Urine stain on pants.",
vitals:{hr:114,bp:"86/52",rr:24,spo2:91,gcs:11,temp:"102.8°F",bg:"224 mg/dL"},
history:{pmh:"Diabetes, BPH, recurrent UTIs, mild dementia",meds:"Metformin, tamsulosin, donepezil",allergies:"Cephalosporins"},
presentation:"Confused, mumbling incoherently. Skin warm, flushed, dry. Tachycardic. Foul-smelling urine noted. No alcohol odor on breath. Suprapubic tenderness on palpation.",
primary_protocol:"02.22A",related_protocols:["02.05A","02.20A","01.01"],level_min:"E",
questions:[
 {phase:"scene",prompt:"Bystanders tell you this man is 'just drunk' and doesn't need an ambulance. What is your initial approach?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Sepsis in the elderly frequently mimics intoxication — confusion, altered gait, mumbling speech. Always perform a thorough assessment regardless of bystander assumptions. Elderly patients with UTIs can rapidly progress to septic shock. The medical alert bracelet is a critical clue.",
  options:[
   {text:"Perform a complete assessment including vitals, glucose, and temperature — confusion in an elderly patient has many life-threatening causes that mimic intoxication",correct:true,explanation:"Altered mental status in the elderly requires thorough assessment. Vital signs reveal tachycardia, hypotension, fever, and hypoxia — this is NOT intoxication. Per Protocol 02.05A: Assess and exit to appropriate protocol.",protocol_ref:"02.05A"},
   {text:"Check for alcohol odor and if none is detected, transport to the emergency department for a blood alcohol level",correct:false,explanation:"While checking for alcohol odor is reasonable, this approach misses the urgency. Vital signs and glucose should be obtained immediately, not deferred until ED evaluation.",protocol_ref:"02.05A"},
   {text:"If no obvious emergency is found, assist the patient to a shelter or contact social services for a welfare check",correct:false,critical:true,explanation:"This patient has life-threatening sepsis. Assuming he's homeless and intoxicated without assessment could result in death. Every confused patient deserves a complete assessment.",protocol_ref:"01.01"},
   {text:"Contact police to evaluate the patient for public intoxication and defer medical assessment to the ER if police request transport",correct:false,explanation:"EMS is on scene for a medical evaluation. Deferring assessment to police misses critical vital signs indicating sepsis and could delay life-saving treatment.",protocol_ref:"01.01"}
  ]},
 {phase:"assessment",prompt:"Vitals show HR 114, BP 86/52, RR 24, Temp 102.8°F, SpO2 91%. How many SIRS criteria does this patient meet and what is your clinical impression?",multi_select:false,level_filter:"ACP",
  options:[
   {text:"3 SIRS criteria met (HR >90, RR >20, Temp >100.4°F) PLUS hypotension — this is severe sepsis/septic shock likely from a urinary source",correct:true,explanation:"Per Protocol 02.22A: Sepsis = suspected infection + ≥2 SIRS criteria. This patient meets 3 (tachycardia, tachypnea, fever) and has hypotension indicating severe sepsis. UTI history, suprapubic tenderness, and foul urine suggest urinary source.",protocol_ref:"02.22A"},
   {text:"2 SIRS criteria met (HR >90, Temp >100.4°F) — sepsis without shock since the respiratory rate of 24 is only slightly elevated",correct:false,explanation:"RR >20 IS a SIRS criterion. Additionally, hypotension (SBP <90) makes this severe sepsis/septic shock, not simple sepsis.",protocol_ref:"02.22A"},
   {text:"This does not meet sepsis criteria — the confusion is from dementia baseline, and the vital sign abnormalities are from dehydration",correct:false,explanation:"While baseline dementia exists, acute worsening of confusion plus fever, tachycardia, tachypnea, and hypotension with a likely infection source clearly meets sepsis criteria.",protocol_ref:"02.22A"},
   {text:"4 SIRS criteria met — you should also count the blood glucose of 224 as a metabolic SIRS criterion",correct:false,explanation:"Hyperglycemia is not a SIRS criterion. SIRS criteria are: temp >100.4 or <96.8, HR >90, RR >20 or EtCO2 <32, and WBC (not measurable prehospitally). This patient meets 3.",protocol_ref:"02.22A"}
  ]},
 {phase:"treatment",prompt:"Select ALL appropriate interventions for this patient.",multi_select:true,level_filter:"ACP",
  clinical_pearl:"Early aggressive fluid resuscitation is the cornerstone of sepsis management. RI protocol allows up to 3L of LR for sepsis (more than the standard 2L for undifferentiated shock). Declare a SEPSIS ALERT for early hospital notification.",
  options:[
   {text:"Lactated Ringer's 500ml IV bolus, repeat to achieve SBP ≥100 or MAP ≥65 (maximum 3L)",correct:true,explanation:"Per Protocol 02.22A: LR 500ml IV, repeat to achieve SBP ≥100 or MAP ≥65, maximum 3L for sepsis.",protocol_ref:"02.22A"},
   {text:"Declare SEPSIS ALERT and provide early notification to the destination facility",correct:true,explanation:"Per Protocol 02.22A: Provide early notification to destination facility and declare a SEPSIS ALERT.",protocol_ref:"02.22A"},
   {text:"Maintain supine position and promote normothermia with blankets",correct:true,explanation:"Per Protocol 02.22A: If tolerated, maintain supine position. Maintaining normothermia is part of routine patient care.",protocol_ref:"02.22A"},
   {text:"Administer acetaminophen to reduce the fever before transport — fever reduction is the priority in sepsis",correct:false,explanation:"Fever reduction is NOT the priority in sepsis. Fluid resuscitation and rapid transport are priorities. Fever in sepsis is a compensatory immune response.",protocol_ref:"02.22A"}
  ]},
 {phase:"treatment",prompt:"After 2L of LR, the patient's BP is 82/48 with a MAP of 59. The patient is now less responsive. What is the next step?",multi_select:false,level_filter:"P",
  vitals_update:{hr:128,bp:"82/48",rr:28,spo2:89,gcs:9},
  narrative:"Despite aggressive fluid resuscitation, the patient's blood pressure continues to drop. He is now only responding to painful stimuli.",
  options:[
   {text:"Push-dose epinephrine 10-20mcg IV (1-2ml of 10mcg/ml concentration) for fluid-refractory septic shock, continue LR to maximum 3L",correct:true,explanation:"Per Protocol 02.22A: For hypotension refractory to IVF, push-dose epinephrine 10-20mcg IV. This is septic shock — defined as sepsis requiring vasopressors despite adequate fluid resuscitation.",protocol_ref:"02.22A"},
   {text:"Continue LR boluses beyond the 3L maximum — sepsis requires as much fluid as needed to achieve target BP",correct:false,explanation:"Protocol limits fluid to maximum 3L for sepsis. Exceeding this without vasopressor support risks fluid overload and pulmonary edema.",protocol_ref:"02.22A"},
   {text:"Administer epinephrine 1mg IV (cardiac arrest dose) for the refractory hypotension",correct:false,critical:true,explanation:"Cardiac arrest dose epinephrine (1mg) in a patient with a pulse would cause severe hypertension, tachycardia, and potentially VF. Push-dose epi is 10-20 MCG, not 1 MG.",protocol_ref:"02.22A"},
   {text:"Dopamine 15mcg/kg/min as the first-line vasopressor for septic shock in the prehospital setting",correct:false,explanation:"Push-dose epinephrine is specified in RI protocol 02.22A for fluid-refractory septic shock. Dopamine is not the first-line vasopressor in this protocol.",protocol_ref:"02.22A"}
  ]}
]},

{id:"med-cardiac-arrest-01",title:"Witnessed Cardiac Arrest with ROSC",category:"Medical",difficulty:"Hard",
dispatch:"Respond to a health club for a 54-year-old male in cardiac arrest. Bystander CPR in progress.",
patient:{age:54,sex:"M",cc:"Cardiac arrest"},
scene:"Gym weight room. Patient supine on floor, bystander performing CPR. AED applied with 1 shock delivered. Multiple witnesses state patient collapsed while lifting weights.",
vitals:{hr:0,bp:"0/0",rr:0,spo2:0,gcs:3},
history:{pmh:"Unknown — patient is unresponsive, no family present",meds:"Unknown",allergies:"Unknown"},
presentation:"Unresponsive male, no pulse, no respirations. AED reports shock delivered. Bystander CPR ongoing with good quality compressions.",
primary_protocol:"03.03A",related_protocols:["03.04A","03.02","05.01A"],level_min:"E",
questions:[
 {phase:"scene",prompt:"You arrive to find bystander CPR in progress with AED applied and 1 shock delivered. What is your FIRST action?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"When quality bystander CPR is in progress, do not interrupt it unnecessarily. Apply your monitor, verify rhythm, and ensure high-quality compressions continue. Switch providers every 2 minutes to prevent fatigue-related quality decline.",
  options:[
   {text:"Continue CPR without interruption, apply monitor/defibrillator, assess rhythm at next 2-minute cycle, prepare ALS interventions",correct:true,explanation:"Per Protocol 03.03A: When adequate bystander CPR is ongoing, proceed with BLS/ALS assistance. Continuous compressions and electrical therapy take priority. Switch compressor and assess rhythm at 2-minute intervals.",protocol_ref:"03.03A"},
   {text:"Stop CPR immediately to apply a 12-lead ECG and determine the underlying rhythm before resuming compressions",correct:false,explanation:"Stopping CPR for a 12-lead is inappropriate during active resuscitation. A defibrillator rhythm check at the 2-minute cycle is sufficient. Compressions should not be interrupted.",protocol_ref:"03.03A"},
   {text:"Remove the AED and replace with your manual defibrillator before any further shocks are delivered",correct:false,explanation:"The AED has already delivered an appropriate shock. You can transition to a manual defibrillator at the next rhythm check without delaying CPR.",protocol_ref:"03.03A"},
   {text:"Begin ventilations with BVM immediately since the bystander was only doing compressions and the patient needs oxygen",correct:false,explanation:"Compression-only CPR by bystanders is effective. Continuous compressions take priority. Ventilations can be integrated when additional providers are available, but should not interrupt compressions.",protocol_ref:"03.03A"}
  ]},
 {phase:"treatment",prompt:"Monitor shows VF. Your partner delivers a shock at manufacturer's recommended dose. CPR resumes. What medications are indicated during the NEXT 2-minute cycle?",multi_select:false,level_filter:"ACP",
  clinical_pearl:"In VF/pVT cardiac arrest: shock → CPR 2 min → rhythm check → shock if still VF → CPR + epinephrine → rhythm check → shock → CPR + amiodarone. Epinephrine is given after the 2nd shock, amiodarone after the 3rd.",
  options:[
   {text:"Epinephrine 1mg IV/IO every 3-5 minutes — first dose of vasopressor should follow the second defibrillation attempt",correct:true,explanation:"Per Protocol 03.03A and AHA guidelines: Epinephrine 1mg IV/IO is administered after the 2nd defibrillation for VF/pVT. This is the AED shock + your first shock = 2nd defibrillation. Repeat epi every 3-5 minutes.",protocol_ref:"03.03A"},
   {text:"Amiodarone 300mg IV/IO push — antiarrhythmic should be the first medication in refractory VF",correct:false,explanation:"Amiodarone 300mg is given after the 3rd shock for refractory VF/pVT, not after the 2nd. Epinephrine is the first drug in the algorithm.",protocol_ref:"03.03A"},
   {text:"Atropine 1mg IV for the cardiac arrest — atropine addresses the underlying parasympathetic cause of VF",correct:false,explanation:"Atropine has no role in VF/pVT cardiac arrest. It is used for symptomatic bradycardia. VF is not caused by parasympathetic excess.",protocol_ref:"03.03A"},
   {text:"No medications yet — focus on 3 cycles of high-quality CPR and defibrillation before introducing pharmacologic therapy",correct:false,explanation:"Delaying epinephrine reduces survival. After the 2nd defibrillation attempt, epinephrine should be administered promptly during ongoing CPR.",protocol_ref:"03.03A"}
  ]},
 {phase:"treatment",prompt:"After 12 minutes of resuscitation (4 shocks, 2 doses epi, amiodarone 300mg), the patient has ROSC. HR 92, BP 84/56. What are your post-ROSC priorities? Select ALL that apply.",multi_select:true,level_filter:"ACP",
  narrative:"After the 4th shock, rhythm check reveals sinus tachycardia. You palpate a strong carotid pulse. The patient remains unresponsive.",
  vitals_update:{hr:92,bp:"84/56",rr:0,spo2:88,gcs:3},
  options:[
   {text:"Obtain 12-lead ECG and transmit to Medical Control — assess for STEMI which may have caused the arrest",correct:true,explanation:"Per Protocol 03.04A: Acquire multi-lead ECG and transmit for interpretation. STEMI patients with ROSC should go to PCI-capable facility.",protocol_ref:"03.04A"},
   {text:"Manage airway per Airway Management Protocol, ventilate to maintain EtCO2 35-45mmHg, titrate O2 to SpO2 94-99%",correct:true,explanation:"Per Protocol 03.04A: Provide airway management, do not hyperventilate, decrease and titrate oxygen to SpO2 94-99%, ventilate to EtCO2 35-45mmHg.",protocol_ref:"03.04A"},
   {text:"Manage hypotension per General Shock and Hypotension Protocol — BP 84/56 requires fluid resuscitation",correct:true,explanation:"Per Protocol 03.04A: Manage hypotension/shock per General Shock and Hypotension Protocol. SBP <90 requires intervention.",protocol_ref:"02.20A"},
   {text:"Administer 100% oxygen at highest flow rate possible to replenish oxygen stores depleted during cardiac arrest",correct:false,explanation:"Per Protocol 03.04A: Decrease and titrate oxygen to SpO2 94-99%. Hyperoxia post-ROSC causes free radical damage and worsens neurologic outcomes.",protocol_ref:"03.04A"}
  ]},
 {phase:"transport",prompt:"The 12-lead shows ST elevation in V1-V4. Where should this patient be transported?",multi_select:false,level_filter:"ACP",
  clinical_pearl:"Post-cardiac arrest patients with STEMI, hemodynamic instability, electrical instability, or requiring vasopressors should be transported to a PCI-capable facility. The cause of the arrest was likely an anterior STEMI.",
  options:[
   {text:"PCI-capable facility with CODE STEMI activation — anterior STEMI was the likely cause of the VF arrest",correct:true,explanation:"Per Protocol 03.04A: Patients with hemodynamic instability, electrical instability, or STEMI should be transported to a PCI-capable facility. ST elevation V1-V4 = anterior STEMI requiring emergent PCI.",protocol_ref:"03.04A"},
   {text:"Nearest Hospital Emergency Facility — post-arrest patients are too unstable for longer transport times",correct:false,explanation:"PCI-capable facility is specifically indicated for post-arrest STEMI patients per protocol. Direct transport to PCI saves critical time.",protocol_ref:"03.04A"},
   {text:"Comprehensive Stroke Center in case the arrest was caused by a massive stroke requiring neurosurgical intervention",correct:false,explanation:"The ECG shows clear STEMI — this is a cardiac etiology. Stroke centers are not indicated when STEMI is identified on ECG.",protocol_ref:"03.04A"},
   {text:"Hospital with a therapeutic hypothermia/TTM program regardless of PCI capability — neuroprotection is the priority",correct:false,explanation:"While TTM is important post-arrest, STEMI requires emergent PCI which takes priority. Most PCI-capable facilities also offer TTM.",protocol_ref:"03.04A"}
  ]}
]},

{id:"med-tox-01",title:"Tricyclic Antidepressant Overdose",category:"Medical",difficulty:"Hard",
dispatch:"Respond to an apartment for a 32-year-old female found unresponsive by roommate.",
patient:{age:32,sex:"F",cc:"Found unresponsive"},
scene:"Apartment bedroom. Patient supine on bed, unresponsive. Empty pill bottle of amitriptyline on nightstand. Suicide note on desk. Roommate states she was fine 2 hours ago.",
vitals:{hr:128,bp:"92/58",rr:12,spo2:94,gcs:7,temp:"100.4°F",bg:"156 mg/dL"},
history:{pmh:"Major depression, chronic pain, insomnia",meds:"Amitriptyline 150mg QHS, trazodone 50mg PRN",allergies:"NKDA"},
presentation:"Unresponsive to verbal stimuli, responds to painful stimuli with extension posturing. Pupils dilated bilaterally and sluggish. Skin warm, flushed, dry. Tachycardic with widened QRS on monitor.",
primary_protocol:"04.18A",related_protocols:["02.05A","03.07A","05.01A","02.09"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"Based on the clinical presentation, what toxidrome is this patient displaying?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"TCA toxicity presents with the 'Three Cs': Convulsions, Cardiac dysrhythmias (wide QRS, prolonged QTc, tall R in aVR), and Coma. The anticholinergic effects cause 'hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter' — tachycardia, mydriasis, dry skin, flushing, AMS.",
  options:[
   {text:"Anticholinergic toxidrome from TCA overdose — tachycardia, dilated pupils, warm/flushed/dry skin, altered mental status, wide QRS",correct:true,explanation:"Per Protocol 04.18A: Anticholinergics cause tachycardia, hyperthermia, dilated pupils, mental status changes. The wide QRS is specific to TCA/sodium channel blocker toxicity.",protocol_ref:"04.18A"},
   {text:"Opioid toxidrome — unresponsive with decreased respiratory rate indicates opioid overdose requiring naloxone",correct:false,explanation:"Opioid toxidrome presents with miosis (pinpoint pupils), not mydriasis (dilated pupils). The warm/dry/flushed skin and tachycardia are anticholinergic, not opioid.",protocol_ref:"04.18A"},
   {text:"Sympathomimetic toxidrome — tachycardia and dilated pupils suggest cocaine or methamphetamine use",correct:false,explanation:"While sympathomimetics cause tachycardia and dilated pupils, they also cause diaphoresis (wet skin). This patient has dry skin — classic anticholinergic. The wide QRS and pill bottle confirm TCA.",protocol_ref:"04.18A"},
   {text:"Cholinergic toxidrome — the flushing and altered mental status are consistent with organophosphate exposure",correct:false,explanation:"Cholinergic toxidrome presents with SLUDGEM (salivation, lacrimation, urination, defecation, GI distress, emesis, miosis). This patient has the OPPOSITE findings — dry, dilated pupils, tachycardia.",protocol_ref:"04.19"}
  ]},
 {phase:"treatment",prompt:"The cardiac monitor shows a wide QRS complex (160ms) tachycardia at rate of 128. What is the priority pharmacologic intervention?",multi_select:false,level_filter:"CP",
  clinical_pearl:"Sodium bicarbonate is the antidote for TCA-induced cardiotoxicity (wide QRS). It works by overcoming sodium channel blockade and alkalinizing the blood to reduce free drug. QRS >100ms in TCA overdose predicts seizures; QRS >160ms predicts ventricular dysrhythmias.",
  options:[
   {text:"Sodium bicarbonate 1-2 mEq/kg IV bolus for TCA-induced sodium channel blockade causing QRS widening — contact Medical Control",correct:true,explanation:"Per Protocol 04.18A: For TCA overdose with QRS widening, sodium bicarbonate is the treatment. It overcomes sodium channel blockade and narrows the QRS. Contact Medical Control for authorization.",protocol_ref:"04.18A"},
   {text:"Amiodarone 150mg IV over 10 minutes for the wide complex tachycardia per cardiac dysrhythmia protocol",correct:false,critical:true,explanation:"Amiodarone and other antiarrhythmics that block sodium channels (procainamide, lidocaine) can WORSEN TCA cardiotoxicity by adding to the sodium channel blockade. Sodium bicarbonate is the treatment.",protocol_ref:"04.18A"},
   {text:"Synchronized cardioversion at 100J since this is an unstable wide complex tachycardia with hypotension",correct:false,explanation:"This wide QRS is from sodium channel blockade, not a true tachyarrhythmia. Cardioversion will not address the underlying pharmacologic cause. Sodium bicarbonate is the appropriate treatment.",protocol_ref:"04.18A"},
   {text:"Adenosine 12mg rapid IV push to differentiate SVT with aberrancy from ventricular tachycardia",correct:false,explanation:"In the context of known TCA overdose, the wide QRS is from sodium channel blockade. Adenosine will not be effective and delays appropriate treatment with sodium bicarbonate.",protocol_ref:"04.18A"}
  ]},
 {phase:"treatment",prompt:"The patient begins having a generalized tonic-clonic seizure. What is the appropriate treatment?",multi_select:false,level_filter:"CP",
  narrative:"While preparing for transport, the patient suddenly develops generalized tonic-clonic seizure activity.",
  vitals_update:{hr:142,bp:"80/48",rr:6,spo2:82},
  options:[
   {text:"Benzodiazepine per seizure protocol — lorazepam 2mg IV or midazolam 2.5mg IV/IM/IN — and continue sodium bicarbonate therapy",correct:true,explanation:"Per Protocol 02.19A: Active seizures should be treated with benzodiazepines. Lorazepam 2mg IV or midazolam 2.5mg IV/IM/IN. Continue sodium bicarbonate for the TCA cardiotoxicity.",protocol_ref:"02.19A"},
   {text:"Administer flumazenil to reverse any benzodiazepine component that may be contributing to the presentation",correct:false,critical:true,explanation:"Flumazenil is CONTRAINDICATED in TCA overdose. It lowers the seizure threshold and can precipitate refractory seizures and status epilepticus in the setting of TCA toxicity.",protocol_ref:"04.18A"},
   {text:"Phenytoin loading dose for seizure control since benzodiazepines may worsen the respiratory depression",correct:false,explanation:"Phenytoin is not part of RI EMS protocol and is a sodium channel blocker that could worsen TCA cardiotoxicity. Benzodiazepines are the first-line for TCA-induced seizures.",protocol_ref:"02.19A"},
   {text:"Do not treat the seizure — it will likely self-terminate and medications will worsen the respiratory depression",correct:false,explanation:"TCA-induced seizures can progress to status epilepticus and worsen acidosis, which increases free TCA and worsens cardiotoxicity. Active seizures must be treated.",protocol_ref:"02.19A"}
  ]},
 {phase:"treatment",prompt:"GCS remains 7. You need to manage the airway. Given this is a TCA overdose, what additional consideration exists for intubation?",multi_select:false,level_filter:"P",
  options:[
   {text:"Avoid succinylcholine if possible — use rocuronium for RSI since succinylcholine may worsen hyperkalemia from prolonged seizure activity",correct:true,explanation:"Succinylcholine causes potassium release and is relatively contraindicated after prolonged seizures due to rhabdomyolysis risk. Additionally, the anticholinergic effects of TCAs may affect neuromuscular junction response.",protocol_ref:"05.04"},
   {text:"RSI is absolutely contraindicated in overdose patients — use nasotracheal intubation only",correct:false,explanation:"RSI is not contraindicated in overdose. It may be the most appropriate method for a patient with GCS 7 and no airway protective reflexes. Medication choices should be adjusted for the clinical context.",protocol_ref:"05.04"},
   {text:"Intubation is not needed — the GCS of 7 is close enough to 8 that the patient likely has intact airway reflexes",correct:false,explanation:"GCS <8 indicates loss of airway protective reflexes per protocol. A GCS of 7 requires airway management. Do not delay based on proximity to the threshold.",protocol_ref:"05.01A"},
   {text:"Perform cricothyrotomy instead of intubation since overdose patients often vomit during laryngoscopy",correct:false,explanation:"Cricothyrotomy is a failed airway rescue technique, not a first-line approach. Intubation should be attempted first with aspiration precautions.",protocol_ref:"05.02A"}
  ]},
 {phase:"transport",prompt:"Where should this patient be transported and what notifications are needed?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Nearest appropriate Hospital Emergency Facility with early notification of critical TCA overdose, ongoing resuscitation, and potential need for intralipid/ICU bed",correct:true,explanation:"Per Protocol 04.18A: Transport to nearest appropriate Hospital Emergency Facility. Early notification allows the ED to prepare for a critically ill toxicology patient requiring ongoing resuscitation.",protocol_ref:"04.18A"},
   {text:"Mental health preferred facility since this is a suicide attempt and psychiatric care is the priority",correct:false,explanation:"The patient has life-threatening TCA toxicity requiring emergency medical stabilization. Psychiatric care comes after medical stabilization. Mental health facilities cannot manage this level of acuity.",protocol_ref:"02.09"},
   {text:"Poison control center for direct admission since they specialize in overdose management",correct:false,explanation:"Poison control is a phone consultation resource (1-800-222-1222), not a facility that admits patients. Transport to an ED.",protocol_ref:"04.18A"},
   {text:"Burn center since TCA overdose can cause hyperthermia requiring specialized temperature management",correct:false,explanation:"While TCAs can cause hyperthermia, this does not warrant burn center transport. Temperature management can occur at any Hospital Emergency Facility.",protocol_ref:"04.18A"}
  ]}
]},

{id:"med-behavioral-01",title:"Agitated Delirium with Underlying Medical Cause",category:"Medical",difficulty:"Hard",
dispatch:"Respond to a convenience store for a combative male, PD on scene.",
patient:{age:44,sex:"M",cc:"Combative, bizarre behavior"},
scene:"Parking lot. Patient restrained prone by two officers, screaming incoherently. Patient is shirtless despite 40°F weather, diaphoretic, attracting attention to store glass windows. Officers report he ran into the store naked, threw items, and was impervious to taser deployment.",
vitals:{hr:168,bp:"198/112",rr:34,spo2:92,gcs:10,temp:"104.2°F",bg:"188 mg/dL"},
history:{pmh:"Unknown",meds:"Unknown",allergies:"Unknown"},
presentation:"Extremely agitated male with bizarre behavior, diaphoresis, keening vocalizations. Warm/hot skin. No compliance with commands. Appears to have unusual strength. No needle tracks visible.",
primary_protocol:"02.25",related_protocols:["02.09","04.18A","01.01"],level_min:"E",
questions:[
 {phase:"scene",prompt:"Based on the clinical presentation, what condition should you suspect?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Delirium with agitation (excited delirium) is a medical emergency, not just a law enforcement problem. Key features include: agitation, diaphoresis, warm/hot skin, non-compliance with commands, absence of fatigue, unusual strength, nudity/inappropriate dress, attraction to glass, and keening. It's often associated with chronic stimulant use and carries risk of sudden death.",
  options:[
   {text:"Delirium with agitation — meets ≥6 criteria: agitation, diaphoresis, warm skin, non-compliance, unusual strength, inappropriate dress, attraction to glass, keening",correct:true,explanation:"Per Protocol 02.25: Individual ≥16yo with bizarre/aggressive behavior and ≥6 of the listed criteria. This patient meets at least 8 criteria, making delirium with agitation the primary impression.",protocol_ref:"02.25"},
   {text:"Simple methamphetamine intoxication requiring only police management and voluntary transport to the ED",correct:false,explanation:"While stimulant use may be a contributing factor, this presentation meets criteria for delirium with agitation — a medical emergency requiring active EMS intervention, not just police management.",protocol_ref:"02.25"},
   {text:"Acute psychotic episode from schizophrenia — manage as behavioral emergency with verbal de-escalation only",correct:false,explanation:"The hyperthermia (104.2°F), tachycardia (168), and physical findings exceed a psychiatric presentation. This is a medical emergency with risk of sudden death, not just a behavioral emergency.",protocol_ref:"02.25"},
   {text:"Heat stroke — the elevated temperature is the primary problem causing the altered behavior",correct:false,explanation:"While hyperthermia is present and must be treated, the full clinical picture (bizarre behavior, unusual strength, keening, attraction to glass) is consistent with delirium with agitation, not isolated heat stroke.",protocol_ref:"02.25"}
  ]},
 {phase:"treatment",prompt:"The patient is prone and restrained by officers. What is your IMMEDIATE priority?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Prone restraint is associated with positional asphyxia and sudden death, especially in agitated delirium patients. The patient must be repositioned to lateral or supine as rapidly as possible. Chemical sedation is critical to reduce metabolic demand and prevent sudden cardiac arrest.",
  options:[
   {text:"Chemical sedation with midazolam or ketamine IM as rapidly as possible, then immediately reposition from prone to lateral/supine to prevent positional asphyxia",correct:true,explanation:"Per Protocol 02.25: Control and/or restrain patient ASAP to reduce prolonged struggle risk. Chemical sedation reduces metabolic demand. Prone positioning risks positional asphyxia and must be addressed immediately.",protocol_ref:"02.25"},
   {text:"Wait for the patient to calm down naturally — chemical sedation is not indicated until verbal de-escalation has been attempted for at least 15 minutes",correct:false,critical:true,explanation:"This patient is at imminent risk of sudden death from excited delirium. Waiting 15 minutes for verbal de-escalation while the patient is prone and hyperthermic could be fatal. Immediate chemical sedation is indicated.",protocol_ref:"02.25"},
   {text:"Apply additional physical restraints and transport the patient in the prone position on the stretcher with officers continuing to hold him",correct:false,critical:true,explanation:"Prone transport with ongoing physical struggle dramatically increases the risk of sudden death. The patient must be sedated and repositioned. Physical restraint alone increases metabolic demand.",protocol_ref:"02.25"},
   {text:"Administer naloxone 2mg IN since opioid intoxication could be causing the altered mental status and bizarre behavior",correct:false,explanation:"This presentation is the OPPOSITE of opioid toxidrome. Opioids cause sedation, miosis, and respiratory depression — not agitation, tachycardia, hyperthermia, and mydriasis.",protocol_ref:"04.18A"}
  ]},
 {phase:"treatment",prompt:"After midazolam 5mg IM, the patient is less combative but still agitated. Temp is 104.2°F. Select ALL appropriate ongoing treatments.",multi_select:true,level_filter:"ACP",
  options:[
   {text:"Normal saline 1000ml IV, may repeat x1 — aggressive fluid resuscitation for dehydration and metabolic demand",correct:true,explanation:"Per Protocol 02.25: Normal saline 1000ml IV, may repeat x1. These patients are severely dehydrated from ongoing metabolic expenditure.",protocol_ref:"02.25"},
   {text:"Initiate cooling measures since temperature >101°F — remove excess clothing, apply cold packs to groin/axillae",correct:true,explanation:"Per Protocol 02.25: Initiate cooling measures if temperature >101°F. Active cooling is critical to prevent end-organ damage from severe hyperthermia.",protocol_ref:"02.25"},
   {text:"Continuous monitoring of EtCO2, SpO2, and ECG — these patients are at risk for sudden cardiac arrest",correct:true,explanation:"Per Protocol 02.25: Initiate continuous monitoring of EtCO2, SpO2, and ECG. Sudden cardiac arrest is a known risk in delirium with agitation.",protocol_ref:"02.25"},
   {text:"Administer activated charcoal 50g orally in case the patient ingested a stimulant substance",correct:false,explanation:"The patient cannot safely take oral medications in this state. Additionally, activated charcoal is not part of RI EMS protocol for prehospital management of stimulant ingestion.",protocol_ref:"04.18A"}
  ]},
 {phase:"transport",prompt:"During transport, the patient suddenly becomes apneic and loses pulses. The monitor shows VF. What is unique about resuscitation in this context?",multi_select:false,level_filter:"ACP",
  vitals_update:{hr:0,bp:"0/0",rr:0,spo2:0,gcs:3},
  narrative:"The patient suddenly stops moving. You look at the monitor and see VF. There is no pulse.",
  options:[
   {text:"Begin CPR per cardiac arrest protocol immediately — delirium with agitation patients who arrest have poor prognosis but should receive full resuscitation including aggressive cooling for refractory hyperthermia",correct:true,explanation:"Per Protocol 03.03A: Initiate CPR per standard cardiac arrest protocol. The hyperthermia must be aggressively treated as it contributes to cardiac irritability. Consider underlying causes including hyperthermia, acidosis, and hyperkalemia from rhabdomyolysis.",protocol_ref:"03.03A"},
   {text:"Defibrillate only — do not perform compressions because the patient likely has rhabdomyolysis and compressions will worsen muscle breakdown",correct:false,explanation:"CPR must be performed. Rhabdomyolysis is not a contraindication to chest compressions. Without CPR, the patient will not survive.",protocol_ref:"03.03A"},
   {text:"This patient has been struggling and was recently restrained — cardiac arrest is expected and resuscitation is unlikely to be successful, consider termination",correct:false,explanation:"Witnessed VF arrest with EMS on scene has potential for good outcomes with immediate defibrillation and CPR. Termination of resuscitation is not appropriate for a witnessed shockable rhythm.",protocol_ref:"06.08"},
   {text:"Administer epinephrine 1mg IV immediately before starting compressions to give the medication time to circulate",correct:false,explanation:"Per cardiac arrest protocol, compressions and defibrillation take priority. Epinephrine is given during CPR cycles, not before compressions begin.",protocol_ref:"03.03A"}
  ]}
]},

{id:"med-adhf-01",title:"Flash Pulmonary Edema with NTG Complication",category:"Medical",difficulty:"Hard",
dispatch:"Respond to a residence for a 72-year-old female with severe difficulty breathing.",
patient:{age:72,sex:"F",cc:"Can't breathe, woke up gasping"},
scene:"Bedroom. Patient sitting upright in bed, severely dyspneic, pink frothy sputum. Three pillows propped behind her. Multiple medication bottles on nightstand.",
vitals:{hr:124,bp:"218/112",rr:36,spo2:78,gcs:14,temp:"98.2°F",bg:"168 mg/dL"},
history:{pmh:"CHF (EF 25%), HTN, atrial fibrillation, CKD stage 3",meds:"Furosemide 80mg BID, carvedilol, apixaban, lisinopril, KCl",allergies:"ACE inhibitors (angioedema)"},
presentation:"Sitting bolt upright, severe respiratory distress, pink frothy sputum, diffuse crackles bilaterally to apices, JVD, 3+ pitting edema to knees. Irregularly irregular rhythm on monitor.",
primary_protocol:"03.01",related_protocols:["02.08A","05.01A","01.01"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"This patient is in acute decompensated heart failure with pulmonary edema. What initial intervention should be applied immediately?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Flash pulmonary edema is a hypertensive emergency. CPAP dramatically improves oxygenation and reduces preload/afterload. In severe CHF with SBP ≥90, CPAP should be applied as soon as possible — it can prevent the need for intubation.",
  options:[
   {text:"CPAP at 5-10 cmH2O — the patient is hypertensive with SBP well above 90, making CPAP safe and immediately beneficial for pulmonary edema",correct:true,explanation:"Per Protocol 03.01: For patients with respiratory distress, crackles, or SpO2 <92% with SBP ≥90, apply CPAP up to 10 cmH2O. This dramatically improves oxygenation and reduces preload/afterload.",protocol_ref:"03.01"},
   {text:"Bag-valve-mask ventilation at 15L with 100% oxygen — SpO2 of 78% is critically low and requires immediate positive pressure ventilation",correct:false,explanation:"BVM is premature. The patient has a GCS of 14 and is breathing. CPAP is the appropriate non-invasive ventilation for this presentation and avoids the risks of BVM (gastric insufflation, aspiration).",protocol_ref:"03.01"},
   {text:"Non-rebreather mask at 15L only — CPAP is contraindicated in patients with CHF due to risk of pneumothorax from weakened lung tissue",correct:false,explanation:"CPAP is specifically indicated for CHF with pulmonary edema per protocol. It is not contraindicated in CHF — it is one of the primary treatments.",protocol_ref:"03.01"},
   {text:"Nebulized albuterol first since crackles could represent bronchospasm, then reassess before considering CPAP",correct:false,explanation:"Diffuse crackles to apices with pink frothy sputum is pulmonary edema, not bronchospasm. CPAP is the priority intervention. Albuterol for crackles from fluid is not indicated.",protocol_ref:"03.01"}
  ]},
 {phase:"treatment",prompt:"After CPAP and aspirin, what is the next pharmacologic intervention?",multi_select:false,level_filter:"ACP",
  options:[
   {text:"Nitroglycerin 0.4mg SL every 5 minutes while SBP remains >100 — NTG reduces preload and afterload in hypertensive pulmonary edema",correct:true,explanation:"Per Protocol 03.01: NTG 0.4mg SL every 5 minutes if SBP >100. In hypertensive pulmonary edema, NTG is a critical intervention that reduces preload (venous return) and afterload (systemic vascular resistance).",protocol_ref:"03.01"},
   {text:"Furosemide 80mg IV (her daily dose) to promote diuresis and reduce the fluid overload causing pulmonary edema",correct:false,explanation:"Per Protocol 03.01: Furosemide may be considered only if transport time ≥30 minutes and patient is normotensive. It is not the next priority — NTG provides faster hemodynamic relief.",protocol_ref:"03.01"},
   {text:"Morphine 2-4mg IV to reduce anxiety and decrease preload through venous pooling",correct:false,explanation:"Morphine is not included in RI Protocol 03.01 for ADHF. It can cause respiratory depression and hypotension. NTG is the appropriate vasodilator.",protocol_ref:"03.01"},
   {text:"Metoprolol 5mg IV to control the heart rate of 124 — rate control will improve cardiac output",correct:false,explanation:"This patient has decompensated CHF with EF 25%. Beta-blockers can worsen acute decompensation by reducing contractility. Additionally, she is already on carvedilol. Rate control is not the priority.",protocol_ref:"03.01"}
  ]},
 {phase:"treatment",prompt:"After the second dose of NTG, the patient's BP drops to 82/50. She becomes more confused. What happened and what do you do?",multi_select:false,level_filter:"ACP",
  vitals_update:{hr:132,bp:"82/50",rr:30,spo2:84,gcs:12},
  narrative:"After the second NTG dose, the patient becomes pale and more confused. You recheck the blood pressure.",
  clinical_pearl:"NTG-induced hypotension in CHF patients is a known complication. The low EF (25%) means the heart is preload-dependent — excessive vasodilation removes the preload needed to maintain cardiac output. Stop NTG, position supine, and give fluids cautiously. This is a gray area — too much fluid worsens pulmonary edema.",
  options:[
   {text:"Discontinue NTG immediately, position supine or Trendelenburg, administer cautious NS 250ml IV bolus while maintaining CPAP and closely monitoring for worsening pulmonary edema",correct:true,explanation:"NTG caused excessive preload reduction in a preload-dependent heart (EF 25%). Stop NTG, support BP with position and cautious fluids. This is a gray area — the patient needs some volume but too much worsens pulmonary edema. Small boluses with reassessment are appropriate.",protocol_ref:"02.20A"},
   {text:"Continue NTG at the same dose — the hypotension will self-correct and the pulmonary edema is the bigger problem",correct:false,critical:true,explanation:"Continuing NTG with SBP 82 risks cardiovascular collapse. Per protocol, NTG requires SBP >100. The hypotension is worsening the patient's condition by reducing coronary perfusion.",protocol_ref:"03.01"},
   {text:"Administer a 1L fluid bolus rapidly to restore blood pressure — this patient clearly needs aggressive volume resuscitation",correct:false,explanation:"Aggressive volume resuscitation in a patient with EF 25% and active pulmonary edema will worsen the pulmonary edema. Cautious small boluses (250ml) with frequent reassessment are more appropriate.",protocol_ref:"02.20A"},
   {text:"Remove the CPAP since the positive pressure is contributing to the hypotension by decreasing venous return",correct:false,explanation:"While CPAP does reduce preload, removing it will worsen the pulmonary edema and hypoxia. The CPAP should be maintained. Address the hypotension by stopping NTG and cautious fluids.",protocol_ref:"03.01"}
  ]},
 {phase:"transport",prompt:"The patient stabilizes with BP 98/64 after 250ml NS. Transport time is 35 minutes. Should furosemide be administered?",multi_select:false,level_filter:"CP",
  options:[
   {text:"Yes — transport time ≥30 minutes, patient takes furosemide daily, and patient is now normotensive (SBP ≥100) — administer furosemide up to 80mg IV per protocol",correct:true,explanation:"Per Protocol 03.01: If transport time ≥30 minutes and patient takes oral furosemide and is normotensive (SBP ≥100), consider administering patient's daily dose of furosemide (max 80mg) IV.",protocol_ref:"03.01"},
   {text:"No — the patient just had NTG-induced hypotension and any additional preload reduction could cause another hypotensive episode",correct:false,explanation:"While this is a reasonable concern, the protocol criteria are met: transport ≥30 min, patient on daily furosemide, currently normotensive. The benefit of reducing pulmonary edema outweighs the risk with careful monitoring. This is a gray area question — the concern has merit but the protocol supports administration.",protocol_ref:"03.01"},
   {text:"Yes — administer double the daily dose (160mg IV) since she is severely fluid overloaded and needs aggressive diuresis",correct:false,explanation:"Per Protocol 03.01: Maximum furosemide dose is 80mg. Exceeding the protocol maximum is not appropriate without Medical Control authorization.",protocol_ref:"03.01"},
   {text:"No — furosemide is never administered in the prehospital setting for heart failure",correct:false,explanation:"Protocol 03.01 specifically allows furosemide administration prehospitally when criteria are met (transport ≥30 min, patient on daily furosemide, SBP ≥100).",protocol_ref:"03.01"}
  ]}
]},

{id:"med-bradycardia-01",title:"Symptomatic Bradycardia from Beta Blocker Toxicity",category:"Medical",difficulty:"Medium",
dispatch:"Respond to a residence for a 66-year-old male feeling dizzy and weak.",
patient:{age:66,sex:"M",cc:"Dizziness, weakness, near-syncope"},
scene:"Kitchen. Patient sitting in chair, pale, mildly confused. Wife states he accidentally took his metoprolol twice this morning. She's worried because he 'doesn't look right.'",
vitals:{hr:38,bp:"78/48",rr:14,spo2:95,gcs:14,temp:"97.6°F",bg:"72 mg/dL"},
history:{pmh:"HTN, atrial fibrillation, type 2 diabetes",meds:"Metoprolol 100mg BID, warfarin, metformin",allergies:"Lisinopril"},
presentation:"Pale, diaphoretic, confused. Bradycardic at 38bpm, hypotensive. Skin cool and clammy. No focal neurologic deficits.",
primary_protocol:"03.05A",related_protocols:["04.18A","02.10A","02.20A"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"This patient has symptomatic bradycardia with hypotension. What is the most likely etiology?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Beta-blocker toxicity causes bradycardia, hypotension, and hypoglycemia. Even a 'double dose' of a patient's regular medication can be dangerous, especially in elderly patients with decreased renal clearance. Always ask about medication errors, especially with cardiac medications.",
  options:[
   {text:"Beta-blocker toxicity from double dosing metoprolol — causing bradycardia, hypotension, and borderline hypoglycemia",correct:true,explanation:"Per Protocol 03.05A and 04.18A: Beta-blockers cause bradycardia and hypotension. Double-dosing metoprolol in an elderly patient can cause significant toxicity. The borderline glucose (72) is also consistent with beta-blocker effects on glycogenolysis.",protocol_ref:"03.05A"},
   {text:"Acute inferior STEMI causing reflex bradycardia — inferior MIs commonly present with bradycardia",correct:false,explanation:"While inferior STEMI can cause bradycardia, the history of double-dosing metoprolol is the most likely cause. A 12-lead ECG should be obtained to evaluate, but the medication error explains the findings.",protocol_ref:"03.02"},
   {text:"Simple vasovagal syncope — the bradycardia and hypotension are from a vagal episode that will self-resolve",correct:false,explanation:"Vasovagal syncope is transient. This patient has sustained symptomatic bradycardia with confusion and hypotension — this is not self-resolving.",protocol_ref:"02.24"},
   {text:"Hypothermia causing the bradycardia — the temperature of 97.6°F is low and explains the heart rate",correct:false,explanation:"97.6°F is within normal variation and does not constitute hypothermia (<95°F/35°C). The medication double-dose is the clear etiology.",protocol_ref:"04.13A"}
  ]},
 {phase:"treatment",prompt:"What is the initial pharmacologic treatment for this symptomatic bradycardia?",multi_select:false,level_filter:"ACP",
  options:[
   {text:"Atropine 0.5-1.0mg IV, repeat every 3-5 minutes to achieve HR >60, maximum 3mg. Also NS 250-500ml IV for hypotension",correct:true,explanation:"Per Protocol 03.05A: Atropine 0.5-1.0mg IV, repeat every 3-5 minutes to achieve HR >60, maximum 3mg. Also consider NS 250-500ml IV for hypotension, repeat as needed (max 2L).",protocol_ref:"03.05A"},
   {text:"Epinephrine 0.3mg IM (1:1000) to increase heart rate — the same as for anaphylaxis",correct:false,explanation:"IM epinephrine at anaphylaxis dose is not the correct route or dose for bradycardia. For refractory bradycardia, epinephrine 2-10mcg/min IV drip is the appropriate formulation at Paramedic level.",protocol_ref:"03.05A"},
   {text:"Transcutaneous pacing immediately without attempting pharmacologic therapy — pacing is more reliable than atropine",correct:false,explanation:"Per Protocol 03.05A: Atropine is listed as first-line alongside TCP. In beta-blocker toxicity, atropine may have limited effectiveness, but it should be attempted first or concurrent with TCP preparation.",protocol_ref:"03.05A"},
   {text:"Adenosine 12mg rapid IV push to reset the cardiac conduction system and restore a normal heart rate",correct:false,critical:true,explanation:"Adenosine SLOWS the heart rate and is used for tachyarrhythmias. Administering adenosine to a patient with a HR of 38 could cause asystole.",protocol_ref:"03.06A"}
  ]},
 {phase:"treatment",prompt:"Atropine 1mg x2 has been given with no improvement. HR remains 40, BP 76/44. What is the next intervention?",multi_select:false,level_filter:"CP",
  vitals_update:{hr:40,bp:"76/44",rr:16,spo2:93},
  narrative:"Despite 2mg of atropine, the heart rate has not increased. The patient is becoming more confused and pale.",
  options:[
   {text:"Transcutaneous pacing — set rate to 70-80, increase milliamps until electrical and mechanical capture, consider sedation with midazolam if SBP allows",correct:true,explanation:"Per Protocol 03.05A: TCP when atropine is ineffective. Set rate, increase current until capture. Consider analgesia/sedation per Patient Comfort Protocol if SBP allows.",protocol_ref:"03.05A"},
   {text:"Continue atropine to the maximum 3mg dose — one more 1mg dose may be effective since beta-blocker toxicity requires higher doses",correct:false,explanation:"While one more dose of atropine could be given (total max 3mg), the patient is not responding and is hemodynamically unstable. TCP should not be delayed for additional atropine attempts.",protocol_ref:"03.05A"},
   {text:"Administer dopamine 20mcg/kg/min as first-line vasopressor — this will increase both heart rate and blood pressure",correct:false,explanation:"Per Protocol 03.05A: Dopamine 2-10mcg/kg/min is considered for bradycardia refractory to atropine AND TCP at Paramedic level. 20mcg/kg/min exceeds the protocol dose range. TCP should be attempted before or concurrent with vasopressors.",protocol_ref:"03.05A"},
   {text:"Perform synchronized cardioversion at 100J to convert the bradycardia to a faster rhythm",correct:false,critical:true,explanation:"Cardioversion is for tachyarrhythmias, not bradycardia. Cardioverting a patient with HR 40 could cause asystole or VF. Transcutaneous pacing is the electrical therapy for bradycardia.",protocol_ref:"03.05A"}
  ]},
 {phase:"transport",prompt:"The patient is now being transcutaneously paced at 72bpm with mechanical capture. BP has improved to 94/60. What should you monitor during transport?",multi_select:true,level_filter:"ACP",
  options:[
   {text:"Continuous pulse check to verify mechanical capture — electrical capture on the monitor does not always equal mechanical capture",correct:true,explanation:"Electrical capture (pacer spikes with QRS complexes) must be verified with mechanical capture (palpable pulse). Continuous monitoring is essential during pacing.",protocol_ref:"03.05A"},
   {text:"Blood glucose monitoring — beta-blockers mask hypoglycemic symptoms and this patient's glucose was already borderline at 72",correct:true,explanation:"Beta-blockers inhibit glycogenolysis and mask tachycardia that normally alerts patients to hypoglycemia. With a BG of 72, ongoing monitoring is critical.",protocol_ref:"02.10A"},
   {text:"Continuous ECG monitoring for underlying rhythm changes that may indicate the beta-blocker effect is resolving",correct:true,explanation:"As metoprolol is metabolized, the underlying rhythm may improve. Monitoring for rhythm changes allows adjustment of pacing parameters.",protocol_ref:"03.05A"},
   {text:"Pulse oximetry is unnecessary during pacing since the electrical capture guarantees adequate perfusion",correct:false,explanation:"Electrical capture does not guarantee adequate perfusion. SpO2 monitoring helps assess the adequacy of circulation and oxygenation regardless of pacing status.",protocol_ref:"01.01"}
  ]}
]},

{id:"med-narrow-tachy-01",title:"SVT in Young Adult with Deterioration",category:"Medical",difficulty:"Medium",
dispatch:"Respond to a college dorm for a 21-year-old female with palpitations and dizziness.",
patient:{age:21,sex:"F",cc:"Palpitations, dizziness, chest tightness"},
scene:"Dorm room. Patient sitting on bed, anxious, hand on chest. Roommate states the patient was studying and drinking energy drinks when she suddenly felt her heart racing. She looks pale.",
vitals:{hr:212,bp:"102/68",rr:22,spo2:97,gcs:15,temp:"98.6°F",bg:"106 mg/dL"},
history:{pmh:"History of SVT (one prior episode in ER, resolved with adenosine)",meds:"None",allergies:"NKDA"},
presentation:"Anxious, pale young female with regular narrow complex tachycardia at 212. Chest tightness, mild dyspnea, palpitations for 30 minutes. Alert and oriented. No diaphoresis.",
primary_protocol:"03.06A",related_protocols:["01.01"],level_min:"E",
questions:[
 {phase:"assessment",prompt:"The monitor shows a regular narrow complex tachycardia at 212bpm. The patient is currently hemodynamically stable with SBP 102. What is the rhythm?",multi_select:false,level_filter:"ACP",
  clinical_pearl:"Regular narrow complex tachycardia at rates >150 in a young patient is SVT until proven otherwise. Sinus tachycardia rarely exceeds 180 in adults at rest. The regular rate and prior SVT history support this diagnosis. The 'stable' designation guides initial management — vagal maneuvers first.",
  options:[
   {text:"Supraventricular tachycardia (SVT) — regular narrow complex rhythm at 212, history of prior SVT, consistent presentation",correct:true,explanation:"Regular narrow complex tachycardia >150 with a history of SVT is most likely SVT. The rate of 212 exceeds typical sinus tachycardia rates at rest.",protocol_ref:"03.06A"},
   {text:"Sinus tachycardia from caffeine and anxiety — energy drinks explain the rate, and this will self-resolve",correct:false,explanation:"While caffeine can cause sinus tachycardia, rates of 212 are uncommon for sinus tachycardia at rest. With a history of SVT, this should be treated as SVT.",protocol_ref:"03.06A"},
   {text:"Atrial fibrillation with rapid ventricular response — the rate of 212 is too fast for SVT",correct:false,explanation:"A-fib is irregularly irregular. This rhythm is regular. High rates can occur with SVT — the regularity is the key distinguishing feature.",protocol_ref:"03.06A"},
   {text:"Ventricular tachycardia — any tachycardia over 200 should be assumed VT until proven otherwise",correct:false,explanation:"This is a narrow complex tachycardia (QRS ≤0.12). VT is a wide complex tachycardia. The narrow QRS makes VT very unlikely.",protocol_ref:"03.07A"}
  ]},
 {phase:"treatment",prompt:"What is the first-line treatment for this stable SVT?",multi_select:false,level_filter:"CP",
  options:[
   {text:"Vagal maneuvers (Valsalva maneuver) — first-line for stable regular narrow complex tachycardia before pharmacologic therapy",correct:true,explanation:"Per Protocol 03.06A: Vagal maneuvers (Valsalva) are first-line for stable SVT at the Cardiac level. This should be attempted before medication.",protocol_ref:"03.06A"},
   {text:"Adenosine 12mg rapid IV push as first-line — vagal maneuvers are unreliable and waste time",correct:false,explanation:"Per Protocol 03.06A: Vagal maneuvers are attempted first. Adenosine is second-line if vagal maneuvers fail. Vagal maneuvers are effective in a significant percentage of SVT episodes.",protocol_ref:"03.06A"},
   {text:"Synchronized cardioversion at 100J — any HR over 200 should be cardioverted immediately regardless of blood pressure",correct:false,explanation:"Per Protocol 03.06A: Cardioversion is reserved for the unstable/pre-arrest patient. This patient is hemodynamically stable (SBP 102, alert). Vagal maneuvers and pharmacologic therapy are appropriate.",protocol_ref:"03.06A"},
   {text:"Diltiazem 0.25mg/kg IV — calcium channel blockers are first-line for SVT in young patients",correct:false,explanation:"Per Protocol 03.06A: Diltiazem requires Medical Control authorization and is used after vagal maneuvers and adenosine have failed. It is not first-line.",protocol_ref:"03.06A"}
  ]},
 {phase:"treatment",prompt:"Vagal maneuvers failed. Adenosine 12mg rapid IV push is administered. The monitor shows a 3-second pause then the SVT resumes at 218. The patient now reports worsening chest pain and her BP is dropping. What is your next action?",multi_select:false,level_filter:"CP",
  vitals_update:{hr:218,bp:"82/48",rr:26,spo2:94},
  narrative:"The adenosine briefly slowed the rhythm confirming SVT, but it resumed. The patient is now looking worse — pale, diaphoretic, and complaining of severe chest pain.",
  options:[
   {text:"Synchronized cardioversion 100-200J biphasic — the patient is now unstable with hypotension and worsening symptoms; consider sedation with midazolam if SBP allows",correct:true,explanation:"Per Protocol 03.06A: For the unstable/pre-arrest patient, synchronized cardioversion 100-200J biphasic. Consider pre-shock sedation with midazolam 2.5-5mg IV if SBP ≥100. SBP is 82, so sedation may not be safe — cardiovert.",protocol_ref:"03.06A"},
   {text:"Repeat adenosine 12mg — the first dose nearly worked and a second dose may achieve sustained conversion",correct:false,explanation:"Per Protocol 03.06A: Adenosine may be repeated x1. However, this patient is now hemodynamically UNSTABLE. The transition from stable to unstable changes the management to cardioversion.",protocol_ref:"03.06A"},
   {text:"Contact Medical Control for diltiazem 0.25mg/kg IV since adenosine failed",correct:false,explanation:"Diltiazem requires SBP ≥100 per protocol. This patient's SBP is 82. Additionally, the patient is now unstable — cardioversion takes priority over pharmacologic therapy.",protocol_ref:"03.06A"},
   {text:"Administer a second dose of adenosine 12mg followed immediately by a 500ml NS bolus to raise the BP above 100",correct:false,explanation:"The patient is hemodynamically unstable. Cardioversion is indicated for unstable SVT, not additional adenosine. Fluid bolus alone will not address the tachycardia.",protocol_ref:"03.06A"}
  ]},
 {phase:"transport",prompt:"After successful cardioversion, the patient converts to sinus rhythm at 88 with BP 106/72. She is alert and pain-free. What is appropriate post-conversion care?",multi_select:true,level_filter:"ACP",
  options:[
   {text:"Continuous cardiac monitoring during transport with close observation for recurrence of SVT",correct:true,explanation:"SVT commonly recurs. Continuous monitoring allows rapid identification and treatment of recurrence.",protocol_ref:"03.06A"},
   {text:"Transport to nearest appropriate Hospital Emergency Facility for cardiology evaluation and possible ablation referral",correct:true,explanation:"Per Protocol 03.06A: Transport to nearest appropriate facility. A second SVT episode warrants cardiology evaluation for possible EP study/ablation.",protocol_ref:"03.06A"},
   {text:"Advise the patient to stop drinking energy drinks since caffeine was likely the trigger for the SVT",correct:true,explanation:"While not a protocol-specific intervention, patient education about avoiding triggers (caffeine, stimulants) is appropriate and good practice.",protocol_ref:"01.01"},
   {text:"No further treatment or monitoring is needed since the SVT is resolved — convert to BLS transport",correct:false,explanation:"Post-cardioversion patients require ongoing cardiac monitoring for recurrence. ALS monitoring should continue during transport.",protocol_ref:"03.06A"}
  ]}
]},

// ═══════════════════════════════════════════════════════════
// TRAUMA (7 scenarios)
// ═══════════════════════════════════════════════════════════

{id:"trauma-mvc-01",title:"High-Speed MVC with Tension Pneumothorax Development",category:"Trauma",difficulty:"Hard",
dispatch:"Respond to a highway for a single vehicle MVC, car vs. guardrail at highway speed. Patient still in vehicle.",
patient:{age:34,sex:"M",cc:"Chest pain, difficulty breathing after MVC"},
scene:"Highway. Single vehicle into guardrail at estimated 65mph. Significant intrusion to driver's door. Airbags deployed. Patient belted, awake, complaining of left chest pain. Windshield starred. No other vehicles involved.",
vitals:{hr:108,bp:"128/82",rr:24,spo2:94,gcs:15,temp:"98.6°F"},
history:{pmh:"None",meds:"None",allergies:"NKDA"},
presentation:"Alert male with left chest wall tenderness, mild respiratory distress, ecchymosis over left lateral chest. Diminished breath sounds on left. No JVD. No tracheal deviation. Stable on initial assessment.",
primary_protocol:"04.01A",related_protocols:["04.03","04.04","04.02","07.43"],level_min:"E",
questions:[
 {phase:"scene",prompt:"What are your priorities for this scene? Select ALL that apply.",multi_select:true,level_filter:"EACP",
  options:[
   {text:"Scene safety — ensure traffic control, wear high-visibility PPE, position apparatus for protection from traffic",correct:true,explanation:"Highway scenes are among the most dangerous for EMS. Traffic control and scene protection are critical before patient access.",protocol_ref:"01.01"},
   {text:"Assess mechanism of injury and determine trauma center criteria — high-speed MVC with significant intrusion meets Step 2 criteria",correct:true,explanation:"Per Protocol 04.01A: Vehicle intrusion >12 inches at the occupant site is a trauma center triage criterion.",protocol_ref:"04.01A"},
   {text:"Limit on-scene time to ≤10 minutes for this trauma patient",correct:true,explanation:"Per Protocol 04.01A: On scene time should be limited to ≤10 minutes for trauma patients meeting triage criteria.",protocol_ref:"04.01A"},
   {text:"Wait for fire department to extricate the patient before beginning any assessment",correct:false,explanation:"Assessment should begin immediately while extrication is being set up. Many assessments and interventions can be performed with the patient in the vehicle.",protocol_ref:"04.01A"}
  ]},
 {phase:"assessment",prompt:"During extrication, you note left-sided chest wall instability with crepitus over ribs 4-7. What injury should you suspect?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"Flail chest (≥3 consecutive ribs fractured in ≥2 places) with underlying pulmonary contusion is a life-threatening injury. The real danger isn't the flail segment — it's the underlying lung injury. Monitor closely for developing pneumothorax and respiratory failure.",
  options:[
   {text:"Flail chest with probable underlying pulmonary contusion — the chest wall instability with crepitus over multiple ribs indicates segmental fractures",correct:true,explanation:"Chest wall instability (paradoxical movement) with crepitus over ribs 4-7 suggests flail chest. The underlying pulmonary contusion causes the life-threatening gas exchange impairment.",protocol_ref:"04.01A"},
   {text:"Simple rib fractures — chest wall crepitus is normal after blunt trauma and doesn't indicate a serious injury",correct:false,explanation:"Chest wall instability with crepitus over 4 consecutive ribs indicates flail chest, not simple fractures. This is a serious, potentially life-threatening injury requiring close monitoring.",protocol_ref:"04.01A"},
   {text:"Sternal fracture — the crepitus is from the sternum and not the ribs given the airbag deployment",correct:false,explanation:"The crepitus is specifically over left lateral ribs 4-7, not the sternum. Sternal fractures typically present with anterior midline tenderness, not lateral chest wall instability.",protocol_ref:"04.01A"},
   {text:"Cardiac tamponade — any blunt chest trauma with crepitus indicates possible cardiac injury requiring pericardiocentesis",correct:false,explanation:"Cardiac tamponade presents with Beck's triad (hypotension, JVD, muffled heart sounds), not chest wall crepitus. Rib crepitus indicates rib fractures.",protocol_ref:"04.01A"}
  ]},
 {phase:"treatment",prompt:"During transport, the patient rapidly deteriorates. HR increases to 134, BP drops to 84/58, SpO2 to 86%. You now note absent breath sounds on the left, JVD, and tracheal deviation to the right. What is happening and what must you do immediately?",multi_select:false,level_filter:"P",
  vitals_update:{hr:134,bp:"84/58",rr:32,spo2:86,gcs:13},
  narrative:"The patient suddenly becomes much more dyspneic and anxious. 'I can't breathe!' he gasps. You notice his neck veins are now distended and his trachea appears shifted.",
  clinical_pearl:"Tension pneumothorax can develop progressively after initial assessment — especially with rib fractures. The classic presentation is respiratory distress, absent breath sounds, JVD, hypotension, and tracheal deviation (late finding). Needle thoracostomy is immediately life-saving. Do not wait for hospital confirmation.",
  options:[
   {text:"Tension pneumothorax — perform needle thoracostomy immediately at 2nd ICS midclavicular or 4th-5th ICS anterior axillary line on the LEFT side",correct:true,explanation:"Per Protocol 07.43 and 04.01A: Absent breath sounds, JVD, hypotension, and tracheal deviation indicate tension pneumothorax. Needle thoracostomy at 2nd ICS midclavicular or 4th-5th ICS anterior axillary line (preferred in obese patients). Paramedic level procedure.",protocol_ref:"07.43"},
   {text:"Cardiac tamponade from myocardial contusion — perform emergency pericardiocentesis with a 16g needle at the subxiphoid approach",correct:false,explanation:"While tamponade causes JVD and hypotension, unilateral absent breath sounds and tracheal deviation point to tension pneumothorax. Pericardiocentesis is not a prehospital standing order procedure in RI protocols.",protocol_ref:"04.01A"},
   {text:"Massive hemothorax — apply an occlusive dressing to the left chest wall and administer 2L of LR for hemorrhagic shock",correct:false,explanation:"There is no open wound to dress. Hemothorax doesn't cause tracheal deviation (blood settles with gravity). The combination of absent breath sounds, JVD, tracheal deviation, and hypotension is classic tension pneumothorax.",protocol_ref:"07.43"},
   {text:"The patient is simply anxious — administer midazolam 2.5mg IV for anxiety and reassess",correct:false,critical:true,explanation:"This patient has tension pneumothorax and will die without needle decompression. Treating this as anxiety and sedating the patient could suppress respiratory drive and accelerate cardiovascular collapse.",protocol_ref:"07.43"}
  ]},
 {phase:"treatment",prompt:"After needle thoracostomy, you hear a rush of air. Vitals begin to improve. What should you monitor for?",multi_select:true,level_filter:"ACP",
  options:[
   {text:"Recurrence of tension pneumothorax — the catheter can kink, clot, or become dislodged, requiring repeat decompression",correct:true,explanation:"Needle thoracostomy catheters frequently fail. Continuous monitoring for recurrent signs of tension pneumothorax is essential, and repeat decompression may be needed.",protocol_ref:"07.43"},
   {text:"Hemothorax development — rib fractures can lacerate intercostal arteries and cause progressive blood loss into the chest",correct:true,explanation:"Rib fractures can cause intercostal artery injury and hemothorax. Monitor for signs of hemorrhagic shock even after pneumothorax decompression.",protocol_ref:"04.01A"},
   {text:"Worsening pulmonary contusion — the underlying lung injury may progress, causing deteriorating oxygenation despite decompression",correct:true,explanation:"Pulmonary contusion worsens over hours. Even after pneumothorax decompression, oxygenation may deteriorate from the underlying contusion.",protocol_ref:"04.01A"},
   {text:"Remove the catheter after 5 minutes once the pneumothorax has resolved to prevent infection",correct:false,explanation:"The decompression catheter should remain in place. Removing it allows re-accumulation of the tension pneumothorax. It will be managed definitively with a chest tube in the ED.",protocol_ref:"07.43"}
  ]},
 {phase:"transport",prompt:"This patient meets trauma center criteria. Transport to a Level 1 Trauma Center is 20 minutes. The nearest community hospital is 5 minutes. Where do you transport?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Level 1 Trauma Center (Rhode Island Hospital) — scene-to-door <45 minutes and the patient has manageable airway, meeting criteria for direct trauma center transport",correct:true,explanation:"Per Protocol 04.01A: Patients meeting trauma center triage criteria should go to Level 1 Trauma Center if scene-to-door ≤45 minutes and no unmanageable airway compromise. 20 minutes qualifies.",protocol_ref:"04.01A"},
   {text:"Nearest community hospital since the patient just had a tension pneumothorax and needs immediate chest tube placement",correct:false,explanation:"The tension pneumothorax was temporized with needle decompression. The patient needs definitive surgical care available at a trauma center, not just a chest tube.",protocol_ref:"04.01A"},
   {text:"Helicopter to the trauma center since ground transport would take 20 minutes",correct:false,explanation:"Per Protocol 06.02: HEMS is considered when ground transport time significantly exceeds helicopter time. 20 minutes by ground does not meet this threshold.",protocol_ref:"06.02"},
   {text:"Closest facility regardless — the patient is too unstable for a 20-minute transport",correct:false,explanation:"After successful needle decompression with improving vitals, a 20-minute transport to a trauma center is appropriate and provides access to surgical specialists.",protocol_ref:"04.01A"}
  ]}
]},

{id:"trauma-penetrating-01",title:"Penetrating Chest Trauma with Hemorrhagic Shock",category:"Trauma",difficulty:"Hard",
dispatch:"Respond to a parking lot for a stabbing victim. PD on scene, scene secure.",
patient:{age:26,sex:"M",cc:"Stab wound to left chest"},
scene:"Parking lot behind a bar. Patient supine, single stab wound to left anterior chest at 5th intercostal space, midclavicular line. Active bleeding from wound. PD has secured the scene. Bystanders applying a shirt to the wound.",
vitals:{hr:126,bp:"88/56",rr:28,spo2:90,gcs:14,temp:"98.4°F"},
history:{pmh:"None",meds:"None",allergies:"NKDA"},
presentation:"Anxious, pale, diaphoretic male with a 3cm stab wound to left anterior chest. Diminished breath sounds on left. Tachycardic, hypotensive. Wound is bubbling with respirations.",
primary_protocol:"04.01A",related_protocols:["04.04","04.06","02.21A","07.43"],level_min:"E",
questions:[
 {phase:"scene",prompt:"The wound is bubbling with respirations. What is this finding and what is the immediate intervention?",multi_select:false,level_filter:"EACP",
  clinical_pearl:"A sucking chest wound (open pneumothorax) occurs when a chest wall defect allows air to enter the pleural space with each breath. Apply a vented chest seal device (preferred) or occlusive dressing taped on three sides to allow air out but prevent air entry. Monitor closely for tension pneumothorax development.",
  options:[
   {text:"Open pneumothorax (sucking chest wound) — apply a vented chest seal device (preferred) or occlusive dressing to the wound immediately",correct:true,explanation:"Per Protocol 04.01A: For open penetrating torso wounds or open pneumothorax, apply a vented chest seal device (preferred) or an occlusive dressing. The bubbling indicates air moving through the chest wall defect.",protocol_ref:"04.01A"},
   {text:"Pack the wound with hemostatic gauze and apply a pressure dressing — hemorrhage control is the priority over the air leak",correct:false,explanation:"While hemorrhage control is important, the open pneumothorax must be sealed. A vented chest seal addresses both the air leak and helps control hemorrhage at the wound site.",protocol_ref:"04.01A"},
   {text:"Leave the wound open to allow air to escape and prevent tension pneumothorax from developing",correct:false,explanation:"An open pneumothorax impairs ventilation by allowing air entry. It should be sealed with a vented device that allows air out (preventing tension) while preventing air entry.",protocol_ref:"04.01A"},
   {text:"Remove the shirt, irrigate the wound with saline, and apply a standard gauze dressing with tape on all four sides",correct:false,explanation:"Irrigating a penetrating chest wound wastes time. An occlusive dressing taped on all four sides (without a vent) risks converting to tension pneumothorax. A vented chest seal is preferred.",protocol_ref:"04.01A"}
  ]},
 {phase:"treatment",prompt:"The patient has penetrating torso trauma with hypotension. What is the fluid resuscitation strategy per RI protocol?",multi_select:false,level_filter:"ACP",
  clinical_pearl:"Permissive hypotension for penetrating torso trauma WITHOUT TBI targets a palpable radial pulse or SBP ~80. Aggressive fluid resuscitation before surgical hemorrhage control can worsen bleeding by diluting clotting factors and raising pressure. This is different from the SBP ≥90 target for blunt trauma.",
  options:[
   {text:"LR 250ml IV, repeat to achieve a palpable radial pulse or SBP ~80 or MAP ~65 or normal mental status (max 2L) — permissive hypotension strategy",correct:true,explanation:"Per Protocol 02.21A: For penetrating torso trauma WITHOUT TBI, LR 250ml IV, repeat to achieve radial pulse or SBP ~80 or MAP ~65 or normal mental status (max 2L). This is permissive hypotension to avoid worsening hemorrhage.",protocol_ref:"02.21A"},
   {text:"LR 500ml IV, repeat to achieve SBP ≥100 or MAP ≥65 (max 2L) — standard shock resuscitation targets",correct:false,explanation:"Standard targets (SBP ≥100) are for undifferentiated shock. Penetrating torso trauma without TBI uses permissive hypotension with lower targets (SBP ~80) and smaller boluses (250ml).",protocol_ref:"02.21A"},
   {text:"No fluids — any IV fluids before surgical control of hemorrhage will worsen the bleeding and should be withheld entirely",correct:false,explanation:"While aggressive resuscitation is harmful, some fluid resuscitation is appropriate to maintain organ perfusion. RI protocol calls for 250ml boluses to specific targets, not zero fluids.",protocol_ref:"02.21A"},
   {text:"Normal saline 2L wide open, then switch to LR — rapid crystalloid infusion is needed to replace estimated blood loss",correct:false,explanation:"Per protocol, LR is the fluid of choice for hemorrhagic shock, not NS. Additionally, 2L wide open violates the permissive hypotension strategy for penetrating trauma.",protocol_ref:"02.21A"}
  ]},
 {phase:"treatment",prompt:"During transport, the patient loses consciousness. Monitor shows PEA at rate of 40. What is the likely etiology and immediate action?",multi_select:false,level_filter:"P",
  vitals_update:{hr:40,bp:"0/0",rr:0,spo2:0,gcs:3},
  narrative:"The patient suddenly stops talking and goes limp. No pulse is palpable. The monitor shows a slow wide complex rhythm.",
  clinical_pearl:"PEA arrest in penetrating chest trauma has two main reversible causes: tension pneumothorax and cardiac tamponade. Both require immediate intervention. In traumatic arrest, bilateral needle thoracostomy should be performed even without classic signs, as clinical assessment is unreliable during cardiac arrest.",
  options:[
   {text:"Initiate CPR, perform bilateral needle thoracostomy for suspected tension pneumothorax, continue LR bolus — traumatic arrest with penetrating chest injury requires addressing reversible causes immediately",correct:true,explanation:"Per Protocol 04.06: Initiate CPR, control hemorrhage, perform needle thoracostomy for suspected tension pneumothorax. In penetrating chest trauma with PEA, tension pneumothorax is a primary reversible cause. Bilateral decompression is appropriate.",protocol_ref:"04.06"},
   {text:"Epinephrine 1mg IV and standard ACLS — treat this as a medical cardiac arrest since the PEA indicates a cardiac cause",correct:false,explanation:"Per Protocol 04.06: Traumatic cardiac arrest requires addressing traumatic causes first (hemorrhage, tension pneumothorax, tamponade). While epinephrine is part of the algorithm, needle decompression is the priority in penetrating chest trauma.",protocol_ref:"04.06"},
   {text:"Termination of resuscitation — penetrating traumatic cardiac arrest has near-zero survival and further efforts are futile",correct:false,critical:true,explanation:"Witnessed PEA arrest with short down-time and a potentially reversible cause (tension pneumothorax) should receive full resuscitation. Transport time is short. This patient could survive with rapid intervention and surgical thoracotomy.",protocol_ref:"04.06"},
   {text:"Emergency thoracotomy in the back of the ambulance to perform open cardiac massage and repair the cardiac injury",correct:false,explanation:"Field thoracotomy is not within the scope of any RI EMS provider level. This requires emergency department thoracotomy at the trauma center.",protocol_ref:"04.06"}
  ]},
 {phase:"transport",prompt:"After bilateral needle decompression, you get ROSC with HR 118, BP 72/44. Where do you transport?",multi_select:false,level_filter:"EACP",
  options:[
   {text:"Level 1 Trauma Center if <15 minutes away; otherwise nearest Hospital Emergency Facility — post-traumatic arrest with ROSC",correct:true,explanation:"Per Protocol 04.06: If transport to Level 1 Trauma Center is <15 minutes, transport there. If >15 minutes, transport to nearest Hospital Emergency Facility. This patient needs surgical exploration.",protocol_ref:"04.06"},
   {text:"Nearest Hospital Emergency Facility regardless of trauma capability — post-arrest patients shouldn't have prolonged transport",correct:false,explanation:"Protocol 04.06 specifically uses the 15-minute threshold. If the trauma center is within 15 minutes, the patient benefits from direct access to surgical capability for definitive hemorrhage control.",protocol_ref:"04.06"},
   {text:"PCI-capable facility since the stab wound may have injured the coronary arteries requiring cardiac catheterization",correct:false,explanation:"Penetrating cardiac injury requires surgical repair (thoracotomy), not catheterization. The trauma center is the appropriate destination.",protocol_ref:"04.06"},
   {text:"Return to the scene and wait for helicopter transport to ensure the highest level of care during transport",correct:false,explanation:"With ROSC in a post-arrest patient, rapid transport is essential. Waiting for a helicopter wastes critical time. Ground transport to the appropriate facility is indicated.",protocol_ref:"06.02"}
  ]}
]}
];
