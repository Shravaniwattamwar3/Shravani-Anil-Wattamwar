export type MetricType = 
  | 'employmentRate' 
  | 'skillGapIntensity' 
  | 'completionRate' 
  | 'retentionRate';

export type IndustrySector = 
  | 'all'
  | 'automotive'
  | 'it_electronics'
  | 'healthcare'
  | 'agriculture'
  | 'bfsi'
  | 'green_energy'
  | 'logistics';

export type DemographicGroup = 
  | 'all'
  | 'female'
  | 'rural'
  | 'youth_18_24'
  | 'sc_st_obc';

export type AdministrativeDivision = 
  | 'Konkan'
  | 'Pune'
  | 'Nashik'
  | 'Chhatrapati Sambhajinagar'
  | 'Amravati'
  | 'Nagpur';

export interface SkillGapItem {
  id: string;
  name: string;
  category: 'Technical' | 'Soft Skills' | 'Digital & Automation' | 'Domain Specific';
  severity: 'Critical' | 'High' | 'Moderate';
  affectedTrainees: number;
  gapPercentage: number;
  employerDemandSurge: string;
  recommendedAction: string;
}

export interface AffectedProgram {
  code: string;
  name: string;
  enrolled: number;
  certified: number;
  placed: number;
  placementRate: number;
  primaryDeficit: string;
}

export interface DistrictData {
  id: string;
  name: string;
  marathiName: string;
  division: AdministrativeDivision;
  totalTrainees: number;
  certifiedTrainees: number;
  employedTrainees: number;
  selfEmployedTrainees: number;
  seekingEmploymentTrainees: number;
  droppedOutTrainees: number;
  untraceableTrainees: number; // Tracking leakage
  furtherEducationTrainees: number;
  
  // Rates in percentage (0 - 100)
  completionRate: number; // certified / total
  employmentRate: number; // employed / certified
  selfEmploymentRate: number; // self-employed / certified
  retentionRate: number; // 6-month retention rate of employed
  threeMonthRetentionRate: number;
  twelveMonthRetentionRate: number;
  skillGapIntensity: number; // 0 - 100 severity index

  topSkillGap: string;
  topSkillGaps: SkillGapItem[];
  mostAffectedPrograms: AffectedProgram[];
  recommendedIntervention: string;
  interventionStrategy: {
    priority: 'Immediate (0-30 Days)' | 'Medium-term (1-3 Months)' | 'Long-term (Policy Reform)';
    keyActions: string[];
    partnerAgencies: string[];
    budgetEstimateLakhs: number;
    expectedOutcomeLift: string;
  };

  // Industrial & Skilling Ecosystem Context
  primaryIndustrialClusters: string[];
  activeTrainingCentres: number;
  averageStartingSalaryMonthly: number;
  femaleParticipationRate: number;
  epfoVerificationRate: number; // % of wage employed verified via EPFO
}

export interface VerificationCandidate {
  id: string;
  name: string;
  aadhaarMasked: string;
  district: string;
  sector: string;
  courseName: string;
  completionDate: string;
  certificationStatus: 'Certified' | 'Assessment Pending' | 'Dropout';
  employmentStatus: 'EPFO Verified' | 'Self-Employed (Udyam)' | 'Apprentice (NAPS)' | 'Underemployed' | 'Unverified / Contact Lost';
  uanNumber?: string;
  employerName?: string;
  monthlySalary?: number;
  retentionMonths: number;
  lastVerificationDate: string;
  verificationSource: 'EPFO UAN' | 'DigiLocker' | 'GSTN / Udyam' | 'AI WhatsApp Pulse' | 'Field DSC Survey';
}

export interface OutcomeStageNode {
  id: string;
  title: string;
  stageNumber: number;
  category: 'input' | 'training' | 'assessment' | 'placement' | 'retention' | 'leakage';
  count: number;
  percentageOfEnrolled: number;
  description: string;
  riskFactor?: string;
  trackingMechanism: string;
  childrenIds?: string[];
}
