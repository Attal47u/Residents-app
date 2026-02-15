
export enum MedicalSystem {
  Cardiovascular = 'Cardiovascular',
  Neurology = 'Neurology',
  Respiratory = 'Respiratory',
  Endocrine = 'Endocrine',
  Infectious = 'Infectious',
  Gastrointestinal = 'Gastrointestinal',
  Emergency = 'Emergency'
}

export interface TreatmentStep {
  title: string;
  options: string[];
}

export interface MedicalProtocol {
  id: string;
  name: string;
  system: MedicalSystem;
  category: string;
  symptoms: string[];
  treatment: TreatmentStep[];
  importantNotes: string[];
}

export interface SystemTheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  bgLight: string;
  iconBg: string;
}
