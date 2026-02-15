
import { MedicalProtocol, MedicalSystem } from './types';

export const MEDICAL_DATA: MedicalProtocol[] = [
  {
    id: 'htn-001',
    name: 'HYPERTENSION',
    system: MedicalSystem.Cardiovascular,
    category: 'Chronic Management',
    symptoms: [
      'Headaches, especially in the morning',
      'Dizziness or light-headedness',
      'Blurred or double vision',
      'Nosebleeds (less common)',
      'Shortness of breath',
      'Chest pain or tightness',
      'Heart palpitations',
      'Fatigue or confusion',
      'Ringing in the ears',
      'Irregular heartbeat'
    ],
    treatment: [
      {
        title: '1st Line – Monotherapy (Single Drug)',
        options: [
          'Use one of the following:',
          'ACE Inhibitor: e.g., Lisinopril ( Tab Novatech 5mg , Tab Novatech 10 )',
          'ARB (Angiotensin Receptor Blocker): e.g., Losartan, Valsartan ( Tab Cozaar 50mg )',
          'Calcium Channel Blocker (CCB): e.g., Amlodipine ( Tab Norvasc 5mg , Tab Norvasc 10mg )',
          'Thiazide Diuretic: e.g., Hydrochlorothiazide (usually given in combination with other antihypertensives)'
        ]
      },
      {
        title: '2nd Line – Dual Therapy (Two Drugs)',
        options: [
          'If blood pressure is not controlled with a single drug:',
          'Amlodipine + Valsartan',
          'Norvasc V 5/80',
          'Norvasc V 5/160'
        ]
      },
      {
        title: '3rd Line – Triple Therapy (Three Drugs)',
        options: [
          'If blood pressure is not controlled with two drugs:',
          'Amlodipine + Valsartan + Hydrochlorothiazide',
          'Avsar Plus 5/160/12.5',
          'Avsar Plus 10/160/12.5',
          'Avsar Plus 10/160/25'
        ]
      }
    ],
    importantNotes: [
      'Never use an ACE inhibitor with an ARB.'
    ]
  },
  {
    id: 'stemi-001',
    name: 'ST-SEGMENT ELEVATION MYOCARDIAL INFARCTION (STEMI)',
    system: MedicalSystem.Emergency,
    category: 'Acute Emergency',
    symptoms: [
      'Severe, crushing chest pain',
      'Pain radiating to the left arm, jaw, neck, back, or shoulder',
      'Chest heaviness or tightness',
      'Sudden onset of intense discomfort',
      'Shortness of breath',
      'Cold, clammy sweating',
      'Nausea or vomiting',
      'Dizziness or fainting',
      'Palpitations',
      'Extreme anxiety or feeling of impending doom',
      'Epigastric or upper abdominal pain',
      'Unusual fatigue or weakness',
      'Back pain (more common in women and elderly)',
      'Minimal or no pain in some diabetics (silent MI)'
    ],
    treatment: [
      {
        title: 'Immediate Medications',
        options: [
          'Clopidogrel 75 mg – 4 tablets stat (e.g., Tab Abiclot, Tab Lowplat)',
          'Aspirin 300 mg (e.g., Tab Dispirin)',
          'Glyceryl Trinitrate 0.5 mg sublingual (e.g.,Tab Angised) – place beneath the tongue',
          'Enoxaparin 60 mg SC injection (e.g., Clexane)'
        ]
      }
    ],
    importantNotes: [
      'Never give Glyceryl Trinitrate to patients with low blood pressure or inferior wall MI.'
    ]
  },
  {
    id: 'hfref-001',
    name: 'HEART FAILURE WITH REDUCED EJECTION FRACTION (HFrEF)',
    system: MedicalSystem.Cardiovascular,
    category: 'Chronic Heart Failure',
    symptoms: [
      'Shortness of breath on exertion',
      'Difficulty breathing when lying flat',
      'Waking at night gasping for air',
      'Fatigue and weakness',
      'Swelling of legs, ankles, or feet',
      'Rapid or irregular heartbeat',
      'Persistent cough or wheezing (may be frothy sputum)',
      'Reduced exercise tolerance',
      'Rapid weight gain due to fluid retention',
      'Abdominal bloating or discomfort',
      'Poor appetite or early satiety',
      'Confusion or trouble concentrating',
      'Increased urination at night (nocturia)'
    ],
    treatment: [
      {
        title: 'Diuretics / Aldosterone Antagonists',
        options: [
          'Spironolactone (e.g., Aldactone A 25 mg or 50 mg)',
          'OR',
          'Furosemide + Spironolactone (e.g., Spiromide 20/50 mg)'
        ]
      },
      {
        title: 'Beta Blocker',
        options: [
          'Carvedilol (e.g., Carveda 3.125 mg, 6.25 mg, 12.5 mg)'
        ]
      },
      {
        title: 'RAAS Inhibition',
        options: [
          'ACE Inhibitor: e.g., Captopril (e.g., Capoten 25 mg or 50 mg)',
          'OR',
          'ARNI (Angiotensin Receptor-Neprilysin Inhibitor): e.g., Sacvin 49/51 mg'
        ]
      },
      {
        title: 'SGLT2 Inhibitor',
        options: [
          'Dapagliflozin (e.g., Dapa 5 mg or 10 mg)'
        ]
      },
      {
        title: 'Additional Option (if symptoms persist)',
        options: [
          'Digoxin ( Tab Lanoxin 0.25 mg)',
          'Start with 0.125 mg daily or 0.25 mg on alternate days'
        ]
      }
    ],
    importantNotes: []
  },
  {
    id: 'stable-angina-001',
    name: 'STABLE ANGINA',
    system: MedicalSystem.Cardiovascular,
    category: 'Ischemic Heart Disease',
    symptoms: [
      'Central or left-sided chest pain/discomfort',
      'Pressure, heaviness, tightness, or squeezing sensation in the chest',
      'Pain precipitated by exertion, emotional stress, cold weather, or heavy meals',
      'Pain relieved by rest or sublingual nitrates within minutes',
      'Radiation of pain to the left arm, neck, jaw, shoulder, or back',
      'Shortness of breath on exertion',
      'Associated sweating (diaphoresis)',
      'Nausea or epigastric discomfort',
      'Predictable pattern (similar intensity and duration with each episode)',
      'Duration typically <10 minutes (usually 2–5 minutes)'
    ],
    treatment: [
      {
        title: '1. For Acute Anginal Attacks',
        options: [
          'Tab. Glyceryl Trinitrate 0.5 mg (Angised®) S/L PRN for chest pain',
          'OR GTN Spray 0.4 mg (Nitril®) 1 spray translingual PRN',
          'Sig: May repeat after 5 minutes if pain persists. If pain persists 5 minutes after the second dose, seek emergency medical care immediately.'
        ]
      },
      {
        title: '2. Anti-Anginal Therapy (First-Line)',
        options: [
          'β-Blocker (choose ONE):',
          'Tab. Bisoprolol: 2.5 mg PO OD, titrate to 5–10 mg OD (Max: 20 mg/day)',
          'OR Tab. Carvedilol: 3.125 mg PO BD, titrate every 2 weeks up to 25 mg BD',
          'OR Tab. Metoprolol: 25 mg PO BD, titrate up to 100 mg BD (Max: 400 mg/day)',
          'If β-blockers contraindicated → consider CCBs or long-acting nitrates.'
        ]
      },
      {
        title: '3. Antiplatelet Therapy',
        options: [
          'Tab. Aspirin 75 mg PO OD (Dose range: 75–150 mg/day)',
          'If aspirin intolerant: Tab. Clopidogrel 75 mg PO OD'
        ]
      },
      {
        title: '4. Lipid-Lowering Therapy (High-Intensity Statin)',
        options: [
          'Tab. Atorvastatin 40–80 mg PO OD',
          'OR Tab. Rosuvastatin 20–40 mg PO OD'
        ]
      },
      {
        title: '5. ACE Inhibitor / ARB (If Indicated)',
        options: [
          '(Hypertension, Diabetes Mellitus, CKD, LVEF ≤40%)',
          'Tab. Ramipril: 2.5 mg PO OD, titrate to 5–10 mg OD',
          'OR Tab. Losartan: 25 mg PO OD, titrate up to 100 mg OD'
        ]
      }
    ],
    importantNotes: []
  },
  {
    id: 'unstable-angina-001',
    name: 'UNSTABLE ANGINA',
    system: MedicalSystem.Emergency,
    category: 'Acute Coronary Syndrome',
    symptoms: [
      'Chest pain or discomfort (pressure, squeezing, tightness, or heaviness)',
      'Pain that occurs at rest, with minimal exertion, or is new or worsening',
      'Chest pain lasting longer than usual (often >10–20 minutes)',
      'Pain that is not fully relieved by rest or nitroglycerin',
      'Pain spreading to the arms (often left), neck, jaw, shoulder, or back',
      'Shortness of breath',
      'Sweating (cold sweat)',
      'Nausea or vomiting',
      'Lightheadedness or dizziness',
      'Fatigue or weakness',
      'Anxiety or a sense of impending doom'
    ],
    treatment: [
      {
        title: '1. Immediate Measures',
        options: [
          'Admit to CCU / HDU',
          'ABCD&E stabilization',
          'Continuous cardiac monitoring',
          'IV access × 2',
          'Strict bed rest'
        ]
      },
      {
        title: '2. Oxygen',
        options: [
          'Oxygen via nasal cannula 2–4 L/min',
          'Indication: Only if SpO₂ < 94%, cyanosis, or respiratory distress'
        ]
      },
      {
        title: '3. Dual Antiplatelet Therapy (DAPT)',
        options: [
          'Tab. Aspirin: Loading dose: 300 mg PO once (chewed); Maintenance: 75–150 mg PO once daily',
          'PLUS one of the following P2Y₁₂ inhibitors:',
          'Option A (Preferred): Tab. Ticagrelor (Loading: 180 mg, Maintenance: 90 mg BD)',
          'Option B: Tab. Prasugrel (Loading: 60 mg, Maintenance: 10 mg OD) - Avoid if age ≥75 yrs, weight <60 kg, or prior stroke',
          'Option C: Tab. Clopidogrel (Loading: 300–600 mg, Maintenance: 75 mg OD)'
        ]
      },
      {
        title: '4. Anticoagulation',
        options: [
          'Option A: Inj. Enoxaparin (1 mg/kg SC every 12 hours; If GFR <30 → once daily)',
          'Option B: Inj. Unfractionated Heparin (Bolus: 60 units/kg; Infusion: 12 units/kg/hour; Target aPTT: 1.5–2.0 × control)'
        ]
      },
      {
        title: '5. Anti-Ischemic Therapy',
        options: [
          'Nitrates (if SBP ≥90 mmHg): Glyceryl Trinitrate spray 0.4 mg – 1 spray SL OR Tab. GTN 0.5 mg – 1 tablet SL (May repeat every 5 mins × 3)'
        ]
      },
      {
        title: '6. Analgesia',
        options: [
          'Inj. Morphine sulphate: 4–8 mg IV slow, titrate every 15 min',
          'OR Inj. Nalbuphine: 10–20 mg IV, diluted in NS',
          'Add Antiemetic: Inj. Metoclopramide 10 mg IV OR Inj. Dimenhydrinate 50 mg IV'
        ]
      },
      {
        title: '7. High-Intensity Statin',
        options: [
          'Tab. Atorvastatin 40–80 mg PO once daily OR Tab. Rosuvastatin 20–40 mg PO once daily'
        ]
      },
      {
        title: '8. Additional Cardioprotective Drugs',
        options: [
          'Beta-blocker (if no contraindication)',
          'ACE inhibitor / ARB',
          'Aldosterone antagonist (if LV dysfunction/DM)'
        ]
      },
      {
        title: '9. Glycoprotein IIb/IIIa Inhibitor (High-Risk)',
        options: [
          'Inj. Tirofiban: Bolus: 25 mcg/kg IV over 5 mins; Infusion: 0.15 mcg/kg/min for up to 18 hours'
        ]
      }
    ],
    importantNotes: []
  },
  {
    id: 'hf-comp-001',
    name: 'HEART FAILURE (COMPREHENSIVE)',
    system: MedicalSystem.Cardiovascular,
    category: 'Heart Failure Management',
    symptoms: [
      'Shortness of breath (dyspnea) on exertion',
      'Shortness of breath at rest (in advanced cases)',
      'Orthopnea (breathlessness when lying flat)',
      'Paroxysmal nocturnal dyspnea',
      'Fatigue and reduced exercise tolerance',
      'Peripheral edema (ankle, leg, or sacral swelling)',
      'Rapid weight gain due to fluid retention',
      'Nocturia (increased urination at night)',
      'Persistent cough or wheeze (often with frothy sputum)',
      'Chest discomfort or pressure',
      'Palpitations',
      'Dizziness or lightheadedness',
      'Reduced appetite, nausea, or abdominal fullness',
      'Abdominal swelling (ascites)',
      'Confusion or impaired concentration (especially in elderly patients)',
      'Cold extremities or cyanosis (advanced heart failure)'
    ],
    treatment: [
      {
        title: 'A) Heart failure with reduced LVEF (HFrEF) - Immediate',
        options: [
          'Hospitalize the patient; Position: Propped-up (semi-Fowler’s)',
          'Monitoring: Continuous cardiac monitoring; Record BP, HR, RR, SpO₂, urine output',
          'Oxygen Therapy: 100% Oxygen via face mask; Target SpO₂ ≥94%',
          'Identify and correct reversible causes'
        ]
      },
      {
        title: '1. Diuretics (for Volume Overload)',
        options: [
          'Inj. Furosemide (Lasix): 20–120 mg IV stat, then IV/PO BD (Max 320 mg/day)',
          'PLUS Tab. Spironolactone: 25 mg PO once daily or alternate days (Max 50 mg/day)',
          'OR Tab. Furosemide + Spironolactone (Spiromide): Start ½ tablet OD'
        ]
      },
      {
        title: '2. Beta Blockers (Stable & Euvolemic Only)',
        options: [
          'Carvedilol: Start 3.125 mg BD, titrate to 25 mg BD',
          'Metoprolol Succinate: Start 12.5–25 mg OD, target 200 mg OD',
          'Bisoprolol: Start 1.25 mg OD, target 10 mg OD',
          '⚠️ If HR <50 bpm or worsening HF → reduce dose or temporarily stop'
        ]
      },
      {
        title: '3. ACE Inhibitors (Titrate 1–3 Months)',
        options: [
          'Captopril: Start 6.25 mg TDS, target 50 mg TDS',
          'Enalapril: Start 2.5 mg BD, target 10 mg BD',
          'Lisinopril/Ramipril: Start 2.5–5 mg OD, target 10 mg OD'
        ]
      },
      {
        title: '5. ARNI (Preferred in Symptomatic HFrEF)',
        options: [
          'Tab. Sacubitril/Valsartan: Start 49/51 mg BD (24/26 mg BD if naïve)',
          'Target 97/103 mg BD',
          '⚠️ Stop ACEI for 36 hours before starting ARNI'
        ]
      },
      {
        title: '7. SGLT2 Inhibitors',
        options: [
          'Tab. Dapagliflozin 10 mg PO OD OR Tab. Empagliflozin 10 mg PO OD'
        ]
      }
    ],
    importantNotes: [
      'Stop ACEI for 36 hours before starting ARNI.',
      'Beta Blockers: Start only when euvolemic & stable.',
      'Digoxin Toxicity warning: nausea, anorexia, arrhythmias, confusion, visual changes.'
    ]
  },
  {
    id: 'acute-hf-001',
    name: 'ACUTE HEART FAILURE',
    system: MedicalSystem.Emergency,
    category: 'Acute Crisis',
    symptoms: [
      'Sudden onset or worsening breathlessness (dyspnea)',
      'Orthopnea',
      'Paroxysmal nocturnal dyspnea',
      'Rapid breathing (tachypnea)',
      'Cough, often with frothy or pink sputum',
      'Chest tightness',
      'Severe fatigue and weakness',
      'Palpitations',
      'Reduced exercise tolerance',
      'Anxiety or sense of impending doom',
      'Peripheral edema',
      'Rapid weight gain',
      'Decreased urine output (oliguria)',
      'Abdominal distension',
      'Nausea and loss of appetite',
      'Dizziness or syncope'
    ],
    treatment: [
      {
        title: 'Initial Assessment & Resuscitation',
        options: [
          'Primary Survey (ABCD&E)',
          'Ensure airway patency; Assess breathing/circulation; evaluate disability (GCS)',
          'Position patient upright / propped-up'
        ]
      },
      {
        title: 'Respiratory Support',
        options: [
          'Oxygen if SpO₂ < 90% or PaO₂ < 60 mmHg; Target SpO₂ ≥ 94%',
          'Consider NIV (CPAP/BiPAP) if persistent distress'
        ]
      },
      {
        title: '1. IV Diuretic Therapy',
        options: [
          'Diuretic-naïve: Inj. Furosemide (Lasix) 20–40 mg IV bolus over 1–2 mins',
          'Patients on oral: Start IV loop diuretic at 2–2.5 times the usual daily oral dose',
          'If output <100 mL/hour → double dose',
          'Sequential nephron blockade: Tab. Hydrochlorothiazide 25–50 mg BD OR Tab. Metolazone 5 mg OD'
        ]
      },
      {
        title: '2. Vasodilators (If SBP ≥ 90 mmHg)',
        options: [
          'Sublingual GTN 0.4–0.5 mg spray/tablet',
          'IV GTN infusion if persistent pulmonary edema',
          '⚠ Avoid if SBP < 90 mmHg'
        ]
      },
      {
        title: 'Hemodynamic Support (Cold & Wet/Dry Profile)',
        options: [
          'Dry & Cold: Assess fluid responsiveness; Small IV bolus; If shock refractory -> Inj. Norepinephrine 0.05-0.4 mcg/kg/min',
          'Wet & Cold: Inotropic therapy (Inj. Dobutamine 2.5-20 mcg/kg/min OR Inj. Dopamine 5-15 mcg/kg/min)',
          'If refractory: Add vasopressor (Norepinephrine)'
        ]
      }
    ],
    importantNotes: [
      'Morphine: Not for routine use. Consider only for severe anxiety with pulmonary edema (2–4 mg IV slow).',
      'BiPAP preferred over CPAP.'
    ]
  },
  {
    id: 'ie-001',
    name: 'INFECTIVE ENDOCARDITIS',
    system: MedicalSystem.Infectious,
    category: 'Endocarditis',
    symptoms: [
      'Fever (most common symptom)',
      'Chills and rigors',
      'Night sweats',
      'Fatigue and malaise',
      'Loss of appetite and weight loss',
      'New-onset or worsening dyspnea',
      'Chest pain',
      'Palpitations',
      'Symptoms of heart failure',
      'Persistent cough',
      'Myalgia and arthralgia',
      'Headache',
      'Confusion or altered mental status',
      'Sudden focal neurological deficits (stroke/TIA)',
      'Visual disturbances',
      'Abdominal pain (splenic/renal infarction)',
      'Painful nodules (Osler nodes) / Painless lesions (Janeway lesions)',
      'Petechiae'
    ],
    treatment: [
      {
        title: 'Step 1: Start Broad-Spectrum Coverage (Empiric)',
        options: [
          'Early Prosthetic (<12mo): Vancomycin + cefepime + rifampin + gentamicin',
          'Late Prosthetic (>12mo): Vancomycin + ceftriaxone',
          'Native (Acute): Vancomycin + cefepime',
          'Native (Subacute): Vancomycin + ampicillin-sulbactam'
        ]
      },
      {
        title: 'Step 2: Narrow Therapy Based on Cultures',
        options: [
          'MSSA Native: Nafcillin, oxacillin, or cefazolin',
          'MRSA Native: Vancomycin',
          'Prosthetic: Add rifampin + gentamicin to appropriate drug'
        ]
      },
      {
        title: 'Duration & Mode',
        options: [
          'Treat for at least 2–6 weeks',
          'Count from the first negative blood culture',
          'All patients require prolonged IV therapy'
        ]
      },
      {
        title: 'Prophylaxis (Prevention)',
        options: [
          'Dental: No allergy (Amoxicillin/Ampicillin); Allergy (Azithromycin/Clindamycin)',
          'Cardiac device: Cefazolin'
        ]
      }
    ],
    importantNotes: [
      'Empiric first → targeted second.',
      'Prosthetic valves require rifampin.'
    ]
  },
  {
    id: 'arv-rhd-001',
    name: 'ACUTE RHEUMATIC FEVER & RHEUMATIC HEART DISEASE (RHD)',
    system: MedicalSystem.Infectious,
    category: 'Rheumatic Heart Disease',
    symptoms: [
      'Fever',
      'Migratory polyarthritis (large joints)',
      'Carditis (pancarditis)',
      'Sydenham chorea',
      'Erythema marginatum',
      'Subcutaneous nodules',
      'Other: fatigue, malaise, arthralgia'
    ],
    treatment: [
      {
        title: '1. Antibiotic Prophylaxis (Primary/Secondary)',
        options: [
          'First-line: Inj. Benzathine Penicillin G 1.2 million units IM every 4 weeks',
          'If Allergic: Cap. Cephalexin 500 mg: 1 g BD for 10 days OR Azithromycin 500 mg OD for 5 days'
        ]
      },
      {
        title: '2. Symptomatic Treatment – Arthritis & Fever',
        options: [
          'NSAIDs: Tab. Aspirin 300 mg (2 tabs 5–6 times daily, max 4–8 g/day) for 3–4 weeks',
          'Alternatives: Tab. Naproxen 250–500 mg BD OR Tab. Ibuprofen 400 mg TDS',
          'Severe cases: Tab. Prednisolone 1–2 mg/kg/day'
        ]
      },
      {
        title: '3. Carditis / Heart Failure',
        options: [
          'Treat as acute heart failure: diuretics, fluid/salt restriction'
        ]
      },
      {
        title: '4. Treatment of Sydenham Chorea',
        options: [
          'Tab. Carbamazepine: 3.5–10 mg/kg/dose BD',
          'OR Tab. Sodium Valproate: 7.5–10 mg/kg/dose BD',
          'Severe cases: Add Prednisolone'
        ]
      }
    ],
    importantNotes: [
      'Secondary Prophylaxis duration: ≥5 years if no cardiac involvement; ≥10 years if cardiac involvement.'
    ]
  },
  {
    id: 'pericarditis-001',
    name: 'PERICARDITIS',
    system: MedicalSystem.Cardiovascular,
    category: 'Pericardial Disease',
    symptoms: [
      'Chest pain (Sharp, stabbing, or pleuritic)',
      'Pain often worse on inspiration or lying flat',
      'Pain relieved by sitting up and leaning forward',
      'Fever (low-grade)',
      'Dyspnea',
      'Pericardial friction rub',
      'Palpitations',
      'General malaise or fatigue'
    ],
    treatment: [
      {
        title: 'Standard Care',
        options: [
          'High-dose NSAIDs and Colchicine (Management per standard clinical protocol)',
          'Treatment of underlying cause (infectious, autoimmune, etc.)'
        ]
      }
    ],
    importantNotes: []
  },
  {
    id: 'tamponade-001',
    name: 'CARDIAC TAMPONADE & EFFUSION',
    system: MedicalSystem.Emergency,
    category: 'Pericardial Emergency',
    symptoms: [
      'Effusion: Dyspnea, chest discomfort, fatigue, cough, edema',
      'Tamponade (EMERGENCY): Severe dyspnea at rest, Tachycardia',
      'Hypotension (low BP)',
      'Jugular venous distension (elevated JVP)',
      'Pulsus paradoxus (>10 mmHg drop in SBP on inspiration)',
      'Muffled heart sounds',
      'Weak/rapid pulse',
      'Shock symptoms: confusion, cold extremities'
    ],
    treatment: [
      {
        title: 'I. Emergency Management of Tamponade',
        options: [
          'Primary survey: ABCDE approach',
          'Positioning: Bed rest with legs elevated',
          'Establish large-bore IV access; Vital signs monitoring',
          'Supplemental oxygen if SpO₂ < 90%'
        ]
      },
      {
        title: 'II. Definitive Therapy',
        options: [
          'Urgent percutaneous pericardiocentesis',
          'Surgical intervention if required (recurrent/loculated)'
        ]
      }
    ],
    importantNotes: [
      'Cardiac tamponade is a medical emergency.',
      'Beck’s triad is rarely fully present.'
    ]
  },
  {
    id: 'dcm-001',
    name: 'DILATED CARDIOMYOPATHY (DCM)',
    system: MedicalSystem.Cardiovascular,
    category: 'Cardiomyopathy',
    symptoms: [
      'Dyspnea (exertion to rest)',
      'Orthopnea',
      'Paroxysmal nocturnal dyspnea',
      'Fatigue and weakness',
      'Peripheral edema',
      'Ascites',
      'Palpitations (AF, VT)',
      'Syncope (arrhythmic)',
      'Jugular venous distension',
      'Hepatomegaly'
    ],
    treatment: [
      {
        title: '1. Initial Supportive Care',
        options: [
          'Oxygen via face mask if SpO₂ < 90%',
          'Monitoring: BP, HR, RR, SpO₂'
        ]
      },
      {
        title: '2. Disease-Modifying Therapy',
        options: [
          'Beta-blockers: Indicated unless contraindicated',
          'ACE Inhibitors / ARBs / ARNI (Sacubitril/Valsartan preferred)',
          'Aldosterone Receptor Antagonists: Spironolactone or Eplerenone'
        ]
      },
      {
        title: '3. Heart Rate Reduction',
        options: [
          'Ivabradine (if SR, HR >70, LVEF <35%)'
        ]
      },
      {
        title: '4. Adjuncts',
        options: [
          'Digoxin (Second-line; for hospitalizations or rate control in AF)',
          'Vasodilator: Hydralazine + Nitrate (Black patients with HFrEF)',
          'Diuretics for congestion'
        ]
      }
    ],
    importantNotes: [
      'Avoid combination of ACEI + ARB + Aldosterone antagonist (hyperkalemia risk).'
    ]
  },
  {
    id: 'hcm-001',
    name: 'HYPERTROPHIC CARDIOMYOPATHY (HCM)',
    system: MedicalSystem.Cardiovascular,
    category: 'Cardiomyopathy',
    symptoms: [
      'Dyspnea (most common)',
      'Chest pain (angina)',
      'Palpitations (arrhythmias)',
      'Syncope or presyncope (often exertional)',
      'Fatigue',
      'Sudden cardiac arrest'
    ],
    treatment: [
      {
        title: '1. General Measures',
        options: [
          'Avoid dehydration; Maintain healthy weight',
          'Avoid excessive alcohol; Avoid strenuous physical activity'
        ]
      },
      {
        title: '2. Sudden Cardiac Death (SCD) Prevention',
        options: [
          'Automated Implantable Cardioverter-Defibrillator (AICD)',
          'Indications: Prior VF, sustained VT, previous cardiac arrest'
        ]
      },
      {
        title: '3. Pharmacological Treatment (1st/2nd Line)',
        options: [
          'First-Line Beta-Blockers: Tab. Propranolol (20-80mg every 8-12h), Tab. Atenolol (25-150mg OD), OR Tab. Nadolol (40-80mg OD/BD)',
          'Second-Line (Non-DHP CCBs): Tab. Verapamil (40mg every 8h, max 480mg/day), OR Tab. Diltiazem (60mg every 8h, max 460mg/day)'
        ]
      },
      {
        title: 'Persistent Symptoms / Volume Overload',
        options: [
          'Obstructive HCM: Tab. Disopyramide 200–250 mg BD (Max 600mg)',
          'Volume Overload: Tab. Furosemide 20–40 mg OD'
        ]
      }
    ],
    importantNotes: [
      'DRUGS TO BE AVOIDED in LVOT obstruction: High-dose diuretics, Digoxin, Spironolactone, ACEI/ARB, Dihydropyridine CCBs, Vasodilators, Positive inotropes.'
    ]
  },
  {
    id: 'rcm-001',
    name: 'RESTRICTIVE CARDIOMYOPATHY (RCM)',
    system: MedicalSystem.Cardiovascular,
    category: 'Cardiomyopathy',
    symptoms: [
      'Fatigue and weakness',
      'Exercise intolerance',
      'Dyspnea',
      'Peripheral edema',
      'Ascites',
      'Jugular venous distension',
      'Hepatomegaly',
      'Palpitations'
    ],
    treatment: [
      {
        title: 'A. Diuretics (First-line for CHF in RCM)',
        options: [
          'Furosemide (Lasix): 20–40 mg PO OD (Max 240 mg/day)',
          'Hydrochlorothiazide (Diuza): 12.5–100 mg/day',
          'Spironolactone: 25 mg PO OD'
        ]
      },
      {
        title: 'B. Management of Arrhythmias (AF)',
        options: [
          'Early Cardioversion if unstable',
          'Rate Control: Verapamil (40mg TDS, max 480mg/day)',
          'Rhythm Control: Sotalol (80mg BD) OR Amiodarone (100–200mg OD)'
        ]
      },
      {
        title: 'C. Disease-Specific Therapy',
        options: [
          'Amyloidosis (ATTR/AL): Tafamidis (80mg meglumine or 61mg once daily); AL: Chemo/Stem cell transplant',
          'Hemochromatosis: Phlebotomy; Chelation (deferoxamine)',
          'Sarcoidosis: Corticosteroids (Prednisone 0.5–1 mg/kg/day)',
          'Hypereosinophilic: High dose steroids; Interferon-α; Hydroxyurea'
        ]
      }
    ],
    importantNotes: [
      'Digoxin is contraindicated in RCM (Amyloidosis/Sarcoidosis).'
    ]
  }
];
